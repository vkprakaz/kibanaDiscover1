/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { i18n } from '@kbn/i18n';
import moment from 'moment';
import { showOpenSearchPanel } from './show_open_search_panel';
import { getSharingData, showPublicUrlSwitch } from '../../utils/get_sharing_data';
import { unhashUrl } from '../../../../../../../../src/plugins/kibana_utils/public';
import { OrderviewServices } from '../../../../../build_services';
import { SavedSearch } from '../../../../../saved_searches';
import { onSaveSearch } from './on_save_search';
import { GetStateReturn } from '../../services/orderview_state';
import { IndexPattern, ISearchSource } from '../../../../../kibana_services';
import { openOptionsPopover } from './open_options_popover';

/**
 * Helper function to build the top nav links
 */
export const getTopNavLinks = ({
  indexPattern,
  navigateTo,
  savedSearch,
  services,
  state,
  onOpenInspector,
  searchSource,
  onOpenSavedSearch,
}: {
  indexPattern: IndexPattern;
  navigateTo: (url: string) => void;
  savedSearch: SavedSearch;
  services: OrderviewServices;
  state: GetStateReturn;
  onOpenInspector: () => void;
  searchSource: ISearchSource;
  onOpenSavedSearch: (id: string) => void;
}) => {
  const options = {
    id: 'options',
    label: i18n.translate('orderview.localMenu.localMenu.optionsTitle', {
      defaultMessage: 'Options',
    }),
    description: i18n.translate('orderview.localMenu.optionsDescription', {
      defaultMessage: 'Options',
    }),
    run: (anchorElement: HTMLElement) =>
      openOptionsPopover({
        I18nContext: services.core.i18n.Context,
        anchorElement,
      }),
    testId: 'orderviewOptionsButton',
  };

  const newSearch = {
    id: 'new',
    label: i18n.translate('orderview.localMenu.localMenu.newSearchTitle', {
      defaultMessage: 'New',
    }),
    description: i18n.translate('orderview.localMenu.newSearchDescription', {
      defaultMessage: 'New Search',
    }),
    run: () => navigateTo('/'),
    testId: 'orderviewNewButton',
  };

  const saveSearch = {
    id: 'save',
    label: i18n.translate('orderview.localMenu.saveTitle', {
      defaultMessage: 'Save',
    }),
    description: i18n.translate('orderview.localMenu.saveSearchDescription', {
      defaultMessage: 'Save Search',
    }),
    testId: 'orderviewSaveButton',
    run: () => onSaveSearch({ savedSearch, services, indexPattern, navigateTo, state }),
  };

  const openSearch = {
    id: 'open',
    label: i18n.translate('orderview.localMenu.openTitle', {
      defaultMessage: 'Open',
    }),
    description: i18n.translate('orderview.localMenu.openSavedSearchDescription', {
      defaultMessage: 'Open Saved Search',
    }),
    testId: 'orderviewOpenButton',
    run: () =>
      showOpenSearchPanel({
        onOpenSavedSearch,
        I18nContext: services.core.i18n.Context,
      }),
  };

  const shareSearch = {
    id: 'share',
    label: i18n.translate('orderview.localMenu.shareTitle', {
      defaultMessage: 'Share',
    }),
    description: i18n.translate('orderview.localMenu.shareSearchDescription', {
      defaultMessage: 'Share Search',
    }),
    testId: 'shareTopNavButton',
    run: async (anchorElement: HTMLElement) => {
      if (!services.share) {
        return;
      }
      const sharingData = await getSharingData(
        searchSource,
        state.appStateContainer.getState(),
        services.uiSettings
      );
      services.share.toggleShareContextMenu({
        anchorElement,
        allowEmbed: false,
        allowShortUrl: !!services.capabilities.orderview.createShortUrl,
        shareableUrl: unhashUrl(window.location.href),
        objectId: savedSearch.id,
        objectType: 'search',
        sharingData: {
          ...sharingData,
          // CSV reports can be generated without a saved search so we provide a fallback title
          title:
            savedSearch.title ||
            i18n.translate('orderview.localMenu.fallbackReportTitle', {
              defaultMessage: 'Orderview search [{date}]',
              values: { date: moment().toISOString(true) },
            }),
        },
        isDirty: !savedSearch.id || state.isAppStateDirty(),
        showPublicUrlSwitch,
      });
    },
  };

  const inspectSearch = {
    id: 'inspect',
    label: i18n.translate('orderview.localMenu.inspectTitle', {
      defaultMessage: 'Inspect',
    }),
    description: i18n.translate('orderview.localMenu.openInspectorForSearchDescription', {
      defaultMessage: 'Open Inspector for search',
    }),
    testId: 'openInspectorButton',
    run: () => {
      onOpenInspector();
    },
  };

  return [
    ...(services.capabilities.advancedSettings.save ? [options] : []),
    newSearch,
    ...(services.capabilities.orderview.save ? [saveSearch] : []),
    openSearch,
    shareSearch,
    inspectSearch,
  ];
};
