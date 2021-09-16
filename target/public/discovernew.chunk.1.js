(window["discovernew_bundle_jsonpfunction"] = window["discovernew_bundle_jsonpfunction"] || []).push([[1],{

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/components/doc_viewer/doc_viewer.scss?v8dark":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-0-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./public/application/components/doc_viewer/doc_viewer.scss?v8dark ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n@media only screen and (max-width: 574px) {\n  .kbnDocViewerTable {\n    table-layout: fixed; } }\n\n@media only screen and (min-width: 575px) and (max-width: 767px) {\n  .kbnDocViewerTable {\n    table-layout: fixed; } }\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .kbnDocViewerTable {\n    table-layout: fixed; } }\n\n.kbnDocViewer pre,\n.kbnDocViewer .kbnDocViewer__value {\n  display: inline-block;\n  word-break: break-all;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  color: #FFF;\n  vertical-align: top;\n  padding-top: 2px; }\n\n.kbnDocViewer .kbnDocViewer__field {\n  padding-top: 8px; }\n\n.kbnDocViewer .kbnDocViewer__multifield_row:hover td {\n  background-color: transparent; }\n\n.kbnDocViewer .kbnDocViewer__multifield_title {\n  font-family: \"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; }\n\n.kbnDocViewer .dscFieldName {\n  color: #98A2B3; }\n\n.kbnDocViewer td,\n.kbnDocViewer pre {\n  font-family: \"Roboto Mono\", Consolas, Menlo, Courier, monospace; }\n\n.kbnDocViewer tr:first-child td {\n  border-top-color: transparent; }\n\n.kbnDocViewer tr:hover .kbnDocViewer__actionButton {\n  opacity: 1; }\n\n.kbnDocViewer__buttons,\n.kbnDocViewer__field {\n  white-space: nowrap; }\n\n.kbnDocViewer__buttons {\n  width: 108px; }\n  .kbnDocViewer__buttons:focus-within .kbnDocViewer__actionButton {\n    opacity: 1; }\n\n.kbnDocViewer__field {\n  width: 160px; }\n  @media only screen and (max-width: 574px) {\n    .kbnDocViewer__field {\n      width: 96px; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .kbnDocViewer__field {\n      width: 96px; } }\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    .kbnDocViewer__field {\n      width: 96px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .kbnDocViewer__actionButton {\n    opacity: 0; } }\n\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .kbnDocViewer__actionButton {\n    opacity: 0; } }\n\n@media only screen and (min-width: 1200px) {\n  .kbnDocViewer__actionButton {\n    opacity: 0; } }\n\n.kbnDocViewer__actionButton:focus {\n  opacity: 1; }\n\n.kbnDocViewer__warning {\n  margin-right: 8px; }\n", "",{"version":3,"sources":["doc_viewer.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE;IACE,mBAAmB,EAAE,EAAE;;AAE3B;EACE;IACE,mBAAmB,EAAE,EAAE;;AAE3B;EACE;IACE,mBAAmB,EAAE,EAAE;;AAE3B;;EAEE,qBAAqB;EACrB,qBAAqB;EACrB,qBAAqB;EACrB,qBAAqB;EACrB,WAAW;EACX,mBAAmB;EACnB,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,6BAA6B,EAAE;;AAEjC;EACE,2JAA2J,EAAE;;AAE/J;EACE,cAAc,EAAE;;AAElB;;EAEE,+DAA+D,EAAE;;AAEnE;EACE,6BAA6B,EAAE;;AAEjC;EACE,UAAU,EAAE;;AAEd;;EAEE,mBAAmB,EAAE;;AAEvB;EACE,YAAY,EAAE;EACd;IACE,UAAU,EAAE;;AAEhB;EACE,YAAY,EAAE;EACd;IACE;MACE,WAAW,EAAE,EAAE;EACnB;IACE;MACE,WAAW,EAAE,EAAE;EACnB;IACE;MACE,WAAW,EAAE,EAAE;;AAErB;EACE;IACE,UAAU,EAAE,EAAE;;AAElB;EACE;IACE,UAAU,EAAE,EAAE;;AAElB;EACE;IACE,UAAU,EAAE,EAAE;;AAElB;EACE,UAAU,EAAE;;AAEd;EACE,iBAAiB,EAAE","file":"doc_viewer.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n@media only screen and (max-width: 574px) {\n  .kbnDocViewerTable {\n    table-layout: fixed; } }\n\n@media only screen and (min-width: 575px) and (max-width: 767px) {\n  .kbnDocViewerTable {\n    table-layout: fixed; } }\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .kbnDocViewerTable {\n    table-layout: fixed; } }\n\n.kbnDocViewer pre,\n.kbnDocViewer .kbnDocViewer__value {\n  display: inline-block;\n  word-break: break-all;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  color: #FFF;\n  vertical-align: top;\n  padding-top: 2px; }\n\n.kbnDocViewer .kbnDocViewer__field {\n  padding-top: 8px; }\n\n.kbnDocViewer .kbnDocViewer__multifield_row:hover td {\n  background-color: transparent; }\n\n.kbnDocViewer .kbnDocViewer__multifield_title {\n  font-family: \"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; }\n\n.kbnDocViewer .dscFieldName {\n  color: #98A2B3; }\n\n.kbnDocViewer td,\n.kbnDocViewer pre {\n  font-family: \"Roboto Mono\", Consolas, Menlo, Courier, monospace; }\n\n.kbnDocViewer tr:first-child td {\n  border-top-color: transparent; }\n\n.kbnDocViewer tr:hover .kbnDocViewer__actionButton {\n  opacity: 1; }\n\n.kbnDocViewer__buttons,\n.kbnDocViewer__field {\n  white-space: nowrap; }\n\n.kbnDocViewer__buttons {\n  width: 108px; }\n  .kbnDocViewer__buttons:focus-within .kbnDocViewer__actionButton {\n    opacity: 1; }\n\n.kbnDocViewer__field {\n  width: 160px; }\n  @media only screen and (max-width: 574px) {\n    .kbnDocViewer__field {\n      width: 96px; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .kbnDocViewer__field {\n      width: 96px; } }\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    .kbnDocViewer__field {\n      width: 96px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .kbnDocViewer__actionButton {\n    opacity: 0; } }\n\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .kbnDocViewer__actionButton {\n    opacity: 0; } }\n\n@media only screen and (min-width: 1200px) {\n  .kbnDocViewer__actionButton {\n    opacity: 0; } }\n\n.kbnDocViewer__actionButton:focus {\n  opacity: 1; }\n\n.kbnDocViewer__warning {\n  margin-right: 8px; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/components/doc_viewer/doc_viewer.scss?v8light":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-1-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./public/application/components/doc_viewer/doc_viewer.scss?v8light ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n@media only screen and (max-width: 574px) {\n  .kbnDocViewerTable {\n    table-layout: fixed; } }\n\n@media only screen and (min-width: 575px) and (max-width: 767px) {\n  .kbnDocViewerTable {\n    table-layout: fixed; } }\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .kbnDocViewerTable {\n    table-layout: fixed; } }\n\n.kbnDocViewer pre,\n.kbnDocViewer .kbnDocViewer__value {\n  display: inline-block;\n  word-break: break-all;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  color: #000;\n  vertical-align: top;\n  padding-top: 2px; }\n\n.kbnDocViewer .kbnDocViewer__field {\n  padding-top: 8px; }\n\n.kbnDocViewer .kbnDocViewer__multifield_row:hover td {\n  background-color: transparent; }\n\n.kbnDocViewer .kbnDocViewer__multifield_title {\n  font-family: \"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; }\n\n.kbnDocViewer .dscFieldName {\n  color: #69707D; }\n\n.kbnDocViewer td,\n.kbnDocViewer pre {\n  font-family: \"Roboto Mono\", Consolas, Menlo, Courier, monospace; }\n\n.kbnDocViewer tr:first-child td {\n  border-top-color: transparent; }\n\n.kbnDocViewer tr:hover .kbnDocViewer__actionButton {\n  opacity: 1; }\n\n.kbnDocViewer__buttons,\n.kbnDocViewer__field {\n  white-space: nowrap; }\n\n.kbnDocViewer__buttons {\n  width: 108px; }\n  .kbnDocViewer__buttons:focus-within .kbnDocViewer__actionButton {\n    opacity: 1; }\n\n.kbnDocViewer__field {\n  width: 160px; }\n  @media only screen and (max-width: 574px) {\n    .kbnDocViewer__field {\n      width: 96px; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .kbnDocViewer__field {\n      width: 96px; } }\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    .kbnDocViewer__field {\n      width: 96px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .kbnDocViewer__actionButton {\n    opacity: 0; } }\n\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .kbnDocViewer__actionButton {\n    opacity: 0; } }\n\n@media only screen and (min-width: 1200px) {\n  .kbnDocViewer__actionButton {\n    opacity: 0; } }\n\n.kbnDocViewer__actionButton:focus {\n  opacity: 1; }\n\n.kbnDocViewer__warning {\n  margin-right: 8px; }\n", "",{"version":3,"sources":["doc_viewer.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE;IACE,mBAAmB,EAAE,EAAE;;AAE3B;EACE;IACE,mBAAmB,EAAE,EAAE;;AAE3B;EACE;IACE,mBAAmB,EAAE,EAAE;;AAE3B;;EAEE,qBAAqB;EACrB,qBAAqB;EACrB,qBAAqB;EACrB,qBAAqB;EACrB,WAAW;EACX,mBAAmB;EACnB,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB,EAAE;;AAEpB;EACE,6BAA6B,EAAE;;AAEjC;EACE,2JAA2J,EAAE;;AAE/J;EACE,cAAc,EAAE;;AAElB;;EAEE,+DAA+D,EAAE;;AAEnE;EACE,6BAA6B,EAAE;;AAEjC;EACE,UAAU,EAAE;;AAEd;;EAEE,mBAAmB,EAAE;;AAEvB;EACE,YAAY,EAAE;EACd;IACE,UAAU,EAAE;;AAEhB;EACE,YAAY,EAAE;EACd;IACE;MACE,WAAW,EAAE,EAAE;EACnB;IACE;MACE,WAAW,EAAE,EAAE;EACnB;IACE;MACE,WAAW,EAAE,EAAE;;AAErB;EACE;IACE,UAAU,EAAE,EAAE;;AAElB;EACE;IACE,UAAU,EAAE,EAAE;;AAElB;EACE;IACE,UAAU,EAAE,EAAE;;AAElB;EACE,UAAU,EAAE;;AAEd;EACE,iBAAiB,EAAE","file":"doc_viewer.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n@media only screen and (max-width: 574px) {\n  .kbnDocViewerTable {\n    table-layout: fixed; } }\n\n@media only screen and (min-width: 575px) and (max-width: 767px) {\n  .kbnDocViewerTable {\n    table-layout: fixed; } }\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .kbnDocViewerTable {\n    table-layout: fixed; } }\n\n.kbnDocViewer pre,\n.kbnDocViewer .kbnDocViewer__value {\n  display: inline-block;\n  word-break: break-all;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  color: #000;\n  vertical-align: top;\n  padding-top: 2px; }\n\n.kbnDocViewer .kbnDocViewer__field {\n  padding-top: 8px; }\n\n.kbnDocViewer .kbnDocViewer__multifield_row:hover td {\n  background-color: transparent; }\n\n.kbnDocViewer .kbnDocViewer__multifield_title {\n  font-family: \"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; }\n\n.kbnDocViewer .dscFieldName {\n  color: #69707D; }\n\n.kbnDocViewer td,\n.kbnDocViewer pre {\n  font-family: \"Roboto Mono\", Consolas, Menlo, Courier, monospace; }\n\n.kbnDocViewer tr:first-child td {\n  border-top-color: transparent; }\n\n.kbnDocViewer tr:hover .kbnDocViewer__actionButton {\n  opacity: 1; }\n\n.kbnDocViewer__buttons,\n.kbnDocViewer__field {\n  white-space: nowrap; }\n\n.kbnDocViewer__buttons {\n  width: 108px; }\n  .kbnDocViewer__buttons:focus-within .kbnDocViewer__actionButton {\n    opacity: 1; }\n\n.kbnDocViewer__field {\n  width: 160px; }\n  @media only screen and (max-width: 574px) {\n    .kbnDocViewer__field {\n      width: 96px; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .kbnDocViewer__field {\n      width: 96px; } }\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    .kbnDocViewer__field {\n      width: 96px; } }\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .kbnDocViewer__actionButton {\n    opacity: 0; } }\n\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .kbnDocViewer__actionButton {\n    opacity: 0; } }\n\n@media only screen and (min-width: 1200px) {\n  .kbnDocViewer__actionButton {\n    opacity: 0; } }\n\n.kbnDocViewer__actionButton:focus {\n  opacity: 1; }\n\n.kbnDocViewer__warning {\n  margin-right: 8px; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./public/application/angular/helpers/index.ts":
/*!*****************************************************!*\
  !*** ./public/application/angular/helpers/index.ts ***!
  \*****************************************************/
/*! exports provided: formatRow, formatTopLevelObject, handleSourceColumnState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _row_formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./row_formatter */ "./public/application/angular/helpers/row_formatter.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatRow", function() { return _row_formatter__WEBPACK_IMPORTED_MODULE_0__["formatRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatTopLevelObject", function() { return _row_formatter__WEBPACK_IMPORTED_MODULE_0__["formatTopLevelObject"]; });

/* harmony import */ var _state_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state_helpers */ "./public/application/angular/helpers/state_helpers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleSourceColumnState", function() { return _state_helpers__WEBPACK_IMPORTED_MODULE_1__["handleSourceColumnState"]; });

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */



/***/ }),

/***/ "./public/application/angular/helpers/row_formatter.tsx":
/*!**************************************************************!*\
  !*** ./public/application/angular/helpers/row_formatter.tsx ***!
  \**************************************************************/
/*! exports provided: formatRow, formatTopLevelObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatRow", function() { return formatRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTopLevelObject", function() { return formatTopLevelObject; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common */ "./common/index.ts");
/* harmony import */ var _kibana_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../kibana_services */ "./public/kibana_services.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */





const TemplateComponent = ({
  defPairs
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", {
    className: 'source truncate-by-height'
  }, defPairs.map((pair, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    key: idx
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", null, pair[0], ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
    // We  can dangerously set HTML here because this content is guaranteed to have been run through a valid field formatter first.
    dangerouslySetInnerHTML: {
      __html: `${pair[1]}`
    } // eslint-disable-line react/no-danger

  }), ' ')));
}; // eslint-disable-next-line @typescript-eslint/no-explicit-any


