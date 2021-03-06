/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { auto } from 'angular';
import { i18n } from '@kbn/i18n';
import { UiActionsStart } from 'src/plugins/ui_actions/public';
import { getServices } from '../../kibana_services';
import {
  EmbeddableFactoryDefinition,
  Container,
  ErrorEmbeddable,
} from '../../../../../src/plugins/embeddable/public';

import { TimeRange } from '../../../../../src/plugins/data/public';

import { SearchInput, SearchOutput } from './types';
import { SEARCH_EMBEDDABLE_TYPE } from './constants';
import { SavedSearchEmbeddable } from './saved_search_embeddable';

interface StartServices {
  executeTriggerActions: UiActionsStart['executeTriggerActions'];
  isEditable: () => boolean;
}

export class SearchEmbeddableFactory
  implements EmbeddableFactoryDefinition<SearchInput, SearchOutput, SavedSearchEmbeddable> {
  public readonly type = SEARCH_EMBEDDABLE_TYPE;
  private $injector: auto.IInjectorService | null;
  private getInjector: () => Promise<auto.IInjectorService> | null;
  public readonly savedObjectMetaData = {
    name: i18n.translate('orderview.savedSearch.savedObjectName', {
      defaultMessage: 'Saved search',
    }),
    type: 'ordersearch',
    getIconForSavedObject: () => 'orderviewApp',
  };

  constructor(
    private getStartServices: () => Promise<StartServices>,
    getInjector: () => Promise<auto.IInjectorService>
  ) {
    this.$injector = null;
    this.getInjector = getInjector;
  }

  public canCreateNew() {
    return false;
  }

  public isEditable = async () => {
    return (await this.getStartServices()).isEditable();
  };

  public getDisplayName() {
    return i18n.translate('orderview.embeddable.search.displayName', {
      defaultMessage: 'search',
    });
  }

  public createFromSavedObject = async (
    savedObjectId: string,
    input: Partial<SearchInput> & { id: string; timeRange: TimeRange },
    parent?: Container
  ): Promise<SavedSearchEmbeddable | ErrorEmbeddable> => {
    if (!this.$injector) {
      this.$injector = await this.getInjector();
    }

    const filterManager = getServices().filterManager;

    const url = await getServices().getSavedSearchUrlById(savedObjectId);
    const editUrl = getServices().addBasePath(`/app/orderview${url}`);
    try {
      const savedObject = await getServices().getSavedSearchById(savedObjectId);
      const indexPattern = savedObject.searchSource.getField('index');
      const { executeTriggerActions } = await this.getStartServices();
      const { SavedSearchEmbeddable: SavedSearchEmbeddableClass } = await import(
        './saved_search_embeddable'
      );
      return new SavedSearchEmbeddableClass(
        {
          savedSearch: savedObject,
          editUrl,
          editPath: url,
          filterManager,
          editable: getServices().capabilities.orderview.save as boolean,
          indexPatterns: indexPattern ? [indexPattern] : [],
          services: getServices(),
        },
        input,
        executeTriggerActions,
        parent
      );
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
      return new ErrorEmbeddable(e, input, parent);
    }
  };

  public async create(input: SearchInput) {
    return new ErrorEmbeddable('Saved searches can only be created from a saved object', input);
  }
}
