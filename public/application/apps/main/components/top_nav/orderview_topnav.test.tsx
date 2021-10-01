/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React from 'react';
import { shallowWithIntl } from '@kbn/test/jest';
import { indexPatternMock } from '../../../../../__mocks__/index_pattern';
import { savedSearchMock } from '../../../../../__mocks__/saved_search';
import { OrderviewTopNav, OrderviewTopNavProps } from './orderview_topnav';
import { TopNavMenuData } from '../../../../../../../navigation/public';
import { ISearchSource, Query } from '../../../../../../../../src/plugins/data/common';
import { GetStateReturn } from '../../services/orderview_state';
import { setHeaderActionMenuMounter } from '../../../../../kibana_services';
import { orderviewServiceMock } from '../../../../../__mocks__/services';

setHeaderActionMenuMounter(jest.fn());

function getProps(savePermissions = true): OrderviewTopNavProps {
  orderviewServiceMock.capabilities.orderview!.save = savePermissions;

  return {
    stateContainer: {} as GetStateReturn,
    indexPattern: indexPatternMock,
    savedSearch: savedSearchMock,
    navigateTo: jest.fn(),
    services: orderviewServiceMock,
    query: {} as Query,
    savedQuery: '',
    updateQuery: jest.fn(),
    onOpenInspector: jest.fn(),
    searchSource: {} as ISearchSource,
    resetSavedSearch: () => {},
  };
}

describe('Orderview topnav component', () => {
  test('generated config of TopNavMenu config is correct when orderview save permissions are assigned', () => {
    const props = getProps(true);
    const component = shallowWithIntl(<OrderviewTopNav {...props} />);
    const topMenuConfig = component.props().config.map((obj: TopNavMenuData) => obj.id);
    expect(topMenuConfig).toEqual(['options', 'new', 'save', 'open', 'share', 'inspect']);
  });

  test('generated config of TopNavMenu config is correct when no orderview save permissions are assigned', () => {
    const props = getProps(false);
    const component = shallowWithIntl(<OrderviewTopNav {...props} />);
    const topMenuConfig = component.props().config.map((obj: TopNavMenuData) => obj.id);
    expect(topMenuConfig).toEqual(['options', 'new', 'open', 'share', 'inspect']);
  });
});
