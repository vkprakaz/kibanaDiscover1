import { Container, Embeddable } from '../../../../embeddable/public';
import { ISearchEmbeddable, SearchInput, SearchOutput } from './types';
import { SavedSearch } from '../../saved_searches';
import { Adapters } from '../../../../inspector/common';
import { FilterManager } from '../../../../../../src/plugins/data/public';
import { DiscoverServices } from '../../build_services';
import { IFieldType, IndexPattern } from '../../../../../../src/plugins/data/common';
import { ElasticSearchHit } from '../doc_views/doc_views_types';
import { UiActionsStart } from '../../../../ui_actions/public';
import { DiscoverGridProps } from '../components/discover_grid/discover_grid';
import { DiscoverGridSettings } from '../components/discover_grid/types';
export interface SearchProps extends Partial<DiscoverGridProps> {
    settings?: DiscoverGridSettings;
    description?: string;
    sharedItemTitle?: string;
    inspectorAdapters?: Adapters;
    filter?: (field: IFieldType, value: string[], operator: string) => void;
    hits?: ElasticSearchHit[];
    totalHitCount?: number;
    onMoveColumn?: (column: string, index: number) => void;
}
interface SearchEmbeddableConfig {
    savedSearch: SavedSearch;
    editUrl: string;
    editPath: string;
    indexPatterns?: IndexPattern[];
    editable: boolean;
    filterManager: FilterManager;
    services: DiscoverServices;
}
export declare class SavedSearchEmbeddable extends Embeddable<SearchInput, SearchOutput> implements ISearchEmbeddable {
    private readonly executeTriggerActions;
    private readonly savedSearch;
    private inspectorAdapters;
    private panelTitle;
    private filtersSearchSource;
    private subscription?;
    readonly type = "search";
    private filterManager;
    private abortController?;
    private services;
    private prevTimeRange?;
    private prevFilters?;
    private prevQuery?;
    private prevSearchSessionId?;
    private searchProps?;
    private node?;
    constructor({ savedSearch, editUrl, editPath, indexPatterns, editable, filterManager, services, }: SearchEmbeddableConfig, initialInput: SearchInput, executeTriggerActions: UiActionsStart['executeTriggerActions'], parent?: Container);
    private fetch;
    private initializeSearchEmbeddableProps;
    private pushContainerStateParamsToProps;
    /**
     *
     * @param {Element} domNode
     */
    render(domNode: HTMLElement): Promise<void>;
    private renderReactComponent;
    reload(): void;
    getSavedSearch(): SavedSearch;
    getInspectorAdapters(): Adapters;
    destroy(): void;
}
export {};
//# sourceMappingURL=saved_search_embeddable.d.ts.map