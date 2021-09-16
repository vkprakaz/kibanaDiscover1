/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"discovernew": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "discovernew.chunk." + chunkId + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["discovernew_bundle_jsonpfunction"] = window["discovernew_bundle_jsonpfunction"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../node_modules/@kbn/optimizer/target_node/worker/entry_point_creator.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@kbn/optimizer/target_node/worker/entry_point_creator.js":
/*!***************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/@kbn/optimizer/target_node/worker/entry_point_creator.js ***!
  \***************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_bazel_bazel_vkprakaz_26178b022285f638d3f788d1abed5567_execroot_kibana_node_modules_val_loader_dist_cjs_js_key_discovernew_cache_bazel_bazel_vkprakaz_26178b022285f638d3f788d1abed5567_execroot_kibana_bazel_out_k8_fastbuild_bin_packages_kbn_ui_shared_deps_target_node_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../.cache/bazel/_bazel_vkprakaz/26178b022285f638d3f788d1abed5567/execroot/kibana/node_modules/val-loader/dist/cjs.js?key=discovernew!../../../../../../.cache/bazel/_bazel_vkprakaz/26178b022285f638d3f788d1abed5567/execroot/kibana/bazel-out/k8-fastbuild/bin/packages/kbn-ui-shared-deps/target_node/public_path_module_creator.js */ "../../node_modules/val-loader/dist/cjs.js?key=discovernew!../../../.cache/bazel/_bazel_vkprakaz/26178b022285f638d3f788d1abed5567/execroot/kibana/bazel-out/k8-fastbuild/bin/packages/kbn-ui-shared-deps/target_node/public_path_module_creator.js");
/* harmony import */ var _cache_bazel_bazel_vkprakaz_26178b022285f638d3f788d1abed5567_execroot_kibana_node_modules_val_loader_dist_cjs_js_key_discovernew_cache_bazel_bazel_vkprakaz_26178b022285f638d3f788d1abed5567_execroot_kibana_bazel_out_k8_fastbuild_bin_packages_kbn_ui_shared_deps_target_node_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cache_bazel_bazel_vkprakaz_26178b022285f638d3f788d1abed5567_execroot_kibana_node_modules_val_loader_dist_cjs_js_key_discovernew_cache_bazel_bazel_vkprakaz_26178b022285f638d3f788d1abed5567_execroot_kibana_bazel_out_k8_fastbuild_bin_packages_kbn_ui_shared_deps_target_node_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__kbnBundles__.define('plugin/discovernew/public', __webpack_require__, /*require.resolve*/(/*! ../../../../../plugins/kibanaDiscover1/public */ "./public/index.ts"))

/***/ }),

/***/ "../../node_modules/classnames/index.js":
/*!**************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/classnames/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/components/json_code_editor/json_code_editor.scss?v8dark":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-0-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./public/application/components/json_code_editor/json_code_editor.scss?v8dark ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscJsonCodeEditor {\n  width: 100%; }\n", "",{"version":3,"sources":["json_code_editor.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,WAAW,EAAE","file":"json_code_editor.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscJsonCodeEditor {\n  width: 100%; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/components/json_code_editor/json_code_editor.scss?v8light":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-1-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./public/application/components/json_code_editor/json_code_editor.scss?v8light ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscJsonCodeEditor {\n  width: 100%; }\n", "",{"version":3,"sources":["json_code_editor.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,WAAW,EAAE","file":"json_code_editor.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.dscJsonCodeEditor {\n  width: 100%; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/components/source_viewer/source_viewer.scss?v8dark":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-0-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./public/application/components/source_viewer/source_viewer.scss?v8dark ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.sourceViewer__loading {\n  display: flex;\n  flex-direction: row;\n  justify-content: left;\n  flex: 1 0 100%;\n  text-align: center;\n  height: 100%;\n  width: 100%;\n  margin-top: 8px; }\n\n.sourceViewer__loadingSpinner {\n  margin-right: 8px; }\n", "",{"version":3,"sources":["source_viewer.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,cAAc;EACd,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,eAAe,EAAE;;AAEnB;EACE,iBAAiB,EAAE","file":"source_viewer.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.sourceViewer__loading {\n  display: flex;\n  flex-direction: row;\n  justify-content: left;\n  flex: 1 0 100%;\n  text-align: center;\n  height: 100%;\n  width: 100%;\n  margin-top: 8px; }\n\n.sourceViewer__loadingSpinner {\n  margin-right: 8px; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/components/source_viewer/source_viewer.scss?v8light":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/vkprakaz/kibana/node_modules/postcss-loader/src??ref--6-oneOf-1-2!/home/vkprakaz/kibana/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./public/application/components/source_viewer/source_viewer.scss?v8light ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.sourceViewer__loading {\n  display: flex;\n  flex-direction: row;\n  justify-content: left;\n  flex: 1 0 100%;\n  text-align: center;\n  height: 100%;\n  width: 100%;\n  margin-top: 8px; }\n\n.sourceViewer__loadingSpinner {\n  margin-right: 8px; }\n", "",{"version":3,"sources":["source_viewer.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,cAAc;EACd,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,eAAe,EAAE;;AAEnB;EACE,iBAAiB,EAAE","file":"source_viewer.scss","sourcesContent":["/**\n * 1. Focus rings shouldn't be visible on scrollable regions, but a11y requires them to be focusable.\n *    Browser's supporting `:focus-visible` will still show outline on keyboard focus only.\n *    Others like Safari, won't show anything at all.\n * 2. Force the `:focus-visible` when the `tabindex=0` (is tabbable)\n */\n.sourceViewer__loading {\n  display: flex;\n  flex-direction: row;\n  justify-content: left;\n  flex: 1 0 100%;\n  text-align: center;\n  height: 100%;\n  width: 100%;\n  margin-top: 8px; }\n\n.sourceViewer__loadingSpinner {\n  margin-right: 8px; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!*************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/css-loader/dist/runtime/api.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../../node_modules/history/cjs/history.js":
/*!*****************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/history/cjs/history.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var resolvePathname = _interopDefault(__webpack_require__(/*! resolve-pathname */ "../../node_modules/resolve-pathname/cjs/index.js"));
var valueEqual = _interopDefault(__webpack_require__(/*! value-equal */ "../../node_modules/value-equal/cjs/index.js"));
var warning = _interopDefault(__webpack_require__(/*! tiny-warning */ "../../node_modules/tiny-warning/dist/tiny-warning.cjs.js"));
var invariant = _interopDefault(__webpack_require__(/*! tiny-invariant */ "../../node_modules/tiny-invariant/dist/tiny-invariant.cjs.js"));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolvePathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && valueEqual(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
    warning(prompt == null, 'A history supports only one prompt at a time');
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          warning(false, 'A history needs a getUserConfirmation function in order to use a prompt message');
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ? invariant(false, 'Browser history needs a DOM') : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
    warning(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
    warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        warning(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
    warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        warning(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');
  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ? invariant(false, 'Hash history needs a DOM') : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
    warning(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    return '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
    warning(state === undefined, 'Hash history cannot push state; it is ignored');
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
        warning(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');
        setState();
      }
    });
  }

  function replace(path, state) {
    warning(state === undefined, 'Hash history cannot replace state; it is ignored');
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    warning(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
    warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
    warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}

exports.createBrowserHistory = createBrowserHistory;
exports.createHashHistory = createHashHistory;
exports.createMemoryHistory = createMemoryHistory;
exports.createLocation = createLocation;
exports.locationsAreEqual = locationsAreEqual;
exports.parsePath = parsePath;
exports.createPath = createPath;


/***/ }),

/***/ "../../node_modules/history/index.js":
/*!***********************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/history/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/history.js */ "../../node_modules/history/cjs/history.js");
}


/***/ }),

/***/ "../../node_modules/resolve-pathname/cjs/index.js":
/*!************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/resolve-pathname/cjs/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

exports.default = resolvePathname;
module.exports = exports['default'];

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../../node_modules/tiny-invariant/dist/tiny-invariant.cjs.js":
/*!************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/tiny-invariant/dist/tiny-invariant.cjs.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction) {
    throw new Error(prefix);
  } else {
    throw new Error(prefix + ": " + (message || ''));
  }
}

module.exports = invariant;


/***/ }),

/***/ "../../node_modules/tiny-warning/dist/tiny-warning.cjs.js":
/*!********************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/tiny-warning/dist/tiny-warning.cjs.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

module.exports = warning;


/***/ }),

/***/ "../../node_modules/val-loader/dist/cjs.js?key=discovernew!../../../.cache/bazel/_bazel_vkprakaz/26178b022285f638d3f788d1abed5567/execroot/kibana/bazel-out/k8-fastbuild/bin/packages/kbn-ui-shared-deps/target_node/public_path_module_creator.js":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/val-loader/dist/cjs.js?key=discovernew!/home/vkprakaz/.cache/bazel/_bazel_vkprakaz/26178b022285f638d3f788d1abed5567/execroot/kibana/bazel-out/k8-fastbuild/bin/packages/kbn-ui-shared-deps/target_node/public_path_module_creator.js ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__kbnPublicPath__['discovernew']

/***/ }),

/***/ "../../node_modules/value-equal/cjs/index.js":
/*!*******************************************************************!*\
  !*** /home/vkprakaz/kibana/node_modules/value-equal/cjs/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

exports.default = valueEqual;
module.exports = exports['default'];

/***/ }),

/***/ "./common/index.ts":
/*!*************************!*\
  !*** ./common/index.ts ***!
  \*************************/
/*! exports provided: DEFAULT_COLUMNS_SETTING, SAMPLE_SIZE_SETTING, SORT_DEFAULT_ORDER_SETTING, SEARCH_ON_PAGE_LOAD_SETTING, DOC_HIDE_TIME_COLUMN_SETTING, FIELDS_LIMIT_SETTING, CONTEXT_DEFAULT_SIZE_SETTING, CONTEXT_STEP_SETTING, CONTEXT_TIE_BREAKER_FIELDS_SETTING, DOC_TABLE_LEGACY, MODIFY_COLUMNS_ON_SWITCH, SEARCH_FIELDS_FROM_SOURCE, MAX_DOC_FIELDS_DISPLAYED, SHOW_MULTIFIELDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_COLUMNS_SETTING", function() { return DEFAULT_COLUMNS_SETTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAMPLE_SIZE_SETTING", function() { return SAMPLE_SIZE_SETTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORT_DEFAULT_ORDER_SETTING", function() { return SORT_DEFAULT_ORDER_SETTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_ON_PAGE_LOAD_SETTING", function() { return SEARCH_ON_PAGE_LOAD_SETTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOC_HIDE_TIME_COLUMN_SETTING", function() { return DOC_HIDE_TIME_COLUMN_SETTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIELDS_LIMIT_SETTING", function() { return FIELDS_LIMIT_SETTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_DEFAULT_SIZE_SETTING", function() { return CONTEXT_DEFAULT_SIZE_SETTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_STEP_SETTING", function() { return CONTEXT_STEP_SETTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_TIE_BREAKER_FIELDS_SETTING", function() { return CONTEXT_TIE_BREAKER_FIELDS_SETTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOC_TABLE_LEGACY", function() { return DOC_TABLE_LEGACY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODIFY_COLUMNS_ON_SWITCH", function() { return MODIFY_COLUMNS_ON_SWITCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_FIELDS_FROM_SOURCE", function() { return SEARCH_FIELDS_FROM_SOURCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_DOC_FIELDS_DISPLAYED", function() { return MAX_DOC_FIELDS_DISPLAYED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_MULTIFIELDS", function() { return SHOW_MULTIFIELDS; });
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const DEFAULT_COLUMNS_SETTING = 'defaultColumnsNew';
const SAMPLE_SIZE_SETTING = 'discover:sampleSizeNew';
const SORT_DEFAULT_ORDER_SETTING = 'discover:sort:defaultOrderNew';
const SEARCH_ON_PAGE_LOAD_SETTING = 'discover:searchOnPageLoadNew';
const DOC_HIDE_TIME_COLUMN_SETTING = 'doc_table:hideTimeColumnNew';
const FIELDS_LIMIT_SETTING = 'fields:popularLimitNew';
const CONTEXT_DEFAULT_SIZE_SETTING = 'context:defaultSizeNew';
const CONTEXT_STEP_SETTING = 'context:stepNew';
const CONTEXT_TIE_BREAKER_FIELDS_SETTING = 'context:tieBreakerFieldsNew';
const DOC_TABLE_LEGACY = 'doc_table:legacyNew';
const MODIFY_COLUMNS_ON_SWITCH = 'discover:modifyColumnsOnSwitchNew';
const SEARCH_FIELDS_FROM_SOURCE = 'discover:searchFieldsFromSourceNew';
const MAX_DOC_FIELDS_DISPLAYED = 'discover:maxDocFieldsDisplayedNew';
const SHOW_MULTIFIELDS = 'discover:showMultiFieldsNew';

/***/ }),

