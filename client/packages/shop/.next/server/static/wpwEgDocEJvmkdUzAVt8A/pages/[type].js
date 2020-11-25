module.exports = /******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require('../../../ssr-module-cache.js'); // object to store loaded chunks // "0" means "already loaded"
  /******/
  /******/ /******/ /******/ var installedChunks = {
    /******/ 2: 0,
    /******/ 31: 0,
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
      /******/ var chunk = require('../../../' +
        ({}[chunkId] || chunkId) +
        '.' +
        {
          '17': 'a35865da561486a46c6a',
          '21': '8336d1fdc67b7ec815a2',
          '22': '0e314ac9b132f40c5467',
          '23': '8d637c07430cc4a84c1d',
          '25': '60d54b3098cc6e3e79f2',
          '26': 'cc7dd641000b73e379bb',
          '27': 'bd890d5ff552a22aad3d',
          '28': 'f45f1903eaa7620a6ea5',
        }[chunkId] +
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
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ '/JeY': /***/ function (module, exports) {
      module.exports = require('@styled-system/theme-get');

      /***/
    },

    /***/ '/T1H': /***/ function (module, exports) {
      module.exports = require('next/dynamic');

      /***/
    },

    /***/ '/twb': /***/ function (module, exports) {
      module.exports = require('react-waypoint');

      /***/
    },

    /***/ 0: /***/ function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__('roL4');

      /***/
    },

    /***/ '0zej': /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'a',
        function () {
          return ArrowNext;
        }
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        'cDcd'
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

      const ArrowNext = ({
        color = 'currentColor',
        width = '18px',
        height = '18px',
      }) => {
        return __jsx(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 512 512',
            width: width,
            height: height,
          },
          __jsx('path', {
            d:
              'M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z',
            fill: color,
            stroke: color,
          })
        );
      };

      /***/
    },

    /***/ '2MIm': /***/ function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__('Y3ZS');

      exports.__esModule = true;
      exports.default = withRouter;

      var _react = _interopRequireDefault(__webpack_require__('cDcd'));

      var _router = __webpack_require__('7xIC');

      function withRouter(ComposedComponent) {
        function WithRouterWrapper(props) {
          return /*#__PURE__*/ _react.default.createElement(
            ComposedComponent,
            Object.assign(
              {
                router: (0, _router.useRouter)(),
              },
              props
            )
          );
        }

        WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps; // This is needed to allow checking for custom getInitialProps in _app
        WithRouterWrapper.origGetInitialProps =
          ComposedComponent.origGetInitialProps;

        if (false) {
        }

        return WithRouterWrapper;
      }

      /***/
    },

    /***/ '33lg': /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'a',
        function () {
          return GET_PRODUCTS;
        }
      );
      /* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        'txk1'
      );
      /* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        graphql_tag__WEBPACK_IMPORTED_MODULE_0__
      );

      const GET_PRODUCTS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
query GetProducts(
  $type: String
  $category: String
  $searchText: String
  $offset: Int
) {
  products(
    type: $type
    category: $category
    searchText: $searchText
    offset: $offset
  ) {
    items {
      id
      type {
        id
        slug
      }
      categories {
        id
        slug
      }
      name
      slug
      description
      images
      unit
      price
      sale_price
      discount_in_percent
      product_quantity
      is_featured
      meta_title
      meta_keyword
      meta_description
    }
    totalCount
    hasMore
  }

}

`;

      /***/
    },

    /***/ '4JT2': /***/ function (module, exports) {
      module.exports = require('styled-system');

      /***/
    },

    /***/ '4Q3z': /***/ function (module, exports) {
      module.exports = require('next/router');

      /***/
    },

    /***/ '5l48': /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'i',
        function () {
          return HOME_PAGE;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'h',
        function () {
          return GROCERY_PAGE;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'j',
        function () {
          return MAKEUP_PAGE;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'f',
        function () {
          return CLOTHING_PAGE;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'b',
        function () {
          return BAGS_PAGE;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'c',
        function () {
          return BOOK_PAGE;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'g',
        function () {
          return FURNITURE_PAGE;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'k',
        function () {
          return MEDICINE_PAGE;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'q',
        function () {
          return RESTAURANT_PAGE;
        }
      );
      /* unused harmony export REQUEST_MEDICINE_PAGE */
      /* unused harmony export CHECKOUT_PAGE */
      /* unused harmony export CHECKOUT_PAGE_TWO */
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'm',
        function () {
          return PROFILE_PAGE;
        }
      );
      /* unused harmony export YOUR_ORDER_PAGE */
      /* unused harmony export ORDER_RECEIVED_PAGE */
      /* unused harmony export OFFER_PAGE */
      /* unused harmony export HELP_PAGE */
      /* unused harmony export TERMS_AND_SERVICES_PAGE */
      /* unused harmony export PRIVACY_POLICY_PAGE */
      /* unused harmony export HOME_MENU_ITEM */
      /* unused harmony export HELP_MENU_ITEM */
      /* unused harmony export OFFER_MENU_ITEM */
      /* unused harmony export ORDER_MENU_ITEM */
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'p',
        function () {
          return REQUEST_MEDICINE_MENU_ITEM;
        }
      );
      /* unused harmony export PROFILE_MENU_ITEM */
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'a',
        function () {
          return AUTHORIZED_MENU_ITEMS;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'd',
        function () {
          return CATEGORY_MENU;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'e',
        function () {
          return CATEGORY_MENU_ITEMS;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'l',
        function () {
          return MOBILE_DRAWER_MENU;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'o',
        function () {
          return PROFILE_SIDEBAR_TOP_MENU;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'n',
        function () {
          return PROFILE_SIDEBAR_BOTTOM_MENU;
        }
      );
      /* unused harmony export LANGUAGE_MENU */
      /* harmony import */ var utils_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        'bM43'
      );
      /* harmony import */ var graphql_query_type_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        'IGqs'
      );

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
        href: HOME_PAGE,
      };
      const HELP_MENU_ITEM = {
        id: 'nav.help',
        defaultMessage: 'Help',
        href: HELP_PAGE,
      };
      const OFFER_MENU_ITEM = {
        id: 'nav.offer',
        defaultMessage: 'Offer',
        href: OFFER_PAGE,
      };
      const ORDER_MENU_ITEM = {
        id: 'nav.order',
        href: YOUR_ORDER_PAGE,
        defaultMessage: 'Order',
      };
      const REQUEST_MEDICINE_MENU_ITEM = {
        id: 'nav.request_medicine',
        defaultMessage: 'Request Medicine',
        href: REQUEST_MEDICINE_PAGE,
      };
      const PROFILE_MENU_ITEM = {
        id: 'nav.profile',
        defaultMessage: 'Profile',
        href: PROFILE_PAGE,
      };
      const AUTHORIZED_MENU_ITEMS = [
        PROFILE_MENU_ITEM,
        /*{
  id: 'nav.checkout',
  defaultMessage: 'Checkout',
  href: CHECKOUT_PAGE,
},
{
  id: 'nav.checkout_two',
  href: CHECKOUT_PAGE_TWO,
  defaultMessage: 'Checkout Alternative',
},
ORDER_MENU_ITEM,
{
  id: 'nav.order_received',
  href: ORDER_RECEIVED_PAGE,
  defaultMessage: 'Order invoice',
},
{
  id: 'nav.terms_and_services',
  defaultMessage: 'Terms and Services',
  href: TERMS_AND_SERVICES_PAGE,
},
{
  id: 'nav.privacy_policy',
  defaultMessage: 'Privacy Policy',
  href: PRIVACY_POLICY_PAGE,
},*/
      ];
      async function CATEGORY_MENU() {
        const apolloClient = Object(
          utils_apollo__WEBPACK_IMPORTED_MODULE_0__[/* initializeApollo */ 'a']
        )();
        const res = await apolloClient.query({
          query:
            graphql_query_type_query__WEBPACK_IMPORTED_MODULE_1__[
              /* GET_TYPE */ 'a'
            ],
          variables: {
            searchText: '',
          },
        });
        const paths = await res.data.types.items.map((item) => {
          return {
            id: item.id,
            href: `/${item.slug}`,
            defaultMessage: item.name,
            icon: item.icon,
            dynamic: true,
          };
        });
        return paths;
      } // category menu items for header navigation

      const CATEGORY_MENU_ITEMS = [
        {
          id: 'nav.grocery',
          href: GROCERY_PAGE,
          defaultMessage: 'Grocery',
          icon: 'FruitsVegetable',
          dynamic: true,
        },
        {
          id: 'nav.makeup',
          defaultMessage: 'Makeup',
          href: MAKEUP_PAGE,
          icon: 'FacialCare',
          dynamic: true,
        },
        {
          id: 'nav.bags',
          defaultMessage: 'Bags',
          href: BAGS_PAGE,
          icon: 'Handbag',
          dynamic: true,
        },
        /*{
  id: 'nav.clothing',
  defaultMessage: 'Clothing',
  href: CLOTHING_PAGE,
  icon: 'DressIcon',
  dynamic: true,
},
{
  id: 'nav.furniture',
  defaultMessage: 'Furniture',
  href: FURNITURE_PAGE,
  icon: 'FurnitureIcon',
  dynamic: true,
},
{
  id: 'nav.book',
  defaultMessage: 'Book',
  href: BOOK_PAGE,
  icon: 'BookIcon',
  dynamic: true,
},
{
  id: 'nav.medicine',
  defaultMessage: 'Medicine',
  href: MEDICINE_PAGE,
  icon: 'MedicineIcon',
  dynamic: true,
},
{
  id: 'nav.foods',
  defaultMessage: 'Foods',
  href: RESTAURANT_PAGE,
  icon: 'Restaurant',
},*/
      ];
      const MOBILE_DRAWER_MENU = [
        HOME_MENU_ITEM,
        ...AUTHORIZED_MENU_ITEMS,
        HELP_MENU_ITEM,
        OFFER_MENU_ITEM,
      ];
      const PROFILE_SIDEBAR_TOP_MENU = [ORDER_MENU_ITEM, HELP_MENU_ITEM];
      const PROFILE_SIDEBAR_BOTTOM_MENU = [PROFILE_MENU_ITEM];
      const LANGUAGE_MENU = [
        {
          id: 'ar',
          defaultMessage: 'Arabic',
          icon: 'SAFlag',
        },
        {
          id: 'zh',
          defaultMessage: 'Chinese',
          icon: 'CNFlag',
        },
        {
          id: 'en',
          defaultMessage: 'English',
          icon: 'USFlag',
        },
        {
          id: 'de',
          defaultMessage: 'German',
          icon: 'DEFlag',
        },
        {
          id: 'he',
          defaultMessage: 'Hebrew',
          icon: 'ILFlag',
        },
        {
          id: 'es',
          defaultMessage: 'Spanish',
          icon: 'ESFlag',
        },
      ];

      /***/
    },

    /***/ '7f0m': /***/ function (module, exports) {
      module.exports =
        '/_next/static/images/offer-1-1f7a4c9ea0ba5a216bc7af1f60d044e0.png';

      /***/
    },

    /***/ '7xIC': /***/ function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireWildcard = __webpack_require__('pONU');

      var _interopRequireDefault = __webpack_require__('Y3ZS');

      exports.__esModule = true;
      exports.useRouter = useRouter;
      exports.makePublicRouterInstance = makePublicRouterInstance;
      exports.createRouter = exports.withRouter = exports.default = void 0;

      var _react = _interopRequireDefault(__webpack_require__('cDcd'));

      var _router2 = _interopRequireWildcard(__webpack_require__('L9lV'));

      exports.Router = _router2.default;
      exports.NextRouter = _router2.NextRouter;

      var _routerContext = __webpack_require__('Osoz');

      var _withRouter = _interopRequireDefault(__webpack_require__('2MIm'));

      exports.withRouter = _withRouter.default;
      /* global window */

      const singletonRouter = {
        router: null,
        // holds the actual router instance
        readyCallbacks: [],

        ready(cb) {
          if (this.router) return cb();

          if (false) {
          }
        },
      }; // Create public properties and methods of the router in the singletonRouter

      const urlPropertyFields = [
        'pathname',
        'route',
        'query',
        'asPath',
        'components',
        'isFallback',
        'basePath',
      ];
      const routerEvents = [
        'routeChangeStart',
        'beforeHistoryChange',
        'routeChangeComplete',
        'routeChangeError',
        'hashChangeStart',
        'hashChangeComplete',
      ];
      const coreMethodFields = [
        'push',
        'replace',
        'reload',
        'back',
        'prefetch',
        'beforePopState',
      ]; // Events is a static property on the router, the router doesn't have to be initialized to use it

      Object.defineProperty(singletonRouter, 'events', {
        get() {
          return _router2.default.events;
        },
      });
      urlPropertyFields.forEach((field) => {
        // Here we need to use Object.defineProperty because, we need to return
        // the property assigned to the actual router
        // The value might get changed as we change routes and this is the
        // proper way to access it
        Object.defineProperty(singletonRouter, field, {
          get() {
            const router = getRouter();
            return router[field];
          },
        });
      });
      coreMethodFields.forEach((field) => {
        // We don't really know the types here, so we add them later instead
        singletonRouter[field] = (...args) => {
          const router = getRouter();
          return router[field](...args);
        };
      });
      routerEvents.forEach((event) => {
        singletonRouter.ready(() => {
          _router2.default.events.on(event, (...args) => {
            const eventField = `on${event
              .charAt(0)
              .toUpperCase()}${event.substring(1)}`;
            const _singletonRouter = singletonRouter;

            if (_singletonRouter[eventField]) {
              try {
                _singletonRouter[eventField](...args);
              } catch (err) {
                // tslint:disable-next-line:no-console
                console.error(
                  `Error when running the Router event: ${eventField}`
                ); // tslint:disable-next-line:no-console

                console.error(`${err.message}\n${err.stack}`);
              }
            }
          });
        });
      });

      function getRouter() {
        if (!singletonRouter.router) {
          const message =
            'No router instance found.\n' +
            'You should only use "next/router" inside the client side of your app.\n';
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
        singletonRouter.readyCallbacks.forEach((cb) => cb());
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
        coreMethodFields.forEach((field) => {
          instance[field] = (...args) => {
            return _router[field](...args);
          };
        });
        return instance;
      }

      /***/
    },

    /***/ '99J/': /***/ function (module, exports) {
      module.exports = require('react-multi-carousel');

      /***/
    },

    /***/ AaBP: /***/ function (module, exports) {
      module.exports =
        '/_next/static/images/makeup-d35970108639dd1b5ea1af732250c450.png';

      /***/
    },

    /***/ BMAw: /***/ function (module, exports) {
      module.exports =
        '/_next/static/images/cloths-bc740630f228713e4bb0de8a7bffce22.png';

      /***/
    },

    /***/ Dtiu: /***/ function (module, exports) {
      module.exports = require('styled-components');

      /***/
    },

    /***/ EGWi: /***/ function (module, exports) {
      module.exports = require('react-content-loader');

      /***/
    },

    /***/ Ej6a: /***/ function (module, exports) {
      module.exports =
        '/_next/static/images/furniture-1653225bd210688946d20a4b28cf8b0e.png';

      /***/
    },

    /***/ Ek28: /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        'cDcd'
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        'Dtiu'
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        styled_components__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        'jvFD'
      );
      /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        next_link__WEBPACK_IMPORTED_MODULE_2__
      );
      /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        '4Q3z'
      );
      /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        next_router__WEBPACK_IMPORTED_MODULE_3__
      );
      /* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        'k004'
      );
      /* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        react_intl__WEBPACK_IMPORTED_MODULE_4__
      );
      var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

      const Icon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig(
        {
          displayName: 'nav-link__Icon',
          componentId: 'sc-6likiw-0',
        }
      )([
        'min-width:16px;margin-right:10px;display:flex;align-items:center;justify-content:center;',
      ]);

      const NavLink = ({
        href,
        label,
        intlId,
        router,
        icon,
        className,
        onClick,
        iconClass,
        dynamic,
      }) => {
        const isCurrentPath =
          router.pathname === href || router.asPath === href;
        return __jsx(
          'div',
          {
            onClick: onClick,
            className: className ? className : '',
          },
          dynamic
            ? __jsx(
                next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                {
                  href: '/[type]',
                  as: href,
                },
                __jsx(
                  'a',
                  {
                    className: isCurrentPath ? ' current-page' : '',
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                    },
                  },
                  icon
                    ? __jsx(
                        Icon,
                        {
                          className: iconClass,
                        },
                        icon
                      )
                    : '',
                  __jsx(
                    'span',
                    {
                      className: 'label',
                    },
                    intlId
                      ? __jsx(
                          react_intl__WEBPACK_IMPORTED_MODULE_4__[
                            'FormattedMessage'
                          ],
                          {
                            id: intlId ? intlId : 'defaultNavLinkId',
                            defaultMessage: label,
                          }
                        )
                      : label
                  )
                )
              )
            : __jsx(
                next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                {
                  href: href,
                },
                __jsx(
                  'a',
                  {
                    className: isCurrentPath ? ' current-page' : '',
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                    },
                  },
                  icon
                    ? __jsx(
                        Icon,
                        {
                          className: iconClass,
                        },
                        icon
                      )
                    : '',
                  __jsx(
                    'span',
                    {
                      className: 'label',
                    },
                    intlId
                      ? __jsx(
                          react_intl__WEBPACK_IMPORTED_MODULE_4__[
                            'FormattedMessage'
                          ],
                          {
                            id: intlId ? intlId : 'defaultNavLinkId',
                            defaultMessage: label,
                          }
                        )
                      : label
                  )
                )
              )
        );
      };

      /* harmony default export */ __webpack_exports__['a'] = Object(
        next_router__WEBPACK_IMPORTED_MODULE_3__['withRouter']
      )(NavLink);

      /***/
    },

    /***/ ExBD: /***/ function (module, exports) {
      module.exports = require('@styled-system/css');

      /***/
    },

    /***/ H8eV: /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'a',
        function () {
          return SEO;
        }
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        'cDcd'
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        'xnum'
      );
      /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        next_head__WEBPACK_IMPORTED_MODULE_1__
      );
      var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

      const SEO = ({ title, description, canonical, css, js, image }) =>
        __jsx(
          next_head__WEBPACK_IMPORTED_MODULE_1___default.a,
          null,
          __jsx('title', null, title),
          __jsx('meta', {
            name: 'description',
            content: description,
          }),
          __jsx('meta', {
            name: 'viewport',
            content: 'width=device-width,minimum-scale=1,initial-scale=1',
          }),
          __jsx('meta', {
            property: 'og:type',
            content: 'website',
          }),
          __jsx('meta', {
            name: 'og:title',
            property: 'og:title',
            content: title,
          }),
          __jsx('meta', {
            name: 'og:description',
            property: 'og:description',
            content: description,
          }),
          __jsx('meta', {
            property: 'og:site_name',
            content: 'Proper Noun',
          }),
          __jsx('meta', {
            property: 'og:url',
            content: `${canonical}`,
          }),
          __jsx('meta', {
            name: 'twitter:card',
            content: 'summary',
          }),
          __jsx('meta', {
            name: 'twitter:title',
            content: title,
          }),
          __jsx('meta', {
            name: 'twitter:description',
            content: description,
          }),
          __jsx('meta', {
            name: 'twitter:site',
            content: '@propernounco',
          }),
          __jsx('meta', {
            name: 'twitter:creator',
            content: '@propernounco',
          }),
          css &&
            __jsx('link', {
              rel: 'stylesheet',
              href: `${css}`,
            }),
          image
            ? __jsx('meta', {
                property: 'og:image',
                content: `${image}`,
              })
            : __jsx('meta', {
                property: 'og:image',
                content:
                  'https://www.propernoun.co/static/images/proper-noun-social.png',
              }),
          image &&
            __jsx('meta', {
              name: 'twitter:image',
              content: `${image}`,
            }),
          canonical &&
            __jsx('link', {
              rel: 'canonical',
              href: `${canonical}`,
            }),
          js &&
            __jsx('script', {
              type: 'text/javascript',
              src: `${js}`,
            })
        );

      /***/
    },

    /***/ IGqs: /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'a',
        function () {
          return GET_TYPE;
        }
      );
      /* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        'txk1'
      );
      /* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        graphql_tag__WEBPACK_IMPORTED_MODULE_0__
      );

      const GET_TYPE = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query Types($searchText: String) {
    types(searchText: $searchText) {
      totalCount
        items{
          id
          name
          slug
          image
          icon
          home_title
          home_subtitle
          meta_title
          meta_keyword
          meta_description
        }
    }
  }
`;

      /***/
    },

    /***/ IrP5: /***/ function (module, exports) {
      module.exports = require('react-reveal/Fade');

      /***/
    },

    /***/ KclG: /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'a',
        function () {
          return ArrowPrev;
        }
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        'cDcd'
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

      const ArrowPrev = ({
        color = 'currentColor',
        width = '18px',
        height = '18px',
      }) => {
        return __jsx(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 512 512',
            width: width,
            height: height,
          },
          __jsx('path', {
            d:
              'M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z',
            fill: color,
            stroke: color,
          })
        );
      };

      /***/
    },

    /***/ KeDb: /***/ function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__('Y3ZS');

      var _interopRequireWildcard = __webpack_require__('pONU');

      exports.__esModule = true;
      exports.default = void 0;

      var _react = _interopRequireWildcard(__webpack_require__('cDcd'));

      var _url = __webpack_require__('bzos');

      var _utils = __webpack_require__('kYf9');

      var _router = _interopRequireDefault(__webpack_require__('7xIC'));

      var _router2 = __webpack_require__('L9lV');

      function isLocal(href) {
        const url = (0, _url.parse)(href, false, true);
        const origin = (0, _url.parse)(
          (0, _utils.getLocationOrigin)(),
          false,
          true
        );
        return (
          !url.host ||
          (url.protocol === origin.protocol && url.host === origin.host)
        );
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
        return url && typeof url === 'object'
          ? (0, _utils.formatWithValidation)(url)
          : url;
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

        return (observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
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
          },
          {
            rootMargin: '200px',
          }
        ));
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
              as: asHref
                ? (0, _router2.addBasePath)(formatUrl(asHref))
                : asHref,
            };
          });

          this.linkClicked = (e) => {
            const { nodeName, target } = e.currentTarget;

            if (
              nodeName === 'A' &&
              ((target && target !== '_self') ||
                e.metaKey ||
                e.ctrlKey ||
                e.shiftKey ||
                (e.nativeEvent && e.nativeEvent.which === 2))
            ) {
              // ignore click for new tab / new window behavior
              return;
            }

            let { href, as } = this.formatUrls(this.props.href, this.props.as);

            if (!isLocal(href)) {
              // ignore click if it's outside our scope (e.g. https://google.com)
              return;
            }

            const { pathname } = window.location;
            href = (0, _url.resolve)(pathname, href);
            as = as ? (0, _url.resolve)(pathname, as) : href;
            e.preventDefault(); //  avoid scroll for urls with anchor refs

            let { scroll } = this.props;

            if (scroll == null) {
              scroll = as.indexOf('#') < 0;
            } // replace state instead of push if prop is present

            _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
              shallow: this.props.shallow,
            }).then((success) => {
              if (!success) return;

              if (scroll) {
                window.scrollTo(0, 0);
                document.body.focus();
              }
            });
          };

          if (false) {
          }

          this.p = props.prefetch !== false;
        }

        componentWillUnmount() {
          this.cleanUpListeners();
        }

        getPaths() {
          const { pathname } = window.location;
          const { href: parsedHref, as: parsedAs } = this.formatUrls(
            this.props.href,
            this.props.as
          );
          const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
          return [
            resolvedHref,
            parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref,
          ];
        }

        handleRef(ref) {
          if (this.p && IntersectionObserver && ref && ref.tagName) {
            this.cleanUpListeners();
            const isPrefetched =
              prefetched[
                this.getPaths().join(
                  // Join on an invalid URI character
                  '%'
                )
              ];

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

          _router.default
            .prefetch(
              paths[/* href */
              0],
              paths[/* asPath */
              1],
              options
            )
            .catch((err) => {
              if (false) {
              }
            });

          prefetched[
            paths.join(
              // Join on an invalid URI character
              '%'
            )
          ] = true;
        }

        render() {
          let { children } = this.props;
          const { href, as } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

          if (typeof children === 'string') {
            children = /*#__PURE__*/ _react.default.createElement(
              'a',
              null,
              children
            );
          } // This will return the first child, if multiple are provided it will throw an error

          const child = _react.Children.only(children);

          const props = {
            ref: (el) => {
              this.handleRef(el);

              if (child && typeof child === 'object' && child.ref) {
                if (typeof child.ref === 'function') child.ref(el);
                else if (typeof child.ref === 'object') {
                  child.ref.current = el;
                }
              }
            },
            onMouseEnter: (e) => {
              if (
                child.props &&
                typeof child.props.onMouseEnter === 'function'
              ) {
                child.props.onMouseEnter(e);
              }

              this.prefetch({
                priority: true,
              });
            },
            onClick: (e) => {
              if (child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
              }

              if (!e.defaultPrevented) {
                this.linkClicked(e);
              }
            },
          }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
          // defined, we specify the current 'href', so that repetition is not needed by the user

          if (
            this.props.passHref ||
            (child.type === 'a' && !('href' in child.props))
          ) {
            props.href = as || href;
          } // Add the ending slash to the paths. So, we can serve the
          // "<page>/index.html" directly.

          if (false) {
          }

          return _react.default.cloneElement(child, props);
        }
      }

      if (false) {
      }

      var _default = Link;
      exports.default = _default;

      /***/
    },

    /***/ KwCx: /***/ function (module, exports) {
      module.exports = require('react-spring');

      /***/
    },

    /***/ L9lV: /***/ function (module, exports, __webpack_require__) {
      'use strict';

      exports.__esModule = true;
      exports.addBasePath = addBasePath;
      exports.delBasePath = delBasePath;
      exports.default = void 0;

      var _url2 = __webpack_require__('bzos');

      var _mitt = _interopRequireDefault(__webpack_require__('YBsB'));

      var _utils = __webpack_require__('fvxO');

      var _isDynamic = __webpack_require__('Lko9');

      var _routeMatcher = __webpack_require__('TBBy');

      var _routeRegex = __webpack_require__('uChv');

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule
          ? obj
          : {
              default: obj,
            };
      }
      /* global __NEXT_DATA__ */
      // tslint:disable:no-console

      const basePath = false || '';

      function addBasePath(path) {
        return path.indexOf(basePath) !== 0 ? basePath + path : path;
      }

      function delBasePath(path) {
        return path.indexOf(basePath) === 0
          ? path.substr(basePath.length) || '/'
          : path;
      }

      function toRoute(path) {
        return path.replace(/\/$/, '') || '/';
      }

      const prepareRoute = (path) =>
        toRoute(!path || path === '/' ? '/index' : path);

      function fetchNextData(pathname, query, isServerRender, cb) {
        let attempts = isServerRender ? 3 : 1;

        function getResponse() {
          return fetch(
            (0, _utils.formatWithValidation)({
              pathname: addBasePath(
                // @ts-ignore __NEXT_DATA__
                `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(
                  pathname
                )}.json`
              ),
              query,
            }),
            {
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
              credentials: 'same-origin',
            }
          ).then((res) => {
            if (!res.ok) {
              if (--attempts > 0 && res.status >= 500) {
                return getResponse();
              }

              throw new Error(`Failed to load static props`);
            }

            return res.json();
          });
        }

        return getResponse()
          .then((data) => {
            return cb ? cb(data) : data;
          })
          .catch((err) => {
            // We should only trigger a server-side transition if this was caused
            // on a client-side transition. Otherwise, we'd get into an infinite
            // loop.
            if (!isServerRender) {
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
        constructor(
          _pathname,
          _query,
          _as2,
          {
            initialProps,
            pageLoader,
            App,
            wrapApp,
            Component,
            err,
            subscription,
            isFallback,
          }
        ) {
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

          this.onPopState = (e) => {
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
              const { pathname, query } = this;
              this.changeState(
                'replaceState',
                (0, _utils.formatWithValidation)({
                  pathname,
                  query,
                }),
                (0, _utils.getURL)()
              );
              return;
            } // Make sure we don't re-render on initial load,
            // can be caused by navigating back from an external site

            if (
              e.state &&
              this.isSsr &&
              e.state.as === this.asPath &&
              (0, _url2.parse)(e.state.url).pathname === this.pathname
            ) {
              return;
            } // If the downstream application returns falsy, return.
            // They will then be responsible for handling the event.

            if (this._bps && !this._bps(e.state)) {
              return;
            }

            const { url, as, options } = e.state;

            if (false) {
            }

            this.replace(url, as, options);
          };

          this._getStaticData = (asPath) => {
            const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
            return true && this.sdc[pathname]
              ? Promise.resolve(this.sdc[pathname])
              : fetchNextData(
                  pathname,
                  null,
                  this.isSsr,
                  (data) => (this.sdc[pathname] = data)
                );
          };

          this._getServerData = (asPath) => {
            let { pathname, query } = (0, _url2.parse)(asPath, true);
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
              __N_SSP: initialProps && initialProps.__N_SSP,
            };
          }

          this.components['/_app'] = {
            Component: App,
          }; // Backwards compat for Router.router.events
          // TODO: Should be remove the following major version as it was never documented

          this.events = Router.events;
          this.pageLoader = pageLoader;
          this.pathname = _pathname;
          this.query = _query; // if auto prerendered and dynamic route wait to update asPath
          // until after mount to prevent hydration mismatch

          this.asPath = // @ts-ignore this is temporarily global (attached to window)
            (0, _isDynamic.isDynamicRoute)(_pathname) &&
            __NEXT_DATA__.autoExport
              ? _pathname
              : _as2;
          this.basePath = basePath;
          this.sub = subscription;
          this.clc = null;
          this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
          // back from external site

          this.isSsr = true;
          this.isFallback = isFallback;

          if (false) {
          }
        } // @deprecated backwards compatibility even though it's a private method.

        static _rewriteUrlForNextExport(url) {
          if (false) {
          } else {
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
            __N_SSP: mod.__N_SSP,
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

            let url =
              typeof _url === 'object'
                ? (0, _utils.formatWithValidation)(_url)
                : _url;
            let as =
              typeof _as === 'object'
                ? (0, _utils.formatWithValidation)(_as)
                : _as;
            url = addBasePath(url);
            as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
            // "<page>/index.html" directly for the SSR page.

            if (false) {
            }

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

            const { pathname, query, protocol } = (0, _url2.parse)(url, true);

            if (!pathname || protocol) {
              if (false) {
              }

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
            const { shallow = false } = options;

            if ((0, _isDynamic.isDynamicRoute)(route)) {
              const { pathname: asPathname } = (0, _url2.parse)(as);
              const routeRegex = (0, _routeRegex.getRouteRegex)(route);
              const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(
                asPathname
              );

              if (!routeMatch) {
                const missingParams = Object.keys(routeRegex.groups).filter(
                  (param) => !query[param]
                );

                if (missingParams.length > 0) {
                  if (false) {
                  }

                  return reject(
                    new Error(
                      `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` +
                        `Read more: https://err.sh/vercel/next.js/incompatible-href-as`
                    )
                  );
                }
              } else {
                // Merge params into `query`, overwriting any specified in search
                Object.assign(query, routeMatch);
              }
            }

            Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

            this.getRouteInfo(route, pathname, query, as, shallow).then(
              (routeInfo) => {
                const { error } = routeInfo;

                if (error && error.cancelled) {
                  return resolve(false);
                }

                Router.events.emit('beforeHistoryChange', as);
                this.changeState(method, url, as, options);

                if (false) {
                }

                this.set(route, pathname, query, as, routeInfo).then(() => {
                  if (error) {
                    Router.events.emit('routeChangeError', error, as);
                    throw error;
                  }

                  Router.events.emit('routeChangeComplete', as);
                  return resolve(true);
                });
              },
              reject
            );
          });
        }

        changeState(method, url, as, options = {}) {
          if (false) {
          }

          if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
            window.history[method](
              {
                url,
                as,
                options,
              }, // Most browsers currently ignores this parameter, although they may use it in the future.
              // Passing the empty string here should be safe against future changes to the method.
              // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
              '',
              as
            );
          }
        }

        getRouteInfo(route, pathname, query, as, shallow = false) {
          const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
          // If the route is already rendered on the screen.

          if (shallow && cachedRouteInfo && this.route === route) {
            return Promise.resolve(cachedRouteInfo);
          }

          const handleError = (err, loadErrorFail) => {
            return new Promise((resolve) => {
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
                  error: err,
                });
              }

              if (err.cancelled) {
                // @ts-ignore TODO: fix the control flow here
                return resolve({
                  error: err,
                });
              }

              resolve(
                this.fetchComponent('/_error')
                  .then((res) => {
                    const { page: Component } = res;
                    const routeInfo = {
                      Component,
                      err,
                    };
                    return new Promise((resolve) => {
                      this.getInitialProps(Component, {
                        err,
                        pathname,
                        query,
                      }).then(
                        (props) => {
                          routeInfo.props = props;
                          routeInfo.error = err;
                          resolve(routeInfo);
                        },
                        (gipErr) => {
                          console.error(
                            'Error in error page `getInitialProps`: ',
                            gipErr
                          );
                          routeInfo.error = err;
                          routeInfo.props = {};
                          resolve(routeInfo);
                        }
                      );
                    });
                  })
                  .catch((err) => handleError(err, true))
              );
            });
          };

          return new Promise((resolve, reject) => {
            if (cachedRouteInfo) {
              return resolve(cachedRouteInfo);
            }

            this.fetchComponent(route).then(
              (res) =>
                resolve({
                  Component: res.page,
                  __N_SSG: res.mod.__N_SSG,
                  __N_SSP: res.mod.__N_SSP,
                }),
              reject
            );
          })
            .then((routeInfo) => {
              const { Component, __N_SSG, __N_SSP } = routeInfo;

              if (false) {
              }

              return this._getData(() =>
                __N_SSG
                  ? this._getStaticData(as)
                  : __N_SSP
                  ? this._getServerData(as)
                  : this.getInitialProps(
                      Component, // we provide AppTree later so this needs to be `any`
                      {
                        pathname,
                        query,
                        asPath: as,
                      }
                    )
              ).then((props) => {
                routeInfo.props = props;
                this.components[route] = routeInfo;
                return routeInfo;
              });
            })
            .catch(handleError);
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
            const { pathname, protocol } = (0, _url2.parse)(url);

            if (!pathname || protocol) {
              if (false) {
              }

              return;
            } // Prefetch is not supported in development mode because it would trigger on-demand-entries

            if (false) {
            }

            const route = delBasePath(toRoute(pathname));
            Promise.all([
              this.pageLoader.prefetchData(url, delBasePath(asPath)),
              this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](
                route
              ),
            ]).then(() => resolve(), reject);
          });
        }

        async fetchComponent(route) {
          let cancelled = false;

          const cancel = (this.clc = () => {
            cancelled = true;
          });

          route = delBasePath(route);
          const componentResult = await this.pageLoader.loadPage(route);

          if (cancelled) {
            const error = new Error(
              `Abort fetching component for route: "${route}"`
            );
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
          return fn().then((data) => {
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
          const { Component: App } = this.components['/_app'];

          const AppTree = this._wrapApp(App);

          ctx.AppTree = AppTree;
          return (0, _utils.loadGetInitialProps)(App, {
            AppTree,
            Component,
            router: this,
            ctx,
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

      /***/
    },

    /***/ Lko9: /***/ function (module, exports, __webpack_require__) {
      'use strict';

      exports.__esModule = true;
      exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

      const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

      function isDynamicRoute(route) {
        return TEST_ROUTE.test(route);
      }

      /***/
    },

    /***/ 'OT+S': /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'a',
        function () {
          return GET_CATEGORIES;
        }
      );
      /* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        'txk1'
      );
      /* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        graphql_tag__WEBPACK_IMPORTED_MODULE_0__
      );

      const GET_CATEGORIES = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
query GetCategories(
  $type: String
){
	shopCategories(
    type: $type
  ) {
    items {
        id
        parent_id
        name
        slug
        banner
        icon
        children {
          id
          name
          slug
          banner
          icon
        }
      }
      totalCount
      hasMore
    }
  }
`;

      /***/
    },

    /***/ Osoz: /***/ function (module, exports) {
      module.exports = require('next/dist/next-server/lib/router-context.js');

      /***/
    },

    /***/ Oyez: /***/ function (module, exports) {
      module.exports = require('apollo-client');

      /***/
    },

    /***/ PQXp: /***/ function (module, exports) {
      module.exports =
        '/_next/static/images/books-f5200ba7535257ce70a563fc9ff56f35.png';

      /***/
    },

    /***/ R4SK: /***/ function (module, exports) {
      module.exports =
        '/_next/static/images/grocery-f1565ac25de02b9295dccc2da13004ab.png';

      /***/
    },

    /***/ TBBy: /***/ function (module, exports, __webpack_require__) {
      'use strict';

      exports.__esModule = true;
      exports.getRouteMatcher = getRouteMatcher;

      function getRouteMatcher(routeRegex) {
        const { re, groups } = routeRegex;
        return (pathname) => {
          const routeMatch = re.exec(pathname);

          if (!routeMatch) {
            return false;
          }

          const decode = (param) => {
            try {
              return decodeURIComponent(param);
            } catch (_) {
              const err = new Error('failed to decode param');
              err.code = 'DECODE_FAILED';
              throw err;
            }
          };

          const params = {};
          Object.keys(groups).forEach((slugName) => {
            const g = groups[slugName];
            const m = routeMatch[g.pos];

            if (m !== undefined) {
              params[slugName] = ~m.indexOf('/')
                ? m.split('/').map((entry) => decode(entry))
                : g.repeat
                ? [decode(m)]
                : decode(m);
            }
          });
          return params;
        };
      }

      /***/
    },

    /***/ TG1l: /***/ function (module, exports) {
      module.exports = require('apollo-link-http');

      /***/
    },

    /***/ W1nP: /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      /* unused harmony export ADMIN_IMAGE_HOST */
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'a',
        function () {
          return SHOP_IMAGE_HOST;
        }
      );
      const ADMIN_IMAGE_HOST = process.env.REACT_APP_IMAGE_URL;
      const SHOP_IMAGE_HOST = 'http://api.mahdifashion.com/';

      /***/
    },

    /***/ Y3ZS: /***/ function (module, exports) {
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule
          ? obj
          : {
              default: obj,
            };
      }

      module.exports = _interopRequireDefault;

      /***/
    },

    /***/ YBsB: /***/ function (module, exports, __webpack_require__) {
      'use strict';

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
            (all[type] || []).slice().map((handler) => {
              handler(...evts);
            });
          },
        };
      }

      /***/
    },

    /***/ bM43: /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'a',
        function () {
          return initializeApollo;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'b',
        function () {
          return useApollo;
        }
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        'cDcd'
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        'Oyez'
      );
      /* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        apollo_client__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        'oz4i'
      );
      /* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__
      );
      /* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        'TG1l'
      );
      /* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        apollo_link_http__WEBPACK_IMPORTED_MODULE_3__
      );

      let apolloClient;
      console.log('http://api.mahdifashion.com/api');

      function createApolloClient() {
        let token = null;

        if (false) {
        }

        return new apollo_client__WEBPACK_IMPORTED_MODULE_1__['ApolloClient']({
          ssrMode: true,
          link: new apollo_link_http__WEBPACK_IMPORTED_MODULE_3__['HttpLink']({
            uri: 'http://api.mahdifashion.com/api',
            // Server URL (must be absolute)
            credentials: 'same-origin',
            // Additional fetch() options like `credentials`
            headers: {
              'x-access-token': token ? token : '',
            },
            // Additional fetch() options like `headers`
            onError: ({ networkError, graphQLErrors }) => {
              console.log('graphQLErrors', graphQLErrors);
              console.log('networkError', networkError);
            },
          }),
          cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__[
            'InMemoryCache'
          ](),
        });
      }

      function initializeApollo(initialState = null) {
        var _apolloClient2;

        const _apolloClient =
          (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0
            ? _apolloClient2
            : createApolloClient(); // If your page has Next.js data fetching methods that use Apollo Client, the initial state
        // gets hydrated here

        if (initialState) {
          _apolloClient.cache.restore(initialState);
        } // For SSG and SSR always create a new Apollo Client

        if (true) return _apolloClient; // Create the Apollo Client once in the client

        if (!apolloClient) apolloClient = _apolloClient;
        return _apolloClient;
      }
      function useApollo(initialState) {
        const store = Object(
          react__WEBPACK_IMPORTED_MODULE_0__['useMemo']
        )(() => initializeApollo(initialState), [initialState]);
        return store;
      }

      /***/
    },

    /***/ 'bYH+': /***/ function (module, exports) {
      module.exports = require('react-image');

      /***/
    },

    /***/ bzos: /***/ function (module, exports) {
      module.exports = require('url');

      /***/
    },

    /***/ cDcd: /***/ function (module, exports) {
      module.exports = require('react');

      /***/
    },

    /***/ eIFp: /***/ function (module, exports) {
      module.exports =
        '/_next/static/images/offer-2-90d3534e1ad62a8b8a977f1290e61e9f.png';

      /***/
    },

    /***/ fvxO: /***/ function (module, exports, __webpack_require__) {
      'use strict';

      exports.__esModule = true;
      exports.execOnce = execOnce;
      exports.getLocationOrigin = getLocationOrigin;
      exports.getURL = getURL;
      exports.getDisplayName = getDisplayName;
      exports.isResSent = isResSent;
      exports.loadGetInitialProps = loadGetInitialProps;
      exports.formatWithValidation = formatWithValidation;
      exports.ST = exports.SP = exports.urlObjectKeys = void 0;

      var _url = __webpack_require__('bzos');
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
        const { protocol, hostname, port } = window.location;
        return `${protocol}//${hostname}${port ? ':' + port : ''}`;
      }

      function getURL() {
        const { href } = window.location;
        const origin = getLocationOrigin();
        return href.substring(origin.length);
      }

      function getDisplayName(Component) {
        return typeof Component === 'string'
          ? Component
          : Component.displayName || Component.name || 'Unknown';
      }

      function isResSent(res) {
        return res.finished || res.headersSent;
      }

      async function loadGetInitialProps(App, ctx) {
        if (false) {
          var _App$prototype;
        } // when called from _app `ctx` is nested in `ctx`

        const res = ctx.res || (ctx.ctx && ctx.ctx.res);

        if (!App.getInitialProps) {
          if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
              pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx),
            };
          }

          return {};
        }

        const props = await App.getInitialProps(ctx);

        if (res && isResSent(res)) {
          return props;
        }

        if (!props) {
          const message = `"${getDisplayName(
            App
          )}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
          throw new Error(message);
        }

        if (false) {
        }

        return props;
      }

      const urlObjectKeys = [
        'auth',
        'hash',
        'host',
        'hostname',
        'href',
        'path',
        'pathname',
        'port',
        'protocol',
        'query',
        'search',
        'slashes',
      ];
      exports.urlObjectKeys = urlObjectKeys;

      function formatWithValidation(url, options) {
        if (false) {
        }

        return (0, _url.format)(url, options);
      }

      const SP = typeof performance !== 'undefined';
      exports.SP = SP;
      const ST =
        SP &&
        typeof performance.mark === 'function' &&
        typeof performance.measure === 'function';
      exports.ST = ST;

      /***/
    },

    /***/ hz1c: /***/ function (module, exports) {
      module.exports =
        '/_next/static/images/offer-3-2f8285b13bef950f843cb4147666af6e.png';

      /***/
    },

    /***/ hzYQ: /***/ function (module, exports) {
      module.exports =
        '/_next/static/images/bags-ac02ab6ebb5355d936d3577015f180c8.png';

      /***/
    },

    /***/ i2RQ: /***/ function (module, exports) {
      function _typeof(obj) {
        '@babel/helpers - typeof';

        if (
          typeof Symbol === 'function' &&
          typeof Symbol.iterator === 'symbol'
        ) {
          module.exports = _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          module.exports = _typeof = function _typeof(obj) {
            return obj &&
              typeof Symbol === 'function' &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          };
        }

        return _typeof(obj);
      }

      module.exports = _typeof;

      /***/
    },

    /***/ isz7: /***/ function (module, exports) {
      module.exports = require('react-stickynode');

      /***/
    },

    /***/ jbEd: /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'b',
        function () {
          return InjectRTL;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'a',
        function () {
          return GlobalStyle;
        }
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        'Dtiu'
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        styled_components__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        '4JT2'
      );
      /* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        styled_system__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        'ExBD'
      );
      /* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        _styled_system_css__WEBPACK_IMPORTED_MODULE_2__
      );
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly)
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          keys.push.apply(keys, symbols);
        }
        return keys;
      }

      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source)
            );
          } else {
            ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key)
              );
            });
          }
        }
        return target;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      // import { themeGet } from '@styled-system/theme-get';
      // const TIMEOUT = 400;
      // export const themed = (key) => (props) =>
      //   css(get(props.theme, `customs.${key}`))(props.theme);
      // export const themeGet = (path, fallback = null) => (props) =>
      //   get(props.theme, path, fallback);

      const InjectRTL = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
        {
          displayName: 'globalstyle__InjectRTL',
          componentId: 'sc-1iprpk7-0',
        }
      )(
        ['', ''],
        ({ lang }) =>
          (lang === 'ar' || lang === 'he') &&
          `
    font-family: 'Cairo', sans-serif;
    `
      ); // const heading = {
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

      const GlobalStyle = Object(
        styled_components__WEBPACK_IMPORTED_MODULE_0__['createGlobalStyle']
      )(({ theme }) =>
        _styled_system_css__WEBPACK_IMPORTED_MODULE_2___default()(
          _objectSpread(
            {
              '*, *::before, *::after': {
                boxSizing: 'border-box',
              },
              body: {
                margin: 0,
                fontFamily: 'body',
                fontWeight: 'regular',
                fontSize: 'base',
                lineHeight: '1.5',
                backgroundColor: 'white',
                transition: Object(
                  styled_system__WEBPACK_IMPORTED_MODULE_1__['get']
                )(theme, 'customs.transition'),
              },
              h1: {
                fontFamily: 'heading',
                fontSize: '5xl',
                margin: 0,
              },
              h2: {
                fontFamily: 'heading',
                fontSize: '3xl',
                margin: 0,
              },
              h3: {
                fontFamily: 'heading',
                fontSize: '2xl',
                margin: 0,
              },
              h4: {
                fontFamily: 'heading',
                fontSize: 'xl',
                margin: 0,
              },
              h5: {
                fontFamily: 'heading',
                fontSize: 'md',
                margin: 0,
              },
              h6: {
                fontFamily: 'heading',
                fontSize: 'base',
                margin: 0,
              },
              'p,span,button,li,div': {
                fontFamily: 'body',
                margin: 0,
              },
              a: {
                fontFamily: 'body',
                textDecoration: 'none',
              },
              ul: {
                margin: 0,
                padding: 0,
              },
              li: {
                listStyle: 'none',
              },
              pre: {
                fontFamily: 'monospace',
                overflowX: 'auto',
                code: {
                  color: 'inherit',
                },
              },
              code: {
                fontFamily: 'monospace',
                fontSize: 'inherit',
              },
              table: {
                width: '100%',
                borderCollapse: 'separate',
                borderSpacing: 0,
              },
              th: {
                textAlign: 'left',
                borderBottomStyle: 'solid',
              },
              td: {
                textAlign: 'left',
                borderBottomStyle: 'solid',
              },
              img: {
                maxWidth: '100%',
              },
              '.quick-view-overlay': {
                backgroundColor: 'rgba(0,0,0,.5)',
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
                  boxSizing: 'border-box',
                },
              },
              '.search-modal-mobile': {
                transform: 'none!important',
                maxWidth: 'none!important',
                maxHeight: 'none!important',
                top: '0!important',
                left: '0!important',
                background: 'transparent!important',
                borderRadius: '0!important',
              },
              '.reuseModalCloseBtn': {
                right: '10px!important',
                backgroundColor: '#ffffff!important',
                color: '#222222!important',
                borderRadius: '15px!important',
                padding: '0 9px!important',
                boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
              },
              '.image-item': {
                padding: '0 15px',
              },
              '@media (max-width: 1199px) and (min-width: 991px)': {
                '.image-item': {
                  paddingLeft: '10px',
                  paddingRight: '10px',
                },
              },
              '@media (max-width: 768px)': {
                '.image-item': {
                  paddingLeft: '7.5px',
                  paddingRight: '7.5px',
                },
              },
              '.rc-table-fixed-header .rc-table-scroll .rc-table-header': {
                marginBottom: '0 !important',
                paddingBottom: '0 !important',
                th: {
                  padding: '8px 20px',
                },
              },
              '.drawer-content-wrapper': {
                '*:focus': {
                  outline: 'none',
                },
              },
              '.rc-table-content': {
                border: 0,
              },
            },
            theme.globals
          )
        )
      );

      /***/
    },

    /***/ jvFD: /***/ function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__('KeDb');

      /***/
    },

    /***/ k004: /***/ function (module, exports) {
      module.exports = require('react-intl');

      /***/
    },

    /***/ kYf9: /***/ function (module, exports) {
      module.exports = require('next/dist/next-server/lib/utils.js');

      /***/
    },

    /***/ mU8t: /***/ function (module, exports) {
      module.exports = require('@apollo/react-hooks');

      /***/
    },

    /***/ ocwR: /***/ function (module, exports) {
      module.exports = require('resize-observer-polyfill');

      /***/
    },

    /***/ oz4i: /***/ function (module, exports) {
      module.exports = require('apollo-cache-inmemory');

      /***/
    },

    /***/ pONU: /***/ function (module, exports, __webpack_require__) {
      var _typeof = __webpack_require__('i2RQ');

      function _getRequireWildcardCache() {
        if (typeof WeakMap !== 'function') return null;
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

        if (
          obj === null ||
          (_typeof(obj) !== 'object' && typeof obj !== 'function')
        ) {
          return {
            default: obj,
          };
        }

        var cache = _getRequireWildcardCache();

        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }

        var newObj = {};
        var hasPropertyDescriptor =
          Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor
              ? Object.getOwnPropertyDescriptor(obj, key)
              : null;

            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }

        newObj['default'] = obj;

        if (cache) {
          cache.set(obj, newObj);
        }

        return newObj;
      }

      module.exports = _interopRequireWildcard;

      /***/
    },

    /***/ qC9r: /***/ function (module, exports) {
      module.exports = require('react-custom-scrollbars');

      /***/
    },

    /***/ qbum: /***/ function (module, exports) {
      module.exports = require('@redq/reuse-modal');

      /***/
    },

    /***/ quMH: /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function () {
          return ErrorMessage;
        }
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        'cDcd'
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        'Dtiu'
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        styled_components__WEBPACK_IMPORTED_MODULE_1__
      );

      var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

      function ErrorMessage({ message }) {
        return __jsx(StyledAside, null, message);
      }
      const StyledAside = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.aside.withConfig(
        {
          displayName: 'error-message__StyledAside',
          componentId: 'sc-5jhwvi-0',
        }
      )({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '1.5rem',
        fontSize: '22px',
        color: '000',
        backgroundColor: '#fff',
      });

      /***/
    },

    /***/ roL4: /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, 'getStaticProps', function () {
        return /* binding */ getStaticProps;
      });
      __webpack_require__.d(__webpack_exports__, 'getStaticPaths', function () {
        return /* binding */ getStaticPaths;
      });

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__('cDcd');
      var external_react_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_
      );

      // EXTERNAL MODULE: external "next/dynamic"
      var dynamic_ = __webpack_require__('/T1H');
      var dynamic_default = /*#__PURE__*/ __webpack_require__.n(dynamic_);

      // EXTERNAL MODULE: external "next/router"
      var router_ = __webpack_require__('4Q3z');

      // EXTERNAL MODULE: external "@redq/reuse-modal"
      var reuse_modal_ = __webpack_require__('qbum');

      // EXTERNAL MODULE: external "@apollo/react-hooks"
      var react_hooks_ = __webpack_require__('mU8t');

      // EXTERNAL MODULE: ./src/components/nav-link/nav-link.tsx
      var nav_link = __webpack_require__('Ek28');

      // EXTERNAL MODULE: external "styled-components"
      var external_styled_components_ = __webpack_require__('Dtiu');
      var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(
        external_styled_components_
      );

      // EXTERNAL MODULE: external "@styled-system/theme-get"
      var theme_get_ = __webpack_require__('/JeY');

      // CONCATENATED MODULE: ./src/components/store-nav/store-nav.style.tsx

      const StoreNavWrapper = external_styled_components_default.a.div.withConfig(
        {
          displayName: 'store-navstyle__StoreNavWrapper',
          componentId: 'sc-1f4v04y-0',
        }
      )(
        [
          'width:100%;overflow:hidden;z-index:1;position:relative;background-color:',
          ';height:55px;',
        ],
        Object(theme_get_['themeGet'])('colors.white', '#ffffff')
      );
      const StoreNavLinks = external_styled_components_default.a.div.withConfig(
        {
          displayName: 'store-navstyle__StoreNavLinks',
          componentId: 'sc-1f4v04y-1',
        }
      )(
        [
          'display:flex;flex-wrap:nowrap;align-items:flex-start;height:80px;overflow-y:hidden;overflow-x:auto;padding-top:15px;padding-bottom:25px;padding-left:15px;padding-right:15px;.store-nav-link{margin-right:10px;a{display:flex;align-items:center;font-size:calc(',
          ' - 1px);font-weight:',
          ';color:',
          ';padding:5px 9px;border-radius:',
          ';line-height:1.2;white-space:nowrap;svg{margin-right:5px;flex-shrink:0;}&.current-page{color:',
          ';background-color:',
          ';}}}',
        ],
        Object(theme_get_['themeGet'])('fontSizes.base', '15px'),
        Object(theme_get_['themeGet'])('fontWeights.bold', '700'),
        Object(theme_get_['themeGet'])('colors.text.regular', '#77798C'),
        Object(theme_get_['themeGet'])('radii.base', '6px'),
        Object(theme_get_['themeGet'])('colors.primary.regular', '#009E7F'),
        Object(theme_get_['themeGet'])('colors.gray.100', '#f9f9f9')
      );
      /* harmony default export */ var store_nav_style = StoreNavWrapper;
      // CONCATENATED MODULE: ./src/components/store-nav/store-nav.tsx
      var __jsx = external_react_default.a.createElement;

      const StoreNav = ({ className, items = [] }) => {
        return __jsx(
          store_nav_style,
          {
            className: className,
          },
          __jsx(
            StoreNavLinks,
            null,
            items.map((item, index) =>
              __jsx(nav_link['a' /* default */], {
                className: 'store-nav-link',
                href: item.href,
                label: item.defaultMessage,
                intlId: item.id,
                dynamic: item.dynamic,
                key: index,
              })
            )
          )
        );
      };

      /* harmony default export */ var store_nav = StoreNav;
      // EXTERNAL MODULE: external "react-multi-carousel"
      var external_react_multi_carousel_ = __webpack_require__('99J/');
      var external_react_multi_carousel_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_multi_carousel_
      );

      // EXTERNAL MODULE: ./src/assets/icons/ArrowNext.tsx
      var ArrowNext = __webpack_require__('0zej');

      // EXTERNAL MODULE: ./src/assets/icons/ArrowPrev.tsx
      var ArrowPrev = __webpack_require__('KclG');

      // EXTERNAL MODULE: ./src/contexts/language/language.provider.tsx + 2 modules
      var language_provider = __webpack_require__('uiyz');

      // CONCATENATED MODULE: ./src/components/carousel/carousel.tsx
      var carousel_jsx = external_react_default.a.createElement;

      function _extends() {
        _extends =
          Object.assign ||
          function (target) {
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

      function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        var target = _objectWithoutPropertiesLoose(source, excluded);
        var key, i;
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key))
              continue;
            target[key] = source[key];
          }
        }
        return target;
      }

      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          target[key] = source[key];
        }
        return target;
      }

      const ButtonPrev = external_styled_components_default()(
        'button'
      ).withConfig({
        displayName: 'carousel__ButtonPrev',
        componentId: 'sdn1m3-0',
      })(
        [
          'height:40px;width:40px;display:flex;align-items:center;justify-content:center;background-color:',
          ';color:',
          ';padding:0;border-radius:20px;box-shadow:',
          ';border:0;outline:0;cursor:pointer;position:absolute;top:50%;left:40px;margin-top:-20px;z-index:99;',
        ],
        Object(theme_get_['themeGet'])('colors.white', '#ffffff'),
        Object(theme_get_['themeGet'])('colors.primary.regular', '#009E7F'),
        Object(theme_get_['themeGet'])(
          'shadows.base',
          '0 3px 6px rgba(0, 0, 0, 0.16)'
        )
      );
      const ButtonNext = external_styled_components_default()(
        'button'
      ).withConfig({
        displayName: 'carousel__ButtonNext',
        componentId: 'sdn1m3-1',
      })(
        [
          'height:40px;width:40px;display:flex;align-items:center;justify-content:center;background-color:#ffffff;color:',
          ';padding:0;border-radius:20px;box-shadow:',
          ';border:0;outline:0;cursor:pointer;position:absolute;top:50%;right:40px;margin-top:-20px;z-index:99;',
        ],
        Object(theme_get_['themeGet'])('colors.primary.regular', '#009E7F'),
        Object(theme_get_['themeGet'])(
          'shadows.base',
          '0 3px 6px rgba(0, 0, 0, 0.16)'
        )
      );
      const ButtonGroupWrapper = external_styled_components_default()(
        'div'
      ).withConfig({
        displayName: 'carousel__ButtonGroupWrapper',
        componentId: 'sdn1m3-2',
      })(['']);

      const PrevButton = ({ onClick, children }) => {
        return carousel_jsx(
          ButtonPrev,
          {
            onClick: (e) => {
              e.preventDefault();
              onClick();
            },
            className: 'prevButton',
          },
          children
        );
      };

      const NextButton = ({ onClick, children }) => {
        return carousel_jsx(
          ButtonNext,
          {
            onClick: (e) => {
              e.preventDefault();
              onClick();
            },
            className: 'nextButton',
          },
          children
        );
      };

      const ButtonGroup = ({ next, previous }) => {
        const { isRtl } = Object(language_provider['b' /* useLocale */])();
        return carousel_jsx(
          ButtonGroupWrapper,
          null,
          isRtl
            ? carousel_jsx(
                external_react_default.a.Fragment,
                null,
                carousel_jsx(
                  NextButton,
                  {
                    onClick: () => next(),
                    className: 'rtl',
                  },
                  carousel_jsx(ArrowPrev['a' /* ArrowPrev */], null)
                ),
                carousel_jsx(
                  PrevButton,
                  {
                    onClick: () => previous(),
                  },
                  carousel_jsx(ArrowNext['a' /* ArrowNext */], null)
                )
              )
            : carousel_jsx(
                external_react_default.a.Fragment,
                null,
                carousel_jsx(
                  PrevButton,
                  {
                    onClick: () => previous(),
                  },
                  carousel_jsx(ArrowPrev['a' /* ArrowPrev */], null)
                ),
                carousel_jsx(
                  NextButton,
                  {
                    onClick: () => next(),
                  },
                  carousel_jsx(ArrowNext['a' /* ArrowNext */], null)
                )
              )
        );
      };

      const responsive = {
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 3,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
        },
      };
      function CustomCarousel(_ref) {
        let {
            data,
            deviceType: { mobile, tablet, desktop },
            component,
            autoPlay = false,
            infinite = true,
            customLeftArrow,
            customRightArrow,
            itemClass,
            isRtl,
          } = _ref,
          props = _objectWithoutProperties(_ref, [
            'data',
            'deviceType',
            'component',
            'autoPlay',
            'infinite',
            'customLeftArrow',
            'customRightArrow',
            'itemClass',
            'isRtl',
          ]);

        return carousel_jsx(
          'div',
          {
            dir: 'ltr',
          },
          carousel_jsx(
            external_react_multi_carousel_default.a,
            _extends(
              {
                arrows: false,
                responsive: responsive,
                showDots: false,
                slidesToSlide: 1,
                infinite: infinite,
                containerClass: 'container-with-dots',
                itemClass: itemClass,
                autoPlay: autoPlay,
                autoPlaySpeed: 3000,
                renderButtonGroupOutside: true,
                additionalTransfrom: 0,
                customButtonGroup: carousel_jsx(ButtonGroup, null),
              },
              props
            ),
            data.map((item, index) => {
              if (component) return component(item);
              return carousel_jsx(
                'div',
                {
                  style: {
                    padding: '0 15px',
                    overflow: 'hidden',
                  },
                  key: index,
                },
                carousel_jsx(
                  'a',
                  {
                    href: item.link,
                    style: {
                      display: 'flex',
                      cursor: 'pointer',
                    },
                  },
                  carousel_jsx('img', {
                    key: item.id,
                    src: item.imgSrc,
                    alt: item.alt,
                    style: {
                      width: '100%',
                      height: '100%',
                      display: 'block',
                      position: 'relative',
                    },
                  })
                )
              );
            })
          )
        );
      }
      // EXTERNAL MODULE: external "react-intl"
      var external_react_intl_ = __webpack_require__('k004');

      // EXTERNAL MODULE: external "styled-system"
      var external_styled_system_ = __webpack_require__('4JT2');

      // EXTERNAL MODULE: external "@styled-system/css"
      var css_ = __webpack_require__('ExBD');
      var css_default = /*#__PURE__*/ __webpack_require__.n(css_);

      // CONCATENATED MODULE: ./src/components/banner/banner.style.tsx

      const Box = external_styled_components_default.a.div.withConfig({
        displayName: 'bannerstyle__Box',
        componentId: 'sc-1wl29p7-0',
      })(
        css_default()({
          height: [200, '100vh'],
        }),
        {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          position: 'relative', // backgroundColor: #f7f7f7;
        }
      );
      const Image = external_styled_components_default.a.div.withConfig({
        displayName: 'bannerstyle__Image',
        componentId: 'sc-1wl29p7-1',
      })(
        css_default()({
          backgroundSize: ['cover'],
        }),
        {
          width: '100%',
          height: '100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
          top: 0,
          left: 0,
          '@media (max-width: 990px) and (min-width: 768px)': {
            backgroundPosition: 'inherit',
          },
        },
        external_styled_system_['background']
      );
      const Content = external_styled_components_default.a.div.withConfig({
        displayName: 'bannerstyle__Content',
        componentId: 'sc-1wl29p7-2',
      })(
        css_default()({
          px: ['15px'],
          pt: [40, 0],
        }),
        {
          position: 'relative',
          zIndex: 2,
        }
      );
      const Title = external_styled_components_default.a.h2.withConfig({
        displayName: 'bannerstyle__Title',
        componentId: 'sc-1wl29p7-3',
      })(
        css_default()({
          fontSize: [17, '2xl', 45],
          color: 'text.bold',
          fontWeight: 'bold',
        }),
        {
          marginBottom: 15,
          textAlign: 'center',
        }
      );
      const Description = external_styled_components_default.a.p.withConfig({
        displayName: 'bannerstyle__Description',
        componentId: 'sc-1wl29p7-4',
      })(
        css_default()({
          fontSize: ['base', 'md'],
          color: 'text.regular',
          marginBottom: [null, 60],
          display: ['none', 'block'],
          fontWeight: 'regular',
          lineHeight: 'body',
        }),
        {
          textAlign: 'center',
        }
      );
      // EXTERNAL MODULE: external "react-waypoint"
      var external_react_waypoint_ = __webpack_require__('/twb');

      // EXTERNAL MODULE: ./src/contexts/app/app.provider.ts + 1 modules
      var app_provider = __webpack_require__('xZKy');

      // CONCATENATED MODULE: ./src/components/banner/banner.tsx
      var banner_jsx = external_react_default.a.createElement;

      const Banner = ({ imageUrl, intlTitleId, intlDescriptionId }) => {
        const dispatch = Object(app_provider['b' /* useAppDispatch */])();
        const setSticky = Object(external_react_['useCallback'])(
          () =>
            dispatch({
              type: 'SET_STICKY',
            }),
          [dispatch]
        );
        const removeSticky = Object(external_react_['useCallback'])(
          () =>
            dispatch({
              type: 'REMOVE_STICKY',
            }),
          [dispatch]
        );

        const onWaypointPositionChange = ({ currentPosition }) => {
          if (!currentPosition || currentPosition === 'above') {
            setSticky();
          }
        };

        return banner_jsx(
          Box,
          null,
          banner_jsx(Image, {
            backgroundImage: `url(${imageUrl})`,
          }),
          banner_jsx(
            Content,
            null,
            banner_jsx(
              Title,
              null,
              banner_jsx(external_react_intl_['FormattedMessage'], {
                id: 'Set Your Title Through Language File',
                defaultMessage: intlTitleId,
                values: {
                  minute: 90,
                },
              })
            ),
            banner_jsx(
              Description,
              null,
              banner_jsx(external_react_intl_['FormattedMessage'], {
                id: 'Set Your Description Through Language File',
                defaultMessage: intlDescriptionId,
              })
            ),
            banner_jsx(external_react_waypoint_['Waypoint'], {
              onEnter: removeSticky,
              onLeave: setSticky,
              onPositionChange: onWaypointPositionChange,
            })
          )
        );
      };
      // CONCATENATED MODULE: ./src/assets/styles/pages.style.tsx

      const MobileCarouselDropdown = external_styled_components_default.a.div.withConfig(
        {
          displayName: 'pagesstyle__MobileCarouselDropdown',
          componentId: 'sc-1pjed90-0',
        }
      )(['@media (min-width:990px){display:none;}']);
      const OfferPageWrapper = external_styled_components_default.a.div.withConfig(
        {
          displayName: 'pagesstyle__OfferPageWrapper',
          componentId: 'sc-1pjed90-1',
        }
      )(
        [
          'width:100%;height:auto;min-height:100vh;display:flex;flex-direction:column;background-color:',
          ';position:relative;padding:100px 60px 60px;justify-content:space-between;@media (max-width:768px){padding:100px 30px 60px;}@media (max-width:1199px){padding:100px 30px 60px;}',
        ],
        Object(theme_get_['themeGet'])('colors.gray.200', '#f7f7f7')
      );
      const HeaderSection = external_styled_components_default.a.div.withConfig(
        {
          displayName: 'pagesstyle__HeaderSection',
          componentId: 'sc-1pjed90-2',
        }
      )(
        [
          'display:flex;flex-wrap:wrap;width:100%;min-height:400px;background-color:',
          ';',
        ],
        Object(theme_get_['themeGet'])('colors.gray.300', '#f4f4f4')
      );
      const MainContentArea = external_styled_components_default.a.main.withConfig(
        {
          displayName: 'pagesstyle__MainContentArea',
          componentId: 'sc-1pjed90-3',
        }
      )(
        [
          'width:100%;display:flex;flex-wrap:wrap;background-color:',
          ';padding-right:0;transition:padding-right 0.35s ease-in-out;',
        ],
        Object(theme_get_['themeGet'])('colors.gray.200', '#f7f7f7')
      );
      const SidebarSection = external_styled_components_default.a.div.withConfig(
        {
          displayName: 'pagesstyle__SidebarSection',
          componentId: 'sc-1pjed90-4',
        }
      )(
        [
          'background-color:',
          ';width:280px;@media (max-width:990px){display:none;}',
        ],
        Object(theme_get_['themeGet'])('colors.white', '#ffffff')
      );
      const ContentSection = external_styled_components_default.a.div.withConfig(
        {
          displayName: 'pagesstyle__ContentSection',
          componentId: 'sc-1pjed90-5',
        }
      )([
        'width:calc(100% - 280px);height:auto;min-height:100vh;padding:30px 30px 50px;@media (max-width:768px){padding:30px 7.5px 100px;}@media (max-width:1199px) and (min-width:991px){padding:15px 30px 50px;}@media (max-width:1367px) and (min-width:1200px){padding:15px 30px 50px;}@media (max-width:990px){width:100%;}@media (max-width:768px){padding-top:15px;min-height:auto;}.offer-slider{padding:0 0 30px 30px;}',
      ]);
      const OfferSection = external_styled_components_default.a.div.withConfig({
        displayName: 'pagesstyle__OfferSection',
        componentId: 'sc-1pjed90-6',
      })(
        [
          'width:100%;display:block;padding:60px;background-color:',
          ';position:relative;border-bottom:1px solid ',
          ';@media (max-width:1199px) and (min-width:991px){padding:20px 15px;.prevButton{left:0;}.nextButton{right:0;}}@media (max-width:990px){padding:15px;.prevButton{left:5px;}.nextButton{right:5px;}}',
        ],
        Object(theme_get_['themeGet'])('colors.white', '#ffffff'),
        Object(theme_get_['themeGet'])('colors.gray.500', '#f1f1f1')
      );
      const Heading = external_styled_components_default.a.h2.withConfig({
        displayName: 'pagesstyle__Heading',
        componentId: 'sc-1pjed90-7',
      })(
        [
          'font-size:',
          'px;font-weight:',
          ';color:',
          ';padding:0px 20px 20px;margin:50px 10px 20px;border-bottom:2px solid ',
          ';width:auto;display:inline-block;',
        ],
        Object(theme_get_['themeGet'])('fontSizes.xl', '24'),
        Object(theme_get_['themeGet'])('fontWeights.bold', '700'),
        Object(theme_get_['themeGet'])('colors.primary.regular', '#009e7f'),
        Object(theme_get_['themeGet'])('colors.primary.regular', '#009e7f')
      );
      const ProductsRow = external_styled_components_default.a.div.withConfig({
        displayName: 'pagesstyle__ProductsRow',
        componentId: 'sc-1pjed90-8',
      })(
        [
          'display:flex;flex-wrap:wrap;margin-top:30px;background-color:',
          ';@media (max-width:768px){margin-left:-7.5px;margin-right:-7.5px;margin-top:15px;}',
        ],
        Object(theme_get_['themeGet'])('colors.gray.200', '#f7f7f7')
      );
      const ProductsCol = external_styled_components_default.a.div.withConfig({
        displayName: 'pagesstyle__ProductsCol',
        componentId: 'sc-1pjed90-9',
      })([
        'flex:0 0 20%;max-width:20%;padding-left:15px;padding-right:15px;margin-bottom:30px;@media (max-width:1650px){flex:0 0 25%;max-width:25%;}@media (max-width:1300px){flex:0 0 33.3333333%;max-width:33.3333333%;}@media (max-width:1199px) and (min-width:900px){padding-left:10px;padding-right:10px;margin-bottom:20px;}@media (max-width:899px) and (min-width:769px){flex:0 0 50%;max-width:50%;}@media (max-width:768px){padding-left:7.5px;padding-right:7.5px;margin-bottom:15px;flex:0 0 50%;max-width:50%;}@media (max-width:490px){flex:0 0 100%;max-width:100%;}',
      ]);

      // EXTERNAL MODULE: ./src/assets/images/promotion/offer-1.png
      var offer_1 = __webpack_require__('7f0m');
      var offer_1_default = /*#__PURE__*/ __webpack_require__.n(offer_1);

      // EXTERNAL MODULE: ./src/assets/images/promotion/offer-3.png
      var offer_3 = __webpack_require__('hz1c');
      var offer_3_default = /*#__PURE__*/ __webpack_require__.n(offer_3);

      // EXTERNAL MODULE: ./src/assets/images/promotion/offer-2.png
      var offer_2 = __webpack_require__('eIFp');
      var offer_2_default = /*#__PURE__*/ __webpack_require__.n(offer_2);

      // CONCATENATED MODULE: ./src/site-settings/site-offers.ts

      const siteOffers = [
        {
          id: '1',
          imgSrc: offer_1_default.a,
          alt: 'Offer 1',
        },
        {
          id: '2',
          imgSrc: offer_2_default.a,
          alt: 'Offer 2',
        },
        {
          id: '3',
          imgSrc: offer_3_default.a,
          alt: 'Offer 3',
        },
      ];
      // EXTERNAL MODULE: ./src/assets/images/banner/grocery.png
      var grocery = __webpack_require__('R4SK');
      var grocery_default = /*#__PURE__*/ __webpack_require__.n(grocery);

      // EXTERNAL MODULE: ./src/assets/images/banner/makeup.png
      var makeup = __webpack_require__('AaBP');
      var makeup_default = /*#__PURE__*/ __webpack_require__.n(makeup);

      // EXTERNAL MODULE: ./src/assets/images/banner/bags.png
      var bags = __webpack_require__('hzYQ');
      var bags_default = /*#__PURE__*/ __webpack_require__.n(bags);

      // EXTERNAL MODULE: ./src/assets/images/banner/cloths.png
      var cloths = __webpack_require__('BMAw');
      var cloths_default = /*#__PURE__*/ __webpack_require__.n(cloths);

      // EXTERNAL MODULE: ./src/assets/images/banner/books.png
      var books = __webpack_require__('PQXp');
      var books_default = /*#__PURE__*/ __webpack_require__.n(books);

      // EXTERNAL MODULE: ./src/assets/images/banner/furniture.png
      var furniture = __webpack_require__('Ej6a');
      var furniture_default = /*#__PURE__*/ __webpack_require__.n(furniture);

      // EXTERNAL MODULE: ./src/assets/images/banner/medicine.png
      var medicine = __webpack_require__('tfq8');
      var medicine_default = /*#__PURE__*/ __webpack_require__.n(medicine);

      // CONCATENATED MODULE: ./src/site-settings/site-pages.ts

      const sitePages = {
        grocery: {
          page_title: 'Grocery - Mahdi Fashion',
          page_description: 'Grocery Details',
          banner_title_id: 'groceriesTitle',
          banner_description_id: 'groceriesSubTitle',
          banner_image_url: grocery_default.a,
        },
        makeup: {
          page_title: 'Makeup - Mahdi Fashion',
          page_description: 'Makeup Details',
          banner_title_id: 'makeupTitle',
          banner_description_id: 'makeupSubTitle',
          banner_image_url: makeup_default.a,
        },
        bags: {
          page_title: 'Bags - Mahdi Fashion',
          page_description: 'Bags Details',
          banner_title_id: 'bagsTitle',
          banner_description_id: 'bagsSubTitle',
          banner_image_url: bags_default.a,
        },
        clothing: {
          page_title: 'Clothing - Mahdi Fashion',
          page_description: 'Clothing Details',
          banner_title_id: 'womenClothsTitle',
          banner_description_id: 'womenClothsSubTitle',
          banner_image_url: cloths_default.a,
        },
        furniture: {
          page_title: 'Furniture - Mahdi Fashion',
          page_description: 'Furniture Details',
          banner_title_id: 'furnitureTitle',
          banner_description_id: 'furnitureSubTitle',
          banner_image_url: furniture_default.a,
        },
        book: {
          page_title: 'Book - Mahdi Fashion',
          page_description: 'Book Details',
          banner_title_id: 'booksTitle',
          banner_description_id: 'booksSubTitle',
          banner_image_url: books_default.a,
        },
        medicine: {
          page_title: 'Medicine - Mahdi Fashion',
          page_description: 'Medicine Details',
          banner_title_id: 'medicineTitle',
          banner_description_id: 'medicineSubTitle',
          banner_image_url: medicine_default.a,
        },
      };
      // EXTERNAL MODULE: ./src/components/seo.tsx
      var seo = __webpack_require__('H8eV');

      // CONCATENATED MODULE: ./src/utils/use-is-client.ts
      const isClient = !!(false && false);
      const useIsClient = () => isClient;
      // CONCATENATED MODULE: ./src/utils/use-ref-scroll.ts
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly)
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          keys.push.apply(keys, symbols);
        }
        return keys;
      }

      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source)
            );
          } else {
            ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key)
              );
            });
          }
        }
        return target;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      let ScrollDirections;

      (function (ScrollDirections) {
        ScrollDirections[(ScrollDirections['Horizontal'] = 0)] = 'Horizontal';
        ScrollDirections[(ScrollDirections['Vertical'] = 1)] = 'Vertical';
      })(ScrollDirections || (ScrollDirections = {}));

      function scrollToPercent(
        el,
        { container, percentOfElement, offsetPX, direction, percentOfContainer }
      ) {
        const rect = el.current.getClientRects()[0];
        const isVertical = direction === ScrollDirections.Vertical;
        const refSize = isVertical ? rect.height : rect.width;
        const elemScroll = isVertical ? rect.y : rect.x;
        const scrollSize =
          container === window
            ? isVertical
              ? container.innerHeight
              : container.innerWidth
            : isVertical
            ? container.scrollHeight
            : container.scrollWidth;
        let addOffset = (refSize * percentOfElement) / 100;

        if (offsetPX) {
          addOffset += offsetPX;
        }

        const containerScroll = isVertical
          ? container.scrollY
          : container.scrollX;
        const newScroll =
          containerScroll +
          elemScroll +
          ((scrollSize * percentOfContainer) / 100 + addOffset);
        const scrollObj = isVertical
          ? {
              top: newScroll,
            }
          : {
              left: newScroll,
            };
        window.scrollTo(
          _objectSpread(
            _objectSpread({}, scrollObj),
            {},
            {
              behavior: 'smooth',
            }
          )
        );
      }

      function useRefScroll({
        percentOfElement = 50,
        offsetPX = 0,
        onMount = false,
        container = isClient ? window : null,
        percentOfContainer = 50,
        direction = ScrollDirections.Vertical,
      }) {
        const elRef = Object(external_react_['useRef'])(null);
        const scroll = Object(external_react_['useCallback'])(() => {
          if (elRef.current) {
            scrollToPercent(elRef, {
              percentOfElement,
              offsetPX,
              container,
              percentOfContainer,
              direction,
            });
          }
        }, [elRef.current]);
        Object(external_react_['useEffect'])(() => {
          if (onMount) {
            scroll();
          }
        }, []);
        return {
          elRef,
          scroll,
        };
      } // function MyComponent() {
      //   // using the hook without arguments will scroll the element to the center of the
      //   // window's viewport
      //   // alias elRef to myDiv for easier usage if having multiple elements
      //   // in the same component
      //   const { elRef: myDiv, scroll } = useRefScroller();
      //   return (
      //     <div>
      //       <button onClick={scroll}>Scroll</button>
      //       <div ref={myDiv}>
      //         `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur, massa vitae consectetur egestas, justo magna
      //         facilisis arcu, non accumsan lacus ipsum sit amet nisl.`
      //       </div>
      //     </div>
      //   );
      // }
      // EXTERNAL MODULE: ./src/utils/apollo.js
      var apollo = __webpack_require__('bM43');

      // EXTERNAL MODULE: ./src/graphql/query/products.query.ts
      var products_query = __webpack_require__('33lg');

      // EXTERNAL MODULE: ./src/graphql/query/category.query.ts
      var category_query = __webpack_require__('OT+S');

      // EXTERNAL MODULE: ./src/graphql/query/type.query.ts
      var type_query = __webpack_require__('IGqs');

      // EXTERNAL MODULE: ./src/site-settings/site-navigation.ts
      var site_navigation = __webpack_require__('5l48');

      // EXTERNAL MODULE: ./src/components/error-message/error-message.tsx
      var error_message = __webpack_require__('quMH');

      // EXTERNAL MODULE: ./src/utils/images-path.ts
      var images_path = __webpack_require__('W1nP');

      // CONCATENATED MODULE: ./src/pages/[type].tsx
      var _type_jsx = external_react_default.a.createElement;

      // Static Data Import Here

      const Sidebar = dynamic_default()(
        () =>
          __webpack_require__
            .e(/* import() */ 17)
            .then(__webpack_require__.bind(null, '8XX/')),
        {
          loadableGenerated: {
            webpack: () => [/*require.resolve*/ '8XX/'],
            modules: ['layouts/sidebar/sidebar'],
          },
        }
      );
      const Products = dynamic_default()(
        () =>
          __webpack_require__
            .e(/* import() */ 26)
            .then(__webpack_require__.bind(null, 'SZ6D')),
        {
          loadableGenerated: {
            webpack: () => [/*require.resolve*/ 'SZ6D'],
            modules: ['components/product-grid/product-list/product-list'],
          },
        }
      );
      const CartPopUp = dynamic_default()(
        () =>
          __webpack_require__
            .e(/* import() */ 21)
            .then(__webpack_require__.bind(null, 'gZAk')),
        {
          ssr: false,
          loadableGenerated: {
            webpack: () => [/*require.resolve*/ 'gZAk'],
            modules: ['features/carts/cart-popup'],
          },
        }
      );

      const CategoryPage = ({ deviceType }) => {
        const { query } = Object(router_['useRouter'])();
        const { elRef: targetRef, scroll } = useRefScroll({
          percentOfElement: 0,
          percentOfContainer: 0,
          offsetPX: -110,
        });
        external_react_default.a.useEffect(() => {
          if (query.text || query.category) {
            scroll();
          }
        }, [query.text, query.category]);
        const PAGE_TYPE = query.type;
        const page = sitePages[PAGE_TYPE];
        const { data, loading, error } = Object(react_hooks_['useQuery'])(
          type_query['a' /* GET_TYPE */],
          {
            variables: {
              searchText: PAGE_TYPE,
            },
          }
        );

        if (loading) {
          return _type_jsx(error_message['default'], {
            message: 'Loading...',
          });
        }

        if (error) {
          return _type_jsx(error_message['default'], {
            message: error.message,
          });
        }

        const { home_title, home_subtitle, image } = data.types.items[0];
        return _type_jsx(
          external_react_default.a.Fragment,
          null,
          _type_jsx(seo['a' /* SEO */], {
            title: home_title,
            description: home_subtitle,
          }),
          _type_jsx(
            reuse_modal_['Modal'],
            null,
            _type_jsx(Banner, {
              intlTitleId: home_title,
              intlDescriptionId: home_subtitle,
              imageUrl: images_path['a' /* SHOP_IMAGE_HOST */] + image,
            }),
            _type_jsx(
              MobileCarouselDropdown,
              null,
              _type_jsx(store_nav, {
                items: site_navigation['e' /* CATEGORY_MENU_ITEMS */],
              }),
              _type_jsx(Sidebar, {
                type: PAGE_TYPE,
                deviceType: deviceType,
              })
            ),
            _type_jsx(
              OfferSection,
              null,
              _type_jsx(
                'div',
                {
                  style: {
                    margin: '0 -10px',
                  },
                },
                _type_jsx(CustomCarousel, {
                  deviceType: deviceType,
                  data: siteOffers,
                })
              )
            ),
            _type_jsx(
              MainContentArea,
              null,
              _type_jsx(
                SidebarSection,
                null,
                _type_jsx(Sidebar, {
                  type: PAGE_TYPE,
                  deviceType: deviceType,
                })
              ),
              _type_jsx(
                ContentSection,
                null,
                _type_jsx(
                  'div',
                  {
                    ref: targetRef,
                  },
                  _type_jsx(Products, {
                    type: PAGE_TYPE,
                    deviceType: deviceType,
                    fetchLimit: 20,
                  })
                )
              )
            ),
            _type_jsx(CartPopUp, {
              deviceType: deviceType,
            })
          )
        );
      };

      const getStaticProps = async ({ params }) => {
        const apolloClient = Object(apollo['a' /* initializeApollo */])();
        await apolloClient.query({
          query: products_query['a' /* GET_PRODUCTS */],
          variables: {
            type: params.type,
            offset: 0,
            limit: 20,
          },
        });
        await apolloClient.query({
          query: category_query['a' /* GET_CATEGORIES */],
          variables: {
            type: params.type,
          },
        });
        return {
          props: {
            initialApolloState: apolloClient.cache.extract(),
          },
          unstable_revalidate: 1,
        };
      };
      async function getStaticPaths() {
        const apolloClient = Object(apollo['a' /* initializeApollo */])();
        const res = await apolloClient.query({
          query: type_query['a' /* GET_TYPE */],
          variables: {
            searchText: '',
          },
        });
        const paths = res.data.types.items.map((item) => {
          return {
            params: {
              type: item.slug,
            },
          };
        });
        return {
          paths,
          fallback: false,
        };
      }
      /* harmony default export */ var _type_ = (__webpack_exports__[
        'default'
      ] = CategoryPage);

      /***/
    },

    /***/ sDBz: /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'b',
        function () {
          return initialState;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'a',
        function () {
          return appReducer;
        }
      );
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly)
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          keys.push.apply(keys, symbols);
        }
        return keys;
      }

      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source)
            );
          } else {
            ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key)
              );
            });
          }
        }
        return target;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      const initialState = {
        searchTerm: '',
        isSticky: false,
        isSidebarSticky: true,
        isDrawerOpen: false,
      };
      function appReducer(state, action) {
        switch (action.type) {
          case 'SET_SEARCH_TERM':
            return _objectSpread(
              _objectSpread({}, state),
              {},
              {
                searchTerm: action.payload,
              }
            );

          case 'SET_STICKY':
            return _objectSpread(
              _objectSpread({}, state),
              {},
              {
                isSticky: true,
              }
            );

          case 'REMOVE_STICKY':
            return _objectSpread(
              _objectSpread({}, state),
              {},
              {
                isSticky: false,
              }
            );

          case 'SET_SIDEBAR_STICKY':
            return _objectSpread(
              _objectSpread({}, state),
              {},
              {
                isSidebarSticky: true,
              }
            );

          case 'REMOVE_SIDEBAR_STICKY':
            return _objectSpread(
              _objectSpread({}, state),
              {},
              {
                isSidebarSticky: false,
              }
            );

          case 'TOGGLE_DRAWER':
            return _objectSpread(
              _objectSpread({}, state),
              {},
              {
                isDrawerOpen: !state.isDrawerOpen,
              }
            );

          default: {
            throw new Error(`Unsupported action type at App Reducer`);
          }
        }
      }

      /***/
    },

    /***/ tfq8: /***/ function (module, exports) {
      module.exports =
        '/_next/static/images/medicine-6e8ebb087020b94d3aeae59c5c51744f.png';

      /***/
    },

    /***/ txk1: /***/ function (module, exports) {
      module.exports = require('graphql-tag');

      /***/
    },

    /***/ uChv: /***/ function (module, exports, __webpack_require__) {
      'use strict';

      exports.__esModule = true;
      exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
      // to reduce bytes

      function escapeRegex(str) {
        return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
      }

      function getRouteRegex(normalizedRoute) {
        // Escape all characters that could be considered RegEx
        const escapedRoute = escapeRegex(
          normalizedRoute.replace(/\/$/, '') || '/'
        );
        const groups = {};
        let groupIndex = 1;
        const parameterizedRoute = escapedRoute.replace(
          /\/\\\[([^/]+?)\\\](?=\/|$)/g,
          (_, $1) => {
            const isOptional = /^\\\[.*\\\]$/.test($1);

            if (isOptional) {
              $1 = $1.slice(2, -2);
            }

            const isCatchAll = /^(\\\.){3}/.test($1);

            if (isCatchAll) {
              $1 = $1.slice(6);
            }

            groups[
              $1 // Un-escape key
                .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
            ] = {
              pos: groupIndex++,
              repeat: isCatchAll,
            };
            return isCatchAll
              ? isOptional
                ? '(?:/(.+?))?'
                : '/(.+?)'
              : '/([^/]+?)';
          }
        );
        let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
        // while generating routes-manifest

        if (true) {
          namedParameterizedRoute = escapedRoute.replace(
            /\/\\\[([^/]+?)\\\](?=\/|$)/g,
            (_, $1) => {
              const isCatchAll = /^(\\\.){3}/.test($1);
              const key = $1 // Un-escape key
                .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')
                .replace(/^\.{3}/, '');
              return isCatchAll
                ? `/(?<${escapeRegex(key)}>.+?)`
                : `/(?<${escapeRegex(key)}>[^/]+?)`;
            }
          );
        }

        return {
          re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
          groups,
          namedRegex: namedParameterizedRoute
            ? `^${namedParameterizedRoute}(?:/)?$`
            : undefined,
        };
      }

      /***/
    },

    /***/ uiyz: /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return /* binding */ LanguageProvider;
      });
      __webpack_require__.d(__webpack_exports__, 'b', function () {
        return /* binding */ useLocale;
      });

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__('cDcd');
      var external_react_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_
      );

      // EXTERNAL MODULE: external "react-intl"
      var external_react_intl_ = __webpack_require__('k004');

      // EXTERNAL MODULE: ./src/assets/styles/global.style.tsx
      var global_style = __webpack_require__('jbEd');

      // EXTERNAL MODULE: external "js-cookie"
      var external_js_cookie_ = __webpack_require__('vmXh');
      var external_js_cookie_default = /*#__PURE__*/ __webpack_require__.n(
        external_js_cookie_
      );

      // CONCATENATED MODULE: ./src/contexts/language/language.config.ts
      const defaultLocale = 'en';
      const locales = ['en', 'ar', 'es', 'de', 'zh', 'he'];
      const rtlLocales = ['ar', 'he']; // need to customize later

      const languageNames = {
        en: 'English',
        fr: 'français',
        pl: 'polski',
      };
      // CONCATENATED MODULE: ./src/contexts/language/language.utils.ts

      function isLocale(tested) {
        return locales.some((locale) => locale === tested);
      }
      function isRTL(tested) {
        return rtlLocales.some((locale) => locale === tested);
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
      var external_styled_components_ = __webpack_require__('Dtiu');

      // EXTERNAL MODULE: external "stylis-plugin-rtl"
      var external_stylis_plugin_rtl_ = __webpack_require__('xoY3');
      var external_stylis_plugin_rtl_default = /*#__PURE__*/ __webpack_require__.n(
        external_stylis_plugin_rtl_
      );

      // CONCATENATED MODULE: ./src/contexts/language/language.provider.tsx
      var __jsx = external_react_default.a.createElement;

      const LanguageContext = external_react_default.a.createContext({});
      const LanguageProvider = ({ children, messages }) => {
        const [locale, setLocale] = external_react_default.a.useState('en');

        const changeLanguage = (newLocale) => {
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
        return __jsx(
          LanguageContext.Provider,
          {
            value: {
              locale,
              changeLanguage,
              isRtl,
            },
          },
          __jsx(
            external_react_intl_['IntlProvider'],
            {
              locale: locale,
              messages: messages[locale],
            },
            __jsx(
              global_style['b' /* InjectRTL */],
              {
                lang: locale,
                dir: isRtl ? 'rtl' : 'ltr',
              },
              __jsx(
                external_styled_components_['StyleSheetManager'],
                {
                  stylisPlugins: isRtl
                    ? [external_stylis_plugin_rtl_default.a]
                    : [],
                },
                children
              )
            )
          )
        );
      };
      const useLocale = () =>
        external_react_default.a.useContext(LanguageContext);

      /***/
    },

    /***/ vmXh: /***/ function (module, exports) {
      module.exports = require('js-cookie');

      /***/
    },

    /***/ wiMN: /***/ function (module, exports) {
      module.exports = require('localforage');

      /***/
    },

    /***/ xZKy: /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, 'c', function () {
        return /* binding */ useAppState;
      });
      __webpack_require__.d(__webpack_exports__, 'b', function () {
        return /* binding */ useAppDispatch;
      });
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return /* binding */ AppProvider;
      });

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__('cDcd');
      var external_react_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_
      );

      // CONCATENATED MODULE: ./src/contexts/create-context.tsx
      var __jsx = external_react_default.a.createElement;

      function useCreateContext(reducer, initialState) {
        const defaultDispatch = () => initialState;

        const stateCtx = Object(external_react_['createContext'])(initialState);
        const dispatchCtx = Object(external_react_['createContext'])(
          defaultDispatch
        );

        function useStateCtx(property) {
          const state = Object(external_react_['useContext'])(stateCtx);
          return state[property]; // only one depth selector for comparison
        }

        function useDispatchCtx() {
          return Object(external_react_['useContext'])(dispatchCtx);
        }

        function Provider(props) {
          const [state, dispatch] = external_react_default.a.useReducer(
            reducer,
            initialState
          );
          return __jsx(
            dispatchCtx.Provider,
            {
              value: dispatch,
            },
            __jsx(
              stateCtx.Provider,
              {
                value: state,
              },
              props.children
            )
          );
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
      // EXTERNAL MODULE: ./src/contexts/app/app.reducer.ts
      var app_reducer = __webpack_require__('sDBz');

      // CONCATENATED MODULE: ./src/contexts/app/app.provider.ts

      const [
        app_provider_state,
        app_provider_dispatch,
        provider,
      ] = useCreateContext(
        app_reducer['a' /* appReducer */],
        app_reducer['b' /* initialState */]
      );
      const useAppState = app_provider_state;
      const useAppDispatch = app_provider_dispatch;
      const AppProvider = provider;

      /***/
    },

    /***/ xnum: /***/ function (module, exports) {
      module.exports = require('next/head');

      /***/
    },

    /***/ xoY3: /***/ function (module, exports) {
      module.exports = require('stylis-plugin-rtl');

      /***/
    },

    /******/
  }
);
