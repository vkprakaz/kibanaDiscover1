import { ElasticSearchHit } from '../../../doc_views/doc_views_types';
import { FetchStatus } from '../../../types';
export declare const resultStatuses: {
    UNINITIALIZED: string;
    LOADING: string;
    READY: string;
    NO_RESULTS: string;
};
/**
 * Returns the current state of the result, depends on fetchStatus and the given fetched rows
 * Determines what is displayed in Discover main view (loading view, data view, empty data view, ...)
 */
export declare function getResultState(fetchStatus: FetchStatus, rows: ElasticSearchHit[]): string;
//# sourceMappingURL=get_result_state.d.ts.map