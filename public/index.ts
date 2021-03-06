/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { PluginInitializerContext } from 'kibana/public';
import { OrderviewPlugin } from './plugin';

export { OrderviewSetup, OrderviewStart } from './plugin';
export function plugin(initializerContext: PluginInitializerContext) {
  return new OrderviewPlugin(initializerContext);
}

export { SavedSearch, SavedSearchLoader, createSavedSearchesLoader } from './saved_searches';
export { ISearchEmbeddable, SEARCH_EMBEDDABLE_TYPE, SearchInput } from './application/embeddable';
export { loadSharingDataHelpers } from './shared';

export { ORDERVEW_APP_URL_GENERATOR, OrderviewUrlGeneratorState } from './url_generator';
export { OrderviewAppLocator, OrderviewAppLocatorParams } from './locator';
