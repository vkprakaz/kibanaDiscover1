/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React from 'react';
import { shallow } from 'enzyme';

jest.mock('../../../../../kibana_services', () => {
  return {
    getServices: () => ({
      core: { uiSettings: {}, savedObjects: {} },
      addBasePath: (path: string) => path,
    }),
  };
});

import { OpenSearchPanel } from './open_search_panel';

test('render', () => {
  const component = shallow(<OpenSearchPanel onClose={jest.fn()} onOpenSavedSearch={jest.fn()} />);
  expect(component).toMatchSnapshot();
});
