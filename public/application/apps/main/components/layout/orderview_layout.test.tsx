/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React from 'react';
import { Subject, BehaviorSubject } from 'rxjs';
import { mountWithIntl } from '@kbn/test/jest';
import { setHeaderActionMenuMounter } from '../../../../../kibana_services';
import { OrderviewLayout } from './orderview_layout';
import { esHits } from '../../../../../__mocks__/es_hits';
import { indexPatternMock } from '../../../../../__mocks__/index_pattern';
import { savedSearchMock } from '../../../../../__mocks__/saved_search';
import { createSearchSourceMock } from '../../../../../../../../src/plugins/data/common/search/search_source/mocks';
import { IndexPattern, IndexPatternAttributes } from '../../../../../../../../src/plugins/data/common';
import { SavedObject } from '../../../../../../../../src/core/types';
import { indexPatternWithTimefieldMock } from '../../../../../__mocks__/index_pattern_with_timefield';
import { GetStateReturn } from '../../services/orderview_state';
import { OrderviewLayoutProps } from './types';
import { SavedSearchDataSubject } from '../../services/use_saved_search';
import { orderviewServiceMock } from '../../../../../__mocks__/services';
import { FetchStatus } from '../../../../types';

setHeaderActionMenuMounter(jest.fn());

function getProps(indexPattern: IndexPattern): OrderviewLayoutProps {
  const searchSourceMock = createSearchSourceMock({});
  const services = orderviewServiceMock;
  services.data.query.timefilter.timefilter.getTime = () => {
    return { from: '2020-05-14T11:05:13.590', to: '2020-05-14T11:20:13.590' };
  };

  const indexPatternList = ([indexPattern].map((ip) => {
    return { ...ip, ...{ attributes: { title: ip.title } } };
  }) as unknown) as Array<SavedObject<IndexPatternAttributes>>;

  const savedSearch$ = new BehaviorSubject({
    state: FetchStatus.COMPLETE,
    rows: esHits,
    fetchCounter: 1,
    fieldCounts: {},
    hits: Number(esHits.length),
  }) as SavedSearchDataSubject;

  return {
    indexPattern,
    indexPatternList,
    navigateTo: jest.fn(),
    onChangeIndexPattern: jest.fn(),
    onUpdateQuery: jest.fn(),
    resetSavedSearch: jest.fn(),
    savedSearch: savedSearchMock,
    savedSearchData$: savedSearch$,
    savedSearchRefetch$: new Subject(),
    searchSource: searchSourceMock,
    services,
    state: { columns: [] },
    stateContainer: {} as GetStateReturn,
  };
}

describe('Orderview component', () => {
  test('selected index pattern without time field displays no chart toggle', () => {
    const component = mountWithIntl(<OrderviewLayout {...getProps(indexPatternMock)} />);
    expect(component.find('[data-test-subj="orderviewChartToggle"]').exists()).toBeFalsy();
  });
  test('selected index pattern with time field displays chart toggle', () => {
    const component = mountWithIntl(
      <OrderviewLayout {...getProps(indexPatternWithTimefieldMock)} />
    );
    expect(component.find('[data-test-subj="orderviewChartToggle"]').exists()).toBeTruthy();
  });
});