const formatRow = (hit, indexPattern) => {
  var _hit$highlight;

  const highlights = (_hit$highlight = hit === null || hit === void 0 ? void 0 : hit.highlight) !== null && _hit$highlight !== void 0 ? _hit$highlight : {}; // Keys are sorted in the hits object

  const formatted = indexPattern.formatHit(hit);
  const fields = indexPattern.fields;
  const highlightPairs = [];
  const sourcePairs = [];
  Object.entries(formatted).forEach(([key, val]) => {
    var _fields$getByName;

    const displayKey = fields.getByName ? (_fields$getByName = fields.getByName(key)) === null || _fields$getByName === void 0 ? void 0 : _fields$getByName.displayName : undefined;
    const pairs = highlights[key] ? highlightPairs : sourcePairs;
    pairs.push([displayKey ? displayKey : key, val]);
  });
  const maxEntries = Object(_kibana_services__WEBPACK_IMPORTED_MODULE_3__["getServices"])().uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_2__["MAX_DOC_FIELDS_DISPLAYED"]);
  return react_dom_server__WEBPACK_IMPORTED_MODULE_1___default.a.renderToStaticMarkup( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TemplateComponent, {
    defPairs: [...highlightPairs, ...sourcePairs].slice(0, maxEntries)
  }));
};
const formatTopLevelObject = (row, fields, indexPattern) => {
  var _row$highlight;

  const highlights = (_row$highlight = row.highlight) !== null && _row$highlight !== void 0 ? _row$highlight : {};
  const highlightPairs = [];
  const sourcePairs = [];
  const sorted = Object.entries(fields).sort(([keyA], [keyB]) => keyA.localeCompare(keyB));
  sorted.forEach(([key, values]) => {
    var _fields$getByName2;

    const field = indexPattern.getFieldByName(key);
    const displayKey = fields.getByName ? (_fields$getByName2 = fields.getByName(key)) === null || _fields$getByName2 === void 0 ? void 0 : _fields$getByName2.displayName : undefined;
    const formatter = field ? indexPattern.getFormatterForField(field) : {
      convert: (v, ...rest) => String(v)
    };
    if (!values.map) return;
    const formatted = values.map(val => formatter.convert(val, 'html', {
      field,
      hit: row,
      indexPattern
    })).join(', ');
    const pairs = highlights[key] ? highlightPairs : sourcePairs;
    pairs.push([displayKey ? displayKey : key, formatted]);
  });
  const maxEntries = Object(_kibana_services__WEBPACK_IMPORTED_MODULE_3__["getServices"])().uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_2__["MAX_DOC_FIELDS_DISPLAYED"]);
  return react_dom_server__WEBPACK_IMPORTED_MODULE_1___default.a.renderToStaticMarkup( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TemplateComponent, {
    defPairs: [...highlightPairs, ...sourcePairs].slice(0, maxEntries)
  }));
};

