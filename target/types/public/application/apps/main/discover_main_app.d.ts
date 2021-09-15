import { History } from 'history';
import { IndexPattern, IndexPatternAttributes, SavedObject } from '../../../../../../../src/plugins/data/common';
import { DiscoverServices } from '../../../build_services';
import { SavedSearch } from '../../../saved_searches';
export interface DiscoverMainProps {
    /**
     * Current IndexPattern
     */
    indexPattern: IndexPattern;
    opts: {
        /**
         * Use angular router for navigation
         */
        navigateTo: () => void;
        /**
         * Instance of browser history
         */
        history: History;
        /**
         * List of available index patterns
         */
        indexPatternList: Array<SavedObject<IndexPatternAttributes>>;
        /**
         * Kibana core services used by discover
         */
        services: DiscoverServices;
        /**
         * Current instance of SavedSearch
         */
        savedSearch: SavedSearch;
    };
}
export declare function DiscoverMainApp(props: DiscoverMainProps): JSX.Element;
//# sourceMappingURL=discover_main_app.d.ts.map