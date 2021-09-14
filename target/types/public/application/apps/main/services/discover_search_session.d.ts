import { History } from 'history';
import { DataPublicPluginStart } from '../../../../../../data/public';
export interface DiscoverSearchSessionManagerDeps {
    history: History;
    session: DataPublicPluginStart['search']['session'];
}
/**
 * Helps with state management of search session and {@link SEARCH_SESSION_ID_QUERY_PARAM} in the URL
 */
export declare class DiscoverSearchSessionManager {
    private readonly deps;
    /**
     * Notifies about `searchSessionId` changes in the URL,
     * skips if `searchSessionId` matches current search session id
     */
    readonly newSearchSessionIdFromURL$: import("rxjs").Observable<string | null>;
    constructor(deps: DiscoverSearchSessionManagerDeps);
    /**
     * Get next session id by either starting or restoring a session.
     * When navigating away from the restored session {@link SEARCH_SESSION_ID_QUERY_PARAM} is removed from the URL using history.replace
     */
    getNextSearchSessionId(): string;
    /**
     * Removes Discovers {@link SEARCH_SESSION_ID_QUERY_PARAM} from the URL
     * @param replace - methods to change the URL
     */
    removeSearchSessionIdFromURL({ replace }?: {
        replace?: boolean;
    }): void;
    /**
     * If there is a {@link SEARCH_SESSION_ID_QUERY_PARAM} currently in the URL
     */
    hasSearchSessionIdInURL(): boolean;
    private getSearchSessionIdFromURL;
}
//# sourceMappingURL=discover_search_session.d.ts.map