/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { ChromeStart } from 'kibana/public';
import { i18n } from '@kbn/i18n';
import { SavedSearch } from '../../saved_searches';

export function getRootBreadcrumbs() {
  return [
    {
      text: i18n.translate('orderview.rootBreadcrumb', {
        defaultMessage: 'Orderview',
      }),
      href: '#/',
    },
  ];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getSavedSearchBreadcrumbs($route: any) {
  return [
    ...getRootBreadcrumbs(),
    {
      text: $route.current.locals.savedObjects.savedSearch.id,
    },
  ];
}

/**
 * Helper function to set the Orderview's breadcrumb
 * if there's an active savedSearch, its title is appended
 */
export function setBreadcrumbsTitle(savedSearch: SavedSearch, chrome: ChromeStart) {
  const orderviewBreadcrumbsTitle = i18n.translate('orderview.orderviewBreadcrumbTitle', {
    defaultMessage: 'Orderview',
  });

  if (savedSearch.id && savedSearch.title) {
    chrome.setBreadcrumbs([
      {
        text: orderviewBreadcrumbsTitle,
        href: '#/',
      },
      { text: savedSearch.title },
    ]);
  } else {
    chrome.setBreadcrumbs([
      {
        text: orderviewBreadcrumbsTitle,
      },
    ]);
  }
}
