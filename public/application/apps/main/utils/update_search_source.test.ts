/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { updateSearchSource } from './update_search_source';
import { createSearchSourceMock } from '../../../../../../../../src/plugins/data/common/search/search_source/mocks';
import { indexPatternMock } from '../../../../__mocks__/index_pattern';
import { IUiSettingsClient } from 'kibana/public';
import { OrderviewServices } from '../../../../build_services';
import { dataPluginMock } from '../../../../../../../../src/plugins/data/public/mocks';
import { SAMPLE_SIZE_SETTING } from '../../../../../common';
import { SortOrder } from '../../../../saved_searches/types';

describe('updateSearchSource', () => {
  test('updates a given search source', async () => {
    const persistentSearchSourceMock = createSearchSourceMock({});
    const volatileSearchSourceMock = createSearchSourceMock({});
    volatileSearchSourceMock.setParent(persistentSearchSourceMock);
    const sampleSize = 250;
    updateSearchSource(volatileSearchSourceMock, false, {
      indexPattern: indexPatternMock,
      services: ({
        data: dataPluginMock.createStartContract(),
        timefilter: {
          createFilter: jest.fn(),
        },
        uiSettings: ({
          get: (key: string) => {
            if (key === SAMPLE_SIZE_SETTING) {
              return sampleSize;
            }
            return false;
          },
        } as unknown) as IUiSettingsClient,
      } as unknown) as OrderviewServices,
      sort: [] as SortOrder[],
      useNewFieldsApi: false,
    });
    expect(persistentSearchSourceMock.getField('index')).toEqual(indexPatternMock);
    expect(volatileSearchSourceMock.getField('size')).toEqual(sampleSize);
    expect(volatileSearchSourceMock.getField('fields')).toBe(undefined);
  });

  test('updates a given search source with the usage of the new fields api', async () => {
    const persistentSearchSourceMock = createSearchSourceMock({});
    const volatileSearchSourceMock = createSearchSourceMock({});
    volatileSearchSourceMock.setParent(persistentSearchSourceMock);
    const sampleSize = 250;
    updateSearchSource(volatileSearchSourceMock, false, {
      indexPattern: indexPatternMock,
      services: ({
        data: dataPluginMock.createStartContract(),
        timefilter: {
          createFilter: jest.fn(),
        },
        uiSettings: ({
          get: (key: string) => {
            if (key === SAMPLE_SIZE_SETTING) {
              return sampleSize;
            }
            return false;
          },
        } as unknown) as IUiSettingsClient,
      } as unknown) as OrderviewServices,
      sort: [] as SortOrder[],
      useNewFieldsApi: true,
    });
    expect(persistentSearchSourceMock.getField('index')).toEqual(indexPatternMock);
    expect(volatileSearchSourceMock.getField('size')).toEqual(sampleSize);
    expect(volatileSearchSourceMock.getField('fields')).toEqual([
      { field: '*', include_unmapped: 'true' },
    ]);
    expect(volatileSearchSourceMock.getField('fieldsFromSource')).toBe(undefined);
  });

  test('updates a given search source when showUnmappedFields option is set to true', async () => {
    const persistentSearchSourceMock = createSearchSourceMock({});
    const volatileSearchSourceMock = createSearchSourceMock({});
    volatileSearchSourceMock.setParent(persistentSearchSourceMock);
    const sampleSize = 250;
    updateSearchSource(volatileSearchSourceMock, false, {
      indexPattern: indexPatternMock,
      services: ({
        data: dataPluginMock.createStartContract(),
        timefilter: {
          createFilter: jest.fn(),
        },
        uiSettings: ({
          get: (key: string) => {
            if (key === SAMPLE_SIZE_SETTING) {
              return sampleSize;
            }
            return false;
          },
        } as unknown) as IUiSettingsClient,
      } as unknown) as OrderviewServices,
      sort: [] as SortOrder[],
      useNewFieldsApi: true,
    });
    expect(persistentSearchSourceMock.getField('index')).toEqual(indexPatternMock);
    expect(volatileSearchSourceMock.getField('size')).toEqual(sampleSize);
    expect(volatileSearchSourceMock.getField('fields')).toEqual([
      { field: '*', include_unmapped: 'true' },
    ]);
    expect(volatileSearchSourceMock.getField('fieldsFromSource')).toBe(undefined);
  });

  test('does not explicitly request fieldsFromSource when not using fields API', async () => {
    const persistentSearchSourceMock = createSearchSourceMock({});
    const volatileSearchSourceMock = createSearchSourceMock({});
    volatileSearchSourceMock.setParent(persistentSearchSourceMock);
    const sampleSize = 250;
    updateSearchSource(volatileSearchSourceMock, false, {
      indexPattern: indexPatternMock,
      services: ({
        data: dataPluginMock.createStartContract(),
        timefilter: {
          createFilter: jest.fn(),
        },
        uiSettings: ({
          get: (key: string) => {
            if (key === SAMPLE_SIZE_SETTING) {
              return sampleSize;
            }
            return false;
          },
        } as unknown) as IUiSettingsClient,
      } as unknown) as OrderviewServices,
      sort: [] as SortOrder[],
      useNewFieldsApi: false,
    });
    expect(persistentSearchSourceMock.getField('index')).toEqual(indexPatternMock);
    expect(volatileSearchSourceMock.getField('size')).toEqual(sampleSize);
    expect(volatileSearchSourceMock.getField('fields')).toEqual(undefined);
    expect(volatileSearchSourceMock.getField('fieldsFromSource')).toBe(undefined);
  });
});