/***/ }),

/***/ "./public/application/angular/helpers/state_helpers.ts":
/*!*************************************************************!*\
  !*** ./public/application/angular/helpers/state_helpers.ts ***!
  \*************************************************************/
/*! exports provided: handleSourceColumnState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleSourceColumnState", function() { return handleSourceColumnState; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common */ "./common/index.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


/**
 * Makes sure the current state is not referencing the source column when using the fields api
 * @param state
 * @param uiSettings
 */

function handleSourceColumnState(state, uiSettings) {
  if (!state.columns) {
    return state;
  }

  const useNewFieldsApi = !uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_1__["SEARCH_FIELDS_FROM_SOURCE"]);
  const defaultColumns = uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_COLUMNS_SETTING"]);

  if (useNewFieldsApi) {
    // if fields API is used, filter out the source column
    let cleanedColumns = state.columns.filter(column => column !== '_source');

    if (cleanedColumns.length === 0 && !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(defaultColumns, ['_source'])) {
      cleanedColumns = defaultColumns; // defaultColumns could still contain _source

      cleanedColumns = cleanedColumns.filter(column => column !== '_source');
    }

    return { ...state,
      columns: cleanedColumns
    };
  } else if (state.columns.length === 0) {
    // if _source fetching is used and there are no column, switch back to default columns
    // this can happen if the fields API was previously used
    return { ...state,
      columns: [...defaultColumns]
    };
  }

  return state;
}

