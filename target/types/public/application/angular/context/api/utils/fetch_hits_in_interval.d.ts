import { ISearchSource, EsQuerySortValue, SortDirection } from '../../../../../../../data/public';
import { EsHitRecordList } from '../context';
import { IntervalValue } from './generate_intervals';
import { EsQuerySearchAfter } from './get_es_query_search_after';
/**
 * Fetch the hits between a given `interval` up to a maximum of `maxCount` documents.
 * The documents are sorted by `sort`
 *
 * The `searchSource` is assumed to have the appropriate index pattern
 * and filters set.
 */
export declare function fetchHitsInInterval(searchSource: ISearchSource, timeField: string, sort: [EsQuerySortValue, EsQuerySortValue], sortDir: SortDirection, interval: IntervalValue[], searchAfter: EsQuerySearchAfter, maxCount: number, nanosValue: string, anchorId: string): Promise<EsHitRecordList>;
//# sourceMappingURL=fetch_hits_in_interval.d.ts.map