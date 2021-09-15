import { IndexPattern } from '../../../../kibana_services';
import { SortOrder } from '../components/table_header/helpers';
/**
 * use in case the user didn't manually sort.
 * the default sort is returned depending of the index pattern
 */
export declare function getDefaultSort(indexPattern: IndexPattern | undefined, defaultSortOrder?: string): SortOrder[];
//# sourceMappingURL=get_default_sort.d.ts.map