/***/ }),

/***/ "./public/application/components/doc_viewer/doc_viewer.scss":
/*!******************************************************************!*\
  !*** ./public/application/components/doc_viewer/doc_viewer.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__kbnThemeTag__) {
  case 'v7dark':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7dark]. Styles were compiled using the [v8dark] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7dark] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./doc_viewer.scss?v8dark */ "./public/application/components/doc_viewer/doc_viewer.scss?v8dark")

  case 'v7light':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7light]. Styles were compiled using the [v8light] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7light] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./doc_viewer.scss?v8light */ "./public/application/components/doc_viewer/doc_viewer.scss?v8light")

  case 'v8dark':
    return __webpack_require__(/*! ./doc_viewer.scss?v8dark */ "./public/application/components/doc_viewer/doc_viewer.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./doc_viewer.scss?v8light */ "./public/application/components/doc_viewer/doc_viewer.scss?v8light");
}

/***/ }),

/***/ "./public/application/components/doc_viewer/doc_viewer.scss?v8dark":
/*!*************************************************************************!*\
  !*** ./public/application/components/doc_viewer/doc_viewer.scss?v8dark ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-0-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./doc_viewer.scss?v8dark */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/components/doc_viewer/doc_viewer.scss?v8dark");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./public/application/components/doc_viewer/doc_viewer.scss?v8light":
