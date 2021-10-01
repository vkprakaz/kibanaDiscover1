/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
import { useMemo, useEffect } from 'react';
import { History } from 'history';
import { OrderviewSearchSessionManager } from './orderview_search_session';
import { createSearchSessionRestorationDataProvider, GetStateReturn } from './orderview_state';
import { noSearchSessionStorageCapabilityMessage } from '../../../../../../../src/plugins/data/public';
import { OrderviewServices } from '../../../../build_services';
import { SavedSearch } from '../../../../saved_searches';

export function useSearchSession({
  services,
  history,
  stateContainer,
  savedSearch,
}: {
  services: OrderviewServices;
  stateContainer: GetStateReturn;
  history: History;
  savedSearch: SavedSearch;
}) {
  const { data, capabilities } = services;
  /**
   * Search session logic
   */
  const searchSessionManager = useMemo(
    () =>
      new OrderviewSearchSessionManager({
        history,
        session: data.search.session,
      }),
    [data.search.session, history]
  );

  useEffect(() => {
    data.search.session.enableStorage(
      createSearchSessionRestorationDataProvider({
        appStateContainer: stateContainer.appStateContainer,
        data,
        getSavedSearch: () => savedSearch,
      }),
      {
        isDisabled: () =>
          capabilities.orderview.storeSearchSession
            ? { disabled: false }
            : {
                disabled: true,
                reasonText: noSearchSessionStorageCapabilityMessage,
              },
      }
    );
  }, [
    capabilities.orderview.storeSearchSession,
    data,
    savedSearch,
    stateContainer.appStateContainer,
  ]);

  return searchSessionManager;
}
