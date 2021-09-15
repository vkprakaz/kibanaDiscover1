import { History } from 'history';
import { IndexPattern } from '../../../../../../../../src/plugins/data/public';
import { DiscoverServices } from '../../../../build_services';
import { SavedSearch } from '../../../../saved_searches';
export declare function useDiscoverState({ services, history, initialIndexPattern, initialSavedSearch, }: {
    services: DiscoverServices;
    initialSavedSearch: SavedSearch;
    history: History;
    initialIndexPattern: IndexPattern;
}): {
    data$: import("./use_saved_search").SavedSearchDataSubject;
    indexPattern: IndexPattern;
    refetch$: import("./use_saved_search").SavedSearchRefetchSubject;
    resetSavedSearch: (id?: string | undefined) => Promise<void>;
    onChangeIndexPattern: (id: string) => Promise<void>;
    onUpdateQuery: (_payload: any, isUpdate?: boolean | undefined) => void;
    savedSearch: SavedSearch;
    searchSource: import("../../../../../../../../src/plugins/data/public").SearchSource;
    setState: import("react").Dispatch<import("react").SetStateAction<import("./discover_state").AppState>>;
    state: import("./discover_state").AppState;
    stateContainer: import("./discover_state").GetStateReturn;
};
//# sourceMappingURL=use_discover_state.d.ts.map