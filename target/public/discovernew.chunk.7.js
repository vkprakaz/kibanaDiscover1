(window["discovernew_bundle_jsonpfunction"] = window["discovernew_bundle_jsonpfunction"] || []).push([[7],{

/***/ "./public/application/angular/doc_table/create_doc_table_embeddable.tsx":
/*!******************************************************************************!*\
  !*** ./public/application/angular/doc_table/create_doc_table_embeddable.tsx ***!
  \******************************************************************************/
/*! exports provided: DiscoverDocTableEmbeddable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverDocTableEmbeddable", function() { return DiscoverDocTableEmbeddable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kibana_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../kibana_services */ "./public/kibana_services.ts");
/* harmony import */ var _create_doc_table_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create_doc_table_react */ "./public/application/angular/doc_table/create_doc_table_react.tsx");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */





function getRenderFn(domNode, props) {
  const directive = {
    template: `<doc-table
        class="panel-content"
        columns="renderProps.columns"
        data-description="{{renderProps.searchDescription}}"
        data-shared-item
        data-test-subj="embeddedSavedSearchDocTable"
        data-title="{{renderProps.sharedItemTitle}}"
        filter="renderProps.onFilter"
        hits="renderProps.rows"
        index-pattern="renderProps.indexPattern"
        is-loading="renderProps.isLoading"
        on-add-column="renderProps.onAddColumn"
        on-change-sort-order="renderProps.onSort"
        on-move-column="renderProps.onMoveColumn"
        on-remove-column="renderProps.onRemoveColumn"
        render-complete
        sorting="renderProps.sort"
        total-hit-count="renderProps.totalHitCount"
        use-new-fields-api="renderProps.useNewFieldsApi"></doc-table>`
  };
  return async () => {
    try {
      const injector = await Object(_kibana_services__WEBPACK_IMPORTED_MODULE_2__["getServices"])().getEmbeddableInjector();
      return await Object(_create_doc_table_react__WEBPACK_IMPORTED_MODULE_3__["injectAngularElement"])(domNode, directive.template, props, injector);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
      throw e;
    }
  };
}

function DiscoverDocTableEmbeddable(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["I18nProvider"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DocTableLegacyInner, props));
}

function DocTableLegacyInner(renderProps) {
  const scope = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (renderProps.refs && !scope.current) {
      const fn = getRenderFn(renderProps.refs, renderProps);
      fn().then(newScope => {
        scope.current = newScope;
      });
    } else if (scope !== null && scope !== void 0 && scope.current) {
      scope.current.renderProps = { ...renderProps
      };
      scope.current.$applyAsync();
    }
  }, [renderProps]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    return () => {
      var _scope$current;

      (_scope$current = scope.current) === null || _scope$current === void 0 ? void 0 : _scope$current.$destroy();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
}

/***/ }),

/***/ "./public/application/embeddable/helpers/update_search_source.ts":
/*!***********************************************************************!*\
  !*** ./public/application/embeddable/helpers/update_search_source.ts ***!
  \***********************************************************************/
/*! exports provided: updateSearchSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSearchSource", function() { return updateSearchSource; });
/* harmony import */ var _angular_doc_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../angular/doc_table */ "./public/application/angular/doc_table/index.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

const updateSearchSource = (searchSource, indexPattern, sort, useNewFieldsApi, defaults) => {
  const {
    sampleSize,
    defaultSort
  } = defaults;
  searchSource.setField('size', sampleSize);
  searchSource.setField('sort', Object(_angular_doc_table__WEBPACK_IMPORTED_MODULE_0__["getSortForSearchSource"])(sort, indexPattern, defaultSort));

  if (useNewFieldsApi) {
    searchSource.removeField('fieldsFromSource');
    const fields = {
      field: '*',
      include_unmapped: 'true'
    };
    searchSource.setField('fields', [fields]);
  } else {
    searchSource.removeField('fields');
  }
};

/***/ }),

/***/ "./public/application/embeddable/saved_search_embeddable.tsx":
/*!*******************************************************************!*\
  !*** ./public/application/embeddable/saved_search_embeddable.tsx ***!
  \*******************************************************************/
