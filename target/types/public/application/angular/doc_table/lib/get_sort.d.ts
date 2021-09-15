import { IndexPattern } from '../../../../../../../../src/plugins/data/public';
export declare type SortPairObj = Record<string, string>;
export declare type SortPairArr = [string, string];
export declare type SortPair = SortPairArr | SortPairObj;
export declare type SortInput = SortPair | SortPair[];
export declare function isSortable(fieldName: string, indexPattern: IndexPattern): boolean;
export declare function isLegacySort(sort: SortPair[] | SortPair): sort is SortPair;
/**
 * Take a sorting array and make it into an object
 * @param {array} sort two dimensional array [[fieldToSort, directionToSort]]
 *  or an array of objects [{fieldToSort: directionToSort}]
 * @param {object} indexPattern used for determining default sort
 * @returns Array<{object}> an array of sort objects
 */
export declare function getSort(sort: SortPair[] | SortPair, indexPattern: IndexPattern): SortPairObj[];
/**
 * compared to getSort it doesn't return an array of objects, it returns an array of arrays
 * [[fieldToSort: directionToSort]]
 */
export declare function getSortArray(sort: SortPair[], indexPattern: IndexPattern): SortPairArr[];
//# sourceMappingURL=get_sort.d.ts.map