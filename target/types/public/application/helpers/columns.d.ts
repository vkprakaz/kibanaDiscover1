import { IndexPattern } from '../../../../../../src/plugins/data/common';
/**
 * Function to provide fallback when
 * 1) no columns are given
 * 2) Just one column is given, which is the configured timefields
 */
export declare function getDisplayedColumns(stateColumns: string[] | undefined, indexPattern: IndexPattern): string[];
//# sourceMappingURL=columns.d.ts.map