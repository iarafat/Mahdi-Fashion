module.exports = /******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require('../../../ssr-module-cache.js'); // The require function
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
  } // expose the modules object (__webpack_modules__)
  /******/
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
  /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 5));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ './src/pages/index.tsx':
      /*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/arafat/codes/pickbazar/client/packages/shop/src/pages/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n // the redirect will only happen on the client-side. This is by design,\n\nconst IndexPage = () => {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.replace('/[type]', '/grocery');\n  });\n  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(\"meta\", {\n    name: \"robots\",\n    content: \"noindex, nofollow\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n/*import { useEffect } from 'react';\nimport Head from 'next/head';\nimport Router from 'next/router';\nimport { useQuery } from '@apollo/react-hooks';\nimport { GET_TYPE } from 'graphql/query/type.query';\nimport ErrorMessage from 'components/error-message/error-message';\n\n// the redirect will only happen on the client-side. This is by design,\nconst IndexPage: React.FC<{}> = () => {\n  let selectedMenu = null;\n  let defaultMenu = null;\n  const { data, error, loading } = useQuery(\n    GET_TYPE,\n    {\n      variables: {\n        searchText: ''\n      }\n    }\n  );\n  if (loading) {\n    return <ErrorMessage message={'Loading...'} />\n  };\n\n  if (error) {\n    return (\n      <ErrorMessage message={'Error occured for only domain routing'} />\n    );\n  };\n\n  const typeMenu = data.types.items.map((item) => {\n    return({\n      id: item.id,\n      href: `/${item.slug}`\n    })\n  })\n  defaultMenu = typeMenu[0].href;\n  if(localStorage.getItem('myMenu')){\n    selectedMenu = JSON.parse(localStorage.getItem('myMenu'));\n    selectedMenu = selectedMenu.href;\n  }\n\n  useEffect(() => {\n    Router.replace('/[type]', selectedMenu !== null ? selectedMenu : defaultMenu);\n  });\n  return (\n    <Head>\n      <meta name=\"robots\" content=\"noindex, nofollow\" />\n    </Head>\n  );\n};\n\nexport default IndexPage;\n*///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSW5kZXhQYWdlIiwidXNlRWZmZWN0IiwiUm91dGVyIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFDQSxNQUFNQSxTQUF1QixHQUFHLE1BQU07QUFDcENDLHlEQUFTLENBQUMsTUFBTTtBQUNkQyxzREFBTSxDQUFDQyxPQUFQLENBQWUsU0FBZixFQUEwQixVQUExQjtBQUNELEdBRlEsQ0FBVDtBQUdBLFNBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFvQixXQUFPLEVBQUMsbUJBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBS0QsQ0FURDs7QUFXZUgsd0VBQWY7QUFJQSIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbi8vIHRoZSByZWRpcmVjdCB3aWxsIG9ubHkgaGFwcGVuIG9uIHRoZSBjbGllbnQtc2lkZS4gVGhpcyBpcyBieSBkZXNpZ24sXG5jb25zdCBJbmRleFBhZ2U6IFJlYWN0LkZDPHt9PiA9ICgpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBSb3V0ZXIucmVwbGFjZSgnL1t0eXBlXScsICcvZ3JvY2VyeScpO1xuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwibm9pbmRleCwgbm9mb2xsb3dcIiAvPlxuICAgIDwvSGVhZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcblxuXG5cbi8qaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcbmltcG9ydCB7IEdFVF9UWVBFIH0gZnJvbSAnZ3JhcGhxbC9xdWVyeS90eXBlLnF1ZXJ5JztcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnY29tcG9uZW50cy9lcnJvci1tZXNzYWdlL2Vycm9yLW1lc3NhZ2UnO1xuXG4vLyB0aGUgcmVkaXJlY3Qgd2lsbCBvbmx5IGhhcHBlbiBvbiB0aGUgY2xpZW50LXNpZGUuIFRoaXMgaXMgYnkgZGVzaWduLFxuY29uc3QgSW5kZXhQYWdlOiBSZWFjdC5GQzx7fT4gPSAoKSA9PiB7XG4gIGxldCBzZWxlY3RlZE1lbnUgPSBudWxsO1xuICBsZXQgZGVmYXVsdE1lbnUgPSBudWxsO1xuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShcbiAgICBHRVRfVFlQRSxcbiAgICB7XG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgc2VhcmNoVGV4dDogJydcbiAgICAgIH1cbiAgICB9XG4gICk7XG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxFcnJvck1lc3NhZ2UgbWVzc2FnZT17J0xvYWRpbmcuLi4nfSAvPlxuICB9O1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiAoXG4gICAgICA8RXJyb3JNZXNzYWdlIG1lc3NhZ2U9eydFcnJvciBvY2N1cmVkIGZvciBvbmx5IGRvbWFpbiByb3V0aW5nJ30gLz5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IHR5cGVNZW51ID0gZGF0YS50eXBlcy5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4oe1xuICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICBocmVmOiBgLyR7aXRlbS5zbHVnfWBcbiAgICB9KVxuICB9KVxuICBkZWZhdWx0TWVudSA9IHR5cGVNZW51WzBdLmhyZWY7XG4gIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteU1lbnUnKSl7XG4gICAgc2VsZWN0ZWRNZW51ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlNZW51JykpO1xuICAgIHNlbGVjdGVkTWVudSA9IHNlbGVjdGVkTWVudS5ocmVmO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBSb3V0ZXIucmVwbGFjZSgnL1t0eXBlXScsIHNlbGVjdGVkTWVudSAhPT0gbnVsbCA/IHNlbGVjdGVkTWVudSA6IGRlZmF1bHRNZW51KTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPEhlYWQ+XG4gICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cIm5vaW5kZXgsIG5vZm9sbG93XCIgLz5cbiAgICA8L0hlYWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XG4qLyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"
        );

        /***/
      },

    /***/ 5:
      /*!***********************************!*\
  !*** multi ./src/pages/index.tsx ***!
  \***********************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! /home/arafat/codes/pickbazar/client/packages/shop/src/pages/index.tsx */ './src/pages/index.tsx'
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

    /******/
  }
);
