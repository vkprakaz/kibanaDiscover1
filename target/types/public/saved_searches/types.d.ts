import { SearchSource } from '../../../data/public';
import { SavedObjectSaveOpts } from '../../../saved_objects/public';
import { DiscoverGridSettings } from '../application/components/discover_grid/types';
export declare type SortOrder = [string, string];
export interface SavedSearch {
    readonly id: string;
    title: string;
    searchSource: SearchSource;
    description?: string;
    columns: string[];
    sort: SortOrder[];
    grid: DiscoverGridSettings;
    destroy: () => void;
    save: (saveOptions: SavedObjectSaveOpts) => Promise<string>;
    lastSavedTitle?: string;
    copyOnSave?: boolean;
    hideChart?: boolean;
}
export interface SavedSearchLoader {
    get: (id: string) => Promise<SavedSearch>;
    urlFor: (id: string) => string;
}
//# sourceMappingURL=types.d.ts.map