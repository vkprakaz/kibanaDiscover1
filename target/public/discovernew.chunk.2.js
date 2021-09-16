(window["discovernew_bundle_jsonpfunction"] = window["discovernew_bundle_jsonpfunction"] || []).push([[2],{

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/components/discover_grid/discover_grid.scss?v8dark":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-0-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./public/application/components/discover_grid/discover_grid.scss?v8dark ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscDiscoverGrid {\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  overflow: hidden; }\n  .dscDiscoverGrid .euiDataGrid__controls {\n    border: none;\n    border-bottom: 1px solid #343741; }\n  .dscDiscoverGrid .euiDataGridRowCell.euiDataGridRowCell--firstColumn {\n    border-left: none;\n    padding: 0; }\n  .dscDiscoverGrid .euiDataGridRowCell.euiDataGridRowCell--lastColumn {\n    border-right: none; }\n  .dscDiscoverGrid .euiDataGridRowCell:first-of-type,\n  .dscDiscoverGrid .euiDataGrid--headerShade.euiDataGrid--bordersAll .euiDataGridHeaderCell:first-of-type {\n    border-left: none;\n    border-right: none; }\n  .dscDiscoverGrid .euiDataGridRowCell:last-of-type,\n  .dscDiscoverGrid .euiDataGridHeaderCell:last-of-type {\n    border-right: none; }\n\n.dscDiscoverGrid__footer {\n  background-color: #343741;\n  padding: 8px 16px;\n  margin-top: 4px;\n  text-align: center; }\n\n.dscTable__flyoutHeader {\n  white-space: nowrap; }\n\n.dscTable__flyoutDocumentNavigation {\n  justify-content: flex-end; }\n\n.euiDataGridHeader {\n  display: flex; }\n  .euiDataGridHeader .euiDataGridHeaderCell__content {\n    max-width: 100%;\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    white-space: nowrap !important;\n    word-wrap: normal !important;\n    overflow: hidden;\n    white-space: nowrap;\n    flex-grow: 1; }\n  .euiDataGridHeader .euiDataGridHeaderCell__popover {\n    flex-grow: 0;\n    flex-basis: auto;\n    width: auto;\n    padding-left: 4px; }\n\n.euiDataGridRowCell--numeric {\n  text-align: right; }\n\n.euiDataGrid__loading,\n.euiDataGrid__noResults {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex: 1 0 100%;\n  text-align: center;\n  height: 100%;\n  width: 100%; }\n\n.dscFormatSource {\n  max-width: 100%;\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  white-space: nowrap !important;\n  word-wrap: normal !important; }\n\n.dscDiscoverGrid__descriptionListDescription {\n  word-break: normal !important; }\n\n@media only screen and (max-width: 574px) {\n  .dscTable__flyoutDocumentNavigation .euiPagination__compressedText {\n    display: none; } }\n\n@media only screen and (min-width: 575px) and (max-width: 767px) {\n  .dscTable__flyoutDocumentNavigation .euiPagination__compressedText {\n    display: none; } }\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .dscTable__flyoutDocumentNavigation .euiPagination__compressedText {\n    display: none; } }\n", "",{"version":3,"sources":["discover_grid.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,WAAW;EACX,eAAe;EACf,YAAY;EACZ,gBAAgB,EAAE;EAClB;IACE,YAAY;IACZ,gCAAgC,EAAE;EACpC;IACE,iBAAiB;IACjB,UAAU,EAAE;EACd;IACE,kBAAkB,EAAE;EACtB;;IAEE,iBAAiB;IACjB,kBAAkB,EAAE;EACtB;;IAEE,kBAAkB,EAAE;;AAExB;EACE,yBAAyB;EACzB,iBAAiB;EACjB,eAAe;EACf,kBAAkB,EAAE;;AAEtB;EACE,mBAAmB,EAAE;;AAEvB;EACE,yBAAyB,EAAE;;AAE7B;EACE,aAAa,EAAE;EACf;IACE,eAAe;IACf,2BAA2B;IAC3B,kCAAkC;IAClC,8BAA8B;IAC9B,4BAA4B;IAC5B,gBAAgB;IAChB,mBAAmB;IACnB,YAAY,EAAE;EAChB;IACE,YAAY;IACZ,gBAAgB;IAChB,WAAW;IACX,iBAAiB,EAAE;;AAEvB;EACE,iBAAiB,EAAE;;AAErB;;EAEE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,cAAc;EACd,kBAAkB;EAClB,YAAY;EACZ,WAAW,EAAE;;AAEf;EACE,eAAe;EACf,2BAA2B;EAC3B,kCAAkC;EAClC,8BAA8B;EAC9B,4BAA4B,EAAE;;AAEhC;EACE,6BAA6B,EAAE;;AAEjC;EACE;IACE,aAAa,EAAE,EAAE;;AAErB;EACE;IACE,aAAa,EAAE,EAAE;;AAErB;EACE;IACE,aAAa,EAAE,EAAE","file":"discover_grid.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscDiscoverGrid {\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  overflow: hidden; }\n  .dscDiscoverGrid .euiDataGrid__controls {\n    border: none;\n    border-bottom: 1px solid #343741; }\n  .dscDiscoverGrid .euiDataGridRowCell.euiDataGridRowCell--firstColumn {\n    border-left: none;\n    padding: 0; }\n  .dscDiscoverGrid .euiDataGridRowCell.euiDataGridRowCell--lastColumn {\n    border-right: none; }\n  .dscDiscoverGrid .euiDataGridRowCell:first-of-type,\n  .dscDiscoverGrid .euiDataGrid--headerShade.euiDataGrid--bordersAll .euiDataGridHeaderCell:first-of-type {\n    border-left: none;\n    border-right: none; }\n  .dscDiscoverGrid .euiDataGridRowCell:last-of-type,\n  .dscDiscoverGrid .euiDataGridHeaderCell:last-of-type {\n    border-right: none; }\n\n.dscDiscoverGrid__footer {\n  background-color: #343741;\n  padding: 8px 16px;\n  margin-top: 4px;\n  text-align: center; }\n\n.dscTable__flyoutHeader {\n  white-space: nowrap; }\n\n.dscTable__flyoutDocumentNavigation {\n  justify-content: flex-end; }\n\n.euiDataGridHeader {\n  display: flex; }\n  .euiDataGridHeader .euiDataGridHeaderCell__content {\n    max-width: 100%;\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    white-space: nowrap !important;\n    word-wrap: normal !important;\n    overflow: hidden;\n    white-space: nowrap;\n    flex-grow: 1; }\n  .euiDataGridHeader .euiDataGridHeaderCell__popover {\n    flex-grow: 0;\n    flex-basis: auto;\n    width: auto;\n    padding-left: 4px; }\n\n.euiDataGridRowCell--numeric {\n  text-align: right; }\n\n.euiDataGrid__loading,\n.euiDataGrid__noResults {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex: 1 0 100%;\n  text-align: center;\n  height: 100%;\n  width: 100%; }\n\n.dscFormatSource {\n  max-width: 100%;\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  white-space: nowrap !important;\n  word-wrap: normal !important; }\n\n.dscDiscoverGrid__descriptionListDescription {\n  word-break: normal !important; }\n\n@media only screen and (max-width: 574px) {\n  .dscTable__flyoutDocumentNavigation .euiPagination__compressedText {\n    display: none; } }\n\n@media only screen and (min-width: 575px) and (max-width: 767px) {\n  .dscTable__flyoutDocumentNavigation .euiPagination__compressedText {\n    display: none; } }\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .dscTable__flyoutDocumentNavigation .euiPagination__compressedText {\n    display: none; } }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/components/discover_grid/discover_grid.scss?v8light":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-1-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./public/application/components/discover_grid/discover_grid.scss?v8light ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscDiscoverGrid {\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  overflow: hidden; }\n  .dscDiscoverGrid .euiDataGrid__controls {\n    border: none;\n    border-bottom: 1px solid #D3DAE6; }\n  .dscDiscoverGrid .euiDataGridRowCell.euiDataGridRowCell--firstColumn {\n    border-left: none;\n    padding: 0; }\n  .dscDiscoverGrid .euiDataGridRowCell.euiDataGridRowCell--lastColumn {\n    border-right: none; }\n  .dscDiscoverGrid .euiDataGridRowCell:first-of-type,\n  .dscDiscoverGrid .euiDataGrid--headerShade.euiDataGrid--bordersAll .euiDataGridHeaderCell:first-of-type {\n    border-left: none;\n    border-right: none; }\n  .dscDiscoverGrid .euiDataGridRowCell:last-of-type,\n  .dscDiscoverGrid .euiDataGridHeaderCell:last-of-type {\n    border-right: none; }\n\n.dscDiscoverGrid__footer {\n  background-color: #D3DAE6;\n  padding: 8px 16px;\n  margin-top: 4px;\n  text-align: center; }\n\n.dscTable__flyoutHeader {\n  white-space: nowrap; }\n\n.dscTable__flyoutDocumentNavigation {\n  justify-content: flex-end; }\n\n.euiDataGridHeader {\n  display: flex; }\n  .euiDataGridHeader .euiDataGridHeaderCell__content {\n    max-width: 100%;\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    white-space: nowrap !important;\n    word-wrap: normal !important;\n    overflow: hidden;\n    white-space: nowrap;\n    flex-grow: 1; }\n  .euiDataGridHeader .euiDataGridHeaderCell__popover {\n    flex-grow: 0;\n    flex-basis: auto;\n    width: auto;\n    padding-left: 4px; }\n\n.euiDataGridRowCell--numeric {\n  text-align: right; }\n\n.euiDataGrid__loading,\n.euiDataGrid__noResults {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex: 1 0 100%;\n  text-align: center;\n  height: 100%;\n  width: 100%; }\n\n.dscFormatSource {\n  max-width: 100%;\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  white-space: nowrap !important;\n  word-wrap: normal !important; }\n\n.dscDiscoverGrid__descriptionListDescription {\n  word-break: normal !important; }\n\n@media only screen and (max-width: 574px) {\n  .dscTable__flyoutDocumentNavigation .euiPagination__compressedText {\n    display: none; } }\n\n@media only screen and (min-width: 575px) and (max-width: 767px) {\n  .dscTable__flyoutDocumentNavigation .euiPagination__compressedText {\n    display: none; } }\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .dscTable__flyoutDocumentNavigation .euiPagination__compressedText {\n    display: none; } }\n", "",{"version":3,"sources":["discover_grid.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,WAAW;EACX,eAAe;EACf,YAAY;EACZ,gBAAgB,EAAE;EAClB;IACE,YAAY;IACZ,gCAAgC,EAAE;EACpC;IACE,iBAAiB;IACjB,UAAU,EAAE;EACd;IACE,kBAAkB,EAAE;EACtB;;IAEE,iBAAiB;IACjB,kBAAkB,EAAE;EACtB;;IAEE,kBAAkB,EAAE;;AAExB;EACE,yBAAyB;EACzB,iBAAiB;EACjB,eAAe;EACf,kBAAkB,EAAE;;AAEtB;EACE,mBAAmB,EAAE;;AAEvB;EACE,yBAAyB,EAAE;;AAE7B;EACE,aAAa,EAAE;EACf;IACE,eAAe;IACf,2BAA2B;IAC3B,kCAAkC;IAClC,8BAA8B;IAC9B,4BAA4B;IAC5B,gBAAgB;IAChB,mBAAmB;IACnB,YAAY,EAAE;EAChB;IACE,YAAY;IACZ,gBAAgB;IAChB,WAAW;IACX,iBAAiB,EAAE;;AAEvB;EACE,iBAAiB,EAAE;;AAErB;;EAEE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,cAAc;EACd,kBAAkB;EAClB,YAAY;EACZ,WAAW,EAAE;;AAEf;EACE,eAAe;EACf,2BAA2B;EAC3B,kCAAkC;EAClC,8BAA8B;EAC9B,4BAA4B,EAAE;;AAEhC;EACE,6BAA6B,EAAE;;AAEjC;EACE;IACE,aAAa,EAAE,EAAE;;AAErB;EACE;IACE,aAAa,EAAE,EAAE;;AAErB;EACE;IACE,aAAa,EAAE,EAAE","file":"discover_grid.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscDiscoverGrid {\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  overflow: hidden; }\n  .dscDiscoverGrid .euiDataGrid__controls {\n    border: none;\n    border-bottom: 1px solid #D3DAE6; }\n  .dscDiscoverGrid .euiDataGridRowCell.euiDataGridRowCell--firstColumn {\n    border-left: none;\n    padding: 0; }\n  .dscDiscoverGrid .euiDataGridRowCell.euiDataGridRowCell--lastColumn {\n    border-right: none; }\n  .dscDiscoverGrid .euiDataGridRowCell:first-of-type,\n  .dscDiscoverGrid .euiDataGrid--headerShade.euiDataGrid--bordersAll .euiDataGridHeaderCell:first-of-type {\n    border-left: none;\n    border-right: none; }\n  .dscDiscoverGrid .euiDataGridRowCell:last-of-type,\n  .dscDiscoverGrid .euiDataGridHeaderCell:last-of-type {\n    border-right: none; }\n\n.dscDiscoverGrid__footer {\n  background-color: #D3DAE6;\n  padding: 8px 16px;\n  margin-top: 4px;\n  text-align: center; }\n\n.dscTable__flyoutHeader {\n  white-space: nowrap; }\n\n.dscTable__flyoutDocumentNavigation {\n  justify-content: flex-end; }\n\n.euiDataGridHeader {\n  display: flex; }\n  .euiDataGridHeader .euiDataGridHeaderCell__content {\n    max-width: 100%;\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    white-space: nowrap !important;\n    word-wrap: normal !important;\n    overflow: hidden;\n    white-space: nowrap;\n    flex-grow: 1; }\n  .euiDataGridHeader .euiDataGridHeaderCell__popover {\n    flex-grow: 0;\n    flex-basis: auto;\n    width: auto;\n    padding-left: 4px; }\n\n.euiDataGridRowCell--numeric {\n  text-align: right; }\n\n.euiDataGrid__loading,\n.euiDataGrid__noResults {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex: 1 0 100%;\n  text-align: center;\n  height: 100%;\n  width: 100%; }\n\n.dscFormatSource {\n  max-width: 100%;\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  white-space: nowrap !important;\n  word-wrap: normal !important; }\n\n.dscDiscoverGrid__descriptionListDescription {\n  word-break: normal !important; }\n\n@media only screen and (max-width: 574px) {\n  .dscTable__flyoutDocumentNavigation .euiPagination__compressedText {\n    display: none; } }\n\n@media only screen and (min-width: 575px) and (max-width: 767px) {\n  .dscTable__flyoutDocumentNavigation .euiPagination__compressedText {\n    display: none; } }\n\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .dscTable__flyoutDocumentNavigation .euiPagination__compressedText {\n    display: none; } }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/decode-uri-component/index.js":
/*!************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/decode-uri-component/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),

/***/ "../../node_modules/query-string/index.js":
/*!****************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/query-string/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "../../node_modules/strict-uri-encode/index.js");
const decodeComponent = __webpack_require__(/*! decode-uri-component */ "../../node_modules/decode-uri-component/index.js");
const splitOnFirst = __webpack_require__(/*! split-on-first */ "../../node_modules/split-on-first/index.js");

const isNullOrUndefined = value => value === null || value === undefined;

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return key => (result, value) => {
				const index = result.length;

				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[', index, ']'].join('')];
				}

				return [
					...result,
					[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
				];
			};

		case 'bracket':
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[]'].join('')];
				}

				return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
			};

		case 'comma':
		case 'separator':
			return key => (result, value) => {
				if (value === null || value === undefined || value.length === 0) {
					return result;
				}

				if (result.length === 0) {
					return [[encode(key, options), '=', encode(value, options)].join('')];
				}

				return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
			};

		default:
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, encode(key, options)];
				}

				return [...result, [encode(key, options), '=', encode(value, options)].join('')];
			};
	}
}

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index':
			return (key, value, accumulator) => {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return (key, value, accumulator) => {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		case 'comma':
		case 'separator':
			return (key, value, accumulator) => {
				const isArray = typeof value === 'string' && value.split('').indexOf(options.arrayFormatSeparator) > -1;
				const newValue = isArray ? value.split(options.arrayFormatSeparator).map(item => decode(item, options)) : value === null ? value : decode(value, options);
				accumulator[key] = newValue;
			};

		default:
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function validateArrayFormatSeparator(value) {
	if (typeof value !== 'string' || value.length !== 1) {
		throw new TypeError('arrayFormatSeparator must be single character string');
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function decode(value, options) {
	if (options.decode) {
		return decodeComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function removeHash(input) {
	const hashStart = input.indexOf('#');
	if (hashStart !== -1) {
		input = input.slice(0, hashStart);
	}

	return input;
}

function getHash(url) {
	let hash = '';
	const hashStart = url.indexOf('#');
	if (hashStart !== -1) {
		hash = url.slice(hashStart);
	}

	return hash;
}

function extract(input) {
	input = removeHash(input);
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}

	return input.slice(queryStart + 1);
}

function parseValue(value, options) {
	if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
		value = Number(value);
	} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
		value = value.toLowerCase() === 'true';
	}

	return value;
}

function parse(input, options) {
	options = Object.assign({
		decode: true,
		sort: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ',',
		parseNumbers: false,
		parseBooleans: false
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const ret = Object.create(null);

	if (typeof input !== 'string') {
		return ret;
	}

	input = input.trim().replace(/^[?#&]/, '');

	if (!input) {
		return ret;
	}

	for (const param of input.split('&')) {
		let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '=');

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : ['comma', 'separator'].includes(options.arrayFormat) ? value : decode(value, options);
		formatter(decode(key, options), value, ret);
	}

	for (const key of Object.keys(ret)) {
		const value = ret[key];
		if (typeof value === 'object' && value !== null) {
			for (const k of Object.keys(value)) {
				value[k] = parseValue(value[k], options);
			}
		} else {
			ret[key] = parseValue(value, options);
		}
	}

	if (options.sort === false) {
		return ret;
	}

	return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
		const value = ret[key];
		if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = (object, options) => {
	if (!object) {
		return '';
	}

	options = Object.assign({
		encode: true,
		strict: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ','
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const shouldFilter = key => (
		(options.skipNull && isNullOrUndefined(object[key])) ||
		(options.skipEmptyString && object[key] === '')
	);

	const formatter = encoderForArrayFormat(options);

	const objectCopy = {};

	for (const key of Object.keys(object)) {
		if (!shouldFilter(key)) {
			objectCopy[key] = object[key];
		}
	}

	const keys = Object.keys(objectCopy);

	if (options.sort !== false) {
		keys.sort(options.sort);
	}

	return keys.map(key => {
		const value = object[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			return value
				.reduce(formatter(key), [])
				.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(x => x.length > 0).join('&');
};

exports.parseUrl = (input, options) => {
	options = Object.assign({
		decode: true
	}, options);

	const [url, hash] = splitOnFirst(input, '#');

	return Object.assign(
		{
			url: url.split('?')[0] || '',
			query: parse(extract(input), options)
		},
		options && options.parseFragmentIdentifier && hash ? {fragmentIdentifier: decode(hash, options)} : {}
	);
};

exports.stringifyUrl = (input, options) => {
	options = Object.assign({
		encode: true,
		strict: true
	}, options);

	const url = removeHash(input.url).split('?')[0] || '';
	const queryFromUrl = exports.extract(input.url);
	const parsedQueryFromUrl = exports.parse(queryFromUrl, {sort: false});

	const query = Object.assign(parsedQueryFromUrl, input.query);
	let queryString = exports.stringify(query, options);
	if (queryString) {
		queryString = `?${queryString}`;
	}

	let hash = getHash(input.url);
	if (input.fragmentIdentifier) {
		hash = `#${encode(input.fragmentIdentifier, options)}`;
	}

	return `${url}${queryString}${hash}`;
};


/***/ }),

/***/ "../../node_modules/split-on-first/index.js":
/*!******************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/split-on-first/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = (string, separator) => {
	if (!(typeof string === 'string' && typeof separator === 'string')) {
		throw new TypeError('Expected the arguments to be of type `string`');
	}

	if (separator === '') {
		return [string];
	}

	const separatorIndex = string.indexOf(separator);

	if (separatorIndex === -1) {
		return [string];
	}

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
};


/***/ }),

/***/ "../../node_modules/strict-uri-encode/index.js":
/*!*********************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/strict-uri-encode/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),

/***/ "./public/application/angular/create_discover_grid_directive.tsx":
/*!***********************************************************************!*\
  !*** ./public/application/angular/create_discover_grid_directive.tsx ***!
  \***********************************************************************/
/*! exports provided: DataGridMemoized, DiscoverGridEmbeddable, createDiscoverGridDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataGridMemoized", function() { return DataGridMemoized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverGridEmbeddable", function() { return DiscoverGridEmbeddable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDiscoverGridDirective", function() { return createDiscoverGridDirective; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_discover_grid_discover_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/discover_grid/discover_grid */ "./public/application/components/discover_grid/discover_grid.tsx");
/* harmony import */ var _kibana_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../kibana_services */ "./public/kibana_services.ts");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */




const DataGridMemoized = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_discover_grid_discover_grid__WEBPACK_IMPORTED_MODULE_2__["DiscoverGrid"], props));
function DiscoverGridEmbeddable(props) {
  const [expandedDoc, setExpandedDoc] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["I18nProvider"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DataGridMemoized, _extends({}, props, {
    setExpandedDoc: setExpandedDoc,
    expandedDoc: expandedDoc,
    services: Object(_kibana_services__WEBPACK_IMPORTED_MODULE_3__["getServices"])()
  })));
}
/**
 * this is just needed for the embeddable
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

function createDiscoverGridDirective(reactDirective) {
  return reactDirective(DiscoverGridEmbeddable, [['columns', {
    watchDepth: 'collection'
  }], ['indexPattern', {
    watchDepth: 'reference'
  }], ['isLoading', {
    watchDepth: 'reference'
  }], ['onAddColumn', {
    watchDepth: 'reference',
    wrapApply: false
  }], ['onFilter', {
    watchDepth: 'reference',
    wrapApply: false
  }], ['onRemoveColumn', {
    watchDepth: 'reference',
    wrapApply: false
  }], ['onSetColumns', {
    watchDepth: 'reference',
    wrapApply: false
  }], ['onSort', {
    watchDepth: 'reference',
    wrapApply: false
  }], ['rows', {
    watchDepth: 'collection'
  }], ['sampleSize', {
    watchDepth: 'reference'
  }], ['searchDescription', {
    watchDepth: 'reference'
  }], ['searchTitle', {
    watchDepth: 'reference'
  }], ['settings', {
    watchDepth: 'reference'
  }], ['showTimeCol', {
    watchDepth: 'value'
  }], ['sort', {
    watchDepth: 'value'
  }], ['className', {
    watchDepth: 'value'
  }]]);
}

/***/ }),

/***/ "./public/application/angular/doc_table/actions/columns.ts":
/*!*****************************************************************!*\
  !*** ./public/application/angular/doc_table/actions/columns.ts ***!
  \*****************************************************************/
/*! exports provided: addColumn, removeColumn, moveColumn, getStateColumnActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addColumn", function() { return addColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeColumn", function() { return removeColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveColumn", function() { return moveColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStateColumnActions", function() { return getStateColumnActions; });
/* harmony import */ var _helpers_popularize_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/popularize_field */ "./public/application/helpers/popularize_field.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../common */ "./common/index.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


/**
 * Helper function to provide a fallback to a single _source column if the given array of columns
 * is empty, and removes _source if there are more than 1 columns given
 * @param columns
 * @param useNewFieldsApi should a new fields API be used
 */

function buildColumns(columns, useNewFieldsApi = false) {
  if (columns.length > 1 && columns.indexOf('_source') !== -1) {
    return columns.filter(col => col !== '_source');
  } else if (columns.length !== 0) {
    return columns;
  }

  return useNewFieldsApi ? [] : ['_source'];
}

function addColumn(columns, columnName, useNewFieldsApi) {
  if (columns.includes(columnName)) {
    return columns;
  }

  return buildColumns([...columns, columnName], useNewFieldsApi);
}
function removeColumn(columns, columnName, useNewFieldsApi) {
  if (!columns.includes(columnName)) {
    return columns;
  }

  return buildColumns(columns.filter(col => col !== columnName), useNewFieldsApi);
}
function moveColumn(columns, columnName, newIndex) {
  if (newIndex < 0 || newIndex >= columns.length || !columns.includes(columnName)) {
    return columns;
  }

  const modifiedColumns = [...columns];
  modifiedColumns.splice(modifiedColumns.indexOf(columnName), 1); // remove at old index

  modifiedColumns.splice(newIndex, 0, columnName); // insert before new index

  return modifiedColumns;
}
function getStateColumnActions({
  capabilities,
  config,
  indexPattern,
  indexPatterns,
  useNewFieldsApi,
  setAppState,
  state
}) {
  function onAddColumn(columnName) {
    var _state$sort;

    if (capabilities.discover.save) {
      Object(_helpers_popularize_field__WEBPACK_IMPORTED_MODULE_0__["popularizeField"])(indexPattern, columnName, indexPatterns);
    }

    const columns = addColumn(state.columns || [], columnName, useNewFieldsApi);
    const defaultOrder = config.get(_common__WEBPACK_IMPORTED_MODULE_1__["SORT_DEFAULT_ORDER_SETTING"]);
    const sort = columnName === '_score' && !((_state$sort = state.sort) !== null && _state$sort !== void 0 && _state$sort.length) ? [['_score', defaultOrder]] : state.sort;
    setAppState({
      columns,
      sort
    });
  }

  function onRemoveColumn(columnName) {
    if (capabilities.discover.save) {
      Object(_helpers_popularize_field__WEBPACK_IMPORTED_MODULE_0__["popularizeField"])(indexPattern, columnName, indexPatterns);
    }

    const columns = removeColumn(state.columns || [], columnName, useNewFieldsApi); // The state's sort property is an array of [sortByColumn,sortDirection]

    const sort = state.sort && state.sort.length ? state.sort.filter(subArr => subArr[0] !== columnName) : [];
    setAppState({
      columns,
      sort
    });
  }

  function onMoveColumn(columnName, newIndex) {
    const columns = moveColumn(state.columns || [], columnName, newIndex);
    setAppState({
      columns
    });
  }

  function onSetColumns(columns) {
    // remove first element of columns if it's the configured timeFieldName, which is prepended automatically
    const actualColumns = indexPattern.timeFieldName && indexPattern.timeFieldName === columns[0] ? columns.slice(1) : columns;
    setAppState({
      columns: actualColumns
    });
  }

  return {
    onAddColumn,
    onRemoveColumn,
    onMoveColumn,
    onSetColumns
  };
}

/***/ }),

