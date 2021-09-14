import { DiscoverServices } from '../../../../../build_services';
import { SavedSearch } from '../../../../../saved_searches';
import { GetStateReturn } from '../../services/discover_state';
import { IndexPattern, ISearchSource } from '../../../../../kibana_services';
/**
 * Helper function to build the top nav links
 */
export declare const getTopNavLinks: ({ indexPattern, navigateTo, savedSearch, services, state, onOpenInspector, searchSource, onOpenSavedSearch, }: {
    indexPattern: IndexPattern;
    navigateTo: (url: string) => void;
    savedSearch: SavedSearch;
    services: DiscoverServices;
    state: GetStateReturn;
    onOpenInspector: () => void;
    searchSource: ISearchSource;
    onOpenSavedSearch: (id: string) => void;
}) => {
    id: string;
    label: string;
    description: string;
    run: (anchorElement: HTMLElement) => void;
    testId: string;
}[];
//# sourceMappingURL=get_top_nav_links.d.ts.map