/// <reference types="jest" />
import { DiscoverSearchSessionManager } from '../application/apps/main/services/discover_search_session';
export declare function createSearchSessionMock(): {
    history: import("history").MemoryHistory<any>;
    session: jest.Mocked<Pick<import("../../../../../src/plugins/data/public/search").SessionService, "save" | "clear" | "start" | "state$" | "sessionMeta$" | "hasAccess" | "trackSearch" | "destroy" | "getSessionId" | "getSession$" | "isStored" | "isRestore" | "restore" | "continue" | "cancel" | "renameCurrentSession" | "isCurrentSession" | "getSearchOptions" | "enableStorage" | "isSessionStorageReady" | "getSearchSessionIndicatorUiConfig">>;
    searchSessionManager: DiscoverSearchSessionManager;
};
//# sourceMappingURL=search_session.d.ts.map