/***/ "./public/application/angular/doc_table/create_doc_table_react.tsx":
/*!*************************************************************************!*\
  !*** ./public/application/angular/doc_table/create_doc_table_react.tsx ***!
  \*************************************************************************/
/*! exports provided: injectAngularElement, DocTableLegacy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectAngularElement", function() { return injectAngularElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocTableLegacy", function() { return DocTableLegacy; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _kibana_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../kibana_services */ "./public/kibana_services.ts");
/* harmony import */ var _apps_main_components_skip_bottom_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../apps/main/components/skip_bottom_button */ "./public/application/apps/main/components/skip_bottom_button/index.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */








/**
 * Compiles and injects the give angular template into the given dom node
 * returns a function to cleanup the injected angular element
 */
async function injectAngularElement(domNode, template, // eslint-disable-next-line @typescript-eslint/no-explicit-any
renderProps, injector) {
  const rootScope = injector.get('$rootScope');
  const $compile = injector.get('$compile');
  const newScope = Object.assign(rootScope.$new(), {
    renderProps
  });
  const $target = angular__WEBPACK_IMPORTED_MODULE_0___default.a.element(domNode);
  const $element = angular__WEBPACK_IMPORTED_MODULE_0___default.a.element(template);
  newScope.$apply(() => {
    const linkFn = $compile($element);
    $target.empty().append($element);
    linkFn(newScope);
  });
  return newScope;
} // eslint-disable-next-line @typescript-eslint/no-explicit-any

