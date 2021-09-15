import { SortPairArr } from '../../../angular/doc_table/lib/get_sort';
import { IndexPattern } from '../../../../kibana_services';
/**
 * Helper function to remove or adapt the currently selected columns/sort to be valid with the next
 * index pattern, returns a new state object
 */
export declare function getSwitchIndexPatternAppState(currentIndexPattern: IndexPattern, nextIndexPattern: IndexPattern, currentColumns: string[], currentSort: SortPairArr[], modifyColumns?: boolean, sortDirection?: string): {
    index: string | undefined;
    columns: string[];
    sort: string[][];
};
//# sourceMappingURL=get_switch_index_pattern_app_state.d.ts.map