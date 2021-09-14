import { ScopedHistory } from 'kibana/public';
import { UiActionsStart } from 'src/plugins/ui_actions/public';
import { DiscoverServices } from './build_services';
import { DocViewsRegistry } from './application/doc_views/doc_views_registry';
/**
 * set bootstrapped inner angular module
 */
export declare function setAngularModule(module: ng.IModule): void;
/**
 * get boostrapped inner angular module
 */
export declare function getAngularModule(): ng.IModule;
export declare function getServices(): DiscoverServices;
export declare function setServices(newServices: DiscoverServices): void;
export declare const setUiActions: (pluginUiActions: UiActionsStart) => Pick<import("../../ui_actions/public").UiActionsService, import("@kbn/utility-types").MethodKeysOf<import("../../ui_actions/public").UiActionsService>>;
export declare const getUiActions: () => Pick<import("../../ui_actions/public").UiActionsService, import("@kbn/utility-types").MethodKeysOf<import("../../ui_actions/public").UiActionsService>>;
export declare const getHeaderActionMenuMounter: import("../../kibana_utils/public").Get<(menuMount: import("../../../core/public").MountPoint<HTMLElement> | undefined) => void>, setHeaderActionMenuMounter: import("../../kibana_utils/public").Set<(menuMount: import("../../../core/public").MountPoint<HTMLElement> | undefined) => void>;
export declare const getUrlTracker: import("../../kibana_utils/public").Get<{
    setTrackedUrl: (url: string) => void;
    restorePreviousUrl: () => void;
}>, setUrlTracker: import("../../kibana_utils/public").Set<{
    setTrackedUrl: (url: string) => void;
    restorePreviousUrl: () => void;
}>;
export declare const getDocViewsRegistry: import("../../kibana_utils/public").Get<DocViewsRegistry>, setDocViewsRegistry: import("../../kibana_utils/public").Set<DocViewsRegistry>;
/**
 * Makes sure discover and context are using one instance of history.
 */
export declare const getHistory: () => import("history").History<any>;
/**
 * Discover currently uses two `history` instances: one from Kibana Platform and
 * another from `history` package. Below function is used every time Discover
 * app is loaded to synchronize both instances.
 *
 * This helper is temporary until https://github.com/elastic/kibana/issues/65161 is resolved.
 */
export declare const syncHistoryLocations: () => import("history").History<any>;
export declare const getScopedHistory: import("../../kibana_utils/public").Get<ScopedHistory<unknown>>, setScopedHistory: import("../../kibana_utils/public").Set<ScopedHistory<unknown>>;
export declare const tabifyAggResponse: typeof import("../../data/common").tabifyAggResponse;
export { unhashUrl, redirectWhenMissing } from '../../kibana_utils/public';
export { formatMsg, formatStack, subscribeWithScope } from '../../kibana_legacy/public';
export { IndexPatternsContract, IIndexPattern, IndexPattern, indexPatterns, IFieldType, ISearchSource, EsQuerySortValue, SortDirection, } from '../../data/public';
//# sourceMappingURL=kibana_services.d.ts.map