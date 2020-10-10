module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/JeY":
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

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

/***/ "2nMb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloseIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const CloseIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10.003",
    height: "10",
    viewBox: "0 0 10.003 10"
  }, __jsx("path", {
    "data-name": "_ionicons_svg_ios-close (5)",
    d: "M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z",
    transform: "translate(-160.5 -160.55)",
    fill: "currentColor"
  }));
};

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6A1X");


/***/ }),

/***/ "4HXp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ProfileProvider; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__("kNaX");

// CONCATENATED MODULE: ./src/features/checkouts/data.ts
/* harmony default export */ var data = ([{
  id: '1',
  type: 'primary',
  title: 'express-delivery',
  time_slot: '90 min express delivery'
}, {
  id: '2',
  type: 'secondary',
  title: '8am-11am',
  time_slot: '8.00 AM - 11.00 AM'
}, {
  id: '3',
  type: 'secondary',
  title: '11am-2pm',
  time_slot: '11.00 AM - 2.00 PM'
}, {
  id: '4',
  type: 'secondary',
  title: '2pm-5pm',
  time_slot: '2.00 PM - 5.00 PM'
}, {
  id: '5',
  type: 'secondary',
  title: '5pm-8pm',
  time_slot: '5.00 PM - 8.00 PM'
}, {
  id: '6',
  type: 'secondary',
  title: 'next day',
  time_slot: 'Next Day'
}]);
// EXTERNAL MODULE: ./src/contexts/profile/profile.context.tsx
var profile_context = __webpack_require__("p2kv");

// CONCATENATED MODULE: ./src/contexts/profile/profile.provider.tsx
var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function reducer(state, action) {
  switch (action.type) {
    case 'HANDLE_ON_INPUT_CHANGE':
      return _objectSpread(_objectSpread({}, state), {}, {
        [action.payload.field]: action.payload.value
      });

    case 'ADD_OR_UPDATE_CONTACT':
      if (action.payload.id) {
        return _objectSpread(_objectSpread({}, state), {}, {
          contact: state.contact.map(item => item.id === action.payload.id ? _objectSpread(_objectSpread({}, item), action.payload) : item)
        });
      }

      const newContact = _objectSpread(_objectSpread({}, action.payload), {}, {
        id: Object(external_uuid_["v4"])(),
        type: state.contact.length === '0' ? 'primary' : 'secondary'
      });

      return _objectSpread(_objectSpread({}, state), {}, {
        contact: [...state.contact, newContact]
      });

    case 'DELETE_CONTACT':
      return _objectSpread(_objectSpread({}, state), {}, {
        contact: state.contact.filter(item => item.id !== action.payload)
      });

    case 'ADD_OR_UPDATE_ADDRESS':
      if (action.payload.id) {
        return _objectSpread(_objectSpread({}, state), {}, {
          address: state.address.map(item => item.id === action.payload.id ? _objectSpread(_objectSpread({}, item), action.payload) : item)
        });
      }

      const newAdress = _objectSpread(_objectSpread({}, action.payload), {}, {
        id: Object(external_uuid_["v4"])(),
        type: state.address.length === '0' ? 'primary' : 'secondary'
      });

      return _objectSpread(_objectSpread({}, state), {}, {
        address: [...state.address, newAdress]
      });

    case 'DELETE_ADDRESS':
      return _objectSpread(_objectSpread({}, state), {}, {
        address: state.address.filter(item => item.id !== action.payload)
      });

    case 'ADD_CARD':
      const newCard = {
        id: action.payload.id,
        type: state.card.length === '0' ? 'primary' : 'secondary',
        cardType: action.payload.brand.toLowerCase(),
        name: state.name,
        lastFourDigit: action.payload.last4
      };
      return _objectSpread(_objectSpread({}, state), {}, {
        card: [newCard, ...state.card]
      });

    case 'DELETE_CARD':
      return _objectSpread(_objectSpread({}, state), {}, {
        card: state.card.filter(item => item.id !== action.payload)
      });

    case 'SET_PRIMARY_CONTACT':
      return _objectSpread(_objectSpread({}, state), {}, {
        contact: state.contact.map(item => item.id === action.payload ? _objectSpread(_objectSpread({}, item), {}, {
          type: 'primary'
        }) : _objectSpread(_objectSpread({}, item), {}, {
          type: 'secondary'
        }))
      });

    case 'SET_PRIMARY_ADDRESS':
      return _objectSpread(_objectSpread({}, state), {}, {
        address: state.address.map(item => item.id === action.payload ? _objectSpread(_objectSpread({}, item), {}, {
          type: 'primary'
        }) : _objectSpread(_objectSpread({}, item), {}, {
          type: 'secondary'
        }))
      });

    case 'SET_PRIMARY_SCHEDULE':
      return _objectSpread(_objectSpread({}, state), {}, {
        schedules: state.schedules.map(item => item.id === action.payload ? _objectSpread(_objectSpread({}, item), {}, {
          type: 'primary'
        }) : _objectSpread(_objectSpread({}, item), {}, {
          type: 'secondary'
        }))
      });

    case 'SET_PRIMARY_CARD':
      return _objectSpread(_objectSpread({}, state), {}, {
        card: state.card.map(item => item.id === action.payload ? _objectSpread(_objectSpread({}, item), {}, {
          type: 'primary'
        }) : _objectSpread(_objectSpread({}, item), {}, {
          type: 'secondary'
        }))
      });

    default:
      return state;
  }
}

const ProfileProvider = ({
  children,
  initData
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(external_react_["useReducer"])(reducer, _objectSpread(_objectSpread({}, initData), {}, {
    schedules: data
  })); // console.log(state, 'profile provider state');

  return __jsx(profile_context["a" /* ProfileContext */].Provider, {
    value: {
      state,
      dispatch
    }
  }, children);
};

/***/ }),

/***/ "4JT2":
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "4Jh2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ADD_CARD */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DELETE_CARD; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const ADD_CARD = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation($addressInput: String!) {
    updateAddress(addressInput: $addressInput) {
      id
      name
      address {
        id
        name
        info
      }
    }
  }
`;
const DELETE_CARD = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation($cardId: String!) {
    deletePaymentCard(cardId: $cardId) {
      id
      name
      address {
        id
        name
        info
      }
    }
  }
`;

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6A1X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: ./src/components/seo.tsx
var seo = __webpack_require__("H8eV");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: /home/arafat/codes/pickbazar/client/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./src/components/button/button.tsx
var button_button = __webpack_require__("B68Z");

// EXTERNAL MODULE: ./src/components/radio-card/radio-card.tsx + 1 modules
var radio_card = __webpack_require__("B3Fo");

// EXTERNAL MODULE: ./src/components/radio-group/radio-group.tsx
var radio_group = __webpack_require__("YBd4");

// EXTERNAL MODULE: ./src/components/payment-group/payment-group.tsx + 4 modules
var payment_group = __webpack_require__("uPwL");

// EXTERNAL MODULE: ./src/components/address-card/address-card.tsx + 2 modules
var address_card = __webpack_require__("6Bdc");

// EXTERNAL MODULE: ./src/components/contact-card/contact-card.tsx + 1 modules
var contact_card = __webpack_require__("6zwy");

// EXTERNAL MODULE: ./src/features/payment/stripe-form.tsx + 2 modules
var stripe_form = __webpack_require__("V4O8");

// EXTERNAL MODULE: ./src/graphql/mutation/address.ts
var mutation_address = __webpack_require__("bQa+");

// EXTERNAL MODULE: ./src/graphql/mutation/card.ts
var mutation_card = __webpack_require__("4Jh2");

// EXTERNAL MODULE: ./src/graphql/mutation/contact.ts
var mutation_contact = __webpack_require__("fDRB");

// EXTERNAL MODULE: ./src/utils/constant.ts
var constant = __webpack_require__("f/wd");

// EXTERNAL MODULE: external "react-custom-scrollbars"
var external_react_custom_scrollbars_ = __webpack_require__("qC9r");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/features/checkouts/checkout-two/checkout-two.style.tsx


const CheckoutWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__CheckoutWrapper",
  componentId: "sc-9tdt16-0"
})(["width:100%;display:flex;padding:130px 60px 60px;position:relative;@media (max-width:1100px){padding-left:0;padding-right:0;}@media (max-width:990px){padding-top:60px;}"]);
const CheckoutContainer = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__CheckoutContainer",
  componentId: "sc-9tdt16-1"
})(["width:100%;display:flex;counter-reset:section-counter;@media (min-width:990px){width:970px;margin-left:auto;margin-right:auto;}@media (max-width:767px){flex-direction:column;}"]);
const CheckoutInformation = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__CheckoutInformation",
  componentId: "sc-9tdt16-2"
})(["position:relative;width:100%;overflow:hidden;display:flex;flex-direction:column;margin-right:20px;padding:20px;@media (max-width:990px){margin-right:10px;}@media (max-width:767px){order:1;margin-right:0;}"]);
const Heading = external_styled_components_default.a.h3.withConfig({
  displayName: "checkout-twostyle__Heading",
  componentId: "sc-9tdt16-3"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.4;margin-bottom:35px;position:relative;width:calc(100% - 100px);display:flex;align-items:center;@media (max-width:600px){font-size:", "px;}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.lg', '21'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('fontSizes.md', '19'));
const InformationBox = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__InformationBox",
  componentId: "sc-9tdt16-4"
})(["background-color:", ";padding:30px;padding-bottom:20px;position:relative;margin-bottom:20px;box-shadow:0 2px 16px 0 rgba(0,0,0,0.08);@media (max-width:767px){padding:20px;}&.paymentBox{.reusecore__button{@media (max-width:600px){padding-right:0;}}}", "{:before{counter-increment:section-counter;content:counter(section-counter);font-family:", ";font-size:calc(", "px + 1px);font-weight:", ";color:", ";width:35px;height:35px;border-radius:50%;display:flex;align-items:center;justify-content:center;background-color:", ";margin-right:15px;@media (max-width:600px){width:30px;height:30px;font-size:calc(", "px - 1px);}}}"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Heading, Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('fontSizes.base', '15'));
const TotalProduct = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__TotalProduct",
  componentId: "sc-9tdt16-5"
})(["flex-grow:1;text-align:right;padding-right:60px;"]);
const TotalPrice = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__TotalPrice",
  componentId: "sc-9tdt16-6"
})(["flex-grow:1;text-align:left;padding-left:60px;"]);
const DeliverySchedule = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__DeliverySchedule",
  componentId: "sc-9tdt16-7"
})([".radioGroup{justify-content:space-between;> label{margin-right:0;flex:calc(33.3333333333% - 10px);max-width:calc(33.3333333333% - 10px);padding:11px 15px;@media (max-width:900px) and (min-width:768px){flex:calc(50% - 10px);max-width:calc(50% - 10px);}@media (max-width:480px){flex:100%;max-width:100%;margin-right:0;}}}"]);
const ButtonGroup = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__ButtonGroup",
  componentId: "sc-9tdt16-8"
})(["display:flex;flex-direction:column;.radioGroup{display:flex;flex-wrap:wrap;justify-content:flex-start;label{margin-top:0;width:calc(33.333333333% - 10px);max-width:calc(33.333333333% - 10px);margin-bottom:15px;&:nth-child(3n){margin-right:0;}@media (max-width:900px) and (min-width:768px){flex:calc(50% - 10px);max-width:calc(50% - 10px);&:nth-child(3n){margin-right:15px;}&:nth-child(2n){margin-right:0;}}@media (max-width:480px){flex:100%;max-width:100%;margin-right:0;&:nth-child(3n){margin-right:0;}&:nth-child(2n){margin-right:0;}}}.addButton{width:auto;height:auto;display:flex;align-items:center;background-color:transparent;border:0;outline:0;border-radius:0;padding:0;font-family:", ";font-size:", "px;font-weight:", ";color:", ";position:absolute;top:40px;right:30px;@media (max-width:600px){top:27px;right:20px;}}}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const CheckoutSubmit = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__CheckoutSubmit",
  componentId: "sc-9tdt16-9"
})(["margin-top:25px;.reusecore__button{width:100%;}"]);
const InfoText = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__InfoText",
  componentId: "sc-9tdt16-10"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-bottom:15px;margin-top:15px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const CouponBoxWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__CouponBoxWrapper",
  componentId: "sc-9tdt16-11"
})(["position:relative;display:flex;flex-direction:column;align-items:flex-start;width:100%;margin-top:50px;.couponCodeText{margin-right:auto;}"]);
const CouponCode = external_styled_components_default.a.p.withConfig({
  displayName: "checkout-twostyle__CouponCode",
  componentId: "sc-9tdt16-12"
})(["font-family:", ";font-size:calc(", "px - 1px);font-weight:", ";color:", ";width:100%;display:flex;justify-content:flex-start;align-items:baseline;span{font-weight:", ";color:", ";margin-left:10px;}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const RemoveCoupon = external_styled_components_default.a.button.withConfig({
  displayName: "checkout-twostyle__RemoveCoupon",
  componentId: "sc-9tdt16-13"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";width:auto;height:auto;display:inline-block;border:0;outline:0;box-shadow:none;background-color:transparent;padding:0;cursor:pointer;margin-left:5px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.xs', '12'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.secondary.regular', '#ff5b60'));
const CouponInputBox = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__CouponInputBox",
  componentId: "sc-9tdt16-14"
})(["width:100%;display:flex;align-items:center;@media (max-width:600px){.reusecore__button{padding-right:30px !important;flex-shrink:0;}}"]);
const HaveCoupon = external_styled_components_default.a.button.withConfig({
  displayName: "checkout-twostyle__HaveCoupon",
  componentId: "sc-9tdt16-15"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";width:auto;height:auto;display:inline-block;border:0;outline:0;box-shadow:none;background-color:transparent;padding:0;cursor:pointer;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const ErrorMsg = external_styled_components_default()('span').withConfig({
  displayName: "checkout-twostyle__ErrorMsg",
  componentId: "sc-9tdt16-16"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";padding-top:10px;display:flex;margin-left:20px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.xs', '12'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.secondary.hover', '#FF282F'));
const TermConditionText = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__TermConditionText",
  componentId: "sc-9tdt16-17"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.5;margin-top:30px;display:block;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.smm', '13'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const TermConditionLink = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__TermConditionLink",
  componentId: "sc-9tdt16-18"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-left:5px;cursor:pointer;line-height:1.5;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.smm', '13'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.secondary.regular', '#ff5b60'));
const CartWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__CartWrapper",
  componentId: "sc-9tdt16-19"
})(["width:270px;flex-shrink:0;padding-top:20px;@media (min-width:768px) and (max-width:1200px){width:260px;}@media (max-width:767px){order:0;width:100%;padding-left:15px;padding-right:15px;padding-top:40px;padding-bottom:30px;position:relative !important;}"]);
const OrderInfo = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__OrderInfo",
  componentId: "sc-9tdt16-20"
})(["width:100%;display:flex;flex-direction:column;@media (min-width:768px) and (max-width:990px){padding-right:15px;}"]);
const Title = external_styled_components_default.a.h3.withConfig({
  displayName: "checkout-twostyle__Title",
  componentId: "sc-9tdt16-21"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";text-align:center;margin-bottom:40px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const ItemsWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__ItemsWrapper",
  componentId: "sc-9tdt16-22"
})(["display:flex;flex-direction:column;padding-left:15px;"]);
const CalculationWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__CalculationWrapper",
  componentId: "sc-9tdt16-23"
})(["border-top:1px solid ", ";padding:20px 15px 0;margin-top:20px;"], Object(theme_get_["themeGet"])('colors.gray.700', '#e6e6e6'));
const Items = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__Items",
  componentId: "sc-9tdt16-24"
})(["display:flex;width:100%;align-items:flex-start;justify-content:flex-start;margin-bottom:25px;&:last-child{margin-bottom:0;}"]);
const Quantity = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__Quantity",
  componentId: "sc-9tdt16-25"
})(["font-family:", ";font-size:calc(", "px - 1px);font-weight:", ";color:", ";"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const Multiplier = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__Multiplier",
  componentId: "sc-9tdt16-26"
})(["font-family:", ";font-size:calc(", "px - 1px);font-weight:", ";color:", ";margin:0 12px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const ItemInfo = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__ItemInfo",
  componentId: "sc-9tdt16-27"
})(["font-family:", ";font-size:calc(", "px - 1px);font-weight:", ";color:", ";margin-right:15px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const Price = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__Price",
  componentId: "sc-9tdt16-28"
})(["font-family:", ";font-size:calc(", "px - 1px);font-weight:", ";color:", ";margin-left:auto;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const TextWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__TextWrapper",
  componentId: "sc-9tdt16-29"
})(["display:flex;width:100%;justify-content:space-between;margin-bottom:10px;"]);
const Text = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__Text",
  componentId: "sc-9tdt16-30"
})(["font-family:", ";font-size:calc(", "px - 1px);font-weight:", ";color:", ";"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const Bold = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__Bold",
  componentId: "sc-9tdt16-31"
})(["font-family:", ";font-size:calc(", "px - 1px);font-weight:", ";color:", ";"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const Small = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__Small",
  componentId: "sc-9tdt16-32"
})(["font-family:", ";font-size:11px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'));
const NoProductMsg = external_styled_components_default.a.h3.withConfig({
  displayName: "checkout-twostyle__NoProductMsg",
  componentId: "sc-9tdt16-33"
})(["font-family:", ";font-size:calc(", "px - 1px);font-weight:", ";color:", ";line-height:1.2;position:relative;width:100%;display:flex;justify-content:center;margin-bottom:10px;align-items:center;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const NoProductImg = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__NoProductImg",
  componentId: "sc-9tdt16-34"
})(["display:flex;align-items:center;justify-content:center;margin-bottom:20px;svg{width:140px;height:auto;}"]);
const IconWrapper = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__IconWrapper",
  componentId: "sc-9tdt16-35"
})(["margin-right:6px;"]);
/* harmony default export */ var checkout_two_style = (CheckoutWrapper);
// EXTERNAL MODULE: ./src/components/coupon-box/coupon-box.tsx + 1 modules
var coupon_box = __webpack_require__("rWEH");

// EXTERNAL MODULE: ./src/assets/icons/PlusMinus.tsx
var PlusMinus = __webpack_require__("OeMJ");

// EXTERNAL MODULE: ./src/assets/icons/NoCartBag.tsx
var NoCartBag = __webpack_require__("MXV/");

// EXTERNAL MODULE: external "react-stickynode"
var external_react_stickynode_ = __webpack_require__("isz7");
var external_react_stickynode_default = /*#__PURE__*/__webpack_require__.n(external_react_stickynode_);

// EXTERNAL MODULE: ./src/contexts/profile/profile.context.tsx
var profile_context = __webpack_require__("p2kv");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./src/contexts/cart/use-cart.tsx + 2 modules
var use_cart = __webpack_require__("tFEG");

// EXTERNAL MODULE: ./src/graphql/mutation/coupon.ts
var mutation_coupon = __webpack_require__("nfQO");

// EXTERNAL MODULE: ./src/contexts/language/language.provider.tsx + 2 modules
var language_provider = __webpack_require__("uiyz");

// CONCATENATED MODULE: ./src/utils/useWindowSize.ts

