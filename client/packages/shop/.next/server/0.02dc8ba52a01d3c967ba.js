exports.ids = [0];
exports.modules = {

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

/***/ "8XX/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./src/assets/icons/category-icons.ts
var category_icons_namespaceObject = {};
__webpack_require__.r(category_icons_namespaceObject);
__webpack_require__.d(category_icons_namespaceObject, "Accessories", function() { return Accessories; });
__webpack_require__.d(category_icons_namespaceObject, "FruitsVegetable", function() { return FruitsVegetable["a" /* FruitsVegetable */]; });
__webpack_require__.d(category_icons_namespaceObject, "MeatFish", function() { return MeatFish; });
__webpack_require__.d(category_icons_namespaceObject, "Purse", function() { return Purse; });
__webpack_require__.d(category_icons_namespaceObject, "HandBags", function() { return HandBags; });
__webpack_require__.d(category_icons_namespaceObject, "ShoulderBags", function() { return ShoulderBags; });
__webpack_require__.d(category_icons_namespaceObject, "Wallet", function() { return Wallet; });
__webpack_require__.d(category_icons_namespaceObject, "LaptopBags", function() { return LaptopBags; });
__webpack_require__.d(category_icons_namespaceObject, "WomenDress", function() { return WomenDress; });
__webpack_require__.d(category_icons_namespaceObject, "OuterWear", function() { return OuterWear; });
__webpack_require__.d(category_icons_namespaceObject, "Pants", function() { return Pants; });
__webpack_require__.d(category_icons_namespaceObject, "Tops", function() { return Tops; });
__webpack_require__.d(category_icons_namespaceObject, "Skirts", function() { return Skirts; });
__webpack_require__.d(category_icons_namespaceObject, "Shirts", function() { return Shirts; });
__webpack_require__.d(category_icons_namespaceObject, "Face", function() { return Face; });
__webpack_require__.d(category_icons_namespaceObject, "Eyes", function() { return Eyes; });
__webpack_require__.d(category_icons_namespaceObject, "Lips", function() { return Lips; });
__webpack_require__.d(category_icons_namespaceObject, "Snacks", function() { return Snacks; });
__webpack_require__.d(category_icons_namespaceObject, "PetCare", function() { return PetCare; });
__webpack_require__.d(category_icons_namespaceObject, "HomeCleaning", function() { return HomeCleaning; });
__webpack_require__.d(category_icons_namespaceObject, "Dairy", function() { return Dairy; });
__webpack_require__.d(category_icons_namespaceObject, "Cooking", function() { return Cooking; });
__webpack_require__.d(category_icons_namespaceObject, "Breakfast", function() { return Breakfast; });
__webpack_require__.d(category_icons_namespaceObject, "Beverage", function() { return Beverage; });
__webpack_require__.d(category_icons_namespaceObject, "BeautyHealth", function() { return BeautyHealth; });
__webpack_require__.d(category_icons_namespaceObject, "ShavingNeeds", function() { return ShavingNeeds; });
__webpack_require__.d(category_icons_namespaceObject, "OralCare", function() { return OralCare; });
__webpack_require__.d(category_icons_namespaceObject, "FacialCare", function() { return FacialCare["a" /* FacialCare */]; });
__webpack_require__.d(category_icons_namespaceObject, "Deodorant", function() { return Deodorant; });
__webpack_require__.d(category_icons_namespaceObject, "BathOil", function() { return BathOil; });
__webpack_require__.d(category_icons_namespaceObject, "Minus", function() { return Minus; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: /home/arafat/codes/pickbazar/client/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "react-stickynode"
var external_react_stickynode_ = __webpack_require__("isz7");
var external_react_stickynode_default = /*#__PURE__*/__webpack_require__.n(external_react_stickynode_);

// EXTERNAL MODULE: external "react-custom-scrollbars"
var external_react_custom_scrollbars_ = __webpack_require__("qC9r");

// EXTERNAL MODULE: ./src/components/popover/popover.tsx + 2 modules
var popover = __webpack_require__("63jn");

// CONCATENATED MODULE: ./src/assets/icons/ArrowDropDown.tsx
var __jsx = external_react_default.a.createElement;

const ArrowDropDown = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "5",
    viewBox: "0 0 10 5"
  }, __jsx("path", {
    "data-name": "Path 2030",
    d: "M0,63.75l5,5,5-5Z",
    transform: "translate(0 -63.75)",
    fill: "currentColor"
  }));
};
// CONCATENATED MODULE: ./src/assets/icons/CategoryIcon.tsx
var CategoryIcon_jsx = external_react_default.a.createElement;

const CategoryIcon = () => {
  return CategoryIcon_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    viewBox: "0 0 14 14"
  }, CategoryIcon_jsx("path", {
    "data-name": "Path 2029",
    d: "M13.563,7.876H8.313a.437.437,0,0,0-.437.437v5.25A.437.437,0,0,0,8.313,14h5.25A.437.437,0,0,0,14,13.564V8.314A.437.437,0,0,0,13.563,7.876Zm0-7.875H8.313a.437.437,0,0,0-.437.437v5.25a.437.437,0,0,0,.437.437h5.25A.437.437,0,0,0,14,5.688V.438A.437.437,0,0,0,13.563,0ZM5.687,0H.437A.438.438,0,0,0,0,.438v5.25a.437.437,0,0,0,.437.437h5.25a.437.437,0,0,0,.437-.437V.438A.438.438,0,0,0,5.687,0Zm0,7.875H.437A.437.437,0,0,0,0,8.314v5.25A.437.437,0,0,0,.437,14h5.25a.437.437,0,0,0,.437-.437V8.314A.437.437,0,0,0,5.687,7.876Z",
    transform: "translate(0 -0.001)",
    fill: "currentColor"
  }));
};
// EXTERNAL MODULE: ./src/contexts/language/language.provider.tsx + 2 modules
var language_provider = __webpack_require__("uiyz");

// EXTERNAL MODULE: ./src/contexts/app/app.provider.ts + 2 modules
var app_provider = __webpack_require__("xZKy");

// EXTERNAL MODULE: ./src/components/placeholder/placeholder.tsx
var placeholder = __webpack_require__("Sagj");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/layouts/sidebar/sidebar.style.tsx


const Fade = Object(external_styled_components_["keyframes"])(["from{opacity:0;}to{opacity:1;}"]);
const PopoverWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "sidebarstyle__PopoverWrapper",
  componentId: "sc-1r07hi6-0"
})(["@media (min-width:991px){display:none;}.popover-handler{display:block;padding:15px;cursor:pointer;}.popover-content{position:relative;top:auto;left:auto;right:auto;border-radius:0;box-shadow:none;padding:25px 35px;border-top:1px solid ", ";&::before{display:none;}.category-dropdown{animation:", " 0.6s;}@media (max-width:990px){padding:25px;}}"], Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'), Fade);
const RequestMedicine = external_styled_components_default.a.span.withConfig({
  displayName: "sidebarstyle__RequestMedicine",
  componentId: "sc-1r07hi6-1"
})(["width:100%;height:50px;display:flex;align-items:center;margin-bottom:20px;padding-left:50px;background-color:", ";font-size:calc(", " - 1px);font-weight:", ";color:", ";cursor:pointer;@media (max-width:990px){justify-content:center;padding:0;border-radius:", ";}"], Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('fontSizes.base', '15px'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('radii.base', '6px'));
const SidebarWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "sidebarstyle__SidebarWrapper",
  componentId: "sc-1r07hi6-2"
})(["padding:45px 0px;padding-top:35px;padding-right:0;@media (max-width:1199px){padding:40px 0px;padding-right:0;}@media (max-width:990px){display:none;padding:0;}"]);
const CategoryWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "sidebarstyle__CategoryWrapper",
  componentId: "sc-1r07hi6-3"
})(["position:relative;width:100%;"]);
const TreeWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "sidebarstyle__TreeWrapper",
  componentId: "sc-1r07hi6-4"
})(["padding-left:50px;padding-right:20px;"]);
const PopoverHandler = external_styled_components_default.a.div.withConfig({
  displayName: "sidebarstyle__PopoverHandler",
  componentId: "sc-1r07hi6-5"
})(["font-size:calc(", " - 1px);font-weight:", ";color:", ";display:flex;align-items:center;justify-content:space-between;> div{display:flex;align-items:center;&:first-child{flex-grow:1;svg{margin-right:10px;}}&:last-child{color:", ";}}"], Object(theme_get_["themeGet"])('fontSizes.base', '15px'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const Loading = external_styled_components_default.a.div.withConfig({
  displayName: "sidebarstyle__Loading",
  componentId: "sc-1r07hi6-6"
})(["width:100%;padding:10px;display:flex;align-items:center;justify-content:center;font-size:calc(", " - 1px);color:", ";"], Object(theme_get_["themeGet"])('fontSizes.base', '15px'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
// EXTERNAL MODULE: external "resize-observer-polyfill"
var external_resize_observer_polyfill_ = __webpack_require__("ocwR");
var external_resize_observer_polyfill_default = /*#__PURE__*/__webpack_require__.n(external_resize_observer_polyfill_);

// CONCATENATED MODULE: ./src/utils/hooks.tsx


function usePrevious(value) {
  const ref = Object(external_react_["useRef"])();
  Object(external_react_["useEffect"])(() => void (ref.current = value), [value]);
  return ref.current;
}
function useMeasure() {
  const ref = Object(external_react_["useRef"])();
  const {
    0: bounds,
    1: set
  } = Object(external_react_["useState"])({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  });
  const {
    0: ro
  } = Object(external_react_["useState"])(() => new external_resize_observer_polyfill_default.a(([entry]) => set(entry.contentRect)));
  Object(external_react_["useEffect"])(() => {
    if (ref.current) ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  return [{
    ref
  }, bounds];
}
// EXTERNAL MODULE: external "react-spring"
var external_react_spring_ = __webpack_require__("KwCx");

// EXTERNAL MODULE: external "@styled-system/css"
var css_ = __webpack_require__("ExBD");
var css_default = /*#__PURE__*/__webpack_require__.n(css_);

// CONCATENATED MODULE: ./src/components/tree-menu/tree-menu.style.tsx



const Header = external_styled_components_default.a.header.withConfig({
  displayName: "tree-menustyle__Header",
  componentId: "v82zw4-0"
})(props => css_default()({
  fontSize: props.depth === 'parent' ? ['base'] : ['sm'],
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  marginBottom: props.depth === 'parent' ? 12 : 0,
  color: props.depth === 'parent' ? props.open ? 'primary.regular' : 'text.bold' : props.open ? 'primary.regular' : 'text.regular',
  cursor: 'pointer',
  transition: '0.15s ease-in-out',
  '&:hover': {
    color: 'primary.regular'
  }
}), {
  padding: '5px 0',
  outline: 0
});
const IconWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "tree-menustyle__IconWrapper",
  componentId: "v82zw4-1"
})(props => css_default()({
  width: props.depth === 'child' ? 10 : 16,
  marginRight: props.depth === 'child' ? '8px' : 15,
  svg: {
    width: '100%',
    height: props.depth === 'child' ? '2px' : 'auto'
  }
}), {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  flexShrink: 0
});
const Title = external_styled_components_default.a.span.withConfig({
  displayName: "tree-menustyle__Title",
  componentId: "v82zw4-2"
})({
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  overflow: 'hidden'
});
const Content = external_styled_components_default()(external_react_spring_["animated"].div).withConfig({
  displayName: "tree-menustyle__Content",
  componentId: "v82zw4-3"
})({
  willChange: 'transform, opacity, height',
  borderLeft: 0,
  overflow: 'hidden'
});
const Frame = external_styled_components_default.a.div.withConfig({
  displayName: "tree-menustyle__Frame",
  componentId: "v82zw4-4"
})(props => css_default()({
  marginBottom: props.depth === 'parent' ? 15 : 10,
  paddingLeft: props.depth === 'child' ? 32 : 0
}), {
  position: 'relative',
  overflowX: 'hidden'
});
// CONCATENATED MODULE: ./src/assets/icons/Accessories.tsx
var Accessories_jsx = external_react_default.a.createElement;

const Accessories = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return Accessories_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, Accessories_jsx("g", {
    "data-name": "Group 15",
    fill: color
  }, Accessories_jsx("path", {
    "data-name": "Path 53",
    d: "M17.356 0H.643A.643.643 0 000 .643v10.925a.643.643 0 00.643.643h16.714a.643.643 0 00.643-.643V.643A.644.644 0 0017.356 0zM2.431 11.27a1.306 1.306 0 111.306-1.306 1.306 1.306 0 01-1.306 1.306zm0-3.857a1.305 1.305 0 11.924-.382 1.306 1.306 0 01-.924.382zm0-3.857a1.306 1.306 0 11.925-.384 1.306 1.306 0 01-.925.384zm3.218 7.714a1.307 1.307 0 11.922-.382 1.306 1.306 0 01-.922.382zm0-3.857a1.307 1.307 0 11.922-.381 1.306 1.306 0 01-.922.381zm0-3.857a1.307 1.307 0 11.92-.385 1.306 1.306 0 01-.92.385zm3.218 7.714a1.09 1.09 0 10-.008 0zm0-3.857a1.091 1.091 0 10-.008 0zm0-3.857a1.091 1.091 0 10-.008 0zm3.218 7.714a1.1 1.1 0 10-.012 0zm-1.306-5.166a.525.525 0 11-.012 0zm1.306-2.551a1.571 1.571 0 10-.012 0zm4.8 7c0 .355-.412.643-.921.643H15.5c-.508 0-.921-.288-.921-.643V1.768c0-.355.412-.643.921-.643h.461c.508 0 .921.288.921.643z"
  }), Accessories_jsx("path", {
    "data-name": "Path 54",
    d: "M16.348 2.78c-.318-1.052-.434-.893-.476-1.186-.013-.1-.346-.095-.351 0-.017.261-.15.378-.365.888-.236.562-.193 1 0 1.186h-.069v2.52a.274.274 0 00-.085.2v4.2h1.445v-4.2a.273.273 0 00-.085-.2V3.684c.106-.13.143-.393-.014-.904zm-.29 3.134h-.672V3.971h.67z"
  }), Accessories_jsx("path", {
    "data-name": "Path 55",
    d: "M2.43 1.246a1 1 0 101 1 1 1 0 00-1-1z"
  }), Accessories_jsx("path", {
    "data-name": "Path 56",
    d: "M12.073 1.246a1 1 0 101 1 1 1 0 00-1-1z"
  }), Accessories_jsx("path", {
    "data-name": "Path 57",
    d: "M8.859 5.103a1 1 0 101 1 1 1 0 00-1-1z"
  }), Accessories_jsx("path", {
    "data-name": "Path 58",
    d: "M5.645 8.96a1 1 0 101 1 1 1 0 00-1-1z"
  }), Accessories_jsx("path", {
    "data-name": "Path 59",
    d: "M12.073 8.96a1 1 0 101 1 1 1 0 00-1-1z"
  })));
};
// EXTERNAL MODULE: ./src/assets/icons/FruitsVegetable.tsx
var FruitsVegetable = __webpack_require__("pQO/");

// CONCATENATED MODULE: ./src/assets/icons/MeatFish.tsx
var MeatFish_jsx = external_react_default.a.createElement;

const MeatFish = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return MeatFish_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, MeatFish_jsx("g", {
    "data-name": "Layer 2"
  }, MeatFish_jsx("g", {
    "data-name": "Layer 1"
  }, MeatFish_jsx("path", {
    "data-name": "Path 31",
    d: "M9.976 12.775c-3.038-.539-8.7-1.222-9.868-4.621h.008C-.977 5.471 5.959-1.484 8.663.284a2.2 2.2 0 011.139 1.685c.058 1.832-1.961 4.468-4.123 6.1 2.183-1.393 4.262-4.117 4.643-6.1a9.461 9.461 0 011.014 9.288c1.112 1.079 2.5 2.252 3.735 2.053a1.566 1.566 0 011.868 1.437 1.49 1.49 0 01-.662 1.445 1.394 1.394 0 01-.877.2 1.34 1.34 0 01-.143.82 1.621 1.621 0 01-3-1c.117-1.248-1.117-2.45-2.279-3.435zM6.212 2.807c.983.643-2.222 3.936-3.21 3.293s2.226-3.936 3.21-3.293zM8.302.936c2.58 1.689-4.417 9.1-7 7.415s4.417-9.1 7-7.415zm3.072 11.145l-1.6-.155c1.211 1.034 3.237 2.4 3.062 4.271-.161 1.724 2.284 1.5 1.988.126a.4.4 0 01.475-.5c1.417.243 1.47-2.216-.184-1.949-1.318.21-2.647-.774-3.747-1.793z",
    fill: color,
    fillRule: "evenodd"
  }))));
};
// CONCATENATED MODULE: ./src/assets/icons/Purse.tsx
var Purse_jsx = external_react_default.a.createElement;