/***/ "./public/application/apps/main/utils/nested_fields.ts":
/*!*************************************************************!*\
  !*** ./public/application/apps/main/utils/nested_fields.ts ***!
  \*************************************************************/
/*! exports provided: isNestedFieldParent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNestedFieldParent", function() { return isNestedFieldParent; });
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/fp */ "lodash/fp");
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_fp__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


/**
 * This function checks if the given field in a given index pattern is a nested field's parent.
 * Discover doesn't flatten arrays of objects, so for documents with an `object` or `nested` field that
 * contains an array, Discover will only detect the top level root field. We want to detect when those
 * root fields are `nested` so that we can display the proper icon and label. However, those root
 * `nested` fields are not a part of the index pattern. Their children are though, and contain nested path
 * info. So to detect nested fields we look through the index pattern for nested children
 * whose path begins with the current field. There are edge cases where
 * this could incorrectly identify a plain `object` field as `nested`. Say we had the following document
 * where `foo` is a plain object field and `bar` is a nested field.
 * {
 *   "foo": [
 *   {
 *     "bar": [
 *       {
 *         "baz": "qux"
 *       }
 *     ]
 *   },
 *   {
 *     "bar": [
 *       {
 *         "baz": "qux"
 *       }
 *     ]
 *   }
 * ]
 * }
 * The following code will search for `foo`, find it at the beginning of the path to the nested child field
 * `foo.bar.baz` and incorrectly mark `foo` as nested. Any time we're searching for the name of a plain object
 * field that happens to match a segment of a nested path, we'll get a false positive.
 * We're aware of this issue and we'll have to live with
 * it in the short term. The long term fix will be to add info about the `nested` and `object` root fields
 * to the index pattern, but that has its own complications which you can read more about in the following
 * issue: https://github.com/elastic/kibana/issues/54957
 */
function isNestedFieldParent(fieldName, indexPattern) {
  return !indexPattern.fields.getByName(fieldName) && !!indexPattern.fields.getAll().find(patternField => {
    var _patternField$subType, _patternField$subType2, _patternField$subType3;

    // We only want to match a full path segment
    const nestedRootRegex = new RegExp(Object(lodash_fp__WEBPACK_IMPORTED_MODULE_0__["escapeRegExp"])(fieldName) + '(\\.|$)');
    return nestedRootRegex.test((_patternField$subType = (_patternField$subType2 = patternField.subType) === null || _patternField$subType2 === void 0 ? void 0 : (_patternField$subType3 = _patternField$subType2.nested) === null || _patternField$subType3 === void 0 ? void 0 : _patternField$subType3.path) !== null && _patternField$subType !== void 0 ? _patternField$subType : '');
  });
}

/***/ }),

/***/ "./public/application/components/doc/elastic_request_state.ts":
/*!********************************************************************!*\
  !*** ./public/application/components/doc/elastic_request_state.ts ***!
  \********************************************************************/
/*! exports provided: ElasticRequestState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElasticRequestState", function() { return ElasticRequestState; });
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
let ElasticRequestState;

(function (ElasticRequestState) {
  ElasticRequestState[ElasticRequestState["Loading"] = 0] = "Loading";
  ElasticRequestState[ElasticRequestState["NotFound"] = 1] = "NotFound";
  ElasticRequestState[ElasticRequestState["Found"] = 2] = "Found";
  ElasticRequestState[ElasticRequestState["Error"] = 3] = "Error";
  ElasticRequestState[ElasticRequestState["NotFoundIndexPattern"] = 4] = "NotFoundIndexPattern";
})(ElasticRequestState || (ElasticRequestState = {}));

/***/ }),

/***/ "./public/application/components/doc/use_es_doc_search.ts":
/*!****************************************************************!*\
  !*** ./public/application/components/doc/use_es_doc_search.ts ***!
  \****************************************************************/
/*! exports provided: buildSearchBody, useEsDocSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildSearchBody", function() { return buildSearchBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEsDocSearch", function() { return useEsDocSearch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kibana_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../kibana_services */ "./public/kibana_services.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common */ "./common/index.ts");
/* harmony import */ var _elastic_request_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elastic_request_state */ "./public/application/components/doc/elastic_request_state.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */





/**
 * helper function to build a query body for Elasticsearch
 * https://www.elastic.co/guide/en/elasticsearch/reference/current//query-dsl-ids-query.html
 */
function buildSearchBody(id, indexPattern, useNewFieldsApi, requestAllFields) {
  var _request$body;

  const computedFields = indexPattern.getComputedFields();
  const runtimeFields = computedFields.runtimeFields;
  const request = {
    body: {
      query: {
        ids: {
          values: [id]
        }
      },
      stored_fields: computedFields.storedFields,
      script_fields: computedFields.scriptFields
    }
  };

  if (!request.body) {
    return undefined;
  }

  if (useNewFieldsApi) {
    // @ts-expect-error
    request.body.fields = [{
      field: '*',
      include_unmapped: 'true'
    }];
    request.body.runtime_mappings = runtimeFields ? runtimeFields : {};

    if (requestAllFields) {
      request.body._source = true;
    }
  } else {
    request.body._source = true;
  }

  request.body.fields = [...(((_request$body = request.body) === null || _request$body === void 0 ? void 0 : _request$body.fields) || []), ...(computedFields.docvalueFields || [])];
  return request;
}
/**
 * Custom react hook for querying a single doc in ElasticSearch
 */

function useEsDocSearch({
  id,
  index,
  indexPatternId,
  indexPatternService,
  requestSource
}) {
  const [indexPattern, setIndexPattern] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [status, setStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_elastic_request_state__WEBPACK_IMPORTED_MODULE_3__["ElasticRequestState"].Loading);
  const [hit, setHit] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    data,
    uiSettings
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Object(_kibana_services__WEBPACK_IMPORTED_MODULE_1__["getServices"])(), []);
  const useNewFieldsApi = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => !uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_2__["SEARCH_FIELDS_FROM_SOURCE"]), [uiSettings]);
  const requestData = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async () => {
    try {
      var _buildSearchBody, _hits$hits;

      const indexPatternEntity = await indexPatternService.get(indexPatternId);
      setIndexPattern(indexPatternEntity);
      const {
        rawResponse
      } = await data.search.search({
        params: {
          index,
          body: (_buildSearchBody = buildSearchBody(id, indexPatternEntity, useNewFieldsApi, requestSource)) === null || _buildSearchBody === void 0 ? void 0 : _buildSearchBody.body
        }
      }).toPromise();
      const hits = rawResponse.hits;

      if (hits !== null && hits !== void 0 && (_hits$hits = hits.hits) !== null && _hits$hits !== void 0 && _hits$hits[0]) {
        setStatus(_elastic_request_state__WEBPACK_IMPORTED_MODULE_3__["ElasticRequestState"].Found);
        setHit(hits.hits[0]);
      } else {
        setStatus(_elastic_request_state__WEBPACK_IMPORTED_MODULE_3__["ElasticRequestState"].NotFound);
      }
    } catch (err) {
      if (err.savedObjectId) {
        setStatus(_elastic_request_state__WEBPACK_IMPORTED_MODULE_3__["ElasticRequestState"].NotFoundIndexPattern);
      } else if (err.status === 404) {
        setStatus(_elastic_request_state__WEBPACK_IMPORTED_MODULE_3__["ElasticRequestState"].NotFound);
      } else {
        setStatus(_elastic_request_state__WEBPACK_IMPORTED_MODULE_3__["ElasticRequestState"].Error);
      }
    }
  }, [id, index, indexPatternId, indexPatternService, data.search, useNewFieldsApi, requestSource]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    requestData();
  }, [requestData]);
  return [status, hit, indexPattern, requestData];
}

/***/ }),

/***/ "./public/application/components/doc_viewer/doc_viewer_render_error.tsx":
/*!******************************************************************************!*\
  !*** ./public/application/components/doc_viewer/doc_viewer_render_error.tsx ***!
  \******************************************************************************/
/*! exports provided: DocViewerError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocViewerError", function() { return DocViewerError; });
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



const DocViewerErrorWrapper = ({
  error
}) => {
  throw error;
};

const DocViewerError = ({
  error
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiErrorBoundary"], {
  "data-test-subj": "docViewerError"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DocViewerErrorWrapper, {
  error: error
}));

/***/ }),

/***/ "./public/application/components/field_name/field_name.tsx":
/*!*****************************************************************!*\
  !*** ./public/application/components/field_name/field_name.tsx ***!
  \*****************************************************************/
/*! exports provided: FieldName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldName", function() { return FieldName; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/plugins/kibana_react/public */ "plugin/kibanaReact/public");
/* harmony import */ var _src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _field_type_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./field_type_name */ "./public/application/components/field_name/field_type_name.ts");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */




function FieldName({
  fieldName,
  fieldMapping,
  fieldType,
  fieldIconProps,
  className,
  scripted = false
}) {
  const typeName = Object(_field_type_name__WEBPACK_IMPORTED_MODULE_3__["getFieldTypeName"])(fieldType);
  const displayName = fieldMapping && fieldMapping.displayName ? fieldMapping.displayName : fieldName;
  const tooltip = displayName !== fieldName ? `${fieldName} (${displayName})` : fieldName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    className: className,
    alignItems: "center",
    gutterSize: "s",
    responsive: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_2__["FieldIcon"], _extends({
    type: fieldType,
    label: typeName,
    scripted: scripted
  }, fieldIconProps))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    className: "eui-textTruncate"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiToolTip"], {
    position: "top",
    content: tooltip,
    delay: "long",
    anchorClassName: "eui-textTruncate"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, displayName))));
}

/***/ }),

/***/ "./public/application/components/field_name/field_type_name.ts":
/*!*********************************************************************!*\
  !*** ./public/application/components/field_name/field_type_name.ts ***!
  \*********************************************************************/
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

/***/ "./public/application/components/json_code_editor/json_code_editor.scss":
/*!******************************************************************************!*\
  !*** ./public/application/components/json_code_editor/json_code_editor.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__kbnThemeTag__) {
  case 'v7dark':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7dark]. Styles were compiled using the [v8dark] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7dark] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./json_code_editor.scss?v8dark */ "./public/application/components/json_code_editor/json_code_editor.scss?v8dark")

  case 'v7light':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7light]. Styles were compiled using the [v8light] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7light] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./json_code_editor.scss?v8light */ "./public/application/components/json_code_editor/json_code_editor.scss?v8light")

  case 'v8dark':
    return __webpack_require__(/*! ./json_code_editor.scss?v8dark */ "./public/application/components/json_code_editor/json_code_editor.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./json_code_editor.scss?v8light */ "./public/application/components/json_code_editor/json_code_editor.scss?v8light");
}

/***/ }),

/***/ "./public/application/components/json_code_editor/json_code_editor.scss?v8dark":
/*!*************************************************************************************!*\
  !*** ./public/application/components/json_code_editor/json_code_editor.scss?v8dark ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-0-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./json_code_editor.scss?v8dark */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/components/json_code_editor/json_code_editor.scss?v8dark");

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

/***/ "./public/application/components/json_code_editor/json_code_editor.scss?v8light":
/*!**************************************************************************************!*\
  !*** ./public/application/components/json_code_editor/json_code_editor.scss?v8light ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./json_code_editor.scss?v8light */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/components/json_code_editor/json_code_editor.scss?v8light");

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

/***/ "./public/application/components/json_code_editor/json_code_editor_common.tsx":
/*!************************************************************************************!*\
  !*** ./public/application/components/json_code_editor/json_code_editor_common.tsx ***!
  \************************************************************************************/
/*! exports provided: JsonCodeEditorCommon, JSONCodeEditorCommonMemoized */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonCodeEditorCommon", function() { return JsonCodeEditorCommon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONCodeEditorCommonMemoized", function() { return JSONCodeEditorCommonMemoized; });
/* harmony import */ var _json_code_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json_code_editor.scss */ "./public/application/components/json_code_editor/json_code_editor.scss");
/* harmony import */ var _json_code_editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_json_code_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kbn_monaco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kbn/monaco */ "@kbn/monaco");
/* harmony import */ var _kbn_monaco__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_kbn_monaco__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/plugins/kibana_react/public */ "plugin/kibanaReact/public");
/* harmony import */ var _src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_5__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */






const codeEditorAriaLabel = _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.json.codeEditorAriaLabel', {
  defaultMessage: 'Read only JSON view of an elasticsearch document'
});
const copyToClipboardLabel = _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.json.copyToClipboardLabel', {
  defaultMessage: 'Copy to clipboard'
});
const JsonCodeEditorCommon = ({
  jsonValue,
  width,
  hasLineNumbers,
  onEditorDidMount
}) => {
  if (jsonValue === '') {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexGroup"], {
    className: "dscJsonCodeEditor",
    direction: "column",
    gutterSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "eui-textRight"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiCopy"], {
    textToCopy: jsonValue
  }, copy => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiButtonEmpty"], {
    size: "xs",
    flush: "right",
    iconType: "copyClipboard",
    onClick: copy
  }, copyToClipboardLabel)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_plugins_kibana_react_public__WEBPACK_IMPORTED_MODULE_5__["CodeEditor"], {
    languageId: _kbn_monaco__WEBPACK_IMPORTED_MODULE_3__["XJsonLang"].ID,
    width: width,
    value: jsonValue || '',
    onChange: () => {},
    editorDidMount: onEditorDidMount,
    "aria-label": codeEditorAriaLabel,
    options: {
      automaticLayout: true,
      fontSize: 12,
      lineNumbers: hasLineNumbers ? 'on' : 'off',
      minimap: {
        enabled: false
      },
      overviewRulerBorder: false,
      readOnly: true,
      scrollbar: {
        alwaysConsumeMouseWheel: false
      },
      scrollBeyondLastLine: false,
      wordWrap: 'on',
      wrappingIndent: 'indent'
    }
  })));
};
const JSONCodeEditorCommonMemoized = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(JsonCodeEditorCommon, props);
});

/***/ }),

/***/ "./public/application/components/source_viewer/source_viewer.scss":
/*!************************************************************************!*\
  !*** ./public/application/components/source_viewer/source_viewer.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__kbnThemeTag__) {
  case 'v7dark':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7dark]. Styles were compiled using the [v8dark] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7dark] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./source_viewer.scss?v8dark */ "./public/application/components/source_viewer/source_viewer.scss?v8dark")

  case 'v7light':
    console.error(new Error("SASS files in [discovernew] were not built for theme [v7light]. Styles were compiled using the [v8light] theme instead to keep Kibana somewhat usable. Please adjust the advanced settings to make use of [v8dark,v8light] or make sure the KBN_OPTIMIZER_THEMES environment variable includes [v7light] in a comma separated list of themes you want to compile. You can also set it to \"*\" to build all themes."));
    return __webpack_require__(/*! ./source_viewer.scss?v8light */ "./public/application/components/source_viewer/source_viewer.scss?v8light")

  case 'v8dark':
    return __webpack_require__(/*! ./source_viewer.scss?v8dark */ "./public/application/components/source_viewer/source_viewer.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./source_viewer.scss?v8light */ "./public/application/components/source_viewer/source_viewer.scss?v8light");
}

/***/ }),

/***/ "./public/application/components/source_viewer/source_viewer.scss?v8dark":
/*!*******************************************************************************!*\
  !*** ./public/application/components/source_viewer/source_viewer.scss?v8dark ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-0-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-3!./source_viewer.scss?v8dark */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/components/source_viewer/source_viewer.scss?v8dark");

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

/***/ "./public/application/components/source_viewer/source_viewer.scss?v8light":
/*!********************************************************************************!*\
  !*** ./public/application/components/source_viewer/source_viewer.scss?v8light ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-3!./source_viewer.scss?v8light */ "../../node_modules/css-loader/dist/cjs.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/dist/cjs.js?!./public/application/components/source_viewer/source_viewer.scss?v8light");

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

/***/ "./public/application/components/source_viewer/source_viewer.tsx":
/*!***********************************************************************!*\
  !*** ./public/application/components/source_viewer/source_viewer.tsx ***!
  \***********************************************************************/
/*! exports provided: SourceViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceViewer", function() { return SourceViewer; });
/* harmony import */ var _source_viewer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source_viewer.scss */ "./public/application/components/source_viewer/source_viewer.scss");
/* harmony import */ var _source_viewer_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_source_viewer_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kbn_monaco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kbn/monaco */ "@kbn/monaco");
/* harmony import */ var _kbn_monaco__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_kbn_monaco__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _doc_use_es_doc_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../doc/use_es_doc_search */ "./public/application/components/doc/use_es_doc_search.ts");
/* harmony import */ var _json_code_editor_json_code_editor_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../json_code_editor/json_code_editor_common */ "./public/application/components/json_code_editor/json_code_editor_common.tsx");
/* harmony import */ var _doc_elastic_request_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../doc/elastic_request_state */ "./public/application/components/doc/elastic_request_state.ts");
/* harmony import */ var _public_kibana_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../public/kibana_services */ "./public/kibana_services.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common */ "./common/index.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */











const SourceViewer = ({
  id,
  index,
  indexPatternId,
  width,
  hasLineNumbers
}) => {
  const [editor, setEditor] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const [jsonValue, setJsonValue] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const indexPatternService = Object(_public_kibana_services__WEBPACK_IMPORTED_MODULE_9__["getServices"])().data.indexPatterns;
  const useNewFieldsApi = !Object(_public_kibana_services__WEBPACK_IMPORTED_MODULE_9__["getServices"])().uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_10__["SEARCH_FIELDS_FROM_SOURCE"]);
  const [reqState, hit,, requestData] = Object(_doc_use_es_doc_search__WEBPACK_IMPORTED_MODULE_6__["useEsDocSearch"])({
    id,
    index,
    indexPatternId,
    indexPatternService,
    requestSource: useNewFieldsApi
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (reqState === _doc_elastic_request_state__WEBPACK_IMPORTED_MODULE_8__["ElasticRequestState"].Found && hit) {
      setJsonValue(JSON.stringify(hit, undefined, 2));
    }
  }, [reqState, hit]); // setting editor height based on lines height and count to stretch and fit its content

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    var _editor$getModel;

    if (!editor) {
      return;
    }

    const editorElement = editor.getDomNode();

    if (!editorElement) {
      return;
    }

    const lineHeight = editor.getOption(_kbn_monaco__WEBPACK_IMPORTED_MODULE_3__["monaco"].editor.EditorOption.lineHeight);
    const lineCount = ((_editor$getModel = editor.getModel()) === null || _editor$getModel === void 0 ? void 0 : _editor$getModel.getLineCount()) || 1;
    const height = editor.getTopForLineNumber(lineCount + 1) + lineHeight;

    if (!jsonValue || jsonValue === '') {
      editorElement.style.height = '0px';
    } else {
      editorElement.style.height = `${height}px`;
    }

    editor.layout();
  }, [editor, jsonValue]);
  const loadingState = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "sourceViewer__loading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiLoadingSpinner"], {
    className: "sourceViewer__loadingSpinner"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiText"], {
    size: "xs",
    color: "subdued"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "discover.loadingJSON",
    defaultMessage: "Loading JSON"
  })));
  const errorMessageTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, _kbn_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].translate('discover.sourceViewer.errorMessageTitle', {
    defaultMessage: 'An Error Occurred'
  }));
  const errorMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, _kbn_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].translate('discover.sourceViewer.errorMessage', {
    defaultMessage: 'Could not fetch data at this time. Refresh the tab to try again.'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiButton"], {
    iconType: "refresh",
    onClick: requestData
  }, _kbn_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].translate('discover.sourceViewer.refresh', {
    defaultMessage: 'Refresh'
  })));
  const errorState = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiEmptyPrompt"], {
    iconType: "alert",
    title: errorMessageTitle,
    body: errorMessage
  });

  if (reqState === _doc_elastic_request_state__WEBPACK_IMPORTED_MODULE_8__["ElasticRequestState"].Error || reqState === _doc_elastic_request_state__WEBPACK_IMPORTED_MODULE_8__["ElasticRequestState"].NotFound || reqState === _doc_elastic_request_state__WEBPACK_IMPORTED_MODULE_8__["ElasticRequestState"].NotFoundIndexPattern) {
    return errorState;
  }

  if (reqState === _doc_elastic_request_state__WEBPACK_IMPORTED_MODULE_8__["ElasticRequestState"].Loading || jsonValue === '') {
    return loadingState;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_json_code_editor_json_code_editor_common__WEBPACK_IMPORTED_MODULE_7__["JSONCodeEditorCommonMemoized"], {
    jsonValue: jsonValue,
    width: width,
    hasLineNumbers: hasLineNumbers,
    onEditorDidMount: editorNode => setEditor(editorNode)
  });
};

/***/ }),

/***/ "./public/application/components/table/table.tsx":
/*!*******************************************************!*\
  !*** ./public/application/components/table/table.tsx ***!
  \*******************************************************/
/*! exports provided: DocViewTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocViewTable", function() { return DocViewTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _table_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table_row */ "./public/application/components/table/table_row.tsx");
/* harmony import */ var _table_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table_helper */ "./public/application/components/table/table_helper.tsx");
/* harmony import */ var _apps_main_utils_nested_fields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../apps/main/utils/nested_fields */ "./public/application/apps/main/utils/nested_fields.ts");
/* harmony import */ var _kibana_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../kibana_services */ "./public/kibana_services.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common */ "./common/index.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */







const COLLAPSE_LINE_LENGTH = 350;
function DocViewTable({
  hit,
  indexPattern,
  filter,
  columns,
  onAddColumn,
  onRemoveColumn
}) {
  const [fieldRowOpen, setFieldRowOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [multiFields, setMultiFields] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [fieldsWithParents, setFieldsWithParents] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const showMultiFields = Object(_kibana_services__WEBPACK_IMPORTED_MODULE_5__["getServices"])().uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_6__["SHOW_MULTIFIELDS"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!indexPattern) {
      return;
    }

    const mapping = indexPattern.fields.getByName;
    const flattened = indexPattern.flattenHit(hit);
    const map = {};
    const arr = [];
    Object.keys(flattened).forEach(key => {
      var _field$spec, _field$spec$subType, _field$spec$subType$m;

      const field = mapping(key);

      if (field && (_field$spec = field.spec) !== null && _field$spec !== void 0 && (_field$spec$subType = _field$spec.subType) !== null && _field$spec$subType !== void 0 && (_field$spec$subType$m = _field$spec$subType.multi) !== null && _field$spec$subType$m !== void 0 && _field$spec$subType$m.parent) {
        const parent = field.spec.subType.multi.parent;

        if (!map[parent]) {
          map[parent] = [];
        }

        const value = map[parent];
        value.push(key);
        map[parent] = value;
        arr.push(key);
      }
    });

    if (showMultiFields) {
      setMultiFields(map);
    }

    setFieldsWithParents(arr);
  }, [indexPattern, hit, showMultiFields]);
  const toggleColumn = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(field => {
    if (!onRemoveColumn || !onAddColumn || !columns) {
      return;
    }

    if (columns.includes(field)) {
      onRemoveColumn(field);
    } else {
      onAddColumn(field);
    }
  }, [onRemoveColumn, onAddColumn, columns]);

  if (!indexPattern) {
    return null;
  }

  const mapping = indexPattern.fields.getByName;
  const flattened = indexPattern.flattenHit(hit);
  const formatted = indexPattern.formatHit(hit, 'html');

  function toggleValueCollapse(field) {
    fieldRowOpen[field] = !fieldRowOpen[field];
    setFieldRowOpen({ ...fieldRowOpen
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table table-condensed kbnDocViewerTable"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, Object.keys(flattened).filter(field => {
    return !fieldsWithParents.includes(field);
  }).sort((fieldA, fieldB) => {
    const mappingA = mapping(fieldA);
    const mappingB = mapping(fieldB);
    const nameA = !mappingA || !mappingA.displayName ? fieldA : mappingA.displayName;
    const nameB = !mappingB || !mappingB.displayName ? fieldB : mappingB.displayName;
    return nameA.localeCompare(nameB);
  }).map(field => {
    var _indexPattern$fields$;

    const valueRaw = flattened[field];
    const value = Object(_table_helper__WEBPACK_IMPORTED_MODULE_3__["trimAngularSpan"])(String(formatted[field]));
    const isCollapsible = value.length > COLLAPSE_LINE_LENGTH;
    const isCollapsed = isCollapsible && !fieldRowOpen[field];
    const displayUnderscoreWarning = !mapping(field) && field.indexOf('_') === 0;
    const fieldType = Object(_apps_main_utils_nested_fields__WEBPACK_IMPORTED_MODULE_4__["isNestedFieldParent"])(field, indexPattern) ? 'nested' : (_indexPattern$fields$ = indexPattern.fields.getByName(field)) === null || _indexPattern$fields$ === void 0 ? void 0 : _indexPattern$fields$.type;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: field
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_table_row__WEBPACK_IMPORTED_MODULE_2__["DocViewTableRow"], {
      field: field,
      fieldMapping: mapping(field),
      fieldType: String(fieldType),
      displayUnderscoreWarning: displayUnderscoreWarning,
      isCollapsed: isCollapsed,
      isCollapsible: isCollapsible,
      isColumnActive: !!(columns !== null && columns !== void 0 && columns.includes(field)),
      onFilter: filter,
      onToggleCollapse: () => toggleValueCollapse(field),
      onToggleColumn: () => toggleColumn(field),
      value: value,
      valueRaw: valueRaw
    }), multiFields[field] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: `tableDocViewRow-multifieldsTitle-${field}`,
      className: "kbnDocViewer__multifield_row",
      "data-test-subj": `tableDocViewRow-multifieldsTitle-${field}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "kbnDocViewer__field"
    }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "kbnDocViewer__multifield_title",
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.fieldChooser.discoverField.multiFields', {
      defaultMessage: 'Multi fields'
    })))) : null, multiFields[field] ? multiFields[field].map(multiField => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_table_row__WEBPACK_IMPORTED_MODULE_2__["DocViewTableRow"], {
        key: multiField,
        fieldMapping: mapping(multiField),
        fieldType: String(fieldType),
        displayUnderscoreWarning: displayUnderscoreWarning,
        isCollapsed: isCollapsed,
        isCollapsible: isCollapsible,
        isColumnActive: Array.isArray(columns) && columns.includes(multiField),
        onFilter: filter,
        onToggleCollapse: () => {
          toggleValueCollapse(multiField);
        },
        onToggleColumn: () => toggleColumn(multiField),
        value: value,
        valueRaw: valueRaw
      });
    }) : null);
  })));
}

/***/ }),

/***/ "./public/application/components/table/table_helper.tsx":
/*!**************************************************************!*\
  !*** ./public/application/components/table/table_helper.tsx ***!
  \**************************************************************/
/*! exports provided: arrayContainsObjects, trimAngularSpan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayContainsObjects", function() { return arrayContainsObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimAngularSpan", function() { return trimAngularSpan; });
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 * Returns true if the given array contains at least 1 object
 */
function arrayContainsObjects(value) {
  return Array.isArray(value) && value.some(v => typeof v === 'object' && v !== null);
}
/**
 * Removes markup added by kibana fields html formatter
 */

function trimAngularSpan(text) {
  return text.replace(/^<span ng-non-bindable>/, '').replace(/<\/span>$/, '');
}

/***/ }),

/***/ "./public/application/components/table/table_row.tsx":
/*!***********************************************************!*\
  !*** ./public/application/components/table/table_row.tsx ***!
  \***********************************************************/
/*! exports provided: DocViewTableRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocViewTableRow", function() { return DocViewTableRow; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _table_row_btn_filter_add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table_row_btn_filter_add */ "./public/application/components/table/table_row_btn_filter_add.tsx");
/* harmony import */ var _table_row_btn_filter_remove__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table_row_btn_filter_remove */ "./public/application/components/table/table_row_btn_filter_remove.tsx");
/* harmony import */ var _table_row_btn_toggle_column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table_row_btn_toggle_column */ "./public/application/components/table/table_row_btn_toggle_column.tsx");
/* harmony import */ var _table_row_btn_collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table_row_btn_collapse */ "./public/application/components/table/table_row_btn_collapse.tsx");
/* harmony import */ var _table_row_btn_filter_exists__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table_row_btn_filter_exists */ "./public/application/components/table/table_row_btn_filter_exists.tsx");
/* harmony import */ var _table_row_icon_underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./table_row_icon_underscore */ "./public/application/components/table/table_row_icon_underscore.tsx");
/* harmony import */ var _field_name_field_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../field_name/field_name */ "./public/application/components/field_name/field_name.tsx");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */









function DocViewTableRow({
  field,
  fieldMapping,
  fieldType,
  displayUnderscoreWarning,
  isCollapsible,
  isCollapsed,
  isColumnActive,
  onFilter,
  onToggleCollapse,
  onToggleColumn,
  value,
  valueRaw
}) {
  const valueClassName = classnames__WEBPACK_IMPORTED_MODULE_0___default()({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    kbnDocViewer__value: true,
    'truncate-by-height': isCollapsible && isCollapsed
  });
  const key = field ? field : fieldMapping === null || fieldMapping === void 0 ? void 0 : fieldMapping.displayName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    key: key,
    "data-test-subj": `tableDocViewRow-${key}`
  }, typeof onFilter === 'function' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "kbnDocViewer__buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_table_row_btn_filter_add__WEBPACK_IMPORTED_MODULE_2__["DocViewTableRowBtnFilterAdd"], {
    disabled: !fieldMapping || !fieldMapping.filterable,
    onClick: () => onFilter(fieldMapping, valueRaw, '+')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_table_row_btn_filter_remove__WEBPACK_IMPORTED_MODULE_3__["DocViewTableRowBtnFilterRemove"], {
    disabled: !fieldMapping || !fieldMapping.filterable,
    onClick: () => onFilter(fieldMapping, valueRaw, '-')
  }), typeof onToggleColumn === 'function' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_table_row_btn_toggle_column__WEBPACK_IMPORTED_MODULE_4__["DocViewTableRowBtnToggleColumn"], {
    active: isColumnActive,
    onClick: onToggleColumn,
    fieldname: String(key)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_table_row_btn_filter_exists__WEBPACK_IMPORTED_MODULE_6__["DocViewTableRowBtnFilterExists"], {
    disabled: !fieldMapping || !fieldMapping.filterable,
    onClick: () => onFilter('_exists_', field, '+'),
    scripted: fieldMapping && fieldMapping.scripted
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "kbnDocViewer__field"
  }, field ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_field_name_field_name__WEBPACK_IMPORTED_MODULE_8__["FieldName"], {
    fieldName: field,
    fieldType: fieldType,
    fieldMapping: fieldMapping,
    scripted: Boolean(fieldMapping === null || fieldMapping === void 0 ? void 0 : fieldMapping.scripted)
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "\xA0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, isCollapsible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_table_row_btn_collapse__WEBPACK_IMPORTED_MODULE_5__["DocViewTableRowBtnCollapse"], {
    onClick: onToggleCollapse,
    isCollapsed: isCollapsed
  }), displayUnderscoreWarning && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_table_row_icon_underscore__WEBPACK_IMPORTED_MODULE_7__["DocViewTableRowIconUnderscore"], null), field ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: valueClassName
  }, key, ":\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: valueClassName,
    "data-test-subj": `tableDocViewRow-${key}-value`
    /*
     * Justification for dangerouslySetInnerHTML:
     * We just use values encoded by our field formatters
     */
    // eslint-disable-next-line react/no-danger
    ,
    dangerouslySetInnerHTML: {
      __html: value
    }
  })));
}

/***/ }),

/***/ "./public/application/components/table/table_row_btn_collapse.tsx":
/*!************************************************************************!*\
  !*** ./public/application/components/table/table_row_btn_collapse.tsx ***!
  \************************************************************************/
/*! exports provided: DocViewTableRowBtnCollapse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocViewTableRowBtnCollapse", function() { return DocViewTableRowBtnCollapse; });
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



function DocViewTableRowBtnCollapse({
  onClick,
  isCollapsed
}) {
  const label = _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.docViews.table.toggleFieldDetails', {
    defaultMessage: 'Toggle field details'
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiToolTip"], {
    content: label
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButtonIcon"], {
    "aria-expanded": !isCollapsed,
    "aria-label": label,
    "data-test-subj": "collapseBtn",
    onClick: () => onClick(),
    iconType: isCollapsed ? 'arrowRight' : 'arrowDown',
    iconSize: 's'
  }));
}

/***/ }),

/***/ "./public/application/components/table/table_row_btn_filter_add.tsx":
/*!**************************************************************************!*\
  !*** ./public/application/components/table/table_row_btn_filter_add.tsx ***!
  \**************************************************************************/
/*! exports provided: DocViewTableRowBtnFilterAdd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocViewTableRowBtnFilterAdd", function() { return DocViewTableRowBtnFilterAdd; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_3__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */




function DocViewTableRowBtnFilterAdd({
  onClick,
  disabled = false
}) {
  const tooltipContent = disabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "discover.docViews.table.unindexedFieldsCanNotBeSearchedTooltip",
    defaultMessage: "Unindexed fields can not be searched"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "discover.docViews.table.filterForValueButtonTooltip",
    defaultMessage: "Filter for value"
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiToolTip"], {
    content: tooltipContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButtonIcon"], {
    "aria-label": _kbn_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('discover.docViews.table.filterForValueButtonAriaLabel', {
      defaultMessage: 'Filter for value'
    }),
    className: "kbnDocViewer__actionButton",
    "data-test-subj": "addInclusiveFilterButton",
    disabled: disabled,
    onClick: onClick,
    iconType: 'plusInCircle',
    iconSize: 's'
  }));
}

/***/ }),

/***/ "./public/application/components/table/table_row_btn_filter_exists.tsx":
/*!*****************************************************************************!*\
  !*** ./public/application/components/table/table_row_btn_filter_exists.tsx ***!
  \*****************************************************************************/
/*! exports provided: DocViewTableRowBtnFilterExists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocViewTableRowBtnFilterExists", function() { return DocViewTableRowBtnFilterExists; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_3__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */




function DocViewTableRowBtnFilterExists({
  onClick,
  disabled = false,
  scripted = false
}) {
  const tooltipContent = disabled ? scripted ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "discover.docViews.table.unableToFilterForPresenceOfScriptedFieldsTooltip",
    defaultMessage: "Unable to filter for presence of scripted fields"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "discover.docViews.table.unableToFilterForPresenceOfMetaFieldsTooltip",
    defaultMessage: "Unable to filter for presence of meta fields"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "discover.docViews.table.filterForFieldPresentButtonTooltip",
    defaultMessage: "Filter for field present"
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiToolTip"], {
    content: tooltipContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButtonIcon"], {
    "aria-label": _kbn_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('discover.docViews.table.filterForFieldPresentButtonAriaLabel', {
      defaultMessage: 'Filter for field present'
    }),
    onClick: onClick,
    className: "kbnDocViewer__actionButton",
    "data-test-subj": "addExistsFilterButton",
    disabled: disabled,
    iconType: 'filter',
    iconSize: 's'
  }));
}

/***/ }),

/***/ "./public/application/components/table/table_row_btn_filter_remove.tsx":
/*!*****************************************************************************!*\
  !*** ./public/application/components/table/table_row_btn_filter_remove.tsx ***!
  \*****************************************************************************/
/*! exports provided: DocViewTableRowBtnFilterRemove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocViewTableRowBtnFilterRemove", function() { return DocViewTableRowBtnFilterRemove; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_3__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */




function DocViewTableRowBtnFilterRemove({
  onClick,
  disabled = false
}) {
  const tooltipContent = disabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "discover.docViews.table.unindexedFieldsCanNotBeSearchedTooltip",
    defaultMessage: "Unindexed fields can not be searched"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "discover.docViews.table.filterOutValueButtonTooltip",
    defaultMessage: "Filter out value"
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiToolTip"], {
    content: tooltipContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButtonIcon"], {
    "aria-label": _kbn_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('discover.docViews.table.filterOutValueButtonAriaLabel', {
      defaultMessage: 'Filter out value'
    }),
    className: "kbnDocViewer__actionButton",
    "data-test-subj": "removeInclusiveFilterButton",
    disabled: disabled,
    onClick: onClick,
    iconType: 'minusInCircle',
    iconSize: 's'
  }));
}

/***/ }),

/***/ "./public/application/components/table/table_row_btn_toggle_column.tsx":
/*!*****************************************************************************!*\
  !*** ./public/application/components/table/table_row_btn_toggle_column.tsx ***!
  \*****************************************************************************/
/*! exports provided: DocViewTableRowBtnToggleColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocViewTableRowBtnToggleColumn", function() { return DocViewTableRowBtnToggleColumn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kbn/i18n/react */ "@kbn/i18n/react");
/* harmony import */ var _kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_3__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */




function DocViewTableRowBtnToggleColumn({
  onClick,
  active,
  disabled = false,
  fieldname = ''
}) {
  if (disabled) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButtonIcon"], {
      "aria-label": _kbn_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('discover.docViews.table.toggleColumnInTableButtonAriaLabel', {
        defaultMessage: 'Toggle column in table'
      }),
      className: "kbnDocViewer__actionButton",
      "data-test-subj": "toggleColumnButton",
      disabled: true,
      iconType: 'listAdd',
      iconSize: 's'
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiToolTip"], {
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "discover.docViews.table.toggleColumnInTableButtonTooltip",
      defaultMessage: "Toggle column in table"
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButtonIcon"], {
    "aria-label": _kbn_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('discover.docViews.table.toggleColumnInTableButtonAriaLabel', {
      defaultMessage: 'Toggle column in table'
    }),
    "aria-pressed": active,
    onClick: onClick,
    className: "kbnDocViewer__actionButton",
    "data-test-subj": `toggleColumnButton_${fieldname}`,
    iconType: 'listAdd',
    iconSize: 's'
  }));
}

/***/ }),

/***/ "./public/application/components/table/table_row_icon_underscore.tsx":
/*!***************************************************************************!*\
  !*** ./public/application/components/table/table_row_icon_underscore.tsx ***!
  \***************************************************************************/
/*! exports provided: DocViewTableRowIconUnderscore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocViewTableRowIconUnderscore", function() { return DocViewTableRowIconUnderscore; });
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



function DocViewTableRowIconUnderscore() {
  const ariaLabel = _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.docViews.table.fieldNamesBeginningWithUnderscoreUnsupportedAriaLabel', {
    defaultMessage: 'Warning'
  });
  const tooltipContent = _kbn_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.docViews.table.fieldNamesBeginningWithUnderscoreUnsupportedTooltip', {
    defaultMessage: 'Field names beginning with {underscoreSign} are not supported',
    values: {
      underscoreSign: '_'
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIconTip"], {
    "aria-label": ariaLabel,
    content: tooltipContent,
    color: "warning",
    iconProps: {
      className: 'kbnDocViewer__warning',
      'data-test-subj': 'underscoreWarning'
    },
    size: "s",
    type: "alert"
  });
}

/***/ }),

/***/ "./public/application/doc_views/doc_views_helpers.tsx":
/*!************************************************************!*\
  !*** ./public/application/doc_views/doc_views_helpers.tsx ***!
  \************************************************************/
/*! exports provided: injectAngularElement, convertDirectiveToRenderFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectAngularElement", function() { return injectAngularElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDirectiveToRenderFn", function() { return convertDirectiveToRenderFn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_doc_viewer_doc_viewer_render_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/doc_viewer/doc_viewer_render_error */ "./public/application/components/doc_viewer/doc_viewer_render_error.tsx");
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

async function injectAngularElement(domNode, template, scopeProps, Controller, getInjector) {
  const $injector = await getInjector();
  const rootScope = $injector.get('$rootScope');
  const $compile = $injector.get('$compile');
  const newScope = Object.assign(rootScope.$new(), scopeProps);

  if (typeof Controller === 'function') {
    // when a controller is defined, expose the value it produces to the view as `$ctrl`
    // see: https://docs.angularjs.org/api/ng/provider/$compileProvider#component
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    newScope.$ctrl = $injector.instantiate(Controller, {
      $scope: newScope
    });
  }

  const $target = angular__WEBPACK_IMPORTED_MODULE_2___default.a.element(domNode);
  const $element = angular__WEBPACK_IMPORTED_MODULE_2___default.a.element(template);
  newScope.$apply(() => {
    const linkFn = $compile($element);
    $target.empty().append($element);
    linkFn(newScope);
  });
  return () => {
    newScope.$destroy();
  };
}
/**
 * Converts a given legacy angular directive to a render function
 * for usage in a react component. Note that the rendering is async
 */

function convertDirectiveToRenderFn(directive, getInjector) {
  return (domNode, props) => {
    let rejected = false;
    const cleanupFnPromise = injectAngularElement(domNode, directive.template, props, directive.controller, getInjector);
    cleanupFnPromise.catch(e => {
      rejected = true;
      Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_doc_viewer_doc_viewer_render_error__WEBPACK_IMPORTED_MODULE_3__["DocViewerError"], {
        error: e
      }), domNode);
    });
    return () => {
      if (!rejected) {
        // for cleanup
        // http://roubenmeschian.com/rubo/?p=51
        cleanupFnPromise.then(cleanup => cleanup());
      }
    };
  };
}

/***/ }),

/***/ "./public/application/doc_views/doc_views_registry.ts":
/*!************************************************************!*\
  !*** ./public/application/doc_views/doc_views_registry.ts ***!
  \************************************************************/
/*! exports provided: DocViewsRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocViewsRegistry", function() { return DocViewsRegistry; });
/* harmony import */ var _doc_views_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doc_views_helpers */ "./public/application/doc_views/doc_views_helpers.tsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

class DocViewsRegistry {
  constructor() {
    _defineProperty(this, "docViews", []);

    _defineProperty(this, "angularInjectorGetter", null);

    _defineProperty(this, "setAngularInjectorGetter", injectorGetter => {
      this.angularInjectorGetter = injectorGetter;
    });
  }

  /**
   * Extends and adds the given doc view to the registry array
   */
  addDocView(docViewRaw) {
    const docView = typeof docViewRaw === 'function' ? docViewRaw() : docViewRaw;

    if (docView.directive) {
      // convert angular directive to render function for backwards compatibility
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      docView.render = Object(_doc_views_helpers__WEBPACK_IMPORTED_MODULE_0__["convertDirectiveToRenderFn"])(docView.directive, () => {
        if (!this.angularInjectorGetter) {
          throw new Error('Angular was not initialized');
        }

        return this.angularInjectorGetter();
      });
    }

    if (typeof docView.shouldShow !== 'function') {
      docView.shouldShow = () => true;
    }

    this.docViews.push(docView);
  }
  /**
   * Returns a sorted array of doc_views for rendering tabs
   */


  getDocViewsSorted(hit) {
    return this.docViews.filter(docView => docView.shouldShow(hit)).sort((a, b) => Number(a.order) > Number(b.order) ? 1 : -1);
  }

}

/***/ }),

/***/ "./public/application/embeddable/constants.ts":
/*!****************************************************!*\
  !*** ./public/application/embeddable/constants.ts ***!
  \****************************************************/
/*! exports provided: SEARCH_EMBEDDABLE_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_EMBEDDABLE_TYPE", function() { return SEARCH_EMBEDDABLE_TYPE; });
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const SEARCH_EMBEDDABLE_TYPE = 'search';

/***/ }),

/***/ "./public/application/embeddable/index.ts":
/*!************************************************!*\
  !*** ./public/application/embeddable/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./public/application/embeddable/constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SEARCH_EMBEDDABLE_TYPE", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["SEARCH_EMBEDDABLE_TYPE"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./public/application/embeddable/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_1__) if(["default","SEARCH_EMBEDDABLE_TYPE"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _search_embeddable_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search_embeddable_factory */ "./public/application/embeddable/search_embeddable_factory.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchEmbeddableFactory", function() { return _search_embeddable_factory__WEBPACK_IMPORTED_MODULE_2__["SearchEmbeddableFactory"]; });

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */




/***/ }),

/***/ "./public/application/embeddable/search_embeddable_factory.ts":
/*!********************************************************************!*\
  !*** ./public/application/embeddable/search_embeddable_factory.ts ***!
  \********************************************************************/
/*! exports provided: SearchEmbeddableFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchEmbeddableFactory", function() { return SearchEmbeddableFactory; });
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kibana_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../kibana_services */ "./public/kibana_services.ts");
/* harmony import */ var _src_plugins_embeddable_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/plugins/embeddable/public */ "plugin/embeddable/public");
/* harmony import */ var _src_plugins_embeddable_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_embeddable_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./public/application/embeddable/constants.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */




class SearchEmbeddableFactory {
  constructor(getStartServices, getInjector) {
    this.getStartServices = getStartServices;

    _defineProperty(this, "type", _constants__WEBPACK_IMPORTED_MODULE_3__["SEARCH_EMBEDDABLE_TYPE"]);

    _defineProperty(this, "$injector", void 0);

    _defineProperty(this, "getInjector", void 0);

    _defineProperty(this, "savedObjectMetaData", {
      name: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.savedSearch.savedObjectName', {
        defaultMessage: 'Saved search'
      }),
      type: 'search',
      getIconForSavedObject: () => 'discoverApp'
    });

    _defineProperty(this, "isEditable", async () => {
      return (await this.getStartServices()).isEditable();
    });

    _defineProperty(this, "createFromSavedObject", async (savedObjectId, input, parent) => {
      if (!this.$injector) {
        this.$injector = await this.getInjector();
      }

      const filterManager = Object(_kibana_services__WEBPACK_IMPORTED_MODULE_1__["getServices"])().filterManager;
      const url = await Object(_kibana_services__WEBPACK_IMPORTED_MODULE_1__["getServices"])().getSavedSearchUrlById(savedObjectId);
      const editUrl = Object(_kibana_services__WEBPACK_IMPORTED_MODULE_1__["getServices"])().addBasePath(`/app/discover${url}`);

      try {
        const savedObject = await Object(_kibana_services__WEBPACK_IMPORTED_MODULE_1__["getServices"])().getSavedSearchById(savedObjectId);
        const indexPattern = savedObject.searchSource.getField('index');
        const {
          executeTriggerActions
        } = await this.getStartServices();
        const {
          SavedSearchEmbeddable: SavedSearchEmbeddableClass
        } = await Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! ./saved_search_embeddable */ "./public/application/embeddable/saved_search_embeddable.tsx"));
        return new SavedSearchEmbeddableClass({
          savedSearch: savedObject,
          editUrl,
          editPath: url,
          filterManager,
          editable: Object(_kibana_services__WEBPACK_IMPORTED_MODULE_1__["getServices"])().capabilities.discover.save,
          indexPatterns: indexPattern ? [indexPattern] : [],
          services: Object(_kibana_services__WEBPACK_IMPORTED_MODULE_1__["getServices"])()
        }, input, executeTriggerActions, parent);
      } catch (e) {
        console.error(e); // eslint-disable-line no-console

        return new _src_plugins_embeddable_public__WEBPACK_IMPORTED_MODULE_2__["ErrorEmbeddable"](e, input, parent);
      }
    });

    this.$injector = null;
    this.getInjector = getInjector;
  }

  canCreateNew() {
    return false;
  }

  getDisplayName() {
    return _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.embeddable.search.displayName', {
      defaultMessage: 'search'
    });
  }

  async create(input) {
    return new _src_plugins_embeddable_public__WEBPACK_IMPORTED_MODULE_2__["ErrorEmbeddable"]('Saved searches can only be created from a saved object', input);
  }

}

/***/ }),

/***/ "./public/application/embeddable/types.ts":
/*!************************************************!*\
  !*** ./public/application/embeddable/types.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/build_services.ts":
/*!**********************************!*\
  !*** ./public/build_services.ts ***!
  \**********************************/
/*! exports provided: buildServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildServices", function() { return buildServices; });
/* harmony import */ var _saved_searches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saved_searches */ "./public/saved_searches/index.ts");
/* harmony import */ var _kibana_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kibana_services */ "./public/kibana_services.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


async function buildServices(core, plugins, context, getEmbeddableInjector) {
  const services = {
    savedObjectsClient: core.savedObjects.client,
    savedObjects: plugins.savedObjects
  };
  const savedObjectService = Object(_saved_searches__WEBPACK_IMPORTED_MODULE_0__["createSavedSearchesLoader"])(services);
  const {
    usageCollection
  } = plugins;
  return {
    addBasePath: core.http.basePath.prepend,
    capabilities: core.application.capabilities,
    chrome: core.chrome,
    core,
    data: plugins.data,
    docLinks: core.docLinks,
    theme: plugins.charts.theme,
    filterManager: plugins.data.query.filterManager,
    getEmbeddableInjector,
    getSavedSearchById: async id => savedObjectService.get(id),
    getSavedSearchUrlById: async id => savedObjectService.urlFor(id),
    history: _kibana_services__WEBPACK_IMPORTED_MODULE_1__["getHistory"],
    indexPatterns: plugins.data.indexPatterns,
    inspector: plugins.inspector,
    metadata: {
      branch: context.env.packageInfo.branch
    },
    navigation: plugins.navigation,
    share: plugins.share,
    kibanaLegacy: plugins.kibanaLegacy,
    urlForwarding: plugins.urlForwarding,
    timefilter: plugins.data.query.timefilter.timefilter,
    toastNotifications: core.notifications.toasts,
    uiSettings: core.uiSettings,
    trackUiMetric: usageCollection === null || usageCollection === void 0 ? void 0 : usageCollection.reportUiCounter.bind(usageCollection, 'discover'),
    indexPatternFieldEditor: plugins.indexPatternFieldEditor
  };
}

/***/ }),

/***/ "./public/index.ts":
/*!*************************!*\
  !*** ./public/index.ts ***!
  \*************************/
/*! exports provided: DiscoverSetup, DiscoverStart, plugin, SavedSearch, SavedSearchLoader, createSavedSearchesLoader, ISearchEmbeddable, SEARCH_EMBEDDABLE_TYPE, SearchInput, loadSharingDataHelpers, DISCOVER_APP_URL_GENERATOR, DiscoverUrlGeneratorState, DiscoverAppLocator, DiscoverAppLocatorParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin */ "./public/plugin.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiscoverSetup", function() { return _plugin__WEBPACK_IMPORTED_MODULE_0__["DiscoverSetup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiscoverStart", function() { return _plugin__WEBPACK_IMPORTED_MODULE_0__["DiscoverStart"]; });

/* harmony import */ var _saved_searches__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saved_searches */ "./public/saved_searches/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedSearch", function() { return _saved_searches__WEBPACK_IMPORTED_MODULE_1__["SavedSearch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedSearchLoader", function() { return _saved_searches__WEBPACK_IMPORTED_MODULE_1__["SavedSearchLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSavedSearchesLoader", function() { return _saved_searches__WEBPACK_IMPORTED_MODULE_1__["createSavedSearchesLoader"]; });

/* harmony import */ var _application_embeddable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./application/embeddable */ "./public/application/embeddable/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ISearchEmbeddable", function() { return _application_embeddable__WEBPACK_IMPORTED_MODULE_2__["ISearchEmbeddable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SEARCH_EMBEDDABLE_TYPE", function() { return _application_embeddable__WEBPACK_IMPORTED_MODULE_2__["SEARCH_EMBEDDABLE_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchInput", function() { return _application_embeddable__WEBPACK_IMPORTED_MODULE_2__["SearchInput"]; });

/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared */ "./public/shared/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadSharingDataHelpers", function() { return _shared__WEBPACK_IMPORTED_MODULE_3__["loadSharingDataHelpers"]; });

/* harmony import */ var _url_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./url_generator */ "./public/url_generator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DISCOVER_APP_URL_GENERATOR", function() { return _url_generator__WEBPACK_IMPORTED_MODULE_4__["DISCOVER_APP_URL_GENERATOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiscoverUrlGeneratorState", function() { return _url_generator__WEBPACK_IMPORTED_MODULE_4__["DiscoverUrlGeneratorState"]; });

/* harmony import */ var _locator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locator */ "./public/locator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiscoverAppLocator", function() { return _locator__WEBPACK_IMPORTED_MODULE_5__["DiscoverAppLocator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiscoverAppLocatorParams", function() { return _locator__WEBPACK_IMPORTED_MODULE_5__["DiscoverAppLocatorParams"]; });

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


function plugin(initializerContext) {
  return new _plugin__WEBPACK_IMPORTED_MODULE_0__["DiscoverPlugin"](initializerContext);
}






/***/ }),

/***/ "./public/kibana_services.ts":
/*!***********************************!*\
  !*** ./public/kibana_services.ts ***!
  \***********************************/
/*! exports provided: setAngularModule, getAngularModule, getServices, setServices, setUiActions, getUiActions, getHeaderActionMenuMounter, setHeaderActionMenuMounter, getUrlTracker, setUrlTracker, getDocViewsRegistry, setDocViewsRegistry, getHistory, syncHistoryLocations, getScopedHistory, setScopedHistory, tabifyAggResponse, unhashUrl, redirectWhenMissing, formatMsg, formatStack, subscribeWithScope, IndexPatternsContract, IIndexPattern, IndexPattern, indexPatterns, IFieldType, ISearchSource, EsQuerySortValue, SortDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAngularModule", function() { return setAngularModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAngularModule", function() { return getAngularModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServices", function() { return getServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setServices", function() { return setServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUiActions", function() { return setUiActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUiActions", function() { return getUiActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeaderActionMenuMounter", function() { return getHeaderActionMenuMounter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHeaderActionMenuMounter", function() { return setHeaderActionMenuMounter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlTracker", function() { return getUrlTracker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUrlTracker", function() { return setUrlTracker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocViewsRegistry", function() { return getDocViewsRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDocViewsRegistry", function() { return setDocViewsRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHistory", function() { return getHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncHistoryLocations", function() { return syncHistoryLocations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScopedHistory", function() { return getScopedHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setScopedHistory", function() { return setScopedHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabifyAggResponse", function() { return tabifyAggResponse; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history */ "../../node_modules/history/index.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/plugins/kibana_utils/public */ "plugin/kibanaUtils/public");
/* harmony import */ var _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/plugins/data/public */ "plugin/data/public");
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unhashUrl", function() { return _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_2__["unhashUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redirectWhenMissing", function() { return _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_2__["redirectWhenMissing"]; });

/* harmony import */ var _src_plugins_kibana_legacy_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/plugins/kibana_legacy/public */ "plugin/kibanaLegacy/public");
/* harmony import */ var _src_plugins_kibana_legacy_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_kibana_legacy_public__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatMsg", function() { return _src_plugins_kibana_legacy_public__WEBPACK_IMPORTED_MODULE_4__["formatMsg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatStack", function() { return _src_plugins_kibana_legacy_public__WEBPACK_IMPORTED_MODULE_4__["formatStack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscribeWithScope", function() { return _src_plugins_kibana_legacy_public__WEBPACK_IMPORTED_MODULE_4__["subscribeWithScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexPatternsContract", function() { return _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3__["IndexPatternsContract"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IIndexPattern", function() { return _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3__["IIndexPattern"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexPattern", function() { return _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3__["IndexPattern"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indexPatterns", function() { return _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3__["indexPatterns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IFieldType", function() { return _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3__["IFieldType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ISearchSource", function() { return _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3__["ISearchSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EsQuerySortValue", function() { return _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3__["EsQuerySortValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortDirection", function() { return _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3__["SortDirection"]; });

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */




let angularModule = null;
let services = null;
let uiActions;
/**
 * set bootstrapped inner angular module
 */

function setAngularModule(module) {
  angularModule = module;
}
/**
 * get boostrapped inner angular module
 */

function getAngularModule() {
  if (!angularModule) {
    throw new Error('Discover angular module not yet available');
  }

  return angularModule;
}
function getServices() {
  if (!services) {
    throw new Error('Discover services are not yet available');
  }

  return services;
}
function setServices(newServices) {
  services = newServices;
}
const setUiActions = pluginUiActions => uiActions = pluginUiActions;
const getUiActions = () => uiActions;
const [getHeaderActionMenuMounter, setHeaderActionMenuMounter] = Object(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_2__["createGetterSetter"])('headerActionMenuMounter');
const [getUrlTracker, setUrlTracker] = Object(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_2__["createGetterSetter"])('urlTracker');
const [getDocViewsRegistry, setDocViewsRegistry] = Object(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_2__["createGetterSetter"])('DocViewsRegistry');
/**
 * Makes sure discover and context are using one instance of history.
 */

const getHistory = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.once(() => {
  const history = Object(history__WEBPACK_IMPORTED_MODULE_1__["createHashHistory"])();
  history.listen(() => {// keep at least one listener so that `history.location` always in sync
  });
  return history;
});
/**
 * Discover currently uses two `history` instances: one from Kibana Platform and
 * another from `history` package. Below function is used every time Discover
 * app is loaded to synchronize both instances.
 *
 * This helper is temporary until https://github.com/elastic/kibana/issues/65161 is resolved.
 */

const syncHistoryLocations = () => {
  const h = getHistory();
  Object.assign(h.location, Object(history__WEBPACK_IMPORTED_MODULE_1__["createHashHistory"])().location);
  return h;
};
const [getScopedHistory, setScopedHistory] = Object(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_2__["createGetterSetter"])('scopedHistory');
const {
  tabifyAggResponse
} = _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_3__["search"];

 // EXPORT types



/***/ }),

/***/ "./public/locator.ts":
/*!***************************!*\
  !*** ./public/locator.ts ***!
  \***************************/
/*! exports provided: DISCOVER_APP_LOCATOR, DiscoverAppLocatorDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISCOVER_APP_LOCATOR", function() { return DISCOVER_APP_LOCATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverAppLocatorDefinition", function() { return DiscoverAppLocatorDefinition; });
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/plugins/data/public */ "plugin/data/public");
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_data_public__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/plugins/kibana_utils/public */ "plugin/kibanaUtils/public");
/* harmony import */ var _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


const DISCOVER_APP_LOCATOR = 'DISCOVER_APP_LOCATOR';
class DiscoverAppLocatorDefinition {
  constructor(deps) {
    this.deps = deps;

    _defineProperty(this, "id", DISCOVER_APP_LOCATOR);

    _defineProperty(this, "getLocation", async params => {
      const {
        useHash = this.deps.useHash,
        filters,
        indexPatternId,
        query,
        refreshInterval,
        savedSearchId,
        timeRange,
        searchSessionId,
        columns,
        savedQuery,
        sort,
        interval
      } = params;
      const savedSearchPath = savedSearchId ? `view/${encodeURIComponent(savedSearchId)}` : '';
      const appState = {};
      const queryState = {};
      if (query) appState.query = query;
      if (filters && filters.length) appState.filters = filters === null || filters === void 0 ? void 0 : filters.filter(f => !_src_plugins_data_public__WEBPACK_IMPORTED_MODULE_0__["esFilters"].isFilterPinned(f));
      if (indexPatternId) appState.index = indexPatternId;
      if (columns) appState.columns = columns;
      if (savedQuery) appState.savedQuery = savedQuery;
      if (sort) appState.sort = sort;
      if (interval) appState.interval = interval;
      if (timeRange) queryState.time = timeRange;
      if (filters && filters.length) queryState.filters = filters === null || filters === void 0 ? void 0 : filters.filter(f => _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_0__["esFilters"].isFilterPinned(f));
      if (refreshInterval) queryState.refreshInterval = refreshInterval;
      let path = `#/${savedSearchPath}`;
      path = Object(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_1__["setStateToKbnUrl"])('_g', queryState, {
        useHash
      }, path);
      path = Object(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_1__["setStateToKbnUrl"])('_a', appState, {
        useHash
      }, path);

      if (searchSessionId) {
        path = `${path}&searchSessionId=${searchSessionId}`;
      }

      return {
        app: 'discover',
        path,
        state: {}
      };
    });
  }

}

