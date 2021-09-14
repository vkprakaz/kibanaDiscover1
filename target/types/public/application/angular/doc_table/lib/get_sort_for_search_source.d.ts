import { EsQuerySortValue, IndexPattern } from '../../../../kibana_services';
import { SortOrder } from '../components/table_header/helpers';
/**
 * Prepares sort for search source, that's sending the request to ES
 * - Adds default sort if necessary
 * - Handles the special case when there's sorting by date_nanos typed fields
 *   the addon of the numeric_type guarantees the right sort order
 *   when there are indices with date and indices with date_nanos field
 */
export declare function getSortForSearchSource(sort?: SortOrder[], indexPattern?: IndexPattern, defaultDirection?: string): EsQuerySortValue[];
//# sourceMappingURL=get_sort_for_search_source.d.ts.map