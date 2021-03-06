/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { updateSearchSource } from './update_search_source';
import { IndexPattern } from '../../../../../../../../src/plugins/data/public';
import { SavedSearch } from '../../../../saved_searches';
import { AppState } from '../services/orderview_state';
import { SortOrder } from '../../../../saved_searches/types';
import { SavedObjectSaveOpts } from '../../../../../../saved_objects/public';
import { OrderviewServices } from '../../../../build_services';

/**
 * Helper function to update and persist the given savedSearch
 */
export async function persistSavedSearch(
  savedSearch: SavedSearch,
  {
    indexPattern,
    onError,
    onSuccess,
    services,
    saveOptions,
    state,
  }: {
    indexPattern: IndexPattern;
    onError: (error: Error, savedSearch: SavedSearch) => void;
    onSuccess: (id: string) => void;
    saveOptions: SavedObjectSaveOpts;
    services: OrderviewServices;
    state: AppState;
  }
) {
  updateSearchSource(savedSearch.searchSource, true, {
    indexPattern,
    services,
    sort: state.sort as SortOrder[],
    useNewFieldsApi: false,
  });

  savedSearch.columns = state.columns || [];
  savedSearch.sort = (state.sort as SortOrder[]) || [];
  if (state.grid) {
    savedSearch.grid = state.grid;
  }
  if (typeof state.hideChart !== 'undefined') {
    savedSearch.hideChart = state.hideChart;
  }

  try {
    const id = await savedSearch.save(saveOptions);
    onSuccess(id);
    return { id };
  } catch (saveError) {
    onError(saveError, savedSearch);
    return { error: saveError };
  }
}
