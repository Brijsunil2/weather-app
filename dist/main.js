/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main.scss ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  font-family: \\\"Segoe UI\\\", Tahoma, Geneva, Verdana, sans-serif;\\n}\\n\\n.header-container {\\n  background-color: #323643;\\n  width: 100%;\\n  position: sticky;\\n  text-align: center;\\n  padding-top: 10px;\\n}\\n.header-container a {\\n  text-decoration: none;\\n  color: #fff;\\n  font-size: 26px;\\n  font-weight: bolder;\\n}\\n.header-container a:hover {\\n  color: #9ee0fc;\\n}\\n\\n.date-container {\\n  background-color: #606470;\\n  padding: 20px;\\n  text-align: center;\\n  color: #fff;\\n  margin-top: 10px;\\n}\\n\\nbody {\\n  background-color: #aae6ff;\\n  overflow: auto;\\n}\\n\\n.body-container {\\n  display: flex;\\n  margin: 0 16%;\\n  text-align: center;\\n  align-items: center;\\n  flex-direction: column;\\n  background-color: #aae6ff;\\n}\\n.body-container .header-two {\\n  padding: 5px 15px;\\n  margin-top: 20px;\\n  background-color: #f7f7f7;\\n}\\n\\n.border-a {\\n  border: solid #f7f7f7;\\n  border-radius: 8px;\\n}\\n\\n.weather-container {\\n  background-color: #aae6ff;\\n  padding: 20px;\\n  width: 250px;\\n  overflow: auto;\\n}\\n.weather-container input[type=text] {\\n  height: 20px;\\n  background-color: #f7f7f7;\\n}\\n.weather-container input[type=text]:invalid {\\n  outline: 2px solid red;\\n}\\n.weather-container input[type=button] {\\n  padding: 3px 5px;\\n}\\n.weather-container > .condition-label {\\n  padding-bottom: 6px;\\n}\\n.weather-container:hover {\\n  background-color: #9ee0fc;\\n}\\n\\n.forecast-container {\\n  background-color: #aae6ff;\\n  padding: 20px;\\n  margin-bottom: 20px;\\n}\\n.forecast-container:hover {\\n  background-color: #9ee0fc;\\n}\\n\\nfooter {\\n  width: 100%;\\n  clear: both;\\n  position: relative;\\n  bottom: 0;\\n  background-color: #323643;\\n  text-align: center;\\n  color: #fff;\\n  padding: 10px 0;\\n  margin-top: 100px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/css/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/css/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_apicalls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/apicalls.js */ \"./src/js/apicalls.js\");\n/* harmony import */ var _js_location_finder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/location-finder.js */ \"./src/js/location-finder.js\");\n/* harmony import */ var _js_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/dom-manipulation.js */ \"./src/js/dom-manipulation.js\");\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/main.scss */ \"./src/css/main.scss\");\n\r\n\r\n\r\n\r\n\r\nasync function run() {\r\n  setInterval(_js_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_2__.updateDate, 1000);\r\n\r\n  const coords = await _js_location_finder_js__WEBPACK_IMPORTED_MODULE_1__.getLocationLatLng();\r\n  const data = await getDataByCoords(coords.latitude, coords.longitude);\r\n\r\n  console.log(data);\r\n  _js_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_2__.updateWeather(data);\r\n}\r\n\r\nasync function getDataByCoords(latitude, longitude) {\r\n  const weatherData = await _js_apicalls_js__WEBPACK_IMPORTED_MODULE_0__.getCurrWeatherByCoords(latitude, longitude);\r\n  if (weatherData.cod != 200) {\r\n    invalidLocationError();\r\n    return {\r\n      location: null,\r\n      weatherData: null,\r\n      forecastData: null\r\n    };\r\n  }\r\n\r\n  const location = `${weatherData.name},${weatherData.sys.country}`;\r\n\r\n  const forecastData = await _js_apicalls_js__WEBPACK_IMPORTED_MODULE_0__.getCurrForecastByCoords(latitude, longitude);\r\n\r\n  const data = {\r\n    location: location,\r\n    weatherData: weatherData,\r\n    forecastData: forecastData\r\n  };\r\n\r\n  return data;\r\n}\r\n\r\n async function getDataByLocation(location) {\r\n  const weatherData = await _js_apicalls_js__WEBPACK_IMPORTED_MODULE_0__.getCurrWeather(location);\r\n  if (weatherData.cod != 200) {\r\n    invalidLocationError();\r\n    return {\r\n      location: null,\r\n      weatherData: null,\r\n      forecastData: null\r\n    };\r\n  }\r\n\r\n  location = `${weatherData.name},${weatherData.sys.country}`;\r\n\r\n  const forecastData = await _js_apicalls_js__WEBPACK_IMPORTED_MODULE_0__.getCurrForecast(location);\r\n\r\n  const data = {\r\n    location: location,\r\n    weatherData: weatherData,\r\n    forecastData: forecastData\r\n  };\r\n  return data;\r\n }\r\n\r\nasync function onLocationClick() {\r\n  const location = document.querySelector('#location-input').value;\r\n\r\n  if (location.length > 0) {\r\n    const data = await getDataByLocation(location);\r\n    \r\n    if (data.location != null) {\r\n      _js_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_2__.updateWeather(data);\r\n    }\r\n  \r\n  } else {\r\n    invalidLocationError();\r\n  } \r\n}\r\n\r\nfunction invalidLocationError() {\r\n  alert(\"Error: Location not found.\");\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  const locationBtn = document.querySelector('.enter-btn');\r\n  document.querySelector('.enter-btn').addEventListener('click', onLocationClick);\r\n});\r\n\r\nrun();\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/js/apicalls.js":
/*!****************************!*\
  !*** ./src/js/apicalls.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCurrForecast\": () => (/* binding */ getCurrForecast),\n/* harmony export */   \"getCurrForecastByCoords\": () => (/* binding */ getCurrForecastByCoords),\n/* harmony export */   \"getCurrWeather\": () => (/* binding */ getCurrWeather),\n/* harmony export */   \"getCurrWeatherByCoords\": () => (/* binding */ getCurrWeatherByCoords)\n/* harmony export */ });\nconst key = '37faff95420ed4780f103a874897a346';\r\n\r\nfunction getAPIWeatherURL(location) {\r\n  return `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${key}`;\r\n}\r\n\r\nfunction getAPIForecastURL(location) {\r\n  return `https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${key}`;\r\n}\r\n\r\nfunction getAPIWeatherURLByCoords(latitude, longitude) {\r\n  return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;\r\n}\r\n\r\nfunction getAPIForecastURLByCoords(latitude, longitude) {\r\n  return `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}`;\r\n}\r\n\r\nasync function getCurrWeather(location) {\r\n  const url = getAPIWeatherURL(location);\r\n  var currWeatherData = {};\r\n\r\n  try {\r\n    const response = await fetch(url);\r\n    currWeatherData = await response.json();\r\n  } catch(err) {\r\n    console.log('Error: Unable to fetch weather data - ', err);\r\n  }\r\n\r\n  // console.log(currWeatherData);\r\n  return currWeatherData;\r\n}\r\n\r\nasync function getCurrWeatherByCoords(latitude, longitude) {\r\n  const url = getAPIWeatherURLByCoords(latitude, longitude);\r\n  var currWeatherData = {};\r\n\r\n  try {\r\n    const response = await fetch(url);\r\n    currWeatherData = await response.json();\r\n  } catch(err) {\r\n    console.log('Error: Unable to fetch weather data - ', err);\r\n  }\r\n\r\n  // console.log(currWeatherData);\r\n  return currWeatherData;\r\n}\r\n\r\nasync function getCurrForecast(location) {\r\n  const url = getAPIForecastURL(location);\r\n  var currForecastData = {};\r\n\r\n  try {\r\n    const response = await fetch(url);\r\n    currForecastData = await response.json();\r\n  } catch(err) {\r\n    console.log('Error: Unable to fetch forecast data - ', err);\r\n  }\r\n\r\n  // console.log(currForecastData);\r\n  return currForecastData;\r\n}\r\n\r\nasync function getCurrForecastByCoords(latitude, longitude) {\r\n  const url = getAPIForecastURLByCoords(latitude, longitude);\r\n  var currForecastData = {};\r\n\r\n  try {\r\n    const response = await fetch(url);\r\n    currForecastData = await response.json();\r\n  } catch(err) {\r\n    console.log('Error: Unable to fetch forecast data - ', err);\r\n  }\r\n\r\n  // console.log(currForecastData);\r\n  return currForecastData;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/js/apicalls.js?");

