import { SavedSearch } from '../../../../../saved_searches';
import { IndexPattern } from '../../../../../../../data/common/index_patterns/index_patterns';
import { DiscoverServices } from '../../../../../build_services';
import { GetStateReturn } from '../../services/discover_state';
export declare function onSaveSearch({ indexPattern, navigateTo, savedSearch, services, state, }: {
    indexPattern: IndexPattern;
    navigateTo: (path: string) => void;
    savedSearch: SavedSearch;
    services: DiscoverServices;
    state: GetStateReturn;
}): Promise<void>;
//# sourceMappingURL=on_save_search.d.ts.map