/*! exports provided: SavedSearchEmbeddable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedSearchEmbeddable", function() { return SavedSearchEmbeddable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_plugins_embeddable_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../src/plugins/embeddable/public */ "plugin/embeddable/public");
/* harmony import */ var _src_plugins_embeddable_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_embeddable_public__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_plugins_inspector_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../src/plugins/inspector/common */ "plugin/inspector/common");
/* harmony import */ var _src_plugins_inspector_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_inspector_common__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./public/application/embeddable/constants.ts");
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../src/plugins/data/public */ "plugin/data/public");
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_data_public__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _saved_search_embeddable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./saved_search_embeddable_component */ "./public/application/embeddable/saved_search_embeddable_component.tsx");
/* harmony import */ var _kibana_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../kibana_services */ "./public/kibana_services.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common */ "./common/index.ts");
/* harmony import */ var _angular_doc_table_actions_columns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../angular/doc_table/actions/columns */ "./public/application/angular/doc_table/actions/columns.ts");
/* harmony import */ var _angular_doc_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../angular/doc_table */ "./public/application/angular/doc_table/index.ts");
/* harmony import */ var _angular_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../angular/helpers */ "./public/application/angular/helpers/index.ts");
/* harmony import */ var _helpers_update_search_source__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers/update_search_source */ "./public/application/embeddable/helpers/update_search_source.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */















class SavedSearchEmbeddable extends _src_plugins_embeddable_public__WEBPACK_IMPORTED_MODULE_4__["Embeddable"] {
  constructor({
    savedSearch,
    editUrl,
    editPath,
    indexPatterns,
    editable,
    filterManager,
    services
  }, initialInput, executeTriggerActions, parent) {
    super(initialInput, {
      defaultTitle: savedSearch.title,
      editUrl,
      editPath,
      editApp: 'discover',
      indexPatterns,
      editable
    }, parent);
    this.executeTriggerActions = executeTriggerActions;

    _defineProperty(this, "savedSearch", void 0);

    _defineProperty(this, "inspectorAdapters", void 0);

    _defineProperty(this, "panelTitle", '');

    _defineProperty(this, "filtersSearchSource", void 0);

    _defineProperty(this, "subscription", void 0);

    _defineProperty(this, "type", _constants__WEBPACK_IMPORTED_MODULE_6__["SEARCH_EMBEDDABLE_TYPE"]);

    _defineProperty(this, "filterManager", void 0);

    _defineProperty(this, "abortController", void 0);

    _defineProperty(this, "services", void 0);

    _defineProperty(this, "prevTimeRange", void 0);

    _defineProperty(this, "prevFilters", void 0);

    _defineProperty(this, "prevQuery", void 0);

    _defineProperty(this, "prevSearchSessionId", void 0);

    _defineProperty(this, "searchProps", void 0);

    _defineProperty(this, "node", void 0);

    _defineProperty(this, "fetch", async () => {
      const searchSessionId = this.input.searchSessionId;
      const useNewFieldsApi = !this.services.uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_10__["SEARCH_FIELDS_FROM_SOURCE"], false);
      if (!this.searchProps) return;
      const {
        searchSource
      } = this.savedSearch; // Abort any in-progress requests

      if (this.abortController) this.abortController.abort();
      this.abortController = new AbortController();
      Object(_helpers_update_search_source__WEBPACK_IMPORTED_MODULE_14__["updateSearchSource"])(searchSource, this.searchProps.indexPattern, this.searchProps.sort, useNewFieldsApi, {
        sampleSize: this.services.uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_10__["SAMPLE_SIZE_SETTING"]),
        defaultSort: this.services.uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_10__["SORT_DEFAULT_ORDER_SETTING"])
      }); // Log request to inspector

      this.inspectorAdapters.requests.reset();
      this.searchProps.isLoading = true;
      this.updateOutput({
        loading: true,
        error: undefined
      });