/***/ }),

/***/ "./public/plugin.tsx":
/*!***************************!*\
  !*** ./public/plugin.tsx ***!
  \***************************/
/*! exports provided: DiscoverPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPlugin", function() { return DiscoverPlugin; });
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/plugins/data/public */ "plugin/data/public");
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_data_public__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/plugins/kibana_utils/public */ "plugin/kibanaUtils/public");
/* harmony import */ var _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_core_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/core/public */ "entry/core/public");
/* harmony import */ var _src_core_public__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_core_public__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _application_doc_views_doc_views_registry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./application/doc_views/doc_views_registry */ "./public/application/doc_views/doc_views_registry.ts");
/* harmony import */ var _application_components_table_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./application/components/table/table */ "./public/application/components/table/table.tsx");
/* harmony import */ var _kibana_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./kibana_services */ "./public/kibana_services.ts");
/* harmony import */ var _saved_searches__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./saved_searches */ "./public/saved_searches/index.ts");
/* harmony import */ var _register_feature__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register_feature */ "./public/register_feature.ts");
/* harmony import */ var _build_services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./build_services */ "./public/build_services.ts");
/* harmony import */ var _url_generator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./url_generator */ "./public/url_generator.ts");
/* harmony import */ var _locator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./locator */ "./public/locator.ts");
/* harmony import */ var _application_embeddable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./application/embeddable */ "./public/application/embeddable/index.ts");
/* harmony import */ var _application_components_source_viewer_source_viewer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./application/components/source_viewer/source_viewer */ "./public/application/components/source_viewer/source_viewer.tsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */



















