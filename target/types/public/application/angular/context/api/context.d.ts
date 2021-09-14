import type { estypes } from '@elastic/elasticsearch';
import { Filter, IndexPatternsContract } from 'src/plugins/data/public';
import { SortDirection } from './utils/sorting';
export declare enum SurrDocType {
    SUCCESSORS = "successors",
    PREDECESSORS = "predecessors"
}
export declare type EsHitRecord = Required<Pick<estypes.SearchResponse['hits']['hits'][number], '_id' | 'fields' | 'sort' | '_index' | '_version'>> & {
    _source?: Record<string, unknown>;
    _score?: number;
    isAnchor?: boolean;
};
export declare type EsHitRecordList = EsHitRecord[];
declare function fetchContextProvider(indexPatterns: IndexPatternsContract, useNewFieldsApi?: boolean): {
    fetchSurroundingDocs: (type: SurrDocType, indexPatternId: string, anchor: EsHitRecord, timeField: string, tieBreakerField: string, sortDir: SortDirection, size: number, filters: Filter[]) => Promise<EsHitRecordList>;
};
export { fetchContextProvider };
//# sourceMappingURL=context.d.ts.map