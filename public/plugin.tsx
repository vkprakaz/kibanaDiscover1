/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { i18n } from '@kbn/i18n';
import React from 'react';
import angular, { auto } from 'angular';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import {
  AppMountParameters,
  AppUpdater,
  CoreSetup,
  CoreStart,
  Plugin,
  PluginInitializerContext,
} from '../../../src/core/public';

import { UiActionsStart, UiActionsSetup } from 'src/plugins/ui_actions/public';
import { EmbeddableStart, EmbeddableSetup } from 'src/plugins/embeddable/public';
import { ChartsPluginStart } from 'src/plugins/charts/public';
import { NavigationPublicPluginStart as NavigationStart } from 'src/plugins/navigation/public';
import { SharePluginStart, SharePluginSetup, UrlGeneratorContract } from 'src/plugins/share/public';
import { KibanaLegacySetup, KibanaLegacyStart } from 'src/plugins/kibana_legacy/public';
import { UrlForwardingSetup, UrlForwardingStart } from 'src/plugins/url_forwarding/public';
import { HomePublicPluginSetup } from 'src/plugins/home/public';
import { Start as InspectorPublicPluginStart } from 'src/plugins/inspector/public';
import { DataPublicPluginStart, DataPublicPluginSetup, esFilters } from '../../../src/plugins/data/public';
import { SavedObjectLoader, SavedObjectsStart } from '../../../src/plugins/saved_objects/public';
import { createKbnUrlTracker } from '../../../src/plugins/kibana_utils/public';
import { DEFAULT_APP_CATEGORIES } from '../../../src/core/public';
import { UrlGeneratorState } from '../../../src/plugins/share/public';
import { DocViewInput, DocViewInputFn } from './application/doc_views/doc_views_types';
import { DocViewsRegistry } from './application/doc_views/doc_views_registry';
import { DocViewTable } from './application/components/table/table';

import {
  setDocViewsRegistry,
  setUrlTracker,
  setAngularModule,
  setServices,
  setHeaderActionMenuMounter,
  setUiActions,
  setScopedHistory,
  getScopedHistory,
  syncHistoryLocations,
  getServices,
} from './kibana_services';
import { createSavedSearchesLoader } from './saved_searches';
import { registerFeature } from './register_feature';
import { buildServices } from './build_services';
import {
  OrderviewUrlGeneratorState,
  ORDERVEW_APP_URL_GENERATOR,
  OrderviewUrlGenerator,
  SEARCH_SESSION_ID_QUERY_PARAM,
} from './url_generator';
import { OrderviewAppLocatorDefinition, OrderviewAppLocator } from './locator';
import { SearchEmbeddableFactory } from './application/embeddable';
import { UsageCollectionSetup } from '../../../src/plugins/usage_collection/public';
import { replaceUrlHashQuery } from '../../../src/plugins/kibana_utils/public/';
import { IndexPatternFieldEditorStart } from '../../../src/plugins/index_pattern_field_editor/public';
import { SourceViewer } from './application/components/source_viewer/source_viewer';

declare module '../../share/public' {
  export interface UrlGeneratorStateMapping {
    [ORDERVEW_APP_URL_GENERATOR]: UrlGeneratorState<OrderviewUrlGeneratorState>;
  }
}

/**
 * @public
 */
export interface OrderviewSetup {
  docViews: {
    /**
     * Add new doc view shown along with table view and json view in the details of each document in Orderview.
     * Both react and angular doc views are supported.
     * @param docViewRaw
     */
    addDocView(docViewRaw: DocViewInput | DocViewInputFn): void;
  };

  /**
   * `share` plugin URL locator for Orderview app. Use it to generate links into
   * Orderview application, for example, navigate:
   *
   * ```ts
   * await plugins.orderview.locator.navigate({
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
   * const location = await plugins.orderview.locator.getLocation({
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
  readonly locator: undefined | OrderviewAppLocator;
}

export interface OrderviewStart {
  savedSearchLoader: SavedObjectLoader;

  /**
   * @deprecated Use URL locator instead. URL generaotr will be removed.
   */
  readonly urlGenerator: undefined | UrlGeneratorContract<'ORDERVEW_APP_URL_GENERATOR'>;