const innerAngularName = 'app/discover';
const embeddableAngularName = 'app/discoverEmbeddable';
/**
 * Contains Discover, one of the oldest parts of Kibana
 * There are 2 kinds of Angular bootstrapped for rendering, additionally to the main Angular
 * Discover provides embeddables, those contain a slimmer Angular
 */

class DiscoverPlugin {
  constructor(initializerContext) {
    this.initializerContext = initializerContext;

    _defineProperty(this, "appStateUpdater", new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](() => ({})));

    _defineProperty(this, "docViewsRegistry", null);

    _defineProperty(this, "embeddableInjector", null);

    _defineProperty(this, "stopUrlTracking", undefined);

    _defineProperty(this, "servicesInitialized", false);

    _defineProperty(this, "innerAngularInitialized", false);

    _defineProperty(this, "urlGenerator", void 0);

    _defineProperty(this, "locator", void 0);

    _defineProperty(this, "initializeInnerAngular", void 0);

    _defineProperty(this, "initializeServices", void 0);

    _defineProperty(this, "getEmbeddableInjector", async () => {
      if (!this.embeddableInjector) {
        if (!this.initializeServices) {
          throw Error('Discover plugin getEmbeddableInjector:  initializeServices is undefined');
        }

        const {
          core,
          plugins
        } = await this.initializeServices();
        Object(_kibana_services__WEBPACK_IMPORTED_MODULE_10__["getServices"])().kibanaLegacy.loadFontAwesome();
        const {
          getInnerAngularModuleEmbeddable
        } = await Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! ./application/angular/get_inner_angular */ "./public/application/angular/get_inner_angular.ts"));
        getInnerAngularModuleEmbeddable(embeddableAngularName, core, plugins);
        const mountpoint = document.createElement('div');
        this.embeddableInjector = angular__WEBPACK_IMPORTED_MODULE_2___default.a.bootstrap(mountpoint, [embeddableAngularName]);
      }

