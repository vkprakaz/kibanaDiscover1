(window["discovernew_bundle_jsonpfunction"] = window["discovernew_bundle_jsonpfunction"] || []).push([[0],{

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/angular/doc_table/index.scss?v8dark":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-0-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./public/application/angular/doc_table/index.scss?v8dark ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n/**\n * 1. Stack content vertically so the table can scroll when its constrained by a fixed container height.\n */\ndoc-table {\n  scrollbar-width: thin;\n  overflow: auto;\n  flex: 1 1 100%;\n  flex-direction: column;\n  /* 1 */ }\n  doc-table::-webkit-scrollbar {\n    width: 16px;\n    height: 16px; }\n  doc-table::-webkit-scrollbar-thumb {\n    background-color: rgba(152, 162, 179, 0.5);\n    border: 6px solid transparent;\n    background-clip: content-box; }\n  doc-table::-webkit-scrollbar-corner, doc-table::-webkit-scrollbar-track {\n    background-color: transparent; }\n  doc-table th {\n    text-align: left;\n    font-weight: bold; }\n  doc-table .spinner {\n    position: absolute;\n    top: 40%;\n    left: 0;\n    right: 0;\n    z-index: 1000;\n    opacity: .5; }\n\n.kbnDocTable__container.loading {\n  opacity: .5; }\n\n.kbnDocTable {\n  font-size: 12px; }\n  .kbnDocTable th {\n    white-space: nowrap;\n    padding-right: 8px; }\n    .kbnDocTable th .fa {\n      font-size: 1.1em; }\n\n.kbn-table,\n.kbnDocTable {\n  /**\n  *  Style ES document _source in table view <dt>key:<dt><dd>value</dd>\n  *  Use alpha so this will stand out against non-white backgrounds, e.g. the highlighted\n  *  row in the Context Log.\n  */ }\n  .kbn-table dl.source,\n  .kbnDocTable dl.source {\n    margin-bottom: 0;\n    line-height: 2em;\n    word-break: break-word; }\n    .kbn-table dl.source dt,\n    .kbn-table dl.source dd,\n    .kbnDocTable dl.source dt,\n    .kbnDocTable dl.source dd {\n      display: inline; }\n    .kbn-table dl.source dt,\n    .kbnDocTable dl.source dt {\n      background-color: rgba(43, 130, 191, 0.1);\n      color: #DFE5EF;\n      padding: 2px 4px;\n      margin-right: 4px;\n      word-break: normal;\n      border-radius: 6px; }\n\n.kbnDocTable__row td {\n  position: relative; }\n  .kbnDocTable__row td:hover .kbnDocTableRowFilterButton {\n    opacity: 1; }\n\n.kbnDocTable__row--highlight td,\n.kbnDocTable__row--highlight .kbnDocTableRowFilterButton {\n  background-color: #103148; }\n\n.kbnDocTable__bar {\n  margin: 4px 4px 0; }\n\n.kbnDocTable__bar--footer {\n  position: relative;\n  margin: -48px 4px 0; }\n\n.kbnDocTable__padBottom {\n  padding-bottom: 32px; }\n\n.kbnDocTable__error {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex: 1 0 100%;\n  text-align: center; }\n\n.truncate-by-height {\n  overflow: hidden; }\n\n.table .table {\n  background-color: #1D1E24; }\n\n.kbn-table .table .table {\n  margin-bottom: 0; }\n  .kbn-table .table .table tr:first-child > td {\n    border-top: none; }\n  .kbn-table .table .table td.field-name {\n    font-weight: 700; }\n\ntable th i.fa-sort {\n  color: #343741; }\n\ntable th button.fa-sort-asc,\ntable th button.fa-sort-down,\ntable th i.fa-sort-asc,\ntable th i.fa-sort-down {\n  color: #36A2EF; }\n\ntable th button.fa-sort-desc,\ntable th button.fa-sort-up,\ntable th i.fa-sort-desc,\ntable th i.fa-sort-up {\n  color: #36A2EF; }\n\n.kbnDocTableHeader {\n  white-space: nowrap; }\n\n.kbnDocTableHeader button {\n  margin-left: 4px; }\n\n.kbnDocTableHeader__move,\n.kbnDocTableHeader__sortChange {\n  opacity: 0; }\n  th:hover .kbnDocTableHeader__move, .kbnDocTableHeader__move:focus, th:hover\n  .kbnDocTableHeader__sortChange,\n  .kbnDocTableHeader__sortChange:focus {\n    opacity: 1; }\n\n.kbnDocTableCell__dataField {\n  white-space: pre-wrap; }\n\n.kbnDocTableCell__toggleDetails {\n  padding: 4px 0 0 0 !important; }\n\n.kbnDocTableCell__filter {\n  position: absolute;\n  white-space: nowrap;\n  right: 0; }\n\n/**\n * 1. Align icon with text in cell.\n * 2. Use opacity to make this element accessible to screen readers and keyboard.\n * 3. Show on focus to enable keyboard accessibility.\n */\n.kbnDocTableRowFilterButton {\n  -webkit-appearance: none;\n          appearance: none;\n  background-color: #1D1E24;\n  border: none;\n  padding: 0 4px;\n  font-size: 14px;\n  line-height: 1;\n  /* 1 */\n  display: inline-block;\n  opacity: 0;\n  /* 2 */ }\n  .kbnDocTableRowFilterButton:focus {\n    opacity: 1;\n    /* 3 */ }\n\n/**\n * 1. Visually align the actions with the tabs. We can improve this by using flexbox instead, at a later point.\n */\n.kbnDocTableDetails__actions {\n  float: right;\n  padding-top: 8px;\n  /* 1 */ }\n\n.kbnDocTableDetails__row > td {\n  padding: 24px !important; }\n  .kbnDocTableDetails__row > td tr:hover td {\n    background: #1e1e25; }\n\n.kbnDocTableDetails__row td {\n  border-top: none !important; }\n\n/**\n * 1. When switching between open and closed, the toggle changes size\n *    slightly which is a problem because it forces the entire table to\n *    re-render which is SLOW.\n */\n.kbnDocTableOpen__button {\n  -webkit-appearance: none;\n          appearance: none;\n  background-color: transparent;\n  padding: 0;\n  border: none;\n  width: 14px;\n  /* 1 */\n  height: 14px; }\n", "",{"version":3,"sources":["index.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;;EAEE;AACF;EACE,qBAAqB;EACrB,cAAc;EACd,cAAc;EACd,sBAAsB;EACtB,MAAM,EAAE;EACR;IACE,WAAW;IACX,YAAY,EAAE;EAChB;IACE,0CAA0C;IAC1C,6BAA6B;IAC7B,4BAA4B,EAAE;EAChC;IACE,6BAA6B,EAAE;EACjC;IACE,gBAAgB;IAChB,iBAAiB,EAAE;EACrB;IACE,kBAAkB;IAClB,QAAQ;IACR,OAAO;IACP,QAAQ;IACR,aAAa;IACb,WAAW,EAAE;;AAEjB;EACE,WAAW,EAAE;;AAEf;EACE,eAAe,EAAE;EACjB;IACE,mBAAmB;IACnB,kBAAkB,EAAE;IACpB;MACE,gBAAgB,EAAE;;AAExB;;EAEE;;;;GAIC,EAAE;EACH;;IAEE,gBAAgB;IAChB,gBAAgB;IAChB,sBAAsB,EAAE;IACxB;;;;MAIE,eAAe,EAAE;IACnB;;MAEE,yCAAyC;MACzC,cAAc;MACd,gBAAgB;MAChB,iBAAiB;MACjB,kBAAkB;MAClB,kBAAkB,EAAE;;AAE1B;EACE,kBAAkB,EAAE;EACpB;IACE,UAAU,EAAE;;AAEhB;;EAEE,yBAAyB,EAAE;;AAE7B;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB;EAClB,mBAAmB,EAAE;;AAEvB;EACE,oBAAoB,EAAE;;AAExB;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,cAAc;EACd,kBAAkB,EAAE;;AAEtB;EACE,gBAAgB,EAAE;;AAEpB;EACE,yBAAyB,EAAE;;AAE7B;EACE,gBAAgB,EAAE;EAClB;IACE,gBAAgB,EAAE;EACpB;IACE,gBAAgB,EAAE;;AAEtB;EACE,cAAc,EAAE;;AAElB;;;;EAIE,cAAc,EAAE;;AAElB;;;;EAIE,cAAc,EAAE;;AAElB;EACE,mBAAmB,EAAE;;AAEvB;EACE,gBAAgB,EAAE;;AAEpB;;EAEE,UAAU,EAAE;EACZ;;;IAGE,UAAU,EAAE;;AAEhB;EACE,qBAAqB,EAAE;;AAEzB;EACE,6BAA6B,EAAE;;AAEjC;EACE,kBAAkB;EAClB,mBAAmB;EACnB,QAAQ,EAAE;;AAEZ;;;;EAIE;AACF;EACE,wBAAgB;UAAhB,gBAAgB;EAChB,yBAAyB;EACzB,YAAY;EACZ,cAAc;EACd,eAAe;EACf,cAAc;EACd,MAAM;EACN,qBAAqB;EACrB,UAAU;EACV,MAAM,EAAE;EACR;IACE,UAAU;IACV,MAAM,EAAE;;AAEZ;;EAEE;AACF;EACE,YAAY;EACZ,gBAAgB;EAChB,MAAM,EAAE;;AAEV;EACE,wBAAwB,EAAE;EAC1B;IACE,mBAAmB,EAAE;;AAEzB;EACE,2BAA2B,EAAE;;AAE/B;;;;EAIE;AACF;EACE,wBAAgB;UAAhB,gBAAgB;EAChB,6BAA6B;EAC7B,UAAU;EACV,YAAY;EACZ,WAAW;EACX,MAAM;EACN,YAAY,EAAE","file":"index.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n/**\n * 1. Stack content vertically so the table can scroll when its constrained by a fixed container height.\n */\ndoc-table {\n  scrollbar-width: thin;\n  overflow: auto;\n  flex: 1 1 100%;\n  flex-direction: column;\n  /* 1 */ }\n  doc-table::-webkit-scrollbar {\n    width: 16px;\n    height: 16px; }\n  doc-table::-webkit-scrollbar-thumb {\n    background-color: rgba(152, 162, 179, 0.5);\n    border: 6px solid transparent;\n    background-clip: content-box; }\n  doc-table::-webkit-scrollbar-corner, doc-table::-webkit-scrollbar-track {\n    background-color: transparent; }\n  doc-table th {\n    text-align: left;\n    font-weight: bold; }\n  doc-table .spinner {\n    position: absolute;\n    top: 40%;\n    left: 0;\n    right: 0;\n    z-index: 1000;\n    opacity: .5; }\n\n.kbnDocTable__container.loading {\n  opacity: .5; }\n\n.kbnDocTable {\n  font-size: 12px; }\n  .kbnDocTable th {\n    white-space: nowrap;\n    padding-right: 8px; }\n    .kbnDocTable th .fa {\n      font-size: 1.1em; }\n\n.kbn-table,\n.kbnDocTable {\n  /**\n  *  Style ES document _source in table view <dt>key:<dt><dd>value</dd>\n  *  Use alpha so this will stand out against non-white backgrounds, e.g. the highlighted\n  *  row in the Context Log.\n  */ }\n  .kbn-table dl.source,\n  .kbnDocTable dl.source {\n    margin-bottom: 0;\n    line-height: 2em;\n    word-break: break-word; }\n    .kbn-table dl.source dt,\n    .kbn-table dl.source dd,\n    .kbnDocTable dl.source dt,\n    .kbnDocTable dl.source dd {\n      display: inline; }\n    .kbn-table dl.source dt,\n    .kbnDocTable dl.source dt {\n      background-color: rgba(43, 130, 191, 0.1);\n      color: #DFE5EF;\n      padding: 2px 4px;\n      margin-right: 4px;\n      word-break: normal;\n      border-radius: 6px; }\n\n.kbnDocTable__row td {\n  position: relative; }\n  .kbnDocTable__row td:hover .kbnDocTableRowFilterButton {\n    opacity: 1; }\n\n.kbnDocTable__row--highlight td,\n.kbnDocTable__row--highlight .kbnDocTableRowFilterButton {\n  background-color: #103148; }\n\n.kbnDocTable__bar {\n  margin: 4px 4px 0; }\n\n.kbnDocTable__bar--footer {\n  position: relative;\n  margin: -48px 4px 0; }\n\n.kbnDocTable__padBottom {\n  padding-bottom: 32px; }\n\n.kbnDocTable__error {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex: 1 0 100%;\n  text-align: center; }\n\n.truncate-by-height {\n  overflow: hidden; }\n\n.table .table {\n  background-color: #1D1E24; }\n\n.kbn-table .table .table {\n  margin-bottom: 0; }\n  .kbn-table .table .table tr:first-child > td {\n    border-top: none; }\n  .kbn-table .table .table td.field-name {\n    font-weight: 700; }\n\ntable th i.fa-sort {\n  color: #343741; }\n\ntable th button.fa-sort-asc,\ntable th button.fa-sort-down,\ntable th i.fa-sort-asc,\ntable th i.fa-sort-down {\n  color: #36A2EF; }\n\ntable th button.fa-sort-desc,\ntable th button.fa-sort-up,\ntable th i.fa-sort-desc,\ntable th i.fa-sort-up {\n  color: #36A2EF; }\n\n.kbnDocTableHeader {\n  white-space: nowrap; }\n\n.kbnDocTableHeader button {\n  margin-left: 4px; }\n\n.kbnDocTableHeader__move,\n.kbnDocTableHeader__sortChange {\n  opacity: 0; }\n  th:hover .kbnDocTableHeader__move, .kbnDocTableHeader__move:focus, th:hover\n  .kbnDocTableHeader__sortChange,\n  .kbnDocTableHeader__sortChange:focus {\n    opacity: 1; }\n\n.kbnDocTableCell__dataField {\n  white-space: pre-wrap; }\n\n.kbnDocTableCell__toggleDetails {\n  padding: 4px 0 0 0 !important; }\n\n.kbnDocTableCell__filter {\n  position: absolute;\n  white-space: nowrap;\n  right: 0; }\n\n/**\n * 1. Align icon with text in cell.\n * 2. Use opacity to make this element accessible to screen readers and keyboard.\n * 3. Show on focus to enable keyboard accessibility.\n */\n.kbnDocTableRowFilterButton {\n  appearance: none;\n  background-color: #1D1E24;\n  border: none;\n  padding: 0 4px;\n  font-size: 14px;\n  line-height: 1;\n  /* 1 */\n  display: inline-block;\n  opacity: 0;\n  /* 2 */ }\n  .kbnDocTableRowFilterButton:focus {\n    opacity: 1;\n    /* 3 */ }\n\n/**\n * 1. Visually align the actions with the tabs. We can improve this by using flexbox instead, at a later point.\n */\n.kbnDocTableDetails__actions {\n  float: right;\n  padding-top: 8px;\n  /* 1 */ }\n\n.kbnDocTableDetails__row > td {\n  padding: 24px !important; }\n  .kbnDocTableDetails__row > td tr:hover td {\n    background: #1e1e25; }\n\n.kbnDocTableDetails__row td {\n  border-top: none !important; }\n\n/**\n * 1. When switching between open and closed, the toggle changes size\n *    slightly which is a problem because it forces the entire table to\n *    re-render which is SLOW.\n */\n.kbnDocTableOpen__button {\n  appearance: none;\n  background-color: transparent;\n  padding: 0;\n  border: none;\n  width: 14px;\n  /* 1 */\n  height: 14px; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/angular/doc_table/index.scss?v8light":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-1-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./public/application/angular/doc_table/index.scss?v8light ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n/**\n * 1. Stack content vertically so the table can scroll when its constrained by a fixed container height.\n */\ndoc-table {\n  scrollbar-width: thin;\n  overflow: auto;\n  flex: 1 1 100%;\n  flex-direction: column;\n  /* 1 */ }\n  doc-table::-webkit-scrollbar {\n    width: 16px;\n    height: 16px; }\n  doc-table::-webkit-scrollbar-thumb {\n    background-color: rgba(105, 112, 125, 0.5);\n    border: 6px solid transparent;\n    background-clip: content-box; }\n  doc-table::-webkit-scrollbar-corner, doc-table::-webkit-scrollbar-track {\n    background-color: transparent; }\n  doc-table th {\n    text-align: left;\n    font-weight: bold; }\n  doc-table .spinner {\n    position: absolute;\n    top: 40%;\n    left: 0;\n    right: 0;\n    z-index: 1000;\n    opacity: .5; }\n\n.kbnDocTable__container.loading {\n  opacity: .5; }\n\n.kbnDocTable {\n  font-size: 12px; }\n  .kbnDocTable th {\n    white-space: nowrap;\n    padding-right: 8px; }\n    .kbnDocTable th .fa {\n      font-size: 1.1em; }\n\n.kbn-table,\n.kbnDocTable {\n  /**\n  *  Style ES document _source in table view <dt>key:<dt><dd>value</dd>\n  *  Use alpha so this will stand out against non-white backgrounds, e.g. the highlighted\n  *  row in the Context Log.\n  */ }\n  .kbn-table dl.source,\n  .kbnDocTable dl.source {\n    margin-bottom: 0;\n    line-height: 2em;\n    word-break: break-word; }\n    .kbn-table dl.source dt,\n    .kbn-table dl.source dd,\n    .kbnDocTable dl.source dt,\n    .kbnDocTable dl.source dd {\n      display: inline; }\n    .kbn-table dl.source dt,\n    .kbnDocTable dl.source dt {\n      background-color: rgba(0, 95, 163, 0.1);\n      color: #343741;\n      padding: 2px 4px;\n      margin-right: 4px;\n      word-break: normal;\n      border-radius: 6px; }\n\n.kbnDocTable__row td {\n  position: relative; }\n  .kbnDocTable__row td:hover .kbnDocTableRowFilterButton {\n    opacity: 1; }\n\n.kbnDocTable__row--highlight td,\n.kbnDocTable__row--highlight .kbnDocTableRowFilterButton {\n  background-color: #e6f1fa; }\n\n.kbnDocTable__bar {\n  margin: 4px 4px 0; }\n\n.kbnDocTable__bar--footer {\n  position: relative;\n  margin: -48px 4px 0; }\n\n.kbnDocTable__padBottom {\n  padding-bottom: 32px; }\n\n.kbnDocTable__error {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex: 1 0 100%;\n  text-align: center; }\n\n.truncate-by-height {\n  overflow: hidden; }\n\n.table .table {\n  background-color: #FFF; }\n\n.kbn-table .table .table {\n  margin-bottom: 0; }\n  .kbn-table .table .table tr:first-child > td {\n    border-top: none; }\n  .kbn-table .table .table td.field-name {\n    font-weight: 700; }\n\ntable th i.fa-sort {\n  color: #D3DAE6; }\n\ntable th button.fa-sort-asc,\ntable th button.fa-sort-down,\ntable th i.fa-sort-asc,\ntable th i.fa-sort-down {\n  color: #07C; }\n\ntable th button.fa-sort-desc,\ntable th button.fa-sort-up,\ntable th i.fa-sort-desc,\ntable th i.fa-sort-up {\n  color: #07C; }\n\n.kbnDocTableHeader {\n  white-space: nowrap; }\n\n.kbnDocTableHeader button {\n  margin-left: 4px; }\n\n.kbnDocTableHeader__move,\n.kbnDocTableHeader__sortChange {\n  opacity: 0; }\n  th:hover .kbnDocTableHeader__move, .kbnDocTableHeader__move:focus, th:hover\n  .kbnDocTableHeader__sortChange,\n  .kbnDocTableHeader__sortChange:focus {\n    opacity: 1; }\n\n.kbnDocTableCell__dataField {\n  white-space: pre-wrap; }\n\n.kbnDocTableCell__toggleDetails {\n  padding: 4px 0 0 0 !important; }\n\n.kbnDocTableCell__filter {\n  position: absolute;\n  white-space: nowrap;\n  right: 0; }\n\n/**\n * 1. Align icon with text in cell.\n * 2. Use opacity to make this element accessible to screen readers and keyboard.\n * 3. Show on focus to enable keyboard accessibility.\n */\n.kbnDocTableRowFilterButton {\n  -webkit-appearance: none;\n          appearance: none;\n  background-color: #FFF;\n  border: none;\n  padding: 0 4px;\n  font-size: 14px;\n  line-height: 1;\n  /* 1 */\n  display: inline-block;\n  opacity: 0;\n  /* 2 */ }\n  .kbnDocTableRowFilterButton:focus {\n    opacity: 1;\n    /* 3 */ }\n\n/**\n * 1. Visually align the actions with the tabs. We can improve this by using flexbox instead, at a later point.\n */\n.kbnDocTableDetails__actions {\n  float: right;\n  padding-top: 8px;\n  /* 1 */ }\n\n.kbnDocTableDetails__row > td {\n  padding: 24px !important; }\n  .kbnDocTableDetails__row > td tr:hover td {\n    background: #fafbfd; }\n\n.kbnDocTableDetails__row td {\n  border-top: none !important; }\n\n/**\n * 1. When switching between open and closed, the toggle changes size\n *    slightly which is a problem because it forces the entire table to\n *    re-render which is SLOW.\n */\n.kbnDocTableOpen__button {\n  -webkit-appearance: none;\n          appearance: none;\n  background-color: transparent;\n  padding: 0;\n  border: none;\n  width: 14px;\n  /* 1 */\n  height: 14px; }\n", "",{"version":3,"sources":["index.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;;EAEE;AACF;EACE,qBAAqB;EACrB,cAAc;EACd,cAAc;EACd,sBAAsB;EACtB,MAAM,EAAE;EACR;IACE,WAAW;IACX,YAAY,EAAE;EAChB;IACE,0CAA0C;IAC1C,6BAA6B;IAC7B,4BAA4B,EAAE;EAChC;IACE,6BAA6B,EAAE;EACjC;IACE,gBAAgB;IAChB,iBAAiB,EAAE;EACrB;IACE,kBAAkB;IAClB,QAAQ;IACR,OAAO;IACP,QAAQ;IACR,aAAa;IACb,WAAW,EAAE;;AAEjB;EACE,WAAW,EAAE;;AAEf;EACE,eAAe,EAAE;EACjB;IACE,mBAAmB;IACnB,kBAAkB,EAAE;IACpB;MACE,gBAAgB,EAAE;;AAExB;;EAEE;;;;GAIC,EAAE;EACH;;IAEE,gBAAgB;IAChB,gBAAgB;IAChB,sBAAsB,EAAE;IACxB;;;;MAIE,eAAe,EAAE;IACnB;;MAEE,uCAAuC;MACvC,cAAc;MACd,gBAAgB;MAChB,iBAAiB;MACjB,kBAAkB;MAClB,kBAAkB,EAAE;;AAE1B;EACE,kBAAkB,EAAE;EACpB;IACE,UAAU,EAAE;;AAEhB;;EAEE,yBAAyB,EAAE;;AAE7B;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB;EAClB,mBAAmB,EAAE;;AAEvB;EACE,oBAAoB,EAAE;;AAExB;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,cAAc;EACd,kBAAkB,EAAE;;AAEtB;EACE,gBAAgB,EAAE;;AAEpB;EACE,sBAAsB,EAAE;;AAE1B;EACE,gBAAgB,EAAE;EAClB;IACE,gBAAgB,EAAE;EACpB;IACE,gBAAgB,EAAE;;AAEtB;EACE,cAAc,EAAE;;AAElB;;;;EAIE,WAAW,EAAE;;AAEf;;;;EAIE,WAAW,EAAE;;AAEf;EACE,mBAAmB,EAAE;;AAEvB;EACE,gBAAgB,EAAE;;AAEpB;;EAEE,UAAU,EAAE;EACZ;;;IAGE,UAAU,EAAE;;AAEhB;EACE,qBAAqB,EAAE;;AAEzB;EACE,6BAA6B,EAAE;;AAEjC;EACE,kBAAkB;EAClB,mBAAmB;EACnB,QAAQ,EAAE;;AAEZ;;;;EAIE;AACF;EACE,wBAAgB;UAAhB,gBAAgB;EAChB,sBAAsB;EACtB,YAAY;EACZ,cAAc;EACd,eAAe;EACf,cAAc;EACd,MAAM;EACN,qBAAqB;EACrB,UAAU;EACV,MAAM,EAAE;EACR;IACE,UAAU;IACV,MAAM,EAAE;;AAEZ;;EAEE;AACF;EACE,YAAY;EACZ,gBAAgB;EAChB,MAAM,EAAE;;AAEV;EACE,wBAAwB,EAAE;EAC1B;IACE,mBAAmB,EAAE;;AAEzB;EACE,2BAA2B,EAAE;;AAE/B;;;;EAIE;AACF;EACE,wBAAgB;UAAhB,gBAAgB;EAChB,6BAA6B;EAC7B,UAAU;EACV,YAAY;EACZ,WAAW;EACX,MAAM;EACN,YAAY,EAAE","file":"index.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n/**\n * 1. Stack content vertically so the table can scroll when its constrained by a fixed container height.\n */\ndoc-table {\n  scrollbar-width: thin;\n  overflow: auto;\n  flex: 1 1 100%;\n  flex-direction: column;\n  /* 1 */ }\n  doc-table::-webkit-scrollbar {\n    width: 16px;\n    height: 16px; }\n  doc-table::-webkit-scrollbar-thumb {\n    background-color: rgba(105, 112, 125, 0.5);\n    border: 6px solid transparent;\n    background-clip: content-box; }\n  doc-table::-webkit-scrollbar-corner, doc-table::-webkit-scrollbar-track {\n    background-color: transparent; }\n  doc-table th {\n    text-align: left;\n    font-weight: bold; }\n  doc-table .spinner {\n    position: absolute;\n    top: 40%;\n    left: 0;\n    right: 0;\n    z-index: 1000;\n    opacity: .5; }\n\n.kbnDocTable__container.loading {\n  opacity: .5; }\n\n.kbnDocTable {\n  font-size: 12px; }\n  .kbnDocTable th {\n    white-space: nowrap;\n    padding-right: 8px; }\n    .kbnDocTable th .fa {\n      font-size: 1.1em; }\n\n.kbn-table,\n.kbnDocTable {\n  /**\n  *  Style ES document _source in table view <dt>key:<dt><dd>value</dd>\n  *  Use alpha so this will stand out against non-white backgrounds, e.g. the highlighted\n  *  row in the Context Log.\n  */ }\n  .kbn-table dl.source,\n  .kbnDocTable dl.source {\n    margin-bottom: 0;\n    line-height: 2em;\n    word-break: break-word; }\n    .kbn-table dl.source dt,\n    .kbn-table dl.source dd,\n    .kbnDocTable dl.source dt,\n    .kbnDocTable dl.source dd {\n      display: inline; }\n    .kbn-table dl.source dt,\n    .kbnDocTable dl.source dt {\n      background-color: rgba(0, 95, 163, 0.1);\n      color: #343741;\n      padding: 2px 4px;\n      margin-right: 4px;\n      word-break: normal;\n      border-radius: 6px; }\n\n.kbnDocTable__row td {\n  position: relative; }\n  .kbnDocTable__row td:hover .kbnDocTableRowFilterButton {\n    opacity: 1; }\n\n.kbnDocTable__row--highlight td,\n.kbnDocTable__row--highlight .kbnDocTableRowFilterButton {\n  background-color: #e6f1fa; }\n\n.kbnDocTable__bar {\n  margin: 4px 4px 0; }\n\n.kbnDocTable__bar--footer {\n  position: relative;\n  margin: -48px 4px 0; }\n\n.kbnDocTable__padBottom {\n  padding-bottom: 32px; }\n\n.kbnDocTable__error {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex: 1 0 100%;\n  text-align: center; }\n\n.truncate-by-height {\n  overflow: hidden; }\n\n.table .table {\n  background-color: #FFF; }\n\n.kbn-table .table .table {\n  margin-bottom: 0; }\n  .kbn-table .table .table tr:first-child > td {\n    border-top: none; }\n  .kbn-table .table .table td.field-name {\n    font-weight: 700; }\n\ntable th i.fa-sort {\n  color: #D3DAE6; }\n\ntable th button.fa-sort-asc,\ntable th button.fa-sort-down,\ntable th i.fa-sort-asc,\ntable th i.fa-sort-down {\n  color: #07C; }\n\ntable th button.fa-sort-desc,\ntable th button.fa-sort-up,\ntable th i.fa-sort-desc,\ntable th i.fa-sort-up {\n  color: #07C; }\n\n.kbnDocTableHeader {\n  white-space: nowrap; }\n\n.kbnDocTableHeader button {\n  margin-left: 4px; }\n\n.kbnDocTableHeader__move,\n.kbnDocTableHeader__sortChange {\n  opacity: 0; }\n  th:hover .kbnDocTableHeader__move, .kbnDocTableHeader__move:focus, th:hover\n  .kbnDocTableHeader__sortChange,\n  .kbnDocTableHeader__sortChange:focus {\n    opacity: 1; }\n\n.kbnDocTableCell__dataField {\n  white-space: pre-wrap; }\n\n.kbnDocTableCell__toggleDetails {\n  padding: 4px 0 0 0 !important; }\n\n.kbnDocTableCell__filter {\n  position: absolute;\n  white-space: nowrap;\n  right: 0; }\n\n/**\n * 1. Align icon with text in cell.\n * 2. Use opacity to make this element accessible to screen readers and keyboard.\n * 3. Show on focus to enable keyboard accessibility.\n */\n.kbnDocTableRowFilterButton {\n  appearance: none;\n  background-color: #FFF;\n  border: none;\n  padding: 0 4px;\n  font-size: 14px;\n  line-height: 1;\n  /* 1 */\n  display: inline-block;\n  opacity: 0;\n  /* 2 */ }\n  .kbnDocTableRowFilterButton:focus {\n    opacity: 1;\n    /* 3 */ }\n\n/**\n * 1. Visually align the actions with the tabs. We can improve this by using flexbox instead, at a later point.\n */\n.kbnDocTableDetails__actions {\n  float: right;\n  padding-top: 8px;\n  /* 1 */ }\n\n.kbnDocTableDetails__row > td {\n  padding: 24px !important; }\n  .kbnDocTableDetails__row > td tr:hover td {\n    background: #fafbfd; }\n\n.kbnDocTableDetails__row td {\n  border-top: none !important; }\n\n/**\n * 1. When switching between open and closed, the toggle changes size\n *    slightly which is a problem because it forces the entire table to\n *    re-render which is SLOW.\n */\n.kbnDocTableOpen__button {\n  appearance: none;\n  background-color: transparent;\n  padding: 0;\n  border: none;\n  width: 14px;\n  /* 1 */\n  height: 14px; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./public/application/angular/doc_table/doc_table.html":
/*!*************************************************************!*\
  !*** ./public/application/angular/doc_table/doc_table.html ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  ng-if=\"hits.length\"\n  ng-class=\"{ loading: isLoading }\"\n>\n  <div ng-if=\"!infiniteScroll\">\n    <div class=\"kuiBar kbnDocTable__bar\">\n      <div class=\"kuiBarSection\">\n        <div\n          ng-if=\"shouldShowLimitedResultsWarning()\"\n          class=\"kuiToolBarText kuiSubduedText\"\n        >\n          {{ limitedResultsWarning }}\n        </div>\n        <!-- Pagination -->\n        <tool-bar-pager-text\n          start-item=\"pager.startItem\"\n          end-item=\"pager.endItem\"\n          total-items=\"totalHitCount\"\n        ></tool-bar-pager-text>\n        <tool-bar-pager-buttons\n          has-previous-page=\"pager.hasPreviousPage\"\n          has-next-page=\"pager.hasNextPage\"\n          on-page-next=\"onPageNext\"\n          on-page-previous=\"onPagePrevious\"\n        ></tool-bar-pager-buttons>\n      </div>\n    </div>\n    <div class=\"kbnDocTable__container kbnDocTable__padBottom\">\n      <table class=\"kbnDocTable table\" ng-if=\"indexPattern\" data-test-subj=\"docTable\">\n        <thead\n          kbn-table-header\n          columns=\"columns\"\n          index-pattern=\"indexPattern\"\n          sort-order=\"sorting\"\n          on-change-sort-order=\"onChangeSortOrder\"\n          on-move-column=\"onMoveColumn\"\n          on-remove-column=\"onRemoveColumn\"\n        ></thead>\n        <tbody>\n          <tr ng-repeat=\"row in pageOfItems|limitTo:limit track by row._index+row._type+row._id+row._score+row._version+row._routing\"\n            kbn-table-row=\"row\"\n            columns=\"columns\"\n            sorting=\"sorting\"\n            index-pattern=\"indexPattern\"\n            filter=\"filter\"\n            class=\"kbnDocTable__row\"\n            data-test-subj=\"docTableRow\"\n            on-add-column=\"onAddColumn\"\n            on-remove-column=\"onRemoveColumn\"\n            use-new-fields-api=\"useNewFieldsApi\"\n          ></tr>\n        </tbody>\n      </table>\n    </div>\n    <!-- ToolBarFooter -->\n    <div class=\"kuiBar kbnDocTable__bar--footer\">\n      <div class=\"kuiBarSection\">\n        <div\n          ng-if=\"shouldShowLimitedResultsWarning()\"\n          class=\"kuiToolBarText kuiSubduedText\"\n        >\n          {{ limitedResultsWarning }}\n        </div>\n        <!-- Pagination -->\n        <tool-bar-pager-text\n          start-item=\"pager.startItem\"\n          end-item=\"pager.endItem\"\n          total-items=\"totalHitCount\"\n        ></tool-bar-pager-text>\n        <tool-bar-pager-buttons\n          has-previous-page=\"pager.hasPreviousPage\"\n          has-next-page=\"pager.hasNextPage\"\n          on-page-next=\"onPageNext\"\n          on-page-previous=\"onPagePrevious\"\n        ></tool-bar-pager-buttons>\n      </div>\n    </div>\n  </div>\n\n  <table ng-if=\"infiniteScroll\" class=\"kbn-table table\" ng-if=\"indexPattern\" data-test-subj=\"docTable\">\n    <thead\n      kbn-table-header\n      columns=\"columns\"\n      index-pattern=\"indexPattern\"\n      sort-order=\"sorting\"\n      on-change-sort-order=\"onChangeSortOrder\"\n      on-move-column=\"onMoveColumn\"\n      on-remove-column=\"onRemoveColumn\"\n    ></thead>\n    <tbody>\n      <tr ng-repeat=\"row in hits|limitTo:limit track by row._index+row._type+row._id+row._score+row._version+row._routing\"\n        kbn-table-row=\"row\"\n        columns=\"columns\"\n        sorting=\"sorting\"\n        index-pattern=\"indexPattern\"\n        filter=\"filter\"\n        class=\"kbnDocTable__row\"\n        ng-class=\"{'kbnDocTable__row--highlight': row['isAnchor']}\"\n        data-test-subj=\"docTableRow{{ row['isAnchor'] ? ' docTableAnchorRow' : ''}}\"\n        on-add-column=\"onAddColumn\"\n        on-remove-column=\"onRemoveColumn\"\n        use-new-fields-api=\"useNewFieldsApi\"\n      ></tr>\n    </tbody>\n  </table>\n  <kbn-infinite-scroll ng-if=\"infiniteScroll\" more=\"addRows\"></kbn-infinite-scroll>\n</div>\n\n<div ng-if=\"hits != null && !hits.length\" class=\"kbnDocTable__error\">\n  <div class=\"euiText euiText--extraSmall euiTextColor euiTextColor--subdued\">\n    <icon type=\"'visualizeApp'\" size=\"'m'\" color=\"'subdued'\"></icon>\n\n    <div class=\"euiSpacer euiSpacer--m\"></div>\n\n    <p\n      i18n-id=\"discover.docTable.noResultsTitle\"\n      i18n-default-message=\"No results found\"\n    >\n    </p>\n  </div>\n</div>\n");

/***/ }),

/***/ "./public/application/angular/doc_table/doc_table.ts":
/*!***********************************************************!*\
  !*** ./public/application/angular/doc_table/doc_table.ts ***!
  \***********************************************************/
/*! exports provided: createDocTableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDocTableDirective", function() { return createDocTableDirective; });
/* harmony import */ var _doc_table_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doc_table.html */ "./public/application/angular/doc_table/doc_table.html");
/* harmony import */ var _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/plugins/kibana_utils/public */ "plugin/kibanaUtils/public");
/* harmony import */ var _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common */ "./common/index.ts");
/* harmony import */ var _doc_table_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doc_table_strings */ "./public/application/angular/doc_table/doc_table_strings.js");
/* harmony import */ var _kibana_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../kibana_services */ "./public/kibana_services.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./public/application/angular/doc_table/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


 // @ts-expect-error




// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createDocTableDirective(pagerFactory, $filter) {
  return {
    restrict: 'E',
    template: _doc_table_html__WEBPACK_IMPORTED_MODULE_0__["default"],
    scope: {
      sorting: '=',
      columns: '=',
      hits: '=',
      totalHitCount: '=',
      indexPattern: '=',
      isLoading: '=?',
      infiniteScroll: '=?',
      filter: '=?',
      minimumVisibleRows: '=?',
      onAddColumn: '=?',
      onChangeSortOrder: '=?',
      onMoveColumn: '=?',
      onRemoveColumn: '=?',
      inspectorAdapters: '=?',
      useNewFieldsApi: '<'
    },
    link: ($scope, $el) => {
      $scope.persist = {
        sorting: $scope.sorting,
        columns: $scope.columns
      };
      const limitTo = $filter('limitTo');

      const calculateItemsOnPage = () => {
        $scope.pager.setTotalItems($scope.hits.length);
        $scope.pageOfItems = limitTo($scope.hits, $scope.pager.pageSize, $scope.pager.startIndex);
      };

      $scope.limitedResultsWarning = Object(_doc_table_strings__WEBPACK_IMPORTED_MODULE_3__["getLimitedSearchResultsMessage"])(Object(_kibana_services__WEBPACK_IMPORTED_MODULE_4__["getServices"])().uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_2__["SAMPLE_SIZE_SETTING"], 500));

      $scope.addRows = function () {
        $scope.limit += 50;
      };

      $scope.$watch('minimumVisibleRows', minimumVisibleRows => {
        $scope.limit = Math.max(minimumVisibleRows || 50, $scope.limit || 50);
      });
      $scope.$watch('hits', hits => {
        if (!hits) return; // Reset infinite scroll limit

        $scope.limit = $scope.minimumVisibleRows || 50;

        if (hits.length === 0) {
          Object(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_1__["dispatchRenderComplete"])($el[0]);
        }

        if ($scope.infiniteScroll) return;
        $scope.pager = pagerFactory.create(hits.length, 50, 1);
        calculateItemsOnPage();
      });
      $scope.pageOfItems = [];

      $scope.onPageNext = () => {
        $scope.pager.nextPage();
        calculateItemsOnPage();
      };

      $scope.onPagePrevious = () => {
        $scope.pager.previousPage();
        calculateItemsOnPage();
      };

      $scope.shouldShowLimitedResultsWarning = () => !$scope.pager.hasNextPage && $scope.pager.totalItems < $scope.totalHitCount;
    }
  };
}

