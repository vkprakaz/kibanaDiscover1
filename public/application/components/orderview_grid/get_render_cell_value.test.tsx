/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React from 'react';
import { ReactWrapper, shallow } from 'enzyme';
import { getRenderCellValueFn } from './get_render_cell_value';
import { indexPatternMock } from '../../../__mocks__/index_pattern';
import { ElasticSearchHit } from '../../doc_views/doc_views_types';

jest.mock('../../../../../kibana_react/public', () => ({
  useUiSetting: () => true,
  withKibana: (comp: ReactWrapper) => {
    return comp;
  },
}));

jest.mock('../../../kibana_services', () => ({
  getServices: () => ({
    uiSettings: {
      get: jest.fn(),
    },
  }),
}));

const rowsSource: ElasticSearchHit[] = [
  {
    _id: '1',
    _index: 'test',
    _type: 'test',
    _score: 1,
    _source: { bytes: 100, extension: '.gz' },
    highlight: {
      extension: ['@kibana-highlighted-field.gz@/kibana-highlighted-field'],
    },
  },
];

const rowsFields: ElasticSearchHit[] = [
  {
    _id: '1',
    _index: 'test',
    _type: 'test',
    _score: 1,
    _source: undefined,
    fields: { bytes: [100], extension: ['.gz'] },
    highlight: {
      extension: ['@kibana-highlighted-field.gz@/kibana-highlighted-field'],
    },
  },
];

const rowsFieldsWithTopLevelObject: ElasticSearchHit[] = [
  {
    _id: '1',
    _index: 'test',
    _type: 'test',
    _score: 1,
    _source: undefined,
    fields: { 'object.value': [100], extension: ['.gz'] },
    highlight: {
      extension: ['@kibana-highlighted-field.gz@/kibana-highlighted-field'],
    },
  },
];

