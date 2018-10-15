/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/entry.js":
/*!*************************!*\
  !*** ./src/js/entry.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _ua = __webpack_require__(/*! ./modules/ua.js */ \"./src/js/modules/ua.js\");\n\nvar _ua2 = _interopRequireDefault(_ua);\n\n__webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// JavaScriptモジュール\n$(document).ready(function () {\n\tvar ua = (0, _ua2.default)();\n\n\tif (!ua.Mobile) {\n\t\t$('a[href^=\"tel:\"]').addClass('reset-a-style').on('click', function (e) {\n\t\t\te.preventDefault();\n\t\t});\n\t}\n\n\tif ($(window).width() > 750) {\n\t\t$('meta[name=\"viewport\"]').attr('content', 'width=1360');\n\t}\n\n\t$('a:not(\".no-scroll\")').click(function (e) {\n\t\tvar href = $(this).attr('href');\n\t\tif (href.match(/^#/) && $(href).length > 0) {\n\t\t\te.preventDefault();\n\t\t\t$('html, body').animate({ scrollTop: $(href).offset().top }, 'fast');\n\t\t}\n\t});\n\n\t$('.button--toggle').click(function (e) {\n\t\te.preventDefault();\n\t\t$(\".button--toggle\").toggleClass(\"button--toggle--open\");\n\t\t$(\".nav-main\").fadeToggle(250);\n\t});\n});\n// SCSSソース　（SASSはJavaScriptで一度インポートする必要があります!）\n\n//# sourceURL=webpack:///./src/js/entry.js?");

/***/ }),

/***/ "./src/js/modules/ua.js":
/*!******************************!*\
  !*** ./src/js/modules/ua.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function () {\n  var u = window.navigator.userAgent.toLowerCase();\n  return {\n    Tablet: u.indexOf(\"windows\") != -1 && u.indexOf(\"touch\") != -1 || u.indexOf(\"ipad\") != -1 || u.indexOf(\"android\") != -1 && u.indexOf(\"mobile\") == -1 || u.indexOf(\"firefox\") != -1 && u.indexOf(\"tablet\") != -1 || u.indexOf(\"kindle\") != -1 || u.indexOf(\"silk\") != -1 || u.indexOf(\"playbook\") != -1,\n    Mobile: u.indexOf(\"windows\") != -1 && u.indexOf(\"phone\") != -1 || u.indexOf(\"iphone\") != -1 || u.indexOf(\"ipod\") != -1 || u.indexOf(\"android\") != -1 && u.indexOf(\"mobile\") != -1 || u.indexOf(\"firefox\") != -1 && u.indexOf(\"mobile\") != -1 || u.indexOf(\"blackberry\") != -1\n  };\n};\n\n//# sourceURL=webpack:///./src/js/modules/ua.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/sass/style.scss?");

/***/ })

/******/ });