function getRenderFn(domNode, props) {
  const directive = {
    template: `<doc-table
                columns="renderProps.columns"
                data-description="{{renderProps.searchDescription}}"
                data-shared-item
                data-test-subj="discoverDocTable"
                data-title="{{renderProps.searchTitle}}"
                filter="renderProps.onFilter"
                hits="renderProps.rows"
                index-pattern="renderProps.indexPattern"
                infinite-scroll="true"
                minimum-visible-rows="renderProps.minimumVisibleRows"
                on-add-column="renderProps.onAddColumn"
                on-change-sort-order="renderProps.onSort"
                on-move-column="renderProps.onMoveColumn"
                on-remove-column="renderProps.onRemoveColumn"
                render-complete
                use-new-fields-api="renderProps.useNewFieldsApi"
                sorting="renderProps.sort"></doc_table>`
  };
  return async () => {
    try {
      const injector = await Object(_kibana_services__WEBPACK_IMPORTED_MODULE_5__["getServices"])().getEmbeddableInjector();
      return await injectAngularElement(domNode, directive.template, props, injector);
    } catch (e) {
      Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "error"), domNode);
    }
  };
}

function DocTableLegacy(renderProps) {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const scope = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  const [rows, setRows] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(renderProps.rows);
  const [minimumVisibleRows, setMinimumVisibleRows] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(renderProps.minimumVisibleRows);
  const onSkipBottomButtonClick = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(async () => {
    // delay scrolling to after the rows have been rendered
    const bottomMarker = document.getElementById('discoverBottomMarker');

    const wait = ms => new Promise(resolve => setTimeout(resolve, ms)); // show all the rows


    setMinimumVisibleRows(renderProps.rows.length);

    while (renderProps.rows.length !== document.getElementsByClassName('kbnDocTable__row').length) {
      await wait(50);
    }

    bottomMarker.focus();
    await wait(50);
    bottomMarker.blur();
  }, [setMinimumVisibleRows, renderProps.rows]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setMinimumVisibleRows(renderProps.minimumVisibleRows);
    setRows(renderProps.rows);
  }, [renderProps.rows, setMinimumVisibleRows, renderProps.minimumVisibleRows]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (ref && ref.current && !scope.current) {
      const fn = getRenderFn(ref.current, { ...renderProps,
        rows,
        minimumVisibleRows
      });
      fn().then(newScope => {
        scope.current = newScope;
      });
    } else if (scope && scope.current) {
      scope.current.renderProps = { ...renderProps,
        rows,
        minimumVisibleRows
      };
      scope.current.$applyAsync();
    }
  }, [renderProps, minimumVisibleRows, rows]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    return () => {
      if (scope.current) {
        scope.current.$destroy();
      }
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_apps_main_components_skip_bottom_button__WEBPACK_IMPORTED_MODULE_6__["SkipBottomButton"], {
    onClick: onSkipBottomButtonClick
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    ref: ref
  }), renderProps.onBackToTop && renderProps.rows.length === renderProps.sampleSize ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "dscTable__footer",
    "data-test-subj": "discoverDocTableFooter",
    tabIndex: -1,
    id: "discoverBottomMarker"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "discover.howToSeeOtherMatchingDocumentsDescription",
    defaultMessage: "These are the first {sampleSize} documents matching your search, refine your search to see others.",
    values: {
      sampleSize: renderProps.sampleSize
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiButtonEmpty"], {
    onClick: renderProps.onBackToTop,
    "data-test-subj": "discoverBackToTop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "discover.backToTopLinkText",
    defaultMessage: "Back to top."
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    tabIndex: -1,
    id: "discoverBottomMarker"
  }, "\u200B"));
}

