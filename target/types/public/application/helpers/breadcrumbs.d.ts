import { ChromeStart } from 'kibana/public';
import { SavedSearch } from '../../saved_searches';
export declare function getRootBreadcrumbs(): {
    text: string;
    href: string;
}[];
export declare function getSavedSearchBreadcrumbs($route: any): ({
    text: string;
    href: string;
} | {
    text: any;
})[];
/**
 * Helper function to set the Discover's breadcrumb
 * if there's an active savedSearch, its title is appended
 */
export declare function setBreadcrumbsTitle(savedSearch: SavedSearch, chrome: ChromeStart): void;
//# sourceMappingURL=breadcrumbs.d.ts.map