const useWindowSize = () => {
  const isClient =  false && false;

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const {
    0: windowSize,
    1: setWindowSize
  } = Object(external_react_["useState"])(getSize);
  Object(external_react_["useEffect"])(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};
// CONCATENATED MODULE: ./src/features/checkouts/checkout-two/checkout-two.tsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




























 // The type of props Checkout Form receives

const OrderItem = ({
  product
}) => {
  const {
    id,
    quantity,
    title,
    name,
    unit,
    price,
    salePrice
  } = product;
  const displayPrice = salePrice ? salePrice : price;
  return __jsx(Items, {
    key: id
  }, __jsx(Quantity, null, quantity), __jsx(Multiplier, null, "x"), __jsx(ItemInfo, null, name ? name : title, " ", unit ? `| ${unit}` : ''), __jsx(Price, null, constant["a" /* CURRENCY */], (displayPrice * quantity).toFixed(2)));
};

const CheckoutWithSidebar = ({
  token,
  deviceType
}) => {
  const {
    0: hasCoupon,
    1: setHasCoupon
  } = Object(external_react_["useState"])(false);
  const {
    0: couponCode,
    1: setCouponCode
  } = Object(external_react_["useState"])('');
  const {
    0: couponError,
    1: setError
  } = Object(external_react_["useState"])('');
  const {
    state,
    dispatch
  } = Object(external_react_["useContext"])(profile_context["a" /* ProfileContext */]);
  const {
    isRtl
  } = Object(language_provider["b" /* useLocale */])();
  const {
    items,
    removeCoupon,
    coupon,
    applyCoupon,
    clearCart,
    cartItemsCount,
    calculatePrice,
    calculateDiscount,
    calculateSubTotalPrice,
    isRestaurant,
    toggleRestaurant
  } = Object(use_cart["b" /* useCart */])();
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: isValid,
    1: setIsValid
  } = Object(external_react_["useState"])(false);
  const {
    address,
    contact,
    card,
    schedules
  } = state;
  const [deleteContactMutation] = Object(react_hooks_["useMutation"])(mutation_contact["a" /* DELETE_CONTACT */]);
  const [deleteAddressMutation] = Object(react_hooks_["useMutation"])(mutation_address["a" /* DELETE_ADDRESS */]);
  const [deletePaymentCardMutation] = Object(react_hooks_["useMutation"])(mutation_card["a" /* DELETE_CARD */]);
  const [appliedCoupon] = Object(react_hooks_["useMutation"])(mutation_coupon["a" /* APPLY_COUPON */]);
  const size = useWindowSize();

  const handleSubmit = async () => {
    setLoading(true);

    if (isValid) {
      clearCart();
      router_default.a.push('/order-received');
    }

    setLoading(false);
  };

  Object(external_react_["useEffect"])(() => {
    if (calculatePrice() > 0 && cartItemsCount > 0 && address.length && contact.length && card.length && schedules.length) {
      setIsValid(true);
    }
  }, [state]);
  Object(external_react_["useEffect"])(() => {
    return () => {
      if (isRestaurant) {
        toggleRestaurant();
        clearCart();
      }
    };
  }, []); // Add or edit modal

  const handleModal = (modalComponent, modalProps = {}, className = 'add-address-modal') => {
    Object(reuse_modal_["openModal"])({
      show: true,
      config: {
        width: 360,
        height: 'auto',
        enableResizing: false,
        disableDragging: true,
        className: className
      },
      closeOnClickOutside: true,
      component: modalComponent,
      componentProps: {
        item: modalProps
      }
    });
  };

  const handleEditDelete = async (item, type, name) => {
    if (type === 'edit') {
      const modalComponent = name === 'address' ? address_card["a" /* default */] : contact_card["a" /* default */];
      handleModal(modalComponent, item);
    } else {
      switch (name) {
        case 'payment':
          dispatch({
            type: 'DELETE_CARD',
            payload: item.id
          });
          return await deletePaymentCardMutation({
            variables: {
              cardId: JSON.stringify(item.id)
            }
          });

        case 'contact':
          dispatch({
            type: 'DELETE_CONTACT',
            payload: item.id
          });
          return await deleteContactMutation({
            variables: {
              contactId: JSON.stringify(item.id)
            }
          });

        case 'address':
          dispatch({
            type: 'DELETE_ADDRESS',
            payload: item.id
          });
          return await deleteAddressMutation({
            variables: {
              addressId: JSON.stringify(item.id)
            }
          });

        default:
          return false;
      }
    }
  };

  const handleApplyCoupon = async () => {
    const {
      data
    } = await appliedCoupon({
      variables: {
        code: couponCode
      }
    });

    if (data.applyCoupon && data.applyCoupon.discountInPercent) {
      applyCoupon(data.applyCoupon);
      setCouponCode('');
    } else {
      setError('Invalid Coupon');
    }
  };

  const handleOnUpdate = e => {
    setCouponCode(e.currentTarget.value);
  };

  return __jsx("form", null, __jsx(checkout_two_style, null, __jsx(CheckoutContainer, null, __jsx(CheckoutInformation, null, __jsx(InformationBox, null, __jsx(Heading, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "checkoutDeliveryAddress",
    defaultMessage: "Delivery Address"
  })), __jsx(ButtonGroup, null, __jsx(radio_group["a" /* default */], {
    items: address,
    component: item => __jsx(radio_card["a" /* default */], {
      id: item.id,
      key: item.id,
      title: item.name,
      content: item.info,
      name: "address",
      checked: item.type === 'primary',
      onChange: () => dispatch({
        type: 'SET_PRIMARY_ADDRESS',
        payload: item.id.toString()
      }),
      onEdit: () => handleEditDelete(item, 'edit', 'address'),
      onDelete: () => handleEditDelete(item, 'delete', 'address')
    }),
    secondaryComponent: __jsx(button_button["a" /* Button */], {
      className: "addButton",
      variant: "text",
      type: "button",
      onClick: () => handleModal(address_card["a" /* default */], 'add-address-modal')
    }, __jsx(IconWrapper, null, __jsx(PlusMinus["b" /* Plus */], {
      width: "10px"
    })), __jsx(external_react_intl_["FormattedMessage"], {
      id: "addNew",
      defaultMessage: "Add New"
    }))
  }))), __jsx(InformationBox, null, __jsx(DeliverySchedule, null, __jsx(Heading, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "deliverySchedule",
    defaultMessage: "Select Your Delivery Schedule"
  })), __jsx(radio_group["a" /* default */], {
    items: schedules,
    component: item => __jsx(radio_card["a" /* default */], {
      id: item.id,
      key: item.id,
      title: item.title,
      content: item.time_slot,
      name: "schedule",
      checked: item.type === 'primary',
      withActionButtons: false,
      onChange: () => dispatch({
        type: 'SET_PRIMARY_SCHEDULE',
        payload: item.id.toString()
      })
    })
  }))), __jsx(InformationBox, null, __jsx(Heading, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "contactNumberText",
    defaultMessage: "Select Your Contact Number"
  })), __jsx(ButtonGroup, null, __jsx(radio_group["a" /* default */], {
    items: contact,
    component: item => __jsx(radio_card["a" /* default */], {
      id: item.id,
      key: item.id,
      title: item.type,
      content: item.number,
      checked: item.type === 'primary',
      onChange: () => dispatch({
        type: 'SET_PRIMARY_CONTACT',
        payload: item.id.toString()
      }),
      name: "contact",
      onEdit: () => handleEditDelete(item, 'edit', 'contact'),
      onDelete: () => handleEditDelete(item, 'delete', 'contact')
    }),
    secondaryComponent: __jsx(button_button["a" /* Button */], {
      className: "addButton",
      variant: "text",
      type: "button",
      onClick: () => handleModal(contact_card["a" /* default */], 'add-contact-modal')
    }, __jsx(IconWrapper, null, __jsx(PlusMinus["b" /* Plus */], {
      width: "10px"
    })), __jsx(external_react_intl_["FormattedMessage"], {
      id: "addContactBtn",
      defaultMessage: "Add Contact"
    }))
  }))), __jsx(InformationBox, {
    className: "paymentBox",
    style: {
      paddingBottom: 30
    }
  }, __jsx(Heading, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "selectPaymentText",
    defaultMessage: "Select Payment Option"
  })), __jsx(payment_group["a" /* default */], {
    name: "payment",
    deviceType: deviceType,
    items: card,
    onEditDeleteField: (item, type) => handleEditDelete(item, type, 'payment'),
    onChange: item => dispatch({
      type: 'SET_PRIMARY_CARD',
      payload: item.id.toString()
    }),
    handleAddNewCard: () => {
      handleModal(stripe_form["a" /* default */], {
        totalPrice: calculatePrice()
      }, 'add-address-modal stripe-modal');
    }
  }), coupon ? __jsx(CouponBoxWrapper, null, __jsx(CouponCode, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "couponApplied"
  }), __jsx("span", null, coupon.code), __jsx(RemoveCoupon, {
    onClick: e => {
      e.preventDefault();
      removeCoupon();
      setHasCoupon(false);
    }
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "removeCoupon"
  })))) : __jsx(CouponBoxWrapper, null, !hasCoupon ? __jsx(HaveCoupon, {
    onClick: () => setHasCoupon(prev => !prev)
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "specialCode",
    defaultMessage: "Have a special code?"
  })) : __jsx(external_react_default.a.Fragment, null, __jsx(CouponInputBox, null, __jsx(coupon_box["b" /* default */], {
    onClick: handleApplyCoupon,
    value: couponCode,
    onChange: handleOnUpdate,
    className: "normalCoupon"
  })), couponError && __jsx(ErrorMsg, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "couponError",
    defaultMessage: couponError
  })))), __jsx(TermConditionText, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "termAndConditionHelper",
    defaultMessage: "By making this purchase you agree to our"
  }), __jsx(link_default.a, {
    href: "#"
  }, __jsx(TermConditionLink, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "termAndCondition",
    defaultMessage: "terms and conditions."
  })))), __jsx(CheckoutSubmit, null, __jsx(button_button["a" /* Button */], {
    type: "button",
    onClick: handleSubmit,
    disabled: !isValid,
    size: "big",
    loading: loading,
    style: {
      width: '100%'
    }
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "processCheckout",
    defaultMessage: "Proceed to Checkout"
  }))))), __jsx(CartWrapper, null, __jsx(external_react_stickynode_default.a, {
    enabled: size.width >= 768 ? true : false,
    top: 120,
    innerZ: 999
  }, __jsx(OrderInfo, null, __jsx(Title, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "cartTitle",
    defaultMessage: "Your Order"
  })), __jsx(external_react_custom_scrollbars_["Scrollbars"], {
    universal: true,
    autoHide: true,
    autoHeight: true,
    autoHeightMax: "390px",
    renderView: props => __jsx("div", _extends({}, props, {
      style: _objectSpread(_objectSpread({}, props.style), {}, {
        marginLeft: isRtl ? props.style.marginRight : 0,
        marginRight: isRtl ? 0 : props.style.marginRight,
        paddingLeft: isRtl ? 15 : 0,
        paddingRight: isRtl ? 0 : 15
      })
    }))
  }, __jsx(ItemsWrapper, null, cartItemsCount > 0 ? items.map(item => __jsx(OrderItem, {
    key: `cartItem-${item.id}`,
    product: item
  })) : __jsx(external_react_default.a.Fragment, null, __jsx(NoProductImg, null, __jsx(NoCartBag["a" /* NoCartBag */], null)), __jsx(NoProductMsg, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "noProductFound",
    defaultMessage: "No products found"
  }))))), __jsx(CalculationWrapper, null, __jsx(TextWrapper, null, __jsx(Text, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "subTotal",
    defaultMessage: "Subtotal"
  })), __jsx(Text, null, constant["a" /* CURRENCY */], calculateSubTotalPrice())), __jsx(TextWrapper, null, __jsx(Text, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "intlOrderDetailsDelivery",
    defaultMessage: "Delivery Fee"
  })), __jsx(Text, null, constant["a" /* CURRENCY */], "0.00")), __jsx(TextWrapper, null, __jsx(Text, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "discountText",
    defaultMessage: "Discount"
  })), __jsx(Text, null, constant["a" /* CURRENCY */], calculateDiscount())), __jsx(TextWrapper, {
    style: {
      marginTop: 20
    }
  }, __jsx(Bold, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "totalText",
    defaultMessage: "Total"
  }), ' ', __jsx(Small, null, "(", __jsx(external_react_intl_["FormattedMessage"], {
    id: "vatText",
    defaultMessage: "Incl. VAT"
  }), ")")), __jsx(Bold, null, constant["a" /* CURRENCY */], calculatePrice())))))))));
};

/* harmony default export */ var checkout_two = (CheckoutWithSidebar);
// EXTERNAL MODULE: ./src/graphql/query/customer.query.ts
var customer_query = __webpack_require__("yR3f");

// EXTERNAL MODULE: ./src/contexts/profile/profile.provider.tsx + 1 modules
var profile_provider = __webpack_require__("4HXp");

// EXTERNAL MODULE: ./src/utils/apollo.js
var apollo = __webpack_require__("bM43");

// CONCATENATED MODULE: ./src/pages/checkout.tsx
var checkout_jsx = external_react_default.a.createElement;









const CheckoutPage = ({
  deviceType
}) => {
  const {
    data,
    error,
    loading
  } = Object(react_hooks_["useQuery"])(customer_query["a" /* GET_LOGGED_IN_CUSTOMER */]);

  if (loading) {
    return checkout_jsx("div", null, "loading...");
  }

  if (error) return checkout_jsx("div", null, error.message);
  const token = 'true';
  return checkout_jsx(external_react_default.a.Fragment, null, checkout_jsx(seo["a" /* SEO */], {
    title: "Checkout - PickBazar",
    description: "Checkout Details"
  }), checkout_jsx(profile_provider["a" /* ProfileProvider */], {
    initData: data.me
  }, checkout_jsx(reuse_modal_["Modal"], null, checkout_jsx(checkout_two, {
    token: token,
    deviceType: deviceType
  }))));
};

const getStaticProps = async () => {
  const apolloClient = Object(apollo["a" /* initializeApollo */])();
  await apolloClient.query({
    query: customer_query["a" /* GET_LOGGED_IN_CUSTOMER */]
  });
  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  };
};
/* harmony default export */ var checkout = __webpack_exports__["default"] = (CheckoutPage);

/***/ }),

/***/ "6Bdc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__("C8TP");

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// EXTERNAL MODULE: ./src/components/forms/input.tsx
var input = __webpack_require__("VnWI");

// CONCATENATED MODULE: ./src/components/forms/text-field.tsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const FieldWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "text-field__FieldWrapper",
  componentId: "b1ey9e-0"
})(["textarea{height:auto;min-height:171px;padding-top:15px;resize:none;}"]);
const InputFeedback = external_styled_components_default.a.span.withConfig({
  displayName: "text-field__InputFeedback",
  componentId: "b1ey9e-1"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";padding-top:10px;display:flex;justify-content:flex-end;"], Object(theme_get_["themeGet"])('fonts.body', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.secondary.hover', '#FF282F')); // const Input = styled.input`
//   width: 100%;
//   height: 54px;
//   border-radius: 6px;
//   font-family: ${themeGet('fontFamily.0', 'Lato, sans-serif')};
//   border: 1px solid ${themeGet('colors.gray.700', '#e6e6e6')};
//   color: ${themeGet('colors.text.bold', '#0D1136')};
//   font-size: ${themeGet('fontSizes.base', '15')}px;
//   font-weight: ${themeGet('fontWeights.regular', '400')};
//   line-height: 19px;
//   padding: 0 18px;
//   box-sizing: border-box;
//   transition: border-color 0.25s ease;
//   &:hover,
//   &:focus {
//     outline: 0;
//   }
//   &:focus {
//     border-color: ${themeGet('colors.primary', '#009e7f')};
//   }
//   &::placeholder {
//     color: ${themeGet('colors.text.regular', '#77798C')};
//   }
// `;

const TextField = (_ref) => {
  let {
    type,
    id,
    label,
    error,
    value,
    onChange,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["type", "id", "label", "error", "value", "onChange", "className"]);

  return __jsx(FieldWrapper, null, label && __jsx("label", {
    className: "label",
    htmlFor: id
  }, label), __jsx(input["a" /* Input */], _extends({
    id: id,
    type: type,
    value: value,
    onChange: onChange
  }, props)), error && __jsx(InputFeedback, null, error));
};

/* harmony default export */ var text_field = (TextField);
// EXTERNAL MODULE: ./src/components/button/button.tsx
var button_button = __webpack_require__("B68Z");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: ./src/graphql/mutation/address.ts
var address = __webpack_require__("bQa+");

// CONCATENATED MODULE: ./src/components/address-card/address-card.style.tsx


const address_card_style_FieldWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "address-cardstyle__FieldWrapper",
  componentId: "sc-1pw66zu-0"
})(["width:100%;display:flex;flex-direction:column;margin-bottom:15px;"]);
const Heading = external_styled_components_default.a.div.withConfig({
  displayName: "address-cardstyle__Heading",
  componentId: "sc-1pw66zu-1"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-bottom:15px;"], Object(theme_get_["themeGet"])('fontFamily.heading', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.md', '19'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));

// EXTERNAL MODULE: ./src/contexts/profile/profile.context.tsx
var profile_context = __webpack_require__("p2kv");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// CONCATENATED MODULE: ./src/components/address-card/address-card.tsx
var address_card_jsx = external_react_default.a.createElement;










 // Shape of form values

// Wrap our form with the using withFormik HoC
const FormEnhancer = Object(external_formik_["withFormik"])({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      id: props.item.id || null,
      name: props.item.name || '',
      info: props.item.info || ''
    };
  },
  validationSchema: external_yup_["object"]().shape({
    name: external_yup_["string"]().required('Title is required!'),
    info: external_yup_["string"]().required('Address is required')
  }),
  handleSubmit: values => {
    console.log(values, 'values'); // do submitting things
  }
});

