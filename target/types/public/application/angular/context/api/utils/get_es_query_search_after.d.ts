import { SurrDocType, EsHitRecordList, EsHitRecord } from '../context';
export declare type EsQuerySearchAfter = [string | number, string | number];
/**
 * Get the searchAfter query value for elasticsearch
 * When there are already documents available, which means successors or predecessors
 * were already fetched, the new searchAfter for the next fetch has to be the sort value
 * of the first (prececessor), or last (successor) of the list
 */
export declare function getEsQuerySearchAfter(type: SurrDocType, documents: EsHitRecordList, timeFieldName: string, anchor: EsHitRecord, nanoSeconds: string, useNewFieldsApi?: boolean): EsQuerySearchAfter;
//# sourceMappingURL=get_es_query_search_after.d.ts.map