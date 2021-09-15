import { History } from 'history';
import { DiscoverSearchSessionManager } from './discover_search_session';
import { GetStateReturn } from './discover_state';
import { DiscoverServices } from '../../../../build_services';
import { SavedSearch } from '../../../../saved_searches';
export declare function useSearchSession({ services, history, stateContainer, savedSearch, }: {
    services: DiscoverServices;
    stateContainer: GetStateReturn;
    history: History;
    savedSearch: SavedSearch;
}): DiscoverSearchSessionManager;
//# sourceMappingURL=use_search_session.d.ts.map