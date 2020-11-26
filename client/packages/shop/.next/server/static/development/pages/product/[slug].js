module.exports = /******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require('../../../../ssr-module-cache.js'); // object to store loaded chunks // "0" means "already loaded"
  /******/
  /******/ /******/ /******/ var installedChunks = {
    /******/ 'static/development/pages/product/[slug].js': 0,
    /******/
  }; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ var threw = true;
    /******/ try {
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );
      /******/ threw = false;
      /******/
    } finally {
      /******/ if (threw) delete installedModules[moduleId];
      /******/
    } // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // This file contains only the entry chunk. // The chunk loading function for additional chunks
  /******/
  /******/ /******/ /******/ __webpack_require__.e = function requireEnsure(
    chunkId
  ) {
    /******/ var promises = []; // require() chunk loading for javascript // "0" is the signal for "already loaded"
    /******/
    /******/
    /******/ /******/
    /******/ /******/ if (installedChunks[chunkId] !== 0) {
      /******/ var chunk = require('../../../../' +
        ({}[chunkId] || chunkId) +
        '.js');
      /******/ var moreModules = chunk.modules,
        chunkIds = chunk.ids;
      /******/ for (var moduleId in moreModules) {
        /******/ modules[moduleId] = moreModules[moduleId];
        /******/
      }
      /******/ for (var i = 0; i < chunkIds.length; i++)
        /******/ installedChunks[chunkIds[i]] = 0;
      /******/
    }
    /******/ return Promise.all(promises);
    /******/
  }; // expose the modules object (__webpack_modules__)
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module',
      });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ''; // uncaught error handler for webpack runtime
  /******/
  /******/ /******/ __webpack_require__.oe = function (err) {
    /******/ process.nextTick(function () {
      /******/ throw err; // catch this error by using import().catch()
      /******/
    });
    /******/
  }; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 6));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ '../next-server/lib/router-context':
      /*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("next/dist/next-server/lib/router-context.js");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCI/NDEyNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/router-context\n'
        );

        /***/
      },

    /***/ '../next-server/lib/utils':
      /*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("next/dist/next-server/lib/utils.js");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCI/MzI2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/utils\n'
        );

        /***/
      },

    /***/ './src/assets/styles/product-single.style.tsx':
      /*!****************************************************!*\
  !*** ./src/assets/styles/product-single.style.tsx ***!
  \****************************************************/
      /*! exports provided: ProductSingleContainer, RelatedItemContainer, RealatedItemCol, Loading, default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSingleContainer", function() { return ProductSingleContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedItemContainer", function() { return RelatedItemContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealatedItemCol", function() { return RealatedItemCol; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");\n/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ProductSingleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: "product-singlestyle__ProductSingleWrapper",\n  componentId: "sc-13bc9wo-0"\n})(["padding:78px 0 60px 0;position:relative;background-color:", ";@media (min-width:1600px){padding-top:89px;}@media (max-width:990px){padding-top:60px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])(\'colors.gray.200\', \'#f7f7f7\'));\nconst ProductSingleContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: "product-singlestyle__ProductSingleContainer",\n  componentId: "sc-13bc9wo-1"\n})(["width:100%;"]);\nconst RelatedItemContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: "product-singlestyle__RelatedItemContainer",\n  componentId: "sc-13bc9wo-2"\n})(["display:flex;flex-wrap:wrap;margin-left:-15px;margin-right:-15px;@media (max-width:1199px) and (min-width:990px){margin-left:-10px;margin-right:-10px;}@media (max-width:768px){margin-left:-7.5px;margin-right:-7.5px;}"]);\nconst RealatedItemCol = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: "product-singlestyle__RealatedItemCol",\n  componentId: "sc-13bc9wo-3"\n})(["flex:0 0 20%;max-width:20%;padding-left:15px;padding-right:15px;margin-bottom:30px;@media (max-width:1500px){flex:0 0 20%;max-width:20%;}@media (max-width:1200px){flex:0 0 33.3333333%;max-width:33.3333333%;}@media (max-width:1199px) and (min-width:991px){padding-left:10px;padding-right:10px;}@media (max-width:768px){padding-left:7.5px;padding-right:7.5px;margin-bottom:15px;}@media (max-width:767px){flex:0 0 50%;max-width:50%;}"]);\nconst Loading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: "product-singlestyle__Loading",\n  componentId: "sc-13bc9wo-4"\n})(["width:100%;padding:10px;display:flex;align-items:center;justify-content:center;font-size:calc(", " - 1px);color:#222222;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])(\'fontSizes.base\', \'15px\'));\n/* harmony default export */ __webpack_exports__["default"] = (ProductSingleWrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N0eWxlcy9wcm9kdWN0LXNpbmdsZS5zdHlsZS50c3g/OGMyNSJdLCJuYW1lcyI6WyJQcm9kdWN0U2luZ2xlV3JhcHBlciIsInN0eWxlZCIsImRpdiIsInRoZW1lR2V0IiwiUHJvZHVjdFNpbmdsZUNvbnRhaW5lciIsIlJlbGF0ZWRJdGVtQ29udGFpbmVyIiwiUmVhbGF0ZWRJdGVtQ29sIiwiTG9hZGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1BLG9CQUFvQixHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhKQUdKQyx5RUFBUSxDQUFDLGlCQUFELEVBQW9CLFNBQXBCLENBSEosQ0FBMUI7QUFjTyxNQUFNQyxzQkFBc0IsR0FBR0gsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxtQkFBNUI7QUFJQSxNQUFNRyxvQkFBb0IsR0FBR0osd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxnT0FBMUI7QUFpQkEsTUFBTUksZUFBZSxHQUFHTCx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNiQUFyQjtBQThCQSxNQUFNSyxPQUFPLEdBQUdOLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaUlBTUFDLHlFQUFRLENBQUMsZ0JBQUQsRUFBbUIsTUFBbkIsQ0FOUixDQUFiO0FBVVFILG1GQUFmIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zdHlsZXMvcHJvZHVjdC1zaW5nbGUuc3R5bGUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XG5cbmNvbnN0IFByb2R1Y3RTaW5nbGVXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogNzhweCAwIDYwcHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMuZ3JheS4yMDAnLCAnI2Y3ZjdmNycpfTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTYwMHB4KSB7XG4gICAgcGFkZGluZy10b3A6IDg5cHg7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogOTkwcHgpIHtcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFByb2R1Y3RTaW5nbGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbmA7XG5cbmV4cG9ydCBjb25zdCBSZWxhdGVkSXRlbUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIGFuZCAobWluLXdpZHRoOiA5OTBweCkge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgbWFyZ2luLWxlZnQ6IC03LjVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC03LjVweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFJlYWxhdGVkSXRlbUNvbCA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDAgMCAyMCU7XG4gIG1heC13aWR0aDogMjAlO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCkge1xuICAgIGZsZXg6IDAgMCAyMCU7XG4gICAgbWF4LXdpZHRoOiAyMCU7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgIGZsZXg6IDAgMCAzMy4zMzMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzMzMlO1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIGFuZCAobWluLXdpZHRoOiA5OTFweCkge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHBhZGRpbmctbGVmdDogNy41cHg7XG4gICAgcGFkZGluZy1yaWdodDogNy41cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBmbGV4OiAwIDAgNTAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTG9hZGluZyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiBjYWxjKCR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1cHgnKX0gLSAxcHgpO1xuICBjb2xvcjogIzIyMjIyMjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RTaW5nbGVXcmFwcGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/styles/product-single.style.tsx\n'
        );

        /***/
      },

    /***/ './src/components/seo.tsx':
      /*!********************************!*\
  !*** ./src/components/seo.tsx ***!
  \********************************/
      /*! exports provided: SEO */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEO", function() { return SEO; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = "/home/arafat/codes/pickbazar/client/packages/shop/src/components/seo.tsx";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst SEO = ({\n  title,\n  description,\n  canonical,\n  css,\n  js,\n  image\n}) => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 3\n  }\n}, __jsx("title", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }\n}, title), __jsx("meta", {\n  name: "description",\n  content: description,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }\n}), __jsx("meta", {\n  name: "viewport",\n  content: "width=device-width,minimum-scale=1,initial-scale=1",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }\n}), __jsx("meta", {\n  property: "og:type",\n  content: "website",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }\n}), __jsx("meta", {\n  name: "og:title",\n  property: "og:title",\n  content: title,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }\n}), __jsx("meta", {\n  name: "og:description",\n  property: "og:description",\n  content: description,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }\n}), __jsx("meta", {\n  property: "og:site_name",\n  content: "Proper Noun",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }\n}), __jsx("meta", {\n  property: "og:url",\n  content: `${canonical}`,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }\n}), __jsx("meta", {\n  name: "twitter:card",\n  content: "summary",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }\n}), __jsx("meta", {\n  name: "twitter:title",\n  content: title,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }\n}), __jsx("meta", {\n  name: "twitter:description",\n  content: description,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }\n}), __jsx("meta", {\n  name: "twitter:site",\n  content: "@propernounco",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }\n}), __jsx("meta", {\n  name: "twitter:creator",\n  content: "@propernounco",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 5\n  }\n}), css && __jsx("link", {\n  rel: "stylesheet",\n  href: `${css}`,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 13\n  }\n}), image ? __jsx("meta", {\n  property: "og:image",\n  content: `${image}`,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 7\n  }\n}) : __jsx("meta", {\n  property: "og:image",\n  content: "https://www.propernoun.co/static/images/proper-noun-social.png",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 7\n  }\n}), image && __jsx("meta", {\n  name: "twitter:image",\n  content: `${image}`,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 15\n  }\n}), canonical && __jsx("link", {\n  rel: "canonical",\n  href: `${canonical}`,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 19\n  }\n}), js && __jsx("script", {\n  type: "text/javascript",\n  src: `${js}`,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 12\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZW8udHN4PzFmYzciXSwibmFtZXMiOlsiU0VPIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNhbm9uaWNhbCIsImNzcyIsImpzIiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQVdPLE1BQU1BLEdBQXVCLEdBQUcsQ0FBQztBQUN0Q0MsT0FEc0M7QUFFdENDLGFBRnNDO0FBR3RDQyxXQUhzQztBQUl0Q0MsS0FKc0M7QUFLdENDLElBTHNDO0FBTXRDQztBQU5zQyxDQUFELEtBUXJDLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBUUwsS0FBUixDQURGLEVBRUU7QUFBTSxNQUFJLEVBQUMsYUFBWDtBQUF5QixTQUFPLEVBQUVDLFdBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGRixFQUdFO0FBQ0UsTUFBSSxFQUFDLFVBRFA7QUFFRSxTQUFPLEVBQUMsb0RBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUhGLEVBT0U7QUFBTSxVQUFRLEVBQUMsU0FBZjtBQUF5QixTQUFPLEVBQUMsU0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVBGLEVBUUU7QUFBTSxNQUFJLEVBQUMsVUFBWDtBQUFzQixVQUFRLEVBQUMsVUFBL0I7QUFBMEMsU0FBTyxFQUFFRCxLQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBUkYsRUFTRTtBQUNFLE1BQUksRUFBQyxnQkFEUDtBQUVFLFVBQVEsRUFBQyxnQkFGWDtBQUdFLFNBQU8sRUFBRUMsV0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBVEYsRUFjRTtBQUFNLFVBQVEsRUFBQyxjQUFmO0FBQThCLFNBQU8sRUFBQyxhQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBZEYsRUFlRTtBQUFNLFVBQVEsRUFBQyxRQUFmO0FBQXdCLFNBQU8sRUFBRyxHQUFFQyxTQUFVLEVBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFmRixFQWdCRTtBQUFNLE1BQUksRUFBQyxjQUFYO0FBQTBCLFNBQU8sRUFBQyxTQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBaEJGLEVBaUJFO0FBQU0sTUFBSSxFQUFDLGVBQVg7QUFBMkIsU0FBTyxFQUFFRixLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBakJGLEVBa0JFO0FBQU0sTUFBSSxFQUFDLHFCQUFYO0FBQWlDLFNBQU8sRUFBRUMsV0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWxCRixFQW1CRTtBQUFNLE1BQUksRUFBQyxjQUFYO0FBQTBCLFNBQU8sRUFBQyxlQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBbkJGLEVBb0JFO0FBQU0sTUFBSSxFQUFDLGlCQUFYO0FBQTZCLFNBQU8sRUFBQyxlQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBcEJGLEVBcUJHRSxHQUFHLElBQUk7QUFBTSxLQUFHLEVBQUMsWUFBVjtBQUF1QixNQUFJLEVBQUcsR0FBRUEsR0FBSSxFQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBckJWLEVBc0JHRSxLQUFLLEdBQ0o7QUFBTSxVQUFRLEVBQUMsVUFBZjtBQUEwQixTQUFPLEVBQUcsR0FBRUEsS0FBTSxFQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREksR0FHSjtBQUNFLFVBQVEsRUFBQyxVQURYO0FBRUUsU0FBTyxFQUFDLGdFQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUF6QkosRUE4QkdBLEtBQUssSUFBSTtBQUFNLE1BQUksRUFBQyxlQUFYO0FBQTJCLFNBQU8sRUFBRyxHQUFFQSxLQUFNLEVBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUE5QlosRUErQkdILFNBQVMsSUFBSTtBQUFNLEtBQUcsRUFBQyxXQUFWO0FBQXNCLE1BQUksRUFBRyxHQUFFQSxTQUFVLEVBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUEvQmhCLEVBZ0NHRSxFQUFFLElBQUk7QUFBUSxNQUFJLEVBQUMsaUJBQWI7QUFBK0IsS0FBRyxFQUFHLEdBQUVBLEVBQUcsRUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWhDVCxDQVJLIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvc2VvLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG50eXBlIFNlb1Byb3BzID0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjYW5vbmljYWw/OiBzdHJpbmc7XG4gIGNzcz86IHN0cmluZztcbiAganM/OiBzdHJpbmc7XG4gIGltYWdlPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IFNFTzogUmVhY3QuRkM8U2VvUHJvcHM+ID0gKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBjYW5vbmljYWwsXG4gIGNzcyxcbiAganMsXG4gIGltYWdlLFxufSkgPT4gKFxuICA8SGVhZD5cbiAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgPG1ldGFcbiAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLG1pbmltdW0tc2NhbGU9MSxpbml0aWFsLXNjYWxlPTFcIlxuICAgIC8+XG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuICAgIDxtZXRhIG5hbWU9XCJvZzp0aXRsZVwiIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cbiAgICA8bWV0YVxuICAgICAgbmFtZT1cIm9nOmRlc2NyaXB0aW9uXCJcbiAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxuICAgICAgY29udGVudD17ZGVzY3JpcHRpb259XG4gICAgLz5cbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJQcm9wZXIgTm91blwiIC8+XG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtgJHtjYW5vbmljYWx9YH0gLz5cbiAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlcIiAvPlxuICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17dGl0bGV9IC8+XG4gICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cIkBwcm9wZXJub3VuY29cIiAvPlxuICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNyZWF0b3JcIiBjb250ZW50PVwiQHByb3Blcm5vdW5jb1wiIC8+XG4gICAge2NzcyAmJiA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YCR7Y3NzfWB9IC8+fVxuICAgIHtpbWFnZSA/IChcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtgJHtpbWFnZX1gfSAvPlxuICAgICkgOiAoXG4gICAgICA8bWV0YVxuICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcbiAgICAgICAgY29udGVudD1cImh0dHBzOi8vd3d3LnByb3Blcm5vdW4uY28vc3RhdGljL2ltYWdlcy9wcm9wZXItbm91bi1zb2NpYWwucG5nXCJcbiAgICAgIC8+XG4gICAgKX1cbiAgICB7aW1hZ2UgJiYgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXtgJHtpbWFnZX1gfSAvPn1cbiAgICB7Y2Fub25pY2FsICYmIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e2Ake2Nhbm9uaWNhbH1gfSAvPn1cbiAgICB7anMgJiYgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPXtgJHtqc31gfT48L3NjcmlwdD59XG4gIDwvSGVhZD5cbik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/seo.tsx\n'
        );

        /***/
      },

    /***/ './src/graphql/query/product.query.ts':
      /*!********************************************!*\
  !*** ./src/graphql/query/product.query.ts ***!
  \********************************************/
      /*! exports provided: GET_PRODUCT_WITH_RELATED_PRODUCTS, GET_RELATED_PRODUCTS, GET_PRODUCT, GET_PRODUCT_DETAILS */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_WITH_RELATED_PRODUCTS", function() { return GET_PRODUCT_WITH_RELATED_PRODUCTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_RELATED_PRODUCTS", function() { return GET_RELATED_PRODUCTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT", function() { return GET_PRODUCT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_DETAILS", function() { return GET_PRODUCT_DETAILS; });\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GET_PRODUCT_WITH_RELATED_PRODUCTS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`\n  query getProductWithRelatedProducts($slug: String!, $type: String!) {\n    product(slug: $slug) {\n      id\n      title\n      weight\n      slug\n      price\n      type\n      image\n      categories {\n        id\n        slug\n        title\n      }\n    }\n    relatedProducts(slug: $slug, type: $type) {\n      id\n      title\n      slug\n      weight\n      price\n      type\n      image\n    }\n  }\n`;\nconst GET_RELATED_PRODUCTS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`\n  query getRelatedProducts($type: String!, $slug: String!) {\n    relatedProducts(type: $type, slug: $slug) {\n      id\n      title\n      slug\n      weight\n      price\n      type\n      image\n    }\n  }\n`;\nconst GET_PRODUCT = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`\n  query getProduct($slug: String!) {\n    product(slug: $slug) {\n      id\n      title\n      weight\n      slug\n      price\n      discountInPercent\n      type\n      gallery {\n        url\n      }\n      image\n      categories {\n        id\n        slug\n        title\n      }\n    }\n  }\n`;\nconst GET_PRODUCT_DETAILS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`\n  query GetProduct($slug: String!) {\n    getProduct(slug: $slug) {\n       id\n          type {\n            id\n            slug\n            name\n          }\n          categories {\n            id\n            slug\n            name\n          }\n          name\n          slug\n          description\n          images\n          unit\n          price\n          sale_price\n          discount_in_percent\n          product_quantity\n          is_featured\n          meta_title\n          meta_keyword\n          meta_description\n    }\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhxbC9xdWVyeS9wcm9kdWN0LnF1ZXJ5LnRzP2M4Y2UiXSwibmFtZXMiOlsiR0VUX1BST0RVQ1RfV0lUSF9SRUxBVEVEX1BST0RVQ1RTIiwiZ3FsIiwiR0VUX1JFTEFURURfUFJPRFVDVFMiLCJHRVRfUFJPRFVDVCIsIkdFVF9QUk9EVUNUX0RFVEFJTFMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxpQ0FBaUMsR0FBR0Msa0RBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQTlDO0FBNEJBLE1BQU1DLG9CQUFvQixHQUFHRCxrREFBSTs7Ozs7Ozs7Ozs7O0NBQWpDO0FBY0EsTUFBTUUsV0FBVyxHQUFHRixrREFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQXhCO0FBc0JBLE1BQU1HLG1CQUFtQixHQUFHSCxrREFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBaEMiLCJmaWxlIjoiLi9zcmMvZ3JhcGhxbC9xdWVyeS9wcm9kdWN0LnF1ZXJ5LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVF9XSVRIX1JFTEFURURfUFJPRFVDVFMgPSBncWxgXG4gIHF1ZXJ5IGdldFByb2R1Y3RXaXRoUmVsYXRlZFByb2R1Y3RzKCRzbHVnOiBTdHJpbmchLCAkdHlwZTogU3RyaW5nISkge1xuICAgIHByb2R1Y3Qoc2x1ZzogJHNsdWcpIHtcbiAgICAgIGlkXG4gICAgICB0aXRsZVxuICAgICAgd2VpZ2h0XG4gICAgICBzbHVnXG4gICAgICBwcmljZVxuICAgICAgdHlwZVxuICAgICAgaW1hZ2VcbiAgICAgIGNhdGVnb3JpZXMge1xuICAgICAgICBpZFxuICAgICAgICBzbHVnXG4gICAgICAgIHRpdGxlXG4gICAgICB9XG4gICAgfVxuICAgIHJlbGF0ZWRQcm9kdWN0cyhzbHVnOiAkc2x1ZywgdHlwZTogJHR5cGUpIHtcbiAgICAgIGlkXG4gICAgICB0aXRsZVxuICAgICAgc2x1Z1xuICAgICAgd2VpZ2h0XG4gICAgICBwcmljZVxuICAgICAgdHlwZVxuICAgICAgaW1hZ2VcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBHRVRfUkVMQVRFRF9QUk9EVUNUUyA9IGdxbGBcbiAgcXVlcnkgZ2V0UmVsYXRlZFByb2R1Y3RzKCR0eXBlOiBTdHJpbmchLCAkc2x1ZzogU3RyaW5nISkge1xuICAgIHJlbGF0ZWRQcm9kdWN0cyh0eXBlOiAkdHlwZSwgc2x1ZzogJHNsdWcpIHtcbiAgICAgIGlkXG4gICAgICB0aXRsZVxuICAgICAgc2x1Z1xuICAgICAgd2VpZ2h0XG4gICAgICBwcmljZVxuICAgICAgdHlwZVxuICAgICAgaW1hZ2VcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVCA9IGdxbGBcbiAgcXVlcnkgZ2V0UHJvZHVjdCgkc2x1ZzogU3RyaW5nISkge1xuICAgIHByb2R1Y3Qoc2x1ZzogJHNsdWcpIHtcbiAgICAgIGlkXG4gICAgICB0aXRsZVxuICAgICAgd2VpZ2h0XG4gICAgICBzbHVnXG4gICAgICBwcmljZVxuICAgICAgZGlzY291bnRJblBlcmNlbnRcbiAgICAgIHR5cGVcbiAgICAgIGdhbGxlcnkge1xuICAgICAgICB1cmxcbiAgICAgIH1cbiAgICAgIGltYWdlXG4gICAgICBjYXRlZ29yaWVzIHtcbiAgICAgICAgaWRcbiAgICAgICAgc2x1Z1xuICAgICAgICB0aXRsZVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVF9ERVRBSUxTID0gZ3FsYFxuICBxdWVyeSBHZXRQcm9kdWN0KCRzbHVnOiBTdHJpbmchKSB7XG4gICAgZ2V0UHJvZHVjdChzbHVnOiAkc2x1Zykge1xuICAgICAgIGlkXG4gICAgICAgICAgdHlwZSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgc2x1Z1xuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgIH1cbiAgICAgICAgICBjYXRlZ29yaWVzIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBzbHVnXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgfVxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBzbHVnXG4gICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICBpbWFnZXNcbiAgICAgICAgICB1bml0XG4gICAgICAgICAgcHJpY2VcbiAgICAgICAgICBzYWxlX3ByaWNlXG4gICAgICAgICAgZGlzY291bnRfaW5fcGVyY2VudFxuICAgICAgICAgIHByb2R1Y3RfcXVhbnRpdHlcbiAgICAgICAgICBpc19mZWF0dXJlZFxuICAgICAgICAgIG1ldGFfdGl0bGVcbiAgICAgICAgICBtZXRhX2tleXdvcmRcbiAgICAgICAgICBtZXRhX2Rlc2NyaXB0aW9uXG4gICAgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/graphql/query/product.query.ts\n'
        );

        /***/
      },

    /***/ './src/pages/product/[slug].tsx':
      /*!**************************************!*\
  !*** ./src/pages/product/[slug].tsx ***!
  \**************************************/
      /*! exports provided: getServerSideProps, default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/seo */ "./src/components/seo.tsx");\n/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redq/reuse-modal */ "@redq/reuse-modal");\n/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var assets_styles_product_single_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/styles/product-single.style */ "./src/assets/styles/product-single.style.tsx");\n/* harmony import */ var graphql_query_product_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql/query/product.query */ "./src/graphql/query/product.query.ts");\n/* harmony import */ var utils_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/apollo */ "./src/utils/apollo.js");\nvar _jsxFileName = "/home/arafat/codes/pickbazar/client/packages/shop/src/pages/product/[slug].tsx";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nconst ProductDetails = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! components/product-details/product-details-one/product-details-one */ "./src/components/product-details/product-details-one/product-details-one.tsx")), {\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! components/product-details/product-details-one/product-details-one */ "./src/components/product-details/product-details-one/product-details-one.tsx")],\n    modules: [\'components/product-details/product-details-one/product-details-one\']\n  }\n});\nconst ProductDetailsBook = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! components/product-details/product-details-two/product-details-two */ "./src/components/product-details/product-details-two/product-details-two.tsx")), {\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! components/product-details/product-details-two/product-details-two */ "./src/components/product-details/product-details-two/product-details-two.tsx")],\n    modules: [\'components/product-details/product-details-two/product-details-two\']\n  }\n});\nconst CartPopUp = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! features/carts/cart-popup */ "./src/features/carts/cart-popup.tsx")), {\n  ssr: false,\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! features/carts/cart-popup */ "./src/features/carts/cart-popup.tsx")],\n    modules: [\'features/carts/cart-popup\']\n  }\n});\n\nconst ProductPage = ({\n  data,\n  deviceType\n}) => {\n  const SingleProduct = data.getProduct;\n\n  let content = __jsx(ProductDetails, {\n    product: SingleProduct,\n    deviceType: deviceType,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  });\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_seo__WEBPACK_IMPORTED_MODULE_2__["SEO"], {\n    title: `${SingleProduct.name} - Mahdi Fashion`,\n    description: `${SingleProduct.name} Details`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }), __jsx(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__["Modal"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, __jsx(assets_styles_product_single_style__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, __jsx(assets_styles_product_single_style__WEBPACK_IMPORTED_MODULE_4__["ProductSingleContainer"], {\n    style: {\n      marginTop: "50px"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }, content))));\n};\n\nasync function getServerSideProps({\n  params\n}) {\n  const apolloClient = Object(utils_apollo__WEBPACK_IMPORTED_MODULE_6__["initializeApollo"])();\n  const {\n    data\n  } = await apolloClient.query({\n    query: graphql_query_product_query__WEBPACK_IMPORTED_MODULE_5__["GET_PRODUCT_DETAILS"],\n    variables: {\n      slug: params.slug\n    }\n  });\n  return {\n    props: {\n      data\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__["default"] = (ProductPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcHJvZHVjdC9bc2x1Z10udHN4P2RiNDUiXSwibmFtZXMiOlsiUHJvZHVjdERldGFpbHMiLCJkeW5hbWljIiwiUHJvZHVjdERldGFpbHNCb29rIiwiQ2FydFBvcFVwIiwic3NyIiwiUHJvZHVjdFBhZ2UiLCJkYXRhIiwiZGV2aWNlVHlwZSIsIlNpbmdsZVByb2R1Y3QiLCJnZXRQcm9kdWN0IiwiY29udGVudCIsIm5hbWUiLCJtYXJnaW5Ub3AiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJwYXJhbXMiLCJhcG9sbG9DbGllbnQiLCJpbml0aWFsaXplQXBvbGxvIiwicXVlcnkiLCJHRVRfUFJPRFVDVF9ERVRBSUxTIiwidmFyaWFibGVzIiwic2x1ZyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUEsTUFBTUEsY0FBYyxHQUFHQyxtREFBTyxDQUFDLE1BQzdCLHdPQUQ0QjtBQUFBO0FBQUEsd0NBQ3JCLHdKQURxQjtBQUFBLGNBQ3JCLG9FQURxQjtBQUFBO0FBQUEsRUFBOUI7QUFHQSxNQUFNQyxrQkFBa0IsR0FBR0QsbURBQU8sQ0FBQyxNQUNqQyx3T0FEZ0M7QUFBQTtBQUFBLHdDQUN6Qix3SkFEeUI7QUFBQSxjQUN6QixvRUFEeUI7QUFBQTtBQUFBLEVBQWxDO0FBR0EsTUFBTUUsU0FBUyxHQUFHRixtREFBTyxDQUFDLE1BQU0sc0pBQVAsRUFBNEM7QUFDbkVHLEtBQUcsRUFBRSxLQUQ4RDtBQUFBO0FBQUEsd0NBQTlCLHNFQUE4QjtBQUFBLGNBQTlCLDJCQUE4QjtBQUFBO0FBQUEsQ0FBNUMsQ0FBekI7O0FBY0EsTUFBTUMsV0FBNEIsR0FBRyxDQUFDO0FBQUVDLE1BQUY7QUFBUUM7QUFBUixDQUFELEtBQTBCO0FBQzdELFFBQU1DLGFBQWEsR0FBR0YsSUFBSSxDQUFDRyxVQUEzQjs7QUFDQSxNQUFJQyxPQUFPLEdBQ1QsTUFBQyxjQUFEO0FBQWdCLFdBQU8sRUFBRUYsYUFBekI7QUFBd0MsY0FBVSxFQUFFRCxVQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7O0FBS0EsU0FDRSxtRUFDRSxNQUFDLGtEQUFEO0FBQ0UsU0FBSyxFQUFHLEdBQUVDLGFBQWEsQ0FBQ0csSUFBSyxrQkFEL0I7QUFFRSxlQUFXLEVBQUcsR0FBRUgsYUFBYSxDQUFDRyxJQUFLLFVBRnJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1FLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUZBQUQ7QUFDQSxTQUFLLEVBQUU7QUFDTEMsZUFBUyxFQUFFO0FBRE4sS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0dGLE9BTEgsQ0FERixDQURGLENBTkYsQ0FERjtBQW9CRCxDQTNCRDs7QUE0Qk8sZUFBZUcsa0JBQWYsQ0FBa0M7QUFBRUM7QUFBRixDQUFsQyxFQUE4QztBQUNuRCxRQUFNQyxZQUFZLEdBQUdDLHFFQUFnQixFQUFyQztBQUVBLFFBQU07QUFBRVY7QUFBRixNQUFXLE1BQU1TLFlBQVksQ0FBQ0UsS0FBYixDQUFtQjtBQUN4Q0EsU0FBSyxFQUFFQywrRUFEaUM7QUFFeENDLGFBQVMsRUFBRTtBQUNUQyxVQUFJLEVBQUVOLE1BQU0sQ0FBQ007QUFESjtBQUY2QixHQUFuQixDQUF2QjtBQU1BLFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQ0xmO0FBREs7QUFERixHQUFQO0FBS0Q7QUFDY0QsMEVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdC9bc2x1Z10udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IHsgU0VPIH0gZnJvbSAnY29tcG9uZW50cy9zZW8nO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdAcmVkcS9yZXVzZS1tb2RhbCc7XG5pbXBvcnQgUHJvZHVjdFNpbmdsZVdyYXBwZXIsIHtcbiAgUHJvZHVjdFNpbmdsZUNvbnRhaW5lcixcbn0gZnJvbSAnYXNzZXRzL3N0eWxlcy9wcm9kdWN0LXNpbmdsZS5zdHlsZSc7XG5pbXBvcnQgeyBHRVRfUFJPRFVDVF9ERVRBSUxTIH0gZnJvbSAnZ3JhcGhxbC9xdWVyeS9wcm9kdWN0LnF1ZXJ5JztcbmltcG9ydCB7IGluaXRpYWxpemVBcG9sbG8gfSBmcm9tICd1dGlscy9hcG9sbG8nO1xuXG5jb25zdCBQcm9kdWN0RGV0YWlscyA9IGR5bmFtaWMoKCkgPT5cbiAgaW1wb3J0KCdjb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMtb25lL3Byb2R1Y3QtZGV0YWlscy1vbmUnKVxuKTtcbmNvbnN0IFByb2R1Y3REZXRhaWxzQm9vayA9IGR5bmFtaWMoKCkgPT5cbiAgaW1wb3J0KCdjb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMtdHdvL3Byb2R1Y3QtZGV0YWlscy10d28nKVxuKTtcbmNvbnN0IENhcnRQb3BVcCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdmZWF0dXJlcy9jYXJ0cy9jYXJ0LXBvcHVwJyksIHtcbiAgc3NyOiBmYWxzZSxcbn0pO1xuXG50eXBlIFByb3BzID0ge1xuICBkZXZpY2VUeXBlPzoge1xuICAgIG1vYmlsZTogYm9vbGVhbjtcbiAgICB0YWJsZXQ6IGJvb2xlYW47XG4gICAgZGVza3RvcDogYm9vbGVhbjtcbiAgfTtcbiAgZGF0YTogYW55O1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59O1xuXG5jb25zdCBQcm9kdWN0UGFnZTogTmV4dFBhZ2U8UHJvcHM+ID0gKHsgZGF0YSwgZGV2aWNlVHlwZSB9KSA9PiB7XG4gIGNvbnN0IFNpbmdsZVByb2R1Y3QgPSBkYXRhLmdldFByb2R1Y3Q7XG4gIGxldCBjb250ZW50ID0gKFxuICAgIDxQcm9kdWN0RGV0YWlscyBwcm9kdWN0PXtTaW5nbGVQcm9kdWN0fSBkZXZpY2VUeXBlPXtkZXZpY2VUeXBlfSAvPlxuICApO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNFT1xuICAgICAgICB0aXRsZT17YCR7U2luZ2xlUHJvZHVjdC5uYW1lfSAtIE1haGRpIEZhc2hpb25gfVxuICAgICAgICBkZXNjcmlwdGlvbj17YCR7U2luZ2xlUHJvZHVjdC5uYW1lfSBEZXRhaWxzYH1cbiAgICAgIC8+XG5cbiAgICAgIDxNb2RhbD5cbiAgICAgICAgPFByb2R1Y3RTaW5nbGVXcmFwcGVyPlxuICAgICAgICAgIDxQcm9kdWN0U2luZ2xlQ29udGFpbmVyXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCI1MHB4XCJcbiAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICAgIDwvUHJvZHVjdFNpbmdsZUNvbnRhaW5lcj5cbiAgICAgICAgPC9Qcm9kdWN0U2luZ2xlV3JhcHBlcj5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IGluaXRpYWxpemVBcG9sbG8oKTtcblxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XG4gICAgcXVlcnk6IEdFVF9QUk9EVUNUX0RFVEFJTFMsXG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBzbHVnOiBwYXJhbXMuc2x1ZyxcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZGF0YSxcbiAgICB9LFxuICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/product/[slug].tsx\n'
        );

        /***/
      },

    /***/ './src/utils/apollo.js':
      /*!*****************************!*\
  !*** ./src/utils/apollo.js ***!
  \*****************************/
      /*! exports provided: initializeApollo, useApollo */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeApollo\", function() { return initializeApollo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useApollo\", function() { return useApollo; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n //import { ApolloClient } from 'apollo-client';\n//import { InMemoryCache } from 'apollo-cache-inmemory';\n//import { HttpLink, createHttpLink } from 'apollo-link-http';\n//import { setContext } from 'apollo-link-context';\n\n\nlet apolloClient;\nconst httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"HttpLink\"]({\n  uri: \"http://api.mahdifashion.com/api\",\n  onError: ({\n    networkError,\n    graphQLErrors\n  }) => {\n    console.log('graphQLErrors', graphQLErrors);\n    console.log('networkError', networkError);\n  }\n});\nconst authMiddleware = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"ApolloLink\"]((operation, forward) => {\n  // add the authorization to the headers\n  let token = null;\n\n  if (false) {}\n\n  operation.setContext({\n    headers: {\n      'x-access-token': token ? token : ''\n    }\n  });\n  return forward(operation);\n});\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"ApolloClient\"]({\n  link: authMiddleware.concat(httpLink),\n  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"InMemoryCache\"]()\n});\n/*\nconsole.log(process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT);\nfunction createApolloClient() {\n  let token = null;\n  if (typeof window !== 'undefined') {\n    token = localStorage.getItem('access_token');\n  }\n  return new ApolloClient({\n    ssrMode: typeof window === 'undefined',\n    link: new HttpLink({\n      uri: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT, // Server URL (must be absolute)\n      credentials: 'same-origin', // Additional fetch() options like `credentials`\n      headers: {\n        'x-access-token': token ? token : '',\n      }, // Additional fetch() options like `headers`\n      onError: ({ networkError, graphQLErrors }) => {\n        console.log('graphQLErrors', graphQLErrors);\n        console.log('networkError', networkError);\n      },\n    }),\n    cache: new InMemoryCache(),\n  });\n}*/\n\nfunction initializeApollo(initialState = null) {\n  var _apolloClient2;\n\n  const _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : client; // If your page has Next.js data fetching methods that use Apollo Client, the initial state\n  // gets hydrated here\n\n\n  if (initialState) {\n    _apolloClient.cache.restore(initialState);\n  } // For SSG and SSR always create a new Apollo Client\n\n\n  if (true) return _apolloClient; // Create the Apollo Client once in the client\n\n  if (!apolloClient) apolloClient = _apolloClient;\n  return _apolloClient;\n}\nfunction useApollo(initialState) {\n  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(() => initializeApollo(initialState), [initialState]);\n  return store;\n}\n/*\n\nimport { useMemo } from 'react';\nimport {ApolloClient, ApolloLink, HttpLink, InMemoryCache} from 'apollo-boost';\nconst httpLink = new HttpLink({\n  uri: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT, // Server URL (must be absolute)\n  credentials: 'same-origin', // Additional fetch() options like `credentials`\n  onError: ({ networkError, graphQLErrors }) => {\n    console.log('graphQLErrors', graphQLErrors);\n    console.log('networkError', networkError);\n  },\n});\nconst authLink = new ApolloLink((operation, forward) => {\n  // Retrieve the authorization token from local storage.\n  let token = null;\n  if (typeof window !== 'undefined') {\n    token = localStorage.getItem('access_token');\n  }\n  // Use the setContext method to set the HTTP headers.\n  operation.setContext({\n    headers: {\n      'x-access-token': token ? token : ''\n    }\n  });\n\n  // Call the next link in the middleware chain.\n  return forward(operation);\n});\n\nlet apolloClient;\nfunction createApolloClient() {\n  return new ApolloClient({\n    ssrMode: typeof window === 'undefined',\n    link: authLink.concat(httpLink),\n    cache: new InMemoryCache(),\n  });\n}\n\nexport function initializeApollo(initialState = null) {\n  const _apolloClient = apolloClient ?? createApolloClient();\n\n  // If your page has Next.js data fetching methods that use Apollo Client, the initial state\n  // gets hydrated here\n  if (initialState) {\n    _apolloClient.cache.restore(initialState);\n  }\n  // For SSG and SSR always create a new Apollo Client\n  if (typeof window === 'undefined') return _apolloClient;\n  // Create the Apollo Client once in the client\n  if (!apolloClient) apolloClient = _apolloClient;\n\n  return _apolloClient;\n}\n\nexport function useApollo(initialState) {\n  const store = useMemo(() => initializeApollo(initialState), [initialState]);\n  return store;\n}\n\n\n*///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvYXBvbGxvLmpzPzZjY2UiXSwibmFtZXMiOlsiYXBvbGxvQ2xpZW50IiwiaHR0cExpbmsiLCJIdHRwTGluayIsInVyaSIsInByb2Nlc3MiLCJvbkVycm9yIiwibmV0d29ya0Vycm9yIiwiZ3JhcGhRTEVycm9ycyIsImNvbnNvbGUiLCJsb2ciLCJhdXRoTWlkZGxld2FyZSIsIkFwb2xsb0xpbmsiLCJvcGVyYXRpb24iLCJmb3J3YXJkIiwidG9rZW4iLCJzZXRDb250ZXh0IiwiaGVhZGVycyIsImNsaWVudCIsIkFwb2xsb0NsaWVudCIsImxpbmsiLCJjb25jYXQiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJpbml0aWFsaXplQXBvbGxvIiwiaW5pdGlhbFN0YXRlIiwiX2Fwb2xsb0NsaWVudCIsInJlc3RvcmUiLCJ1c2VBcG9sbG8iLCJzdG9yZSIsInVzZU1lbW8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFRQSxJQUFJQSxZQUFKO0FBRUEsTUFBTUMsUUFBUSxHQUFHLElBQUlDLHVEQUFKLENBQWE7QUFDNUJDLEtBQUcsRUFBRUMsaUNBRHVCO0FBRTVCQyxTQUFPLEVBQUUsQ0FBQztBQUFFQyxnQkFBRjtBQUFnQkM7QUFBaEIsR0FBRCxLQUFxQztBQUM1Q0MsV0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QkYsYUFBN0I7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QkgsWUFBNUI7QUFDRDtBQUwyQixDQUFiLENBQWpCO0FBUUEsTUFBTUksY0FBYyxHQUFHLElBQUlDLHlEQUFKLENBQWUsQ0FBQ0MsU0FBRCxFQUFZQyxPQUFaLEtBQXdCO0FBQzVEO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLElBQVo7O0FBQ0EsYUFBbUMsRUFFbEM7O0FBQ0RGLFdBQVMsQ0FBQ0csVUFBVixDQUFxQjtBQUNuQkMsV0FBTyxFQUFFO0FBQ1Asd0JBQWtCRixLQUFLLEdBQUdBLEtBQUgsR0FBVztBQUQzQjtBQURVLEdBQXJCO0FBTUEsU0FBT0QsT0FBTyxDQUFDRCxTQUFELENBQWQ7QUFDRCxDQWJzQixDQUF2QjtBQWVBLE1BQU1LLE1BQU0sR0FBRyxJQUFJQywyREFBSixDQUFpQjtBQUM5QkMsTUFBSSxFQUFFVCxjQUFjLENBQUNVLE1BQWYsQ0FBc0JuQixRQUF0QixDQUR3QjtBQUU5Qm9CLE9BQUssRUFBRSxJQUFJQyw0REFBSjtBQUZ1QixDQUFqQixDQUFmO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCTyxTQUFTQyxnQkFBVCxDQUEwQkMsWUFBWSxHQUFHLElBQXpDLEVBQStDO0FBQUE7O0FBQ3BELFFBQU1DLGFBQWEscUJBQUd6QixZQUFILDJEQUFtQmlCLE1BQXRDLENBRG9ELENBR3BEO0FBQ0E7OztBQUNBLE1BQUlPLFlBQUosRUFBa0I7QUFDaEJDLGlCQUFhLENBQUNKLEtBQWQsQ0FBb0JLLE9BQXBCLENBQTRCRixZQUE1QjtBQUNELEdBUG1ELENBUXBEOzs7QUFDQSxZQUFtQyxPQUFPQyxhQUFQLENBVGlCLENBVXBEOztBQUNBLE1BQUksQ0FBQ3pCLFlBQUwsRUFBbUJBLFlBQVksR0FBR3lCLGFBQWY7QUFFbkIsU0FBT0EsYUFBUDtBQUNEO0FBRU0sU0FBU0UsU0FBVCxDQUFtQkgsWUFBbkIsRUFBaUM7QUFDdEMsUUFBTUksS0FBSyxHQUFHQyxxREFBTyxDQUFDLE1BQU1OLGdCQUFnQixDQUFDQyxZQUFELENBQXZCLEVBQXVDLENBQUNBLFlBQUQsQ0FBdkMsQ0FBckI7QUFDQSxTQUFPSSxLQUFQO0FBQ0Q7QUFFRCIsImZpbGUiOiIuL3NyYy91dGlscy9hcG9sbG8uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuLy9pbXBvcnQgeyBBcG9sbG9DbGllbnQgfSBmcm9tICdhcG9sbG8tY2xpZW50Jztcbi8vaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ2Fwb2xsby1jYWNoZS1pbm1lbW9yeSc7XG4vL2ltcG9ydCB7IEh0dHBMaW5rLCBjcmVhdGVIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xuLy9pbXBvcnQgeyBzZXRDb250ZXh0IH0gZnJvbSAnYXBvbGxvLWxpbmstY29udGV4dCc7XG5cbmltcG9ydCB7XG4gIEFwb2xsb0NsaWVudCxcbiAgSHR0cExpbmssXG4gIEFwb2xsb0xpbmssXG4gIEluTWVtb3J5Q2FjaGUsXG4gIGNvbmNhdCxcbn0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuXG5sZXQgYXBvbGxvQ2xpZW50O1xuXG5jb25zdCBodHRwTGluayA9IG5ldyBIdHRwTGluayh7XG4gIHVyaTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR1JBUEhRTF9BUElfRU5EUE9JTlQsXG4gIG9uRXJyb3I6ICh7IG5ldHdvcmtFcnJvciwgZ3JhcGhRTEVycm9ycyB9KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2dyYXBoUUxFcnJvcnMnLCBncmFwaFFMRXJyb3JzKTtcbiAgICBjb25zb2xlLmxvZygnbmV0d29ya0Vycm9yJywgbmV0d29ya0Vycm9yKTtcbiAgfSxcbn0pO1xuXG5jb25zdCBhdXRoTWlkZGxld2FyZSA9IG5ldyBBcG9sbG9MaW5rKChvcGVyYXRpb24sIGZvcndhcmQpID0+IHtcbiAgLy8gYWRkIHRoZSBhdXRob3JpemF0aW9uIHRvIHRoZSBoZWFkZXJzXG4gIGxldCB0b2tlbiA9IG51bGw7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpO1xuICB9XG4gIG9wZXJhdGlvbi5zZXRDb250ZXh0KHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAneC1hY2Nlc3MtdG9rZW4nOiB0b2tlbiA/IHRva2VuIDogJycsXG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIGZvcndhcmQob3BlcmF0aW9uKTtcbn0pO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgbGluazogYXV0aE1pZGRsZXdhcmUuY29uY2F0KGh0dHBMaW5rKSxcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG59KTtcblxuLypcbmNvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dSQVBIUUxfQVBJX0VORFBPSU5UKTtcbmZ1bmN0aW9uIGNyZWF0ZUFwb2xsb0NsaWVudCgpIHtcbiAgbGV0IHRva2VuID0gbnVsbDtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJyk7XG4gIH1cbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIHNzck1vZGU6IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnLFxuICAgIGxpbms6IG5ldyBIdHRwTGluayh7XG4gICAgICB1cmk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dSQVBIUUxfQVBJX0VORFBPSU5ULCAvLyBTZXJ2ZXIgVVJMIChtdXN0IGJlIGFic29sdXRlKVxuICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsIC8vIEFkZGl0aW9uYWwgZmV0Y2goKSBvcHRpb25zIGxpa2UgYGNyZWRlbnRpYWxzYFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiB0b2tlbiA/IHRva2VuIDogJycsXG4gICAgICB9LCAvLyBBZGRpdGlvbmFsIGZldGNoKCkgb3B0aW9ucyBsaWtlIGBoZWFkZXJzYFxuICAgICAgb25FcnJvcjogKHsgbmV0d29ya0Vycm9yLCBncmFwaFFMRXJyb3JzIH0pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2dyYXBoUUxFcnJvcnMnLCBncmFwaFFMRXJyb3JzKTtcbiAgICAgICAgY29uc29sZS5sb2coJ25ldHdvcmtFcnJvcicsIG5ldHdvcmtFcnJvcik7XG4gICAgICB9LFxuICAgIH0pLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxuICB9KTtcbn0qL1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwb2xsbyhpbml0aWFsU3RhdGUgPSBudWxsKSB7XG4gIGNvbnN0IF9hcG9sbG9DbGllbnQgPSBhcG9sbG9DbGllbnQgPz8gY2xpZW50O1xuXG4gIC8vIElmIHlvdXIgcGFnZSBoYXMgTmV4dC5qcyBkYXRhIGZldGNoaW5nIG1ldGhvZHMgdGhhdCB1c2UgQXBvbGxvIENsaWVudCwgdGhlIGluaXRpYWwgc3RhdGVcbiAgLy8gZ2V0cyBoeWRyYXRlZCBoZXJlXG4gIGlmIChpbml0aWFsU3RhdGUpIHtcbiAgICBfYXBvbGxvQ2xpZW50LmNhY2hlLnJlc3RvcmUoaW5pdGlhbFN0YXRlKTtcbiAgfVxuICAvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBBcG9sbG8gQ2xpZW50XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9hcG9sbG9DbGllbnQ7XG4gIC8vIENyZWF0ZSB0aGUgQXBvbGxvIENsaWVudCBvbmNlIGluIHRoZSBjbGllbnRcbiAgaWYgKCFhcG9sbG9DbGllbnQpIGFwb2xsb0NsaWVudCA9IF9hcG9sbG9DbGllbnQ7XG5cbiAgcmV0dXJuIF9hcG9sbG9DbGllbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBcG9sbG8oaW5pdGlhbFN0YXRlKSB7XG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKTtcbiAgcmV0dXJuIHN0b3JlO1xufVxuXG4vKlxuXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtBcG9sbG9DbGllbnQsIEFwb2xsb0xpbmssIEh0dHBMaW5rLCBJbk1lbW9yeUNhY2hlfSBmcm9tICdhcG9sbG8tYm9vc3QnO1xuY29uc3QgaHR0cExpbmsgPSBuZXcgSHR0cExpbmsoe1xuICB1cmk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dSQVBIUUxfQVBJX0VORFBPSU5ULCAvLyBTZXJ2ZXIgVVJMIChtdXN0IGJlIGFic29sdXRlKVxuICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJywgLy8gQWRkaXRpb25hbCBmZXRjaCgpIG9wdGlvbnMgbGlrZSBgY3JlZGVudGlhbHNgXG4gIG9uRXJyb3I6ICh7IG5ldHdvcmtFcnJvciwgZ3JhcGhRTEVycm9ycyB9KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2dyYXBoUUxFcnJvcnMnLCBncmFwaFFMRXJyb3JzKTtcbiAgICBjb25zb2xlLmxvZygnbmV0d29ya0Vycm9yJywgbmV0d29ya0Vycm9yKTtcbiAgfSxcbn0pO1xuY29uc3QgYXV0aExpbmsgPSBuZXcgQXBvbGxvTGluaygob3BlcmF0aW9uLCBmb3J3YXJkKSA9PiB7XG4gIC8vIFJldHJpZXZlIHRoZSBhdXRob3JpemF0aW9uIHRva2VuIGZyb20gbG9jYWwgc3RvcmFnZS5cbiAgbGV0IHRva2VuID0gbnVsbDtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJyk7XG4gIH1cbiAgLy8gVXNlIHRoZSBzZXRDb250ZXh0IG1ldGhvZCB0byBzZXQgdGhlIEhUVFAgaGVhZGVycy5cbiAgb3BlcmF0aW9uLnNldENvbnRleHQoe1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICd4LWFjY2Vzcy10b2tlbic6IHRva2VuID8gdG9rZW4gOiAnJ1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gQ2FsbCB0aGUgbmV4dCBsaW5rIGluIHRoZSBtaWRkbGV3YXJlIGNoYWluLlxuICByZXR1cm4gZm9yd2FyZChvcGVyYXRpb24pO1xufSk7XG5cbmxldCBhcG9sbG9DbGllbnQ7XG5mdW5jdGlvbiBjcmVhdGVBcG9sbG9DbGllbnQoKSB7XG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICBzc3JNb2RlOiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyxcbiAgICBsaW5rOiBhdXRoTGluay5jb25jYXQoaHR0cExpbmspLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBcG9sbG8oaW5pdGlhbFN0YXRlID0gbnVsbCkge1xuICBjb25zdCBfYXBvbGxvQ2xpZW50ID0gYXBvbGxvQ2xpZW50ID8/IGNyZWF0ZUFwb2xsb0NsaWVudCgpO1xuXG4gIC8vIElmIHlvdXIgcGFnZSBoYXMgTmV4dC5qcyBkYXRhIGZldGNoaW5nIG1ldGhvZHMgdGhhdCB1c2UgQXBvbGxvIENsaWVudCwgdGhlIGluaXRpYWwgc3RhdGVcbiAgLy8gZ2V0cyBoeWRyYXRlZCBoZXJlXG4gIGlmIChpbml0aWFsU3RhdGUpIHtcbiAgICBfYXBvbGxvQ2xpZW50LmNhY2hlLnJlc3RvcmUoaW5pdGlhbFN0YXRlKTtcbiAgfVxuICAvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBBcG9sbG8gQ2xpZW50XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9hcG9sbG9DbGllbnQ7XG4gIC8vIENyZWF0ZSB0aGUgQXBvbGxvIENsaWVudCBvbmNlIGluIHRoZSBjbGllbnRcbiAgaWYgKCFhcG9sbG9DbGllbnQpIGFwb2xsb0NsaWVudCA9IF9hcG9sbG9DbGllbnQ7XG5cbiAgcmV0dXJuIF9hcG9sbG9DbGllbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBcG9sbG8oaW5pdGlhbFN0YXRlKSB7XG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKTtcbiAgcmV0dXJuIHN0b3JlO1xufVxuXG5cbiovXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/apollo.js\n"
        );

        /***/
      },

    /***/ 6:
      /*!********************************************!*\
  !*** multi ./src/pages/product/[slug].tsx ***!
  \********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! /home/arafat/codes/pickbazar/client/packages/shop/src/pages/product/[slug].tsx */ './src/pages/product/[slug].tsx'
        );

        /***/
      },

    /***/ '@apollo/client':
      /*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("@apollo/client");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n'
        );

        /***/
      },

    /***/ '@apollo/react-hooks':
      /*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("@apollo/react-hooks");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI/NWE5MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAYXBvbGxvL3JlYWN0LWhvb2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/react-hooks\n'
        );

        /***/
      },

    /***/ '@redq/reuse-modal':
      /*!************************************!*\
  !*** external "@redq/reuse-modal" ***!
  \************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("@redq/reuse-modal");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkcS9yZXVzZS1tb2RhbFwiP2Q1YjAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHJlZHEvcmV1c2UtbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkcS9yZXVzZS1tb2RhbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@redq/reuse-modal\n'
        );

        /***/
      },

    /***/ '@styled-system/css':
      /*!*************************************!*\
  !*** external "@styled-system/css" ***!
  \*************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("@styled-system/css");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3R5bGVkLXN5c3RlbS9jc3NcIj9kZTJlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBzdHlsZWQtc3lzdGVtL2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHlsZWQtc3lzdGVtL2Nzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@styled-system/css\n'
        );

        /***/
      },

    /***/ '@styled-system/theme-get':
      /*!*******************************************!*\
  !*** external "@styled-system/theme-get" ***!
  \*******************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("@styled-system/theme-get");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXRcIj84NDZlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBzdHlsZWQtc3lzdGVtL3RoZW1lLWdldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHlsZWQtc3lzdGVtL3RoZW1lLWdldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@styled-system/theme-get\n'
        );

        /***/
      },

    /***/ 'apollo-client':
      /*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("apollo-client");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2xpZW50XCI/NDI3NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhcG9sbG8tY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWNsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-client\n'
        );

        /***/
      },

    /***/ 'graphql-tag':
      /*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("graphql-tag");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n'
        );

        /***/
      },

    /***/ 'js-cookie':
      /*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("js-cookie");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIj8wM2MxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImpzLWNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///js-cookie\n'
        );

        /***/
      },

    /***/ localforage:
      /*!******************************!*\
  !*** external "localforage" ***!
  \******************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("localforage");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2NhbGZvcmFnZVwiPzJmNmYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibG9jYWxmb3JhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2NhbGZvcmFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///localforage\n'
        );

        /***/
      },

    /***/ 'next/dynamic':
      /*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("next/dynamic");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIj82ZDNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvZHluYW1pYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/dynamic\n'
        );

        /***/
      },

    /***/ 'next/head':
      /*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("next/head");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n'
        );

        /***/
      },

    /***/ 'next/router':
      /*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("next/router");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n'
        );

        /***/
      },

    /***/ 'prop-types':
      /*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("prop-types");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n'
        );

        /***/
      },

    /***/ 'prop-types-exact':
      /*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("prop-types-exact");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCI/OGUxYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLWV4YWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types-exact\n'
        );

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("react");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n'
        );

        /***/
      },

    /***/ 'react-content-loader':
      /*!***************************************!*\
  !*** external "react-content-loader" ***!
  \***************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("react-content-loader");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb250ZW50LWxvYWRlclwiP2MyYzciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtY29udGVudC1sb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb250ZW50LWxvYWRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-content-loader\n'
        );

        /***/
      },

    /***/ 'react-custom-scrollbars':
      /*!******************************************!*\
  !*** external "react-custom-scrollbars" ***!
  \******************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("react-custom-scrollbars");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jdXN0b20tc2Nyb2xsYmFyc1wiPzY2MjEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtY3VzdG9tLXNjcm9sbGJhcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jdXN0b20tc2Nyb2xsYmFyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-custom-scrollbars\n'
        );

        /***/
      },

    /***/ 'react-image':
      /*!******************************!*\
  !*** external "react-image" ***!
  \******************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("react-image");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pbWFnZVwiPzY5ZWEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaW1hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pbWFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-image\n'
        );

        /***/
      },

    /***/ 'react-intl':
      /*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("react-intl");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pbnRsXCI/ODYwZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1pbnRsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW50bFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-intl\n'
        );

        /***/
      },

    /***/ 'react-is':
      /*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("react-is");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiPzBkMzIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-is\n'
        );

        /***/
      },

    /***/ 'react-magnifier':
      /*!**********************************!*\
  !*** external "react-magnifier" ***!
  \**********************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("react-magnifier");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tYWduaWZpZXJcIj9kOGI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LW1hZ25pZmllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1hZ25pZmllclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-magnifier\n'
        );

        /***/
      },

    /***/ 'react-multi-carousel':
      /*!***************************************!*\
  !*** external "react-multi-carousel" ***!
  \***************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("react-multi-carousel");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiP2FiODAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtbXVsdGktY2Fyb3VzZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-multi-carousel\n'
        );

        /***/
      },

    /***/ 'react-reveal/Fade':
      /*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("react-reveal/Fade");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZXZlYWwvRmFkZVwiP2E0ZmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmV2ZWFsL0ZhZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZXZlYWwvRmFkZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-reveal/Fade\n'
        );

        /***/
      },

    /***/ 'styled-components':
      /*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("styled-components");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n'
        );

        /***/
      },

    /***/ 'styled-system':
      /*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("styled-system");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtc3lzdGVtXCI/YjRiNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtc3lzdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLXN5c3RlbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-system\n'
        );

        /***/
      },

    /***/ url:
      /*!**********************!*\
  !*** external "url" ***!
  \**********************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("url");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIj82MWU4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InVybC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///url\n'
        );

        /***/
      },

    /******/
  }
);