const Purse = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return Purse_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, Purse_jsx("g", {
    "data-name": "Group 2"
  }, Purse_jsx("g", {
    "data-name": "Group 1",
    fill: color,
    stroke: "#fff",
    strokeMiterlimit: "10",
    strokeWidth: ".091",
    transform: "translate(-85.169 -7.348)"
  }, Purse_jsx("path", {
    "data-name": "Path 1",
    d: "M98.946 11.381l.217-.061a5.124 5.124 0 00-.6-1.341 11.3 11.3 0 00-1.04-1.279 4.724 4.724 0 00-.93-.679l-.269-.143a3.735 3.735 0 00-.88-.323 5.437 5.437 0 00-1.274-.167l-.317.014a5.3 5.3 0 00-.957.152c-.1.024-.2.061-.3.092a5.009 5.009 0 00-.846.374 4.734 4.734 0 00-.93.679 5.709 5.709 0 00-1.639 2.615l.217.061.217.061a4.7 4.7 0 01.972-1.8 5.106 5.106 0 01.6-.508 4.982 4.982 0 01.874-.521 5.2 5.2 0 011.018-.35 5.315 5.315 0 011.1-.123 5.5 5.5 0 011.1.123 5.2 5.2 0 011.018.35 4.99 4.99 0 01.874.521 5.066 5.066 0 01.585.5 4.7 4.7 0 01.982 1.806z"
  }), Purse_jsx("path", {
    "data-name": "Path 2",
    d: "M93.787 22.392a22.149 22.149 0 01-8.561-1.727l3.3-9.285h11.282l3.3 9.285a22.149 22.149 0 01-8.561 1.727z"
  }), Purse_jsx("path", {
    "data-name": "Path 3",
    d: "M88.531 11.381l-1.353 3.8a17.645 17.645 0 006.609 1.351h.765a17.643 17.643 0 006.609-1.351l-1.353-3.8z"
  }), Purse_jsx("path", {
    "data-name": "Path 4",
    d: "M88.531 11.23l-1.225 3.442a14.059 14.059 0 006.481 1.71h.765a14.059 14.059 0 006.481-1.71l-1.224-3.442z"
  }), Purse_jsx("rect", {
    "data-name": "Rectangle 26",
    width: "2.01",
    height: "2.01",
    rx: ".672",
    transform: "rotate(-44.999 66.026 -103.976)"
  }), Purse_jsx("path", {
    "data-name": "Path 5",
    d: "M101.162 15.182h0l-.173-.486a14.034 14.034 0 01-6.436 1.687h-.273v.15h.272a17.649 17.649 0 006.61-1.351z"
  }), Purse_jsx("rect", {
    "data-name": "Rectangle 27",
    width: "2.01",
    height: "2.01",
    rx: ".672",
    transform: "rotate(-44.999 66.026 -103.976)"
  }), Purse_jsx("rect", {
    "data-name": "Rectangle 28",
    width: "1.5",
    height: "1.5",
    rx: ".501",
    transform: "rotate(-44.999 66.206 -104.411)"
  }))));
};
// CONCATENATED MODULE: ./src/assets/icons/HandBags.tsx
var HandBags_jsx = external_react_default.a.createElement;

const HandBags = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return HandBags_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, HandBags_jsx("g", {
    "data-name": "Group 11"
  }, HandBags_jsx("g", {
    "data-name": "Group 10",
    fill: color,
    stroke: "#fff",
    strokeMiterlimit: "10",
    strokeWidth: ".091"
  }, HandBags_jsx("path", {
    "data-name": "Path 45",
    d: "M17.954 7.253v8.585a1.791 1.791 0 01-1.791 1.791H1.836a1.791 1.791 0 01-1.791-1.791V7.253c0-.988 17.909-.988 17.909 0z"
  }), HandBags_jsx("path", {
    "data-name": "Rectangle 36",
    d: "M.102 8.77h17.795v.913H.102z"
  }), HandBags_jsx("path", {
    "data-name": "Path 46",
    d: "M4.793 7.253C4.976 4.061 7.113.614 9 .614c2.41 0 4.049 3.84 4.207 6.639h.572C13.618 4.168 11.791.044 8.999.044c-1.131 0-2.338.922-3.312 2.529a10.463 10.463 0 00-1.466 4.68z"
  }))));
};
// CONCATENATED MODULE: ./src/assets/icons/ShoulderBags.tsx
var ShoulderBags_jsx = external_react_default.a.createElement;

const ShoulderBags = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return ShoulderBags_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, ShoulderBags_jsx("g", {
    "data-name": "Group 3",
    transform: "translate(-100.548 -66.187)",
    fill: color,
    stroke: "#fff",
    strokeMiterlimit: "10",
    strokeWidth: ".076"
  }, ShoulderBags_jsx("path", {
    "data-name": "Path 6",
    d: "M105.083 69.531l-.917.243-.848-3.195a.149.149 0 01.068-.166h0a1.343 1.343 0 01.708-.188h0a.149.149 0 01.141.111z"
  }), ShoulderBags_jsx("path", {
    "data-name": "Path 7",
    d: "M104.167 69.774l-.917.243-.848-3.195a.149.149 0 01.068-.166h0a1.342 1.342 0 01.708-.188h0a.149.149 0 01.141.111z"
  }), ShoulderBags_jsx("path", {
    "data-name": "Path 8",
    d: "M106.5 69.531l.917.243.848-3.195a.149.149 0 00-.068-.166h0a1.343 1.343 0 00-.708-.188h0a.149.149 0 00-.141.111z"
  }), ShoulderBags_jsx("path", {
    "data-name": "Path 9",
    d: "M107.421 69.774l.917.243.848-3.195a.149.149 0 00-.068-.166h0a1.342 1.342 0 00-.708-.188h0a.149.149 0 00-.141.111z"
  }), ShoulderBags_jsx("path", {
    "data-name": "Path 10",
    d: "M110.987 80.15l-.645-7.545a3.781 3.781 0 00-3.768-3.459h-.78v1.23h0v-1.23h-.78a3.781 3.781 0 00-3.768 3.459l-.646 7.545a3.407 3.407 0 003.395 3.7h3.598a3.407 3.407 0 003.395-3.7z"
  }), ShoulderBags_jsx("path", {
    "data-name": "Path 11",
    d: "M108.494 69.668c-1.336-.669-1.426-1.652-2.7-1.654h0c-1.272 0-1.362.985-2.7 1.654l.294-.046c1.191-.519 1.271-1.282 2.406-1.283s1.215.764 2.406 1.283z"
  }), ShoulderBags_jsx("path", {
    "data-name": "Path 12",
    d: "M105.795 77.868l.132-.006 4.385-.192.239 2.792h0a16.8 16.8 0 01-4.579.636h-.177"
  }), ShoulderBags_jsx("path", {
    "data-name": "Path 13",
    d: "M105.788 77.868l-.132-.006-4.385-.192-.239 2.792h0a16.8 16.8 0 004.579.636h.177"
  }), ShoulderBags_jsx("path", {
    "data-name": "Path 14",
    d: "M110.625 80.455l-.591-6.916a3.54 3.54 0 00-3.527-3.239h-1.427a3.54 3.54 0 00-3.527 3.238l-.591 6.916a3.2 3.2 0 001.393 2.92l.083-.123a3.056 3.056 0 01-1.328-2.785l.591-6.916a3.372 3.372 0 013.38-3.1h1.426a3.372 3.372 0 013.379 3.1l.591 6.916a3.056 3.056 0 01-1.328 2.785l.083.123a3.2 3.2 0 001.392-2.921z"
  }), ShoulderBags_jsx("path", {
    "data-name": "Path 15",
    d: "M105.792 84.149v-3.008h0a25.049 25.049 0 01-4.756-.676l-.447-.039A3.568 3.568 0 00104 84.149z"
  }), ShoulderBags_jsx("path", {
    "data-name": "Path 16",
    d: "M105.795 81.141v3.008h1.8A3.568 3.568 0 00111 80.426l-.447.039a25.083 25.083 0 01-4.758.676z"
  }), ShoulderBags_jsx("path", {
    "data-name": "Path 17",
    d: "M105.792 81.083v2.767h1.647a3.123 3.123 0 003.112-3.389 27.2 27.2 0 01-4.757.622z"
  }), ShoulderBags_jsx("path", {
    "data-name": "Path 18",
    d: "M105.795 83.85v-2.765h0a27.157 27.157 0 01-4.759-.622h0a3.123 3.123 0 003.112 3.389z"
  }), ShoulderBags_jsx("rect", {
    "data-name": "Rectangle 34",
    width: "2.177",
    height: "1.086",
    rx: ".281",
    transform: "rotate(-3.21 1460.138 -1873.834)"
  }), ShoulderBags_jsx("path", {
    "data-name": "Path 19",
    d: "M103.251 80.12h0a.158.158 0 01-.158-.158v-6.679a.158.158 0 01.158-.158h0a.158.158 0 01.158.158v6.679a.158.158 0 01-.158.158z"
  }), ShoulderBags_jsx("path", {
    "data-name": "Rectangle 35",
    d: "M103.093 74.874h.316v1.036h-.316z"
  })));
};
// CONCATENATED MODULE: ./src/assets/icons/Wallet.tsx
var Wallet_jsx = external_react_default.a.createElement;