/***/ }),

/***/ "./src/js/dom-manipulation.js":
/*!************************************!*\
  !*** ./src/js/dom-manipulation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateDate\": () => (/* binding */ updateDate),\n/* harmony export */   \"updateWeather\": () => (/* binding */ updateWeather)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/js/utils.js\");\n \r\n\r\nconst days = [\r\n  'Sunday',\r\n  'Monday',\r\n  'Tuesday',\r\n  'Wednesday',\r\n  'Thursday',\r\n  'Friday',\r\n  'Saturday'\r\n];\r\n\r\nconst months = [\r\n  'January',\r\n  'February',\r\n  'March',\r\n  'April',\r\n  'May',\r\n  'June',\r\n  'July',\r\n  'August',\r\n  'September',\r\n  'October',\r\n  'November', \r\n  'December'\r\n];\r\n\r\nfunction updateDate() {\r\n  const currDate = new Date();\r\n  const day = days[currDate.getDay()];\r\n  const month = months[currDate.getMonth()];\r\n  const date = `${day}., ${month} ${currDate.getDate()}, ${currDate.getFullYear()}`;\r\n\r\n  var hour = currDate.getHours();\r\n  var temp = 'PM';\r\n  if (hour >= 13) {\r\n    hour = hour - 12;\r\n  } else if (hour < 12) {\r\n    temp = 'AM';\r\n  }\r\n\r\n  var mins = currDate.getMinutes();\r\n  if (mins < 10) {\r\n    mins = `0${mins}`; \r\n  }\r\n\r\n  const time = `${hour}:${mins} ${temp}`;\r\n\r\n  document.querySelector('.date-label').textContent = date;\r\n  document.querySelector('.time-label').textContent = time;\r\n}\r\n\r\nfunction buildWeatherIconURL(code) {\r\n  return `http://openweathermap.org/img/wn/${code}@2x.png`;\r\n}\r\n\r\nfunction updateWeather(data) {\r\n  document.querySelector('.location-label').textContent = data.location;\r\n  document.querySelector('.temperature-label').textContent = Math.round(_utils_js__WEBPACK_IMPORTED_MODULE_0__.kelvinToCelsius(data.weatherData.main.temp)) + '\\u00B0C';\r\n  document.querySelector('.weather-container img').src = buildWeatherIconURL(data.weatherData.weather[0].icon);\r\n  document.querySelector('.condition-label').textContent = data.weatherData.weather[0].description;\r\n\r\n  const forecastList = data.forecastData.list;\r\n\r\n  var colCounter = 1;\r\n  forecastList.forEach((forecast, i) => {\r\n    if (forecast.dt_txt.split(\" \")[1] == \"15:00:00\") {\r\n      const colQuery = `.forecast-row .col-${colCounter}`;\r\n      const currQuery = document.querySelector(colQuery);\r\n      currQuery.textContent = \"\";\r\n      \r\n      var newDiv = document.createElement('div');\r\n      var dateEle = document.createElement('h3');\r\n      var tempEle = document.createElement('h4');\r\n      var imgEle = document.createElement('img');\r\n      var descEle = document.createElement('h6');\r\n\r\n      const date = new Date(forecast.dt_txt);\r\n      dateEle.textContent = days[date.getDay()];\r\n      tempEle.textContent = Math.round(_utils_js__WEBPACK_IMPORTED_MODULE_0__.kelvinToCelsius(forecast.main.temp)) + '\\u00B0C';\r\n      imgEle.src = buildWeatherIconURL(forecast.weather[0].icon);\r\n      imgEle.alt = forecast.weather[0].description + ' image';\r\n      descEle.textContent = forecast.weather[0].description;\r\n\r\n      newDiv.appendChild(dateEle);\r\n      newDiv.appendChild(tempEle);\r\n      newDiv.appendChild(imgEle);\r\n      newDiv.appendChild(descEle);\r\n      currQuery.appendChild(newDiv);\r\n\r\n      colCounter = colCounter + 1;\r\n    }\r\n  });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/js/dom-manipulation.js?");

