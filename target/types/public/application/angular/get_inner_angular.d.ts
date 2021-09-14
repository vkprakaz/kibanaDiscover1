import '../index.scss';
import angular from 'angular';
import 'angular-sanitize';
import { CoreStart, PluginInitializerContext } from 'kibana/public';
import { DataPublicPluginStart } from '../../../../data/public';
import { NavigationPublicPluginStart as NavigationStart } from '../../../../navigation/public';
import { DiscoverStartPlugins } from '../../plugin';
/**
 * returns the main inner angular module, it contains all the parts of Angular Discover
 * needs to render, so in the end the current 'kibana' angular module is no longer necessary
 */
export declare function getInnerAngularModule(name: string, core: CoreStart, deps: DiscoverStartPlugins, context: PluginInitializerContext): angular.IModule;
/**
 * returns a slimmer inner angular module for embeddable rendering
 */
export declare function getInnerAngularModuleEmbeddable(name: string, core: CoreStart, deps: DiscoverStartPlugins): angular.IModule;
export declare function initializeInnerAngularModule(name: string | undefined, core: CoreStart, navigation: NavigationStart, data: DataPublicPluginStart, embeddable?: boolean): angular.IModule;
//# sourceMappingURL=get_inner_angular.d.ts.map