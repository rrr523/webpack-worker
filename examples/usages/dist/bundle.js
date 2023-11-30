/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var worker_nest_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! worker-nest-worker */ \"../../packages/worker-nest-worker/dist/bundle.js\");\n/* harmony import */ var worker_nest_worker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(worker_nest_worker__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\n//# sourceURL=webpack://usages/./src/index.js?");

/***/ }),

/***/ "../../packages/worker-nest-worker/dist/bundle.js":
/*!********************************************************!*\
  !*** ../../packages/worker-nest-worker/dist/bundle.js ***!
  \********************************************************/
/***/ (() => {

eval("/*\n * ATTENTION: The \"eval\" devtool has been used (maybe by default in mode: \"development\").\n * This devtool is neither made for production nor for readable output files.\n * It uses \"eval()\" calls to create a separate source file in the browser devtools.\n * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)\n * or disable the default devtool with \"devtool: false\".\n * If you are looking for production-ready output files, see mode: \"production\" (https://webpack.js.org/configuration/mode/).\n */\n/******/ (() => { // webpackBootstrap\n/******/ \tvar __webpack_modules__ = ({\n\n/***/ \"./src/index.js\":\n/*!**********************!*\\\n  !*** ./src/index.js ***!\n  \\**********************/\n/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {\n\neval(\"// process\\n\\nnew Worker(\\n  new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(\\\"src_webworker_js\\\"), __webpack_require__.b)\\n)\\n\\n//# sourceURL=webpack://xxx/./src/index.js?\");\n\n/***/ })\n\n/******/ \t});\n/************************************************************************/\n/******/ \t// The require scope\n/******/ \tvar __nested_webpack_require_1187__ = {};\n/******/ \t\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__nested_webpack_require_1187__.m = __webpack_modules__;\n/******/ \t\n/************************************************************************/\n/******/ \t/* webpack/runtime/get javascript chunk filename */\n/******/ \t(() => {\n/******/ \t\t// This function allow to reference async chunks\n/******/ \t\t__nested_webpack_require_1187__.u = (chunkId) => {\n/******/ \t\t\t// return url for filenames based on template\n/******/ \t\t\treturn \"\" + chunkId + \".bundle.js\";\n/******/ \t\t};\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/global */\n/******/ \t(() => {\n/******/ \t\t__nested_webpack_require_1187__.g = (function() {\n/******/ \t\t\tif (typeof globalThis === 'object') return globalThis;\n/******/ \t\t\ttry {\n/******/ \t\t\t\treturn this || new Function('return this')();\n/******/ \t\t\t} catch (e) {\n/******/ \t\t\t\tif (typeof window === 'object') return window;\n/******/ \t\t\t}\n/******/ \t\t})();\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/hasOwnProperty shorthand */\n/******/ \t(() => {\n/******/ \t\t__nested_webpack_require_1187__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/publicPath */\n/******/ \t(() => {\n/******/ \t\tvar scriptUrl;\n/******/ \t\tif (__nested_webpack_require_1187__.g.importScripts) scriptUrl = __nested_webpack_require_1187__.g.location + \"\";\n/******/ \t\tvar document = __nested_webpack_require_1187__.g.document;\n/******/ \t\tif (!scriptUrl && document) {\n/******/ \t\t\tif (document.currentScript)\n/******/ \t\t\t\tscriptUrl = document.currentScript.src;\n/******/ \t\t\tif (!scriptUrl) {\n/******/ \t\t\t\tvar scripts = document.getElementsByTagName(\"script\");\n/******/ \t\t\t\tif(scripts.length) {\n/******/ \t\t\t\t\tvar i = scripts.length - 1;\n/******/ \t\t\t\t\twhile (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;\n/******/ \t\t\t\t}\n/******/ \t\t\t}\n/******/ \t\t}\n/******/ \t\t// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration\n/******/ \t\t// or pass an empty string (\"\") and set the __webpack_public_path__ variable from your code to use your own logic.\n/******/ \t\tif (!scriptUrl) throw new Error(\"Automatic publicPath is not supported in this browser\");\n/******/ \t\tscriptUrl = scriptUrl.replace(/#.*$/, \"\").replace(/\\?.*$/, \"\").replace(/\\/[^\\/]+$/, \"/\");\n/******/ \t\t__nested_webpack_require_1187__.p = scriptUrl;\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/jsonp chunk loading */\n/******/ \t(() => {\n/******/ \t\t__nested_webpack_require_1187__.b = document.baseURI || self.location.href;\n/******/ \t\t\n/******/ \t\t// object to store loaded and loading chunks\n/******/ \t\t// undefined = chunk not loaded, null = chunk preloaded/prefetched\n/******/ \t\t// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded\n/******/ \t\tvar installedChunks = {\n/******/ \t\t\t\"main\": 0\n/******/ \t\t};\n/******/ \t\t\n/******/ \t\t// no chunk on demand loading\n/******/ \t\t\n/******/ \t\t// no prefetching\n/******/ \t\t\n/******/ \t\t// no preloaded\n/******/ \t\t\n/******/ \t\t// no HMR\n/******/ \t\t\n/******/ \t\t// no HMR manifest\n/******/ \t\t\n/******/ \t\t// no on chunks loaded\n/******/ \t\t\n/******/ \t\t// no jsonp function\n/******/ \t})();\n/******/ \t\n/************************************************************************/\n/******/ \t\n/******/ \t// startup\n/******/ \t// Load entry module and return exports\n/******/ \t// This entry module can't be inlined because the eval devtool is used.\n/******/ \tvar __nested_webpack_exports__ = {};\n/******/ \t__webpack_modules__[\"./src/index.js\"](0, __nested_webpack_exports__, __nested_webpack_require_1187__);\n/******/ \t\n/******/ })()\n;\n\n//# sourceURL=webpack://usages/../../packages/worker-nest-worker/dist/bundle.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;