      try {
        // Make the request
        const {
          rawResponse: resp
        } = await searchSource.fetch$({
          abortSignal: this.abortController.signal,
          sessionId: searchSessionId,
          inspector: {
            adapter: this.inspectorAdapters.requests,
            title: _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.embeddable.inspectorRequestDataTitle', {
              defaultMessage: 'Data'
            }),
            description: _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.embeddable.inspectorRequestDescription', {
              defaultMessage: 'This request queries Elasticsearch to fetch the data for the search.'
            })
          }
        }).toPromise();
        this.updateOutput({
          loading: false,
          error: undefined
        });
        this.searchProps.rows = resp.hits.hits;
        this.searchProps.totalHitCount = resp.hits.total;
        this.searchProps.isLoading = false;
      } catch (error) {
        this.updateOutput({
          loading: false,
          error
        });
        this.searchProps.isLoading = false;
      }
    });

    this.services = services;
    this.filterManager = filterManager;
    this.savedSearch = savedSearch;
    this.inspectorAdapters = {
      requests: new _src_plugins_inspector_common__WEBPACK_IMPORTED_MODULE_5__["RequestAdapter"]()
    };
    this.initializeSearchEmbeddableProps();
    this.subscription = this.getUpdated$().subscribe(() => {
      this.panelTitle = this.output.title || '';

      if (this.searchProps) {
        this.pushContainerStateParamsToProps(this.searchProps);
      }
    });
  }

  initializeSearchEmbeddableProps() {
    const {
      searchSource
    } = this.savedSearch;
    const indexPattern = searchSource.getField('index');

    if (!indexPattern) {
      return;
    }

    if (!this.savedSearch.sort || !this.savedSearch.sort.length) {
      this.savedSearch.sort = Object(_angular_doc_table__WEBPACK_IMPORTED_MODULE_12__["getDefaultSort"])(indexPattern, Object(_kibana_services__WEBPACK_IMPORTED_MODULE_9__["getServices"])().uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_10__["SORT_DEFAULT_ORDER_SETTING"], 'desc'));
    }

    const props = {
      columns: this.savedSearch.columns,
      indexPattern,
      isLoading: false,
      sort: Object(_angular_doc_table__WEBPACK_IMPORTED_MODULE_12__["getDefaultSort"])(indexPattern, Object(_kibana_services__WEBPACK_IMPORTED_MODULE_9__["getServices"])().uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_10__["SORT_DEFAULT_ORDER_SETTING"], 'desc')),
      rows: [],
      searchDescription: this.savedSearch.description,
      description: this.savedSearch.description,
      inspectorAdapters: this.inspectorAdapters,
      searchTitle: this.savedSearch.lastSavedTitle,
      services: this.services,
      onAddColumn: columnName => {
        if (!props.columns) {
          return;
        }

        const updatedColumns = _angular_doc_table_actions_columns__WEBPACK_IMPORTED_MODULE_11__["addColumn"](props.columns, columnName, true);
        this.updateInput({
          columns: updatedColumns
        });
      },
      onRemoveColumn: columnName => {
        if (!props.columns) {
          return;
        }

        const updatedColumns = _angular_doc_table_actions_columns__WEBPACK_IMPORTED_MODULE_11__["removeColumn"](props.columns, columnName, true);
        this.updateInput({
          columns: updatedColumns
        });
      },
      onMoveColumn: (columnName, newIndex) => {
        if (!props.columns) {
          return;
        }

        const columns = _angular_doc_table_actions_columns__WEBPACK_IMPORTED_MODULE_11__["moveColumn"](props.columns, columnName, newIndex);
        this.updateInput({
          columns
        });
      },
      onSetColumns: columns => {
        this.updateInput({
          columns
        });
      },
      onSort: sort => {
        const sortOrderArr = [];
        sort.forEach(arr => {
          sortOrderArr.push(arr);
        });
        this.updateInput({
          sort: sortOrderArr
        });
      },
      sampleSize: 500,
      onFilter: async (field, value, operator) => {
        let filters = _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_7__["esFilters"].generateFilters(this.filterManager, // @ts-expect-error
        field, value, operator, indexPattern.id);
        filters = filters.map(filter => ({ ...filter,
          $state: {
            store: _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_7__["esFilters"].FilterStateStore.APP_STATE
          }
        }));
        await this.executeTriggerActions(_src_plugins_data_public__WEBPACK_IMPORTED_MODULE_7__["APPLY_FILTER_TRIGGER"], {
          embeddable: this,
          filters
        });
      },
      useNewFieldsApi: !this.services.uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_10__["SEARCH_FIELDS_FROM_SOURCE"], false),
      showTimeCol: !this.services.uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_10__["DOC_HIDE_TIME_COLUMN_SETTING"], false),
      ariaLabelledBy: 'documentsAriaLabel'
    };
    const timeRangeSearchSource = searchSource.create();
    timeRangeSearchSource.setField('filter', () => {
      if (!this.searchProps || !this.input.timeRange) return;
      return this.services.timefilter.createFilter(indexPattern, this.input.timeRange);
    });
    this.filtersSearchSource = searchSource.create();
    this.filtersSearchSource.setParent(timeRangeSearchSource);
    searchSource.setParent(this.filtersSearchSource);
    this.pushContainerStateParamsToProps(props);
    props.isLoading = true;

    if (this.savedSearch.grid) {
      props.settings = this.savedSearch.grid;
    }
  }

  async pushContainerStateParamsToProps(searchProps, {
    forceFetch = false
  } = {
    forceFetch: false
  }) {
    var _this$searchProps;

    const isFetchRequired = !_src_plugins_data_public__WEBPACK_IMPORTED_MODULE_7__["esFilters"].onlyDisabledFiltersChanged(this.input.filters, this.prevFilters) || !Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEqual"])(this.prevQuery, this.input.query) || !Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEqual"])(this.prevTimeRange, this.input.timeRange) || !Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEqual"])(searchProps.sort, this.input.sort || this.savedSearch.sort) || this.prevSearchSessionId !== this.input.searchSessionId; // If there is column or sort data on the panel, that means the original columns or sort settings have
    // been overridden in a dashboard.

    searchProps.columns = Object(_angular_helpers__WEBPACK_IMPORTED_MODULE_13__["handleSourceColumnState"])({
      columns: this.input.columns || this.savedSearch.columns
    }, this.services.core.uiSettings).columns;
    const savedSearchSort = this.savedSearch.sort && this.savedSearch.sort.length ? this.savedSearch.sort : Object(_angular_doc_table__WEBPACK_IMPORTED_MODULE_12__["getDefaultSort"])((_this$searchProps = this.searchProps) === null || _this$searchProps === void 0 ? void 0 : _this$searchProps.indexPattern, Object(_kibana_services__WEBPACK_IMPORTED_MODULE_9__["getServices"])().uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_10__["SORT_DEFAULT_ORDER_SETTING"], 'desc'));
    searchProps.sort = this.input.sort || savedSearchSort;
    searchProps.sharedItemTitle = this.panelTitle;

    if (forceFetch || isFetchRequired) {
      var _this$input$query, _this$input$filters;

      this.filtersSearchSource.setField('filter', this.input.filters);
      this.filtersSearchSource.setField('query', this.input.query);

      if ((_this$input$query = this.input.query) !== null && _this$input$query !== void 0 && _this$input$query.query || (_this$input$filters = this.input.filters) !== null && _this$input$filters !== void 0 && _this$input$filters.length) {
        this.filtersSearchSource.setField('highlightAll', true);
      } else {
        this.filtersSearchSource.removeField('highlightAll');
      }

      this.prevFilters = this.input.filters;
      this.prevQuery = this.input.query;
      this.prevTimeRange = this.input.timeRange;
      this.prevSearchSessionId = this.input.searchSessionId;
      this.searchProps = searchProps;
      await this.fetch();
    } else if (this.searchProps && this.node) {
      this.searchProps = searchProps;
    }

    if (this.node) {
      this.renderReactComponent(this.node, this.searchProps);
    }
  }
  /**
   *
   * @param {Element} domNode
   */


  async render(domNode) {
    if (!this.searchProps) {
      throw new Error('Search props not defined');
    }

    if (this.node) {
      react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(this.node);
    }

    this.node = domNode;
  }

  renderReactComponent(domNode, searchProps) {
    if (!this.searchProps) {
      return;
    }

    const useLegacyTable = this.services.uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_10__["DOC_TABLE_LEGACY"]);
    const props = {
      searchProps,
      useLegacyTable,
      refs: domNode
    };
    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_saved_search_embeddable_component__WEBPACK_IMPORTED_MODULE_8__["SavedSearchEmbeddableComponent"], props), domNode);
  }

  reload() {
    if (this.searchProps) {
      this.pushContainerStateParamsToProps(this.searchProps, {
        forceFetch: true
      });
    }
  }

  getSavedSearch() {
    return this.savedSearch;
  }

  getInspectorAdapters() {
    return this.inspectorAdapters;
  }

  destroy() {
    var _this$subscription;

    super.destroy();
    this.savedSearch.destroy();

    if (this.searchProps) {
      delete this.searchProps;
    }

    (_this$subscription = this.subscription) === null || _this$subscription === void 0 ? void 0 : _this$subscription.unsubscribe();
    if (this.abortController) this.abortController.abort();
  }

}

