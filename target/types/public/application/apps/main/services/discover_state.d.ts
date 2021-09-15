import { History } from 'history';
import { NotificationsStart, IUiSettingsClient } from 'kibana/public';
import { IKbnUrlStateStorage, ReduxLikeStateContainer, StateContainer } from '../../../../../../kibana_utils/public';
import { DataPublicPluginStart, Filter, FilterManager, IndexPattern, Query, SearchSessionInfoProvider } from '../../../../../../../../src/plugins/data/public';
import { DiscoverGridSettings } from '../../../components/discover_grid/types';
import { SavedSearch } from '../../../../saved_searches';
export interface AppState {
    /**
     * Columns displayed in the table
     */
    columns?: string[];
    /**
     * Array of applied filters
     */
    filters?: Filter[];
    /**
     * Data Grid related state
     */
    grid?: DiscoverGridSettings;
    /**
     * Hide chart
     */
    hideChart?: boolean;
    /**
     * id of the used index pattern
     */
    index?: string;
    /**
     * Used interval of the histogram
     */
    interval?: string;
    /**
     * Lucence or KQL query
     */
    query?: Query;
    /**
     * Array of the used sorting [[field,direction],...]
     */
    sort?: string[][];
    /**
     * id of the used saved query
     */
    savedQuery?: string;
}
interface GetStateParams {
    /**
     * Default state used for merging with with URL state to get the initial state
     */
    getStateDefaults?: () => AppState;
    /**
     * Determins the use of long vs. short/hashed urls
     */
    storeInSessionStorage?: boolean;
    /**
     * Browser history
     */
    history: History;
    /**
     * Core's notifications.toasts service
     * In case it is passed in,
     * kbnUrlStateStorage will use it notifying about inner errors
     */
    toasts?: NotificationsStart['toasts'];
    /**
     * core ui settings service
     */
    uiSettings: IUiSettingsClient;
}
export interface GetStateReturn {
    /**
     * kbnUrlStateStorage
     */
    kbnUrlStateStorage: IKbnUrlStateStorage;
    /**
     * App state, the _a part of the URL
     */
    appStateContainer: ReduxLikeStateContainer<AppState>;
    /**
     * Function starting state sync when Discover main is loaded
     */
    initializeAndSync: (indexPattern: IndexPattern, filterManager: FilterManager, data: DataPublicPluginStart) => () => void;
    /**
     * Start sync between state and URL
     */
    startSync: () => void;
    /**
     * Stop sync between state and URL
     */
    stopSync: () => void;
    /**
     * Set app state to with a partial new app state
     */
    setAppState: (newState: Partial<AppState>) => void;
    /**
     * Set state in Url using history.replace
     */
    replaceUrlAppState: (newState: Partial<AppState>) => Promise<void>;
    /**
     * Sync state to URL, used for testing
     */
    flushToUrl: () => void;
    /**
     * Reset initial state to the current app state
     */
    resetInitialAppState: () => void;
    /**
     * Return the Appstate before the current app state, useful for diffing changes
     */
    getPreviousAppState: () => AppState;
    /**
     * Returns whether the current app state is different to the initial state
     */
    isAppStateDirty: () => boolean;
    /**
     * Reset AppState to default, discarding all changes
     */
    resetAppState: () => void;
}
/**
 * Builds and returns appState and globalState containers and helper functions
 * Used to sync URL with UI state
 */
export declare function getState({ getStateDefaults, storeInSessionStorage, history, toasts, uiSettings, }: GetStateParams): GetStateReturn;
/**
 * Helper function to merge a given new state with the existing state and to set the given state
 * container
 */
export declare function setState(stateContainer: ReduxLikeStateContainer<AppState>, newState: AppState): void;
/**
 * Helper function to compare 2 different filter states
 */
export declare function isEqualFilters(filtersA: Filter[], filtersB: Filter[]): boolean;
/**
 * helper function to extract filters of the given state
 * returns a state object without filters and an array of filters
 */
export declare function splitState(state?: AppState): {
    filters: Filter[];
    state: {
        /**
         * Columns displayed in the table
         */
        columns?: string[] | undefined;
        /**
         * Data Grid related state
         */
        grid?: DiscoverGridSettings | undefined;
        /**
         * Hide chart
         */
        hideChart?: boolean | undefined;
        /**
         * id of the used index pattern
         */
        index?: string | undefined;
        /**
         * Used interval of the histogram
         */
        interval?: string | undefined;
        /**
         * Lucence or KQL query
         */
        query?: Query | undefined;
        /**
         * Array of the used sorting [[field,direction],...]
         */
        sort?: string[][] | undefined;
        /**
         * id of the used saved query
         */
        savedQuery?: string | undefined;
    };
};
/**
 * Helper function to compare 2 different state, is needed since comparing filters
 * works differently
 */
export declare function isEqualState(stateA: AppState, stateB: AppState): boolean;
export declare function createSearchSessionRestorationDataProvider(deps: {
    appStateContainer: StateContainer<AppState>;
    data: DataPublicPluginStart;
    getSavedSearch: () => SavedSearch;
}): SearchSessionInfoProvider;
export {};
//# sourceMappingURL=discover_state.d.ts.map