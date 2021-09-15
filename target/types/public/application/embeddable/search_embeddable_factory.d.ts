import { auto } from 'angular';
import { UiActionsStart } from 'src/plugins/ui_actions/public';
import { EmbeddableFactoryDefinition, Container, ErrorEmbeddable } from '../../../../embeddable/public';
import { TimeRange } from '../../../../../../src/plugins/data/public';
import { SearchInput, SearchOutput } from './types';
import { SavedSearchEmbeddable } from './saved_search_embeddable';
interface StartServices {
    executeTriggerActions: UiActionsStart['executeTriggerActions'];
    isEditable: () => boolean;
}
export declare class SearchEmbeddableFactory implements EmbeddableFactoryDefinition<SearchInput, SearchOutput, SavedSearchEmbeddable> {
    private getStartServices;
    readonly type = "search";
    private $injector;
    private getInjector;
    readonly savedObjectMetaData: {
        name: string;
        type: string;
        getIconForSavedObject: () => string;
    };
    constructor(getStartServices: () => Promise<StartServices>, getInjector: () => Promise<auto.IInjectorService>);
    canCreateNew(): boolean;
    isEditable: () => Promise<boolean>;
    getDisplayName(): string;
    createFromSavedObject: (savedObjectId: string, input: Partial<SearchInput> & {
        id: string;
        timeRange: TimeRange;
    }, parent?: Container<{}, import("../../../../embeddable/public").ContainerInput<{}>, import("../../../../embeddable/public").ContainerOutput> | undefined) => Promise<SavedSearchEmbeddable | ErrorEmbeddable>;
    create(input: SearchInput): Promise<ErrorEmbeddable>;
}
export {};
//# sourceMappingURL=search_embeddable_factory.d.ts.map