const Wallet = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return Wallet_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, Wallet_jsx("g", {
    "data-name": "Group 9"
  }, Wallet_jsx("g", {
    "data-name": "Group 8"
  }, Wallet_jsx("path", {
    "data-name": "Path 42",
    d: "M12.362 1.129a1.415 1.415 0 00-1.672-1.1L1.428 1.942h11.1z",
    fill: color
  })), Wallet_jsx("path", {
    "data-name": "Path 43",
    d: "M11.579 11.242v-2.2a1.822 1.822 0 011.82-1.82h2.784v-2.78a1.415 1.415 0 00-1.415-1.415H1.415A1.415 1.415 0 000 4.442v11.4a1.415 1.415 0 001.415 1.415h13.354a1.415 1.415 0 001.415-1.415v-2.776h-2.785a1.822 1.822 0 01-1.82-1.82z",
    fill: color
  }), Wallet_jsx("path", {
    "data-name": "Path 44",
    d: "M16.989 8.03h-3.59a1.011 1.011 0 00-1.01 1.01v2.2a1.012 1.012 0 001.01 1.01h3.59a1.012 1.012 0 001.01-1.01v-2.2a1.012 1.012 0 00-1.01-1.01zm-2.8 3.128a1.006 1.006 0 111.006-1.006 1.006 1.006 0 01-1.006 1.006z",
    fill: color
  })));
};
// CONCATENATED MODULE: ./src/assets/icons/LaptopBags.tsx
var LaptopBags_jsx = external_react_default.a.createElement;

const LaptopBags = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return LaptopBags_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, LaptopBags_jsx("g", {
    "data-name": "Group 6",
    fill: color,
    stroke: "#fff",
    strokeMiterlimit: "10",
    strokeWidth: ".091"
  }, LaptopBags_jsx("path", {
    "data-name": "Path 22",
    d: "M6.224 1.741a.408.408 0 01-.292-.175l-.013-.018v-.022c-.08-.612.818-.747.856-.753l.4-.057-.334.222h0a.807.807 0 00-.128.338c-.105.42-.375.465-.489.465zm-.13-.263a.213.213 0 00.13.081c.106 0 .244-.056.305-.323a1.686 1.686 0 01.07-.237c-.214.064-.523.205-.505.479z"
  }), LaptopBags_jsx("path", {
    "data-name": "Path 23",
    d: "M9 6.496H.046v6.8a.833.833 0 00.833.833h16.243a.833.833 0 00.833-.833v-6.8z"
  }), LaptopBags_jsx("path", {
    "data-name": "Path 24",
    d: "M17.44 2.135H.561a.515.515 0 00-.515.515v6.285a.833.833 0 00.833.833h16.243a.833.833 0 00.833-.833V2.65a.515.515 0 00-.515-.515z"
  }), LaptopBags_jsx("path", {
    "data-name": "Path 25",
    d: "M11.776 1.741c-.113 0-.387-.045-.482-.464a.734.734 0 00-.134-.342l-.334-.222.4.061c.038.006.936.141.856.753v.022l-.013.018a.408.408 0 01-.293.174zM11.4.999a1.682 1.682 0 01.071.238c.061.267.2.323.305.323a.216.216 0 00.13-.081c.019-.276-.291-.416-.506-.48z"
  }), LaptopBags_jsx("path", {
    "data-name": "Path 26",
    d: "M11.295.752A3.333 3.333 0 009 .045a3.333 3.333 0 00-2.295.707.136.136 0 00.158.222A3.036 3.036 0 018.999.318a3.037 3.037 0 012.136.656.136.136 0 10.158-.222z"
  }), LaptopBags_jsx("path", {
    "data-name": "Path 27",
    d: "M9 9.419h-.958v.751h1.917v-.751z"
  }), LaptopBags_jsx("path", {
    "data-name": "Path 28",
    d: "M8.698 8.214h0a.9.9 0 00-.657 1.24h1.917a.9.9 0 00-.657-1.24h0a1.656 1.656 0 00-.6 0z"
  }), LaptopBags_jsx("path", {
    "data-name": "Path 29",
    d: "M9 10.17h-.958v1.009h1.917V10.17z"
  }), LaptopBags_jsx("path", {
    "data-name": "Path 30",
    d: "M9 10.473h-.807v.706h1.615v-.706z"
  }), LaptopBags_jsx("path", {
    "data-name": "Path 31",
    d: "M4.725 2.135h1.136a1.287 1.287 0 00.648-.83.118.118 0 00-.117-.139h0a.116.116 0 00-.095.048 1.873 1.873 0 01-1.38.721.118.118 0 00-.088.05z"
  }), LaptopBags_jsx("path", {
    "data-name": "Path 32",
    d: "M13.275 2.135H12.14a1.287 1.287 0 01-.648-.83.118.118 0 01.116-.139h0a.116.116 0 01.095.048 1.873 1.873 0 001.38.721.118.118 0 01.088.05z"
  })));
};
// CONCATENATED MODULE: ./src/assets/icons/WomenDress.tsx
var WomenDress_jsx = external_react_default.a.createElement;

const WomenDress = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return WomenDress_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, WomenDress_jsx("defs", null, WomenDress_jsx("clipPath", {
    id: "a"
  }, WomenDress_jsx("path", {
    "data-name": "Rectangle 20",
    transform: "translate(226 1073)",
    fill: "#ebe7e7",
    d: "M0 0h18v18H0z"
  }))), WomenDress_jsx("g", {
    "data-name": "Women Dress",
    transform: "translate(-226 -1073)",
    clipPath: "url(#a)"
  }, WomenDress_jsx("g", {
    "data-name": "Group 28",
    transform: "translate(230.461 1073)",
    fill: color
  }, WomenDress_jsx("path", {
    "data-name": "Path 80",
    d: "M8.236 12.619c-.12-.6-.384-3.422-1.008-4.358a1.446 1.446 0 01-.19-.8.039.039 0 000-.007c.02-.29.052-.6.073-.762a.493.493 0 01.01-.076c.016-.1.036-.192.057-.289a16.065 16.065 0 00.515-2.746c0-1.429-.733-1.849-.733-1.849.251-1.069.434-1.647.434-1.647L7.179 0A10.558 10.558 0 006.7 1.717a2.911 2.911 0 01-2.161.694 2.913 2.913 0 01-2.161-.694A10.578 10.578 0 001.897 0l-.216.087s.18.577.434 1.647c0 0-.733.421-.733 1.849a14.672 14.672 0 00.491 2.631.1.1 0 000 .039.2.2 0 00.01.035l.007.028c.03.123.074.347.081.347.014.087.029.243.043.4.006.055.01.109.014.163l.016.207h-.007a1.462 1.462 0 01-.191.826c-.624.936-.889 3.758-1.008 4.358s-.408 2.81-.552 3.459-.288 1.537-.288 1.537a3.7 3.7 0 001.2.144s-.087.252.649.18a14.433 14.433 0 011.969-.06c.5.024.153.12.72.12s.216-.1.72-.12a14.388 14.388 0 011.969.06c.733.072.649-.18.649-.18a3.708 3.708 0 001.2-.144s-.144-.889-.289-1.537-.428-2.857-.549-3.457zM6.955 6.468c-.056.077-.106.2-.041.251-.017.115-.027.231-.039.347-.065-.075-.274-.006-.274-.006-.155-.068.137.335.254.181-.005.065-.007.13-.01.2-.142-.01-.284-.02-.427-.028a.66.66 0 00-.068-.149c.016-.108-.108.016-.15.137a25.847 25.847 0 00-.925-.02C5.211 7.304 5 7.373 5 7.373c-.031-.014-.044-.008-.044.009h-.032a.147.147 0 00.016-.067.152.152 0 00-.3 0 .149.149 0 00.017.067c-.406 0-.812.013-1.214.023a.791.791 0 00-.042-.077c.014-.092-.074-.017-.126.081l-.207.005a.491.491 0 00.112-.2c.154-.1-.434-.074-.271.151a.2.2 0 00.051.051h-.173a.087.087 0 000-.122c-.136-.2-.238.094-.25.127l-.3.006a.43.43 0 00-.005-.081c.073-.011.315-.308.087-.354a.173.173 0 00-.109.005 4.818 4.818 0 00-.048-.385.674.674 0 00.059-.135c.067-.042-.005-.062-.1-.051a2.26 2.26 0 00-.039-.147h.224a.152.152 0 10.292.057.148.148 0 00-.014-.062l1.04-.019a.1.1 0 000 .132c.143.2.244-.072.266-.137l.479-.005c.075.095.22.2.277.043a.207.207 0 00.009-.046h.7a.15.15 0 00-.034.092.152.152 0 10.3 0 .149.149 0 00-.033-.087c.384.007.766.024 1.148.048-.116.015-.254.077-.166.2.161.225.271-.151.271-.151.029-.018.032-.032.018-.042l.1.007a.042.042 0 00.009.008c-.007.052-.016.1-.026.153z"
  }), WomenDress_jsx("path", {
    "data-name": "Path 81",
    d: "M4.951 7.161c-.144.087.4.076.252-.134s-.252.134-.252.134z"
  }), WomenDress_jsx("path", {
    "data-name": "Path 82",
    d: "M4.286 7.052c-.1.235.249.14.249.14.15.075-.149-.375-.249-.14z"
  }), WomenDress_jsx("path", {
    "data-name": "Path 83",
    d: "M4.768 6.721c-.284-.057-.1.31-.1.31-.049.19.384-.249.1-.31z"
  }), WomenDress_jsx("path", {
    "data-name": "Path 84",
    d: "M5.973 6.533c.095-.26-.277-.138-.277-.138-.167-.073.183.398.277.138z"
  }), WomenDress_jsx("path", {
    "data-name": "Path 85",
    d: "M5.382 6.898c.276.023.061-.3.061-.3.027-.184-.34.279-.061.3z"
  }), WomenDress_jsx("path", {
    "data-name": "Path 86",
    d: "M4.985 6.632c.161.225.271-.151.271-.151.154-.097-.433-.076-.271.151z"
  }), WomenDress_jsx("circle", {
    "data-name": "Ellipse 3",
    cx: ".152",
    cy: ".152",
    r: ".152",
    transform: "translate(3.253 6.916)"
  }), WomenDress_jsx("path", {
    "data-name": "Path 87",
    d: "M3.851 6.782c-.144-.21-.252.134-.252.134-.144.086.396.076.252-.134z"
  }), WomenDress_jsx("path", {
    "data-name": "Path 88",
    d: "M3.649 7.126c-.167-.073.183.4.277.138s-.277-.138-.277-.138z"
  }), WomenDress_jsx("path", {
    "data-name": "Path 89",
    d: "M2.903 6.808c-.1.235.249.14.249.14.151.075-.149-.374-.249-.14z"
  }), WomenDress_jsx("path", {
    "data-name": "Path 90",
    d: "M3.384 6.48c-.284-.057-.1.31-.1.31-.046.185.385-.256.1-.31z"
  }), WomenDress_jsx("path", {
    "data-name": "Path 91",
    d: "M6.359 6.852a.152.152 0 11-.152.152.152.152 0 01.152-.152z"
  }), WomenDress_jsx("path", {
    "data-name": "Path 92",
    d: "M6.553 6.853c-.144.087.4.076.252-.134s-.252.134-.252.134z"
  }), WomenDress_jsx("path", {
    "data-name": "Path 93",
    d: "M5.861 7.3c.161.225.271-.151.271-.151.152-.1-.435-.074-.271.151z"
  }), WomenDress_jsx("path", {
    "data-name": "Path 94",
    d: "M5.856 6.744c-.1.235.249.14.249.14.15.075-.15-.375-.249-.14z"
  }), WomenDress_jsx("path", {
    "data-name": "Path 95",
    d: "M6.338 6.413c-.284-.057-.1.31-.1.31-.049.187.385-.25.1-.31z"
  }), WomenDress_jsx("path", {
    "data-name": "Path 96",
    d: "M4.064 6.654c.276.023.061-.3.061-.3.027-.184-.339.276-.061.3z"
  }), WomenDress_jsx("path", {
    "data-name": "Path 97",
    d: "M2.972 6.533c.094-.26-.277-.138-.277-.138-.168-.073.182.398.277.138z"
  }), WomenDress_jsx("path", {
    "data-name": "Path 98",
    d: "M2.381 6.898c.276.023.061-.3.061-.3.026-.184-.336.279-.061.3z"
  }))));
};
// CONCATENATED MODULE: ./src/assets/icons/OuterWear.tsx
var OuterWear_jsx = external_react_default.a.createElement;

