import { CoreSetup, CoreStart, Plugin, PluginInitializerContext } from 'kibana/public';
import { UiActionsStart, UiActionsSetup } from 'src/plugins/ui_actions/public';
import { EmbeddableStart, EmbeddableSetup } from 'src/plugins/embeddable/public';
import { ChartsPluginStart } from 'src/plugins/charts/public';
import { NavigationPublicPluginStart as NavigationStart } from 'src/plugins/navigation/public';
import { SharePluginStart, SharePluginSetup, UrlGeneratorContract } from 'src/plugins/share/public';
import { KibanaLegacySetup, KibanaLegacyStart } from 'src/plugins/kibana_legacy/public';
import { UrlForwardingSetup, UrlForwardingStart } from 'src/plugins/url_forwarding/public';
import { HomePublicPluginSetup } from 'src/plugins/home/public';
import { Start as InspectorPublicPluginStart } from 'src/plugins/inspector/public';
import { DataPublicPluginStart, DataPublicPluginSetup } from '../../data/public';
import { SavedObjectLoader, SavedObjectsStart } from '../../saved_objects/public';
import { UrlGeneratorState } from '../../share/public';
import { DocViewInput, DocViewInputFn } from './application/doc_views/doc_views_types';
import { DiscoverUrlGeneratorState, DISCOVER_APP_URL_GENERATOR } from './url_generator';
import { DiscoverAppLocator } from './locator';
import { UsageCollectionSetup } from '../../usage_collection/public';
import { IndexPatternFieldEditorStart } from '../../../plugins/index_pattern_field_editor/public';
declare module '../../share/public' {
    interface UrlGeneratorStateMapping {
        [DISCOVER_APP_URL_GENERATOR]: UrlGeneratorState<DiscoverUrlGeneratorState>;
    }
}
/**
 * @public
 */
export interface DiscoverSetup {
    docViews: {
        /**
         * Add new doc view shown along with table view and json view in the details of each document in Discover.
         * Both react and angular doc views are supported.
         * @param docViewRaw
         */
        addDocView(docViewRaw: DocViewInput | DocViewInputFn): void;
    };
    /**
     * `share` plugin URL locator for Discover app. Use it to generate links into
     * Discover application, for example, navigate:
     *
     * ```ts
     * await plugins.discover.locator.navigate({
     *   savedSearchId: '571aaf70-4c88-11e8-b3d7-01146121b73d',
     *   indexPatternId: 'c367b774-a4c2-11ea-bb37-0242ac130002',
     *   timeRange: {
     *     to: 'now',
     *     from: 'now-15m',
     *     mode: 'relative',
     *   },
     * });
     * ```
     *
     * Generate a location:
     *
     * ```ts
     * const location = await plugins.discover.locator.getLocation({
     *   savedSearchId: '571aaf70-4c88-11e8-b3d7-01146121b73d',
     *   indexPatternId: 'c367b774-a4c2-11ea-bb37-0242ac130002',
     *   timeRange: {
     *     to: 'now',
     *     from: 'now-15m',
     *     mode: 'relative',
     *   },
     * });
     * ```
     */
    readonly locator: undefined | DiscoverAppLocator;
}
export interface DiscoverStart {
    savedSearchLoader: SavedObjectLoader;
    /**
     * @deprecated Use URL locator instead. URL generaotr will be removed.
     */
    readonly urlGenerator: undefined | UrlGeneratorContract<'DISCOVER_APP_URL_GENERATOR'>;
    /**
     * `share` plugin URL locator for Discover app. Use it to generate links into
     * Discover application, for example, navigate:
     *
     * ```ts
     * await plugins.discover.locator.navigate({
     *   savedSearchId: '571aaf70-4c88-11e8-b3d7-01146121b73d',
     *   indexPatternId: 'c367b774-a4c2-11ea-bb37-0242ac130002',
     *   timeRange: {
     *     to: 'now',
     *     from: 'now-15m',
     *     mode: 'relative',
     *   },
     * });
     * ```
     *
     * Generate a location:
     *
     * ```ts
     * const location = await plugins.discover.locator.getLocation({
     *   savedSearchId: '571aaf70-4c88-11e8-b3d7-01146121b73d',
     *   indexPatternId: 'c367b774-a4c2-11ea-bb37-0242ac130002',
     *   timeRange: {
     *     to: 'now',
     *     from: 'now-15m',
     *     mode: 'relative',
     *   },
     * });
     * ```
     */
    readonly locator: undefined | DiscoverAppLocator;
}
/**
 * @internal
 */
export interface DiscoverSetupPlugins {
    share?: SharePluginSetup;
    uiActions: UiActionsSetup;
    embeddable: EmbeddableSetup;
    kibanaLegacy: KibanaLegacySetup;
    urlForwarding: UrlForwardingSetup;
    home?: HomePublicPluginSetup;
    data: DataPublicPluginSetup;
}
/**
 * @internal
 */
export interface DiscoverStartPlugins {
    uiActions: UiActionsStart;
    embeddable: EmbeddableStart;
    navigation: NavigationStart;
    charts: ChartsPluginStart;
    data: DataPublicPluginStart;
    share?: SharePluginStart;
    kibanaLegacy: KibanaLegacyStart;
    urlForwarding: UrlForwardingStart;
    inspector: InspectorPublicPluginStart;
    savedObjects: SavedObjectsStart;
    usageCollection?: UsageCollectionSetup;
    indexPatternFieldEditor: IndexPatternFieldEditorStart;
}
/**
 * Contains Discover, one of the oldest parts of Kibana
 * There are 2 kinds of Angular bootstrapped for rendering, additionally to the main Angular
 * Discover provides embeddables, those contain a slimmer Angular
 */
export declare class DiscoverPlugin implements Plugin<DiscoverSetup, DiscoverStart, DiscoverSetupPlugins, DiscoverStartPlugins> {
    private readonly initializerContext;
    constructor(initializerContext: PluginInitializerContext);
    private appStateUpdater;
    private docViewsRegistry;
    private embeddableInjector;
    private stopUrlTracking;
    private servicesInitialized;
    private innerAngularInitialized;
    /**
     * @deprecated
     */
    private urlGenerator?;
    private locator?;
    /**
     * why are those functions public? they are needed for some mocha tests
     * can be removed once all is Jest
     */
    initializeInnerAngular?: () => void;
    initializeServices?: () => Promise<{
        core: CoreStart;
        plugins: DiscoverStartPlugins;
    }>;
    setup(core: CoreSetup<DiscoverStartPlugins, DiscoverStart>, plugins: DiscoverSetupPlugins): DiscoverSetup;
    start(core: CoreStart, plugins: DiscoverStartPlugins): {
        urlGenerator: UrlGeneratorContract<"DISCOVER_APP_URL_GENERATOR"> | undefined;
        locator: DiscoverAppLocator | undefined;
        savedSearchLoader: SavedObjectLoader;
    };
    stop(): void;
    /**
     * register embeddable with a slimmer embeddable version of inner angular
     */
    private registerEmbeddable;
    private getEmbeddableInjector;
}
//# sourceMappingURL=plugin.d.ts.map