/***/ }),

/***/ "./public/application/angular/doc_table/doc_table_strings.js":
/*!*******************************************************************!*\
  !*** ./public/application/angular/doc_table/doc_table_strings.js ***!
  \*******************************************************************/
/*! exports provided: getLimitedSearchResultsMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLimitedSearchResultsMessage", function() { return getLimitedSearchResultsMessage; });
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 * A message letting the user know the results that have been retrieved is limited
 * to a certain size.
 * @param resultCount {Number}
 */

function getLimitedSearchResultsMessage(resultCount) {
  return _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.docTable.limitedSearchResultLabel', {
    defaultMessage: 'Limited to {resultCount} results. Refine your search.',
    values: {
      resultCount
    }
  });
}

/***/ }),

/***/ "./public/application/angular/doc_table/index.scss":
/*!*********************************************************!*\
  !*** ./public/application/angular/doc_table/index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__kbnThemeTag__) {
  case 'v7dark':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7dark]. Styles were compiled using the [v8dark] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7dark] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./index.scss?v8dark */ "./public/application/angular/doc_table/index.scss?v8dark")

  case 'v7light':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7light]. Styles were compiled using the [v8light] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7light] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./index.scss?v8light */ "./public/application/angular/doc_table/index.scss?v8light")

  case 'v8dark':
    return __webpack_require__(/*! ./index.scss?v8dark */ "./public/application/angular/doc_table/index.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./index.scss?v8light */ "./public/application/angular/doc_table/index.scss?v8light");
}