      return this.embeddableInjector;
    });
  }

  setup(core, plugins) {
    const baseUrl = core.http.basePath.prepend('/app/discover');

    if (plugins.share) {
      this.urlGenerator = plugins.share.urlGenerators.registerUrlGenerator(new _url_generator__WEBPACK_IMPORTED_MODULE_14__["DiscoverUrlGenerator"]({
        appBasePath: baseUrl,
        useHash: core.uiSettings.get('state:storeInSessionStorage')
      }));
    }

    if (plugins.share) {
      this.locator = plugins.share.url.locators.create(new _locator__WEBPACK_IMPORTED_MODULE_15__["DiscoverAppLocatorDefinition"]({
        useHash: core.uiSettings.get('state:storeInSessionStorage')
      }));
    }

    this.docViewsRegistry = new _application_doc_views_doc_views_registry__WEBPACK_IMPORTED_MODULE_8__["DocViewsRegistry"]();
    Object(_kibana_services__WEBPACK_IMPORTED_MODULE_10__["setDocViewsRegistry"])(this.docViewsRegistry);
    this.docViewsRegistry.addDocView({
      title: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.docViews.table.tableTitle', {
        defaultMessage: 'Table'
      }),
      order: 10,
      component: _application_components_table_table__WEBPACK_IMPORTED_MODULE_9__["DocViewTable"]
    });
    this.docViewsRegistry.addDocView({
      title: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.docViews.json.jsonTitle', {
        defaultMessage: 'JSON'
      }),
      order: 20,
      component: ({
        hit,
        indexPattern
      }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_application_components_source_viewer_source_viewer__WEBPACK_IMPORTED_MODULE_17__["SourceViewer"], {
        index: hit._index,
        id: hit._id,
        indexPatternId: (indexPattern === null || indexPattern === void 0 ? void 0 : indexPattern.id) || '',
        hasLineNumbers: true
      })
    });
    const {
      appMounted,
      appUnMounted,
      stop: stopUrlTracker,
      setActiveUrl: setTrackedUrl,
      restorePreviousUrl
    } = Object(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_6__["createKbnUrlTracker"])({
      // we pass getter here instead of plain `history`,
      // so history is lazily created (when app is mounted)
      // this prevents redundant `#` when not in discover app
      getHistory: _kibana_services__WEBPACK_IMPORTED_MODULE_10__["getScopedHistory"],
      baseUrl,
      defaultSubUrl: '#/',
      storageKey: `lastUrl:${core.http.basePath.get()}:discover`,
      navLinkUpdater$: this.appStateUpdater,
      toastNotifications: core.notifications.toasts,
      stateParams: [{
        kbnUrlKey: '_g',
        stateUpdate$: plugins.data.query.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(({
          changes
        }) => !!(changes.globalFilters || changes.time || changes.refreshInterval)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(({
          state
        }) => {
          var _state$filters;

          return { ...state,
            filters: (_state$filters = state.filters) === null || _state$filters === void 0 ? void 0 : _state$filters.filter(_src_plugins_data_public__WEBPACK_IMPORTED_MODULE_5__["esFilters"].isFilterPinned)
          };
        }))
      }],
      onBeforeNavLinkSaved: newNavLink => {
        // Do not save SEARCH_SESSION_ID into nav link, because of possible edge cases
        // that could lead to session restoration failure.
        // see: https://github.com/elastic/kibana/issues/87149
        if (newNavLink.includes(_url_generator__WEBPACK_IMPORTED_MODULE_14__["SEARCH_SESSION_ID_QUERY_PARAM"])) {
          newNavLink = Object(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_6__["replaceUrlHashQuery"])(newNavLink, query => {
            delete query[_url_generator__WEBPACK_IMPORTED_MODULE_14__["SEARCH_SESSION_ID_QUERY_PARAM"]];
            return query;
          });
        }

        return newNavLink;
      }
    });
    Object(_kibana_services__WEBPACK_IMPORTED_MODULE_10__["setUrlTracker"])({
      setTrackedUrl,
      restorePreviousUrl
    });

    this.stopUrlTracking = () => {
      stopUrlTracker();
    };

    this.docViewsRegistry.setAngularInjectorGetter(this.getEmbeddableInjector);
    core.application.register({
      id: 'discover',
      title: 'Discover',
      updater$: this.appStateUpdater.asObservable(),
      order: 1000,
      euiIconType: 'logoKibana',
      defaultPath: '#/',
      category: _src_core_public__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_APP_CATEGORIES"].kibana,
      mount: async params => {
        if (!this.initializeServices) {
          throw Error('Discover plugin method initializeServices is undefined');
        }

        if (!this.initializeInnerAngular) {
          throw Error('Discover plugin method initializeInnerAngular is undefined');
        }

        Object(_kibana_services__WEBPACK_IMPORTED_MODULE_10__["setScopedHistory"])(params.history);
        Object(_kibana_services__WEBPACK_IMPORTED_MODULE_10__["setHeaderActionMenuMounter"])(params.setHeaderActionMenu);
        Object(_kibana_services__WEBPACK_IMPORTED_MODULE_10__["syncHistoryLocations"])();
        appMounted();
        const {
          plugins: {
            data: dataStart
          }
        } = await this.initializeServices();
        await this.initializeInnerAngular(); // make sure the index pattern list is up to date

        await dataStart.indexPatterns.clearCache();
        const {
          renderApp
        } = await __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ./application/application */ "./public/application/application.ts"));
        params.element.classList.add('dscAppWrapper');
        const unmount = await renderApp(innerAngularName, params.element);
        return () => {
          params.element.classList.remove('dscAppWrapper');
          unmount();
          appUnMounted();
        };
      }
    });
    plugins.urlForwarding.forwardApp('doc', 'discover', path => {
      return `#${path}`;
    });
    plugins.urlForwarding.forwardApp('context', 'discover', path => {
      const urlParts = path.split('/'); // take care of urls containing legacy url, those split in the following way
      // ["", "context", indexPatternId, _type, id + params]

      if (urlParts[4]) {
        // remove _type part
        const newPath = [...urlParts.slice(0, 3), ...urlParts.slice(4)].join('/');
        return `#${newPath}`;
      }

      return `#${path}`;
    });
    plugins.urlForwarding.forwardApp('discover', 'discover', path => {
      const [, id, tail] = /discover\/([^\?]+)(.*)/.exec(path) || [];

      if (!id) {
        return `#${path.replace('/discover', '') || '/'}`;
      }

      return `#/view/${id}${tail || ''}`;
    });

    if (plugins.home) {
      Object(_register_feature__WEBPACK_IMPORTED_MODULE_12__["registerFeature"])(plugins.home);
    }

    this.registerEmbeddable(core, plugins);
    return {
      docViews: {
        addDocView: this.docViewsRegistry.addDocView.bind(this.docViewsRegistry)
      },
      locator: this.locator
    };
  }

  start(core, plugins) {
    // we need to register the application service at setup, but to render it
    // there are some start dependencies necessary, for this reason
    // initializeInnerAngular + initializeServices are assigned at start and used
    // when the application/embeddable is mounted
    this.initializeInnerAngular = async () => {
      if (this.innerAngularInitialized) {
        return;
      } // this is used by application mount and tests


      const {
        getInnerAngularModule
      } = await Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! ./application/angular/get_inner_angular */ "./public/application/angular/get_inner_angular.ts"));
      const module = getInnerAngularModule(innerAngularName, core, plugins, this.initializerContext);
      Object(_kibana_services__WEBPACK_IMPORTED_MODULE_10__["setAngularModule"])(module);
      this.innerAngularInitialized = true;
    };

    Object(_kibana_services__WEBPACK_IMPORTED_MODULE_10__["setUiActions"])(plugins.uiActions);

    this.initializeServices = async () => {
      if (this.servicesInitialized) {
        return {
          core,
          plugins
        };
      }

      const services = await Object(_build_services__WEBPACK_IMPORTED_MODULE_13__["buildServices"])(core, plugins, this.initializerContext, this.getEmbeddableInjector);
      Object(_kibana_services__WEBPACK_IMPORTED_MODULE_10__["setServices"])(services);
      this.servicesInitialized = true;
      return {
        core,
        plugins
      };
    };

    return {
      urlGenerator: this.urlGenerator,
      locator: this.locator,
      savedSearchLoader: Object(_saved_searches__WEBPACK_IMPORTED_MODULE_11__["createSavedSearchesLoader"])({
        savedObjectsClient: core.savedObjects.client,
        savedObjects: plugins.savedObjects
      })
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


  registerEmbeddable(core, plugins) {
    if (!this.getEmbeddableInjector) {
      throw Error('Discover plugin method getEmbeddableInjector is undefined');
    }

    const getStartServices = async () => {
      const [coreStart, deps] = await core.getStartServices();
      return {
        executeTriggerActions: deps.uiActions.executeTriggerActions,
        isEditable: () => coreStart.application.capabilities.discover.save
      };
    };

    const factory = new _application_embeddable__WEBPACK_IMPORTED_MODULE_16__["SearchEmbeddableFactory"](getStartServices, this.getEmbeddableInjector);
    plugins.embeddable.registerEmbeddableFactory(factory.type, factory);
  }

}

/***/ }),

/***/ "./public/register_feature.ts":
/*!************************************!*\
  !*** ./public/register_feature.ts ***!
  \************************************/
/*! exports provided: registerFeature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerFeature", function() { return registerFeature; });
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");
/* harmony import */ var _kbn_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_plugins_home_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/plugins/home/public */ "plugin/home/public");
/* harmony import */ var _src_plugins_home_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_home_public__WEBPACK_IMPORTED_MODULE_1__);
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


function registerFeature(home) {
  home.featureCatalogue.register({
    id: 'discover',
    title: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.discoverTitle', {
      defaultMessage: 'Discover'
    }),
    subtitle: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.discoverSubtitle', {
      defaultMessage: 'Search and find insights.'
    }),
    description: _kbn_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.discoverDescription', {
      defaultMessage: 'Interactively explore your data by querying and filtering raw documents.'
    }),
    icon: 'discoverApp',
    path: '/app/discover#/',
    showOnHomePage: false,
    category: _src_plugins_home_public__WEBPACK_IMPORTED_MODULE_1__["FeatureCatalogueCategory"].DATA,
    solutionId: 'kibana',
    order: 200
  });
}

/***/ }),

/***/ "./public/saved_searches/_saved_search.ts":
/*!************************************************!*\
  !*** ./public/saved_searches/_saved_search.ts ***!
  \************************************************/
