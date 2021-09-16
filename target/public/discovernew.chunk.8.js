(window["discovernew_bundle_jsonpfunction"] = window["discovernew_bundle_jsonpfunction"] || []).push([[8],{

/***/ "./public/application/apps/main/utils/get_sharing_data.ts":
/*!****************************************************************!*\
  !*** ./public/application/apps/main/utils/get_sharing_data.ts ***!
  \****************************************************************/
/*! exports provided: getSharingData, showPublicUrlSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSharingData", function() { return getSharingData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPublicUrlSwitch", function() { return showPublicUrlSwitch; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common */ "./common/index.ts");
/* harmony import */ var _angular_doc_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../angular/doc_table */ "./public/application/angular/doc_table/index.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


/**
 * Preparing data to share the current state as link or CSV/Report
 */

async function getSharingData(currentSearchSource, state, config) {
  const searchSource = currentSearchSource.createCopy();
  const index = searchSource.getField('index');
  searchSource.setField('sort', Object(_angular_doc_table__WEBPACK_IMPORTED_MODULE_1__["getSortForSearchSource"])(state.sort, index, config.get(_common__WEBPACK_IMPORTED_MODULE_0__["SORT_DEFAULT_ORDER_SETTING"])));
  searchSource.removeField('highlight');
  searchSource.removeField('highlightAll');
  searchSource.removeField('aggs');
  searchSource.removeField('size'); // Columns that the user has selected in the saved search

  let columns = state.columns || [];

  if (columns && columns.length > 0) {
    // conditionally add the time field column:
    let timeFieldName;
    const hideTimeColumn = config.get(_common__WEBPACK_IMPORTED_MODULE_0__["DOC_HIDE_TIME_COLUMN_SETTING"]);

    if (!hideTimeColumn && index && index.timeFieldName) {
      timeFieldName = index.timeFieldName;
    }

    if (timeFieldName && !columns.includes(timeFieldName)) {
      columns = [timeFieldName, ...columns];
    }
  }

  return {
    searchSource: searchSource.getSerializedFields(true),
    columns
  };
}
const showPublicUrlSwitch = anonymousUserCapabilities => {
  if (!anonymousUserCapabilities.discover) return false;
  const discover = anonymousUserCapabilities.discover;
  return !!discover.show;
};

/***/ })

}]);
//# sourceMappingURL=discovernew.chunk.8.js.map