/***/ }),

/***/ "./public/application/angular/doc_table/index.scss?v8dark":
/*!****************************************************************!*\
  !*** ./public/application/angular/doc_table/index.scss?v8dark ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-0-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./index.scss?v8dark */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/angular/doc_table/index.scss?v8dark");

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

/***/ "./public/application/angular/doc_table/index.scss?v8light":
/*!*****************************************************************!*\
  !*** ./public/application/angular/doc_table/index.scss?v8light ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./index.scss?v8light */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/angular/doc_table/index.scss?v8light");

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

/***/ "./public/application/angular/doc_table/index.ts":
/*!*******************************************************!*\
  !*** ./public/application/angular/doc_table/index.ts ***!
  \*******************************************************/
/*! exports provided: createDocTableDirective, getSort, getSortArray, getSortForSearchSource, getDefaultSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _doc_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doc_table */ "./public/application/angular/doc_table/doc_table.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDocTableDirective", function() { return _doc_table__WEBPACK_IMPORTED_MODULE_0__["createDocTableDirective"]; });

/* harmony import */ var _lib_get_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/get_sort */ "./public/application/angular/doc_table/lib/get_sort.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSort", function() { return _lib_get_sort__WEBPACK_IMPORTED_MODULE_1__["getSort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSortArray", function() { return _lib_get_sort__WEBPACK_IMPORTED_MODULE_1__["getSortArray"]; });

/* harmony import */ var _lib_get_sort_for_search_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/get_sort_for_search_source */ "./public/application/angular/doc_table/lib/get_sort_for_search_source.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSortForSearchSource", function() { return _lib_get_sort_for_search_source__WEBPACK_IMPORTED_MODULE_2__["getSortForSearchSource"]; });

