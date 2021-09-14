import { IndexPattern } from '../../../../../kibana_services';
export declare enum SortDirection {
    asc = "asc",
    desc = "desc"
}
/**
 * Returns a field from the intersection of the set of sortable fields in the
 * given index pattern and a given set of candidate field names.
 */
export declare function getFirstSortableField(indexPattern: IndexPattern, fieldNames: string[]): string;
/**
 * Return the reversed sort direction.
 */
export declare function reverseSortDir(sortDirection: SortDirection): SortDirection;
//# sourceMappingURL=sorting.d.ts.map