/*!**************************************************************************!*\
  !*** ./public/application/components/doc_viewer/doc_viewer.scss?v8light ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./doc_viewer.scss?v8light */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/components/doc_viewer/doc_viewer.scss?v8light");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./public/application/components/doc_viewer/doc_viewer.tsx":
/*!*****************************************************************!*\
  !*** ./public/application/components/doc_viewer/doc_viewer.tsx ***!
  \*****************************************************************/
/*! exports provided: DocViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocViewer", function() { return DocViewer; });
/* harmony import */ var _doc_viewer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doc_viewer.scss */ "./public/application/components/doc_viewer/doc_viewer.scss");
/* harmony import */ var _doc_viewer_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_doc_viewer_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kibana_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../kibana_services */ "./public/kibana_services.ts");
/* harmony import */ var _doc_viewer_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./doc_viewer_tab */ "./public/application/components/doc_viewer/doc_viewer_tab.tsx");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */






/**
 * Rendering tabs with different views of 1 Elasticsearch hit in Discover.
 * The tabs are provided by the `docs_views` registry.
 * A view can contain a React `component`, or any JS framework by using
 * a `render` function.
 */
function DocViewer(renderProps) {
  const docViewsRegistry = Object(_kibana_services__WEBPACK_IMPORTED_MODULE_3__["getDocViewsRegistry"])();
  const tabs = docViewsRegistry.getDocViewsSorted(renderProps.hit).map(({
    title,
    render,
    component
  }, idx) => {
    return {
      id: `kbn_doc_viewer_tab_${idx}`,
      name: title,
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_doc_viewer_tab__WEBPACK_IMPORTED_MODULE_4__["DocViewerTab"], {
        id: idx,
        title: title,
        component: component,
        renderProps: renderProps,
        render: render
      })
    };
  });

  if (!tabs.length) {
    // There there's a minimum of 2 tabs active in Discover.
    // This condition takes care of unit tests with 0 tabs.
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "kbnDocViewer",
    "data-test-subj": "kbnDocViewer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiTabbedContent"], {
    size: "s",
    tabs: tabs
  }));
}