/***/ }),

/***/ "./public/application/apps/main/components/skip_bottom_button/index.ts":
/*!*****************************************************************************!*\
  !*** ./public/application/apps/main/components/skip_bottom_button/index.ts ***!
  \*****************************************************************************/
/*! exports provided: SkipBottomButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _skip_bottom_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skip_bottom_button */ "./public/application/apps/main/components/skip_bottom_button/skip_bottom_button.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SkipBottomButton", function() { return _skip_bottom_button__WEBPACK_IMPORTED_MODULE_0__["SkipBottomButton"]; });

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


/***/ }),

/***/ "./public/application/apps/main/components/skip_bottom_button/skip_bottom_button.tsx":
/*!*******************************************************************************************!*\
  !*** ./public/application/apps/main/components/skip_bottom_button/skip_bottom_button.tsx ***!
  \*******************************************************************************************/
/*! exports provided: SkipBottomButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkipBottomButton", function() { return SkipBottomButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */



function SkipBottomButton({
  onClick
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSkipLink"], {
    size: "s",
    onClick: event => {
      // prevent the anchor to reload the page on click
      event.preventDefault(); // The destinationId prop cannot be leveraged here as the table needs
      // to be updated first (angular logic)

      onClick();
    },
    className: "dscSkipButton",
    id: "dscSkipButton",
    destinationId: "",
    "data-test-subj": "discoverSkipTableButton",
    position: "absolute"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "discover.skipToBottomButtonLabel",
    defaultMessage: "Go to end of table"
  }));
}

/***/ }),

/***/ "./public/application/components/discover_grid/constants.ts":
/*!******************************************************************!*\
  !*** ./public/application/components/discover_grid/constants.ts ***!
  \******************************************************************/
/*! exports provided: kibanaJSON, gridStyle, pageSizeArr, defaultPageSize, toolbarVisibility, defaultMonacoEditorWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kibanaJSON", function() { return kibanaJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridStyle", function() { return gridStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageSizeArr", function() { return pageSizeArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPageSize", function() { return defaultPageSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toolbarVisibility", function() { return toolbarVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMonacoEditorWidth", function() { return defaultMonacoEditorWidth; });
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
// data types
const kibanaJSON = 'kibana-json';
const gridStyle = {
  border: 'all',
  fontSize: 's',
  cellPadding: 's',
  rowHover: 'none'
};
const pageSizeArr = [25, 50, 100, 250];
const defaultPageSize = 100;
const toolbarVisibility = {
  showColumnSelector: {
    allowHide: false,
    allowReorder: true
  },
  showStyleSelector: false
};
const defaultMonacoEditorWidth = 370;

/***/ }),

/***/ "./public/application/components/discover_grid/discover_grid.scss":
/*!************************************************************************!*\
  !*** ./public/application/components/discover_grid/discover_grid.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__kbnThemeTag__) {
  case 'v7dark':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7dark]. Styles were compiled using the [v8dark] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7dark] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./discover_grid.scss?v8dark */ "./public/application/components/discover_grid/discover_grid.scss?v8dark")

  case 'v7light':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7light]. Styles were compiled using the [v8light] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7light] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./discover_grid.scss?v8light */ "./public/application/components/discover_grid/discover_grid.scss?v8light")

  case 'v8dark':
    return __webpack_require__(/*! ./discover_grid.scss?v8dark */ "./public/application/components/discover_grid/discover_grid.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./discover_grid.scss?v8light */ "./public/application/components/discover_grid/discover_grid.scss?v8light");
}

/***/ }),

/***/ "./public/application/components/discover_grid/discover_grid.scss?v8dark":
/*!*******************************************************************************!*\
  !*** ./public/application/components/discover_grid/discover_grid.scss?v8dark ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-0-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./discover_grid.scss?v8dark */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/components/discover_grid/discover_grid.scss?v8dark");

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

/***/ "./public/application/components/discover_grid/discover_grid.scss?v8light":
/*!********************************************************************************!*\
  !*** ./public/application/components/discover_grid/discover_grid.scss?v8light ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./discover_grid.scss?v8light */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/components/discover_grid/discover_grid.scss?v8light");

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

/***/ "./public/application/components/discover_grid/discover_grid.tsx":
/*!***********************************************************************!*\
  !*** ./public/application/components/discover_grid/discover_grid.tsx ***!
  \***********************************************************************/
/*! exports provided: EuiDataGridMemoized, DiscoverGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EuiDataGridMemoized", function() { return EuiDataGridMemoized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverGrid", function() { return DiscoverGrid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _discover_grid_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./discover_grid.scss */ "./public/application/components/discover_grid/discover_grid.scss");
/* harmony import */ var _discover_grid_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_discover_grid_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _discover_grid_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./discover_grid_schema */ "./public/application/components/discover_grid/discover_grid_schema.ts");
/* harmony import */ var _discover_grid_flyout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discover_grid_flyout */ "./public/application/components/discover_grid/discover_grid_flyout.tsx");
/* harmony import */ var _discover_grid_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discover_grid_context */ "./public/application/components/discover_grid/discover_grid_context.tsx");
/* harmony import */ var _get_render_cell_value__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./get_render_cell_value */ "./public/application/components/discover_grid/get_render_cell_value.tsx");
/* harmony import */ var _discover_grid_columns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./discover_grid_columns */ "./public/application/components/discover_grid/discover_grid_columns.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants */ "./public/application/components/discover_grid/constants.ts");
/* harmony import */ var _helpers_columns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../helpers/columns */ "./public/application/helpers/columns.ts");
/* harmony import */ var _src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../src/plugins/kibana_react/public */ "plugin/kibanaReact/public");
/* harmony import */ var _src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../common */ "./common/index.ts");
/* harmony import */ var _discover_grid_document_selection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./discover_grid_document_selection */ "./public/application/components/discover_grid/discover_grid_document_selection.tsx");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */














const EuiDataGridMemoized = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiDataGrid"], props);
});
const DiscoverGrid = ({
  ariaLabelledBy,
  columns,
  indexPattern,
  isLoading,
  expandedDoc,
  onAddColumn,
  onFilter,
  onRemoveColumn,
  onResize,
  onSetColumns,
  onSort,
  rows,
  sampleSize,
  searchDescription,
  searchTitle,
  services,
  setExpandedDoc,
  settings,
  showTimeCol,
  sort,
  useNewFieldsApi,
  isSortEnabled = true,
  isPaginationEnabled = true,
  controlColumnIds = ['openDetails', 'select'],
  className
}) => {
  const [selectedDocs, setSelectedDocs] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [isFilterActive, setIsFilterActive] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const displayedColumns = Object(_helpers_columns__WEBPACK_IMPORTED_MODULE_10__["getDisplayedColumns"])(columns, indexPattern);
  const defaultColumns = displayedColumns.includes('_source');
  const usedSelectedDocs = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    if (!selectedDocs.length || !(rows !== null && rows !== void 0 && rows.length)) {
      return [];
    }

    const idMap = rows.reduce((map, row) => map.set(Object(_discover_grid_document_selection__WEBPACK_IMPORTED_MODULE_13__["getDocId"])(row), true), new Map()); // filter out selected docs that are no longer part of the current data

    const result = selectedDocs.filter(docId => idMap.get(docId));

    if (result.length === 0 && isFilterActive) {
      setIsFilterActive(false);
    }

    return result;
  }, [selectedDocs, rows, isFilterActive]);
  const displayedRows = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    if (!rows) {
      return [];
    }

    if (!isFilterActive || usedSelectedDocs.length === 0) {
      return rows;
    }

    const rowsFiltered = rows.filter(row => usedSelectedDocs.includes(Object(_discover_grid_document_selection__WEBPACK_IMPORTED_MODULE_13__["getDocId"])(row)));

    if (!rowsFiltered.length) {
      // in case the selected docs are no longer part of the sample of 500, show all docs
      return rows;
    }

    return rowsFiltered;
  }, [rows, usedSelectedDocs, isFilterActive]);
  /**
   * Pagination
   */

  const [pagination, setPagination] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    pageIndex: 0,
    pageSize: _constants__WEBPACK_IMPORTED_MODULE_9__["defaultPageSize"]
  });
  const rowCount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => displayedRows ? displayedRows.length : 0, [displayedRows]);
  const pageCount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Math.ceil(rowCount / pagination.pageSize), [rowCount, pagination]);
  const isOnLastPage = pagination.pageIndex === pageCount - 1;
  const paginationObj = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    const onChangeItemsPerPage = pageSize => setPagination(paginationData => ({ ...paginationData,
      pageSize
    }));

    const onChangePage = pageIndex => setPagination(paginationData => ({ ...paginationData,
      pageIndex
    }));

    return isPaginationEnabled ? {
      onChangeItemsPerPage,
      onChangePage,
      pageIndex: pagination.pageIndex > pageCount - 1 ? 0 : pagination.pageIndex,
      pageSize: pagination.pageSize,
      pageSizeOptions: _constants__WEBPACK_IMPORTED_MODULE_9__["pageSizeArr"]
    } : undefined;
  }, [pagination, pageCount, isPaginationEnabled]);
  /**
   * Sorting
   */

  const sortingColumns = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => sort.map(([id, direction]) => ({
    id,
    direction
  })), [sort]);
  const onTableSort = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(sortingColumnsData => {
    if (isSortEnabled && onSort) {
      onSort(sortingColumnsData.map(({
        id,
        direction
      }) => [id, direction]));
    }
  }, [onSort, isSortEnabled]);
  /**
   * Cell rendering
   */

  const renderCellValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Object(_get_render_cell_value__WEBPACK_IMPORTED_MODULE_7__["getRenderCellValueFn"])(indexPattern, displayedRows, displayedRows ? displayedRows.map(hit => indexPattern.flattenHit(hit)) : [], useNewFieldsApi, services.uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_12__["MAX_DOC_FIELDS_DISPLAYED"])), [displayedRows, indexPattern, useNewFieldsApi, services.uiSettings]);
  /**
   * Render variables
   */

  const showDisclaimer = rowCount === sampleSize && isOnLastPage;
  const randomId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Object(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["htmlIdGenerator"])()(), []);
  const euiGridColumns = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Object(_discover_grid_columns__WEBPACK_IMPORTED_MODULE_8__["getEuiGridColumns"])(displayedColumns, settings, indexPattern, showTimeCol, defaultColumns, isSortEnabled), [displayedColumns, indexPattern, showTimeCol, settings, defaultColumns, isSortEnabled]);
  const schemaDetectors = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Object(_discover_grid_schema__WEBPACK_IMPORTED_MODULE_4__["getSchemaDetectors"])(), []);
  const columnsVisibility = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    visibleColumns: Object(_discover_grid_columns__WEBPACK_IMPORTED_MODULE_8__["getVisibleColumns"])(displayedColumns, indexPattern, showTimeCol),
    setVisibleColumns: newColumns => {
      onSetColumns(newColumns);
    }
  }), [displayedColumns, indexPattern, showTimeCol, onSetColumns]);
  const sorting = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    if (isSortEnabled) {
      return {
        columns: sortingColumns,
        onSort: onTableSort
      };
    }

    return {
      columns: sortingColumns,
      onSort: () => {}
    };
  }, [sortingColumns, onTableSort, isSortEnabled]);
  const lead = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Object(_discover_grid_columns__WEBPACK_IMPORTED_MODULE_8__["getLeadControlColumns"])().filter(({
    id
  }) => controlColumnIds.includes(id)), [controlColumnIds]);
  const additionalControls = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => usedSelectedDocs.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_discover_grid_document_selection__WEBPACK_IMPORTED_MODULE_13__["DiscoverGridDocumentToolbarBtn"], {
    isFilterActive: isFilterActive,
    rows: rows,
    selectedDocs: usedSelectedDocs,
    setSelectedDocs: setSelectedDocs,
    setIsFilterActive: setIsFilterActive
  }) : null, [usedSelectedDocs, isFilterActive, rows, setIsFilterActive]);

  if (!rowCount && isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "euiDataGrid__loading"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiText"], {
      size: "xs",
      color: "subdued"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiLoadingSpinner"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSpacer"], {
      size: "s"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "discover.loadingResults",
      defaultMessage: "Loading results"
    })));
  }

  if (!rowCount) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "euiDataGrid__noResults"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiText"], {
      size: "xs",
      color: "subdued"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiIcon"], {
      type: "discoverApp",
      size: "m",
      color: "subdued"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSpacer"], {
      size: "s"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "discover.noResultsFound",
      defaultMessage: "No results found"
    })));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_discover_grid_context__WEBPACK_IMPORTED_MODULE_6__["DiscoverGridContext"].Provider, {
    value: {
      expanded: expandedDoc,
      setExpanded: setExpandedDoc,
      rows: displayedRows,
      onFilter,
      indexPattern,
      isDarkMode: services.uiSettings.get('theme:darkMode'),
      selectedDocs: usedSelectedDocs,
      setSelectedDocs: newSelectedDocs => {
        setSelectedDocs(newSelectedDocs);

        if (isFilterActive && newSelectedDocs.length === 0) {
          setIsFilterActive(false);
        }
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "data-test-subj": "discoverDocTable",
    "data-render-complete": isLoading ? 'false' : 'true',
    "data-shared-item": "",
    "data-title": searchTitle,
    "data-description": searchDescription,
    "data-document-number": displayedRows.length,
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_11__["KibanaContextProvider"], {
    services: {
      uiSettings: services.uiSettings
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EuiDataGridMemoized, {
    "aria-describedby": randomId,
    "aria-labelledby": ariaLabelledBy,
    columns: euiGridColumns,
    columnVisibility: columnsVisibility,
    "data-test-subj": "docTable",
    gridStyle: _constants__WEBPACK_IMPORTED_MODULE_9__["gridStyle"],
    leadingControlColumns: lead,
    onColumnResize: col => {
      if (onResize) {
        onResize(col);
      }
    },
    pagination: paginationObj,
    renderCellValue: renderCellValue,
    rowCount: rowCount,
    schemaDetectors: schemaDetectors,
    sorting: sorting,
    toolbarVisibility: defaultColumns ? { ..._constants__WEBPACK_IMPORTED_MODULE_9__["toolbarVisibility"],
      showColumnSelector: false,
      showSortSelector: isSortEnabled,
      additionalControls
    } : { ..._constants__WEBPACK_IMPORTED_MODULE_9__["toolbarVisibility"],
      showSortSelector: isSortEnabled,
      additionalControls
    }
  })), showDisclaimer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "dscDiscoverGrid__footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "discover.howToSeeOtherMatchingDocumentsDescriptionGrid",
    defaultMessage: "These are the first {sampleSize} documents matching your search, refine your search to see others.",
    values: {
      sampleSize
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `#${ariaLabelledBy}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "discover.backToTopLinkText",
    defaultMessage: "Back to top."
  }))), searchTitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiScreenReaderOnly"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    id: String(randomId)
  }, searchDescription ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "discover.searchGenerationWithDescriptionGrid",
    defaultMessage: "Table generated by search {searchTitle} ({searchDescription})",
    values: {
      searchTitle,
      searchDescription
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "discover.searchGenerationWithDescription",
    defaultMessage: "Table generated by search {searchTitle}",
    values: {
      searchTitle
    }
  }))), expandedDoc && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_discover_grid_flyout__WEBPACK_IMPORTED_MODULE_5__["DiscoverGridFlyout"], {
    indexPattern: indexPattern,
    hit: expandedDoc,
    hits: displayedRows // if default columns are used, dont make them part of the URL - the context state handling will take care to restore them
    ,
    columns: defaultColumns ? [] : displayedColumns,
    onFilter: onFilter,
    onRemoveColumn: onRemoveColumn,
    onAddColumn: onAddColumn,
    onClose: () => setExpandedDoc(undefined),
    setExpandedDoc: setExpandedDoc,
    services: services
  })));
};

/***/ }),

/***/ "./public/application/components/discover_grid/discover_grid_cell_actions.tsx":
/*!************************************************************************************!*\
  !*** ./public/application/components/discover_grid/discover_grid_cell_actions.tsx ***!
  \************************************************************************************/
/*! exports provided: FilterInBtn, FilterOutBtn, buildCellActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterInBtn", function() { return FilterInBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterOutBtn", function() { return FilterOutBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildCellActions", function() { return buildCellActions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _discover_grid_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./discover_grid_context */ "./public/application/components/discover_grid/discover_grid_context.tsx");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */



const FilterInBtn = ({
  Component,
  rowIndex,
  columnId
}) => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_discover_grid_context__WEBPACK_IMPORTED_MODULE_2__["DiscoverGridContext"]);
  const buttonTitle = _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.grid.filterForAria', {
    defaultMessage: 'Filter for this {value}',
    values: {
      value: columnId
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {
    onClick: () => {
      const row = context.rows[rowIndex];
      const flattened = context.indexPattern.flattenHit(row);

      if (flattened) {
        context.onFilter(columnId, flattened[columnId], '+');
      }
    },
    iconType: "plusInCircle",
    "aria-label": buttonTitle,
    title: buttonTitle,
    "data-test-subj": "filterForButton"
  }, _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.grid.filterFor', {
    defaultMessage: 'Filter for'
  }));
};
const FilterOutBtn = ({
  Component,
  rowIndex,
  columnId
}) => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_discover_grid_context__WEBPACK_IMPORTED_MODULE_2__["DiscoverGridContext"]);
  const buttonTitle = _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.grid.filterOutAria', {
    defaultMessage: 'Filter out this {value}',
    values: {
      value: columnId
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {
    onClick: () => {
      const row = context.rows[rowIndex];
      const flattened = context.indexPattern.flattenHit(row);

      if (flattened) {
        context.onFilter(columnId, flattened[columnId], '-');
      }
    },
    iconType: "minusInCircle",
    "aria-label": buttonTitle,
    title: buttonTitle,
    "data-test-subj": "filterOutButton"
  }, _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.grid.filterOut', {
    defaultMessage: 'Filter out'
  }));
};
function buildCellActions(field) {
  if (!field.filterable) {
    return undefined;
  }

  return [FilterInBtn, FilterOutBtn];
}

/***/ }),

/***/ "./public/application/components/discover_grid/discover_grid_columns.tsx":
/*!*******************************************************************************!*\
  !*** ./public/application/components/discover_grid/discover_grid_columns.tsx ***!
  \*******************************************************************************/
/*! exports provided: getLeadControlColumns, buildEuiGridColumn, getEuiGridColumns, getVisibleColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLeadControlColumns", function() { return getLeadControlColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildEuiGridColumn", function() { return buildEuiGridColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEuiGridColumns", function() { return getEuiGridColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVisibleColumns", function() { return getVisibleColumns; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _discover_grid_expand_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./discover_grid_expand_button */ "./public/application/components/discover_grid/discover_grid_expand_button.tsx");
/* harmony import */ var _discover_grid_cell_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./discover_grid_cell_actions */ "./public/application/components/discover_grid/discover_grid_cell_actions.tsx");
/* harmony import */ var _discover_grid_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discover_grid_schema */ "./public/application/components/discover_grid/discover_grid_schema.ts");
/* harmony import */ var _discover_grid_document_selection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discover_grid_document_selection */ "./public/application/components/discover_grid/discover_grid_document_selection.tsx");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */







function getLeadControlColumns() {
  return [{
    id: 'openDetails',
    width: 24,
    headerCellRender: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiScreenReaderOnly"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.controlColumnHeader', {
      defaultMessage: 'Control column'
    }))),
    rowCellRender: _discover_grid_expand_button__WEBPACK_IMPORTED_MODULE_3__["ExpandButton"]
  }, {
    id: 'select',
    width: 24,
    rowCellRender: _discover_grid_document_selection__WEBPACK_IMPORTED_MODULE_6__["SelectButton"],
    headerCellRender: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiScreenReaderOnly"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.selectColumnHeader', {
      defaultMessage: 'Select column'
    })))
  }];
}
function buildEuiGridColumn(columnName, columnWidth = 0, indexPattern, defaultColumns, isSortEnabled) {
  const timeString = _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.timeLabel', {
    defaultMessage: 'Time'
  });
  const indexPatternField = indexPattern.getFieldByName(columnName);
  const column = {
    id: columnName,
    schema: Object(_discover_grid_schema__WEBPACK_IMPORTED_MODULE_5__["getSchemaByKbnType"])(indexPatternField === null || indexPatternField === void 0 ? void 0 : indexPatternField.type),
    isSortable: isSortEnabled && (indexPatternField === null || indexPatternField === void 0 ? void 0 : indexPatternField.sortable) === true,
    display: columnName === '_source' ? _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.grid.documentHeader', {
      defaultMessage: 'Document'
    }) : indexPatternField === null || indexPatternField === void 0 ? void 0 : indexPatternField.displayName,
    actions: {
      showHide: defaultColumns || columnName === indexPattern.timeFieldName ? false : {
        label: _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.removeColumnLabel', {
          defaultMessage: 'Remove column'
        }),
        iconType: 'cross'
      },
      showMoveLeft: !defaultColumns,
      showMoveRight: !defaultColumns
    },
    cellActions: indexPatternField ? Object(_discover_grid_cell_actions__WEBPACK_IMPORTED_MODULE_4__["buildCellActions"])(indexPatternField) : []
  };

  if (column.id === indexPattern.timeFieldName) {
    column.display = `${timeString} (${indexPattern.timeFieldName})`;
    column.initialWidth = 180;
  }

  if (columnWidth > 0) {
    column.initialWidth = Number(columnWidth);
  }

  return column;
}
function getEuiGridColumns(columns, settings, indexPattern, showTimeCol, defaultColumns, isSortEnabled) {
  const timeFieldName = indexPattern.timeFieldName;

  const getColWidth = column => {
    var _settings$columns$col, _settings$columns, _settings$columns$col2;

    return (_settings$columns$col = settings === null || settings === void 0 ? void 0 : (_settings$columns = settings.columns) === null || _settings$columns === void 0 ? void 0 : (_settings$columns$col2 = _settings$columns[column]) === null || _settings$columns$col2 === void 0 ? void 0 : _settings$columns$col2.width) !== null && _settings$columns$col !== void 0 ? _settings$columns$col : 0;
  };

  if (showTimeCol && indexPattern.timeFieldName && !columns.find(col => col === timeFieldName)) {
    const usedColumns = [indexPattern.timeFieldName, ...columns];
    return usedColumns.map(column => buildEuiGridColumn(column, getColWidth(column), indexPattern, defaultColumns, isSortEnabled));
  }

  return columns.map(column => buildEuiGridColumn(column, getColWidth(column), indexPattern, defaultColumns, isSortEnabled));
}
function getVisibleColumns(columns, indexPattern, showTimeCol) {
  const timeFieldName = indexPattern.timeFieldName;

  if (showTimeCol && !columns.find(col => col === timeFieldName)) {
    return [timeFieldName, ...columns];
  }

  return columns;
}

/***/ }),

/***/ "./public/application/components/discover_grid/discover_grid_context.tsx":
/*!*******************************************************************************!*\
  !*** ./public/application/components/discover_grid/discover_grid_context.tsx ***!
  \*******************************************************************************/
/*! exports provided: DiscoverGridContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverGridContext", function() { return DiscoverGridContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

const defaultContext = {};
const DiscoverGridContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(defaultContext);

/***/ }),

/***/ "./public/application/components/discover_grid/discover_grid_document_selection.tsx":
/*!******************************************************************************************!*\
  !*** ./public/application/components/discover_grid/discover_grid_document_selection.tsx ***!
  \******************************************************************************************/
/*! exports provided: getDocId, SelectButton, DiscoverGridDocumentToolbarBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocId", function() { return getDocId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectButton", function() { return SelectButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverGridDocumentToolbarBtn", function() { return DiscoverGridDocumentToolbarBtn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elastic_eui_dist_eui_theme_dark_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elastic/eui/dist/eui_theme_dark.json */ "@elastic/eui/dist/eui_theme_dark.json");
/* harmony import */ var _elastic_eui_dist_eui_theme_dark_json__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui_dist_eui_theme_dark_json__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _elastic_eui_dist_eui_theme_light_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @elastic/eui/dist/eui_theme_light.json */ "@elastic/eui/dist/eui_theme_light.json");
/* harmony import */ var _elastic_eui_dist_eui_theme_light_json__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui_dist_eui_theme_light_json__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _discover_grid_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discover_grid_context */ "./public/application/components/discover_grid/discover_grid_context.tsx");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */







/**
 * Returning a generated id of a given ES document, since `_id` can be the same
 * when using different indices and shard routing
 */

const getDocId = doc => {
  const routing = doc._routing ? doc._routing : '';
  return [doc._index, doc._id, routing].join('::');
};
const SelectButton = ({
  rowIndex,
  setCellProps
}) => {
  const {
    selectedDocs,
    expanded,
    rows,
    isDarkMode,
    setSelectedDocs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_discover_grid_context__WEBPACK_IMPORTED_MODULE_6__["DiscoverGridContext"]);
  const doc = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => rows[rowIndex], [rows, rowIndex]);
  const id = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => getDocId(doc), [doc]);
  const checked = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => selectedDocs.includes(id), [selectedDocs, id]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (expanded && doc && expanded._id === doc._id) {
      setCellProps({
        style: {
          backgroundColor: isDarkMode ? _elastic_eui_dist_eui_theme_dark_json__WEBPACK_IMPORTED_MODULE_4___default.a.euiColorHighlight : _elastic_eui_dist_eui_theme_light_json__WEBPACK_IMPORTED_MODULE_5___default.a.euiColorHighlight
        }
      });
    } else {
      setCellProps({
        style: undefined
      });
    }
  }, [expanded, doc, setCellProps, isDarkMode]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCheckbox"], {
    id: id,
    label: "",
    checked: checked,
    "data-test-subj": `dscGridSelectDoc-${id}`,
    onChange: () => {
      if (checked) {
        const newSelection = selectedDocs.filter(docId => docId !== id);
        setSelectedDocs(newSelection);
      } else {
        setSelectedDocs([...selectedDocs, id]);
      }
    }
  });
};
function DiscoverGridDocumentToolbarBtn({
  isFilterActive,
  rows,
  selectedDocs,
  setIsFilterActive,
  setSelectedDocs
}) {
  const [isSelectionPopoverOpen, setIsSelectionPopoverOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const getMenuItems = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    return [isFilterActive ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiContextMenuItem"], {
      "data-test-subj": "dscGridShowAllDocuments",
      key: "showAllDocuments",
      icon: "eye",
      onClick: () => {
        setIsSelectionPopoverOpen(false);
        setIsFilterActive(false);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "discover.showAllDocuments",
      defaultMessage: "Show all documents"
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiContextMenuItem"], {
      "data-test-subj": "dscGridShowSelectedDocuments",
      key: "showSelectedDocuments",
      icon: "eye",
      onClick: () => {
        setIsSelectionPopoverOpen(false);
        setIsFilterActive(true);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "discover.showSelectedDocumentsOnly",
      defaultMessage: "Show selected documents only"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCopy"], {
      key: "copyJsonWrapper",
      "data-test-subj": "dscGridCopySelectedDocumentsJSON",
      textToCopy: rows ? JSON.stringify(rows.filter(row => selectedDocs.includes(getDocId(row)))) : ''
    }, copy => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiContextMenuItem"], {
      key: "copyJSON",
      icon: "copyClipboard",
      onClick: copy
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "discover.copyToClipboardJSON",
      defaultMessage: "Copy documents to clipboard (JSON)"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiContextMenuItem"], {
      "data-test-subj": "dscGridClearSelectedDocuments",
      key: "clearSelection",
      icon: "cross",
      onClick: () => {
        setIsSelectionPopoverOpen(false);
        setSelectedDocs([]);
        setIsFilterActive(false);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "discover.clearSelection",
      defaultMessage: "Clear selection"
    }))];
  }, [isFilterActive, rows, selectedDocs, setIsFilterActive, setIsSelectionPopoverOpen, setSelectedDocs]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiPopover"], {
    closePopover: () => setIsSelectionPopoverOpen(false),
    isOpen: isSelectionPopoverOpen,
    panelPaddingSize: "none",
    button: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButtonEmpty"], {
      size: "xs",
      color: "text",
      iconType: "documents",
      onClick: () => setIsSelectionPopoverOpen(true),
      "data-selected-documents": selectedDocs.length,
      "data-test-subj": "dscGridSelectionBtn",
      isSelected: isFilterActive,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        euiDataGrid__controlBtn: true,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'euiDataGrid__controlBtn--active': isFilterActive
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "discover.selectedDocumentsNumber",
      defaultMessage: "{nr} documents selected",
      values: {
        nr: selectedDocs.length
      }
    }))
  }, isSelectionPopoverOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiContextMenuPanel"], {
    items: getMenuItems()
  }));
}

/***/ }),

/***/ "./public/application/components/discover_grid/discover_grid_expand_button.tsx":
/*!*************************************************************************************!*\
  !*** ./public/application/components/discover_grid/discover_grid_expand_button.tsx ***!
  \*************************************************************************************/
/*! exports provided: ExpandButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandButton", function() { return ExpandButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui_dist_eui_theme_dark_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui/dist/eui_theme_dark.json */ "@elastic/eui/dist/eui_theme_dark.json");
/* harmony import */ var _elastic_eui_dist_eui_theme_dark_json__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui_dist_eui_theme_dark_json__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastic_eui_dist_eui_theme_light_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/eui/dist/eui_theme_light.json */ "@elastic/eui/dist/eui_theme_light.json");
/* harmony import */ var _elastic_eui_dist_eui_theme_light_json__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui_dist_eui_theme_light_json__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _discover_grid_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discover_grid_context */ "./public/application/components/discover_grid/discover_grid_context.tsx");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */







/**
 * Button to expand a given row
 */
const ExpandButton = ({
  rowIndex,
  setCellProps
}) => {
  const {
    expanded,
    setExpanded,
    rows,
    isDarkMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_discover_grid_context__WEBPACK_IMPORTED_MODULE_5__["DiscoverGridContext"]);
  const current = rows[rowIndex];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (current.isAnchor) {
      setCellProps({
        className: 'dscDocsGrid__cell--highlight'
      });
    } else if (expanded && current && expanded._id === current._id) {
      setCellProps({
        style: {
          backgroundColor: isDarkMode ? _elastic_eui_dist_eui_theme_dark_json__WEBPACK_IMPORTED_MODULE_2___default.a.euiColorHighlight : _elastic_eui_dist_eui_theme_light_json__WEBPACK_IMPORTED_MODULE_3___default.a.euiColorHighlight
        }
      });
    } else {
      setCellProps({
        style: undefined
      });
    }
  }, [expanded, current, setCellProps, isDarkMode]);
  const isCurrentRowExpanded = current === expanded;
  const buttonLabel = _kbn_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('discover.grid.viewDoc', {
    defaultMessage: 'Toggle dialog with details'
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiToolTip"], {
    content: buttonLabel,
    delay: "long"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButtonIcon"], {
    size: "xs",
    iconSize: "s",
    "aria-label": buttonLabel,
    "data-test-subj": "docTableExpandToggleColumn",
    onClick: () => setExpanded(isCurrentRowExpanded ? undefined : current),
    color: isCurrentRowExpanded ? 'primary' : 'subdued',
    iconType: isCurrentRowExpanded ? 'minimize' : 'expand',
    isSelected: isCurrentRowExpanded
  }));
};

/***/ }),

/***/ "./public/application/components/discover_grid/discover_grid_flyout.tsx":
/*!******************************************************************************!*\
  !*** ./public/application/components/discover_grid/discover_grid_flyout.tsx ***!
  \******************************************************************************/
/*! exports provided: DiscoverGridFlyout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverGridFlyout", function() { return DiscoverGridFlyout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _doc_viewer_doc_viewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../doc_viewer/doc_viewer */ "./public/application/components/doc_viewer/doc_viewer.tsx");
/* harmony import */ var _helpers_get_context_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/get_context_url */ "./public/application/helpers/get_context_url.tsx");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */






function getDocFingerprintId(doc) {
  const routing = doc._routing || '';
  return [doc._index, doc._id, routing].join('||');
}

function getIndexByDocId(hits, id) {
  return hits.findIndex(h => {
    return getDocFingerprintId(h) === id;
  });
}
/**
 * Flyout displaying an expanded Elasticsearch document
 */


function DiscoverGridFlyout({
  hit,
  hits,
  indexPattern,
  columns,
  onFilter,
  onClose,
  onRemoveColumn,
  onAddColumn,
  services,
  setExpandedDoc
}) {
  const pageCount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => hits ? hits.length : 0, [hits]);
  const activePage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    const id = getDocFingerprintId(hit);

    if (!hits || pageCount <= 1) {
      return -1;
    }

    return getIndexByDocId(hits, id);
  }, [hits, hit, pageCount]);
  const setPage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(pageIdx => {
    if (hits && hits[pageIdx]) {
      setExpandedDoc(hits[pageIdx]);
    }
  }, [hits, setExpandedDoc]);
  const onKeyDown = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(ev => {
    if (ev.key === _elastic_eui__WEBPACK_IMPORTED_MODULE_2__["keys"].ARROW_LEFT || ev.key === _elastic_eui__WEBPACK_IMPORTED_MODULE_2__["keys"].ARROW_RIGHT) {
      ev.preventDefault();
      ev.stopPropagation();
      setPage(activePage + (ev.key === _elastic_eui__WEBPACK_IMPORTED_MODULE_2__["keys"].ARROW_RIGHT ? 1 : -1));
    }
  }, [activePage, setPage]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiPortal"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlyout"], {
    onClose: onClose,
    size: "m",
    "data-test-subj": "docTableDetailsFlyout",
    onKeyDown: onKeyDown
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlyoutHeader"], {
    hasBorder: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiTitle"], {
    size: "s",
    className: "dscTable__flyoutHeader",
    "data-test-subj": "docTableRowDetailsTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.grid.tableRow.detailHeading', {
    defaultMessage: 'Expanded document'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
    responsive: false,
    gutterSize: "s",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiHideFor"], {
    sizes: ['xs', 's', 'm']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.grid.tableRow.viewText', {
    defaultMessage: 'View:'
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButtonEmpty"], {
    size: "xs",
    iconType: "document",
    flush: "left",
    href: services.addBasePath(`/app/discover#/doc/${indexPattern.id}/${hit._index}?id=${encodeURIComponent(hit._id)}`),
    "data-test-subj": "docTableRowAction"
  }, _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.grid.tableRow.viewSingleDocumentLinkTextSimple', {
    defaultMessage: 'Single document'
  }))), indexPattern.isTimeBased() && indexPattern.id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButtonEmpty"], {
    size: "xs",
    iconType: "documents",
    flush: "left",
    href: Object(_helpers_get_context_url__WEBPACK_IMPORTED_MODULE_4__["getContextUrl"])(String(hit._id), indexPattern.id, columns, services.filterManager, services.addBasePath),
    "data-test-subj": "docTableRowAction"
  }, _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.grid.tableRow.viewSurroundingDocumentsLinkTextSimple', {
    defaultMessage: 'Surrounding documents'
  }))), activePage !== -1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiPagination"], {
    "aria-label": _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.grid.flyout.documentNavigation', {
      defaultMessage: 'Document navigation'
    }),
    pageCount: pageCount,
    activePage: activePage,
    onPageClick: setPage,
    className: "dscTable__flyoutDocumentNavigation",
    compressed: true,
    "data-test-subj": "dscDocNavigation"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlyoutBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_doc_viewer_doc_viewer__WEBPACK_IMPORTED_MODULE_3__["DocViewer"], {
    hit: hit,
    columns: columns,
    indexPattern: indexPattern,
    filter: (mapping, value, mode) => {
      onFilter(mapping, value, mode);
      services.toastNotifications.addSuccess(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.grid.flyout.toastFilterAdded', {
        defaultMessage: `Filter was added`
      }));
    },
    onRemoveColumn: columnName => {
      onRemoveColumn(columnName);
      services.toastNotifications.addSuccess(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.grid.flyout.toastColumnRemoved', {
        defaultMessage: `Column '{columnName}' was removed`,
        values: {
          columnName
        }
      }));
    },
    onAddColumn: columnName => {
      onAddColumn(columnName);
      services.toastNotifications.addSuccess(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.grid.flyout.toastColumnAdded', {
        defaultMessage: `Column '{columnName}' was added`,
        values: {
          columnName
        }
      }));
    }
  }))));
}

