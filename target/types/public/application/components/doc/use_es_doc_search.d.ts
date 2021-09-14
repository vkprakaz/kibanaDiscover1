import type { estypes } from '@elastic/elasticsearch';
import { IndexPattern } from '../../../kibana_services';
import { DocProps } from './doc';
import { ElasticSearchHit } from '../../doc_views/doc_views_types';
import { ElasticRequestState } from './elastic_request_state';
declare type RequestBody = Pick<estypes.SearchRequest, 'body'>;
/**
 * helper function to build a query body for Elasticsearch
 * https://www.elastic.co/guide/en/elasticsearch/reference/current//query-dsl-ids-query.html
 */
export declare function buildSearchBody(id: string, indexPattern: IndexPattern, useNewFieldsApi: boolean, requestAllFields?: boolean): RequestBody | undefined;
/**
 * Custom react hook for querying a single doc in ElasticSearch
 */
export declare function useEsDocSearch({ id, index, indexPatternId, indexPatternService, requestSource, }: DocProps): [ElasticRequestState, ElasticSearchHit | null, IndexPattern | null, () => void];
export {};
//# sourceMappingURL=use_es_doc_search.d.ts.map