/***/ }),

/***/ "./public/application/embeddable/saved_search_embeddable_component.tsx":
/*!*****************************************************************************!*\
  !*** ./public/application/embeddable/saved_search_embeddable_component.tsx ***!
  \*****************************************************************************/
/*! exports provided: SavedSearchEmbeddableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedSearchEmbeddableComponent", function() { return SavedSearchEmbeddableComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_create_discover_grid_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../angular/create_discover_grid_directive */ "./public/application/angular/create_discover_grid_directive.tsx");
/* harmony import */ var _angular_doc_table_create_doc_table_embeddable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../angular/doc_table/create_doc_table_embeddable */ "./public/application/angular/doc_table/create_doc_table_embeddable.tsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */



const DiscoverDocTableEmbeddableMemoized = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(_angular_doc_table_create_doc_table_embeddable__WEBPACK_IMPORTED_MODULE_2__["DiscoverDocTableEmbeddable"]);
const DiscoverGridEmbeddableMemoized = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(_angular_create_discover_grid_directive__WEBPACK_IMPORTED_MODULE_1__["DiscoverGridEmbeddable"]);
function SavedSearchEmbeddableComponent({
  searchProps,
  useLegacyTable,
  refs
}) {
  if (useLegacyTable) {
    const docTableProps = { ...searchProps,
      refs
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DiscoverDocTableEmbeddableMemoized, docTableProps);
  }

  const discoverGridProps = searchProps;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DiscoverGridEmbeddableMemoized, _extends({}, discoverGridProps, {
    className: "dscDiscoverGrid"
  }));
}

/***/ })

}]);
//# sourceMappingURL=discovernew.chunk.7.js.map