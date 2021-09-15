import type { SerializableState } from 'src/plugins/kibana_utils/common';
import type { TimeRange, Filter, Query, RefreshInterval } from '../../../../src/plugins/data/public';
import type { LocatorDefinition, LocatorPublic } from '../../share/public';
export declare const DISCOVER_APP_LOCATOR = "DISCOVER_APP_LOCATOR";
export interface DiscoverAppLocatorParams extends SerializableState {
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
    refreshInterval?: RefreshInterval & SerializableState;
    /**
     * Optionally apply filters.
     */
    filters?: Filter[];
    /**
     * Optionally set a query.
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
    sort?: string[][] & SerializableState;
    /**
     * id of the used saved query
     */
    savedQuery?: string;
}
export declare type DiscoverAppLocator = LocatorPublic<DiscoverAppLocatorParams>;
export interface DiscoverAppLocatorDependencies {
    useHash: boolean;
}
export declare class DiscoverAppLocatorDefinition implements LocatorDefinition<DiscoverAppLocatorParams> {
    protected readonly deps: DiscoverAppLocatorDependencies;
    readonly id = "DISCOVER_APP_LOCATOR";
    constructor(deps: DiscoverAppLocatorDependencies);
    readonly getLocation: (params: DiscoverAppLocatorParams) => Promise<{
        app: string;
        path: string;
        state: {};
    }>;
}
//# sourceMappingURL=locator.d.ts.map