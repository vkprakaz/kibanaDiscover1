/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import _ from 'lodash';
import { createHashHistory } from 'history';
import { ScopedHistory, AppMountParameters } from 'kibana/public';
import { UiActionsStart } from 'src/plugins/ui_actions/public';
import { OrderviewServices } from './build_services';
import { createGetterSetter } from '../../../src/plugins/kibana_utils/public';
import { search } from '../../../src/plugins/data/public';
import { DocViewsRegistry } from './application/doc_views/doc_views_registry';

let angularModule: ng.IModule | null = null;
let services: OrderviewServices | null = null;
let uiActions: UiActionsStart;

/**
 * set bootstrapped inner angular module
 */
export function setAngularModule(module: ng.IModule) {
  angularModule = module;
}

/**
 * get boostrapped inner angular module
 */
export function getAngularModule(): ng.IModule {
  if (!angularModule) {
    throw new Error('Orderview angular module not yet available');
  }
  return angularModule;
}

export function getServices(): OrderviewServices {
  if (!services) {
    throw new Error('Orderview services are not yet available');
  }
  return services;
}

export function setServices(newServices: OrderviewServices) {
  services = newServices;
}

export const setUiActions = (pluginUiActions: UiActionsStart) => (uiActions = pluginUiActions);
export const getUiActions = () => uiActions;

export const [getHeaderActionMenuMounter, setHeaderActionMenuMounter] = createGetterSetter<
  AppMountParameters['setHeaderActionMenu']
>('headerActionMenuMounter');

export const [getUrlTracker, setUrlTracker] = createGetterSetter<{
  setTrackedUrl: (url: string) => void;
  restorePreviousUrl: () => void;
}>('urlTracker');

export const [getDocViewsRegistry, setDocViewsRegistry] = createGetterSetter<DocViewsRegistry>(
  'DocViewsRegistry'
);

/**
 * Makes sure orderview and context are using one instance of history.
 */
export const getHistory = _.once(() => {
  const history = createHashHistory();
  history.listen(() => {
    // keep at least one listener so that `history.location` always in sync
  });
  return history;
});

/**
 * Orderview currently uses two `history` instances: one from Kibana Platform and
 * another from `history` package. Below function is used every time Orderview
 * app is loaded to synchronize both instances.
 *
 * This helper is temporary until https://github.com/elastic/kibana/issues/65161 is resolved.
 */
export const syncHistoryLocations = () => {
  const h = getHistory();
  Object.assign(h.location, createHashHistory().location);
  return h;
};

export const [getScopedHistory, setScopedHistory] = createGetterSetter<ScopedHistory>(
  'scopedHistory'
);

export const { tabifyAggResponse } = search;
export { unhashUrl, redirectWhenMissing } from '../../../src/plugins/kibana_utils/public';
export { formatMsg, formatStack, subscribeWithScope } from '../../../src/plugins/kibana_legacy/public';

// EXPORT types
export {
  IndexPatternsContract,
  IIndexPattern,
  IndexPattern,
  indexPatterns,
  IFieldType,
  ISearchSource,
  EsQuerySortValue,
  SortDirection,
} from '../../../src/plugins/data/public';
