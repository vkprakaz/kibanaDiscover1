/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React from 'react';
import { i18n } from '@kbn/i18n';
import { EuiDataGridColumn, EuiScreenReaderOnly } from '@elastic/eui';
import { ExpandButton } from './orderview_grid_expand_button';
import { OrderviewGridSettings } from './types';
import { IndexPattern } from '../../../../../data/common/index_patterns/index_patterns';
import { buildCellActions } from './orderview_grid_cell_actions';
import { getSchemaByKbnType } from './orderview_grid_schema';
import { SelectButton } from './orderview_grid_document_selection';

export function getLeadControlColumns() {
  return [
    {
      id: 'openDetails',
      width: 24,
      headerCellRender: () => (
        <EuiScreenReaderOnly>
          <span>
            {i18n.translate('orderview.controlColumnHeader', {
              defaultMessage: 'Control column',
            })}
          </span>
        </EuiScreenReaderOnly>
      ),
      rowCellRender: ExpandButton,
    },
    {
      id: 'select',
      width: 24,
      rowCellRender: SelectButton,
      headerCellRender: () => (
        <EuiScreenReaderOnly>
          <span>
            {i18n.translate('orderview.selectColumnHeader', {
              defaultMessage: 'Select column',
            })}
          </span>
        </EuiScreenReaderOnly>
      ),
    },
  ];
}

export function buildEuiGridColumn(
  columnName: string,
  columnWidth: number | undefined = 0,
  indexPattern: IndexPattern,
  defaultColumns: boolean,
  isSortEnabled: boolean
) {
  const timeString = i18n.translate('orderview.timeLabel', {
    defaultMessage: 'Time',
  });
  const indexPatternField = indexPattern.getFieldByName(columnName);
  const column: EuiDataGridColumn = {
    id: columnName,
    schema: getSchemaByKbnType(indexPatternField?.type),
    isSortable: isSortEnabled && indexPatternField?.sortable === true,
    display:
      columnName === '_source'
        ? i18n.translate('orderview.grid.documentHeader', {
            defaultMessage: 'Document',
          })
        : indexPatternField?.displayName,
    actions: {
      showHide:
        defaultColumns || columnName === indexPattern.timeFieldName
          ? false
          : {
              label: i18n.translate('orderview.removeColumnLabel', {
                defaultMessage: 'Remove column',
              }),
              iconType: 'cross',
            },
      showMoveLeft: !defaultColumns,
      showMoveRight: !defaultColumns,
    },
    cellActions: indexPatternField ? buildCellActions(indexPatternField) : [],
  };

  if (column.id === indexPattern.timeFieldName) {
    column.display = `${timeString} (${indexPattern.timeFieldName})`;
    column.initialWidth = 180;
  }
  if (columnWidth > 0) {
    column.initialWidth = Number(columnWidth);
  }
  return column;
}

export function getEuiGridColumns(
  columns: string[],
  settings: OrderviewGridSettings | undefined,
  indexPattern: IndexPattern,
  showTimeCol: boolean,
  defaultColumns: boolean,
  isSortEnabled: boolean
) {
  const timeFieldName = indexPattern.timeFieldName;
  const getColWidth = (column: string) => settings?.columns?.[column]?.width ?? 0;

  if (showTimeCol && indexPattern.timeFieldName && !columns.find((col) => col === timeFieldName)) {
    const usedColumns = [indexPattern.timeFieldName, ...columns];
    return usedColumns.map((column) =>
      buildEuiGridColumn(column, getColWidth(column), indexPattern, defaultColumns, isSortEnabled)
    );
  }

  return columns.map((column) =>
    buildEuiGridColumn(column, getColWidth(column), indexPattern, defaultColumns, isSortEnabled)
  );
}

export function getVisibleColumns(
  columns: string[],
  indexPattern: IndexPattern,
  showTimeCol: boolean
) {
  const timeFieldName = indexPattern.timeFieldName;

  if (showTimeCol && !columns.find((col) => col === timeFieldName)) {
    return [timeFieldName, ...columns];
  }

  return columns;
}
