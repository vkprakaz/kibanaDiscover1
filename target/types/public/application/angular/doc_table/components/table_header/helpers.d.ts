import { IndexPattern } from '../../../../../kibana_services';
export declare type SortOrder = [string, string];
export interface ColumnProps {
    name: string;
    displayName: string;
    isSortable: boolean;
    isRemoveable: boolean;
    colLeftIdx: number;
    colRightIdx: number;
}
/**
 * Returns properties necessary to display the time column
 * If it's an IndexPattern with timefield, the time column is
 * prepended, not moveable and removeable
 * @param timeFieldName
 */
export declare function getTimeColumn(timeFieldName: string): ColumnProps;
/**
 * A given array of column names returns an array of properties
 * necessary to display the columns. If the given indexPattern
 * has a timefield, a time column is prepended
 * @param columns
 * @param indexPattern
 * @param hideTimeField
 * @param isShortDots
 */
export declare function getDisplayedColumns(columns: string[], indexPattern: IndexPattern, hideTimeField: boolean, isShortDots: boolean): {
    name: string;
    displayName: string;
    isSortable: boolean;
    isRemoveable: boolean;
    colLeftIdx: number;
    colRightIdx: number;
}[];
//# sourceMappingURL=helpers.d.ts.map