exports.ids = [34];
exports.modules = {

/***/ "IQ03":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/button/button.tsx
var button_button = __webpack_require__("B68Z");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./src/components/popover/popover.tsx + 2 modules
var popover = __webpack_require__("63jn");

// EXTERNAL MODULE: ./src/components/nav-link/nav-link.tsx
var nav_link = __webpack_require__("Ek28");

// EXTERNAL MODULE: ./src/site-settings/site-navigation.ts
var site_navigation = __webpack_require__("5l48");

// CONCATENATED MODULE: ./src/layouts/header/menu/authorized-menu.tsx
var __jsx = external_react_default.a.createElement;




const AuthorizedMenu = ({
  onLogout
}) => {
  return __jsx(external_react_default.a.Fragment, null, site_navigation["a" /* AUTHORIZED_MENU_ITEMS */].map((item, idx) => __jsx(nav_link["a" /* default */], {
    key: idx,
    className: "menu-item",
    href: item.href,
    label: item.defaultMessage,
    intlId: item.id
  })), __jsx("div", {
    className: "menu-item",
    onClick: onLogout
  }, __jsx("a", null, __jsx("span", null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "navlinkLogout",
    defaultMessage: "Logout"
  })))));
};
// CONCATENATED MODULE: ./src/layouts/header/menu/auth-menu.tsx
var auth_menu_jsx = external_react_default.a.createElement;






const AuthMenu = ({
  isAuthenticated,
  onJoin,
  onLogout,
  avatar
}) => {
  return !isAuthenticated ? auth_menu_jsx(button_button["a" /* Button */], {
    variant: "primary",
    onClick: onJoin
  }, auth_menu_jsx(external_react_intl_["FormattedMessage"], {
    id: "joinButton",
    defaultMessage: "join"
  })) : auth_menu_jsx(popover["a" /* default */], {
    direction: "right",
    className: "user-pages-dropdown",
    handler: auth_menu_jsx("img", {
      src: avatar,
      alt: "user"
    }),
    content: auth_menu_jsx(AuthorizedMenu, {
      onLogout: onLogout
    })
  });
};

/* harmony default export */ var auth_menu = __webpack_exports__["default"] = (AuthMenu);

/***/ })

};;