const OuterWear = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return OuterWear_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, OuterWear_jsx("g", {
    "data-name": "Group 29",
    fill: color
  }, OuterWear_jsx("path", {
    "data-name": "Path 99",
    d: "M15.643 5.659a1.993 1.993 0 00.453-.062c-.224-1.2-.4-1.9-.4-1.9a5.546 5.546 0 00-1.713-1.068 1.964 1.964 0 001.66 3.03z"
  }), OuterWear_jsx("path", {
    "data-name": "Path 100",
    d: "M.896 5.596a1.962 1.962 0 002.113-2.97 5.561 5.561 0 00-1.712 1.068s-.178.697-.401 1.902z"
  }), OuterWear_jsx("path", {
    "data-name": "Path 101",
    d: "M15.641 6.146a2.466 2.466 0 01-2.463-2.463 2.436 2.436 0 01.348-1.24 14.661 14.661 0 00-2.08-.61L11.422.664A5.484 5.484 0 008.947.008c-.225-.01-.677-.01-.904 0a5.5 5.5 0 00-2.478.653l-.02 1.169a14.746 14.746 0 00-2.08.612 2.446 2.446 0 01-2.658 3.64 53.686 53.686 0 00-.771 11.244H.26v.123a.512.512 0 00.532.493h1.24a.512.512 0 00.532-.493v-.123h.23s-.238-7.281 1.02-9.143v9.08a23.275 23.275 0 004.326.735V1.151a5.227 5.227 0 01-1.749-.19S6.529.498 8.043.516h.9c1.5.023 1.653.445 1.653.445a5.226 5.226 0 01-1.751.19v16.847a23.274 23.274 0 004.329-.736V8.184c1.259 1.866 1.023 9.143 1.023 9.143h.229v.123a.511.511 0 00.532.493H16.2a.512.512 0 00.532-.493v-.123h.224a53.827 53.827 0 00-.771-11.246 2.462 2.462 0 01-.544.065z"
  })));
};
// CONCATENATED MODULE: ./src/assets/icons/Pants.tsx
var Pants_jsx = external_react_default.a.createElement;

const Pants = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return Pants_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, Pants_jsx("g", {
    fill: color
  }, Pants_jsx("path", {
    "data-name": "Path 102",
    d: "M7.999 1.165a10.721 10.721 0 00-.139-.71L7.797.187A.243.243 0 007.561 0H.553a.243.243 0 00-.236.187L.253.455c-.056.235-.1.472-.139.71z"
  }), Pants_jsx("path", {
    "data-name": "Path 103",
    d: "M.018 2.048a9.93 9.93 0 00-.015.828l.379 13.479a.243.243 0 00.242.236H.86v1.155a.254.254 0 00.254.254h1.288a.254.254 0 00.254-.254v-1.155h.172a.243.243 0 00.242-.225l.833-11.228a.15.15 0 01.3 0l.825 11.228a.243.243 0 00.242.225h.233v1.155a.254.254 0 00.254.254h1.288a.254.254 0 00.254-.254v-1.155h.179a.243.243 0 00.242-.236L8.1 2.876c.008-.276 0-.553-.015-.828z"
  })));
};
// CONCATENATED MODULE: ./src/assets/icons/Tops.tsx
var Tops_jsx = external_react_default.a.createElement;

const Tops = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return Tops_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, Tops_jsx("g", {
    fill: color
  }, Tops_jsx("path", {
    "data-name": "Path 104",
    d: "M6.994 2.83L5.928 5.991a.315.315 0 01-.6 0L4.273 2.83a2.4 2.4 0 00-2.909-.026L0 3.822l.087.329a32.647 32.647 0 01.909 11.921L.79 18h9.7l-.215-1.909a32.667 32.667 0 01.912-11.96l.083-.31-1.366-1.013a2.4 2.4 0 00-2.909.026zm0 0"
  }), Tops_jsx("path", {
    "data-name": "Path 105",
    d: "M.549 2.843l.62-.114L.714.261a.315.315 0 00-.62.114zm0 0"
  }), Tops_jsx("path", {
    "data-name": "Path 106",
    d: "M10.978.369a.316.316 0 00-.622-.108L9.966 2.6l.622.108zm0 0"
  })));
};
// CONCATENATED MODULE: ./src/assets/icons/Skirts.tsx
var Skirts_jsx = external_react_default.a.createElement;

const Skirts = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return Skirts_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, Skirts_jsx("g", {
    fill: color
  }, Skirts_jsx("path", {
    "data-name": "Path 107",
    d: "M17.688 16.585L14.826 5.454a3.95 3.95 0 00-.26-.682l-.822-1.6a.749.749 0 00-.616-.376H4.576a.746.746 0 00-.615.377l-.841 1.65a4.017 4.017 0 00-.258.683L.017 16.585a.373.373 0 00.374.482h.64a1.52 1.52 0 01.612.158l1.246.691a.824.824 0 00.728 0l1.24-.691a.607.607 0 01.514 0l1.246.691a.824.824 0 00.728 0l1.246-.691a.607.607 0 01.514 0l1.246.691a.824.824 0 00.728 0l1.246-.691a.607.607 0 01.514 0l1.246.691a.824.824 0 00.728 0l1.246-.691a1.52 1.52 0 01.612-.158h.64a.373.373 0 00.374-.482z"
  }), Skirts_jsx("path", {
    "data-name": "Path 108",
    d: "M4.525 2.1h8.656a.333.333 0 00.333-.333V.333A.333.333 0 0013.181 0H4.525a.333.333 0 00-.331.333v1.438a.333.333 0 00.331.331zM7.833.652a.267.267 0 01.262-.266h1.508a.267.267 0 01.266.266v.8a.267.267 0 01-.266.266H8.095a.267.267 0 01-.266-.266z"
  }), Skirts_jsx("path", {
    "data-name": "Rectangle 2",
    d: "M8.275.83h1.153v.444H8.275z"
  })));
};
// CONCATENATED MODULE: ./src/assets/icons/Shirts.tsx
var Shirts_jsx = external_react_default.a.createElement;

const Shirts = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return Shirts_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, Shirts_jsx("g", {
    fill: color
  }, Shirts_jsx("path", {
    "data-name": "Path 109",
    d: "M6.751 2.546a.172.172 0 00.04 0l2.206-.525 2.2.543a.171.171 0 00.041 0 .142.142 0 00.111-.051.149.149 0 00.027-.128l-.21-.983a.362.362 0 010-.115l.221-1.1a.144.144 0 00-.026-.122.138.138 0 00-.168-.029l-2.192 1.05L6.813.017a.137.137 0 00-.169.028.144.144 0 00-.027.122l.21 1.1a.362.362 0 010 .115l-.217.979a.149.149 0 00.027.128.142.142 0 00.11.053z"
  }), Shirts_jsx("path", {
    "data-name": "Path 110",
    d: "M2.563 15.126l-1.806-.153a.4.4 0 00-.4.278l-.342 1.214a.285.285 0 00.039.248.285.285 0 00.224.112l1.8.058h.013a.428.428 0 00.391-.288l.334-1.1a.282.282 0 00-.252-.372z"
  }), Shirts_jsx("path", {
    "data-name": "Path 111",
    d: "M17.985 16.466l-.338-1.2a.4.4 0 00-.4-.278l-1.806.152a.282.282 0 00-.252.372l.33 1.083a.428.428 0 00.391.288l1.815-.058a.274.274 0 00.264-.359z"
  }), Shirts_jsx("path", {
    "data-name": "Path 112",
    d: "M17.024 14.342a.286.286 0 00.257-.372l-.756-2.678a5.452 5.452 0 01-.105-.451l-1.321-6.627a.61.61 0 00-.315-.4l-2.139-.945a.63.63 0 00-.248-.046.638.638 0 00-.263.051L9.176 4.248a.483.483 0 01-.346 0L5.865 2.876a.64.64 0 00-.263-.051.63.63 0 00-.248.046l-2.139.945a.61.61 0 00-.315.4l-1.318 6.626c-.025.125-.074.328-.105.451l-.759 2.662a.286.286 0 00.257.372l1.824.154a.405.405 0 00.407-.275l.874-2.857a3.587 3.587 0 00.105-.476l.278-2.1-.254 8.162a.326.326 0 00.327.337h8.99a.325.325 0 00.326-.338l-.292-8.058.265 2.006a3.582 3.582 0 00.105.476l.875 2.874a.405.405 0 00.407.275zM8.998 16.3a.558.558 0 11.558-.558.558.558 0 01-.558.558zm0-2.422a.558.558 0 11.558-.558.558.558 0 01-.558.558zm0-2.422a.558.558 0 11.558-.558.558.558 0 01-.558.558zm0-2.422a.558.558 0 11.558-.558.558.558 0 01-.558.558zm0-2.422a.558.558 0 11.558-.558.558.558 0 01-.558.562z"
  })));
};
// CONCATENATED MODULE: ./src/assets/icons/Face.tsx
var Face_jsx = external_react_default.a.createElement;

