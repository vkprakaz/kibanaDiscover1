(window["discovernew_bundle_jsonpfunction"] = window["discovernew_bundle_jsonpfunction"] || []).push([[4],{

/***/ "../../node_modules/@elastic/datemath/target_node/index.js":
/*!*********************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/@elastic/datemath/target_node/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = parse;
exports.default = exports.unitsAsc = exports.unitsDesc = exports.units = exports.unitsMap = void 0;

var _moment = _interopRequireDefault(__webpack_require__(/*! moment */ "moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const unitsMap = {
  ms: {
    weight: 1,
    type: 'fixed',
    base: 1
  },
  s: {
    weight: 2,
    type: 'fixed',
    base: 1000
  },
  m: {
    weight: 3,
    type: 'mixed',
    base: 1000 * 60
  },
  h: {
    weight: 4,
    type: 'mixed',
    base: 1000 * 60 * 60
  },
  d: {
    weight: 5,
    type: 'mixed',
    base: 1000 * 60 * 60 * 24
  },
  w: {
    weight: 6,
    type: 'calendar',
    base: NaN
  },
  M: {
    weight: 7,
    type: 'calendar',
    base: NaN
  },
  // q: { weight: 8, type: 'calendar' }, // TODO: moment duration does not support quarter
  y: {
    weight: 9,
    type: 'calendar',
    base: NaN
  }
};
exports.unitsMap = unitsMap;
const units = Object.keys(unitsMap).sort((a, b) => unitsMap[b].weight - unitsMap[a].weight);
exports.units = units;
const unitsDesc = [...units];
exports.unitsDesc = unitsDesc;
const unitsAsc = [...units].reverse();
exports.unitsAsc = unitsAsc;

const isDate = d => Object.prototype.toString.call(d) === '[object Date]';

const isValidDate = d => isDate(d) && !isNaN(d.valueOf());
/*
 * This is a simplified version of elasticsearch's date parser.
 * If you pass in a momentjs instance as the third parameter the calculation
 * will be done using this (and its locale settings) instead of the one bundled
 * with this library.
 */


function parse(input, options = {}) {
  const text = input;
  const {
    roundUp = false,
    momentInstance = _moment.default,
    forceNow
  } = options;
  if (!text) return undefined;
  if (momentInstance.isMoment(text)) return text;
  if (isDate(text)) return momentInstance(text);

  if (forceNow !== undefined && !isValidDate(forceNow)) {
    throw new Error('forceNow must be a valid Date');
  }

  let time;
  let mathString = '';
  let index;
  let parseString;

  if (text.substring(0, 3) === 'now') {
    time = momentInstance(forceNow);
    mathString = text.substring('now'.length);
  } else {
    index = text.indexOf('||');

    if (index === -1) {
      parseString = text;
      mathString = ''; // nothing else
    } else {
      parseString = text.substring(0, index);
      mathString = text.substring(index + 2);
    } // We're going to just require ISO8601 timestamps, k?


    time = momentInstance(parseString);
  }

  if (!mathString.length) {
    return time;
  }

  return parseDateMath(mathString, time, roundUp);
}

function parseDateMath(mathString, time, roundUp) {
  const dateTime = time;
  const len = mathString.length;
  let i = 0;

  while (i < len) {
    const c = mathString.charAt(i++);
    let type;
    let num;
    let unit;

    if (c === '/') {
      type = 0;
    } else if (c === '+') {
      type = 1;
    } else if (c === '-') {
      type = 2;
    } else {
      return;
    }

    if (isNaN(mathString.charAt(i))) {
      num = 1;
    } else if (mathString.length === 2) {
      num = mathString.charAt(i);
    } else {
      const numFrom = i;

      while (!isNaN(mathString.charAt(i))) {
        i++;
        if (i >= len) return;
      }

      num = parseInt(mathString.substring(numFrom, i), 10);
    }

    if (type === 0) {
      // rounding is only allowed on whole, single, units (eg M or 1M, not 0.5M or 2M)
      if (num !== 1) {
        return;
      }
    }

    unit = mathString.charAt(i++); // append additional characters in the unit

    for (let j = i; j < len; j++) {
      const unitChar = mathString.charAt(i);

      if (/[a-z]/i.test(unitChar)) {
        unit += unitChar;
        i++;
      } else {
        break;
      }
    }

    if (units.indexOf(unit) === -1) {
      return;
    } else {
      if (type === 0) {
        if (roundUp) dateTime.endOf(unit);else dateTime.startOf(unit);
      } else if (type === 1) {
        dateTime.add(num, unit);
      } else if (type === 2) {
        dateTime.subtract(num, unit);
      }
    }
  }

  return dateTime;
} // eslint-disable-next-line import/no-default-export


var _default = {
  parse,
  unitsMap: Object.freeze(unitsMap),
  units: Object.freeze(units),
  unitsAsc: Object.freeze(unitsAsc),
  unitsDesc: Object.freeze(unitsDesc)
};
exports.default = _default;

/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/hits_counter/hits_counter.scss?v8dark":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-0-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./public/application/apps/main/components/hits_counter/hits_counter.scss?v8dark ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscHitsCounter {\n  flex-grow: 0; }\n", "",{"version":3,"sources":["hits_counter.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,YAAY,EAAE","file":"hits_counter.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscHitsCounter {\n  flex-grow: 0; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/hits_counter/hits_counter.scss?v8light":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-1-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./public/application/apps/main/components/hits_counter/hits_counter.scss?v8light ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscHitsCounter {\n  flex-grow: 0; }\n", "",{"version":3,"sources":["hits_counter.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,YAAY,EAAE","file":"hits_counter.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscHitsCounter {\n  flex-grow: 0; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/layout/discover_layout.scss?v8dark":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-0-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./public/application/apps/main/components/layout/discover_layout.scss?v8dark ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n/* stylelint-disable-next-line length-zero-no-unit -- need consistent unit to sum them */\n/* stylelint-disable-next-line length-zero-no-unit -- need consistent unit to sum them */\ndiscover-app {\n  flex-grow: 1; }\n\n.dscPage {\n  flex-direction: column;\n  overflow: hidden;\n  padding: 0; }\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    .dscPage {\n      height: calc(100vh - 96px); }\n      .kbnBody--chromeHidden .dscPage {\n        height: calc(100vh - 0px); }\n      .kbnBody--hasHeaderBanner .dscPage {\n        height: calc(100vh - 128px); }\n      .kbnBody--chromeHidden.kbnBody--hasHeaderBanner .dscPage {\n        height: calc(100vh - 32px); } }\n  @media only screen and (min-width: 992px) and (max-width: 1199px) {\n    .dscPage {\n      height: calc(100vh - 96px); }\n      .kbnBody--chromeHidden .dscPage {\n        height: calc(100vh - 0px); }\n      .kbnBody--hasHeaderBanner .dscPage {\n        height: calc(100vh - 128px); }\n      .kbnBody--chromeHidden.kbnBody--hasHeaderBanner .dscPage {\n        height: calc(100vh - 32px); } }\n  @media only screen and (min-width: 1200px) {\n    .dscPage {\n      height: calc(100vh - 96px); }\n      .kbnBody--chromeHidden .dscPage {\n        height: calc(100vh - 0px); }\n      .kbnBody--hasHeaderBanner .dscPage {\n        height: calc(100vh - 128px); }\n      .kbnBody--chromeHidden.kbnBody--hasHeaderBanner .dscPage {\n        height: calc(100vh - 32px); } }\n  .dscPage .dscPageBody {\n    overflow: hidden; }\n\n.dscPageBody__inner {\n  overflow: hidden;\n  height: 100%; }\n\n.dscPageBody__contents {\n  overflow: hidden;\n  padding-top: 2px; }\n\n.dscPageContent__wrapper {\n  padding: 0 16px 16px 0;\n  overflow: hidden; }\n  @media only screen and (max-width: 574px) {\n    .dscPageContent__wrapper {\n      padding: 0 16px 16px; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .dscPageContent__wrapper {\n      padding: 0 16px 16px; } }\n\n.dscPageContent {\n  border: 1px solid #343741; }\n\n.dscPageContent,\n.dscPageContent__inner {\n  height: 100%; }\n\n.dscPageContent--centered {\n  height: auto; }\n\n.dscResultCount {\n  padding: 8px;\n  min-height: 48px; }\n  @media only screen and (max-width: 574px) {\n    .dscResultCount .dscResultCount__toggle {\n      align-items: flex-end; }\n    .dscResultCount .dscResuntCount__title,\n    .dscResultCount .dscResultCount__actions {\n      margin-bottom: 0 !important; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .dscResultCount .dscResultCount__toggle {\n      align-items: flex-end; }\n    .dscResultCount .dscResuntCount__title,\n    .dscResultCount .dscResultCount__actions {\n      margin-bottom: 0 !important; } }\n\n.dscTimechart {\n  display: block;\n  position: relative; }\n  .dscTimechart .series > rect {\n    fill-opacity: .5;\n    stroke-width: 1; }\n\n.dscHistogram {\n  display: flex;\n  height: 200px;\n  padding: 8px; }\n\n.dscHistogramGrid {\n  display: flex;\n  height: 128px;\n  padding: 8px 8px 0 8px; }\n\n.dscTable .kbnDocTable__row {\n  font-family: \"Roboto Mono\", Consolas, Menlo, Courier, monospace;\n  font-size: 12px; }\n\n.dscTable__footer {\n  background-color: #343741;\n  padding: 4px 8px;\n  text-align: center; }\n", "",{"version":3,"sources":["discover_layout.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF,wFAAwF;AACxF,wFAAwF;AACxF;EACE,YAAY,EAAE;;AAEhB;EACE,sBAAsB;EACtB,gBAAgB;EAChB,UAAU,EAAE;EACZ;IACE;MACE,0BAA0B,EAAE;MAC5B;QACE,yBAAyB,EAAE;MAC7B;QACE,2BAA2B,EAAE;MAC/B;QACE,0BAA0B,EAAE,EAAE;EACpC;IACE;MACE,0BAA0B,EAAE;MAC5B;QACE,yBAAyB,EAAE;MAC7B;QACE,2BAA2B,EAAE;MAC/B;QACE,0BAA0B,EAAE,EAAE;EACpC;IACE;MACE,0BAA0B,EAAE;MAC5B;QACE,yBAAyB,EAAE;MAC7B;QACE,2BAA2B,EAAE;MAC/B;QACE,0BAA0B,EAAE,EAAE;EACpC;IACE,gBAAgB,EAAE;;AAEtB;EACE,gBAAgB;EAChB,YAAY,EAAE;;AAEhB;EACE,gBAAgB;EAChB,gBAAgB,EAAE;;AAEpB;EACE,sBAAsB;EACtB,gBAAgB,EAAE;EAClB;IACE;MACE,oBAAoB,EAAE,EAAE;EAC5B;IACE;MACE,oBAAoB,EAAE,EAAE;;AAE9B;EACE,yBAAyB,EAAE;;AAE7B;;EAEE,YAAY,EAAE;;AAEhB;EACE,YAAY,EAAE;;AAEhB;EACE,YAAY;EACZ,gBAAgB,EAAE;EAClB;IACE;MACE,qBAAqB,EAAE;IACzB;;MAEE,2BAA2B,EAAE,EAAE;EACnC;IACE;MACE,qBAAqB,EAAE;IACzB;;MAEE,2BAA2B,EAAE,EAAE;;AAErC;EACE,cAAc;EACd,kBAAkB,EAAE;EACpB;IACE,gBAAgB;IAChB,eAAe,EAAE;;AAErB;EACE,aAAa;EACb,aAAa;EACb,YAAY,EAAE;;AAEhB;EACE,aAAa;EACb,aAAa;EACb,sBAAsB,EAAE;;AAE1B;EACE,+DAA+D;EAC/D,eAAe,EAAE;;AAEnB;EACE,yBAAyB;EACzB,gBAAgB;EAChB,kBAAkB,EAAE","file":"discover_layout.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n/* stylelint-disable-next-line length-zero-no-unit -- need consistent unit to sum them */\n/* stylelint-disable-next-line length-zero-no-unit -- need consistent unit to sum them */\ndiscover-app {\n  flex-grow: 1; }\n\n.dscPage {\n  flex-direction: column;\n  overflow: hidden;\n  padding: 0; }\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    .dscPage {\n      height: calc(100vh - 96px); }\n      .kbnBody--chromeHidden .dscPage {\n        height: calc(100vh - 0px); }\n      .kbnBody--hasHeaderBanner .dscPage {\n        height: calc(100vh - 128px); }\n      .kbnBody--chromeHidden.kbnBody--hasHeaderBanner .dscPage {\n        height: calc(100vh - 32px); } }\n  @media only screen and (min-width: 992px) and (max-width: 1199px) {\n    .dscPage {\n      height: calc(100vh - 96px); }\n      .kbnBody--chromeHidden .dscPage {\n        height: calc(100vh - 0px); }\n      .kbnBody--hasHeaderBanner .dscPage {\n        height: calc(100vh - 128px); }\n      .kbnBody--chromeHidden.kbnBody--hasHeaderBanner .dscPage {\n        height: calc(100vh - 32px); } }\n  @media only screen and (min-width: 1200px) {\n    .dscPage {\n      height: calc(100vh - 96px); }\n      .kbnBody--chromeHidden .dscPage {\n        height: calc(100vh - 0px); }\n      .kbnBody--hasHeaderBanner .dscPage {\n        height: calc(100vh - 128px); }\n      .kbnBody--chromeHidden.kbnBody--hasHeaderBanner .dscPage {\n        height: calc(100vh - 32px); } }\n  .dscPage .dscPageBody {\n    overflow: hidden; }\n\n.dscPageBody__inner {\n  overflow: hidden;\n  height: 100%; }\n\n.dscPageBody__contents {\n  overflow: hidden;\n  padding-top: 2px; }\n\n.dscPageContent__wrapper {\n  padding: 0 16px 16px 0;\n  overflow: hidden; }\n  @media only screen and (max-width: 574px) {\n    .dscPageContent__wrapper {\n      padding: 0 16px 16px; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .dscPageContent__wrapper {\n      padding: 0 16px 16px; } }\n\n.dscPageContent {\n  border: 1px solid #343741; }\n\n.dscPageContent,\n.dscPageContent__inner {\n  height: 100%; }\n\n.dscPageContent--centered {\n  height: auto; }\n\n.dscResultCount {\n  padding: 8px;\n  min-height: 48px; }\n  @media only screen and (max-width: 574px) {\n    .dscResultCount .dscResultCount__toggle {\n      align-items: flex-end; }\n    .dscResultCount .dscResuntCount__title,\n    .dscResultCount .dscResultCount__actions {\n      margin-bottom: 0 !important; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .dscResultCount .dscResultCount__toggle {\n      align-items: flex-end; }\n    .dscResultCount .dscResuntCount__title,\n    .dscResultCount .dscResultCount__actions {\n      margin-bottom: 0 !important; } }\n\n.dscTimechart {\n  display: block;\n  position: relative; }\n  .dscTimechart .series > rect {\n    fill-opacity: .5;\n    stroke-width: 1; }\n\n.dscHistogram {\n  display: flex;\n  height: 200px;\n  padding: 8px; }\n\n.dscHistogramGrid {\n  display: flex;\n  height: 128px;\n  padding: 8px 8px 0 8px; }\n\n.dscTable .kbnDocTable__row {\n  font-family: \"Roboto Mono\", Consolas, Menlo, Courier, monospace;\n  font-size: 12px; }\n\n.dscTable__footer {\n  background-color: #343741;\n  padding: 4px 8px;\n  text-align: center; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/layout/discover_layout.scss?v8light":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-1-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./public/application/apps/main/components/layout/discover_layout.scss?v8light ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n/* stylelint-disable-next-line length-zero-no-unit -- need consistent unit to sum them */\n/* stylelint-disable-next-line length-zero-no-unit -- need consistent unit to sum them */\ndiscover-app {\n  flex-grow: 1; }\n\n.dscPage {\n  flex-direction: column;\n  overflow: hidden;\n  padding: 0; }\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    .dscPage {\n      height: calc(100vh - 96px); }\n      .kbnBody--chromeHidden .dscPage {\n        height: calc(100vh - 0px); }\n      .kbnBody--hasHeaderBanner .dscPage {\n        height: calc(100vh - 128px); }\n      .kbnBody--chromeHidden.kbnBody--hasHeaderBanner .dscPage {\n        height: calc(100vh - 32px); } }\n  @media only screen and (min-width: 992px) and (max-width: 1199px) {\n    .dscPage {\n      height: calc(100vh - 96px); }\n      .kbnBody--chromeHidden .dscPage {\n        height: calc(100vh - 0px); }\n      .kbnBody--hasHeaderBanner .dscPage {\n        height: calc(100vh - 128px); }\n      .kbnBody--chromeHidden.kbnBody--hasHeaderBanner .dscPage {\n        height: calc(100vh - 32px); } }\n  @media only screen and (min-width: 1200px) {\n    .dscPage {\n      height: calc(100vh - 96px); }\n      .kbnBody--chromeHidden .dscPage {\n        height: calc(100vh - 0px); }\n      .kbnBody--hasHeaderBanner .dscPage {\n        height: calc(100vh - 128px); }\n      .kbnBody--chromeHidden.kbnBody--hasHeaderBanner .dscPage {\n        height: calc(100vh - 32px); } }\n  .dscPage .dscPageBody {\n    overflow: hidden; }\n\n.dscPageBody__inner {\n  overflow: hidden;\n  height: 100%; }\n\n.dscPageBody__contents {\n  overflow: hidden;\n  padding-top: 2px; }\n\n.dscPageContent__wrapper {\n  padding: 0 16px 16px 0;\n  overflow: hidden; }\n  @media only screen and (max-width: 574px) {\n    .dscPageContent__wrapper {\n      padding: 0 16px 16px; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .dscPageContent__wrapper {\n      padding: 0 16px 16px; } }\n\n.dscPageContent {\n  border: 1px solid #D3DAE6; }\n\n.dscPageContent,\n.dscPageContent__inner {\n  height: 100%; }\n\n.dscPageContent--centered {\n  height: auto; }\n\n.dscResultCount {\n  padding: 8px;\n  min-height: 48px; }\n  @media only screen and (max-width: 574px) {\n    .dscResultCount .dscResultCount__toggle {\n      align-items: flex-end; }\n    .dscResultCount .dscResuntCount__title,\n    .dscResultCount .dscResultCount__actions {\n      margin-bottom: 0 !important; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .dscResultCount .dscResultCount__toggle {\n      align-items: flex-end; }\n    .dscResultCount .dscResuntCount__title,\n    .dscResultCount .dscResultCount__actions {\n      margin-bottom: 0 !important; } }\n\n.dscTimechart {\n  display: block;\n  position: relative; }\n  .dscTimechart .series > rect {\n    fill-opacity: .5;\n    stroke-width: 1; }\n\n.dscHistogram {\n  display: flex;\n  height: 200px;\n  padding: 8px; }\n\n.dscHistogramGrid {\n  display: flex;\n  height: 128px;\n  padding: 8px 8px 0 8px; }\n\n.dscTable .kbnDocTable__row {\n  font-family: \"Roboto Mono\", Consolas, Menlo, Courier, monospace;\n  font-size: 12px; }\n\n.dscTable__footer {\n  background-color: #D3DAE6;\n  padding: 4px 8px;\n  text-align: center; }\n", "",{"version":3,"sources":["discover_layout.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF,wFAAwF;AACxF,wFAAwF;AACxF;EACE,YAAY,EAAE;;AAEhB;EACE,sBAAsB;EACtB,gBAAgB;EAChB,UAAU,EAAE;EACZ;IACE;MACE,0BAA0B,EAAE;MAC5B;QACE,yBAAyB,EAAE;MAC7B;QACE,2BAA2B,EAAE;MAC/B;QACE,0BAA0B,EAAE,EAAE;EACpC;IACE;MACE,0BAA0B,EAAE;MAC5B;QACE,yBAAyB,EAAE;MAC7B;QACE,2BAA2B,EAAE;MAC/B;QACE,0BAA0B,EAAE,EAAE;EACpC;IACE;MACE,0BAA0B,EAAE;MAC5B;QACE,yBAAyB,EAAE;MAC7B;QACE,2BAA2B,EAAE;MAC/B;QACE,0BAA0B,EAAE,EAAE;EACpC;IACE,gBAAgB,EAAE;;AAEtB;EACE,gBAAgB;EAChB,YAAY,EAAE;;AAEhB;EACE,gBAAgB;EAChB,gBAAgB,EAAE;;AAEpB;EACE,sBAAsB;EACtB,gBAAgB,EAAE;EAClB;IACE;MACE,oBAAoB,EAAE,EAAE;EAC5B;IACE;MACE,oBAAoB,EAAE,EAAE;;AAE9B;EACE,yBAAyB,EAAE;;AAE7B;;EAEE,YAAY,EAAE;;AAEhB;EACE,YAAY,EAAE;;AAEhB;EACE,YAAY;EACZ,gBAAgB,EAAE;EAClB;IACE;MACE,qBAAqB,EAAE;IACzB;;MAEE,2BAA2B,EAAE,EAAE;EACnC;IACE;MACE,qBAAqB,EAAE;IACzB;;MAEE,2BAA2B,EAAE,EAAE;;AAErC;EACE,cAAc;EACd,kBAAkB,EAAE;EACpB;IACE,gBAAgB;IAChB,eAAe,EAAE;;AAErB;EACE,aAAa;EACb,aAAa;EACb,YAAY,EAAE;;AAEhB;EACE,aAAa;EACb,aAAa;EACb,sBAAsB,EAAE;;AAE1B;EACE,+DAA+D;EAC/D,eAAe,EAAE;;AAEnB;EACE,yBAAyB;EACzB,gBAAgB;EAChB,kBAAkB,EAAE","file":"discover_layout.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n/* stylelint-disable-next-line length-zero-no-unit -- need consistent unit to sum them */\n/* stylelint-disable-next-line length-zero-no-unit -- need consistent unit to sum them */\ndiscover-app {\n  flex-grow: 1; }\n\n.dscPage {\n  flex-direction: column;\n  overflow: hidden;\n  padding: 0; }\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    .dscPage {\n      height: calc(100vh - 96px); }\n      .kbnBody--chromeHidden .dscPage {\n        height: calc(100vh - 0px); }\n      .kbnBody--hasHeaderBanner .dscPage {\n        height: calc(100vh - 128px); }\n      .kbnBody--chromeHidden.kbnBody--hasHeaderBanner .dscPage {\n        height: calc(100vh - 32px); } }\n  @media only screen and (min-width: 992px) and (max-width: 1199px) {\n    .dscPage {\n      height: calc(100vh - 96px); }\n      .kbnBody--chromeHidden .dscPage {\n        height: calc(100vh - 0px); }\n      .kbnBody--hasHeaderBanner .dscPage {\n        height: calc(100vh - 128px); }\n      .kbnBody--chromeHidden.kbnBody--hasHeaderBanner .dscPage {\n        height: calc(100vh - 32px); } }\n  @media only screen and (min-width: 1200px) {\n    .dscPage {\n      height: calc(100vh - 96px); }\n      .kbnBody--chromeHidden .dscPage {\n        height: calc(100vh - 0px); }\n      .kbnBody--hasHeaderBanner .dscPage {\n        height: calc(100vh - 128px); }\n      .kbnBody--chromeHidden.kbnBody--hasHeaderBanner .dscPage {\n        height: calc(100vh - 32px); } }\n  .dscPage .dscPageBody {\n    overflow: hidden; }\n\n.dscPageBody__inner {\n  overflow: hidden;\n  height: 100%; }\n\n.dscPageBody__contents {\n  overflow: hidden;\n  padding-top: 2px; }\n\n.dscPageContent__wrapper {\n  padding: 0 16px 16px 0;\n  overflow: hidden; }\n  @media only screen and (max-width: 574px) {\n    .dscPageContent__wrapper {\n      padding: 0 16px 16px; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .dscPageContent__wrapper {\n      padding: 0 16px 16px; } }\n\n.dscPageContent {\n  border: 1px solid #D3DAE6; }\n\n.dscPageContent,\n.dscPageContent__inner {\n  height: 100%; }\n\n.dscPageContent--centered {\n  height: auto; }\n\n.dscResultCount {\n  padding: 8px;\n  min-height: 48px; }\n  @media only screen and (max-width: 574px) {\n    .dscResultCount .dscResultCount__toggle {\n      align-items: flex-end; }\n    .dscResultCount .dscResuntCount__title,\n    .dscResultCount .dscResultCount__actions {\n      margin-bottom: 0 !important; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .dscResultCount .dscResultCount__toggle {\n      align-items: flex-end; }\n    .dscResultCount .dscResuntCount__title,\n    .dscResultCount .dscResultCount__actions {\n      margin-bottom: 0 !important; } }\n\n.dscTimechart {\n  display: block;\n  position: relative; }\n  .dscTimechart .series > rect {\n    fill-opacity: .5;\n    stroke-width: 1; }\n\n.dscHistogram {\n  display: flex;\n  height: 200px;\n  padding: 8px; }\n\n.dscHistogramGrid {\n  display: flex;\n  height: 128px;\n  padding: 8px 8px 0 8px; }\n\n.dscTable .kbnDocTable__row {\n  font-family: \"Roboto Mono\", Consolas, Menlo, Courier, monospace;\n  font-size: 12px; }\n\n.dscTable__footer {\n  background-color: #D3DAE6;\n  padding: 4px 8px;\n  text-align: center; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/loading_spinner/loading_spinner.scss?v8dark":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-0-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./public/application/apps/main/components/loading_spinner/loading_spinner.scss?v8dark ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscLoading {\n  text-align: center;\n  padding: 24px 0; }\n", "",{"version":3,"sources":["loading_spinner.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,kBAAkB;EAClB,eAAe,EAAE","file":"loading_spinner.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscLoading {\n  text-align: center;\n  padding: 24px 0; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/loading_spinner/loading_spinner.scss?v8light":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-1-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./public/application/apps/main/components/loading_spinner/loading_spinner.scss?v8light ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscLoading {\n  text-align: center;\n  padding: 24px 0; }\n", "",{"version":3,"sources":["loading_spinner.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,kBAAkB;EAClB,eAAe,EAAE","file":"loading_spinner.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscLoading {\n  text-align: center;\n  padding: 24px 0; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/no_results/_no_results.scss?v8dark":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-0-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./public/application/apps/main/components/no_results/_no_results.scss?v8dark ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscNoResults {\n  padding: 16px; }\n", "",{"version":3,"sources":["_no_results.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,aAAa,EAAE","file":"_no_results.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscNoResults {\n  padding: 16px; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/no_results/_no_results.scss?v8light":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-1-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./public/application/apps/main/components/no_results/_no_results.scss?v8light ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscNoResults {\n  padding: 16px; }\n", "",{"version":3,"sources":["_no_results.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,aAAa,EAAE","file":"_no_results.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscNoResults {\n  padding: 16px; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/sidebar/discover_field.scss?v8dark":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-0-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./public/application/apps/main/components/sidebar/discover_field.scss?v8dark ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscSidebarItem__fieldPopoverPanel {\n  min-width: 260px;\n  max-width: 300px; }\n\n.dscSidebarItem--multi .kbnFieldButton__button {\n  padding-left: 0; }\n", "",{"version":3,"sources":["discover_field.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,gBAAgB;EAChB,gBAAgB,EAAE;;AAEpB;EACE,eAAe,EAAE","file":"discover_field.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscSidebarItem__fieldPopoverPanel {\n  min-width: 260px;\n  max-width: 300px; }\n\n.dscSidebarItem--multi .kbnFieldButton__button {\n  padding-left: 0; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/sidebar/discover_field.scss?v8light":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-1-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./public/application/apps/main/components/sidebar/discover_field.scss?v8light ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscSidebarItem__fieldPopoverPanel {\n  min-width: 260px;\n  max-width: 300px; }\n\n.dscSidebarItem--multi .kbnFieldButton__button {\n  padding-left: 0; }\n", "",{"version":3,"sources":["discover_field.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,gBAAgB;EAChB,gBAAgB,EAAE;;AAEpB;EACE,eAAe,EAAE","file":"discover_field.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscSidebarItem__fieldPopoverPanel {\n  min-width: 260px;\n  max-width: 300px; }\n\n.dscSidebarItem--multi .kbnFieldButton__button {\n  padding-left: 0; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/sidebar/discover_field_bucket.scss?v8dark":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-0-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./public/application/apps/main/components/sidebar/discover_field_bucket.scss?v8dark ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscFieldDetails__barContainer {\n  min-width: 0; }\n", "",{"version":3,"sources":["discover_field_bucket.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,YAAY,EAAE","file":"discover_field_bucket.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscFieldDetails__barContainer {\n  min-width: 0; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/sidebar/discover_field_bucket.scss?v8light":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-1-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./public/application/apps/main/components/sidebar/discover_field_bucket.scss?v8light ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscFieldDetails__barContainer {\n  min-width: 0; }\n", "",{"version":3,"sources":["discover_field_bucket.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,YAAY,EAAE","file":"discover_field_bucket.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscFieldDetails__barContainer {\n  min-width: 0; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/sidebar/discover_field_search.scss?v8dark":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-0-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./public/application/apps/main/components/sidebar/discover_field_search.scss?v8dark ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscFieldSearch__formWrapper {\n  padding: 12px; }\n\n.dscFieldSearch__filterWrapper {\n  width: 100%; }\n", "",{"version":3,"sources":["discover_field_search.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,aAAa,EAAE;;AAEjB;EACE,WAAW,EAAE","file":"discover_field_search.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscFieldSearch__formWrapper {\n  padding: 12px; }\n\n.dscFieldSearch__filterWrapper {\n  width: 100%; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/sidebar/discover_field_search.scss?v8light":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-1-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./public/application/apps/main/components/sidebar/discover_field_search.scss?v8light ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscFieldSearch__formWrapper {\n  padding: 12px; }\n\n.dscFieldSearch__filterWrapper {\n  width: 100%; }\n", "",{"version":3,"sources":["discover_field_search.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,aAAa,EAAE;;AAEjB;EACE,WAAW,EAAE","file":"discover_field_search.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscFieldSearch__formWrapper {\n  padding: 12px; }\n\n.dscFieldSearch__filterWrapper {\n  width: 100%; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/sidebar/discover_sidebar.scss?v8dark":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-0-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./public/application/apps/main/components/sidebar/discover_sidebar.scss?v8dark ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscSidebar {\n  overflow: hidden;\n  margin: 0 !important;\n  flex-grow: 1;\n  padding-left: 16px;\n  width: 304px;\n  height: 100%; }\n  @media only screen and (max-width: 574px) {\n    .dscSidebar {\n      width: 100%;\n      padding: 16px 16px 0 16px;\n      background-color: #141519; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .dscSidebar {\n      width: 100%;\n      padding: 16px 16px 0 16px;\n      background-color: #141519; } }\n\n.dscSidebar__group {\n  height: 100%; }\n\n.dscSidebar__mobile {\n  width: 100%;\n  padding: 16px 16px 0; }\n  .dscSidebar__mobile .dscSidebar__mobileBadge {\n    margin-left: 8px;\n    vertical-align: text-bottom; }\n\n.dscSidebar__flyoutHeader {\n  align-items: center; }\n\n.dscFieldList {\n  padding: 0 4px 4px; }\n\n.dscFieldListHeader {\n  padding: 8px 8px 0 8px;\n  background-color: #343741; }\n\n.dscFieldList--popular {\n  padding-bottom: 8px;\n  background-color: #343741; }\n\n.dscSidebarItem:hover .dscSidebarItem__action, .dscSidebarItem:focus-within .dscSidebarItem__action, .dscSidebarItem[class*='-isActive'] .dscSidebarItem__action {\n  opacity: 1; }\n\n/**\n * 1. Only visually hide the action, so that it's still accessible to screen readers.\n * 2. When tabbed to, this element needs to be visible for keyboard accessibility.\n */\n.dscSidebarItem__action {\n  opacity: 0;\n  /* 1 */ }\n  .dscSidebarItem__action.dscSidebarItem__mobile {\n    opacity: 1; }\n  .dscSidebarItem__action:focus {\n    opacity: 1;\n    /* 2 */ }\n\n.dscSidebar__indexPatternSwitcher {\n  min-width: 0; }\n", "",{"version":3,"sources":["discover_sidebar.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,gBAAgB;EAChB,oBAAoB;EACpB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,YAAY,EAAE;EACd;IACE;MACE,WAAW;MACX,yBAAyB;MACzB,yBAAyB,EAAE,EAAE;EACjC;IACE;MACE,WAAW;MACX,yBAAyB;MACzB,yBAAyB,EAAE,EAAE;;AAEnC;EACE,YAAY,EAAE;;AAEhB;EACE,WAAW;EACX,oBAAoB,EAAE;EACtB;IACE,gBAAgB;IAChB,2BAA2B,EAAE;;AAEjC;EACE,mBAAmB,EAAE;;AAEvB;EACE,kBAAkB,EAAE;;AAEtB;EACE,sBAAsB;EACtB,yBAAyB,EAAE;;AAE7B;EACE,mBAAmB;EACnB,yBAAyB,EAAE;;AAE7B;EACE,UAAU,EAAE;;AAEd;;;EAGE;AACF;EACE,UAAU;EACV,MAAM,EAAE;EACR;IACE,UAAU,EAAE;EACd;IACE,UAAU;IACV,MAAM,EAAE;;AAEZ;EACE,YAAY,EAAE","file":"discover_sidebar.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscSidebar {\n  overflow: hidden;\n  margin: 0 !important;\n  flex-grow: 1;\n  padding-left: 16px;\n  width: 304px;\n  height: 100%; }\n  @media only screen and (max-width: 574px) {\n    .dscSidebar {\n      width: 100%;\n      padding: 16px 16px 0 16px;\n      background-color: #141519; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .dscSidebar {\n      width: 100%;\n      padding: 16px 16px 0 16px;\n      background-color: #141519; } }\n\n.dscSidebar__group {\n  height: 100%; }\n\n.dscSidebar__mobile {\n  width: 100%;\n  padding: 16px 16px 0; }\n  .dscSidebar__mobile .dscSidebar__mobileBadge {\n    margin-left: 8px;\n    vertical-align: text-bottom; }\n\n.dscSidebar__flyoutHeader {\n  align-items: center; }\n\n.dscFieldList {\n  padding: 0 4px 4px; }\n\n.dscFieldListHeader {\n  padding: 8px 8px 0 8px;\n  background-color: #343741; }\n\n.dscFieldList--popular {\n  padding-bottom: 8px;\n  background-color: #343741; }\n\n.dscSidebarItem:hover .dscSidebarItem__action, .dscSidebarItem:focus-within .dscSidebarItem__action, .dscSidebarItem[class*='-isActive'] .dscSidebarItem__action {\n  opacity: 1; }\n\n/**\n * 1. Only visually hide the action, so that it's still accessible to screen readers.\n * 2. When tabbed to, this element needs to be visible for keyboard accessibility.\n */\n.dscSidebarItem__action {\n  opacity: 0;\n  /* 1 */ }\n  .dscSidebarItem__action.dscSidebarItem__mobile {\n    opacity: 1; }\n  .dscSidebarItem__action:focus {\n    opacity: 1;\n    /* 2 */ }\n\n.dscSidebar__indexPatternSwitcher {\n  min-width: 0; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/sidebar/discover_sidebar.scss?v8light":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-1-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./public/application/apps/main/components/sidebar/discover_sidebar.scss?v8light ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscSidebar {\n  overflow: hidden;\n  margin: 0 !important;\n  flex-grow: 1;\n  padding-left: 16px;\n  width: 304px;\n  height: 100%; }\n  @media only screen and (max-width: 574px) {\n    .dscSidebar {\n      width: 100%;\n      padding: 16px 16px 0 16px;\n      background-color: #fafbfd; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .dscSidebar {\n      width: 100%;\n      padding: 16px 16px 0 16px;\n      background-color: #fafbfd; } }\n\n.dscSidebar__group {\n  height: 100%; }\n\n.dscSidebar__mobile {\n  width: 100%;\n  padding: 16px 16px 0; }\n  .dscSidebar__mobile .dscSidebar__mobileBadge {\n    margin-left: 8px;\n    vertical-align: text-bottom; }\n\n.dscSidebar__flyoutHeader {\n  align-items: center; }\n\n.dscFieldList {\n  padding: 0 4px 4px; }\n\n.dscFieldListHeader {\n  padding: 8px 8px 0 8px;\n  background-color: #e6f1fa; }\n\n.dscFieldList--popular {\n  padding-bottom: 8px;\n  background-color: #e6f1fa; }\n\n.dscSidebarItem:hover .dscSidebarItem__action, .dscSidebarItem:focus-within .dscSidebarItem__action, .dscSidebarItem[class*='-isActive'] .dscSidebarItem__action {\n  opacity: 1; }\n\n/**\n * 1. Only visually hide the action, so that it's still accessible to screen readers.\n * 2. When tabbed to, this element needs to be visible for keyboard accessibility.\n */\n.dscSidebarItem__action {\n  opacity: 0;\n  /* 1 */ }\n  .dscSidebarItem__action.dscSidebarItem__mobile {\n    opacity: 1; }\n  .dscSidebarItem__action:focus {\n    opacity: 1;\n    /* 2 */ }\n\n.dscSidebar__indexPatternSwitcher {\n  min-width: 0; }\n", "",{"version":3,"sources":["discover_sidebar.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,gBAAgB;EAChB,oBAAoB;EACpB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,YAAY,EAAE;EACd;IACE;MACE,WAAW;MACX,yBAAyB;MACzB,yBAAyB,EAAE,EAAE;EACjC;IACE;MACE,WAAW;MACX,yBAAyB;MACzB,yBAAyB,EAAE,EAAE;;AAEnC;EACE,YAAY,EAAE;;AAEhB;EACE,WAAW;EACX,oBAAoB,EAAE;EACtB;IACE,gBAAgB;IAChB,2BAA2B,EAAE;;AAEjC;EACE,mBAAmB,EAAE;;AAEvB;EACE,kBAAkB,EAAE;;AAEtB;EACE,sBAAsB;EACtB,yBAAyB,EAAE;;AAE7B;EACE,mBAAmB;EACnB,yBAAyB,EAAE;;AAE7B;EACE,UAAU,EAAE;;AAEd;;;EAGE;AACF;EACE,UAAU;EACV,MAAM,EAAE;EACR;IACE,UAAU,EAAE;EACd;IACE,UAAU;IACV,MAAM,EAAE;;AAEZ;EACE,YAAY,EAAE","file":"discover_sidebar.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscSidebar {\n  overflow: hidden;\n  margin: 0 !important;\n  flex-grow: 1;\n  padding-left: 16px;\n  width: 304px;\n  height: 100%; }\n  @media only screen and (max-width: 574px) {\n    .dscSidebar {\n      width: 100%;\n      padding: 16px 16px 0 16px;\n      background-color: #fafbfd; } }\n  @media only screen and (min-width: 575px) and (max-width: 767px) {\n    .dscSidebar {\n      width: 100%;\n      padding: 16px 16px 0 16px;\n      background-color: #fafbfd; } }\n\n.dscSidebar__group {\n  height: 100%; }\n\n.dscSidebar__mobile {\n  width: 100%;\n  padding: 16px 16px 0; }\n  .dscSidebar__mobile .dscSidebar__mobileBadge {\n    margin-left: 8px;\n    vertical-align: text-bottom; }\n\n.dscSidebar__flyoutHeader {\n  align-items: center; }\n\n.dscFieldList {\n  padding: 0 4px 4px; }\n\n.dscFieldListHeader {\n  padding: 8px 8px 0 8px;\n  background-color: #e6f1fa; }\n\n.dscFieldList--popular {\n  padding-bottom: 8px;\n  background-color: #e6f1fa; }\n\n.dscSidebarItem:hover .dscSidebarItem__action, .dscSidebarItem:focus-within .dscSidebarItem__action, .dscSidebarItem[class*='-isActive'] .dscSidebarItem__action {\n  opacity: 1; }\n\n/**\n * 1. Only visually hide the action, so that it's still accessible to screen readers.\n * 2. When tabbed to, this element needs to be visible for keyboard accessibility.\n */\n.dscSidebarItem__action {\n  opacity: 0;\n  /* 1 */ }\n  .dscSidebarItem__action.dscSidebarItem__mobile {\n    opacity: 1; }\n  .dscSidebarItem__action:focus {\n    opacity: 1;\n    /* 2 */ }\n\n.dscSidebar__indexPatternSwitcher {\n  min-width: 0; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/timechart_header/timechart_header.scss?v8dark":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-0-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./public/application/apps/main/components/timechart_header/timechart_header.scss?v8dark ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscTimeIntervalSelect {\n  align-items: center; }\n\n.dscTimeChartHeader {\n  flex-grow: 0; }\n", "",{"version":3,"sources":["timechart_header.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,mBAAmB,EAAE;;AAEvB;EACE,YAAY,EAAE","file":"timechart_header.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscTimeIntervalSelect {\n  align-items: center; }\n\n.dscTimeChartHeader {\n  flex-grow: 0; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/timechart_header/timechart_header.scss?v8light":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-1-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./public/application/apps/main/components/timechart_header/timechart_header.scss?v8light ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscTimeIntervalSelect {\n  align-items: center; }\n\n.dscTimeChartHeader {\n  flex-grow: 0; }\n", "",{"version":3,"sources":["timechart_header.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,mBAAmB,EAAE;;AAEvB;EACE,YAAY,EAAE","file":"timechart_header.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscTimeIntervalSelect {\n  align-items: center; }\n\n.dscTimeChartHeader {\n  flex-grow: 0; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/top_nav/open_options_popover.scss?v8dark":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-0-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./public/application/apps/main/components/top_nav/open_options_popover.scss?v8dark ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscOptionsPopover {\n  width: 288px; }\n", "",{"version":3,"sources":["open_options_popover.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,YAAY,EAAE","file":"open_options_popover.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscOptionsPopover {\n  width: 288px; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/top_nav/open_options_popover.scss?v8light":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-1-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./public/application/apps/main/components/top_nav/open_options_popover.scss?v8light ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscOptionsPopover {\n  width: 288px; }\n", "",{"version":3,"sources":["open_options_popover.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,YAAY,EAAE","file":"open_options_popover.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscOptionsPopover {\n  width: 288px; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/components/context_app/context_app.scss?v8dark":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-0-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./public/application/components/context_app/context_app.scss?v8dark ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n/* stylelint-disable-next-line length-zero-no-unit -- need consistent unit to sum them */\n/* stylelint-disable-next-line length-zero-no-unit -- need consistent unit to sum them */\n.dscDocsPage {\n  height: calc(100vh - 150px); }\n  .kbnBody--chromeHidden .dscDocsPage {\n    height: calc(100vh - 54px); }\n  .kbnBody--hasHeaderBanner .dscDocsPage {\n    height: calc(100vh - 182px); }\n  .kbnBody--chromeHidden.kbnBody--hasHeaderBanner .dscDocsPage {\n    height: calc(100vh - 86px); }\n\n.dscDocsContent {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n\n.dscDocsGrid {\n  flex: 1 1 100%;\n  overflow: auto; }\n  .dscDocsGrid__cell--highlight {\n    background-color: #103148; }\n  .dscDocsGrid .euiDataGridRowCell.euiDataGridRowCell--firstColumn {\n    padding: 0; }\n", "",{"version":3,"sources":["context_app.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF,wFAAwF;AACxF,wFAAwF;AACxF;EACE,2BAA2B,EAAE;EAC7B;IACE,0BAA0B,EAAE;EAC9B;IACE,2BAA2B,EAAE;EAC/B;IACE,0BAA0B,EAAE;;AAEhC;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY,EAAE;;AAEhB;EACE,cAAc;EACd,cAAc,EAAE;EAChB;IACE,yBAAyB,EAAE;EAC7B;IACE,UAAU,EAAE","file":"context_app.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n/* stylelint-disable-next-line length-zero-no-unit -- need consistent unit to sum them */\n/* stylelint-disable-next-line length-zero-no-unit -- need consistent unit to sum them */\n.dscDocsPage {\n  height: calc(100vh - 150px); }\n  .kbnBody--chromeHidden .dscDocsPage {\n    height: calc(100vh - 54px); }\n  .kbnBody--hasHeaderBanner .dscDocsPage {\n    height: calc(100vh - 182px); }\n  .kbnBody--chromeHidden.kbnBody--hasHeaderBanner .dscDocsPage {\n    height: calc(100vh - 86px); }\n\n.dscDocsContent {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n\n.dscDocsGrid {\n  flex: 1 1 100%;\n  overflow: auto; }\n  .dscDocsGrid__cell--highlight {\n    background-color: #103148; }\n  .dscDocsGrid .euiDataGridRowCell.euiDataGridRowCell--firstColumn {\n    padding: 0; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/components/context_app/context_app.scss?v8light":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-1-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./public/application/components/context_app/context_app.scss?v8light ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n/* stylelint-disable-next-line length-zero-no-unit -- need consistent unit to sum them */\n/* stylelint-disable-next-line length-zero-no-unit -- need consistent unit to sum them */\n.dscDocsPage {\n  height: calc(100vh - 150px); }\n  .kbnBody--chromeHidden .dscDocsPage {\n    height: calc(100vh - 54px); }\n  .kbnBody--hasHeaderBanner .dscDocsPage {\n    height: calc(100vh - 182px); }\n  .kbnBody--chromeHidden.kbnBody--hasHeaderBanner .dscDocsPage {\n    height: calc(100vh - 86px); }\n\n.dscDocsContent {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n\n.dscDocsGrid {\n  flex: 1 1 100%;\n  overflow: auto; }\n  .dscDocsGrid__cell--highlight {\n    background-color: #e6f1fa; }\n  .dscDocsGrid .euiDataGridRowCell.euiDataGridRowCell--firstColumn {\n    padding: 0; }\n", "",{"version":3,"sources":["context_app.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF,wFAAwF;AACxF,wFAAwF;AACxF;EACE,2BAA2B,EAAE;EAC7B;IACE,0BAA0B,EAAE;EAC9B;IACE,2BAA2B,EAAE;EAC/B;IACE,0BAA0B,EAAE;;AAEhC;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY,EAAE;;AAEhB;EACE,cAAc;EACd,cAAc,EAAE;EAChB;IACE,yBAAyB,EAAE;EAC7B;IACE,UAAU,EAAE","file":"context_app.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n/* stylelint-disable-next-line length-zero-no-unit -- need consistent unit to sum them */\n/* stylelint-disable-next-line length-zero-no-unit -- need consistent unit to sum them */\n.dscDocsPage {\n  height: calc(100vh - 150px); }\n  .kbnBody--chromeHidden .dscDocsPage {\n    height: calc(100vh - 54px); }\n  .kbnBody--hasHeaderBanner .dscDocsPage {\n    height: calc(100vh - 182px); }\n  .kbnBody--chromeHidden.kbnBody--hasHeaderBanner .dscDocsPage {\n    height: calc(100vh - 86px); }\n\n.dscDocsContent {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n\n.dscDocsGrid {\n  flex: 1 1 100%;\n  overflow: auto; }\n  .dscDocsGrid__cell--highlight {\n    background-color: #e6f1fa; }\n  .dscDocsGrid .euiDataGridRowCell.euiDataGridRowCell--firstColumn {\n    padding: 0; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/index.scss?v8dark":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-0-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./public/application/index.scss?v8dark ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscHistogram__header--partial {\n  font-weight: 400;\n  min-width: 192px; }\n\n.cxtSizePicker {\n  text-align: center;\n  width: 80px; }\n  .cxtSizePicker::-webkit-outer-spin-button, .cxtSizePicker::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n            appearance: none;\n    margin: 0; }\n", "",{"version":3,"sources":["index.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,gBAAgB;EAChB,gBAAgB,EAAE;;AAEpB;EACE,kBAAkB;EAClB,WAAW,EAAE;EACb;IACE,wBAAgB;YAAhB,gBAAgB;IAChB,SAAS,EAAE","file":"index.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscHistogram__header--partial {\n  font-weight: 400;\n  min-width: 192px; }\n\n.cxtSizePicker {\n  text-align: center;\n  width: 80px; }\n  .cxtSizePicker::-webkit-outer-spin-button, .cxtSizePicker::-webkit-inner-spin-button {\n    appearance: none;\n    margin: 0; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/index.scss?v8light":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-1-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./public/application/index.scss?v8light ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscHistogram__header--partial {\n  font-weight: 400;\n  min-width: 192px; }\n\n.cxtSizePicker {\n  text-align: center;\n  width: 80px; }\n  .cxtSizePicker::-webkit-outer-spin-button, .cxtSizePicker::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n            appearance: none;\n    margin: 0; }\n", "",{"version":3,"sources":["index.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,gBAAgB;EAChB,gBAAgB,EAAE;;AAEpB;EACE,kBAAkB;EAClB,WAAW,EAAE;EACb;IACE,wBAAgB;YAAhB,gBAAgB;IAChB,SAAS,EAAE","file":"index.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscHistogram__header--partial {\n  font-weight: 400;\n  min-width: 192px; }\n\n.cxtSizePicker {\n  text-align: center;\n  width: 80px; }\n  .cxtSizePicker::-webkit-outer-spin-button, .cxtSizePicker::-webkit-inner-spin-button {\n    appearance: none;\n    margin: 0; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/fast-shallow-equal/index.js":
/*!**********************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/fast-shallow-equal/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var keyList = Object.keys;

exports.equal = function equal (a, b) {
  if (a === b) return true;
  if (!(a instanceof Object) || !(b instanceof Object)) return false;

  var keys = keyList(a);
  var length = keys.length;

  for (var i = 0; i < length; i++)
    if (!(keys[i] in b)) return false;

  for (var i = 0; i < length; i++)
    if (a[keys[i]] !== b[keys[i]]) return false;

  return length === keyList(b).length;
};


/***/ }),

/***/ "../../node_modules/object-assign/index.js":
/*!*****************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/object-assign/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "../../node_modules/prop-types/checkPropTypes.js":
/*!***********************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/prop-types/checkPropTypes.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../../node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "../../node_modules/prop-types/factoryWithTypeCheckers.js":
/*!********************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "../../node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "../../node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../../node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "../../node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "../../node_modules/prop-types/index.js":
/*!**************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/prop-types/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "../../node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "../../node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "../../node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*********************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "../../node_modules/react-is/cjs/react-is.development.js":
/*!*******************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/react-is/cjs/react-is.development.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "../../node_modules/react-is/index.js":
/*!************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/react-is/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../../node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../../node_modules/react-use/lib/useCustomCompareEffect.js":
/*!**********************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/react-use/lib/useCustomCompareEffect.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var isPrimitive = function (val) { return val !== Object(val); };
var useCustomCompareEffect = function (effect, deps, depsEqual) {
    if (true) {
        if (!(deps instanceof Array) || !deps.length) {
            console.warn('`useCustomCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
        }
        if (deps.every(isPrimitive)) {
            console.warn('`useCustomCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
        }
        if (typeof depsEqual !== 'function') {
            console.warn('`useCustomCompareEffect` should be used with depsEqual callback for comparing deps list');
        }
    }
    var ref = react_1.useRef(undefined);
    if (!ref.current || !depsEqual(deps, ref.current)) {
        ref.current = deps;
    }
    react_1.useEffect(effect, ref.current);
};
exports.default = useCustomCompareEffect;


/***/ }),

/***/ "../../node_modules/react-use/lib/useShallowCompareEffect.js":
/*!***********************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/react-use/lib/useShallowCompareEffect.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var fast_shallow_equal_1 = __webpack_require__(/*! fast-shallow-equal */ "../../node_modules/fast-shallow-equal/index.js");
var useCustomCompareEffect_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useCustomCompareEffect */ "../../node_modules/react-use/lib/useCustomCompareEffect.js"));
var isPrimitive = function (val) { return val !== Object(val); };
var shallowEqualDepsList = function (prevDeps, nextDeps) {
    return prevDeps.every(function (dep, index) { return fast_shallow_equal_1.equal(dep, nextDeps[index]); });
};
var useShallowCompareEffect = function (effect, deps) {
    if (true) {
        if (!(deps instanceof Array) || !deps.length) {
            console.warn('`useShallowCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
        }
        if (deps.every(isPrimitive)) {
            console.warn('`useShallowCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
        }
    }
    useCustomCompareEffect_1.default(effect, deps, shallowEqualDepsList);
};
exports.default = useShallowCompareEffect;


/***/ }),

/***/ "./public/application/angular/context/api/anchor.ts":
/*!**********************************************************!*\
  !*** ./public/application/angular/context/api/anchor.ts ***!
  \**********************************************************/
/*! exports provided: fetchAnchorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAnchorProvider", function() { return fetchAnchorProvider; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


function fetchAnchorProvider(indexPatterns, searchSource, useNewFieldsApi = false) {
  return async function fetchAnchor(indexPatternId, anchorId, sort) {
    const indexPattern = await indexPatterns.get(indexPatternId);
    searchSource.setParent(undefined).setField('index', indexPattern).setField('version', true).setField('size', 1).setField('query', {
      query: {
        constant_score: {
          filter: {
            ids: {
              values: [anchorId]
            }
          }
        }
      },
      language: 'lucene'
    }).setField('sort', sort);

    if (useNewFieldsApi) {
      searchSource.removeField('fieldsFromSource');
      searchSource.setField('fields', [{
        field: '*',
        include_unmapped: 'true'
      }]);
    }

    const response = await searchSource.fetch();

    if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(response, ['hits', 'total'], 0) < 1) {
      throw new Error(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.context.failedToLoadAnchorDocumentErrorDescription', {
        defaultMessage: 'Failed to load anchor document.'
      }));
    }

    return { ...Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(response, ['hits', 'hits', 0]),
      isAnchor: true
    };
  };
}

/***/ }),

/***/ "./public/application/angular/context/api/context.ts":
/*!***********************************************************!*\
  !*** ./public/application/angular/context/api/context.ts ***!
  \***********************************************************/
/*! exports provided: SurrDocType, fetchContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurrDocType", function() { return SurrDocType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchContextProvider", function() { return fetchContextProvider; });
/* harmony import */ var _utils_sorting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/sorting */ "./public/application/angular/context/api/utils/sorting.ts");
/* harmony import */ var _utils_date_conversion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/date_conversion */ "./public/application/angular/context/api/utils/date_conversion.ts");
/* harmony import */ var _utils_fetch_hits_in_interval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/fetch_hits_in_interval */ "./public/application/angular/context/api/utils/fetch_hits_in_interval.ts");
/* harmony import */ var _utils_generate_intervals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/generate_intervals */ "./public/application/angular/context/api/utils/generate_intervals.ts");
/* harmony import */ var _utils_get_es_query_search_after__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/get_es_query_search_after */ "./public/application/angular/context/api/utils/get_es_query_search_after.ts");
/* harmony import */ var _utils_get_es_query_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/get_es_query_sort */ "./public/application/angular/context/api/utils/get_es_query_sort.ts");
/* harmony import */ var _kibana_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../kibana_services */ "./public/kibana_services.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */







let SurrDocType;

(function (SurrDocType) {
  SurrDocType["SUCCESSORS"] = "successors";
  SurrDocType["PREDECESSORS"] = "predecessors";
})(SurrDocType || (SurrDocType = {}));

const DAY_MILLIS = 24 * 60 * 60 * 1000; // look from 1 day up to 10000 days into the past and future

const LOOKUP_OFFSETS = [0, 1, 7, 30, 365, 10000].map(days => days * DAY_MILLIS);

function fetchContextProvider(indexPatterns, useNewFieldsApi) {
  return {
    fetchSurroundingDocs
  };
  /**
   * Fetch successor or predecessor documents of a given anchor document
   *
   * @param {SurrDocType} type - `successors` or `predecessors`
   * @param {string} indexPatternId
   * @param {AnchorHitRecord} anchor - anchor record
   * @param {string} timeField - name of the timefield, that's sorted on
   * @param {string} tieBreakerField - name of the tie breaker, the 2nd sort field
   * @param {SortDirection} sortDir - direction of sorting
   * @param {number} size - number of records to retrieve
   * @param {Filter[]} filters - to apply in the elastic query
   * @returns {Promise<object[]>}
   */

  async function fetchSurroundingDocs(type, indexPatternId, anchor, timeField, tieBreakerField, sortDir, size, filters) {
    if (typeof anchor !== 'object' || anchor === null || !size) {
      return [];
    }

    const indexPattern = await indexPatterns.get(indexPatternId);
    const searchSource = await createSearchSource(indexPattern, filters);
    const sortDirToApply = type === SurrDocType.SUCCESSORS ? sortDir : Object(_utils_sorting__WEBPACK_IMPORTED_MODULE_0__["reverseSortDir"])(sortDir);
    const nanos = indexPattern.isTimeNanosBased() ? Object(_utils_date_conversion__WEBPACK_IMPORTED_MODULE_1__["extractNanos"])(anchor.fields[timeField][0]) : '';
    const timeValueMillis = nanos !== '' ? Object(_utils_date_conversion__WEBPACK_IMPORTED_MODULE_1__["convertIsoToMillis"])(anchor.fields[timeField][0]) : anchor.sort[0];
    const intervals = Object(_utils_generate_intervals__WEBPACK_IMPORTED_MODULE_3__["generateIntervals"])(LOOKUP_OFFSETS, timeValueMillis, type, sortDir);
    let documents = [];

    for (const interval of intervals) {
      const remainingSize = size - documents.length;

      if (remainingSize <= 0) {
        break;
      }

      const searchAfter = Object(_utils_get_es_query_search_after__WEBPACK_IMPORTED_MODULE_4__["getEsQuerySearchAfter"])(type, documents, timeField, anchor, nanos, useNewFieldsApi);
      const sort = Object(_utils_get_es_query_sort__WEBPACK_IMPORTED_MODULE_5__["getEsQuerySort"])(timeField, tieBreakerField, sortDirToApply, nanos);
      const hits = await Object(_utils_fetch_hits_in_interval__WEBPACK_IMPORTED_MODULE_2__["fetchHitsInInterval"])(searchSource, timeField, sort, sortDirToApply, interval, searchAfter, remainingSize, nanos, anchor._id);
      documents = type === SurrDocType.SUCCESSORS ? [...documents, ...hits] : [...hits.slice().reverse(), ...documents];
    }

    return documents;
  }

  async function createSearchSource(indexPattern, filters) {
    const {
      data
    } = Object(_kibana_services__WEBPACK_IMPORTED_MODULE_6__["getServices"])();
    const searchSource = await data.search.searchSource.create();

    if (useNewFieldsApi) {
      searchSource.removeField('fieldsFromSource');
      searchSource.setField('fields', [{
        field: '*',
        include_unmapped: 'true'
      }]);
    }

    return searchSource.setParent(undefined).setField('index', indexPattern).setField('filter', filters);
  }
}



/***/ }),

/***/ "./public/application/angular/context/api/utils/date_conversion.ts":
/*!*************************************************************************!*\
  !*** ./public/application/angular/context/api/utils/date_conversion.ts ***!
  \*************************************************************************/
/*! exports provided: extractNanos, convertIsoToMillis, convertTimeValueToIso */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractNanos", function() { return extractNanos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertIsoToMillis", function() { return convertIsoToMillis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertTimeValueToIso", function() { return convertTimeValueToIso; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 * extract nanoseconds if available in ISO timestamp
 * returns the nanos as string like this:
 * 9ns -> 000000009
 * 10000ns -> 0000010000
 * returns 000000000 for invalid timestamps or timestamps with just date
 **/

function extractNanos(timeFieldValue = '') {
  const fieldParts = timeFieldValue.split('.');
  const fractionSeconds = fieldParts.length === 2 ? fieldParts[1].replace('Z', '') : '';
  return fractionSeconds.length !== 9 ? fractionSeconds.padEnd(9, '0') : fractionSeconds;
}
/**
 * convert an iso formatted string to number of milliseconds since
 * 1970-01-01T00:00:00.000Z
 * @param {string} isoValue
 * @returns {number}
 */

function convertIsoToMillis(isoValue) {
  const date = new Date(isoValue);
  return date.getTime();
}
/**
 * the given time value in milliseconds is converted to a ISO formatted string
 * if nanosValue is provided, the given value replaces the fractional seconds part
 * of the formated string since moment.js doesn't support formatting timestamps
 * with a higher precision then microseconds
 * The browser rounds date nanos values:
 * 2019-09-18T06:50:12.999999999 -> browser rounds to 1568789413000000000
 * 2019-09-18T06:50:59.999999999 -> browser rounds to 1568789460000000000
 * 2017-12-31T23:59:59.999999999 -> browser rounds 1514761199999999999 to 1514761200000000000
 */

function convertTimeValueToIso(timeValueMillis, nanosValue) {
  if (!timeValueMillis) {
    return null;
  }

  const isoString = moment__WEBPACK_IMPORTED_MODULE_0___default()(timeValueMillis).toISOString();

  if (!isoString) {
    return null;
  } else if (nanosValue !== '') {
    return `${isoString.substring(0, isoString.length - 4)}${nanosValue}Z`;
  }

  return isoString;
}

/***/ }),

/***/ "./public/application/angular/context/api/utils/fetch_hits_in_interval.ts":
/*!********************************************************************************!*\
  !*** ./public/application/angular/context/api/utils/fetch_hits_in_interval.ts ***!
  \********************************************************************************/
/*! exports provided: fetchHitsInInterval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchHitsInInterval", function() { return fetchHitsInInterval; });
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../src/plugins/data/public */ "plugin/data/public");
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_data_public__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _date_conversion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date_conversion */ "./public/application/angular/context/api/utils/date_conversion.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */



/**
 * Fetch the hits between a given `interval` up to a maximum of `maxCount` documents.
 * The documents are sorted by `sort`
 *
 * The `searchSource` is assumed to have the appropriate index pattern
 * and filters set.
 */
async function fetchHitsInInterval(searchSource, timeField, sort, sortDir, interval, searchAfter, maxCount, nanosValue, anchorId) {
  var _response$hits;

  const range = {
    format: 'strict_date_optional_time'
  };
  const [start, stop] = interval;

  if (start) {
    range[sortDir === _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_0__["SortDirection"].asc ? 'gte' : 'lte'] = Object(_date_conversion__WEBPACK_IMPORTED_MODULE_1__["convertTimeValueToIso"])(start, nanosValue);
  }

  if (stop) {
    range[sortDir === _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_0__["SortDirection"].asc ? 'lte' : 'gte'] = Object(_date_conversion__WEBPACK_IMPORTED_MODULE_1__["convertTimeValueToIso"])(stop, nanosValue);
  }

  const response = await searchSource.setField('size', maxCount).setField('query', {
    query: {
      bool: {
        must: {
          constant_score: {
            filter: {
              range: {
                [timeField]: range
              }
            }
          }
        },
        must_not: {
          ids: {
            values: [anchorId]
          }
        }
      }
    },
    language: 'lucene'
  }).setField('searchAfter', searchAfter).setField('sort', sort).setField('version', true).fetch(); // TODO: There's a difference in the definition of SearchResponse and EsHitRecord

  return ((_response$hits = response.hits) === null || _response$hits === void 0 ? void 0 : _response$hits.hits) || [];
}

/***/ }),

/***/ "./public/application/angular/context/api/utils/generate_intervals.ts":
/*!****************************************************************************!*\
  !*** ./public/application/angular/context/api/utils/generate_intervals.ts ***!
  \****************************************************************************/
/*! exports provided: asPairs, generateIntervals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asPairs", function() { return asPairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateIntervals", function() { return generateIntervals; });
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../src/plugins/data/public */ "plugin/data/public");
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_data_public__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ "./public/application/angular/context/api/context.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */



/**
 * Generate a sequence of pairs from the iterable that looks like
 * `[[x_0, x_1], [x_1, x_2], [x_2, x_3], ..., [x_(n-1), x_n]]`.
 */
function* asPairs(iterable) {
  let currentPair = [];

  for (const value of iterable) {
    currentPair = [...currentPair, value].slice(-2);

    if (currentPair.length === 2) {
      yield currentPair;
    }
  }
}
/**
 * Returns a iterable containing intervals `[start,end]` for Elasticsearch date range queries
 * depending on type (`successors` or `predecessors`) and sort (`asc`, `desc`) these are ascending or descending intervals.
 */

function generateIntervals(offsets, startTime, type, sort) {
  const offsetSign = sort === _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_0__["SortDirection"].asc && type === _context__WEBPACK_IMPORTED_MODULE_1__["SurrDocType"].SUCCESSORS || sort === _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_0__["SortDirection"].desc && type === _context__WEBPACK_IMPORTED_MODULE_1__["SurrDocType"].PREDECESSORS ? 1 : -1; // ending with `null` opens the last interval

  return asPairs([...offsets.map(offset => startTime + offset * offsetSign), null]);
}

/***/ }),

/***/ "./public/application/angular/context/api/utils/get_es_query_search_after.ts":
/*!***********************************************************************************!*\
  !*** ./public/application/angular/context/api/utils/get_es_query_search_after.ts ***!
  \***********************************************************************************/
/*! exports provided: getEsQuerySearchAfter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEsQuerySearchAfter", function() { return getEsQuerySearchAfter; });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context */ "./public/application/angular/context/api/context.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


/**
 * Get the searchAfter query value for elasticsearch
 * When there are already documents available, which means successors or predecessors
 * were already fetched, the new searchAfter for the next fetch has to be the sort value
 * of the first (prececessor), or last (successor) of the list
 */
function getEsQuerySearchAfter(type, documents, timeFieldName, anchor, nanoSeconds, useNewFieldsApi) {
  if (documents.length) {
    // already surrounding docs -> first or last record  is used
    const afterTimeRecIdx = type === _context__WEBPACK_IMPORTED_MODULE_0__["SurrDocType"].SUCCESSORS && documents.length ? documents.length - 1 : 0;
    const afterTimeDoc = documents[afterTimeRecIdx];
    let afterTimeValue = afterTimeDoc.sort[0];

    if (nanoSeconds) {
      var _afterTimeDoc$_source;

      afterTimeValue = useNewFieldsApi ? afterTimeDoc.fields[timeFieldName][0] : (_afterTimeDoc$_source = afterTimeDoc._source) === null || _afterTimeDoc$_source === void 0 ? void 0 : _afterTimeDoc$_source[timeFieldName];
    }

    return [afterTimeValue, afterTimeDoc.sort[1]];
  } // if data_nanos adapt timestamp value for sorting, since numeric value was rounded by browser
  // ES search_after also works when number is provided as string


  const searchAfter = new Array(2);
  searchAfter[0] = anchor.sort[0];

  if (nanoSeconds) {
    var _anchor$_source;

    searchAfter[0] = useNewFieldsApi ? anchor.fields[timeFieldName][0] : (_anchor$_source = anchor._source) === null || _anchor$_source === void 0 ? void 0 : _anchor$_source[timeFieldName];
  }

  searchAfter[1] = anchor.sort[1];
  return searchAfter;
}

/***/ }),

/***/ "./public/application/angular/context/api/utils/get_es_query_sort.ts":
/*!***************************************************************************!*\
  !*** ./public/application/angular/context/api/utils/get_es_query_sort.ts ***!
  \***************************************************************************/
/*! exports provided: getEsQuerySort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEsQuerySort", function() { return getEsQuerySort; });
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 * Returns `EsQuerySort` which is used to sort records in the ES query
 * https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-sort.html
 * @param timeField
 * @param tieBreakerField
 * @param sortDir
 * @param nanos
 */
function getEsQuerySort(timeField, tieBreakerField, sortDir, nanos) {
  return [{
    [timeField]: {
      order: sortDir,
      format: nanos ? 'strict_date_optional_time_nanos' : 'strict_date_optional_time'
    }
  }, {
    [tieBreakerField]: sortDir
  }];
}

/***/ }),

/***/ "./public/application/angular/context/api/utils/sorting.ts":
/*!*****************************************************************!*\
  !*** ./public/application/angular/context/api/utils/sorting.ts ***!
  \*****************************************************************/
/*! exports provided: SortDirection, getFirstSortableField, reverseSortDir */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortDirection", function() { return SortDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstSortableField", function() { return getFirstSortableField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverseSortDir", function() { return reverseSortDir; });
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
let SortDirection;
/**
 * The list of field names that are allowed for sorting, but not included in
 * index pattern fields.
 */

(function (SortDirection) {
  SortDirection["asc"] = "asc";
  SortDirection["desc"] = "desc";
})(SortDirection || (SortDirection = {}));

const META_FIELD_NAMES = ['_seq_no', '_doc', '_uid'];
/**
 * Returns a field from the intersection of the set of sortable fields in the
 * given index pattern and a given set of candidate field names.
 */

function getFirstSortableField(indexPattern, fieldNames) {
  const sortableFields = fieldNames.filter(fieldName => META_FIELD_NAMES.includes(fieldName) || (indexPattern.fields.getByName(fieldName) || {
    sortable: false
  }).sortable);
  return sortableFields[0];
}
/**
 * Return the reversed sort direction.
 */

function reverseSortDir(sortDirection) {
  return sortDirection === SortDirection.asc ? SortDirection.desc : SortDirection.asc;
}

/***/ }),

/***/ "./public/application/angular/context/components/action_bar/action_bar.tsx":
/*!*********************************************************************************!*\
  !*** ./public/application/angular/context/components/action_bar/action_bar.tsx ***!
  \*********************************************************************************/
/*! exports provided: ActionBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionBar", function() { return ActionBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _action_bar_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action_bar_warning */ "./public/application/angular/context/components/action_bar/action_bar_warning.tsx");
/* harmony import */ var _api_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/context */ "./public/application/angular/context/api/context.ts");
/* harmony import */ var _components_context_app_utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/context_app/utils/constants */ "./public/application/components/context_app/utils/constants.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */







function ActionBar({
  defaultStepSize,
  docCount,
  docCountAvailable,
  isDisabled,
  isLoading,
  onChangeCount,
  type
}) {
  const showWarning = !isDisabled && !isLoading && docCountAvailable < docCount;
  const isSuccessor = type === _api_context__WEBPACK_IMPORTED_MODULE_5__["SurrDocType"].SUCCESSORS;
  const [newDocCount, setNewDocCount] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(docCount);

  const isValid = value => value >= _components_context_app_utils_constants__WEBPACK_IMPORTED_MODULE_6__["MIN_CONTEXT_SIZE"] && value <= _components_context_app_utils_constants__WEBPACK_IMPORTED_MODULE_6__["MAX_CONTEXT_SIZE"];

  const onSubmit = ev => {
    ev.preventDefault();

    if (newDocCount !== docCount && isValid(newDocCount)) {
      onChangeCount(type, newDocCount);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (newDocCount !== docCount && newDocCount === 0) {
      setNewDocCount(docCount);
    }
  }, [docCount, newDocCount]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__["I18nProvider"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: onSubmit
  }, isSuccessor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSpacer"], {
    size: "s"
  }), isSuccessor && showWarning && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_action_bar_warning__WEBPACK_IMPORTED_MODULE_4__["ActionBarWarning"], {
    docCount: docCountAvailable,
    type: type
  }), isSuccessor && showWarning && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexGroup"], {
    direction: "row",
    gutterSize: "s",
    responsive: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiButtonEmpty"], {
    "data-test-subj": `${type}LoadMoreButton`,
    iconType: isSuccessor ? 'arrowDown' : 'arrowUp',
    isDisabled: isDisabled,
    isLoading: isLoading,
    onClick: () => {
      const value = newDocCount + defaultStepSize;

      if (isValid(value)) {
        setNewDocCount(value);
        onChangeCount(type, value);
      }
    },
    flush: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "discover.context.loadButtonLabel",
    defaultMessage: "Load"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFormRow"], {
    display: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFieldNumber"], {
    "aria-label": isSuccessor ? _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.context.olderDocumentsAriaLabel', {
      defaultMessage: 'Number of older documents'
    }) : _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.context.newerDocumentsAriaLabel', {
      defaultMessage: 'Number of newer documents'
    }),
    compressed: true,
    className: "cxtSizePicker",
    "data-test-subj": `${type}CountPicker`,
    disabled: isDisabled,
    min: _components_context_app_utils_constants__WEBPACK_IMPORTED_MODULE_6__["MIN_CONTEXT_SIZE"],
    max: _components_context_app_utils_constants__WEBPACK_IMPORTED_MODULE_6__["MAX_CONTEXT_SIZE"],
    onChange: ev => {
      setNewDocCount(ev.target.valueAsNumber);
    },
    onBlur: () => {
      if (newDocCount !== docCount && isValid(newDocCount)) {
        onChangeCount(type, newDocCount);
      }
    },
    type: "number",
    value: newDocCount >= 0 ? newDocCount : ''
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFormRow"], {
    display: "center"
  }, isSuccessor ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "discover.context.olderDocumentsDescription",
    defaultMessage: "older documents"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "discover.context.newerDocumentsDescription",
    defaultMessage: "newer documents"
  })))), !isSuccessor && showWarning && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_action_bar_warning__WEBPACK_IMPORTED_MODULE_4__["ActionBarWarning"], {
    docCount: docCountAvailable,
    type: type
  }), !isSuccessor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSpacer"], {
    size: "s"
  })));
}

/***/ }),

/***/ "./public/application/angular/context/components/action_bar/action_bar_warning.tsx":
/*!*****************************************************************************************!*\
  !*** ./public/application/angular/context/components/action_bar/action_bar_warning.tsx ***!
  \*****************************************************************************************/
/*! exports provided: ActionBarWarning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionBarWarning", function() { return ActionBarWarning; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/context */ "./public/application/angular/context/api/context.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */




function ActionBarWarning({
  docCount,
  type
}) {
  if (type === _api_context__WEBPACK_IMPORTED_MODULE_3__["SurrDocType"].PREDECESSORS) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCallOut"], {
      color: "warning",
      "data-test-subj": "predecessorsWarningMsg",
      iconType: "bolt",
      title: docCount === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
        id: "discover.context.newerDocumentsWarningZero",
        defaultMessage: "No documents newer than the anchor could be found."
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
        id: "discover.context.newerDocumentsWarning",
        defaultMessage: "Only {docCount} documents newer than the anchor could be found.",
        values: {
          docCount
        }
      }),
      size: "s"
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCallOut"], {
    color: "warning",
    "data-test-subj": "successorsWarningMsg",
    iconType: "bolt",
    title: docCount === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "discover.context.olderDocumentsWarningZero",
      defaultMessage: "No documents older than the anchor could be found."
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "discover.context.olderDocumentsWarning",
      defaultMessage: "Only {docCount} documents older than the anchor could be found.",
      values: {
        docCount
      }
    }),
    size: "s"
  });
}

/***/ }),

/***/ "./public/application/angular/context_query_state.ts":
/*!***********************************************************!*\
  !*** ./public/application/angular/context_query_state.ts ***!
  \***********************************************************/
/*! exports provided: LoadingStatus, FailureReason, getInitialContextQueryState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingStatus", function() { return LoadingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailureReason", function() { return FailureReason; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialContextQueryState", function() { return getInitialContextQueryState; });
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
let LoadingStatus;

(function (LoadingStatus) {
  LoadingStatus["FAILED"] = "failed";
  LoadingStatus["LOADED"] = "loaded";
  LoadingStatus["LOADING"] = "loading";
  LoadingStatus["UNINITIALIZED"] = "uninitialized";
})(LoadingStatus || (LoadingStatus = {}));

let FailureReason;

(function (FailureReason) {
  FailureReason["UNKNOWN"] = "unknown";
  FailureReason["INVALID_TIEBREAKER"] = "invalid_tiebreaker";
})(FailureReason || (FailureReason = {}));

const getInitialContextQueryState = () => ({
  anchor: {},
  predecessors: [],
  successors: [],
  anchorStatus: {
    value: LoadingStatus.UNINITIALIZED
  },
  predecessorsStatus: {
    value: LoadingStatus.UNINITIALIZED
  },
  successorsStatus: {
    value: LoadingStatus.UNINITIALIZED
  }
});

/***/ }),

/***/ "./public/application/angular/context_state.ts":
/*!*****************************************************!*\
  !*** ./public/application/angular/context_state.ts ***!
  \*****************************************************/
/*! exports provided: getState, isEqualFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqualFilters", function() { return isEqualFilters; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/plugins/kibana_utils/public */ "plugin/kibanaUtils/public");
/* harmony import */ var _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/plugins/data/public */ "plugin/data/public");
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_data_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./public/application/angular/helpers/index.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */




const GLOBAL_STATE_URL_KEY = '_g';
const APP_STATE_URL_KEY = '_a';
/**
 * Builds and returns appState and globalState containers
 * provides helper functions to start/stop syncing with URL
 */

function getState({
  defaultSize,
  timeFieldName,
  storeInSessionStorage = false,
  history,
  toasts,
  uiSettings
}) {
  const stateStorage = Object(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_1__["createKbnUrlStateStorage"])({
    useHash: storeInSessionStorage,
    history,
    ...(toasts && Object(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_1__["withNotifyOnErrors"])(toasts))
  });
  const globalStateInitial = stateStorage.get(GLOBAL_STATE_URL_KEY);
  const globalStateContainer = Object(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_1__["createStateContainer"])(globalStateInitial);
  const appStateFromUrl = stateStorage.get(APP_STATE_URL_KEY);
  const appStateInitial = createInitialAppState(defaultSize, timeFieldName, appStateFromUrl, uiSettings);
  const appStateContainer = Object(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_1__["createStateContainer"])(appStateInitial);
  const {
    start,
    stop
  } = Object(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_1__["syncStates"])([{
    storageKey: GLOBAL_STATE_URL_KEY,
    stateContainer: { ...globalStateContainer,
      ...{
        set: value => {
          if (value) {
            globalStateContainer.set(value);
          }
        }
      }
    },
    stateStorage
  }, {
    storageKey: APP_STATE_URL_KEY,
    stateContainer: { ...appStateContainer,
      ...{
        set: value => {
          if (value) {
            appStateContainer.set(value);
          }
        }
      }
    },
    stateStorage
  }]);
  return {
    globalState: globalStateContainer,
    appState: appStateContainer,
    startSync: start,
    stopSync: stop,
    setAppState: newState => {
      const oldState = appStateContainer.getState();
      const mergedState = { ...oldState,
        ...newState
      };

      if (!isEqualState(oldState, mergedState)) {
        stateStorage.set(APP_STATE_URL_KEY, mergedState, {
          replace: true
        });
      }
    },
    getFilters: () => [...getFilters(globalStateContainer.getState()), ...getFilters(appStateContainer.getState())],
    setFilters: filterManager => {
      // global state filters
      const globalFilters = filterManager.getGlobalFilters();
      const globalFilterChanged = !isEqualFilters(globalFilters, getFilters(globalStateContainer.getState()));

      if (globalFilterChanged) {
        globalStateContainer.set({
          filters: globalFilters
        });
      } // app state filters


      const appFilters = filterManager.getAppFilters();
      const appFilterChanged = !isEqualFilters(appFilters, getFilters(appStateContainer.getState()));

      if (appFilterChanged) {
        appStateContainer.set({ ...appStateContainer.getState(),
          ...{
            filters: appFilters
          }
        });
      }
    },
    // helper function just needed for testing
    flushToUrl: replace => stateStorage.kbnUrlControls.flush(replace)
  };
}
/**
 * Helper function to compare 2 different filter states
 */

function isEqualFilters(filtersA, filtersB) {
  if (!filtersA && !filtersB) {
    return true;
  } else if (!filtersA || !filtersB) {
    return false;
  }

  return _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_2__["esFilters"].compareFilters(filtersA, filtersB, _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_2__["esFilters"].COMPARE_ALL_OPTIONS);
}
/**
 * Helper function to compare 2 different states, is needed since comparing filters
 * works differently, doesn't work with _.isEqual
 */

function isEqualState(stateA, stateB) {
  if (!stateA && !stateB) {
    return true;
  } else if (!stateA || !stateB) {
    return false;
  }

  const {
    filters: stateAFilters = [],
    ...stateAPartial
  } = stateA;
  const {
    filters: stateBFilters = [],
    ...stateBPartial
  } = stateB;
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(stateAPartial, stateBPartial) && _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_2__["esFilters"].compareFilters(stateAFilters, stateBFilters, _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_2__["esFilters"].COMPARE_ALL_OPTIONS);
}
/**
 * Helper function to return array of filter object of a given state
 */


function getFilters(state) {
  if (!state || !Array.isArray(state.filters)) {
    return [];
  }

  return state.filters;
}
/**
 * Helper function to return the initial app state, which is a merged object of url state and
 * default state. The default size is the default number of successor/predecessor records to fetch
 */


function createInitialAppState(defaultSize, timeFieldName, urlState, uiSettings) {
  const defaultState = {
    columns: ['_source'],
    filters: [],
    predecessorCount: defaultSize,
    successorCount: defaultSize,
    sort: [[timeFieldName, _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].desc]]
  };

  if (typeof urlState !== 'object') {
    return defaultState;
  }

  return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["handleSourceColumnState"])({ ...defaultState,
    ...urlState
  }, uiSettings);
}

/***/ }),

/***/ "./public/application/angular/create_discover_directive.ts":
/*!*****************************************************************!*\
  !*** ./public/application/angular/create_discover_directive.ts ***!
  \*****************************************************************/
/*! exports provided: createDiscoverDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDiscoverDirective", function() { return createDiscoverDirective; });
/* harmony import */ var _apps_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apps/main */ "./public/application/apps/main/index.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
 // eslint-disable-next-line @typescript-eslint/no-explicit-any

function createDiscoverDirective(reactDirective) {
  return reactDirective(_apps_main__WEBPACK_IMPORTED_MODULE_0__["DiscoverMainApp"], [['indexPattern', {
    watchDepth: 'reference'
  }], ['opts', {
    watchDepth: 'reference'
  }]]);
}

/***/ }),

/***/ "./public/application/angular/directives/render_complete.ts":
/*!******************************************************************!*\
  !*** ./public/application/angular/directives/render_complete.ts ***!
  \******************************************************************/
/*! exports provided: createRenderCompleteDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRenderCompleteDirective", function() { return createRenderCompleteDirective; });
/* harmony import */ var _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../src/plugins/kibana_utils/public */ "plugin/kibanaUtils/public");
/* harmony import */ var _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

function createRenderCompleteDirective() {
  return {
    controller($scope, $element) {
      const el = $element[0];
      const renderCompleteListener = new _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_0__["RenderCompleteListener"](el);
      $scope.$on('$destroy', renderCompleteListener.destroy);
    }

  };
}

/***/ }),

/***/ "./public/application/angular/doc_table/components/pager/index.ts":
/*!************************************************************************!*\
  !*** ./public/application/angular/doc_table/components/pager/index.ts ***!
  \************************************************************************/
/*! exports provided: createToolBarPagerTextDirective, createToolBarPagerButtonsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createToolBarPagerTextDirective", function() { return createToolBarPagerTextDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createToolBarPagerButtonsDirective", function() { return createToolBarPagerButtonsDirective; });
/* harmony import */ var _tool_bar_pager_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool_bar_pager_text */ "./public/application/angular/doc_table/components/pager/tool_bar_pager_text.tsx");
/* harmony import */ var _tool_bar_pager_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tool_bar_pager_buttons */ "./public/application/angular/doc_table/components/pager/tool_bar_pager_buttons.tsx");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

 // eslint-disable-next-line @typescript-eslint/no-explicit-any

function createToolBarPagerTextDirective(reactDirective) {
  return reactDirective(_tool_bar_pager_text__WEBPACK_IMPORTED_MODULE_0__["ToolBarPagerText"]);
} // eslint-disable-next-line @typescript-eslint/no-explicit-any

function createToolBarPagerButtonsDirective(reactDirective) {
  return reactDirective(_tool_bar_pager_buttons__WEBPACK_IMPORTED_MODULE_1__["ToolBarPagerButtons"]);
}

/***/ }),

/***/ "./public/application/angular/doc_table/components/pager/tool_bar_pager_buttons.tsx":
/*!******************************************************************************************!*\
  !*** ./public/application/angular/doc_table/components/pager/tool_bar_pager_buttons.tsx ***!
  \******************************************************************************************/
/*! exports provided: ToolBarPagerButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarPagerButtons", function() { return ToolBarPagerButtons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


function ToolBarPagerButtons(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "kuiButtonGroup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "kuiButton kuiButton--basic kuiButton--icon",
    onClick: () => props.onPagePrevious(),
    disabled: !props.hasPreviousPage,
    "data-test-subj": "btnPrevPage",
    "aria-label": _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.docTable.pager.toolbarPagerButtons.previousButtonAriaLabel', {
      defaultMessage: 'Previous page in table'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "kuiButton__icon kuiIcon fa-chevron-left"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "kuiButton kuiButton--basic kuiButton--icon",
    onClick: () => props.onPageNext(),
    disabled: !props.hasNextPage,
    "data-test-subj": "btnNextPage",
    "aria-label": _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.docTable.pager.toolbarPagerButtons.nextButtonAriaLabel', {
      defaultMessage: 'Next page in table'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "kuiButton__icon kuiIcon fa-chevron-right"
  })));
}

/***/ }),

/***/ "./public/application/angular/doc_table/components/pager/tool_bar_pager_text.tsx":
/*!***************************************************************************************!*\
  !*** ./public/application/angular/doc_table/components/pager/tool_bar_pager_text.tsx ***!
  \***************************************************************************************/
/*! exports provided: ToolBarPagerText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarPagerText", function() { return ToolBarPagerText; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


function ToolBarPagerText({
  startItem,
  endItem,
  totalItems
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["I18nProvider"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "kuiToolBarText",
    "data-test-subj": "toolBarPagerText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "discover.docTable.pagerControl.pagesCountLabel",
    defaultMessage: "{startItem}\u2013{endItem} of {totalItems}",
    values: {
      startItem,
      endItem,
      totalItems
    }
  })));
}

/***/ }),

/***/ "./public/application/angular/doc_table/components/table_header.ts":
/*!*************************************************************************!*\
  !*** ./public/application/angular/doc_table/components/table_header.ts ***!
  \*************************************************************************/
/*! exports provided: createTableHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTableHeaderDirective", function() { return createTableHeaderDirective; });
/* harmony import */ var _table_header_table_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table_header/table_header */ "./public/application/angular/doc_table/components/table_header/table_header.tsx");
/* harmony import */ var _kibana_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../kibana_services */ "./public/kibana_services.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common */ "./common/index.ts");
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../src/plugins/data/public */ "plugin/data/public");
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */



 // eslint-disable-next-line @typescript-eslint/no-explicit-any

function createTableHeaderDirective(reactDirective) {
  const {
    uiSettings: config
  } = Object(_kibana_services__WEBPACK_IMPORTED_MODULE_1__["getServices"])();
  return reactDirective(_table_header_table_header__WEBPACK_IMPORTED_MODULE_0__["TableHeader"], [['columns', {
    watchDepth: 'collection'
  }], ['hideTimeColumn', {
    watchDepth: 'value'
  }], ['indexPattern', {
    watchDepth: 'reference'
  }], ['isShortDots', {
    watchDepth: 'value'
  }], ['onChangeSortOrder', {
    watchDepth: 'reference'
  }], ['onMoveColumn', {
    watchDepth: 'reference'
  }], ['onRemoveColumn', {
    watchDepth: 'reference'
  }], ['sortOrder', {
    watchDepth: 'collection'
  }]], {
    restrict: 'A'
  }, {
    hideTimeColumn: config.get(_common__WEBPACK_IMPORTED_MODULE_2__["DOC_HIDE_TIME_COLUMN_SETTING"], false),
    isShortDots: config.get(_src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3__["UI_SETTINGS"].SHORT_DOTS_ENABLE),
    defaultSortOrder: config.get(_common__WEBPACK_IMPORTED_MODULE_2__["SORT_DEFAULT_ORDER_SETTING"], 'desc')
  });
}

/***/ }),

/***/ "./public/application/angular/doc_table/components/table_header/helpers.tsx":
/*!**********************************************************************************!*\
  !*** ./public/application/angular/doc_table/components/table_header/helpers.tsx ***!
  \**********************************************************************************/
/*! exports provided: getTimeColumn, getDisplayedColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeColumn", function() { return getTimeColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisplayedColumns", function() { return getDisplayedColumns; });
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
 * Returns properties necessary to display the time column
 * If it's an IndexPattern with timefield, the time column is
 * prepended, not moveable and removeable
 * @param timeFieldName
 */
function getTimeColumn(timeFieldName) {
  return {
    name: timeFieldName,
    displayName: 'Time',
    isSortable: true,
    isRemoveable: false,
    colLeftIdx: -1,
    colRightIdx: -1
  };
}
/**
 * A given array of column names returns an array of properties
 * necessary to display the columns. If the given indexPattern
 * has a timefield, a time column is prepended
 * @param columns
 * @param indexPattern
 * @param hideTimeField
 * @param isShortDots
 */

function getDisplayedColumns(columns, indexPattern, hideTimeField, isShortDots) {
  if (!Array.isArray(columns) || typeof indexPattern !== 'object' || !indexPattern.getFieldByName) {
    return [];
  }

  const columnProps = columns.length === 0 ? [{
    name: '__document__',
    displayName: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.docTable.tableHeader.documentHeader', {
      defaultMessage: 'Document'
    }),
    isSortable: false,
    isRemoveable: false,
    colLeftIdx: -1,
    colRightIdx: -1
  }] : columns.map((column, idx) => {
    var _field$displayName;

    const field = indexPattern.getFieldByName(column);
    return {
      name: column,
      displayName: (_field$displayName = field === null || field === void 0 ? void 0 : field.displayName) !== null && _field$displayName !== void 0 ? _field$displayName : column,
      isSortable: !!(field && field.sortable),
      isRemoveable: column !== '_source' || columns.length > 1,
      colLeftIdx: idx - 1 < 0 ? -1 : idx - 1,
      colRightIdx: idx + 1 >= columns.length ? -1 : idx + 1
    };
  });
  return !hideTimeField && indexPattern.timeFieldName ? [getTimeColumn(indexPattern.timeFieldName), ...columnProps] : columnProps;
}

/***/ }),

/***/ "./public/application/angular/doc_table/components/table_header/table_header.tsx":
/*!***************************************************************************************!*\
  !*** ./public/application/angular/doc_table/components/table_header/table_header.tsx ***!
  \***************************************************************************************/
/*! exports provided: TableHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableHeader", function() { return TableHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _table_header_column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table_header_column */ "./public/application/angular/doc_table/components/table_header/table_header_column.tsx");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./public/application/angular/doc_table/components/table_header/helpers.tsx");
/* harmony import */ var _lib_get_default_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/get_default_sort */ "./public/application/angular/doc_table/lib/get_default_sort.ts");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */




function TableHeader({
  columns,
  defaultSortOrder,
  hideTimeColumn,
  indexPattern,
  isShortDots,
  onChangeSortOrder,
  onMoveColumn,
  onRemoveColumn,
  sortOrder
}) {
  const displayedColumns = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["getDisplayedColumns"])(columns, indexPattern, hideTimeColumn, isShortDots);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    "data-test-subj": "docTableHeader",
    className: "kbnDocTableHeader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    style: {
      width: '24px'
    }
  }), displayedColumns.map(col => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_table_header_column__WEBPACK_IMPORTED_MODULE_1__["TableHeaderColumn"], _extends({
      key: col.name
    }, col, {
      sortOrder: sortOrder.length ? sortOrder : Object(_lib_get_default_sort__WEBPACK_IMPORTED_MODULE_3__["getDefaultSort"])(indexPattern, defaultSortOrder),
      onMoveColumn: onMoveColumn,
      onRemoveColumn: onRemoveColumn,
      onChangeSortOrder: onChangeSortOrder
    }));
  }));
}

/***/ }),

/***/ "./public/application/angular/doc_table/components/table_header/table_header_column.tsx":
/*!**********************************************************************************************!*\
  !*** ./public/application/angular/doc_table/components/table_header/table_header_column.tsx ***!
  \**********************************************************************************************/
/*! exports provided: TableHeaderColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableHeaderColumn", function() { return TableHeaderColumn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */



const sortDirectionToIcon = {
  desc: 'fa fa-sort-down',
  asc: 'fa fa-sort-up',
  '': 'fa fa-sort'
};
function TableHeaderColumn({
  colLeftIdx,
  colRightIdx,
  displayName,
  isRemoveable,
  isSortable,
  name,
  onChangeSortOrder,
  onMoveColumn,
  onRemoveColumn,
  sortOrder
}) {
  const [, sortDirection = ''] = sortOrder.find(sortPair => name === sortPair[0]) || [];
  const currentSortWithoutColumn = sortOrder.filter(pair => pair[0] !== name);
  const currentColumnSort = sortOrder.find(pair => pair[0] === name);
  const currentColumnSortDirection = currentColumnSort && currentColumnSort[1] || '';
  const btnSortIcon = sortDirectionToIcon[sortDirection];
  const btnSortClassName = sortDirection !== '' ? btnSortIcon : `kbnDocTableHeader__sortChange ${btnSortIcon}`;

  const handleChangeSortOrder = () => {
    if (!onChangeSortOrder) return; // Cycle goes Unsorted -> Asc -> Desc -> Unsorted

    if (currentColumnSort === undefined) {
      onChangeSortOrder([...currentSortWithoutColumn, [name, 'asc']]);
    } else if (currentColumnSortDirection === 'asc') {
      onChangeSortOrder([...currentSortWithoutColumn, [name, 'desc']]);
    } else if (currentColumnSortDirection === 'desc' && currentSortWithoutColumn.length === 0) {
      // If we're at the end of the cycle and this is the only existing sort, we switch
      // back to ascending sort instead of removing it.
      onChangeSortOrder([[name, 'asc']]);
    } else {
      onChangeSortOrder(currentSortWithoutColumn);
    }
  };

  const getSortButtonAriaLabel = () => {
    const sortAscendingMessage = _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.docTable.tableHeader.sortByColumnAscendingAriaLabel', {
      defaultMessage: 'Sort {columnName} ascending',
      values: {
        columnName: name
      }
    });
    const sortDescendingMessage = _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.docTable.tableHeader.sortByColumnDescendingAriaLabel', {
      defaultMessage: 'Sort {columnName} descending',
      values: {
        columnName: name
      }
    });
    const stopSortingMessage = _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.docTable.tableHeader.sortByColumnUnsortedAriaLabel', {
      defaultMessage: 'Stop sorting on {columnName}',
      values: {
        columnName: name
      }
    });

    if (currentColumnSort === undefined) {
      return sortAscendingMessage;
    } else if (sortDirection === 'asc') {
      return sortDescendingMessage;
    } else if (sortDirection === 'desc' && currentSortWithoutColumn.length === 0) {
      return sortAscendingMessage;
    } else {
      return stopSortingMessage;
    }
  }; // action buttons displayed on the right side of the column name


  const buttons = [// Sort Button
  {
    active: isSortable && typeof onChangeSortOrder === 'function',
    ariaLabel: getSortButtonAriaLabel(),
    className: btnSortClassName,
    onClick: handleChangeSortOrder,
    testSubject: `docTableHeaderFieldSort_${name}`,
    tooltip: getSortButtonAriaLabel()
  }, // Remove Button
  {
    active: isRemoveable && typeof onRemoveColumn === 'function',
    ariaLabel: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.docTable.tableHeader.removeColumnButtonAriaLabel', {
      defaultMessage: 'Remove {columnName} column',
      values: {
        columnName: name
      }
    }),
    className: 'fa fa-remove kbnDocTableHeader__move',
    onClick: () => onRemoveColumn && onRemoveColumn(name),
    testSubject: `docTableRemoveHeader-${name}`,
    tooltip: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.docTable.tableHeader.removeColumnButtonTooltip', {
      defaultMessage: 'Remove Column'
    })
  }, // Move Left Button
  {
    active: colLeftIdx >= 0 && typeof onMoveColumn === 'function',
    ariaLabel: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.docTable.tableHeader.moveColumnLeftButtonAriaLabel', {
      defaultMessage: 'Move {columnName} column to the left',
      values: {
        columnName: name
      }
    }),
    className: 'fa fa-angle-double-left kbnDocTableHeader__move',
    onClick: () => onMoveColumn && onMoveColumn(name, colLeftIdx),
    testSubject: `docTableMoveLeftHeader-${name}`,
    tooltip: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.docTable.tableHeader.moveColumnLeftButtonTooltip', {
      defaultMessage: 'Move column to the left'
    })
  }, // Move Right Button
  {
    active: colRightIdx >= 0 && typeof onMoveColumn === 'function',
    ariaLabel: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.docTable.tableHeader.moveColumnRightButtonAriaLabel', {
      defaultMessage: 'Move {columnName} column to the right',
      values: {
        columnName: name
      }
    }),
    className: 'fa fa-angle-double-right kbnDocTableHeader__move',
    onClick: () => onMoveColumn && onMoveColumn(name, colRightIdx),
    testSubject: `docTableMoveRightHeader-${name}`,
    tooltip: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.docTable.tableHeader.moveColumnRightButtonTooltip', {
      defaultMessage: 'Move column to the right'
    })
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    "data-test-subj": "docTableHeaderField"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "data-test-subj": `docTableHeader-${name}`
  }, displayName, buttons.filter(button => button.active).map((button, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiToolTip"], {
    id: `docTableHeader-${name}-tt`,
    content: button.tooltip,
    key: `button-${idx}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    "aria-label": button.ariaLabel,
    className: button.className,
    "data-test-subj": button.testSubject,
    onClick: button.onClick
  })))));
}

/***/ }),

/***/ "./public/application/angular/doc_table/components/table_row.ts":
/*!**********************************************************************!*\
  !*** ./public/application/angular/doc_table/components/table_row.ts ***!
  \**********************************************************************/
/*! exports provided: createTableRowDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTableRowDirective", function() { return createTableRowDirective; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _table_row_open_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table_row/open.html */ "./public/application/angular/doc_table/components/table_row/open.html");
/* harmony import */ var _table_row_details_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table_row/details.html */ "./public/application/angular/doc_table/components/table_row/details.html");
/* harmony import */ var _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../src/plugins/kibana_utils/public */ "plugin/kibanaUtils/public");
/* harmony import */ var _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../common */ "./common/index.ts");
/* harmony import */ var _kibana_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../kibana_services */ "./public/kibana_services.ts");
/* harmony import */ var _helpers_get_context_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/get_context_url */ "./public/application/helpers/get_context_url.tsx");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers */ "./public/application/angular/helpers/index.ts");
/* harmony import */ var _table_row_truncate_by_height__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./table_row/truncate_by_height */ "./public/application/angular/doc_table/components/table_row/truncate_by_height.ts");
/* harmony import */ var _table_row_cell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./table_row/cell */ "./public/application/angular/doc_table/components/table_row/cell.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */










 // guesstimate at the minimum number of chars wide cells in the table should be

const MIN_LINE_LENGTH = 20;
function createTableRowDirective($compile) {
  return {
    restrict: 'A',
    scope: {
      columns: '=',
      filter: '=',
      indexPattern: '=',
      row: '=kbnTableRow',
      onAddColumn: '=?',
      onRemoveColumn: '=?',
      useNewFieldsApi: '<'
    },
    link: ($scope, $el) => {
      $el.after('<tr data-test-subj="docTableDetailsRow" class="kbnDocTableDetails__row">');
      $el.empty(); // when we compile the details, we use this $scope

      let $detailsScope; // when we compile the toggle button in the summary, we use this $scope

      let $toggleScope; // toggle display of the rows details, a full list of the fields from each row

      $scope.toggleRow = () => {
        const $detailsTr = $el.next();
        $scope.open = !$scope.open; ///
        // add/remove $details children
        ///

        $detailsTr.toggle($scope.open);

        if (!$scope.open) {
          // close the child scope if it exists
          $detailsScope.$destroy(); // no need to go any further

          return;
        } else {
          $detailsScope = $scope.$new();
        } // empty the details and rebuild it


        $detailsTr.html(_table_row_details_html__WEBPACK_IMPORTED_MODULE_3__["default"]);
        $detailsScope.row = $scope.row;
        $detailsScope.hit = $scope.row;
        $detailsScope.uriEncodedId = encodeURIComponent($detailsScope.hit._id);
        $compile($detailsTr)($detailsScope);
      };

      $scope.$watchMulti(['indexPattern.timeFieldName', 'row.highlight', '[]columns'], () => {
        createSummaryRow($scope.row);
      }); // eslint-disable-next-line @typescript-eslint/no-explicit-any

      $scope.inlineFilter = function inlineFilter($event, type) {
        const column = jquery__WEBPACK_IMPORTED_MODULE_1___default()($event.currentTarget).data().column;
        const field = $scope.indexPattern.fields.getByName(column);
        $scope.filter(field, $scope.flattenedRow[column], type);
      };

      $scope.getContextAppHref = () => {
        return Object(_helpers_get_context_url__WEBPACK_IMPORTED_MODULE_7__["getContextUrl"])($scope.row._id, $scope.indexPattern.id, $scope.columns, Object(_kibana_services__WEBPACK_IMPORTED_MODULE_6__["getServices"])().filterManager, Object(_kibana_services__WEBPACK_IMPORTED_MODULE_6__["getServices"])().addBasePath);
      };

      $scope.getSingleDocHref = () => {
        return Object(_kibana_services__WEBPACK_IMPORTED_MODULE_6__["getServices"])().addBasePath(`/app/discover#/doc/${$scope.indexPattern.id}/${$scope.row._index}?id=${encodeURIComponent($scope.row._id)}`);
      }; // create a tr element that lists the value for each *column*
      // eslint-disable-next-line @typescript-eslint/no-explicit-any


      function createSummaryRow(row) {
        const indexPattern = $scope.indexPattern;
        $scope.flattenedRow = indexPattern.flattenHit(row); // We just create a string here because its faster.

        const newHtmls = [_table_row_open_html__WEBPACK_IMPORTED_MODULE_2__["default"]];
        const mapping = indexPattern.fields.getByName;
        const hideTimeColumn = Object(_kibana_services__WEBPACK_IMPORTED_MODULE_6__["getServices"])().uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_5__["DOC_HIDE_TIME_COLUMN_SETTING"], false);

        if (indexPattern.timeFieldName && !hideTimeColumn) {
          newHtmls.push(Object(_table_row_cell__WEBPACK_IMPORTED_MODULE_10__["cell"])({
            timefield: true,
            formatted: _displayField(row, indexPattern.timeFieldName),
            filterable: mapping(indexPattern.timeFieldName).filterable && $scope.filter,
            column: indexPattern.timeFieldName
          }));
        }

        if ($scope.columns.length === 0 && $scope.useNewFieldsApi) {
          const formatted = Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["formatRow"])(row, indexPattern);
          newHtmls.push(Object(_table_row_cell__WEBPACK_IMPORTED_MODULE_10__["cell"])({
            timefield: false,
            sourcefield: true,
            formatted,
            filterable: false,
            column: '__document__'
          }));
        } else {
          $scope.columns.forEach(function (column) {
            const isFilterable = mapping(column) && mapping(column).filterable && $scope.filter;

            if ($scope.useNewFieldsApi && !mapping(column) && !row.fields[column]) {
              const innerColumns = Object.fromEntries(Object.entries(row.fields).filter(([key]) => {
                return key.indexOf(`${column}.`) === 0;
              }));
              newHtmls.push(Object(_table_row_cell__WEBPACK_IMPORTED_MODULE_10__["cell"])({
                timefield: false,
                sourcefield: true,
                formatted: Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["formatTopLevelObject"])(row, innerColumns, indexPattern),
                filterable: false,
                column
              }));
            } else {
              newHtmls.push(Object(_table_row_cell__WEBPACK_IMPORTED_MODULE_10__["cell"])({
                timefield: false,
                sourcefield: column === '_source',
                formatted: _displayField(row, column, true),
                filterable: isFilterable,
                column
              }));
            }
          });
        }

        let $cells = $el.children();
        newHtmls.forEach(function (html, i) {
          const $cell = $cells.eq(i);
          if ($cell.data('discover:html') === html) return;
          const reuse = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["find"])($cells.slice(i + 1), c => {
            return jquery__WEBPACK_IMPORTED_MODULE_1___default.a.data(c, 'discover:html') === html;
          });
          const $target = reuse ? jquery__WEBPACK_IMPORTED_MODULE_1___default()(reuse).detach() : jquery__WEBPACK_IMPORTED_MODULE_1___default()(html);
          $target.data('discover:html', html);
          const $before = $cells.eq(i - 1);

          if ($before.length) {
            $before.after($target);
          } else {
            $el.append($target);
          } // rebuild cells since we modified the children


          $cells = $el.children();

          if (!reuse) {
            $toggleScope = $scope.$new();
            $compile($target)($toggleScope);
          }
        });

        if ($scope.open) {
          $detailsScope.row = row;
        } // trim off cells that were not used rest of the cells


        $cells.filter(':gt(' + (newHtmls.length - 1) + ')').remove();
        Object(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_4__["dispatchRenderComplete"])($el[0]);
      }
      /**
       * Fill an element with the value of a field
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any


      function _displayField(row, fieldName, truncate = false) {
        const indexPattern = $scope.indexPattern;
        const text = indexPattern.formatField(row, fieldName);

        if (truncate && text.length > MIN_LINE_LENGTH) {
          return Object(_table_row_truncate_by_height__WEBPACK_IMPORTED_MODULE_9__["truncateByHeight"])({
            body: text
          });
        }

        return text;
      }
    }
  };
}

/***/ }),

/***/ "./public/application/angular/doc_table/components/table_row/cell.ts":
/*!***************************************************************************!*\
  !*** ./public/application/angular/doc_table/components/table_row/cell.ts ***!
  \***************************************************************************/
/*! exports provided: cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cell", function() { return cell; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cell_with_buttons_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cell_with_buttons.html */ "./public/application/angular/doc_table/components/table_row/cell_with_buttons.html");
/* harmony import */ var _cell_without_buttons_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cell_without_buttons.html */ "./public/application/angular/doc_table/components/table_row/cell_without_buttons.html");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */



const TAGS_WITH_WS = />\s+</g;
/**
 * Remove all of the whitespace between html tags
 * so that inline elements don't have extra spaces.
 */

function noWhiteSpace(html) {
  return html.replace(TAGS_WITH_WS, '><');
}

const cellWithFiltersTemplate = noWhiteSpace(_cell_with_buttons_html__WEBPACK_IMPORTED_MODULE_1__["default"]);
const cellWithoutFiltersTemplate = noWhiteSpace(_cell_without_buttons_html__WEBPACK_IMPORTED_MODULE_2__["default"]);
const cell = props => {
  let classes = '';
  let extraAttrs = '';

  if (props.timefield) {
    classes = 'eui-textNoWrap';
    extraAttrs = 'width="1%"';
  } else if (props.sourcefield) {
    classes = 'eui-textBreakAll eui-textBreakWord';
  } else {
    classes = 'kbnDocTableCell__dataField eui-textBreakAll eui-textBreakWord';
  }

  if (props.filterable) {
    const escapedColumnContents = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["escape"])(props.column);
    return cellWithFiltersTemplate.replace('__classes__', classes).replace('__extraAttrs__', extraAttrs).replace('__column__', escapedColumnContents).replace('__column__', escapedColumnContents).replace('<formatted />', props.formatted);
  }

  return cellWithoutFiltersTemplate.replace('__classes__', classes).replace('__extraAttrs__', extraAttrs).replace('<formatted />', props.formatted);
};

/***/ }),

/***/ "./public/application/angular/doc_table/components/table_row/cell_with_buttons.html":
/*!******************************************************************************************!*\
  !*** ./public/application/angular/doc_table/components/table_row/cell_with_buttons.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<td class=\"__classes__\" __extraAttrs__ data-test-subj=\"docTableField\">\n  <formatted />\n  <span class=\"kbnDocTableCell__filter\">\n      <button\n        ng-click=\"inlineFilter($event, '+')\"\n        class=\"kbnDocTableRowFilterButton\"\n        data-column=\"__column__\"\n        tooltip-append-to-body=\"1\"\n        data-test-subj=\"docTableCellFilter\"\n        tooltip=\"{{ ::'discover.docTable.tableRow.filterForValueButtonTooltip' | i18n: {defaultMessage: 'Filter for value'} }}\"\n        tooltip-placement=\"bottom\"\n        aria-label=\"{{ ::'discover.docTable.tableRow.filterForValueButtonAriaLabel' | i18n: {defaultMessage: 'Filter for value'} }}\"\n      ><icon type=\"'plusInCircle'\" size=\"'s'\" color=\"'primary'\"></icon></button>\n      <button\n        ng-click=\"inlineFilter($event, '-')\"\n        class=\"kbnDocTableRowFilterButton\"\n        data-column=\"__column__\"\n        data-test-subj=\"docTableCellFilterNegate\"\n        tooltip=\"{{ ::'discover.docTable.tableRow.filterOutValueButtonTooltip' | i18n: {defaultMessage: 'Filter out value'} }}\"\n        aria-label=\"{{ ::'discover.docTable.tableRow.filterOutValueButtonAriaLabel' | i18n: {defaultMessage: 'Filter out value'} }}\"\n        tooltip-append-to-body=\"1\"\n        tooltip-placement=\"bottom\"\n      ><icon type=\"'minusInCircle'\" size=\"'s'\" color=\"'primary'\"></icon></button>\n  </span>\n</td>\n");

/***/ }),

/***/ "./public/application/angular/doc_table/components/table_row/cell_without_buttons.html":
/*!*********************************************************************************************!*\
  !*** ./public/application/angular/doc_table/components/table_row/cell_without_buttons.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<td class=\"__classes__\" __extraAttrs__ data-test-subj=\"docTableField\">\n  <formatted />\n  <span class=\"kbnDocTableCell__filter\"></span>\n</td>\n");

/***/ }),

/***/ "./public/application/angular/doc_table/components/table_row/details.html":
/*!********************************************************************************!*\
  !*** ./public/application/angular/doc_table/components/table_row/details.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<td colspan=\"{{ (columns.length || 1) + 2 }}\">\n  <div class=\"euiFlexGroup euiFlexGroup--gutterLarge euiFlexGroup--directionRow euiFlexGroup--justifyContentSpaceBetween\">\n    <div class=\"euiFlexItem euiFlexItem--flexGrowZero euiText euiText--small\">\n      <div class=\"euiFlexGroup euiFlexGroup--gutterSmall euiFlexGroup--directionRow\">\n        <div class=\"euiFlexItem euiFlexItem--flexGrowZero\">\n          <icon type=\"'folderOpen'\" size=\"'m'\"></icon>\n        </div>\n        <div class=\"euiFlexItem euiFlexItem--flexGrowZero\">\n          <h4\n            data-test-subj=\"docTableRowDetailsTitle\"\n            class=\"euiTitle euiTitle--xsmall\"\n            i18n-id=\"discover.docTable.tableRow.detailHeading\"\n            i18n-default-message=\"Expanded document\"\n          ></h4>\n        </div>\n      </div>\n    </div>\n    <div class=\"euiFlexItem euiFlexItem--flexGrowZero euiText euiText--small\">\n      <div class=\"euiFlexGroup euiFlexGroup--gutterLarge euiFlexGroup--directionRow\">\n        <div class=\"euiFlexItem euiFlexItem--flexGrowZero euiText euiText--small\">\n          <a\n            class=\"euiLink\"\n            data-test-subj=\"docTableRowAction\"\n            ng-href=\"{{ getContextAppHref() }}\"\n            ng-if=\"indexPattern.isTimeBased()\"\n            i18n-id=\"discover.docTable.tableRow.viewSurroundingDocumentsLinkText\"\n            i18n-default-message=\"View surrounding documents\"\n          ></a>\n        </div>\n        <div class=\"euiFlexItem euiFlexItem--flexGrowZero euiText euiText--small\">\n          <a\n            class=\"euiLink\"\n            data-test-subj=\"docTableRowAction\"\n            ng-href=\"{{ getSingleDocHref() }}\"\n            i18n-id=\"discover.docTable.tableRow.viewSingleDocumentLinkText\"\n            i18n-default-message=\"View single document\"\n          ></a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div data-test-subj=\"docViewer\">\n    <doc-viewer\n      columns=\"columns\"\n      filter=\"filter\"\n      hit=\"hit\"\n      index-pattern=\"indexPattern\"\n      on-add-column=\"onAddColumn\"\n      on-remove-column=\"onRemoveColumn\"\n    ></doc-viewer>\n  </div>\n\n</td>\n");

/***/ }),

/***/ "./public/application/angular/doc_table/components/table_row/open.html":
/*!*****************************************************************************!*\
  !*** ./public/application/angular/doc_table/components/table_row/open.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<td ng-click=\"toggleRow()\" data-test-subj=\"docTableExpandToggleColumn\" class=\"kbnDocTableCell__toggleDetails\">\n  <button\n    class=\"euiButtonIcon euiButtonIcon--text euiButtonIcon--empty euiButtonIcon--xSmall\"\n    aria-expanded=\"{{!!open}}\"\n    aria-label=\"{{ ::'discover.docTable.tableRow.toggleRowDetailsButtonAriaLabel' | i18n: {defaultMessage: 'Toggle row details'} }}\"\n  >\n    <icon ng-if=\"open\" type=\"'arrowDown'\" size=\"'s'\"></icon>\n    <icon ng-if=\"!open\" type=\"'arrowRight'\" size=\"'s'\"></icon>\n  </button>\n</td>\n");

/***/ }),

/***/ "./public/application/angular/doc_table/components/table_row/truncate_by_height.ts":
/*!*****************************************************************************************!*\
  !*** ./public/application/angular/doc_table/components/table_row/truncate_by_height.ts ***!
  \*****************************************************************************************/
/*! exports provided: truncateByHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncateByHeight", function() { return truncateByHeight; });
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const truncateByHeight = ({
  body
}) => {
  return `<div class="truncate-by-height">${body}</div>`;
};

/***/ }),

/***/ "./public/application/angular/doc_table/infinite_scroll.ts":
/*!*****************************************************************!*\
  !*** ./public/application/angular/doc_table/infinite_scroll.ts ***!
  \*****************************************************************/
/*! exports provided: createInfiniteScrollDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInfiniteScrollDirective", function() { return createInfiniteScrollDirective; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

function createInfiniteScrollDirective() {
  return {
    restrict: 'E',
    scope: {
      more: '='
    },
    link: ($scope, $element) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let checkTimer;
      /**
       * depending on which version of Discover is displayed, different elements are scrolling
       * and have therefore to be considered for calculation of infinite scrolling
       */

      const scrollDiv = $element.parents('.dscTable');
      const scrollDivMobile = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window);

      function onScroll() {
        if (!$scope.more) return;
        const isMobileView = document.getElementsByClassName('dscSidebar__mobile').length > 0;
        const usedScrollDiv = isMobileView ? scrollDivMobile : scrollDiv;
        const scrollTop = usedScrollDiv.scrollTop();
        const scrollOffset = usedScrollDiv.prop('offsetTop') || 0;
        const winHeight = Number(usedScrollDiv.height());
        const winBottom = Number(winHeight) + Number(scrollTop);
        const elTop = $element.get(0).offsetTop || 0;
        const remaining = elTop - scrollOffset - winBottom;

        if (remaining <= winHeight) {
          $scope[$scope.$$phase ? '$eval' : '$apply'](function () {
            $scope.more();
          });
        }
      }

      function scheduleCheck() {
        if (checkTimer) return;
        checkTimer = setTimeout(function () {
          checkTimer = null;
          onScroll();
        }, 50);
      }

      scrollDiv.on('scroll', scheduleCheck);
      window.addEventListener('scroll', scheduleCheck);
      $scope.$on('$destroy', function () {
        clearTimeout(checkTimer);
        scrollDiv.off('scroll', scheduleCheck);
        window.removeEventListener('scroll', scheduleCheck);
      });
      scheduleCheck();
    }
  };
}

/***/ }),

/***/ "./public/application/angular/doc_table/lib/pager/pager.js":
/*!*****************************************************************!*\
  !*** ./public/application/angular/doc_table/lib/pager/pager.js ***!
  \*****************************************************************/
/*! exports provided: Pager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pager", function() { return Pager; });
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
function clamp(val, min, max) {
  return Math.min(Math.max(min, val), max);
}

class Pager {
  constructor(totalItems, pageSize, startingPage) {
    this.currentPage = startingPage;
    this.totalItems = totalItems;
    this.pageSize = pageSize;
    this.startIndex = 0;
    this.updateMeta();
  }

  get pageCount() {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  get hasNextPage() {
    return this.currentPage < this.totalPages;
  }

  get hasPreviousPage() {
    return this.currentPage > 1;
  }

  nextPage() {
    this.currentPage += 1;
    this.updateMeta();
  }

  previousPage() {
    this.currentPage -= 1;
    this.updateMeta();
  }

  setTotalItems(count) {
    this.totalItems = count;
    this.updateMeta();
  }

  setPageSize(count) {
    this.pageSize = count;
    this.updateMeta();
  }

  updateMeta() {
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    this.currentPage = clamp(this.currentPage, 1, this.totalPages);
    this.startItem = (this.currentPage - 1) * this.pageSize + 1;
    this.startItem = clamp(this.startItem, 0, this.totalItems);
    this.endItem = this.startItem - 1 + this.pageSize;
    this.endItem = clamp(this.endItem, 0, this.totalItems);
    this.startIndex = this.startItem - 1;
  }

}

/***/ }),

/***/ "./public/application/angular/doc_table/lib/pager/pager_factory.ts":
/*!*************************************************************************!*\
  !*** ./public/application/angular/doc_table/lib/pager/pager_factory.ts ***!
  \*************************************************************************/
/*! exports provided: createPagerFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPagerFactory", function() { return createPagerFactory; });
/* harmony import */ var _pager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pager */ "./public/application/angular/doc_table/lib/pager/pager.js");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
// @ts-expect-error

function createPagerFactory() {
  return {
    create(...args) {
      return new _pager__WEBPACK_IMPORTED_MODULE_0__["Pager"](...args);
    }

  };
}

/***/ }),

/***/ "./public/application/angular/get_inner_angular.ts":
/*!*********************************************************!*\
  !*** ./public/application/angular/get_inner_angular.ts ***!
  \*********************************************************/
/*! exports provided: getInnerAngularModule, getInnerAngularModuleEmbeddable, initializeInnerAngularModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInnerAngularModule", function() { return getInnerAngularModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInnerAngularModuleEmbeddable", function() { return getInnerAngularModuleEmbeddable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeInnerAngularModule", function() { return initializeInnerAngularModule; });
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.scss */ "./public/application/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angular_sanitize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-sanitize */ "../../node_modules/angular-sanitize/index.js");
/* harmony import */ var angular_sanitize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular_sanitize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _kbn_i18n_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kbn/i18n/angular */ "@kbn/i18n/angular");
/* harmony import */ var _kbn_i18n_angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_angular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../src/plugins/kibana_utils/public */ "plugin/kibanaUtils/public");
/* harmony import */ var _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _doc_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./doc_table */ "./public/application/angular/doc_table/index.ts");
/* harmony import */ var _doc_table_components_table_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./doc_table/components/table_header */ "./public/application/angular/doc_table/components/table_header.ts");
/* harmony import */ var _doc_table_components_pager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./doc_table/components/pager */ "./public/application/angular/doc_table/components/pager/index.ts");
/* harmony import */ var _components_context_app_context_app_legacy_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/context_app/context_app_legacy_directive */ "./public/application/components/context_app/context_app_legacy_directive.ts");
/* harmony import */ var _doc_table_components_table_row__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./doc_table/components/table_row */ "./public/application/angular/doc_table/components/table_row.ts");
/* harmony import */ var _doc_table_lib_pager_pager_factory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./doc_table/lib/pager/pager_factory */ "./public/application/angular/doc_table/lib/pager/pager_factory.ts");
/* harmony import */ var _doc_table_infinite_scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./doc_table/infinite_scroll */ "./public/application/angular/doc_table/infinite_scroll.ts");
/* harmony import */ var _doc_viewer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./doc_viewer */ "./public/application/angular/doc_viewer.tsx");
/* harmony import */ var _create_discover_grid_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./create_discover_grid_directive */ "./public/application/angular/create_discover_grid_directive.tsx");
/* harmony import */ var _directives_render_complete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/render_complete */ "./public/application/angular/directives/render_complete.ts");
/* harmony import */ var _src_plugins_kibana_legacy_public__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../src/plugins/kibana_legacy/public */ "plugin/kibanaLegacy/public");
/* harmony import */ var _src_plugins_kibana_legacy_public__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_kibana_legacy_public__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _kibana_services__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../kibana_services */ "./public/kibana_services.ts");
/* harmony import */ var _create_discover_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./create_discover_directive */ "./public/application/angular/create_discover_directive.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
// inner angular imports
// these are necessary to bootstrap the local angular.
// They can stay even after NP cutover

 // required for `ngSanitize` angular module


















/**
 * returns the main inner angular module, it contains all the parts of Angular Discover
 * needs to render, so in the end the current 'kibana' angular module is no longer necessary
 */

function getInnerAngularModule(name, core, deps, context) {
  Object(_src_plugins_kibana_legacy_public__WEBPACK_IMPORTED_MODULE_16__["initAngularBootstrap"])();
  const module = initializeInnerAngularModule(name, core, deps.navigation, deps.data);
  Object(_src_plugins_kibana_legacy_public__WEBPACK_IMPORTED_MODULE_16__["configureAppAngularModule"])(module, {
    core,
    env: context.env
  }, true, _kibana_services__WEBPACK_IMPORTED_MODULE_17__["getScopedHistory"]);
  return module;
}
/**
 * returns a slimmer inner angular module for embeddable rendering
 */

function getInnerAngularModuleEmbeddable(name, core, deps) {
  return initializeInnerAngularModule(name, core, deps.navigation, deps.data, true);
}
let initialized = false;
function initializeInnerAngularModule(name = 'app/discover', core, navigation, data, embeddable = false) {
  if (!initialized) {
    createLocalI18nModule();
    createLocalPrivateModule();
    createLocalPromiseModule();
    createLocalStorageModule();
    createPagerFactoryModule();
    createDocTableModule();
    initialized = true;
  }

  if (embeddable) {
    return angular__WEBPACK_IMPORTED_MODULE_1___default.a.module(name, ['ngSanitize', 'react', 'ui.bootstrap', 'discoverI18n', 'discoverPrivate', 'discoverDocTable', 'discoverPagerFactory', 'discoverPromise']).config(_src_plugins_kibana_legacy_public__WEBPACK_IMPORTED_MODULE_16__["watchMultiDecorator"]).directive('icon', reactDirective => reactDirective(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiIcon"])).directive('renderComplete', _directives_render_complete__WEBPACK_IMPORTED_MODULE_15__["createRenderCompleteDirective"]);
  }

  return angular__WEBPACK_IMPORTED_MODULE_1___default.a.module(name, ['ngSanitize', 'ngRoute', 'react', 'ui.bootstrap', 'discoverI18n', 'discoverPrivate', 'discoverPromise', 'discoverLocalStorageProvider', 'discoverDocTable', 'discoverPagerFactory']).config(_src_plugins_kibana_legacy_public__WEBPACK_IMPORTED_MODULE_16__["watchMultiDecorator"]).run(_src_plugins_kibana_legacy_public__WEBPACK_IMPORTED_MODULE_16__["registerListenEventListener"]).directive('renderComplete', _directives_render_complete__WEBPACK_IMPORTED_MODULE_15__["createRenderCompleteDirective"]).directive('discover', _create_discover_directive__WEBPACK_IMPORTED_MODULE_18__["createDiscoverDirective"]);
}

function createLocalPromiseModule() {
  angular__WEBPACK_IMPORTED_MODULE_1___default.a.module('discoverPromise', []).service('Promise', _src_plugins_kibana_legacy_public__WEBPACK_IMPORTED_MODULE_16__["PromiseServiceCreator"]);
}

function createLocalPrivateModule() {
  angular__WEBPACK_IMPORTED_MODULE_1___default.a.module('discoverPrivate', []).provider('Private', _src_plugins_kibana_legacy_public__WEBPACK_IMPORTED_MODULE_16__["PrivateProvider"]);
}

function createLocalI18nModule() {
  angular__WEBPACK_IMPORTED_MODULE_1___default.a.module('discoverI18n', []).provider('i18n', _kbn_i18n_angular__WEBPACK_IMPORTED_MODULE_4__["I18nProvider"]).filter('i18n', _kbn_i18n_angular__WEBPACK_IMPORTED_MODULE_4__["i18nFilter"]).directive('i18nId', _kbn_i18n_angular__WEBPACK_IMPORTED_MODULE_4__["i18nDirective"]);
}

function createLocalStorageModule() {
  angular__WEBPACK_IMPORTED_MODULE_1___default.a.module('discoverLocalStorageProvider', ['discoverPrivate']).service('localStorage', createLocalStorageService('localStorage')).service('sessionStorage', createLocalStorageService('sessionStorage'));
}

const createLocalStorageService = function (type) {
  return function ($window) {
    return new _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_5__["Storage"]($window[type]);
  };
};

function createPagerFactoryModule() {
  angular__WEBPACK_IMPORTED_MODULE_1___default.a.module('discoverPagerFactory', []).factory('pagerFactory', _doc_table_lib_pager_pager_factory__WEBPACK_IMPORTED_MODULE_11__["createPagerFactory"]);
}

function createDocTableModule() {
  angular__WEBPACK_IMPORTED_MODULE_1___default.a.module('discoverDocTable', ['discoverPagerFactory', 'react']).directive('docTable', _doc_table__WEBPACK_IMPORTED_MODULE_6__["createDocTableDirective"]).directive('kbnTableHeader', _doc_table_components_table_header__WEBPACK_IMPORTED_MODULE_7__["createTableHeaderDirective"]).directive('toolBarPagerText', _doc_table_components_pager__WEBPACK_IMPORTED_MODULE_8__["createToolBarPagerTextDirective"]).directive('kbnTableRow', _doc_table_components_table_row__WEBPACK_IMPORTED_MODULE_10__["createTableRowDirective"]).directive('toolBarPagerButtons', _doc_table_components_pager__WEBPACK_IMPORTED_MODULE_8__["createToolBarPagerButtonsDirective"]).directive('kbnInfiniteScroll', _doc_table_infinite_scroll__WEBPACK_IMPORTED_MODULE_12__["createInfiniteScrollDirective"]).directive('discoverGrid', _create_discover_grid_directive__WEBPACK_IMPORTED_MODULE_14__["createDiscoverGridDirective"]).directive('docViewer', _doc_viewer__WEBPACK_IMPORTED_MODULE_13__["createDocViewerDirective"]).directive('contextAppLegacy', _components_context_app_context_app_legacy_directive__WEBPACK_IMPORTED_MODULE_9__["createContextAppLegacy"]);
}

/***/ }),

/***/ "./public/application/apps/main/components/chart/discover_chart.tsx":
/*!**************************************************************************!*\
  !*** ./public/application/apps/main/components/chart/discover_chart.tsx ***!
  \**************************************************************************/
/*! exports provided: DiscoverChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverChart", function() { return DiscoverChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hits_counter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hits_counter */ "./public/application/apps/main/components/hits_counter/index.ts");
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../src/plugins/data/public */ "plugin/data/public");
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_data_public__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _timechart_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../timechart_header */ "./public/application/apps/main/components/timechart_header/index.ts");
/* harmony import */ var _histogram__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./histogram */ "./public/application/apps/main/components/chart/histogram.tsx");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */








const TimechartHeaderMemoized = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(_timechart_header__WEBPACK_IMPORTED_MODULE_6__["TimechartHeader"]);
const DiscoverHistogramMemoized = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(_histogram__WEBPACK_IMPORTED_MODULE_7__["DiscoverHistogram"]);
function DiscoverChart({
  config,
  data,
  bucketInterval,
  chartData,
  hits,
  isLegacy,
  resetSavedSearch,
  savedSearch,
  state,
  stateContainer,
  timefield
}) {
  const chartRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    element: null,
    moveFocus: false
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (chartRef.current.moveFocus && chartRef.current.element) {
      chartRef.current.element.focus();
    }
  }, [state.hideChart]);
  const toggleHideChart = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    const newHideChart = !state.hideChart;
    stateContainer.setAppState({
      hideChart: newHideChart
    });
    chartRef.current.moveFocus = !newHideChart;
  }, [state, stateContainer]);
  const onChangeInterval = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(interval => {
    if (interval) {
      stateContainer.setAppState({
        interval
      });
    }
  }, [stateContainer]);
  const timefilterUpdateHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(ranges => {
    data.query.timefilter.timefilter.setTime({
      from: moment__WEBPACK_IMPORTED_MODULE_1___default()(ranges.from).toISOString(),
      to: moment__WEBPACK_IMPORTED_MODULE_1___default()(ranges.to).toISOString(),
      mode: 'absolute'
    });
  }, [data]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
    direction: "column",
    alignItems: "stretch",
    gutterSize: "none",
    responsive: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: false,
    className: "dscResultCount"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
    alignItems: "center",
    justifyContent: "spaceBetween"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: false,
    className: "dscResuntCount__title eui-textTruncate eui-textNoWrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hits_counter__WEBPACK_IMPORTED_MODULE_4__["HitsCounter"], {
    hits: hits,
    showResetButton: !!(savedSearch && savedSearch.id),
    onResetQuery: resetSavedSearch
  })), !state.hideChart && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    className: "dscResultCount__actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimechartHeaderMemoized, {
    data: data,
    dateFormat: config.get('dateFormat'),
    options: _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_5__["search"].aggs.intervalOptions,
    onChangeInterval: onChangeInterval,
    stateInterval: state.interval || '',
    bucketInterval: bucketInterval
  })), timefield && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    className: "dscResultCount__toggle",
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButtonEmpty"], {
    size: "xs",
    iconType: !state.hideChart ? 'eyeClosed' : 'eye',
    onClick: toggleHideChart,
    "data-test-subj": "discoverChartToggle"
  }, !state.hideChart ? _kbn_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('discover.hideChart', {
    defaultMessage: 'Hide chart'
  }) : _kbn_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('discover.showChart', {
    defaultMessage: 'Show chart'
  }))))), !state.hideChart && chartData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    ref: element => chartRef.current.element = element,
    tabIndex: -1,
    "aria-label": _kbn_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('discover.histogramOfFoundDocumentsAriaLabel', {
      defaultMessage: 'Histogram of found documents'
    }),
    className: "dscTimechart"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: isLegacy ? 'dscHistogram' : 'dscHistogramGrid',
    "data-test-subj": "discoverChart"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DiscoverHistogramMemoized, {
    chartData: chartData,
    timefilterUpdateHandler: timefilterUpdateHandler
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "s"
  })));
}

/***/ }),

/***/ "./public/application/apps/main/components/chart/histogram.tsx":
/*!*********************************************************************!*\
  !*** ./public/application/apps/main/components/chart/histogram.tsx ***!
  \*********************************************************************/
/*! exports provided: DiscoverHistogram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverHistogram", function() { return DiscoverHistogram; });
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment-timezone */ "moment-timezone");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastic_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/charts */ "@elastic/charts");
/* harmony import */ var _elastic_charts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elastic_charts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _kibana_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../kibana_services */ "./public/kibana_services.ts");
/* harmony import */ var _src_plugins_charts_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../src/plugins/charts/public */ "plugin/charts/public");
/* harmony import */ var _src_plugins_charts_public__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_charts_public__WEBPACK_IMPORTED_MODULE_6__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */








function getTimezone(uiSettings) {
  if (uiSettings.isDefault('dateFormat:tz')) {
    const detectedTimezone = moment_timezone__WEBPACK_IMPORTED_MODULE_0___default.a.tz.guess();
    if (detectedTimezone) return detectedTimezone;else return moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()().format('Z');
  } else {
    return uiSettings.get('dateFormat:tz', 'Browser');
  }
}

class DiscoverHistogram extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "subscription", void 0);

    _defineProperty(this, "state", {
      chartsTheme: Object(_kibana_services__WEBPACK_IMPORTED_MODULE_5__["getServices"])().theme.chartsDefaultTheme,
      chartsBaseTheme: Object(_kibana_services__WEBPACK_IMPORTED_MODULE_5__["getServices"])().theme.chartsDefaultBaseTheme
    });

    _defineProperty(this, "onBrushEnd", ({
      x
    }) => {
      if (!x) {
        return;
      }

      const [from, to] = x;
      this.props.timefilterUpdateHandler({
        from,
        to
      });
    });

    _defineProperty(this, "onElementClick", xInterval => ([elementData]) => {
      const startRange = elementData[0].x;
      const range = {
        from: startRange,
        to: startRange + xInterval
      };
      this.props.timefilterUpdateHandler(range);
    });

    _defineProperty(this, "formatXValue", val => {
      const xAxisFormat = this.props.chartData.xAxisFormat.params.pattern;
      return moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()(val).format(xAxisFormat);
    });
  }

  componentDidMount() {
    this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([Object(_kibana_services__WEBPACK_IMPORTED_MODULE_5__["getServices"])().theme.chartsTheme$, Object(_kibana_services__WEBPACK_IMPORTED_MODULE_5__["getServices"])().theme.chartsBaseTheme$]).subscribe(([chartsTheme, chartsBaseTheme]) => this.setState({
      chartsTheme,
      chartsBaseTheme
    }));
  }

  componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  render() {
    var _data$;

    const uiSettings = Object(_kibana_services__WEBPACK_IMPORTED_MODULE_5__["getServices"])().uiSettings;
    const timeZone = getTimezone(uiSettings);
    const {
      chartData
    } = this.props;
    const {
      chartsTheme,
      chartsBaseTheme
    } = this.state;

    if (!chartData) {
      return null;
    }

    const data = chartData.values;
    const isDarkMode = uiSettings.get('theme:darkMode');
    /*
     * Deprecation: [interval] on [date_histogram] is deprecated, use [fixed_interval] or [calendar_interval].
     * see https://github.com/elastic/kibana/issues/27410
     * TODO: Once the Discover query has been update, we should change the below to use the new field
     */

    const {
      intervalESValue,
      intervalESUnit,
      interval
    } = chartData.ordered;
    const xInterval = interval.asMilliseconds();
    const xValues = chartData.xAxisOrderedValues;
    const lastXValue = xValues[xValues.length - 1];
    const domain = chartData.ordered;
    const domainStart = domain.min.valueOf();
    const domainEnd = domain.max.valueOf();
    const domainMin = Math.min((_data$ = data[0]) === null || _data$ === void 0 ? void 0 : _data$.x, domainStart);
    const domainMax = Math.max(domainEnd - xInterval, lastXValue);
    const xDomain = {
      min: domainMin,
      max: domainMax,
      minInterval: Object(_src_plugins_charts_public__WEBPACK_IMPORTED_MODULE_6__["getAdjustedInterval"])(xValues, intervalESValue, intervalESUnit, timeZone)
    };
    const tooltipProps = {
      headerFormatter: Object(_src_plugins_charts_public__WEBPACK_IMPORTED_MODULE_6__["renderEndzoneTooltip"])(xInterval, domainStart, domainEnd, this.formatXValue),
      type: _elastic_charts__WEBPACK_IMPORTED_MODULE_3__["TooltipType"].VerticalCursor
    };
    const xAxisFormatter = Object(_kibana_services__WEBPACK_IMPORTED_MODULE_5__["getServices"])().data.fieldFormats.deserialize(this.props.chartData.yAxisFormat);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"], {
      size: "100%"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_3__["Settings"], {
      xDomain: xDomain,
      onBrushEnd: this.onBrushEnd,
      onElementClick: this.onElementClick(xInterval),
      tooltip: tooltipProps,
      theme: chartsTheme,
      baseTheme: chartsBaseTheme
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_3__["Axis"], {
      id: "discover-histogram-left-axis",
      position: _elastic_charts__WEBPACK_IMPORTED_MODULE_3__["Position"].Left,
      ticks: 5,
      title: chartData.yAxisLabel,
      integersOnly: true,
      tickFormat: value => xAxisFormatter.convert(value)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_3__["Axis"], {
      id: "discover-histogram-bottom-axis",
      position: _elastic_charts__WEBPACK_IMPORTED_MODULE_3__["Position"].Bottom,
      title: chartData.xAxisLabel,
      tickFormat: this.formatXValue,
      ticks: 10
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_plugins_charts_public__WEBPACK_IMPORTED_MODULE_6__["CurrentTime"], {
      isDarkMode: isDarkMode,
      domainEnd: domainEnd
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_plugins_charts_public__WEBPACK_IMPORTED_MODULE_6__["Endzones"], {
      isDarkMode: isDarkMode,
      domainStart: domainStart,
      domainEnd: domainEnd,
      interval: xDomain.minInterval,
      domainMin: xDomain.min,
      domainMax: xDomain.max
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_charts__WEBPACK_IMPORTED_MODULE_3__["HistogramBarSeries"], {
      id: "discover-histogram",
      minBarHeight: 2,
      xScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_3__["ScaleType"].Time,
      yScaleType: _elastic_charts__WEBPACK_IMPORTED_MODULE_3__["ScaleType"].Linear,
      xAccessor: "x",
      yAccessors: ['y'],
      data: data,
      timeZone: timeZone,
      name: chartData.yAxisLabel
    }));
  }

}

_defineProperty(DiscoverHistogram, "propTypes", {
  chartData: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  timefilterUpdateHandler: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
});

/***/ }),

/***/ "./public/application/apps/main/components/chart/index.ts":
/*!****************************************************************!*\
  !*** ./public/application/apps/main/components/chart/index.ts ***!
  \****************************************************************/
/*! exports provided: DiscoverChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _discover_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discover_chart */ "./public/application/apps/main/components/chart/discover_chart.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiscoverChart", function() { return _discover_chart__WEBPACK_IMPORTED_MODULE_0__["DiscoverChart"]; });

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


/***/ }),

/***/ "./public/application/apps/main/components/chart/point_series.ts":
/*!***********************************************************************!*\
  !*** ./public/application/apps/main/components/chart/point_series.ts ***!
  \***********************************************************************/
/*! exports provided: buildPointSeriesData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildPointSeriesData", function() { return buildPointSeriesData; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

const buildPointSeriesData = (table, dimensions) => {
  const {
    x,
    y
  } = dimensions;
  const xAccessor = table.columns[x.accessor].id;
  const yAccessor = table.columns[y.accessor].id;
  const chart = {};
  chart.xAxisOrderedValues = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["uniq"])(table.rows.map(r => r[xAccessor]));
  chart.xAxisFormat = x.format;
  chart.xAxisLabel = table.columns[x.accessor].name;
  chart.yAxisFormat = y.format;
  const {
    intervalESUnit,
    intervalESValue,
    interval,
    bounds
  } = x.params;
  chart.ordered = {
    date: true,
    interval,
    intervalESUnit,
    intervalESValue,
    min: bounds.min,
    max: bounds.max
  };
  chart.yAxisLabel = table.columns[y.accessor].name;
  chart.values = table.rows.filter(row => row && row[yAccessor] !== 'NaN').map(row => ({
    x: row[xAccessor],
    y: row[yAccessor]
  }));
  return chart;
};

/***/ }),

/***/ "./public/application/apps/main/components/hits_counter/hits_counter.scss":
/*!********************************************************************************!*\
  !*** ./public/application/apps/main/components/hits_counter/hits_counter.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__kbnThemeTag__) {
  case 'v7dark':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7dark]. Styles were compiled using the [v8dark] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7dark] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./hits_counter.scss?v8dark */ "./public/application/apps/main/components/hits_counter/hits_counter.scss?v8dark")

  case 'v7light':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7light]. Styles were compiled using the [v8light] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7light] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./hits_counter.scss?v8light */ "./public/application/apps/main/components/hits_counter/hits_counter.scss?v8light")

  case 'v8dark':
    return __webpack_require__(/*! ./hits_counter.scss?v8dark */ "./public/application/apps/main/components/hits_counter/hits_counter.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./hits_counter.scss?v8light */ "./public/application/apps/main/components/hits_counter/hits_counter.scss?v8light");
}

/***/ }),

/***/ "./public/application/apps/main/components/hits_counter/hits_counter.scss?v8dark":
/*!***************************************************************************************!*\
  !*** ./public/application/apps/main/components/hits_counter/hits_counter.scss?v8dark ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-0-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./hits_counter.scss?v8dark */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/hits_counter/hits_counter.scss?v8dark");

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

/***/ "./public/application/apps/main/components/hits_counter/hits_counter.scss?v8light":
/*!****************************************************************************************!*\
  !*** ./public/application/apps/main/components/hits_counter/hits_counter.scss?v8light ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./hits_counter.scss?v8light */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/hits_counter/hits_counter.scss?v8light");

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

/***/ "./public/application/apps/main/components/hits_counter/hits_counter.tsx":
/*!*******************************************************************************!*\
  !*** ./public/application/apps/main/components/hits_counter/hits_counter.tsx ***!
  \*******************************************************************************/
/*! exports provided: HitsCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HitsCounter", function() { return HitsCounter; });
/* harmony import */ var _hits_counter_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hits_counter.scss */ "./public/application/apps/main/components/hits_counter/hits_counter.scss");
/* harmony import */ var _hits_counter_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hits_counter_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../helpers */ "./public/application/helpers/index.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */






function HitsCounter({
  hits,
  showResetButton,
  onResetQuery
}) {
  if (typeof hits === 'undefined') {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__["I18nProvider"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
    className: "dscHitsCounter",
    gutterSize: "s",
    responsive: false,
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    "data-test-subj": "discoverQueryHits"
  }, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["formatNumWithCommas"])(hits)), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "discover.hitsPluralTitle",
    defaultMessage: "{hits, plural, one {hit} other {hits}}",
    values: {
      hits
    }
  }))), showResetButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButtonEmpty"], {
    iconType: "refresh",
    "data-test-subj": "resetSavedSearch",
    onClick: onResetQuery,
    size: "s",
    "aria-label": _kbn_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('discover.reloadSavedSearchButton', {
      defaultMessage: 'Reset search'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "discover.reloadSavedSearchButton",
    defaultMessage: "Reset search"
  })))));
}

/***/ }),

/***/ "./public/application/apps/main/components/hits_counter/index.ts":
/*!***********************************************************************!*\
  !*** ./public/application/apps/main/components/hits_counter/index.ts ***!
  \***********************************************************************/
/*! exports provided: HitsCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hits_counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hits_counter */ "./public/application/apps/main/components/hits_counter/hits_counter.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HitsCounter", function() { return _hits_counter__WEBPACK_IMPORTED_MODULE_0__["HitsCounter"]; });

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


/***/ }),

/***/ "./public/application/apps/main/components/layout/discover_layout.scss":
/*!*****************************************************************************!*\
  !*** ./public/application/apps/main/components/layout/discover_layout.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__kbnThemeTag__) {
  case 'v7dark':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7dark]. Styles were compiled using the [v8dark] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7dark] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./discover_layout.scss?v8dark */ "./public/application/apps/main/components/layout/discover_layout.scss?v8dark")

  case 'v7light':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7light]. Styles were compiled using the [v8light] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7light] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./discover_layout.scss?v8light */ "./public/application/apps/main/components/layout/discover_layout.scss?v8light")

  case 'v8dark':
    return __webpack_require__(/*! ./discover_layout.scss?v8dark */ "./public/application/apps/main/components/layout/discover_layout.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./discover_layout.scss?v8light */ "./public/application/apps/main/components/layout/discover_layout.scss?v8light");
}

/***/ }),

/***/ "./public/application/apps/main/components/layout/discover_layout.scss?v8dark":
/*!************************************************************************************!*\
  !*** ./public/application/apps/main/components/layout/discover_layout.scss?v8dark ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-0-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./discover_layout.scss?v8dark */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/layout/discover_layout.scss?v8dark");

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

/***/ "./public/application/apps/main/components/layout/discover_layout.scss?v8light":
/*!*************************************************************************************!*\
  !*** ./public/application/apps/main/components/layout/discover_layout.scss?v8light ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./discover_layout.scss?v8light */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/layout/discover_layout.scss?v8light");

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

/***/ "./public/application/apps/main/components/layout/discover_layout.tsx":
/*!****************************************************************************!*\
  !*** ./public/application/apps/main/components/layout/discover_layout.tsx ***!
  \****************************************************************************/
/*! exports provided: DiscoverLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverLayout", function() { return DiscoverLayout; });
/* harmony import */ var _discover_layout_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discover_layout.scss */ "./public/application/apps/main/components/layout/discover_layout.scss");
/* harmony import */ var _discover_layout_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_discover_layout_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _kbn_analytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kbn/analytics */ "@kbn/analytics");
/* harmony import */ var _kbn_analytics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_kbn_analytics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _no_results__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../no_results */ "./public/application/apps/main/components/no_results/index.ts");
/* harmony import */ var _loading_spinner_loading_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../loading_spinner/loading_spinner */ "./public/application/apps/main/components/loading_spinner/loading_spinner.tsx");
/* harmony import */ var _angular_doc_table_create_doc_table_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../angular/doc_table/create_doc_table_react */ "./public/application/angular/doc_table/create_doc_table_react.tsx");
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../../src/plugins/data/public */ "plugin/data/public");
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_data_public__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sidebar */ "./public/application/apps/main/components/sidebar/index.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../common */ "./common/index.ts");
/* harmony import */ var _helpers_popularize_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../helpers/popularize_field */ "./public/application/helpers/popularize_field.ts");
/* harmony import */ var _components_discover_grid_discover_grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/discover_grid/discover_grid */ "./public/application/components/discover_grid/discover_grid.tsx");
/* harmony import */ var _top_nav_discover_topnav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../top_nav/discover_topnav */ "./public/application/apps/main/components/top_nav/discover_topnav.tsx");
/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../chart */ "./public/application/apps/main/components/chart/index.ts");
/* harmony import */ var _utils_get_result_state__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utils/get_result_state */ "./public/application/apps/main/utils/get_result_state.ts");
/* harmony import */ var _uninitialized_uninitialized__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../uninitialized/uninitialized */ "./public/application/apps/main/components/uninitialized/uninitialized.tsx");
/* harmony import */ var _helpers_use_data_grid_columns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../helpers/use_data_grid_columns */ "./public/application/helpers/use_data_grid_columns.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */




















const DocTableLegacyMemoized = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(_angular_doc_table_create_doc_table_react__WEBPACK_IMPORTED_MODULE_9__["DocTableLegacy"]);
const SidebarMemoized = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(_sidebar__WEBPACK_IMPORTED_MODULE_11__["DiscoverSidebarResponsive"]);
const DataGridMemoized = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(_components_discover_grid_discover_grid__WEBPACK_IMPORTED_MODULE_14__["DiscoverGrid"]);
const TopNavMemoized = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(_top_nav_discover_topnav__WEBPACK_IMPORTED_MODULE_15__["DiscoverTopNav"]);
const DiscoverChartMemoized = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(_chart__WEBPACK_IMPORTED_MODULE_16__["DiscoverChart"]);
function DiscoverLayout({
  indexPattern,
  indexPatternList,
  navigateTo,
  onChangeIndexPattern,
  onUpdateQuery,
  savedSearchRefetch$,
  resetSavedSearch,
  savedSearchData$,
  savedSearch,
  searchSource,
  services,
  state,
  stateContainer
}) {
  var _state$query$language, _state$query;

  const {
    trackUiMetric,
    capabilities,
    indexPatterns,
    data,
    uiSettings,
    filterManager
  } = services;
  const sampleSize = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_12__["SAMPLE_SIZE_SETTING"]), [uiSettings]);
  const [expandedDoc, setExpandedDoc] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(undefined);
  const [inspectorSession, setInspectorSession] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(undefined);
  const scrollableDesktop = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const collapseIcon = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const [fetchState, setFetchState] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    state: savedSearchData$.getValue().state,
    fetchCounter: 0,
    fieldCounts: {},
    rows: []
  });
  const {
    state: fetchStatus,
    fetchCounter,
    inspectorAdapters,
    rows
  } = fetchState;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const subscription = savedSearchData$.subscribe(next => {
      if (next.state && next.state !== fetchState.state || next.fetchCounter && next.fetchCounter !== fetchState.fetchCounter || next.rows && next.rows !== fetchState.rows || next.chartData && next.chartData !== fetchState.chartData) {
        setFetchState({ ...fetchState,
          ...next
        });
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [savedSearchData$, fetchState]); // collapse icon isn't displayed in mobile view, use it to detect which view is displayed

  const isMobile = () => collapseIcon && !collapseIcon.current;

  const timeField = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => {
    return _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_10__["indexPatterns"].isDefault(indexPattern) ? indexPattern.timeFieldName : undefined;
  }, [indexPattern]);
  const [isSidebarClosed, setIsSidebarClosed] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const isLegacy = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_12__["DOC_TABLE_LEGACY"]), [uiSettings]);
  const useNewFieldsApi = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => !uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_12__["SEARCH_FIELDS_FROM_SOURCE"]), [uiSettings]);
  const resultState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => Object(_utils_get_result_state__WEBPACK_IMPORTED_MODULE_17__["getResultState"])(fetchStatus, rows), [fetchStatus, rows]);
  const {
    columns,
    onAddColumn,
    onRemoveColumn,
    onMoveColumn,
    onSetColumns
  } = Object(_helpers_use_data_grid_columns__WEBPACK_IMPORTED_MODULE_19__["useDataGridColumns"])({
    capabilities,
    config: uiSettings,
    indexPattern,
    indexPatterns,
    setAppState: stateContainer.setAppState,
    state,
    useNewFieldsApi
  });
  const onOpenInspector = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    // prevent overlapping
    if (inspectorAdapters) {
      setExpandedDoc(undefined);
      const session = services.inspector.open(inspectorAdapters, {
        title: savedSearch.title
      });
      setInspectorSession(session);
    }
  }, [setExpandedDoc, inspectorAdapters, savedSearch, services.inspector]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    return () => {
      if (inspectorSession) {
        // Close the inspector if this scope is destroyed (e.g. because the user navigates away).
        inspectorSession.close();
      }
    };
  }, [inspectorSession]);
  const onSort = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(sort => {
    stateContainer.setAppState({
      sort
    });
  }, [stateContainer]);
  const onAddFilter = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((field, values, operation) => {
    const fieldName = typeof field === 'string' ? field : field.name;
    Object(_helpers_popularize_field__WEBPACK_IMPORTED_MODULE_13__["popularizeField"])(indexPattern, fieldName, indexPatterns);
    const newFilters = _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_10__["esFilters"].generateFilters(filterManager, field, values, operation, String(indexPattern.id));

    if (trackUiMetric) {
      trackUiMetric(_kbn_analytics__WEBPACK_IMPORTED_MODULE_4__["METRIC_TYPE"].CLICK, 'filter_added');
    }

    return filterManager.addFilters(newFilters);
  }, [filterManager, indexPattern, indexPatterns, trackUiMetric]);
  /**
   * Legacy function, remove once legacy grid is removed
   */

  const onBackToTop = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    if (scrollableDesktop && scrollableDesktop.current) {
      scrollableDesktop.current.focus();
    } // Only the desktop one needs to target a specific container


    if (!isMobile() && scrollableDesktop.current) {
      scrollableDesktop.current.scrollTo(0, 0);
    } else if (window) {
      window.scrollTo(0, 0);
    }
  }, [scrollableDesktop]);
  const onResize = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(colSettings => {
    const grid = { ...state.grid
    } || {};
    const newColumns = { ...grid.columns
    } || {};
    newColumns[colSettings.columnId] = {
      width: colSettings.width
    };
    const newGrid = { ...grid,
      columns: newColumns
    };
    stateContainer.setAppState({
      grid: newGrid
    });
  }, [stateContainer, state]);
  const onEditRuntimeField = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    savedSearchRefetch$.next('reset');
  }, [savedSearchRefetch$]);
  const contentCentered = resultState === 'uninitialized';
  const showTimeCol = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => !uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_12__["DOC_HIDE_TIME_COLUMN_SETTING"], false) && !!indexPattern.timeFieldName, [uiSettings, indexPattern.timeFieldName]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_5__["I18nProvider"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiPage"], {
    className: "dscPage",
    "data-fetch-counter": fetchCounter
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TopNavMemoized, {
    indexPattern: indexPattern,
    onOpenInspector: onOpenInspector,
    query: state.query,
    navigateTo: navigateTo,
    savedQuery: state.savedQuery,
    savedSearch: savedSearch,
    searchSource: searchSource,
    services: services,
    stateContainer: stateContainer,
    updateQuery: onUpdateQuery,
    resetSavedSearch: resetSavedSearch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiPageBody"], {
    className: "dscPageBody",
    "aria-describedby": "savedSearchTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    id: "savedSearchTitle",
    className: "euiScreenReaderOnly"
  }, savedSearch.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
    className: "dscPageBody__contents",
    gutterSize: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SidebarMemoized, {
    columns: columns,
    fieldCounts: fetchState.fieldCounts,
    hits: rows,
    indexPatternList: indexPatternList,
    onAddField: onAddColumn,
    onAddFilter: onAddFilter,
    onRemoveField: onRemoveColumn,
    onChangeIndexPattern: onChangeIndexPattern,
    selectedIndexPattern: indexPattern,
    services: services,
    state: state,
    isClosed: isSidebarClosed,
    trackUiMetric: trackUiMetric,
    useNewFieldsApi: useNewFieldsApi,
    onEditRuntimeField: onEditRuntimeField
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiHideFor"], {
    sizes: ['xs', 's']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButtonIcon"], {
    iconType: isSidebarClosed ? 'menuRight' : 'menuLeft',
    iconSize: "m",
    size: "xs",
    onClick: () => setIsSidebarClosed(!isSidebarClosed),
    "data-test-subj": "collapseSideBarButton",
    "aria-controls": "discover-sidebar",
    "aria-expanded": isSidebarClosed ? 'false' : 'true',
    "aria-label": _kbn_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('discover.toggleSidebarAriaLabel', {
      defaultMessage: 'Toggle sidebar'
    }),
    buttonRef: collapseIcon
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    className: "dscPageContent__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiPageContent"], {
    verticalPosition: contentCentered ? 'center' : undefined,
    horizontalPosition: contentCentered ? 'center' : undefined,
    paddingSize: "none",
    hasShadow: false,
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('dscPageContent', {
      'dscPageContent--centered': contentCentered
    })
  }, resultState === 'none' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_no_results__WEBPACK_IMPORTED_MODULE_7__["DiscoverNoResults"], {
    timeFieldName: timeField,
    queryLanguage: (_state$query$language = (_state$query = state.query) === null || _state$query === void 0 ? void 0 : _state$query.language) !== null && _state$query$language !== void 0 ? _state$query$language : '',
    data: data,
    error: fetchState.fetchError
  }), resultState === 'uninitialized' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_uninitialized_uninitialized__WEBPACK_IMPORTED_MODULE_18__["DiscoverUninitialized"], {
    onRefresh: () => savedSearchRefetch$.next()
  }), resultState === 'loading' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_loading_spinner_loading_spinner__WEBPACK_IMPORTED_MODULE_8__["LoadingSpinner"], null), resultState === 'ready' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
    className: "dscPageContent__inner",
    direction: "column",
    alignItems: "stretch",
    gutterSize: "none",
    responsive: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DiscoverChartMemoized, {
    config: uiSettings,
    chartData: fetchState.chartData,
    bucketInterval: fetchState.bucketInterval,
    data: data,
    hits: fetchState.hits,
    indexPattern: indexPattern,
    isLegacy: isLegacy,
    state: state,
    resetSavedSearch: resetSavedSearch,
    savedSearch: savedSearch,
    stateContainer: stateContainer,
    timefield: timeField
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiHorizontalRule"], {
    margin: "none"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    className: "eui-yScroll"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "dscTable eui-yScroll eui-xScroll",
    "aria-labelledby": "documentsAriaLabel",
    ref: scrollableDesktop,
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "euiScreenReaderOnly",
    id: "documentsAriaLabel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "discover.documentsAriaLabel",
    defaultMessage: "Documents"
  })), isLegacy && rows && rows.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DocTableLegacyMemoized, {
    columns: columns,
    indexPattern: indexPattern,
    minimumVisibleRows: 50,
    rows: rows,
    sort: state.sort || [],
    searchDescription: savedSearch.description,
    searchTitle: savedSearch.lastSavedTitle,
    onAddColumn: onAddColumn,
    onBackToTop: onBackToTop,
    onFilter: onAddFilter,
    onMoveColumn: onMoveColumn,
    onRemoveColumn: onRemoveColumn,
    onSort: onSort,
    sampleSize: sampleSize,
    useNewFieldsApi: useNewFieldsApi
  }), !isLegacy && rows && rows.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "dscDiscoverGrid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DataGridMemoized, {
    ariaLabelledBy: "documentsAriaLabel",
    columns: columns,
    expandedDoc: expandedDoc,
    indexPattern: indexPattern,
    isLoading: fetchStatus === 'loading',
    rows: rows,
    sort: state.sort || [],
    sampleSize: sampleSize,
    searchDescription: savedSearch.description,
    searchTitle: savedSearch.lastSavedTitle,
    setExpandedDoc: setExpandedDoc,
    showTimeCol: showTimeCol,
    services: services,
    settings: state.grid,
    onAddColumn: onAddColumn,
    onFilter: onAddFilter,
    onRemoveColumn: onRemoveColumn,
    onSetColumns: onSetColumns,
    onSort: onSort,
    onResize: onResize,
    useNewFieldsApi: useNewFieldsApi
  })))))))))));
}

/***/ }),

/***/ "./public/application/apps/main/components/layout/index.ts":
/*!*****************************************************************!*\
  !*** ./public/application/apps/main/components/layout/index.ts ***!
  \*****************************************************************/
/*! exports provided: DiscoverLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _discover_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discover_layout */ "./public/application/apps/main/components/layout/discover_layout.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiscoverLayout", function() { return _discover_layout__WEBPACK_IMPORTED_MODULE_0__["DiscoverLayout"]; });

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


/***/ }),

/***/ "./public/application/apps/main/components/loading_spinner/loading_spinner.scss":
/*!**************************************************************************************!*\
  !*** ./public/application/apps/main/components/loading_spinner/loading_spinner.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__kbnThemeTag__) {
  case 'v7dark':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7dark]. Styles were compiled using the [v8dark] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7dark] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./loading_spinner.scss?v8dark */ "./public/application/apps/main/components/loading_spinner/loading_spinner.scss?v8dark")

  case 'v7light':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7light]. Styles were compiled using the [v8light] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7light] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./loading_spinner.scss?v8light */ "./public/application/apps/main/components/loading_spinner/loading_spinner.scss?v8light")

  case 'v8dark':
    return __webpack_require__(/*! ./loading_spinner.scss?v8dark */ "./public/application/apps/main/components/loading_spinner/loading_spinner.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./loading_spinner.scss?v8light */ "./public/application/apps/main/components/loading_spinner/loading_spinner.scss?v8light");
}

/***/ }),

/***/ "./public/application/apps/main/components/loading_spinner/loading_spinner.scss?v8dark":
/*!*********************************************************************************************!*\
  !*** ./public/application/apps/main/components/loading_spinner/loading_spinner.scss?v8dark ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-0-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./loading_spinner.scss?v8dark */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/loading_spinner/loading_spinner.scss?v8dark");

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

/***/ "./public/application/apps/main/components/loading_spinner/loading_spinner.scss?v8light":
/*!**********************************************************************************************!*\
  !*** ./public/application/apps/main/components/loading_spinner/loading_spinner.scss?v8light ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./loading_spinner.scss?v8light */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/loading_spinner/loading_spinner.scss?v8light");

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

/***/ "./public/application/apps/main/components/loading_spinner/loading_spinner.tsx":
/*!*************************************************************************************!*\
  !*** ./public/application/apps/main/components/loading_spinner/loading_spinner.tsx ***!
  \*************************************************************************************/
/*! exports provided: LoadingSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinner", function() { return LoadingSpinner; });
/* harmony import */ var _loading_spinner_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading_spinner.scss */ "./public/application/apps/main/components/loading_spinner/loading_spinner.scss");
/* harmony import */ var _loading_spinner_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_loading_spinner_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */




function LoadingSpinner() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "dscLoading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiTitle"], {
    size: "s",
    "data-test-subj": "loadingSpinnerText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "discover.searchingTitle",
    defaultMessage: "Searching"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiLoadingSpinner"], {
    size: "l",
    "data-test-subj": "loadingSpinner"
  }));
}

/***/ }),

/***/ "./public/application/apps/main/components/no_results/_no_results.scss":
/*!*****************************************************************************!*\
  !*** ./public/application/apps/main/components/no_results/_no_results.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__kbnThemeTag__) {
  case 'v7dark':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7dark]. Styles were compiled using the [v8dark] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7dark] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./_no_results.scss?v8dark */ "./public/application/apps/main/components/no_results/_no_results.scss?v8dark")

  case 'v7light':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7light]. Styles were compiled using the [v8light] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7light] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./_no_results.scss?v8light */ "./public/application/apps/main/components/no_results/_no_results.scss?v8light")

  case 'v8dark':
    return __webpack_require__(/*! ./_no_results.scss?v8dark */ "./public/application/apps/main/components/no_results/_no_results.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./_no_results.scss?v8light */ "./public/application/apps/main/components/no_results/_no_results.scss?v8light");
}

/***/ }),

/***/ "./public/application/apps/main/components/no_results/_no_results.scss?v8dark":
/*!************************************************************************************!*\
  !*** ./public/application/apps/main/components/no_results/_no_results.scss?v8dark ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-0-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./_no_results.scss?v8dark */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/no_results/_no_results.scss?v8dark");

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

/***/ "./public/application/apps/main/components/no_results/_no_results.scss?v8light":
/*!*************************************************************************************!*\
  !*** ./public/application/apps/main/components/no_results/_no_results.scss?v8light ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./_no_results.scss?v8light */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/no_results/_no_results.scss?v8light");

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

/***/ "./public/application/apps/main/components/no_results/index.ts":
/*!*********************************************************************!*\
  !*** ./public/application/apps/main/components/no_results/index.ts ***!
  \*********************************************************************/
/*! exports provided: DiscoverNoResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _no_results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./no_results */ "./public/application/apps/main/components/no_results/no_results.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiscoverNoResults", function() { return _no_results__WEBPACK_IMPORTED_MODULE_0__["DiscoverNoResults"]; });

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


/***/ }),

/***/ "./public/application/apps/main/components/no_results/no_results.tsx":
/*!***************************************************************************!*\
  !*** ./public/application/apps/main/components/no_results/no_results.tsx ***!
  \***************************************************************************/
/*! exports provided: DiscoverNoResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverNoResults", function() { return DiscoverNoResults; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kibana_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../kibana_services */ "./public/kibana_services.ts");
/* harmony import */ var _no_results_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./no_results_helper */ "./public/application/apps/main/components/no_results/no_results_helper.tsx");
/* harmony import */ var _no_results_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_no_results.scss */ "./public/application/apps/main/components/no_results/_no_results.scss");
/* harmony import */ var _no_results_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_no_results_scss__WEBPACK_IMPORTED_MODULE_5__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */






function DiscoverNoResults({
  timeFieldName,
  queryLanguage,
  error,
  data
}) {
  const callOut = !error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: false,
    className: "dscNoResults"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCallOut"], {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "discover.noResults.searchExamples.noResultsMatchSearchCriteriaTitle",
      defaultMessage: "No results match your search criteria"
    }),
    color: "warning",
    iconType: "help",
    "data-test-subj": "discoverNoResults"
  }), timeFieldName ? Object(_no_results_helper__WEBPACK_IMPORTED_MODULE_4__["getTimeFieldMessage"])() : null, queryLanguage === 'lucene' ? Object(_no_results_helper__WEBPACK_IMPORTED_MODULE_4__["getLuceneQueryMessage"])(Object(_kibana_services__WEBPACK_IMPORTED_MODULE_3__["getServices"])().docLinks.links.query.luceneQuerySyntax) : null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: true,
    className: "dscNoResults"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCallOut"], {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "discover.noResults.searchExamples.noResultsBecauseOfError",
      defaultMessage: "We encountered an error retrieving search results"
    }),
    color: "danger",
    iconType: "alert",
    "data-test-subj": "discoverNoResultsError"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButton"], {
    size: "s",
    color: "danger",
    onClick: () => data ? data.search.showError(error) : void 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "discover.showErrorMessageAgain",
    defaultMessage: "Show error message"
  }))));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
    justifyContent: "center"
  }, callOut));
}

/***/ }),

/***/ "./public/application/apps/main/components/no_results/no_results_helper.tsx":
/*!**********************************************************************************!*\
  !*** ./public/application/apps/main/components/no_results/no_results_helper.tsx ***!
  \**********************************************************************************/
/*! exports provided: getTimeFieldMessage, getLuceneQueryMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeFieldMessage", function() { return getTimeFieldMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLuceneQueryMessage", function() { return getLuceneQueryMessage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */



function getTimeFieldMessage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "xl"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    "data-test-subj": "discoverNoResultsTimefilter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "discover.noResults.expandYourTimeRangeTitle",
    defaultMessage: "Expand your time range"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "discover.noResults.queryMayNotMatchTitle",
    defaultMessage: "One or more of the indices you\u2019re looking at contains a date field. Your query may not match anything in the current time range, or there may not be any data at all in the currently selected time range. You can try changing the time range to one which contains data."
  }))));
}
function getLuceneQueryMessage(link) {
  const searchExamples = [{
    description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCode"], null, "200"),
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "discover.noResults.searchExamples.anyField200StatusCodeExampleTitle",
      defaultMessage: "Find requests that contain the number 200, in any field"
    })))
  }, {
    description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCode"], null, "status:200"),
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "discover.noResults.searchExamples.statusField200StatusCodeExampleTitle",
      defaultMessage: "Find 200 in the status field"
    })))
  }, {
    description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCode"], null, "status:[400 TO 499]"),
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "discover.noResults.searchExamples.400to499StatusCodeExampleTitle",
      defaultMessage: "Find all status codes between 400-499"
    })))
  }, {
    description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCode"], null, "status:[400 TO 499] AND extension:PHP"),
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "discover.noResults.searchExamples.400to499StatusCodeWithPhpExtensionExampleTitle",
      defaultMessage: "Find status codes 400-499 with the extension php"
    })))
  }, {
    description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCode"], null, "status:[400 TO 499] AND (extension:php OR extension:html)"),
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "discover.noResults.searchExamples.400to499StatusCodeWithPhpOrHtmlExtensionExampleTitle",
      defaultMessage: "Find status codes 400-499 with the extension php or html"
    })))
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "xl"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
    "data-test-subj": "discoverNoResultsLucene"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "discover.noResults.searchExamples.refineYourQueryTitle",
    defaultMessage: "Refine your query"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "discover.noResults.searchExamples.howTosearchForWebServerLogsDescription",
    defaultMessage: "The search bar at the top uses Elasticsearch\u2019s support for Lucene {queryStringSyntaxLink}. Here are some examples of how you can search for web server logs that have been parsed into a few fields.",
    values: {
      queryStringSyntaxLink: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiLink"], {
        target: "_blank",
        href: link
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
        id: "discover.noResults.searchExamples.queryStringSyntaxLinkText",
        defaultMessage: "Query String syntax"
      }))
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiDescriptionList"], {
    type: "column",
    listItems: searchExamples
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "xl"
  }));
}

/***/ }),

/***/ "./public/application/apps/main/components/sidebar/change_indexpattern.tsx":
/*!*********************************************************************************!*\
  !*** ./public/application/apps/main/components/sidebar/change_indexpattern.tsx ***!
  \*********************************************************************************/
/*! exports provided: ChangeIndexPattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeIndexPattern", function() { return ChangeIndexPattern; });
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */



// TODO: refactor to shared component with ../../../../../../../../x-pack/legacy/plugins/lens/public/indexpattern_plugin/change_indexpattern
function ChangeIndexPattern({
  indexPatternId,
  indexPatternRefs,
  onChangeIndexPattern,
  selectableProps,
  trigger
}) {
  const [isPopoverOpen, setPopoverIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const createTrigger = function () {
    const {
      label,
      title,
      ...rest
    } = trigger;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButton"], _extends({
      fullWidth: true,
      color: "text",
      iconSide: "right",
      iconType: "arrowDown",
      title: title,
      onClick: () => setPopoverIsOpen(!isPopoverOpen)
    }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, label));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiPopover"], {
    button: createTrigger(),
    isOpen: isPopoverOpen,
    closePopover: () => setPopoverIsOpen(false),
    display: "block",
    panelPaddingSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      width: 320
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiPopoverTitle"], null, _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.fieldChooser.indexPattern.changeIndexPatternTitle', {
    defaultMessage: 'Change index pattern'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSelectable"], _extends({
    "data-test-subj": "indexPattern-switcher"
  }, selectableProps, {
    searchable: true,
    singleSelection: "always",
    options: indexPatternRefs.map(({
      title,
      id
    }) => ({
      label: title,
      key: id,
      value: id,
      checked: id === indexPatternId ? 'on' : undefined
    })),
    onChange: choices => {
      const choice = choices.find(({
        checked
      }) => checked);

      if (choice.value !== indexPatternId) {
        onChangeIndexPattern(choice.value);
      }

      setPopoverIsOpen(false);
    },
    searchProps: {
      compressed: true,
      ...(selectableProps ? selectableProps.searchProps : undefined)
    }
  }), (list, search) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, search, list))));
}

/***/ }),

/***/ "./public/application/apps/main/components/sidebar/discover_field.scss":
/*!*****************************************************************************!*\
  !*** ./public/application/apps/main/components/sidebar/discover_field.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__kbnThemeTag__) {
  case 'v7dark':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7dark]. Styles were compiled using the [v8dark] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7dark] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./discover_field.scss?v8dark */ "./public/application/apps/main/components/sidebar/discover_field.scss?v8dark")

  case 'v7light':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7light]. Styles were compiled using the [v8light] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7light] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./discover_field.scss?v8light */ "./public/application/apps/main/components/sidebar/discover_field.scss?v8light")

  case 'v8dark':
    return __webpack_require__(/*! ./discover_field.scss?v8dark */ "./public/application/apps/main/components/sidebar/discover_field.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./discover_field.scss?v8light */ "./public/application/apps/main/components/sidebar/discover_field.scss?v8light");
}

/***/ }),

/***/ "./public/application/apps/main/components/sidebar/discover_field.scss?v8dark":
/*!************************************************************************************!*\
  !*** ./public/application/apps/main/components/sidebar/discover_field.scss?v8dark ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-0-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./discover_field.scss?v8dark */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/sidebar/discover_field.scss?v8dark");

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

/***/ "./public/application/apps/main/components/sidebar/discover_field.scss?v8light":
/*!*************************************************************************************!*\
  !*** ./public/application/apps/main/components/sidebar/discover_field.scss?v8light ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./discover_field.scss?v8light */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/sidebar/discover_field.scss?v8light");

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

/***/ "./public/application/apps/main/components/sidebar/discover_field.tsx":
/*!****************************************************************************!*\
  !*** ./public/application/apps/main/components/sidebar/discover_field.tsx ***!
  \****************************************************************************/
/*! exports provided: DiscoverField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverField", function() { return DiscoverField; });
/* harmony import */ var _discover_field_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discover_field.scss */ "./public/application/apps/main/components/sidebar/discover_field.scss");
/* harmony import */ var _discover_field_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_discover_field_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _discover_field_details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discover_field_details */ "./public/application/apps/main/components/sidebar/discover_field_details.tsx");
/* harmony import */ var _src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../src/plugins/kibana_react/public */ "plugin/kibanaReact/public");
/* harmony import */ var _src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_get_field_type_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/get_field_type_name */ "./public/application/apps/main/components/sidebar/lib/get_field_type_name.ts");
/* harmony import */ var _discover_field_visualize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./discover_field_visualize */ "./public/application/apps/main/components/sidebar/discover_field_visualize.tsx");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */










function wrapOnDot(str) {
  // u200B is a non-width white-space character, which allows
  // the browser to efficiently word-wrap right after the dot
  // without us having to draw a lot of extra DOM elements, etc
  return str ? str.replace(/\./g, '.\u200B') : '';
}

const FieldInfoIcon = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(() => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiToolTip"], {
  position: "bottom",
  content: _kbn_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('discover.field.mappingConflict', {
    defaultMessage: 'This field is defined as several types (string, integer, etc) across the indices that match this pattern.' + 'You may still be able to use this conflicting field, but it will be unavailable for functions that require Kibana to know their type. Correcting this issue will require reindexing your data.'
  })
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiIcon"], {
  tabIndex: 0,
  type: "alert",
  title: _kbn_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('discover.field.mappingConflict.title', {
    defaultMessage: 'Mapping Conflict'
  }),
  size: "s"
})));
const DiscoverFieldTypeIcon = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(({
  field
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_6__["FieldIcon"], {
  type: field.type,
  label: Object(_lib_get_field_type_name__WEBPACK_IMPORTED_MODULE_7__["getFieldTypeName"])(field.type),
  scripted: field.scripted
}));
const FieldName = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(({
  field
}) => {
  const title = field.displayName !== field.name ? _kbn_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('discover.field.title', {
    defaultMessage: '{fieldName} ({fieldDisplayName})',
    values: {
      fieldName: field.name,
      fieldDisplayName: field.displayName
    }
  }) : field.displayName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    "data-test-subj": `field-${field.name}`,
    title: title,
    className: "dscSidebarField__name"
  }, wrapOnDot(field.displayName));
});
const ActionButton = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(({
  field,
  isSelected,
  alwaysShow,
  toggleDisplay
}) => {
  const actionBtnClassName = classnames__WEBPACK_IMPORTED_MODULE_4___default()('dscSidebarItem__action', {
    ['dscSidebarItem__mobile']: alwaysShow
  });

  if (field.name === '_source') {
    return null;
  }

  if (!isSelected) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiToolTip"], {
      delay: "long",
      content: _kbn_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('discover.fieldChooser.discoverField.addFieldTooltip', {
        defaultMessage: 'Add field as column'
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButtonIcon"], {
      iconType: "plusInCircleFilled",
      className: actionBtnClassName,
      onClick: ev => {
        if (ev.type === 'click') {
          ev.currentTarget.focus();
        }

        ev.preventDefault();
        ev.stopPropagation();
        toggleDisplay(field);
      },
      "data-test-subj": `fieldToggle-${field.name}`,
      "aria-label": _kbn_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('discover.fieldChooser.discoverField.addButtonAriaLabel', {
        defaultMessage: 'Add {field} to table',
        values: {
          field: field.name
        }
      })
    }));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiToolTip"], {
      delay: "long",
      content: _kbn_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('discover.fieldChooser.discoverField.removeFieldTooltip', {
        defaultMessage: 'Remove field from table'
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButtonIcon"], {
      color: "danger",
      iconType: "cross",
      className: actionBtnClassName,
      onClick: ev => {
        if (ev.type === 'click') {
          ev.currentTarget.focus();
        }

        ev.preventDefault();
        ev.stopPropagation();
        toggleDisplay(field);
      },
      "data-test-subj": `fieldToggle-${field.name}`,
      "aria-label": _kbn_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('discover.fieldChooser.discoverField.removeButtonAriaLabel', {
        defaultMessage: 'Remove {field} from table',
        values: {
          field: field.name
        }
      })
    }));
  }
});
const MultiFields = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(({
  multiFields,
  toggleDisplay,
  alwaysShowActionButton
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiTitle"], {
  size: "xxxs"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, _kbn_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('discover.fieldChooser.discoverField.multiFields', {
  defaultMessage: 'Multi fields'
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
  size: "xs"
}), multiFields.map(entry => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_6__["FieldButton"], {
  size: "s",
  className: "dscSidebarItem dscSidebarItem--multi",
  isActive: false,
  dataTestSubj: `field-${entry.field.name}-showDetails`,
  fieldIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DiscoverFieldTypeIcon, {
    field: entry.field
  }),
  fieldAction: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ActionButton, {
    field: entry.field,
    isSelected: entry.isSelected,
    alwaysShow: alwaysShowActionButton,
    toggleDisplay: toggleDisplay
  }),
  fieldName: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldName, {
    field: entry.field
  }),
  key: entry.field.name
}))));

function DiscoverFieldComponent({
  alwaysShowActionButton = false,
  field,
  indexPattern,
  onAddField,
  onRemoveField,
  onAddFilter,
  getDetails,
  selected,
  trackUiMetric,
  multiFields,
  onEditField,
  onDeleteField
}) {
  var _indexPattern$getFiel;

  const [infoIsOpen, setOpen] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const toggleDisplay = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(f => {
    if (selected) {
      onRemoveField(f.name);
    } else {
      onAddField(f.name);
    }
  }, [onAddField, onRemoveField, selected]);
  const togglePopover = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    setOpen(!infoIsOpen);
  }, [infoIsOpen]);
  const rawMultiFields = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => multiFields === null || multiFields === void 0 ? void 0 : multiFields.map(f => f.field), [multiFields]);

  if (field.type === '_source') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_6__["FieldButton"], {
      size: "s",
      className: "dscSidebarItem",
      dataTestSubj: `field-${field.name}-showDetails`,
      fieldIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DiscoverFieldTypeIcon, {
        field: field
      }),
      fieldAction: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ActionButton, {
        field: field,
        isSelected: selected,
        alwaysShow: alwaysShowActionButton,
        toggleDisplay: toggleDisplay
      }),
      fieldName: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldName, {
        field: field
      })
    });
  }

  const isRuntimeField = Boolean((_indexPattern$getFiel = indexPattern.getFieldByName(field.name)) === null || _indexPattern$getFiel === void 0 ? void 0 : _indexPattern$getFiel.runtimeField);
  const isUnknownField = field.type === 'unknown' || field.type === 'unknown_selected';
  const canEditField = onEditField && (!isUnknownField || isRuntimeField);
  const canDeleteField = onDeleteField && isRuntimeField;
  const popoverTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiPopoverTitle"], {
    style: {
      textTransform: 'none'
    },
    className: "eui-textBreakWord"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
    responsive: false,
    gutterSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, field.displayName)), canEditField && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: false,
    "data-test-subj": "discoverFieldListPanelEditItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButtonIcon"], {
    onClick: () => {
      if (onEditField) {
        togglePopover();
        onEditField(field.name);
      }
    },
    iconType: "pencil",
    "data-test-subj": `discoverFieldListPanelEdit-${field.name}`,
    "aria-label": _kbn_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('discover.fieldChooser.discoverField.editFieldLabel', {
      defaultMessage: 'Edit index pattern field'
    })
  })), canDeleteField && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: false,
    "data-test-subj": "discoverFieldListPanelDeleteItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiToolTip"], {
    content: _kbn_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('discover.fieldChooser.discoverField.deleteFieldLabel', {
      defaultMessage: 'Delete index pattern field'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButtonIcon"], {
    onClick: () => {
      onDeleteField === null || onDeleteField === void 0 ? void 0 : onDeleteField(field.name);
    },
    iconType: "trash",
    "data-test-subj": `discoverFieldListPanelDelete-${field.name}`,
    color: "danger",
    "aria-label": _kbn_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('discover.fieldChooser.discoverField.deleteFieldLabel', {
      defaultMessage: 'Delete index pattern field'
    })
  })))));

  const renderPopover = () => {
    const details = getDetails(field);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_discover_field_details__WEBPACK_IMPORTED_MODULE_5__["DiscoverFieldDetails"], {
      indexPattern: indexPattern,
      field: field,
      details: details,
      onAddFilter: onAddFilter
    }), multiFields && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
      size: "m"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MultiFields, {
      multiFields: multiFields,
      alwaysShowActionButton: alwaysShowActionButton,
      toggleDisplay: toggleDisplay
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_discover_field_visualize__WEBPACK_IMPORTED_MODULE_8__["DiscoverFieldVisualize"], {
      field: field,
      indexPattern: indexPattern,
      multiFields: rawMultiFields,
      trackUiMetric: trackUiMetric,
      details: details
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiPopover"], {
    display: "block",
    button: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_6__["FieldButton"], {
      size: "s",
      className: "dscSidebarItem",
      isActive: infoIsOpen,
      onClick: togglePopover,
      dataTestSubj: `field-${field.name}-showDetails`,
      fieldIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DiscoverFieldTypeIcon, {
        field: field
      }),
      fieldAction: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ActionButton, {
        field: field,
        isSelected: selected,
        alwaysShow: alwaysShowActionButton,
        toggleDisplay: toggleDisplay
      }),
      fieldName: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldName, {
        field: field
      }),
      fieldInfoIcon: field.type === 'conflict' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldInfoIcon, null)
    }),
    isOpen: infoIsOpen,
    closePopover: () => setOpen(false),
    anchorPosition: "rightUp",
    panelClassName: "dscSidebarItem__fieldPopoverPanel"
  }, popoverTitle, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiTitle"], {
    size: "xxxs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, _kbn_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('discover.fieldChooser.discoverField.fieldTopValuesLabel', {
    defaultMessage: 'Top 5 values'
  }))), infoIsOpen && renderPopover());
}

const DiscoverField = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(DiscoverFieldComponent);

/***/ }),

/***/ "./public/application/apps/main/components/sidebar/discover_field_bucket.scss":
/*!************************************************************************************!*\
  !*** ./public/application/apps/main/components/sidebar/discover_field_bucket.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__kbnThemeTag__) {
  case 'v7dark':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7dark]. Styles were compiled using the [v8dark] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7dark] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./discover_field_bucket.scss?v8dark */ "./public/application/apps/main/components/sidebar/discover_field_bucket.scss?v8dark")

  case 'v7light':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7light]. Styles were compiled using the [v8light] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7light] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./discover_field_bucket.scss?v8light */ "./public/application/apps/main/components/sidebar/discover_field_bucket.scss?v8light")

  case 'v8dark':
    return __webpack_require__(/*! ./discover_field_bucket.scss?v8dark */ "./public/application/apps/main/components/sidebar/discover_field_bucket.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./discover_field_bucket.scss?v8light */ "./public/application/apps/main/components/sidebar/discover_field_bucket.scss?v8light");
}

/***/ }),

/***/ "./public/application/apps/main/components/sidebar/discover_field_bucket.scss?v8dark":
/*!*******************************************************************************************!*\
  !*** ./public/application/apps/main/components/sidebar/discover_field_bucket.scss?v8dark ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-0-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./discover_field_bucket.scss?v8dark */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/sidebar/discover_field_bucket.scss?v8dark");

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

/***/ "./public/application/apps/main/components/sidebar/discover_field_bucket.scss?v8light":
/*!********************************************************************************************!*\
  !*** ./public/application/apps/main/components/sidebar/discover_field_bucket.scss?v8light ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./discover_field_bucket.scss?v8light */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/sidebar/discover_field_bucket.scss?v8light");

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

/***/ "./public/application/apps/main/components/sidebar/discover_field_bucket.tsx":
/*!***********************************************************************************!*\
  !*** ./public/application/apps/main/components/sidebar/discover_field_bucket.tsx ***!
  \***********************************************************************************/
/*! exports provided: DiscoverFieldBucket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverFieldBucket", function() { return DiscoverFieldBucket; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _string_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./string_progress_bar */ "./public/application/apps/main/components/sidebar/string_progress_bar.tsx");
/* harmony import */ var _discover_field_bucket_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./discover_field_bucket.scss */ "./public/application/apps/main/components/sidebar/discover_field_bucket.scss");
/* harmony import */ var _discover_field_bucket_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_discover_field_bucket_scss__WEBPACK_IMPORTED_MODULE_4__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */





function DiscoverFieldBucket({
  field,
  bucket,
  onAddFilter
}) {
  const emptyTxt = _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.fieldChooser.detailViews.emptyStringText', {
    defaultMessage: 'Empty string'
  });
  const addLabel = _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.fieldChooser.detailViews.filterValueButtonAriaLabel', {
    defaultMessage: 'Filter for {field}: "{value}"',
    values: {
      value: bucket.value,
      field: field.name
    }
  });
  const removeLabel = _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.fieldChooser.detailViews.filterOutValueButtonAriaLabel', {
    defaultMessage: 'Filter out {field}: "{value}"',
    values: {
      value: bucket.value,
      field: field.name
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    justifyContent: "spaceBetween",
    responsive: false,
    gutterSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    className: "dscFieldDetails__barContainer",
    grow: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    justifyContent: "spaceBetween",
    gutterSize: "xs",
    responsive: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: 1,
    className: "eui-textTruncate"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
    title: bucket.display === '' ? emptyTxt : `${bucket.display}: ${bucket.count} (${bucket.percent}%)`,
    size: "xs",
    className: "eui-textTruncate"
  }, bucket.display === '' ? emptyTxt : bucket.display)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false,
    className: "eui-textTruncate"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
    color: "secondary",
    size: "xs",
    className: "eui-textTruncate"
  }, bucket.percent, "%"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_string_progress_bar__WEBPACK_IMPORTED_MODULE_3__["StringFieldProgressBar"], {
    value: bucket.value,
    percent: bucket.percent,
    count: bucket.count
  })), field.filterable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButtonIcon"], {
    iconSize: "s",
    iconType: "plusInCircle",
    onClick: () => onAddFilter(field, bucket.value, '+'),
    "aria-label": addLabel,
    "data-test-subj": `plus-${field.name}-${bucket.value}`,
    style: {
      minHeight: 'auto',
      minWidth: 'auto',
      paddingRight: 2,
      paddingLeft: 2,
      paddingTop: 0,
      paddingBottom: 0
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButtonIcon"], {
    iconSize: "s",
    iconType: "minusInCircle",
    onClick: () => onAddFilter(field, bucket.value, '-'),
    "aria-label": removeLabel,
    "data-test-subj": `minus-${field.name}-${bucket.value}`,
    style: {
      minHeight: 'auto',
      minWidth: 'auto',
      paddingTop: 0,
      paddingBottom: 0,
      paddingRight: 2,
      paddingLeft: 2
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }));
}

/***/ }),

/***/ "./public/application/apps/main/components/sidebar/discover_field_details.tsx":
/*!************************************************************************************!*\
  !*** ./public/application/apps/main/components/sidebar/discover_field_details.tsx ***!
  \************************************************************************************/
/*! exports provided: DiscoverFieldDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverFieldDetails", function() { return DiscoverFieldDetails; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _discover_field_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./discover_field_bucket */ "./public/application/apps/main/components/sidebar/discover_field_bucket.tsx");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */




function DiscoverFieldDetails({
  field,
  indexPattern,
  details,
  onAddFilter
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, details.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
    size: "xs"
  }, details.error), !details.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginTop: '4px'
    }
  }, details.buckets.map((bucket, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_discover_field_bucket__WEBPACK_IMPORTED_MODULE_3__["DiscoverFieldBucket"], {
    key: `bucket${idx}`,
    bucket: bucket,
    field: field,
    onAddFilter: onAddFilter
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "xs"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
    size: "xs"
  }, !indexPattern.metaFields.includes(field.name) && !field.scripted ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiLink"], {
    onClick: () => onAddFilter('_exists_', field.name, '+'),
    "data-test-subj": "onAddFilterButton"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "discover.fieldChooser.detailViews.existsInRecordsText",
    defaultMessage: "Exists in {value} / {totalValue} records",
    values: {
      value: details.exists,
      totalValue: details.total
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "discover.fieldChooser.detailViews.valueOfRecordsText",
    defaultMessage: "{value} / {totalValue} records",
    values: {
      value: details.exists,
      totalValue: details.total
    }
  }))));
}

/***/ }),

/***/ "./public/application/apps/main/components/sidebar/discover_field_search.scss":
/*!************************************************************************************!*\
  !*** ./public/application/apps/main/components/sidebar/discover_field_search.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__kbnThemeTag__) {
  case 'v7dark':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7dark]. Styles were compiled using the [v8dark] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7dark] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./discover_field_search.scss?v8dark */ "./public/application/apps/main/components/sidebar/discover_field_search.scss?v8dark")

  case 'v7light':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7light]. Styles were compiled using the [v8light] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7light] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./discover_field_search.scss?v8light */ "./public/application/apps/main/components/sidebar/discover_field_search.scss?v8light")

  case 'v8dark':
    return __webpack_require__(/*! ./discover_field_search.scss?v8dark */ "./public/application/apps/main/components/sidebar/discover_field_search.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./discover_field_search.scss?v8light */ "./public/application/apps/main/components/sidebar/discover_field_search.scss?v8light");
}

/***/ }),

/***/ "./public/application/apps/main/components/sidebar/discover_field_search.scss?v8dark":
/*!*******************************************************************************************!*\
  !*** ./public/application/apps/main/components/sidebar/discover_field_search.scss?v8dark ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-0-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./discover_field_search.scss?v8dark */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/sidebar/discover_field_search.scss?v8dark");

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

/***/ "./public/application/apps/main/components/sidebar/discover_field_search.scss?v8light":
/*!********************************************************************************************!*\
  !*** ./public/application/apps/main/components/sidebar/discover_field_search.scss?v8light ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./discover_field_search.scss?v8light */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/sidebar/discover_field_search.scss?v8light");

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

/***/ "./public/application/apps/main/components/sidebar/discover_field_search.tsx":
/*!***********************************************************************************!*\
  !*** ./public/application/apps/main/components/sidebar/discover_field_search.tsx ***!
  \***********************************************************************************/
/*! exports provided: DiscoverFieldSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverFieldSearch", function() { return DiscoverFieldSearch; });
/* harmony import */ var _discover_field_search_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discover_field_search.scss */ "./public/application/apps/main/components/sidebar/discover_field_search.scss");
/* harmony import */ var _discover_field_search_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_discover_field_search_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_4__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */






/**
 * Component is Discover's side bar to  search of available fields
 * Additionally there's a button displayed that allows the user to show/hide more filter fields
 */
function DiscoverFieldSearch({
  onChange,
  value,
  types,
  useNewFieldsApi
}) {
  const searchPlaceholder = _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.fieldChooser.searchPlaceHolder', {
    defaultMessage: 'Search field names'
  });
  const aggregatableLabel = _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.fieldChooser.filter.aggregatableLabel', {
    defaultMessage: 'Aggregatable'
  });
  const searchableLabel = _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.fieldChooser.filter.searchableLabel', {
    defaultMessage: 'Searchable'
  });
  const typeLabel = _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.fieldChooser.filter.typeLabel', {
    defaultMessage: 'Type'
  });
  const typeOptions = types ? types.map(type => {
    return {
      value: type,
      text: type
    };
  }) : [{
    value: 'any',
    text: 'any'
  }];
  const [activeFiltersCount, setActiveFiltersCount] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const [isPopoverOpen, setPopoverOpen] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [values, setValues] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    searchable: 'any',
    aggregatable: 'any',
    type: 'any',
    missing: true
  });

  if (typeof value !== 'string') {
    // at initial rendering value is undefined (angular related), this catches the warning
    // should be removed once all is react
    return null;
  }

  const filterBtnAriaLabel = isPopoverOpen ? _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.fieldChooser.toggleFieldFilterButtonHideAriaLabel', {
    defaultMessage: 'Hide field filter settings'
  }) : _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.fieldChooser.toggleFieldFilterButtonShowAriaLabel', {
    defaultMessage: 'Show field filter settings'
  });

  const handleFilterButtonClicked = () => {
    setPopoverOpen(!isPopoverOpen);
  };

  const applyFilterValue = (id, filterValue) => {
    switch (filterValue) {
      case 'any':
        if (id !== 'type') {
          onChange(id, undefined);
        } else {
          onChange(id, filterValue);
        }

        break;

      case 'true':
        onChange(id, true);
        break;

      case 'false':
        onChange(id, false);
        break;

      default:
        onChange(id, filterValue);
    }
  };

  const isFilterActive = (name, filterValue) => {
    return name !== 'missing' && filterValue !== 'any';
  };

  const handleValueChange = (name, filterValue) => {
    const previousValue = values[name];
    updateFilterCount(name, previousValue, filterValue);
    const updatedValues = { ...values
    };
    updatedValues[name] = filterValue;
    setValues(updatedValues);
    applyFilterValue(name, filterValue);
  };

  const updateFilterCount = (name, previousValue, currentValue) => {
    const previouslyFilterActive = isFilterActive(name, previousValue);
    const filterActive = isFilterActive(name, currentValue);
    const diff = Number(filterActive) - Number(previouslyFilterActive);
    setActiveFiltersCount(activeFiltersCount + diff);
  };

  const handleMissingChange = e => {
    const missingValue = e.target.checked;
    handleValueChange('missing', missingValue);
  };

  const buttonContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFilterButton"], {
    "aria-label": filterBtnAriaLabel,
    "data-test-subj": "toggleFieldFilterButton",
    iconType: "arrowDown",
    isSelected: activeFiltersCount > 0,
    numFilters: 0,
    hasActiveFilters: activeFiltersCount > 0,
    numActiveFilters: activeFiltersCount,
    onClick: handleFilterButtonClicked
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "discover.fieldChooser.fieldFilterButtonLabel",
    defaultMessage: "Filter by type"
  }));

  const select = (id, selectOptions, selectValue) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSelect"], {
      id: `${id}-select`,
      options: selectOptions,
      value: selectValue,
      onChange: e => handleValueChange(id, e.target.value),
      "aria-label": _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.fieldChooser.filter.fieldSelectorLabel', {
        defaultMessage: 'Selection of {id} filter options',
        values: {
          id
        }
      }),
      "data-test-subj": `${id}Select`,
      compressed: true
    });
  };

  const toggleButtons = id => {
    return [{
      id: `${id}-any`,
      label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.fieldChooser.filter.toggleButton.any', {
        defaultMessage: 'any'
      })
    }, {
      id: `${id}-true`,
      label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.fieldChooser.filter.toggleButton.yes', {
        defaultMessage: 'yes'
      })
    }, {
      id: `${id}-false`,
      label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.fieldChooser.filter.toggleButton.no', {
        defaultMessage: 'no'
      })
    }];
  };

  const buttonGroup = (id, legend) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiButtonGroup"], {
      legend: legend,
      options: toggleButtons(id),
      idSelected: `${id}-${values[id]}`,
      onChange: optionId => handleValueChange(id, optionId.replace(`${id}-`, '')),
      buttonSize: "compressed",
      isFullWidth: true,
      "data-test-subj": `${id}ButtonGroup`
    });
  };

  const footer = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiPopoverFooter"], {
      paddingSize: "s"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSwitch"], {
      label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.fieldChooser.filter.hideMissingFieldsLabel', {
        defaultMessage: 'Hide missing fields'
      }),
      checked: values.missing,
      onChange: handleMissingChange,
      "data-test-subj": "missingSwitch"
    }));
  };

  const selectionPanel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "dscFieldSearch__formWrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiForm"], {
    "data-test-subj": "filterSelectionPanel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFormRow"], {
    fullWidth: true,
    label: aggregatableLabel,
    display: "columnCompressed"
  }, buttonGroup('aggregatable', aggregatableLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFormRow"], {
    fullWidth: true,
    label: searchableLabel,
    display: "columnCompressed"
  }, buttonGroup('searchable', searchableLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFormRow"], {
    fullWidth: true,
    label: typeLabel,
    display: "columnCompressed"
  }, select('type', typeOptions, values.type))));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexGroup"], {
    responsive: false,
    gutterSize: 's'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFieldSearch"], {
    "aria-label": searchPlaceholder,
    "data-test-subj": "fieldFilterSearchInput",
    fullWidth: true,
    onChange: event => onChange('name', event.currentTarget.value),
    placeholder: searchPlaceholder,
    value: value
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSpacer"], {
    size: "xs"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiOutsideClickDetector"], {
    onOutsideClick: () => {},
    isDisabled: !isPopoverOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFilterGroup"], {
    className: "dscFieldSearch__filterWrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiPopover"], {
    id: "dataPanelTypeFilter",
    panelClassName: "euiFilterGroup__popoverPanel",
    panelPaddingSize: "none",
    anchorPosition: "rightUp",
    display: "block",
    isOpen: isPopoverOpen,
    closePopover: () => {
      setPopoverOpen(false);
    },
    button: buttonContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiPopoverTitle"], {
    paddingSize: "s"
  }, _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.fieldChooser.filter.filterByTypeLabel', {
    defaultMessage: 'Filter by type'
  })), selectionPanel, footer()))));
}

/***/ }),

/***/ "./public/application/apps/main/components/sidebar/discover_field_visualize.tsx":
/*!**************************************************************************************!*\
  !*** ./public/application/apps/main/components/sidebar/discover_field_visualize.tsx ***!
  \**************************************************************************************/
/*! exports provided: DiscoverFieldVisualize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverFieldVisualize", function() { return DiscoverFieldVisualize; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kbn_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kbn/analytics */ "@kbn/analytics");
/* harmony import */ var _kbn_analytics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_kbn_analytics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_visualize_trigger_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/visualize_trigger_utils */ "./public/application/apps/main/components/sidebar/lib/visualize_trigger_utils.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */






const DiscoverFieldVisualize = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  field,
  indexPattern,
  details,
  trackUiMetric,
  multiFields
}) => {
  const [visualizeInfo, setVisualizeInfo] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object(_lib_visualize_trigger_utils__WEBPACK_IMPORTED_MODULE_4__["getVisualizeInformation"])(field, indexPattern.id, details.columns, multiFields).then(setVisualizeInfo);
  }, [details.columns, field, indexPattern, multiFields]);

  if (!visualizeInfo) {
    return null;
  }

  const handleVisualizeLinkClick = event => {
    // regular link click. let the uiActions code handle the navigation and show popup if needed
    event.preventDefault();
    trackUiMetric === null || trackUiMetric === void 0 ? void 0 : trackUiMetric(_kbn_analytics__WEBPACK_IMPORTED_MODULE_3__["METRIC_TYPE"].CLICK, 'visualize_link_click');
    Object(_lib_visualize_trigger_utils__WEBPACK_IMPORTED_MODULE_4__["triggerVisualizeActions"])(visualizeInfo.field, indexPattern.id, details.columns);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPopoverFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButton"], {
    fullWidth: true,
    size: "s",
    href: visualizeInfo.href,
    onClick: handleVisualizeLinkClick,
    "data-test-subj": `fieldVisualize-${field.name}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "discover.fieldChooser.visualizeButton.label",
    defaultMessage: "Visualize"
  })));
});

/***/ }),

/***/ "./public/application/apps/main/components/sidebar/discover_index_pattern.tsx":
/*!************************************************************************************!*\
  !*** ./public/application/apps/main/components/sidebar/discover_index_pattern.tsx ***!
  \************************************************************************************/
/*! exports provided: DiscoverIndexPattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverIndexPattern", function() { return DiscoverIndexPattern; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _change_indexpattern__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change_indexpattern */ "./public/application/apps/main/components/sidebar/change_indexpattern.tsx");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */




/**
 * Component allows you to select an index pattern in discovers side bar
 */
function DiscoverIndexPattern({
  indexPatternList,
  onChangeIndexPattern,
  selectedIndexPattern
}) {
  const options = (indexPatternList || []).map(entity => ({
    id: entity.id,
    title: entity.attributes.title
  }));
  const {
    id: selectedId,
    title: selectedTitle
  } = selectedIndexPattern || {};
  const [selected, setSelected] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    id: selectedId,
    title: selectedTitle || ''
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const {
      id,
      title
    } = selectedIndexPattern;
    setSelected({
      id,
      title
    });
  }, [selectedIndexPattern]);

  if (!selectedId) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["I18nProvider"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_change_indexpattern__WEBPACK_IMPORTED_MODULE_2__["ChangeIndexPattern"], {
    trigger: {
      label: selected.title,
      title: selected.title,
      'data-test-subj': 'indexPattern-switch-link'
    },
    indexPatternId: selected.id,
    indexPatternRefs: options,
    onChangeIndexPattern: id => {
      const indexPattern = options.find(pattern => pattern.id === id);

      if (indexPattern) {
        onChangeIndexPattern(id);
        setSelected(indexPattern);
      }
    }
  }));
}

/***/ }),

/***/ "./public/application/apps/main/components/sidebar/discover_index_pattern_management.tsx":
/*!***********************************************************************************************!*\
  !*** ./public/application/apps/main/components/sidebar/discover_index_pattern_management.tsx ***!
  \***********************************************************************************************/
/*! exports provided: DiscoverIndexPatternManagement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverIndexPatternManagement", function() { return DiscoverIndexPatternManagement; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */



function DiscoverIndexPatternManagement(props) {
  const {
    indexPatternFieldEditor,
    core
  } = props.services;
  const {
    useNewFieldsApi,
    selectedIndexPattern,
    editField
  } = props;
  const indexPatternFieldEditPermission = indexPatternFieldEditor === null || indexPatternFieldEditor === void 0 ? void 0 : indexPatternFieldEditor.userPermissions.editIndexPattern();
  const canEditIndexPatternField = !!indexPatternFieldEditPermission && useNewFieldsApi;
  const [isAddIndexPatternFieldPopoverOpen, setIsAddIndexPatternFieldPopoverOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  if (!useNewFieldsApi || !selectedIndexPattern || !canEditIndexPatternField) {
    return null;
  }

  const addField = () => {
    editField(undefined);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPopover"], {
    panelPaddingSize: "s",
    isOpen: isAddIndexPatternFieldPopoverOpen,
    closePopover: () => {
      setIsAddIndexPatternFieldPopoverOpen(false);
    },
    ownFocus: true,
    "data-test-subj": "discover-addRuntimeField-popover",
    button: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButtonIcon"], {
      color: "text",
      iconType: "boxesHorizontal",
      "data-test-subj": "discoverIndexPatternActions",
      "aria-label": _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.fieldChooser.indexPatterns.actionsPopoverLabel', {
        defaultMessage: 'Index pattern settings'
      }),
      onClick: () => {
        setIsAddIndexPatternFieldPopoverOpen(!isAddIndexPatternFieldPopoverOpen);
      }
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiContextMenuPanel"], {
    size: "s",
    items: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiContextMenuItem"], {
      key: "add",
      icon: "indexOpen",
      "data-test-subj": "indexPattern-add-field",
      onClick: () => {
        setIsAddIndexPatternFieldPopoverOpen(false);
        addField();
      }
    }, _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.fieldChooser.indexPatterns.addFieldButton', {
      defaultMessage: 'Add field to index pattern'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiContextMenuItem"], {
      key: "manage",
      icon: "indexSettings",
      "data-test-subj": "indexPattern-manage-field",
      onClick: () => {
        var _props$selectedIndexP;

        setIsAddIndexPatternFieldPopoverOpen(false);
        core.application.navigateToApp('management', {
          path: `/kibana/indexPatterns/patterns/${(_props$selectedIndexP = props.selectedIndexPattern) === null || _props$selectedIndexP === void 0 ? void 0 : _props$selectedIndexP.id}`
        });
      }
    }, _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.fieldChooser.indexPatterns.manageFieldButton', {
      defaultMessage: 'Manage index pattern fields'
    }))]
  }));
}

/***/ }),

/***/ "./public/application/apps/main/components/sidebar/discover_sidebar.scss":
/*!*******************************************************************************!*\
  !*** ./public/application/apps/main/components/sidebar/discover_sidebar.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__kbnThemeTag__) {
  case 'v7dark':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7dark]. Styles were compiled using the [v8dark] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7dark] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./discover_sidebar.scss?v8dark */ "./public/application/apps/main/components/sidebar/discover_sidebar.scss?v8dark")

  case 'v7light':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7light]. Styles were compiled using the [v8light] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7light] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./discover_sidebar.scss?v8light */ "./public/application/apps/main/components/sidebar/discover_sidebar.scss?v8light")

  case 'v8dark':
    return __webpack_require__(/*! ./discover_sidebar.scss?v8dark */ "./public/application/apps/main/components/sidebar/discover_sidebar.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./discover_sidebar.scss?v8light */ "./public/application/apps/main/components/sidebar/discover_sidebar.scss?v8light");
}

/***/ }),

/***/ "./public/application/apps/main/components/sidebar/discover_sidebar.scss?v8dark":
/*!**************************************************************************************!*\
  !*** ./public/application/apps/main/components/sidebar/discover_sidebar.scss?v8dark ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-0-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./discover_sidebar.scss?v8dark */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/sidebar/discover_sidebar.scss?v8dark");

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

/***/ "./public/application/apps/main/components/sidebar/discover_sidebar.scss?v8light":
/*!***************************************************************************************!*\
  !*** ./public/application/apps/main/components/sidebar/discover_sidebar.scss?v8light ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./discover_sidebar.scss?v8light */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/sidebar/discover_sidebar.scss?v8light");

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

/***/ "./public/application/apps/main/components/sidebar/discover_sidebar.tsx":
/*!******************************************************************************!*\
  !*** ./public/application/apps/main/components/sidebar/discover_sidebar.tsx ***!
  \******************************************************************************/
/*! exports provided: DiscoverSidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverSidebar", function() { return DiscoverSidebar; });
/* harmony import */ var _discover_sidebar_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discover_sidebar.scss */ "./public/application/apps/main/components/sidebar/discover_sidebar.scss");
/* harmony import */ var _discover_sidebar_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_discover_sidebar_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_use_lib_useShallowCompareEffect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-use/lib/useShallowCompareEffect */ "../../node_modules/react-use/lib/useShallowCompareEffect.js");
/* harmony import */ var react_use_lib_useShallowCompareEffect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_use_lib_useShallowCompareEffect__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _discover_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./discover_field */ "./public/application/apps/main/components/sidebar/discover_field.tsx");
/* harmony import */ var _discover_index_pattern__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./discover_index_pattern */ "./public/application/apps/main/components/sidebar/discover_index_pattern.tsx");
/* harmony import */ var _discover_field_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./discover_field_search */ "./public/application/apps/main/components/sidebar/discover_field_search.tsx");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common */ "./common/index.ts");
/* harmony import */ var _lib_group_fields__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/group_fields */ "./public/application/apps/main/components/sidebar/lib/group_fields.tsx");
/* harmony import */ var _lib_get_details__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/get_details */ "./public/application/apps/main/components/sidebar/lib/get_details.ts");
/* harmony import */ var _lib_field_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/field_filter */ "./public/application/apps/main/components/sidebar/lib/field_filter.ts");
/* harmony import */ var _lib_get_index_pattern_field_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/get_index_pattern_field_list */ "./public/application/apps/main/components/sidebar/lib/get_index_pattern_field_list.ts");
/* harmony import */ var _discover_index_pattern_management__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./discover_index_pattern_management */ "./public/application/apps/main/components/sidebar/discover_index_pattern_management.tsx");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

















/**
 * Default number of available fields displayed and added on scroll
 */

const FIELDS_PER_PAGE = 50;
function DiscoverSidebar({
  alwaysShowActionButtons = false,
  columns,
  fieldCounts,
  fieldFilter,
  hits,
  indexPatternList,
  onAddField,
  onAddFilter,
  onRemoveField,
  selectedIndexPattern,
  services,
  setFieldFilter,
  trackUiMetric,
  useNewFieldsApi = false,
  useFlyout = false,
  onEditRuntimeField,
  onChangeIndexPattern,
  setFieldEditorRef,
  closeFlyout,
  editField
}) {
  const [fields, setFields] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const {
    indexPatternFieldEditor
  } = services;
  const indexPatternFieldEditPermission = indexPatternFieldEditor === null || indexPatternFieldEditor === void 0 ? void 0 : indexPatternFieldEditor.userPermissions.editIndexPattern();
  const canEditIndexPatternField = !!indexPatternFieldEditPermission && useNewFieldsApi;
  const [scrollContainer, setScrollContainer] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const [fieldsToRender, setFieldsToRender] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(FIELDS_PER_PAGE);
  const [fieldsPerPage, setFieldsPerPage] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(FIELDS_PER_PAGE);
  const availableFieldsContainer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const newFields = Object(_lib_get_index_pattern_field_list__WEBPACK_IMPORTED_MODULE_14__["getIndexPatternFieldList"])(selectedIndexPattern, fieldCounts);
    setFields(newFields);
  }, [selectedIndexPattern, fieldCounts, hits]);
  const scrollDimensions = Object(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["useResizeObserver"])(scrollContainer);
  const onChangeFieldSearch = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])((field, value) => {
    const newState = Object(_lib_field_filter__WEBPACK_IMPORTED_MODULE_13__["setFieldFilterProp"])(fieldFilter, field, value);
    setFieldFilter(newState);
    setFieldsToRender(fieldsPerPage);
  }, [fieldFilter, setFieldFilter, setFieldsToRender, fieldsPerPage]);
  const getDetailsByField = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(ipField => Object(_lib_get_details__WEBPACK_IMPORTED_MODULE_12__["getDetails"])(ipField, hits, columns, selectedIndexPattern), [hits, columns, selectedIndexPattern]);
  const popularLimit = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => services.uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_10__["FIELDS_LIMIT_SETTING"]), [services.uiSettings]);
  const {
    selected: selectedFields,
    popular: popularFields,
    unpopular: unpopularFields
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => Object(_lib_group_fields__WEBPACK_IMPORTED_MODULE_11__["groupFields"])(fields, columns, popularLimit, fieldCounts, fieldFilter, useNewFieldsApi), [fields, columns, popularLimit, fieldCounts, fieldFilter, useNewFieldsApi]);
  const paginate = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    const newFieldsToRender = fieldsToRender + Math.round(fieldsPerPage * 0.5);
    setFieldsToRender(Math.max(fieldsPerPage, Math.min(newFieldsToRender, unpopularFields.length)));
  }, [setFieldsToRender, fieldsToRender, unpopularFields, fieldsPerPage]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (scrollContainer && unpopularFields.length && availableFieldsContainer.current) {
      const {
        clientHeight,
        scrollHeight
      } = scrollContainer;
      const isScrollable = scrollHeight > clientHeight; // there is no scrolling currently

      const allFieldsRendered = fieldsToRender >= unpopularFields.length;

      if (!isScrollable && !allFieldsRendered) {
        // Not all available fields were rendered with the given fieldsPerPage number
        // and no scrolling is available due to the a high zoom out factor of the browser
        // In this case the fieldsPerPage needs to be adapted
        const fieldsRenderedHeight = availableFieldsContainer.current.clientHeight;
        const avgHeightPerItem = Math.round(fieldsRenderedHeight / fieldsToRender);
        const newFieldsPerPage = Math.round(clientHeight / avgHeightPerItem) + 10;

        if (newFieldsPerPage >= FIELDS_PER_PAGE && newFieldsPerPage !== fieldsPerPage) {
          setFieldsPerPage(newFieldsPerPage);
          setFieldsToRender(newFieldsPerPage);
        }
      }
    }
  }, [fieldsPerPage, scrollContainer, unpopularFields, fieldsToRender, setFieldsPerPage, setFieldsToRender, scrollDimensions]);
  const lazyScroll = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    if (scrollContainer) {
      const {
        scrollTop,
        clientHeight,
        scrollHeight
      } = scrollContainer;
      const nearBottom = scrollTop + clientHeight > scrollHeight * 0.9;

      if (nearBottom && unpopularFields) {
        paginate();
      }
    }
  }, [paginate, scrollContainer, unpopularFields]);
  const fieldTypes = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => {
    const result = ['any'];

    if (Array.isArray(fields)) {
      for (const field of fields) {
        if (result.indexOf(field.type) === -1) {
          result.push(field.type);
        }
      }
    }

    return result;
  }, [fields]);

  const calculateMultiFields = () => {
    if (!useNewFieldsApi || !fields) {
      return undefined;
    }

    const map = new Map();
    fields.forEach(field => {
      var _field$spec, _field$spec$subType, _field$spec$subType$m, _map$get;

      const parent = (_field$spec = field.spec) === null || _field$spec === void 0 ? void 0 : (_field$spec$subType = _field$spec.subType) === null || _field$spec$subType === void 0 ? void 0 : (_field$spec$subType$m = _field$spec$subType.multi) === null || _field$spec$subType$m === void 0 ? void 0 : _field$spec$subType$m.parent;

      if (!parent) {
        return;
      }

      const multiField = {
        field,
        isSelected: selectedFields.includes(field)
      };
      const value = (_map$get = map.get(parent)) !== null && _map$get !== void 0 ? _map$get : [];
      value.push(multiField);
      map.set(parent, value);
    });
    return map;
  };

  const [multiFields, setMultiFields] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(() => calculateMultiFields());
  react_use_lib_useShallowCompareEffect__WEBPACK_IMPORTED_MODULE_5___default()(() => {
    setMultiFields(calculateMultiFields());
  }, [fields, selectedFields, useNewFieldsApi]);
  const deleteField = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => canEditIndexPatternField && selectedIndexPattern ? async fieldName => {
    const ref = indexPatternFieldEditor.openDeleteModal({
      ctx: {
        indexPattern: selectedIndexPattern
      },
      fieldName,
      onDelete: async () => {
        onEditRuntimeField();
      }
    });

    if (setFieldEditorRef) {
      setFieldEditorRef(ref);
    }

    if (closeFlyout) {
      closeFlyout();
    }
  } : undefined, [selectedIndexPattern, canEditIndexPatternField, setFieldEditorRef, closeFlyout, onEditRuntimeField, indexPatternFieldEditor]);
  const getPaginated = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(list => {
    return list.slice(0, fieldsToRender);
  }, [fieldsToRender]);
  const filterChanged = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(fieldFilter, Object(_lib_field_filter__WEBPACK_IMPORTED_MODULE_13__["getDefaultFieldFilter"])()), [fieldFilter]);

  if (!selectedIndexPattern || !fields) {
    return null;
  }

  if (useFlyout) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
      "aria-label": _kbn_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('discover.fieldChooser.filter.indexAndFieldsSectionAriaLabel', {
        defaultMessage: 'Index and fields'
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexGroup"], {
      direction: "row",
      gutterSize: "s",
      alignItems: "center",
      responsive: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], {
      grow: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_discover_index_pattern__WEBPACK_IMPORTED_MODULE_8__["DiscoverIndexPattern"], {
      selectedIndexPattern: selectedIndexPattern,
      indexPatternList: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["sortBy"])(indexPatternList, o => o.attributes.title),
      onChangeIndexPattern: onChangeIndexPattern
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_discover_index_pattern_management__WEBPACK_IMPORTED_MODULE_15__["DiscoverIndexPatternManagement"], {
      services: services,
      selectedIndexPattern: selectedIndexPattern,
      editField: editField,
      useNewFieldsApi: useNewFieldsApi
    }))));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiPageSideBar"], {
    className: "dscSidebar",
    "aria-label": _kbn_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('discover.fieldChooser.filter.indexAndFieldsSectionAriaLabel', {
      defaultMessage: 'Index and fields'
    }),
    id: "discover-sidebar",
    "data-test-subj": "discover-sidebar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexGroup"], {
    className: "dscSidebar__group",
    direction: "column",
    alignItems: "stretch",
    gutterSize: "s",
    responsive: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexGroup"], {
    direction: "row",
    alignItems: "center",
    gutterSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], {
    grow: true,
    className: "dscSidebar__indexPatternSwitcher"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_discover_index_pattern__WEBPACK_IMPORTED_MODULE_8__["DiscoverIndexPattern"], {
    selectedIndexPattern: selectedIndexPattern,
    indexPatternList: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["sortBy"])(indexPatternList, o => o.attributes.title),
    onChangeIndexPattern: onChangeIndexPattern
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_discover_index_pattern_management__WEBPACK_IMPORTED_MODULE_15__["DiscoverIndexPatternManagement"], {
    services: services,
    selectedIndexPattern: selectedIndexPattern,
    useNewFieldsApi: useNewFieldsApi,
    editField: editField
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_discover_field_search__WEBPACK_IMPORTED_MODULE_9__["DiscoverFieldSearch"], {
    onChange: onChangeFieldSearch,
    value: fieldFilter.name,
    types: fieldTypes,
    useNewFieldsApi: useNewFieldsApi
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], {
    className: "eui-yScroll"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    ref: el => {
      if (el && !el.dataset.dynamicScroll) {
        el.dataset.dynamicScroll = 'true';
        setScrollContainer(el);
      }
    },
    onScroll: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["throttle"])(lazyScroll, 100),
    className: "eui-yScroll"
  }, fields.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, selectedFields && selectedFields.length > 0 && selectedFields[0].displayName !== '_source' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiAccordion"], {
    id: "dscSelectedFields",
    initialIsOpen: true,
    buttonContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiText"], {
      size: "xs",
      id: "selected_fields"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "discover.fieldChooser.filter.selectedFieldsTitle",
      defaultMessage: "Selected fields"
    }))),
    extraAction: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiNotificationBadge"], {
      color: filterChanged ? 'subdued' : 'accent',
      size: "m"
    }, selectedFields.length)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "dscFieldList",
    "aria-labelledby": "selected_fields",
    "data-test-subj": `fieldList-selected`
  }, selectedFields.map(field => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      key: `field${field.name}`,
      "data-attr-field": field.name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_discover_field__WEBPACK_IMPORTED_MODULE_7__["DiscoverField"], {
      alwaysShowActionButton: alwaysShowActionButtons,
      field: field,
      indexPattern: selectedIndexPattern,
      onAddField: onAddField,
      onRemoveField: onRemoveField,
      onAddFilter: onAddFilter,
      getDetails: getDetailsByField,
      selected: true,
      trackUiMetric: trackUiMetric,
      multiFields: multiFields === null || multiFields === void 0 ? void 0 : multiFields.get(field.name),
      onEditField: canEditIndexPatternField ? editField : undefined,
      onDeleteField: canEditIndexPatternField ? deleteField : undefined
    }));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiSpacer"], {
    size: "s"
  }), ' ') : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiAccordion"], {
    id: "dscAvailableFields",
    initialIsOpen: true,
    buttonContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiText"], {
      size: "xs",
      id: "available_fields"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
      id: "discover.fieldChooser.filter.availableFieldsTitle",
      defaultMessage: "Available fields"
    }))),
    extraAction: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiNotificationBadge"], {
      size: "m",
      color: filterChanged ? 'subdued' : 'accent'
    }, popularFields.length + unpopularFields.length)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiSpacer"], {
    size: "s"
  }), popularFields.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiTitle"], {
    size: "xxxs",
    className: "dscFieldListHeader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
    id: "available_fields_popular"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
    id: "discover.fieldChooser.filter.popularTitle",
    defaultMessage: "Popular"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "dscFieldList dscFieldList--popular",
    "aria-labelledby": "available_fields available_fields_popular",
    "data-test-subj": `fieldList-popular`
  }, popularFields.map(field => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      key: `field${field.name}`,
      "data-attr-field": field.name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_discover_field__WEBPACK_IMPORTED_MODULE_7__["DiscoverField"], {
      alwaysShowActionButton: alwaysShowActionButtons,
      field: field,
      indexPattern: selectedIndexPattern,
      onAddField: onAddField,
      onRemoveField: onRemoveField,
      onAddFilter: onAddFilter,
      getDetails: getDetailsByField,
      trackUiMetric: trackUiMetric,
      multiFields: multiFields === null || multiFields === void 0 ? void 0 : multiFields.get(field.name),
      onEditField: canEditIndexPatternField ? editField : undefined,
      onDeleteField: canEditIndexPatternField ? deleteField : undefined
    }));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "dscFieldList dscFieldList--unpopular",
    "aria-labelledby": "available_fields",
    "data-test-subj": `fieldList-unpopular`,
    ref: availableFieldsContainer
  }, getPaginated(unpopularFields).map(field => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      key: `field${field.name}`,
      "data-attr-field": field.name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_discover_field__WEBPACK_IMPORTED_MODULE_7__["DiscoverField"], {
      alwaysShowActionButton: alwaysShowActionButtons,
      field: field,
      indexPattern: selectedIndexPattern,
      onAddField: onAddField,
      onRemoveField: onRemoveField,
      onAddFilter: onAddFilter,
      getDetails: getDetailsByField,
      trackUiMetric: trackUiMetric,
      multiFields: multiFields === null || multiFields === void 0 ? void 0 : multiFields.get(field.name),
      onEditField: canEditIndexPatternField ? editField : undefined,
      onDeleteField: canEditIndexPatternField ? deleteField : undefined
    }));
  }))))))));
}

/***/ }),

/***/ "./public/application/apps/main/components/sidebar/discover_sidebar_responsive.tsx":
/*!*****************************************************************************************!*\
  !*** ./public/application/apps/main/components/sidebar/discover_sidebar_responsive.tsx ***!
  \*****************************************************************************************/
/*! exports provided: DiscoverSidebarResponsive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverSidebarResponsive", function() { return DiscoverSidebarResponsive; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _discover_index_pattern__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discover_index_pattern */ "./public/application/apps/main/components/sidebar/discover_index_pattern.tsx");
/* harmony import */ var _lib_field_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/field_filter */ "./public/application/apps/main/components/sidebar/lib/field_filter.ts");
/* harmony import */ var _discover_sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./discover_sidebar */ "./public/application/apps/main/components/sidebar/discover_sidebar.tsx");
/* harmony import */ var _discover_index_pattern_management__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./discover_index_pattern_management */ "./public/application/apps/main/components/sidebar/discover_index_pattern_management.tsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */










/**
 * Component providing 2 different renderings for the sidebar depending on available screen space
 * Desktop: Sidebar view, all elements are visible
 * Mobile: Index pattern selector is visible and a button to trigger a flyout with all elements
 */
function DiscoverSidebarResponsive(props) {
  const [fieldFilter, setFieldFilter] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Object(_lib_field_filter__WEBPACK_IMPORTED_MODULE_6__["getDefaultFieldFilter"])());
  const [isFlyoutVisible, setIsFlyoutVisible] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const closeFieldEditor = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const cleanup = () => {
      if (closeFieldEditor !== null && closeFieldEditor !== void 0 && closeFieldEditor.current) {
        closeFieldEditor === null || closeFieldEditor === void 0 ? void 0 : closeFieldEditor.current();
      }
    };

    return () => {
      // Make sure to close the editor when unmounting
      cleanup();
    };
  }, []);

  if (!props.selectedIndexPattern) {
    return null;
  }

  const setFieldEditorRef = ref => {
    closeFieldEditor.current = ref;
  };

  const closeFlyout = () => {
    setIsFlyoutVisible(false);
  };

  const {
    indexPatternFieldEditor
  } = props.services;
  const indexPatternFieldEditPermission = indexPatternFieldEditor === null || indexPatternFieldEditor === void 0 ? void 0 : indexPatternFieldEditor.userPermissions.editIndexPattern();
  const canEditIndexPatternField = !!indexPatternFieldEditPermission && props.useNewFieldsApi;

  const editField = fieldName => {
    if (!canEditIndexPatternField || !props.selectedIndexPattern) {
      return;
    }

    const ref = indexPatternFieldEditor.openEditor({
      ctx: {
        indexPattern: props.selectedIndexPattern
      },
      fieldName,
      onSave: async () => {
        props.onEditRuntimeField();
      }
    });

    if (setFieldEditorRef) {
      setFieldEditorRef(ref);
    }

    if (closeFlyout) {
      closeFlyout();
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.isClosed ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiHideFor"], {
    sizes: ['xs', 's']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_discover_sidebar__WEBPACK_IMPORTED_MODULE_7__["DiscoverSidebar"], _extends({}, props, {
    fieldFilter: fieldFilter,
    setFieldFilter: setFieldFilter,
    editField: editField
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiShowFor"], {
    sizes: ['xs', 's']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dscSidebar__mobile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    "aria-label": _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.fieldChooser.filter.indexAndFieldsSectionAriaLabel', {
      defaultMessage: 'Index and fields'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexGroup"], {
    direction: "row",
    gutterSize: "s",
    alignItems: "center",
    responsive: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], {
    grow: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_discover_index_pattern__WEBPACK_IMPORTED_MODULE_5__["DiscoverIndexPattern"], {
    onChangeIndexPattern: props.onChangeIndexPattern,
    selectedIndexPattern: props.selectedIndexPattern,
    indexPatternList: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["sortBy"])(props.indexPatternList, o => o.attributes.title)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_discover_index_pattern_management__WEBPACK_IMPORTED_MODULE_8__["DiscoverIndexPatternManagement"], {
    services: props.services,
    selectedIndexPattern: props.selectedIndexPattern,
    editField: editField,
    useNewFieldsApi: props.useNewFieldsApi
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiButton"], {
    contentProps: {
      className: 'dscSidebar__mobileButton'
    },
    fullWidth: true,
    onClick: () => setIsFlyoutVisible(true)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "discover.fieldChooser.fieldsMobileButtonLabel",
    defaultMessage: "Fields"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiBadge"], {
    className: "dscSidebar__mobileBadge",
    color: props.columns[0] === '_source' ? 'default' : 'accent'
  }, props.columns[0] === '_source' ? 0 : props.columns.length))), isFlyoutVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiPortal"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlyout"], {
    size: "s",
    onClose: () => setIsFlyoutVisible(false),
    "aria-labelledby": "flyoutTitle",
    ownFocus: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlyoutHeader"], {
    hasBorder: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiTitle"], {
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "flyoutTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiLink"], {
    color: "text",
    onClick: () => setIsFlyoutVisible(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiIcon"], {
    className: "eui-alignBaseline",
    "aria-label": _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.fieldList.flyoutBackIcon', {
      defaultMessage: 'Back'
    }),
    type: "arrowLeft"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.fieldList.flyoutHeading', {
    defaultMessage: 'Field list'
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "euiFlyoutBody"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_discover_sidebar__WEBPACK_IMPORTED_MODULE_7__["DiscoverSidebar"], _extends({}, props, {
    fieldFilter: fieldFilter,
    setFieldFilter: setFieldFilter,
    alwaysShowActionButtons: true,
    setFieldEditorRef: setFieldEditorRef,
    closeFlyout: closeFlyout,
    editField: editField
  })))))));
}

/***/ }),

/***/ "./public/application/apps/main/components/sidebar/index.ts":
/*!******************************************************************!*\
  !*** ./public/application/apps/main/components/sidebar/index.ts ***!
  \******************************************************************/
/*! exports provided: DiscoverSidebar, DiscoverSidebarResponsive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _discover_sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discover_sidebar */ "./public/application/apps/main/components/sidebar/discover_sidebar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiscoverSidebar", function() { return _discover_sidebar__WEBPACK_IMPORTED_MODULE_0__["DiscoverSidebar"]; });

/* harmony import */ var _discover_sidebar_responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discover_sidebar_responsive */ "./public/application/apps/main/components/sidebar/discover_sidebar_responsive.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiscoverSidebarResponsive", function() { return _discover_sidebar_responsive__WEBPACK_IMPORTED_MODULE_1__["DiscoverSidebarResponsive"]; });

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */



/***/ }),

/***/ "./public/application/apps/main/components/sidebar/lib/field_calculator.js":
/*!*********************************************************************************!*\
  !*** ./public/application/apps/main/components/sidebar/lib/field_calculator.js ***!
  \*********************************************************************************/
/*! exports provided: fieldCalculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldCalculator", function() { return fieldCalculator; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */



function getFieldValues(hits, field, indexPattern) {
  const name = field.name;
  const flattenHit = indexPattern.flattenHit;
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(hits, function (hit) {
    return flattenHit(hit)[name];
  });
}

function getFieldValueCounts(params) {
  params = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaults(params, {
    count: 5,
    grouped: false
  });

  if (params.field.type === 'geo_point' || params.field.type === 'geo_shape' || params.field.type === 'attachment') {
    return {
      error: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.fieldChooser.fieldCalculator.analysisIsNotAvailableForGeoFieldsErrorMessage', {
        defaultMessage: 'Analysis is not available for geo fields.'
      })
    };
  }

  const allValues = getFieldValues(params.hits, params.field, params.indexPattern);
  let counts;

  const missing = _countMissing(allValues);

  try {
    const groups = _groupValues(allValues, params);

    counts = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(groups, 'count').reverse().slice(0, params.count), function (bucket) {
      return {
        value: bucket.value,
        count: bucket.count,
        percent: (bucket.count / (params.hits.length - missing) * 100).toFixed(1)
      };
    });

    if (params.hits.length - missing === 0) {
      return {
        error: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.fieldChooser.fieldCalculator.fieldIsNotPresentInDocumentsErrorMessage', {
          defaultMessage: 'This field is present in your Elasticsearch mapping but not in the {hitsLength} documents shown in the doc table. You may still be able to visualize or search on it.',
          values: {
            hitsLength: params.hits.length
          }
        })
      };
    }

    return {
      total: params.hits.length,
      exists: params.hits.length - missing,
      missing: missing,
      buckets: counts
    };
  } catch (e) {
    return {
      error: e.message
    };
  }
} // returns a count of fields in the array that are undefined or null


function _countMissing(array) {
  return array.length - lodash__WEBPACK_IMPORTED_MODULE_0___default.a.without(array, undefined, null).length;
}

function _groupValues(allValues, params) {
  const groups = {};
  let k;
  allValues.forEach(function (value) {
    if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isObject(value) && !Array.isArray(value)) {
      throw new Error(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.fieldChooser.fieldCalculator.analysisIsNotAvailableForObjectFieldsErrorMessage', {
        defaultMessage: 'Analysis is not available for object fields.'
      }));
    }

    if (Array.isArray(value) && !params.grouped) {
      k = value;
    } else {
      k = value == null ? undefined : [value];
    }

    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(k, function (key) {
      if (groups.hasOwnProperty(key)) {
        groups[key].count++;
      } else {
        groups[key] = {
          value: params.grouped ? value : key,
          count: 1
        };
      }
    });
  });
  return groups;
}

const fieldCalculator = {
  _groupValues: _groupValues,
  _countMissing: _countMissing,
  getFieldValues: getFieldValues,
  getFieldValueCounts: getFieldValueCounts
};

/***/ }),

/***/ "./public/application/apps/main/components/sidebar/lib/field_filter.ts":
/*!*****************************************************************************!*\
  !*** ./public/application/apps/main/components/sidebar/lib/field_filter.ts ***!
  \*****************************************************************************/
/*! exports provided: getDefaultFieldFilter, setFieldFilterProp, isFieldFiltered */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultFieldFilter", function() { return getDefaultFieldFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFieldFilterProp", function() { return setFieldFilterProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFieldFiltered", function() { return isFieldFiltered; });
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
function getDefaultFieldFilter() {
  return {
    missing: true,
    type: 'any',
    name: '',
    aggregatable: null,
    searchable: null
  };
}
function setFieldFilterProp(state, name, value) {
  const newState = { ...state
  };

  if (name === 'missing') {
    newState.missing = Boolean(value);
  } else if (name === 'aggregatable') {
    newState.aggregatable = typeof value !== 'boolean' ? null : value;
  } else if (name === 'searchable') {
    newState.searchable = typeof value !== 'boolean' ? null : value;
  } else if (name === 'name') {
    newState.name = String(value);
  } else if (name === 'type') {
    newState.type = String(value);
  }

  return newState;
}
function isFieldFiltered(field, filterState, fieldCounts) {
  const matchFilter = filterState.type === 'any' || field.type === filterState.type;
  const isAggregatable = filterState.aggregatable === null || field.aggregatable === filterState.aggregatable;
  const isSearchable = filterState.searchable === null || field.searchable === filterState.searchable;
  const scriptedOrMissing = !filterState.missing || field.type === '_source' || field.type === 'unknown_selected' || field.scripted || fieldCounts[field.name] > 0;
  const needle = filterState.name ? filterState.name.toLowerCase() : '';
  const haystack = `${field.name}${field.displayName || ''}`.toLowerCase();
  const matchName = !filterState.name || haystack.indexOf(needle) !== -1;
  return matchFilter && isAggregatable && isSearchable && scriptedOrMissing && matchName;
}

/***/ }),

/***/ "./public/application/apps/main/components/sidebar/lib/get_details.ts":
/*!****************************************************************************!*\
  !*** ./public/application/apps/main/components/sidebar/lib/get_details.ts ***!
  \****************************************************************************/
/*! exports provided: getDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetails", function() { return getDetails; });
/* harmony import */ var _field_calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field_calculator */ "./public/application/apps/main/components/sidebar/lib/field_calculator.js");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
// @ts-expect-error

function getDetails(field, hits, columns, indexPattern) {
  if (!indexPattern) {
    return {};
  }

  const details = { ..._field_calculator__WEBPACK_IMPORTED_MODULE_0__["fieldCalculator"].getFieldValueCounts({
      hits,
      field,
      indexPattern,
      count: 5,
      grouped: false
    }),
    columns
  };

  if (details.buckets) {
    for (const bucket of details.buckets) {
      bucket.display = indexPattern.getFormatterForField(field).convert(bucket.value);
    }
  }

  return details;
}

/***/ }),

/***/ "./public/application/apps/main/components/sidebar/lib/get_field_type_name.ts":
/*!************************************************************************************!*\
  !*** ./public/application/apps/main/components/sidebar/lib/get_field_type_name.ts ***!
  \************************************************************************************/
/*! exports provided: getFieldTypeName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFieldTypeName", function() { return getFieldTypeName; });
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

function getFieldTypeName(type) {
  switch (type) {
    case 'boolean':
      return _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.fieldNameIcons.booleanAriaLabel', {
        defaultMessage: 'Boolean field'
      });

    case 'conflict':
      return _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.fieldNameIcons.conflictFieldAriaLabel', {
        defaultMessage: 'Conflicting field'
      });

    case 'date':
      return _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.fieldNameIcons.dateFieldAriaLabel', {
        defaultMessage: 'Date field'
      });

    case 'geo_point':
      return _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.fieldNameIcons.geoPointFieldAriaLabel', {
        defaultMessage: 'Geo point field'
      });

    case 'geo_shape':
      return _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.fieldNameIcons.geoShapeFieldAriaLabel', {
        defaultMessage: 'Geo shape field'
      });

    case 'ip':
      return _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.fieldNameIcons.ipAddressFieldAriaLabel', {
        defaultMessage: 'IP address field'
      });

    case 'murmur3':
      return _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.fieldNameIcons.murmur3FieldAriaLabel', {
        defaultMessage: 'Murmur3 field'
      });

    case 'number':
      return _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.fieldNameIcons.numberFieldAriaLabel', {
        defaultMessage: 'Number field'
      });

    case 'source':
      // Note that this type is currently not provided, type for _source is undefined
      return _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.fieldNameIcons.sourceFieldAriaLabel', {
        defaultMessage: 'Source field'
      });

    case 'string':
      return _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.fieldNameIcons.stringFieldAriaLabel', {
        defaultMessage: 'String field'
      });

    case 'nested':
      return _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.fieldNameIcons.nestedFieldAriaLabel', {
        defaultMessage: 'Nested field'
      });

    default:
      return _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.fieldNameIcons.unknownFieldAriaLabel', {
        defaultMessage: 'Unknown field'
      });
  }
}

/***/ }),

/***/ "./public/application/apps/main/components/sidebar/lib/get_index_pattern_field_list.ts":
/*!*********************************************************************************************!*\
  !*** ./public/application/apps/main/components/sidebar/lib/get_index_pattern_field_list.ts ***!
  \*********************************************************************************************/
/*! exports provided: getIndexPatternFieldList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndexPatternFieldList", function() { return getIndexPatternFieldList; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_nested_fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/nested_fields */ "./public/application/apps/main/utils/nested_fields.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


function getIndexPatternFieldList(indexPattern, fieldCounts) {
  if (!indexPattern || !fieldCounts) return [];
  const fieldNamesInDocs = Object.keys(fieldCounts);
  const fieldNamesInIndexPattern = indexPattern.fields.getAll().map(fld => fld.name);
  const unknownFields = [];
  Object(lodash__WEBPACK_IMPORTED_MODULE_0__["difference"])(fieldNamesInDocs, fieldNamesInIndexPattern).forEach(unknownFieldName => {
    if (Object(_utils_nested_fields__WEBPACK_IMPORTED_MODULE_1__["isNestedFieldParent"])(unknownFieldName, indexPattern)) {
      unknownFields.push({
        displayName: String(unknownFieldName),
        name: String(unknownFieldName),
        type: 'nested'
      });
    } else {
      unknownFields.push({
        displayName: String(unknownFieldName),
        name: String(unknownFieldName),
        type: 'unknown'
      });
    }
  });
  return [...indexPattern.fields.getAll(), ...unknownFields];
}

/***/ }),

/***/ "./public/application/apps/main/components/sidebar/lib/group_fields.tsx":
/*!******************************************************************************!*\
  !*** ./public/application/apps/main/components/sidebar/lib/group_fields.tsx ***!
  \******************************************************************************/
/*! exports provided: groupFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupFields", function() { return groupFields; });
/* harmony import */ var _field_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field_filter */ "./public/application/apps/main/components/sidebar/lib/field_filter.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


/**
 * group the fields into selected, popular and unpopular, filter by fieldFilterState
 */
function groupFields(fields, columns, popularLimit, fieldCounts, fieldFilterState, useNewFieldsApi) {
  const showUnmappedFields = useNewFieldsApi;
  const result = {
    selected: [],
    popular: [],
    unpopular: []
  };

  if (!Array.isArray(fields) || !Array.isArray(columns) || typeof fieldCounts !== 'object') {
    return result;
  }

  const popular = fields.filter(field => !columns.includes(field.name) && field.count).sort((a, b) => (b.count || 0) - (a.count || 0)).map(field => field.name).slice(0, popularLimit);

  const compareFn = (a, b) => {
    if (!a.displayName) {
      return 0;
    }

    return a.displayName.localeCompare(b.displayName || '');
  };

  const fieldsSorted = fields.sort(compareFn);

  for (const field of fieldsSorted) {
    var _field$spec, _field$spec$subType, _field$spec$subType$m;

    if (!Object(_field_filter__WEBPACK_IMPORTED_MODULE_0__["isFieldFiltered"])(field, fieldFilterState, fieldCounts)) {
      continue;
    }

    const isSubfield = useNewFieldsApi && ((_field$spec = field.spec) === null || _field$spec === void 0 ? void 0 : (_field$spec$subType = _field$spec.subType) === null || _field$spec$subType === void 0 ? void 0 : (_field$spec$subType$m = _field$spec$subType.multi) === null || _field$spec$subType$m === void 0 ? void 0 : _field$spec$subType$m.parent);

    if (columns.includes(field.name)) {
      result.selected.push(field);
    } else if (popular.includes(field.name) && field.type !== '_source') {
      if (!isSubfield) {
        result.popular.push(field);
      }
    } else if (field.type !== '_source') {
      // do not show unmapped fields unless explicitly specified
      // do not add subfields to this list
      if (useNewFieldsApi && (field.type !== 'unknown' || showUnmappedFields) && !isSubfield) {
        result.unpopular.push(field);
      } else if (!useNewFieldsApi) {
        result.unpopular.push(field);
      }
    }
  } // add selected columns, that are not part of the index pattern, to be removeable


  for (const column of columns) {
    const tmpField = {
      name: column,
      displayName: column,
      type: 'unknown_selected'
    };

    if (!result.selected.find(field => field.name === column) && Object(_field_filter__WEBPACK_IMPORTED_MODULE_0__["isFieldFiltered"])(tmpField, fieldFilterState, fieldCounts)) {
      result.selected.push(tmpField);
    }
  }

  result.selected.sort((a, b) => {
    return columns.indexOf(a.name) - columns.indexOf(b.name);
  });
  return result;
}

/***/ }),

/***/ "./public/application/apps/main/components/sidebar/lib/visualize_trigger_utils.ts":
/*!****************************************************************************************!*\
  !*** ./public/application/apps/main/components/sidebar/lib/visualize_trigger_utils.ts ***!
  \****************************************************************************************/
/*! exports provided: triggerVisualizeActions, getVisualizeInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerVisualizeActions", function() { return triggerVisualizeActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVisualizeInformation", function() { return getVisualizeInformation; });
/* harmony import */ var _src_plugins_ui_actions_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../src/plugins/ui_actions/public */ "plugin/uiActions/public");
/* harmony import */ var _src_plugins_ui_actions_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_ui_actions_public__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kibana_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../kibana_services */ "./public/kibana_services.ts");
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../src/plugins/data/public */ "plugin/data/public");
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_data_public__WEBPACK_IMPORTED_MODULE_2__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */




function getTriggerConstant(type) {
  return type === _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_2__["KBN_FIELD_TYPES"].GEO_POINT || type === _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_2__["KBN_FIELD_TYPES"].GEO_SHAPE ? _src_plugins_ui_actions_public__WEBPACK_IMPORTED_MODULE_0__["VISUALIZE_GEO_FIELD_TRIGGER"] : _src_plugins_ui_actions_public__WEBPACK_IMPORTED_MODULE_0__["VISUALIZE_FIELD_TRIGGER"];
}

function getTrigger(type) {
  return type === _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_2__["KBN_FIELD_TYPES"].GEO_POINT || type === _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_2__["KBN_FIELD_TYPES"].GEO_SHAPE ? _src_plugins_ui_actions_public__WEBPACK_IMPORTED_MODULE_0__["visualizeGeoFieldTrigger"] : _src_plugins_ui_actions_public__WEBPACK_IMPORTED_MODULE_0__["visualizeFieldTrigger"];
}

async function getCompatibleActions(fieldName, indexPatternId, contextualFields, trigger) {
  const compatibleActions = await Object(_kibana_services__WEBPACK_IMPORTED_MODULE_1__["getUiActions"])().getTriggerCompatibleActions(trigger, {
    indexPatternId,
    fieldName,
    contextualFields
  });
  return compatibleActions;
}

function triggerVisualizeActions(field, indexPatternId, contextualFields) {
  if (!indexPatternId) return;
  const trigger = getTriggerConstant(field.type);
  const triggerOptions = {
    indexPatternId,
    fieldName: field.name,
    contextualFields
  };
  Object(_kibana_services__WEBPACK_IMPORTED_MODULE_1__["getUiActions"])().getTrigger(trigger).exec(triggerOptions);
}

/**
 * Returns the field name and potentially href of the field or the first multi-field
 * that has a compatible visualize uiAction.
 */
async function getVisualizeInformation(field, indexPatternId, contextualFields, multiFields = []) {
  if (field.name === '_id' || !indexPatternId) {
    // _id fields are not visualizeable in ES
    return undefined;
  }

  for (const f of [field, ...multiFields]) {
    if (!f.visualizable) {
      continue;
    } // Retrieve compatible actions for the specific field


    const actions = await getCompatibleActions(f.name, indexPatternId, contextualFields, getTriggerConstant(f.type)); // if the field has compatible actions use this field for visualizing

    if (actions.length > 0) {
      var _actions$0$getHref, _actions$;

      const triggerOptions = {
        indexPatternId,
        fieldName: f.name,
        contextualFields,
        trigger: getTrigger(f.type)
      };
      return {
        field: f,
        // We use the href of the first action always. Multiple actions will only work
        // via the modal shown by triggerVisualizeActions that should be called via onClick.
        href: await ((_actions$0$getHref = (_actions$ = actions[0]).getHref) === null || _actions$0$getHref === void 0 ? void 0 : _actions$0$getHref.call(_actions$, triggerOptions))
      };
    }
  }

  return undefined;
}

/***/ }),

/***/ "./public/application/apps/main/components/sidebar/string_progress_bar.tsx":
/*!*********************************************************************************!*\
  !*** ./public/application/apps/main/components/sidebar/string_progress_bar.tsx ***!
  \*********************************************************************************/
/*! exports provided: StringFieldProgressBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringFieldProgressBar", function() { return StringFieldProgressBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


function StringFieldProgressBar({
  value,
  percent,
  count
}) {
  const ariaLabel = `${value}: ${count} (${percent}%)`;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiProgress"], {
    value: percent,
    max: 100,
    color: "secondary",
    "aria-label": ariaLabel,
    size: "s"
  });
}

/***/ }),

/***/ "./public/application/apps/main/components/timechart_header/index.ts":
/*!***************************************************************************!*\
  !*** ./public/application/apps/main/components/timechart_header/index.ts ***!
  \***************************************************************************/
/*! exports provided: TimechartHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timechart_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timechart_header */ "./public/application/apps/main/components/timechart_header/timechart_header.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimechartHeader", function() { return _timechart_header__WEBPACK_IMPORTED_MODULE_0__["TimechartHeader"]; });

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


/***/ }),

/***/ "./public/application/apps/main/components/timechart_header/timechart_header.scss":
/*!****************************************************************************************!*\
  !*** ./public/application/apps/main/components/timechart_header/timechart_header.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__kbnThemeTag__) {
  case 'v7dark':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7dark]. Styles were compiled using the [v8dark] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7dark] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./timechart_header.scss?v8dark */ "./public/application/apps/main/components/timechart_header/timechart_header.scss?v8dark")

  case 'v7light':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7light]. Styles were compiled using the [v8light] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7light] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./timechart_header.scss?v8light */ "./public/application/apps/main/components/timechart_header/timechart_header.scss?v8light")

  case 'v8dark':
    return __webpack_require__(/*! ./timechart_header.scss?v8dark */ "./public/application/apps/main/components/timechart_header/timechart_header.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./timechart_header.scss?v8light */ "./public/application/apps/main/components/timechart_header/timechart_header.scss?v8light");
}

/***/ }),

/***/ "./public/application/apps/main/components/timechart_header/timechart_header.scss?v8dark":
/*!***********************************************************************************************!*\
  !*** ./public/application/apps/main/components/timechart_header/timechart_header.scss?v8dark ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-0-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./timechart_header.scss?v8dark */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/timechart_header/timechart_header.scss?v8dark");

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

/***/ "./public/application/apps/main/components/timechart_header/timechart_header.scss?v8light":
/*!************************************************************************************************!*\
  !*** ./public/application/apps/main/components/timechart_header/timechart_header.scss?v8light ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./timechart_header.scss?v8light */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/timechart_header/timechart_header.scss?v8light");

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

/***/ "./public/application/apps/main/components/timechart_header/timechart_header.tsx":
/*!***************************************************************************************!*\
  !*** ./public/application/apps/main/components/timechart_header/timechart_header.tsx ***!
  \***************************************************************************************/
/*! exports provided: TimechartHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimechartHeader", function() { return TimechartHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastic_datemath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/datemath */ "../../node_modules/@elastic/datemath/target_node/index.js");
/* harmony import */ var _elastic_datemath__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elastic_datemath__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _timechart_header_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timechart_header.scss */ "./public/application/apps/main/components/timechart_header/timechart_header.scss");
/* harmony import */ var _timechart_header_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_timechart_header_scss__WEBPACK_IMPORTED_MODULE_4__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */





function TimechartHeader({
  bucketInterval,
  dateFormat,
  data,
  options,
  onChangeInterval,
  stateInterval
}) {
  const {
    timefilter
  } = data.query.timefilter;
  const {
    from,
    to
  } = timefilter.getTime();
  const timeRange = {
    from: _elastic_datemath__WEBPACK_IMPORTED_MODULE_3___default.a.parse(from),
    to: _elastic_datemath__WEBPACK_IMPORTED_MODULE_3___default.a.parse(to, {
      roundUp: true
    })
  };
  const [interval, setInterval] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(stateInterval);
  const toMoment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(datetime => {
    if (!datetime) {
      return '';
    }

    if (!dateFormat) {
      return String(datetime);
    }

    return datetime.format(dateFormat);
  }, [dateFormat]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setInterval(stateInterval);
  }, [stateInterval]);

  const handleIntervalChange = e => {
    setInterval(e.target.value);
    onChangeInterval(e.target.value);
  };

  if (!timeRange || !bucketInterval) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    className: "dscTimeChartHeader",
    gutterSize: "s",
    responsive: false,
    wrap: true,
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false,
    className: "eui-hideFor--m"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiToolTip"], {
    content: _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.howToChangeTheTimeTooltip', {
      defaultMessage: 'To change the time, use the global time filter.'
    }),
    delay: "long"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
    "data-test-subj": "discoverIntervalDateRange",
    textAlign: "center",
    size: "s"
  }, `${toMoment(timeRange.from)} - ${toMoment(timeRange.to)} ${interval !== 'auto' ? _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.timechartHeader.timeIntervalSelect.per', {
    defaultMessage: 'per'
  }) : ''}`))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    className: "dscTimeIntervalSelect",
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSelect"], {
    "aria-label": _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.timechartHeader.timeIntervalSelect.ariaLabel', {
      defaultMessage: 'Time interval'
    }),
    compressed: true,
    id: "dscResultsIntervalSelector",
    "data-test-subj": "discoverIntervalSelect",
    options: options.filter(({
      val
    }) => val !== 'custom').map(({
      display,
      val
    }) => {
      return {
        text: display,
        value: val,
        label: display
      };
    }),
    value: interval,
    onChange: handleIntervalChange,
    append: bucketInterval.scaled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIconTip"], {
      id: "discoverIntervalIconTip",
      content: _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.bucketIntervalTooltip', {
        defaultMessage: 'This interval creates {bucketsDescription} to show in the selected time range, so it has been scaled to {bucketIntervalDescription}.',
        values: {
          bucketsDescription: bucketInterval.scale && bucketInterval.scale > 1 ? _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.bucketIntervalTooltip.tooLargeBucketsText', {
            defaultMessage: 'buckets that are too large'
          }) : _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.bucketIntervalTooltip.tooManyBucketsText', {
            defaultMessage: 'too many buckets'
          }),
          bucketIntervalDescription: bucketInterval.description
        }
      }),
      color: "warning",
      size: "s",
      type: "alert"
    }) : undefined
  })));
}

/***/ }),

/***/ "./public/application/apps/main/components/top_nav/discover_topnav.tsx":
/*!*****************************************************************************!*\
  !*** ./public/application/apps/main/components/top_nav/discover_topnav.tsx ***!
  \*****************************************************************************/
/*! exports provided: DiscoverTopNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverTopNav", function() { return DiscoverTopNav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _get_top_nav_links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get_top_nav_links */ "./public/application/apps/main/components/top_nav/get_top_nav_links.ts");
/* harmony import */ var _kibana_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../kibana_services */ "./public/kibana_services.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */



const DiscoverTopNav = ({
  indexPattern,
  onOpenInspector,
  query,
  savedQuery,
  stateContainer,
  updateQuery,
  searchSource,
  navigateTo,
  savedSearch,
  services,
  resetSavedSearch
}) => {
  const showDatePicker = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => indexPattern.isTimeBased(), [indexPattern]);
  const {
    TopNavMenu
  } = services.navigation.ui;
  const onOpenSavedSearch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(newSavedSearchId => {
    if (savedSearch.id && savedSearch.id === newSavedSearchId) {
      resetSavedSearch();
    } else {
      window.location.assign(`#/view/${encodeURIComponent(newSavedSearchId)}`);
    }
  }, [resetSavedSearch, savedSearch.id]);
  const topNavMenu = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Object(_get_top_nav_links__WEBPACK_IMPORTED_MODULE_1__["getTopNavLinks"])({
    indexPattern,
    navigateTo,
    savedSearch,
    services,
    state: stateContainer,
    onOpenInspector,
    searchSource,
    onOpenSavedSearch
  }), [indexPattern, navigateTo, savedSearch, services, stateContainer, onOpenInspector, searchSource, onOpenSavedSearch]);

  const updateSavedQueryId = newSavedQueryId => {
    const {
      appStateContainer,
      setAppState
    } = stateContainer;

    if (newSavedQueryId) {
      setAppState({
        savedQuery: newSavedQueryId
      });
    } else {
      // remove savedQueryId from state
      const newState = { ...appStateContainer.getState()
      };
      delete newState.savedQuery;
      appStateContainer.set(newState);
    }
  };

  const setMenuMountPoint = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return Object(_kibana_services__WEBPACK_IMPORTED_MODULE_2__["getHeaderActionMenuMounter"])();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TopNavMenu, {
    appName: "discover",
    config: topNavMenu,
    indexPatterns: [indexPattern],
    onQuerySubmit: updateQuery,
    onSavedQueryIdChange: updateSavedQueryId,
    query: query,
    setMenuMountPoint: setMenuMountPoint,
    savedQueryId: savedQuery,
    screenTitle: savedSearch.title,
    showDatePicker: showDatePicker,
    showSaveQuery: !!services.capabilities.discover.saveQuery,
    showSearchBar: true,
    useDefaultBehaviors: true
  });
};

/***/ }),

/***/ "./public/application/apps/main/components/top_nav/get_top_nav_links.ts":
/*!******************************************************************************!*\
  !*** ./public/application/apps/main/components/top_nav/get_top_nav_links.ts ***!
  \******************************************************************************/
/*! exports provided: getTopNavLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopNavLinks", function() { return getTopNavLinks; });
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _show_open_search_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show_open_search_panel */ "./public/application/apps/main/components/top_nav/show_open_search_panel.tsx");
/* harmony import */ var _utils_get_sharing_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/get_sharing_data */ "./public/application/apps/main/utils/get_sharing_data.ts");
/* harmony import */ var _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../src/plugins/kibana_utils/public */ "plugin/kibanaUtils/public");
/* harmony import */ var _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _on_save_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./on_save_search */ "./public/application/apps/main/components/top_nav/on_save_search.tsx");
/* harmony import */ var _open_options_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./open_options_popover */ "./public/application/apps/main/components/top_nav/open_options_popover.tsx");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */







/**
 * Helper function to build the top nav links
 */

const getTopNavLinks = ({
  indexPattern,
  navigateTo,
  savedSearch,
  services,
  state,
  onOpenInspector,
  searchSource,
  onOpenSavedSearch
}) => {
  const options = {
    id: 'options',
    label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.localMenu.localMenu.optionsTitle', {
      defaultMessage: 'Options'
    }),
    description: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.localMenu.optionsDescription', {
      defaultMessage: 'Options'
    }),
    run: anchorElement => Object(_open_options_popover__WEBPACK_IMPORTED_MODULE_6__["openOptionsPopover"])({
      I18nContext: services.core.i18n.Context,
      anchorElement
    }),
    testId: 'discoverOptionsButton'
  };
  const newSearch = {
    id: 'new',
    label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.localMenu.localMenu.newSearchTitle', {
      defaultMessage: 'New'
    }),
    description: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.localMenu.newSearchDescription', {
      defaultMessage: 'New Search'
    }),
    run: () => navigateTo('/'),
    testId: 'discoverNewButton'
  };
  const saveSearch = {
    id: 'save',
    label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.localMenu.saveTitle', {
      defaultMessage: 'Save'
    }),
    description: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.localMenu.saveSearchDescription', {
      defaultMessage: 'Save Search'
    }),
    testId: 'discoverSaveButton',
    run: () => Object(_on_save_search__WEBPACK_IMPORTED_MODULE_5__["onSaveSearch"])({
      savedSearch,
      services,
      indexPattern,
      navigateTo,
      state
    })
  };
  const openSearch = {
    id: 'open',
    label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.localMenu.openTitle', {
      defaultMessage: 'Open'
    }),
    description: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.localMenu.openSavedSearchDescription', {
      defaultMessage: 'Open Saved Search'
    }),
    testId: 'discoverOpenButton',
    run: () => Object(_show_open_search_panel__WEBPACK_IMPORTED_MODULE_2__["showOpenSearchPanel"])({
      onOpenSavedSearch,
      I18nContext: services.core.i18n.Context
    })
  };
  const shareSearch = {
    id: 'share',
    label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.localMenu.shareTitle', {
      defaultMessage: 'Share'
    }),
    description: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.localMenu.shareSearchDescription', {
      defaultMessage: 'Share Search'
    }),
    testId: 'shareTopNavButton',
    run: async anchorElement => {
      if (!services.share) {
        return;
      }

      const sharingData = await Object(_utils_get_sharing_data__WEBPACK_IMPORTED_MODULE_3__["getSharingData"])(searchSource, state.appStateContainer.getState(), services.uiSettings);
      services.share.toggleShareContextMenu({
        anchorElement,
        allowEmbed: false,
        allowShortUrl: !!services.capabilities.discover.createShortUrl,
        shareableUrl: Object(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_4__["unhashUrl"])(window.location.href),
        objectId: savedSearch.id,
        objectType: 'search',
        sharingData: { ...sharingData,
          // CSV reports can be generated without a saved search so we provide a fallback title
          title: savedSearch.title || _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.localMenu.fallbackReportTitle', {
            defaultMessage: 'Discover search [{date}]',
            values: {
              date: moment__WEBPACK_IMPORTED_MODULE_1___default()().toISOString(true)
            }
          })
        },
        isDirty: !savedSearch.id || state.isAppStateDirty(),
        showPublicUrlSwitch: _utils_get_sharing_data__WEBPACK_IMPORTED_MODULE_3__["showPublicUrlSwitch"]
      });
    }
  };
  const inspectSearch = {
    id: 'inspect',
    label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.localMenu.inspectTitle', {
      defaultMessage: 'Inspect'
    }),
    description: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.localMenu.openInspectorForSearchDescription', {
      defaultMessage: 'Open Inspector for search'
    }),
    testId: 'openInspectorButton',
    run: () => {
      onOpenInspector();
    }
  };
  return [...(services.capabilities.advancedSettings.save ? [options] : []), newSearch, ...(services.capabilities.discover.save ? [saveSearch] : []), openSearch, shareSearch, inspectSearch];
};

/***/ }),

/***/ "./public/application/apps/main/components/top_nav/on_save_search.tsx":
/*!****************************************************************************!*\
  !*** ./public/application/apps/main/components/top_nav/on_save_search.tsx ***!
  \****************************************************************************/
/*! exports provided: onSaveSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSaveSearch", function() { return onSaveSearch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_plugins_saved_objects_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../src/plugins/saved_objects/public */ "plugin/savedObjects/public");
/* harmony import */ var _src_plugins_saved_objects_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_saved_objects_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helpers/breadcrumbs */ "./public/application/helpers/breadcrumbs.ts");
/* harmony import */ var _utils_persist_saved_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/persist_saved_search */ "./public/application/apps/main/utils/persist_saved_search.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */






async function saveDataSource({
  indexPattern,
  navigateTo,
  savedSearch,
  saveOptions,
  services,
  state
}) {
  const prevSavedSearchId = savedSearch.id;

  function onSuccess(id) {
    if (id) {
      services.toastNotifications.addSuccess({
        title: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.notifications.savedSearchTitle', {
          defaultMessage: `Search '{savedSearchTitle}' was saved`,
          values: {
            savedSearchTitle: savedSearch.title
          }
        }),
        'data-test-subj': 'saveSearchSuccess'
      });

      if (savedSearch.id !== prevSavedSearchId) {
        navigateTo(`/view/${encodeURIComponent(savedSearch.id)}`);
      } else {
        // Update defaults so that "reload saved query" functions correctly
        state.resetAppState();
        services.chrome.docTitle.change(savedSearch.lastSavedTitle);
        Object(_helpers_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__["setBreadcrumbsTitle"])(savedSearch, services.chrome);
      }
    }
  }

  function onError(error) {
    services.toastNotifications.addDanger({
      title: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.notifications.notSavedSearchTitle', {
        defaultMessage: `Search '{savedSearchTitle}' was not saved.`,
        values: {
          savedSearchTitle: savedSearch.title
        }
      }),
      text: error.message
    });
  }

  return Object(_utils_persist_saved_search__WEBPACK_IMPORTED_MODULE_4__["persistSavedSearch"])(savedSearch, {
    indexPattern,
    onError,
    onSuccess,
    saveOptions,
    services,
    state: state.appStateContainer.getState()
  });
}

async function onSaveSearch({
  indexPattern,
  navigateTo,
  savedSearch,
  services,
  state
}) {
  const onSave = async ({
    newTitle,
    newCopyOnSave,
    isTitleDuplicateConfirmed,
    onTitleDuplicate
  }) => {
    const currentTitle = savedSearch.title;
    savedSearch.title = newTitle;
    savedSearch.copyOnSave = newCopyOnSave;
    const saveOptions = {
      confirmOverwrite: false,
      isTitleDuplicateConfirmed,
      onTitleDuplicate
    };
    const response = await saveDataSource({
      indexPattern,
      saveOptions,
      services,
      navigateTo,
      savedSearch,
      state
    }); // If the save wasn't successful, put the original values back.

    if (!response.id || response.error) {
      savedSearch.title = currentTitle;
    } else {
      state.resetInitialAppState();
    }

    return response;
  };

  const saveModal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_plugins_saved_objects_public__WEBPACK_IMPORTED_MODULE_2__["SavedObjectSaveModal"], {
    onSave: onSave,
    onClose: () => {},
    title: savedSearch.title,
    showCopyOnSave: !!savedSearch.id,
    objectType: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.localMenu.saveSaveSearchObjectType', {
      defaultMessage: 'search'
    }),
    description: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.localMenu.saveSaveSearchDescription', {
      defaultMessage: 'Save your Discover search so you can use it in visualizations and dashboards'
    }),
    showDescription: false
  });
  Object(_src_plugins_saved_objects_public__WEBPACK_IMPORTED_MODULE_2__["showSaveModal"])(saveModal, services.core.i18n.Context);
}

/***/ }),

/***/ "./public/application/apps/main/components/top_nav/open_options_popover.scss":
/*!***********************************************************************************!*\
  !*** ./public/application/apps/main/components/top_nav/open_options_popover.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__kbnThemeTag__) {
  case 'v7dark':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7dark]. Styles were compiled using the [v8dark] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7dark] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./open_options_popover.scss?v8dark */ "./public/application/apps/main/components/top_nav/open_options_popover.scss?v8dark")

  case 'v7light':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7light]. Styles were compiled using the [v8light] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7light] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./open_options_popover.scss?v8light */ "./public/application/apps/main/components/top_nav/open_options_popover.scss?v8light")

  case 'v8dark':
    return __webpack_require__(/*! ./open_options_popover.scss?v8dark */ "./public/application/apps/main/components/top_nav/open_options_popover.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./open_options_popover.scss?v8light */ "./public/application/apps/main/components/top_nav/open_options_popover.scss?v8light");
}

/***/ }),

/***/ "./public/application/apps/main/components/top_nav/open_options_popover.scss?v8dark":
/*!******************************************************************************************!*\
  !*** ./public/application/apps/main/components/top_nav/open_options_popover.scss?v8dark ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-0-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./open_options_popover.scss?v8dark */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/top_nav/open_options_popover.scss?v8dark");

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

/***/ "./public/application/apps/main/components/top_nav/open_options_popover.scss?v8light":
/*!*******************************************************************************************!*\
  !*** ./public/application/apps/main/components/top_nav/open_options_popover.scss?v8light ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./open_options_popover.scss?v8light */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/apps/main/components/top_nav/open_options_popover.scss?v8light");

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

/***/ "./public/application/apps/main/components/top_nav/open_options_popover.tsx":
/*!**********************************************************************************!*\
  !*** ./public/application/apps/main/components/top_nav/open_options_popover.tsx ***!
  \**********************************************************************************/
/*! exports provided: OptionsPopover, openOptionsPopover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsPopover", function() { return OptionsPopover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openOptionsPopover", function() { return openOptionsPopover; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _open_options_popover_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./open_options_popover.scss */ "./public/application/apps/main/components/top_nav/open_options_popover.scss");
/* harmony import */ var _open_options_popover_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_open_options_popover_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../common */ "./common/index.ts");
/* harmony import */ var _kibana_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../kibana_services */ "./public/kibana_services.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */








const container = document.createElement('div');
let isOpen = false;
function OptionsPopover(props) {
  const {
    core: {
      uiSettings
    },
    addBasePath
  } = Object(_kibana_services__WEBPACK_IMPORTED_MODULE_7__["getServices"])();
  const isLegacy = uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_6__["DOC_TABLE_LEGACY"]);
  const mode = isLegacy ? _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.openOptionsPopover.legacyTableText', {
    defaultMessage: 'Classic table'
  }) : _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.openOptionsPopover.dataGridText', {
    defaultMessage: 'New table'
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiWrappingPopover"], {
    ownFocus: true,
    button: props.anchorElement,
    closePopover: props.onClose,
    isOpen: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dscOptionsPopover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiText"], {
    color: "subdued",
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "discover.topNav.optionsPopover.currentViewMode",
    defaultMessage: "{viewModeLabel}: {currentViewMode}",
    values: {
      viewModeLabel: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "discover.topNav.optionsPopover.currentViewModeLabel",
        defaultMessage: "Current view mode"
      })),
      currentViewMode: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiCode"], {
        "data-test-subj": "docTableMode"
      }, mode)
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiText"], {
    color: "subdued",
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "discover.topNav.openOptionsPopover.description",
    defaultMessage: "Great news! Discover has better ways to sort data, drag and drop columns, and compare documents. Toggle 'Use classic table' in Advanced Settings to get started."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiSpacer"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiButton"], {
    iconType: "tableDensityNormal",
    fullWidth: true,
    href: addBasePath(`/app/management/kibana/settings?query=${_common__WEBPACK_IMPORTED_MODULE_6__["DOC_TABLE_LEGACY"]}`)
  }, _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.openOptionsPopover.goToAdvancedSettings', {
    defaultMessage: 'Get started'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiHorizontalRule"], {
    margin: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiTextAlign"], {
    textAlign: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiButtonEmpty"], {
    iconType: "gear",
    size: "s",
    href: addBasePath(`/app/management/kibana/settings?query=category:(discover)`)
  }, _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.openOptionsPopover.gotToAllSettings', {
    defaultMessage: 'All Discover options'
  })))));
}

function onClose() {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(container);
  document.body.removeChild(container);
  isOpen = false;
}

function openOptionsPopover({
  I18nContext,
  anchorElement
}) {
  if (isOpen) {
    onClose();
    return;
  }

  isOpen = true;
  document.body.appendChild(container);
  const element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I18nContext, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OptionsPopover, {
    onClose: onClose,
    anchorElement: anchorElement
  }));
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(element, container);
}

/***/ }),

/***/ "./public/application/apps/main/components/top_nav/open_search_panel.tsx":
/*!*******************************************************************************!*\
  !*** ./public/application/apps/main/components/top_nav/open_search_panel.tsx ***!
  \*******************************************************************************/
/*! exports provided: OpenSearchPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenSearchPanel", function() { return OpenSearchPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rison_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rison-node */ "rison-node");
/* harmony import */ var rison_node__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rison_node__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_plugins_saved_objects_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../src/plugins/saved_objects/public */ "plugin/savedObjects/public");
/* harmony import */ var _src_plugins_saved_objects_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_saved_objects_public__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _kibana_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../kibana_services */ "./public/kibana_services.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */







const SEARCH_OBJECT_TYPE = 'search';
function OpenSearchPanel(props) {
  const {
    core: {
      uiSettings,
      savedObjects
    },
    addBasePath
  } = Object(_kibana_services__WEBPACK_IMPORTED_MODULE_6__["getServices"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlyout"], {
    ownFocus: true,
    onClose: props.onClose,
    "data-test-subj": "loadSearchForm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlyoutHeader"], {
    hasBorder: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiTitle"], {
    size: "m"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "discover.topNav.openSearchPanel.openSearchTitle",
    defaultMessage: "Open search"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlyoutBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_plugins_saved_objects_public__WEBPACK_IMPORTED_MODULE_5__["SavedObjectFinderUi"], {
    noItemsMessage: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "discover.topNav.openSearchPanel.noSearchesFoundDescription",
      defaultMessage: "No matching searches found."
    }),
    savedObjectMetaData: [{
      type: SEARCH_OBJECT_TYPE,
      getIconForSavedObject: () => 'discoverApp',
      name: _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.savedSearch.savedObjectName', {
        defaultMessage: 'Saved search'
      })
    }],
    onChoose: id => {
      props.onOpenSavedSearch(id);
      props.onClose();
    },
    uiSettings: uiSettings,
    savedObjects: savedObjects
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlyoutFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexGroup"], {
    justifyContent: "flexEnd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiButton"], {
    fill: true,
    onClick: props.onClose,
    href: addBasePath(`/app/management/kibana/objects?_a=${rison_node__WEBPACK_IMPORTED_MODULE_1___default.a.encode({
      tab: SEARCH_OBJECT_TYPE
    })}`)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "discover.topNav.openSearchPanel.manageSearchesButtonLabel",
    defaultMessage: "Manage searches"
  }))))));
}

/***/ }),

/***/ "./public/application/apps/main/components/top_nav/show_open_search_panel.tsx":
/*!************************************************************************************!*\
  !*** ./public/application/apps/main/components/top_nav/show_open_search_panel.tsx ***!
  \************************************************************************************/
/*! exports provided: showOpenSearchPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showOpenSearchPanel", function() { return showOpenSearchPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _open_search_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./open_search_panel */ "./public/application/apps/main/components/top_nav/open_search_panel.tsx");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */



let isOpen = false;
function showOpenSearchPanel({
  I18nContext,
  onOpenSavedSearch
}) {
  if (isOpen) {
    return;
  }

  isOpen = true;
  const container = document.createElement('div');

  const onClose = () => {
    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(container);
    document.body.removeChild(container);
    isOpen = false;
  };

  document.body.appendChild(container);
  const element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I18nContext, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_open_search_panel__WEBPACK_IMPORTED_MODULE_2__["OpenSearchPanel"], {
    onClose: onClose,
    onOpenSavedSearch: onOpenSavedSearch
  }));
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(element, container);
}

/***/ }),

/***/ "./public/application/apps/main/components/uninitialized/uninitialized.tsx":
/*!*********************************************************************************!*\
  !*** ./public/application/apps/main/components/uninitialized/uninitialized.tsx ***!
  \*********************************************************************************/
/*! exports provided: DiscoverUninitialized */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverUninitialized", function() { return DiscoverUninitialized; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */



const DiscoverUninitialized = ({
  onRefresh
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["I18nProvider"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiEmptyPrompt"], {
    iconType: "discoverApp",
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "discover.uninitializedTitle",
      defaultMessage: "Start searching"
    })),
    body: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "discover.uninitializedText",
      defaultMessage: "Write a query, add some filters, or simply hit Refresh to retrieve results for the current query."
    })),
    actions: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButton"], {
      color: "primary",
      fill: true,
      onClick: onRefresh
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "discover.uninitializedRefreshButtonText",
      defaultMessage: "Refresh data"
    }))
  }));
};

/***/ }),

/***/ "./public/application/apps/main/discover_main_app.tsx":
/*!************************************************************!*\
  !*** ./public/application/apps/main/discover_main_app.tsx ***!
  \************************************************************/
/*! exports provided: DiscoverMainApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverMainApp", function() { return DiscoverMainApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layout */ "./public/application/apps/main/components/layout/index.ts");
/* harmony import */ var _helpers_breadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/breadcrumbs */ "./public/application/helpers/breadcrumbs.ts");
/* harmony import */ var _components_help_menu_help_menu_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/help_menu/help_menu_util */ "./public/application/components/help_menu/help_menu_util.ts");
/* harmony import */ var _services_use_discover_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/use_discover_state */ "./public/application/apps/main/services/use_discover_state.ts");
/* harmony import */ var _services_use_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/use_url */ "./public/application/apps/main/services/use_url.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */






const DiscoverLayoutMemoized = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(_components_layout__WEBPACK_IMPORTED_MODULE_1__["DiscoverLayout"]);
function DiscoverMainApp(props) {
  const {
    services,
    history,
    navigateTo,
    indexPatternList
  } = props.opts;
  const {
    chrome,
    docLinks,
    uiSettings: config,
    data
  } = services;
  /**
   * State related logic
   */

  const {
    data$,
    indexPattern,
    onChangeIndexPattern,
    onUpdateQuery,
    refetch$,
    resetSavedSearch,
    savedSearch,
    searchSource,
    state,
    stateContainer
  } = Object(_services_use_discover_state__WEBPACK_IMPORTED_MODULE_4__["useDiscoverState"])({
    services,
    history,
    initialIndexPattern: props.indexPattern,
    initialSavedSearch: props.opts.savedSearch
  });
  /**
   * Url / Routing logic
   */

  Object(_services_use_url__WEBPACK_IMPORTED_MODULE_5__["useUrl"])({
    history,
    resetSavedSearch
  });
  /**
   * SavedSearch depended initializing
   */

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const pageTitleSuffix = savedSearch.id && savedSearch.title ? `: ${savedSearch.title}` : '';
    chrome.docTitle.change(`Discover${pageTitleSuffix}`);
    Object(_helpers_breadcrumbs__WEBPACK_IMPORTED_MODULE_2__["setBreadcrumbsTitle"])(savedSearch, chrome);
    return () => {
      data.search.session.clear();
    };
  }, [savedSearch, chrome, docLinks, refetch$, stateContainer, data, config]);
  /**
   * Initializing syncing with state and help menu
   */

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object(_components_help_menu_help_menu_util__WEBPACK_IMPORTED_MODULE_3__["addHelpMenuToAppChrome"])(chrome, docLinks);
  }, [stateContainer, chrome, docLinks]);
  const resetCurrentSavedSearch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    resetSavedSearch(savedSearch.id);
  }, [resetSavedSearch, savedSearch]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DiscoverLayoutMemoized, {
    indexPattern: indexPattern,
    indexPatternList: indexPatternList,
    onChangeIndexPattern: onChangeIndexPattern,
    onUpdateQuery: onUpdateQuery,
    resetSavedSearch: resetCurrentSavedSearch,
    navigateTo: navigateTo,
    savedSearch: savedSearch,
    savedSearchData$: data$,
    savedSearchRefetch$: refetch$,
    searchSource: searchSource,
    services: services,
    state: state,
    stateContainer: stateContainer
  });
}

/***/ }),

/***/ "./public/application/apps/main/index.ts":
/*!***********************************************!*\
  !*** ./public/application/apps/main/index.ts ***!
  \***********************************************/
/*! exports provided: DiscoverMainApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _discover_main_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discover_main_app */ "./public/application/apps/main/discover_main_app.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiscoverMainApp", function() { return _discover_main_app__WEBPACK_IMPORTED_MODULE_0__["DiscoverMainApp"]; });

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


/***/ }),

/***/ "./public/application/apps/main/services/discover_search_session.ts":
/*!**************************************************************************!*\
  !*** ./public/application/apps/main/services/discover_search_session.ts ***!
  \**************************************************************************/
/*! exports provided: DiscoverSearchSessionManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverSearchSessionManager", function() { return DiscoverSearchSessionManager; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../src/plugins/kibana_utils/public */ "plugin/kibanaUtils/public");
/* harmony import */ var _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../url_generator */ "./public/url_generator.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */




/**
 * Helps with state management of search session and {@link SEARCH_SESSION_ID_QUERY_PARAM} in the URL
 */
class DiscoverSearchSessionManager {
  /**
   * Notifies about `searchSessionId` changes in the URL,
   * skips if `searchSessionId` matches current search session id
   */
  constructor(deps) {
    this.deps = deps;

    _defineProperty(this, "newSearchSessionIdFromURL$", Object(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_1__["createQueryParamObservable"])(this.deps.history, _url_generator__WEBPACK_IMPORTED_MODULE_2__["SEARCH_SESSION_ID_QUERY_PARAM"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(searchSessionId => {
      if (!searchSessionId) return true;
      return !this.deps.session.isCurrentSession(searchSessionId);
    })));

    _defineProperty(this, "getSearchSessionIdFromURL", () => Object(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_1__["getQueryParams"])(this.deps.history.location)[_url_generator__WEBPACK_IMPORTED_MODULE_2__["SEARCH_SESSION_ID_QUERY_PARAM"]]);
  }
  /**
   * Get next session id by either starting or restoring a session.
   * When navigating away from the restored session {@link SEARCH_SESSION_ID_QUERY_PARAM} is removed from the URL using history.replace
   */


  getNextSearchSessionId() {
    var _searchSessionIdFromU;

    let searchSessionIdFromURL = this.getSearchSessionIdFromURL();

    if (searchSessionIdFromURL) {
      if (this.deps.session.isRestore() && this.deps.session.isCurrentSession(searchSessionIdFromURL)) {
        // navigating away from a restored session
        this.removeSearchSessionIdFromURL({
          replace: true
        });
        searchSessionIdFromURL = undefined;
      } else {
        this.deps.session.restore(searchSessionIdFromURL);
      }
    }

    return (_searchSessionIdFromU = searchSessionIdFromURL) !== null && _searchSessionIdFromU !== void 0 ? _searchSessionIdFromU : this.deps.session.start();
  }
  /**
   * Removes Discovers {@link SEARCH_SESSION_ID_QUERY_PARAM} from the URL
   * @param replace - methods to change the URL
   */


  removeSearchSessionIdFromURL({
    replace = true
  } = {
    replace: true
  }) {
    if (this.hasSearchSessionIdInURL()) {
      Object(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_1__["removeQueryParam"])(this.deps.history, _url_generator__WEBPACK_IMPORTED_MODULE_2__["SEARCH_SESSION_ID_QUERY_PARAM"], replace);
    }
  }
  /**
   * If there is a {@link SEARCH_SESSION_ID_QUERY_PARAM} currently in the URL
   */


  hasSearchSessionIdInURL() {
    return !!this.getSearchSessionIdFromURL();
  }

}

/***/ }),

/***/ "./public/application/apps/main/services/use_discover_state.ts":
/*!*********************************************************************!*\
  !*** ./public/application/apps/main/services/use_discover_state.ts ***!
  \*********************************************************************/
/*! exports provided: useDiscoverState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDiscoverState", function() { return useDiscoverState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _discover_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./discover_state */ "./public/application/apps/main/services/discover_state.ts");
/* harmony import */ var _utils_get_state_defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/get_state_defaults */ "./public/application/apps/main/utils/get_state_defaults.ts");
/* harmony import */ var _utils_resolve_index_pattern__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/resolve_index_pattern */ "./public/application/apps/main/utils/resolve_index_pattern.ts");
/* harmony import */ var _use_saved_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use_saved_search */ "./public/application/apps/main/services/use_saved_search.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../common */ "./common/index.ts");
/* harmony import */ var _use_search_session__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./use_search_session */ "./public/application/apps/main/services/use_search_session.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../types */ "./public/application/types.ts");
/* harmony import */ var _utils_get_switch_index_pattern_app_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/get_switch_index_pattern_app_state */ "./public/application/apps/main/utils/get_switch_index_pattern_app_state.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */










function useDiscoverState({
  services,
  history,
  initialIndexPattern,
  initialSavedSearch
}) {
  const {
    uiSettings: config,
    data,
    filterManager,
    indexPatterns
  } = services;
  const [indexPattern, setIndexPattern] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialIndexPattern);
  const [savedSearch, setSavedSearch] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialSavedSearch);
  const useNewFieldsApi = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => !config.get(_common__WEBPACK_IMPORTED_MODULE_6__["SEARCH_FIELDS_FROM_SOURCE"]), [config]);
  const timefilter = data.query.timefilter.timefilter;
  const searchSource = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    savedSearch.searchSource.setField('index', indexPattern);
    return savedSearch.searchSource.createChild();
  }, [savedSearch.searchSource, indexPattern]);
  const stateContainer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Object(_discover_state__WEBPACK_IMPORTED_MODULE_2__["getState"])({
    getStateDefaults: () => Object(_utils_get_state_defaults__WEBPACK_IMPORTED_MODULE_3__["getStateDefaults"])({
      config,
      data,
      savedSearch
    }),
    storeInSessionStorage: config.get('state:storeInSessionStorage'),
    history,
    toasts: services.core.notifications.toasts,
    uiSettings: config
  }), [config, data, history, savedSearch, services.core.notifications.toasts]);
  const {
    appStateContainer
  } = stateContainer;
  const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(appStateContainer.getState());
  /**
   * Search session logic
   */

  const searchSessionManager = Object(_use_search_session__WEBPACK_IMPORTED_MODULE_7__["useSearchSession"])({
    services,
    history,
    stateContainer,
    savedSearch
  });
  const initialFetchStatus = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    // A saved search is created on every page load, so we check the ID to see if we're loading a
    // previously saved search or if it is just transient
    const shouldSearchOnPageLoad = config.get(_common__WEBPACK_IMPORTED_MODULE_6__["SEARCH_ON_PAGE_LOAD_SETTING"]) || savedSearch.id !== undefined || timefilter.getRefreshInterval().pause === false || searchSessionManager.hasSearchSessionIdInURL();
    return shouldSearchOnPageLoad ? _types__WEBPACK_IMPORTED_MODULE_8__["FetchStatus"].LOADING : _types__WEBPACK_IMPORTED_MODULE_8__["FetchStatus"].UNINITIALIZED;
  }, [config, savedSearch.id, searchSessionManager, timefilter]);
  /**
   * Data fetching logic
   */

  const {
    data$,
    refetch$,
    reset
  } = Object(_use_saved_search__WEBPACK_IMPORTED_MODULE_5__["useSavedSearch"])({
    indexPattern,
    initialFetchStatus,
    searchSessionManager,
    searchSource,
    services,
    stateContainer,
    useNewFieldsApi
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const stopSync = stateContainer.initializeAndSync(indexPattern, filterManager, data);
    return () => {
      stopSync();
    };
  }, [stateContainer, filterManager, data, indexPattern]);
  /**
   * Track state changes that should trigger a fetch
   */

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const unsubscribe = appStateContainer.subscribe(async nextState => {
      const {
        hideChart,
        interval,
        sort,
        index
      } = state; // chart was hidden, now it should be displayed, so data is needed

      const chartDisplayChanged = nextState.hideChart !== hideChart && hideChart;
      const chartIntervalChanged = nextState.interval !== interval;
      const docTableSortChanged = !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(nextState.sort, sort);
      const indexPatternChanged = !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(nextState.index, index); // NOTE: this is also called when navigating from discover app to context app

      if (nextState.index && indexPatternChanged) {
        /**
         *  Without resetting the fetch state, e.g. a time column would be displayed when switching
         *  from a index pattern without to a index pattern with time filter for a brief moment
         *  That's because appState is updated before savedSearchData$
         *  The following line of code catches this, but should be improved
         */
        reset();
        const nextIndexPattern = await Object(_utils_resolve_index_pattern__WEBPACK_IMPORTED_MODULE_4__["loadIndexPattern"])(nextState.index, indexPatterns, config);

        if (nextIndexPattern) {
          setIndexPattern(nextIndexPattern.loaded);
        }
      }

      if (chartDisplayChanged || chartIntervalChanged || docTableSortChanged) {
        refetch$.next();
      }

      setState(nextState);
    });
    return () => unsubscribe();
  }, [config, indexPatterns, appStateContainer, setState, state, refetch$, data$, reset]);
  const resetSavedSearch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async id => {
    const newSavedSearch = await services.getSavedSearchById(id);
    const newIndexPattern = newSavedSearch.searchSource.getField('index') || indexPattern;
    newSavedSearch.searchSource.setField('index', newIndexPattern);
    const newAppState = Object(_utils_get_state_defaults__WEBPACK_IMPORTED_MODULE_3__["getStateDefaults"])({
      config,
      data,
      savedSearch: newSavedSearch
    });
    await stateContainer.replaceUrlAppState(newAppState);
    setState(newAppState);

    if (savedSearch.id !== newSavedSearch.id) {
      setSavedSearch(newSavedSearch);
    }
  }, [services, indexPattern, config, data, stateContainer, savedSearch.id]);
  /**
   * Function triggered when user changes index pattern in the sidebar
   */

  const onChangeIndexPattern = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async id => {
    const nextIndexPattern = await indexPatterns.get(id);

    if (nextIndexPattern && indexPattern) {
      const nextAppState = Object(_utils_get_switch_index_pattern_app_state__WEBPACK_IMPORTED_MODULE_9__["getSwitchIndexPatternAppState"])(indexPattern, nextIndexPattern, state.columns || [], state.sort || [], config.get(_common__WEBPACK_IMPORTED_MODULE_6__["MODIFY_COLUMNS_ON_SWITCH"]), config.get(_common__WEBPACK_IMPORTED_MODULE_6__["SORT_DEFAULT_ORDER_SETTING"]));
      stateContainer.setAppState(nextAppState);
    }
  }, [config, indexPattern, indexPatterns, state.columns, state.sort, stateContainer]);
  /**
   * Function triggered when the user changes the query in the search bar
   */

  const onUpdateQuery = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((_payload, isUpdate) => {
    if (isUpdate === false) {
      searchSessionManager.removeSearchSessionIdFromURL({
        replace: false
      });
      refetch$.next();
    }
  }, [refetch$, searchSessionManager]);
  /**
   * Initial data fetching, also triggered when index pattern changes
   */

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!indexPattern) {
      return;
    }

    if (initialFetchStatus === _types__WEBPACK_IMPORTED_MODULE_8__["FetchStatus"].LOADING) {
      refetch$.next();
    }
  }, [initialFetchStatus, refetch$, indexPattern, data$]);
  return {
    data$,
    indexPattern,
    refetch$,
    resetSavedSearch,
    onChangeIndexPattern,
    onUpdateQuery,
    savedSearch,
    searchSource,
    setState,
    state,
    stateContainer
  };
}

/***/ }),

/***/ "./public/application/apps/main/services/use_saved_search.ts":
/*!*******************************************************************!*\
  !*** ./public/application/apps/main/services/use_saved_search.ts ***!
  \*******************************************************************/
/*! exports provided: useSavedSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSavedSearch", function() { return useSavedSearch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_plugins_data_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../src/plugins/data/common */ "plugin/data/common");
/* harmony import */ var _src_plugins_data_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_data_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_plugins_inspector_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../src/plugins/inspector/public */ "plugin/inspector/public");
/* harmony import */ var _src_plugins_inspector_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_inspector_public__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../src/plugins/data/public */ "plugin/data/public");
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_data_public__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_calc_field_counts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/calc_field_counts */ "./public/application/apps/main/utils/calc_field_counts.ts");
/* harmony import */ var _utils_validate_time_range__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/validate_time_range */ "./public/application/apps/main/utils/validate_time_range.ts");
/* harmony import */ var _utils_update_search_source__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/update_search_source */ "./public/application/apps/main/utils/update_search_source.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils */ "./public/application/apps/main/utils/index.ts");
/* harmony import */ var _components_chart_point_series__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/chart/point_series */ "./public/application/apps/main/components/chart/point_series.ts");
/* harmony import */ var _utils_use_singleton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/use_singleton */ "./public/application/apps/main/utils/use_singleton.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../types */ "./public/application/types.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */















/**
 * This hook return 2 observables, refetch$ allows to trigger data fetching, data$ to subscribe
 * to the data fetching
 */
const useSavedSearch = ({
  indexPattern,
  initialFetchStatus,
  searchSessionManager,
  searchSource,
  services,
  stateContainer,
  useNewFieldsApi
}) => {
  const {
    data,
    filterManager
  } = services;
  const timefilter = data.query.timefilter.timefilter;
  /**
   * The observable the UI (aka React component) subscribes to get notified about
   * the changes in the data fetching process (high level: fetching started, data was received)
   */

  const data$ = Object(_utils_use_singleton__WEBPACK_IMPORTED_MODULE_12__["useSingleton"])(() => new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
    state: initialFetchStatus
  }));
  /**
   * The observable to trigger data fetching in UI
   * By refetch$.next('reset') rows and fieldcounts are reset to allow e.g. editing of runtime fields
   * to be processed correctly
   */

  const refetch$ = Object(_utils_use_singleton__WEBPACK_IMPORTED_MODULE_12__["useSingleton"])(() => new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]());
  /**
   * Values that shouldn't trigger re-rendering when changed
   */

  const refs = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    fetchCounter: 0,
    fieldCounts: {},
    fetchStatus: initialFetchStatus
  });
  /**
   * Resets the fieldCounts cache and sends a reset message
   * It is set to initial state (no documents, fetchCounter to 0)
   * Needed when index pattern is switched or a new runtime field is added
   */

  const sendResetMsg = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(fetchStatus => {
    refs.current.fieldCounts = {};
    refs.current.fetchStatus = fetchStatus !== null && fetchStatus !== void 0 ? fetchStatus : initialFetchStatus;
    data$.next({
      state: initialFetchStatus,
      fetchCounter: 0,
      rows: [],
      fieldCounts: {},
      chartData: undefined,
      bucketInterval: undefined,
      fetchError: undefined
    });
  }, [data$, initialFetchStatus]);
  /**
   * Function to fetch data from ElasticSearch
   */

  const fetchAll = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((reset = false) => {
    if (!Object(_utils_validate_time_range__WEBPACK_IMPORTED_MODULE_8__["validateTimeRange"])(timefilter.getTime(), services.toastNotifications)) {
      return Promise.reject();
    }

    const inspectorAdapters = {
      requests: new _src_plugins_inspector_public__WEBPACK_IMPORTED_MODULE_5__["RequestAdapter"]()
    };
    if (refs.current.abortController) refs.current.abortController.abort();
    refs.current.abortController = new AbortController();
    const sessionId = searchSessionManager.getNextSearchSessionId();

    if (reset) {
      sendResetMsg(_types__WEBPACK_IMPORTED_MODULE_13__["FetchStatus"].LOADING);
    } else {
      // Let the UI know, data fetching started
      data$.next({
        state: _types__WEBPACK_IMPORTED_MODULE_13__["FetchStatus"].LOADING,
        fetchCounter: ++refs.current.fetchCounter
      });
      refs.current.fetchStatus = _types__WEBPACK_IMPORTED_MODULE_13__["FetchStatus"].LOADING;
    }

    const {
      sort,
      hideChart,
      interval
    } = stateContainer.appStateContainer.getState();
    Object(_utils_update_search_source__WEBPACK_IMPORTED_MODULE_9__["updateSearchSource"])(searchSource, false, {
      indexPattern,
      services,
      sort: sort,
      useNewFieldsApi
    });
    const chartAggConfigs = indexPattern.timeFieldName && !hideChart && interval ? Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getChartAggConfigs"])(searchSource, interval, data) : undefined;

    if (!chartAggConfigs) {
      searchSource.removeField('aggs');
    } else {
      searchSource.setField('aggs', chartAggConfigs.toDsl());
    }

    const searchSourceFetch$ = searchSource.fetch$({
      abortSignal: refs.current.abortController.signal,
      sessionId,
      inspector: {
        adapter: inspectorAdapters.requests,
        title: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.inspectorRequestDataTitle', {
          defaultMessage: 'data'
        }),
        description: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.inspectorRequestDescriptionDocument', {
          defaultMessage: 'This request queries Elasticsearch to fetch the data for the search.'
        })
      }
    });
    searchSourceFetch$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(res => Object(_src_plugins_data_common__WEBPACK_IMPORTED_MODULE_4__["isCompleteResponse"])(res))).subscribe(res => {
      const documents = res.rawResponse.hits.hits;
      const message = {
        state: _types__WEBPACK_IMPORTED_MODULE_13__["FetchStatus"].COMPLETE,
        rows: documents,
        inspectorAdapters,
        fieldCounts: Object(_utils_calc_field_counts__WEBPACK_IMPORTED_MODULE_7__["calcFieldCounts"])(refs.current.fieldCounts, documents, indexPattern),
        hits: res.rawResponse.hits.total,
        fetchError: undefined
      };

      if (chartAggConfigs) {
        const bucketAggConfig = chartAggConfigs.aggs[1];
        const tabifiedData = Object(_src_plugins_data_common__WEBPACK_IMPORTED_MODULE_4__["tabifyAggResponse"])(chartAggConfigs, res.rawResponse);
        const dimensions = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getDimensions"])(chartAggConfigs, data);

        if (dimensions) {
          if (bucketAggConfig && _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_6__["search"].aggs.isDateHistogramBucketAggConfig(bucketAggConfig)) {
            var _bucketAggConfig$buck;

            message.bucketInterval = (_bucketAggConfig$buck = bucketAggConfig.buckets) === null || _bucketAggConfig$buck === void 0 ? void 0 : _bucketAggConfig$buck.getInterval();
          }

          message.chartData = Object(_components_chart_point_series__WEBPACK_IMPORTED_MODULE_11__["buildPointSeriesData"])(tabifiedData, dimensions);
        }
      }

      refs.current.fieldCounts = message.fieldCounts;
      refs.current.fetchStatus = message.state;
      data$.next(message);
    }, error => {
      if (error instanceof Error && error.name === 'AbortError') return;
      data.search.showError(error);
      refs.current.fetchStatus = _types__WEBPACK_IMPORTED_MODULE_13__["FetchStatus"].ERROR;
      data$.next({
        state: _types__WEBPACK_IMPORTED_MODULE_13__["FetchStatus"].ERROR,
        inspectorAdapters,
        fetchError: error
      });
    }, () => {
      var _refs$current$autoRef, _refs$current;

      (_refs$current$autoRef = (_refs$current = refs.current).autoRefreshDoneCb) === null || _refs$current$autoRef === void 0 ? void 0 : _refs$current$autoRef.call(_refs$current);
      refs.current.autoRefreshDoneCb = undefined;
    });
  }, [timefilter, services, searchSessionManager, stateContainer.appStateContainer, searchSource, indexPattern, useNewFieldsApi, data, sendResetMsg, data$]);
  /**
   * This part takes care of triggering the data fetching by creating and subscribing
   * to an observable of various possible changes in state
   */

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetch$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(refetch$, filterManager.getFetches$(), timefilter.getFetch$(), timefilter.getAutoRefreshFetch$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(done => {
      refs.current.autoRefreshDoneCb = done;
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(() => refs.current.fetchStatus !== _types__WEBPACK_IMPORTED_MODULE_13__["FetchStatus"].LOADING)), data.query.queryString.getUpdates$(), searchSessionManager.newSearchSessionIdFromURL$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(sessionId => !!sessionId))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(100));
    const subscription = fetch$.subscribe(val => {
      try {
        fetchAll(val === 'reset');
      } catch (error) {
        data$.next({
          state: _types__WEBPACK_IMPORTED_MODULE_13__["FetchStatus"].ERROR,
          fetchError: error
        });
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [data$, data.query.queryString, filterManager, refetch$, searchSessionManager.newSearchSessionIdFromURL$, timefilter, fetchAll]);
  return {
    refetch$,
    data$,
    reset: sendResetMsg
  };
};

/***/ }),

/***/ "./public/application/apps/main/services/use_search_session.ts":
/*!*********************************************************************!*\
  !*** ./public/application/apps/main/services/use_search_session.ts ***!
  \*********************************************************************/
/*! exports provided: useSearchSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSearchSession", function() { return useSearchSession; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _discover_search_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discover_search_session */ "./public/application/apps/main/services/discover_search_session.ts");
/* harmony import */ var _discover_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./discover_state */ "./public/application/apps/main/services/discover_state.ts");
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../src/plugins/data/public */ "plugin/data/public");
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */




function useSearchSession({
  services,
  history,
  stateContainer,
  savedSearch
}) {
  const {
    data,
    capabilities
  } = services;
  /**
   * Search session logic
   */

  const searchSessionManager = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => new _discover_search_session__WEBPACK_IMPORTED_MODULE_1__["DiscoverSearchSessionManager"]({
    history,
    session: data.search.session
  }), [data.search.session, history]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    data.search.session.enableStorage(Object(_discover_state__WEBPACK_IMPORTED_MODULE_2__["createSearchSessionRestorationDataProvider"])({
      appStateContainer: stateContainer.appStateContainer,
      data,
      getSavedSearch: () => savedSearch
    }), {
      isDisabled: () => capabilities.discover.storeSearchSession ? {
        disabled: false
      } : {
        disabled: true,
        reasonText: _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3__["noSearchSessionStorageCapabilityMessage"]
      }
    });
  }, [capabilities.discover.storeSearchSession, data, savedSearch, stateContainer.appStateContainer]);
  return searchSessionManager;
}

/***/ }),

/***/ "./public/application/apps/main/services/use_url.ts":
/*!**********************************************************!*\
  !*** ./public/application/apps/main/services/use_url.ts ***!
  \**********************************************************/
/*! exports provided: useUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUrl", function() { return useUrl; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

function useUrl({
  history,
  resetSavedSearch
}) {
  /**
   * Url / Routing logic
   */
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // this listener is waiting for such a path http://localhost:5601/app/discover#/
    // which could be set through pressing "New" button in top nav or go to "Discover" plugin from the sidebar
    // to reload the page in a right way
    const unlistenHistoryBasePath = history.listen(({
      pathname,
      search,
      hash
    }) => {
      if (!search && !hash && pathname === '/') {
        resetSavedSearch();
      }
    });
    return () => unlistenHistoryBasePath();
  }, [history, resetSavedSearch]);
}

/***/ }),

/***/ "./public/application/apps/main/utils/calc_field_counts.ts":
/*!*****************************************************************!*\
  !*** ./public/application/apps/main/utils/calc_field_counts.ts ***!
  \*****************************************************************/
/*! exports provided: calcFieldCounts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcFieldCounts", function() { return calcFieldCounts; });
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 * This function is recording stats of the available fields, for usage in sidebar and sharing
 * Note that this values aren't displayed, but used for internal calculations
 */
function calcFieldCounts(counts = {}, rows, indexPattern) {
  for (const hit of rows) {
    const fields = Object.keys(indexPattern.flattenHit(hit));

    for (const fieldName of fields) {
      counts[fieldName] = (counts[fieldName] || 0) + 1;
    }
  }

  return counts;
}

/***/ }),

/***/ "./public/application/apps/main/utils/get_chart_agg_configs.ts":
/*!*********************************************************************!*\
  !*** ./public/application/apps/main/utils/get_chart_agg_configs.ts ***!
  \*********************************************************************/
/*! exports provided: getChartAggConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartAggConfigs", function() { return getChartAggConfigs; });
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 * Helper function to apply or remove aggregations to a given search source used for gaining data
 * for Discover's histogram vis
 */
function getChartAggConfigs(searchSource, histogramInterval, data) {
  const indexPattern = searchSource.getField('index');
  const visStateAggs = [{
    type: 'count',
    schema: 'metric'
  }, {
    type: 'date_histogram',
    schema: 'segment',
    params: {
      field: indexPattern.timeFieldName,
      interval: histogramInterval,
      timeRange: data.query.timefilter.timefilter.getTime()
    }
  }];
  return data.search.aggs.createAggConfigs(indexPattern, visStateAggs);
}

/***/ }),

/***/ "./public/application/apps/main/utils/get_dimensions.ts":
/*!**************************************************************!*\
  !*** ./public/application/apps/main/utils/get_dimensions.ts ***!
  \**************************************************************/
/*! exports provided: getDimensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDimensions", function() { return getDimensions; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_datemath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/datemath */ "../../node_modules/@elastic/datemath/target_node/index.js");
/* harmony import */ var _elastic_datemath__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_datemath__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../src/plugins/data/public */ "plugin/data/public");
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_data_public__WEBPACK_IMPORTED_MODULE_2__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */



function getDimensions(aggs, data) {
  const [metric, agg] = aggs.aggs;
  const {
    from,
    to
  } = data.query.timefilter.timefilter.getTime();
  agg.params.timeRange = {
    from: _elastic_datemath__WEBPACK_IMPORTED_MODULE_1___default.a.parse(from),
    to: _elastic_datemath__WEBPACK_IMPORTED_MODULE_1___default.a.parse(to, {
      roundUp: true
    })
  };
  const bounds = agg.params.timeRange ? data.query.timefilter.timefilter.calculateBounds(agg.params.timeRange) : null;
  const buckets = _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_2__["search"].aggs.isDateHistogramBucketAggConfig(agg) ? agg.buckets : undefined;

  if (!buckets || !bounds) {
    return;
  }

  const {
    esUnit,
    esValue
  } = buckets.getInterval();
  return {
    x: {
      accessor: 0,
      label: agg.makeLabel(),
      format: agg.toSerializedFieldFormat(),
      params: {
        date: true,
        interval: moment__WEBPACK_IMPORTED_MODULE_0___default.a.duration(esValue, esUnit),
        intervalESValue: esValue,
        intervalESUnit: esUnit,
        format: buckets.getScaledDateFormat(),
        bounds
      }
    },
    y: {
      accessor: 1,
      format: metric.toSerializedFieldFormat(),
      label: metric.makeLabel()
    }
  };
}

/***/ }),

/***/ "./public/application/apps/main/utils/get_result_state.ts":
/*!****************************************************************!*\
  !*** ./public/application/apps/main/utils/get_result_state.ts ***!
  \****************************************************************/
/*! exports provided: resultStatuses, getResultState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resultStatuses", function() { return resultStatuses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResultState", function() { return getResultState; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../types */ "./public/application/types.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

const resultStatuses = {
  UNINITIALIZED: 'uninitialized',
  LOADING: 'loading',
  // initial data load
  READY: 'ready',
  // results came back
  NO_RESULTS: 'none' // no results came back

};
/**
 * Returns the current state of the result, depends on fetchStatus and the given fetched rows
 * Determines what is displayed in Discover main view (loading view, data view, empty data view, ...)
 */

function getResultState(fetchStatus, rows) {
  if (fetchStatus === _types__WEBPACK_IMPORTED_MODULE_0__["FetchStatus"].UNINITIALIZED) {
    return resultStatuses.UNINITIALIZED;
  }

  const rowsEmpty = !Array.isArray(rows) || rows.length === 0;
  if (rowsEmpty && fetchStatus === _types__WEBPACK_IMPORTED_MODULE_0__["FetchStatus"].LOADING) return resultStatuses.LOADING;else if (!rowsEmpty) return resultStatuses.READY;else return resultStatuses.NO_RESULTS;
}

/***/ }),

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

/***/ }),

/***/ "./public/application/apps/main/utils/get_state_defaults.ts":
/*!******************************************************************!*\
  !*** ./public/application/apps/main/utils/get_state_defaults.ts ***!
  \******************************************************************/
/*! exports provided: getStateDefaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStateDefaults", function() { return getStateDefaults; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../common */ "./common/index.ts");
/* harmony import */ var _angular_doc_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../angular/doc_table */ "./public/application/angular/doc_table/index.ts");
/* harmony import */ var _angular_doc_table_lib_get_default_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../angular/doc_table/lib/get_default_sort */ "./public/application/angular/doc_table/lib/get_default_sort.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */





function getDefaultColumns(savedSearch, config) {
  if (savedSearch.columns && savedSearch.columns.length > 0) {
    return [...savedSearch.columns];
  }

  return [...config.get(_common__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_COLUMNS_SETTING"])];
}

function getStateDefaults({
  config,
  data,
  savedSearch
}) {
  const searchSource = savedSearch.searchSource;
  const indexPattern = savedSearch.searchSource.getField('index');
  const query = searchSource.getField('query') || data.query.queryString.getDefaultQuery();
  const sort = Object(_angular_doc_table__WEBPACK_IMPORTED_MODULE_2__["getSortArray"])(savedSearch.sort, indexPattern);
  const columns = getDefaultColumns(savedSearch, config);
  const defaultState = {
    query,
    sort: !sort.length ? Object(_angular_doc_table_lib_get_default_sort__WEBPACK_IMPORTED_MODULE_3__["getDefaultSort"])(indexPattern, config.get(_common__WEBPACK_IMPORTED_MODULE_1__["SORT_DEFAULT_ORDER_SETTING"], 'desc')) : sort,
    columns,
    index: indexPattern.id,
    interval: 'auto',
    filters: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(searchSource.getOwnField('filter'))
  };

  if (savedSearch.grid) {
    defaultState.grid = savedSearch.grid;
  }

  if (savedSearch.hideChart) {
    defaultState.hideChart = savedSearch.hideChart;
  }

  return defaultState;
}

/***/ }),

/***/ "./public/application/apps/main/utils/get_switch_index_pattern_app_state.ts":
/*!**********************************************************************************!*\
  !*** ./public/application/apps/main/utils/get_switch_index_pattern_app_state.ts ***!
  \**********************************************************************************/
/*! exports provided: getSwitchIndexPatternAppState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSwitchIndexPatternAppState", function() { return getSwitchIndexPatternAppState; });
/* harmony import */ var _angular_doc_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../angular/doc_table */ "./public/application/angular/doc_table/index.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


/**
 * Helper function to remove or adapt the currently selected columns/sort to be valid with the next
 * index pattern, returns a new state object
 */
function getSwitchIndexPatternAppState(currentIndexPattern, nextIndexPattern, currentColumns, currentSort, modifyColumns = true, sortDirection = 'desc') {
  const nextColumns = modifyColumns ? currentColumns.filter(column => nextIndexPattern.fields.getByName(column) || !currentIndexPattern.fields.getByName(column)) : currentColumns;
  const columns = nextColumns.length ? nextColumns : []; // when switching from an index pattern with timeField to an index pattern without timeField
  // filter out sorting by timeField in case it is set. index patterns without timeField don't
  // prepend this field in the table, so in legacy grid you would need to add this column to
  // remove sorting

  const nextSort = Object(_angular_doc_table__WEBPACK_IMPORTED_MODULE_0__["getSortArray"])(currentSort, nextIndexPattern).filter(value => {
    return nextIndexPattern.timeFieldName || value[0] !== currentIndexPattern.timeFieldName;
  });
  return {
    index: nextIndexPattern.id,
    columns,
    sort: nextIndexPattern.timeFieldName && !nextSort.length ? [[nextIndexPattern.timeFieldName, sortDirection]] : nextSort
  };
}

/***/ }),

/***/ "./public/application/apps/main/utils/index.ts":
/*!*****************************************************!*\
  !*** ./public/application/apps/main/utils/index.ts ***!
  \*****************************************************/
/*! exports provided: getChartAggConfigs, getDimensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_chart_agg_configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get_chart_agg_configs */ "./public/application/apps/main/utils/get_chart_agg_configs.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChartAggConfigs", function() { return _get_chart_agg_configs__WEBPACK_IMPORTED_MODULE_0__["getChartAggConfigs"]; });

/* harmony import */ var _get_dimensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get_dimensions */ "./public/application/apps/main/utils/get_dimensions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDimensions", function() { return _get_dimensions__WEBPACK_IMPORTED_MODULE_1__["getDimensions"]; });

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */



/***/ }),

/***/ "./public/application/apps/main/utils/persist_saved_search.ts":
/*!********************************************************************!*\
  !*** ./public/application/apps/main/utils/persist_saved_search.ts ***!
  \********************************************************************/
/*! exports provided: persistSavedSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistSavedSearch", function() { return persistSavedSearch; });
/* harmony import */ var _update_search_source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update_search_source */ "./public/application/apps/main/utils/update_search_source.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


/**
 * Helper function to update and persist the given savedSearch
 */
async function persistSavedSearch(savedSearch, {
  indexPattern,
  onError,
  onSuccess,
  services,
  saveOptions,
  state
}) {
  Object(_update_search_source__WEBPACK_IMPORTED_MODULE_0__["updateSearchSource"])(savedSearch.searchSource, true, {
    indexPattern,
    services,
    sort: state.sort,
    useNewFieldsApi: false
  });
  savedSearch.columns = state.columns || [];
  savedSearch.sort = state.sort || [];

  if (state.grid) {
    savedSearch.grid = state.grid;
  }

  if (typeof state.hideChart !== 'undefined') {
    savedSearch.hideChart = state.hideChart;
  }

  try {
    const id = await savedSearch.save(saveOptions);
    onSuccess(id);
    return {
      id
    };
  } catch (saveError) {
    onError(saveError, savedSearch);
    return {
      error: saveError
    };
  }
}

/***/ }),

/***/ "./public/application/apps/main/utils/update_search_source.ts":
/*!********************************************************************!*\
  !*** ./public/application/apps/main/utils/update_search_source.ts ***!
  \********************************************************************/
/*! exports provided: updateSearchSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSearchSource", function() { return updateSearchSource; });
/* harmony import */ var _angular_doc_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../angular/doc_table */ "./public/application/angular/doc_table/index.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../common */ "./common/index.ts");
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../src/plugins/data/public */ "plugin/data/public");
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_data_public__WEBPACK_IMPORTED_MODULE_2__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */



/**
 * Helper function to update the given searchSource before fetching/sharing/persisting
 */

function updateSearchSource(searchSource, persist = true, {
  indexPattern,
  services,
  sort,
  useNewFieldsApi
}) {
  const {
    uiSettings,
    data
  } = services;
  const usedSort = Object(_angular_doc_table__WEBPACK_IMPORTED_MODULE_0__["getSortForSearchSource"])(sort, indexPattern, uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_1__["SORT_DEFAULT_ORDER_SETTING"]));
  const usedSearchSource = persist ? searchSource : searchSource.getParent();
  usedSearchSource.setField('index', indexPattern).setField('query', data.query.queryString.getQuery() || null).setField('filter', data.query.filterManager.getFilters());

  if (!persist) {
    searchSource.setField('trackTotalHits', true).setField('size', uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_1__["SAMPLE_SIZE_SETTING"])).setField('sort', usedSort).setField('highlightAll', true).setField('version', true) // Even when searching rollups, we want to use the default strategy so that we get back a
    // document-like response.
    .setPreferredSearchStrategyId('default'); // this is not the default index pattern, it determines that it's not of type rollup

    if (_src_plugins_data_public__WEBPACK_IMPORTED_MODULE_2__["indexPatterns"].isDefault(indexPattern)) {
      searchSource.setField('filter', data.query.timefilter.timefilter.createFilter(indexPattern));
    }

    if (useNewFieldsApi) {
      searchSource.removeField('fieldsFromSource');
      const fields = {
        field: '*'
      };
      fields.include_unmapped = 'true';
      searchSource.setField('fields', [fields]);
    } else {
      searchSource.removeField('fields');
    }
  }
}

/***/ }),

/***/ "./public/application/apps/main/utils/use_singleton.ts":
/*!*************************************************************!*\
  !*** ./public/application/apps/main/utils/use_singleton.ts ***!
  \*************************************************************/
/*! exports provided: useSingleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSingleton", function() { return useSingleton; });
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
 * Allows lazy initialization of a singleton
 * Context: https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
 * Why not using useMemo: We're using the useMemo here also kind of as a guarantee to
 * only instantiate that subject once. Unfortunately useMemo explicitly does not give
 * those guarantees:
 * https://reactjs.org/docs/hooks-reference.html#usememo
 */

function useSingleton(initialize) {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  if (ref.current === null) {
    ref.current = initialize();
  }

  return ref.current;
}

/***/ }),

/***/ "./public/application/apps/main/utils/validate_time_range.ts":
/*!*******************************************************************!*\
  !*** ./public/application/apps/main/utils/validate_time_range.ts ***!
  \*******************************************************************/
/*! exports provided: validateTimeRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateTimeRange", function() { return validateTimeRange; });
/* harmony import */ var _elastic_datemath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/datemath */ "../../node_modules/@elastic/datemath/target_node/index.js");
/* harmony import */ var _elastic_datemath__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_datemath__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */



/**
 * Validates a given time filter range, provided by URL or UI
 * Unless valid, it returns false and displays a notification
 */
function validateTimeRange({
  from,
  to
}, toastNotifications) {
  const fromMoment = _elastic_datemath__WEBPACK_IMPORTED_MODULE_0___default.a.parse(from);
  const toMoment = _elastic_datemath__WEBPACK_IMPORTED_MODULE_0___default.a.parse(to);

  if (!fromMoment || !toMoment || !fromMoment.isValid() || !toMoment.isValid()) {
    toastNotifications.addDanger({
      title: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.notifications.invalidTimeRangeTitle', {
        defaultMessage: `Invalid time range`
      }),
      text: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.notifications.invalidTimeRangeText', {
        defaultMessage: `The provided time range is invalid. (from: '{from}', to: '{to}')`,
        values: {
          from,
          to
        }
      })
    });
    return false;
  }

  return true;
}

/***/ }),

/***/ "./public/application/components/context_app/context_app.scss":
/*!********************************************************************!*\
  !*** ./public/application/components/context_app/context_app.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__kbnThemeTag__) {
  case 'v7dark':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7dark]. Styles were compiled using the [v8dark] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7dark] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./context_app.scss?v8dark */ "./public/application/components/context_app/context_app.scss?v8dark")

  case 'v7light':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7light]. Styles were compiled using the [v8light] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7light] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./context_app.scss?v8light */ "./public/application/components/context_app/context_app.scss?v8light")

  case 'v8dark':
    return __webpack_require__(/*! ./context_app.scss?v8dark */ "./public/application/components/context_app/context_app.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./context_app.scss?v8light */ "./public/application/components/context_app/context_app.scss?v8light");
}

/***/ }),

/***/ "./public/application/components/context_app/context_app.scss?v8dark":
/*!***************************************************************************!*\
  !*** ./public/application/components/context_app/context_app.scss?v8dark ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-0-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./context_app.scss?v8dark */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/components/context_app/context_app.scss?v8dark");

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

/***/ "./public/application/components/context_app/context_app.scss?v8light":
/*!****************************************************************************!*\
  !*** ./public/application/components/context_app/context_app.scss?v8light ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./context_app.scss?v8light */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/components/context_app/context_app.scss?v8light");

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

/***/ "./public/application/components/context_app/context_app.tsx":
/*!*******************************************************************!*\
  !*** ./public/application/components/context_app/context_app.tsx ***!
  \*******************************************************************/
/*! exports provided: ContextApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextApp", function() { return ContextApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context_app.scss */ "./public/application/components/context_app/context_app.scss");
/* harmony import */ var _context_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_context_app_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/plugins/data/public */ "plugin/data/public");
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_data_public__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common */ "./common/index.ts");
/* harmony import */ var _context_error_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context_error_message */ "./public/application/components/context_error_message/index.ts");
/* harmony import */ var _angular_context_query_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../angular/context_query_state */ "./public/application/angular/context_query_state.ts");
/* harmony import */ var _kibana_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../kibana_services */ "./public/kibana_services.ts");
/* harmony import */ var _angular_context_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../angular/context_state */ "./public/application/angular/context_state.ts");
/* harmony import */ var _helpers_use_data_grid_columns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../helpers/use_data_grid_columns */ "./public/application/helpers/use_data_grid_columns.ts");
/* harmony import */ var _use_context_app_state__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./use_context_app_state */ "./public/application/components/context_app/use_context_app_state.ts");
/* harmony import */ var _use_context_app_fetch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./use_context_app_fetch */ "./public/application/components/context_app/use_context_app_fetch.tsx");
/* harmony import */ var _helpers_popularize_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../helpers/popularize_field */ "./public/application/helpers/popularize_field.ts");
/* harmony import */ var _context_app_content__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./context_app_content */ "./public/application/components/context_app/context_app_content.tsx");
/* harmony import */ var _angular_context_api_context__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../angular/context/api/context */ "./public/application/angular/context/api/context.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


















const ContextAppContentMemoized = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(_context_app_content__WEBPACK_IMPORTED_MODULE_16__["ContextAppContent"]);
const ContextApp = ({
  indexPattern,
  indexPatternId,
  anchorId
}) => {
  const services = Object(_kibana_services__WEBPACK_IMPORTED_MODULE_10__["getServices"])();
  const {
    uiSettings: config,
    capabilities,
    indexPatterns,
    navigation,
    filterManager
  } = services;
  const isLegacy = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => config.get(_common__WEBPACK_IMPORTED_MODULE_7__["DOC_TABLE_LEGACY"]), [config]);
  const useNewFieldsApi = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => !config.get(_common__WEBPACK_IMPORTED_MODULE_7__["SEARCH_FIELDS_FROM_SOURCE"]), [config]);
  /**
   * Context app state
   */

  const {
    appState,
    setAppState
  } = Object(_use_context_app_state__WEBPACK_IMPORTED_MODULE_13__["useContextAppState"])({
    indexPattern,
    services
  });
  const prevAppState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  /**
   * Context fetched state
   */

  const {
    fetchedState,
    fetchContextRows,
    fetchAllRows,
    fetchSurroundingRows
  } = Object(_use_context_app_fetch__WEBPACK_IMPORTED_MODULE_14__["useContextAppFetch"])({
    anchorId,
    indexPatternId,
    indexPattern,
    appState,
    useNewFieldsApi,
    services
  });
  /**
   * Fetch docs on ui changes
   */

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!prevAppState.current) {
      fetchAllRows();
    } else if (prevAppState.current.predecessorCount !== appState.predecessorCount) {
      fetchSurroundingRows(_angular_context_api_context__WEBPACK_IMPORTED_MODULE_17__["SurrDocType"].PREDECESSORS);
    } else if (prevAppState.current.successorCount !== appState.successorCount) {
      fetchSurroundingRows(_angular_context_api_context__WEBPACK_IMPORTED_MODULE_17__["SurrDocType"].SUCCESSORS);
    } else if (!Object(_angular_context_state__WEBPACK_IMPORTED_MODULE_11__["isEqualFilters"])(prevAppState.current.filters, appState.filters)) {
      fetchContextRows();
    }

    prevAppState.current = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"])(appState);
  }, [appState, indexPatternId, anchorId, fetchContextRows, fetchAllRows, fetchSurroundingRows]);
  const {
    columns,
    onAddColumn,
    onRemoveColumn,
    onSetColumns
  } = Object(_helpers_use_data_grid_columns__WEBPACK_IMPORTED_MODULE_12__["useDataGridColumns"])({
    capabilities,
    config,
    indexPattern,
    indexPatterns,
    state: appState,
    useNewFieldsApi,
    setAppState
  });
  const rows = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => [...(fetchedState.predecessors || []), ...(fetchedState.anchor._id ? [fetchedState.anchor] : []), ...(fetchedState.successors || [])], [fetchedState.predecessors, fetchedState.anchor, fetchedState.successors]);
  const addFilter = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (field, values, operation) => {
    const newFilters = _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_6__["esFilters"].generateFilters(filterManager, field, values, operation, indexPatternId);
    filterManager.addFilters(newFilters);

    if (indexPatterns) {
      const fieldName = typeof field === 'string' ? field : field.name;
      await Object(_helpers_popularize_field__WEBPACK_IMPORTED_MODULE_15__["popularizeField"])(indexPattern, fieldName, indexPatterns);
    }
  }, [filterManager, indexPatternId, indexPatterns, indexPattern]);
  const TopNavMenu = navigation.ui.TopNavMenu;

  const getNavBarProps = () => {
    return {
      appName: 'context',
      showSearchBar: true,
      showQueryBar: false,
      showFilterBar: true,
      showSaveQuery: false,
      showDatePicker: false,
      indexPatterns: [indexPattern],
      useDefaultBehaviors: true
    };
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__["I18nProvider"], null, fetchedState.anchorStatus.value === _angular_context_query_state__WEBPACK_IMPORTED_MODULE_9__["LoadingStatus"].FAILED ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_error_message__WEBPACK_IMPORTED_MODULE_8__["ContextErrorMessage"], {
    status: fetchedState.anchorStatus
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TopNavMenu, getNavBarProps()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiPage"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      dscDocsPage: !isLegacy
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiPageContent"], {
    paddingSize: "s",
    className: "dscDocsContent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "discover.context.contextOfTitle",
    defaultMessage: "Documents surrounding #{anchorId}",
    values: {
      anchorId
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContextAppContentMemoized, {
    services: services,
    indexPattern: indexPattern,
    useNewFieldsApi: useNewFieldsApi,
    isLegacy: isLegacy,
    columns: columns,
    onAddColumn: onAddColumn,
    onRemoveColumn: onRemoveColumn,
    onSetColumns: onSetColumns,
    sort: appState.sort,
    predecessorCount: appState.predecessorCount,
    successorCount: appState.successorCount,
    setAppState: setAppState,
    addFilter: addFilter,
    rows: rows,
    predecessors: fetchedState.predecessors,
    successors: fetchedState.successors,
    anchorStatus: fetchedState.anchorStatus.value,
    predecessorsStatus: fetchedState.predecessorsStatus.value,
    successorsStatus: fetchedState.successorsStatus.value
  })))));
};

/***/ }),

/***/ "./public/application/components/context_app/context_app_content.tsx":
/*!***************************************************************************!*\
  !*** ./public/application/components/context_app/context_app_content.tsx ***!
  \***************************************************************************/
/*! exports provided: clamp, ContextAppContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextAppContent", function() { return ContextAppContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common */ "./common/index.ts");
/* harmony import */ var _angular_doc_table_create_doc_table_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular/doc_table/create_doc_table_react */ "./public/application/angular/doc_table/create_doc_table_react.tsx");
/* harmony import */ var _angular_context_query_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../angular/context_query_state */ "./public/application/angular/context_query_state.ts");
/* harmony import */ var _angular_context_components_action_bar_action_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../angular/context/components/action_bar/action_bar */ "./public/application/angular/context/components/action_bar/action_bar.tsx");
/* harmony import */ var _discover_grid_discover_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../discover_grid/discover_grid */ "./public/application/components/discover_grid/discover_grid.tsx");
/* harmony import */ var _angular_context_api_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../angular/context/api/context */ "./public/application/angular/context/api/context.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/constants */ "./public/application/components/context_app/utils/constants.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */










const controlColumnIds = ['openDetails'];
function clamp(value) {
  return Math.max(Math.min(_utils_constants__WEBPACK_IMPORTED_MODULE_9__["MAX_CONTEXT_SIZE"], value), _utils_constants__WEBPACK_IMPORTED_MODULE_9__["MIN_CONTEXT_SIZE"]);
}
const DataGridMemoized = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(_discover_grid_discover_grid__WEBPACK_IMPORTED_MODULE_7__["DiscoverGrid"]);
const DocTableLegacyMemoized = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(_angular_doc_table_create_doc_table_react__WEBPACK_IMPORTED_MODULE_4__["DocTableLegacy"]);
const ActionBarMemoized = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(_angular_context_components_action_bar_action_bar__WEBPACK_IMPORTED_MODULE_6__["ActionBar"]);
function ContextAppContent({
  columns,
  onAddColumn,
  onRemoveColumn,
  onSetColumns,
  services,
  indexPattern,
  predecessorCount,
  successorCount,
  rows,
  sort,
  predecessors,
  successors,
  anchorStatus,
  predecessorsStatus,
  successorsStatus,
  useNewFieldsApi,
  isLegacy,
  setAppState,
  addFilter
}) {
  const {
    uiSettings: config
  } = services;
  const [expandedDoc, setExpandedDoc] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const isAnchorLoaded = anchorStatus === _angular_context_query_state__WEBPACK_IMPORTED_MODULE_5__["LoadingStatus"].LOADED;
  const isAnchorLoading = anchorStatus === _angular_context_query_state__WEBPACK_IMPORTED_MODULE_5__["LoadingStatus"].LOADING || anchorStatus === _angular_context_query_state__WEBPACK_IMPORTED_MODULE_5__["LoadingStatus"].UNINITIALIZED;
  const arePredecessorsLoading = predecessorsStatus === _angular_context_query_state__WEBPACK_IMPORTED_MODULE_5__["LoadingStatus"].LOADING || predecessorsStatus === _angular_context_query_state__WEBPACK_IMPORTED_MODULE_5__["LoadingStatus"].UNINITIALIZED;
  const areSuccessorsLoading = successorsStatus === _angular_context_query_state__WEBPACK_IMPORTED_MODULE_5__["LoadingStatus"].LOADING || successorsStatus === _angular_context_query_state__WEBPACK_IMPORTED_MODULE_5__["LoadingStatus"].UNINITIALIZED;
  const showTimeCol = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => !config.get(_common__WEBPACK_IMPORTED_MODULE_3__["DOC_HIDE_TIME_COLUMN_SETTING"], false) && !!indexPattern.timeFieldName, [config, indexPattern]);
  const defaultStepSize = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => parseInt(config.get(_common__WEBPACK_IMPORTED_MODULE_3__["CONTEXT_STEP_SETTING"]), 10), [config]);

  const docTableProps = () => {
    return {
      ariaLabelledBy: 'surDocumentsAriaLabel',
      columns,
      rows: rows,
      indexPattern,
      expandedDoc,
      isLoading: isAnchorLoading,
      sampleSize: 0,
      sort: sort,
      isSortEnabled: false,
      showTimeCol,
      services,
      useNewFieldsApi,
      isPaginationEnabled: false,
      controlColumnIds,
      setExpandedDoc,
      onFilter: addFilter,
      onAddColumn,
      onRemoveColumn,
      onSetColumns
    };
  };

  const legacyDocTableProps = () => {
    return {
      columns,
      indexPattern,
      minimumVisibleRows: rows.length,
      rows,
      onFilter: addFilter,
      onAddColumn,
      onRemoveColumn,
      sort,
      useNewFieldsApi
    };
  };

  const loadingFeedback = () => {
    if (isLegacy && (anchorStatus === _angular_context_query_state__WEBPACK_IMPORTED_MODULE_5__["LoadingStatus"].UNINITIALIZED || anchorStatus === _angular_context_query_state__WEBPACK_IMPORTED_MODULE_5__["LoadingStatus"].LOADING)) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
        textAlign: "center",
        "data-test-subj": "contextApp_loadingIndicator"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
        id: "discover.context.loadingDescription",
        defaultMessage: "Loading..."
      }));
    }

    return null;
  };

  const onChangeCount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((type, count) => {
    const countKey = type === _angular_context_api_context__WEBPACK_IMPORTED_MODULE_8__["SurrDocType"].SUCCESSORS ? 'successorCount' : 'predecessorCount';
    setAppState({
      [countKey]: clamp(count)
    });
  }, [setAppState]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ActionBarMemoized, {
    type: _angular_context_api_context__WEBPACK_IMPORTED_MODULE_8__["SurrDocType"].PREDECESSORS,
    defaultStepSize: defaultStepSize,
    docCount: predecessorCount,
    docCountAvailable: predecessors.length,
    onChangeCount: onChangeCount,
    isLoading: arePredecessorsLoading,
    isDisabled: !isAnchorLoaded
  }), loadingFeedback(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiHorizontalRule"], {
    margin: "xs"
  }), isLegacy && isAnchorLoaded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "discover-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DocTableLegacyMemoized, legacyDocTableProps())), !isLegacy && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dscDocsGrid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DataGridMemoized, docTableProps())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiHorizontalRule"], {
    margin: "xs"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ActionBarMemoized, {
    type: _angular_context_api_context__WEBPACK_IMPORTED_MODULE_8__["SurrDocType"].SUCCESSORS,
    defaultStepSize: defaultStepSize,
    docCount: successorCount,
    docCountAvailable: successors.length,
    onChangeCount: onChangeCount,
    isLoading: areSuccessorsLoading,
    isDisabled: !isAnchorLoaded
  }));
}

/***/ }),

/***/ "./public/application/components/context_app/context_app_legacy_directive.ts":
/*!***********************************************************************************!*\
  !*** ./public/application/components/context_app/context_app_legacy_directive.ts ***!
  \***********************************************************************************/
/*! exports provided: createContextAppLegacy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContextAppLegacy", function() { return createContextAppLegacy; });
/* harmony import */ var _context_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context_app */ "./public/application/components/context_app/context_app.tsx");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
 // eslint-disable-next-line @typescript-eslint/no-explicit-any

function createContextAppLegacy(reactDirective) {
  return reactDirective(_context_app__WEBPACK_IMPORTED_MODULE_0__["ContextApp"], [['indexPattern', {
    watchDepth: 'reference'
  }], ['indexPatternId', {
    watchDepth: 'reference'
  }], ['anchorId', {
    watchDepth: 'reference'
  }]]);
}

/***/ }),

/***/ "./public/application/components/context_app/use_context_app_fetch.tsx":
/*!*****************************************************************************!*\
  !*** ./public/application/components/context_app/use_context_app_fetch.tsx ***!
  \*****************************************************************************/
/*! exports provided: useContextAppFetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useContextAppFetch", function() { return useContextAppFetch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common */ "./common/index.ts");
/* harmony import */ var _angular_context_api_anchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular/context/api/anchor */ "./public/application/angular/context/api/anchor.ts");
/* harmony import */ var _angular_context_api_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../angular/context/api/context */ "./public/application/angular/context/api/context.ts");
/* harmony import */ var _src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/plugins/kibana_react/public */ "plugin/kibanaReact/public");
/* harmony import */ var _src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_context_query_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../angular/context_query_state */ "./public/application/angular/context_query_state.ts");
/* harmony import */ var _angular_context_api_utils_sorting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../angular/context/api/utils/sorting */ "./public/application/angular/context/api/utils/sorting.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */










const createError = (statusKey, reason, error) => ({
  [statusKey]: {
    value: _angular_context_query_state__WEBPACK_IMPORTED_MODULE_7__["LoadingStatus"].FAILED,
    error,
    reason
  }
});

function useContextAppFetch({
  anchorId,
  indexPatternId,
  indexPattern,
  appState,
  useNewFieldsApi,
  services
}) {
  const {
    uiSettings: config,
    data,
    indexPatterns,
    toastNotifications,
    filterManager
  } = services;
  const searchSource = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return data.search.searchSource.createEmpty();
  }, [data.search.searchSource]);
  const tieBreakerField = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Object(_angular_context_api_utils_sorting__WEBPACK_IMPORTED_MODULE_8__["getFirstSortableField"])(indexPattern, config.get(_common__WEBPACK_IMPORTED_MODULE_3__["CONTEXT_TIE_BREAKER_FIELDS_SETTING"])), [config, indexPattern]);
  const fetchAnchor = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return Object(_angular_context_api_anchor__WEBPACK_IMPORTED_MODULE_4__["fetchAnchorProvider"])(indexPatterns, searchSource, useNewFieldsApi);
  }, [indexPatterns, searchSource, useNewFieldsApi]);
  const {
    fetchSurroundingDocs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Object(_angular_context_api_context__WEBPACK_IMPORTED_MODULE_5__["fetchContextProvider"])(indexPatterns, useNewFieldsApi), [indexPatterns, useNewFieldsApi]);
  const [fetchedState, setFetchedState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Object(_angular_context_query_state__WEBPACK_IMPORTED_MODULE_7__["getInitialContextQueryState"])());
  const setState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(values => {
    setFetchedState(prevState => ({ ...prevState,
      ...values
    }));
  }, []);
  const fetchAnchorRow = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async () => {
    const {
      sort
    } = appState;
    const [[, sortDir]] = sort;
    const errorTitle = _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.context.unableToLoadAnchorDocumentDescription', {
      defaultMessage: 'Unable to load the anchor document'
    });

    if (!tieBreakerField) {
      setState(createError('anchorStatus', _angular_context_query_state__WEBPACK_IMPORTED_MODULE_7__["FailureReason"].INVALID_TIEBREAKER));
      toastNotifications.addDanger({
        title: errorTitle,
        text: Object(_src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_6__["toMountPoint"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_6__["MarkdownSimple"], null, _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.context.invalidTieBreakerFiledSetting', {
          defaultMessage: 'Invalid tie breaker field setting'
        })))
      });
      return;
    }

    try {
      setState({
        anchorStatus: {
          value: _angular_context_query_state__WEBPACK_IMPORTED_MODULE_7__["LoadingStatus"].LOADING
        }
      });
      const anchor = await fetchAnchor(indexPatternId, anchorId, [Object(lodash__WEBPACK_IMPORTED_MODULE_2__["fromPairs"])(sort), {
        [tieBreakerField]: sortDir
      }]);
      setState({
        anchor,
        anchorStatus: {
          value: _angular_context_query_state__WEBPACK_IMPORTED_MODULE_7__["LoadingStatus"].LOADED
        }
      });
      return anchor;
    } catch (error) {
      setState(createError('anchorStatus', _angular_context_query_state__WEBPACK_IMPORTED_MODULE_7__["FailureReason"].UNKNOWN, error));
      toastNotifications.addDanger({
        title: errorTitle,
        text: Object(_src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_6__["toMountPoint"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_6__["MarkdownSimple"], null, error.message))
      });
    }
  }, [appState, tieBreakerField, setState, toastNotifications, fetchAnchor, indexPatternId, anchorId]);
  const fetchSurroundingRows = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (type, fetchedAnchor) => {
    const filters = filterManager.getFilters();
    const {
      sort
    } = appState;
    const [[sortField, sortDir]] = sort;
    const count = type === _angular_context_api_context__WEBPACK_IMPORTED_MODULE_5__["SurrDocType"].PREDECESSORS ? appState.predecessorCount : appState.successorCount;
    const anchor = fetchedAnchor || fetchedState.anchor;
    const statusKey = `${type}Status`;
    const errorTitle = _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.context.unableToLoadDocumentDescription', {
      defaultMessage: 'Unable to load documents'
    });

    try {
      setState({
        [statusKey]: {
          value: _angular_context_query_state__WEBPACK_IMPORTED_MODULE_7__["LoadingStatus"].LOADING
        }
      });
      const rows = await fetchSurroundingDocs(type, indexPatternId, anchor, sortField, tieBreakerField, sortDir, count, filters);
      setState({
        [type]: rows,
        [statusKey]: {
          value: _angular_context_query_state__WEBPACK_IMPORTED_MODULE_7__["LoadingStatus"].LOADED
        }
      });
    } catch (error) {
      setState(createError(statusKey, _angular_context_query_state__WEBPACK_IMPORTED_MODULE_7__["FailureReason"].UNKNOWN, error));
      toastNotifications.addDanger({
        title: errorTitle,
        text: Object(_src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_6__["toMountPoint"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_6__["MarkdownSimple"], null, error.message))
      });
    }
  }, [filterManager, appState, fetchedState.anchor, tieBreakerField, setState, fetchSurroundingDocs, indexPatternId, toastNotifications]);
  const fetchContextRows = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(anchor => Promise.allSettled([fetchSurroundingRows(_angular_context_api_context__WEBPACK_IMPORTED_MODULE_5__["SurrDocType"].PREDECESSORS, anchor), fetchSurroundingRows(_angular_context_api_context__WEBPACK_IMPORTED_MODULE_5__["SurrDocType"].SUCCESSORS, anchor)]), [fetchSurroundingRows]);
  const fetchAllRows = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => fetchAnchorRow().then(anchor => anchor && fetchContextRows(anchor)), [fetchAnchorRow, fetchContextRows]);
  return {
    fetchedState,
    fetchAllRows,
    fetchContextRows,
    fetchSurroundingRows
  };
}

/***/ }),

/***/ "./public/application/components/context_app/use_context_app_state.ts":
/*!****************************************************************************!*\
  !*** ./public/application/components/context_app/use_context_app_state.ts ***!
  \****************************************************************************/
/*! exports provided: useContextAppState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useContextAppState", function() { return useContextAppState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common */ "./common/index.ts");
/* harmony import */ var _angular_context_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular/context_state */ "./public/application/angular/context_state.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */




function useContextAppState({
  indexPattern,
  services
}) {
  const {
    uiSettings: config,
    history,
    core,
    filterManager
  } = services;
  const stateContainer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return Object(_angular_context_state__WEBPACK_IMPORTED_MODULE_3__["getState"])({
      defaultSize: parseInt(config.get(_common__WEBPACK_IMPORTED_MODULE_2__["CONTEXT_DEFAULT_SIZE_SETTING"]), 10),
      timeFieldName: indexPattern.timeFieldName,
      storeInSessionStorage: config.get('state:storeInSessionStorage'),
      history: history(),
      toasts: core.notifications.toasts,
      uiSettings: config
    });
  }, [config, history, indexPattern, core.notifications.toasts]);
  const [appState, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(stateContainer.appState.getState());
  /**
   * Sync with app state container
   */

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    stateContainer.startSync();
    return () => stateContainer.stopSync();
  }, [stateContainer]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const unsubscribeAppState = stateContainer.appState.subscribe(newState => {
      setState(prevState => ({ ...prevState,
        ...newState
      }));
    });
    return () => unsubscribeAppState();
  }, [stateContainer, setState]);
  /**
   * Take care of filters
   */

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const filters = stateContainer.appState.getState().filters;

    if (filters) {
      filterManager.setAppFilters(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(filters));
    }

    const {
      setFilters
    } = stateContainer;
    const filterObservable = filterManager.getUpdates$().subscribe(() => {
      setFilters(filterManager);
    });
    return () => filterObservable.unsubscribe();
  }, [filterManager, stateContainer]);
  return {
    appState,
    stateContainer,
    setAppState: stateContainer.setAppState
  };
}

/***/ }),

/***/ "./public/application/components/context_app/utils/constants.ts":
/*!**********************************************************************!*\
  !*** ./public/application/components/context_app/utils/constants.ts ***!
  \**********************************************************************/
/*! exports provided: MAX_CONTEXT_SIZE, MIN_CONTEXT_SIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_CONTEXT_SIZE", function() { return MAX_CONTEXT_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_CONTEXT_SIZE", function() { return MIN_CONTEXT_SIZE; });
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const MAX_CONTEXT_SIZE = 10000; // Elasticsearch's default maximum size limit

const MIN_CONTEXT_SIZE = 0;

/***/ }),

/***/ "./public/application/components/context_error_message/context_error_message.tsx":
/*!***************************************************************************************!*\
  !*** ./public/application/components/context_error_message/context_error_message.tsx ***!
  \***************************************************************************************/
/*! exports provided: ContextErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextErrorMessage", function() { return ContextErrorMessage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_context_query_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular/context_query_state */ "./public/application/angular/context_query_state.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */




function ContextErrorMessage({
  status
}) {
  if (status.value !== _angular_context_query_state__WEBPACK_IMPORTED_MODULE_3__["LoadingStatus"].FAILED) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__["I18nProvider"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCallOut"], {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "discover.context.failedToLoadAnchorDocumentDescription",
      defaultMessage: "Failed to load the anchor document"
    }),
    color: "danger",
    iconType: "alert",
    "data-test-subj": "contextErrorMessageTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
    "data-test-subj": "contextErrorMessageBody"
  }, status.reason === _angular_context_query_state__WEBPACK_IMPORTED_MODULE_3__["FailureReason"].UNKNOWN && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "discover.context.reloadPageDescription.reloadOrVisitTextMessage",
    defaultMessage: "Please reload or go back to the document list to select a valid anchor document."
  }))));
}

/***/ }),

/***/ "./public/application/components/context_error_message/index.ts":
/*!**********************************************************************!*\
  !*** ./public/application/components/context_error_message/index.ts ***!
  \**********************************************************************/
/*! exports provided: ContextErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _context_error_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context_error_message */ "./public/application/components/context_error_message/context_error_message.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextErrorMessage", function() { return _context_error_message__WEBPACK_IMPORTED_MODULE_0__["ContextErrorMessage"]; });

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


/***/ }),

/***/ "./public/application/components/help_menu/help_menu_util.ts":
/*!*******************************************************************!*\
  !*** ./public/application/components/help_menu/help_menu_util.ts ***!
  \*******************************************************************/
/*! exports provided: addHelpMenuToAppChrome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addHelpMenuToAppChrome", function() { return addHelpMenuToAppChrome; });
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

function addHelpMenuToAppChrome(chrome, docLinks) {
  chrome.setHelpExtension({
    appName: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.helpMenu.appName', {
      defaultMessage: 'Discover'
    }),
    links: [{
      linkType: 'documentation',
      href: `${docLinks.links.discover.guide}`
    }]
  });
}

/***/ }),

/***/ "./public/application/helpers/format_number_with_commas.ts":
/*!*****************************************************************!*\
  !*** ./public/application/helpers/format_number_with_commas.ts ***!
  \*****************************************************************/
/*! exports provided: formatNumWithCommas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatNumWithCommas", function() { return formatNumWithCommas; });
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const COMMA_SEPARATOR_RE = /(\d)(?=(\d{3})+(?!\d))/g;
/**
 * Converts a number to a string and adds commas
 * as thousands separators
 */

const formatNumWithCommas = input => String(input).replace(COMMA_SEPARATOR_RE, '$1,');

/***/ }),

/***/ "./public/application/helpers/index.ts":
/*!*********************************************!*\
  !*** ./public/application/helpers/index.ts ***!
  \*********************************************/
/*! exports provided: formatNumWithCommas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _format_number_with_commas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format_number_with_commas */ "./public/application/helpers/format_number_with_commas.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatNumWithCommas", function() { return _format_number_with_commas__WEBPACK_IMPORTED_MODULE_0__["formatNumWithCommas"]; });

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


/***/ }),

/***/ "./public/application/helpers/use_data_grid_columns.ts":
/*!*************************************************************!*\
  !*** ./public/application/helpers/use_data_grid_columns.ts ***!
  \*************************************************************/
/*! exports provided: useDataGridColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDataGridColumns", function() { return useDataGridColumns; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_doc_table_actions_columns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../angular/doc_table/actions/columns */ "./public/application/angular/doc_table/actions/columns.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


const useDataGridColumns = ({
  capabilities,
  config,
  indexPattern,
  indexPatterns,
  setAppState,
  state,
  useNewFieldsApi
}) => {
  const {
    onAddColumn,
    onRemoveColumn,
    onSetColumns,
    onMoveColumn
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Object(_angular_doc_table_actions_columns__WEBPACK_IMPORTED_MODULE_1__["getStateColumnActions"])({
    capabilities,
    config,
    indexPattern,
    indexPatterns,
    setAppState,
    state,
    useNewFieldsApi
  }), [capabilities, config, indexPattern, indexPatterns, setAppState, state, useNewFieldsApi]);
  const columns = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    if (!state.columns) {
      return [];
    }

    return useNewFieldsApi ? state.columns.filter(col => col !== '_source') : state.columns;
  }, [state, useNewFieldsApi]);
  return {
    columns,
    onAddColumn,
    onRemoveColumn,
    onMoveColumn,
    onSetColumns
  };
};

/***/ }),

/***/ "./public/application/index.scss":
/*!***************************************!*\
  !*** ./public/application/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__kbnThemeTag__) {
  case 'v7dark':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7dark]. Styles were compiled using the [v8dark] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7dark] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./index.scss?v8dark */ "./public/application/index.scss?v8dark")

  case 'v7light':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7light]. Styles were compiled using the [v8light] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7light] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./index.scss?v8light */ "./public/application/index.scss?v8light")

  case 'v8dark':
    return __webpack_require__(/*! ./index.scss?v8dark */ "./public/application/index.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./index.scss?v8light */ "./public/application/index.scss?v8light");
}

/***/ }),

/***/ "./public/application/index.scss?v8dark":
/*!**********************************************!*\
  !*** ./public/application/index.scss?v8dark ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../node_modules/postcss-loader/src??ref--6-oneOf-0-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./index.scss?v8dark */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/index.scss?v8dark");

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

/***/ "./public/application/index.scss?v8light":
/*!***********************************************!*\
  !*** ./public/application/index.scss?v8light ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./index.scss?v8light */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/index.scss?v8light");

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

/***/ "./public/application/types.ts":
/*!*************************************!*\
  !*** ./public/application/types.ts ***!
  \*************************************/
/*! exports provided: FetchStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchStatus", function() { return FetchStatus; });
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
let FetchStatus;

(function (FetchStatus) {
  FetchStatus["UNINITIALIZED"] = "uninitialized";
  FetchStatus["LOADING"] = "loading";
  FetchStatus["COMPLETE"] = "complete";
  FetchStatus["ERROR"] = "error";
})(FetchStatus || (FetchStatus = {}));

/***/ })

}]);
//# sourceMappingURL=discovernew.chunk.4.js.map