const UpdateAddress = props => {
  const {
    isValid,
    item,
    values,
    touched,
    errors,
    dirty,
    handleChange,
    handleBlur,
    handleReset,
    isSubmitting
  } = props;
  const addressValue = {
    id: values.id,
    type: 'secondary',
    name: values.name,
    info: values.info
  };
  const {
    state,
    dispatch
  } = Object(external_react_["useContext"])(profile_context["a" /* ProfileContext */]);
  const [addressMutation, {
    data
  }] = Object(react_hooks_["useMutation"])(address["b" /* UPDATE_ADDRESS */]);

  const handleSubmit = async () => {
    if (isValid) {
      const addressData = await addressMutation({
        variables: {
          addressInput: JSON.stringify(addressValue)
        }
      });
      console.log(addressData, 'address data');
      dispatch({
        type: 'ADD_OR_UPDATE_ADDRESS',
        payload: addressValue
      });
      Object(reuse_modal_["closeModal"])();
    }
  };

  return address_card_jsx(external_formik_["Form"], null, address_card_jsx(Heading, null, item && item.id ? 'Edit Address' : 'Add New Address'), address_card_jsx(address_card_style_FieldWrapper, null, address_card_jsx(text_field, {
    id: "name",
    type: "text",
    placeholder: "Enter Title",
    error: touched.name && errors.name,
    value: values.name,
    onChange: handleChange,
    onBlur: handleBlur
  })), address_card_jsx(address_card_style_FieldWrapper, null, address_card_jsx(text_field, {
    id: "info",
    as: "textarea",
    placeholder: "Enter Address",
    error: touched.info && errors.info,
    value: values.info,
    onChange: handleChange,
    onBlur: handleBlur
  })), address_card_jsx(button_button["a" /* Button */], {
    onClick: handleSubmit,
    type: "submit",
    style: {
      width: '100%',
      height: '44px'
    }
  }, address_card_jsx(external_react_intl_["FormattedMessage"], {
    id: "savedAddressId",
    defaultMessage: "Save Address"
  })));
};

/* harmony default export */ var address_card = __webpack_exports__["a"] = (FormEnhancer(UpdateAddress));

/***/ }),

/***/ "6zwy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__("C8TP");

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "react-text-mask"
var external_react_text_mask_ = __webpack_require__("I6Cj");
var external_react_text_mask_default = /*#__PURE__*/__webpack_require__.n(external_react_text_mask_);

// EXTERNAL MODULE: ./src/contexts/profile/profile.context.tsx
var profile_context = __webpack_require__("p2kv");

// EXTERNAL MODULE: ./src/components/button/button.tsx
var button_button = __webpack_require__("B68Z");

// EXTERNAL MODULE: ./src/graphql/mutation/contact.ts
var contact = __webpack_require__("fDRB");

// CONCATENATED MODULE: ./src/components/contact-card/contact-card.style.tsx


const FieldWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "contact-cardstyle__FieldWrapper",
  componentId: "sc-1phe4wi-0"
})(["width:100%;display:flex;flex-direction:column;margin-bottom:15px;"]);
const Heading = external_styled_components_default.a.div.withConfig({
  displayName: "contact-cardstyle__Heading",
  componentId: "sc-1phe4wi-1"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-bottom:15px;"], Object(theme_get_["themeGet"])('fontFamily.heading', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.md', '19'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// CONCATENATED MODULE: ./src/components/contact-card/contact-card.tsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }














const ContactValidationSchema = external_yup_["object"]().shape({
  number: external_yup_["string"]().required('Number is required')
});

const CreateOrUpdateContact = ({
  item
}) => {
  const initialValues = {
    id: item.id || null,
    type: item.type || 'secondary',
    number: item.number || ''
  };
  const [addContactMutation] = Object(react_hooks_["useMutation"])(contact["b" /* UPDATE_CONTACT */]);
  const {
    state,
    dispatch
  } = Object(external_react_["useContext"])(profile_context["a" /* ProfileContext */]);

  const handleSubmit = async (values, {
    setSubmitting
  }) => {
    await addContactMutation({
      variables: {
        contactInput: JSON.stringify(values)
      }
    });
    console.log(values, 'formik values');
    dispatch({
      type: 'ADD_OR_UPDATE_CONTACT',
      payload: values
    });
    Object(reuse_modal_["closeModal"])();
    setSubmitting(false);
  };

  return __jsx(external_formik_["Formik"], {
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: ContactValidationSchema
  }, ({
    values,
    handleChange,
    handleBlur,
    isSubmitting
  }) => __jsx(external_formik_["Form"], null, __jsx(Heading, null, item && item.id ? 'Edit Contact' : 'Add New Contact'), __jsx(FieldWrapper, null, __jsx(external_react_text_mask_default.a, {
    mask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    className: "form-control",
    placeholder: "Enter a phone number",
    guide: false,
    id: "my-input-id",
    value: values.number,
    onChange: handleChange,
    onBlur: handleBlur,
    name: "number",
    render: (ref, props) => __jsx(StyledInput, _extends({
      ref: ref
    }, props))
  })), __jsx(external_formik_["ErrorMessage"], {
    name: "number",
    component: StyledError
  }), __jsx(button_button["a" /* Button */], {
    disabled: isSubmitting,
    type: "submit",
    style: {
      width: '100%',
      height: '44px'
    }
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "savedContactId",
    defaultMessage: "Save Contact"
  }))));
};

/* harmony default export */ var contact_card = __webpack_exports__["a"] = (CreateOrUpdateContact);
const StyledInput = external_styled_components_default.a.input.withConfig({
  displayName: "contact-card__StyledInput",
  componentId: "oapeh9-0"
})(["width:100%;height:54px;border-radius:", ";font-family:", ";border:1px solid ", ";color:", ";font-size:16px;line-height:19px;font-weight:", ";padding:0 18px;box-sizing:border-box;transition:border-color 0.25s ease;&:hover,&:focus{outline:0;}&:focus{border-color:", ";}&::placeholder{color:", ";}"], Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('fonts.body', 'Lato, sans-serif'), Object(theme_get_["themeGet"])('colors.gray.700', '#e6e6e6'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798C'));
const StyledError = external_styled_components_default.a.div.withConfig({
  displayName: "contact-card__StyledError",
  componentId: "oapeh9-1"
})(["color:red;padding-bottom:10px;margin-top:-5px;"]);

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

/***/ "99J/":
/***/ (function(module, exports) {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ "AmGK":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAOCAYAAAB+UA+TAAAEhklEQVRIidWVXWxUVRSFv3XntkBpYUZqKQ0tqVgpPyp/wohEkBBMNKJGQ3wwhF8fTIQHxCCUONopiJEYNTFRQw3+oOIT6pORiDxACzEoodCIRmyLEIl2qKPT6cy924e5tLRTEI01cSf35uass9de69xz9hHAiLmx8cMU+kbSdQwIg04ZL3Y21W0biP2fwgEowJk/mEkAQQTREI42rPhvpf274eRezuS/nCn/riFXM4ThAsih16jTk8LJ9uRNzIwpvZmYOcTkD0YUjtbvk7S0/6h91tnl3UdLLJ/wWuPt8yPJZM4hSi7jbUF6h5WVO66a23huCmRfwzjiBIlTLmFOJo3jZfKedE3NDKra41filFgEYNhRsJZgdElklPvYPzYJkMneEphMAV8Cp0FTMZ5nd8dNV0/OzgQWICt2YG/IUG2vYN/Lm+6HXFIzbgVTdDC6klmxUlAxQKLLW9R5eOs0M44DmFlOzKxY0eg58dksjLl/y6j8nDbjKKsqF+LTpyHjlwPw1s/lNP40k71W2D/ZAl9qdUvmfDdREMqNG8L6m5RD4p57obAQ4JfBtLiuG4ix87TEktyxo0R+TxiETK2RufHHTfaSRGG42z1DNP65xBrM6nxU5IjNZrySaKpbDxCJ1r+BtNawlxMondNKKwAhm4opVzhUcpxdbfuwdO7I/NZ+isb2TmAePjUYtQgwa3VD8vsakZc1b0SRAMwJkQ1H6Fq8GBsTCRaIg4MZ9aVaBwNRHI7WH8DLjEOqwkiRzX5KofsjpgzGCxKVwBoAHzttpjbEZsFDwPrwvPidGGsx2hN/DN+C2R4kMO6msf0AxrSg7CEs+TTSUrAzmHaDlgDzABg1vo1key0ICtxWV/Q1ouyY0ubOZQ8Muj3Bvsfx3hwMERZwqFhigUHa4KD59qwKQg0CTPZE4vDW1wHC0fhEiTmeEzqZPLTlRCQab0dUhm9rmI5vuw3zfdMyjm/8HT0yOSgyAZiA8SvifTw9RchvwUjjFNzFqnFnaDy7C/w2zH4APIwbwdIsr2hzzbHJIrcVsmPLUvn+7BzSftzCDSwv776C0VoQ5vNcornumcux8O3xnQCGjgGMnr89QtabYOAlD9WcCgjeAzbJ9feBqnzTtq7muib2Wohkxw0AOKHZrKj4qpe48WwlaBTiAiPL23Na/WkIkE7R1VGNo2EYxyB3vfT+Ua+8rOgyg0+yumrnYMby1kKqFeBLTfkgXyOmO9iecLT+XTzvfomxZnwLyzwA8/wPFHI2gaqAExeHZ3OLlTw/CQhhlu5nEkA9FzA3BVxPsuMjGjtaMFsfoCdxVEvuOLUCODImXcrNlpWW9RG5X1yLycBMNUbK8zLHBkK+shswPpSpAvEoPh8HUEtfurrMzAfrzmbsYQ7EsrlkrzoQ05xXc2V1N2YbAQ94ELNZiE9yhGrB/ODqsZMAikTrtxgUmOOkLq5e3oCCDpwcP5x1QccbylgYc8Pp0BGhGWa2LtG09dWhKKPer11tFUgdgDA6WF1ZORQFB0ZkbnwTDtsN9icO1y0eqjp/Anh31Sy27YKTAAAAAElFTkSuQmCC"

/***/ }),

/***/ "B3Fo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// EXTERNAL MODULE: ./src/assets/icons/CloseIcon.tsx
var CloseIcon = __webpack_require__("2nMb");

// CONCATENATED MODULE: ./src/assets/icons/PencilIcon.tsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


const PencilIcon = props => {
  return __jsx("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 7.2 7.2"
  }, props), __jsx("path", {
    d: "M64,69.7v1.5h1.5l4.42-4.42-1.5-1.5Zm7.08-4.08a.387.387,0,0,0,0-.56l-.94-.94a.387.387,0,0,0-.56,0l-.74.74,1.5,1.5Z",
    transform: "translate(-64 -63.999)",
    fill: "currentColor"
  }));
};
// CONCATENATED MODULE: ./src/components/radio-card/radio-card.tsx
var radio_card_jsx = external_react_default.a.createElement;





const CardWrapper = external_styled_components_default.a.label.withConfig({
  displayName: "radio-card__CardWrapper",
  componentId: "le27dx-0"
})(["display:inline-flex;align-items:center;border-radius:", ";background-color:", ";border:1px solid ", ";text-align:center;padding:15px 20px;margin-bottom:15px;margin-right:15px;position:relative;font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:24px;max-width:240px;cursor:pointer;width:100%;transition:all 0.25s ease;&.active{border:1px solid ", ";background-color:", ";}&.disabled{cursor:not-allowed;opacity:0.6;}&.item-has-title{flex-direction:column;text-align:left;align-items:flex-start;padding:15px;}&:last-child{margin-right:0;}input[type='radio']{opacity:0;visibility:hidden;position:absolute;top:0;left:0;}&:hover{.button-wrapper{opacity:1;visibility:visible;}}"], Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('colors.gray.200', '#F7F7F7'), Object(theme_get_["themeGet"])('colors.gray.200', '#F7F7F7'), Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009E7F'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'));
const CardTitle = external_styled_components_default.a.span.withConfig({
  displayName: "radio-card__CardTitle",
  componentId: "le27dx-1"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.2;margin-bottom:5px;text-transform:capitalize;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const CardContent = external_styled_components_default.a.span.withConfig({
  displayName: "radio-card__CardContent",
  componentId: "le27dx-2"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.medium', '#424561'));
const CardButtons = external_styled_components_default.a.span.withConfig({
  displayName: "radio-card__CardButtons",
  componentId: "le27dx-3"
})(["display:block;position:absolute;top:10px;right:10px;display:flex;align-items:center;opacity:0;visibility:hidden;transition:0.2s ease-in-out;"]);
const ActionButton = external_styled_components_default.a.span.withConfig({
  displayName: "radio-card__ActionButton",
  componentId: "le27dx-4"
})(["display:flex;align-items:center;justify-content:center;border:0;width:20px;height:20px;border-radius:50%;overflow:hidden;margin-left:5px;cursor:pointer;outline:0;padding:0;color:", ";&.edit-btn{background-color:", ";}&.delete-btn{background-color:", ";}svg{display:block;width:8px;height:auto;}"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009E7F'), Object(theme_get_["themeGet"])('colors.secondary.regular', '#ff5b60'));

const RadioCard = ({
  id,
  name,
  title,
  content,
  editIcon,
  deleteIcon,
  withActionButtons,
  onEdit,
  onDelete,
  hasEdit,
  hasDelete,
  disabled,
  checked,
  onChange
}) => {
  return radio_card_jsx(CardWrapper, {
    htmlFor: `${name}-${id}`,
    className: `label ${title ? 'item-has-title' : 'no_title'}
      ${checked ? 'active' : 'not_active'}`
  }, radio_card_jsx("input", {
    type: "radio",
    id: `${name}-${id}`,
    name: name,
    value: content,
    disabled: disabled,
    checked: checked,
    onChange: onChange
  }), title && radio_card_jsx(CardTitle, null, title), content && radio_card_jsx(CardContent, null, content), withActionButtons && radio_card_jsx(CardButtons, {
    className: "button-wrapper"
  }, hasEdit && radio_card_jsx(ActionButton, {
    onClick: onEdit,
    className: "edit-btn"
  }, editIcon), hasDelete && radio_card_jsx(ActionButton, {
    onClick: onDelete,
    className: "delete-btn"
  }, deleteIcon)));
};

RadioCard.defaultProps = {
  title: '',
  content: '',
  editIcon: radio_card_jsx(PencilIcon, null),
  deleteIcon: radio_card_jsx(CloseIcon["a" /* CloseIcon */], null),
  withActionButtons: true,
  hasEdit: true,
  hasDelete: true
};
/* harmony default export */ var radio_card = __webpack_exports__["a"] = (RadioCard);

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

/***/ "BU0q":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAOCAYAAAA1+Nx+AAAC2ElEQVQ4jYWUX2jbVRTHP+f+fvn9mqxJk9WmjemaNmQtKzrZmCDIVBjbQHBsCrKHUhUfHGPDwUBBQX0Yw4FPwqz4MvBhMnwQKfggE/tQ2Biyzf2nm2lX2y7d1ibt0qVNfr8cH3SlapMeuA/33u/3w7n3nnuEFXEH4jjmqIpsQ3ULIjHQnConQ+XqQDvM6E+4lZmmt8C8L9CL8hj4XYTLljAgffmrK5myDHfYq5hTiERZJVS1GN4mh5sPhD8Vkc7VNKA+6AnbnftE3sQHMAAjAesdFeuHWnAAEWk0MXtg8ZpXAw4gFpiPKouxb5dXstDqO2YMkYbaRmjuc7OBNpOWoOCm7HrSv8HKHrs/P2j7jjmyFhxLZxcueOkn08jOKqEtTl2LwgfAoAFem/nmex7t3gc/n8Pu7vmXcK57M+x4xW/osXgyvHnlUuwE954/C+s6/ge/vvQS91v6X9RT0ag9bkV6Nu18malIE5HuDOe37sb9+Eu8mzdo2/4Ckxevo+lky1JHO+JVeDgyykQJepqauPXd29zoeIPGrh04xavEkr3M+zHWhSNURr4QHDrN/fRmP/fHBNFUkumxKTa+/iqJriSlwjwbMu2EkglyQ8M81RKFcpnGjRlmhn5lffU2zyTm6HhuF60bUpSCvfx24Qpu4Ryjd7LEqxfBk6qdezqzIINnXd/zWZ9JEd+U4eF0ActxGf7lEq56OKUi5cUlHgwNs5BIkRkZxE4dZfRBkeaGKLnJHLOzBdzpH5nsOkY4YhGYzilB7sptx3yOyId1K8LW8dYjoeXLtqKGQJtV95FRhgP9+e0yBomKY7JrVZIV5XEgboUwEH8viAmbunyRyn67r3jGdMI9Rd6tnw54Bf3TTZtH8YOhNeGqnLb7imfgn5/cXfZPi/r7UM3XdtFeznqfSZDROmgfqscDDfn+5ZOs3F6t2Sk6hfJ1qFz96j/N7pDAs0AJ5XKtZvcX+dwJtfbM5ZQAAAAASUVORK5CYII="

/***/ }),

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),

/***/ "CWtZ":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAMCAYAAAAOCs/+AAADWklEQVQ4jXWUb2iVdRTHP+e5d14ns0V0zdHS+6cXNfpDtC6LCiIkQwxK0DLYeC7UC0NIYq0XvVkSIVr2orBC825IEHdkUSBrU1SoILFiyC5i995tTJxzgWW7G07vc3rx/J7n97jN8+r8+53v95zf+f1EB9gFbEaJY6VMhh3Szo3Qk+7rxtHNAHgygOq3xPgGAJUpqu52AFqLjayo5RHpRDUN0oRwHjhFxe22ECpk+/eBthvHGSr5niAqAHqUNdTZgfIeQoOJbZStDPlqMUa2NgWSNKceos69OPzkYzBE1d3I/ccSeFd+RgjAIqK/Usk/FZqZwmuIfB2Jz1DJrwksB0C2cEW28v6GQ+8MXp1bddnEHrdF5l4ISan+RtkdRbQtglryY9M9lpReAj4A/RTlLMq5W4nKW4vsJNnD9wVW9Po4UW47tm7P/hcvdL/7V8vqfy0xocvqzufGZ4mplkzwOevjY6rufpaT9f2PIZozeeMIKV93csAkmImFckOGZxdWkt27NzU9e0czAMliE+jLJuMakgz2yhJzpBSC2GY+JFPYRWuxcQmxmL5t86Q3EsmFJW85MOlWQCfnbyYa3IE3MlqkmabadpBg7w5S3nTdAD8anru2agSAurMb9D+DmEDkE1bMlUgfsbmth+5CeNVvREe43lgEbpqaTyxPzJdBgMELD2ce/GhPByJdZhoKsS8AWH+kBWgy/ilmts0CMNE1hhd/Bhi1EyGF1E+RKqwFIBF/k3CFnAIXt82j+qep1XF7Yh7DgXr+77UvITztW3qcSmcZgFh96eIHMtY5QmX8EdAelHlD7k4c5xU4GUd1pyXtTZAqPAty1eQ1su5w2/LElGF/OoDweqTzA1aPvEgxi3/3V6ttkV6PSn4fcMLW9eZIT2xB5B6bJ98Rk5MIz4euBsnBolcJwHj+HzJ9vwPtYVy5THXiBwsibf4PCKiZWLPzI819CdBzKJdAsqCbCBLr+gtx+XIJ3mJRyQF9S4n5nRyP/MggegB6vUhC5KuQUsSXBOkISQeKstuY/lqoTlN1W0D8m6HXIZOqIaxEuM3EADz5npj3ZGjXObgoYwb0NAALzigUY1D7A2UDQgxYAL2IMorKZ4y5Q6T7d4LnnxE5akmB33ShH3gAZQHgf/VSJw5mgGMuAAAAAElFTkSuQmCC"

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "ExBD":
/***/ (function(module, exports) {

module.exports = require("@styled-system/css");

/***/ }),

/***/ "H8eV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SEO; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SEO = ({
  title,
  description,
  canonical,
  css,
  js,
  image
}) => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, title), __jsx("meta", {
  name: "description",
  content: description
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width,minimum-scale=1,initial-scale=1"
}), __jsx("meta", {
  property: "og:type",
  content: "website"
}), __jsx("meta", {
  name: "og:title",
  property: "og:title",
  content: title
}), __jsx("meta", {
  name: "og:description",
  property: "og:description",
  content: description
}), __jsx("meta", {
  property: "og:site_name",
  content: "Proper Noun"
}), __jsx("meta", {
  property: "og:url",
  content: `${canonical}`
}), __jsx("meta", {
  name: "twitter:card",
  content: "summary"
}), __jsx("meta", {
  name: "twitter:title",
  content: title
}), __jsx("meta", {
  name: "twitter:description",
  content: description
}), __jsx("meta", {
  name: "twitter:site",
  content: "@propernounco"
}), __jsx("meta", {
  name: "twitter:creator",
  content: "@propernounco"
}), css && __jsx("link", {
  rel: "stylesheet",
  href: `${css}`
}), image ? __jsx("meta", {
  property: "og:image",
  content: `${image}`
}) : __jsx("meta", {
  property: "og:image",
  content: "https://www.propernoun.co/static/images/proper-noun-social.png"
}), image && __jsx("meta", {
  name: "twitter:image",
  content: `${image}`
}), canonical && __jsx("link", {
  rel: "canonical",
  href: `${canonical}`
}), js && __jsx("script", {
  type: "text/javascript",
  src: `${js}`
}));

/***/ }),

/***/ "I6Cj":
/***/ (function(module, exports) {

module.exports = require("react-text-mask");

/***/ }),

/***/ "KclG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrowPrev; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ArrowPrev = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: "20"
  }, __jsx("path", {
    d: "M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z",
    fill: "currentColor",
    stroke: "currentColor"
  }));
};

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