const Face = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return Face_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, Face_jsx("g", {
    fill: color
  }, Face_jsx("path", {
    "data-name": "Path 41",
    d: "M6.388 9.238c-3.319 0-5.11 1.36-5.11 1.911s1.791 1.911 5.11 1.911a9.995 9.995 0 002.653-.345 5.1 5.1 0 011.387-2.612 8.865 8.865 0 00-4.04-.864z"
  }), Face_jsx("path", {
    "data-name": "Path 42",
    d: "M8.34 8.908a7.515 7.515 0 012.3.841 5.111 5.111 0 01.581-.391 7 7 0 00-1.969-.887 5.957 5.957 0 01-.912.438z"
  }), Face_jsx("path", {
    "data-name": "Path 43",
    d: "M8.958 13.383a10.774 10.774 0 01-2.571.3c-3.29 0-5.749-1.349-5.749-2.555 0-.908 1.394-1.9 3.484-2.33a6.017 6.017 0 01-.9-.433c-1.96.571-3.224 1.647-3.224 2.762 0 1.731 2.922 3.193 6.388 3.193a11.64 11.64 0 002.573-.285c-.008-.112-.018-.234-.018-.354.002-.097.011-.197.017-.298z"
  }), Face_jsx("path", {
    "data-name": "Path 44",
    d: "M6.388 8.952a4.833 4.833 0 005.11-4.471A4.833 4.833 0 006.388.01a4.833 4.833 0 00-5.11 4.471 4.833 4.833 0 005.11 4.471zm0-8.3a4.194 4.194 0 014.471 3.833 4.194 4.194 0 01-4.471 3.833A4.194 4.194 0 011.917 4.48 4.194 4.194 0 016.388.647z"
  }), Face_jsx("path", {
    "data-name": "Path 45",
    d: "M6.391 7.675a3.561 3.561 0 003.833-3.193 3.561 3.561 0 00-3.833-3.195A3.561 3.561 0 002.558 4.48a3.561 3.561 0 003.833 3.195zm0-5.749a2.969 2.969 0 013.193 2.555h-.638c0-1.039-1.17-1.911-2.555-1.911z"
  }), Face_jsx("path", {
    "data-name": "Path 46",
    d: "M17.39 11.304a6.91 6.91 0 01-.592.319 5.4 5.4 0 00-2.518 2.518 6.026 6.026 0 01-2.81 2.81 7.22 7.22 0 00-.486.259 4.466 4.466 0 006.407-5.9zm-3.877 6.051v-.638a3.238 3.238 0 00.581-.053l.112.628a3.847 3.847 0 01-.694.063zm1.394-.261l-.233-.595a3.176 3.176 0 002.032-2.976h.638a3.812 3.812 0 01-2.438 3.571z"
  }), Face_jsx("path", {
    "data-name": "Path 47",
    d: "M12.66 15.332a4.74 4.74 0 001.044-1.472 6.029 6.029 0 012.809-2.815c.173-.085.337-.17.518-.278a4.527 4.527 0 00-.4-.45 6.37 6.37 0 01-.731.407 5.386 5.386 0 00-2.512 2.521 6.03 6.03 0 01-2.81 2.81 6.962 6.962 0 00-.532.285 4.507 4.507 0 00.414.438 6.34 6.34 0 01.727-.406 4.733 4.733 0 001.474-1.042z"
  }), Face_jsx("path", {
    "data-name": "Path 48",
    d: "M11.769 14.439a4.74 4.74 0 001.044-1.472 6.022 6.022 0 012.81-2.81c.166-.082.328-.164.5-.265a4.462 4.462 0 00-6.435 5.922c.219-.136.419-.236.614-.337a4.747 4.747 0 001.47-1.037z"
  })));
};
// CONCATENATED MODULE: ./src/assets/icons/Eyes.tsx
var Eyes_jsx = external_react_default.a.createElement;

const Eyes = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return Eyes_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, Eyes_jsx("g", {
    fill: color
  }, Eyes_jsx("path", {
    "data-name": "Path 49",
    d: "M3.002 0h-1.5v.75h-1.5v1.5h1.5V3h-1.5v1.5h1.5v.75h-1.5v1.5h1.5v3.75h-.75a.75.75 0 00-.744.842l.75 6a.75.75 0 00.744.657h1.5a.75.75 0 00.744-.657l.75-6a.75.75 0 00-.744-.842h-.75V6.748h1.5v-1.5h-1.5V4.5h1.5V3h-1.5v-.75h1.5V.75h-1.5z"
  }), Eyes_jsx("path", {
    "data-name": "Path 50",
    d: "M11.995 17.187l-.746-9.69h-4.5l-.747 9.69a.75.75 0 00.748.807h4.5a.75.75 0 00.748-.807z"
  }), Eyes_jsx("path", {
    "data-name": "Path 51",
    d: "M11.251 5.249a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v1.5h4.5z"
  })));
};
// CONCATENATED MODULE: ./src/assets/icons/Lips.tsx
var Lips_jsx = external_react_default.a.createElement;

const Lips = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return Lips_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, Lips_jsx("g", {
    "data-name": "Group 14"
  }, Lips_jsx("path", {
    "data-name": "Path 52",
    d: "M6.035 17.392v-6.2a.567.567 0 00-.516-.61H5.5V5.269h-.527c0-.877.008-1.608.013-2.212.019-2.149.023-2.66-.235-2.923A.454.454 0 004.422 0a1.282 1.282 0 00-.549.193 4.29 4.29 0 01-.708.3 2.882 2.882 0 00-2.117 2.235v2.541H.541v5.306H.519a.567.567 0 00-.516.61v6.2a.567.567 0 00.516.61h5.006a.567.567 0 00.51-.603zm-1.144-6.817H1.148V5.932l3.743.043z",
    fill: color
  })));
};
// CONCATENATED MODULE: ./src/assets/icons/Snacks.tsx
var Snacks_jsx = external_react_default.a.createElement;

const Snacks = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return Snacks_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, Snacks_jsx("g", {
    fill: color
  }, Snacks_jsx("path", {
    "data-name": "Path 36",
    d: "M2.109 5.274H12.66a1.055 1.055 0 000-2.11h-.1a1.67 1.67 0 00-1.5-1.054 2.626 2.626 0 00-1.854-1.044 2.1 2.1 0 00-3.653 0 2.626 2.626 0 00-1.85 1.045h-.011a1.577 1.577 0 00-1.481 1.055h-.1a1.055 1.055 0 100 2.11z"
  }), Snacks_jsx("path", {
    "data-name": "Path 37",
    d: "M7.956 15.891l.863-9.562H5.946l.862 9.562z"
  }), Snacks_jsx("path", {
    "data-name": "Path 38",
    d: "M2.884 12.881a2.118 2.118 0 011.253 1.378 2.626 2.626 0 011.07 1.633h.542L4.887 6.33H2.164z"
  }), Snacks_jsx("path", {
    "data-name": "Path 39",
    d: "M12.601 6.329H9.877l-.862 9.562h2.059a.527.527 0 00.524-.469z"
  }), Snacks_jsx("path", {
    "data-name": "Path 40",
    d: "M1.054 16.946a.876.876 0 00.091-.019 1.577 1.577 0 102-2c0-.031.019-.058.019-.091a1.055 1.055 0 00-2.11 0 1.055 1.055 0 100 2.109z"
  })));
};
// CONCATENATED MODULE: ./src/assets/icons/PetCare.tsx
var PetCare_jsx = external_react_default.a.createElement;

const PetCare = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return PetCare_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, PetCare_jsx("g", {
    fill: color
  }, PetCare_jsx("path", {
    "data-name": "Path 1",
    d: "M11.335 8.363h-.139a4.189 4.189 0 01-1.864-.44l-1.116-.558.011-.022-.493.493a1.283 1.283 0 01.536.457.879.879 0 00.732.392.326.326 0 01.326.326v.643a1.288 1.288 0 01-.964 1.245v.888a1.76 1.76 0 01-.3.977l-.35.515v.734l.737-.737a.326.326 0 01.548.227v2.186l.643-.426v-2.4a.326.326 0 01.128-.257l1.257-.944a2.143 2.143 0 00.5-1.274 4.447 4.447 0 00-.034-.809z"
  }), PetCare_jsx("path", {
    "data-name": "Path 2",
    d: "M9.08 7.077l.543.27a3.543 3.543 0 001.577.372h.056V5.791a.326.326 0 01.326-.326h.8a.483.483 0 00.482-.482v-.472h-.643a.326.326 0 01-.227-.094l-.651-.651a.76.76 0 00-.543-.223h-.7a.8.8 0 00-.564.233 2.932 2.932 0 00-.869 2.086v.573h.4a.242.242 0 00.241-.241V5.149h.643v1.045a.885.885 0 01-.881.887zm1.206-2.894h.643v.643h-.643z"
  }), PetCare_jsx("path", {
    "data-name": "Path 3",
    d: "M10.287 14.841l.643-.426v-1.873l-.643.482z"
  }), PetCare_jsx("path", {
    "data-name": "Path 4",
    d: "M17.794 3.684a6.04 6.04 0 00-.612-1.464 4.466 4.466 0 00-7.43-.434l-.493.651a.326.326 0 01-.515 0l-.493-.651A4.488 4.488 0 004.678 0H4.56A4.466 4.466 0 00.789 2.077 5.038 5.038 0 000 4.783v.929a7.535 7.535 0 003.244 6.206l.326-.485a8.686 8.686 0 01-1.6-1.539l-.29-.362a.326.326 0 01.5-.4l.289.362a8.042 8.042 0 001.455 1.412l.9-1.346v-.993A2.419 2.419 0 015.4 7.091l.457-.537a.326.326 0 01.557.13l.261 1.042h.258l1.1-1.1v-.76a3.57 3.57 0 011.052-2.541 1.441 1.441 0 011.018-.421h.7a1.394 1.394 0 01.992.412l.553.554h.832a.326.326 0 01.326.326v.8a1.126 1.126 0 01-1.128 1.118H11.9V7.7l.24 1.8a5.09 5.09 0 01.039.926 2.785 2.785 0 01-.6 1.593v1.975l3.04-2.016A7.541 7.541 0 0018 5.677v-.414a6.023 6.023 0 00-.208-1.573zM1.388 8.344a.326.326 0 01-.41-.2l-.05-.15A5.6 5.6 0 01.64 6.218v-.109a.326.326 0 11.643 0v.109a4.962 4.962 0 00.255 1.572l.05.149a.326.326 0 01-.2.407zm14.937 1.181l-.289.362a8.649 8.649 0 01-2.472 2.115l-.869.494a.326.326 0 01-.319-.558l.869-.494a8.009 8.009 0 002.29-1.954l.289-.362a.326.326 0 11.506.4zm1.035-3.309a5.6 5.6 0 01-.288 1.775l-.05.15a.326.326 0 01-.612-.2v.003l.05-.15a4.961 4.961 0 00.255-1.571v-.109a.326.326 0 11.643 0v.109zm0-1.392a.326.326 0 11-.643 0v-.326a.326.326 0 01.643 0z"
  }), PetCare_jsx("path", {
    "data-name": "Path 5",
    d: "M7.126 13.007l.4-.6a1.119 1.119 0 00.189-.624v-1.169a.326.326 0 01.326-.326.644.644 0 00.643-.643v-.356a1.52 1.52 0 01-.946-.644.642.642 0 00-.535-.287H6.43a.326.326 0 01-.312-.243l-.169-.679-.052.061a1.774 1.774 0 00-.434 1.078v1.072a.326.326 0 01-.054.178L3.78 12.271l.185.121.676.443 2.584 1.693-.118-.237a.326.326 0 01-.034-.143v-.964a.326.326 0 01.054-.174zM6.75 9.649v-.643h.645v.643z"
  }), PetCare_jsx("path", {
    "data-name": "Path 6",
    d: "M8.002 14.648a.325.325 0 01.034.144v.269l.326.211v-.99l-.359.359z"
  })));
};
// CONCATENATED MODULE: ./src/assets/icons/HomeCleaning.tsx
var HomeCleaning_jsx = external_react_default.a.createElement;