/*! exports provided: createSavedSearchClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSavedSearchClass", function() { return createSavedSearchClass; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
function createSavedSearchClass(savedObjects) {
  class SavedSearch extends savedObjects.SavedObjectClass {
    // Order these fields to the top, the rest are alphabetical
    constructor(id) {
      super({
        id,
        type: 'search',
        mapping: {
          title: 'text',
          description: 'text',
          hideChart: 'boolean',
          hits: 'integer',
          columns: 'keyword',
          grid: 'object',
          sort: 'keyword',
          version: 'integer'
        },
        searchSource: true,
        defaults: {
          title: '',
          description: '',
          columns: [],
          hits: 0,
          sort: [],
          version: 1
        }
      });

      _defineProperty(this, "id", void 0);

      _defineProperty(this, "showInRecentlyAccessed", void 0);

      this.showInRecentlyAccessed = true;
      this.id = id;

      this.getFullPath = () => `/app/discover#/view/${String(id)}`;
    }

  }

  _defineProperty(SavedSearch, "type", 'search');

  _defineProperty(SavedSearch, "mapping", {
    title: 'text',
    description: 'text',
    hideChart: 'boolean',
    hits: 'integer',
    columns: 'keyword',
    grid: 'object',
    sort: 'keyword',
    version: 'integer'
  });

  _defineProperty(SavedSearch, "fieldOrder", ['title', 'description']);

  _defineProperty(SavedSearch, "searchSource", true);

  return SavedSearch;
}

/***/ }),

/***/ "./public/saved_searches/index.ts":
/*!****************************************!*\
  !*** ./public/saved_searches/index.ts ***!
  \****************************************/
/*! exports provided: createSavedSearchesLoader, SavedSearch, SavedSearchLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _saved_searches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saved_searches */ "./public/saved_searches/saved_searches.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSavedSearchesLoader", function() { return _saved_searches__WEBPACK_IMPORTED_MODULE_0__["createSavedSearchesLoader"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./public/saved_searches/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedSearch", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["SavedSearch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedSearchLoader", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["SavedSearchLoader"]; });

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */



/***/ }),

/***/ "./public/saved_searches/saved_searches.ts":
/*!*************************************************!*\
  !*** ./public/saved_searches/saved_searches.ts ***!
  \*************************************************/
/*! exports provided: createSavedSearchesLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSavedSearchesLoader", function() { return createSavedSearchesLoader; });
/* harmony import */ var _src_plugins_saved_objects_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/plugins/saved_objects/public */ "plugin/savedObjects/public");
/* harmony import */ var _src_plugins_saved_objects_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_saved_objects_public__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _saved_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_saved_search */ "./public/saved_searches/_saved_search.ts");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


function createSavedSearchesLoader({
  savedObjectsClient,
  savedObjects
}) {
  const SavedSearchClass = Object(_saved_search__WEBPACK_IMPORTED_MODULE_1__["createSavedSearchClass"])(savedObjects);
  const savedSearchLoader = new _src_plugins_saved_objects_public__WEBPACK_IMPORTED_MODULE_0__["SavedObjectLoader"](SavedSearchClass, savedObjectsClient); // Customize loader properties since adding an 's' on type doesn't work for type 'search' .

  savedSearchLoader.loaderProperties = {
    name: 'searches',
    noun: 'Saved Search',
    nouns: 'saved searches'
  };

  savedSearchLoader.urlFor = id => id ? `#/view/${encodeURIComponent(id)}` : '#/';

  return savedSearchLoader;
}

/***/ }),

/***/ "./public/saved_searches/types.ts":
/*!****************************************!*\
  !*** ./public/saved_searches/types.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/shared/index.ts":
/*!********************************!*\
  !*** ./public/shared/index.ts ***!
  \********************************/
/*! exports provided: loadSharingDataHelpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSharingDataHelpers", function() { return loadSharingDataHelpers; });
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/*
 * Allows the getSharingData function to be lazy loadable
 */
async function loadSharingDataHelpers() {
  return await Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! ../application/apps/main/utils/get_sharing_data */ "./public/application/apps/main/utils/get_sharing_data.ts"));
}

/***/ }),

/***/ "./public/url_generator.ts":
/*!*********************************!*\
  !*** ./public/url_generator.ts ***!
  \*********************************/
/*! exports provided: DISCOVER_APP_URL_GENERATOR, SEARCH_SESSION_ID_QUERY_PARAM, DiscoverUrlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISCOVER_APP_URL_GENERATOR", function() { return DISCOVER_APP_URL_GENERATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_SESSION_ID_QUERY_PARAM", function() { return SEARCH_SESSION_ID_QUERY_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverUrlGenerator", function() { return DiscoverUrlGenerator; });
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/plugins/data/public */ "plugin/data/public");
/* harmony import */ var _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_data_public__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/plugins/kibana_utils/public */ "plugin/kibanaUtils/public");
/* harmony import */ var _src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */


const DISCOVER_APP_URL_GENERATOR = 'DISCOVER_APP_URL_GENERATOR';
const SEARCH_SESSION_ID_QUERY_PARAM = 'searchSessionId';
class DiscoverUrlGenerator {
  constructor(params) {
    this.params = params;

    _defineProperty(this, "id", DISCOVER_APP_URL_GENERATOR);

    _defineProperty(this, "createUrl", async ({
      useHash = this.params.useHash,
      filters,
      indexPatternId,
      query,
      refreshInterval,
      savedSearchId,
      timeRange,
      searchSessionId,
      columns,
      savedQuery,
      sort,
      interval
    }) => {
      const savedSearchPath = savedSearchId ? `view/${encodeURIComponent(savedSearchId)}` : '';
      const appState = {};
      const queryState = {};
      if (query) appState.query = query;
      if (filters && filters.length) appState.filters = filters === null || filters === void 0 ? void 0 : filters.filter(f => !_src_plugins_data_public__WEBPACK_IMPORTED_MODULE_0__["esFilters"].isFilterPinned(f));
      if (indexPatternId) appState.index = indexPatternId;
      if (columns) appState.columns = columns;
      if (savedQuery) appState.savedQuery = savedQuery;
      if (sort) appState.sort = sort;
      if (interval) appState.interval = interval;
      if (timeRange) queryState.time = timeRange;
      if (filters && filters.length) queryState.filters = filters === null || filters === void 0 ? void 0 : filters.filter(f => _src_plugins_data_public__WEBPACK_IMPORTED_MODULE_0__["esFilters"].isFilterPinned(f));
      if (refreshInterval) queryState.refreshInterval = refreshInterval;
      let url = `${this.params.appBasePath}#/${savedSearchPath}`;
      url = Object(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_1__["setStateToKbnUrl"])('_g', queryState, {
        useHash
      }, url);
      url = Object(_src_plugins_kibana_utils_public__WEBPACK_IMPORTED_MODULE_1__["setStateToKbnUrl"])('_a', appState, {
        useHash
      }, url);

      if (searchSessionId) {
        url = `${url}&${SEARCH_SESSION_ID_QUERY_PARAM}=${searchSessionId}`;
      }

      return url;
    });
  }

}

/***/ }),

/***/ "@elastic/charts":
/*!**************************************************!*\
  !*** external "__kbnSharedDeps__.ElasticCharts" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.ElasticCharts;

/***/ }),

/***/ "@elastic/eui":
/*!***********************************************!*\
  !*** external "__kbnSharedDeps__.ElasticEui" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.ElasticEui;

/***/ }),

/***/ "@elastic/eui/dist/eui_theme_dark.json":
/*!******************************************************!*\
  !*** external "__kbnSharedDeps__.Theme.euiDarkVars" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.Theme.euiDarkVars;

/***/ }),

/***/ "@elastic/eui/dist/eui_theme_light.json":
/*!*******************************************************!*\
  !*** external "__kbnSharedDeps__.Theme.euiLightVars" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.Theme.euiLightVars;

/***/ }),

/***/ "@kbn/analytics":
/*!*************************************************!*\
  !*** external "__kbnSharedDeps__.KbnAnalytics" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.KbnAnalytics;

/***/ }),

/***/ "@kbn/i18n":
/*!********************************************!*\
  !*** external "__kbnSharedDeps__.KbnI18n" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.KbnI18n;

/***/ }),

/***/ "@kbn/i18n/angular":
/*!***************************************************!*\
  !*** external "__kbnSharedDeps__.KbnI18nAngular" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.KbnI18nAngular;

/***/ }),

/***/ "@kbn/i18n/react":
/*!*************************************************!*\
  !*** external "__kbnSharedDeps__.KbnI18nReact" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.KbnI18nReact;

/***/ }),

/***/ "@kbn/monaco":
/*!**********************************************!*\
  !*** external "__kbnSharedDeps__.KbnMonaco" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.KbnMonaco;

/***/ }),

/***/ "angular":
/*!********************************************!*\
  !*** external "__kbnSharedDeps__.Angular" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.Angular;

/***/ }),

/***/ "entry/core/public":
/*!******************************************!*\
  !*** @kbn/bundleRef "entry/core/public" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __kbnBundles__.get('entry/core/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "jquery":
/*!*******************************************!*\
  !*** external "__kbnSharedDeps__.Jquery" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.Jquery;

/***/ }),

/***/ "lodash":
/*!*******************************************!*\
  !*** external "__kbnSharedDeps__.Lodash" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.Lodash;

/***/ }),

/***/ "lodash/fp":
/*!*********************************************!*\
  !*** external "__kbnSharedDeps__.LodashFp" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.LodashFp;

/***/ }),

/***/ "moment":
/*!*******************************************!*\
  !*** external "__kbnSharedDeps__.Moment" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.Moment;

/***/ }),

/***/ "moment-timezone":
/*!***************************************************!*\
  !*** external "__kbnSharedDeps__.MomentTimezone" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.MomentTimezone;

/***/ }),

/***/ "plugin/charts/public":
/*!*********************************************!*\
  !*** @kbn/bundleRef "plugin/charts/public" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __kbnBundles__.get('plugin/charts/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/data/common":
/*!*******************************************!*\
  !*** @kbn/bundleRef "plugin/data/common" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __kbnBundles__.get('plugin/data/common');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/data/public":
/*!*******************************************!*\
  !*** @kbn/bundleRef "plugin/data/public" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __kbnBundles__.get('plugin/data/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/embeddable/public":
/*!*************************************************!*\
  !*** @kbn/bundleRef "plugin/embeddable/public" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __kbnBundles__.get('plugin/embeddable/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/home/public":
/*!*******************************************!*\
  !*** @kbn/bundleRef "plugin/home/public" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __kbnBundles__.get('plugin/home/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/inspector/common":
/*!************************************************!*\
  !*** @kbn/bundleRef "plugin/inspector/common" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __kbnBundles__.get('plugin/inspector/common');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/inspector/public":
/*!************************************************!*\
  !*** @kbn/bundleRef "plugin/inspector/public" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __kbnBundles__.get('plugin/inspector/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/kibanaLegacy/public":
/*!***************************************************!*\
  !*** @kbn/bundleRef "plugin/kibanaLegacy/public" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __kbnBundles__.get('plugin/kibanaLegacy/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/kibanaReact/public":
/*!**************************************************!*\
  !*** @kbn/bundleRef "plugin/kibanaReact/public" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __kbnBundles__.get('plugin/kibanaReact/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/kibanaUtils/common":
/*!**************************************************!*\
  !*** @kbn/bundleRef "plugin/kibanaUtils/common" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __kbnBundles__.get('plugin/kibanaUtils/common');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/kibanaUtils/public":
/*!**************************************************!*\
  !*** @kbn/bundleRef "plugin/kibanaUtils/public" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __kbnBundles__.get('plugin/kibanaUtils/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/savedObjects/public":
/*!***************************************************!*\
  !*** @kbn/bundleRef "plugin/savedObjects/public" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __kbnBundles__.get('plugin/savedObjects/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/uiActions/public":
/*!************************************************!*\
  !*** @kbn/bundleRef "plugin/uiActions/public" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __kbnBundles__.get('plugin/uiActions/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "react":
/*!******************************************!*\
  !*** external "__kbnSharedDeps__.React" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.React;

/***/ }),

/***/ "react-dom":
/*!*********************************************!*\
  !*** external "__kbnSharedDeps__.ReactDom" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.ReactDom;

/***/ }),

/***/ "react-dom/server":
/*!***************************************************!*\
  !*** external "__kbnSharedDeps__.ReactDomServer" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.ReactDomServer;

/***/ }),

/***/ "rison-node":
/*!**********************************************!*\
  !*** external "__kbnSharedDeps__.RisonNode" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.RisonNode;

/***/ }),

/***/ "rxjs":
/*!*****************************************!*\
  !*** external "__kbnSharedDeps__.Rxjs" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.Rxjs;

/***/ }),

/***/ "rxjs/operators":
/*!**************************************************!*\
  !*** external "__kbnSharedDeps__.RxjsOperators" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.RxjsOperators;

/***/ }),

/***/ "tslib":
/*!******************************************!*\
  !*** external "__kbnSharedDeps__.TsLib" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.TsLib;

/***/ })

/******/ });
//# sourceMappingURL=discovernew.plugin.js.map