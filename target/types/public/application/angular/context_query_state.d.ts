import { EsHitRecord } from './context/api/context';
import { EsHitRecordList } from './context/api/context';
export interface ContextFetchState {
    /**
     * Documents listed before anchor
     */
    predecessors: EsHitRecordList;
    /**
     * Documents after anchor
     */
    successors: EsHitRecordList;
    /**
     * Anchor document
     */
    anchor: EsHitRecord;
    /**
     * Anchor fetch status
     */
    anchorStatus: LoadingStatusEntry;
    /**
     * Predecessors fetch status
     */
    predecessorsStatus: LoadingStatusEntry;
    /**
     * Successors fetch status
     */
    successorsStatus: LoadingStatusEntry;
}
export declare enum LoadingStatus {
    FAILED = "failed",
    LOADED = "loaded",
    LOADING = "loading",
    UNINITIALIZED = "uninitialized"
}
export declare enum FailureReason {
    UNKNOWN = "unknown",
    INVALID_TIEBREAKER = "invalid_tiebreaker"
}
export interface LoadingStatusEntry {
    value: LoadingStatus;
    error?: Error;
    reason?: FailureReason;
}
export declare const getInitialContextQueryState: () => ContextFetchState;
//# sourceMappingURL=context_query_state.d.ts.map