const HomeCleaning = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return HomeCleaning_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, HomeCleaning_jsx("g", {
    transform: "translate(-1.125 -1.125)",
    fill: color
  }, HomeCleaning_jsx("path", {
    "data-name": "Path 7",
    d: "M1.125 18.54H1.7v.58h-.58z"
  }), HomeCleaning_jsx("path", {
    "data-name": "Path 8",
    d: "M18.54 18.54h.58v.58h-.58z"
  }), HomeCleaning_jsx("circle", {
    "data-name": "Ellipse 1",
    cx: ".489",
    cy: ".489",
    r: ".489",
    transform: "translate(14.28 9.345)"
  }), HomeCleaning_jsx("path", {
    "data-name": "Path 9",
    d: "M9.834 10.968V9.543H8.409a1.744 1.744 0 001.425 1.425z"
  }), HomeCleaning_jsx("circle", {
    "data-name": "Ellipse 2",
    cx: ".489",
    cy: ".489",
    r: ".489",
    transform: "translate(4.99 12.247)"
  }), HomeCleaning_jsx("path", {
    "data-name": "Path 10",
    d: "M9.834 7.537a1.744 1.744 0 00-1.425 1.425h1.425z"
  }), HomeCleaning_jsx("path", {
    "data-name": "Path 11",
    d: "M2.867 15.64h3.486v.58H2.867z"
  }), HomeCleaning_jsx("path", {
    "data-name": "Path 12",
    d: "M13.898 15.64h3.491v.58h-3.491z"
  }), HomeCleaning_jsx("path", {
    "data-name": "Path 13",
    d: "M16.802 16.801H14.48v1.742h-.58v-1.742h-.58v-1.742h3.486v-6.66l-6.68-2.637-6.678 2.637v6.66h3.486v1.742h-.583v1.742h-.578v-1.742H3.448v1.742H2.286v.58h15.677v-.58h-1.161zm-3.486-7.257a1.163 1.163 0 001.164-1.165h.58a1.163 1.163 0 001.162 1.162v.58a1.163 1.163 0 00-1.159 1.162h-.58a1.163 1.163 0 00-1.162-1.162zm-3.191-2.613a2.322 2.322 0 11-2.328 2.322 2.322 2.322 0 012.328-2.322zm-4.352 7.258h-.584a1.163 1.163 0 00-1.162-1.162v-.58a1.163 1.163 0 001.162-1.162h.584a1.163 1.163 0 001.158 1.162v.58a1.163 1.163 0 00-1.158 1.162zm6.39 4.354v-3.77a2.032 2.032 0 10-4.064 0v3.77h-.584v-3.77a2.613 2.613 0 115.225 0v3.77zm-3.49-2.322v-.58h.59v.58z"
  }), HomeCleaning_jsx("path", {
    "data-name": "Path 14",
    d: "M11.839 9.543h-1.425v1.425a1.744 1.744 0 001.425-1.425z"
  }), HomeCleaning_jsx("path", {
    "data-name": "Path 15",
    d: "M18.049 6.598l-7.925-3.13-7.925 3.13a.772.772 0 00-.494.722.76.76 0 00.337.637.787.787 0 00.742.082l7.337-2.9 7.337 2.9a.787.787 0 00.742-.082.76.76 0 00.337-.637.772.772 0 00-.494-.719z"
  }), HomeCleaning_jsx("path", {
    "data-name": "Path 16",
    d: "M10.414 7.537v1.425h1.425a1.744 1.744 0 00-1.425-1.425z"
  }), HomeCleaning_jsx("path", {
    "data-name": "Path 17",
    d: "M17.962 2.286h-.58a1.163 1.163 0 01-1.162 1.162v.58a1.163 1.163 0 011.162 1.162h.58a1.163 1.163 0 011.162-1.162v-.58a1.163 1.163 0 01-1.162-1.162z"
  }), HomeCleaning_jsx("path", {
    "data-name": "Path 18",
    d: "M4.028 4.027h.58a1.163 1.163 0 011.161-1.161v-.58a1.163 1.163 0 01-1.16-1.161h-.58a1.163 1.163 0 01-1.162 1.161v.58a1.163 1.163 0 011.161 1.161z"
  })));
};
// CONCATENATED MODULE: ./src/assets/icons/Dairy.tsx
var Dairy_jsx = external_react_default.a.createElement;

const Dairy = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return Dairy_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, Dairy_jsx("g", {
    fill: color
  }, Dairy_jsx("path", {
    "data-name": "Path 19",
    d: "M4.313 14.945V12.23a.34.34 0 00-.34-.34H.332a5.534 5.534 0 00-.125 3.393h3.767a.34.34 0 00.339-.338z"
  }), Dairy_jsx("path", {
    "data-name": "Path 20",
    d: "M7.652 16.402l.345-.4a3.843 3.843 0 00-.065-4.593l-.223-.278V9.176a1.876 1.876 0 01-.21-.465 1.015 1.015 0 00-.462-1.925H2.968a1.018 1.018 0 00-.391 1.958A2.656 2.656 0 011.7 9.93a4.641 4.641 0 00-1.056 1.282h3.331a1.019 1.019 0 011.014 1.017v2.714a1.019 1.019 0 01-1.018 1.018H.462A3.259 3.259 0 003.41 18h3.261a3.056 3.056 0 001.428-.36 2.313 2.313 0 01-.321-.723zM3.689 8.147h-.722a.34.34 0 010-.678h4.07a.34.34 0 110 .678H3.682z"
  }), Dairy_jsx("path", {
    "data-name": "Rectangle 1",
    d: "M13.136 7.14h3.732v7.465h-3.732z"
  }), Dairy_jsx("path", {
    "data-name": "Path 21",
    d: "M15.237 3.144l-.25-.21a.4.4 0 01-.13-.321.547.547 0 01.062-.221h-2.368a.34.34 0 010-.678h2.886a1.006 1.006 0 00.071-.353v-.343A1.019 1.019 0 0014.492 0H10.76a1.019 1.019 0 00-1.018 1.018v.34a1 1 0 00.072.353h1.38a.34.34 0 010 .678h-.838a.546.546 0 01.073.2.355.355 0 01-.081.284.68.68 0 01-.063.063c-.077.066-.158.133-.241.2a3.638 3.638 0 00-1.657 2.967v4.786l.074.092a4.507 4.507 0 01.049 5.461l-.115.133.042.171a1.619 1.619 0 001.572 1.233h5.24a1.623 1.623 0 001.622-1.622v-1.074h-4.414V6.462h4.411v-.355a3.645 3.645 0 00-1.631-2.963z"
  })));
};
// CONCATENATED MODULE: ./src/assets/icons/Cooking.tsx
var Cooking_jsx = external_react_default.a.createElement;

const Cooking = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return Cooking_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, Cooking_jsx("g", {
    fill: color
  }, Cooking_jsx("path", {
    "data-name": "Path 22",
    d: "M13.68 6.482H9.835a.63.63 0 100-1.259H8.268a.63.63 0 000 1.259H4.417a2.327 2.327 0 00-2.127 1.98h13.52a2.328 2.328 0 00-2.13-1.98z"
  }), Cooking_jsx("path", {
    "data-name": "Path 23",
    d: "M15.84 9.544v-.18H0v.9h2.256v5.578a2.16 2.16 0 002.16 2.16h9.264a2.16 2.16 0 002.16-2.16v-5.398H18v-.9z"
  }), Cooking_jsx("path", {
    "data-name": "Path 24",
    d: "M5.743 2.166a3.089 3.089 0 00.2.237l.175.175c.112.112.213.224.294.321a1.464 1.464 0 01.1.137.266.266 0 01.051.112.269.269 0 01-.068.178 1.08 1.08 0 01-.2.188.636.636 0 00.309.036.544.544 0 00.336-.167.655.655 0 00.165-.4 1.1 1.1 0 00-.043-.375 1.972 1.972 0 00-.279-.572 3.125 3.125 0 00-.173-.224 1.837 1.837 0 01-.135-.176 1.679 1.679 0 01-.336-.69 1.736 1.736 0 01.157-.945 1.162 1.162 0 00-.858.873 1.4 1.4 0 00.017.7 1.888 1.888 0 00.289.6z"
  }), Cooking_jsx("path", {
    "data-name": "Path 25",
    d: "M8.077 2.166c.063.083.13.162.2.237l.173.175c.112.112.213.224.3.321.039.05.073.1.1.137a.243.243 0 01.05.112.264.264 0 01-.067.178 1.041 1.041 0 01-.2.188.642.642 0 00.31.036.543.543 0 00.336-.167.653.653 0 00.165-.4 1.1 1.1 0 00-.041-.375 2 2 0 00-.28-.572c-.055-.082-.124-.165-.173-.224a1.837 1.837 0 01-.135-.176 1.679 1.679 0 01-.336-.694A1.736 1.736 0 018.63 0a1.161 1.161 0 00-.857.873 1.4 1.4 0 00.016.7 1.884 1.884 0 00.289.6z"
  }), Cooking_jsx("path", {
    "data-name": "Path 26",
    d: "M10.204 2.166a2.971 2.971 0 00.2.237l.175.175c.112.112.212.224.294.321a1.465 1.465 0 01.1.137.28.28 0 01.051.112.266.266 0 01-.068.178 1.041 1.041 0 01-.2.188.64.64 0 00.309.036.547.547 0 00.336-.167.654.654 0 00.163-.4 1.086 1.086 0 00-.041-.375 1.96 1.96 0 00-.279-.572 3.125 3.125 0 00-.173-.224 1.672 1.672 0 01-.135-.176 1.679 1.679 0 01-.33-.694 1.738 1.738 0 01.151-.941A1.16 1.16 0 009.9.874a1.4 1.4 0 00.017.7 1.857 1.857 0 00.29.6z"
  })));
};
// CONCATENATED MODULE: ./src/assets/icons/Breakfast.tsx
var Breakfast_jsx = external_react_default.a.createElement;

const Breakfast = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return Breakfast_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, Breakfast_jsx("g", {
    "data-name": "Group 7",
    fill: color
  }, Breakfast_jsx("path", {
    "data-name": "Path 27",
    d: "M13.034 14.465c2.98-.12 4.31-1.476 4.31-3.136 0-1.442-1-2.655-3.217-3.028.01-.539.011-1.054.011-1.536H0c0 3.158 0 7.743 2.84 9.935-1.724.131-2.84.342-2.84.577 0 .4 3.163.723 7.067.723s7.066-.323 7.066-.723c0-.236-1.118-.446-2.84-.577a5.965 5.965 0 001.741-2.235zm1.035-4.79c1.243.288 1.465.9 1.451 1.687-.016.9-.276 1.508-1.973 1.712a16.339 16.339 0 00.521-3.4zM1.706 7.862h2.209c-.99 2.922.681 7.542.68 7.542-3.611-2.765-2.889-7.542-2.889-7.542z"
  }), Breakfast_jsx("path", {
    "data-name": "Path 28",
    d: "M8.229 4.861c.281-2.545 5.9-1.272 4.729-4.576-.18-.5-.989-.287-.808.222.514 1.449-1.437 1.625-2.432 1.958a2.92 2.92 0 00-2.328 2.4c-.061.534.774.528.839-.004z"
  }), Breakfast_jsx("path", {
    "data-name": "Path 29",
    d: "M12.207 3.082a2.924 2.924 0 00-2.439 1.879.419.419 0 00.807.222c.377-1.272 2.047-1.293 3.115-1.6a2.031 2.031 0 001.644-2.346c-.069-.528-.906-.539-.837 0 .195 1.472-1.16 1.579-2.29 1.845z"
  })));
};
// CONCATENATED MODULE: ./src/assets/icons/Beverage.tsx
var Beverage_jsx = external_react_default.a.createElement;

const Beverage = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return Beverage_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, Beverage_jsx("g", {
    "data-name": "Group 9"
  }, Beverage_jsx("path", {
    "data-name": "Path 30",
    d: "M12.405.7a3.635 3.635 0 00-3.591 3.1H4.4L.811 0 .043.723l2.9 3.084H-.001l6.262 7.018v6.121H3.327V18h7.03v-1.054H7.32v-6.122l3.091-3.46a3.629 3.629 0 102-6.66zM9.817 6.442H3.771L2.358 4.863h8.87z",
    fill: color
  })));
};
// CONCATENATED MODULE: ./src/assets/icons/BeautyHealth.tsx
var BeautyHealth_jsx = external_react_default.a.createElement;

