/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
import React, { useCallback, useEffect } from 'react';
import { History } from 'history';
import { OrderviewLayout } from './components/layout';
import { setBreadcrumbsTitle } from '../../helpers/breadcrumbs';
import { addHelpMenuToAppChrome } from '../../components/help_menu/help_menu_util';
import { useOrderviewState } from './services/use_orderview_state';
import { useUrl } from './services/use_url';
import { IndexPattern, IndexPatternAttributes, SavedObject } from '../../../../../data/common';
import { OrderviewServices } from '../../../build_services';
import { SavedSearch } from '../../../saved_searches';

const OrderviewLayoutMemoized = React.memo(OrderviewLayout);

export interface OrderviewMainProps {
  /**
   * Current IndexPattern
   */
  indexPattern: IndexPattern;

  opts: {
    /**
     * Use angular router for navigation
     */
    navigateTo: () => void;
    /**
     * Instance of browser history
     */
    history: History;
    /**
     * List of available index patterns
     */
    indexPatternList: Array<SavedObject<IndexPatternAttributes>>;
    /**
     * Kibana core services used by orderview
     */
    services: OrderviewServices;
    /**
     * Current instance of SavedSearch
     */
    savedSearch: SavedSearch;
  };
}

export function OrderviewMainApp(props: OrderviewMainProps) {
  const { services, history, navigateTo, indexPatternList } = props.opts;
  const { chrome, docLinks, uiSettings: config, data } = services;

  /**
   * State related logic
   */
  const {
    data$,
    indexPattern,
    onChangeIndexPattern,
    onUpdateQuery,
    refetch$,
    resetSavedSearch,
    savedSearch,
    searchSource,
    state,
    stateContainer,
  } = useOrderviewState({
    services,
    history,
    initialIndexPattern: props.indexPattern,
    initialSavedSearch: props.opts.savedSearch,
  });

  /**
   * Url / Routing logic
   */
  useUrl({ history, resetSavedSearch });

  /**
   * SavedSearch depended initializing
   */
  useEffect(() => {
    const pageTitleSuffix = savedSearch.id && savedSearch.title ? `: ${savedSearch.title}` : '';
    chrome.docTitle.change(`Orderview${pageTitleSuffix}`);
    setBreadcrumbsTitle(savedSearch, chrome);
    return () => {
      data.search.session.clear();
    };
  }, [savedSearch, chrome, docLinks, refetch$, stateContainer, data, config]);

  /**
   * Initializing syncing with state and help menu
   */
  useEffect(() => {
    addHelpMenuToAppChrome(chrome, docLinks);
  }, [stateContainer, chrome, docLinks]);

  const resetCurrentSavedSearch = useCallback(() => {
    resetSavedSearch(savedSearch.id);
  }, [resetSavedSearch, savedSearch]);

  return (
    <OrderviewLayoutMemoized
      indexPattern={indexPattern}
      indexPatternList={indexPatternList}
      onChangeIndexPattern={onChangeIndexPattern}
      onUpdateQuery={onUpdateQuery}
      resetSavedSearch={resetCurrentSavedSearch}
      navigateTo={navigateTo}
      savedSearch={savedSearch}
      savedSearchData$={data$}
      savedSearchRefetch$={refetch$}
      searchSource={searchSource}
      services={services}
      state={state}
      stateContainer={stateContainer}
    />
  );
}