  /**
   * `share` plugin URL locator for Orderview app. Use it to generate links into
   * Orderview application, for example, navigate:
   *
   * ```ts
   * await plugins.orderview.locator.navigate({
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
   * const location = await plugins.orderview.locator.getLocation({
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
  readonly locator: undefined | OrderviewAppLocator;
}

/**
 * @internal
 */
export interface OrderviewSetupPlugins {
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
export interface OrderviewStartPlugins {
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

const innerAngularName = 'app/orderview';
const embeddableAngularName = 'app/orderviewEmbeddable';

/**
 * Contains Orderview, one of the oldest parts of Kibana
 * There are 2 kinds of Angular bootstrapped for rendering, additionally to the main Angular
 * Orderview provides embeddables, those contain a slimmer Angular
 */
export class OrderviewPlugin
  implements Plugin<OrderviewSetup, OrderviewStart, OrderviewSetupPlugins, OrderviewStartPlugins> {
  constructor(private readonly initializerContext: PluginInitializerContext) {}

  private appStateUpdater = new BehaviorSubject<AppUpdater>(() => ({}));
  private docViewsRegistry: DocViewsRegistry | null = null;
  private embeddableInjector: auto.IInjectorService | null = null;
  private stopUrlTracking: (() => void) | undefined = undefined;
  private servicesInitialized: boolean = false;
  private innerAngularInitialized: boolean = false;

  /**
   * @deprecated
   */
  private urlGenerator?: OrderviewStart['urlGenerator'];
  private locator?: OrderviewAppLocator;

  /**
   * why are those functions public? they are needed for some mocha tests
   * can be removed once all is Jest
   */
  public initializeInnerAngular?: () => void;
  public initializeServices?: () => Promise<{ core: CoreStart; plugins: OrderviewStartPlugins }>;

  setup(
    core: CoreSetup<OrderviewStartPlugins, OrderviewStart>,
    plugins: OrderviewSetupPlugins
  ): OrderviewSetup {
    const baseUrl = core.http.basePath.prepend('/app/orderview');

    if (plugins.share) {
      this.urlGenerator = plugins.share.urlGenerators.registerUrlGenerator(
        new OrderviewUrlGenerator({
          appBasePath: baseUrl,
          useHash: core.uiSettings.get('state:storeInSessionStorage'),
        })
      );
    }

    if (plugins.share) {
      this.locator = plugins.share.url.locators.create(
        new OrderviewAppLocatorDefinition({
          useHash: core.uiSettings.get('state:storeInSessionStorage'),
        })
      );
    }

    this.docViewsRegistry = new DocViewsRegistry();
    setDocViewsRegistry(this.docViewsRegistry);
    this.docViewsRegistry.addDocView({
      title: i18n.translate('orderview.docViews.table.tableTitle', {
        defaultMessage: 'Table',
      }),
      order: 10,
      component: DocViewTable,
    });
    this.docViewsRegistry.addDocView({
      title: i18n.translate('orderview.docViews.json.jsonTitle', {
        defaultMessage: 'JSON',
      }),
      order: 20,
      component: ({ hit, indexPattern }) => (
        <SourceViewer
          index={hit._index}
          id={hit._id}
          indexPatternId={indexPattern?.id || ''}
          hasLineNumbers
        />
      ),
    });

    const {
      appMounted,
      appUnMounted,
      stop: stopUrlTracker,
      setActiveUrl: setTrackedUrl,
      restorePreviousUrl,
    } = createKbnUrlTracker({
      // we pass getter here instead of plain `history`,
      // so history is lazily created (when app is mounted)
      // this prevents redundant `#` when not in orderview app
      getHistory: getScopedHistory,
      baseUrl,
      defaultSubUrl: '#/',
      storageKey: `lastUrl:${core.http.basePath.get()}:orderview`,
      navLinkUpdater$: this.appStateUpdater,
      toastNotifications: core.notifications.toasts,
      stateParams: [
        {
          kbnUrlKey: '_g',
          stateUpdate$: plugins.data.query.state$.pipe(
            filter(
              ({ changes }) => !!(changes.globalFilters || changes.time || changes.refreshInterval)
            ),
            map(({ state }) => ({
              ...state,
              filters: state.filters?.filter(esFilters.isFilterPinned),
            }))
          ),
        },
      ],
      onBeforeNavLinkSaved: (newNavLink: string) => {
        // Do not save SEARCH_SESSION_ID into nav link, because of possible edge cases
        // that could lead to session restoration failure.
        // see: https://github.com/elastic/kibana/issues/87149
        if (newNavLink.includes(SEARCH_SESSION_ID_QUERY_PARAM)) {
          newNavLink = replaceUrlHashQuery(newNavLink, (query) => {
            delete query[SEARCH_SESSION_ID_QUERY_PARAM];
            return query;
          });
        }

        return newNavLink;
      },
    });
    setUrlTracker({ setTrackedUrl, restorePreviousUrl });
    this.stopUrlTracking = () => {
      stopUrlTracker();
    };

    this.docViewsRegistry.setAngularInjectorGetter(this.getEmbeddableInjector);
    core.application.register({
      id: 'orderview',
      title: 'Orderview',
      updater$: this.appStateUpdater.asObservable(),
      order: 1000,
      euiIconType: 'logoKibana',
      defaultPath: '#/',
      category: DEFAULT_APP_CATEGORIES.kibana,
      mount: async (params: AppMountParameters) => {
        if (!this.initializeServices) {
          throw Error('Orderview plugin method initializeServices is undefined');
        }
        if (!this.initializeInnerAngular) {
          throw Error('Orderview plugin method initializeInnerAngular is undefined');
        }
        setScopedHistory(params.history);
        setHeaderActionMenuMounter(params.setHeaderActionMenu);
        syncHistoryLocations();
        appMounted();
        const {
          plugins: { data: dataStart },
        } = await this.initializeServices();
        await this.initializeInnerAngular();

        // make sure the index pattern list is up to date
        await dataStart.indexPatterns.clearCache();

        const { renderApp } = await import('./application/application');
        params.element.classList.add('dscAppWrapper');
        const unmount = await renderApp(innerAngularName, params.element);
        return () => {
          params.element.classList.remove('dscAppWrapper');
          unmount();
          appUnMounted();
        };
      },
    });

    plugins.urlForwarding.forwardApp('doc', 'orderview', (path) => {
      return `#${path}`;
    });
    plugins.urlForwarding.forwardApp('context', 'orderview', (path) => {
      const urlParts = path.split('/');
      // take care of urls containing legacy url, those split in the following way
      // ["", "context", indexPatternId, _type, id + params]
      if (urlParts[4]) {
        // remove _type part
        const newPath = [...urlParts.slice(0, 3), ...urlParts.slice(4)].join('/');
        return `#${newPath}`;
      }
      return `#${path}`;
    });
    plugins.urlForwarding.forwardApp('orderview', 'orderview', (path) => {
      const [, id, tail] = /orderview\/([^\?]+)(.*)/.exec(path) || [];
      if (!id) {
        return `#${path.replace('/orderview', '') || '/'}`;
      }
      return `#/view/${id}${tail || ''}`;
    });

    if (plugins.home) {
      registerFeature(plugins.home);
    }

    this.registerEmbeddable(core, plugins);

    return {
      docViews: {
        addDocView: this.docViewsRegistry.addDocView.bind(this.docViewsRegistry),
      },
      locator: this.locator,
    };
  }

  start(core: CoreStart, plugins: OrderviewStartPlugins) {
    // we need to register the application service at setup, but to render it
    // there are some start dependencies necessary, for this reason
    // initializeInnerAngular + initializeServices are assigned at start and used
    // when the application/embeddable is mounted
    this.initializeInnerAngular = async () => {
      if (this.innerAngularInitialized) {
        return;
      }
      // this is used by application mount and tests
      const { getInnerAngularModule } = await import('./application/angular/get_inner_angular');
      const module = getInnerAngularModule(
        innerAngularName,
        core,
        plugins,
        this.initializerContext
      );
      setAngularModule(module);
      this.innerAngularInitialized = true;
    };

    setUiActions(plugins.uiActions);

    this.initializeServices = async () => {
      if (this.servicesInitialized) {
        return { core, plugins };
      }
      const services = await buildServices(
        core,
        plugins,
        this.initializerContext,
        this.getEmbeddableInjector
      );
      setServices(services);
      this.servicesInitialized = true;

      return { core, plugins };
    };

    return {
      urlGenerator: this.urlGenerator,
      locator: this.locator,
      savedSearchLoader: createSavedSearchesLoader({
        savedObjectsClient: core.savedObjects.client,
        savedObjects: plugins.savedObjects,
      }),
    };
  }

  stop() {
    if (this.stopUrlTracking) {
      this.stopUrlTracking();
    }
  }

  /**
   * register embeddable with a slimmer embeddable version of inner angular
   */
  private registerEmbeddable(core: CoreSetup<OrderviewStartPlugins>, plugins: OrderviewSetupPlugins) {
    if (!this.getEmbeddableInjector) {
      throw Error('Orderview plugin method getEmbeddableInjector is undefined');
    }

    const getStartServices = async () => {
      const [coreStart, deps] = await core.getStartServices();
      return {
        executeTriggerActions: deps.uiActions.executeTriggerActions,
        isEditable: () => coreStart.application.capabilities.orderview.save as boolean,
      };
    };
    

    const factory = new SearchEmbeddableFactory(getStartServices, this.getEmbeddableInjector);
    factory.id="ordersearch";
    plugins.embeddable.registerEmbeddableFactory(factory.type, factory);
  }

  private getEmbeddableInjector = async () => {
    if (!this.embeddableInjector) {
      if (!this.initializeServices) {
        throw Error('Orderview plugin getEmbeddableInjector:  initializeServices is undefined');
      }
      const { core, plugins } = await this.initializeServices();
      getServices().kibanaLegacy.loadFontAwesome();
      const { getInnerAngularModuleEmbeddable } = await import(
        './application/angular/get_inner_angular'
      );
      getInnerAngularModuleEmbeddable(embeddableAngularName, core, plugins);
      const mountpoint = document.createElement('div');
      this.embeddableInjector = angular.bootstrap(mountpoint, [embeddableAngularName]);
    }

    return this.embeddableInjector;
  };
}