const BeautyHealth = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return BeautyHealth_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, BeautyHealth_jsx("g", {
    "data-name": "Group 12"
  }, BeautyHealth_jsx("g", {
    "data-name": "Group 11",
    fill: color
  }, BeautyHealth_jsx("path", {
    "data-name": "Path 31",
    d: "M2.662 15.865a.612.612 0 00.611.611H4.82a.612.612 0 00.611-.611v-1.368H2.662z"
  }), BeautyHealth_jsx("path", {
    "data-name": "Path 32",
    d: "M1.435 13.195a.793.793 0 00.791.791h3.64a.793.793 0 00.791-.791l1.015-8.766-6.614 5.507z"
  }), BeautyHealth_jsx("path", {
    "data-name": "Path 33",
    d: "M7.3 0H.791A.791.791 0 000 .79l.917 7.919 6.927-5.768L8.093.79a.791.791 0 00-.792-.791z"
  }), BeautyHealth_jsx("path", {
    "data-name": "Path 34",
    d: "M15.238 7.065a.769.769 0 00-.769-.769h-1.9a.769.769 0 00-.769.769v1.742h3.443z"
  }), BeautyHealth_jsx("path", {
    "data-name": "Path 35",
    d: "M16.269 9.343a2.021 2.021 0 00-.275-.02h-4.956a2.006 2.006 0 00-2 2v3.661a2 2 0 002 2h4.956a2 2 0 002.005-2v-3.66a2 2 0 00-1.731-1.985zm-2.753 5.4a1.582 1.582 0 111.582-1.582 1.582 1.582 0 01-1.582 1.582z"
  }))));
};
// CONCATENATED MODULE: ./src/assets/icons/ShavingNeeds.tsx
var ShavingNeeds_jsx = external_react_default.a.createElement;

const ShavingNeeds = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return ShavingNeeds_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, ShavingNeeds_jsx("g", {
    "data-name": "Group 17"
  }, ShavingNeeds_jsx("g", {
    "data-name": "Group 16"
  }, ShavingNeeds_jsx("path", {
    "data-name": "Path 60",
    d: "M17.24.609h-5.239a.741.741 0 00-.731.731v.667a.741.741 0 00.731.731h.183a1.222 1.222 0 011.222 1.222v1.222l-.152 3.351h2.777l-.183-3.351V3.959a1.222 1.222 0 011.222-1.222h.183a.741.741 0 00.731-.731v-.667a.741.741 0 00-.744-.731zm-2.011 4.265h-1.222v-.609h1.222zm.03-1.222h-1.28a1.741 1.741 0 00-.457-.914h2.163a1.952 1.952 0 00-.425.92z",
    fill: color
  }))), ShavingNeeds_jsx("g", {
    "data-name": "Group 19"
  }, ShavingNeeds_jsx("g", {
    "data-name": "Group 18"
  }, ShavingNeeds_jsx("path", {
    "data-name": "Path 61",
    d: "M16.023 9.138h-2.8l-.061 1.222h2.924z",
    fill: color
  }))), ShavingNeeds_jsx("g", {
    "data-name": "Group 21"
  }, ShavingNeeds_jsx("g", {
    "data-name": "Group 20"
  }, ShavingNeeds_jsx("path", {
    "data-name": "Path 62",
    d: "M16.413 16.144l-.243-5.178h-3.046l-.243 5.178a1.768 1.768 0 103.533 0z",
    fill: color
  }))), ShavingNeeds_jsx("g", {
    "data-name": "Group 23"
  }, ShavingNeeds_jsx("g", {
    "data-name": "Group 22"
  }, ShavingNeeds_jsx("path", {
    "data-name": "Path 63",
    d: "M8.499 1.827V0H2.436v2.742h-.918V4.11A2.283 2.283 0 000 6.274V7.31h6.092v7.31H0v1.066a2.3 2.3 0 002.284 2.285h3.934a2.282 2.282 0 002.284-2.284V6.244a2.312 2.312 0 00-1.526-2.163V2.742h-.915v-.915zM6.092 3.351h.3v.609h-4.26v-.609z",
    fill: color
  }))), ShavingNeeds_jsx("g", {
    "data-name": "Group 25"
  }, ShavingNeeds_jsx("g", {
    "data-name": "Group 24"
  }, ShavingNeeds_jsx("path", {
    "data-name": "Path 64",
    d: "M0 7.92v1.222h2.132a.304.304 0 110 .609H0v.914h3.655a.304.304 0 110 .609H0v.914h3.655a.304.304 0 110 .609H0v1.222h5.482V7.927z",
    fill: color
  }))));
};
// CONCATENATED MODULE: ./src/assets/icons/OralCare.tsx
var OralCare_jsx = external_react_default.a.createElement;

const OralCare = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return OralCare_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, OralCare_jsx("g", {
    fill: color
  }, OralCare_jsx("path", {
    "data-name": "Path 65",
    d: "M3.118 11.024a2.267 2.267 0 01.142 1.454l-.027.333c-.127 1.655.111 3.807 1.157 4.887a.463.463 0 00.1.046.252.252 0 00.317-.127.255.255 0 00.017-.15v-.02c-.017-.157-.385-3.87 1.27-5.887a1.035 1.035 0 011.6.009c1.623 2.025 1.257 5.719 1.241 5.875v.02a.255.255 0 00.017.15.252.252 0 00.317.127.388.388 0 00.111-.049c1.043-1.078 1.281-3.231 1.154-4.887a35.384 35.384 0 00-.027-.333 2.268 2.268 0 01.142-1.455 3.792 3.792 0 011.517-1.087 2.221 2.221 0 001-1.522 3.819 3.819 0 00-.16-2.192c-.555-1.388-1.827-1.924-3.5-1.466a4.521 4.521 0 00-1.368.622c-.2.126-.409.253-.666.384a2.761 2.761 0 001.566.237.248.248 0 11.1.486 3.837 3.837 0 01-2.355-.493 10.454 10.454 0 01-.478-.265 7.466 7.466 0 00-2.338-1.014A2.73 2.73 0 00.698 6.581a2.908 2.908 0 00.92 3.343 3.784 3.784 0 011.5 1.1z"
  }), OralCare_jsx("path", {
    "data-name": "Path 66",
    d: "M17.256.93H6.409L6.036.558A1.888 1.888 0 004.693.003H.664a.666.666 0 00-.666.666v1.889a.25.25 0 00.5 0V.667A.165.165 0 01.663.502h.1v2.087a.25.25 0 10.5 0V.497h.222v2.087a.25.25 0 10.5 0V.497h.222v2.087a.25.25 0 10.5 0V.497h.222v2.087a.25.25 0 10.5 0V.497h.222v2.087a.25.25 0 10.5 0V.497h.222v2.087a.25.25 0 10.5 0V.507a1.4 1.4 0 01.823.4l.792.789a1.888 1.888 0 001.343.555h9.441a.666.666 0 100-1.323z"
  })));
};
// EXTERNAL MODULE: ./src/assets/icons/FacialCare.tsx
var FacialCare = __webpack_require__("17+d");

// CONCATENATED MODULE: ./src/assets/icons/Deodorant.tsx
var Deodorant_jsx = external_react_default.a.createElement;

const Deodorant = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return Deodorant_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, Deodorant_jsx("g", {
    "data-name": "018---Roll-On",
    fill: color
  }, Deodorant_jsx("ellipse", {
    cx: "1.607",
    cy: "3.535",
    rx: "1.607",
    ry: "3.535",
    transform: "translate(2.176 8.678)"
  }), Deodorant_jsx("path", {
    d: "M7.244 4.821H.321a.321.321 0 00-.32.356l.027.254a71.835 71.835 0 01.311 11.215A1.282 1.282 0 001.621 18h4.325a1.282 1.282 0 001.282-1.353 71.835 71.835 0 01.3-11.214l.027-.254a.321.321 0 00-.316-.358zm-6.355.962a.321.321 0 01.321-.321h.641a.321.321 0 110 .641H1.21a.321.321 0 01-.321-.32zm2.9 10.607c-1.261 0-2.25-1.832-2.25-4.178s.988-4.178 2.25-4.178 2.25 1.832 2.25 4.178-.995 4.181-2.256 4.181zM6.354 6.104H3.14a.321.321 0 110-.641h3.214a.321.321 0 110 .641z"
  }), Deodorant_jsx("path", {
    "data-name": "Shape",
    d: "M3.783 0a2.25 2.25 0 00-2.224 1.929h4.447A2.25 2.25 0 003.783 0zM6.443 2.572H1.128a5.946 5.946 0 00-.237 1.607h5.785a5.946 5.946 0 00-.233-1.607zM11.82 16.716h3.214v-1.284a2.893 2.893 0 10-5.786 0v1.284h.964a.321.321 0 010 .641h-.964v.321a.321.321 0 00.321.321h5.143a.321.321 0 00.321-.321v-.321H11.82a.321.321 0 110-.641zm-.964-1.929a.321.321 0 01-.641 0 1.55 1.55 0 011.606-1.608.321.321 0 110 .641.916.916 0 00-.966.964z"
  })));
};
// CONCATENATED MODULE: ./src/assets/icons/BathOil.tsx
var BathOil_jsx = external_react_default.a.createElement;

const BathOil = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return BathOil_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, BathOil_jsx("g", {
    "data-name": "Group 27",
    fill: color
  }, BathOil_jsx("path", {
    "data-name": "Path 67",
    d: "M3.866 16.077a2.481 2.481 0 001.645-1.613h-.42q-.269 0-.531-.012a1.23 1.23 0 01-.87.755.724.724 0 10.175.863z"
  }), BathOil_jsx("path", {
    "data-name": "Path 68",
    d: "M15.172 16.479a.725.725 0 10-.432-1.309 1.458 1.458 0 01-.78-.77 4.085 4.085 0 01-.686.062h-.315a2.318 2.318 0 001.543 1.579.725.725 0 00.67.438z"
  }), BathOil_jsx("path", {
    "data-name": "Path 69",
    d: "M13.988 2.638l-1.482-1.482a5.015 5.015 0 00-1.356.863l1.972 1.972a4.972 4.972 0 00.866-1.353z"
  }), BathOil_jsx("path", {
    "data-name": "Path 70",
    d: "M11.173 3.19a.148.148 0 00.108-.043l.208-.208a.147.147 0 00-.164-.237.15.15 0 00-.044.029l-.209.208a.148.148 0 00.108.252z"
  }), BathOil_jsx("path", {
    "data-name": "Path 71",
    d: "M10.547 3.819a.148.148 0 00.108-.043l.208-.208a.148.148 0 00-.208-.208l-.208.208a.148.148 0 00.108.251z"
  }), BathOil_jsx("path", {
    "data-name": "Path 72",
    d: "M9.92 4.445a.148.148 0 00.108-.043l.208-.208a.148.148 0 00-.208-.208l-.208.208a.148.148 0 00.108.251z"
  }), BathOil_jsx("path", {
    "data-name": "Path 73",
    d: "M11.932 3.313a.146.146 0 00-.193-.193.15.15 0 00-.044.029l-.208.209a.148.148 0 00.209.208l.208-.209a.144.144 0 00.028-.044z"
  }), BathOil_jsx("path", {
    "data-name": "Path 74",
    d: "M11.277 3.775a.148.148 0 00-.208 0l-.208.208a.148.148 0 00.209.208l.208-.208a.148.148 0 000-.208z"
  }), BathOil_jsx("path", {
    "data-name": "Path 75",
    d: "M10.652 4.402a.148.148 0 00-.208 0l-.208.209a.148.148 0 00.209.208l.208-.209a.148.148 0 000-.208z"
  }), BathOil_jsx("path", {
    "data-name": "Path 76",
    d: "M12.007 4.028a.148.148 0 00.108-.043l.208-.208a.143.143 0 00.029-.044.148.148 0 00-.238-.164l-.208.208a.148.148 0 000 .208.146.146 0 00.101.043z"
  }), BathOil_jsx("path", {
    "data-name": "Path 77",
    d: "M11.38 4.654a.148.148 0 00.108-.043l.208-.208a.148.148 0 00-.208-.208l-.208.208a.148.148 0 00.108.251z"
  }), BathOil_jsx("path", {
    "data-name": "Path 78",
    d: "M10.756 5.28a.148.148 0 00.108-.043l.208-.208a.148.148 0 00-.208-.208l-.208.208a.148.148 0 00.108.251z"
  }), BathOil_jsx("path", {
    "data-name": "Path 79",
    d: "M17.414 7.083h-.886V.295a.295.295 0 00-.3-.3h-1.277a.3.3 0 00-.2.078l-1.061.976a1.175 1.175 0 00-.69.096l1.013 1.014a1.187 1.187 0 00.083-.68l.966-.888h.872v6.493H.59a.59.59 0 00-.59.591v.59a.59.59 0 00.59.59h.367c.045.229.108.491.176.794l.413 1.98a2.9 2.9 0 003.138 2.53c.134 0 .27.006.408.006h8.191a3.876 3.876 0 00.565-.041 3.157 3.157 0 002.637-2.342l.671-2.929h.3A.588.588 0 0018 8.265v-.59a.59.59 0 00-.586-.592zm-4.7 6.168a.035.035 0 000 .005v-.005z"
  })));
};
// CONCATENATED MODULE: ./src/assets/icons/Minus.tsx
var Minus_jsx = external_react_default.a.createElement;