/* harmony import */ var _lib_get_default_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/get_default_sort */ "./public/application/angular/doc_table/lib/get_default_sort.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDefaultSort", function() { return _lib_get_default_sort__WEBPACK_IMPORTED_MODULE_3__["getDefaultSort"]; });

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */





/***/ }),

/***/ "./public/application/angular/doc_table/lib/get_default_sort.ts":
/*!**********************************************************************!*\
  !*** ./public/application/angular/doc_table/lib/get_default_sort.ts ***!
  \**********************************************************************/
/*! exports provided: getDefaultSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultSort", function() { return getDefaultSort; });
/* harmony import */ var _get_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get_sort */ "./public/application/angular/doc_table/lib/get_sort.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


/**
 * use in case the user didn't manually sort.
 * the default sort is returned depending of the index pattern
 */
function getDefaultSort(indexPattern, defaultSortOrder = 'desc') {
  if (indexPattern !== null && indexPattern !== void 0 && indexPattern.timeFieldName && Object(_get_sort__WEBPACK_IMPORTED_MODULE_0__["isSortable"])(indexPattern.timeFieldName, indexPattern)) {
    return [[indexPattern.timeFieldName, defaultSortOrder]];
  } else {
    return [];
  }
}

/***/ }),

/***/ "./public/application/angular/doc_table/lib/get_sort.ts":
/*!**************************************************************!*\
  !*** ./public/application/angular/doc_table/lib/get_sort.ts ***!
  \**************************************************************/