/***/ "MXV/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoCartBag; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const NoCartBag = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "231.91",
    height: "292",
    viewBox: "0 0 231.91 292"
  }, __jsx("defs", null, __jsx("linearGradient", {
    id: "linear-gradient",
    x1: "1",
    y1: "0.439",
    x2: "0.369",
    y2: "1",
    gradientUnits: "objectBoundingBox"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#029477"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#009e7f"
  }))), __jsx("g", {
    id: "no_cart_in_bag_2",
    "data-name": "no cart in bag 2",
    transform: "translate(-1388 -351)"
  }, __jsx("ellipse", {
    id: "Ellipse_2873",
    "data-name": "Ellipse 2873",
    cx: "115.955",
    cy: "27.366",
    rx: "115.955",
    ry: "27.366",
    transform: "translate(1388 588.268)",
    fill: "#ddd",
    opacity: "0.25"
  }), __jsx("path", {
    id: "Path_18691",
    "data-name": "Path 18691",
    d: "M29.632,0H170.368A29.828,29.828,0,0,1,200,30.021V209.979A29.828,29.828,0,0,1,170.368,240H29.632A29.828,29.828,0,0,1,0,209.979V30.021A29.828,29.828,0,0,1,29.632,0Z",
    transform: "translate(1403 381)",
    fill: "#009e7f"
  }), __jsx("path", {
    id: "Rectangle_1852",
    "data-name": "Rectangle 1852",
    d: "M30,0H170a30,30,0,0,1,30,30v0a30,30,0,0,1-30,30H12.857A12.857,12.857,0,0,1,0,47.143V30A30,30,0,0,1,30,0Z",
    transform: "translate(1403 381)",
    fill: "#006854"
  }), __jsx("path", {
    id: "Rectangle_1853",
    "data-name": "Rectangle 1853",
    d: "M42,0H158a42,42,0,0,1,42,42v0a18,18,0,0,1-18,18H18A18,18,0,0,1,0,42v0A42,42,0,0,1,42,0Z",
    transform: "translate(1403 381)",
    fill: "#006854"
  }), __jsx("path", {
    id: "Path_18685",
    "data-name": "Path 18685",
    d: "M446.31,246.056a30,30,0,1,1,30-30A30.034,30.034,0,0,1,446.31,246.056Zm0-53.294A23.3,23.3,0,1,0,469.9,216.056,23.471,23.471,0,0,0,446.31,192.762Z",
    transform: "translate(1056.69 164.944)",
    fill: "#006854"
  }), __jsx("path", {
    id: "Path_18686",
    "data-name": "Path 18686",
    d: "M446.31,375.181a30,30,0,1,1,30-30A30.034,30.034,0,0,1,446.31,375.181Zm0-53.294A23.3,23.3,0,1,0,469.9,345.181,23.471,23.471,0,0,0,446.31,321.887Z",
    transform: "translate(1057.793 95.684)",
    fill: "#009e7f"
  }), __jsx("circle", {
    id: "Ellipse_2874",
    "data-name": "Ellipse 2874",
    cx: "28.689",
    cy: "28.689",
    r: "28.689",
    transform: "translate(1473.823 511.046)",
    fill: "#006854"
  }), __jsx("circle", {
    id: "Ellipse_2875",
    "data-name": "Ellipse 2875",
    cx: "15.046",
    cy: "15.046",
    r: "15.046",
    transform: "translate(1481.401 547.854) rotate(-45)",
    fill: "#009e7f"
  }), __jsx("path", {
    id: "Path_18687",
    "data-name": "Path 18687",
    d: "M399.71,531.27a71.755,71.755,0,0,1,12.65-13.6c3.4-2.863-1.5-7.726-4.882-4.882a78.392,78.392,0,0,0-13.73,15c-2.56,3.644,3.424,7.1,5.962,3.485Z",
    transform: "translate(1060.579 -35.703)",
    fill: "#006854"
  }), __jsx("path", {
    id: "Path_18688",
    "data-name": "Path 18688",
    d: "M412.913,527.786a78.419,78.419,0,0,0-13.73-15c-3.38-2.843-8.289,2.017-4.882,4.882a71.785,71.785,0,0,1,12.65,13.6c2.535,3.609,8.525.162,5.962-3.485Z",
    transform: "translate(1060.566 -35.704)",
    fill: "#006854"
  }), __jsx("path", {
    id: "Path_18689",
    "data-name": "Path 18689",
    d: "M583.278,527.786a78.417,78.417,0,0,0-13.73-15c-3.38-2.843-8.289,2.017-4.882,4.882a71.768,71.768,0,0,1,12.65,13.6c2.535,3.609,8.525.162,5.962-3.485Z",
    transform: "translate(970.304 -35.704)",
    fill: "#006854"
  }), __jsx("path", {
    id: "Path_18690",
    "data-name": "Path 18690",
    d: "M570.075,531.27a71.77,71.77,0,0,1,12.65-13.6c3.4-2.863-1.5-7.726-4.882-4.882a78.407,78.407,0,0,0-13.73,15c-2.56,3.644,3.424,7.1,5.962,3.485Z",
    transform: "translate(970.318 -35.703)",
    fill: "#006854"
  }), __jsx("path", {
    id: "Path_18692",
    "data-name": "Path 18692",
    d: "M301.243,287.464a19.115,19.115,0,0,1,8.071,9.077,19.637,19.637,0,0,1,1.6,7.88v26.085a19.349,19.349,0,0,1-9.672,16.957c-10.048-6.858-16.544-17.742-16.544-30S291.2,294.322,301.243,287.464Z",
    transform: "translate(1292.301 101.536)",
    fill: "url(#linear-gradient)"
  }), __jsx("path", {
    id: "Path_18693",
    "data-name": "Path 18693",
    d: "M294.371,287.464a19.115,19.115,0,0,0-8.071,9.077,19.637,19.637,0,0,0-1.6,7.88v26.085a19.349,19.349,0,0,0,9.672,16.957c10.048-6.858,16.544-17.742,16.544-30S304.419,294.322,294.371,287.464Z",
    transform: "translate(1118.301 101.536)",
    fill: "url(#linear-gradient)"
  })));
};

/***/ }),

/***/ "OeMJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Plus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Minus; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // SVG plus icon

const Plus = ({
  color = 'currentColor',
  width = '12px',
  height = '12px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12 12"
  }, __jsx("g", {
    id: "Group_3351",
    "data-name": "Group 3351",
    transform: "translate(-1367 -190)"
  }, __jsx("rect", {
    "data-name": "Rectangle 520",
    width: "12",
    height: "2",
    rx: "1",
    transform: "translate(1367 195)",
    fill: color
  }), __jsx("rect", {
    "data-name": "Rectangle 521",
    width: "12",
    height: "2",
    rx: "1",
    transform: "translate(1374 190) rotate(90)",
    fill: color
  })));
}; // SVG minus icon

const Minus = ({
  color = 'currentColor',
  width = '12px',
  height = '2px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12 2"
  }, __jsx("rect", {
    "data-name": "Rectangle 522",
    width: "12",
    height: "2",
    rx: "1",
    fill: color
  }));
};

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Oyez":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "RkzC":
/***/ (function(module, exports) {

module.exports = require("@stripe/stripe-js");

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

/***/ "V4O8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@stripe/stripe-js"
var stripe_js_ = __webpack_require__("RkzC");

// EXTERNAL MODULE: external "@stripe/react-stripe-js"
var react_stripe_js_ = __webpack_require__("z5ly");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./src/graphql/mutation/order.ts

const ADD_ORDER = external_graphql_tag_default.a`
  mutation($orderInput: String!) {
    addOrder(orderInput: $orderInput) {
      id
      userId
      products {
        id
        title
      }
      status
    }
  }
`;
const GET_PAYMENT = external_graphql_tag_default.a`
  mutation($paymentInput: String!) {
    charge(paymentInput: $paymentInput) {
      status
    }
  }
`;
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/features/payment/stripe-form.style.tsx


const FieldWrapper = external_styled_components_default()('div').withConfig({
  displayName: "stripe-formstyle__FieldWrapper",
  componentId: "sc-1kk8r5f-0"
})(["width:100%;display:flex;flex-direction:column;margin-bottom:15px;"]);
const Heading = external_styled_components_default()('div').withConfig({
  displayName: "stripe-formstyle__Heading",
  componentId: "sc-1kk8r5f-1"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-bottom:15px;"], Object(theme_get_["themeGet"])('fonts.heading', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.md', '19'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const StripeFormWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "stripe-formstyle__StripeFormWrapper",
  componentId: "sc-1kk8r5f-2"
})(["width:100%;.StripeElement{box-sizing:border-box;height:40px;padding:10px 12px;border:1px solid transparent;border-radius:4px;background-color:white;box-shadow:0 1px 3px 0 #e6ebf1;-webkit-transition:box-shadow 150ms ease;transition:box-shadow 150ms ease;}.StripeElement--focus{box-shadow:0 1px 3px 0 #cfd7df;}.StripeElement--invalid{border-color:#fa755a;}.StripeElement--webkit-autofill{background-color:#fefde5 !important;}button{border:none;border-radius:4px;outline:none;text-decoration:none;color:#fff;background:#32325d;white-space:nowrap;display:inline-block;height:40px;line-height:40px;padding:0 14px;box-shadow:0 4px 6px rgba(50,50,93,0.11),0 1px 3px rgba(0,0,0,0.08);border-radius:", ";font-size:calc(", "px - 1px);font-weight:600;letter-spacing:0.025em;text-decoration:none;-webkit-transition:all 150ms ease;transition:all 150ms ease;cursor:pointer;&:hover{transform:translateY(-1px);box-shadow:0 7px 14px rgba(50,50,93,0.1),0 3px 6px rgba(0,0,0,0.08);background-color:#43458b;}}"], Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('fontSizes.base', '15'));
/* harmony default export */ var stripe_form_style = (StripeFormWrapper);
// EXTERNAL MODULE: ./src/contexts/profile/profile.context.tsx
var profile_context = __webpack_require__("p2kv");

// CONCATENATED MODULE: ./src/features/payment/stripe-form.tsx
var __jsx = external_react_default.a.createElement;








const stripePromise = Object(stripe_js_["loadStripe"])("sdfdsfds");

const StripeForm = ({
  buttonText,
  getToken
}) => {
  // Get a reference to Stripe or Elements using hooks.
  const stripe = Object(react_stripe_js_["useStripe"])();
  const elements = Object(react_stripe_js_["useElements"])();
  const {
    dispatch
  } = Object(external_react_["useContext"])(profile_context["a" /* ProfileContext */]);

  const handleSubmit = async () => {
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    } // Use elements.getElement to get a reference to the mounted Element.


    const cardElement = elements.getElement(react_stripe_js_["CardElement"]); // Pass the Element directly to other Stripe.js methods:
    // e.g. createToken - https://stripe.com/docs/js/tokens_sources/create_token?type=cardElement

    const {
      token
    } = await stripe.createToken(cardElement);
    getToken(token);

    if (token) {
      dispatch({
        type: 'ADD_CARD',
        payload: token.card
      });
      Object(reuse_modal_["closeModal"])();
    }

    console.log(token, 'token');
  };

  return __jsx(stripe_form_style, null, __jsx(Heading, null, "Enter card info"), __jsx(FieldWrapper, null, __jsx(react_stripe_js_["CardElement"], null)), __jsx("button", {
    type: "button",
    onClick: handleSubmit
  }, buttonText ? buttonText : 'Pay Now'));
};

const StripePaymentForm = ({
  item: {
    price,
    buttonText
  }
}) => {
  const [getPayment] = Object(react_hooks_["useMutation"])(GET_PAYMENT);

  const sendTokenToServer = async token => {
    const payment_info = await getPayment({
      variables: {
        paymentInput: JSON.stringify({
          token,
          amount: price
        })
      }
    });
    console.log(payment_info, 'payment_info');
  };

  return __jsx(react_stripe_js_["Elements"], {
    stripe: stripePromise
  }, __jsx(StripeForm, {
    getToken: token => sendTokenToServer(token),
    buttonText: buttonText
  }));
};

/* harmony default export */ var stripe_form = __webpack_exports__["a"] = (StripePaymentForm);

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

/***/ "YBd4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const RadioGroupWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "radio-group__RadioGroupWrapper",
  componentId: "uzzs37-0"
})(["display:flex;flex-wrap:wrap;"]);

const RadioGroup = ({
  items = [],
  component,
  containerClassName,
  secondaryComponent
}) => {
  return __jsx(RadioGroupWrapper, {
    className: `radioGroup ${containerClassName}`.trim()
  }, items.map((item, index) => component && component(item, index)), secondaryComponent && secondaryComponent);
};

/* harmony default export */ __webpack_exports__["a"] = (RadioGroup);

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
      uri: "http://localhost:4000/shop/graphql",
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

/***/ "bQa+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UPDATE_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DELETE_ADDRESS; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const UPDATE_ADDRESS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation($addressInput: String!) {
    updateAddress(addressInput: $addressInput) {
      id
      name
      address {
        id
        name
        info
      }
    }
  }
`;
const DELETE_ADDRESS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation($addressId: String!) {
    deleteAddress(addressId: $addressId) {
      id
      name
      address {
        id
        name
        info
      }
    }
  }
`;

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "f/wd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENCY; });
/************ CONSTANTS ***********/
const CURRENCY = '$';

/***/ }),

/***/ "fDRB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UPDATE_CONTACT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DELETE_CONTACT; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const UPDATE_CONTACT = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation($contactInput: String!) {
    updateContact(contactInput: $contactInput) {
      id
      name
      contact {
        id
        type
        number
      }
    }
  }
