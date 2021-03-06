/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React from 'react';
import { mountWithIntl } from '@kbn/test/jest';
import { EuiContextMenuPanel, EuiPopover, EuiContextMenuItem } from '@elastic/eui';
import { findTestSubject } from '@kbn/test/jest';
import { getStubIndexPattern } from '../../../../../../../../src/plugins/data/public/index_patterns/index_pattern.stub';
import { coreMock } from '../../../../../../../../src/core/public/mocks';
import { OrderviewServices } from '../../../../../build_services';
// @ts-expect-error
import stubbedLogstashFields from '../../../../../__fixtures__/logstash_fields';
import { OrderviewIndexPatternManagement } from './orderview_index_pattern_management';

const mockServices = ({
  history: () => ({
    location: {
      search: '',
    },
  }),
  capabilities: {
    visualize: {
      show: true,
    },
    orderview: {
      save: false,
    },
  },
  core: {
    application: {
      navigateToApp: jest.fn(),
    },
  },
  uiSettings: {
    get: (key: string) => {
      if (key === 'fields:popularLimit') {
        return 5;
      }
    },
  },
  indexPatternFieldEditor: {
    openEditor: jest.fn(),
    userPermissions: {
      editIndexPattern: () => {
        return true;
      },
    },
  },
} as unknown) as OrderviewServices;

describe('Orderview IndexPattern Management', () => {
  const indexPattern = getStubIndexPattern(
    'logstash-*',
    (cfg: unknown) => cfg,
    'time',
    stubbedLogstashFields(),
    coreMock.createSetup()
  );

  const editField = jest.fn();

  const mountComponent = () => {
    return mountWithIntl(
      <OrderviewIndexPatternManagement
        services={mockServices}
        editField={editField}
        selectedIndexPattern={indexPattern}
        useNewFieldsApi={true}
      />
    );
  };

  test('renders correctly', () => {
    const component = mountComponent();
    expect(component).toMatchSnapshot();
    expect(component.find(EuiPopover).length).toBe(1);
  });

  test('click on a button opens popover', () => {
    const component = mountComponent();
    expect(component.find(EuiContextMenuPanel).length).toBe(0);

    const button = findTestSubject(component, 'orderviewIndexPatternActions');
    button.simulate('click');

    expect(component.find(EuiContextMenuPanel).length).toBe(1);
    expect(component.find(EuiContextMenuItem).length).toBe(2);
  });

  test('click on an add button executes editField callback', () => {
    const component = mountComponent();
    const button = findTestSubject(component, 'orderviewIndexPatternActions');
    button.simulate('click');

    const addButton = findTestSubject(component, 'indexPattern-add-field');
    addButton.simulate('click');
    expect(editField).toHaveBeenCalledWith(undefined);
  });

  test('click on a manage button navigates away from orderview', () => {
    const component = mountComponent();
    const button = findTestSubject(component, 'orderviewIndexPatternActions');
    button.simulate('click');

    const manageButton = findTestSubject(component, 'indexPattern-manage-field');
    manageButton.simulate('click');
    expect(mockServices.core.application.navigateToApp).toHaveBeenCalled();
  });
});