/*! exports provided: isSortable, isLegacySort, getSort, getSortArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSortable", function() { return isSortable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLegacySort", function() { return isLegacySort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSort", function() { return getSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSortArray", function() { return getSortArray; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

function isSortable(fieldName, indexPattern) {
  const field = indexPattern.getFieldByName(fieldName);
  return !!(field && field.sortable);
}

function createSortObject(sortPair, indexPattern) {
  if (Array.isArray(sortPair) && sortPair.length === 2 && isSortable(String(sortPair[0]), indexPattern)) {
    const [field, direction] = sortPair;
    return {
      [field]: direction
    };
  } else if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isPlainObject(sortPair) && isSortable(Object.keys(sortPair)[0], indexPattern)) {
    return sortPair;
  }
}

function isLegacySort(sort) {
  return sort.length === 2 && typeof sort[0] === 'string' && (sort[1] === 'desc' || sort[1] === 'asc');
}
/**
 * Take a sorting array and make it into an object
 * @param {array} sort two dimensional array [[fieldToSort, directionToSort]]
 *  or an array of objects [{fieldToSort: directionToSort}]
 * @param {object} indexPattern used for determining default sort
 * @returns Array<{object}> an array of sort objects
 */

function getSort(sort, indexPattern) {
  if (Array.isArray(sort)) {
    if (isLegacySort(sort)) {
      // To stay compatible with legacy sort, which just supported a single sort field
      return [{
        [sort[0]]: sort[1]
      }];
    }

    return sort.map(sortPair => createSortObject(sortPair, indexPattern)).filter(sortPairObj => typeof sortPairObj === 'object');
  }

  return [];
}
/**
 * compared to getSort it doesn't return an array of objects, it returns an array of arrays
 * [[fieldToSort: directionToSort]]
 */