/***/ }),

/***/ "./public/application/components/doc_viewer/doc_viewer_render_tab.tsx":
/*!****************************************************************************!*\
  !*** ./public/application/components/doc_viewer/doc_viewer_render_tab.tsx ***!
  \****************************************************************************/
/*! exports provided: DocViewRenderTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocViewRenderTab", function() { return DocViewRenderTab; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


/**
 * Responsible for rendering a tab provided by a render function.
 * So any other framework can be used (E.g. legacy Angular 3rd party plugin code)
 * The provided `render` function is called with a reference to the
 * component's `HTMLDivElement` as 1st arg and `renderProps` as 2nd arg
 */
function DocViewRenderTab({
  render,
  renderProps
}) {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (ref && ref.current) {
      return render(ref.current, renderProps);
    }
  }, [render, renderProps]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: ref
  });
}

/***/ }),

/***/ "./public/application/components/doc_viewer/doc_viewer_tab.tsx":
/*!*********************************************************************!*\
  !*** ./public/application/components/doc_viewer/doc_viewer_tab.tsx ***!
  \*********************************************************************/
/*! exports provided: DocViewerTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocViewerTab", function() { return DocViewerTab; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _doc_viewer_render_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doc_viewer_render_tab */ "./public/application/components/doc_viewer/doc_viewer_render_tab.tsx");
/* harmony import */ var _doc_viewer_render_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./doc_viewer_render_error */ "./public/application/components/doc_viewer/doc_viewer_render_error.tsx");
/* harmony import */ var _kibana_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../kibana_services */ "./public/kibana_services.ts");
/* harmony import */ var _src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/plugins/kibana_react/public */ "plugin/kibanaReact/public");
/* harmony import */ var _src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_6__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */








/**
 * Renders the tab content of a doc view.
 * Displays an error message when it encounters exceptions, thanks to
 * Error Boundaries.
 */
class DocViewerTab extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      hasError: false,
      error: ''
    });
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
      error
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.renderProps.hit._id !== this.props.renderProps.hit._id || nextProps.id !== this.props.id || !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(nextProps.renderProps.columns, this.props.renderProps.columns) || nextState.hasError;
  }

  render() {
    const {
      component: Component,
      render,
      renderProps,
      title
    } = this.props;
    const {
      hasError,
      error
    } = this.state;

    if (hasError && error) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_doc_viewer_render_error__WEBPACK_IMPORTED_MODULE_4__["DocViewerError"], {
        error: error
      });
    }

    if (render) {
      // doc view is provided by a render function, e.g. for legacy Angular code
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_doc_viewer_render_tab__WEBPACK_IMPORTED_MODULE_3__["DocViewRenderTab"], {
        render: render,
        renderProps: renderProps
      });
    } // doc view is provided by a react component


    if (Component) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__["I18nProvider"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_6__["KibanaContextProvider"], {
        services: {
          uiSettings: Object(_kibana_services__WEBPACK_IMPORTED_MODULE_5__["getServices"])().uiSettings
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, renderProps)));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_doc_viewer_render_error__WEBPACK_IMPORTED_MODULE_4__["DocViewerError"], {
      error: `Invalid plugin ${title}, there is neither a (react) component nor a render function provided`
    });
  }

}

/***/ })

}]);
//# sourceMappingURL=discovernew.chunk.1.js.map