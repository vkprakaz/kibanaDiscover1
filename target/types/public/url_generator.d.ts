import type { UrlGeneratorsDefinition } from '../../share/public';
import type { TimeRange, Filter, Query, RefreshInterval } from '../../data/public';
export declare const DISCOVER_APP_URL_GENERATOR = "DISCOVER_APP_URL_GENERATOR";
export interface DiscoverUrlGeneratorState {
    /**
     * Optionally set saved search ID.
     */
    savedSearchId?: string;
    /**
     * Optionally set index pattern ID.
     */
    indexPatternId?: string;
    /**
     * Optionally set the time range in the time picker.
     */
    timeRange?: TimeRange;
    /**
     * Optionally set the refresh interval.
     */
    refreshInterval?: RefreshInterval;
    /**
     * Optionally apply filters.
     */
    filters?: Filter[];
    /**
     * Optionally set a query. NOTE: if given and used in conjunction with `dashboardId`, and the
     * saved dashboard has a query saved with it, this will _replace_ that query.
     */
    query?: Query;
    /**
     * If not given, will use the uiSettings configuration for `storeInSessionStorage`. useHash determines
     * whether to hash the data in the url to avoid url length issues.
     */
    useHash?: boolean;
    /**
     * Background search session id
     */
    searchSessionId?: string;
    /**
     * Columns displayed in the table
     */
    columns?: string[];
    /**
     * Used interval of the histogram
     */
    interval?: string;
    /**
     * Array of the used sorting [[field,direction],...]
     */
    sort?: string[][];
    /**
     * id of the used saved query
     */
    savedQuery?: string;
}
interface Params {
    appBasePath: string;
    useHash: boolean;
}
export declare const SEARCH_SESSION_ID_QUERY_PARAM = "searchSessionId";
export declare class DiscoverUrlGenerator implements UrlGeneratorsDefinition<typeof DISCOVER_APP_URL_GENERATOR> {
    private readonly params;
    constructor(params: Params);
    readonly id = "DISCOVER_APP_URL_GENERATOR";
    readonly createUrl: ({ useHash, filters, indexPatternId, query, refreshInterval, savedSearchId, timeRange, searchSessionId, columns, savedQuery, sort, interval, }: DiscoverUrlGeneratorState) => Promise<string>;
}
export {};
//# sourceMappingURL=url_generator.d.ts.map