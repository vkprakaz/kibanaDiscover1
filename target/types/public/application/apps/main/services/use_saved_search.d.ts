import { Subject, BehaviorSubject } from 'rxjs';
import { DiscoverServices } from '../../../../build_services';
import { DiscoverSearchSessionManager } from './discover_search_session';
import { IndexPattern, SearchSource } from '../../../../../../data/common';
import { GetStateReturn } from './discover_state';
import { ElasticSearchHit } from '../../../doc_views/doc_views_types';
import { RequestAdapter } from '../../../../../../inspector/public';
import { Chart } from '../components/chart/point_series';
import { TimechartBucketInterval } from '../components/timechart_header/timechart_header';
import { FetchStatus } from '../../../types';
export declare type SavedSearchDataSubject = BehaviorSubject<SavedSearchDataMessage>;
export declare type SavedSearchRefetchSubject = Subject<SavedSearchRefetchMsg>;
export interface UseSavedSearch {
    refetch$: SavedSearchRefetchSubject;
    data$: SavedSearchDataSubject;
    reset: () => void;
}
export declare type SavedSearchRefetchMsg = 'reset' | undefined;
export interface SavedSearchDataMessage {
    bucketInterval?: TimechartBucketInterval;
    chartData?: Chart;
    fetchCounter?: number;
    fetchError?: Error;
    fieldCounts?: Record<string, number>;
    hits?: number;
    inspectorAdapters?: {
        requests: RequestAdapter;
    };
    rows?: ElasticSearchHit[];
    state: FetchStatus;
}
/**
 * This hook return 2 observables, refetch$ allows to trigger data fetching, data$ to subscribe
 * to the data fetching
 */
export declare const useSavedSearch: ({ indexPattern, initialFetchStatus, searchSessionManager, searchSource, services, stateContainer, useNewFieldsApi, }: {
    indexPattern: IndexPattern;
    initialFetchStatus: FetchStatus;
    searchSessionManager: DiscoverSearchSessionManager;
    searchSource: SearchSource;
    services: DiscoverServices;
    stateContainer: GetStateReturn;
    useNewFieldsApi: boolean;
}) => UseSavedSearch;
//# sourceMappingURL=use_saved_search.d.ts.map