describe('Orderview grid cell rendering', function () {
  it('renders bytes column correctly', () => {
    const OrderviewGridCellValue = getRenderCellValueFn(
      indexPatternMock,
      rowsSource,
      rowsSource.map((row) => indexPatternMock.flattenHit(row)),
      false,
      100
    );
    const component = shallow(
      <OrderviewGridCellValue
        rowIndex={0}
        columnId="bytes"
        isDetails={false}
        isExpanded={false}
        isExpandable={true}
        setCellProps={jest.fn()}
      />
    );
    expect(component.html()).toMatchInlineSnapshot(`"<span>100</span>"`);
  });

  it('renders _source column correctly', () => {
    const OrderviewGridCellValue = getRenderCellValueFn(
      indexPatternMock,
      rowsSource,
      rowsSource.map((row) => indexPatternMock.flattenHit(row)),
      false,
      100
    );
    const component = shallow(
      <OrderviewGridCellValue
        rowIndex={0}
        columnId="_source"
        isDetails={false}
        isExpanded={false}
        isExpandable={true}
        setCellProps={jest.fn()}
      />
    );
    expect(component).toMatchInlineSnapshot(`
      <EuiDescriptionList
        className="dscOrderviewGrid__descriptionList"
        compressed={true}
        type="inline"
      >
        <EuiDescriptionListTitle>
          extension
        </EuiDescriptionListTitle>
        <EuiDescriptionListDescription
          className="dscOrderviewGrid__descriptionListDescription"
          dangerouslySetInnerHTML={
            Object {
              "__html": ".gz",
            }
          }
        />
        <EuiDescriptionListTitle>
          bytes
        </EuiDescriptionListTitle>
        <EuiDescriptionListDescription
          className="dscOrderviewGrid__descriptionListDescription"
          dangerouslySetInnerHTML={
            Object {
              "__html": 100,
            }
          }
        />
      </EuiDescriptionList>
    `);
  });

  it('renders _source column correctly when isDetails is set to true', () => {
    const OrderviewGridCellValue = getRenderCellValueFn(
      indexPatternMock,
      rowsSource,
      rowsSource.map((row) => indexPatternMock.flattenHit(row)),
      false,
      100
    );
    const component = shallow(
      <OrderviewGridCellValue
        rowIndex={0}
        columnId="_source"
        isDetails={true}
        isExpanded={false}
        isExpandable={true}
        setCellProps={jest.fn()}
      />
    );
    expect(component).toMatchInlineSnapshot(`
      <JsonCodeEditor
        json={
          Object {
            "_id": "1",
            "_index": "test",
            "_score": 1,
            "_source": Object {
              "bytes": 100,
              "extension": ".gz",
            },
            "_type": "test",
            "highlight": Object {
              "extension": Array [
                "@kibana-highlighted-field.gz@/kibana-highlighted-field",
              ],
            },
          }
        }
        width={370}
      />
    `);
  });

  it('renders fields-based column correctly', () => {
    const OrderviewGridCellValue = getRenderCellValueFn(
      indexPatternMock,
      rowsFields,
      rowsFields.map((row) => indexPatternMock.flattenHit(row)),
      true,
      100
    );
    const component = shallow(
      <OrderviewGridCellValue
        rowIndex={0}
        columnId="_source"
        isDetails={false}
        isExpanded={false}
        isExpandable={true}
        setCellProps={jest.fn()}
      />
    );
    expect(component).toMatchInlineSnapshot(`
      <EuiDescriptionList
        className="dscOrderviewGrid__descriptionList"
        compressed={true}
        type="inline"
      >
        <EuiDescriptionListTitle>
          extension
        </EuiDescriptionListTitle>
        <EuiDescriptionListDescription
          className="dscOrderviewGrid__descriptionListDescription"
          dangerouslySetInnerHTML={
            Object {
              "__html": Array [
                ".gz",
              ],
            }
          }
        />
        <EuiDescriptionListTitle>
          bytes
        </EuiDescriptionListTitle>
        <EuiDescriptionListDescription
          className="dscOrderviewGrid__descriptionListDescription"
          dangerouslySetInnerHTML={
            Object {
              "__html": Array [
                100,
              ],
            }
          }
        />
      </EuiDescriptionList>
    `);
  });

  it('limits amount of rendered items', () => {
    const OrderviewGridCellValue = getRenderCellValueFn(
      indexPatternMock,
      rowsFields,
      rowsFields.map((row) => indexPatternMock.flattenHit(row)),
      true,
      // this is the number of rendered items
      1
    );
    const component = shallow(
      <OrderviewGridCellValue
        rowIndex={0}
        columnId="_source"
        isDetails={false}
        isExpanded={false}
        isExpandable={true}
        setCellProps={jest.fn()}
      />
    );
    expect(component).toMatchInlineSnapshot(`
      <EuiDescriptionList
        className="dscOrderviewGrid__descriptionList"
        compressed={true}
        type="inline"
      >
        <EuiDescriptionListTitle>
          extension
        </EuiDescriptionListTitle>
        <EuiDescriptionListDescription
          className="dscOrderviewGrid__descriptionListDescription"
          dangerouslySetInnerHTML={
            Object {
              "__html": Array [
                ".gz",
              ],
            }
          }
        />
      </EuiDescriptionList>
    `);
  });

  it('renders fields-based column correctly when isDetails is set to true', () => {
    const OrderviewGridCellValue = getRenderCellValueFn(
      indexPatternMock,
      rowsFields,
      rowsFields.map((row) => indexPatternMock.flattenHit(row)),
      true,
      100
    );
    const component = shallow(
      <OrderviewGridCellValue
        rowIndex={0}
        columnId="_source"
        isDetails={true}
        isExpanded={false}
        isExpandable={true}
        setCellProps={jest.fn()}
      />
    );
    expect(component).toMatchInlineSnapshot(`
      <JsonCodeEditor
        json={
          Object {
            "_id": "1",
            "_index": "test",
            "_score": 1,
            "_source": undefined,
            "_type": "test",
            "fields": Object {
              "bytes": Array [
                100,
              ],
              "extension": Array [
                ".gz",
              ],
            },
            "highlight": Object {
              "extension": Array [
                "@kibana-highlighted-field.gz@/kibana-highlighted-field",
              ],
            },
          }
        }
        width={370}
      />
    `);
  });

  it('collect object fields and renders them like _source', () => {
    const OrderviewGridCellValue = getRenderCellValueFn(
      indexPatternMock,
      rowsFieldsWithTopLevelObject,
      rowsFieldsWithTopLevelObject.map((row) => indexPatternMock.flattenHit(row)),
      true,
      100
    );
    const component = shallow(
      <OrderviewGridCellValue
        rowIndex={0}
        columnId="object"
        isDetails={false}
        isExpanded={false}
        isExpandable={true}
        setCellProps={jest.fn()}
      />
    );
    expect(component).toMatchInlineSnapshot(`
      <EuiDescriptionList
        className="dscOrderviewGrid__descriptionList"
        compressed={true}
        type="inline"
      >
        <EuiDescriptionListTitle>
          object.value
        </EuiDescriptionListTitle>
        <EuiDescriptionListDescription
          className="dscOrderviewGrid__descriptionListDescription"
          dangerouslySetInnerHTML={
            Object {
              "__html": "formatted",
            }
          }
        />
      </EuiDescriptionList>
    `);
  });

  it('collect object fields and renders them like _source with fallback for unmapped', () => {
    (indexPatternMock.getFieldByName as jest.Mock).mockReturnValueOnce(undefined);
    const OrderviewGridCellValue = getRenderCellValueFn(
      indexPatternMock,
      rowsFieldsWithTopLevelObject,
      rowsFieldsWithTopLevelObject.map((row) => indexPatternMock.flattenHit(row)),
      true,
      100
    );
    const component = shallow(
      <OrderviewGridCellValue
        rowIndex={0}
        columnId="object"
        isDetails={false}
        isExpanded={false}
        isExpandable={true}
        setCellProps={jest.fn()}
      />
    );
    expect(component).toMatchInlineSnapshot(`
      <EuiDescriptionList
        className="dscOrderviewGrid__descriptionList"
        compressed={true}
        type="inline"
      >
        <EuiDescriptionListTitle>
          object.value
        </EuiDescriptionListTitle>
        <EuiDescriptionListDescription
          className="dscOrderviewGrid__descriptionListDescription"
          dangerouslySetInnerHTML={
            Object {
              "__html": "100",
            }
          }
        />
      </EuiDescriptionList>
    `);
  });

  it('collect object fields and renders them as json in details', () => {
    const OrderviewGridCellValue = getRenderCellValueFn(
      indexPatternMock,
      rowsFieldsWithTopLevelObject,
      rowsFieldsWithTopLevelObject.map((row) => indexPatternMock.flattenHit(row)),
      true,
      100
    );
    const component = shallow(
      <OrderviewGridCellValue
        rowIndex={0}
        columnId="object"
        isDetails={true}
        isExpanded={false}
        isExpandable={true}
        setCellProps={jest.fn()}
      />
    );
    expect(component).toMatchInlineSnapshot(`
      <span>
        {
        "object.value": [
          100
        ]
      }
      </span>
    `);
  });

  it('does not collect subfields when the the column is unmapped but part of fields response', () => {
    (indexPatternMock.getFieldByName as jest.Mock).mockReturnValueOnce(undefined);
    const OrderviewGridCellValue = getRenderCellValueFn(
      indexPatternMock,
      rowsFieldsWithTopLevelObject,
      rowsFieldsWithTopLevelObject.map((row) => indexPatternMock.flattenHit(row)),
      true,
      100
    );
    const component = shallow(
      <OrderviewGridCellValue
        rowIndex={0}
        columnId="object.value"
        isDetails={false}
        isExpanded={false}
        isExpandable={true}
        setCellProps={jest.fn()}
      />
    );
    expect(component).toMatchInlineSnapshot(`
      <span
        dangerouslySetInnerHTML={
          Object {
            "__html": 100,
          }
        }
      />
    `);
  });

  it('renders correctly when invalid row is given', () => {
    const OrderviewGridCellValue = getRenderCellValueFn(
      indexPatternMock,
      rowsSource,
      rowsSource.map((row) => indexPatternMock.flattenHit(row)),
      false,
      100
    );
    const component = shallow(
      <OrderviewGridCellValue
        rowIndex={1}
        columnId="bytes"
        isDetails={false}
        isExpanded={false}
        isExpandable={true}
        setCellProps={jest.fn()}
      />
    );
    expect(component.html()).toMatchInlineSnapshot(`"<span>-</span>"`);
  });

  it('renders correctly when invalid column is given', () => {
    const OrderviewGridCellValue = getRenderCellValueFn(
      indexPatternMock,
      rowsSource,
      rowsSource.map((row) => indexPatternMock.flattenHit(row)),
      false,
      100
    );
    const component = shallow(
      <OrderviewGridCellValue
        rowIndex={0}
        columnId="bytes-invalid"
        isDetails={false}
        isExpanded={false}
        isExpandable={true}
        setCellProps={jest.fn()}
      />
    );
    expect(component.html()).toMatchInlineSnapshot(`"<span>-</span>"`);
  });
});