/***/ }),

/***/ "./public/application/components/discover_grid/discover_grid_schema.ts":
/*!*****************************************************************************!*\
  !*** ./public/application/components/discover_grid/discover_grid_schema.ts ***!
  \*****************************************************************************/
/*! exports provided: getSchemaByKbnType, getSchemaDetectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaByKbnType", function() { return getSchemaByKbnType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaDetectors", function() { return getSchemaDetectors; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./public/application/components/discover_grid/constants.ts");
/* harmony import */ var _src_plugins_data_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/plugins/data/common */ "plugin/data/common");
/* harmony import */ var _src_plugins_data_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_data_common__WEBPACK_IMPORTED_MODULE_1__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


function getSchemaByKbnType(kbnType) {
  // Default DataGrid schemas: boolean, numeric, datetime, json, currency, string
  switch (kbnType) {
    case _src_plugins_data_common__WEBPACK_IMPORTED_MODULE_1__["KBN_FIELD_TYPES"].IP:
    case _src_plugins_data_common__WEBPACK_IMPORTED_MODULE_1__["KBN_FIELD_TYPES"].GEO_SHAPE:
    case _src_plugins_data_common__WEBPACK_IMPORTED_MODULE_1__["KBN_FIELD_TYPES"].NUMBER:
      return 'numeric';

    case _src_plugins_data_common__WEBPACK_IMPORTED_MODULE_1__["KBN_FIELD_TYPES"].BOOLEAN:
      return 'boolean';

    case _src_plugins_data_common__WEBPACK_IMPORTED_MODULE_1__["KBN_FIELD_TYPES"].STRING:
      return 'string';

    case _src_plugins_data_common__WEBPACK_IMPORTED_MODULE_1__["KBN_FIELD_TYPES"].DATE:
      return 'datetime';

    default:
      return _constants__WEBPACK_IMPORTED_MODULE_0__["kibanaJSON"];
  }
}
function getSchemaDetectors() {
  return [{
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["kibanaJSON"],

    detector() {
      return 0; // this schema is always explicitly defined
    },

    sortTextAsc: '',
    sortTextDesc: '',
    icon: '',
    color: ''
  }];
}

