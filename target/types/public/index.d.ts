import { PluginInitializerContext } from 'kibana/public';
import { DiscoverPlugin } from './plugin';
export { DiscoverSetup, DiscoverStart } from './plugin';
export declare function plugin(initializerContext: PluginInitializerContext): DiscoverPlugin;
export { SavedSearch, SavedSearchLoader, createSavedSearchesLoader } from './saved_searches';
export { ISearchEmbeddable, SEARCH_EMBEDDABLE_TYPE, SearchInput } from './application/embeddable';
export { loadSharingDataHelpers } from './shared';
export { DISCOVER_APP_URL_GENERATOR, DiscoverUrlGeneratorState } from './url_generator';
export { DiscoverAppLocator, DiscoverAppLocatorParams } from './locator';
//# sourceMappingURL=index.d.ts.map