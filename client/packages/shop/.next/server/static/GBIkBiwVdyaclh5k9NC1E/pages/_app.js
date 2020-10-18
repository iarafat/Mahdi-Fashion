module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		5: 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + "." + {"31":"b21478b66438e4d4e97f","34":"ca3f238cc87b8eb74135"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/JeY":
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hUgY");


/***/ }),

/***/ "17+d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacialCare; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const FacialCare = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("path", {
    d: "M14.651 1.933a3.534 3.534 0 00-3.5 6.1h.1a1.285 1.285 0 011.033.527 3.549 3.549 0 002.37-.206 3.213 3.213 0 110-6.425z",
    fill: color
  }), __jsx("path", {
    "data-name": "Shape",
    d: "M12.86 0a5.147 5.147 0 00-4.247 8.037h1.555a4.176 4.176 0 014.755-6.693.643.643 0 01-.244 1.226 2.57 2.57 0 000 5.14.643.643 0 01.248 1.23 4.207 4.207 0 01-2.261.349c-.173-.021-.125-.045-.125.032v.958A5.143 5.143 0 0012.862 0zM1.284 16.715h4.5a.322.322 0 110 .643H1.915a2.362 2.362 0 001.606.643h6.457a2.19 2.19 0 001.113-.292 5.568 5.568 0 002.365-4.533H.046a6.639 6.639 0 001.238 3.534zm5.792 0a.321.321 0 11-.321.321.321.321 0 01.321-.321zM12.77 11.253H.731a.743.743 0 00-.731.75c0 .176 0 .3.007.535h13.486c.007-.244.007-.373.007-.535a.743.743 0 00-.73-.75z",
    fill: color
  }), __jsx("path", {
    "data-name": "Shape",
    d: "M1.607 9.322v1.285h10.288V9.322a.643.643 0 00-.642-.642h-9a.643.643 0 00-.646.642z",
    fill: color
  }));
};

/***/ }),

/***/ "2MIm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("Y3ZS");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("7xIC");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "2p10":
/***/ (function(module, exports) {



/***/ }),

/***/ "40cp":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDkuMTI0IiBoZWlnaHQ9IjE4Ij48ZyBkYXRhLW5hbWU9Ikdyb3VwIDI4MjkiPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNjkwIiBkPSJNMCAuNjUybDIuMDcyLjAyNkMzLjgxNC42OTkgNS41NjMuNjI3IDcuMjk2Ljc2M2E1LjIgNS4yIDAgMDE0LjggNC4xNjEgNS4yMjIgNS4yMjIgMCAwMS00LjQyMyA2LjQ4NCAyMS42NjIgMjEuNjYyIDAgMDEtMy40MjIuMTE3Yy0uMzkzIDAtLjQ4Ni4xMjQtLjQ4Mi41LjAxOSAxLjcuMDA4IDMuNDA2LjAwOCA1LjEwOXYuNTM0SDB6bTMuODMyIDcuNjY5Yy40NyAwIC45LjAxNyAxLjMxOCAwYTEwLjQ0OSAxMC40NDkgMCAwMDEuNzgxLS4xNTMgMS45NDQgMS45NDQgMCAwMDEuNTI3LTEuOTUgMS45NzQgMS45NzQgMCAwMC0xLjI5My0yLjA0IDEwLjc0OCAxMC43NDggMCAwMC0zLjMzMi0uMjI5eiIgZmlsbD0iIzBkMTEzNiIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNjkxIiBkPSJNMTA5LjEyNCA5LjM2YTQuMjY5IDQuMjY5IDAgMDAtMi4wMTMtLjAxOSAyLjUyMSAyLjUyMSAwIDAwLTEuOSAyLjQzMWMtLjA2OSAxLjc0MS0uMDQ3IDMuNDg1LS4wNjMgNS4yMjd2LjYyN2gtMy41ODFWNS44MDRoMy40NjZ2MS40MjVhMy4yNjYgMy4yNjYgMCAwMTIuMzQ5LTEuNDc3IDEwLjk0NiAxMC45NDYgMCAwMTEuNzQuMDEzeiIgZmlsbD0iIzAwOGQ3MSIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNjkyIiBkPSJNNDguODIzLjY3OGguNTE2YzIuMjM2LjAyIDQuNDc4LS4wNjQgNi43LjA4OWE0LjQxMiA0LjQxMiAwIDAxNC4yODMgMy41ODUgMy44NzYgMy44NzYgMCAwMS0yLjE4MiA0LjQyNS40LjQgMCAwMC0uMDg5LjA2IDExLjAyOCAxMS4wMjggMCAwMTEuNTE1LjkyOSA0LjMzOSA0LjMzOSAwIDAxLjc2NCA1LjQzMSA0Ljc2MSA0Ljc2MSAwIDAxLTQuMTk1IDIuNDI1Yy0yLjM5My4wODQtNC43OTEuMDI3LTcuMTg3LjAzYS41NDYuNTQ2IDAgMDEtLjEzLS4wMzh6bTMuNjYzIDEzLjloMi4xYTcuMDgzIDcuMDgzIDAgMDAuOC0uMDMzIDEuOTMyIDEuOTMyIDAgMDAxLjgxLTEuOCAxLjgxNiAxLjgxNiAwIDAwLTEuNDA2LTJjLTEuMDc4LS4xNjQtMi4xODQtLjE1NS0zLjMwNS0uMjIyem0wLTcuMWMuNzU5IDAgMS40ODguMDE5IDIuMjE2LS4wMDlhMy4xMTkgMy4xMTkgMCAwMC45My0uMTkzIDEuNjUgMS42NSAwIDAwMS4wOTItMS42ODUgMS41NjcgMS41NjcgMCAwMC0xLjIxLTEuNjM0Yy0uOTg3LS4xNi0yLS4xNTktMy4wMjgtLjIyOXoiIGZpbGw9IiMwMDhkNzEiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggMjY5MyIgZD0iTTM4LjQ1OCA5LjY4NmMuODQ4LS45MzUgMS43NjEtMS44MiAyLjUyNS0yLjgxOWEyLjU0OCAyLjU0OCAwIDAxMi41LTEuMTE0YzEuMDI1LjEgMi4wNjYuMDIxIDMuMjA4LjAyMWwtNC42MzQgNC45ODIgNC43MzQgNi45Yy0xLjMgMC0yLjUxOS0uMDMtMy43MzcuMDE0YTEuMDY5IDEuMDY5IDAgMDEtMS4wOC0uNTc3Yy0uNzY0LTEuMjE0LTEuNTgzLTIuMzkzLTIuNDE2LTMuNjM5LS40LjQzNi0uNzgxLjgzNi0xLjEzOCAxLjI1OC0uMDcxLjA4NC0uMDU4LjI1Mi0uMDU5LjM4MnYyLjUzNmgtMy41NjdWLjM1OGgzLjU1NHY5LjN6IiBmaWxsPSIjMGQxMTM2Ii8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDI2OTQiIGQ9Ik03My40OTMgMTcuNjQ0aC0zLjE5NWwtLjEyNi0xLjE3NGExMi40MyAxMi40MyAwIDAxLTEuMTg1Ljk2OGMtMS40MS45LTQuNDU5Ljg3My01Ljc1Ny0xLjIzNWEzLjQ0NSAzLjQ0NSAwIDAxMi4zMjktNS4yMjhjMS4wNjktLjI1OCAyLjE3MS0uMzg0IDMuMjU3LS41Ny4wOTItLjAxNi4xODMtLjAzMy4yNzUtLjA0N2EuODA5LjgwOSAwIDAwLjc3MS0uNTg3IDEuMDE4IDEuMDE4IDAgMDAtLjI5NS0xLjAyMyAyLjA3MyAyLjA3MyAwIDAwLTIuMDg1LS40MjggMS44MTEgMS44MTEgMCAwMC0xLjMzOCAxLjM0NWMtLjAxNi4wNS0uMDEzLjEwNi0uMDI2LjE1N2ExLjE0MiAxLjE0MiAwIDAxLS4wNjMuMTQzbC0xLjU0Ny0uM2MtLjUxNy0uMS0xLjAxMS0uMjA5LTEuNTQ2LS4zMjFhMy42OSAzLjY5IDAgMDEuODU5LTIuMDc1IDQuNzg5IDQuNzg5IDAgMDEyLjgyMy0xLjY3OCA3LjIzIDcuMjMgMCAwMTQuMTIyLjI2NCAzLjkgMy45IDAgMDEyLjYyOSAzLjc4MWMuMDU5IDEuNjQ4LjAxIDMuMy4wMjQgNC45NS4wMSAxLjAwNy4wNDggMi4wMTYuMDc0IDMuMDU4em0tMy42MS01LjE3NmMtLjQyMy4wNjMtLjgyLjEtMS4yMDcuMTg1YTE0LjY4OCAxNC42ODggMCAwMC0xLjgzNy40NjhjLS40NDkuMTYxLS41NTcuNi0uNTQ4IDEuMDU5YTEuMTMxIDEuMTMxIDAgMDAuNTg1IDEuMDIxIDIuMjM1IDIuMjM1IDAgMDAyLjY1OC0uNzE5IDMuMTc4IDMuMTc4IDAgMDAuMzQ5LTIuMDEzeiIgZmlsbD0iIzAwOGQ3MSIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNjk1IiBkPSJNOTguNTA5IDE3LjYzOWgtMy4ybC0uMTI1LTEuMjI4YS44NjIuODYyIDAgMDAtLjE1NC4xMjljLTEuMzQ1IDEuOTM0LTQuOTE4IDEuODY5LTYuNDE3LjE1OGEzLjQyMyAzLjQyMyAwIDAxMS40NTctNS41NTQgMjkuNzI0IDI5LjcyNCAwIDAxMy4yMzYtLjY1NmMuMjc0LS4wNTMuNTUzLS4wODEuODI2LS4xMzhhLjg4OC44ODggMCAwMC40OS0xLjU2MyAyLjAyNiAyLjAyNiAwIDAwLTIuMDMxLS40ODYgMS44IDEuOCAwIDAwLTEuNDExIDEuMzE2Yy0uMDM0LjEtLjA1LjItLjA4Ni4zNTlsLTMuMTIzLS42MjlhMy45MzEgMy45MzEgMCAwMTEuOTU0LTMuMDM1IDYuNTI3IDYuNTI3IDAgMDE2LjM0My0uMjI0QTMuNjc1IDMuNjc1IDAgMDE5OC40IDkuNDk3Yy4wNjQgMS41ODEuMDIxIDMuMTY3LjAzNyA0Ljc1MS4wMTYgMS4xMTIuMDQ4IDIuMjMuMDcyIDMuMzkxem0tMy41NDUtNS4xODJjLS44LjEyNS0xLjUuMjEzLTIuMTg3LjM0OWEzLjU2MSAzLjU2MSAwIDAwLS45NjYuMzQgMS4wNDcgMS4wNDcgMCAwMC0uNSAxLjA5MiAxLjExNCAxLjExNCAwIDAwLjYzNS45OSAyLjEgMi4xIDAgMDAyLjg1My0xLjMgMTAuNzgyIDEwLjc4MiAwIDAwLjE2NS0xLjQ2OHoiIGZpbGw9IiMwMDhkNzEiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggMjY5NiIgZD0iTTMyLjM2NyA5LjU0NGwtMy4wNTguOTE4YTcuMDIzIDcuMDIzIDAgMDAtMS4wMDctMS4yMjcgMi42NTMgMi42NTMgMCAwMC00LjE0NyAxLjU3OCA0LjY0OSA0LjY0OSAwIDAwLS4wMDYgMS43NzMgMi41NjEgMi41NjEgMCAwMDIuMjIyIDIuMDUyIDIuNSAyLjUgMCAwMDIuODMtMS40NDRjLjA1My0uMS4yNDMtLjIyNi4zMy0uMi45NjkuMjc2IDEuOTMxLjU3OSAyLjk1Ni44OTRhNy43NzMgNy43NzMgMCAwMS0uMjguNzkyQTUuNTc2IDUuNTc2IDAgMDEyNi45NTQgMThhNi4yODcgNi4yODcgMCAxMS0uMTYzLTEyLjU2OSA1Ljc1MyA1Ljc1MyAwIDAxNC42MzggMi4wODUgNC42MjUgNC42MjUgMCAwMS45MzggMi4wMjh6IiBmaWxsPSIjMGQxMTM2Ii8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDI2OTciIGQ9Ik03NS45NDcgNS43OTJoOS42NzRjLjAwNi4xMjYuMDE4LjI1Mi4wMTguMzc5IDAgLjYzOS0uMDM4IDEuMjgxLjAxMyAxLjkxNmExLjQyNCAxLjQyNCAwIDAxLS40ODMgMS4xODVjLTEuNTcyIDEuNjI3LTMuMTIzIDMuMjc0LTQuNjgxIDQuOTE0LS4wODguMDkzLS4xNjkuMTkyLS4zMDcuMzUxSDg1Ljd2My4xaC05LjljLS4wMS0uMTUtLjAyNi0uMjkxLS4wMjYtLjQzMiAwLS43MzIuMDIyLTEuNDY1LS4wMS0yLjJhMS4yNDEgMS4yNDEgMCAwMS40LS45ODNjMS41MjYtMS42IDMuMDM2LTMuMjA5IDQuNTUxLTQuODE3LjA4LS4wODUuMTU1LS4xNzUuMjc5LS4zMTdoLTUuMDUzeiIgZmlsbD0iIzAwOGQ3MSIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNjk4IiBkPSJNMTQuNDg1IDE3LjYyNlY1LjgwNWgzLjU2N3YxMS44MjF6IiBmaWxsPSIjMGQxMTM2Ii8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDI2OTkiIGQ9Ik0xOC4zODYgMi4xMzhhMi4xIDIuMSAwIDAxLTIuMTQ4IDIuMSAyLjEzOSAyLjEzOSAwIDAxLTIuMDc4LTIuMTRBMi4xNDEgMi4xNDEgMCAwMTE2LjI4Ni4wMDVhMi4wODIgMi4wODIgMCAwMTIuMSAyLjEzM3oiIGZpbGw9IiMwMDhkNzEiLz48L2c+PC9zdmc+"

/***/ }),

/***/ "4JT2":
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5l48":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return HOME_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GROCERY_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return MAKEUP_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CLOTHING_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BAGS_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BOOK_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FURNITURE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return MEDICINE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return RESTAURANT_PAGE; });
/* unused harmony export REQUEST_MEDICINE_PAGE */
/* unused harmony export CHECKOUT_PAGE */
/* unused harmony export CHECKOUT_PAGE_TWO */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return PROFILE_PAGE; });
/* unused harmony export YOUR_ORDER_PAGE */
/* unused harmony export ORDER_RECEIVED_PAGE */
/* unused harmony export OFFER_PAGE */
/* unused harmony export HELP_PAGE */
/* unused harmony export TERMS_AND_SERVICES_PAGE */
/* unused harmony export PRIVACY_POLICY_PAGE */
/* unused harmony export HOME_MENU_ITEM */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return HELP_MENU_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return OFFER_MENU_ITEM; });
/* unused harmony export ORDER_MENU_ITEM */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return REQUEST_MEDICINE_MENU_ITEM; });
/* unused harmony export PROFILE_MENU_ITEM */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTHORIZED_MENU_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CATEGORY_MENU_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return MOBILE_DRAWER_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return PROFILE_SIDEBAR_TOP_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return PROFILE_SIDEBAR_BOTTOM_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LANGUAGE_MENU; });
const HOME_PAGE = '/';
const GROCERY_PAGE = '/grocery';
const MAKEUP_PAGE = '/makeup';
const CLOTHING_PAGE = '/clothing';
const BAGS_PAGE = '/bags';
const BOOK_PAGE = '/book';
const FURNITURE_PAGE = '/furniture';
const MEDICINE_PAGE = '/medicine';
const RESTAURANT_PAGE = '/restaurant';
const REQUEST_MEDICINE_PAGE = '/request-medicine';
const CHECKOUT_PAGE = '/checkout';
const CHECKOUT_PAGE_TWO = '/checkout-alternative';
const PROFILE_PAGE = '/profile';
const YOUR_ORDER_PAGE = '/order';
const ORDER_RECEIVED_PAGE = '/order-received';
const OFFER_PAGE = '/offer';
const HELP_PAGE = '/help';
const TERMS_AND_SERVICES_PAGE = '/terms';
const PRIVACY_POLICY_PAGE = '/privacy'; // Mobile Drawer Menus

const HOME_MENU_ITEM = {
  id: 'nav.home',
  defaultMessage: 'Home',
  href: HOME_PAGE
};
const HELP_MENU_ITEM = {
  id: 'nav.help',
  defaultMessage: 'Help',
  href: HELP_PAGE
};
const OFFER_MENU_ITEM = {
  id: 'nav.offer',
  defaultMessage: 'Offer',
  href: OFFER_PAGE
};
const ORDER_MENU_ITEM = {
  id: 'nav.order',
  href: YOUR_ORDER_PAGE,
  defaultMessage: 'Order'
};
const REQUEST_MEDICINE_MENU_ITEM = {
  id: 'nav.request_medicine',
  defaultMessage: 'Request Medicine',
  href: REQUEST_MEDICINE_PAGE
};
const PROFILE_MENU_ITEM = {
  id: 'nav.profile',
  defaultMessage: 'Profile',
  href: PROFILE_PAGE
};
const AUTHORIZED_MENU_ITEMS = [PROFILE_MENU_ITEM, {
  id: 'nav.checkout',
  defaultMessage: 'Checkout',
  href: CHECKOUT_PAGE
}, {
  id: 'nav.checkout_two',
  href: CHECKOUT_PAGE_TWO,
  defaultMessage: 'Checkout Alternative'
}, ORDER_MENU_ITEM, {
  id: 'nav.order_received',
  href: ORDER_RECEIVED_PAGE,
  defaultMessage: 'Order invoice'
}, {
  id: 'nav.terms_and_services',
  defaultMessage: 'Terms and Services',
  href: TERMS_AND_SERVICES_PAGE
}, {
  id: 'nav.privacy_policy',
  defaultMessage: 'Privacy Policy',
  href: PRIVACY_POLICY_PAGE
}]; // category menu items for header navigation

const CATEGORY_MENU_ITEMS = [{
  id: 'nav.grocery',
  href: GROCERY_PAGE,
  defaultMessage: 'Grocery',
  icon: 'FruitsVegetable',
  dynamic: true
}, {
  id: 'nav.makeup',
  defaultMessage: 'Makeup',
  href: MAKEUP_PAGE,
  icon: 'FacialCare',
  dynamic: true
}, {
  id: 'nav.bags',
  defaultMessage: 'Bags',
  href: BAGS_PAGE,
  icon: 'Handbag',
  dynamic: true
}, {
  id: 'nav.clothing',
  defaultMessage: 'Clothing',
  href: CLOTHING_PAGE,
  icon: 'DressIcon',
  dynamic: true
}, {
  id: 'nav.furniture',
  defaultMessage: 'Furniture',
  href: FURNITURE_PAGE,
  icon: 'FurnitureIcon',
  dynamic: true
}, {
  id: 'nav.book',
  defaultMessage: 'Book',
  href: BOOK_PAGE,
  icon: 'BookIcon',
  dynamic: true
}, {
  id: 'nav.medicine',
  defaultMessage: 'Medicine',
  href: MEDICINE_PAGE,
  icon: 'MedicineIcon',
  dynamic: true
}, {
  id: 'nav.foods',
  defaultMessage: 'Foods',
  href: RESTAURANT_PAGE,
  icon: 'Restaurant'
}];
const MOBILE_DRAWER_MENU = [HOME_MENU_ITEM, ...AUTHORIZED_MENU_ITEMS, HELP_MENU_ITEM, OFFER_MENU_ITEM];
const PROFILE_SIDEBAR_TOP_MENU = [ORDER_MENU_ITEM, HELP_MENU_ITEM];
const PROFILE_SIDEBAR_BOTTOM_MENU = [PROFILE_MENU_ITEM];
const LANGUAGE_MENU = [{
  id: 'ar',
  defaultMessage: 'Arabic',
  icon: 'SAFlag'
}, {
  id: 'zh',
  defaultMessage: 'Chinese',
  icon: 'CNFlag'
}, {
  id: 'en',
  defaultMessage: 'English',
  icon: 'USFlag'
}, {
  id: 'de',
  defaultMessage: 'German',
  icon: 'DEFlag'
}, {
  id: 'he',
  defaultMessage: 'Hebrew',
  icon: 'ILFlag'
}, {
  id: 'es',
  defaultMessage: 'Spanish',
  icon: 'ESFlag'
}];

/***/ }),

/***/ "5sXw":
/***/ (function(module, exports) {



/***/ }),

/***/ "63jn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./src/components/popover/useOnClickOutside.js

function useOnClickOutside(ref, handler) {
  Object(external_react_["useEffect"])(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, // Add ref and handler to effect dependencies
  // It's worth noting that because passed in handler is a new ...
  // ... function on every render that will cause this effect ...
  // ... callback/cleanup to run every render. It's not a big deal ...
  // ... but to optimize you can wrap handler in useCallback before ...
  // ... passing it into this hook.
  [ref, handler]);
}
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/components/popover/popover.style.tsx


const PopoverWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "popoverstyle__PopoverWrapper",
  componentId: "sc-19xxsmh-0"
})(["position:relative;cursor:pointer;.popover-handler{display:inline-block;cursor:pointer;}.popover-content{left:0px;top:calc(100% + 15px);display:block;min-width:200px;padding:15px 20px;position:absolute;border-radius:", ";background-color:", ";box-shadow:0 3px 20px rgba(142,142,142,0.14);z-index:99;&:before{content:'';position:absolute;width:0;height:0;border-style:solid;border-width:0 8px 9px 8px;border-color:transparent transparent ", " transparent;top:-8px;left:15px;box-shadow:-4px -4px 8px -3px rgba(142,142,142,0.14);pointer-events:none;}}&.right{.popover-content{left:auto;right:0px;&:before{left:auto;right:15px;}}}"], Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'));
/* harmony default export */ var popover_style = (PopoverWrapper);
// CONCATENATED MODULE: ./src/components/popover/popover.tsx
var __jsx = external_react_default.a.createElement;




const Popover = ({
  className,
  handler,
  content,
  direction
}) => {
  // Popover State
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])(false); // Ref

  const ref = Object(external_react_["useRef"])(); // Add all classs to an array

  const addAllClasses = ['popover-wrapper']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  } // Add direction class on popover content


  if (direction) {
    addAllClasses.push(direction);
  } // Toggle Popover content


  const handleToggle = e => {
    e.stopPropagation();
    setState(state => !state);
  }; // Handle document click


  const handleDocumentClick = e => {
    e.stopPropagation();

    if (state) {
      handleToggle(e);
    }
  }; // Handle window event listener


  Object(external_react_["useEffect"])(() => {
    window.addEventListener('click', handleDocumentClick);
    return () => {
      window.removeEventListener('click', handleDocumentClick);
    };
  }); // Close popover on click outside

  useOnClickOutside(ref, () => setState(state => false));
  return __jsx(popover_style, {
    className: addAllClasses.join(' '),
    ref: ref
  }, __jsx("div", {
    className: "popover-handler",
    onClick: handleToggle
  }, handler), state && __jsx("div", {
    className: "popover-content"
  }, content && __jsx("div", {
    className: "inner-wrap",
    onClick: handleToggle
  }, content)));
};

/* harmony default export */ var popover = __webpack_exports__["a"] = (Popover);

/***/ }),

/***/ "7xIC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("pONU");

var _interopRequireDefault = __webpack_require__("Y3ZS");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("L9lV"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("2MIm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "9T+x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/css"
var css_ = __webpack_require__("ExBD");
var css_default = /*#__PURE__*/__webpack_require__.n(css_);

// CONCATENATED MODULE: ./src/layouts/logo/logo.style.tsx


const LogoBox = external_styled_components_default.a.span.withConfig({
  displayName: "logostyle__LogoBox",
  componentId: "sc-14em7a1-0"
})(css_default()({
  color: 'text.bold',
  fontSize: 26,
  fontWeight: 'bold',
  cursor: 'pointer',
  mr: [0, 20, 40],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));
const LogoImage = external_styled_components_default.a.img.withConfig({
  displayName: "logostyle__LogoImage",
  componentId: "sc-14em7a1-1"
})({
  display: 'block',
  backfaceVisibility: 'hidden',
  maxWidth: 150
});
// CONCATENATED MODULE: ./src/layouts/logo/logo.tsx
var __jsx = external_react_default.a.createElement;




const Logo = ({
  imageUrl,
  alt,
  onClick
}) => {
  function onLogoClick() {
    router_default.a.push('/');

    if (onClick) {
      onClick();
    }
  }

  return __jsx(LogoBox, {
    onClick: onLogoClick
  }, __jsx(LogoImage, {
    src: imageUrl,
    alt: alt
  }));
};

/* harmony default export */ var logo = __webpack_exports__["a"] = (Logo);

/***/ }),

/***/ "B68Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export StyledButton */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ExBD");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "button__StyledButton",
  componentId: "sc-1mky0hn-0"
})(props => _styled_system_css__WEBPACK_IMPORTED_MODULE_3___default()({
  px: '15px',
  py: 0,
  fontSize: ['base'],
  fontWeight: 'bold',
  cursor: props.disabled ? 'not-allowed' : 'pointer',
  color: props.disabled ? 'text.light' : 'white',
  bg: props.disabled ? 'gray.500' : 'primary.regular',
  transition: 'all 0.3s ease',
  borderRadius: 'base',
  '&:hover': {
    color: props.disabled ? 'text.light' : 'white',
    bg: props.disabled ? 'gray.500' : 'primary.hover'
  }
}), {
  appearance: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  textAlign: 'center',
  height: '38px',
  textDecoration: 'none',
  fontFamily: 'inherit',
  border: 0,
  '&:focus': {
    outline: 'none'
  }
}, Object(styled_system__WEBPACK_IMPORTED_MODULE_4__["variant"])({
  variants: {
    outlined: {
      color: 'primary.regular',
      bg: 'white',
      border: '1px solid',
      borderColor: 'gray.500',
      '&:hover': {
        borderColor: 'primary.regular',
        color: 'primary.regular',
        bg: 'white'
      }
    },
    primary: {
      color: 'white',
      bg: 'primary.regular',
      '&:hover': {
        bg: 'primary.hover'
      }
    },
    secondary: {
      color: 'primary.regular',
      bg: 'white',
      border: '2px solid',
      borderColor: 'gray.500',
      '&:hover': {
        color: 'white',
        bg: 'primary.regular',
        borderColor: 'primary.regular'
      }
    },
    text: {
      color: 'primary.regular',
      bg: 'transparent',
      '&:hover': {
        bg: 'transparent',
        color: 'primary.hover'
      }
    },
    select: {
      width: 26,
      height: 26,
      lineHeight: 1,
      flexShrink: 0,
      border: '1px solid',
      borderColor: 'text.regular',
      borderRadius: 13,
      padding: 0,
      color: 'text.bold',
      bg: 'transparent',
      '&.selected': {
        bg: 'primary.regular',
        color: 'white',
        borderColor: 'primary.regular'
      },
      '&:hover:not(.selected)': {
        bg: 'transparent',
        color: 'primary.regular',
        borderColor: 'primary.regular'
      }
    }
  }
}), Object(styled_system__WEBPACK_IMPORTED_MODULE_4__["variant"])({
  prop: 'size',
  variants: {
    big: {
      height: '48px',
      px: 30
    },
    small: {
      height: '30px',
      fontSize: 14
    }
  }
}), Object(styled_system__WEBPACK_IMPORTED_MODULE_4__["compose"])(styled_system__WEBPACK_IMPORTED_MODULE_4__["border"], styled_system__WEBPACK_IMPORTED_MODULE_4__["space"], styled_system__WEBPACK_IMPORTED_MODULE_4__["layout"]));
const rotate = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
const Spinner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "button__Spinner",
  componentId: "sc-1mky0hn-1"
})(["width:18px;height:18px;margin-left:10px;border:3px solid #ffffff;border-top:3px solid ", ";border-radius:50%;transition-property:transform;animation-name:", ";animation-duration:1.2s;animation-iteration-count:infinite;animation-timing-function:linear;"], props => props.color ? props.color : Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('primary.regular', '#009E7F'), rotate); // const Spinner = styled.div((props) =>
//   css({
//     width: 18,
//     height: 18,
//     marginLeft: 10,
//     border: '3px solid white',
//     borderTop: `3px solid ${props.color ? props.color : 'primary.regular'}`,
//     borderRadius: '50%',
//     transitionProperty: 'transform',
//     animationName: `${rotate}`,
//     animationDuration: '1.2s',
//     animationIterationCount: 'infinite',
//     animationTimingFunction: 'linear',
//   })
// );

const Button = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((_ref, ref) => {
  let {
    children,
    disabled,
    loading = false
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "disabled", "loading"]);

  return __jsx(StyledButton, _extends({
    ref: ref
  }, props, {
    disabled: disabled
  }), children, loading && __jsx(Spinner, null));
});

/***/ }),

/***/ "DdEw":
/***/ (function(module, exports) {



/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Ek28":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("jvFD");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Icon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "nav-link__Icon",
  componentId: "sc-6likiw-0"
})(["min-width:16px;margin-right:10px;display:flex;align-items:center;justify-content:center;"]);

const NavLink = ({
  href,
  label,
  intlId,
  router,
  icon,
  className,
  onClick,
  iconClass,
  dynamic
}) => {
  const isCurrentPath = router.pathname === href || router.asPath === href;
  return __jsx("div", {
    onClick: onClick,
    className: className ? className : ''
  }, dynamic ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '/[type]',
    as: href
  }, __jsx("a", {
    className: isCurrentPath ? ' current-page' : '',
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, icon ? __jsx(Icon, {
    className: iconClass
  }, icon) : '', __jsx("span", {
    className: "label"
  }, intlId ? __jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: intlId ? intlId : 'defaultNavLinkId',
    defaultMessage: label
  }) : label))) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: href
  }, __jsx("a", {
    className: isCurrentPath ? ' current-page' : '',
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, icon ? __jsx(Icon, {
    className: iconClass
  }, icon) : '', __jsx("span", {
    className: "label"
  }, intlId ? __jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: intlId ? intlId : 'defaultNavLinkId',
    defaultMessage: label
  }) : label))));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(NavLink));

/***/ }),

/***/ "ExBD":
/***/ (function(module, exports) {

module.exports = require("@styled-system/css");

/***/ }),

/***/ "HPEz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SearchWrapper; });
/* unused harmony export HeaderLeftSide */
/* unused harmony export HeaderRightSide */
/* unused harmony export MainMenu */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return MobileHeaderWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return MobileHeaderInnerWrapper; });
/* unused harmony export SelectedType */
/* unused harmony export DropDownArrow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DrawerWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LogoWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return HamburgerIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DrawerContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawerClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DrawerProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LogoutView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LoginView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return UserAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return UserDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DrawerMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DrawerMenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return UserOptionMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SearchModalWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SearchModalClose; });
/* unused harmony export LanguageItem */
/* unused harmony export LangSwitcher */
/* unused harmony export Flag */
/* unused harmony export TypeIcon */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const positionAnim = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{position:fixed;opacity:1;}to{opacity:0;transition:all 0.3s ease;}"]);
const hideSearch = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{display:none;}to{display:flex;}"]);
const SearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__SearchWrapper",
  componentId: "xdvv0c-0"
})(["padding:5px;cursor:pointer;color:", ";svg{display:block;width:17px;height:auto;}@media only screen and (min-width:991px) and (max-width:1366px){opacity:0;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'));
const HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "headerstyle__HeaderWrapper",
  componentId: "xdvv0c-1"
})(["padding:20px 50px;display:flex;align-items:center;justify-content:space-between;position:fixed;z-index:99999;top:0;left:0;width:100%;background-color:", ";box-shadow:", ";transition:all 0.3s ease;&.home{position:absolute;background-color:transparent;box-shadow:none;}@media (min-width:1600px){padding:25px 40px;}@media (max-width:990px){display:none;}.headerSearch{margin:0 30px;@media only screen and (min-width:991px) and (max-width:1200px){margin:0 15px;input{width:80%;}.buttonText{display:none;}}}&.unSticky{animation:", " 0.3s ease;.headerSearch{animation:", " 0.3s ease;display:none;}}&.sticky{background-color:", ";position:fixed;box-shadow:", ";padding-top:20px;padding-bottom:20px;@media (max-width:1400px){padding-top:20px;padding-bottom:20px;}.headerSearch{display:flex;form{background-color:", ";input{background-color:", ";}}@media only screen and (min-width:991px) and (max-width:1200px){.buttonText{display:none;}}}}.popover-wrapper{.popover-content{padding:20px 0;.menu-item{a{margin:0;padding:12px 30px;border-bottom:1px solid ", ";cursor:pointer;white-space:nowrap;&:last-child{border-bottom:0;}&:hover{color:", ";}&.current-page{color:", ";}.menu-item-icon{margin-right:15px;}}}}}.headerSearch{input{@media (max-width:1400px){padding:0 15px;font-size:", "px;}@media only screen and (min-width:991px) and (max-width:1200px){}}button{@media (max-width:1400px){padding:0 15px;font-size:", "px;}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)'), positionAnim, hideSearch, Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.400', '#F3F3F3'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.400', '#F3F3F3'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.200', '#F7F7F7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'));
const HeaderLeftSide = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__HeaderLeftSide",
  componentId: "xdvv0c-2"
})(["display:flex;align-items:center;justify-content:space-between;flex-shrink:0;"]);
const HeaderRightSide = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__HeaderRightSide",
  componentId: "xdvv0c-3"
})(["display:flex;align-items:center;flex-shrink:0;.menu-icon{min-width:14px;margin-right:7px;}.menu-item{a{font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.2em;display:block;transition:0.15s ease-in-out;display:flex;align-items:center;margin-right:45px;@media (max-width:1400px){margin-right:35px;font-size:", "px;}&:hover{color:", ";}&.current-page{color:", ";}}}.user-pages-dropdown{.popover-handler{width:38px;height:38px;border-radius:50%;display:block;overflow:hidden;img{width:100%;height:auto;display:block;}}.popover-content{.inner-wrap{}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'));
const MainMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__MainMenu",
  componentId: "xdvv0c-4"
})(["display:flex;align-items:center;.popover-wrapper{.popover-content{.menu-item{font-family:", ";a{font-size:", "px;font-weight:", ";color:", ";line-height:1.2em;display:block;padding:15px 30px;border-radius:", ";transition:0.15s ease-in-out;display:flex;align-items:center;@media (max-width:1400px){margin-right:10px;font-size:", "px;}@media only screen and (min-width:991px) and (max-width:1200px){padding:15px 30px;}&:hover{color:", ";}&.current-page{color:", ";background-color:", ";}}}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'));
const MobileHeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__MobileHeaderWrapper",
  componentId: "xdvv0c-5"
})(["@media (min-width:991px){.desktop{display:none;}}"]);
const MobileHeaderInnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__MobileHeaderInnerWrapper",
  componentId: "xdvv0c-6"
})(["display:flex;align-items:center;justify-content:space-between;padding:15px;position:fixed;width:100%;top:0;left:0;z-index:999;transition:0.25s ease-in-out;&.home{position:absolute;background-color:transparent;box-shadow:none;}&.unSticky:not(.home){background-color:", ";box-shadow:", ";}&.sticky{position:fixed;background-color:", ";box-shadow:", ";@media only screen and (min-width:991px) and (max-width:1366px){.searchIconWrapper{opacity:1;}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)'));
const SelectedType = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "headerstyle__SelectedType",
  componentId: "xdvv0c-7"
})(["width:auto;height:38px;display:flex;align-items:center;background-color:", ";border:1px solid ", ";padding-top:0;padding-bottom:0;padding-left:15px;padding-right:15px;border-radius:", ";outline:0;min-width:150px;cursor:pointer;span{display:flex;align-items:center;font-family:", ";font-size:", "px;font-weight:", ";color:", ";text-decoration:none;&:first-child{margin-right:auto;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.500', '#f1f1f1'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'));
const DropDownArrow = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "headerstyle__DropDownArrow",
  componentId: "xdvv0c-8"
})(["width:12px;margin-left:16px;"]);
const DrawerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__DrawerWrapper",
  componentId: "xdvv0c-9"
})([""]);
const LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__LogoWrapper",
  componentId: "xdvv0c-10"
})(["margin-left:auto;margin-right:auto;img{display:block;}"]);
const HamburgerIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__HamburgerIcon",
  componentId: "xdvv0c-11"
})(["width:26px;cursor:pointer;display:block;position:relative;> span{display:block;background-color:", ";border-radius:", ";height:2px;margin-bottom:6px;transition:0.2s ease-in-out;&:nth-child(1){width:26px;}&:nth-child(2){width:12px;}&:nth-child(3){width:22px;}&:last-child{margin-bottom:0;}}&:hover{> span{&:nth-child(1){width:12px;}&:nth-child(2){width:22px;}&:nth-child(3){width:26px;}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px'));
const DrawerContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__DrawerContentWrapper",
  componentId: "xdvv0c-12"
})(["padding-top:60px;"]);
const DrawerClose = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__DrawerClose",
  componentId: "xdvv0c-13"
})(["display:block;position:absolute;left:35px;top:14px;color:", ";cursor:pointer;padding:10px;z-index:1;svg{display:block;width:12px;height:auto;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c'));
const DrawerProfile = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__DrawerProfile",
  componentId: "xdvv0c-14"
})(["background-color:", ";padding:45px;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.200', '#F7F7F7'));
const LogoutView = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__LogoutView",
  componentId: "xdvv0c-15"
})(["display:flex;align-items:center;justify-content:center;.sign_in{border:0;padding-left:0;padding-right:25px;}.sign_in,.sign_up{height:36px;padding-left:15px;padding-right:15px;}"]);
const LoginView = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__LoginView",
  componentId: "xdvv0c-16"
})(["display:flex;align-items:center;"]);
const UserAvatar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__UserAvatar",
  componentId: "xdvv0c-17"
})(["width:50px;height:50px;flex-shrink:0;display:block;border-radius:50%;overflow:hidden;margin-right:15px;img{width:100%;height:auto;display:block;}"]);
const UserDetails = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__UserDetails",
  componentId: "xdvv0c-18"
})(["h3{font-size:calc(", " - 1px);font-weight:", ";color:", ";margin-bottom:10px;line-height:1.2;}span{display:block;font-size:", "px;font-weight:", ";color:", ";}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base' + 'px', '15px'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.xs', '12'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'));
const DrawerMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__DrawerMenu",
  componentId: "xdvv0c-19"
})(["padding:40px 0;"]);
const DrawerMenuItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__DrawerMenuItem",
  componentId: "xdvv0c-20"
})(["&:last-child{.drawer_menu_item{margin-bottom:0;}}.drawer_menu_item{a,.logoutBtn{display:block;padding:5px 45px;font-size:calc(", " - 1px);font-weight:", ";color:", ";margin-bottom:19px;position:relative;transition:0.15s ease-in-out;&:hover{color:", ";}&:before{content:'';display:block;position:absolute;top:0;left:0;width:5px;height:100%;background:transparent;}&.current-page{color:", ";font-weight:", ";&:before{background-color:", ";}}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15px'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'));
const UserOptionMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__UserOptionMenu",
  componentId: "xdvv0c-21"
})(["padding:45px 0;border-top:1px solid ", ";"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.700', '#e6e6e6'));
const SearchModalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__SearchModalWrapper",
  componentId: "xdvv0c-22"
})(["padding-top:15px;padding-bottom:15px;background-color:", ";display:flex;width:100%;.header-modal-search{width:calc(100% - 60px);@media (max-width:420px){input{width:150px;}}button{background:transparent;color:", ";padding-left:15px;padding-right:15px;}input{color:", ";padding-left:5px;padding-right:5px;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'));
const SearchModalClose = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "headerstyle__SearchModalClose",
  componentId: "xdvv0c-23"
})(["border:0;background:transparent;display:block;padding:0 15px;color:", ";display:flex;align-items:center;justify-content:center;cursor:pointer;svg{display:block;width:20px;height:auto;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'));
const LanguageItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "headerstyle__LanguageItem",
  componentId: "xdvv0c-24"
})(["width:100%;font-size:", "px;font-weight:", ";color:", ";line-height:1.2em;display:block;padding:15px 30px;border-radius:", ";transition:0.15s ease-in-out;display:flex;align-items:center;border:0;border-bottom:1px solid ", ";border-radius:0;background-color:transparent;outline:0;cursor:pointer;&:last-child{border-bottom:0;}@media (max-width:1400px){margin-right:10px;font-size:", "px;}@media only screen and (min-width:991px) and (max-width:1200px){padding:15px 30px;}span{box-shadow:0 0 3px rgba(0,0,0,0.2);display:flex;align-items:center;justify-content:center;border-radius:2px;overflow:hidden;margin-right:15px;svg{display:block;width:20px;height:auto;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.500', '#f1f1f1'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'));
const LangSwitcher = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__LangSwitcher",
  componentId: "xdvv0c-25"
})(["margin-right:20px;@media (max-width:767px){margin-right:10px;}.popover-wrapper.right{.popover-content{padding:15px 0;}}"]);
const Flag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__Flag",
  componentId: "xdvv0c-26"
})(["margin-right:7px;box-shadow:0 0 3px rgba(0,0,0,0.2);display:flex;align-items:center;justify-content:center;border-radius:2px;overflow:hidden;svg{width:20px;height:auto;}"]);
const TypeIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__TypeIcon",
  componentId: "xdvv0c-27"
})(["margin-right:7px;display:flex;align-items:center;justify-content:center;min-width:16px;"]);
/* harmony default export */ __webpack_exports__["s"] = (HeaderWrapper);

/***/ }),

/***/ "J7Kp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const SearchIcon = (_ref) => {
  let {
    color = 'currentColor',
    width = '14px',
    height = '14px'
  } = _ref,
      props = _objectWithoutProperties(_ref, ["color", "width", "height"]);

  return __jsx("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 14 14"
  }, props), __jsx("path", {
    d: "M14.771,12.752,11.32,9.286a5.519,5.519,0,0,0,1.374-3.634A5.763,5.763,0,0,0,6.839,0,5.763,5.763,0,0,0,.984,5.652,5.763,5.763,0,0,0,6.839,11.3a5.936,5.936,0,0,0,3.354-1.023l3.477,3.492a.783.783,0,0,0,1.08.02A.72.72,0,0,0,14.771,12.752ZM6.839,1.475a4.259,4.259,0,0,1,4.327,4.178A4.259,4.259,0,0,1,6.839,9.83,4.259,4.259,0,0,1,2.511,5.652,4.259,4.259,0,0,1,6.839,1.475Z",
    transform: "translate(-0.984)",
    fill: color
  }));
};

/***/ }),

/***/ "KBQx":
/***/ (function(module, exports) {



/***/ }),

/***/ "KeDb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("Y3ZS");

var _interopRequireWildcard = __webpack_require__("pONU");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("7xIC"));

var _router2 = __webpack_require__("L9lV");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "L9lV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__("bzos");

var _mitt = _interopRequireDefault(__webpack_require__("YBsB"));

var _utils = __webpack_require__("fvxO");

var _isDynamic = __webpack_require__("Lko9");

var _routeMatcher = __webpack_require__("TBBy");

var _routeRegex = __webpack_require__("uChv");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "Lko9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "Nm2X":
/***/ (function(module, exports) {



/***/ }),

/***/ "OBDI":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gKgSUNDX1BST0ZJTEUAAQEAAAKQbGNtcwQwAABtbnRyUkdCIFhZWiAH3QAMAAQAAQAQAC5hY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtkZXNjAAABCAAAADhjcHJ0AAABQAAAAE53dHB0AAABkAAAABRjaGFkAAABpAAAACxyWFlaAAAB0AAAABRiWFlaAAAB5AAAABRnWFlaAAAB+AAAABRyVFJDAAACDAAAACBnVFJDAAACLAAAACBiVFJDAAACTAAAACBjaHJtAAACbAAAACRtbHVjAAAAAAAAAAEAAAAMZW5VUwAAABwAAAAcAHMAUgBHAEIAIABiAHUAaQBsAHQALQBpAG4AAG1sdWMAAAAAAAAAAQAAAAxlblVTAAAAMgAAABwATgBvACAAYwBvAHAAeQByAGkAZwBoAHQALAAgAHUAcwBlACAAZgByAGUAZQBsAHkAAAAAWFlaIAAAAAAAAPbWAAEAAAAA0y1zZjMyAAAAAAABDEoAAAXj///zKgAAB5sAAP2H///7ov///aMAAAPYAADAlFhZWiAAAAAAAABvlAAAOO4AAAOQWFlaIAAAAAAAACSdAAAPgwAAtr5YWVogAAAAAAAAYqUAALeQAAAY3nBhcmEAAAAAAAMAAAACZmYAAPKnAAANWQAAE9AAAApbcGFyYQAAAAAAAwAAAAJmZgAA8qcAAA1ZAAAT0AAACltwYXJhAAAAAAADAAAAAmZmAADypwAADVkAABPQAAAKW2Nocm0AAAAAAAMAAAAAo9cAAFR7AABMzQAAmZoAACZmAAAPXP/bAIQACAYGBwYFCAcHBwkJCAoMFA0MCwsMGRITDxQdGh8eHRocHCAkLicgIiwjHBwoNyksMDE0NDQfJzk9ODI8LjM0MgEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8IAEQgAgACAAwEiAAIRAQMRAf/EABsAAAIDAQEBAAAAAAAAAAAAAAQFAwYHAgEA/9oACAEBAAAAANSFss/tcrNV6u9tirnMk7YSJzRc/jF99fao4rIMliXAOcNKr6meUqx7fFW+bF4uVZRq6xMFxCLsRbFjXhg46RcBRgjJKdaok/eniwgoXgsHEhyJgRyIyPbVIeoI9BUVq9yt+eOPDPQJhVTtWqsozH35kkNrDE+UU6MchZ3NyQExIHC+XQHG+QEsu2+ZBLDpvFi4m2d8jceWPNPkgN7r2lKGlbqRdjfQ95d9AHtOaWeIqiilFaDZBcQj6G05pnYDuqyyk2a19ZBH1Abp0ntKqc3s1g0LzF4pOID2Q6zyXnux6CP/AP/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwQABf/aAAgBAhAAAADDQkKTF+HUSkeVG1y5pLO9t3YBnTTUknBK+5zLvNfXZ/J9M5pbufyP/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQMEAgAF/9oACAEDEAAAAK8FhWDoUMKJ8uNDxBgrrc9cnkdf3ouRJMKxXdJ50+Leu6TAbOKXQHqv/8QAJBAAAgMAAgIBBQEBAAAAAAAAAgMBBAUGEQAUEhMVISMxIhb/2gAIAQEAAQUA26Svr1cwbc1kghEefzzZ1s2o+zziSPS2NPVZQ27dI8rnVIxrXE2kXc5N0LCHU2fKYkWzHgtifNb8+VHQiuGi+CBCrqecb1PITUuraudCmuW65F57FiUptoU3A5SOZdweRVdhbq6nr085mf4t4HEN6nT6k4QbkfBqmXdQaPHdZq3WBxrE5l2pZrzBXDlENPxgNEcwGBObs+orE0I1MXUvoGuKhgJmI8t2Ic2rMAhpwbuYi8+H4FA9Db9cIG1QQ0XYVefJxEtH7H8osYjqlLEgSsrsBTzsY85sV8bPOVZ9NMPT8CechX76jan58U4pUBF5kz2YlPhxM+VpghAOpBI2I4zllW3tO7eK0sziHberUsDz/WWa7Y26N4O1qTMo3zL/AJviiJMHGIRLxnx3ZiCgABSvxCo+OcArtgEmzpMeGKph1WucYNk3jq2ZROaoCo6susvxBmpxfe1bRvoauoLs2X2Ku/q2soUcj07LOLaN1p1qUOuxxoZGeNlHhccf1OBbjzi0SStue2I11pVdb7JZqhbg2qSZX9kWc1a0V6u3kzdKlx9a7mTlpoNbBTZ+52Qluw8fE7FkiRdNieIzM1dgu32adsjw4aFbFOftrpiZU8ZsOmBW4hFELiSh8VkQoq6p/oLUYkIBNd7YXw8pmrpzHtru5MpNWe3zIIFDdsQAxdrVlhy2u5VXXVpV6pz1qsFFWy0rE1c76kAjMQupnZts6XHKLKtDZRjJ0OV24IOUss1cvlecAr3QHT1dYrkNoWoWVFJsotKq/Evk4dTdozYdYC1Rzp0V2NgbJV8qL1ZSdO8rNXpyyDugYWWSm1NoiDSzGt4Px7aJVj20lWdr0ZsImqa9/XRkNO+di0uz2eTyEpI5fZXNa3IwNoQbZkGezMTYdJqIv30jGMrkOY7C1KHIaza/s1m27OuCKFq9Nu8o+orN6bnPmH8V04AY0EyLQQwpn5qhszEzMkU/54pqjdxLtZFyro8Z0stkN14ZXw7/AKYHM6Ky68rtkGUz6jFsyDVVyGxa+sLCOO4mPkJfgojvC125F2rqVraTOIhFmInmfJAugr8W4/EgXUJORDGbB6SpiXu6lhz3MF+wZmYOP2/2amjZp+L5PbCLW1euxZjpsR0/vzv/ACEwR4Iz9SkyChzoK3//xAAyEAACAwABAwIFAgUDBQAAAAABAgADEQQSITFBURATMmFxBSIUI3KBsSQzoVKCkcHw/9oACAEBAAY/AEsVMY/URNLFVHY4IlaeF+JzlZywMyryPzDSmOyk71PFd7uisBjrKTn4ER05tqisHAMCt79XvDVyCVYNmxLarFZG8ETSAtg8MJ0XjtuK4g+KiO0JDRH5NYs0bjaQI/G/TGfi36FtupcgKvqAvgmFqLCEJDM7sSfzDb0BnGsWfu0Cs3VYRvy1H+T6QMQGOg4Tij7kmO62o1wGjoiclXNiLpZNOEGBPnVC/pDhAcLL75ClqhgYba9en/E1Tp+B+whVDkKy7ldWOqYv3aW22MpvNpKknq6oD31u7DI2oQp0AidFQKAnx2BYwm97CT4GkQ1ozAH0CEE/kw0El19zOQirlpHWjr9VRHhl9pw+fq/zqgxzxsers7EZkGLh9x8LQD9MLMYzACXPQuslq63sJRXaNrrcsVHiBSowRlKKVI8GdkAA9hH1QNMKlST4BEueoAMqklfcRWVAdOMhGyjh8XEpqQLLG5ViGzwFedZfrBJxQ2AT+Xxqh980x3HhoFDYDBOfUzYMH+Y3SPpB1j8DDHbP2/MIBMyWKwBUKRO42kFi35B0QJSoWkfUYW1uqMEru6QexEGvfv3iN5aLOrRonORRjFAf+ZdyD9O9I+GCYLCgPkgaYqKAqgYBAGJz26jCFAzCABLyqYwYhiYS5HTO2TSqw7UsKsTinAJX7GEvmt3An6hxAzBAhQASpx9dhY6ZYqX2M1ZxhSmhf7zqHMvFZYL1WICsVrCpYeSIQhrDehaaeXUp3MKlRFq5aKyt9NiGc3HChriubhGGDL7B/wB07cmyHOU07ck5+JafZpWIqm06JZbQ3a0hWInEQnqCoRCgqXPbIAEUD2CwjwdiOAujCNEFxTGwjRAvFBWvdCE6FgZM78x3b8CAFoOk7MMDES77vFEZ62AEuq5OaO6kx6t/27nUH4CtcLGAEdzFc+PBMDDsTLLc0opIAgRjrsdJg0zWYCahgC+Jb/WYuwIzKGh+VePwDOdQozp5DQw3NeFb3BGwBmYsvbTClNoZPBECk7Kg2nqsBIHqBEdRhOEbA994yY1qyxluXB5wxX+Yx31Bj1ULybizFi5RQP8AMa1U5DHNClaz/wC41tqhG3CiIW6YHurKsOzYdX/zHvTUo5K9a9USvj7pG/mD59FjN5BTCMi2tySjKSCjCFlu6R3AIUnqjmxjoIOmCnkXdICYCFJGxBxOTUz/ANYWMnLLBR9PqDD8nq0mOxtZQwGiKaeSykCFWYCxOx9OoTOohPf1Uw5+1X7EAwox/e1mEicTk0aeRQGsz3Q//AxS40ForFeoEA5AjjqIPhkBgcgHt5zsIEozbdJIhtY6Ii+haKhbVO6GnVRjVtAIF0ACK4YgnsZ9jDoOqcH4iN74c2cZVOgUqP8AiDk0j/SW2FlP/Q3qsrpf1XTDZ0qACAABLFoCoQpPcyqxm1ipIJnmJnozHfwIzHxXWTHrbG1fBmGkQtrp9hGRjjCDz407CPJII2D7GUp1bZSPlsJZRegauwEET5nDb+Jp9Avkf2i0Hicj5h7Kvyzst5360P4fhUoztXv77Pt9p1EBdY9gPAg2H7BjLCfDEAynD3ttAH4JhAds3sNg6LCoAAwDYlq4NOERhvuRAcjqYLVOof22J7xbEcYRCVIyHVCgDuxi/pvDbaS+2OPDQH1LkTfuZYR4AIioDhYzhr6Ltn4A8Q5GBh9mzfTDF+Ge4yBp/KclPUEz0/BnQ9pCHyo7CVQN5/fuiP20gmOB43CYDpAjXt5bFX7KILCRhUT9rA98OGf/xAAhEQADAAICAgIDAAAAAAAAAAAAAQIDERIhEBMgMQRBQv/aAAgBAgEBPwAl/Ds38Kf6QsrQsj2bbEub0LExJpaZsYmyWyU+J9G9GRGSdJUhjTbInX2JuZPXJ6pLHLa0W+KIraHQpb0ca2TFHRpMzRvuSGhTuuiehQmx8Z6TNePY4tpnpmu4ZhxqPH8tCy2tvzmwK+zH+NSYp4+JnZlnjtH/xAAfEQADAAICAwEBAAAAAAAAAAAAAQIDERIhBBMxEEH/2gAIAQMBAT8AXwaJjYp0jgVLQvxGiEeqWPHOi5SHqOx5UNpsS7I+mkUkZK70cdnBMxnjUnblkdCa1oqtroeNZLZzo9lEkZOF8jE1Rw76OP0vKpTOUjqRQhyjDSl6ZFz/AFGapHiVGTG4XR2/4cimetVCaJzuFq0Zsjtio6oeKBsbPH8jh1Rfkw0VW6/Eye2j/9k="

/***/ }),

/***/ "OfaO":
/***/ (function(module, exports) {



/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Ou8F":
/***/ (function(module) {

module.exports = JSON.parse("{\"nav.home\":\"Zuhause\",\"nav.grocery\":\"Lebensmittelgeschäft\",\"nav.makeup\":\"Bilden\",\"nav.bags\":\"Taschen\",\"nav.clothing\":\"Kleidung\",\"nav.furniture\":\"Möbel\",\"nav.book\":\"Buch\",\"nav.medicine\":\"Medizin\",\"nav.foods\":\"Lebensmittel\",\"nav.terms_and_services\":\"Nutzungsbedingungen\",\"nav.privacy_policy\":\"Datenschutz-Bestimmungen\",\"nav.offer\":\"Angebot\",\"nav.help\":\"Brauchen Sie Hilfe\",\"nav.profile\":\"Profil\",\"nav.checkout\":\"Auschecken\",\"nav.order_received\":\"Rechnung bestellen\",\"nav.logout\":\"Ausloggen\",\"nav.login\":\"Anmeldung\",\"nav.order\":\"Deine Bestellung\",\"groceriesTitle\":\"Lebensmittel in {minute} Minuten geliefert\",\"groceriesSubTitle\":\"Holen Sie sich den ganzen Tag über gesunde Lebensmittel und Snacks vor Ihre Haustür\",\"makeupTitle\":\"Eingebrannte und importierte Make-ups\",\"makeupSubTitle\":\"Der einfachste und günstigste Weg, um Ihre Marken- und Import-Make-ups zu erhalten\",\"bagsTitle\":\"Exklusive Markentaschen\",\"bagsSubTitle\":\"Erhalten Sie Ihre exklusiven & markenbezogenen Taschen in kürzester Zeit zugestellt\",\"womenClothsTitle\":\"Kaufen Sie Ihre Designer-Kleider\",\"womenClothsSubTitle\":\"Konfektionskleider für Sie aus dem Internet zugeschnitten. Beeilen Sie sich, solange der Vorrat reicht.\",\"furnitureTitle\":\"Exklusive Möbel zum günstigen Preis\",\"furnitureSubTitle\":\"Machen Sie aus Ihrem Haus ein Zuhause mit unserer großen Auswahl an schönen Möbeln\",\"booksTitle\":\"Dein eigener Buchladen\",\"booksSubTitle\":\"Holen Sie sich Ihre Lieblingsbücher aus unserer großen Auswahl an Büchern.\",\"medicineTitle\":\"Ihre Medikamente geliefert\",\"medicineSubTitle\":\"Verabschieden Sie sich mit uns von all Ihren Sorgen im Gesundheitswesen\",\"foodsTitle\":\"Sie bestellen, wir liefern\",\"foodsSubTitle\":\"Holen Sie sich Ihre Lieblingsspeisen in weniger als einer Stunde\",\"alternativeCheckout\":\"Checkout-Alternative\",\"termAndConditionHelper\":\"Mit diesem Kauf stimmen Sie unseren zu\",\"termAndCondition\":\"Geschäftsbedingungen.\",\"reqMedicine\":\"Medizin anfordern\",\"submitRequest\":\"Anfrage einreichen\",\"noteHead\":\"Hinweis\",\"noteDescription\":\"Produktverfügbarkeit und Preis werden telefonisch bestätigt. Versandkosten innerhalb der Stadt ${inside} und außerhalb der Stadt  ${outside}.\",\"rmMedicineName\":\"Name der Medizin\",\"rmMedicineQuantity\":\"Menge\",\"rmPrescripttionUpload\":\"Laden Sie Ihr Rezept hoch\",\"rmUploadText\":\"Ziehen Sie Ihre Datei hierher.\",\"cartTitle\":\"Deine Bestellung\",\"discountText\":\"Rabatt\",\"vatText\":\"Inkl. MwSt\",\"searchPlaceholder\":\"Suchen Sie hier nach Ihren Produkten\",\"searchButtonText\":\"Suche\",\"mobileSignInButtonText\":\"Dazu kommen\",\"navlinkAccountSettings\":\"Ihre Kontoeinstellungen\",\"cartItems\":\"Artikel\",\"cartItem\":\"Artikel\",\"addCartButton\":\"Wagen\",\"addToCartButton\":\"In den Warenkorb legen\",\"backBtn\":\"Zurück\",\"noProductFound\":\"Keine Produkte gefunden\",\"specialCode\":\"Hast du einen Gutschein?\",\"couponApplied\":\"Coupon angewendet\",\"couponPlaceholder\":\"Gutscheincode hier eingeben\",\"sidebarYourOrder\":\"Bestellung\",\"profilePageTitle\":\"Dein Profil\",\"profileNameField\":\"Name\",\"profileEmailField\":\"Email\",\"profileSaveBtn\":\"sparen\",\"contactNumberTItle\":\"Kontakt Nummer\",\"addContactBtn\":\"Kontakt hinzufügen\",\"deliveryAddresTitle\":\"Lieferadresse\",\"addAddressBtn\":\"Adresse hinzufügen\",\"addNew\":\"Neue hinzufügen\",\"paymentCardTitle\":\"Zahlungskarte\",\"addCardBtn\":\"Karte hinzufügen\",\"savedCardsId\":\"Gespeicherte Karten\",\"savedContactId\":\"Kontakt speichern\",\"savedAddressId\":\"Adresse speichern\",\"siteFooter\":\"Pickbazar ist ein Produkt von\",\"subTotal\":\"Zwischensumme\",\"itemsText\":\"Artikel\",\"shippinFeeText\":\"Versandkosten\",\"voucherText\":\"Gutschein\",\"voucherApply\":\"Sich bewerben\",\"couponError\":\"Ungültiger Gutschein\",\"totalText\":\"Gesamt\",\"deliverySchedule\":\"Lieferungsplan\",\"checkoutDeliveryAddress\":\"Lieferadresse\",\"contactNumberText\":\"Kontakt Nummer\",\"selectPaymentText\":\"Bezahlmöglichkeit\",\"proceesCheckout\":\"Zur Kasse\",\"backHomeBtn\":\"Zurück nach Hause\",\"orderReceivedText\":\"Bestellung erhalten\",\"orderReceivedSuccess\":\"Vielen Dank. Ihre Bestellung ist eingegangen\",\"orderNumberText\":\"Bestellnummer\",\"orderDateText\":\"Datum\",\"paymenMethodText\":\"Zahlungsmethode\",\"paymentMethodName\":\"Nachnahme\",\"orderDetailsText\":\"Bestelldetails\",\"totalItemText\":\"Gesamter Artikel\",\"orderTimeText\":\"Bestellzeitpunkt\",\"deliveryTimeText\":\"Lieferzeit\",\"deliveryLocationText\":\"Lieferort\",\"totalAmountText\":\"Gesamtmenge\",\"loadMoreBtn\":\"Mehr laden\",\"welcomeBack\":\"Willkommen zurück\",\"loginText\":\"Melden Sie sich mit Ihrer E-Mail-Adresse und Ihrem Passwort an\",\"emailAddressPlaceholder\":\"E-Mail-Adresse oder Kontaktnummer\",\"passwordPlaceholder\":\"Passwort (mindestens {minCharacter} Zeichen)\",\"continueBtn\":\"Fortsetzen\",\"orText\":\"oder\",\"continueFacebookBtn\":\"Weiter mit Facebook\",\"continueGoogleBtn\":\"Fahren Sie mit Google fort\",\"dontHaveAccount\":\"Noch keinen Account?\",\"signUpBtnText\":\"Anmelden\",\"forgotPasswordText\":\"Haben Sie Ihr Passwort vergessen?\",\"resetText\":\"Setzen Sie es zurück\",\"signUpText\":\"Mit Ihrer Anmeldung stimmen Sie Pickbazar's zu\",\"termsConditionText\":\"Nutzungsbedingungen\",\"alreadyHaveAccount\":\"Hast du schon ein Konto?\",\"backToSign\":\"Zurück zu\",\"loginBtnText\":\"Anmeldung\",\"forgotPassText\":\"Passwort vergessen\",\"sendResetPassText\":\"Wir senden Ihnen einen Link zum Zurücksetzen Ihres Passworts\",\"resetPasswordBtn\":\"Passwörter zurücksetzen\",\"intlCopyBtnId\":\"Kopieren\",\"intlCopySuccessId\":\"Kopiert\",\"locationModalheading\":\"Wähle deinen Standort\",\"locationModalSubHeading\":\"Sie müssen Ihren Standort für den Lieferservice auswählen\",\"locationModalFooter\":\"Kostenlose Lieferung für {number}Bestellung\",\"saleText\":\"Verkauf\",\"offText\":\"aus\",\"faqNo1Title\":\"Wie kann ich mit dem Kundenservice Kontakt aufnehmen?\",\"faqNo1Desc\":\"Unser Customer Experience Team ist {number1} Tage die Woche für Sie da und wir bieten zwei Möglichkeiten, um mit Ihnen in Kontakt zu treten. E-Mail und Chat. Wir bemühen uns, schnell zu antworten, damit Sie nicht zu lange auf eine Antwort warten müssen !.\",\"faqNo2Title\":\"App-Installation fehlgeschlagen, wie werden Systeminformationen aktualisiert?\",\"faqNo2Desc\":\"Bitte lesen Sie die Dokumentation sorgfältig durch. Wir haben auch einige Online-Video-Tutorials zu diesem Thema. Wenn das Problem weiterhin besteht, öffnen Sie ein Ticket im Support-Forum\",\"faqNo3Title\":\"Website-Antwort braucht Zeit, wie kann man sie verbessern?\",\"faqNo3Desc\":\"Bitte überprüfen Sie zunächst Ihre Internetverbindung. Wir haben auch einige Online-Video-Tutorials zu diesem Thema. Wenn das Problem weiterhin besteht, öffnen Sie ein Ticket im Support-Forum.\",\"faqNo4Title\":\"Wie erstelle ich ein Konto?\",\"faqNo4Desc\":\"Wenn Sie ein Konto für den persönlichen Gebrauch eröffnen möchten, können Sie dies telefonisch oder online tun. Die Online-Kontoeröffnung sollte nur wenige Minuten dauern.\",\"intlOrderDetailsDiscount\":\"Rabatt\",\"intlOrderDetailsDelivery\":\"Zustellgebühr\",\"intlOrderPageTitle\":\"Meine Bestellung\",\"intlNoOrderFound\":\"Keine Bestellung gefunden\",\"intlOrderPageDetails\":\"Bestelldetails\",\"intlTableColTitle2\":\"Menge\",\"intlTableColTitle3\":\"Preis\",\"intlOrderCardTitleText\":\"Bestellung\",\"intlOrderCardDateText\":\"Bestelldatum\",\"intlOrderCardTotalText\":\"Gesamtpreis\",\"joinButton\":\"Beitreten\",\"ar\":\"Arabisch\",\"zh\":\"Chinesisch\",\"en\":\"Englisch\",\"de\":\"Deutsche\",\"he\":\"Hebräisch\",\"es\":\"Spanisch\",\"intlTextBy\":\"durch\",\"intlReletedItems\":\"ähnliche Artikel\",\"readFreeSampleButton\":\"Kostenlose Probe lesen\",\"bookSectionTitle\":\"Über das Buch\",\"authorSectionTitle\":\"Über den Autor\",\"defaultIntlId\":\"Bitte fügen Sie einen Platzhalter aus der Sprachdatei hinzu\",\"noResultFound\":\"Entschuldigung, kein Ergebnis gefunden :(\",\"deliveryText\":\"Lieferung\",\"cuisineText\":\"Küche\",\"minOrderText\":\"Mindestbestellmenge\",\"fromText\":\"Von\",\"loadMoreButton\":\"Mehr laden\"}");

/***/ }),

/***/ "Oyez":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "PsoQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// NAMESPACE OBJECT: ./src/assets/icons/flags.ts
var flags_namespaceObject = {};
__webpack_require__.r(flags_namespaceObject);
__webpack_require__.d(flags_namespaceObject, "DEFlag", function() { return DEFlag; });
__webpack_require__.d(flags_namespaceObject, "CNFlag", function() { return CNFlag; });
__webpack_require__.d(flags_namespaceObject, "USFlag", function() { return USFlag; });
__webpack_require__.d(flags_namespaceObject, "ILFlag", function() { return ILFlag; });
__webpack_require__.d(flags_namespaceObject, "ESFlag", function() { return ESFlag; });
__webpack_require__.d(flags_namespaceObject, "SAFlag", function() { return SAFlag; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/layouts/header/menu/language-switcher/language-switcher.style.tsx


const Box = external_styled_components_default.a.div.withConfig({
  displayName: "language-switcherstyle__Box",
  componentId: "sc-1aklqk-0"
})(["margin-right:20px;.popover-wrapper.right{.popover-content{padding:15px 0;}}@media (max-width:767px){margin-right:10px;}"]);
const SelectedItem = external_styled_components_default.a.button.withConfig({
  displayName: "language-switcherstyle__SelectedItem",
  componentId: "sc-1aklqk-1"
})(["width:auto;height:38px;display:flex;align-items:center;background-color:", ";border:1px solid ", ";padding-top:0;padding-bottom:0;padding-left:10px;padding-right:10px;border-radius:", ";outline:0;cursor:pointer;span{display:flex;align-items:center;font-family:", ";font-size:", "px;font-weight:", ";color:", ";text-decoration:none;&:first-child{margin-right:auto;}}"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'), Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const Flag = external_styled_components_default.a.div.withConfig({
  displayName: "language-switcherstyle__Flag",
  componentId: "sc-1aklqk-2"
})(["margin-right:7px;box-shadow:0 0 3px rgba(0,0,0,0.2);display:flex;align-items:center;justify-content:center;border-radius:2px;overflow:hidden;svg{width:20px;height:auto;}"]);
const MenuItem = external_styled_components_default.a.button.withConfig({
  displayName: "language-switcherstyle__MenuItem",
  componentId: "sc-1aklqk-3"
})(["width:100%;font-size:", "px;font-weight:", ";color:", ";line-height:1.2em;display:block;padding:15px 30px;border-radius:", ";transition:0.15s ease-in-out;display:flex;align-items:center;border:0;border-bottom:1px solid ", ";border-radius:0;background-color:transparent;outline:0;cursor:pointer;&:last-child{border-bottom:0;}@media (max-width:1400px){margin-right:10px;font-size:", "px;}@media only screen and (min-width:991px) and (max-width:1200px){padding:15px 30px;}span{box-shadow:0 0 3px rgba(0,0,0,0.2);display:flex;align-items:center;justify-content:center;border-radius:2px;overflow:hidden;margin-right:15px;svg{display:block;width:20px;height:auto;}}"], Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'), Object(theme_get_["themeGet"])('fontSizes.base', '15'));
// EXTERNAL MODULE: ./src/components/popover/popover.tsx + 2 modules
var popover = __webpack_require__("63jn");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// CONCATENATED MODULE: ./src/assets/icons/DEFlag.tsx
var __jsx = external_react_default.a.createElement;

const DEFlag = ({
  width = '640px',
  height = '480px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 480",
    width: width,
    height: height
  }, __jsx("path", {
    fill: "#ffce00",
    d: "M0 320h640v160H0z"
  }), __jsx("path", {
    d: "M0 0h640v160H0z"
  }), __jsx("path", {
    fill: "#d00",
    d: "M0 160h640v160H0z"
  }));
};
// CONCATENATED MODULE: ./src/assets/icons/CNFlag.tsx
var CNFlag_jsx = external_react_default.a.createElement;

const CNFlag = ({
  width = '640px',
  height = '480px'
}) => {
  return CNFlag_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 480",
    width: width,
    height: height
  }, CNFlag_jsx("defs", null, CNFlag_jsx("path", {
    id: "a",
    fill: "#ffde00",
    d: "M-.6.8L0-1 .6.8-1-.3h2z"
  })), CNFlag_jsx("path", {
    fill: "#de2910",
    d: "M0 0h640v480H0z"
  }), CNFlag_jsx("use", {
    width: "30",
    height: "20",
    transform: "matrix(71.9991 0 0 72 120 120)",
    xlinkHref: "#a"
  }), CNFlag_jsx("use", {
    width: "30",
    height: "20",
    transform: "matrix(-12.33562 -20.5871 20.58684 -12.33577 240.3 48)",
    xlinkHref: "#a"
  }), CNFlag_jsx("use", {
    width: "30",
    height: "20",
    transform: "matrix(-3.38573 -23.75998 23.75968 -3.38578 288 95.8)",
    xlinkHref: "#a"
  }), CNFlag_jsx("use", {
    width: "30",
    height: "20",
    transform: "matrix(6.5991 -23.0749 23.0746 6.59919 288 168)",
    xlinkHref: "#a"
  }), CNFlag_jsx("use", {
    width: "30",
    height: "20",
    transform: "matrix(14.9991 -18.73557 18.73533 14.99929 240 216)",
    xlinkHref: "#a"
  }));
};
// CONCATENATED MODULE: ./src/assets/icons/USFlag.tsx
var USFlag_jsx = external_react_default.a.createElement;

const USFlag = ({
  width = '640px',
  height = '480px'
}) => {
  return USFlag_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "flag-icon-css-us",
    viewBox: "0 0 640 480",
    width: width,
    height: height
  }, USFlag_jsx("g", {
    fillRule: "evenodd"
  }, USFlag_jsx("g", {
    strokeWidth: "1pt"
  }, USFlag_jsx("path", {
    fill: "#bd3d44",
    d: "M0 0h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8V197H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8V512H0z",
    transform: "scale(.9375)"
  }), USFlag_jsx("path", {
    fill: "#fff",
    d: "M0 39.4h972.8v39.4H0zm0 78.8h972.8v39.3H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0z",
    transform: "scale(.9375)"
  })), USFlag_jsx("path", {
    fill: "#192f5d",
    d: "M0 0h389.1v275.7H0z",
    transform: "scale(.9375)"
  }), USFlag_jsx("path", {
    fill: "#fff",
    d: "M32.4 11.8L36 22.7h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 39.4l3.5 10.9h11.5L70.6 57 74 67.9l-9-6.7-9.3 6.7L59 57l-9-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7L124 57l-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5L330 57l3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 66.9L36 78h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zM64.9 94.5l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 122.1L36 133h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 149.7l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zM32.4 177.2l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 204.8l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 232.4l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7H29zm64.9 0l3.5 10.9h11.5L103 250l3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9H177l-9 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.5z",
    transform: "scale(.9375)"
  })));
};
// CONCATENATED MODULE: ./src/assets/icons/ILFlag.tsx
var ILFlag_jsx = external_react_default.a.createElement;

const ILFlag = ({
  width = '640px',
  height = '480px'
}) => {
  return ILFlag_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 480",
    width: width,
    height: height
  }, ILFlag_jsx("defs", null, ILFlag_jsx("clipPath", {
    id: "il-a"
  }, ILFlag_jsx("path", {
    fillOpacity: ".7",
    d: "M-87.6 0H595v512H-87.6z"
  }))), ILFlag_jsx("g", {
    fillRule: "evenodd",
    clipPath: "url(#il-a)",
    transform: "translate(82.1) scale(.94)"
  }, ILFlag_jsx("path", {
    fill: "#fff",
    d: "M619.4 512H-112V0h731.4z"
  }), ILFlag_jsx("path", {
    fill: "#00c",
    d: "M619.4 115.2H-112V48h731.4zm0 350.5H-112v-67.2h731.4zm-483-275l110.1 191.6L359 191.6l-222.6-.8z"
  }), ILFlag_jsx("path", {
    fill: "#fff",
    d: "M225.8 317.8l20.9 35.5 21.4-35.3-42.4-.2z"
  }), ILFlag_jsx("path", {
    fill: "#00c",
    d: "M136 320.6L246.2 129l112.4 190.8-222.6.8z"
  }), ILFlag_jsx("path", {
    fill: "#fff",
    d: "M225.8 191.6l20.9-35.5 21.4 35.4-42.4.1zM182 271.1l-21.7 36 41-.1-19.3-36zm-21.3-66.5l41.2.3-19.8 36.3-21.4-36.6zm151.2 67l20.9 35.5-41.7-.5 20.8-35zm20.5-67l-41.2.3 19.8 36.3 21.4-36.6zm-114.3 0L189.7 256l28.8 50.3 52.8 1.2 32-51.5-29.6-52-55.6.5z"
  })));
};
// CONCATENATED MODULE: ./src/assets/icons/ESFlag.tsx
var ESFlag_jsx = external_react_default.a.createElement;

const ESFlag = ({
  width = '640px',
  height = '480px'
}) => {
  return ESFlag_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "flag-icon-css-es",
    viewBox: "0 0 640 480",
    width: width,
    height: height
  }, ESFlag_jsx("path", {
    fill: "#AA151B",
    d: "M0 0h640v480H0z"
  }), ESFlag_jsx("path", {
    fill: "#F1BF00",
    d: "M0 120h640v240H0z"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    d: "M127.3 213.3l-.8-.1-1-1-.7-.4-.6-.8s-.7-1.1-.4-2c.3-.9.9-1.2 1.4-1.5a12 12 0 011.5-.5l1-.4 1.3-.3.5-.3c.2 0 .7 0 1-.2l1-.2 1.6.1h4.8c.4 0 1.2.3 1.4.4a35 35 0 002 .7c.5.1 1.6.3 2.2.6.5.3.9.7 1.1 1l.5 1v1.1l-.5.8-.6 1-.8.6s-.5.5-1 .4c-.4 0-4.8-.8-7.6-.8s-7.3.9-7.3.9"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M127.3 213.3l-.8-.1-1-1-.7-.4-.6-.8s-.7-1.1-.4-2c.3-.9.9-1.2 1.4-1.5a12 12 0 011.5-.5l1-.4 1.3-.3.5-.3c.2 0 .7 0 1-.2l1-.2 1.6.1h4.8c.4 0 1.2.3 1.4.4a35 35 0 002 .7c.5.1 1.6.3 2.2.6.5.3.9.7 1.1 1l.5 1v1.1l-.5.8-.6 1-.8.6s-.5.5-1 .4c-.4 0-4.8-.8-7.6-.8s-7.3.9-7.3.9z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M133.3 207c0-1.3.6-2.3 1.3-2.3.8 0 1.4 1 1.4 2.4 0 1.3-.6 2.4-1.4 2.4s-1.3-1.1-1.3-2.5"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M133.3 207c0-1.3.6-2.3 1.3-2.3.8 0 1.4 1 1.4 2.4 0 1.3-.6 2.4-1.4 2.4s-1.3-1.1-1.3-2.5z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M134 207c0-1.2.3-2.1.7-2.1.3 0 .6 1 .6 2.1 0 1.3-.3 2.2-.6 2.2-.4 0-.6-1-.6-2.2"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134 207c0-1.2.3-2.1.7-2.1.3 0 .6 1 .6 2.1 0 1.3-.3 2.2-.6 2.2-.4 0-.6-1-.6-2.2z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M133.8 204.5c0-.4.4-.8.8-.8s1 .4 1 .8c0 .5-.5.9-1 .9s-.8-.4-.8-.9"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M135.3 204.2v.6h-1.4v-.6h.5V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h.4"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M135.3 204.2v.6h-1.4v-.6h.5V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h.4"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M135.9 204.2v.6h-2.5v-.6h1V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M135.9 204.2v.6h-2.5v-.6h1V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.9 203.7c.4.1.6.4.6.8 0 .5-.4.9-.8.9s-1-.4-1-.9c0-.4.3-.7.7-.8"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M134.7 213.2H130v-1.1l-.3-1.2-.2-1.5c-1.3-1.7-2.5-2.8-2.9-2.5.1-.3.2-.6.5-.7 1.1-.7 3.5 1 5.2 3.6l.5.7h3.8l.4-.7c1.8-2.7 4.1-4.3 5.2-3.6.3.1.4.4.5.7-.4-.3-1.6.8-2.9 2.5l-.2 1.5-.2 1.2-.1 1.1h-4.7"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.7 213.2H130v-1.1l-.3-1.2-.2-1.5c-1.3-1.7-2.5-2.8-2.9-2.5.1-.3.2-.6.5-.7 1.1-.7 3.5 1 5.2 3.6l.5.7h3.8l.4-.7c1.8-2.7 4.1-4.3 5.2-3.6.3.1.4.4.5.7-.4-.3-1.6.8-2.9 2.5l-.2 1.5-.2 1.2-.1 1.1h-4.7z"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M126.8 206.8c1-.5 3 1.1 4.6 3.6m11-3.6c-.8-.5-2.8 1.1-4.5 3.6"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M127.8 215.3l-.5-1a27.3 27.3 0 0114.7 0l-.5.8a5.7 5.7 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.5.8l-.3-.6"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M127.8 215.3l-.5-1a27.3 27.3 0 0114.7 0l-.5.8a5.7 5.7 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.5.8l-.3-.6"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M134.6 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4-1.4-.5-4-.8-6.5-.8s-5 .3-6.4.8c-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.6 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4-1.4-.5-4-.8-6.5-.8s-5 .3-6.4.8c-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M142.1 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.4.6-1.1.7-1.4-.6-1.4-.6-.5.7-1 1c-.5 0-1.2-.4-1.2-.4l-.2.5-.3.1.2.5a27 27 0 017.2-.9c3 0 5.5.4 7.4 1l.2-.6"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M142.1 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.4.6-1.1.7-1.4-.6-1.4-.6-.5.7-1 1c-.5 0-1.2-.4-1.2-.4l-.2.5-.3.1.2.5a27 27 0 017.2-.9c3 0 5.5.4 7.4 1l.2-.6z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M134.7 210.7h.2a1 1 0 000 .4c0 .6.4 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1v-.1l.4-.4.2.5a.9.9 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4l.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6-.2.2-.4.2-.7.2-.6 0-1.2-.3-1.4-.8-.3.3-.7.5-1.1.5a1.6 1.6 0 01-1.2-.6 1.6 1.6 0 01-1 .4 1.6 1.6 0 01-1.3-.6 1.6 1.6 0 01-2.4.2 1.6 1.6 0 01-1.2.6 1.5 1.5 0 01-1.1-.5c-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2l-1-1 .1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 .9.9 0 000-.4v-.5l.4.4a.7.7 0 000 .1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.7 0 1.1-.4 1.1-1a1 1 0 000-.3h.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.7 210.7h.2a1 1 0 000 .4c0 .6.4 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1v-.1l.4-.4.2.5a.9.9 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4l.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6-.2.2-.4.2-.7.2-.6 0-1.2-.3-1.4-.8-.3.3-.7.5-1.1.5a1.6 1.6 0 01-1.2-.6 1.6 1.6 0 01-1 .4 1.6 1.6 0 01-1.3-.6 1.6 1.6 0 01-2.4.2 1.6 1.6 0 01-1.2.6 1.5 1.5 0 01-1.1-.5c-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2l-1-1 .1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 .9.9 0 000-.4v-.5l.4.4a.7.7 0 000 .1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.7 0 1.1-.4 1.1-1a1 1 0 000-.3h.3z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M134.6 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3a27 27 0 017.5-1c3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27.3 27.3 0 00-7.4-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M134.6 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3a27 27 0 017.5-1c3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27.3 27.3 0 00-7.4-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M131.8 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.5-.4"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M131.8 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.5-.4z"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    d: "M134.7 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.7 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1"
  }), ESFlag_jsx("path", {
    fill: "#058e6e",
    d: "M130 214.9h-.7c-.1 0-.3 0-.3-.2a.3.3 0 01.2-.3l.7-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M130 214.9h-.7c-.1 0-.3 0-.3-.2a.3.3 0 01.2-.3l.7-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    d: "M127.3 215.3l.3-.4h.7l-.4.6-.6-.2"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M127.3 215.3l.3-.4h.7l-.4.6-.6-.2"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M136.6 214.4c0-.3.2-.4.4-.4a.4.4 0 01.5.4.4.4 0 01-.5.4.4.4 0 01-.4-.4"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M136.6 214.4c0-.3.2-.4.4-.4a.4.4 0 01.5.4.4.4 0 01-.5.4.4.4 0 01-.4-.4z"
  }), ESFlag_jsx("path", {
    fill: "#058e6e",
    d: "M139.3 214.9h.6a.3.3 0 00.4-.2.3.3 0 00-.3-.3l-.6-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M139.3 214.9h.6a.3.3 0 00.4-.2.3.3 0 00-.3-.3l-.6-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    d: "M142 215.4l-.3-.5h-.7l.3.6.6-.1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M142 215.4l-.3-.5h-.7l.3.6.6-.1"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    d: "M134.6 217.1a25 25 0 01-6-.6 25.5 25.5 0 0112.1 0c-1.6.4-3.7.6-6 .6"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M134.6 217.1a25 25 0 01-6-.6 25.5 25.5 0 0112.1 0c-1.6.4-3.7.6-6 .6z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M142 212l-.1-.3c-.2 0-.3 0-.4.2 0 .2 0 .4.2.4 0 0 .2 0 .3-.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M142 212l-.1-.3c-.2 0-.3 0-.4.2 0 .2 0 .4.2.4 0 0 .2 0 .3-.3z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M137.3 211.2c0-.2 0-.4-.2-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M137.3 211.2c0-.2 0-.4-.2-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M132 211.2l.1-.4c.2 0 .3.1.3.3 0 .2 0 .4-.2.4l-.2-.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M132 211.2l.1-.4c.2 0 .3.1.3.3 0 .2 0 .4-.2.4l-.2-.3z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M127.3 212l.1-.3c.2 0 .3 0 .4.2 0 .2 0 .4-.2.4 0 0-.2 0-.3-.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M127.3 212l.1-.3c.2 0 .3 0 .4.2 0 .2 0 .4-.2.4 0 0-.2 0-.3-.3z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M134.6 208.5l-.8.5.6 1.3.2.1.2-.1.7-1.3-.9-.5"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.6 208.5l-.8.5.6 1.3.2.1.2-.1.7-1.3-.9-.5"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M132.8 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M132.8 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M136.4 210.5l-.3.5-1.3-.4-.2-.2.2-.2 1.3-.3.3.6"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M136.4 210.5l-.3.5-1.3-.4-.2-.2.2-.2 1.3-.3.3.6"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M129.3 209l-.7.7.9 1 .2.1.1-.1.3-1.3-.8-.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M129.3 209l-.7.7.9 1 .2.1.1-.1.3-1.3-.8-.3"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M128 211.2l.4.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M128 211.2l.4.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M131.5 210.5l-.3.6H130l-.2-.2.1-.3 1.2-.6.5.5"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M131.5 210.5l-.3.6H130l-.2-.2.1-.3 1.2-.6.5.5"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M126.6 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M126.6 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M129.2 210.9c0-.3.2-.5.5-.5s.5.2.5.5a.5.5 0 01-.5.4.5.5 0 01-.5-.4"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M129.2 210.9c0-.3.2-.5.5-.5s.5.2.5.5a.5.5 0 01-.5.4.5.5 0 01-.5-.4z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M140 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M140 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M141.4 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M141.4 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M137.8 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M137.8 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M142.5 211.4l.1.6 1.3.2.2-.1v-.2l-1-.9-.6.4"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M142.5 211.4l.1.6 1.3.2.2-.1v-.2l-1-.9-.6.4"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M134.2 210.4a.5.5 0 01.4-.4c.3 0 .5.2.5.4a.5.5 0 01-.5.5.5.5 0 01-.4-.5"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.2 210.4a.5.5 0 01.4-.4c.3 0 .5.2.5.4a.5.5 0 01-.5.5.5.5 0 01-.4-.5z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M139.1 210.9c0-.3.3-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M139.1 210.9c0-.3.3-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M124.8 212.2l-.6-.7c-.2-.2-.7-.3-.7-.3 0-.1.3-.3.6-.3a.5.5 0 01.4.2v-.2s.3 0 .4.3v1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M124.8 212.2l-.6-.7c-.2-.2-.7-.3-.7-.3 0-.1.3-.3.6-.3a.5.5 0 01.4.2v-.2s.3 0 .4.3v1z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M124.8 212c.1-.2.4-.2.5 0 .2.1.3.3.2.5l-.5-.1c-.2-.1-.3-.4-.2-.5"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M124.8 212c.1-.2.4-.2.5 0 .2.1.3.3.2.5l-.5-.1c-.2-.1-.3-.4-.2-.5z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M144.3 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M144.3 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M144.3 212c0-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M144.3 212c0-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M124 223h21.4v-5.5H124v5.6z"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M124 223h21.4v-5.5H124v5.6z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M126.2 226.8a1 1 0 01.4 0h16.5a1.4 1.4 0 01-1-1.2c0-.6.5-1.1 1-1.3a1.7 1.7 0 01-.4 0h-16a1.4 1.4 0 01-.5 0c.6.2 1 .7 1 1.3a1.3 1.3 0 01-1 1.2"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M126.2 226.8a1 1 0 01.4 0h16.5a1.4 1.4 0 01-1-1.2c0-.6.5-1.1 1-1.3a1.7 1.7 0 01-.4 0h-16a1.4 1.4 0 01-.5 0c.6.2 1 .7 1 1.3a1.3 1.3 0 01-1 1.2z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M126.6 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.5 0-1-.4-1-.8s.5-.8 1-.8"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M126.6 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.5 0-1-.4-1-.8s.5-.8 1-.8z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M126.6 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.5 0-1-.2-1-.6 0-.3.5-.6 1-.6"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M126.6 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.5 0-1-.2-1-.6 0-.3.5-.6 1-.6z"
  }), ESFlag_jsx("path", {
    fill: "#005bbf",
    d: "M149.6 317.4c-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8a8.3 8.3 0 01-3.8.8c-1.5 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8 8.3 8.3 0 01-3.8.8v2.4c1.5 0 2.8-.4 3.8-.9a8.2 8.2 0 013.7-.8c1.4 0 2.7.3 3.7.8s2.2.9 3.7.9a8.4 8.4 0 003.8-.9c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.9 3.7.9v-2.4"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M149.6 317.4c-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8a8.3 8.3 0 01-3.8.8c-1.5 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8 8.3 8.3 0 01-3.8.8v2.4c1.5 0 2.8-.4 3.8-.9a8.2 8.2 0 013.7-.8c1.4 0 2.7.3 3.7.8s2.2.9 3.7.9a8.4 8.4 0 003.8-.9c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.9 3.7.9v-2.4z"
  }), ESFlag_jsx("path", {
    fill: "#ccc",
    d: "M149.6 319.8a8 8 0 01-3.7-.9 8.3 8.3 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8s-2.3.9-3.8.9-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8.2 8.2 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.4 3.8-.9a8.1 8.1 0 013.7-.7c1.4 0 2.7.2 3.7.7a8.3 8.3 0 007.5 0 8.5 8.5 0 017.5.1 8.1 8.1 0 003.7.8v-2.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M149.6 319.8a8 8 0 01-3.7-.9 8.3 8.3 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8s-2.3.9-3.8.9-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8.2 8.2 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.4 3.8-.9a8.1 8.1 0 013.7-.7c1.4 0 2.7.2 3.7.7a8.3 8.3 0 007.5 0 8.5 8.5 0 017.5.1 8.1 8.1 0 003.7.8v-2.3"
  }), ESFlag_jsx("path", {
    fill: "#005bbf",
    d: "M149.6 322a7 7 0 01-3.7-.8 8.3 8.3 0 00-3.8-.7c-1.4 0-2.7.2-3.7.7-1 .6-2.3.9-3.8.9s-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.3 3.8-.9a10.2 10.2 0 017.4 0 7 7 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.8 3.7.8V322"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M149.6 322a7 7 0 01-3.7-.8 8.3 8.3 0 00-3.8-.7c-1.4 0-2.7.2-3.7.7-1 .6-2.3.9-3.8.9s-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.3 3.8-.9a10.2 10.2 0 017.4 0 7 7 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.8 3.7.8V322"
  }), ESFlag_jsx("path", {
    fill: "#ccc",
    d: "M149.6 326.7a8 8 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.9 10.2 10.2 0 017.4 0 8 8 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.8-.8 1.4 0 2.7.3 3.7.8s2.3.8 3.7.8v2.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M149.6 326.7a8 8 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.9 10.2 10.2 0 017.4 0 8 8 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.8-.8 1.4 0 2.7.3 3.7.8s2.3.8 3.7.8v2.3"
  }), ESFlag_jsx("path", {
    fill: "#005bbf",
    d: "M149.6 329a8.1 8.1 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.7.3 3.7.7a8.4 8.4 0 007.5 0c1-.4 2.3-.7 3.8-.7 1.4 0 2.7.3 3.7.8s2.2.8 3.7.8v2.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M149.6 329a8.1 8.1 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.7.3 3.7.7a8.4 8.4 0 007.5 0c1-.4 2.3-.7 3.8-.7 1.4 0 2.7.3 3.7.8s2.2.8 3.7.8v2.3z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M126.2 308l.2.5c0 1.5-1.3 2.6-2.7 2.6h22a2.7 2.7 0 01-2.7-2.6v-.5a1.3 1.3 0 01-.3 0h-16a1.4 1.4 0 01-.5 0"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M126.2 308l.2.5c0 1.5-1.3 2.6-2.7 2.6h22a2.7 2.7 0 01-2.7-2.6v-.5a1.3 1.3 0 01-.3 0h-16a1.4 1.4 0 01-.5 0z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M126.6 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.5 0-1-.3-1-.8 0-.4.5-.7 1-.7"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M126.6 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.5 0-1-.3-1-.8 0-.4.5-.7 1-.7z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M123.7 316.7h22V311h-22v5.6z"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M123.7 316.7h22V311h-22v5.6z"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    d: "M122 286.7c-2.2 1.2-3.7 2.5-3.4 3.2 0 .6.8 1 1.8 1.6 1.5 1.1 2.5 3 1.7 4a5.5 5.5 0 00-.1-8.8"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M122 286.7c-2.2 1.2-3.7 2.5-3.4 3.2 0 .6.8 1 1.8 1.6 1.5 1.1 2.5 3 1.7 4a5.5 5.5 0 00-.1-8.8z"
  }), ESFlag_jsx("path", {
    fill: "#ccc",
    d: "M126.8 305.6h15.6V229h-15.6v76.5z"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M138 229.2v76.3m1.7-76.3v76.3m-12.9 0h15.6v-76.4h-15.6v76.5z"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    d: "M158.4 257.7a49.6 49.6 0 00-23.3-2c-9.4 1.6-16.5 5.3-15.9 8.4v.2l-3.5-8.2c-.6-3.3 7.2-7.5 17.6-9.2a43 43 0 019.2-.7c6.6 0 12.4.8 15.8 2.1v9.4"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M158.4 257.7a49.6 49.6 0 00-23.3-2c-9.4 1.6-16.5 5.3-15.9 8.4v.2l-3.5-8.2c-.6-3.3 7.2-7.5 17.6-9.2a43 43 0 019.2-.7c6.6 0 12.4.8 15.8 2.1v9.4"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    d: "M126.8 267.3c-4.3-.3-7.3-1.4-7.6-3.2-.3-1.5 1.2-3 3.8-4.5 1.2.1 2.5.3 3.8.3v7.4"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M126.8 267.3c-4.3-.3-7.3-1.4-7.6-3.2-.3-1.5 1.2-3 3.8-4.5 1.2.1 2.5.3 3.8.3v7.4"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    d: "M142.5 261.5c2.7.4 4.7 1 5.7 1.9l.1.2c.5 1-1.9 3-5.9 5.4v-7.5"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M142.5 261.5c2.7.4 4.7 1 5.7 1.9l.1.2c.5 1-1.9 3-5.9 5.4v-7.5"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    d: "M117.1 282c-.4-1.2 3.8-3.6 9.8-5.8l7.8-3.2c8.3-3.7 14.4-7.9 13.6-9.4v-.2c.4.4 1 8 1 8 .8 1.3-4.8 5.5-12.4 9.1-2.5 1.2-7.6 3-10 4-4.4 1.4-8.7 4.3-8.3 5.3l-1.5-7.7"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M117.1 282c-.4-1.2 3.8-3.6 9.8-5.8l7.8-3.2c8.3-3.7 14.4-7.9 13.6-9.4v-.2c.4.4 1 8 1 8 .8 1.3-4.8 5.5-12.4 9.1-2.5 1.2-7.6 3-10 4-4.4 1.4-8.7 4.3-8.3 5.3l-1.5-7.7z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M125.8 254c1.9-.6 3.1-1.5 2.5-3-.4-1-1.4-1-2.8-.6l-2.6 1 2.3 5.8.8-.3.8-.3-1-2.5zm-1.2-2.7l.7-.3c.5-.2 1.2.1 1.4.8.2.5.2 1-.5 1.5a4.4 4.4 0 01-.6.3l-1-2.3m7.3-2.5l-.9.3h-.8l1.3 6.1 4.3-.8-.2-.4v-.4l-2.5.6-1.2-5.3m8.4 5.2c.8-2.2 1.7-4.3 2.7-6.4a5.3 5.3 0 01-1 0 54.8 54.8 0 01-1.8 4.6l-2.4-4.3-1 .1h-1a131.4 131.4 0 013.5 6h1m8.8-4.7l.4-.9a3.4 3.4 0 00-1.7-.6c-1.7-.1-2.7.6-2.8 1.7-.2 2.1 3.2 2 3 3.4 0 .6-.7.9-1.4.8-.8 0-1.4-.5-1.4-1.2h-.3a7.3 7.3 0 01-.4 1.1 4 4 0 001.8.6c1.7.2 3-.5 3.2-1.7.2-2-3.3-2.1-3.1-3.4 0-.5.4-.8 1.3-.7.7 0 1 .4 1.2.9h.2"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    d: "M277.9 211.6s-.7.8-1.3.9c-.5 0-1.1-.5-1.1-.5s-.5.5-1 .6c-.6.1-1.4-.6-1.4-.6l-1 1c-.6 0-1.1-.3-1.1-.3s-.3.4-.7.6h-.4l-.6-.4-.7-.7-.5-.3-.4-1v-.5c-.1-.6.8-1.4 2.2-1.7a3.9 3.9 0 012 0c.5-.5 1.7-.8 3-.8s2.4.3 3 .7a5.5 5.5 0 012.9-.7c1.3 0 2.5.3 3 .8.5-.2 1.2-.2 2 0 1.4.3 2.3 1 2.2 1.7v.5l-.4 1-.6.3-.6.7-.6.3s-.3.2-.4 0c-.4-.1-.7-.5-.7-.5s-.6.4-1 .2c-.5-.2-1-1-1-1s-.9.8-1.4.7c-.6-.1-1-.6-1-.6s-.7.6-1.2.5c-.5-.1-1.2-.9-1.2-.9"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.9 211.6s-.7.8-1.3.9c-.5 0-1.1-.5-1.1-.5s-.5.5-1 .6c-.6.1-1.4-.6-1.4-.6l-1 1c-.6 0-1.1-.3-1.1-.3s-.3.4-.7.6h-.4l-.6-.4-.7-.7-.5-.3-.4-1v-.5c-.1-.6.8-1.4 2.2-1.7a3.9 3.9 0 012 0c.5-.5 1.7-.8 3-.8s2.4.3 3 .7a5.5 5.5 0 012.9-.7c1.3 0 2.5.3 3 .8.5-.2 1.2-.2 2 0 1.4.3 2.3 1 2.2 1.7v.5l-.4 1-.6.3-.6.7-.6.3s-.3.2-.4 0c-.4-.1-.7-.5-.7-.5s-.6.4-1 .2c-.5-.2-1-1-1-1s-.9.8-1.4.7c-.6-.1-1-.6-1-.6s-.7.6-1.2.5c-.5-.1-1.2-.9-1.2-.9z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M276.5 207.6c0-1 .6-2 1.3-2 .8 0 1.3 1 1.3 2s-.5 1.8-1.3 1.8c-.7 0-1.3-.8-1.3-1.9"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M276.5 207.6c0-1 .6-2 1.3-2 .8 0 1.3 1 1.3 2s-.5 1.8-1.3 1.8c-.7 0-1.3-.8-1.3-1.9z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M277.3 207.6c0-1 .2-1.8.5-1.8.4 0 .7.8.7 1.8s-.3 1.7-.6 1.7c-.4 0-.6-.8-.6-1.8"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.3 207.6c0-1 .2-1.8.5-1.8.4 0 .7.8.7 1.8s-.3 1.7-.6 1.7c-.4 0-.6-.8-.6-1.8z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M271 215.3a4.5 4.5 0 00-.5-1 27.4 27.4 0 0114.8 0l-.6.8a5.2 5.2 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.6.8l-.2-.6"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M271 215.3a4.5 4.5 0 00-.5-1 27.4 27.4 0 0114.8 0l-.6.8a5.2 5.2 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.6.8l-.2-.6"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M277.8 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4a24.1 24.1 0 00-6.5-.8c-2.5 0-5 .3-6.4.8-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.8 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4a24.1 24.1 0 00-6.5-.8c-2.5 0-5 .3-6.4.8-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M283.5 208.4c0-.2.2-.4.4-.4s.5.2.5.4-.2.4-.5.4a.4.4 0 01-.4-.4"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M283.5 208.4c0-.2.2-.4.4-.4s.5.2.5.4-.2.4-.5.4a.4.4 0 01-.4-.4zm-.2-1.4a.4.4 0 01.4-.4c.2 0 .4.1.4.4s-.2.4-.4.4a.4.4 0 01-.4-.4zm-1.1-1c0-.2.2-.3.4-.3s.4.1.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.4-.5zm-1.4-.4c0-.2.2-.4.4-.4.3 0 .5.2.5.4s-.2.4-.4.4-.5-.2-.5-.4zm-1.4 0c0-.2.2-.3.5-.3s.4.1.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.5-.4z"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: ".3",
    d: "M287.8 211.2l.2-1a2.7 2.7 0 00-2.7-2.8c-.5 0-1 .1-1.3.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M283 209.2l.2-.8c0-1.1-1.1-2-2.5-2-.6 0-1.2.2-1.6.4"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M288.2 210c0-.3.2-.5.4-.5s.4.2.4.4c0 .3-.2.4-.4.4s-.4-.1-.4-.4zm-.2-1.6c0-.2.2-.4.4-.4a.4.4 0 01.5.4c0 .2-.2.4-.4.4-.3 0-.5-.2-.5-.4zm-1-1.1a.4.4 0 01.5-.4c.2 0 .4.1.4.4a.4.4 0 01-.4.4.4.4 0 01-.5-.4zm-1.3-.7c0-.2.2-.4.5-.4s.4.2.4.4c0 .3-.2.5-.4.5a.4.4 0 01-.5-.5zm-1.4.1c0-.2.2-.4.5-.4s.4.2.4.4-.2.4-.4.4-.5-.2-.5-.4z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M285.3 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.3.6-1.1.7-1.4-.6-1.4-.6-.4.7-1 1c-.5 0-1.2-.4-1.2-.4l-.1.5-.3.1.1.5a27 27 0 017.3-.9c2.8 0 5.4.4 7.3 1l.2-.6"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M285.3 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.3.6-1.1.7-1.4-.6-1.4-.6-.4.7-1 1c-.5 0-1.2-.4-1.2-.4l-.1.5-.3.1.1.5a27 27 0 017.3-.9c2.8 0 5.4.4 7.3 1l.2-.6z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M271.3 208.4c0-.2.2-.4.4-.4s.4.2.4.4a.4.4 0 01-.4.4.4.4 0 01-.4-.4"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M271.3 208.4c0-.2.2-.4.4-.4s.4.2.4.4a.4.4 0 01-.4.4.4.4 0 01-.4-.4zm.2-1.4c0-.3.2-.4.4-.4s.5.1.5.4-.2.4-.5.4a.4.4 0 01-.4-.4zm1-1c0-.2.3-.3.5-.3s.5.1.5.4c0 .2-.2.4-.5.4a.4.4 0 01-.4-.5zm1.4-.4c0-.2.2-.4.5-.4s.4.2.4.4-.2.4-.4.4-.5-.2-.5-.4zm1.4 0c0-.2.2-.3.5-.3.2 0 .4.1.4.4 0 .2-.2.4-.4.4a.4.4 0 01-.5-.4z"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: ".3",
    d: "M267.8 211.2a2.8 2.8 0 01-.2-1 2.7 2.7 0 012.7-2.8c.5 0 1 .1 1.4.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M272.7 209.2a1.7 1.7 0 01-.3-.8c0-1 1.2-2 2.6-2a3 3 0 011.5.4"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M266.6 210c0-.3.2-.5.4-.5.3 0 .4.2.4.4a.4.4 0 01-.4.4c-.2 0-.4-.1-.4-.4zm.1-1.6c0-.2.3-.4.5-.4s.4.2.4.4-.2.4-.4.4-.4-.2-.4-.4zm1-1.1c0-.3.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4.4.4 0 01-.5-.4zm1.3-.7c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.4.4 0 01-.5-.5zm1.4.1c0-.2.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4c-.3 0-.5-.2-.5-.4z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M277.9 210.7h.2a1 1 0 000 .4c0 .6.5 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1a.7.7 0 000-.1l.4-.4.2.5a1 1 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4s.7-.7.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6a1.5 1.5 0 01-.7.2c-.6 0-1.2-.3-1.4-.8a1.5 1.5 0 01-1.1.5c-.5 0-1-.2-1.2-.6a1.5 1.5 0 01-1 .4c-.6 0-1-.2-1.4-.6-.2.4-.7.6-1.2.6-.4 0-.8-.1-1-.4a1.6 1.6 0 01-1.3.6c-.4 0-.8-.2-1.1-.5-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2a4.2 4.2 0 01-1-1l.1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 1 1 0 000-.4v-.5l.4.4v.1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.6 0 1.1-.4 1.1-1a1 1 0 000-.3h.2"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.9 210.7h.2a1 1 0 000 .4c0 .6.5 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1a.7.7 0 000-.1l.4-.4.2.5a1 1 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4s.7-.7.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6a1.5 1.5 0 01-.7.2c-.6 0-1.2-.3-1.4-.8a1.5 1.5 0 01-1.1.5c-.5 0-1-.2-1.2-.6a1.5 1.5 0 01-1 .4c-.6 0-1-.2-1.4-.6-.2.4-.7.6-1.2.6-.4 0-.8-.1-1-.4a1.6 1.6 0 01-1.3.6c-.4 0-.8-.2-1.1-.5-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2a4.2 4.2 0 01-1-1l.1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 1 1 0 000-.4v-.5l.4.4v.1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.6 0 1.1-.4 1.1-1a1 1 0 000-.3h.2z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M277.8 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3c2-.6 4.6-1 7.5-1 3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27 27 0 00-7.4-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.8 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3c2-.6 4.6-1 7.5-1 3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27 27 0 00-7.4-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M275 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4c-.3 0-.5-.2-.5-.4"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M275 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4c-.3 0-.5-.2-.5-.4z"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    d: "M277.9 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.9 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1"
  }), ESFlag_jsx("path", {
    fill: "#058e6e",
    d: "M273.2 214.9h-.6a.3.3 0 01-.4-.2.3.3 0 01.3-.3l.6-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M273.2 214.9h-.6a.3.3 0 01-.4-.2.3.3 0 01.3-.3l.6-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    d: "M270.5 215.3l.3-.4h.7l-.4.6-.6-.2"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M270.5 215.3l.3-.4h.7l-.4.6-.6-.2"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M279.8 214.4c0-.3.2-.4.4-.4.3 0 .5.1.5.4 0 .2-.2.4-.5.4a.4.4 0 01-.4-.4"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M279.8 214.4c0-.3.2-.4.4-.4.3 0 .5.1.5.4 0 .2-.2.4-.5.4a.4.4 0 01-.4-.4z"
  }), ESFlag_jsx("path", {
    fill: "#058e6e",
    d: "M282.5 214.9h.7a.3.3 0 00.3-.2.3.3 0 00-.2-.3l-.7-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M282.5 214.9h.7a.3.3 0 00.3-.2.3.3 0 00-.2-.3l-.7-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    d: "M285.1 215.4l-.2-.5h-.7l.3.6.6-.1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M285.1 215.4l-.2-.5h-.7l.3.6.6-.1"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    d: "M277.8 217.1a25 25 0 01-6-.6 25.4 25.4 0 016-.7c2.4 0 4.5.3 6.1.7-1.6.4-3.7.6-6 .6"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M277.8 217.1a25 25 0 01-6-.6 25.4 25.4 0 016-.7c2.4 0 4.5.3 6.1.7-1.6.4-3.7.6-6 .6z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M285.2 212l-.1-.3c-.2 0-.3 0-.4.2l.1.4c.2 0 .3 0 .4-.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M285.2 212l-.1-.3c-.2 0-.3 0-.4.2l.1.4c.2 0 .3 0 .4-.3z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M280.6 211.2c0-.2-.1-.4-.3-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M280.6 211.2c0-.2-.1-.4-.3-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M275.2 211.2c0-.2 0-.4.2-.4l.3.3-.2.4c-.2 0-.3-.2-.3-.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M275.2 211.2c0-.2 0-.4.2-.4l.3.3-.2.4c-.2 0-.3-.2-.3-.3z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M270.5 212l.1-.3c.2 0 .3 0 .4.2l-.1.4c-.2 0-.3 0-.4-.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M270.5 212l.1-.3c.2 0 .3 0 .4.2l-.1.4c-.2 0-.3 0-.4-.3z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M277.8 208.5l-.8.5.6 1.3.2.1.3-.1.6-1.3-.9-.5"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.8 208.5l-.8.5.6 1.3.2.1.3-.1.6-1.3-.9-.5"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M276 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M276 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M279.6 210.5l-.3.5-1.3-.4-.1-.2v-.2l1.4-.3.4.6"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M279.6 210.5l-.3.5-1.3-.4-.1-.2v-.2l1.4-.3.4.6"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M272.5 209l-.7.7.9 1 .2.1.2-.1.2-1.3-.8-.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M272.5 209l-.7.7.9 1 .2.1.2-.1.2-1.3-.8-.3"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M271.1 211.2l.5.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M271.1 211.2l.5.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M274.7 210.5l-.3.6h-1.3l-.2-.2.1-.3 1.2-.6.5.5"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M274.7 210.5l-.3.6h-1.3l-.2-.2.1-.3 1.2-.6.5.5"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M269.8 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M269.8 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M272.4 210.9c0-.3.2-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M272.4 210.9c0-.3.2-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M283.2 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M283.2 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M284.6 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M284.6 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M281 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M281 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M285.7 211.4v.6l1.4.2.2-.1v-.2l-1-.9-.6.4"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M285.7 211.4v.6l1.4.2.2-.1v-.2l-1-.9-.6.4"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M277.4 210.4c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.5.5 0 01-.5-.5"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.4 210.4c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.5.5 0 01-.5-.5z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M282.3 210.9c0-.3.3-.5.5-.5.3 0 .5.2.5.5s-.2.4-.5.4a.5.5 0 01-.5-.4"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M282.3 210.9c0-.3.3-.5.5-.5.3 0 .5.2.5.5s-.2.4-.5.4a.5.5 0 01-.5-.4z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M277 205.4c0-.5.4-.8.8-.8s1 .3 1 .8-.5.8-1 .8a.9.9 0 01-.8-.8"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M278.5 205.1v.6H277v-.6h.4v-1.3h-.5v-.5h.5v-.6h.6v.6h.6v.6h-.6v1.2h.4"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M278.5 205.1v.6H277v-.6h.4v-1.3h-.5v-.5h.5v-.6h.6v.6h.6v.6h-.6v1.2h.4z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M279 205.1v.6h-2.4v-.6h1v-1.3h-.7v-.5h.6v-.6h.6v.6h.6v.6h-.6v1.2h1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M278.1 204.6c.4 0 .6.4.6.8 0 .5-.4.8-.9.8a.9.9 0 01-.8-.8c0-.4.2-.7.6-.8"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M268 212.2l-.6-.7a2.3 2.3 0 00-.7-.3c0-.1.3-.3.6-.3.2 0 .3 0 .4.2v-.2s.3 0 .4.3v1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M268 212.2l-.6-.7a2.3 2.3 0 00-.7-.3c0-.1.3-.3.6-.3.2 0 .3 0 .4.2v-.2s.3 0 .4.3v1z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M268 212c.1-.2.4-.2.5 0 .2.1.3.3.1.5l-.5-.1c-.1-.1-.2-.4 0-.5"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M268 212c.1-.2.4-.2.5 0 .2.1.3.3.1.5l-.5-.1c-.1-.1-.2-.4 0-.5z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M287.5 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M287.5 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M287.5 212c-.1-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M287.5 212c-.1-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M267.2 223h21.4v-5.5h-21.4v5.6z"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M267.2 223h21.4v-5.5h-21.4v5.6z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M286.3 226.8a1 1 0 00-.4 0h-16.5c.6-.2 1-.7 1-1.2 0-.6-.4-1.1-1-1.3h17-.1c-.6.2-1 .7-1 1.3 0 .5.4 1 1 1.2"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M286.3 226.8a1 1 0 00-.4 0h-16.5c.6-.2 1-.7 1-1.2 0-.6-.4-1.1-1-1.3h17-.1c-.6.2-1 .7-1 1.3 0 .5.4 1 1 1.2z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M269.9 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.6 0-1-.4-1-.8s.5-.8 1-.8"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M269.9 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.6 0-1-.4-1-.8s.5-.8 1-.8z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M269.9 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.6 0-1-.2-1-.6 0-.3.4-.6 1-.6"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M269.9 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.6 0-1-.2-1-.6 0-.3.4-.6 1-.6z"
  }), ESFlag_jsx("path", {
    fill: "#005bbf",
    d: "M263 317.4c1.4 0 2.7-.3 3.7-.8a8.4 8.4 0 013.7-.8c1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.8a8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.8 3.8.8v2.4a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.8c-1.4 0-2.7.3-3.6.8-1 .5-2.3.9-3.8.9a8 8 0 01-3.7-.9 8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.9-3.8.9v-2.4"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M263 317.4c1.4 0 2.7-.3 3.7-.8a8.4 8.4 0 013.7-.8c1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.8a8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.8 3.8.8v2.4a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.8c-1.4 0-2.7.3-3.6.8-1 .5-2.3.9-3.8.9a8 8 0 01-3.7-.9 8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.9-3.8.9v-2.4z"
  }), ESFlag_jsx("path", {
    fill: "#ccc",
    d: "M263 319.8c1.4 0 2.7-.4 3.7-.9s2.3-.8 3.7-.8c1.4 0 2.8.3 3.8.8s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8c1.5 0 2.8.3 3.7.8 1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.1 8.1 0 00-3.7-.7c-1.4 0-2.7.2-3.6.7-1 .5-2.3.9-3.8.9a7 7 0 01-3.7-.9c-1-.4-2.3-.7-3.8-.7a8.3 8.3 0 00-3.7.7 8.1 8.1 0 01-3.8.9v-2.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M263 319.8c1.4 0 2.7-.4 3.7-.9s2.3-.8 3.7-.8c1.4 0 2.8.3 3.8.8s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8c1.5 0 2.8.3 3.7.8 1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.1 8.1 0 00-3.7-.7c-1.4 0-2.7.2-3.6.7-1 .5-2.3.9-3.8.9a7 7 0 01-3.7-.9c-1-.4-2.3-.7-3.8-.7a8.3 8.3 0 00-3.7.7 8.1 8.1 0 01-3.8.9v-2.3"
  }), ESFlag_jsx("path", {
    fill: "#005bbf",
    d: "M263 322c1.4 0 2.7-.2 3.7-.8 1-.4 2.3-.7 3.7-.7 1.4 0 2.8.2 3.8.7s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .6-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8V322"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M263 322c1.4 0 2.7-.2 3.7-.8 1-.4 2.3-.7 3.7-.7 1.4 0 2.8.2 3.8.7s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .6-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8V322"
  }), ESFlag_jsx("path", {
    fill: "#ccc",
    d: "M263 326.7a8 8 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.9a8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8a8.3 8.3 0 003.8.8v-2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .5-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8v2.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M263 326.7a8 8 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.9a8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8a8.3 8.3 0 003.8.8v-2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .5-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8v2.3"
  }), ESFlag_jsx("path", {
    fill: "#005bbf",
    d: "M263 329a8.1 8.1 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8 1 .5 2.4.8 3.8.8v-2.3a8.3 8.3 0 01-3.8-.8 8.2 8.2 0 00-3.7-.8 8.4 8.4 0 00-3.6.7 8.2 8.2 0 01-3.8.9c-1.4 0-2.8-.3-3.7-.8-1-.5-2.3-.8-3.8-.8-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v2.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M263 329a8.1 8.1 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8 1 .5 2.4.8 3.8.8v-2.3a8.3 8.3 0 01-3.8-.8 8.2 8.2 0 00-3.7-.8 8.4 8.4 0 00-3.6.7 8.2 8.2 0 01-3.8.9c-1.4 0-2.8-.3-3.7-.8-1-.5-2.3-.8-3.8-.8-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v2.3z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M286.3 308l-.1.5c0 1.5 1.2 2.6 2.7 2.6h-22c1.5 0 2.7-1.2 2.7-2.6l-.1-.5h16.8"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M286.3 308l-.1.5c0 1.5 1.2 2.6 2.7 2.6h-22c1.5 0 2.7-1.2 2.7-2.6l-.1-.5h16.8z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M269.9 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.6 0-1-.3-1-.8 0-.4.5-.7 1-.7"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M269.9 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.6 0-1-.3-1-.8 0-.4.5-.7 1-.7z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M266.9 316.7h22V311h-22v5.6z"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M266.9 316.7h22V311h-22v5.6z"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    d: "M290.6 286.7c2.1 1.2 3.6 2.5 3.4 3.2-.1.6-.8 1-1.8 1.6-1.6 1.1-2.5 3-1.8 4a5.5 5.5 0 01.2-8.8"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M290.6 286.7c2.1 1.2 3.6 2.5 3.4 3.2-.1.6-.8 1-1.8 1.6-1.6 1.1-2.5 3-1.8 4a5.5 5.5 0 01.2-8.8z"
  }), ESFlag_jsx("path", {
    fill: "#ccc",
    d: "M270.1 305.6h15.6V229h-15.6v76.5z"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M281.4 229.1v76.3m1.8-76.3v76.3m-13 .2h15.5V229h-15.6v76.5z"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    d: "M254.2 257.7a49.6 49.6 0 0123.3-2c9.3 1.6 16.4 5.3 15.9 8.4v.2l3.5-8.2c.6-3.3-7.3-7.5-17.6-9.2a53.5 53.5 0 00-9.2-.7c-6.7 0-12.4.8-15.9 2.1v9.4"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M254.2 257.7a49.6 49.6 0 0123.3-2c9.3 1.6 16.4 5.3 15.9 8.4v.2l3.5-8.2c.6-3.3-7.3-7.5-17.6-9.2a53.5 53.5 0 00-9.2-.7c-6.7 0-12.4.8-15.9 2.1v9.4"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    d: "M285.7 267.3c4.4-.3 7.3-1.4 7.7-3.2.2-1.5-1.2-3-3.8-4.5-1.2.1-2.5.3-3.9.3v7.4"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M285.7 267.3c4.4-.3 7.3-1.4 7.7-3.2.2-1.5-1.2-3-3.8-4.5-1.2.1-2.5.3-3.9.3v7.4"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    d: "M270 261.5a13 13 0 00-5.7 1.9v.2c-.5 1 1.8 3 5.8 5.4v-7.5"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M270 261.5a13 13 0 00-5.7 1.9v.2c-.5 1 1.8 3 5.8 5.4v-7.5"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    d: "M295.4 282c.4-1.2-3.8-3.6-9.7-5.8-2.8-1-5-2-7.8-3.2-8.3-3.7-14.4-7.9-13.6-9.4v-.2c-.4.4-1 8-1 8-.8 1.3 4.8 5.5 12.4 9.1 2.4 1.2 7.6 3 10 4 4.3 1.4 8.7 4.3 8.3 5.3l1.4-7.7"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M295.4 282c.4-1.2-3.8-3.6-9.7-5.8-2.8-1-5-2-7.8-3.2-8.3-3.7-14.4-7.9-13.6-9.4v-.2c-.4.4-1 8-1 8-.8 1.3 4.8 5.5 12.4 9.1 2.4 1.2 7.6 3 10 4 4.3 1.4 8.7 4.3 8.3 5.3l1.4-7.7z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M263.9 254.4c.6-2.3 1.4-4.4 2.1-6.6h-.5a5.2 5.2 0 01-.5.1 52.8 52.8 0 01-1.4 4.8c-1-1.4-2-2.7-2.7-4.1l-1 .2h-1a131.3 131.3 0 014 5.7h.5l.5-.1m6-6.6h-1a8 8 0 01-.8 0v6.2h4.2v-.7h-2.6l.1-5.5m6.8 1l2 .3v-.7l-5.8-.5v.8a19.3 19.3 0 012 0l-.4 5.6h1.6l.5-5.4m2.4 6c.3 0 .5 0 .8.2l.8.2.7-2.9.6 1.2.8 2.1 1 .2c.4 0 .7.2 1 .3l-.3-.7c-.4-1-1-1.9-1.3-2.9 1 0 1.9-.3 2.1-1.2.1-.6 0-1-.7-1.5-.4-.3-1.2-.4-1.7-.5l-2.4-.5-1.4 6m3-5.2c.7.2 1.5.3 1.5 1v.5c-.3.9-1 1.2-2 .9l.5-2.4m8 7l-.2 2 .8.5.9.5.5-7a3.4 3.4 0 01-.7-.3l-6.1 3.8.5.3.4.2 1.7-1.2 2.3 1.3zm-1.7-1.5l2-1.4-.2 2.3-1.8-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M182.2 192.4c0-1 1-2 2-2s2.2 1 2.2 2c0 1.1-1 2-2.1 2a2 2 0 01-2.1-2z"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M205.7 175.4c6.3 0 12 1 15.7 2.4a31.7 31.7 0 0014.6 2.3c2.7 0 6.5.8 10.3 2.4a27.3 27.3 0 017.4 4.7l-1.5 1.4-.4 3.8-4.1 4.7-2 1.8-5 3.9-2.5.2-.7 2.1-31.6-3.7-31.7 3.7-.8-2.1-2.5-.2-4.9-4-2-1.7-4.1-4.7-.5-3.8-1.5-1.4a27.6 27.6 0 017.5-4.7 26 26 0 0110.2-2.4c2 .2 4.2.1 6.6-.2a30 30 0 008-2c3.7-1.5 9-2.5 15.5-2.5z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206.2 217.1c-11.8 0-22.4-1.4-29.9-3.6a1.1 1.1 0 01-.8-1.2c0-.5.3-1 .8-1.2a109 109 0 0129.9-3.6c11.7 0 22.3 1.4 29.8 3.6a1.3 1.3 0 010 2.4c-7.5 2.2-18 3.6-29.8 3.6"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    d: "M206.1 215.6c-10.6 0-20.2-1.2-27.5-3.1 7.3-2 16.9-3 27.5-3.1a115 115 0 0127.6 3c-7.3 2-17 3.2-27.6 3.2"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M206.9 215.7v-6.3m-1.7 6.3v-6.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M203.6 215.7v-6.3m-1.6 6.3v-6.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M200.6 215.7v-6.3m-2.8 5.9v-5.7m1.3 5.8v-6m-3.8 5.6v-5.2m1.3 5.4v-5.6"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M192 214.8V210m1 4.7V210m1.2 5v-5m-3.4 4.7v-4.5"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M189.7 214.5v-4.2m-1.2 4.1v-4"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".6",
    d: "M186 214v-3m1.3 3.2v-3.5m-2.5 3.1V211"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".7",
    d: "M183.7 213.6v-2.3m-1.3 2v-1.8m-1.2 1.6v-1.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".9",
    d: "M179.8 212.8v-.7"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M213.7 215.3v-5.8m-2.9 6v-6.1m-2.1 6.2v-6.3"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206 207.4a108 108 0 00-30 3.9c.6-.3.5-1-.3-3-1-2.5-2.4-2.4-2.4-2.4 8.3-2.5 20-4 32.8-4a123 123 0 0133 4s-1.5-.1-2.5 2.3c-.8 2-.8 2.8-.2 3-7.5-2.2-18.4-3.7-30.3-3.7"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206.1 201.9c-12.9 0-24.5 1.5-32.8 4a1 1 0 01-1.3-.6 1 1 0 01.7-1.3 121 121 0 0133.4-4.2c13.2 0 25.2 1.7 33.5 4.2.6.2.9.8.7 1.3-.2.5-.8.8-1.3.6-8.4-2.5-20-4-32.9-4"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M206.1 215.6c-10.6 0-20.2-1.2-27.5-3.1 7.3-2 16.9-3 27.5-3.1a115 115 0 0127.6 3c-7.3 2-17 3.2-27.6 3.2z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M197 204.8c0-.5.4-1 1-1 .5 0 1 .5 1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206.1 205.6H203a1 1 0 010-2h6.4c.5 0 1 .5 1 1s-.5 1-1 1h-3.2"
  }), ESFlag_jsx("path", {
    fill: "#058e6e",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M190.3 206.5l-2.3.2c-.6.1-1-.3-1.2-.8a1 1 0 011-1.1l2.2-.3 2.4-.3c.5 0 1 .3 1.1.9.1.5-.3 1-.9 1l-2.3.4"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M181 206.7c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M174 208.5l1.2-1.6 3.3.4-2.6 2-1.8-.8"
  }), ESFlag_jsx("path", {
    fill: "#058e6e",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M222 206.5l2.3.2c.5.1 1-.3 1.1-.8a1 1 0 00-.9-1.1l-2.2-.3-2.4-.3a1 1 0 00-1.1.9c-.1.5.3 1 .9 1l2.3.4"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M213.3 204.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1m15.8 1.9c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.4 1-1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M238.2 208.5l-1.1-1.6-3.3.4 2.6 2 1.8-.8"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M177.3 212.8c7.4-2.1 17.6-3.4 28.8-3.4 11.3 0 21.4 1.3 28.9 3.4"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M182.3 183.8l1.4 1 2-3.2a7.4 7.4 0 01-3.6-7.2c.2-4.1 5.2-7.6 11.7-7.6 3.3 0 6.3 1 8.5 2.4 0-.6 0-1.2.2-1.8a17.4 17.4 0 00-8.7-2.1c-7.4 0-13.2 4.1-13.5 9.1a8.9 8.9 0 003 7.6l-1 1.8"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M182.3 183.8l1.4 1 2-3.2a7.4 7.4 0 01-3.6-7.2c.2-4.1 5.2-7.6 11.7-7.6 3.3 0 6.3 1 8.5 2.4 0-.6 0-1.2.2-1.8a17.4 17.4 0 00-8.7-2.1c-7.4 0-13.2 4.1-13.5 9.1a8.9 8.9 0 003 7.6l-1 1.8"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M182.4 183.8a9.3 9.3 0 01-4-7.3c0-3.2 2-6.1 5.3-8a8.5 8.5 0 00-3.4 6.8 8.9 8.9 0 003 6.7l-.9 1.8"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M182.4 183.8a9.3 9.3 0 01-4-7.3c0-3.2 2-6.1 5.3-8a8.5 8.5 0 00-3.4 6.8 8.9 8.9 0 003 6.7l-.9 1.8"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M160.1 187.1a8.8 8.8 0 01-2.3-5.9c0-1.3.3-2.6 1-3.8 2-4.2 8.4-7.2 16-7.2 2 0 4 .2 5.9.6l-1 1.4a25.5 25.5 0 00-4.9-.4c-7 0-12.8 2.7-14.5 6.3a7 7 0 00-.7 3.1 7.3 7.3 0 002.7 5.6l-2.6 4.1-1.3-1 1.7-2.8"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M160.1 187.1a8.8 8.8 0 01-2.3-5.9c0-1.3.3-2.6 1-3.8 2-4.2 8.4-7.2 16-7.2 2 0 4 .2 5.9.6l-1 1.4a25.5 25.5 0 00-4.9-.4c-7 0-12.8 2.7-14.5 6.3a7 7 0 00-.7 3.1 7.3 7.3 0 002.7 5.6l-2.6 4.1-1.3-1 1.7-2.8z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M162.7 173.3a10.5 10.5 0 00-4 4.1 8.6 8.6 0 00-.9 3.8c0 2.3.9 4.3 2.3 5.9l-1.5 2.5a10.4 10.4 0 01-2.3-6.5c0-4 2.5-7.5 6.4-9.8"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M162.7 173.3a10.5 10.5 0 00-4 4.1 8.6 8.6 0 00-.9 3.8c0 2.3.9 4.3 2.3 5.9l-1.5 2.5a10.4 10.4 0 01-2.3-6.5c0-4 2.5-7.5 6.4-9.8z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M206 164.4c1.7 0 3.2 1.1 3.5 2.6.3 1.4.4 2.9.4 4.5v1.1c.1 3.3.6 6.3 1.3 8.1l-5.2 5-5.2-5c.7-1.8 1.2-4.8 1.3-8.1v-1.1c0-1.6.2-3.1.4-4.5.3-1.5 1.8-2.6 3.5-2.6"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206 164.4c1.7 0 3.2 1.1 3.5 2.6.3 1.4.4 2.9.4 4.5v1.1c.1 3.3.6 6.3 1.3 8.1l-5.2 5-5.2-5c.7-1.8 1.2-4.8 1.3-8.1v-1.1c0-1.6.2-3.1.4-4.5.3-1.5 1.8-2.6 3.5-2.6z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M206 166c1 0 1.7.6 1.8 1.4.2 1.2.4 2.6.4 4.2v1c.1 3.2.6 6 1.2 7.7l-3.4 3.2-3.4-3.2c.7-1.7 1.1-4.5 1.2-7.7v-1a28.1 28.1 0 01.4-4.2 2 2 0 011.8-1.4"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206 166c1 0 1.7.6 1.8 1.4.2 1.2.4 2.6.4 4.2v1c.1 3.2.6 6 1.2 7.7l-3.4 3.2-3.4-3.2c.7-1.7 1.1-4.5 1.2-7.7v-1a28.1 28.1 0 01.4-4.2 2 2 0 011.8-1.4z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M229.7 183.8l-1.3 1-2-3.2a7.4 7.4 0 003.6-6.3 7 7 0 000-.9c-.2-4.1-5.3-7.6-11.7-7.6a15 15 0 00-8.5 2.4 23 23 0 00-.2-1.8 17.4 17.4 0 018.7-2.1c7.4 0 13.2 4.1 13.4 9.1a8.9 8.9 0 01-3 7.6l1 1.8"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M229.7 183.8l-1.3 1-2-3.2a7.4 7.4 0 003.6-6.3 7 7 0 000-.9c-.2-4.1-5.3-7.6-11.7-7.6a15 15 0 00-8.5 2.4 23 23 0 00-.2-1.8 17.4 17.4 0 018.7-2.1c7.4 0 13.2 4.1 13.4 9.1a8.9 8.9 0 01-3 7.6l1 1.8"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M229.6 183.8a9.1 9.1 0 004.1-7.3c0-3.2-2.1-6.1-5.3-8a8.5 8.5 0 013.4 6.8 8.9 8.9 0 01-3.2 6.7l1 1.8"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M229.6 183.8a9.1 9.1 0 004.1-7.3c0-3.2-2.1-6.1-5.3-8a8.5 8.5 0 013.4 6.8 8.9 8.9 0 01-3.2 6.7l1 1.8"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M252 187.1a8.8 8.8 0 002.2-5.9 8.7 8.7 0 00-.9-3.8c-2-4.2-8.4-7.2-16-7.2a29 29 0 00-6 .6l1 1.4a25.4 25.4 0 015-.4c7 0 12.8 2.7 14.4 6.3.5 1 .7 2 .7 3.1a7.3 7.3 0 01-2.6 5.6l2.5 4.1 1.3-1-1.7-2.8"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M252 187.1a8.8 8.8 0 002.2-5.9 8.7 8.7 0 00-.9-3.8c-2-4.2-8.4-7.2-16-7.2a29 29 0 00-6 .6l1 1.4a25.4 25.4 0 015-.4c7 0 12.8 2.7 14.4 6.3.5 1 .7 2 .7 3.1a7.3 7.3 0 01-2.6 5.6l2.5 4.1 1.3-1-1.7-2.8z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M249.3 173.3a10.6 10.6 0 014 4.1 8.7 8.7 0 01.9 3.8 8.8 8.8 0 01-2.3 5.9l1.6 2.5a10.4 10.4 0 002.3-6.5c0-4-2.6-7.5-6.5-9.8"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M249.3 173.3a10.6 10.6 0 014 4.1 8.7 8.7 0 01.9 3.8 8.8 8.8 0 01-2.3 5.9l1.6 2.5a10.4 10.4 0 002.3-6.5c0-4-2.6-7.5-6.5-9.8z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M204.2 181.4c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 01-1.8-1.7"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M204.2 181.4c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 01-1.8-1.7z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M204.2 178c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 01-1.8-1.7m.4-3.7c0-.7.6-1.3 1.4-1.3.8 0 1.5.6 1.5 1.3 0 .8-.7 1.4-1.5 1.4s-1.4-.6-1.4-1.4m.4-3.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1m.2-2.8c0-.5.4-.8.8-.8.5 0 .9.3.9.8 0 .4-.4.8-.9.8a.8.8 0 01-.8-.8"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206.2 191.8l1.2.2a4.6 4.6 0 004.5 6 4.7 4.7 0 004.4-3c.1 0 .5-1.7.7-1.7.2 0 .1 1.8.2 1.7.3 2.3 2.4 3.8 4.7 3.8a4.6 4.6 0 004.7-5l1.5-1.5.7 2a4 4 0 00-.4 1.9 4.4 4.4 0 004.5 4.2c1.6 0 3-.7 3.8-1.9l.9-1.2v1.5c0 1.5.6 2.8 2 3 0 0 1.7.1 4-1.6 2.1-1.7 3.3-3.1 3.3-3.1l.2 1.7s-1.8 2.8-3.8 4c-1 .6-2.7 1.3-4 1-1.4-.2-2.4-1.3-3-2.6a6.7 6.7 0 01-3.3 1 6.5 6.5 0 01-6.1-3.7 7 7 0 01-10.4-.3 7 7 0 01-4.6 1.8 6.9 6.9 0 01-5.7-3 6.9 6.9 0 01-5.7 3 7 7 0 01-4.7-1.8 7 7 0 01-10.4.3 6.5 6.5 0 01-6 3.7 6.7 6.7 0 01-3.4-1c-.6 1.3-1.5 2.4-3 2.7-1.2.2-2.9-.5-4-1.1-2-1.2-3.8-4-3.8-4l.2-1.7s1.2 1.4 3.4 3.1c2.2 1.8 3.9 1.6 3.9 1.6 1.4-.2 2-1.5 2-3v-1.5l1 1.2a4.6 4.6 0 003.7 2c2.5 0 4.5-2 4.5-4.3a4 4 0 00-.4-2l.8-1.9 1.5 1.5a4.4 4.4 0 000 .6c0 2.4 2 4.4 4.6 4.4 2.4 0 4.4-1.5 4.7-3.8 0 0 0-1.6.2-1.7.2 0 .6 1.7.7 1.6a4.7 4.7 0 004.5 3.1 4.6 4.6 0 004.5-6l1.2-.2"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M238.6 197.7c.3-.8 0-1.6-.6-1.8-.5-.2-1.2.3-1.5 1.1-.3.8 0 1.6.6 1.8.5.2 1.2-.3 1.5-1.1m-20.5-4c0-.8-.3-1.6-1-1.6-.5-.1-1 .5-1.2 1.4-.1.8.3 1.5.9 1.6.6 0 1.2-.6 1.3-1.4m-23.9 0c0-.8.4-1.6 1-1.6.6-.1 1.1.5 1.2 1.4.1.8-.3 1.5-.9 1.6-.6 0-1.1-.6-1.2-1.4m-20.6 4c-.2-.8 0-1.6.6-1.8.6-.2 1.2.3 1.5 1.1.3.8 0 1.6-.5 1.8-.6.2-1.3-.3-1.6-1.1"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M182.7 184a5.1 5.1 0 012.2 2.9s0-.3.6-.6 1-.3 1-.3l-.1 1.3-.3 2.2a7.4 7.4 0 01-.7 1.6 1.9 1.9 0 00-1.5-.4 1.8 1.8 0 00-1.2.9s-.7-.6-1.2-1.3l-1.1-2-.7-1.1s.5-.2 1.1 0c.6 0 .8.2.8.2a4.9 4.9 0 011-3.4m.4 9.8a1.8 1.8 0 01-.6-1c0-.5 0-.9.3-1.2 0 0-.9-.5-1.8-.7-.7-.2-2-.2-2.3-.2h-1l.2.5c.2.5.5.7.5.7a5 5 0 00-3 2 5.3 5.3 0 003.5 1l-.2.8v.6l1-.4c.3-.1 1.5-.5 2-1 .8-.4 1.5-1.1 1.5-1.1m2.7-.5a1.6 1.6 0 00.2-1.1 1.7 1.7 0 00-.6-1l1.4-1.3a10 10 0 012-.9l1.1-.4v.6a5.7 5.7 0 01-.2.8 5 5 0 013.4 1 5 5 0 01-2.9 2 6.4 6.4 0 00.7 1.2h-1c-.4 0-1.6 0-2.3-.2a11 11 0 01-1.8-.7"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M182.2 192.4c0-1 1-2 2-2s2.2 1 2.2 2c0 1.1-1 2-2.1 2a2 2 0 01-2.1-2"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206.1 180.8a5.7 5.7 0 011.9 3.7s.2-.3.9-.5c.7-.3 1.2-.2 1.2-.2l-.5 1.4-.8 2.4a8.2 8.2 0 01-1 1.7 2.1 2.1 0 00-1.7-.7c-.6 0-1.2.3-1.6.7 0 0-.6-.7-1-1.7l-.8-2.4-.5-1.4 1.2.2c.7.2.9.5.9.5 0-1.4.8-2.8 1.8-3.7"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M204.6 191.8a2 2 0 01-.5-1.2c0-.5.1-1 .4-1.3 0 0-.8-.7-1.8-1-.7-.4-2-.7-2.5-.7l-1.2-.2.2.6.4.9a5.9 5.9 0 00-3.7 1.7c1 .9 2.3 1.6 3.7 1.6l-.4 1-.2.6 1.2-.2c.4-.1 1.8-.4 2.5-.7 1-.4 1.9-1 1.9-1m3 0a1.9 1.9 0 00.1-2.6s.9-.7 1.8-1a8 8 0 012.5-.7l1.2-.3-.1.7-.4.9c1.4 0 2.7.8 3.6 1.7a5.9 5.9 0 01-3.6 1.6 6.9 6.9 0 00.5 1.6l-1.2-.2-2.5-.7c-1-.4-1.8-1-1.8-1m22-8a5.2 5.2 0 00-2.2 3l-.7-.6c-.6-.3-1-.3-1-.3l.2 1.3c0 .3 0 1.3.3 2.2.2 1 .6 1.6.6 1.6a2 2 0 011.5-.4c.6.1 1 .5 1.3.9l1.1-1.3c.6-.8 1-1.7 1.1-2l.7-1.1s-.4-.2-1 0c-.7 0-1 .2-1 .2a4.9 4.9 0 00-1-3.4m-.3 9.8c.3-.3.5-.6.6-1a1.6 1.6 0 00-.2-1.2s.8-.5 1.7-.7c.7-.2 2-.2 2.3-.2h1.1l-.3.5a6.2 6.2 0 01-.4.7 5 5 0 012.9 2 5.3 5.3 0 01-3.5 1l.2.8v.6l-1-.4c-.3-.1-1.4-.5-2-1-.8-.4-1.4-1.1-1.4-1.1m-2.8-.5a1.7 1.7 0 01-.2-1.1c0-.5.3-.8.6-1 0 0-.6-.8-1.4-1.3-.6-.4-1.7-.8-2-.9a171.4 171.4 0 01-1-.4v.6c0 .5.2.8.2.8a5.2 5.2 0 00-3.5 1c.7.9 1.7 1.7 3 2 0 0-.3.2-.5.7l-.3.5h1c.4 0 1.7 0 2.3-.2a11.1 11.1 0 001.8-.7"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M226 192.4c0-1 1-2 2-2s2.1 1 2.1 2a2 2 0 01-2 2 2 2 0 01-2.1-2m23.2 4.4c-.4-.5-1.4-.4-2.2.2-.8.7-1 1.6-.5 2.2.5.5 1.5.4 2.3-.3.7-.6 1-1.6.5-2"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M246.3 198l.7-1c.7-.6 1.8-.7 2.3-.2l.1.2s1-2 2.3-2.6c1.3-.7 3.4-.5 3.4-.5a2.8 2.8 0 00-2.9-2.8 3 3 0 00-2.4 1l-.2-1s-1.3.3-1.9 1.8c-.6 1.5 0 3.6 0 3.6s-.3-.9-.7-1.5a8 8 0 00-2.4-1.6l-1.3-.7-.1.5a5 5 0 000 .8 7.9 7.9 0 00-3.7.5 4.7 4.7 0 002.5 2.2l-.8.7a4 4 0 00-.4.5l1.3.2 2.5.2a14.5 14.5 0 001.7-.2m-80.3 0c0-.4-.3-.7-.7-1-.7-.7-1.7-.8-2.2-.3l-.2.3s-1-2-2.3-2.7c-1.2-.7-3.3-.5-3.3-.5a2.8 2.8 0 012.8-2.8c1 0 1.9.4 2.4 1l.2-1s1.3.3 2 1.8c.5 1.5-.1 3.6-.1 3.6s.3-.9.8-1.5a8 8 0 012.4-1.6l1.3-.7v1.3a7.9 7.9 0 013.7.5 4.7 4.7 0 01-2.5 2.2l.8.7.4.5-1.2.2-2.6.2a14.7 14.7 0 01-1.7-.2"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M163 196.8c.6-.5 1.6-.4 2.4.3.7.6 1 1.5.4 2-.5.6-1.5.5-2.2-.2-.8-.6-1-1.6-.5-2m41-6.3c0-1.1.9-2 2-2s2.1.9 2.1 2c0 1-1 2-2 2a2 2 0 01-2.1-2"
  }), ESFlag_jsx("path", {
    fill: "#005bbf",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M201.8 160.6c0-2.2 1.9-4 4.3-4s4.2 1.8 4.2 4-1.9 4-4.3 4a4.1 4.1 0 01-4.2-4"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M205 149.3v2.2h-2.4v2.2h2.3v6.3H202l-.2.6c0 .6.1 1.1.3 1.6h7.9c.2-.5.3-1 .3-1.6l-.2-.6h-2.8v-6.3h2.3v-2.2h-2.3v-2.2h-2.4z"
  }), ESFlag_jsx("path", {
    fill: "#ccc",
    d: "M206.5 330.6a82 82 0 01-35.5-8.2 22.7 22.7 0 01-12.8-20.4v-32h96.4v32a22.7 22.7 0 01-12.8 20.4 81 81 0 01-35.3 8.2"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M206.5 330.6a82 82 0 01-35.5-8.2 22.7 22.7 0 01-12.8-20.4v-32h96.4v32a22.7 22.7 0 01-12.8 20.4 81 81 0 01-35.3 8.2z"
  }), ESFlag_jsx("path", {
    fill: "#ccc",
    d: "M206.3 270h48.3v-53.5h-48.3V270z"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M206.3 270h48.3v-53.5h-48.3V270z"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    d: "M206.3 302c0 12.6-10.7 22.9-24 22.9s-24.2-10.3-24.2-23v-32h48.2v32"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M168.6 320.9c1.5.8 3.6 2 5.8 2.6l-.1-54.7h-5.7v52z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".5",
    d: "M158 301.6a24.4 24.4 0 005.5 15v-47.5h-5.4v32.5z"
  }), ESFlag_jsx("path", {
    fill: "#c7b500",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M179.4 324.7a26.6 26.6 0 005.6 0v-55.9h-5.6v56z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M190 323.5a19 19 0 005.8-2.5v-52.2H190l-.1 54.7z"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    d: "M158.1 270h48.2v-53.5H158V270z"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M158.1 270h48.2v-53.5H158V270z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M201 316c2.4-2 4.6-6.8 5.4-12.2l.1-35H201l.1 47.3z"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M206.3 302c0 12.6-10.7 22.9-24 22.9s-24.2-10.3-24.2-23v-32h48.2v32"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    d: "M254.6 270v32c0 12.6-10.8 22.9-24.1 22.9s-24.2-10.3-24.2-23v-32h48.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M254.6 270v32c0 12.6-10.8 22.9-24.1 22.9s-24.2-10.3-24.2-23v-32h48.3"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M215.1 294.1l.1.5c0 .6-.5 1-1.1 1a1 1 0 01-1.1-1v-.5h-1.5a2.5 2.5 0 001.8 2.9v3.9h1.6V297a2.6 2.6 0 001.7-1.6h4.4v-1.2h-6m21.8 0v1.2h-4a2.5 2.5 0 01-.3.6l4.6 5.2-1.2 1-4.6-5.3-.2.1v8.7h-1.6V297h-.2l-4.8 5.2-1.2-1 4.7-5.3a2.1 2.1 0 01-.2-.4h-4V294h13zm2.6 0v1.2h4.4c.3.8.9 1.4 1.7 1.6v3.9h1.6V297a2.5 2.5 0 001.8-2.4 2 2 0 000-.5h-1.6l.1.5c0 .6-.5 1-1 1-.7 0-1.2-.4-1.2-1a1 1 0 01.1-.5h-5.9m-6.7 22.1a15.6 15.6 0 003.7-1l.8 1.4a17.6 17.6 0 01-4.3 1.2 2.6 2.6 0 01-2.6 2 2.6 2.6 0 01-2.5-2 17.5 17.5 0 01-4.6-1.2l.8-1.4c1.3.5 2.6.9 4 1a2.5 2.5 0 011.5-1.3v-6.7h1.6v6.7c.7.2 1.3.7 1.6 1.4zm-11-2.2l-.8 1.4a16.6 16.6 0 01-3.6-3.1c-.9.2-1.8 0-2.5-.5a2.4 2.4 0 01-.3-3.5l.1-.1a15.3 15.3 0 01-1.3-4.8h1.7a13.1 13.1 0 001 4c.5 0 1 0 1.4.2l4.1-4.5 1.3 1-4.1 4.5c.5.9.5 2-.1 2.8a15.2 15.2 0 003.1 2.6zm-6-4.8c.3-.4 1-.5 1.5 0s.5 1 .1 1.4a1.2 1.2 0 01-1.6.1 1 1 0 010-1.5zm-2.2-4.5l-1.6-.3-.3-4.3 1.7-.6v2.5c0 1 0 1.8.2 2.7zm1.4-5.3l1.7.4v2.2c0-.8.3 2.1.3 2.1l-1.7.6a14 14 0 01-.3-2.7v-2.6zm5.6 13.7a15.7 15.7 0 004.8 2.6l.4-1.6a13.7 13.7 0 01-4-2l-1.2 1m-.8 1.4a17.4 17.4 0 004.8 2.6l-1.2 1.1a18.7 18.7 0 01-4-2l.4-1.7m2.2-9.4l1.6.7 3-3.3-1-1.4-3.6 4m-1.3-1l-1-1.4 3-3.3 1.6.7-3.6 4m18.1 9.9l.8 1.4a16.7 16.7 0 003.6-3.1c.9.2 1.8 0 2.5-.5a2.4 2.4 0 00.3-3.5l-.1-.1a15 15 0 001.3-4.8h-1.7a13.3 13.3 0 01-1 4 3 3 0 00-1.4.2l-4.1-4.5-1.3 1 4.1 4.5a2.4 2.4 0 00.1 2.8 15 15 0 01-3.1 2.6zm6-4.8a1.2 1.2 0 00-1.5 0 1 1 0 00-.1 1.4 1.2 1.2 0 001.6.1 1 1 0 000-1.5zm2.2-4.5l1.6-.3.3-4.3-1.7-.6v2.5c0 1 0 1.9-.2 2.8zm-1.4-5.3l-1.7.4v2.2c0-.8-.3 2.1-.3 2.1l1.7.6.3-2.7v-2.6m-5.6 13.7a15.7 15.7 0 01-4.8 2.6l-.4-1.6a13.7 13.7 0 004-2l1.2 1m.8 1.4a17.4 17.4 0 01-4.8 2.6l1.2 1.1a18.6 18.6 0 004-2l-.4-1.7m-2.2-9.4l-1.6.7-2.9-3.3 1-1.4 3.5 4m1.3-1l1-1.4-3-3.3-1.6.7 3.6 4m-20.1-8.7l.5 1.6h4.5l.5-1.6h-5.5m21.1 0l-.5 1.6h-4.5l-.5-1.6h5.5m-11.6 21.9c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm1.9-7.8l1.7-.4v-4.3l-1.7-.5v5.2m-1.6 0l-1.7-.4v-4.3l1.7-.5v5.2"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M211.5 294.2c.2-1 1-1.6 1.8-2V287h1.6v5.3c.8.3 1.5.9 1.7 1.6h4.4v.3h-6a1.2 1.2 0 00-1-.6c-.4 0-.7.3-1 .6h-1.5m12.2 0v-.3h4.1a2.4 2.4 0 01.2-.3l-5-5.7 1.2-1 5 5.6.2-.1V285h1.6v7.3h.3l4.9-5.5 1.2 1-4.9 5.5.3.6h4v.3h-13zm21.6 0a1.1 1.1 0 011-.6c.5 0 .8.3 1 .6h1.6c-.2-1-.9-1.6-1.8-2V287h-1.6v5.3c-.8.3-1.4.8-1.7 1.6h-4.4v.3h6m-30.2-15l6 6.8 1.3-1-6.1-6.7.3-.6h4.4V276h-4.4a2.6 2.6 0 00-2.5-1.7 2.6 2.6 0 00-2.7 2.5 2.5 2.5 0 001.8 2.4v5.2h1.6v-5.2h.3zm32 0v5.3h-1.7v-5.2a2.5 2.5 0 01-.4-.2l-6 6.8-1.3-1 6.2-6.9-.1-.3h-4.5V276h4.5a2.6 2.6 0 012.4-1.7 2.6 2.6 0 012.7 2.5 2.5 2.5 0 01-1.9 2.4zm-16.1 0v3.3h-1.7v-3.2a2.6 2.6 0 01-1.7-1.6h-4V276h4a2.6 2.6 0 012.5-1.7c1.2 0 2.2.7 2.5 1.7h4v1.6h-4a2.5 2.5 0 01-1.6 1.6zm-17.8 4l-1.7.4v4.3l1.7.5v-5.2m1.6 0l1.7.4v4.3l-1.7.5v-5.2m30.6 0l-1.7.4v4.3l1.7.5v-5.2m1.6 0l1.7.4v4.3l-1.7.5v-5.2m-25.5.8l1.6-.7 2.9 3.3-1 1.4-3.5-4m-1.3 1l-1 1.4 3 3.3 1.6-.7-3.6-4m18.5-1.1l-1.6-.7-3 3.3 1 1.4 3.6-4m1.2 1l1 1.4-3 3.3-1.5-.7 3.5-4m-20.3 9l.5-1.6h4.5l.5 1.6h-5.5m-6.7-17c0-.6.5-1 1.2-1a1 1 0 011 1c0 .6-.4 1-1 1a1.1 1.1 0 01-1.2-1zm12.1.8l-.5 1.6h-4.5l-.5-1.6h5.5m0-1.6l-.5-1.6h-4.5l-.5 1.6h5.5m15.7 17.8l-.5-1.6h-4.5l-.5 1.6h5.5m4.4-17c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm-16.1 0c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1.1 1a1.1 1.1 0 01-1.1-1zm6.2.8l.5 1.6h4.6l.5-1.6h-5.6m0-1.6l.5-1.6h4.6l.5 1.6h-5.6m-5.9 5l-1.7.5v4.3l1.7.5V281m1.7 0l1.6.5v4.3l-1.6.5V281"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#c8b100",
    strokeWidth: ".3",
    d: "M232.7 316.3a15.6 15.6 0 003.7-1.1l.8 1.4a17.6 17.6 0 01-4.3 1.2 2.6 2.6 0 01-2.6 2 2.6 2.6 0 01-2.5-2 17.5 17.5 0 01-4.6-1.2l.8-1.4c1.3.5 2.6.9 4 1a2.5 2.5 0 011.5-1.3v-6.7h1.6v6.7c.7.2 1.3.7 1.6 1.4zm-4.7-20.4a2.3 2.3 0 01-.2-.5h-4V294h4a2.6 2.6 0 01.2-.4l-5-5.6 1.2-1 5 5.5a2.2 2.2 0 01.2 0V285h1.7v7.3h.2l4.9-5.5 1.2 1-4.9 5.5.3.6h4v1.5h-4c0 .2-.2.4-.3.5l4.7 5.3-1.3 1-4.6-5.3-.2.1v8.7h-1.6V297l-.2-.1-4.8 5.3-1.2-1 4.7-5.3m-12.8-16.7l6 6.8 1.3-1-6.1-6.7.3-.6h4.4V276h-4.4a2.6 2.6 0 00-2.5-1.7 2.6 2.6 0 00-2.6 2.5 2.5 2.5 0 001.7 2.4v5.2h1.6v-5.2h.3zm6.5 34.8l-.8 1.4a16.6 16.6 0 01-3.6-3.1c-.9.2-1.8 0-2.5-.5a2.4 2.4 0 01-.3-3.5l.1-.1a15.3 15.3 0 01-1.2-4.8h1.6a13.1 13.1 0 001 4c.5 0 1 0 1.4.2l4.1-4.5 1.3 1-4.1 4.5c.6.9.5 2-.1 2.8a15.2 15.2 0 003.1 2.6zm-8.4-13.1V297a2.5 2.5 0 01-1.8-2.4c0-1 .8-2 1.8-2.4V287h1.6v5.3c.8.2 1.5.8 1.7 1.6h4.4v1.5h-4.4a2.6 2.6 0 01-1.6 1.6v3.9h-1.7m2.3 8.3c.4-.4 1.1-.5 1.6 0s.5 1 .1 1.4a1.2 1.2 0 01-1.6.1 1 1 0 010-1.5zm-2-4.5l-1.7-.3-.3-4.3 1.7-.6v2.5c0 1 0 1.8.3 2.7zm1.4-5.3l1.6.4v2.2c0-.8.3 2.1.3 2.1l-1.7.6-.3-2.7v-2.6zm5.5 13.7a15.7 15.7 0 004.8 2.6l.4-1.6a13.7 13.7 0 01-4-2l-1.2 1m-.8 1.4a17.4 17.4 0 004.8 2.6l-1.2 1.1a18.7 18.7 0 01-4-2l.4-1.7"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#c8b100",
    strokeWidth: ".3",
    d: "M221.9 305.1l1.6.7 3-3.3-1-1.4-3.6 4m-1.3-1l-1-1.4 3-3.3 1.6.7-3.6 4m-7.6-9.5c0-.6.5-1 1-1 .7 0 1.2.5 1.2 1 0 .6-.5 1.1-1.1 1.1a1 1 0 01-1.1-1zm25.7 19.4l.8 1.4a16.7 16.7 0 003.6-3.1c.9.2 1.8 0 2.6-.5a2.4 2.4 0 00.2-3.5l-.1-.1a15 15 0 001.3-4.8h-1.7a13.3 13.3 0 01-1 4 3 3 0 00-1.4.2l-4.1-4.5-1.3 1 4.1 4.5a2.4 2.4 0 00.1 2.8 15 15 0 01-3 2.6zm8.4-13.1V297a2.5 2.5 0 001.8-2.4c0-1-.7-2-1.8-2.4V287h-1.6v5.3c-.8.2-1.4.8-1.7 1.6h-4.4v1.5h4.4c.3.8.9 1.3 1.7 1.6v3.9h1.6zm-2.3 8.3a1.2 1.2 0 00-1.6 0 1 1 0 00-.1 1.4 1.2 1.2 0 001.6.1 1 1 0 000-1.5zm2-4.5l1.7-.3.3-4.3-1.7-.6v2.5c0 1 0 1.8-.2 2.7zm-1.3-5.3l-1.7.4v2.2c0-.8-.3 2.1-.3 2.1l1.7.6.3-2.7v-2.6m1.6-20.1v5.2h-1.6v-5.2a2.3 2.3 0 01-.4-.2l-6 6.8-1.2-1 6-7v-.2h-4.5V276h4.4a2.6 2.6 0 012.5-1.7 2.6 2.6 0 012.6 2.5 2.5 2.5 0 01-1.8 2.4zm-16 0v3.2h-1.7v-3.2a2.6 2.6 0 01-1.7-1.6h-4V276h4c.4-1 1.3-1.7 2.5-1.7s2.2.7 2.5 1.7h4v1.6h-4a2.5 2.5 0 01-1.6 1.6zm8.8 33.8a15.7 15.7 0 01-4.8 2.6l-.4-1.6a13.7 13.7 0 004-2l1.2 1m.8 1.4a17.4 17.4 0 01-4.8 2.6l1.2 1.1a18.7 18.7 0 004-2l-.4-1.7m-27.4-31.4l-1.7.5v4.3l1.7.5v-5.2m1.7 0l1.6.4v4.3l-1.6.5V283m30.5 0l-1.7.5v4.3l1.7.5V283"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#c8b100",
    strokeWidth: ".3",
    d: "M247.1 283.1l1.7.5v4.3l-1.7.5V283m-8.6 22l-1.6.7-2.9-3.3 1-1.4 3.5 4m1.3-1l1-1.4-3-3.3-1.6.7 3.6 4m-18.2-20l1.6-.7 3 3.3-1 1.4-3.6-4m-1.3 1l-1 1.4 3 3.3 1.6-.7-3.6-4m18.5-1.1l-1.6-.7-3 3.3 1 1.4 3.6-4m1.2 1l1 1.4-3 3.2-1.5-.6 3.5-4m-20.3 9l.5-1.6h4.5l.5 1.6h-5.5m0 1.5l.5 1.6h4.5l.5-1.6h-5.5M213 277c0-.6.5-1 1.2-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1.2-1zm12.1.8l-.5 1.6h-4.5l-.5-1.6h5.5m0-1.6l-.5-1.6h-4.5l-.5 1.6h5.5m20.1 18.5c0-.5.5-1 1.1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1.1-1 1.1a1 1 0 01-1.2-1zm-4.4-.7l-.5-1.6h-4.5l-.5 1.6h5.5m0 1.5l-.5 1.6h-4.5l-.5-1.6h5.5m-11.6 21.9c0-.6.5-1 1.1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1.1 1.1 0 01-1.2-1zm1.9-7.8l1.7-.4v-4.3l-1.7-.5v5.2m-1.6 0l-1.7-.4v-4.3l1.7-.5v5.2m15.7-32.6c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm-16.1 0c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm6.2.8l.5 1.6h4.6l.5-1.6h-5.5m0-1.6l.4-1.6h4.6l.5 1.6h-5.5m-6 5l-1.6.5v4.3l1.6.5V281m1.7 0l1.6.5v4.3l-1.6.5V281"
  }), ESFlag_jsx("path", {
    fill: "#058e6e",
    d: "M227.7 294.7a2.6 2.6 0 012.6-2.5 2.6 2.6 0 012.6 2.5 2.6 2.6 0 01-2.6 2.4c-1.4 0-2.6-1-2.6-2.4"
  }), ESFlag_jsx("path", {
    fill: "#db4446",
    d: "M230.9 229.7v-.6l.1-.3-2.3-.1a5.9 5.9 0 01-2.3-1.2c-.8-.7-1.1-1-1.6-1.2-1.3-.2-2.3.4-2.3.4s1 .4 1.7 1.3 1.5 1.3 1.8 1.4c.6.2 2.6 0 3.1.1l1.8.2"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M230.9 229.7v-.6l.1-.3-2.3-.1a5.9 5.9 0 01-2.3-1.2c-.8-.7-1.1-1-1.6-1.2-1.3-.2-2.3.4-2.3.4s1 .4 1.7 1.3 1.5 1.3 1.8 1.4c.6.2 2.6 0 3.1.1l1.8.2z"
  }), ESFlag_jsx("path", {
    fill: "#ed72aa",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M238.1 227.5v1.4c.2.6-.1 1.2 0 1.5 0 .4.1.6.3.9l.2.9-.7-.5-.6-.4v1c.1.2.3.8.6 1.1l1 1.3c.2.5.1 1.4.1 1.4s-.4-.7-.8-.8l-1.2-.7s.7.8.7 1.5c0 .8-.3 1.6-.3 1.6s-.3-.7-.8-1.1l-1-.9s.4 1.2.4 2v2.3l-.9-1-1-.7c0-.2.5.6.6 1.1 0 .5.3 2.3 1.8 4.5 1 1.3 2.3 3.6 5.3 2.9 3-.8 1.9-4.8 1.3-6.7a16.8 16.8 0 01-1-4.6c0-.8.6-2.9.5-3.3a8 8 0 01.2-3.1c.4-1.3.7-1.8.9-2.3.2-.6.4-.9.4-1.3l.1-1.3.7 1.3.1 1.5s.1-1 1-1.6c.8-.6 1.8-1.1 2-1.4.3-.3.3-.5.3-.5s0 1.8-.6 2.6l-1.7 2s.7-.3 1.2-.3h.9s-.6.4-1.4 1.6c-.8 1-.5 1.2-1 2.1-.6 1-1 1-1.7 1.5-1 .8-.5 4.2-.4 4.7.2.5 2 4.5 2 5.5s.2 3.2-1.5 4.6c-1.1 1-3 1-3.4 1.2-.4.3-1.2 1.1-1.2 2.8 0 1.7.6 2 1 2.4.6.5 1.2.2 1.3.6.2.3.2.5.5.7.2.2.3.4.2.8 0 .3-.8 1.1-1.1 1.7l-.8 2.4c0 .2-.1 1 .1 1.3 0 0 .9 1 .3 1.2-.4.2-.8-.2-1-.2l-.9.5c-.3-.1-.3-.3-.4-.8l-.1-.7c-.2 0-.3.2-.4.5 0 .2 0 .8-.3.8-.2 0-.5-.4-.8-.5-.2 0-.8-.2-.8-.4 0-.3.4-.9.7-1 .4 0 .8-.3.5-.5s-.5-.2-.7 0-.8 0-.7-.2v-.8c0-.2-.4-.5.1-.8.6-.3.8.2 1.4.1.6 0 .8-.3 1-.6.2-.3.2-1-.2-1.4-.4-.5-.7-.5-.9-.8l-.3-.9v2.2l-.7-.8c-.3-.3-.6-1.3-.6-1.3v1.3c0 .4.3.7.2.8-.1.1-.8-.7-1-.8a3.7 3.7 0 01-1-1l-.4-1.4a4.2 4.2 0 010-1.5l.4-1h-1.4c-.7 0-1.2-.3-1.5.2-.3.5-.2 1.5.2 2.8.3 1.2.5 1.9.4 2.1a3 3 0 01-.7.8h-.9a2.5 2.5 0 00-1.2-.3h-1.3l-1.1-.3c-.3.1-.8.3-.6.7.2.6-.2.7-.5.7l-.9-.2c-.4-.1-.9 0-.8-.4 0-.4.2-.4.4-.7.2-.3.2-.5 0-.5h-.6c-.2.2-.5.5-.8.4-.2-.1-.4-.4-.4-1s-.7-1.2 0-1.1c.5 0 1.3.4 1.4 0 .2-.3 0-.4-.2-.7s-.8-.4-.3-.7l.7-.5c.1-.2.4-.8.7-.6.6.2 0 .7.6 1.3.6.7 1 1 2 .8 1 0 1.3-.2 1.3-.5l-.1-1v-1s-.4.3-.5.6l-.4.8v-2a8 8 0 00-.2-.8l-.3.9-.1 1s-.7-.5-.5-1.5c.1-.7-.1-1.6.1-2 .2-.3.7-1.5 2-1.6h2.6l2-.3s-2.8-1.4-3.5-1.9a9.5 9.5 0 01-2-2l-.6-1.6s-.5 0-1 .3a5 5 0 00-1.2 1l-.7 1 .1-1.2v-.8s-.4 1.2-1 1.7l-1.4 1v-.8l.2-1s-.4.8-1.1 1c-.7 0-1.8 0-1.9.4 0 .5.2 1 0 1.4 0 .3-.4.5-.4.5l-.8-.4c-.4 0-.7.2-.7.2s-.3-.4-.2-.7c.1-.2.7-.6.5-.8l-.8.2c-.3.1-.8.3-.8-.2 0-.4.2-.7 0-1 0-.3 0-.5.2-.6l1.2-.1c0-.2-.2-.5-.8-.6-.6-.1-.8-.5-.5-.8.3-.2.3-.3.5-.6.1-.2.2-.7.7-.5.5.3.4.8 1 1a4 4 0 002-.2l1.5-1 1.5-1-1-.8c-.3-.3-.7-.9-1-1a8.3 8.3 0 00-1.8-.6 9 9 0 01-1.7-.5l.8-.3c.2-.2.6-.6.8-.6h.3-1.4c-.3-.1-1-.6-1.3-.6l-.8.1s.8-.4 1.4-.5l1-.1s-.9-.3-1.1-.6l-.6-1c-.2-.1-.3-.5-.6-.5l-1 .3c-.4 0-.6-.2-.6-.6l-.1-.5c-.2-.3-.6-.8-.2-1h1.4c0-.2-.5-.6-.8-.8-.4-.2-1-.5-.7-.8l.8-.5c.2-.3.3-1 .7-.7.4.2.8 1.2 1.1 1.1.3 0 .3-.8.3-1 0-.4 0-1 .2-.9.3 0 .5.4 1 .5.4 0 1-.1 1 .2 0 .3-.3.7-.6 1-.3.3-.4 1-.3 1.4.2.5.7 1.2 1.2 1.4.4.3 1.2.5 1.7.9.5.3 1.7 1.2 2.1 1.3l.8.4s.5-.2 1.1-.2c.7 0 2.1 0 2.6-.2.6-.2 1.3-.6 1-1-.1-.6-1.3-1-1.2-1.4 0-.4.5-.4 1.2-.4.8 0 1.8.1 2-1 .2-1 .2-1.5-.8-1.8-1-.2-1.8-.2-2-1-.2-.7-.4-.9-.2-1.1.3-.2.6-.3 1.4-.4.8 0 1.6 0 1.9-.2.2-.2.3-.7.6-.9.3-.2 1.4-.4 1.4-.4s1.4.7 2.7 1.7a15 15 0 012.2 2.1"
  }), ESFlag_jsx("path", {
    d: "M228.1 226.8l-.2-.6v-.3s.8 0 .7.3c0 .2-.2.2-.3.3l-.2.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M228.1 226.8l-.2-.6v-.3s.8 0 .7.3c0 .2-.2.2-.3.3l-.2.3z"
  }), ESFlag_jsx("path", {
    d: "M232 225.4v-.4s.7 0 1 .3c.5.4.9 1 .9 1l-.8-.4h-.5l-.3-.1v-.3h-.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M232 225.4v-.4s.7 0 1 .3c.5.4.9 1 .9 1l-.8-.4h-.5l-.3-.1v-.3h-.3z"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M237.3 231.3l-.4-.7a8 8 0 01-.3-.4"
  }), ESFlag_jsx("path", {
    fill: "#db4446",
    d: "M217.4 226.6s.5.4.8.4h.8s.2-.5.1-.8c-.2-1.2-1.2-1.4-1.2-1.4s.3.7.1 1a2 2 0 01-.6.8"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M217.4 226.6s.5.4.8.4h.8s.2-.5.1-.8c-.2-1.2-1.2-1.4-1.2-1.4s.3.7.1 1a2 2 0 01-.6.8z"
  }), ESFlag_jsx("path", {
    fill: "#db4446",
    d: "M215.2 227.6s-.4-.7-1.3-.6c-.8 0-1.4.8-1.4.8h1.2c.3.3.4 1 .4 1l.7-.6a7.2 7.2 0 00.4-.6"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M215.2 227.6s-.4-.7-1.3-.6c-.8 0-1.4.8-1.4.8h1.2c.3.3.4 1 .4 1l.7-.6a7.2 7.2 0 00.4-.6z"
  }), ESFlag_jsx("path", {
    fill: "#db4446",
    d: "M214.2 230.6s-.8.1-1.2.6c-.4.5-.3 1.3-.3 1.3s.4-.5.9-.5l1 .2-.1-.8-.3-.8"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M214.2 230.6s-.8.1-1.2.6c-.4.5-.3 1.3-.3 1.3s.4-.5.9-.5l1 .2-.1-.8-.3-.8z"
  }), ESFlag_jsx("path", {
    d: "M228.2 230.5l.3-.5.3.5h-.7"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M228.2 230.5l.3-.5.3.5h-.7"
  }), ESFlag_jsx("path", {
    d: "M229 230.5l.3-.5.4.5h-.8"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M229 230.5l.3-.5.4.5h-.8"
  }), ESFlag_jsx("path", {
    d: "M228.6 227.3l.8.3-.7.4-.1-.6"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M228.6 227.3l.8.3-.7.4-.1-.6"
  }), ESFlag_jsx("path", {
    d: "M229.5 227.6l.7.2-.5.4-.2-.6"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M229.5 227.6l.7.2-.5.4-.2-.6"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M224.2 233.7s-.7.2-1 .6c-.4.5-.3 1-.3 1s.6-.5 1.5-.3l1.2.3 1.3-.3s-.7.8-.7 1.3l.2 1.1c0 .7-.6 1.6-.6 1.6l1-.3a4.6 4.6 0 001.7-.8l.9-1s-.2 1 0 1.4l.2 1.6.8-.6c.2-.1.7-.4.9-.7l.3-1s0 .8.4 1.3l.6 1.6s.3-.8.6-1.1c.3-.4.7-.8.7-1a4.3 4.3 0 00-.1-.9l.4.8m-11 .6s.5-.8 1-1l1.1-.8.9-.4m1 5l1.3-.8a4 4 0 001-1"
  }), ESFlag_jsx("path", {
    fill: "#db4446",
    d: "M216.6 240.4s-.4-.5-1.1-.3c-.7 0-1.2.9-1.2.9s.6-.2 1-.1.6.4.6.4l.4-.4.3-.6"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M216.6 240.4s-.4-.5-1.1-.3c-.7 0-1.2.9-1.2.9s.6-.2 1-.1.6.4.6.4l.4-.4.3-.6z"
  }), ESFlag_jsx("path", {
    fill: "#db4446",
    d: "M215.8 243.2s-.6 0-1.1.3c-.5.4-.5 1.2-.5 1.2s.4-.4.8-.3l.9.2v-.6c.2-.4-.1-.8-.1-.8"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M215.8 243.2s-.6 0-1.1.3c-.5.4-.5 1.2-.5 1.2s.4-.4.8-.3l.9.2v-.6c.2-.4-.1-.8-.1-.8z"
  }), ESFlag_jsx("path", {
    fill: "#db4446",
    d: "M217.2 245.8s0 .8.3 1.3c.4.5 1.1.5 1.1.5l-.3-.7c0-.4.3-.8.3-.8s-.3-.3-.7-.3h-.7"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M217.2 245.8s0 .8.3 1.3c.4.5 1.1.5 1.1.5l-.3-.7c0-.4.3-.8.3-.8s-.3-.3-.7-.3h-.7zm16 1.3s2 1.2 1.9 2.2c0 1-1 2.3-1 2.3"
  }), ESFlag_jsx("path", {
    fill: "#db4446",
    d: "M224.2 252.6s-.4-.6-1.1-.6c-.7 0-1.4.7-1.4.7s.8-.1 1 .2l.5.6.5-.3.5-.6"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M224.2 252.6s-.4-.6-1.1-.6c-.7 0-1.4.7-1.4.7s.8-.1 1 .2l.5.6.5-.3.5-.6z"
  }), ESFlag_jsx("path", {
    fill: "#db4446",
    d: "M222.2 255.3s-1-.1-1.4.3c-.4.5-.4 1.3-.4 1.3s.6-.6 1-.5c.5 0 1 .3 1 .3v-.7l-.3-.7"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M222.2 255.3s-1-.1-1.4.3c-.4.5-.4 1.3-.4 1.3s.6-.6 1-.5c.5 0 1 .3 1 .3v-.7l-.3-.7z"
  }), ESFlag_jsx("path", {
    fill: "#db4446",
    d: "M224 258.1s-.3.7 0 1.1c.3.5 1 .8 1 .8s-.3-.4-.2-.8c.1-.3.7-.8.7-.8l-1.4-.2"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M224 258.1s-.3.7 0 1.1c.3.5 1 .8 1 .8s-.3-.4-.2-.8c.1-.3.7-.8.7-.8l-1.4-.2z"
  }), ESFlag_jsx("path", {
    fill: "#db4446",
    d: "M236 259.3s-.8-.2-1.2 0c-.5.3-.8 1.4-.8 1.4s.7-.6 1.2-.5c.5 0 1 .3 1 .3v-.8l-.2-.4"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M236 259.3s-.8-.2-1.2 0c-.5.3-.8 1.4-.8 1.4s.7-.6 1.2-.5c.5 0 1 .3 1 .3v-.8l-.2-.4z"
  }), ESFlag_jsx("path", {
    fill: "#db4446",
    d: "M236.4 262.2s-.6.6-.4 1.1l.6 1s0-.7.2-1l1-.3-.7-.5a15.8 15.8 0 01-.7-.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M236.4 262.2s-.6.6-.4 1.1l.6 1s0-.7.2-1l1-.3-.7-.5a15.8 15.8 0 01-.7-.3z"
  }), ESFlag_jsx("path", {
    fill: "#db4446",
    d: "M239.4 263s-.3.8.2 1.3c.6.5 1 .5 1 .5s-.3-.7-.2-1.1c.1-.5.5-.7.5-.7l-.8-.2-.7.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M239.4 263s-.3.8.2 1.3c.6.5 1 .5 1 .5s-.3-.7-.2-1.1c.1-.5.5-.7.5-.7l-.8-.2-.7.3z"
  }), ESFlag_jsx("path", {
    fill: "#ffd691",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M208.8 316.4c2 .6 3 2 3 3.8 0 2.3-2.2 4-5 4-3 0-5.3-1.7-5.3-4 0-1.7 1-3.6 3-3.8l-.2-.4-.7-.7h1.2l.8.5.5-.7c.3-.4.6-.5.6-.5l.6.6.3.5.7-.4.8-.3s0 .4-.2.7l-.1.7"
  }), ESFlag_jsx("path", {
    fill: "#058e6e",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M206.3 326.7s-3.8-2.6-5.5-3c-2-.4-4.5 0-5.5 0 0 0 1.2.8 1.8 1.4.5.5 2.3 1.5 3.3 1.8 3 .8 6-.2 6-.2m1 .2s2.4-2.5 5-2.9c3-.4 5 .3 6.2.6l-1.5.8c-.5.3-2 1.5-4 1.6-2 0-4.4-.3-4.8-.2l-.9.1"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M206.7 323.8a4.8 4.8 0 010-7.1 4.8 4.8 0 011.5 3.5 4.9 4.9 0 01-1.5 3.6"
  }), ESFlag_jsx("path", {
    fill: "#058e6e",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M205.7 329s.6-1.5.6-2.7l-.1-2.1h.8s.3 1.1.3 2l-.1 2.4-.7.1-.8.3"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M254 190.7c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M254 190.7c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M255.4 188.2c0-.6.5-1 1.1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M255.4 188.2c0-.6.5-1 1.1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M256.4 185.2c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M256.4 185.2c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M256.5 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M256.5 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M255.7 179c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M255.7 179c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M254.1 176.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M254.1 176.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M252 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M252 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M249.4 171.8c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M249.4 171.8c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M246.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M246.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M243.3 169.1c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M243.3 169.1c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M239.9 168.5c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M239.9 168.5c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M236.6 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M236.6 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M233.3 168.5c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M233.3 168.5c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M230.1 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M230.1 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M231.7 171.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1m.6 3.1c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1m0 3c0-.5.6-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1m-1 2.8c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1 0 .6-.4 1-1 1a1 1 0 01-1-1m-1.9 2.6c0-.5.5-1 1-1 .7 0 1.2.5 1.2 1s-.5 1-1.1 1c-.6 0-1-.4-1-1"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M227.6 166.5c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M227.6 166.5c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M224.8 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M224.8 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M221.6 164c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.5 1-1 1-.6 0-1.1-.5-1.1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M221.6 164c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.5 1-1 1-.6 0-1.1-.5-1.1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M218.3 163.4c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M218.3 163.4c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M215 163.5c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M215 163.5c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M211.7 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M211.7 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M208.6 165.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M208.6 165.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M156 190.7c0-.5.4-1 1-1s1 .5 1 1c0 .6-.4 1-1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M156 190.7c0-.5.4-1 1-1s1 .5 1 1c0 .6-.4 1-1 1a1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M154.5 188.2c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M154.5 188.2c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M153.5 185.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M153.5 185.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M153.4 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M153.4 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M154.2 179c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M154.2 179c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M155.8 176.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M155.8 176.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M158 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M158 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M160.5 171.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M160.5 171.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M163.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M163.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M166.6 169.1c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M166.6 169.1c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M170 168.5c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M170 168.5c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M173.4 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M173.4 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M176.6 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M176.6 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M179.8 168.5c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M179.8 168.5c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M178.2 171.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1m-.7 3.1c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1m-.2 3c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1m.9 2.8c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1.1-1m1.8 2.6c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M182.3 166.5c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M182.3 166.5c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M185.2 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M185.2 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M188.3 164c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1 0 .5-.4 1-1 1s-1-.5-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M188.3 164c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1 0 .5-.4 1-1 1s-1-.5-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M191.6 163.4c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M191.6 163.4c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M194.9 163.5c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M194.9 163.5c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M198.2 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M198.2 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#fff",
    d: "M201.3 165.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M201.3 165.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M174.7 228.9h-1v-1h-1.5v3.6h1.6v2.5h-3.4v7h1.8v14.3h-3.5v7.3h27.2v-7.3h-3.5V241h1.8v-7h-3.4v-2.5h1.6V228h-1.6v.9h-.8v-1h-1.6v1h-1.1v-1h-1.6v3.6h1.6v2.5H184v-7.8h1.7v-3.5H184v.9h-1v-1h-1.5v1h-.9v-1H179v3.6h1.7v7.8h-3.3v-2.5h1.6V228h-1.6v.9h-.9v-1h-1.8v1zm-6 33.7H196m-27.3-1.8H196m-27.3-1.8H196m-27.3-1.7H196m-27.3-2H196m-23.8-1.6h20.2m-20.2-1.8h20.2m-20.2-2h20.2m-20.2-1.7h20.2m-20.2-1.8h20.2m-20.2-1.8h20.2m-20.2-1.7h20.2m-22-1.8h23.8m-23.8-1.8h23.8m-23.8-1.8h23.8m-23.8-1.8h23.8m-20.4-1.7h17m-10.2-1.8h3.4m-3.4-1.8h3.4m-3.4-1.8h3.4m-3.4-1.7h3.4m-5.1-2.2h6.8m-12 7.5h3.6m-5-2.2h6.6m-6.7 32.6v-1.8m0-1.8v-1.7m-1.8 1.7v1.8m3.4 0V259m1.7 3.6v-1.8m0-1.8v-1.7m0-2v-1.6m0-1.8v-2m-1.7 7.4v-2m-3.4 2v-2m7 0v2m1.5-2v-1.6m-5.1-1.8v1.8m3.5-1.8v1.8m3.3-1.8v1.8M179 252v-2m1.7-1.7v1.7m0-5.3v1.8m-1.7-3.6v1.8m1.7-3.5v1.7m-3.3-1.7v1.7m-3.5-1.7v1.7m-1.6-3.5v1.8m3.3-1.8v1.8m3.4-1.8v1.8m1.7-3.6v1.8m-3.3-1.8v1.8m-3.5-1.8v1.8m-1.6-3.6v1.8m6.7-1.8v1.8m-3.4-5.3v1.8m15.3-1.8h-3.5m5-2.2h-6.6m6.7 32.6v-1.8m0-1.8v-1.7m1.8 1.7v1.8m-3.4 0V259m-1.7 3.6v-1.8m0-1.8v-1.7m0-2v-1.6m0-1.8v-2m1.7 7.4v-2m3.4 2v-2m-7 0v2m-1.5-2v-1.6m5.1-1.8v1.8m-3.5-1.8v1.8m-3.3-1.8v1.8m1.7-1.8v-2m-1.7-1.7v1.7m0-5.3v1.8m1.7-3.6v1.8m-1.7-3.5v1.7m3.3-1.7v1.7m3.5-1.7v1.7m1.6-3.5v1.8m-3.3-1.8v1.8m-3.4-1.8v1.8m-1.7-3.6v1.8m3.3-1.8v1.8m3.5-1.8v1.8m1.6-3.6v1.8m-6.7-1.8v1.8m3.4-5.3v1.8m-7 18v-2m0-5.4v-1.8m0 5.4v-1.8m0-5.3v-1.8m0-1.8v-1.7m0-3.6v-1.8m0-1.7v-1.8m-8.3 4.6h3.5m3.3-5.3h3.4m3.3 5.3h3.5"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M186.8 262.6v-4.7c0-.8-.4-3.5-4.6-3.5-4 0-4.4 2.7-4.4 3.5v4.7h9z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M179.3 258.2l-2.2-.3c0-.9.2-2.2.9-2.6l2 1.5c-.3.2-.7 1-.7 1.4zm6 0l2.2-.3c0-.9-.2-2.2-.9-2.6l-2 1.5c.3.2.7 1 .7 1.4zm-2.2-2.3l1-2a5.3 5.3 0 00-2-.4l-1.7.4 1.1 2h1.6zm-4.2-5.5v-4.9c0-1.3-1-2.4-2.5-2.4s-2.4 1-2.4 2.4v4.9h4.9zm6.8 0v-4.9c0-1.3 1-2.4 2.5-2.4s2.4 1 2.4 2.4v4.9h-4.9zm-1.7-12l.4-4.4h-4.2l.2 4.4h3.6zm3.3 0l-.4-4.4h4.4l-.5 4.4h-3.5zm-10 0l.2-4.4h-4.2l.5 4.4h3.5z"
  }), ESFlag_jsx("path", {
    fill: "#0039f0",
    d: "M185.3 262.6v-4c0-.7-.5-2.7-3.1-2.7-2.4 0-2.9 2-2.9 2.7v4h6zm-6.9-12.7v-4.2c0-1-.6-2.2-2-2.2s-2 1.1-2 2.2v4.3h4zm7.8 0v-4.2c0-1 .7-2.2 2-2.2s2 1.1 2 2.2v4.3h-4z"
  }), ESFlag_jsx("path", {
    fill: "#ad1519",
    d: "M190.8 269.8c0-9.7 7-17.6 15.6-17.6s15.6 7.9 15.6 17.6-7 17.5-15.6 17.5-15.6-7.8-15.6-17.5"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".6",
    d: "M190.8 269.8c0-9.7 7-17.6 15.6-17.6s15.6 7.9 15.6 17.6-7 17.5-15.6 17.5-15.6-7.8-15.6-17.5z"
  }), ESFlag_jsx("path", {
    fill: "#005bbf",
    d: "M195.4 269.7c0-7 5-12.8 11-12.8s11 5.7 11 12.8c0 7.2-5 13-11 13s-11-5.8-11-13"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".6",
    d: "M195.4 269.7c0-7 5-12.8 11-12.8s11 5.7 11 12.8c0 7.2-5 13-11 13s-11-5.8-11-13z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M201.2 260.9s-1.3 1.4-1.3 2.7a6 6 0 00.6 2.4c-.2-.5-.8-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.1-.3.5-.5 1-.5s1 .4 1 1a.9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.7 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M201.2 260.9s-1.3 1.4-1.3 2.7a6 6 0 00.6 2.4c-.2-.5-.8-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.1-.3.5-.5 1-.5s1 .4 1 1a.9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.7 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M199.2 269.9h4.1v-1h-4.1v1z"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M199.2 269.9h4.1v-1h-4.1v1z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M211.4 260.9s-1.3 1.4-1.3 2.7c0 1.3.6 2.4.6 2.4-.2-.5-.7-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.2-.3.5-.5 1-.5a1 1 0 011 1 .9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.8.8 0 010-.3 1 1 0 011-1c.4 0 .8.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.6 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M211.4 260.9s-1.3 1.4-1.3 2.7c0 1.3.6 2.4.6 2.4-.2-.5-.7-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.2-.3.5-.5 1-.5a1 1 0 011 1 .9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.8.8 0 010-.3 1 1 0 011-1c.4 0 .8.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.6 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M209.4 269.9h4.1v-1h-4.1v1z"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M209.4 269.9h4.1v-1h-4.1v1z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M206.3 269.6s-1.3 1.5-1.3 2.8.6 2.4.6 2.4c-.2-.5-.7-.9-1.4-.9-.8 0-1.4.6-1.4 1.4l.2.7.5 1c.1-.4.5-.6 1-.6a1 1 0 011 1 .9.9 0 010 .3h-1.2v1h1l-.8 1.5 1-.4.8.9.8-1 1 .5-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.2.9.6l.5-1 .2-.7a1.4 1.4 0 00-1.4-1.4c-.7 0-1.2.4-1.4 1 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M206.3 269.6s-1.3 1.5-1.3 2.8.6 2.4.6 2.4c-.2-.5-.7-.9-1.4-.9-.8 0-1.4.6-1.4 1.4l.2.7.5 1c.1-.4.5-.6 1-.6a1 1 0 011 1 .9.9 0 010 .3h-1.2v1h1l-.8 1.5 1-.4.8.9.8-1 1 .5-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.2.9.6l.5-1 .2-.7a1.4 1.4 0 00-1.4-1.4c-.7 0-1.2.4-1.4 1 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M204.3 278.6h4.1v-1h-4.1v1z"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M204.3 278.6h4.1v-1h-4.1v1z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M237.6 223.4h-.3a1.5 1.5 0 01-.3.4c-.2.2-.6.2-.8 0a.5.5 0 01-.1-.4.5.5 0 01-.5 0c-.3-.1-.3-.5-.1-.7v-.5h-.3l-.1.2c-.2.3-.5.3-.7.2a.6.6 0 010-.2h-.3c-.5.2-.7-1-.7-1.2l-.2.2s.2.7.1 1.2c0 .6-.3 1.2-.3 1.2a9 9 0 012.9 1.6 9 9 0 012.2 2.3l1.2-.5c.6-.2 1.3-.2 1.3-.2l.2-.2c-.3 0-1.5.1-1.5-.4v-.2a.7.7 0 01-.2 0c-.2-.2-.2-.4 0-.7l.2-.1v-.3h-.3l-.2.1c-.2.3-.6.3-.8 0a.4.4 0 01-.1-.4.6.6 0 01-.5 0c-.2-.2-.3-.5 0-.8l.2-.3v-.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M237.6 223.4h-.3a1.5 1.5 0 01-.3.4c-.2.2-.6.2-.8 0a.5.5 0 01-.1-.4.5.5 0 01-.5 0c-.3-.1-.3-.5-.1-.7v-.5h-.3l-.1.2c-.2.3-.5.3-.7.2a.6.6 0 010-.2h-.3c-.5.2-.7-1-.7-1.2l-.2.2s.2.7.1 1.2c0 .6-.3 1.2-.3 1.2a9 9 0 012.9 1.6 9 9 0 012.2 2.3l1.2-.5c.6-.2 1.3-.2 1.3-.2l.2-.2c-.3 0-1.5.1-1.5-.4v-.2a.7.7 0 01-.2 0c-.2-.2-.2-.4 0-.7l.2-.1v-.3h-.3l-.2.1c-.2.3-.6.3-.8 0a.4.4 0 01-.1-.4.6.6 0 01-.5 0c-.2-.2-.3-.5 0-.8l.2-.3v-.3z"
  }), ESFlag_jsx("path", {
    d: "M235.4 224h.2v.3h-.1c-.1 0-.1-.2 0-.2"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M235.4 224h.2v.3h-.1c-.1 0-.1-.2 0-.2z"
  }), ESFlag_jsx("path", {
    d: "M236.3 224.8l-.3-.2v-.2h.1l.4.3.3.2v.2h-.2l-.3-.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M236.3 224.8l-.3-.2v-.2h.1l.4.3.3.2v.2h-.2l-.3-.3"
  }), ESFlag_jsx("path", {
    d: "M234.6 223.7l-.2-.2s-.1 0 0-.1l.3.1.3.1v.2h-.1l-.3-.1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M234.6 223.7l-.2-.2s-.1 0 0-.1l.3.1.3.1v.2h-.1l-.3-.1"
  }), ESFlag_jsx("path", {
    d: "M233.7 223h.2v.2h-.2s-.1-.1 0-.2"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M233.7 223h.2v.2h-.2s-.1-.1 0-.2z"
  }), ESFlag_jsx("path", {
    d: "M237.3 225.5v-.2h-.3l.1.2h.2"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M237.3 225.5v-.2h-.3l.1.2h.2z"
  }), ESFlag_jsx("path", {
    d: "M237.9 226.2l.2.2h.1c.1 0 0-.1 0-.2l-.2-.2-.2-.2h-.1v.2l.2.2"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M237.9 226.2l.2.2h.1c.1 0 0-.1 0-.2l-.2-.2-.2-.2h-.1v.2l.2.2"
  }), ESFlag_jsx("path", {
    d: "M238.8 227v-.3h-.3v.2h.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M238.8 227v-.3h-.3v.2h.3z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M236.2 221.1h-.6l-.1.9v.1h.2l.7-.5-.3-.5"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M236.2 221.1h-.6l-.1.9v.1h.2l.7-.5-.3-.5"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M234.6 221.6v.5l.9.1h.1v-.2l-.5-.7-.5.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M234.6 221.6v.5l.9.1h.1v-.2l-.5-.7-.5.3"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M236.4 222.6l-.4.3-.6-.7v-.1h1.1v.5"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M236.4 222.6l-.4.3-.6-.7v-.1h1.1v.5"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M235.3 222a.3.3 0 01.4 0 .3.3 0 010 .3.3.3 0 01-.3 0 .3.3 0 01-.1-.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M235.3 222a.3.3 0 01.4 0 .3.3 0 010 .3.3.3 0 01-.3 0 .3.3 0 01-.1-.3z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M233.2 221.1l-.2-.7-.4-.4s.4-.2.8.1c.4.3 0 .9 0 .9l-.2.1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M233.2 221.1l-.2-.7-.4-.4s.4-.2.8.1c.4.3 0 .9 0 .9l-.2.1z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M234.2 221.4l-.4.4-.6-.6v-.2h1v.4"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M234.2 221.4l-.4.4-.6-.6v-.2h1v.4"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M233.1 221l.3-.1v.3c0 .2-.1.2-.2.2l-.1-.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M233.1 221l.3-.1v.3c0 .2-.1.2-.2.2l-.1-.3z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M238.3 222.5h-.5l-.3.7v.2h.2l.8-.4-.2-.5"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M238.3 222.5h-.5l-.3.7v.2h.2l.8-.4-.2-.5"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M236.7 222.8v.5l.8.2h.1v-.2l-.4-.7-.5.2"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M236.7 222.8v.5l.8.2h.1v-.2l-.4-.7-.5.2"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M238.4 224l-.5.2-.4-.7v-.2h.1l.9.2-.1.5"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M238.4 224l-.5.2-.4-.7v-.2h.1l.9.2-.1.5"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M237.3 223.2h.4a.3.3 0 010 .4.3.3 0 01-.3 0 .3.3 0 010-.4"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M237.3 223.2h.4a.3.3 0 010 .4.3.3 0 01-.3 0 .3.3 0 010-.4z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M240.2 224.3l.1.5-.8.3h-.2v-.2l.4-.8.5.2"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M240.2 224.3l.1.5-.8.3h-.2v-.2l.4-.8.5.2"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M240 225.8l-.5.1-.3-.8v-.1h.2l.8.3-.1.5"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M240 225.8l-.5.1-.3-.8v-.1h.2l.8.3-.1.5"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M238.6 224.3l-.2.5.9.3h.1v-.1l-.3-.8-.5.1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M238.6 224.3l-.2.5.9.3h.1v-.1l-.3-.8-.5.1"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M239.5 225.2a.3.3 0 000-.3.3.3 0 00-.4 0 .3.3 0 000 .3.3.3 0 00.4 0"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M239.5 225.2a.3.3 0 000-.3.3.3 0 00-.4 0 .3.3 0 000 .3.3.3 0 00.4 0z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M240.8 227h.8l.5.3s.1-.4-.3-.7c-.3-.3-.8.2-.8.2l-.2.2"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M240.8 227h.8l.5.3s.1-.4-.3-.7c-.3-.3-.8.2-.8.2l-.2.2z"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M240.3 226.1l-.3.5.8.5v-.1h.2l-.1-1-.6.1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M240.3 226.1l-.3.5.8.5v-.1h.2l-.1-1-.6.1"
  }), ESFlag_jsx("path", {
    fill: "#c8b100",
    d: "M241 227s.1-.1 0-.2h-.3c-.2 0-.2.1-.1.2h.3"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M241 227s.1-.1 0-.2h-.3c-.2 0-.2.1-.1.2h.3zm38-21.9v.6h-2.4v-.6h1v-1.3h-.7v-.5h.6v-.6h.6v.6h.6v.6h-.6v1.2h1"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "0",
    d: "M134.4 217.1v-1.2m-.4 1.2v-1.2m-.2 1.2v-1.2m-.3 1.2v-1.2"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M133.2 217.1v-1.2m-.5 1.1v-1m.2 1v-1m-.7 1v-1m.2 1v-1m-.9 1v-1m.2 1v-1m.3 1v-1m-.7 1v-1m-.3.9v-.8m-.1.8v-.8m-.5.7v-.6m.2.6v-.6m-.4.5v-.5m-.2.5v-.4m-.3.3v-.3m-.3.3v-.2"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M129.2 216.6v-.2"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "0",
    d: "M135.7 217v-1m-.5 1v-1m-.4 1.2V216m143 1.1V216m-.4 1.1V216m-.3 1.1V216m-.3 1.2V216"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M276.6 217.1V216m-.6 1v-1m.3 1v-1m-.8 1v-1m.3 1v-1m-.9 1v-1m.2 1v-1m.2 1v-1m-.6 1v-1m-.3.9v-.8m-.2.8v-.8m-.4.7v-.6m.2.6v-.6m-.5.6v-.6m-.2.5v-.4m-.3.4v-.4m-.2.3v-.2"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M272.6 216.6v-.2"
  }), ESFlag_jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "0",
    d: "M279.1 217v-1m-.6 1v-1m-.4 1.1V216"
  }));
};
// CONCATENATED MODULE: ./src/assets/icons/SAFlag.tsx
var SAFlag_jsx = external_react_default.a.createElement;

const SAFlag = ({
  width = '640px',
  height = '480px'
}) => {
  return SAFlag_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "flag-icon-css-sa",
    viewBox: "0 0 640 480",
    width: width,
    height: height
  }, SAFlag_jsx("defs", null, SAFlag_jsx("clipPath", {
    id: "sa-a"
  }, SAFlag_jsx("path", {
    fillOpacity: ".7",
    d: "M-85.3 0h682.6v512H-85.3z"
  }))), SAFlag_jsx("g", {
    fillRule: "evenodd",
    clipPath: "url(#sa-a)",
    transform: "translate(80) scale(.9375)"
  }, SAFlag_jsx("path", {
    fill: "#199d00",
    d: "M-128 0h768v512h-768z"
  }), SAFlag_jsx("path", {
    fill: "#fff",
    d: "M65.5 145.1c-.8 12-2 33 8.3 35.2 12.3 1.2 5.5-20.8 10-24.8.8-2 2.3-2 2.4.5v18.7c0 6 4 7.8 7 9 3.2-.2 5.4 0 6.6 3l1.6 32.3s7.4 2.2 7.8-18.1c.3-12-2.4-21.9-.8-24.2 0-2.3 3-2.4 5-1.3 3.2 2.2 4.6 5 9.6 4 7.6-2.2 12.2-5.9 12.3-11.7a47 47 0 00-3.5-16.6c.4-1-1.4-3.7-1-4.7 1.3 2.2 3.4 2 3.8 0-1.3-4.2-3.3-8.3-6.5-10-2.7-2.4-6.7-2-8 3-.8 5.7 2 12.4 6.1 18 .9 2.1 2.1 5.7 1.6 8.9-2.2 1.3-4.4.7-6.3-1.2 0 0-6-4.5-6-5.6 1.6-10.2.3-11.4-.6-14.3-.6-3.9-2.5-5.2-4-7.8-1.5-1.6-3.5-1.6-4.5 0-2.7 4.6-1.4 14.5.5 19 1.4 4.1 3.5 6.7 2.5 6.7-.8 2.3-2.5 1.7-3.8-1a66.6 66.6 0 01-2.1-17.4c-.5-4.6-1.1-14.4-4.2-17-1.8-2.4-4.5-1.2-5.5 1a82.4 82.4 0 00.3 13.4c2 7.4 2.7 14 3.7 21.5.3 10.1-5.8 4.4-5.5-.7a45 45 0 00-.3-19.4c-1-2.6-2.1-3.2-4.6-2.8-1.9 0-6.8 5.3-8.2 14.3 0 0-1.2 4.6-1.7 8.7-.7 4.6-3.7 8-5.9-.6-1.8-6.3-3-21.6-6-18z"
  }), SAFlag_jsx("path", {
    fill: "#fff",
    d: "M99 194.2l-32 15.4c.3-7.3 15.1-20.4 25.3-20.5 6.5.1 4.9 2.5 6.6 5.1z"
  }), SAFlag_jsx("path", {
    fill: "#fff",
    d: "M93.3 204.2c-16.8 43.5 39.5 49.6 45.8 1.8.6-2 3-3.9 3.4-.7-1.3 43.3-43.6 46.2-50.8 32.6a41.9 41.9 0 01-2.5-14.6c-1-8.5-5.5-5.2-6.2 3.2-.7 4.7-.5 6-.5 10.5 2.2 34.2 56.7 19.5 65.6-8.7 4.7-15.6-.8-27.1 1.7-27.1 5.4 5.8 13 .8 14.7-1.2.7-1 2.5-1.7 3.7-.4 4.2 3 11.6 1.6 13.2-3.7.9-5.3 1.6-10.7 1.8-16.2-3.5 1-6 1.7-6.3 3.2l-.7 4.6c-.3 1.5-3.2 1.5-3.4-.4-1.3-6-6.7-6.7-10 2.5-2.1 1.8-6.1 2.2-6.5-.5.5-6.2-2-7-7-4.1l-4.8-36.2c2 0 4 1.5 5.9-.9-2-6.5-6.5-19.7-9-20.7-1.1-1.4-2.1-.5-3.7-.1-2.6.8-5 3-4.2 7.4 3 18.8 5 33.1 8.1 52 .5 2.1-1.3 5-3.7 4.7-4-2.7-5-8.2-12-8-5 0-10.6 5.5-11.3 10.7-.9 4.2-1.2 8.7 0 12.3 3.5 4.2 7.7 3.8 11.4 2.9 3-1.3 5.5-4.3 6.6-3.6.7.9.1 10.9-14.3 18.5-8.7 4-15.7 4.8-19.4-2.3-2.3-4.5.2-21.4-5.6-17.5z"
  }), SAFlag_jsx("path", {
    fill: "#fff",
    d: "M165 160c3.3-1.2 19.3-19.6 19.3-19.6l-2.4-2c-.9-.7-.8-1.5 0-2.2 4-2.4 2.7-7.4.7-9.8a9.7 9.7 0 00-8.7.1c-2.8 2.7-3.4 7-1.2 9.6 2.1 1 4.2 3.2 2.8 4.4-6.6 7-24.5 19.1-22.4 19.5.4.6 11.5.6 11.8 0zm-97 65c-6 9.6-6.5 23.9-3.2 28.2 1.8 2 4.7 2.9 6.8 2.2 3.8-1.6 5.5-9.3 4.6-12-1.3-2-2.3-2.3-3.6-.7-2.6 5.4-3.7 1.7-4-1.3a70 70 0 01.8-15.2c.7-4.2 0-3-1.4-1.2zm257.1-15.3c-5.8-12.6-13.9-25-16.4-29.7a557.6 557.6 0 00-24.8-36c-6.2-7.4 10.2 3.1-2-11.7l-8.9-7.5c-2-1.4-6.8-4-7.6.2-.4 3.8-.2 5.8.4 8.9.5 2 3.5 5.5 5 7.5a565 565 0 0153.8 86.5c2.6-1.3 2-16.1.5-18.2z"
  }), SAFlag_jsx("path", {
    fill: "#fff",
    d: "M299.6 251.5c-1.2 1.3 2.8 6.8 8 6.8 8.6-1 16.2-5.8 23.2-18.6a33 33 0 005.3-14.2 317 317 0 00-5.8-72.4c-.3-2 0-4.4.2-5 .6-.7 2.5 0 3.5-1.7 1.5-1.5-4-14-7-18.7-1-2.2-1.5-3.6-3.3.2a27 27 0 00-3 13.6c4.1 28.5 5.4 53.4 8 81.9.3 2.8-.1 6.8-2 8.4a80.2 80.2 0 01-27.1 19.7zm116.5-.1c-6.2 3.6-6.2 7.7-1.2 7.8 8.6-1 18.8-1.7 25.8-12.3a41 41 0 004.2-16 303 303 0 00-4.7-71.4c-.2-2-1.1-6.7-.8-7.3.6-1.4 3.4.1 4.4-1.5 1.4-1.5-7.3-12.7-10.4-17.5-1-2.2-1.4-3.6-3.3.2a22.3 22.3 0 00-1.8 13.6c4.6 31 8 54.2 8.7 81.6-.4 2.6-.5 4-1.7 7.3-2.7 3.4-5.7 7.8-8.5 9.9-2.8 2-8.8 4-10.7 5.6z"
  }), SAFlag_jsx("path", {
    fill: "#fff",
    d: "M420.7 223.7c0-7.3.1-13.5-.1-19a34 34 0 00-3-13.5c-1.8-4.1-.7-7.4-1.6-11.8-.8-4.4-.6-11-1.8-16.1-.4-2-1.4-8.5-1.1-9.2.5-1.4 2.4 0 3.4-1.6 1.4-1.5-5-18-8.2-22.7-1.1-2.1-3.3-1.4-5.8 2-2.5 2.3-1.6 7.4-.6 12.3 6.1 32.3 10.8 61.6 9.8 92.3-.4 2.6 9-7.8 9-12.7zm-45.7-40c-3.9-.2-12-7.7-14.4-12a8 8 0 01.4-6.5c1.5-1 3.7-2 5.4-1 0 0 1.7 2.4 1.4 2.7 2 1 3 .5 3.2-.4.1-1.5-.6-2.4-.6-4 .9-4.6 6-5.3 8-2.4 1.4 1.8 2 5.5 2.1 8 0 1.3-2-.2-3.3 0-1.1.4-1.4 1.8-1.5 3-.2 3.3-.6 8.6-.7 12.5zm-71.8 48c1-9.8-.4-27.3-.5-33.1A477 477 0 00299 154c-1.2-8.4 3.4.9 2.8-4-1.5-8.3-6.1-14-11.6-21.5-1.7-2.5-1.7-3-4.4.6-3 6.7-.4 11.4.4 16.7 3.9 17.2 6.2 33 7.3 48.7a393.4 393.4 0 01.4 49c3 .1 7.6-4.7 9.3-11.8z"
  }), SAFlag_jsx("path", {
    fill: "#fff",
    d: "M434 216c-6.9-11.6-17.2-24-20-28.7a658 658 0 00-29.2-37.8c-8.5-9 4-1.5-1.6-8.5-4.7-5.1-6-6.8-10.1-9.9-2-1.3-3.2-3.8-4 .5a83 83 0 00-.2 11.2c0 1.7 1.8 5 3.4 7 20.7 25.5 43.4 51.5 61.6 84.2 2.6-1.3 1.7-16 0-18z"
  }), SAFlag_jsx("path", {
    fill: "#1ba400",
    d: "M122.6 194.7c-.5.9-1.6 2-1.2 3.1.7 1 1.4 1.3 2.6 1.3 1.1 0 2.7.3 3-.3.6-.7 1-2 .6-3.3-1.2-3-4.4-1.8-5-.8z"
  }), SAFlag_jsx("path", {
    fill: "#fff",
    d: "M354.2 362.5c9.2.4 15.2.5 23.3 1.4l9.6-1c10.6-1 11 15.1 11 15.1 0 9.5-3.7 10-8.4 11-2.7.4-4-1.6-5.5-3.6a14 14 0 01-7 .4c-3.9-.2-7.7-.2-11.5-.5-4-.3-6.2.5-10.3.1-.8 1.3-2 3.1-4.4 2.6-2-.3-4.5-6-3.8-10.5 1.5-3.2 1-2.1 1-3.5-37.6-1-75.5-2.7-112.3-2.2-28.8.1-57.2 1.3-85.7 2.5-15.2-.2-26.8-2.6-34.8-14.3.8 0 38.8 2.1 49.9 1.4 20.5-.2 39.3-1.9 60.2-2.5 41.2.7 82.1.7 123.3 3.6-4-2.7-4-9 2-10.6.5-.4.8 3.1 1.7 3 4.9-.3 2.7 6.3 1.7 7.6zM188.6 135.3c-6.2 17.8 3.6 37.4 10.4 35.5 5 2 8-7.4 10-17.6 1.5-2.9 2.5-3.2 3.2-1.7-.2 13.6 1 16.7 4.5 20.8 7.8 6 14.3.8 14.8.3l6-6.1c1.4-1.5 3.2-1.5 5.1-.3 1.9 1.7 1.6 4.6 5.6 6.6 3.4 1.4 10.5.4 12.2-2.5 2.2-3.9 2.8-5.2 3.8-6.6 1.6-2.1 4.3-1.2 4.3-.5-.3 1.2-1.9 2.3-.8 4.5 2 1.4 2.4.5 3.5.2 4-2 7-10.6 7-10.6.1-3.2-1.7-3-2.9-2.2l-3.1 2.1c-2 .3-5.7 1.6-7.6-1.3-1.9-3.4-1.9-8.3-3.3-11.8 0-.2-2.6-5.5-.2-5.8 1.2.2 3.7.9 4.1-1.2 1.2-2.1-2.6-8-5.3-11-2.3-2.5-5.5-2.8-8.6-.2-2.2 2-1.9 4.2-2.3 6.3a9.8 9.8 0 002 8.7c2.2 4.2 6.1 9.7 4.8 17.5 0 0-2.3 3.6-6.3 3.1-1.7-.3-4.4-1-5.8-11.8-1.1-8 .2-19.4-3.2-24.7-1.3-3.3-2.2-6.4-5.2-.9-.8 2.2-4.3 5.5-1.8 12.2a36 36 0 012 19c-1.5 2.2-1.8 2.9-3.7 5-2.6 3-5.5 2.2-7.7 1.1-2-1.3-3.6-2-4.6-6.5.2-7 .6-18.5-.7-20.9-1.9-3.8-5-2.4-6.3-1.2a47.7 47.7 0 00-11.5 23.5c-1.8 5.8-3.7 4.1-5 1.8-3.2-3-3.5-26.7-7.4-22.8z"
  }), SAFlag_jsx("path", {
    fill: "#fff",
    d: "M207.4 174.1c2.9-2 1.6-3.4 5.8.8a72 72 0 019.2 31.3c-.2 2.6 1.6 4.2 2.5 3.6.4-6 15.1-14.4 28.6-15.6 2-.5 1-4.4 1.3-6.4-.8-7.5 4.2-14.3 11.2-14.8 9.6 1.4 12.8 6.5 13 14.2-1.1 15-16.7 17.5-25.4 18.7-1.3.5-1.9 1.1 0 1.8l36.6.2 1.9 1c.2 1-.6.2-2 2.6a29.5 29.5 0 00-3.7 11.5c-10.9 3.6-22.2 5-33.6 6.5-4 2-6 4.7-5.2 7.7 1.4 3.3 10.2 6.7 10.2 6.8 1.7 1 3.6 3.5-.5 8.6-17.8-.8-31.7-8.4-36.5-19.1-1.4-1.1-3 0-4 1.4-7 9-13.8 17-25.7 21.4-7 1.8-14.3-1.1-17.7-5.7-2.3-2.7-2.2-5.6-3-6.2-3.9 1.7-36.9 15.7-32.7 9.1 8-8.5 22-14.9 34.2-23.3.9-2.9 2.5-12.5 7.3-15.6.3 0-.7 5.6-.6 8 0 2-.2 2.7.2 2.2.9-.5 15.7-12.2 17-15.8 1.4-2 .3-7.2.3-7.4-2.8-7.2-6.7-7.8-8.1-11.4-1.3-4.7-.7-10.1 2-11.7 2.4-2.1 5.2-1.9 7.9.5 3 2.7 5.6 8 6.4 11.9-.5 1.5-4-1-5-.3a16 16 0 013.7 7.8c2 8.2 1.4 11.4-.6 16.7-6.6 13.9-15 18-22.4 23.2-.2 0-.3 3.5 2.4 5.4 1 1 4.9 1.5 9.4 0a54.5 54.5 0 0022.3-23.3 51 51 0 00-2.4-22.2c-2.9-6.7-6.3-16.2-6.3-16.4-.1-4.2.2-5.6 2-7.7zm-95.8-38.6c4.2 2 12.2 1.1 11.8-5.7l-.2-3.1c-.8-2-3.2-1.5-3.7.5-.2.7.3 1.8-.3 2.1-.4.4-1.7.2-1.7-1.7 0-.6-.4-1.2-.7-1.6-.2-.2-.4-.2-.9-.2-.6 0-.6.1-.9.6-.1.5-.3 1-.3 1.6 0 .7-.4.9-.8 1-.6 0-.5 0-1-.2-.2-.3-.5-.4-.5-1l-.3-1.6c-.2-.3-.6-.5-1-.6-2.3 0-2.5 2.7-2.3 3.7-.2.2-.3 4.9 2.8 6.2z"
  }), SAFlag_jsx("path", {
    fill: "#fff",
    d: "M235.1 187.7c4.2 2 14.3.9 11.8-5.6l-.2-3.2c-.9-2-3.2-1.5-3.7.6-.2.6.3 1.7-.4 2-.3.4-1.7.2-1.6-1.6 0-.6-.4-1.3-.7-1.7-.3-.1-.4-.2-1-.2-.5 0-.5.2-.8.7-.2.5-.3 1-.3 1.6-.1.6-.4.8-.9 1-.5 0-.4 0-.8-.3-.3-.3-.6-.4-.6-.9l-.3-1.6c-.2-.3-.6-.5-1-.6-2.3 0-2.5 2.6-2.4 3.6-.1.2-.2 5 3 6.2zm72-21.6c4.2 2 12.1 1.1 11.8-5.6l-.2-3.2c-.9-2-3.2-1.5-3.7.5-.2.7.3 1.8-.4 2.2-.3.3-1.7.1-1.6-1.8 0-.6-.4-1.2-.7-1.6-.3-.2-.4-.2-1-.2-.5 0-.5.2-.8.7l-.3 1.5c-.1.7-.4 1-.9 1s-.4 0-.8-.2c-.3-.3-.6-.4-.6-.9s-.1-1.3-.3-1.7c-.2-.3-.6-.4-1-.5-2.3 0-2.5 2.6-2.4 3.6-.1.2-.2 4.9 3 6.2zm37.3 54.3c-7.3 8.3-4.1 22-2.4 25 2.4 4.8 4.3 7.9 9 10.3 4.3 3.1 7.7 1.2 9.5-1 4.3-4.5 4.4-16 6.4-18.2 1.4-4.2 5-3.5 6.7-1.6a16.5 16.5 0 006.2 5.3c4 3.5 8.8 4.2 13.6 1 3.2-1.9 5.3-4.2 7.2-8.9 2-5.6 1-31.6.5-47l-4.2-21.5c0-.2-.5-10.2-1-12.5 0-1-.3-1.3.7-1.2 1.1 1 1.2 1 2 1.3 1 .2 2-1.7 1.3-3.3l-10-18.6c-.8-.8-1.9-1.6-3.2.2a7.3 7.3 0 00-2.4 5.5c.3 4.4 1 8.9 1.3 13.3l4 22.6c1.3 16 1.6 29.2 2.9 45.3-.2 6.8-2.3 12.7-4.3 13.6 0 0-3 1.7-5-.2-1.5-.6-7.4-9.9-7.4-9.9-3-2.7-5-2-7.1 0-6 5.8-8.6 16.4-12.7 23.8-1 1.7-4 3-7.2-.1-8.2-11.3-3.4-27.3-4.4-23.2zM309 126.7c3.8 1.5 6.4 9.2 5.6 13-.8 4.5-2.8 9.5-4.2 8.9-1.6-.6 1-4.6-.5-8.8-.8-2.8-6-7.8-5.4-9.2-1-3.1 2.2-4.5 4.5-4z"
  }), SAFlag_jsx("path", {
    fill: "#fff",
    d: "M356.6 225c.7-9.2-.6-14.8-.8-20.2s-6.1-46.6-7.3-50.6c-1.5-7.8 5.7-1 4.9-5.6-2.5-5.6-8.6-13.9-10.5-18.8-1.2-2-.7-4-3.3-.5a42.3 42.3 0 00-2.3 19.2c6.2 32.3 12.5 59.1 11.5 89.8 3 0 6.3-6.7 7.8-13.3zm64.4-85.3c3.5 1.7 5.5 11.3 5.1 14-.7 5-2.5 10.4-3.8 9.7-1.5-.6.3-7.4-.4-9.5-.8-3-5.5-8.4-5-10-1-3.4 2-4.8 4.1-4.2zm-255.7 67.9c3.3 1.3 5.3 8.3 5 10.3-.8 3.7-2.5 7.7-3.8 7.1-1.3-.4.3-5.4-.3-7-.3-3.7-4.9-5.7-4.8-7.3-.8-3 2-3.5 4-3.1z"
  }), SAFlag_jsx("path", {
    fill: "#1b9d00",
    d: "M244.9 218.2c4.2.2 6.3 3.6 2.4 5-4 1.3-7.7 2.4-7.8 8 1.5 8-2 5.2-4 4.2-2.4-1.8-9.2-6-10.2-15-.1-2.1 1.6-4 4.3-4 4 1.1 10 1.2 15.3 1.8z"
  }), SAFlag_jsx("path", {
    fill: "#fff",
    d: "M77.4 124.4c4.8 1.4 5.1 8.6 4.8 10.7-.7 3.8-2.4 7.9-3.6 7.4-1.4-.5 0-5.7-.7-7.3-.7-2.2-4.8-6.4-4.4-7.6-.9-2.5 2-3.7 3.9-3.2zm95.9 33.6c-3.8 2-5.2 8-2.9 11.6 2.2 3 5.6 1.9 6 1.9 3.7.4 5.9-6.9 5.9-6.9s.1-2-4.2 1.9c-1.9.3-2-.4-2.5-1.4a9 9 0 01.5-5.7c.7-1.8-.7-2.6-2.8-1.4zm28-36.4c-2 1.3-5.7 5.2-5.8 9.6-.1 2.5-.6 2.5 1 4 1.3 1.8 2.4 1.7 4.8.4a5.1 5.1 0 002.3-3.4c.6-2.8-3 1.4-3.4-1.8-.8-3 1.5-4.2 3.7-7 0-2 0-3.3-2.7-1.8zm22.4 4a59.5 59.5 0 00-1.6 11.1c-.6 2.8 3 4 4.5.4 2.4-6.5 2.4-9.3 2.6-12-.7-4.3-3.6-4.2-5.5.5zm142 72.3c.4-.5 20-14.4 20-14.4 2-.7 1.5 7.2.6 7.1a77.8 77.8 0 01-20.7 14.3c-1 .7-1.9-5.3 0-7zm17.7-.2c3.5 1.7 4.9 11.8 4.5 14.5 0 5.4-3.3 9.6-4.7 9-1.4-.7.2-6.7-.5-8.8-.8-3-3.7-8.5-3.2-10.1-1-3.4 1.8-5.2 4-4.6zm-116 43.4a26 26 0 015.6-4.9c2-1 3.8.8 3.7.7.3 2-1.2 3.7-.7 6.3.4 1 .7 2.2 2.6 1.8 3.1-2.5 6-2.7 9-2.8 2.5.1 2.6 4.2 1 4.2-5.7 1.2-8.2 2.8-12.3 4.3-2 1.2-3.6-.3-3.6-.4s-1.1-1.1-.4-3.7c.2-2-.6-3.2-2.4-3-1.2.8-2.4 1.2-3-.3-.3-1-.4-1.6.5-2.2zm136.6 5.4c.8 1 1.4 2-.1 3.8l-3.7 3.2c-.6 1-1 2.8 1 3.3 3.6 1 12-4.5 12-4.6 1.4-1 1-3 .8-3-.8-.9-2.6-.3-3.8-.5-.6 0-2.5-.2-1.6-2a11.4 11.4 0 001.6-2.9c.5-1.2 0-2-2-2.7-2.1-.4-3-.2-5.3 0-1.2.2-1.6.8-1.9 2.3.1 2.3 1.5 2.2 3 3z"
  }), SAFlag_jsx("path", {
    fill: "#259f00",
    d: "M268.1 189.7c-.5 1-2.3 1-4 0s-2.7-2.6-2.1-3.5 2.3-.9 4 0 2.6 2.6 2.1 3.5zm-89-53.6c-1 .3-2.4-.6-3-2s-.3-2.6.7-2.9 2.3.7 3 2 .3 2.7-.8 3z"
  }), SAFlag_jsx("path", {
    fill: "#209000",
    d: "M355.2 375c9.4.4 18.2 0 27.5.5 1.7 1.5.5 5-.6 4.8l-7.8-.3c-.1-3-7.7-2.5-7.5.1-4.1.5-7.8-.1-12-.3-1.2-1.5-1-4.2.4-4.8z"
  })));
};
// CONCATENATED MODULE: ./src/assets/icons/flags.ts






// EXTERNAL MODULE: ./src/contexts/language/language.provider.tsx + 2 modules
var language_provider = __webpack_require__("uiyz");

// EXTERNAL MODULE: ./src/site-settings/site-navigation.ts
var site_navigation = __webpack_require__("5l48");

// CONCATENATED MODULE: ./src/layouts/header/menu/language-switcher/language-switcher.tsx
var language_switcher_jsx = external_react_default.a.createElement;








const FlagIcon = ({
  name
}) => {
  const TagName = flags_namespaceObject[name];
  return !!TagName ? language_switcher_jsx(TagName, null) : language_switcher_jsx("p", null, "Invalid icon ", name);
};

const LanguageMenu = ({
  onClick
}) => {
  return language_switcher_jsx(external_react_default.a.Fragment, null, site_navigation["j" /* LANGUAGE_MENU */].map(item => language_switcher_jsx(MenuItem, {
    onClick: onClick,
    key: item.id,
    value: item.id
  }, language_switcher_jsx("span", null, language_switcher_jsx(FlagIcon, {
    name: item.icon
  })), language_switcher_jsx(external_react_intl_["FormattedMessage"], {
    id: item.id,
    defaultMessage: item.defaultMessage
  }))));
};

const LanguageSwitcher = () => {
  const {
    locale,
    changeLanguage
  } = Object(language_provider["b" /* useLocale */])();
  const selectedLanguage = site_navigation["j" /* LANGUAGE_MENU */].find(x => x.id === locale);

  const languageChangeHandler = e => {
    changeLanguage(e.target.value);
  };

  return language_switcher_jsx(Box, null, language_switcher_jsx(popover["a" /* default */], {
    className: "right",
    handler: language_switcher_jsx(SelectedItem, null, language_switcher_jsx(Flag, null, language_switcher_jsx(FlagIcon, {
      name: selectedLanguage === null || selectedLanguage === void 0 ? void 0 : selectedLanguage.icon
    })), language_switcher_jsx("span", null, language_switcher_jsx(external_react_intl_["FormattedMessage"], {
      id: selectedLanguage === null || selectedLanguage === void 0 ? void 0 : selectedLanguage.id,
      defaultMessage: selectedLanguage === null || selectedLanguage === void 0 ? void 0 : selectedLanguage.defaultMessage
    }))),
    content: language_switcher_jsx(LanguageMenu, {
      onClick: languageChangeHandler
    })
  }));
};

/* harmony default export */ var language_switcher = __webpack_exports__["a"] = (LanguageSwitcher);

/***/ }),

/***/ "QfjN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

/***/ }),

/***/ "RHsn":
/***/ (function(module) {

module.exports = JSON.parse("{\"nav.home\":\"家\",\"nav.grocery\":\"杂货店\",\"nav.makeup\":\"补偿\",\"nav.bags\":\"包袋\",\"nav.clothing\":\"服装\",\"nav.furniture\":\"家具类\",\"nav.book\":\"书\",\"nav.medicine\":\"药物\",\"nav.foods\":\"食品类\",\"nav.terms_and_services\":\"条款及服务\",\"nav.privacy_policy\":\"隐私政策\",\"nav.offer\":\"提供\",\"nav.help\":\"需要帮忙\",\"nav.profile\":\"輪廓\",\"nav.checkout\":\"查看\",\"nav.order_received\":\"订单发票\",\"nav.logout\":\"登出\",\"nav.login\":\"登錄\",\"nav.order\":\"你的订单\",\"groceriesTitle\":\"{minute}分钟内送达的杂货\",\"groceriesSubTitle\":\"每天一整天都在您家门口提供健康食品和小吃\",\"makeupTitle\":\"品牌和进口化妆品\",\"makeupSubTitle\":\"最简单，最便宜的获得品牌和进口化妆品的方法\",\"bagsTitle\":\"独家品牌包\",\"bagsSubTitle\":\"立即获得您专属的品牌包包\",\"womenClothsTitle\":\"选购设计师礼服\",\"womenClothsSubTitle\":\"从网上即可为您量身定制礼服。 存货充足时快点。\",\"furnitureTitle\":\"廉价的独家家具\",\"furnitureSubTitle\":\"我们种类繁多的精美家具让您的房子成为家\",\"booksTitle\":\"你自己的书店\",\"booksSubTitle\":\"从我们广泛的书籍中获取您喜欢的书籍。\",\"medicineTitle\":\"您的药物已交付\",\"medicineSubTitle\":\"与您的所有医疗保健问题说再见\",\"foodsTitle\":\"您订购我们送货\",\"foodsSubTitle\":\"在不到一个小时的时间内得到您喜欢的食物\",\"alternativeCheckout\":\"结帐替代\",\"termAndConditionHelper\":\"购买后，即表示您同意我们的\",\"termAndCondition\":\"条款和条件。\",\"reqMedicine\":\"要求药\",\"submitRequest\":\"提交要求\",\"noteHead\":\"注意\",\"noteDescription\":\"产品可用性和价格将通过电话确认。 市区内送货费$ 5，市区外送货费$ 10。\",\"rmMedicineName\":\"药品名称\",\"rmMedicineQuantity\":\"数量\",\"rmPrescripttionUpload\":\"上传您的处方\",\"rmUploadText\":\"在此处拖动/上传文件。\",\"cartTitle\":\"你的订单\",\"discountText\":\"折扣\",\"vatText\":\"含税 增值税\",\"searchPlaceholder\":\"從這裡搜索您的產品\",\"searchButtonText\":\"搜索\",\"mobileSignInButtonText\":\"加入\",\"navlinkAccountSettings\":\"您的帳戶設置\",\"cartItems\":\"項目\",\"cartItem\":\"项目\",\"addCartButton\":\"大车\",\"addToCartButton\":\"添加到购物车\",\"backBtn\":\"背部\",\"noProductFound\":\"沒有找到產品\",\"specialCode\":\"你有优惠券吗？\",\"couponApplied\":\"優惠券已申請\",\"couponPlaceholder\":\"在此输入优惠券代码\",\"sidebarYourOrder\":\"订购\",\"profilePageTitle\":\"你的個人資料\",\"profileNameField\":\"名稱\",\"profileEmailField\":\"電子郵件\",\"profileSaveBtn\":\"保存\",\"contactNumberTItle\":\"聯繫電話\",\"addContactBtn\":\"增加聯繫人\",\"deliveryAddresTitle\":\"郵寄地址\",\"addAddressBtn\":\"添加地址\",\"addNew\":\"添新\",\"paymentCardTitle\":\"付款卡\",\"addCardBtn\":\"新增卡\",\"savedCardsId\":\"保存的卡\",\"savedContactId\":\"储存联络人\",\"savedAddressId\":\"保存地址\",\"siteFooter\":\"Pickbazar是一個產品\",\"subTotal\":\"小計\",\"itemsText\":\"項目\",\"shippinFeeText\":\"運輸費用\",\"voucherText\":\"憑證\",\"voucherApply\":\"應用\",\"couponError\":\"優惠券無效\",\"totalText\":\"總\",\"deliverySchedule\":\"交货时间表\",\"checkoutDeliveryAddress\":\"邮寄地址\",\"contactNumberText\":\"联系电话\",\"selectPaymentText\":\"付款方式\",\"proceesCheckout\":\"進行結算\",\"backHomeBtn\":\"回到家\",\"orderReceivedText\":\"訂單已經收到\",\"orderReceivedSuccess\":\"謝謝。 您的訂單已收到\",\"orderNumberText\":\"訂單號\",\"orderDateText\":\"日期\",\"paymenMethodText\":\"付款方法\",\"paymentMethodName\":\"貨到付款\",\"orderDetailsText\":\"訂單詳細信息\",\"totalItemText\":\"總項目\",\"orderTimeText\":\"訂單時間\",\"deliveryTimeText\":\"交貨時間\",\"deliveryLocationText\":\"交貨地點\",\"totalAmountText\":\"總金額\",\"loadMoreBtn\":\"装载更多\",\"welcomeBack\":\"歡迎回來\",\"loginText\":\"使用您的電子郵件和密碼登錄\",\"emailAddressPlaceholder\":\"電郵地址或聯絡號碼\",\"passwordPlaceholder\":\"密碼（最少{minCharacter}個字符）\",\"continueBtn\":\"繼續\",\"orText\":\"要么\",\"continueFacebookBtn\":\"繼續使用Facebook\",\"continueGoogleBtn\":\"繼續使用Google\",\"dontHaveAccount\":\"沒有帳戶？\",\"signUpBtnText\":\"註冊\",\"forgotPasswordText\":\"忘記密碼了嗎？\",\"resetText\":\"重置它\",\"signUpText\":\"通過註冊，您同意Pickbazar的\",\"termsConditionText\":\"條款和條件\",\"alreadyHaveAccount\":\"已經有賬號？\",\"backToSign\":\"回到\",\"loginBtnText\":\"登錄\",\"forgotPassText\":\"忘記密碼\",\"sendResetPassText\":\"我們會向您發送重置密碼的鏈接\",\"resetPasswordBtn\":\"重置密碼\",\"intlCopyBtnId\":\"复制\",\"intlCopySuccessId\":\"复制的\",\"locationModalheading\":\"选择你的位置\",\"locationModalSubHeading\":\"您必须选择位置以进行送货服务\",\"locationModalFooter\":\"免费送货第一订单\",\"saleText\":\"特卖\",\"offText\":\"关\",\"faqNo1Title\":\"如何与客户服务联系？\",\"faqNo1Desc\":\"我们的客户体验团队每周工作{number1}天，我们提供两种联系方式。电子邮件和聊天。 我们会尽快回复您，因此您无需等待太久就可以回复！\",\"faqNo2Title\":\"应用安装失败，如何更新系统信息？\",\"faqNo2Desc\":\"请仔细阅读文档。 我们也有一些有关此问题的在线视频教程。 如果问题仍然存在，请在支持论坛中打开故障单\",\"faqNo3Title\":\"网站响应耗时，如何改善？\",\"faqNo3Desc\":\"首先，请检查您的互联网连接。 我们也有一些有关此问题的在线视频教程。 如果问题仍然存在，请在支持论坛中打开故障单。\",\"faqNo4Title\":\"如何创建一个帐户？\",\"faqNo4Desc\":\"如果您想开设一个个人帐户，可以通过电话或在线进行。 在线开户仅需几分钟。\",\"intlOrderDetailsDiscount\":\"折扣\",\"intlOrderDetailsDelivery\":\"送货费\",\"intlOrderPageTitle\":\"我的订单\",\"intlNoOrderFound\":\"找不到订单\",\"intlOrderPageDetails\":\"订单详细信息\",\"intlTableColTitle2\":\"数量\",\"intlTableColTitle3\":\"价钱\",\"intlOrderCardTitleText\":\"订购\",\"intlOrderCardDateText\":\"订购日期\",\"intlOrderCardTotalText\":\"总价\",\"joinButton\":\"加入\",\"ar\":\"阿拉伯\",\"zh\":\"中文\",\"en\":\"英语\",\"de\":\"德语\",\"he\":\"希伯来语\",\"es\":\"西班牙文\",\"intlTextBy\":\"通过\",\"intlReletedItems\":\"相关项目\",\"readFreeSampleButton\":\"阅读免费样本\",\"bookSectionTitle\":\"关于这本书\",\"authorSectionTitle\":\"关于作者\",\"defaultIntlId\":\"请从语言文件添加占位符\",\"noResultFound\":\"对不起，没有找到结果:(\",\"deliveryText\":\"交货\",\"cuisineText\":\"美食\",\"minOrderText\":\"最低订购\",\"fromText\":\"从\",\"loadMoreButton\":\"装载更多\"}");

/***/ }),

/***/ "TBBy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "TG1l":
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "Td6B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/css"
var css_ = __webpack_require__("ExBD");
var css_default = /*#__PURE__*/__webpack_require__.n(css_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: ./src/components/search-box/search-box.style.tsx



const StyledForm = external_styled_components_default.a.form.withConfig({
  displayName: "search-boxstyle__StyledForm",
  componentId: "x0hjfp-0"
})(props => css_default()({
  display: 'flex',
  alignItems: 'center',
  borderRadius: 'base',
  overflow: 'hidden',
  width: props.minimal ? '100%' : 700,
  color: 'text.regular',
  backgroundColor: props.minimal ? 'gray.400' : 'white'
}), external_styled_system_["shadow"]);
const StyledInput = external_styled_components_default.a.input.withConfig({
  displayName: "search-boxstyle__StyledInput",
  componentId: "x0hjfp-1"
})(css_default()({
  flexGrow: 1,
  fontSize: 'base',
  px: 20,
  height: 48,
  color: 'text.regular',
  backgroundColor: 'inherit'
}), {
  border: 0,
  '&:focus': {
    outline: 0
  },
  '&::-webkit-input-placeholder, &::-moz-placeholder, &::-moz-placeholder, &::-ms-input-placeholder': {
    fontSize: 'base',
    color: 'text.regular',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  }
});
const StyledCategoryName = external_styled_components_default.a.span.withConfig({
  displayName: "search-boxstyle__StyledCategoryName",
  componentId: "x0hjfp-2"
})(css_default()({
  fontSize: 14,
  fontWeight: 'bold',
  lineHeight: '38px',
  px: 15,
  color: 'primary.regular',
  backgroundColor: 'gray.200',
  borderRadius: 'base'
}), {
  margin: '5px',
  whiteSpace: 'nowrap',
  textTransform: 'capitalize'
});
const StyledSearchButton = external_styled_components_default.a.button.withConfig({
  displayName: "search-boxstyle__StyledSearchButton",
  componentId: "x0hjfp-3"
})(css_default()({
  backgroundColor: 'primary.regular',
  color: 'white',
  fontSize: 'base',
  fontWeight: 'bold'
}), {
  display: 'flex',
  height: 48,
  alignItems: 'center',
  border: 0,
  outline: 0,
  paddingLeft: 30,
  paddingRight: 30,
  cursor: 'pointer',
  flexShrink: 0
});
// EXTERNAL MODULE: ./src/assets/icons/SearchIcon.tsx
var SearchIcon = __webpack_require__("J7Kp");

// CONCATENATED MODULE: ./src/components/search-box/search-box.tsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const SearchBox = (_ref) => {
  let {
    onEnter,
    onChange,
    value,
    name,
    minimal,
    categoryType,
    buttonText,
    className,
    showButtonText = true,
    shadow
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["onEnter", "onChange", "value", "name", "minimal", "categoryType", "buttonText", "className", "showButtonText", "shadow"]);

  return __jsx(StyledForm, {
    onSubmit: onEnter,
    className: className,
    boxShadow: shadow,
    minimal: minimal
  }, minimal ? __jsx(external_react_default.a.Fragment, null, __jsx(SearchIcon["a" /* SearchIcon */], {
    style: {
      marginLeft: 16,
      marginRight: 16
    }
  }), __jsx(StyledInput, _extends({
    type: "search",
    onChange: onChange,
    value: value,
    name: name
  }, rest))) : __jsx(external_react_default.a.Fragment, null, __jsx(StyledCategoryName, null, categoryType), __jsx(StyledInput, _extends({
    type: "search",
    onChange: onChange,
    value: value,
    name: name
  }, rest)), __jsx(StyledSearchButton, null, __jsx(SearchIcon["a" /* SearchIcon */], {
    style: {
      marginRight: 10
    }
  }), showButtonText && buttonText)));
};
// EXTERNAL MODULE: ./src/contexts/app/app.provider.ts + 2 modules
var app_provider = __webpack_require__("xZKy");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// CONCATENATED MODULE: ./src/features/search/search.tsx
var search_jsx = external_react_default.a.createElement;

function search_extends() { search_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return search_extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function search_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = search_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function search_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const Search = (_ref) => {
  let {
    onSubmit
  } = _ref,
      props = search_objectWithoutProperties(_ref, ["onSubmit"]);

  const searchTerm = Object(app_provider["c" /* useAppState */])('searchTerm');
  const dispatch = Object(app_provider["b" /* useAppDispatch */])();
  const router = Object(router_["useRouter"])();
  const intl = Object(external_react_intl_["useIntl"])();

  const handleOnChange = e => {
    const {
      value
    } = e.target;
    dispatch({
      type: 'SET_SEARCH_TERM',
      payload: value
    });
  };

  const {
    pathname,
    query
  } = router;

  const onSearch = e => {
    e.preventDefault();

    const {
      type
    } = query,
          rest = search_objectWithoutProperties(query, ["type"]);

    if (type) {
      router.push({
        pathname,
        query: _objectSpread(_objectSpread({}, rest), {}, {
          text: searchTerm
        })
      }, {
        pathname: `/${type}`,
        query: _objectSpread(_objectSpread({}, rest), {}, {
          text: searchTerm
        })
      });
    } else {
      router.push({
        pathname,
        query: _objectSpread(_objectSpread({}, rest), {}, {
          text: searchTerm
        })
      });
    }

    dispatch({
      type: 'SET_SEARCH_TERM',
      payload: ''
    });

    if (onSubmit) {
      onSubmit();
    }
  };

  return search_jsx(SearchBox, search_extends({
    onEnter: onSearch,
    onChange: handleOnChange,
    value: searchTerm,
    name: "search",
    placeholder: intl.formatMessage({
      id: 'searchPlaceholder',
      defaultMessage: 'Search your products from here'
    }),
    categoryType: query.type || 'restaurant',
    buttonText: intl.formatMessage({
      id: 'searchButtonText',
      defaultMessage: 'Search'
    })
  }, props));
};

/* harmony default export */ var search = __webpack_exports__["a"] = (Search);

/***/ }),

/***/ "ToeK":
/***/ (function(module) {

module.exports = JSON.parse("{\"nav.home\":\"בית\",\"nav.grocery\":\"מכולת\",\"nav.makeup\":\"להשלים\",\"nav.bags\":\"תיקים\",\"nav.clothing\":\"ביגוד\",\"nav.furniture\":\"ריהוט\",\"nav.book\":\"ספר\",\"nav.medicine\":\"תרופה\",\"nav.foods\":\"אוכלים\",\"nav.terms_and_services\":\"תנאים ושירותים\",\"nav.privacy_policy\":\"מדיניות פרטיות\",\"nav.offer\":\"הצעה\",\"nav.help\":\"זקוק לעזרה\",\"nav.profile\":\"פרופיל\",\"nav.checkout\":\"לבדוק\",\"nav.order_received\":\"הזמנת חשבונית\",\"nav.logout\":\"להתנתק\",\"nav.login\":\"התחברות\",\"nav.order\":\"ההזמנה שלך\",\"groceriesTitle\":\"מצרכים הובאו תוך {minute} דקות\",\"groceriesSubTitle\":\"קבל את האוכל והחטיפים הבריאים שלך המובאים בפתח שלך כל היום בכל יום\",\"makeupTitle\":\"איפור ממותג ומיובא\",\"makeupSubTitle\":\"הדרך הקלה והזולה ביותר להשיג איפור ממותג ומיובא שלך\",\"bagsTitle\":\"תיקים ממותגים בלעדיים\",\"bagsSubTitle\":\"קבל את התיקים הבלעדיים והמותגיים שלך שנשלחו אליך תוך זמן קצר\",\"womenClothsTitle\":\"קנו את שמלות המעצבים שלך\",\"womenClothsSubTitle\":\"מוכנים ללבוש שמלות המותאמות עבורך מהאינטרנט. מהרו כשמלאי נמשך.\",\"furnitureTitle\":\"ריהוט בלעדי במחיר זול\",\"furnitureSubTitle\":\"הפוך את ביתך לבית עם אוסף הרהיטים היפה שלנו\",\"booksTitle\":\"חנות ספרים משלך\",\"booksSubTitle\":\"השג את הספרים המועדפים עליך ממגוון הספרים הרחב שלנו.\",\"medicineTitle\":\"התרופות שלך, מועברות\",\"medicineSubTitle\":\"להיפרד מכל הדאגות שלך בתחום הבריאות איתנו\",\"foodsTitle\":\"אתה מזמין שאנו מספקים\",\"foodsSubTitle\":\"השג את המזונות האהובים עליך תוך פחות משעה\",\"alternativeCheckout\":\"אלטרנטיבה לקופה\",\"termAndConditionHelper\":\"על ידי ביצוע רכישה זו אתה מסכים לשלנו\",\"termAndCondition\":\"תנאים.\",\"reqMedicine\":\"בקש רפואה\",\"submitRequest\":\"שלח בקשה\",\"noteHead\":\"פתק\",\"noteDescription\":\"זמינות המוצר ומחירם יאשרו בטלפון. תשלום משלוח בתוך העיר 5 $ ומחוצה לה 10 $.\",\"rmMedicineName\":\"שם הרפואה\",\"rmMedicineQuantity\":\"כמות\",\"rmPrescripttionUpload\":\"העלה את המרשם שלך\",\"rmUploadText\":\"גרור / העלה את הקובץ שלך לכאן.\",\"cartTitle\":\"ההזמנה שלך\",\"discountText\":\"הנחה\",\"vatText\":\"כולל מע\\\"מ\",\"searchPlaceholder\":\"חפש במוצרים שלך מכאן\",\"searchButtonText\":\"לחפש\",\"mobileSignInButtonText\":\"להצטרף\",\"navlinkAccountSettings\":\"הגדרות החשבון שלך\",\"cartItems\":\"פריטים\",\"cartItem\":\"פריט\",\"addCartButton\":\"עגלה\",\"addToCartButton\":\"הוסף לעגלה\",\"backBtn\":\"חזור\",\"noProductFound\":\"לא נמצאו מוצרים\",\"specialCode\":\"יש לך שובר?\",\"couponApplied\":\"קופון מיושם\",\"couponPlaceholder\":\"הזן כאן קוד שובר\",\"sidebarYourOrder\":\"להזמין\",\"profilePageTitle\":\"הפרופיל שלך\",\"profileNameField\":\"שם\",\"profileEmailField\":\"דוא\\\"ל\",\"profileSaveBtn\":\"לשמור\",\"contactNumberTItle\":\"מספר איש קשר\",\"addContactBtn\":\"הוסף איש קשר\",\"deliveryAddresTitle\":\"כתובת למשלוח\",\"addAddressBtn\":\"הוסף כתובת\",\"addNew\":\"הוסף חדש\",\"addCardBtn\":\"הוסף כרטיס\",\"savedCardsId\":\"כרטיסים שמורים\",\"savedContactId\":\"שמור איש קשר\",\"savedAddressId\":\"שמור כתובת\",\"paymentCardTitle\":\"כרטיס תשלומים\",\"siteFooter\":\"Pickbazar הוא מוצר מאת\",\"subTotal\":\"תת סה\\\"כ\",\"itemsText\":\"פריטים\",\"shippinFeeText\":\"דמי משלוח\",\"voucherText\":\"שובר\",\"voucherApply\":\"להגיש מועמדות\",\"couponError\":\"קופון לא חוקי\",\"deliverySchedule\":\"לוח הזמנים של המשלוח\",\"checkoutDeliveryAddress\":\"כתובת למשלוח\",\"contactNumberText\":\"מספר איש קשר\",\"selectPaymentText\":\"אפשרות תשלום\",\"proceesCheckout\":\"התקדם לנקודת הביקורת\",\"backHomeBtn\":\"בחזרה לבית\",\"orderReceivedText\":\"ההזמנה התקבלה\",\"orderReceivedSuccess\":\"תודה. ההזמנה שלך התקבלה\",\"orderNumberText\":\"מספר הזמנה\",\"orderDateText\":\"תאריך\",\"paymenMethodText\":\"אמצעי תשלום\",\"paymentMethodName\":\"מזומן במשלוח\",\"orderDetailsText\":\"פרטי הזמנה\",\"totalItemText\":\"סה\\\"כ פריט\",\"orderTimeText\":\"הזמן הזמן\",\"deliveryTimeText\":\"זמן משלוח\",\"deliveryLocationText\":\"מיקום המשלוח\",\"totalAmountText\":\"הכמות הכוללת\",\"loadMoreBtn\":\"טען עוד\",\"welcomeBack\":\"ברוך שובך\",\"loginText\":\"התחבר באמצעות הדוא\\\"ל והסיסמה שלך\",\"emailAddressPlaceholder\":\"כתובת דוא\\\"ל או מספר איש קשר\",\"passwordPlaceholder\":\"סיסמא (מינימום {minCharacter} תווים)\",\"continueBtn\":\"המשך\",\"orText\":\"או\",\"continueFacebookBtn\":\"המשך עם פייסבוק\",\"continueGoogleBtn\":\"המשך עם גוגל\",\"dontHaveAccount\":\"אין לך חשבון?\",\"signUpBtnText\":\"הירשם\",\"forgotPasswordText\":\"שכחת ססמה?\",\"resetText\":\"אפס אותו\",\"signUpText\":\"על ידי ההרשמה, אתה מסכים לפיקבזר\",\"termsConditionText\":\"תנאים והגבלות\",\"alreadyHaveAccount\":\"כבר יש לך חשבון?\",\"backToSign\":\"בחזרה ל\",\"loginBtnText\":\"התחברות\",\"forgotPassText\":\"שכחת את הסיסמא\",\"sendResetPassText\":\"אנו נשלח לך קישור לאיפוס הסיסמה שלך\",\"resetPasswordBtn\":\"אפס סיסמאות\",\"intlCopyBtnId\":\"עותק\",\"intlCopySuccessId\":\"הועתק\",\"locationModalheading\":\"בחר את המיקום שלךSelecciona tu ubicación\",\"locationModalSubHeading\":\"עליכם לבחור את המיקום שלכם לצורך שירות משלוחים\",\"locationModalFooter\":\"משלוח חינם להזמנה ראשונה\",\"saleText\":\"מכירה\",\"offText\":\"כבוי\",\"faqNo1Title\":\"כיצד ליצור קשר עם שירות לקוחות?\",\"faqNo1Desc\":\"צוות חוויית הלקוחות שלנו זמין {number1} ימים בשבוע ואנחנו מציעים {number2} דרכים ליצור קשר. דואר אלקטרוני וצ'אט. אנו מנסים לענות במהירות, כך שאתה לא צריך לחכות יותר מדי לתגובה !.\",\"faqNo2Title\":\"התקנת האפליקציה נכשלה, כיצד לעדכן את פרטי המערכת?\",\"faqNo2Desc\":\"אנא קרא את התיעוד בעיון. יש לנו גם כמה הדרכות וידאו מקוונות בנושא זה. אם הבעיה נותרה, אנא פתח כרטיס בפורום התמיכה\",\"faqNo3Title\":\"תגובת אתר לוקח זמן, כיצד לשפר?\",\"faqNo3Desc\":\"בהתחלה, אנא בדוק את חיבור האינטרנט שלך. יש לנו גם כמה הדרכות וידאו מקוונות בנושא זה. אם הבעיה נותרה, אנא פתח כרטיס בפורום התמיכה.\",\"faqNo4Title\":\"כיצד אוכל ליצור חשבון?\",\"faqNo4Desc\":\"אם אתה רוצה לפתוח חשבון לשימוש אישי אתה יכול לעשות זאת בטלפון או באינטרנט. פתיחת חשבון באופן מקוון אמורה לארוך מספר דקות בלבד.\",\"totalText\":\"סך הכל\",\"intlOrderDetailsDiscount\":\"הנחה\",\"intlOrderDetailsDelivery\":\"דמי משלוח\",\"intlOrderPageTitle\":\"ההזמנה שלי\",\"intlNoOrderFound\":\"לא נמצאה הזמנה\",\"intlOrderPageDetails\":\"פרטי הזמנה\",\"intlTableColTitle2\":\"כמות\",\"intlTableColTitle3\":\"מחיר\",\"intlOrderCardTitleText\":\"להזמין\",\"intlOrderCardDateText\":\"תאריך הזמנה\",\"intlOrderCardTotalText\":\"מחיר סופי\",\"joinButton\":\"הצטרף\",\"ar\":\"ערבית\",\"zh\":\"סינית\",\"en\":\"אנגלית\",\"de\":\"גרמנית\",\"he\":\"עברית\",\"es\":\"ספרדית\",\"intlTextBy\":\"על ידי\",\"intlReletedItems\":\"חפצים קשורים\",\"readFreeSampleButton\":\"קרא דוגמא בחינם\",\"bookSectionTitle\":\"לגבי הספר\",\"authorSectionTitle\":\"על הסופר\",\"defaultIntlId\":\"בבקשה הוסף מציין מיקום מקובץ השפה\",\"noResultFound\":\"מצטערים, לא נמצאה תוצאה :(\",\"deliveryText\":\"מסירה\",\"cuisineText\":\"מטבח\",\"minOrderText\":\"הזמנה מינמלית\",\"fromText\":\"מ\",\"loadMoreButton\":\"טען עוד\"}");

/***/ }),

/***/ "VnWI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Input; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ExBD");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);



const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "input__Input",
  componentId: "sc-9r8pxt-0"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
  display: 'block',
  width: '100%',
  p: '0 18px',
  appearance: 'none',
  fontFamily: 'body',
  fontSize: 'base',
  lineHeight: 'inherit',
  border: '1px solid',
  borderColor: 'gray.500',
  borderRadius: 'base',
  backgroundColor: 'white',
  color: 'text.bold',
  height: '48px',
  transition: 'all 0.25s ease',
  // mb: 3,
  '&:focus': {
    borderColor: 'primary.regular'
  }
}), {
  '&:hover,&:focus': {
    outline: 0
  },
  '&::placeholder': {
    color: ''
  },
  '&::-webkit-inner-spin-button,&::-webkit-outer-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0
  },
  '&.disabled': {
    cursor: 'not-allowed',
    opacity: 0.6
  }
}, Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["compose"])(styled_system__WEBPACK_IMPORTED_MODULE_2__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["border"]));

/***/ }),

/***/ "Y3ZS":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "YBsB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "bM43":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initializeApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useApollo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Oyez");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oz4i");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("TG1l");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_3__);




let apolloClient;

function createApolloClient() {
  return new apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]({
    ssrMode: true,
    link: new apollo_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]({
      uri: "http://localhost:8000/shop/graphql",
      // Server URL (must be absolute)
      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`

    }),
    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"]()
  });
}

function initializeApollo(initialState = null) {
  var _apolloClient2;

  const _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient(); // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here


  if (initialState) {
    _apolloClient.cache.restore(initialState);
  } // For SSG and SSR always create a new Apollo Client


  if (true) return _apolloClient; // Create the Apollo Client once in the client

  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}
function useApollo(initialState) {
  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => initializeApollo(initialState), [initialState]);
  return store;
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fX+b":
/***/ (function(module, exports) {



/***/ }),

/***/ "ft+Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useMedia; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const isClient = false;
const useMedia = (query, defaultState = false) => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isClient ? () => window.matchMedia(query).matches : defaultState);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let mounted = true;
    const mql = window.matchMedia(query);

    const onChange = () => {
      if (!mounted) {
        return;
      }

      setState(!!mql.matches);
    };

    mql.addListener(onChange);
    setState(mql.matches);
    return () => {
      mounted = false;
      mql.removeListener(onChange);
    };
  }, [query]);
  return state;
};

/***/ }),

/***/ "fvxO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__("bzos");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (false) {}

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "hUgY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ ExtendedApp; });

// NAMESPACE OBJECT: ./src/assets/icons/category-menu-icons.ts
var category_menu_icons_namespaceObject = {};
__webpack_require__.r(category_menu_icons_namespaceObject);
__webpack_require__.d(category_menu_icons_namespaceObject, "FruitsVegetable", function() { return FruitsVegetable["a" /* FruitsVegetable */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "FacialCare", function() { return FacialCare["a" /* FacialCare */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "Handbag", function() { return Handbag; });
__webpack_require__.d(category_menu_icons_namespaceObject, "DressIcon", function() { return DressIcon; });
__webpack_require__.d(category_menu_icons_namespaceObject, "FurnitureIcon", function() { return FurnitureIcon; });
__webpack_require__.d(category_menu_icons_namespaceObject, "BookIcon", function() { return BookIcon; });
__webpack_require__.d(category_menu_icons_namespaceObject, "MedicineIcon", function() { return MedicineIcon; });
__webpack_require__.d(category_menu_icons_namespaceObject, "Restaurant", function() { return Restaurant; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/site-settings/site-theme/default.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const baseColor = {
  white: '#ffffff',
  black: '#000000',
  gray: {
    100: '#f9f9f9',
    200: '#F7F7F7',
    300: '#f4f4f4',
    400: '#F3F3F3',
    500: '#f1f1f1',
    // border alt color
    600: '#EdEdEd',
    700: '#E6E6E6',
    // border color
    800: '#C2C3CC',
    900: '#bdbdbd'
  },
  text: {
    bold: '#0D1136',
    // heading color
    medium: '#424561',
    regular: '#77798C',
    // regular text color
    light: '#909090',
    label: '#767676'
  },
  transparent: 'transparent',
  primary: {
    regular: '#009E7F',
    // primary color
    hover: '#019376',
    alternate: '#028489',
    light: '#b7dbdd'
  },
  secondary: {
    regular: '#ff5b60',
    hover: '#FF282F',
    alternate: '#fc5c63'
  },
  yellow: {
    regular: '#FFAD5E',
    hover: '#FFB369',
    alternate: '#f4c243'
  },
  blue: {
    regular: '#2e70fa',
    dark: '#161F6A',
    light: '#666D92',
    link: '#4285f4'
  },
  red: '#ea4d4a',
  success: '',
  warning: '',
  muted: '',
  highlight: ''
};
const defaultTheme = {
  colors: _objectSpread(_objectSpread({}, baseColor), {}, {
    body: {
      bg: '',
      text: ''
    },
    borderColor: 'gray.500',
    headingsColor: 'text.bold',
    subheadingsColor: '',
    textColor: 'text.regular',
    buttonColor: 'white',
    buttonBgColor: 'primary.regular',
    buttonBgHoverColor: 'primary.hover',
    buttonBorderColor: 'primary.regular',
    linkColor: 'primary.regular',
    input: {
      text: '',
      bg: '',
      border: '',
      focus: '',
      placeholder: ''
    }
  }),
  // btnBorderRadius: '',
  breakpoints: ['767px', '991px', '70em', '90em'],
  // space: [0, 4, 8, 10, 15, 20, 25, 30, 40, 56],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  // export const space = [0, 0.25, 0.5, 1, 1.5, 3].map(n => n + 'rem')
  // fontSizes: [10, 13, 15, 19, 21, 30, 45],
  // fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontSizes: {
    xs: 12,
    sm: 13,
    base: 15,
    md: 19,
    lg: 21,
    xl: 24,
    '2xl': 30,
    '3xl': 36,
    '4xl': 42,
    '5xl': 48
  },
  // fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  fontWeights: {
    body: 400,
    heading: 700,
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    bolder: 900
  },
  fonts: {
    body: 'Lato, sans-serif',
    heading: 'Poppins, sans-serif',
    monospace: 'Menlo, monospace'
  },
  // Custom Theme keys
  customs: {
    // transitions: {
    //   base: '.3s ease-out',
    // },
    transition: '0.35s ease'
  },
  // lineHeights: {
  //   solid: 1,
  //   title: 1.25,
  //   copy: 1.5,
  // },
  lineHeights: {
    body: 1.5,
    // body: 1.625,
    heading: 1.125 // heading: 1.25,

  },
  boxSizing: 'border-box',
  radii: {
    base: '6px',
    small: '3px',
    medium: '12px',
    big: '18px'
  },
  shadows: {
    base: '0 3px 6px rgba(0, 0, 0, 0.16)',
    medium: '0 6px 12px rgba(0, 0, 0, 0.16)',
    big: '0 21px 36px rgba(0, 0, 0, 0.16)',
    header: '0 1px 2px rgba(0, 0, 0, 0.06)'
  },
  // letterSpacings: {
  //   normal: 'normal',
  //   tracked: '0.1em',
  //   tight: '-0.05em',
  //   mega: '0.25em',
  // },
  // borders: {
  //   0,
  //   sm:'1px solid',
  //   medium:'2px solid',
  //   large:'3px solid',
  //   '4px solid',
  //   '5px solid',
  //   '6px solid',
  // },
  // radius: [3, 4, 5, 6, '50%'],
  // widths: [36, 40, 44, 48, 54, 70, 81, 128, 256],
  // heights: [36, 40, 44, 48, 50, 54, 70, 81, 128],
  // maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  globals: {// body: {
    //   backgroundColor: 'red',
    //   fontFamily: 'body',
    //   lineHeight: 'body',
    //   fontWeight: 'body',
    // },
  }
}; // xs: 0,
// sm: 576px,
// md: 768px,
// lg: 992px,
// xl: 1200px,
// xxl: 1400px
// EXTERNAL MODULE: ./src/contexts/app/app.provider.ts + 2 modules
var app_provider = __webpack_require__("xZKy");

// EXTERNAL MODULE: ./src/contexts/auth/auth.context.tsx
var auth_context = __webpack_require__("QfjN");

// CONCATENATED MODULE: ./src/contexts/auth/auth.provider.tsx
var __jsx = external_react_default.a.createElement;

function auth_provider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function auth_provider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { auth_provider_ownKeys(Object(source), true).forEach(function (key) { auth_provider_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { auth_provider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function auth_provider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const isBrowser = false;
const INITIAL_STATE = {
  isAuthenticated: isBrowser && !!localStorage.getItem('access_token'),
  currentForm: 'signIn'
};

function reducer(state, action) {
  console.log(state, 'auth');

  switch (action.type) {
    case 'SIGNIN':
      return auth_provider_objectSpread(auth_provider_objectSpread({}, state), {}, {
        currentForm: 'signIn'
      });

    case 'SIGNIN_SUCCESS':
      return auth_provider_objectSpread(auth_provider_objectSpread({}, state), {}, {
        isAuthenticated: true
      });

    case 'SIGN_OUT':
      return auth_provider_objectSpread(auth_provider_objectSpread({}, state), {}, {
        isAuthenticated: false
      });

    case 'SIGNUP':
      return auth_provider_objectSpread(auth_provider_objectSpread({}, state), {}, {
        currentForm: 'signUp'
      });

    case 'FORGOTPASS':
      return auth_provider_objectSpread(auth_provider_objectSpread({}, state), {}, {
        currentForm: 'forgotPass'
      });

    default:
      return state;
  }
}

const AuthProvider = ({
  children
}) => {
  const {
    0: authState,
    1: authDispatch
  } = Object(external_react_["useReducer"])(reducer, INITIAL_STATE);
  return __jsx(auth_context["a" /* AuthContext */].Provider, {
    value: {
      authState,
      authDispatch
    }
  }, children);
};
// EXTERNAL MODULE: ./src/contexts/language/language.provider.tsx + 2 modules
var language_provider = __webpack_require__("uiyz");

// EXTERNAL MODULE: ./src/contexts/cart/use-cart.tsx + 2 modules
var use_cart = __webpack_require__("tFEG");

// EXTERNAL MODULE: ./src/utils/apollo.js
var apollo = __webpack_require__("bM43");

// EXTERNAL MODULE: ./src/utils/use-media.ts
var use_media = __webpack_require__("ft+Y");

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react-stickynode"
var external_react_stickynode_ = __webpack_require__("isz7");
var external_react_stickynode_default = /*#__PURE__*/__webpack_require__.n(external_react_stickynode_);

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: ./src/features/authentication-form/index.tsx + 5 modules
var authentication_form = __webpack_require__("kp67");

// EXTERNAL MODULE: ./src/components/nav-link/nav-link.tsx
var nav_link = __webpack_require__("Ek28");

// EXTERNAL MODULE: ./src/site-settings/site-navigation.ts
var site_navigation = __webpack_require__("5l48");

// EXTERNAL MODULE: ./src/layouts/header/menu/language-switcher/language-switcher.tsx + 8 modules
var language_switcher = __webpack_require__("PsoQ");

// CONCATENATED MODULE: ./src/assets/icons/HelpIcon.tsx
var HelpIcon_jsx = external_react_default.a.createElement;

const HelpIcon = ({
  color = 'currentColor',
  width = '14px',
  height = '14px'
}) => {
  return HelpIcon_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 14 14"
  }, HelpIcon_jsx("path", {
    id: "Path_111",
    "data-name": "Path 111",
    d: "M269.443,404.312a7,7,0,1,0,7,7,6.98,6.98,0,0,0-7-7Zm.635,10.818a.3.3,0,0,1-.319.319h-.635a.3.3,0,0,1-.319-.319v-.635a.3.3,0,0,1,.319-.319h.635a.3.3,0,0,1,.319.319Zm.859-2.832c-.446.382-.763.637-.859.987a.308.308,0,0,1-.319.255h-.635a.309.309,0,0,1-.319-.35,2.988,2.988,0,0,1,1.336-1.876c.574-.446.892-.732.892-1.274a1.591,1.591,0,1,0-3.182,0v.191a.3.3,0,0,1-.224.351l-.6.189a.318.318,0,0,1-.414-.253,2.363,2.363,0,0,1-.033-.479,2.864,2.864,0,0,1,5.729,0,2.792,2.792,0,0,1-1.369,2.259Zm0,0",
    transform: "translate(-262.442 -404.312)",
    fill: color
  }));
};
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/layouts/header/menu/right-menu/right-menu.style.tsx


const RightMenuBox = external_styled_components_default.a.div.withConfig({
  displayName: "right-menustyle__RightMenuBox",
  componentId: "iej1sk-0"
})(["display:flex;align-items:center;flex-shrink:0;.menu-icon{min-width:14px;margin-right:7px;}.menu-item{a{font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.2em;display:block;transition:0.15s ease-in-out;display:flex;align-items:center;margin-right:45px;@media (max-width:1400px){margin-right:35px;font-size:", "px;}&:hover{color:", ";}&.current-page{color:", ";}}}.user-pages-dropdown{.popover-handler{width:38px;height:38px;border-radius:50%;display:block;overflow:hidden;img{width:100%;height:auto;display:block;}}.popover-content{.inner-wrap{}}}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
// CONCATENATED MODULE: ./src/layouts/header/menu/right-menu/right-menu.tsx
var right_menu_jsx = external_react_default.a.createElement;







const AuthMenu = dynamic_default()(() => __webpack_require__.e(/* import() */ 34).then(__webpack_require__.bind(null, "IQ03")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("IQ03")],
    modules: ['../auth-menu']
  }
});
const RightMenu = ({
  onLogout,
  avatar,
  isAuthenticated,
  onJoin
}) => {
  return right_menu_jsx(RightMenuBox, null, right_menu_jsx(nav_link["a" /* default */], {
    className: "menu-item",
    href: site_navigation["n" /* OFFER_MENU_ITEM */].href,
    label: site_navigation["n" /* OFFER_MENU_ITEM */].defaultMessage,
    intlId: site_navigation["n" /* OFFER_MENU_ITEM */].id
  }), right_menu_jsx(nav_link["a" /* default */], {
    className: "menu-item",
    href: site_navigation["h" /* HELP_MENU_ITEM */].href,
    label: site_navigation["h" /* HELP_MENU_ITEM */].defaultMessage,
    intlId: site_navigation["h" /* HELP_MENU_ITEM */].id,
    iconClass: "menu-icon",
    icon: right_menu_jsx(HelpIcon, null)
  }), right_menu_jsx(language_switcher["a" /* default */], null), right_menu_jsx(AuthMenu, {
    avatar: avatar,
    onJoin: onJoin,
    onLogout: onLogout,
    isAuthenticated: isAuthenticated
  }));
};
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./src/components/popover/popover.tsx + 2 modules
var popover = __webpack_require__("63jn");

// EXTERNAL MODULE: ./src/layouts/logo/logo.tsx + 1 modules
var logo_logo = __webpack_require__("9T+x");

// CONCATENATED MODULE: ./src/assets/icons/MenuDown.tsx
var MenuDown_jsx = external_react_default.a.createElement;

const MenuDown = ({
  color = 'currentColor',
  width = '12px',
  height = '6px'
}) => {
  return MenuDown_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12 6"
  }, MenuDown_jsx("path", {
    id: "Path_2897",
    "data-name": "Path 2897",
    d: "M0,63.75l6,6,6-6Z",
    transform: "translate(0 -63.75)",
    fill: color
  }));
};
// EXTERNAL MODULE: ./src/assets/icons/FruitsVegetable.tsx
var FruitsVegetable = __webpack_require__("pQO/");

// EXTERNAL MODULE: ./src/assets/icons/FacialCare.tsx
var FacialCare = __webpack_require__("17+d");

// CONCATENATED MODULE: ./src/assets/icons/Handbag.tsx
var Handbag_jsx = external_react_default.a.createElement;

const Handbag = () => {
  return Handbag_jsx("svg", {
    version: "1.1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 511.999 511.999",
    width: "15",
    fill: "currentColor"
  }, Handbag_jsx("g", null, Handbag_jsx("g", null, Handbag_jsx("path", {
    d: "M496.619,428.582l-51.45-221.82h-62.616v48.827H393.1v30.001h-51.096v-30.001h10.547v-48.827H159.448v48.827h10.547 v30.001H118.9v-30.001h10.547v-48.827H66.83l-51.45,221.82c-4.715,20.332,0.026,41.364,13.011,57.705 c12.985,16.341,32.401,25.712,53.272,25.712h348.672c20.871,0,40.289-9.372,53.273-25.712 C496.593,469.946,501.335,448.914,496.619,428.582z M298.917,285.591H271v23.18h-30.001v-23.18h-27.917V255.59h85.836V285.591z"
  }))), Handbag_jsx("g", null, Handbag_jsx("g", null, Handbag_jsx("path", {
    d: "M255.999,0c-69.781,0-126.553,56.772-126.553,126.552v80.21h30.001v-80.21c0-53.239,43.313-96.551,96.552-96.551 c53.238,0,96.552,43.313,96.552,96.551v80.21h30.001v-80.21C382.552,56.772,325.781,0,255.999,0z"
  }))), Handbag_jsx("g", null), Handbag_jsx("g", null), Handbag_jsx("g", null), Handbag_jsx("g", null), Handbag_jsx("g", null), Handbag_jsx("g", null), Handbag_jsx("g", null), Handbag_jsx("g", null), Handbag_jsx("g", null), Handbag_jsx("g", null), Handbag_jsx("g", null), Handbag_jsx("g", null), Handbag_jsx("g", null), Handbag_jsx("g", null), Handbag_jsx("g", null));
};
// CONCATENATED MODULE: ./src/assets/icons/DressIcon.tsx
var DressIcon_jsx = external_react_default.a.createElement;

const DressIcon = () => {
  return DressIcon_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "8.069",
    height: "16",
    viewBox: "0 0 8.069 16"
  }, DressIcon_jsx("g", {
    "data-name": "Group 2483",
    transform: "translate(0)"
  }, DressIcon_jsx("path", {
    "data-name": "Path 2037",
    d: "M128.461,11.218c-.107-.534-.341-3.042-.9-3.875a1.286,1.286,0,0,1-.169-.714.035.035,0,0,0,0-.006c.018-.257.046-.531.065-.677,0-.026.007-.051.01-.067.014-.086.033-.171.051-.257h0a14.282,14.282,0,0,0,.458-2.441c0-1.27-.651-1.644-.651-1.644.224-.95.384-1.462.384-1.462L127.522,0a9.387,9.387,0,0,0-.427,1.526,2.588,2.588,0,0,1-1.921.619,2.59,2.59,0,0,1-1.921-.619A9.4,9.4,0,0,0,122.825,0l-.192.075s.16.512.384,1.462c0,0-.651.374-.651,1.644a13.042,13.042,0,0,0,.437,2.339.086.086,0,0,0,0,.035c0,.008.006.019.009.031l.006.024c.027.109.066.3.072.311.013.077.027.216.039.358.005.049.009.1.012.145.005.068.01.132.014.184h-.006a1.3,1.3,0,0,1-.17.735c-.555.833-.79,3.341-.9,3.874s-.363,2.5-.491,3.074-.256,1.367-.256,1.367a3.288,3.288,0,0,0,1.068.128s-.075.224.576.16a12.831,12.831,0,0,1,1.75-.054c.448.021.135.107.64.107s.192-.085.64-.107a12.79,12.79,0,0,1,1.751.054c.651.064.576-.16.576-.16a3.3,3.3,0,0,0,1.067-.128s-.128-.79-.256-1.367S128.568,11.752,128.461,11.218Zm-1.139-5.467c-.05.069-.094.177-.036.224-.015.1-.024.206-.034.309-.058-.066-.243-.006-.243-.006-.138-.06.121.3.226.161,0,.058-.006.115-.009.173-.126-.009-.253-.018-.38-.025a.586.586,0,0,0-.061-.133c.014-.1-.1.014-.134.122-.273-.011-.547-.016-.822-.018-.057-.068-.244-.007-.244-.007-.028-.012-.04-.007-.039.008h-.028a.13.13,0,0,0,.015-.059.135.135,0,0,0-.27,0,.133.133,0,0,0,.015.06c-.361,0-.721.012-1.081.021a.7.7,0,0,0-.037-.069c.012-.082-.065-.015-.112.073l-.184,0a.436.436,0,0,0,.1-.178c.137-.086-.384-.065-.241.134a.182.182,0,0,0,.045.046l-.151,0a.078.078,0,0,0,0-.109c-.121-.176-.212.084-.222.114l-.263.006c0-.024,0-.048,0-.072.065-.01.28-.273.075-.315a.151.151,0,0,0-.1,0c-.01-.115-.024-.229-.043-.342a.6.6,0,0,0,.052-.12c.06-.037,0-.054-.085-.046-.01-.044-.022-.087-.035-.13l.2,0a.135.135,0,1,0,.26.051.132.132,0,0,0-.012-.055l.926-.017a.085.085,0,0,0,0,.117c.127.177.217-.064.236-.122l.426,0c.066.084.2.175.246.038a.184.184,0,0,0,.008-.041c.208,0,.417,0,.624,0a.133.133,0,0,0-.03.082.135.135,0,1,0,.27,0,.132.132,0,0,0-.029-.08c.342.006.681.022,1.021.042-.1.013-.226.069-.147.179.143.2.241-.134.241-.134.026-.016.028-.029.016-.037l.091.006s0,.005.007.007C127.34,5.661,127.331,5.706,127.322,5.751Z",
    transform: "translate(-121.139)",
    fill: "currentColor"
  }), DressIcon_jsx("path", {
    "data-name": "Path 2038",
    d: "M254.937,189.152c-.128.076.352.067.224-.119S254.937,189.152,254.937,189.152Z",
    transform: "translate(-250.536 -182.787)",
    fill: "currentColor"
  }), DressIcon_jsx("path", {
    "data-name": "Path 2039",
    d: "M237.086,189.725c-.088.209.221.124.221.124C237.441,189.916,237.175,189.516,237.086,189.725Z",
    transform: "translate(-233.276 -183.455)",
    fill: "currentColor"
  }), DressIcon_jsx("path", {
    "data-name": "Path 2040",
    d: "M246.479,182.469c-.253-.051-.088.275-.088.275C246.346,182.908,246.731,182.52,246.479,182.469Z",
    transform: "translate(-242.24 -176.491)",
    fill: "currentColor"
  }), DressIcon_jsx("path", {
    "data-name": "Path 2041",
    d: "M274.916,173.035c.084-.231-.247-.122-.247-.122C274.521,172.847,274.832,173.266,274.916,173.035Z",
    transform: "translate(-269.605 -167.228)",
    fill: "currentColor"
  }), DressIcon_jsx("path", {
    "data-name": "Path 2042",
    d: "M264.6,178.247c.245.021.054-.27.054-.27C264.673,177.816,264.35,178.226,264.6,178.247Z",
    transform: "translate(-259.81 -172.115)",
    fill: "currentColor"
  }), DressIcon_jsx("path", {
    "data-name": "Path 2043",
    d: "M255.758,174.715c.143.2.241-.134.241-.134C256.136,174.495,255.615,174.515,255.758,174.715Z",
    transform: "translate(-251.328 -168.82)",
    fill: "currentColor"
  }), DressIcon_jsx("circle", {
    "data-name": "Ellipse 71",
    cx: "0.135",
    cy: "0.135",
    r: "0.135",
    transform: "translate(2.892 6.148)",
    fill: "currentColor"
  }), DressIcon_jsx("path", {
    "data-name": "Path 2044",
    d: "M218.467,182.406c-.128-.187-.224.119-.224.119C218.114,182.6,218.595,182.592,218.467,182.406Z",
    transform: "translate(-215.043 -176.377)",
    fill: "currentColor"
  }), DressIcon_jsx("path", {
    "data-name": "Path 2045",
    d: "M219.072,192.782c-.148-.065.163.354.247.123S219.072,192.782,219.072,192.782Z",
    transform: "translate(-215.828 -186.447)",
    fill: "currentColor"
  }), DressIcon_jsx("path", {
    "data-name": "Path 2046",
    d: "M199.506,183.093c-.088.209.221.124.221.124C199.86,183.284,199.594,182.885,199.506,183.093Z",
    transform: "translate(-196.925 -177.041)",
    fill: "currentColor"
  }), DressIcon_jsx("path", {
    "data-name": "Path 2047",
    d: "M208.891,175.836c-.253-.051-.088.275-.088.275C208.758,176.276,209.143,175.887,208.891,175.836Z",
    transform: "translate(-205.882 -170.076)",
    fill: "currentColor"
  }), DressIcon_jsx("path", {
    "data-name": "Path 2048",
    d: "M289.843,186.1a.135.135,0,1,1-.135.135A.135.135,0,0,1,289.843,186.1Z",
    transform: "translate(-284.19 -180.009)",
    fill: "currentColor"
  }), DressIcon_jsx("path", {
    "data-name": "Path 2049",
    d: "M298.459,180.79c-.128.077.352.067.224-.119S298.459,180.79,298.459,180.79Z",
    transform: "translate(-292.633 -174.698)",
    fill: "currentColor"
  }), DressIcon_jsx("path", {
    "data-name": "Path 2050",
    d: "M279.489,192.851c.143.2.241-.134.241-.134C279.867,192.631,279.346,192.651,279.489,192.851Z",
    transform: "translate(-274.281 -186.362)",
    fill: "currentColor"
  }), DressIcon_jsx("path", {
    "data-name": "Path 2051",
    d: "M279.72,181.364c-.088.209.221.124.221.124C280.075,181.555,279.808,181.155,279.72,181.364Z",
    transform: "translate(-274.514 -175.368)",
    fill: "currentColor"
  }), DressIcon_jsx("path", {
    "data-name": "Path 2052",
    d: "M289.113,174.1c-.253-.051-.089.275-.089.275C288.98,174.541,289.366,174.153,289.113,174.1Z",
    transform: "translate(-283.478 -168.398)",
    fill: "currentColor"
  }), DressIcon_jsx("path", {
    "data-name": "Path 2053",
    d: "M228.78,171.616c.245.021.054-.27.054-.27C228.858,171.185,228.535,171.6,228.78,171.616Z",
    transform: "translate(-225.167 -165.701)",
    fill: "currentColor"
  }), DressIcon_jsx("path", {
    "data-name": "Path 2054",
    d: "M193.371,173.035c.084-.231-.247-.122-.247-.122C192.976,172.847,193.287,173.266,193.371,173.035Z",
    transform: "translate(-190.73 -167.228)",
    fill: "currentColor"
  }), DressIcon_jsx("path", {
    "data-name": "Path 2055",
    d: "M183.052,178.247c.245.021.054-.27.054-.27C183.13,177.816,182.807,178.226,183.052,178.247Z",
    transform: "translate(-180.936 -172.115)",
    fill: "currentColor"
  })));
};
// CONCATENATED MODULE: ./src/assets/icons/FurnitureIcon.tsx
var FurnitureIcon_jsx = external_react_default.a.createElement;

const FurnitureIcon = ({
  width = '15px',
  height = '13px',
  color = 'currentColor'
}) => {
  return FurnitureIcon_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 30.402 26.348"
  }, FurnitureIcon_jsx("g", {
    id: "bed",
    transform: "translate(0 -32)"
  }, FurnitureIcon_jsx("g", {
    id: "Group_2",
    "data-name": "Group 2",
    transform: "translate(0 32)"
  }, FurnitureIcon_jsx("g", {
    id: "Group_1",
    "data-name": "Group 1",
    transform: "translate(0 0)"
  }, FurnitureIcon_jsx("path", {
    "data-name": "Path 5",
    d: "M29.9,47.2h-.507v-1.52a2.533,2.533,0,0,0-1.52-2.319V35.547a.507.507,0,0,0-.3-.464,2.006,2.006,0,0,0,.3-1.056,2.027,2.027,0,1,0-4.054,0A2.006,2.006,0,0,0,24.1,35.04H6.305a2.006,2.006,0,0,0,.282-1.013,2.027,2.027,0,0,0-4.054,0,2.006,2.006,0,0,0,.3,1.056.507.507,0,0,0-.3.464v7.815a2.533,2.533,0,0,0-1.52,2.319V47.2H.507A.507.507,0,0,0,0,47.708V54.8a.507.507,0,0,0,.507.507h.507v2.533a.507.507,0,0,0,.507.507H3.547a.507.507,0,0,0,.507-.507V55.308H26.348v2.533a.507.507,0,0,0,.507.507h2.027a.507.507,0,0,0,.507-.507V55.308H29.9A.507.507,0,0,0,30.4,54.8V47.708A.507.507,0,0,0,29.9,47.2ZM25.842,33.013a1.013,1.013,0,1,1-1.013,1.013A1.013,1.013,0,0,1,25.842,33.013Zm-21.281,0a1.013,1.013,0,1,1-1.013,1.013A1.013,1.013,0,0,1,4.56,33.013Zm-1.013,3.04H26.855v7.094h-2.04a2.507,2.507,0,0,0,.52-1.52V40.614A2.537,2.537,0,0,0,22.8,38.08H18.748a2.537,2.537,0,0,0-2.533,2.534v1.013a2.507,2.507,0,0,0,.52,1.52H13.668a2.507,2.507,0,0,0,.52-1.52V40.614a2.537,2.537,0,0,0-2.533-2.534H7.6a2.537,2.537,0,0,0-2.533,2.534v1.013a2.507,2.507,0,0,0,.52,1.52H3.547Zm20.775,4.56v1.013a1.52,1.52,0,0,1-1.52,1.52H18.748a1.52,1.52,0,0,1-1.52-1.52V40.614a1.52,1.52,0,0,1,1.52-1.52H22.8A1.52,1.52,0,0,1,24.322,40.614Zm-11.147,0v1.013a1.52,1.52,0,0,1-1.52,1.52H7.6a1.52,1.52,0,0,1-1.52-1.52V40.614a1.52,1.52,0,0,1,1.52-1.52h4.054A1.52,1.52,0,0,1,13.174,40.614ZM2.027,45.681a1.52,1.52,0,0,1,1.52-1.52H26.855a1.52,1.52,0,0,1,1.52,1.52V47.2H2.027ZM3.04,57.335H2.027V55.308H3.04Zm25.335,0H27.362V55.308h1.013Zm1.013-3.04H1.013v-6.08H29.389Z",
    transform: "translate(0 -32)",
    fill: color
  }))), FurnitureIcon_jsx("g", {
    id: "Group_4",
    "data-name": "Group 4",
    transform: "translate(2.027 52.268)"
  }, FurnitureIcon_jsx("g", {
    id: "Group_3",
    "data-name": "Group 3"
  }, FurnitureIcon_jsx("path", {
    "data-name": "Path 6",
    d: "M34.533,352H32.507a.507.507,0,0,0,0,1.013h2.027a.507.507,0,0,0,0-1.013Z",
    transform: "translate(-32 -352)",
    fill: color
  }))), FurnitureIcon_jsx("g", {
    id: "Group_6",
    "data-name": "Group 6",
    transform: "translate(6.08 52.268)"
  }, FurnitureIcon_jsx("g", {
    id: "Group_5",
    "data-name": "Group 5"
  }, FurnitureIcon_jsx("path", {
    "data-name": "Path 7",
    d: "M117.788,352H96.507a.507.507,0,0,0,0,1.013h21.281a.507.507,0,0,0,0-1.013Z",
    transform: "translate(-96 -352)",
    fill: color
  })))));
};
// CONCATENATED MODULE: ./src/assets/icons/BookIcon.tsx
var BookIcon_jsx = external_react_default.a.createElement;

const BookIcon = ({
  width = '15px',
  height = '13px',
  color = 'currentColor'
}) => {
  return BookIcon_jsx("svg", {
    id: "book",
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 30.011 24.606"
  }, BookIcon_jsx("path", {
    "data-name": "Path 1",
    d: "M243.79,21.432V0l-.818.069a31.449,31.449,0,0,0-9.533,2.324L232,2.99V24.337l1.048-.436a32.716,32.716,0,0,1,9.861-2.4Zm0,0",
    transform: "translate(-216.459)",
    fill: color
  }), BookIcon_jsx("path", {
    "data-name": "Path 2",
    d: "M276.924,47.3h-1.608V66.054a.536.536,0,0,1-.492.536l-1.372.113q-.594.049-1.185.122c-.128.015-.255.036-.382.054-.265.035-.53.071-.794.113-.154.025-.307.053-.46.08-.236.041-.473.082-.709.129-.161.032-.322.068-.486.1-.225.048-.449.1-.672.149-.167.04-.334.082-.5.124-.217.054-.433.111-.648.172-.168.046-.335.095-.5.144-.214.063-.426.128-.637.2l-.5.161q-.318.107-.633.221c-.161.058-.322.117-.486.178l-.22.086h12.283Zm0,0",
    transform: "translate(-246.913 -44.129)",
    fill: color
  }), BookIcon_jsx("path", {
    "data-name": "Path 3",
    d: "M40.818.069,40,0V21.433l.951.081a32.5,32.5,0,0,1,9.85,2.412l.988.411V2.99l-1.438-.6A31.448,31.448,0,0,0,40.818.069Zm0,0",
    transform: "translate(-37.32)",
    fill: color
  }), BookIcon_jsx("path", {
    "data-name": "Path 4",
    d: "M0,47.3V68.733H12.292c-.066-.026-.132-.054-.2-.078-.153-.058-.308-.114-.462-.17-.218-.079-.435-.156-.654-.229q-.238-.08-.477-.156-.326-.107-.654-.2c-.161-.047-.322-.094-.482-.139-.22-.061-.441-.119-.663-.176-.161-.041-.322-.083-.486-.121-.225-.054-.45-.1-.676-.151-.161-.035-.322-.07-.482-.1-.234-.046-.468-.087-.7-.128L5.891,67c-.259-.041-.519-.076-.779-.111-.131-.018-.262-.038-.393-.053q-.59-.071-1.179-.122L2.1,66.59a.536.536,0,0,1-.49-.536V47.3Zm0,0",
    transform: "translate(0 -44.129)",
    fill: color
  }));
};
// CONCATENATED MODULE: ./src/assets/icons/MedicineIcon.tsx
var MedicineIcon_jsx = external_react_default.a.createElement;

const MedicineIcon = ({
  width = '15px',
  height = '13px',
  color = 'currentColor'
}) => {
  return MedicineIcon_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 16 16.001"
  }, MedicineIcon_jsx("g", {
    "data-name": "Group 175",
    transform: "translate(553.392 -314.288)"
  }, MedicineIcon_jsx("path", {
    "data-name": "Path 178",
    d: "M-541.294,317.863a3.621,3.621,0,0,1-1.017,2.627c-1.62,1.639-3.24,3.28-4.891,4.888a3.655,3.655,0,0,1-6.033-1.643,3.5,3.5,0,0,1,.907-3.579q2.366-2.417,4.782-4.784a3.491,3.491,0,0,1,3.662-.9,3.536,3.536,0,0,1,2.514,2.77A4.929,4.929,0,0,1-541.294,317.863Zm-4.4,3.7c.791-.786,1.6-1.527,2.329-2.336a1.853,1.853,0,0,0,.293-2.017,2.042,2.042,0,0,0-3.36-.669q-2.632,2.617-5.252,5.247a1.289,1.289,0,0,0-.09.1.594.594,0,0,0,.321.955.622.622,0,0,0,.625-.21q1.47-1.474,2.944-2.945c.048-.048.1-.094.166-.158Z",
    fill: color
  }), MedicineIcon_jsx("path", {
    "data-name": "Path 179",
    d: "M-408.46,467.03l1.364-.817a3.95,3.95,0,0,0,4.856,2.139,3.856,3.856,0,0,0,2.756-3.015h-6.746c.067-.075.1-.12.145-.162.444-.445.884-.893,1.336-1.329a.464.464,0,0,1,.292-.12c1.533-.007,3.066-.005,4.6-.005h.367a4.05,4.05,0,0,0-2.268-2.837l.83-1.383a5.562,5.562,0,0,1,3.106,5.582,5.621,5.621,0,0,1-4.764,5.019A5.6,5.6,0,0,1-408.46,467.03Z",
    transform: "translate(-139.595 -139.873)",
    fill: color
  })));
};
// CONCATENATED MODULE: ./src/assets/icons/Restaurant.tsx
var Restaurant_jsx = external_react_default.a.createElement;

const Restaurant = ({
  color = 'currentColor',
  width = '9px',
  height = '14px'
}) => {
  return Restaurant_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 9.919 14"
  }, Restaurant_jsx("g", {
    id: "Food",
    transform: "translate(-760.678 -69.1)"
  }, Restaurant_jsx("path", {
    id: "Path_2721",
    "data-name": "Path 2721",
    d: "M773.859,140.736a5.543,5.543,0,0,1-4.261-2.051l.749,7.838a.482.482,0,0,0,.48.48h6.2a.482.482,0,0,0,.48-.48l.619-7.84A5.544,5.544,0,0,1,773.859,140.736Z",
    transform: "translate(-8.192 -63.904)",
    fill: color
  }), Restaurant_jsx("path", {
    id: "Path_2722",
    "data-name": "Path 2722",
    d: "M765.543,76.5c-.08,0-.159-.005-.238-.011l-.1-.007v-4.5c0-.126-.063-.2-.09-.2h-.9c-.026,0-.091.071-.091.2v4.29L764,76.223c-.08-.027-.159-.057-.238-.088l-.066-.026V71.979a.629.629,0,0,1,.481-.666l-.062-.724c-.011-.127-.078-.192-.1-.192l-.895.09c-.012,0-.03.016-.047.048a.314.314,0,0,0-.027.163l.455,5.326-.163-.081c-.086-.044-.17-.088-.25-.134l-.048-.027-.149-1.75-.727-2.476c-.031-.106-.1-.163-.133-.163l-.862.294c-.03.01-.066.106-.031.225l.882,3.013-.081.043-.17-.2c-.08-.086-.151-.166-.216-.244l-.174-.217-.659-2.252a.786.786,0,0,1,.011-.49.508.508,0,0,1,.305-.319l.854-.293a.417.417,0,0,1,.134-.022.637.637,0,0,1,.559.489l.12.412L762.6,70.74a.777.777,0,0,1,.107-.476.488.488,0,0,1,.362-.242l.893-.089.042,0a.619.619,0,0,1,.542.616l.065.764h.149V69.769a.612.612,0,0,1,.529-.669h.9a.612.612,0,0,1,.529.669v1.822l.084-.885a.621.621,0,0,1,.543-.61l.048,0,.891.1a.489.489,0,0,1,.36.246.779.779,0,0,1,.1.477l-.075.783.029-.1a.637.637,0,0,1,.559-.489.416.416,0,0,1,.134.022l.855.293a.508.508,0,0,1,.3.319.786.786,0,0,1,.011.49l-.617,2.09-.156.187c-.067.08-.14.163-.224.253l-.162.163-.079-.046.819-2.786a.315.315,0,0,0,.005-.166c-.01-.035-.026-.055-.037-.059l-.856-.293c-.043,0-.109.056-.139.162l-1.247,4.261-.042.02-.126.056c-.079.034-.158.065-.238.094l-.137.051V73.41c0-.126-.063-.2-.09-.2h-.9c-.026,0-.091.071-.091.2v3.059l-.094.009c-.079.008-.158.014-.238.018l-.107.005v-.88h-.164V76.5Zm.269-1.345V73.41a.63.63,0,0,1,.467-.665V69.769c0-.131-.064-.2-.091-.2h-.9c-.028,0-.091.076-.091.2v1.552a.636.636,0,0,1,.447.658v3.175Zm1.426-2.413a.612.612,0,0,1,.528.669V74.8l.254-.868.289-3.053a.287.287,0,0,0-.04-.188.056.056,0,0,0-.031-.024l-.9-.1c-.027,0-.093.068-.1.191l-.189,1.987Z",
    fill: color
  })));
};
// CONCATENATED MODULE: ./src/assets/icons/category-menu-icons.ts








// CONCATENATED MODULE: ./src/layouts/header/menu/left-menu/left-menu.style.tsx


const LeftMenuBox = external_styled_components_default.a.div.withConfig({
  displayName: "left-menustyle__LeftMenuBox",
  componentId: "sc-155ois-0"
})(["display:flex;align-items:center;justify-content:space-between;flex-shrink:0;"]);
const MainMenu = external_styled_components_default.a.div.withConfig({
  displayName: "left-menustyle__MainMenu",
  componentId: "sc-155ois-1"
})(["display:flex;align-items:center;"]);
const MenuItem = external_styled_components_default.a.button.withConfig({
  displayName: "left-menustyle__MenuItem",
  componentId: "sc-155ois-2"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.2em;display:block;padding:12px 30px;border-radius:", ";transition:0.15s ease-in-out;display:flex;align-items:center;background-color:transparent;border:0;outline:0;cursor:pointer;svg{margin-right:15px;min-width:15px;}&:focus{outline:0;box-shadow:none;}@media (max-width:1400px){margin-right:10px;font-size:", "px;}@media only screen and (min-width:991px) and (max-width:1200px){padding:15px 30px;}&:hover{color:", ";}&.current-page{color:", ";background-color:#fff;}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const SelectedItem = external_styled_components_default.a.button.withConfig({
  displayName: "left-menustyle__SelectedItem",
  componentId: "sc-155ois-3"
})(["width:auto;height:38px;display:flex;align-items:center;background-color:", ";border:1px solid ", ";padding-top:0;padding-bottom:0;padding-left:15px;padding-right:15px;border-radius:", ";outline:0;min-width:150px;cursor:pointer;span{display:flex;align-items:center;font-family:", ";font-size:", "px;font-weight:", ";color:", ";text-decoration:none;&:first-child{margin-right:auto;}}"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'), Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const Icon = external_styled_components_default.a.div.withConfig({
  displayName: "left-menustyle__Icon",
  componentId: "sc-155ois-4"
})(["margin-right:7px;display:flex;align-items:center;justify-content:center;min-width:16px;"]);
const Arrow = external_styled_components_default.a.span.withConfig({
  displayName: "left-menustyle__Arrow",
  componentId: "sc-155ois-5"
})(["width:12px;margin-left:16px;"]);
// CONCATENATED MODULE: ./src/layouts/header/menu/left-menu/left-menu.tsx
var left_menu_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











const CategoryIcon = ({
  name
}) => {
  const TagName = category_menu_icons_namespaceObject[name];
  return !!TagName ? left_menu_jsx(TagName, null) : left_menu_jsx("p", null, "Invalid icon ", name);
};

const CategoryMenu = props => {
  const handleOnClick = item => {
    if (item.dynamic) {
      router_default.a.push('/[type]', `${item.href}`);
      props.onClick(item);
      return;
    }

    router_default.a.push(`${item.href}`);
    props.onClick(item);
  };

  return left_menu_jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, site_navigation["d" /* CATEGORY_MENU_ITEMS */].map(item => left_menu_jsx(MenuItem, _extends({
    key: item.id
  }, props, {
    onClick: () => handleOnClick(item)
  }), left_menu_jsx(CategoryIcon, {
    name: item.icon
  }), left_menu_jsx(external_react_intl_["FormattedMessage"], {
    id: item.id,
    defaultMessage: item.defaultMessage
  }))));
};

const LeftMenu = ({
  logo
}) => {
  const router = Object(router_["useRouter"])();
  const initialMenu = site_navigation["d" /* CATEGORY_MENU_ITEMS */].find(item => item.href === router.asPath);
  const [activeMenu, setActiveMenu] = external_react_default.a.useState(initialMenu !== null && initialMenu !== void 0 ? initialMenu : site_navigation["d" /* CATEGORY_MENU_ITEMS */][0]);
  return left_menu_jsx(LeftMenuBox, null, left_menu_jsx(logo_logo["a" /* default */], {
    imageUrl: logo,
    alt: 'Shop Logo',
    onClick: () => setActiveMenu(site_navigation["d" /* CATEGORY_MENU_ITEMS */][0])
  }), left_menu_jsx(MainMenu, null, left_menu_jsx(popover["a" /* default */], {
    className: "right",
    handler: left_menu_jsx(SelectedItem, null, left_menu_jsx("span", null, left_menu_jsx(Icon, null, left_menu_jsx(CategoryIcon, {
      name: activeMenu === null || activeMenu === void 0 ? void 0 : activeMenu.icon
    })), left_menu_jsx("span", null, left_menu_jsx(external_react_intl_["FormattedMessage"], {
      id: activeMenu === null || activeMenu === void 0 ? void 0 : activeMenu.id,
      defaultMessage: activeMenu === null || activeMenu === void 0 ? void 0 : activeMenu.defaultMessage
    }))), left_menu_jsx(Arrow, null, left_menu_jsx(MenuDown, null))),
    content: left_menu_jsx(CategoryMenu, {
      onClick: setActiveMenu
    })
  })));
};
// EXTERNAL MODULE: ./src/layouts/header/header.style.tsx
var header_style = __webpack_require__("HPEz");

// EXTERNAL MODULE: ./src/assets/images/logo.svg
var images_logo = __webpack_require__("40cp");
var logo_default = /*#__PURE__*/__webpack_require__.n(images_logo);

// EXTERNAL MODULE: ./src/assets/images/user.jpg
var user = __webpack_require__("OBDI");
var user_default = /*#__PURE__*/__webpack_require__.n(user);

// EXTERNAL MODULE: ./src/layouts/is-home-page.ts
var is_home_page = __webpack_require__("hp67");

// EXTERNAL MODULE: ./src/features/search/search.tsx + 2 modules
var search = __webpack_require__("Td6B");

// CONCATENATED MODULE: ./src/layouts/header/header.tsx
var header_jsx = external_react_default.a.createElement;













const Header = ({
  className
}) => {
  const {
    authState: {
      isAuthenticated
    },
    authDispatch
  } = external_react_default.a.useContext(auth_context["a" /* AuthContext */]);
  const {
    pathname,
    query
  } = Object(router_["useRouter"])();

  const handleLogout = () => {
    if (false) {}
  };

  const handleJoin = () => {
    authDispatch({
      type: 'SIGNIN'
    });
    Object(reuse_modal_["openModal"])({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: true,
      component: authentication_form["a" /* default */],
      closeComponent: '',
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 458,
        height: 'auto'
      }
    });
  };

  const type = pathname === '/restaurant' ? 'restaurant' : query.type;
  const showSearch = Object(is_home_page["a" /* isCategoryPage */])(type);
  return header_jsx(header_style["s" /* default */], {
    className: className,
    id: "layout-header"
  }, header_jsx(LeftMenu, {
    logo: logo_default.a
  }), showSearch && header_jsx(search["a" /* default */], {
    minimal: true,
    className: "headerSearch"
  }), header_jsx(RightMenu, {
    isAuthenticated: isAuthenticated,
    onJoin: handleJoin,
    onLogout: handleLogout,
    avatar: user_default.a
  }));
};

/* harmony default export */ var header = (Header);
// CONCATENATED MODULE: ./src/layouts/layout.style.tsx


const LayoutWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "layoutstyle__LayoutWrapper",
  componentId: "sc-1bo13ya-0"
})(["background-color:", ";.reuseModalHolder{padding:0;overflow:auto;border-radius:", " ", " 0 0;border:0;}"], Object(theme_get_["themeGet"])('colors.gray.200', '#F7F7F7'), Object(theme_get_["themeGet"])('radii.small', '3px'), Object(theme_get_["themeGet"])('radii.small', '3px'));
// CONCATENATED MODULE: ./src/layouts/app-layout.tsx
var app_layout_jsx = external_react_default.a.createElement;








const MobileHeader = dynamic_default()(() => __webpack_require__.e(/* import() */ 31).then(__webpack_require__.bind(null, "UTRa")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("UTRa")],
    modules: ['./header/mobile-header']
  }
});

const Layout = ({
  className,
  children,
  // deviceType: { mobile, tablet, desktop },
  token
}) => {
  const isSticky = Object(app_provider["c" /* useAppState */])('isSticky');
  const {
    pathname,
    query
  } = Object(router_["useRouter"])();
  const type = pathname === '/restaurant' ? 'restaurant' : query.type;
  const isHomePage = Object(is_home_page["a" /* isCategoryPage */])(type);
  return app_layout_jsx(LayoutWrapper, {
    className: `layoutWrapper ${className}`
  }, app_layout_jsx(external_react_stickynode_default.a, {
    enabled: isSticky,
    innerZ: 1001
  }, app_layout_jsx(MobileHeader, {
    className: `${isSticky ? 'sticky' : 'unSticky'} ${isHomePage ? 'home' : ''} desktop`
  }), app_layout_jsx(header, {
    className: `${isSticky && isHomePage ? 'sticky' : 'unSticky'} ${isHomePage ? 'home' : ''}`
  })), children);
};

/* harmony default export */ var app_layout = (Layout);
// EXTERNAL MODULE: /home/arafat/codes/pickbazar/client/node_modules/rc-drawer/assets/index.css
var assets = __webpack_require__("5sXw");

// EXTERNAL MODULE: /home/arafat/codes/pickbazar/client/node_modules/rc-table/assets/index.css
var rc_table_assets = __webpack_require__("fX+b");

// EXTERNAL MODULE: /home/arafat/codes/pickbazar/client/node_modules/rc-collapse/assets/index.css
var rc_collapse_assets = __webpack_require__("Nm2X");

// EXTERNAL MODULE: /home/arafat/codes/pickbazar/client/node_modules/react-multi-carousel/lib/styles.css
var styles = __webpack_require__("KBQx");

// EXTERNAL MODULE: ./src/components/multi-carousel/multi-carousel.style.css
var multi_carousel_style = __webpack_require__("OfaO");

// EXTERNAL MODULE: /home/arafat/codes/pickbazar/client/node_modules/@redq/reuse-modal/lib/index.css
var lib = __webpack_require__("2p10");

// EXTERNAL MODULE: ./src/assets/styles/global.style.tsx
var global_style = __webpack_require__("jbEd");

// EXTERNAL MODULE: ./src/site-settings/site-translation/lang/en.json
var en = __webpack_require__("r/UT");

// EXTERNAL MODULE: ./src/site-settings/site-translation/lang/ar.json
var ar = __webpack_require__("ojJp");

// EXTERNAL MODULE: ./src/site-settings/site-translation/lang/es.json
var es = __webpack_require__("wrRK");

// EXTERNAL MODULE: ./src/site-settings/site-translation/lang/de.json
var de = __webpack_require__("Ou8F");

// EXTERNAL MODULE: ./src/site-settings/site-translation/lang/zh.json
var zh = __webpack_require__("RHsn");

// EXTERNAL MODULE: ./src/site-settings/site-translation/lang/he.json
var he = __webpack_require__("ToeK");

// CONCATENATED MODULE: ./src/site-settings/site-translation/messages.ts






const messages = {
  en: en,
  ar: ar,
  es: es,
  de: de,
  zh: zh,
  he: he
};
// EXTERNAL MODULE: /home/arafat/codes/pickbazar/client/node_modules/typeface-lato/index.css
var typeface_lato = __webpack_require__("DdEw");

// EXTERNAL MODULE: /home/arafat/codes/pickbazar/client/node_modules/typeface-poppins/index.css
var typeface_poppins = __webpack_require__("mVRT");

// CONCATENATED MODULE: ./src/pages/_app.tsx

var _app_jsx = external_react_default.a.createElement;

function _app_extends() { _app_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _app_extends.apply(this, arguments); }










 // External CSS import here







 // Language translation messages



 // need to provide types

function ExtendedApp({
  Component,
  pageProps
}) {
  const mobile = Object(use_media["a" /* useMedia */])('(max-width: 580px)');
  const tablet = Object(use_media["a" /* useMedia */])('(max-width: 991px)');
  const desktop = Object(use_media["a" /* useMedia */])('(min-width: 992px)');
  const apolloClient = Object(apollo["b" /* useApollo */])(pageProps.initialApolloState);
  return _app_jsx(react_hooks_["ApolloProvider"], {
    client: apolloClient
  }, _app_jsx(external_styled_components_["ThemeProvider"], {
    theme: defaultTheme
  }, _app_jsx(language_provider["a" /* LanguageProvider */], {
    messages: messages
  }, _app_jsx(use_cart["a" /* CartProvider */], null, _app_jsx(app_provider["a" /* AppProvider */], null, _app_jsx(AuthProvider, null, _app_jsx(app_layout, null, _app_jsx(Component, _app_extends({}, pageProps, {
    deviceType: {
      mobile,
      tablet,
      desktop
    }
  }))), _app_jsx(global_style["a" /* GlobalStyle */], null)))))));
}

/***/ }),

/***/ "hp67":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isCategoryPage; });
/* harmony import */ var site_settings_site_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5l48");

const arr = [site_settings_site_navigation__WEBPACK_IMPORTED_MODULE_0__[/* HOME_PAGE */ "i"], site_settings_site_navigation__WEBPACK_IMPORTED_MODULE_0__[/* GROCERY_PAGE */ "g"], site_settings_site_navigation__WEBPACK_IMPORTED_MODULE_0__[/* CLOTHING_PAGE */ "e"], site_settings_site_navigation__WEBPACK_IMPORTED_MODULE_0__[/* MAKEUP_PAGE */ "k"], site_settings_site_navigation__WEBPACK_IMPORTED_MODULE_0__[/* BAGS_PAGE */ "b"], site_settings_site_navigation__WEBPACK_IMPORTED_MODULE_0__[/* FURNITURE_PAGE */ "f"], site_settings_site_navigation__WEBPACK_IMPORTED_MODULE_0__[/* BOOK_PAGE */ "c"], site_settings_site_navigation__WEBPACK_IMPORTED_MODULE_0__[/* MEDICINE_PAGE */ "l"], site_settings_site_navigation__WEBPACK_IMPORTED_MODULE_0__[/* RESTAURANT_PAGE */ "s"]];
function isCategoryPage(pathname) {
  return arr.includes(`/${pathname}`);
}

/***/ }),

/***/ "i2RQ":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "ik7d":
/***/ (function(module, exports) {

module.exports = require("rc-drawer");

/***/ }),

/***/ "isz7":
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "jbEd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InjectRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ExBD");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import { themeGet } from '@styled-system/theme-get';
// const TIMEOUT = 400;
// export const themed = (key) => (props) =>
//   css(get(props.theme, `customs.${key}`))(props.theme);
// export const themeGet = (path, fallback = null) => (props) =>
//   get(props.theme, path, fallback);

const InjectRTL = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "globalstyle__InjectRTL",
  componentId: "sc-1iprpk7-0"
})(["", ""], ({
  lang
}) => (lang === 'ar' || lang === 'he') && `
    font-family: 'Cairo', sans-serif;
    `); // const heading = {
//   color: 'text',
//   fontFamily: 'heading',
//   lineHeight: 'heading',
//   fontWeight: 'heading',
// };
// export const GlobalStyle = createGlobalStyle`
//   html {
//     box-sizing: border-box;
//   }
//   *, *:before, *:after {
//     box-sizing: inherit;
//   }
//   body{
//     margin: 0;
//     font-family: ${themeGet('fontFamily.0', 'sans-serif')};
//   }
//   h1,h2,h3,h4,h5,h6  {
//     font-family: ${themeGet('fontFamily.1', 'sans-serif')};
//     margin: 0;
//   }
//   p,a,span,button,li,div  {
//     font-family: ${themeGet('fontFamily.0', 'sans-serif')};
//     margin: 0;
//   }
//   ul{
//     margin: 0;
//     padding: 0;
//   }
//   li{
//     list-style: none;
//   }
//   a{
//     text-decoration: none;
//   }
//   .quick-view-overlay{
//     background-color: rgba(0,0,0,.5)
//   }
//   .add-address-modal,
//   .add-contact-modal{
//     box-shadow: 0 10px 40px rgba(0,0,0,0.16);
//     border-radius: 3px !important;
//     .innerRndComponent{
//       width: 100%;
//       padding: 30px;
//       height: auto;
//       background-color: #f7f8f9;
//       border: 0;
//       box-sizing: border-box;
//     }
//   }
//   .search-modal-mobile{
//     transform: none!important;
//     max-width: none!important;
//     max-height: none!important;
//     top: 0!important;
//     left: 0!important;
//     background: transparent!important;;
//     border-radius: 0!important;
//   }
//   .reuseModalCloseBtn{
//     right: 10px!important;
//     background-color: #ffffff!important;
//     color: #222222!important;
//     border-radius: 15px!important;
//     padding: 0 9px!important;
//     box-shadow: 0 2px 8px rgba(0,0,0,0.4);
//   }
//   .page-transition-enter {
//     opacity: 0;
//     transform: translate3d(0, 20px, 0);
//   }
//   .page-transition-enter-active {
//     opacity: 1;
//     transform: translate3d(0, 0, 0);
//     transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
//   }
//   .page-transition-exit {
//     opacity: 1;
//   }
//   .page-transition-exit-active {
//     opacity: 0;
//     transition: opacity ${TIMEOUT}ms;
//   }
//   .loading-indicator-appear,
//   .loading-indicator-enter {
//     opacity: 0;
//   }
//   .loading-indicator-appear-active,
//   .loading-indicator-enter-active {
//     opacity: 1;
//     transition: opacity ${TIMEOUT}ms;
//   }
//   .image-item{
//     padding: 0 15px;
//   }
//   @media (max-width: 1199px) and (min-width: 991px) {
//     .image-item{
//       padding-left: 10px;
//       padding-right: 10px;
//     }
//   }
//   @media (max-width: 768px) {
//     .image-item{
//       padding-left: 7.5px;
//       padding-right: 7.5px;
//     }
//   }
//   .rc-table-fixed-header .rc-table-scroll .rc-table-header{
//     margin-bottom: 0 !important;
//     padding-bottom: 0 !important;
//     th {
//       padding: 8px 20px;
//       }
//   }
//   .drawer-content-wrapper{
//     *:focus {
//       outline: none;
//     }
//   }
//   .rc-table-content{
//     border: 0;
//   }
// `;

const GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(({
  theme
}) => _styled_system_css__WEBPACK_IMPORTED_MODULE_2___default()(_objectSpread({
  '*, *::before, *::after': {
    boxSizing: 'border-box'
  },
  body: {
    margin: 0,
    fontFamily: 'body',
    fontWeight: 'regular',
    fontSize: 'base',
    lineHeight: '1.5',
    backgroundColor: 'white',
    transition: Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["get"])(theme, 'customs.transition')
  },
  h1: {
    fontFamily: 'heading',
    fontSize: '5xl',
    margin: 0
  },
  h2: {
    fontFamily: 'heading',
    fontSize: '3xl',
    margin: 0
  },
  h3: {
    fontFamily: 'heading',
    fontSize: '2xl',
    margin: 0
  },
  h4: {
    fontFamily: 'heading',
    fontSize: 'xl',
    margin: 0
  },
  h5: {
    fontFamily: 'heading',
    fontSize: 'md',
    margin: 0
  },
  h6: {
    fontFamily: 'heading',
    fontSize: 'base',
    margin: 0
  },
  'p,span,button,li,div': {
    fontFamily: 'body',
    margin: 0
  },
  a: {
    fontFamily: 'body',
    textDecoration: 'none'
  },
  ul: {
    margin: 0,
    padding: 0
  },
  li: {
    listStyle: 'none'
  },
  pre: {
    fontFamily: 'monospace',
    overflowX: 'auto',
    code: {
      color: 'inherit'
    }
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 'inherit'
  },
  table: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0
  },
  th: {
    textAlign: 'left',
    borderBottomStyle: 'solid'
  },
  td: {
    textAlign: 'left',
    borderBottomStyle: 'solid'
  },
  img: {
    maxWidth: '100%'
  },
  '.quick-view-overlay': {
    backgroundColor: 'rgba(0,0,0,.5)'
  },
  '.add-address-modal,.add-contact-modal': {
    boxShadow: '0 10px 40px rgba(0,0,0,0.16)',
    borderRadius: '3px !important',
    '.innerRndComponent': {
      width: '100%',
      padding: '30px',
      height: 'auto',
      backgroundColor: '#f7f8f9',
      border: 0,
      boxSizing: 'border-box'
    }
  },
  '.search-modal-mobile': {
    transform: 'none!important',
    maxWidth: 'none!important',
    maxHeight: 'none!important',
    top: '0!important',
    left: '0!important',
    background: 'transparent!important',
    borderRadius: '0!important'
  },
  '.reuseModalCloseBtn': {
    right: '10px!important',
    backgroundColor: '#ffffff!important',
    color: '#222222!important',
    borderRadius: '15px!important',
    padding: '0 9px!important',
    boxShadow: '0 2px 8px rgba(0,0,0,0.4)'
  },
  '.image-item': {
    padding: '0 15px'
  },
  '@media (max-width: 1199px) and (min-width: 991px)': {
    '.image-item': {
      paddingLeft: '10px',
      paddingRight: '10px'
    }
  },
  '@media (max-width: 768px)': {
    '.image-item': {
      paddingLeft: '7.5px',
      paddingRight: '7.5px'
    }
  },
  '.rc-table-fixed-header .rc-table-scroll .rc-table-header': {
    marginBottom: '0 !important',
    paddingBottom: '0 !important',
    th: {
      padding: '8px 20px'
    }
  },
  '.drawer-content-wrapper': {
    '*:focus': {
      outline: 'none'
    }
  },
  '.rc-table-content': {
    border: 0
  }
}, theme.globals)));

/***/ }),

/***/ "jvFD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("KeDb")


/***/ }),

/***/ "k004":
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "kp67":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ AuthenticationForm; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// EXTERNAL MODULE: ./src/components/button/button.tsx
var button_button = __webpack_require__("B68Z");

// CONCATENATED MODULE: ./src/features/authentication-form/authentication-form.style.tsx




const IconWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "authentication-formstyle__IconWrapper",
  componentId: "sc-92tj4w-0"
})(["display:flex;margin-right:6px;"]);
const Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "authentication-formstyle__Wrapper",
  componentId: "sc-92tj4w-1"
})(["text-align:center;background-color:", ";"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'));
const Container = external_styled_components_default.a.div.withConfig({
  displayName: "authentication-formstyle__Container",
  componentId: "sc-92tj4w-2"
})(["padding:40px 60px 0;@media (max-width:768px){padding:40px 30px 0;}"]);
const LogoWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "authentication-formstyle__LogoWrapper",
  componentId: "sc-92tj4w-3"
})(["margin-bottom:30px;img{max-width:160px;}"]);
const Heading = external_styled_components_default.a.h3.withConfig({
  displayName: "authentication-formstyle__Heading",
  componentId: "sc-92tj4w-4"
})(["margin-bottom:10px;font-family:", ";font-size:", "px;font-weight:", ";color:", ";"], Object(theme_get_["themeGet"])('fonts.heading', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.lg', '21'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const SubHeading = external_styled_components_default.a.span.withConfig({
  displayName: "authentication-formstyle__SubHeading",
  componentId: "sc-92tj4w-5"
})(["margin-bottom:30px;font-family:", ";font-size:", "px;font-weight:", ";color:", ";display:block;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const OfferSection = external_styled_components_default.a.div.withConfig({
  displayName: "authentication-formstyle__OfferSection",
  componentId: "sc-92tj4w-6"
})(["padding:20px;background-color:", ";color:", ";display:flex;justify-content:center;align-items:center;"], Object(theme_get_["themeGet"])('colors.gray.200', '#F7F7F7'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const Offer = external_styled_components_default.a.p.withConfig({
  displayName: "authentication-formstyle__Offer",
  componentId: "sc-92tj4w-7"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin:0;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const HelperText = external_styled_components_default.a.p.withConfig({
  displayName: "authentication-formstyle__HelperText",
  componentId: "sc-92tj4w-8"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin:0;text-align:center;width:100%;a{font-weight:", ";color:", ";text-decoration:underline;}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.blue.link', '#4285f4')); // export const Input = styled.input`
//   width: 100%;
//   height: 48px;
//   border-radius: ${themeGet('radii.base', '6px')};
//   background-color: ${themeGet('colors.gray.200', '#f7f7f7')};
//   border: 1px solid ${themeGet('colors.gray.700', '#e6e6e6')};
//   font-family: ${themeGet('fonts.body', 'Lato')};
//   font-size: ${themeGet('fontSizes.base', '15')}px;
//   font-weight: ${themeGet('fontWeights.regular', '400')};
//   color: ${themeGet('colors.text.bold', '#0D1136')};
//   line-height: 19px;
//   padding: 0 18px;
//   box-sizing: border-box;
//   transition: border-color 0.25s ease;
//   margin-bottom: 10px;
//   &:hover,
//   &:focus {
//     outline: 0;
//   }
//   &:focus {
//     border-color: ${themeGet('colors.primary.regular', '#009e7f')};
//   }
//   &::placeholder {
//     color: ${themeGet('colors.text.regular', '#77798c')};
//     font-size: calc(${themeGet('fontSizes.base', '15')}px + 1px);
//   }
//   &::-webkit-inner-spin-button,
//   &::-webkit-outer-spin-button {
//     -webkit-appearance: none;
//     margin: 0;
//   }
//   &.disabled {
//     .inner-wrap {
//       cursor: not-allowed;
//       opacity: 0.6;
//     }
//   }
// `;

const Divider = external_styled_components_default.a.div.withConfig({
  displayName: "authentication-formstyle__Divider",
  componentId: "sc-92tj4w-9"
})(["padding:15px 0;width:100%;display:flex;justify-content:center;align-items:center;position:relative;span{font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1;background-color:", ";z-index:1;position:relative;padding:0 10px;}&::before{content:'';width:100%;height:1px;background-color:", ";position:absolute;top:50%;}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'));
const LinkButton = external_styled_components_default.a.button.withConfig({
  displayName: "authentication-formstyle__LinkButton",
  componentId: "sc-92tj4w-10"
})(["background-color:transparent;border:0;outline:0;box-shadow:none;padding:0;font-size:calc(", "px - 1px);font-weight:", ";color:", ";text-decoration:underline;cursor:pointer;"], Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
// EXTERNAL MODULE: ./src/assets/icons/Facebook.tsx
var Facebook = __webpack_require__("lJ4R");

// CONCATENATED MODULE: ./src/assets/icons/Google.tsx
var __jsx = external_react_default.a.createElement;

const Google = ({
  color = 'currentColor',
  width = '17px',
  height = '17px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 16.677 17"
  }, __jsx("path", {
    d: "M68.579,55.29l-.086-.364H60.584v3.348h4.725a4.73,4.73,0,0,1-4.627,3.556,5.533,5.533,0,0,1-3.724-1.484,5.316,5.316,0,0,1-1.586-3.752,5.483,5.483,0,0,1,1.557-3.748,5.3,5.3,0,0,1,3.7-1.447,4.825,4.825,0,0,1,3.147,1.226l2.379-2.367a8.417,8.417,0,0,0-5.6-2.158A8.391,8.391,0,0,0,52,56.6,8.541,8.541,0,0,0,54.326,62.5a8.873,8.873,0,0,0,6.4,2.6,7.891,7.891,0,0,0,5.747-2.416,8.486,8.486,0,0,0,2.207-5.878,9.788,9.788,0,0,0-.1-1.516Z",
    transform: "translate(-52 -48.1)",
    fill: color
  }));
};
// EXTERNAL MODULE: ./src/contexts/auth/auth.context.tsx
var auth_context = __webpack_require__("QfjN");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: ./src/components/forms/input.tsx
var input = __webpack_require__("VnWI");

// CONCATENATED MODULE: ./src/features/authentication-form/login.tsx
var login_jsx = external_react_default.a.createElement;








function SignInModal() {
  const intl = Object(external_react_intl_["useIntl"])();
  const {
    authDispatch
  } = Object(external_react_["useContext"])(auth_context["a" /* AuthContext */]);
  const [email, setEmail] = external_react_default.a.useState('');
  const [password, setPassword] = external_react_default.a.useState('');

  const toggleSignUpForm = () => {
    authDispatch({
      type: 'SIGNUP'
    });
  };

  const toggleForgotPassForm = () => {
    authDispatch({
      type: 'FORGOTPASS'
    });
  };

  const loginCallback = () => {
    if (false) {}
  };

  return login_jsx(Wrapper, null, login_jsx(Container, null, login_jsx(Heading, null, login_jsx(external_react_intl_["FormattedMessage"], {
    id: "welcomeBack",
    defaultMessage: "Welcome Back"
  })), login_jsx(SubHeading, null, login_jsx(external_react_intl_["FormattedMessage"], {
    id: "loginText",
    defaultMessage: "Login with your email & password"
  })), login_jsx("form", {
    onSubmit: loginCallback
  }, login_jsx(input["a" /* Input */], {
    type: "email",
    placeholder: intl.formatMessage({
      id: 'emailAddressPlaceholder',
      defaultMessage: 'Email Address.'
    }),
    value: email,
    onChange: e => setEmail(e.target.value),
    required: true,
    height: "48px",
    backgroundColor: "#F7F7F7",
    mb: "10px"
  }), login_jsx(input["a" /* Input */], {
    type: "password",
    placeholder: intl.formatMessage({
      id: 'passwordPlaceholder',
      defaultMessage: 'Password (min 6 characters)'
    }),
    value: password,
    onChange: e => setPassword(e.target.value),
    required: true,
    height: "48px",
    backgroundColor: "#F7F7F7",
    mb: "10px"
  }), login_jsx(button_button["a" /* Button */], {
    variant: "primary",
    size: "big",
    style: {
      width: '100%'
    },
    type: "submit"
  }, login_jsx(external_react_intl_["FormattedMessage"], {
    id: "continueBtn",
    defaultMessage: "Continue"
  }))), login_jsx(Divider, null, login_jsx("span", null, login_jsx(external_react_intl_["FormattedMessage"], {
    id: "orText",
    defaultMessage: "or"
  }))), login_jsx(button_button["a" /* Button */], {
    variant: "primary",
    size: "big",
    style: {
      width: '100%',
      backgroundColor: '#4267b2',
      marginBottom: 10
    },
    onClick: loginCallback
  }, login_jsx(IconWrapper, null, login_jsx(Facebook["a" /* Facebook */], null)), login_jsx(external_react_intl_["FormattedMessage"], {
    id: "continueFacebookBtn",
    defaultMessage: "Continue with Facebook"
  })), login_jsx(button_button["a" /* Button */], {
    variant: "primary",
    size: "big",
    style: {
      width: '100%',
      backgroundColor: '#4285f4'
    },
    onClick: loginCallback
  }, login_jsx(IconWrapper, null, login_jsx(Google, null)), login_jsx(external_react_intl_["FormattedMessage"], {
    id: "continueGoogleBtn",
    defaultMessage: "Continue with Google"
  })), login_jsx(Offer, {
    style: {
      padding: '20px 0'
    }
  }, login_jsx(external_react_intl_["FormattedMessage"], {
    id: "dontHaveAccount",
    defaultMessage: "Don't have any account?"
  }), ' ', login_jsx(LinkButton, {
    onClick: toggleSignUpForm
  }, login_jsx(external_react_intl_["FormattedMessage"], {
    id: "signUpBtnText",
    defaultMessage: "Sign Up"
  })))), login_jsx(OfferSection, null, login_jsx(Offer, null, login_jsx(external_react_intl_["FormattedMessage"], {
    id: "forgotPasswordText",
    defaultMessage: "Forgot your password?"
  }), ' ', login_jsx(LinkButton, {
    onClick: toggleForgotPassForm
  }, login_jsx(external_react_intl_["FormattedMessage"], {
    id: "resetText",
    defaultMessage: "Reset It"
  })))));
}
// EXTERNAL MODULE: /home/arafat/codes/pickbazar/client/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./src/features/authentication-form/register.tsx
var register_jsx = external_react_default.a.createElement;








function SignOutModal() {
  const intl = Object(external_react_intl_["useIntl"])();
  const {
    authDispatch
  } = Object(external_react_["useContext"])(auth_context["a" /* AuthContext */]);

  const toggleSignInForm = () => {
    authDispatch({
      type: 'SIGNIN'
    });
  };

  return register_jsx(Wrapper, null, register_jsx(Container, null, register_jsx(Heading, null, register_jsx(external_react_intl_["FormattedMessage"], {
    id: "signUpBtnText",
    defaultMessage: "Sign Up"
  })), register_jsx(SubHeading, null, register_jsx(external_react_intl_["FormattedMessage"], {
    id: "signUpText",
    defaultMessage: "Every fill is required in sign up"
  })), register_jsx(input["a" /* Input */], {
    type: "text",
    placeholder: intl.formatMessage({
      id: 'emailAddressPlaceholder',
      defaultMessage: 'Email Address or Contact No.'
    }),
    height: "48px",
    backgroundColor: "#F7F7F7",
    mb: "10px"
  }), register_jsx(input["a" /* Input */], {
    type: "email",
    placeholder: intl.formatMessage({
      id: 'passwordPlaceholder',
      defaultMessage: 'Password (min 6 characters)'
    }),
    height: "48px",
    backgroundColor: "#F7F7F7",
    mb: "10px"
  }), register_jsx(HelperText, {
    style: {
      padding: '20px 0 30px'
    }
  }, register_jsx(external_react_intl_["FormattedMessage"], {
    id: "signUpText",
    defaultMessage: "By signing up, you agree to Pickbazar's"
  }), "\xA0", register_jsx(link_default.a, {
    href: "/"
  }, register_jsx("a", null, register_jsx(external_react_intl_["FormattedMessage"], {
    id: "termsConditionText",
    defaultMessage: "Terms & Condition"
  })))), register_jsx(button_button["a" /* Button */], {
    variant: "primary",
    size: "big",
    width: "100%",
    type: "submit"
  }, register_jsx(external_react_intl_["FormattedMessage"], {
    id: "continueBtn",
    defaultMessage: "Continue"
  })), register_jsx(Divider, null, register_jsx("span", null, register_jsx(external_react_intl_["FormattedMessage"], {
    id: "orText",
    defaultMessage: "or"
  }))), register_jsx(button_button["a" /* Button */], {
    variant: "primary",
    size: "big",
    style: {
      width: '100%',
      backgroundColor: '#4267b2',
      marginBottom: 10
    }
  }, register_jsx(IconWrapper, null, register_jsx(Facebook["a" /* Facebook */], null)), register_jsx(external_react_intl_["FormattedMessage"], {
    id: "continueFacebookBtn",
    defaultMessage: "Continue with Facebook"
  })), register_jsx(button_button["a" /* Button */], {
    variant: "primary",
    size: "big",
    style: {
      width: '100%',
      backgroundColor: '#4285f4'
    }
  }, register_jsx(IconWrapper, null, register_jsx(Google, null)), register_jsx(external_react_intl_["FormattedMessage"], {
    id: "continueGoogleBtn",
    defaultMessage: "Continue with Google"
  })), register_jsx(Offer, {
    style: {
      padding: '20px 0'
    }
  }, register_jsx(external_react_intl_["FormattedMessage"], {
    id: "alreadyHaveAccount",
    defaultMessage: "Already have an account?"
  }), ' ', register_jsx(LinkButton, {
    onClick: toggleSignInForm
  }, register_jsx(external_react_intl_["FormattedMessage"], {
    id: "loginBtnText",
    defaultMessage: "Login"
  })))));
}
// CONCATENATED MODULE: ./src/features/authentication-form/forgot-password.tsx
var forgot_password_jsx = external_react_default.a.createElement;





function ForgotPasswordModal() {
  const {
    authDispatch
  } = Object(external_react_["useContext"])(auth_context["a" /* AuthContext */]);
  const intl = Object(external_react_intl_["useIntl"])();

  const toggleSignInForm = () => {
    authDispatch({
      type: 'SIGNIN'
    });
  };

  return forgot_password_jsx(Wrapper, null, forgot_password_jsx(Container, {
    style: {
      paddingBottom: 30
    }
  }, forgot_password_jsx(Heading, null, forgot_password_jsx(external_react_intl_["FormattedMessage"], {
    id: "forgotPassText",
    defaultMessage: "Forgot Password"
  })), forgot_password_jsx(SubHeading, null, forgot_password_jsx(external_react_intl_["FormattedMessage"], {
    id: "sendResetPassText",
    defaultMessage: "We'll send you a link to reset your password"
  })), forgot_password_jsx(input["a" /* Input */], {
    type: "text",
    placeholder: intl.formatMessage({
      id: 'emailAddressPlaceholder',
      defaultMessage: 'Email Address or Contact No.'
    }),
    height: "48px",
    backgroundColor: "#F7F7F7",
    mb: "10px"
  }), forgot_password_jsx(button_button["a" /* Button */], {
    variant: "primary",
    size: "big",
    style: {
      width: '100%'
    },
    type: "submit"
  }, forgot_password_jsx(external_react_intl_["FormattedMessage"], {
    id: "resetPasswordBtn",
    defaultMessage: "Reset Password"
  })), forgot_password_jsx(Offer, {
    style: {
      padding: '20px 0 0'
    }
  }, forgot_password_jsx(external_react_intl_["FormattedMessage"], {
    id: "backToSign",
    defaultMessage: "Back to"
  }), ' ', forgot_password_jsx(LinkButton, {
    onClick: toggleSignInForm
  }, forgot_password_jsx(external_react_intl_["FormattedMessage"], {
    id: "loginBtnText",
    defaultMessage: "Login"
  })))));
}
// CONCATENATED MODULE: ./src/features/authentication-form/index.tsx
var authentication_form_jsx = external_react_default.a.createElement;





function AuthenticationForm() {
  const {
    authState
  } = Object(external_react_["useContext"])(auth_context["a" /* AuthContext */]);
  let RenderForm;

  if (authState.currentForm === 'signIn') {
    RenderForm = SignInModal;
  }

  if (authState.currentForm === 'signUp') {
    RenderForm = SignOutModal;
  }

  if (authState.currentForm === 'forgotPass') {
    RenderForm = ForgotPasswordModal;
  }

  return authentication_form_jsx(RenderForm, null);
}

/***/ }),

/***/ "lJ4R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Facebook; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Facebook = ({
  color = 'currentColor',
  width = '17px',
  height = '17px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 17 17"
  }, __jsx("path", {
    "data-name": "_ionicons_svg_logo-facebook (1)",
    d: "M80.061,64H64.939a.939.939,0,0,0-.939.939V80.061a.939.939,0,0,0,.939.939H72.5V74.271H70.468V71.792H72.5V69.959a3.23,3.23,0,0,1,3.484-3.391c.939,0,1.948.071,2.183.1v2.293H76.6c-1.067,0-1.271.5-1.271,1.248v1.58h2.541l-.332,2.479H75.333V81h4.728A.939.939,0,0,0,81,80.061V64.939A.939.939,0,0,0,80.061,64Z",
    transform: "translate(-64 -64)",
    fill: color
  }));
};

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "mVRT":
/***/ (function(module, exports) {



/***/ }),

/***/ "ojJp":
/***/ (function(module) {

module.exports = JSON.parse("{\"nav.home\":\"الصفحة الرئيسية\",\"nav.grocery\":\"بقالة\",\"nav.makeup\":\"ميك أب\",\"nav.bags\":\"أكياس\",\"nav.clothing\":\"ملابس\",\"nav.furniture\":\"أثاث المنزل\",\"nav.book\":\"كتاب\",\"nav.medicine\":\"الدواء\",\"nav.foods\":\"الأطعمة\",\"nav.terms_and_services\":\"الشروط والخدمات\",\"nav.privacy_policy\":\"سياسة خاصة\",\"nav.offer\":\"عرض\",\"nav.help\":\"تحتاج مساعدة\",\"nav.profile\":\"الملف الشخصي\",\"nav.checkout\":\"الدفع\",\"nav.order_received\":\"طلب الفاتورة\",\"nav.logout\":\"الخروج\",\"nav.login\":\"تسجيل الدخول\",\"nav.order\":\"طلبك\",\"groceriesTitle\":\"تسليم البقالة في {minute} دقيقة\",\"groceriesSubTitle\":\"احصل على الأطعمة الصحية والوجبات الخفيفة التي تقدمها على عتبة دارك طوال اليوم\",\"makeupTitle\":\"مكياج ذو العلامات التجارية والمستوردة\",\"makeupSubTitle\":\"أسهل وأرخص وسيلة للحصول على الماكياج الخاص بك المستوردة والمستوردة\",\"bagsTitle\":\"الحقائب ذات العلامات التجارية الحصرية\",\"bagsSubTitle\":\"احصل على حقائبك الحصرية والعلامة التجارية التي تم تسليمها إليك في أي وقت من الأوقات\",\"womenClothsTitle\":\"تسوق مصمم الفساتين الخاصة بك\",\"womenClothsSubTitle\":\"على استعداد لارتداء الفساتين المخصصة لك من الانترنت. عجلوا في حين يستمر المخزون.\",\"furnitureTitle\":\"الأثاث الحصري بأسعار رخيصة\",\"furnitureSubTitle\":\"اجعل منزلك منزلاً من خلال مجموعتنا الواسعة من الأثاث الجميل\",\"booksTitle\":\"متجر الكتب الخاصة بك\",\"booksSubTitle\":\"احصل على كتبك المفضلة من مجموعة واسعة من الكتب.\",\"medicineTitle\":\"سلم الدواء الخاص بك\",\"medicineSubTitle\":\"قل وداعا لجميع همومك الصحية معنا\",\"foodsTitle\":\"أنت تأمر نحن تسليم\",\"foodsSubTitle\":\"احصل على طعامك المفضل في أقل من ساعة\",\"alternativeCheckout\":\"بديل الخروج\",\"termAndConditionHelper\":\"من خلال إجراء هذا الشراء فإنك توافق على موقعنا\",\"termAndCondition\":\"الأحكام والشروط.\",\"reqMedicine\":\"طلب الطب\",\"submitRequest\":\"تقديم الطلب\",\"noteHead\":\"ملحوظة\",\"noteDescription\":\"سيتأكد توفر المنتج والسعر عبر الهاتف. رسوم التوصيل داخل المدينة 5 دولارات وخارج المدينة 10 دولارات.\",\"rmMedicineName\":\"اسم الدواء\",\"rmMedicineQuantity\":\"كمية\",\"rmPrescripttionUpload\":\"حمل الوصفة الطبية الخاصة بك\",\"rmUploadText\":\"اسحب / حمل ملفك هنا.\",\"cartTitle\":\"طلبك\",\"discountText\":\"خصم\",\"vatText\":\"مدفوع. ضريبة القيمة المضافة\",\"searchPlaceholder\":\"ابحث عن منتجاتك من هنا\",\"searchButtonText\":\"بحث\",\"mobileSignInButtonText\":\"إنضم إلى\",\"navlinkAccountSettings\":\"إعدادات حسابك\",\"cartItems\":\"العناصر\",\"cartItem\":\"بند\",\"addCartButton\":\"عربة التسوق\",\"addToCartButton\":\"أضف إلى السلة\",\"backBtn\":\"عودة\",\"noProductFound\":\"لا توجد منتجات\",\"specialCode\":\"هل لديك قسيمة؟\",\"couponApplied\":\"القسيمة المطبقة\",\"couponPlaceholder\":\"أدخل رمز القسيمة هنا\",\"sidebarYourOrder\":\"طلب\",\"profilePageTitle\":\"ملفك الشخصي\",\"profileNameField\":\"اسم\",\"profileEmailField\":\"البريد الإلكتروني\",\"profileSaveBtn\":\"حفظ\",\"contactNumberTItle\":\"رقم الاتصال\",\"addContactBtn\":\"إضافة جهة اتصال\",\"deliveryAddresTitle\":\"عنوان التسليم\",\"addAddressBtn\":\"اضف عنوان\",\"addNew\":\"اضف جديد\",\"addCardBtn\":\"إضافة بطاقة\",\"savedCardsId\":\"البطاقات المحفوظة\",\"savedContactId\":\"حفظ جهة الاتصال\",\"savedAddressId\":\"حفظ العنوان\",\"paymentCardTitle\":\"بطاقة المدفوعات\",\"siteFooter\":\"Pickbazar هو منتج من قبل\",\"subTotal\":\"المجموع الفرعي\",\"itemsText\":\"العناصر\",\"shippinFeeText\":\"رسوم الشحن\",\"voucherText\":\"إيصال\",\"voucherApply\":\"تطبيق\",\"couponError\":\"قسيمة غير صالحة\",\"totalText\":\"مجموع\",\"deliverySchedule\":\"جدول التسليم\",\"checkoutDeliveryAddress\":\"عنوان التسليم\",\"contactNumberText\":\"رقم الاتصال\",\"selectPaymentText\":\"خيار الدفع\",\"proceesCheckout\":\"باشرالخروج من الفندق\",\"backHomeBtn\":\"العودة إلى المنزل\",\"orderReceivedText\":\"طلب وارد\",\"orderReceivedSuccess\":\"شكرا لكم. تم استلام طلبك\",\"orderNumberText\":\"رقم الطلب\",\"orderDateText\":\"تاريخ\",\"paymenMethodText\":\"طريقة الدفع او السداد\",\"paymentMethodName\":\"الدفع عن الاستلام\",\"orderDetailsText\":\"تفاصيل الطلب\",\"totalItemText\":\"مجموع البند\",\"orderTimeText\":\"وقت الطلب\",\"deliveryTimeText\":\"موعد التسليم\",\"deliveryLocationText\":\"موقع التسليم\",\"totalAmountText\":\"المبلغ الإجمالي\",\"loadMoreBtn\":\"تحميل المزيد\",\"welcomeBack\":\"مرحبا بعودتك\",\"loginText\":\"تسجيل الدخول باستخدام البريد الإلكتروني وكلمة المرور الخاصة بك\",\"emailAddressPlaceholder\":\"عنوان البريد الإلكتروني أو رقم الاتصال\",\"passwordPlaceholder\":\"كلمة المرور (بحد أدنى {minCharacter} أحرف)\",\"continueBtn\":\"استمر\",\"orText\":\"أو\",\"continueFacebookBtn\":\"تواصل مع Facebook\",\"continueGoogleBtn\":\"تواصل مع جوجل\",\"dontHaveAccount\":\"ليس لديك أي حساب؟\",\"signUpBtnText\":\"سجل\",\"forgotPasswordText\":\"نسيت رقمك السري؟\",\"resetText\":\"إعادة تعيينها\",\"signUpText\":\"بالتسجيل ، أنت توافق على Pickbazar\",\"termsConditionText\":\"الشروط والأحكام\",\"alreadyHaveAccount\":\"هل لديك حساب؟\",\"backToSign\":\"ارجع الى\",\"loginBtnText\":\"تسجيل الدخول\",\"forgotPassText\":\"هل نسيت كلمة المرور\",\"sendResetPassText\":\"سنرسل لك رابطًا لإعادة تعيين كلمة المرور الخاصة بك\",\"resetPasswordBtn\":\"إعادة تعيين كلمات المرور\",\"intlCopyBtnId\":\"نسخ\",\"intlCopySuccessId\":\"نسخ\",\"locationModalheading\":\"حدد موقعك\",\"locationModalSubHeading\":\"يجب عليك تحديد موقعك لغرض تقديم الخدمة\",\"locationModalFooter\":\"توصيل مجاني للطلب الأول\",\"saleText\":\"تخفيض السعر\",\"offText\":\"إيقاف\",\"faqNo1Title\":\"كيف تتصل بخدمة العملاء؟\",\"faqNo1Desc\":\"يتوفر فريق تجربة العملاء لدينا {number1} أيام في الأسبوع ، ونقدم طريقتين للاتصال. البريد الإلكتروني والدردشة. نحن نحاول الرد بسرعة ، لذلك لا تحتاج إلى الانتظار طويلًا للحصول على رد!\",\"faqNo2Title\":\"فشل تثبيت التطبيق ، وكيفية تحديث معلومات النظام؟\",\"faqNo2Desc\":\"يرجى قراءة الوثائق بعناية. لدينا أيضًا بعض برامج الفيديو التعليمية عبر الإنترنت فيما يتعلق بهذه المشكلة. في حالة استمرار المشكلة ، يرجى فتح تذكرة في منتدى الدعم\",\"faqNo3Title\":\"استجابة الموقع يستغرق بعض الوقت ، وكيفية تحسين؟\",\"faqNo3Desc\":\"في البداية ، يرجى التحقق من اتصالك بالإنترنت. لدينا أيضًا بعض برامج الفيديو التعليمية عبر الإنترنت فيما يتعلق بهذه المشكلة. في حالة استمرار المشكلة ، يرجى فتح تذكرة في منتدى الدعم.\",\"faqNo4Title\":\"كيف يمكنني إنشاء حساب؟\",\"faqNo4Desc\":\"إذا كنت تريد فتح حساب للاستخدام الشخصي ، يمكنك القيام بذلك عبر الهاتف أو عبر الإنترنت. يجب أن يستغرق فتح الحساب عبر الإنترنت بضع دقائق فقط.\",\"intlOrderDetailsDiscount\":\"خصم\",\"intlOrderDetailsDelivery\":\"رسوم التوصيل\",\"intlOrderPageTitle\":\"طلبي\",\"intlNoOrderFound\":\"لم يتم العثور على أي طلب\",\"intlOrderPageDetails\":\"تفاصيل الطلب\",\"intlTableColTitle2\":\"كمية\",\"intlTableColTitle3\":\"السعر\",\"intlOrderCardTitleText\":\"طلب\",\"intlOrderCardDateText\":\"تاريخ الطلب\",\"intlOrderCardTotalText\":\"السعر الكلي\",\"joinButton\":\"انضم\",\"ar\":\"عربى\",\"zh\":\"صينى\",\"en\":\"الإنجليزية\",\"de\":\"ألمانية\",\"he\":\"اللغة العبرية\",\"es\":\"الأسبانية\",\"intlTextBy\":\"بواسطة\",\"intlReletedItems\":\"الأصناف ذات الصلة\",\"readFreeSampleButton\":\"قراءة عينة مجانية\",\"bookSectionTitle\":\"عن الكتاب\",\"authorSectionTitle\":\"عن المؤلف\",\"defaultIntlId\":\"يرجى إضافة عنصر نائب من ملف اللغة\",\"noResultFound\":\"عذرا ، لم يتم العثور على نتيجة :(\",\"deliveryText\":\"توصيل\",\"cuisineText\":\"أطباق\",\"minOrderText\":\"لمين\",\"fromText\":\"من عند\",\"loadMoreButton\":\"تحميل المزيد\"}");

/***/ }),

/***/ "oz4i":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "pONU":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("i2RQ");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "pQO/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FruitsVegetable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const FruitsVegetable = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "Layer 2"
  }, __jsx("g", {
    "data-name": "Layer 3"
  }, __jsx("path", {
    "data-name": "Path 16",
    d: "M10.235 3.966a2.943 2.943 0 00-1.38-2.122c-.528-.243-.485-.618-.338-.854s.41-.231.832.164a5 5 0 011.368 2.87z",
    fill: color,
    stroke: color,
    strokeMiterlimit: "10",
    strokeWidth: ".416"
  }), __jsx("path", {
    "data-name": "Path 17",
    d: "M6.514 7.976a4.757 4.757 0 109.513 0c0-2.627-1.5-4.976-4.757-4.73-2.619.197-4.767 1.656-4.756 4.73z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.387"
  }), __jsx("path", {
    "data-name": "Path 18",
    d: "M6.514 7.976a4.757 4.757 0 109.513 0c0-2.627-1.5-4.976-4.757-4.73-2.619.197-4.767 1.656-4.756 4.73z",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 19",
    d: "M14.731 5.045s1.506 1.544.714 2.993c-.287.526-1.2.192-1.234-.485s.25-1.27-.236-2.05c-.349-.566.26-.878.756-.458z",
    fill: "#fff"
  }), __jsx("path", {
    "data-name": "Path 20",
    d: "M10.834 3.413s1.161-4.315 6.469-2.048c0 0-2.459 4.074-6.469 2.048z",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.387"
  }), __jsx("path", {
    "data-name": "Path 21",
    d: "M10.834 3.413s1.161-4.315 6.469-2.048c0 0-2.459 4.074-6.469 2.048z",
    fill: "#fff"
  }), __jsx("path", {
    "data-name": "Path 22",
    d: "M10.516 4.513a10.193 10.193 0 015.63-2.863c-2.736-.521-6.018 1.748-6.018 1.748s.289.864.388 1.115z",
    fill: color,
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: ".035"
  }), __jsx("path", {
    "data-name": "Path 23",
    d: "M10.895 9.896h0c-.268-.877-1.969-1.65-4.234-1.72a5.286 5.286 0 00-4.515 1.858 2 2 0 00-.551 1.308h0a4.934 4.934 0 004.768 4.426c3.133.223 3.786-.96 4.225-1.9a6.363 6.363 0 00.307-3.972z",
    fill: "#fff",
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "3.19"
  }), __jsx("path", {
    "data-name": "Path 24",
    d: "M10.895 9.896h0c-.268-.877-1.969-1.65-4.234-1.72a5.286 5.286 0 00-4.515 1.858 2 2 0 00-.551 1.308h0a4.934 4.934 0 004.768 4.426c3.133.223 3.786-.96 4.225-1.9a6.363 6.363 0 00.307-3.972z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.387"
  }), __jsx("path", {
    "data-name": "Path 25",
    d: "M10.895 9.896h0c-.268-.877-1.969-1.65-4.234-1.72a5.286 5.286 0 00-4.515 1.858 2 2 0 00-.551 1.308h0a4.934 4.934 0 004.768 4.426c3.133.223 3.786-.96 4.225-1.9a6.363 6.363 0 00.307-3.972z",
    fill: "#fff",
    stroke: color,
    strokeMiterlimit: "10",
    strokeWidth: ".069"
  }), __jsx("path", {
    "data-name": "Path 26",
    d: "M10.895 9.896c-.268-.877-1.969-1.65-4.234-1.72a5.286 5.286 0 00-4.515 1.858 2 2 0 00-.551 1.308 4.934 4.934 0 004.768 4.426c3.133.223 3.786-.96 4.225-1.9a6.363 6.363 0 00.307-3.972z",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 27",
    d: "M1.595 11.342a4.375 4.375 0 00.128.684 2.664 2.664 0 00.3.335c1.067 1.028 4.409 1.723 7.173 1 .883-.23 1.522-1.3.526-1.851-.139-.076-.243-.184-.208-.277s.089-.106.269-.1a1.2 1.2 0 001.232-.735 4.126 4.126 0 00-.121-.509c-.272-.876-1.974-1.644-4.239-1.715a5.286 5.286 0 00-4.515 1.858 2.024 2.024 0 00-.545 1.31z",
    fill: "#fff"
  }), __jsx("path", {
    "data-name": "Path 28",
    d: "M1.921 9.984a1.569 1.569 0 00.1 2.377c1.066 1.028 4.409 1.723 7.173 1 .883-.23 1.522-1.3.526-1.851-.139-.076-.243-.184-.208-.277s.089-.106.269-.1a1.183 1.183 0 001.259-.823 1.321 1.321 0 00-.785-1.413",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: ".416"
  }), __jsx("path", {
    "data-name": "Path 29",
    d: "M8.013 10.78c-.018.471-.87.791-1.9.752s-1.856-.423-1.837-.9.87-.963 1.9-.924 1.855.605 1.837 1.072z",
    fill: color,
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: ".555"
  }), __jsx("path", {
    "data-name": "Path 30",
    d: "M9.722 12.123a2.411 2.411 0 01.467 2.08 2.759 2.759 0 01-1.5 2.427",
    fill: "none",
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: ".555"
  }))));
};

/***/ }),

/***/ "qC9r":
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),

/***/ "qbum":
/***/ (function(module, exports) {

module.exports = require("@redq/reuse-modal");

/***/ }),

/***/ "r/UT":
/***/ (function(module) {

module.exports = JSON.parse("{\"nav.home\":\"Home\",\"nav.grocery\":\"Grocery\",\"nav.makeup\":\"Makeup\",\"nav.bags\":\"Bags\",\"nav.clothing\":\"Clothing\",\"nav.furniture\":\"Furniture\",\"nav.book\":\"Book\",\"nav.medicine\":\"Medicine\",\"nav.foods\":\"Foods\",\"nav.terms_and_services\":\"Terms and Services\",\"nav.privacy_policy\":\"Privacy Policy\",\"nav.offer\":\"Offer\",\"nav.help\":\"Need Help\",\"nav.profile\":\"Profile\",\"nav.checkout\":\"Checkout\",\"nav.order_received\":\"Order Invoice\",\"nav.logout\":\"Logout\",\"nav.login\":\"Login\",\"nav.order\":\"Your Order\",\"groceriesTitle\":\"Groceries Delivered in {minute} Minute\",\"groceriesSubTitle\":\"Get your healthy foods & snacks delivered at your doorsteps all day everyday\",\"makeupTitle\":\"Branded & imported makeups\",\"makeupSubTitle\":\"Easiest and cheapest way to get your branded & imported makeups\",\"bagsTitle\":\"Exclusive Branded bags\",\"bagsSubTitle\":\"Get your exclusive & branded bags delivered to you in no time\",\"womenClothsTitle\":\"Shop your designer dresses\",\"womenClothsSubTitle\":\"Ready to wear dresses tailored for you from online. Hurry up while stock lasts.\",\"furnitureTitle\":\"Exclusive furniture on cheap price\",\"furnitureSubTitle\":\"Make your house a home with our wide collection of beautiful furniture\",\"booksTitle\":\"Your own books store\",\"booksSubTitle\":\"Get your favorite books from our wide range of books.\",\"medicineTitle\":\"Your medication, delivered\",\"medicineSubTitle\":\"Say goodbye to all your healthcare worries with  us\",\"foodsTitle\":\"You order we deliver\",\"foodsSubTitle\":\"Get your favorite foods in less than an hour\",\"alternativeCheckout\":\"Checkout Alternative\",\"termAndConditionHelper\":\"By making this purchase you agree to our\",\"termAndCondition\":\"terms and conditions.\",\"removeCoupon\":\"(Remove)\",\"reqMedicine\":\"Request Medicine\",\"submitRequest\":\"Submit Request\",\"noteHead\":\"Note\",\"noteDescription\":\"Product availability & price will confirm over phone. Delivery Charge inside the city ${inside} & outside the city ${outside}.\",\"rmMedicineName\":\"Medicine Name\",\"rmMedicineQuantity\":\"Quantity\",\"rmPrescripttionUpload\":\"Upload your prescription\",\"rmUploadText\":\"Drag/Upload your file here.\",\"cartTitle\":\"Your Order\",\"discountText\":\"Discount\",\"vatText\":\"Incl. VAT\",\"searchPlaceholder\":\"Search your products from here\",\"searchButtonText\":\"Search\",\"mobileSignInButtonText\":\"Join In\",\"navlinkAccountSettings\":\"Your Account Settings\",\"cartItems\":\"Items\",\"cartItem\":\"Item\",\"addCartButton\":\"Cart\",\"addToCartButton\":\"Add to cart\",\"backBtn\":\"Back\",\"noProductFound\":\"No products found\",\"specialCode\":\"Do you have a voucher?\",\"couponApplied\":\"Coupon Applied\",\"couponPlaceholder\":\"Enter voucher code here\",\"sidebarYourOrder\":\"Order\",\"profilePageTitle\":\"Your Profile\",\"profileNameField\":\"Name\",\"profileEmailField\":\"Email\",\"profileSaveBtn\":\"Save\",\"contactNumberTItle\":\"Contact Number\",\"addContactBtn\":\"Add Contact\",\"deliveryAddresTitle\":\"Delivery Address\",\"addAddressBtn\":\"Add Address\",\"addNew\":\"Add New\",\"paymentCardTitle\":\"Payments Card\",\"addCardBtn\":\"Add Card\",\"savedCardsId\":\"Saved Cards\",\"savedContactId\":\"Save Contact\",\"savedAddressId\":\"Save Address\",\"siteFooter\":\"Pickbazar is a product by\",\"subTotal\":\"Sub Total\",\"itemsText\":\"items\",\"shippinFeeText\":\"Shipping Fee\",\"voucherText\":\"Voucher\",\"voucherApply\":\"Apply\",\"couponError\":\"Invalid Coupon\",\"totalText\":\"Total\",\"deliverySchedule\":\"Delivery Schedule\",\"checkoutDeliveryAddress\":\"Delivery Address\",\"contactNumberText\":\"Contact Number\",\"selectPaymentText\":\"Payment Option\",\"proceesCheckout\":\"Proceed to Checkout\",\"backHomeBtn\":\"Back to Home\",\"orderReceivedText\":\"Order Received\",\"orderReceivedSuccess\":\"Thank you. Your order has been received\",\"orderNumberText\":\"Order Number\",\"orderDateText\":\"Date\",\"paymenMethodText\":\"Payment Method\",\"paymentMethodName\":\"Cash on delivery\",\"orderDetailsText\":\"Order Details\",\"totalItemText\":\"Total Item\",\"orderTimeText\":\"Order Time\",\"deliveryTimeText\":\"Delivery Time\",\"deliveryLocationText\":\"Delivery Location\",\"totalAmountText\":\"Total Amount\",\"loadMoreBtn\":\"Load More\",\"welcomeBack\":\"Welcome Back\",\"loginText\":\"Login with your email & password\",\"emailAddressPlaceholder\":\"demo@demo.com\",\"passwordPlaceholder\":\"demo\",\"continueBtn\":\"Continue\",\"orText\":\"or\",\"continueFacebookBtn\":\"Continue with Facebook\",\"continueGoogleBtn\":\"Continue with Google\",\"dontHaveAccount\":\"Don't have any account?\",\"signUpBtnText\":\"Sign Up\",\"forgotPasswordText\":\"Forgot your password?\",\"resetText\":\"Reset It\",\"signUpText\":\"By signing up, you agree to Pickbazar's\",\"termsConditionText\":\"Terms & Condtion\",\"alreadyHaveAccount\":\"Already have an account?\",\"backToSign\":\"Back to\",\"loginBtnText\":\"Login\",\"forgotPassText\":\"Forgot Password\",\"sendResetPassText\":\"We'll send you a link to reset your password\",\"resetPasswordBtn\":\"Reset Password\",\"intlCopyBtnId\":\"Copy\",\"intlCopySuccessId\":\"Copied\",\"locationModalheading\":\"Select Your Location\",\"locationModalSubHeading\":\"You have to select your location for deliver service perpous\",\"locationModalFooter\":\"Free Delivery For 1st Order\",\"saleText\":\"Sale\",\"offText\":\"Off\",\"faqNo1Title\":\"How to contact with Customer Service?\",\"faqNo1Desc\":\"Our Customer Experience Team is available {number1} days a week and we offer {number2} ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.\",\"faqNo2Title\":\"App installation failed, how to update system information?\",\"faqNo2Desc\":\"Please read the documentation carefully . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum\",\"faqNo3Title\":\"Website reponse taking time, how to improve?\",\"faqNo3Desc\":\"At first, Please check your internet connection . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .\",\"faqNo4Title\":\"How do I create a account?\",\"faqNo4Desc\":\"If you want to open an account for personal use you can do it over the phone or online. Opening an account online should only take a few minutes.\",\"intlOrderDetailsDiscount\":\"Discount\",\"intlOrderDetailsDelivery\":\"Delivery Fee\",\"intlOrderPageTitle\":\"My Order\",\"intlNoOrderFound\":\"No order found\",\"intlOrderPageDetails\":\"Order Details\",\"intlTableColTitle2\":\"Quantity\",\"intlTableColTitle3\":\"Price\",\"intlOrderCardTitleText\":\"Order\",\"intlOrderCardDateText\":\"Order Date\",\"intlOrderCardTotalText\":\"Total Price\",\"joinButton\":\"Join\",\"ar\":\"Arabic\",\"zh\":\"Chinese\",\"en\":\"English\",\"de\":\"German\",\"he\":\"Hebrew\",\"es\":\"Spanish\",\"intlTextBy\":\"by\",\"intlReletedItems\":\"Related Items\",\"readFreeSampleButton\":\"Read Free Sample\",\"bookSectionTitle\":\"About The Book\",\"authorSectionTitle\":\"About The Author\",\"defaultIntlId\":\"Please add a Placeholder from language file\",\"noResultFound\":\"Sorry, No result found :(\",\"deliveryText\":\"Delivery\",\"cuisineText\":\"Cuisine\",\"minOrderText\":\"Min Order\",\"fromText\":\"From\"}");

/***/ }),

/***/ "tFEG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CartProvider; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useCart; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./src/contexts/cart/cart.reducer.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// export const cartItemsTotalPrice = (items, { discountInPercent = 0 } = {}) => {
const cartItemsTotalPrice = (items, coupon = null) => {
  if (items === null || items.length === 0) return 0;
  const itemCost = items.reduce((total, item) => {
    if (item.salePrice) {
      return total + item.salePrice * item.quantity;
    }

    return total + item.price * item.quantity;
  }, 0); // const discountRate = 1 - discountInPercent;

  const discount = coupon ? itemCost * Number(coupon.discountInPercent) / 100 : 0; // itemCost * discountRate * TAX_RATE + shipping;
  // return itemCost * discountRate;

  return itemCost - discount;
}; // cartItems, cartItemToAdd

const addItemToCart = (state, action) => {
  const existingCartItemIndex = state.items.findIndex(item => item.id === action.payload.id);

  if (existingCartItemIndex > -1) {
    const newState = [...state.items];
    newState[existingCartItemIndex].quantity += action.payload.quantity;
    return newState;
  }

  return [...state.items, action.payload];
}; // cartItems, cartItemToRemove


const removeItemFromCart = (state, action) => {
  return state.items.reduce((acc, item) => {
    if (item.id === action.payload.id) {
      const newQuantity = item.quantity - action.payload.quantity;
      return newQuantity > 0 ? [...acc, _objectSpread(_objectSpread({}, item), {}, {
        quantity: newQuantity
      })] : [...acc];
    }

    return [...acc, item];
  }, []);
};

const clearItemFromCart = (state, action) => {
  return state.items.filter(item => item.id !== action.payload.id);
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'REHYDRATE':
      return _objectSpread(_objectSpread({}, state), action.payload);

    case 'TOGGLE_CART':
      return _objectSpread(_objectSpread({}, state), {}, {
        isOpen: !state.isOpen
      });

    case 'ADD_ITEM':
      return _objectSpread(_objectSpread({}, state), {}, {
        items: addItemToCart(state, action)
      });

    case 'REMOVE_ITEM':
      return _objectSpread(_objectSpread({}, state), {}, {
        items: removeItemFromCart(state, action)
      });

    case 'CLEAR_ITEM_FROM_CART':
      return _objectSpread(_objectSpread({}, state), {}, {
        items: clearItemFromCart(state, action)
      });

    case 'CLEAR_CART':
      return _objectSpread(_objectSpread({}, state), {}, {
        items: []
      });

    case 'APPLY_COUPON':
      return _objectSpread(_objectSpread({}, state), {}, {
        coupon: action.payload
      });

    case 'REMOVE_COUPON':
      return _objectSpread(_objectSpread({}, state), {}, {
        coupon: null
      });

    case 'TOGGLE_RESTAURANT':
      return _objectSpread(_objectSpread({}, state), {}, {
        isRestaurant: !state.isRestaurant
      });

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};
// EXTERNAL MODULE: external "localforage"
var external_localforage_ = __webpack_require__("wiMN");
var external_localforage_default = /*#__PURE__*/__webpack_require__.n(external_localforage_);

// CONCATENATED MODULE: ./src/utils/use-storage.ts
function use_storage_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function use_storage_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { use_storage_ownKeys(Object(source), true).forEach(function (key) { use_storage_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { use_storage_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function use_storage_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const isObjectLiked = value => value.constructor.name === 'Array' || value.constructor.name === 'Object';

const rehydrate = (value, defaultValue) => {
  if (!value) return defaultValue; // if (value === 'false') str = false;
  // if (value === 'true') str = true;
  // if (!isObjectLiked(value)) {
  //   return value;
  // }

  try {
    const parse = JSON.parse(value);
    return parse;
  } catch (err) {
    return defaultValue;
  }
};

const hydrate = value => {
  if (!isObjectLiked(value)) {
    return value;
  }

  return JSON.stringify(value);
};

const createMigration = (opts, data) => {
  return new Promise((resolve, reject) => {
    const key = `${opts.key}-version`;
    external_localforage_default.a.getItem(key, (err, version) => {
      if (version !== opts.version) {
        data = opts.migrate(data);
        external_localforage_default.a.setItem(opts.key, rehydrate(data), err => {
          if (err) return reject(err);
          external_localforage_default.a.setItem(key, opts.version, err => {
            if (err) return reject(err);
            return resolve(data);
          });
        });
      } else {
        resolve(data);
      }
    });
  });
};

const config = {
  key: '@session',
  version: 1,
  migrate: state => {
    return use_storage_objectSpread({}, state);
  }
};
const useStorage = (state, setState) => {
  const {
    0: rehydrated,
    1: setRehydrated
  } = Object(external_react_["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])(null);
  Object(external_react_["useEffect"])(() => {
    async function init() {
      await external_localforage_default.a.getItem(config.key, (err, value) => {
        if (err) {
          setRehydrated(true);
          return setError(err);
        } // Migrate persisted data


        const restoredValue = rehydrate(value);

        if (typeof config.migrate === 'function') {
          createMigration(config, restoredValue).then(data => setState(data)).then(() => setRehydrated(true));
        } else {
          setState(restoredValue);
          setRehydrated(true);
        }
      });
    }

    init();
  }, []);
  Object(external_react_["useEffect"])(() => {
    // if (isNil(state) || isEmpty(state)) {
    //   localForage.removeItem(config.key);
    // }
    external_localforage_default.a.setItem(config.key, hydrate(state));
  }, [state]);
  return {
    rehydrated,
    error
  };
};
// CONCATENATED MODULE: ./src/contexts/cart/use-cart.tsx
var __jsx = external_react_default.a.createElement;

function use_cart_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function use_cart_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { use_cart_ownKeys(Object(source), true).forEach(function (key) { use_cart_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { use_cart_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function use_cart_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const CartContext = Object(external_react_["createContext"])({});
const INITIAL_STATE = {
  isOpen: false,
  items: [],
  isRestaurant: false,
  coupon: null
};

const useCartActions = (initialCart = INITIAL_STATE) => {
  var _state$items3;

  const {
    0: state,
    1: dispatch
  } = Object(external_react_["useReducer"])(reducer, initialCart);

  const addItemHandler = (item, quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: use_cart_objectSpread(use_cart_objectSpread({}, item), {}, {
        quantity
      })
    });
  };

  const removeItemHandler = (item, quantity = 1) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: use_cart_objectSpread(use_cart_objectSpread({}, item), {}, {
        quantity
      })
    });
  };

  const clearItemFromCartHandler = item => {
    dispatch({
      type: 'CLEAR_ITEM_FROM_CART',
      payload: item
    });
  };

  const clearCartHandler = () => {
    dispatch({
      type: 'CLEAR_CART'
    });
  };

  const toggleCartHandler = () => {
    dispatch({
      type: 'TOGGLE_CART'
    });
  };

  const couponHandler = coupon => {
    dispatch({
      type: 'APPLY_COUPON',
      payload: coupon
    });
  };

  const removeCouponHandler = () => {
    dispatch({
      type: 'REMOVE_COUPON'
    });
  };

  const rehydrateLocalState = payload => {
    dispatch({
      type: 'REHYDRATE',
      payload
    });
  };

  const toggleRestaurant = () => {
    dispatch({
      type: 'TOGGLE_RESTAURANT'
    });
  };

  const isInCartHandler = id => {
    var _state$items;

    return (_state$items = state.items) === null || _state$items === void 0 ? void 0 : _state$items.some(item => item.id === id);
  };

  const getItemHandler = id => {
    var _state$items2;

    return (_state$items2 = state.items) === null || _state$items2 === void 0 ? void 0 : _state$items2.find(item => item.id === id);
  };

  const getCartItemsPrice = () => cartItemsTotalPrice(state.items).toFixed(2);

  const getCartItemsTotalPrice = () => cartItemsTotalPrice(state.items, state.coupon).toFixed(2);

  const getDiscount = () => {
    var _state$coupon;

    const total = cartItemsTotalPrice(state.items);
    const discount = state.coupon ? total * Number((_state$coupon = state.coupon) === null || _state$coupon === void 0 ? void 0 : _state$coupon.discountInPercent) / 100 : 0;
    return discount.toFixed(2);
  };

  const getItemsCount = (_state$items3 = state.items) === null || _state$items3 === void 0 ? void 0 : _state$items3.reduce((acc, item) => acc + item.quantity, 0);
  return {
    state,
    getItemsCount,
    rehydrateLocalState,
    addItemHandler,
    removeItemHandler,
    clearItemFromCartHandler,
    clearCartHandler,
    isInCartHandler,
    getItemHandler,
    toggleCartHandler,
    getCartItemsTotalPrice,
    getCartItemsPrice,
    couponHandler,
    removeCouponHandler,
    getDiscount,
    toggleRestaurant
  };
};

const CartProvider = ({
  children
}) => {
  var _state$items4;

  const {
    state,
    rehydrateLocalState,
    getItemsCount,
    addItemHandler,
    removeItemHandler,
    clearItemFromCartHandler,
    clearCartHandler,
    isInCartHandler,
    getItemHandler,
    toggleCartHandler,
    getCartItemsTotalPrice,
    couponHandler,
    removeCouponHandler,
    getCartItemsPrice,
    getDiscount,
    toggleRestaurant
  } = useCartActions();
  const {
    rehydrated,
    error
  } = useStorage(state, rehydrateLocalState);
  return __jsx(CartContext.Provider, {
    value: {
      isOpen: state.isOpen,
      items: state.items,
      coupon: state.coupon,
      isRestaurant: state.isRestaurant,
      cartItemsCount: (_state$items4 = state.items) === null || _state$items4 === void 0 ? void 0 : _state$items4.length,
      itemsCount: getItemsCount,
      addItem: addItemHandler,
      removeItem: removeItemHandler,
      removeItemFromCart: clearItemFromCartHandler,
      clearCart: clearCartHandler,
      isInCart: isInCartHandler,
      getItem: getItemHandler,
      toggleCart: toggleCartHandler,
      calculatePrice: getCartItemsTotalPrice,
      calculateSubTotalPrice: getCartItemsPrice,
      applyCoupon: couponHandler,
      removeCoupon: removeCouponHandler,
      calculateDiscount: getDiscount,
      toggleRestaurant
    }
  }, children);
};
const useCart = () => Object(external_react_["useContext"])(CartContext);

/***/ }),

/***/ "uChv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "uiyz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ LanguageProvider; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useLocale; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./src/assets/styles/global.style.tsx
var global_style = __webpack_require__("jbEd");

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./src/contexts/language/language.config.ts
const defaultLocale = 'en';
const locales = ['en', 'ar', 'es', 'de', 'zh', 'he'];
const rtlLocales = ['ar', 'he']; // need to customize later

const languageNames = {
  en: 'English',
  fr: 'français',
  pl: 'polski'
};
// CONCATENATED MODULE: ./src/contexts/language/language.utils.ts


function isLocale(tested) {
  return locales.some(locale => locale === tested);
}
function isRTL(tested) {
  return rtlLocales.some(locale => locale === tested);
}
function getInitialLocale() {
  // preference from the previous session
  const localSetting = external_js_cookie_default.a.get('locale');

  if (localSetting && isLocale(localSetting)) {
    return localSetting;
  } // the language setting of the browser
  // const [browserSetting] = navigator.language.split('-');
  // if (isLocale(browserSetting)) {
  //   return browserSetting;
  // }


  return defaultLocale;
}
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// EXTERNAL MODULE: external "stylis-plugin-rtl"
var external_stylis_plugin_rtl_ = __webpack_require__("xoY3");
var external_stylis_plugin_rtl_default = /*#__PURE__*/__webpack_require__.n(external_stylis_plugin_rtl_);

// CONCATENATED MODULE: ./src/contexts/language/language.provider.tsx
var __jsx = external_react_default.a.createElement;







const LanguageContext = external_react_default.a.createContext({});
const LanguageProvider = ({
  children,
  messages
}) => {
  const [locale, setLocale] = external_react_default.a.useState('en');

  const changeLanguage = newLocale => {
    setLocale(newLocale);
    document.documentElement.lang = newLocale;
    external_js_cookie_default.a.set('locale', newLocale);
  };

  external_react_default.a.useEffect(() => {
    const localSetting = external_js_cookie_default.a.get('locale');

    if (localSetting && isLocale(localSetting)) {
      document.documentElement.lang = localSetting;
      setLocale(localSetting);
    }
  }, [locale]);
  let isRtl = isRTL(locale);
  return __jsx(LanguageContext.Provider, {
    value: {
      locale,
      changeLanguage,
      isRtl
    }
  }, __jsx(external_react_intl_["IntlProvider"], {
    locale: locale,
    messages: messages[locale]
  }, __jsx(global_style["b" /* InjectRTL */], {
    lang: locale,
    dir: isRtl ? 'rtl' : 'ltr'
  }, __jsx(external_styled_components_["StyleSheetManager"], {
    stylisPlugins: isRtl ? [external_stylis_plugin_rtl_default.a] : []
  }, children))));
};
const useLocale = () => external_react_default.a.useContext(LanguageContext);

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "wiMN":
/***/ (function(module, exports) {

module.exports = require("localforage");

/***/ }),

/***/ "wrRK":
/***/ (function(module) {

module.exports = JSON.parse("{\"nav.home\":\"Hogar\",\"nav.grocery\":\"Tienda de comestibles\",\"nav.makeup\":\"Maquillaje\",\"nav.bags\":\"Pantalones\",\"nav.clothing\":\"Ropa\",\"nav.furniture\":\"Mueble\",\"nav.book\":\"Libro\",\"nav.medicine\":\"Medicamento\",\"nav.foods\":\"Alimentos\",\"nav.terms_and_services\":\"Términos y servicios\",\"nav.privacy_policy\":\"Política de privacidad\",\"nav.offer\":\"Oferta\",\"nav.help\":\"Necesitas ayuda\",\"nav.profile\":\"Perfil\",\"nav.checkout\":\"Revisa\",\"nav.order_received\":\"Factura de pedido\",\"nav.logout\":\"Cerrar sesión\",\"nav.login\":\"Iniciar sesión\",\"nav.order\":\"Su pedido\",\"groceriesTitle\":\"Abarrotes entregados en {minute} minutos\",\"groceriesSubTitle\":\"Obtenga sus alimentos y refrigerios saludables entregados en su puerta todo el día todos los días\",\"makeupTitle\":\"Maquillajes de marca e importados\",\"makeupSubTitle\":\"La forma más fácil y económica de obtener sus maquillajes de marca e importados\",\"bagsTitle\":\"Bolsos exclusivos de marca\",\"bagsSubTitle\":\"Obtenga sus bolsos exclusivos y de marca entregados en poco tiempo\",\"womenClothsTitle\":\"Compra tus vestidos de diseñador\",\"womenClothsSubTitle\":\"Listo para usar vestidos a medida para usted en línea. Date prisa mientras duren las existencias.\",\"furnitureTitle\":\"Muebles exclusivos a precio económico\",\"furnitureSubTitle\":\"Haga de su casa un hogar con nuestra amplia colección de hermosos muebles.\",\"booksTitle\":\"Tu propia tienda de libros\",\"booksSubTitle\":\"Obtenga sus libros favoritos de nuestra amplia gama de libros.\",\"medicineTitle\":\"Su medicamento, entregado\",\"medicineSubTitle\":\"Diga adiós a todas sus preocupaciones de atención médica con nosotros.\",\"foodsTitle\":\"Tu orden lo entregamos\",\"foodsSubTitle\":\"Obtenga sus comidas favoritas en menos de una hora\",\"alternativeCheckout\":\"Alternativa de pago\",\"termAndConditionHelper\":\"Al realizar esta compra, usted acepta nuestro\",\"termAndCondition\":\"términos y Condiciones.\",\"reqMedicine\":\"Solicitar medicina\",\"submitRequest\":\"Enviar peticion\",\"noteHead\":\"Nota\",\"noteDescription\":\"La disponibilidad del producto y el precio se confirmarán por teléfono. Cargo por entrega dentro de la ciudad $ 5 y fuera de la ciudad $ 10.\",\"rmMedicineName\":\"Nombre de medicina\",\"rmMedicineQuantity\":\"Cantidad\",\"rmPrescripttionUpload\":\"Sube tu receta\",\"rmUploadText\":\"Arrastra / sube tu archivo aquí.\",\"cartTitle\":\"Su pedido\",\"discountText\":\"Descuento\",\"vatText\":\"Incl. IVA\",\"searchPlaceholder\":\"Busque sus productos desde aquí\",\"searchButtonText\":\"Buscar\",\"mobileSignInButtonText\":\"Participar\",\"navlinkAccountSettings\":\"La configuración de su cuenta\",\"cartItems\":\"artículos\",\"cartItem\":\"articulo\",\"addCartButton\":\"Carro\",\"addToCartButton\":\"Añadir al carrito\",\"backBtn\":\"atrás\",\"noProductFound\":\"No se encontraron productos.\",\"specialCode\":\"¿Tienes un cupón?\",\"couponApplied\":\"Cupón Aplicado\",\"couponPlaceholder\":\"Ingrese el código de cupón aquí\",\"sidebarYourOrder\":\"Orden\",\"profilePageTitle\":\"Tu perfil\",\"profileNameField\":\"Nombre\",\"profileEmailField\":\"Email\",\"profileSaveBtn\":\"Salvar\",\"contactNumberTItle\":\"Número de contacto\",\"addContactBtn\":\"Agregar contacto\",\"deliveryAddresTitle\":\"Dirección de entrega\",\"addAddressBtn\":\"Añadir dirección\",\"addNew\":\"Agregar nuevo\",\"paymentCardTitle\":\"Tarjeta de pagos\",\"addCardBtn\":\"Agregar tarjeta\",\"savedCardsId\":\"Tarjetas guardadas\",\"savedContactId\":\"Guardar contacto\",\"savedAddressId\":\"Guardar dirección\",\"siteFooter\":\"Pickbazar es un producto de\",\"itemsText\":\"artículos\",\"shippinFeeText\":\"Gastos de envío\",\"voucherText\":\"Vale\",\"voucherApply\":\"Aplicar\",\"couponError\":\"Cupón Inválido\",\"deliverySchedule\":\"Calendario de entregas\",\"checkoutDeliveryAddress\":\"Dirección de entrega\",\"contactNumberText\":\"Número de contacto\",\"selectPaymentText\":\"Opcion de pago\",\"proceesCheckout\":\"Pasar por la caja\",\"backHomeBtn\":\"De vuelta a casa\",\"orderReceivedText\":\"orden recibida\",\"orderReceivedSuccess\":\"Gracias. Tu orden ha sido recibida\",\"orderNumberText\":\"Número de orden\",\"orderDateText\":\"Fecha\",\"paymenMethodText\":\"Método de pago\",\"paymentMethodName\":\"Contra reembolso\",\"orderDetailsText\":\"Detalles del pedido\",\"totalItemText\":\"Artículo total\",\"orderTimeText\":\"Tiempo de la orden\",\"deliveryTimeText\":\"El tiempo de entrega\",\"deliveryLocationText\":\"Lugar de entrega\",\"totalAmountText\":\"Cantidad total\",\"loadMoreBtn\":\"Carga más\",\"welcomeBack\":\"Dar una buena acogida\",\"loginText\":\"Inicie sesión con su correo electrónico y contraseña\",\"emailAddressPlaceholder\":\"Dirección de correo electrónico o número de contacto\",\"passwordPlaceholder\":\"Contraseña (mínimo {minCharacter} caracteres)\",\"continueBtn\":\"Continuar\",\"orText\":\"o\",\"continueFacebookBtn\":\"Continuar con Facebook\",\"continueGoogleBtn\":\"Continuar con Google\",\"dontHaveAccount\":\"¿No tienes cuenta?\",\"signUpBtnText\":\"Regístrate\",\"forgotPasswordText\":\"¿Olvidaste tu contraseña?\",\"resetText\":\"Reinicialo\",\"signUpText\":\"Al registrarte, aceptas Pickbazar's\",\"termsConditionText\":\"Términos y condiciones\",\"alreadyHaveAccount\":\"¿Ya tienes una cuenta?\",\"backToSign\":\"De regreso\",\"loginBtnText\":\"Iniciar sesión\",\"forgotPassText\":\"Se te olvidó tu contraseña\",\"sendResetPassText\":\"Le enviaremos un enlace para restablecer su contraseña\",\"resetPasswordBtn\":\"Restablecer contraseñas\",\"intlCopyBtnId\":\"Copiar\",\"intlCopySuccessId\":\"Copiado\",\"locationModalheading\":\"Selecciona tu ubicación\",\"locationModalSubHeading\":\"Debe seleccionar su ubicación para el servicio de entrega\",\"locationModalFooter\":\"Entrega gratuita para el primer pedido\",\"saleText\":\"Rebaja\",\"offText\":\"Apagada\",\"faqNo1Title\":\"¿Cómo contactar con el Servicio al Cliente?\",\"faqNo1Desc\":\"Nuestro equipo de experiencia del cliente está disponible los {number1} días de la semana y ofrecemos {number2} formas de ponerse en contacto: correo electrónico y chat. Intentamos responder rápidamente, por lo que no debe esperar demasiado para recibir una respuesta.\",\"faqNo2Title\":\"La instalación de la aplicación falló, ¿cómo actualizar la información del sistema?\",\"faqNo2Desc\":\"Por favor lea la documentación cuidadosamente. También tenemos algunos videos tutoriales en línea sobre este tema. Si el problema persiste, abra un ticket en el foro de soporte\",\"faqNo3Title\":\"Respuesta del sitio web tomando tiempo, ¿cómo mejorar?\",\"faqNo3Desc\":\"Al principio, verifique su conexión a internet. También tenemos algunos videos tutoriales en línea sobre este tema. Si el problema persiste, abra un ticket en el foro de soporte.\",\"faqNo4Title\":\"¿Cómo creo una cuenta?\",\"faqNo4Desc\":\"Si desea abrir una cuenta para uso personal, puede hacerlo por teléfono o en línea. Abrir una cuenta en línea solo debería tomar unos minutos.\",\"totalText\":\"Total\",\"subTotal\":\"Subtotal\",\"intlOrderDetailsDiscount\":\"Descuento\",\"intlOrderDetailsDelivery\":\"Gastos de envío\",\"intlOrderPageTitle\":\"Mi pedido\",\"intlNoOrderFound\":\"No se ha encontrado ningún pedido.\",\"intlOrderPageDetails\":\"Detalles del pedido\",\"intlTableColTitle2\":\"Cantidad\",\"intlTableColTitle3\":\"Precio\",\"intlOrderCardTitleText\":\"Orden\",\"intlOrderCardDateText\":\"Fecha de orden\",\"intlOrderCardTotalText\":\"Precio total\",\"joinButton\":\"Unirse\",\"ar\":\"Arábica\",\"zh\":\"Chino\",\"en\":\"Inglés\",\"de\":\"Alemán\",\"he\":\"Hebreo\",\"es\":\"Español\",\"intlTextBy\":\"por\",\"intlReletedItems\":\"Artículos relacionados\",\"readFreeSampleButton\":\"Leer muestra gratis\",\"bookSectionTitle\":\"Acerca del libro\",\"authorSectionTitle\":\"Sobre el autor\",\"defaultIntlId\":\"Agregue un marcador de posición del archivo de idioma\",\"noResultFound\":\"Lo sentimos, no se encontraron resultados :(\",\"deliveryText\":\"Entrega\",\"cuisineText\":\"Cocina\",\"minOrderText\":\"La orden mínima\",\"fromText\":\"Desde\",\"loadMoreButton\":\"Carga más\"}");

/***/ }),

/***/ "xZKy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ useAppState; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useAppDispatch; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ AppProvider; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./src/contexts/create-context.tsx
var __jsx = external_react_default.a.createElement;

function useCreateContext(reducer, initialState) {
  const defaultDispatch = () => initialState;

  const stateCtx = Object(external_react_["createContext"])(initialState);
  const dispatchCtx = Object(external_react_["createContext"])(defaultDispatch);

  function useStateCtx(property) {
    const state = Object(external_react_["useContext"])(stateCtx);
    return state[property]; // only one depth selector for comparison
  }

  function useDispatchCtx() {
    return Object(external_react_["useContext"])(dispatchCtx);
  }

  function Provider(props) {
    const [state, dispatch] = external_react_default.a.useReducer(reducer, initialState);
    return __jsx(dispatchCtx.Provider, {
      value: dispatch
    }, __jsx(stateCtx.Provider, {
      value: state
    }, props.children));
  }

  return [useStateCtx, useDispatchCtx, Provider];
} // const [useTextState, useTextDispatch, TextProvider] = useCreateContext(initialState, reducer);
// export const TextContext = ctx;
// export function App() {
//   return (
//     <TextProvider>
//       <Component />
//     </TextProvider>
//   )
// }
// export function Component() {
//   const state = useTextState('state')
//   const dispatch = useTextDispatch()
// const increment = useCallback(() => dispatch({ type: 'increment' }), [dispatch]);
//   return (
//     <div>
//       {state}
//       <button onClick={increment}>Toggle</button>
//     </div>
//   )
// }
// CONCATENATED MODULE: ./src/contexts/app/app.reducer.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const app_reducer_initialState = {
  searchTerm: '',
  isSticky: false,
  isSidebarSticky: true,
  isDrawerOpen: false
};
function appReducer(state, action) {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return _objectSpread(_objectSpread({}, state), {}, {
        searchTerm: action.payload
      });

    case 'SET_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSticky: true
      });

    case 'REMOVE_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSticky: false
      });

    case 'SET_SIDEBAR_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSidebarSticky: true
      });

    case 'REMOVE_SIDEBAR_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSidebarSticky: false
      });

    case 'TOGGLE_DRAWER':
      return _objectSpread(_objectSpread({}, state), {}, {
        isDrawerOpen: !state.isDrawerOpen
      });

    default:
      {
        throw new Error(`Unsupported action type at App Reducer`);
      }
  }
}
// CONCATENATED MODULE: ./src/contexts/app/app.provider.ts


const [app_provider_state, app_provider_dispatch, provider] = useCreateContext(appReducer, app_reducer_initialState);
const useAppState = app_provider_state;
const useAppDispatch = app_provider_dispatch;
const AppProvider = provider;

/***/ }),

/***/ "xoY3":
/***/ (function(module, exports) {

module.exports = require("stylis-plugin-rtl");

/***/ })

/******/ });