`;
const DELETE_CONTACT = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation($contactId: String!) {
    deleteContact(contactId: $contactId) {
      id
      name
      contact {
        id
        type
        number
      }
    }
  }
`;

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

/***/ "kNaX":
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "nfQO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APPLY_COUPON; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const APPLY_COUPON = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation applyCoupon($code: String!) {
    applyCoupon(code: $code) {
      id
      code
      discountInPercent
    }
  }
`;

/***/ }),

/***/ "oz4i":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "p2kv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ProfileContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

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

/***/ "qC9r":
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),

/***/ "qbum":
/***/ (function(module, exports) {

module.exports = require("@redq/reuse-modal");

/***/ }),

/***/ "rWEH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CouponDisplay; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/components/coupon-box/coupon-box.style.tsx


const CouponBoxWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "coupon-boxstyle__CouponBoxWrapper",
  componentId: "sc-1hfo5jk-0"
})(["&.boxedCoupon{display:flex;flex-direction:row;align-items:center;width:100%;height:50px;padding-right:5px;border-radius:", ";background-color:", ";overflow:hidden;border:1px solid ", ";}input{height:100%;flex-grow:1;font-size:calc(", "px - 1px);color:", ";border:none;border-radius:0;padding:0 20px;background-color:transparent;margin-right:0;&:focus{outline:0;}&::-webkit-input-placeholder{font-size:calc(", "px - 1px);color:", ";}&:-moz-placeholder{font-size:calc(", "px - 1px);color:", ";}&::-moz-placeholder{font-size:calc(", "px - 1px);color:", ";}&:-ms-input-placeholder{font-size:calc(", "px - 1px);color:", ";}}&.normalCoupon{width:100%;display:flex;align-items:center;input{width:50%;height:48px;margin-right:20px;border:1px solid ", " !important;background-color:", ";flex-grow:unset;border-radius:", ";@media (max-width:600px){width:100%;}}button{height:48px;}}"], Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.gray.600', '#ededed'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798C'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('colors.text.label', '#767676'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('colors.text.label', '#767676'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('colors.text.label', '#767676'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('colors.text.label', '#767676'), Object(theme_get_["themeGet"])('colors.lightDarkColor', '#e6e6e6'), Object(theme_get_["themeGet"])('colors.lightColor', '#f7f7f7'), Object(theme_get_["themeGet"])('radii.base', '6px'));
const Display = external_styled_components_default.a.div.withConfig({
  displayName: "coupon-boxstyle__Display",
  componentId: "sc-1hfo5jk-1"
})(["width:100%;display:flex;align-items:center;justify-content:space-between;position:relative;"]);
const CouponCode = external_styled_components_default.a.span.withConfig({
  displayName: "coupon-boxstyle__CouponCode",
  componentId: "sc-1hfo5jk-2"
})(["font-size:calc(", "px - 1px);color:", ";font-weight:", ";text-transform:uppercase;"], Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009E7F'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'));
const DiscountPrice = external_styled_components_default.a.span.withConfig({
  displayName: "coupon-boxstyle__DiscountPrice",
  componentId: "sc-1hfo5jk-3"
})(["font-size:calc(", "px - 1px);color:", ";font-weight:", ";margin-left:auto;"], Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009E7F'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'));
const CancelBtn = external_styled_components_default.a.button.withConfig({
  displayName: "coupon-boxstyle__CancelBtn",
  componentId: "sc-1hfo5jk-4"
})(["color:", ";width:20px;height:20px;display:flex;align-items:center;justify-content:center;background-color:transparent;border:0;outline:0;padding:0;margin:0;position:absolute;top:0;right:-30px;cursor:pointer;"], Object(theme_get_["themeGet"])('colors.secondary.regular', '#ff5b60'));
// EXTERNAL MODULE: ./src/assets/icons/CloseIcon.tsx
var CloseIcon = __webpack_require__("2nMb");

// EXTERNAL MODULE: ./src/components/forms/input.tsx
var input = __webpack_require__("VnWI");

// EXTERNAL MODULE: ./src/components/button/button.tsx
var button_button = __webpack_require__("B68Z");

// CONCATENATED MODULE: ./src/components/coupon-box/coupon-box.tsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const CouponBox = (_ref) => {
  let {
    onChange,
    value,
    onClick,
    disabled,
    className,
    style
  } = _ref,
      props = _objectWithoutProperties(_ref, ["onChange", "value", "onClick", "disabled", "className", "style"]);

  const intl = Object(external_react_intl_["useIntl"])();
  return __jsx(CouponBoxWrapper, {
    className: className ? className : 'boxedCoupon',
    style: style
  }, __jsx(input["a" /* Input */], _extends({
    onChange: onChange,
    value: value,
    placeholder: intl.formatMessage({
      id: 'couponPlaceholder',
      defaultMessage: 'Enter Coupon Here'
    })
  }, props)), __jsx(button_button["a" /* Button */], {
    type: "button",
    onClick: onClick,
    disabled: disabled,
    padding: "0 30px"
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "voucherApply",
    defaultMessage: "Apply"
  })));
};

const CouponDisplay = ({
  code,
  currency,
  price,
  sign,
  onClick,
  style,
  btnStyle
}) => {
  return __jsx(Display, {
    style: style,
    className: "couponDisplayBox"
  }, __jsx(CouponCode, {
    className: "couponCodeText"
  }, code), __jsx(DiscountPrice, {
    className: "discountedPrice"
  }, sign, currency, price), __jsx(CancelBtn, {
    onClick: onClick,
    style: btnStyle
  }, __jsx(CloseIcon["a" /* CloseIcon */], null)));
};
/* harmony default export */ var coupon_box = __webpack_exports__["b"] = (CouponBox);

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

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

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

/***/ "uPwL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./src/components/carousel/carousel.tsx + 1 modules
var carousel = __webpack_require__("ulNG");

// EXTERNAL MODULE: ./src/components/payment-card/image/master-card.png
var master_card = __webpack_require__("BU0q");
var master_card_default = /*#__PURE__*/__webpack_require__.n(master_card);

// EXTERNAL MODULE: ./src/components/payment-card/image/paypal.png
var paypal = __webpack_require__("AmGK");
var paypal_default = /*#__PURE__*/__webpack_require__.n(paypal);

// EXTERNAL MODULE: ./src/components/payment-card/image/visa.png
var visa = __webpack_require__("CWtZ");
var visa_default = /*#__PURE__*/__webpack_require__.n(visa);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/components/payment-card/payment-card.style.tsx


const Wrapper = external_styled_components_default.a.label.withConfig({
  displayName: "payment-cardstyle__Wrapper",
  componentId: "sc-5cxqfg-0"
})(["cursor:pointer;position:relative;display:flex;padding:0 10px;width:100%;> input{position:absolute;top:0;left:0;opacity:0;&:checked{& ~ .payment-card{border-color:", ";}}}&:hover{.card-remove-btn{opacity:1;}}"], Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const PaymentCardWrapper = external_styled_components_default.a.span.withConfig({
  displayName: "payment-cardstyle__PaymentCardWrapper",
  componentId: "sc-5cxqfg-1"
})(["display:flex;width:100%;flex-direction:column;position:relative;background-color:", ";padding:15px 20px;border-radius:", ";border-width:1px;border-style:solid;border-color:", ";"], props => props.color || '#e4f4fc', Object(theme_get_["themeGet"])('radii.base', '6px'), props => props.color || '#e4f4fc');
const CardLogo = external_styled_components_default.a.span.withConfig({
  displayName: "payment-cardstyle__CardLogo",
  componentId: "sc-5cxqfg-2"
})(["margin-bottom:17px;display:block;img{max-width:100%;height:14px;display:block;}"]);
const CardNumber = external_styled_components_default.a.span.withConfig({
  displayName: "payment-cardstyle__CardNumber",
  componentId: "sc-5cxqfg-3"
})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:9px;span{font-size:calc(", "px - 1px);font-weight:", ";color:", ";line-height:1.25;&.card-number{font-size:", "px;}}"], Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('fontSizes.xs', '12'));
const CardNumTitle = external_styled_components_default.a.span.withConfig({
  displayName: "payment-cardstyle__CardNumTitle",
  componentId: "sc-5cxqfg-4"
})(["font-size:calc(", "px - 5px);font-weight:", ";color:", ";display:block;margin-bottom:11px;"], Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798C'));
const Name = external_styled_components_default.a.span.withConfig({
  displayName: "payment-cardstyle__Name",
  componentId: "sc-5cxqfg-5"
})(["font-size:", "px;font-weight:", ";color:", ";display:block;"], Object(theme_get_["themeGet"])('fontSizes.xs', '12'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const DeleteButton = external_styled_components_default.a.span.withConfig({
  displayName: "payment-cardstyle__DeleteButton",
  componentId: "sc-5cxqfg-6"
})(["display:flex;align-items:center;justify-content:center;border:0;width:18px;height:18px;border-radius:50%;overflow:hidden;cursor:pointer;outline:0;padding:0;color:#fff;background-color:", ";position:absolute;top:10px;right:20px;z-index:9;opacity:0;transition:0.2s ease-in-out;svg{display:block;width:8px;height:auto;}"], Object(theme_get_["themeGet"])('colors.secondary.regular', '#ff5b60'));
// CONCATENATED MODULE: ./src/components/payment-card/card.tsx
var __jsx = external_react_default.a.createElement;






const Card = ({
  id,
  name,
  cardType,
  lastFourDigit,
  color
}) => {
  const logo = cardType === 'paypal' && paypal_default.a || cardType === 'master' && master_card_default.a || cardType === 'visa' && visa_default.a;
  return __jsx(PaymentCardWrapper, {
    className: "payment-card",
    color: color
  }, __jsx(CardLogo, null, __jsx("img", {
    src: logo,
    alt: `card-${id}`
  })), __jsx(CardNumTitle, null, "Card Number"), __jsx(CardNumber, null, __jsx("span", null, "****"), __jsx("span", null, "****"), __jsx("span", null, "****"), __jsx("span", {
    className: "card-number"
  }, lastFourDigit)), __jsx(Name, null, name));
};

/* harmony default export */ var card = (Card);
// EXTERNAL MODULE: ./src/assets/icons/CloseIcon.tsx
var CloseIcon = __webpack_require__("2nMb");

// CONCATENATED MODULE: ./src/components/payment-card/payment-card.tsx
var payment_card_jsx = external_react_default.a.createElement;





const PaymentCard = ({
  className,
  onChange,
  onDelete,
  name,
  id,
  cardType,
  lastFourDigit,
  type,
  color
}) => {
  function handleChange() {
    onChange();
  }

  function handleDelete() {
    onDelete();
  }

  return payment_card_jsx(Wrapper, {
    htmlFor: `payment-card-${id}`,
    className: `payment-card-radio ${className ? className : ''}`
  }, payment_card_jsx("input", {
    type: "radio",
    id: `payment-card-${id}`,
    name: name,
    value: `payment-card-${id}`,
    onChange: handleChange,
    checked: type === 'primary'
  }), payment_card_jsx(card, {
    id: `card-${id}`,
    cardType: cardType,
    lastFourDigit: lastFourDigit,
    color: color,
    name: name
  }), payment_card_jsx(DeleteButton // type="submit"
  , {
    onClick: handleDelete,
    className: "card-remove-btn"
  }, payment_card_jsx(CloseIcon["a" /* CloseIcon */], null)));
};

/* harmony default export */ var payment_card = (PaymentCard);
// EXTERNAL MODULE: ./src/assets/icons/PlusMinus.tsx
var PlusMinus = __webpack_require__("OeMJ");

// EXTERNAL MODULE: ./src/components/button/button.tsx
var button_button = __webpack_require__("B68Z");

// CONCATENATED MODULE: ./src/components/payment-group/payment-group.style.tsx


const Header = external_styled_components_default.a.header.withConfig({
  displayName: "payment-groupstyle__Header",
  componentId: "sc-7ryf95-0"
})(["display:flex;justify-content:space-between;align-items:center;margin-top:-15px;.addCard{font-family:", ";font-size:", "px;font-weight:", ";color:", ";}"], Object(theme_get_["themeGet"])('fonts.body', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const PaymentCardList = external_styled_components_default.a.div.withConfig({
  displayName: "payment-groupstyle__PaymentCardList",
  componentId: "sc-7ryf95-1"
})(["margin-top:15px;margin-left:-10px;margin-right:-10px;position:relative;@media (max-width:500px){flex-direction:column;}.prevButton{left:-10px;}.nextButton{right:-10px;}@media (max-width:500px){.prevButton{left:-10px;}.nextButton{right:-10px;}}"]);
const IconWrapper = external_styled_components_default.a.span.withConfig({
  displayName: "payment-groupstyle__IconWrapper",
  componentId: "sc-7ryf95-2"
})(["margin-right:6px;"]);
const SavedCard = external_styled_components_default.a.span.withConfig({
  displayName: "payment-groupstyle__SavedCard",
  componentId: "sc-7ryf95-3"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";display:block;"], Object(theme_get_["themeGet"])('fonts.body', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const Arrow = external_styled_components_default.a.button.withConfig({
  displayName: "payment-groupstyle__Arrow",
  componentId: "sc-7ryf95-4"
})(["width:30px;height:30px;background-color:rgba(0,0,0,0.25);border:0;outline:0;box-shadow:none;display:flex;align-items:center;justify-content:center;color:", ";position:absolute;top:50%;margin-top:-15px;padding:0;border-radius:50%;&.arrowLeft{left:10px;}&.arrowRight{right:10px;}"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'));
const AddCard = external_styled_components_default.a.div.withConfig({
  displayName: "payment-groupstyle__AddCard",
  componentId: "sc-7ryf95-5"
})(["flex:105px;max-width:105px;flex-shrink:0;display:flex;flex-direction:column;@media (max-width:500px){margin-top:15px;}.reusecore__button{flex-grow:1;height:auto;border:1px dashed ", ";border-radius:", ";padding:0 5px;flex-direction:column;svg{width:18px;height:auto;}.btn-icon{margin-bottom:5px;}&:hover{border-color:", ";}}.safe-label{font-family:", ";font-size:", "px;font-weight:", ";color:", ";display:flex;align-items:center;justify-content:flex-end;margin-bottom:10px;> svg{fill:currentColor;margin-right:4px;}}"], Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'), Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('fonts.body', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798C'));
const OtherPayOption = external_styled_components_default.a.div.withConfig({
  displayName: "payment-groupstyle__OtherPayOption",
  componentId: "sc-7ryf95-6"
})(["margin-top:15px;display:flex;align-items:stretch;.other-pay-radio{flex-grow:1;flex:50%;max-width:50%;span{display:block;border-radius:", ";background-color:", ";border:1px solid ", ";text-align:center;padding:12px 20px;cursor:pointer;color:", ";font-size:calc(", "px - 1px);line-height:24px;font-weight:", ";-webkit-transition:all 0.25s ease;transition:all 0.25s ease;}input{position:absolute;top:0;left:0;opacity:0;&:checked{& ~ span{border-color:", ";background-color:", ";}}}&.cash-on-delivery{margin-left:15px;}}"], Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('colors.gray.200', '#F7F7F7'), Object(theme_get_["themeGet"])('colors.gray.200', '#F7F7F7'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'));
const payment_group_style_DeleteButton = external_styled_components_default.a.button.withConfig({
  displayName: "payment-groupstyle__DeleteButton",
  componentId: "sc-7ryf95-7"
})(["display:flex;align-items:center;justify-content:center;border:0;width:20px;height:20px;border-radius:50%;overflow:hidden;cursor:pointer;outline:0;padding:0;color:", ";background-color:", ";position:absolute;top:10px;right:10px;z-index:9;opacity:0;transition:0.2s ease-in-out;svg{display:block;width:8px;height:auto;}"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.secondary.regular', '#ff5b60'));
// CONCATENATED MODULE: ./src/components/payment-group/payment-group.tsx
var payment_group_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const PaymentGroup = ({
  items,
  deviceType,
  className,
  name,
  onChange,
  onEditDeleteField,
  handleAddNewCard
}) => {
  // RadioGroup State
  // Handle onChange Func
  const handleChange = item => {
    onChange(item);
  };

  return payment_group_jsx(external_react_default.a.Fragment, null, payment_group_jsx(Header, null, items.length !== 0 && payment_group_jsx(SavedCard, null, payment_group_jsx(external_react_intl_["FormattedMessage"], {
    id: "savedCardsId",
    defaultMessage: "Saved Cards"
  })), payment_group_jsx(button_button["a" /* Button */], {
    variant: "text",
    type: "button",
    onClick: handleAddNewCard,
    className: "addCard"
  }, payment_group_jsx(IconWrapper, null, payment_group_jsx(PlusMinus["b" /* Plus */], {
    width: "10px"
  })), payment_group_jsx(external_react_intl_["FormattedMessage"], {
    id: "addCardBtn",
    defaultMessage: "Add Card"
  }))), payment_group_jsx(PaymentCardList, null, payment_group_jsx(carousel["a" /* default */], {
    deviceType: deviceType,
    autoPlay: false,
    infinite: false,
    data: items,
    component: item => payment_group_jsx(payment_card, _extends({
      key: item.id,
      onChange: () => handleChange(item),
      onDelete: () => onEditDeleteField(item, 'delete')
    }, item))
  })), items.mobileWallet === true || items.cashOnDelivery === true ? payment_group_jsx(OtherPayOption, null, items.mobileWallet === true ? payment_group_jsx("label", {
    htmlFor: "mobile-wallet",
    key: "${name}-mobile-wa",
    className: "other-pay-radio"
  }, payment_group_jsx("input", {
    type: "radio",
    id: "mobile-wallet",
    name: name,
    value: "mobile-wallet",
    onChange: handleChange
  }), payment_group_jsx("span", null, "Mobile Wallet")) : '', items.cashOnDelivery === true ? payment_group_jsx("label", {
    htmlFor: "cash-on-delivery",
    key: "${name}-cash",
    className: "other-pay-radio cash-on-delivery"
  }, payment_group_jsx("input", {
    type: "radio",
    id: "cash-on-delivery",
    name: name,
    value: "cash-on-delivery",
    onChange: handleChange
  }), payment_group_jsx("span", null, "Cash On Delivery")) : '') : '');
};

/* harmony default export */ var payment_group = __webpack_exports__["a"] = (PaymentGroup);

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

/***/ "ulNG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CustomCarousel; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-multi-carousel"
var external_react_multi_carousel_ = __webpack_require__("99J/");
var external_react_multi_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_multi_carousel_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/assets/icons/ArrowNext.tsx
var __jsx = external_react_default.a.createElement;

const ArrowNext = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: "20"
  }, __jsx("path", {
    d: "M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z",
    fill: "currentColor",
    stroke: "currentColor"
  }));
};
// EXTERNAL MODULE: ./src/assets/icons/ArrowPrev.tsx
var ArrowPrev = __webpack_require__("KclG");

// EXTERNAL MODULE: ./src/contexts/language/language.provider.tsx + 2 modules
var language_provider = __webpack_require__("uiyz");

// CONCATENATED MODULE: ./src/components/carousel/carousel.tsx
var carousel_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const ButtonPrev = external_styled_components_default()('button').withConfig({
  displayName: "carousel__ButtonPrev",
  componentId: "sdn1m3-0"
})(["height:40px;width:40px;display:flex;align-items:center;justify-content:center;background-color:", ";color:", ";padding:0;border-radius:20px;box-shadow:", ";border:0;outline:0;cursor:pointer;position:absolute;top:50%;left:40px;margin-top:-20px;z-index:99;"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009E7F'), Object(theme_get_["themeGet"])('shadows.base', '0 3px 6px rgba(0, 0, 0, 0.16)'));
const ButtonNext = external_styled_components_default()('button').withConfig({
  displayName: "carousel__ButtonNext",
  componentId: "sdn1m3-1"
})(["height:40px;width:40px;display:flex;align-items:center;justify-content:center;background-color:#ffffff;color:", ";padding:0;border-radius:20px;box-shadow:", ";border:0;outline:0;cursor:pointer;position:absolute;top:50%;right:40px;margin-top:-20px;z-index:99;"], Object(theme_get_["themeGet"])('colors.primary.regular', '#009E7F'), Object(theme_get_["themeGet"])('shadows.base', '0 3px 6px rgba(0, 0, 0, 0.16)'));
const ButtonGroupWrapper = external_styled_components_default()('div').withConfig({
  displayName: "carousel__ButtonGroupWrapper",
  componentId: "sdn1m3-2"
})([""]);

const PrevButton = ({
  onClick,
  children
}) => {
  return carousel_jsx(ButtonPrev, {
    onClick: e => {
      e.preventDefault();
      onClick();
    },
    className: "prevButton"
  }, children);
};

const NextButton = ({
  onClick,
  children
}) => {
  return carousel_jsx(ButtonNext, {
    onClick: e => {
      e.preventDefault();
      onClick();
    },
    className: "nextButton"
  }, children);
};

const ButtonGroup = ({
  next,
  previous
}) => {
  const {
    isRtl
  } = Object(language_provider["b" /* useLocale */])();
  return carousel_jsx(ButtonGroupWrapper, null, isRtl ? carousel_jsx(external_react_default.a.Fragment, null, carousel_jsx(NextButton, {
    onClick: () => next(),
    className: "rtl"
  }, carousel_jsx(ArrowPrev["a" /* ArrowPrev */], null)), carousel_jsx(PrevButton, {
    onClick: () => previous()
  }, carousel_jsx(ArrowNext, null))) : carousel_jsx(external_react_default.a.Fragment, null, carousel_jsx(PrevButton, {
    onClick: () => previous()
  }, carousel_jsx(ArrowPrev["a" /* ArrowPrev */], null)), carousel_jsx(NextButton, {
    onClick: () => next()
  }, carousel_jsx(ArrowNext, null))));
};

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 2
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1
  }
};
function CustomCarousel(_ref) {
  let {
    data,
    deviceType: {
      mobile,
      tablet,
      desktop
    },
    component,
    autoPlay = false,
    infinite = true,
    customLeftArrow,
    customRightArrow,
    itemClass,
    isRtl
  } = _ref,
      props = _objectWithoutProperties(_ref, ["data", "deviceType", "component", "autoPlay", "infinite", "customLeftArrow", "customRightArrow", "itemClass", "isRtl"]);

  return carousel_jsx("div", {
    dir: "ltr"
  }, carousel_jsx(external_react_multi_carousel_default.a, _extends({
    arrows: false,
    responsive: responsive,
    showDots: false,
    slidesToSlide: 1,
    infinite: infinite,
    containerClass: "container-with-dots",
    itemClass: itemClass,
    autoPlay: autoPlay,
    autoPlaySpeed: 3000,
    renderButtonGroupOutside: true,
    additionalTransfrom: 0,
    customButtonGroup: carousel_jsx(ButtonGroup, null)
  }, props), data.map((item, index) => {
    if (component) return component(item);
    return carousel_jsx("div", {
      style: {
        padding: '0 15px',
        overflow: 'hidden'
      },
      key: index
    }, carousel_jsx("a", {
      href: item.link,
      style: {
        display: 'flex',
        cursor: 'pointer'
      }
    }, carousel_jsx("img", {
      key: item.id,
      src: item.imgSrc,
      alt: item.alt,
      style: {
        width: '100%',
        height: '100%',
        display: 'block',
        position: 'relative'
      }
    })));
  })));
}

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "wiMN":
/***/ (function(module, exports) {

module.exports = require("localforage");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "xoY3":
/***/ (function(module, exports) {

module.exports = require("stylis-plugin-rtl");

/***/ }),

/***/ "yR3f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_LOGGED_IN_CUSTOMER; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const GET_LOGGED_IN_CUSTOMER = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getUser($id: String = "1") {
    me(id: $id) {
      id
      name
      email
      address {
        id
        type
        name
        info
      }
      contact {
        id
        type
        number
      }
      card {
        id
        type
        cardType
        name
        lastFourDigit
      }
    }
  }
`;

/***/ }),

/***/ "z5ly":
/***/ (function(module, exports) {

module.exports = require("@stripe/react-stripe-js");

/***/ })

/******/ });