/***/ }),

/***/ "./public/application/components/discover_grid/get_render_cell_value.tsx":
/*!*******************************************************************************!*\
  !*** ./public/application/components/discover_grid/get_render_cell_value.tsx ***!
  \*******************************************************************************/
/*! exports provided: getRenderCellValueFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRenderCellValueFn", function() { return getRenderCellValueFn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui_dist_eui_theme_light_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui/dist/eui_theme_light.json */ "@elastic/eui/dist/eui_theme_light.json");
/* harmony import */ var _elastic_eui_dist_eui_theme_light_json__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui_dist_eui_theme_light_json__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui_dist_eui_theme_dark_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui/dist/eui_theme_dark.json */ "@elastic/eui/dist/eui_theme_dark.json");
/* harmony import */ var _elastic_eui_dist_eui_theme_dark_json__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui_dist_eui_theme_dark_json__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _discover_grid_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./discover_grid_context */ "./public/application/components/discover_grid/discover_grid_context.tsx");
/* harmony import */ var _json_code_editor_json_code_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../json_code_editor/json_code_editor */ "./public/application/components/json_code_editor/json_code_editor.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./public/application/components/discover_grid/constants.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */







const getRenderCellValueFn = (indexPattern, rows, rowsFlattened, useNewFieldsApi, maxDocFieldsDisplayed) => ({
  rowIndex,
  columnId,
  isDetails,
  setCellProps
}) => {
  const row = rows ? rows[rowIndex] : undefined;
  const rowFlattened = rowsFlattened ? rowsFlattened[rowIndex] : undefined;
  const field = indexPattern.fields.getByName(columnId);
  const ctx = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_discover_grid_context__WEBPACK_IMPORTED_MODULE_4__["DiscoverGridContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (row.isAnchor) {
      setCellProps({
        className: 'dscDocsGrid__cell--highlight'
      });
    } else if (ctx.expanded && row && ctx.expanded._id === row._id) {
      setCellProps({
        style: {
          backgroundColor: ctx.isDarkMode ? _elastic_eui_dist_eui_theme_dark_json__WEBPACK_IMPORTED_MODULE_2___default.a.euiColorHighlight : _elastic_eui_dist_eui_theme_light_json__WEBPACK_IMPORTED_MODULE_1___default.a.euiColorHighlight
        }
      });
    } else {
      setCellProps({
        style: undefined
      });
    }
  }, [ctx, row, setCellProps]);

  if (typeof row === 'undefined' || typeof rowFlattened === 'undefined') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "-");
  }

  if (useNewFieldsApi && !field && row && row.fields && !row.fields[columnId]) {
    var _ref;

    const innerColumns = Object.fromEntries(Object.entries(row.fields).filter(([key]) => {
      return key.indexOf(`${columnId}.`) === 0;
    }));

    if (isDetails) {
      // nicely formatted JSON for the expanded view
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, JSON.stringify(innerColumns, null, 2));
    } // Put the most important fields first


    const highlights = (_ref = row.highlight) !== null && _ref !== void 0 ? _ref : {};
    const highlightPairs = [];
    const sourcePairs = [];
    Object.entries(innerColumns).forEach(([key, values]) => {
      var _indexPattern$fields$;

      const subField = indexPattern.getFieldByName(key);
      const displayKey = indexPattern.fields.getByName ? (_indexPattern$fields$ = indexPattern.fields.getByName(key)) === null || _indexPattern$fields$ === void 0 ? void 0 : _indexPattern$fields$.displayName : undefined;
      const formatter = subField ? indexPattern.getFormatterForField(subField) : {
        convert: (v, ...rest) => String(v)
      };
      const formatted = values.map(val => formatter.convert(val, 'html', {
        field: subField,
        hit: row,
        indexPattern
      })).join(', ');
      const pairs = highlights[key] ? highlightPairs : sourcePairs;
      pairs.push([displayKey ? displayKey : key, formatted]);
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiDescriptionList"], {
      type: "inline",
      compressed: true,
      className: "dscDiscoverGrid__descriptionList"
    }, [...highlightPairs, ...sourcePairs].slice(0, maxDocFieldsDisplayed).map(([key, value]) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiDescriptionListTitle"], null, key), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiDescriptionListDescription"], {
      dangerouslySetInnerHTML: {
        __html: value
      },
      className: "dscDiscoverGrid__descriptionListDescription"
    }))));
  }

  if (typeof rowFlattened[columnId] === 'object' && isDetails) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_json_code_editor_json_code_editor__WEBPACK_IMPORTED_MODULE_5__["JsonCodeEditor"], {
      json: rowFlattened[columnId],
      width: _constants__WEBPACK_IMPORTED_MODULE_6__["defaultMonacoEditorWidth"]
    });
  }

  if (field && field.type === '_source') {
    var _ref2;

    if (isDetails) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_json_code_editor_json_code_editor__WEBPACK_IMPORTED_MODULE_5__["JsonCodeEditor"], {
        json: row,
        width: _constants__WEBPACK_IMPORTED_MODULE_6__["defaultMonacoEditorWidth"]
      });
    }

    const formatted = indexPattern.formatHit(row); // Put the most important fields first

    const highlights = (_ref2 = row.highlight) !== null && _ref2 !== void 0 ? _ref2 : {};
    const highlightPairs = [];
    const sourcePairs = [];
    Object.entries(formatted).forEach(([key, val]) => {
      var _indexPattern$fields$2;

      const pairs = highlights[key] ? highlightPairs : sourcePairs;
      const displayKey = indexPattern.fields.getByName ? (_indexPattern$fields$2 = indexPattern.fields.getByName(key)) === null || _indexPattern$fields$2 === void 0 ? void 0 : _indexPattern$fields$2.displayName : undefined;
      pairs.push([displayKey ? displayKey : key, val]);
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiDescriptionList"], {
      type: "inline",
      compressed: true,
      className: "dscDiscoverGrid__descriptionList"
    }, [...highlightPairs, ...sourcePairs].slice(0, maxDocFieldsDisplayed).map(([key, value]) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiDescriptionListTitle"], null, key), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiDescriptionListDescription"], {
      dangerouslySetInnerHTML: {
        __html: value
      },
      className: "dscDiscoverGrid__descriptionListDescription"
    }))));
  }

  if (!(field !== null && field !== void 0 && field.type) && rowFlattened && typeof rowFlattened[columnId] === 'object') {
    if (isDetails) {
      // nicely formatted JSON for the expanded view
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, JSON.stringify(rowFlattened[columnId], null, 2));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, JSON.stringify(rowFlattened[columnId]));
  }

  const valueFormatted = indexPattern.formatField(row, columnId);

  if (typeof valueFormatted === 'undefined') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "-");
  }

  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/no-danger
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: indexPattern.formatField(row, columnId)
      }
    })
  );
};

