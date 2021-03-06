/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { OrderviewSetup, OrderviewStart } from '.';

export type Setup = jest.Mocked<OrderviewSetup>;
export type Start = jest.Mocked<OrderviewStart>;

const createSetupContract = (): Setup => {
  const setupContract: Setup = {
    docViews: {
      addDocView: jest.fn(),
    },
    locator: {
      getLocation: jest.fn(),
      getUrl: jest.fn(),
      useUrl: jest.fn(),
      navigate: jest.fn(),
      extract: jest.fn(),
      inject: jest.fn(),
      telemetry: jest.fn(),
      migrations: {},
    },
  };
  return setupContract;
};

const createStartContract = (): Start => {
  const startContract: Start = {
    savedSearchLoader: {} as OrderviewStart['savedSearchLoader'],
    urlGenerator: ({
      createUrl: jest.fn(),
    } as unknown) as OrderviewStart['urlGenerator'],
    locator: {
      getLocation: jest.fn(),
      getUrl: jest.fn(),
      useUrl: jest.fn(),
      navigate: jest.fn(),
      extract: jest.fn(),
      inject: jest.fn(),
      telemetry: jest.fn(),
      migrations: {},
    },
  };
  return startContract;
};

export const orderviewPluginMock = {
  createSetupContract,
  createStartContract,
};
