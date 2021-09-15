import { IndexPattern } from '../../../../../../../../src/plugins/data/public';
import { SavedSearch } from '../../../../saved_searches';
import { AppState } from '../services/discover_state';
import { SavedObjectSaveOpts } from '../../../../../../saved_objects/public';
import { DiscoverServices } from '../../../../build_services';
/**
 * Helper function to update and persist the given savedSearch
 */
export declare function persistSavedSearch(savedSearch: SavedSearch, { indexPattern, onError, onSuccess, services, saveOptions, state, }: {
    indexPattern: IndexPattern;
    onError: (error: Error, savedSearch: SavedSearch) => void;
    onSuccess: (id: string) => void;
    saveOptions: SavedObjectSaveOpts;
    services: DiscoverServices;
    state: AppState;
}): Promise<{
    id: string;
    error?: undefined;
} | {
    error: any;
    id?: undefined;
}>;
//# sourceMappingURL=persist_saved_search.d.ts.map