/***/ }),

/***/ "./public/application/components/json_code_editor/json_code_editor.tsx":
/*!*****************************************************************************!*\
  !*** ./public/application/components/json_code_editor/json_code_editor.tsx ***!
  \*****************************************************************************/
/*! exports provided: JsonCodeEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonCodeEditor", function() { return JsonCodeEditor; });
/* harmony import */ var _json_code_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json_code_editor.scss */ "./public/application/components/json_code_editor/json_code_editor.scss");
/* harmony import */ var _json_code_editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_json_code_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kbn_monaco__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kbn/monaco */ "@kbn/monaco");
/* harmony import */ var _kbn_monaco__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kbn_monaco__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _json_code_editor_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./json_code_editor_common */ "./public/application/components/json_code_editor/json_code_editor_common.tsx");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */




const JsonCodeEditor = ({
  json,
  width,
  hasLineNumbers
}) => {
  const jsonValue = JSON.stringify(json, null, 2); // setting editor height based on lines height and count to stretch and fit its content

  const setEditorCalculatedHeight = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(editor => {
    var _editor$getModel;

    const editorElement = editor.getDomNode();

    if (!editorElement) {
      return;
    }

    const lineHeight = editor.getOption(_kbn_monaco__WEBPACK_IMPORTED_MODULE_2__["monaco"].editor.EditorOption.lineHeight);
    const lineCount = ((_editor$getModel = editor.getModel()) === null || _editor$getModel === void 0 ? void 0 : _editor$getModel.getLineCount()) || 1;
    const height = editor.getTopForLineNumber(lineCount + 1) + lineHeight;
    editorElement.style.height = `${height}px`;
    editor.layout();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_json_code_editor_common__WEBPACK_IMPORTED_MODULE_3__["JsonCodeEditorCommon"], {
    jsonValue: jsonValue,
    width: width,
    hasLineNumbers: hasLineNumbers,
    onEditorDidMount: setEditorCalculatedHeight
  });
};

/***/ }),

/***/ "./public/application/helpers/columns.ts":
/*!***********************************************!*\
  !*** ./public/application/helpers/columns.ts ***!
  \***********************************************/
/*! exports provided: getDisplayedColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisplayedColumns", function() { return getDisplayedColumns; });
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
// We store this outside the function as a constant, so we're not creating a new array every time
// the function is returning this. A changing array might cause the data grid to think it got
// new columns, and thus performing worse than using the same array over multiple renders.
const SOURCE_ONLY = ['_source'];
/**
 * Function to provide fallback when
 * 1) no columns are given
 * 2) Just one column is given, which is the configured timefields
 */

function getDisplayedColumns(stateColumns = [], indexPattern) {
  return stateColumns && stateColumns.length > 0 && // check if all columns where removed except the configured timeField (this can't be removed)
  !(stateColumns.length === 1 && stateColumns[0] === indexPattern.timeFieldName) ? stateColumns : SOURCE_ONLY;
}

/***/ }),

/***/ "./public/application/helpers/get_context_url.tsx":
/*!********************************************************!*\
  !*** ./public/application/helpers/get_context_url.tsx ***!
  \********************************************************/
/*! exports provided: getContextUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContextUrl", function() { return getContextUrl; });
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! query-string */ "../../node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rison_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rison-node */ "rison-node");
/* harmony import */ var rison_node__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rison_node__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_plugins_kibana_utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/plugins/kibana_utils/common */ "plugin/kibanaUtils/common");
/* harmony import */ var _src_plugins_kibana_utils_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_kibana_utils_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../src/plugins/data/public */ "plugin/data/public");
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */





/**
 * Helper function to generate an URL to a document in Discover's context view
 */
function getContextUrl(documentId, indexPatternId, columns, filterManager, addBasePath) {
  const globalFilters = filterManager.getGlobalFilters();
  const appFilters = filterManager.getAppFilters();
  const hash = Object(query_string__WEBPACK_IMPORTED_MODULE_0__["stringify"])(_src_plugins_kibana_utils_common__WEBPACK_IMPORTED_MODULE_2__["url"].encodeQuery({
    _g: rison_node__WEBPACK_IMPORTED_MODULE_1___default.a.encode({
      filters: globalFilters || []
    }),
    _a: rison_node__WEBPACK_IMPORTED_MODULE_1___default.a.encode({
      columns,
      filters: (appFilters || []).map(_src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3__["esFilters"].disableFilter)
    })
  }), {
    encode: false,
    sort: false
  });
  return addBasePath(`/app/discover#/context/${encodeURIComponent(indexPatternId)}/${encodeURIComponent(documentId)}?${hash}`);
}

/***/ }),

/***/ "./public/application/helpers/popularize_field.ts":
/*!********************************************************!*\
  !*** ./public/application/helpers/popularize_field.ts ***!
  \********************************************************/
/*! exports provided: popularizeField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popularizeField", function() { return popularizeField; });
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
async function popularizeField(indexPattern, fieldName, indexPatternsService) {
  if (!indexPattern.id) return;
  const field = indexPattern.fields.getByName(fieldName);

  if (!field) {
    return;
  }

  field.count++; // Catch 409 errors caused by user adding columns in a higher frequency that the changes can be persisted to Elasticsearch

  try {
    await indexPatternsService.updateSavedObject(indexPattern, 0, true); // eslint-disable-next-line no-empty
  } catch {}
}



/***/ })

}]);
//# sourceMappingURL=discovernew.chunk.2.js.map