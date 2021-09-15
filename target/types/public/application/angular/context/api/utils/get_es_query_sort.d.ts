import { EsQuerySortValue, SortDirection } from '../../../../../kibana_services';
/**
 * Returns `EsQuerySort` which is used to sort records in the ES query
 * https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-sort.html
 * @param timeField
 * @param tieBreakerField
 * @param sortDir
 * @param nanos
 */
export declare function getEsQuerySort(timeField: string, tieBreakerField: string, sortDir: SortDirection, nanos?: string): [EsQuerySortValue, EsQuerySortValue];
//# sourceMappingURL=get_es_query_sort.d.ts.map