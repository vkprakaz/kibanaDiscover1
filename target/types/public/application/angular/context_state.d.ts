import { History } from 'history';
import { NotificationsStart, IUiSettingsClient } from 'kibana/public';
import { ReduxLikeStateContainer } from '../../../../kibana_utils/public';
import { FilterManager, Filter } from '../../../../../../src/plugins/data/public';
export interface AppState {
    /**
     * Columns displayed in the table, cannot be changed by UI, just in discover's main app
     */
    columns: string[];
    /**
     * Array of filters
     */
    filters: Filter[];
    /**
     * Number of records to be fetched before anchor records (newer records)
     */
    predecessorCount: number;
    /**
     * Sorting of the records to be fetched, assumed to be a legacy parameter
     */
    sort: string[][];
    /**
     * Number of records to be fetched after the anchor records (older records)
     */
    successorCount: number;
}
interface GlobalState {
    /**
     * Array of filters
     */
    filters: Filter[];
}
export interface GetStateParams {
    /**
     * Number of records to be fetched when 'Load' link/button is clicked
     */
    defaultSize: number;
    /**
     * The timefield used for sorting
     */
    timeFieldName: string;
    /**
     * Determins the use of long vs. short/hashed urls
     */
    storeInSessionStorage?: boolean;
    /**
     * History instance to use
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
     * Global state, the _g part of the URL
     */
    globalState: ReduxLikeStateContainer<GlobalState>;
    /**
     * App state, the _a part of the URL
     */
    appState: ReduxLikeStateContainer<AppState>;
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
     * Get all filters, global and app state
     */
    getFilters: () => Filter[];
    /**
     * Set global state and app state filters by the given FilterManager instance
     * @param filterManager
     */
    setFilters: (filterManager: FilterManager) => void;
    /**
     * sync state to URL, used for testing
     */
    flushToUrl: (replace?: boolean) => void;
}
/**
 * Builds and returns appState and globalState containers
 * provides helper functions to start/stop syncing with URL
 */
export declare function getState({ defaultSize, timeFieldName, storeInSessionStorage, history, toasts, uiSettings, }: GetStateParams): GetStateReturn;
/**
 * Helper function to compare 2 different filter states
 */
export declare function isEqualFilters(filtersA: Filter[], filtersB: Filter[]): boolean;
export {};
//# sourceMappingURL=context_state.d.ts.map