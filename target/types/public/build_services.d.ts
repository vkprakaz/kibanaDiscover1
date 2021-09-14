import { History } from 'history';
import type { auto } from 'angular';
import { Capabilities, ChromeStart, CoreStart, DocLinksStart, ToastsStart, IUiSettingsClient, PluginInitializerContext } from 'kibana/public';
import { FilterManager, TimefilterContract, IndexPatternsContract, DataPublicPluginStart } from 'src/plugins/data/public';
import { Start as InspectorPublicPluginStart } from 'src/plugins/inspector/public';
import { SharePluginStart } from 'src/plugins/share/public';
import { ChartsPluginStart } from 'src/plugins/charts/public';
import { UiCounterMetricType } from '@kbn/analytics';
import { DiscoverStartPlugins } from './plugin';
import { SavedSearch } from './saved_searches';
import { KibanaLegacyStart } from '../../kibana_legacy/public';
import { UrlForwardingStart } from '../../url_forwarding/public';
import { NavigationPublicPluginStart } from '../../navigation/public';
import { IndexPatternFieldEditorStart } from '../../index_pattern_field_editor/public';
export interface DiscoverServices {
    addBasePath: (path: string) => string;
    capabilities: Capabilities;
    chrome: ChromeStart;
    core: CoreStart;
    data: DataPublicPluginStart;
    docLinks: DocLinksStart;
    history: () => History;
    theme: ChartsPluginStart['theme'];
    filterManager: FilterManager;
    indexPatterns: IndexPatternsContract;
    inspector: InspectorPublicPluginStart;
    metadata: {
        branch: string;
    };
    navigation: NavigationPublicPluginStart;
    share?: SharePluginStart;
    kibanaLegacy: KibanaLegacyStart;
    urlForwarding: UrlForwardingStart;
    timefilter: TimefilterContract;
    toastNotifications: ToastsStart;
    getSavedSearchById: (id?: string) => Promise<SavedSearch>;
    getSavedSearchUrlById: (id: string) => Promise<string>;
    getEmbeddableInjector: () => Promise<auto.IInjectorService>;
    uiSettings: IUiSettingsClient;
    trackUiMetric?: (metricType: UiCounterMetricType, eventName: string | string[]) => void;
    indexPatternFieldEditor: IndexPatternFieldEditorStart;
}
export declare function buildServices(core: CoreStart, plugins: DiscoverStartPlugins, context: PluginInitializerContext, getEmbeddableInjector: () => Promise<auto.IInjectorService>): Promise<DiscoverServices>;
//# sourceMappingURL=build_services.d.ts.map