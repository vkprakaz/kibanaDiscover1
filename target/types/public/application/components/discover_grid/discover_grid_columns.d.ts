import { EuiDataGridColumn } from '@elastic/eui';
import { DiscoverGridSettings } from './types';
import { IndexPattern } from '../../../../../../../src/plugins/data/common/index_patterns/index_patterns';
export declare function getLeadControlColumns(): {
    id: string;
    width: number;
    headerCellRender: () => JSX.Element;
    rowCellRender: ({ rowIndex, setCellProps }: import("@elastic/eui").EuiDataGridCellValueElementProps) => JSX.Element;
}[];
export declare function buildEuiGridColumn(columnName: string, columnWidth: number | undefined, indexPattern: IndexPattern, defaultColumns: boolean, isSortEnabled: boolean): EuiDataGridColumn;
export declare function getEuiGridColumns(columns: string[], settings: DiscoverGridSettings | undefined, indexPattern: IndexPattern, showTimeCol: boolean, defaultColumns: boolean, isSortEnabled: boolean): EuiDataGridColumn[];
export declare function getVisibleColumns(columns: string[], indexPattern: IndexPattern, showTimeCol: boolean): (string | undefined)[];
//# sourceMappingURL=discover_grid_columns.d.ts.map