const Minus = ({
  color = 'currentColor',
  width = '12px',
  height = '2px'
}) => {
  return Minus_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12 2"
  }, Minus_jsx("rect", {
    "data-name": "Rectangle 522",
    width: "12",
    height: "2",
    rx: "1",
    fill: color
  }));
};
// CONCATENATED MODULE: ./src/assets/icons/category-icons.ts































// CONCATENATED MODULE: ./src/components/tree-menu/tree-menu.tsx
var tree_menu_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const Tree = external_react_default.a.memo(({
  children,
  name,
  icon,
  isOpen,
  onClick,
  depth,
  defaultOpen = false
}) => {
  const previous = usePrevious(isOpen);
  const [bind, {
    height: viewHeight
  }] = useMeasure();
  const {
    height,
    opacity,
    transform
  } = Object(external_react_spring_["useSpring"])({
    from: {
      height: 0,
      opacity: 0,
      transform: 'translate3d(20px,0,0)'
    },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`
    }
  });
  const Icon = icon ? category_icons_namespaceObject[icon] : depth === 'child' ? Minus : null;
  return tree_menu_jsx(Frame, {
    depth: depth
  }, tree_menu_jsx(Header, {
    open: isOpen,
    depth: depth,
    className: depth
  }, Icon !== null && tree_menu_jsx(IconWrapper, {
    depth: depth
  }, tree_menu_jsx(Icon, null)), tree_menu_jsx(Title, {
    onClick: onClick
  }, name)), tree_menu_jsx(Content, {
    style: {
      opacity,
      height: isOpen && previous === isOpen ? 'auto' : height
    }
  }, tree_menu_jsx(external_react_spring_["animated"].div, _extends({
    style: {
      transform
    }
  }, bind, {
    children: children
  }))));
});
const TreeMenu = ({
  data,
  className,
  onClick,
  active
}) => {
  const handler = children => {
    return children.map(subOption => {
      if (!subOption.children) {
        return tree_menu_jsx(Tree, {
          key: subOption.title,
          name: subOption.title,
          icon: subOption.icon,
          depth: "child",
          onClick: () => onClick(subOption.slug),
          isOpen: active === subOption.slug
        });
      }

      return tree_menu_jsx(Tree, {
        key: subOption.title,
        name: subOption.title,
        icon: subOption.icon,
        depth: "parent",
        onClick: () => onClick(subOption.slug),
        isOpen: active === subOption.slug || subOption.children.some(item => item.slug === active)
      }, handler(subOption.children));
    });
  };

  return tree_menu_jsx(external_react_default.a.Fragment, null, handler(data));
};
// EXTERNAL MODULE: ./src/graphql/query/category.query.ts
var category_query = __webpack_require__("OT+S");

// EXTERNAL MODULE: ./src/site-settings/site-navigation.ts
var site_navigation = __webpack_require__("5l48");

// CONCATENATED MODULE: ./src/layouts/sidebar/sidebar.tsx
var sidebar_jsx = external_react_default.a.createElement;

function sidebar_extends() { sidebar_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return sidebar_extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



















const SidebarCategory = ({
  deviceType: {
    mobile,
    tablet,
    desktop
  },
  type
}) => {
  const router = Object(router_["useRouter"])();
  const {
    data,
    loading
  } = Object(react_hooks_["useQuery"])(category_query["a" /* GET_CATEGORIES */], {
    variables: {
      type
    }
  });
  const {
    pathname,
    query
  } = router;
  const selectedQueries = query.category;
  const {
    isRtl
  } = Object(language_provider["b" /* useLocale */])();

  const onCategoryClick = slug => {
    const {
      type
    } = query,
          rest = _objectWithoutProperties(query, ["type"]);

    if (type) {
      router.push({
        pathname,
        query: _objectSpread(_objectSpread({}, rest), {}, {
          category: slug
        })
      }, {
        pathname: `/${type}`,
        query: _objectSpread(_objectSpread({}, rest), {}, {
          category: slug
        })
      });
    } else {
      router.push({
        pathname,
        query: _objectSpread(_objectSpread({}, rest), {}, {
          category: slug
        })
      });
    }
  };

  const isSidebarSticky = Object(app_provider["c" /* useAppState */])('isSidebarSticky');

  if (!data || loading) {
    if (mobile || tablet) {
      return sidebar_jsx(placeholder["b" /* SidebarMobileLoader */], null);
    }

    return sidebar_jsx(placeholder["a" /* SidebarLoader */], null);
  }

  return sidebar_jsx(CategoryWrapper, null, sidebar_jsx(PopoverWrapper, null, sidebar_jsx(popover["a" /* default */], {
    handler: sidebar_jsx(PopoverHandler, null, sidebar_jsx("div", null, sidebar_jsx(CategoryIcon, null), "Select your Category"), sidebar_jsx("div", null, sidebar_jsx(ArrowDropDown, null))),
    className: "category-popover",
    content: sidebar_jsx(external_react_default.a.Fragment, null, type === 'medicine' && sidebar_jsx(link_default.a, {
      href: site_navigation["r" /* REQUEST_MEDICINE_MENU_ITEM */].href
    }, sidebar_jsx(RequestMedicine, null, sidebar_jsx(external_react_intl_["FormattedMessage"], {
      id: site_navigation["r" /* REQUEST_MEDICINE_MENU_ITEM */].id,
      defaultMessage: site_navigation["r" /* REQUEST_MEDICINE_MENU_ITEM */].defaultMessage
    }))), sidebar_jsx(TreeMenu, {
      data: data.categories,
      onClick: onCategoryClick,
      active: selectedQueries
    }))
  })), sidebar_jsx(SidebarWrapper, {
    style: {
      paddingTop: type === 'medicine' ? 0 : 45
    }
  }, sidebar_jsx(external_react_stickynode_default.a, {
    enabled: isSidebarSticky,
    top: type === 'medicine' ? 89 : 110
  }, type === 'medicine' && sidebar_jsx(link_default.a, {
    href: site_navigation["r" /* REQUEST_MEDICINE_MENU_ITEM */].href
  }, sidebar_jsx(RequestMedicine, null, sidebar_jsx(external_react_intl_["FormattedMessage"], {
    id: site_navigation["r" /* REQUEST_MEDICINE_MENU_ITEM */].id,
    defaultMessage: site_navigation["r" /* REQUEST_MEDICINE_MENU_ITEM */].defaultMessage
  }))), sidebar_jsx(external_react_custom_scrollbars_["Scrollbars"], {
    universal: true,
    autoHide: true,
    autoHeight: true,
    autoHeightMax: 688,
    renderView: props => sidebar_jsx("div", sidebar_extends({}, props, {
      style: _objectSpread(_objectSpread({}, props.style), {}, {
        marginLeft: isRtl ? props.style.marginRight : 0,
        marginRight: isRtl ? 0 : props.style.marginRight
      })
    }))
  }, sidebar_jsx(TreeWrapper, null, sidebar_jsx(TreeMenu, {
    data: data.categories,
    onClick: onCategoryClick,
    active: selectedQueries
  }))))));
};

/* harmony default export */ var sidebar = __webpack_exports__["default"] = (SidebarCategory);

/***/ }),

/***/ "Sagj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarMobileLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarLoader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("EGWi");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const PostLoader = props => __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
  height: 350,
  width: 245,
  speed: 2,
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb"
}, props), __jsx("rect", {
  x: "2",
  y: "2",
  rx: "0",
  ry: "0",
  width: "240",
  height: "197"
}), __jsx("rect", {
  x: "15",
  y: "220",
  rx: "0",
  ry: "0",
  width: "140",
  height: "25"
}), __jsx("rect", {
  x: "15",
  y: "254",
  rx: "0",
  ry: "0",
  width: "65",
  height: "15"
}), __jsx("rect", {
  x: "15",
  y: "300",
  rx: "0",
  ry: "0",
  width: "67",
  height: "20"
}), __jsx("rect", {
  x: "170",
  y: "300",
  rx: "0",
  ry: "0",
  width: "60",
  height: "20"
}));

const SidebarMobileLoader = () => __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_1___default.a, {
  height: 46,
  width: 400,
  speed: 2,
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb"
}, __jsx("rect", {
  x: "58",
  y: "10",
  rx: "0",
  ry: "0",
  width: "287",
  height: "26"
}), __jsx("rect", {
  x: "364",
  y: "10",
  rx: "0",
  ry: "0",
  width: "26",
  height: "26"
}), __jsx("rect", {
  x: "16",
  y: "10",
  rx: "0",
  ry: "0",
  width: "26",
  height: "26"
}));
const SidebarLoader = props => __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
  height: 400,
  width: "calc(100% - 30px)",
  speed: 2,
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb"
}, props), __jsx("rect", {
  x: "376",
  y: "22",
  rx: "0",
  ry: "0",
  width: "0",
  height: "0"
}), __jsx("rect", {
  x: "27",
  y: "50",
  rx: "0",
  ry: "0",
  width: "24",
  height: "24"
}), __jsx("rect", {
  x: "69",
  y: "50",
  rx: "0",
  ry: "0",
  width: "260",
  height: "24"
}), __jsx("rect", {
  x: "27",
  y: "89",
  rx: "0",
  ry: "0",
  width: "24",
  height: "24"
}), __jsx("rect", {
  x: "69",
  y: "89",
  rx: "0",
  ry: "0",
  width: "260",
  height: "24"
}), __jsx("rect", {
  x: "27",
  y: "128",
  rx: "0",
  ry: "0",
  width: "24",
  height: "24"
}), __jsx("rect", {
  x: "69",
  y: "128",
  rx: "0",
  ry: "0",
  width: "260",
  height: "24"
}), __jsx("rect", {
  x: "27",
  y: "167",
  rx: "0",
  ry: "0",
  width: "24",
  height: "24"
}), __jsx("rect", {
  x: "69",
  y: "167",
  rx: "0",
  ry: "0",
  width: "260",
  height: "24"
}), __jsx("rect", {
  x: "27",
  y: "206",
  rx: "0",
  ry: "0",
  width: "24",
  height: "24"
}), __jsx("rect", {
  x: "69",
  y: "206",
  rx: "0",
  ry: "0",
  width: "260",
  height: "24"
}), __jsx("rect", {
  x: "27",
  y: "245",
  rx: "0",
  ry: "0",
  width: "24",
  height: "24"
}), __jsx("rect", {
  x: "69",
  y: "245",
  rx: "0",
  ry: "0",
  width: "260",
  height: "24"
}), __jsx("rect", {
  x: "27",
  y: "284",
  rx: "0",
  ry: "0",
  width: "24",
  height: "24"
}), __jsx("rect", {
  x: "69",
  y: "284",
  rx: "0",
  ry: "0",
  width: "260",
  height: "24"
}), __jsx("rect", {
  x: "27",
  y: "323",
  rx: "0",
  ry: "0",
  width: "24",
  height: "24"
}), __jsx("rect", {
  x: "69",
  y: "323",
  rx: "0",
  ry: "0",
  width: "260",
  height: "24"
}));
/* harmony default export */ __webpack_exports__["c"] = (PostLoader);

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

/***/ })

};;