/***/ }),

/***/ "./src/js/location-finder.js":
/*!***********************************!*\
  !*** ./src/js/location-finder.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLocationLatLng\": () => (/* binding */ getLocationLatLng)\n/* harmony export */ });\nfunction getLocationLatLngPromise() {\r\n  if (navigator.geolocation) {\r\n    return new Promise((resolve, _) => {\r\n      navigator.geolocation.getCurrentPosition(resolve, handleError);\r\n    }); \r\n\r\n  } else {\r\n    console.error(\"Geolocation is not supported by this browser.\");\r\n  }\r\n}\r\n\r\nasync function getLocationLatLng() {\r\n  var position = await getLocationLatLngPromise();\r\n  return {latitude: position.coords.latitude, longitude: position.coords.longitude};\r\n}\r\n\r\nfunction handleError(error) {\r\n  let errorStr;\r\n  switch (error.code) {\r\n    case error.PERMISSION_DENIED:\r\n      errorStr = 'User denied the request for Geolocation.';\r\n      break;\r\n    case error.POSITION_UNAVAILABLE:\r\n      errorStr = 'Location information is unavailable.';\r\n      break;\r\n    case error.TIMEOUT:\r\n      errorStr = 'The request to get user location timed out.';\r\n      break;\r\n    default:\r\n      errorStr = 'An unknown error occurred.';\r\n  }\r\n  console.error('Error: ' + errorStr);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/js/location-finder.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"kelvinToCelsius\": () => (/* binding */ kelvinToCelsius),\n/* harmony export */   \"kelvinToFahrenheit\": () => (/* binding */ kelvinToFahrenheit)\n/* harmony export */ });\nfunction kelvinToCelsius(tempK) {\r\n  return tempK - 273.15;\r\n}\r\n\r\nfunction kelvinToFahrenheit(tempK) {\r\n  return 1.8 * (tempK - 273) + 32;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/js/utils.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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