function getSortArray(sort, indexPattern) {
  return getSort(sort, indexPattern).reduce((acc, sortPair) => {
    const entries = Object.entries(sortPair);

    if (entries && entries[0]) {
      acc.push(entries[0]);
    }

    return acc;
  }, []);
}

/***/ }),

/***/ "./public/application/angular/doc_table/lib/get_sort_for_search_source.ts":
/*!********************************************************************************!*\
  !*** ./public/application/angular/doc_table/lib/get_sort_for_search_source.ts ***!
  \********************************************************************************/
/*! exports provided: getSortForSearchSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSortForSearchSource", function() { return getSortForSearchSource; });
/* harmony import */ var _get_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get_sort */ "./public/application/angular/doc_table/lib/get_sort.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 * Prepares sort for search source, that's sending the request to ES
 * - Adds default sort if necessary
 * - Handles the special case when there's sorting by date_nanos typed fields
 *   the addon of the numeric_type guarantees the right sort order
 *   when there are indices with date and indices with date_nanos field
 */

function getSortForSearchSource(sort, indexPattern, defaultDirection = 'desc') {
  if (!sort || !indexPattern || Array.isArray(sort) && sort.length === 0) {
    if (indexPattern !== null && indexPattern !== void 0 && indexPattern.timeFieldName) {
      // sorting by index order
      return [{
        _doc: defaultDirection
      }];
    } else {
      return [{
        _score: defaultDirection
      }];
    }
  }

  const {
    timeFieldName
  } = indexPattern;
  return Object(_get_sort__WEBPACK_IMPORTED_MODULE_0__["getSort"])(sort, indexPattern).map(sortPair => {
    if (indexPattern.isTimeNanosBased() && timeFieldName && sortPair[timeFieldName]) {
      return {
        [timeFieldName]: {
          order: sortPair[timeFieldName],
          numeric_type: 'date_nanos'
        }
      };
    }

    return sortPair;
  });
}

/***/ })

}]);
//# sourceMappingURL=discovernew.chunk.0.js.map