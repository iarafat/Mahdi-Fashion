exports.ids = [23];
exports.modules = {
  /***/ '0THn': /***/ function (
    module,
    __webpack_exports__,
    __webpack_require__
  ) {
    'use strict';

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, 'a', function () {
      return /* binding */ Counter;
    });

    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__('cDcd');
    var external_react_default = /*#__PURE__*/ __webpack_require__.n(
      external_react_
    );

    // EXTERNAL MODULE: ./src/assets/icons/PlusMinus.tsx
    var PlusMinus = __webpack_require__('OeMJ');

    // EXTERNAL MODULE: external "styled-components"
    var external_styled_components_ = __webpack_require__('Dtiu');
    var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(
      external_styled_components_
    );

    // EXTERNAL MODULE: external "@styled-system/css"
    var css_ = __webpack_require__('ExBD');
    var css_default = /*#__PURE__*/ __webpack_require__.n(css_);

    // EXTERNAL MODULE: external "styled-system"
    var external_styled_system_ = __webpack_require__('4JT2');

    // CONCATENATED MODULE: ./src/components/counter/counter.style.tsx

    const CounterBox = external_styled_components_default.a.div.withConfig({
      displayName: 'counterstyle__CounterBox',
      componentId: 'sc-8iu0h2-0',
    })(
      css_default()({
        display: 'flex',
        backgroundColor: 'primary.regular',
        color: 'white',
        fontSize: 'base',
        fontWeight: 'bold',
      }),
      {
        borderRadius: 200,
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden',
        flexShrink: 0,
        '&:focus': {
          outline: 'none',
        },
      },
      Object(external_styled_system_['variant'])({
        variants: {
          horizontal: {
            width: 104,
            height: 36,
          },
          vertical: {
            width: 30,
            height: 90,
            flexDirection: 'column-reverse',
          },
          lightHorizontal: {
            width: 104,
            height: 36,
            backgroundColor: 'gray.200',
            color: 'text.bold',
          },
          lightVertical: {
            width: 30,
            height: 90,
            flexDirection: 'column-reverse',
            backgroundColor: 'gray.200',
            color: 'text.bold',
          },
        },
      })
    );
    const CounterButton = external_styled_components_default.a.button.withConfig(
      {
        displayName: 'counterstyle__CounterButton',
        componentId: 'sc-8iu0h2-1',
      }
    )(
      {
        border: 'none',
        backgroundColor: 'transparent',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: 10,
        cursor: 'pointer',
        '&:hover, &:focus': {
          outline: 'none',
        },
      },
      Object(external_styled_system_['variant'])({
        variants: {
          lightHorizontal: {
            color: 'text.regular',
          },
          lightVertical: {
            color: 'text.regular',
          },
        },
      })
    );
    const CounterValue = external_styled_components_default.a.span.withConfig({
      displayName: 'counterstyle__CounterValue',
      componentId: 'sc-8iu0h2-2',
    })({
      pointerEvents: 'none',
    });
    CounterValue.displayName = 'CounterValue';
    CounterButton.displayName = 'CounterButton';
    CounterBox.displayName = 'CounterBox';
    CounterBox.defaultProps = {
      variant: 'horizontal',
    };
    // CONCATENATED MODULE: ./src/components/counter/counter.tsx
    var __jsx = external_react_default.a.createElement;

    const Counter = ({
      onDecrement,
      onIncrement,
      value,
      variant,
      className,
    }) => {
      return __jsx(
        CounterBox,
        {
          variant: variant,
          className: className,
        },
        __jsx(
          CounterButton,
          {
            onClick: onDecrement,
            variant: variant,
          },
          __jsx(PlusMinus['a' /* Minus */], null)
        ),
        __jsx(CounterValue, null, value),
        __jsx(
          CounterButton,
          {
            onClick: onIncrement,
            variant: variant,
          },
          __jsx(PlusMinus['b' /* Plus */], null)
        )
      );
    };

    /***/
  },

  /***/ '5JaT': /***/ function (module, exports) {
    module.exports =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAADwCAAAAADUNdWkAAADYklEQVR42u3Z7ZKiMBCF4b7/mw1EUfkwrmOtuzoiEKEbE97ze2qqfPS0TSsX8hCBAA444IADDjjggAMOOOCAAw444IADDjjgIHDAAQcccMABBxxwwAEHHHDAAQcccMABBxwEDjjggAMOOOCAAw444IADDjjggAMOOOCAg8ABBxxwwAEHHHDAAQcccMABBxxwwAEHHHAQOOCAA44v5WjbNsBxSzh59xN/CHBcmsLdUxw3z3Fwj9mHbXM8a1w9Ns3RuN85bpmjfOEownY5aveaw3Y59j0c5XY5XF8CHI9pt8oRFuBo+XQ8pCuqfDiKubMjXB936mw4qh4NH/MPdusNGwWOpofjFL3iF+dctlI/ayu9b3E+ZMLRvnBETILu3+ipMuF4WdMjXlgoVn3w07l31B8/sDwVrcmE49L+f1llzIt6/lYqukw4rh+Q6vax39dzWmY+TlV/WIh9c19n8C4njsici9UPJV/EEXzfdl9nyTFhCFS9z36249SIox1/aDm6/pjeWW04Qjm6UzXuXXx2HD9PZd3E3fw1VWYc7eib3D9G7cep2FRl7BFk5wbT5sRx/42yG/2LdzE7fohRVQbrUruxWG3rYlWVgboMjVHjcSpmVXlblzBBw+r4IWZVeVsX7yalyYEjlGPvcTVNw2ZbF8Oq9NaldlNjMU7FsCp9dWnd9OxS5wjlyEg8FxEcBscPMa3K77oE76JSJ83Rjj2gVnEa+uNUbKvyXJeji4328UOMq/JYl8bFxyfL0Y28pK74gEN5W1fk8MMLd+wYNRmnehxDg6EbP3Gsc/wQ86r8rcvhUw3V44fYV+VWl9p9HsVtXVaoyu0tnsGhOE5lharMzzExDq/LoXb8kFWqMjta27okWBXFcSopVkXv+CEpVkXv+CFJVkVtW5c0q6I1TiXRqigdPyTVqugcPyTVquhs65JsVVTGqaRbFY3jhyRcFYXjh6RcleW3dUm6KouPU0m6KosfPyTtqix9/FiUY6WcvvabJfXAAQcccMABBxxwwAEHHHDAAQcccMABBxxwEDjggAMOOOCAAw444IADDjjggAMOOOCAAw4CBxxwwAEHHHDAAQcccMABBxxwwAEHHHDAQeCAAw444IADDjjggAMOOOCAAw444IADDjgIHHDAAQcci+UPkso6r/spGNEAAAAASUVORK5CYII=';

    /***/
  },

  /***/ MuUD: /***/ function (
    module,
    __webpack_exports__,
    __webpack_require__
  ) {
    'use strict';
    // ESM COMPAT FLAG
    __webpack_require__.r(__webpack_exports__);

    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__('cDcd');
    var external_react_default = /*#__PURE__*/ __webpack_require__.n(
      external_react_
    );

    // EXTERNAL MODULE: ./src/components/image/image.tsx
    var image_image = __webpack_require__('dFr0');

    // EXTERNAL MODULE: ./src/components/button/button.tsx
    var button_button = __webpack_require__('B68Z');

    // EXTERNAL MODULE: ./src/components/product-card/product-card.style.tsx
    var product_card_style = __webpack_require__('ZhUJ');

    // EXTERNAL MODULE: ./src/contexts/cart/use-cart.tsx + 2 modules
    var use_cart = __webpack_require__('tFEG');

    // EXTERNAL MODULE: ./src/components/counter/counter.tsx + 1 modules
    var counter = __webpack_require__('0THn');

    // CONCATENATED MODULE: ./src/utils/cart-animation.ts
    const cartAnimation = (event) => {
      const getClosest = function (elem, selector) {
        for (; elem && elem !== document; elem = elem.parentNode) {
          if (elem.matches(selector)) return elem;
        }

        return null;
      }; // start animation block

      let imgToDrag = getClosest(event.target, '.product-card');
      let viewCart = document.getElementsByClassName('product-cart')[0];
      let imgToDragImage = imgToDrag.querySelector('.product-image');
      let disLeft = imgToDrag.getBoundingClientRect().left;
      let disTop = imgToDrag.getBoundingClientRect().top;
      let cartLeft = viewCart.getBoundingClientRect().left;
      let cartTop = viewCart.getBoundingClientRect().top;
      let image = imgToDragImage.cloneNode(true);
      image.style =
        'z-index: 11111; width: 100px;opacity:1; position:fixed; top:' +
        disTop +
        'px;left:' +
        disLeft +
        'px;transition: left 1s, top 1s, width 1s, opacity 1s cubic-bezier(1, 1, 1, 1);border-radius: 50px; overflow: hidden; box-shadow: 0 21px 36px rgba(0,0,0,0.1)';
      var reChange = document.body.appendChild(image);
      setTimeout(function () {
        image.style.left = cartLeft + 'px';
        image.style.top = cartTop + 'px';
        image.style.width = '40px';
        image.style.opacity = '0';
      }, 200);
      setTimeout(function () {
        reChange.parentNode.removeChild(reChange);
      }, 1000); // End Animation Block
    };
    // EXTERNAL MODULE: external "react-intl"
    var external_react_intl_ = __webpack_require__('k004');

    // EXTERNAL MODULE: ./src/assets/icons/CartIcon.tsx
    var CartIcon = __webpack_require__('VlNk');

    // CONCATENATED MODULE: ./src/components/product-card/product-card-one/product-card-one.tsx
    var __jsx = external_react_default.a.createElement;

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

    // product card for general

    const ProductCard = (_ref) => {
      let {
          title,
          image,
          weight,
          price,
          salePrice,
          discountInPercent,
          cartProducts,
          addToCart,
          updateCart,
          value,
          currency,
          onChange,
          increment,
          decrement,
          data,
          deviceType,
          onClick,
        } = _ref,
        props = _objectWithoutProperties(_ref, [
          'title',
          'image',
          'weight',
          'price',
          'salePrice',
          'discountInPercent',
          'cartProducts',
          'addToCart',
          'updateCart',
          'value',
          'currency',
          'onChange',
          'increment',
          'decrement',
          'data',
          'deviceType',
          'onClick',
        ]);

      const { addItem, removeItem, getItem, isInCart, items } = Object(
        use_cart['b' /* useCart */]
      )();

      const handleAddClick = (e) => {
        e.stopPropagation();
        addItem(data);

        if (!isInCart(data.id)) {
          cartAnimation(e);
        }
      };

      const handleRemoveClick = (e) => {
        e.stopPropagation();
        removeItem(data);
      };

      return __jsx(
        product_card_style['h' /* ProductCardWrapper */],
        {
          onClick: onClick,
          className: 'product-card',
        },
        __jsx(
          product_card_style['i' /* ProductImageWrapper */],
          null,
          __jsx(image_image['a' /* default */], {
            url: image,
            className: 'product-image',
            style: {
              position: 'relative',
            },
            alt: title,
          }),
          discountInPercent
            ? __jsx(
                external_react_default.a.Fragment,
                null,
                __jsx(
                  product_card_style['f' /* DiscountPercent */],
                  null,
                  discountInPercent,
                  '%'
                )
              )
            : '',
          data.product_quantity == 0
            ? __jsx(
                external_react_default.a.Fragment,
                null,
                __jsx(
                  product_card_style['g' /* OutOfStock */],
                  null,
                  'Out Of Stock'
                )
              )
            : ''
        ),
        __jsx(
          product_card_style['j' /* ProductInfo */],
          null,
          __jsx(
            'h3',
            {
              className: 'product-title',
            },
            title
          ),
          __jsx(
            'span',
            {
              className: 'product-weight',
            },
            weight
          ),
          __jsx(
            'div',
            {
              className: 'product-meta',
            },
            __jsx(
              'div',
              {
                className: 'productPriceWrapper',
              },
              discountInPercent
                ? __jsx(
                    'span',
                    {
                      className: 'discountedPrice',
                    },
                    currency,
                    price
                  )
                : '',
              __jsx(
                'span',
                {
                  className: 'product-price',
                },
                currency,
                salePrice ? salePrice : price
              )
            ),
            data.product_quantity != 0
              ? !isInCart(data.id)
                ? __jsx(
                    button_button['a' /* Button */],
                    {
                      className: 'cart-button',
                      variant: 'secondary',
                      borderRadius: 100,
                      onClick: handleAddClick,
                    },
                    __jsx(CartIcon['a' /* CartIcon */], null),
                    __jsx(
                      product_card_style['e' /* ButtonText */],
                      null,
                      __jsx(external_react_intl_['FormattedMessage'], {
                        id: 'addCartButton',
                        defaultMessage: 'Cart',
                      })
                    )
                  )
                : __jsx(counter['a' /* Counter */], {
                    value: getItem(data.id).quantity,
                    onDecrement: handleRemoveClick,
                    onIncrement: handleAddClick,
                  })
              : __jsx(
                  button_button['a' /* Button */],
                  {
                    className: 'cart-button',
                    variant: 'secondary',
                    borderRadius: 100,
                    onClick: (e) => {
                      e.preventDefault();
                    },
                    disabled: true,
                  },
                  __jsx(CartIcon['a' /* CartIcon */], null),
                  __jsx(
                    product_card_style['e' /* ButtonText */],
                    null,
                    __jsx(external_react_intl_['FormattedMessage'], {
                      id: 'addCartButton',
                      defaultMessage: 'Cart',
                    })
                  )
                )
          )
        )
      );
    };

    /* harmony default export */ var product_card_one = (__webpack_exports__[
      'default'
    ] = ProductCard);

    /***/
  },

  /***/ OeMJ: /***/ function (
    module,
    __webpack_exports__,
    __webpack_require__
  ) {
    'use strict';
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'b',
      function () {
        return Plus;
      }
    );
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'a',
      function () {
        return Minus;
      }
    );
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      'cDcd'
    );
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
      react__WEBPACK_IMPORTED_MODULE_0__
    );
    var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
    // SVG plus icon

    const Plus = ({
      color = 'currentColor',
      width = '18px',
      height = '18px',
    }) => {
      return __jsx(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: width,
          height: height,
          viewBox: '0 0 12 12',
        },
        __jsx(
          'g',
          {
            id: 'Group_3351',
            'data-name': 'Group 3351',
            transform: 'translate(-1367 -190)',
          },
          __jsx('rect', {
            'data-name': 'Rectangle 520',
            width: '12',
            height: '2',
            rx: '1',
            transform: 'translate(1367 195)',
            fill: color,
          }),
          __jsx('rect', {
            'data-name': 'Rectangle 521',
            width: '12',
            height: '2',
            rx: '1',
            transform: 'translate(1374 190) rotate(90)',
            fill: color,
          })
        )
      );
    }; // SVG minus icon

    const Minus = ({
      color = 'currentColor',
      width = '12px',
      height = '2px',
    }) => {
      return __jsx(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: width,
          height: height,
          viewBox: '0 0 12 2',
        },
        __jsx('rect', {
          'data-name': 'Rectangle 522',
          width: '12',
          height: '2',
          rx: '1',
          fill: color,
        })
      );
    };

    /***/
  },

  /***/ VlNk: /***/ function (
    module,
    __webpack_exports__,
    __webpack_require__
  ) {
    'use strict';
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'a',
      function () {
        return CartIcon;
      }
    );
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      'cDcd'
    );
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
      react__WEBPACK_IMPORTED_MODULE_0__
    );
    var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

    const CartIcon = ({
      color = 'currentColor',
      width = '18px',
      height = '18px',
    }) => {
      return __jsx(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: width,
          height: height,
          viewBox: '0 0 14.4 12',
        },
        __jsx(
          'g',
          {
            'data-name': 'Group 120',
            transform: 'translate(-288 -413.89)',
          },
          __jsx('path', {
            'data-name': 'Path 154',
            fill: color,
            d:
              'M298.7,418.289l-2.906-4.148a.835.835,0,0,0-.528-.251.607.607,0,0,0-.529.251l-2.905,4.148h-3.17a.609.609,0,0,0-.661.625v.191l1.651,5.84a1.336,1.336,0,0,0,1.255.945h8.588a1.261,1.261,0,0,0,1.254-.945l1.651-5.84v-.191a.609.609,0,0,0-.661-.625Zm-5.419,0,1.984-2.767,1.98,2.767Zm1.984,5.024a1.258,1.258,0,1,1,1.319-1.258,1.3,1.3,0,0,1-1.319,1.258Zm0,0',
          })
        )
      );
    };

    /***/
  },

  /***/ ZhUJ: /***/ function (
    module,
    __webpack_exports__,
    __webpack_require__
  ) {
    'use strict';
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'h',
      function () {
        return ProductCardWrapper;
      }
    );
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'i',
      function () {
        return ProductImageWrapper;
      }
    );
    /* unused harmony export SaleTag */
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'f',
      function () {
        return DiscountPercent;
      }
    );
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'g',
      function () {
        return OutOfStock;
      }
    );
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'j',
      function () {
        return ProductInfo;
      }
    );
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'e',
      function () {
        return ButtonText;
      }
    );
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'c',
      function () {
        return BookImageWrapper;
      }
    );
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'd',
      function () {
        return BookInfo;
      }
    );
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'k',
      function () {
        return ProductName;
      }
    );
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'a',
      function () {
        return AuthorInfo;
      }
    );
    /* unused harmony export PriceWrapper */
    /* unused harmony export Price */
    /* unused harmony export DiscountedPrice */
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'b',
      function () {
        return BookCardWrapper;
      }
    );
    /* unused harmony export FoodCardWrapper */
    /* unused harmony export FoodImageWrapper */
    /* unused harmony export ProductMeta */
    /* unused harmony export DeliveryOpt */
    /* unused harmony export Category */
    /* unused harmony export Duration */
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      'Dtiu'
    );
    /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
      styled_components__WEBPACK_IMPORTED_MODULE_0__
    );
    /* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      '/JeY'
    );
    /* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
      _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__
    );
    /* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      'ExBD'
    );
    /* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
      _styled_system_css__WEBPACK_IMPORTED_MODULE_2__
    );

    const StyledBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
      {
        displayName: 'product-cardstyle__StyledBox',
        componentId: 'sc-1j4qmg9-0',
      }
    )(
      _styled_system_css__WEBPACK_IMPORTED_MODULE_2___default()({
        py: [30, 50],
        px: ['1rem', 0],
      }),
      {
        width: '100%',
      }
    );
    const ProductCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
      {
        displayName: 'product-cardstyle__ProductCardWrapper',
        componentId: 'sc-1j4qmg9-1',
      }
    )(
      _styled_system_css__WEBPACK_IMPORTED_MODULE_2___default()({
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        position: 'relative',
        fontFamily: 'inherit',
        borderRadius: 'base',
        cursor: 'pointer',
      })
    );
    const ProductImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
      {
        displayName: 'product-cardstyle__ProductImageWrapper',
        componentId: 'sc-1j4qmg9-2',
      }
    )([
      'height:240px;padding:5px;position:relative;text-align:center;display:flex;align-items:center;justify-content:center;img{max-width:100%;max-height:100%;display:inline-block;}@media (max-width:767px){height:145px;}',
    ]);
    const SaleTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig(
      {
        displayName: 'product-cardstyle__SaleTag',
        componentId: 'sc-1j4qmg9-3',
      }
    )(
      [
        'font-family:',
        ';font-size:',
        'px;font-weight:',
        ';color:',
        ';background-color:',
        ';padding:0 10px;line-height:24px;border-radius:',
        ';display:inline-block;position:absolute;top:10px;right:10px;',
      ],
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fonts.body',
        'sans-serif'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.sm',
        '13'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontWeights.bold',
        '700'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.white',
        '#ffffff'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.yellow.regular',
        '#FFAD5E'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'radii.medium',
        '12px'
      )
    );
    const DiscountPercent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig(
      {
        displayName: 'product-cardstyle__DiscountPercent',
        componentId: 'sc-1j4qmg9-4',
      }
    )(
      [
        'font-family:',
        ';font-size:',
        'px;font-weight:',
        ';color:',
        ';line-height:24px;background-color:',
        ';padding-left:10px;padding-right:10px;position:relative;display:inline-block;position:absolute;top:15px;right:15px;border-radius:',
        ';z-index:2;',
      ],
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fonts.body',
        'sans-serif'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.sm',
        '13'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontWeights.bold',
        '700'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.white',
        '#ffffff'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.yellow.regular',
        '#FFAD5E'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'radii.medium',
        '12px'
      )
    );
    const OutOfStock = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig(
      {
        displayName: 'product-cardstyle__OutOfStock',
        componentId: 'sc-1j4qmg9-5',
      }
    )(
      [
        'font-family:',
        ';font-size:',
        'px;font-weight:',
        ';color:',
        ';line-height:24px;background-color:#ff5e5e;padding-left:10px;padding-right:10px;position:relative;display:inline-block;position:absolute;top:15px;left:15px;border-radius:',
        ';z-index:2;',
      ],
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fonts.body',
        'sans-serif'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.sm',
        '13'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontWeights.bold',
        '700'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.white',
        '#ffffff'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'radii.medium',
        '12px'
      )
    );
    const ProductInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
      {
        displayName: 'product-cardstyle__ProductInfo',
        componentId: 'sc-1j4qmg9-6',
      }
    )(
      [
        'padding:20px 25px 30px;@media (max-width:767px){padding:15px 20px;min-height:123px;}.product-title{font-family:',
        ';font-size:',
        'px;font-weight:',
        ';color:',
        ';margin:0 0 7px 0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;@media (max-width:767px){font-size:14px;margin:0 0 5px 0;}}.product-weight{font-family:',
        ';font-size:',
        'px;font-weight:',
        ';color:',
        ';@media (max-width:767px){font-size:',
        'px;}}.product-meta{margin-top:30px;display:flex;align-items:center;justify-content:space-between;@media (max-width:767px){min-height:32px;}.productPriceWrapper{position:relative;display:flex;flex-direction:column;align-items:flex-start;.product-price{font-family:',
        ';font-size:',
        'px;font-weight:',
        ';color:',
        ';@media (max-width:767px){font-size:calc(',
        'px - 1px);}}.discountedPrice{font-family:',
        ';font-size:',
        'px;font-weight:',
        ';color:',
        ";font-style:italic;padding:0 5px;position:relative;overflow:hidden;position:absolute;top:-20px;left:-4px;&:before{content:'';width:100%;height:1px;display:inline-block;background-color:",
        ';position:absolute;top:50%;left:0;}}}.cart-button{border:2px solid ',
        ';border-radius:',
        ';height:36px;padding-left:17px;padding-right:17px;font-size:',
        'px;font-weight:',
        ';@media (max-width:767px){width:36px;height:36px;padding:0;border-radius:50%;}.btn-text{padding:0 0 0 6px;@media (max-width:767px){display:none;}}&:hover{color:',
        ';background-color:',
        ';border-color:',
        ";}svg{fill:currentColor;@media (max-width:767px){margin:0;}}}@media (max-width:767px){.quantity{width:32px;height:90px;display:block;flex-shrink:0;position:absolute;bottom:15px;right:15px;z-index:1;box-shadow:0 10px 20px rgba(0,0,0,0.16);}button{width:100%;height:27px;}.incBtn{top:0;justify-content:center;}.decBtn{top:auto;bottom:0;justify-content:center;}input[type='number']{left:0;font-size:calc(",
        'px - 1px);height:calc(100% - 54px);position:absolute;top:27px;width:100%;color:',
        ';}}}',
      ],
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fonts.body',
        'sans-serif'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.base',
        '15'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontWeights.bold',
        '700'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.text.bold',
        '#0D1136'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fonts.body',
        'sans-serif'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.sm',
        '13'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontWeights.regular',
        '400'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.text.regular',
        '#77798c'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.xs',
        '12'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fonts.body',
        'sans-serif'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.base',
        '15'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontWeights.bold',
        '700'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.primary.regular',
        '#009E7F'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.base',
        '15'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fonts.body',
        'sans-serif'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.sm',
        '13'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontWeights.regular',
        '400'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.yellow.hover',
        '#FBB979'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.yellow.hover',
        '#FBB979'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.gray.200',
        '#f7f7f7'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'radii.big',
        '18px'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.sm',
        '13'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontWeights.bold',
        '700'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.white',
        '#ffffff'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.primary.regular',
        '#009e7f'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.primary.regular',
        '#009e7f'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.base',
        '15'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.white',
        '#ffffff'
      )
    );
    const ButtonText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig(
      {
        displayName: 'product-cardstyle__ButtonText',
        componentId: 'sc-1j4qmg9-7',
      }
    )(['@media (max-width:767px){display:none;}']);
    const BookImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
      {
        displayName: 'product-cardstyle__BookImageWrapper',
        componentId: 'sc-1j4qmg9-8',
      }
    )(
      [
        'height:275px;padding:0;position:relative;text-align:center;display:flex;align-items:center;justify-content:center;margin-bottom:15px;img{max-width:100%;max-height:100%;display:inline-block;}@media (max-width:767px){height:215px;}',
        '{top:0;right:0;}',
      ],
      DiscountPercent
    );
    const BookInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
      {
        displayName: 'product-cardstyle__BookInfo',
        componentId: 'sc-1j4qmg9-9',
      }
    )([
      'padding:0;width:100%;display:flex;flex-direction:column;align-items:center;@media (max-width:767px){padding:15px 0px 0px;}',
    ]);
    const ProductName = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig(
      {
        displayName: 'product-cardstyle__ProductName',
        componentId: 'sc-1j4qmg9-10',
      }
    )(
      [
        'font-family:',
        ';font-size:',
        'px;font-weight:',
        ';color:',
        ';margin:0 0 7px 0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center;display:block;&:only-child{margin:0;}@media (max-width:767px){font-size:calc(',
        'px - 1px);margin:0 0 5px 0;}',
      ],
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fonts.body',
        'sans-serif'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.base',
        '15'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontWeights.bold',
        '700'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.text.bold',
        '#0D1136'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.base',
        '15'
      )
    );
    const AuthorInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig(
      {
        displayName: 'product-cardstyle__AuthorInfo',
        componentId: 'sc-1j4qmg9-11',
      }
    )(
      [
        'font-family:',
        ';font-size:',
        'px;font-weight:',
        ';color:',
        ';@media (max-width:767px){font-size:',
        'px;}',
      ],
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fonts.body',
        'sans-serif'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.sm',
        '13'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontWeights.regular',
        '400'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.text.regular',
        '#77798c'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.sm',
        '13'
      )
    ); // export const AddCartBox = styled.div`
    //   width: calc(100% - 40px);
    //   display: flex;
    //   flex-direction: column;
    //   align-items: center;
    //   justify-content: center;
    //   padding: 20px;
    //   border-radius: 6px;
    //   background-color: #ffffff;
    //   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.16);
    //   position: absolute;
    //   top: 50%;
    //   left: 50%;
    //   opacity: 0;
    //   transition: all 0.3s;
    //   .cart-button {
    //     border-radius: 18px;
    //     height: 36px;
    //     padding-left: 17px;
    //     padding-right: 17px;
    //     font-size: ${themeGet('fontSizes.1', '13')} px;
    //     font-weight: ${themeGet('fontWeights.bold', '700')};
    //     @media (max-width: 767px) {
    //       width: 32px;
    //       height: 32px;
    //       padding: 0;
    //       border-radius: 50%;
    //     }
    //     .btn-text {
    //       padding: 0 0 0 6px;
    //       @media (max-width: 767px) {
    //         display: none;
    //       }
    //     }
    //     &:hover {
    //       color: #fff;
    //       background-color: ${themeGet('colors.primary.regular', '#009e7f')};
    //       border-color: #009e7f;
    //     }
    //     svg {
    //       fill: currentColor;
    //     }
    //   }
    // `;

    const PriceWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
      {
        displayName: 'product-cardstyle__PriceWrapper',
        componentId: 'sc-1j4qmg9-12',
      }
    )([
      'position:relative;display:flex;flex-direction:column;align-items:flex-start;margin-bottom:15px;',
    ]);
    const Price = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig(
      {
        displayName: 'product-cardstyle__Price',
        componentId: 'sc-1j4qmg9-13',
      }
    )(
      [
        'font-family:',
        ';font-size:',
        'px;font-weight:',
        ';color:',
        ';@media (max-width:767px){font-size:calc(',
        'px - 1px);}',
      ],
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fonts.body',
        'sans-serif'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.base',
        '15'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontWeights.bold',
        '700'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.primary.regular',
        '#009E7F'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.base',
        '15'
      )
    );
    const DiscountedPrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig(
      {
        displayName: 'product-cardstyle__DiscountedPrice',
        componentId: 'sc-1j4qmg9-14',
      }
    )(
      [
        'font-family:',
        ';font-size:',
        ' px;font-weight:',
        ';color:',
        ";font-style:italic;padding:0 5px;position:relative;overflow:hidden;margin-bottom:5px;margin-left:-4px;z-index:2;&:before{content:'';width:100%;height:1px;display:inline-block;background-color:",
        ';position:absolute;top:50%;left:0;}',
      ],
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fonts.body',
        'sans-serif'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.sm',
        '13'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontWeights.regular',
        '400'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.yellow.regular',
        '#FFAD5E'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.yellow.regular',
        '#FFAD5E'
      )
    );
    const BookCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
      {
        displayName: 'product-cardstyle__BookCardWrapper',
        componentId: 'sc-1j4qmg9-15',
      }
    )(
      [
        'height:100%;width:100%;padding:30px;background-color:',
        ';position:relative;font-family:',
        ';border-radius:',
        ';cursor:pointer;@media (max-width:767px){padding:15px;}',
      ],
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.white',
        '#ffffff'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fonts.body',
        'Lato'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'radii.base',
        '6px'
      )
    );
    const FoodCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
      {
        displayName: 'product-cardstyle__FoodCardWrapper',
        componentId: 'sc-1j4qmg9-16',
      }
    )(
      [
        'height:100%;width:100%;padding:0;background-color:',
        ';position:relative;font-family:',
        ';border-radius:',
        ';overflow:hidden;cursor:pointer;display:flex;flex-direction:column;',
      ],
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.white',
        '#ffffff'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fonts.body',
        'sans-serif'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'radii.base',
        '6px'
      )
    );
    const FoodImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
      {
        displayName: 'product-cardstyle__FoodImageWrapper',
        componentId: 'sc-1j4qmg9-17',
      }
    )([
      "height:230px;padding:0;position:relative;text-align:center;display:flex;align-items:center;justify-content:center;flex-shrink:0;img{width:100%;height:100%;object-fit:cover;}&:after{content:'';width:100%;height:100%;display:flex;background-color:rgba(0,0,0,0.1);position:absolute;top:0;left:0;z-index:1;}@media (max-width:767px){height:145px;}",
    ]);
    const ProductMeta = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
      {
        displayName: 'product-cardstyle__ProductMeta',
        componentId: 'sc-1j4qmg9-18',
      }
    )([
      'margin-top:20px;display:flex;align-items:center;justify-content:space-between;',
    ]);
    const DeliveryOpt = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig(
      {
        displayName: 'product-cardstyle__DeliveryOpt',
        componentId: 'sc-1j4qmg9-19',
      }
    )(
      [
        'font-family:',
        ';font-size:',
        'px;font-weight:',
        ';color:',
        ';white-space:nowrap;',
      ],
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fonts.body',
        'sans-serif'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.sm',
        '13'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontWeights.bold',
        '700'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.text.bold',
        '#0D1136'
      )
    );
    const Category = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig(
      {
        displayName: 'product-cardstyle__Category',
        componentId: 'sc-1j4qmg9-20',
      }
    )(
      ['font-family:', ';font-size:', 'px;font-weight:', ';color:', ';'],
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fonts.body',
        'sans-serif'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.sm',
        '13'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontWeights.bold',
        '400'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.text.regular',
        '#77798c'
      )
    );
    const Duration = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig(
      {
        displayName: 'product-cardstyle__Duration',
        componentId: 'sc-1j4qmg9-21',
      }
    )(
      [
        'font-family:',
        ';font-size:',
        'px;font-weight:',
        ';color:',
        ';background-color:',
        ';border-radius:',
        ';padding-top:0;padding-bottom:0;padding-left:20px;padding-right:20px;height:36px;width:auto;border:0;display:flex;align-items:center;justify-content:center;white-space:nowrap;',
      ],
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fonts.body',
        'sans-serif'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontSizes.sm',
        '13'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'fontWeights.regular',
        '400'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.white',
        '#ffffff'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'colors.primary.regular',
        '#009E7F'
      ),
      Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
        'radii.big',
        '18px'
      )
    );

    /***/
  },

  /***/ dFr0: /***/ function (
    module,
    __webpack_exports__,
    __webpack_require__
  ) {
    'use strict';
    /* harmony export (binding) */ __webpack_require__.d(
      __webpack_exports__,
      'a',
      function () {
        return Image;
      }
    );
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      'cDcd'
    );
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
      react__WEBPACK_IMPORTED_MODULE_0__
    );
    /* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      'bYH+'
    );
    /* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
      react_image__WEBPACK_IMPORTED_MODULE_1__
    );
    /* harmony import */ var _product_placeholder_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      '5JaT'
    );
    /* harmony import */ var _product_placeholder_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
      _product_placeholder_png__WEBPACK_IMPORTED_MODULE_2__
    );
    var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

    const Placeholder = () =>
      __jsx('img', {
        src: _product_placeholder_png__WEBPACK_IMPORTED_MODULE_2___default.a,
        alt: 'product img loader',
      });

    function Image({
      url,
      alt = 'placeholder',
      unloader,
      loader,
      className,
      style,
    }) {
      return __jsx(react_image__WEBPACK_IMPORTED_MODULE_1__['Img'], {
        draggable: false,
        style: style,
        src: url,
        alt: alt,
        loader: __jsx(Placeholder, null),
        unloader: __jsx(Placeholder, null),
        className: className,
      });
    }

    /***/
  },

  /***/ tFEG: /***/ function (
    module,
    __webpack_exports__,
    __webpack_require__
  ) {
    'use strict';

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, 'a', function () {
      return /* binding */ CartProvider;
    });
    __webpack_require__.d(__webpack_exports__, 'b', function () {
      return /* binding */ useCart;
    });

    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__('cDcd');
    var external_react_default = /*#__PURE__*/ __webpack_require__.n(
      external_react_
    );

    // CONCATENATED MODULE: ./src/contexts/cart/cart.reducer.tsx
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

    // export const cartItemsTotalPrice = (items, { discountInPercent = 0 } = {}) => {
    function getDiscountAmount(totalPrice, coupon) {
      let discount = (totalPrice * Number(coupon.percentage)) / 100;
      discount =
        discount >=
        (coupon === null || coupon === void 0
          ? void 0
          : coupon.maximum_discount_amount)
          ? coupon === null || coupon === void 0
            ? void 0
            : coupon.maximum_discount_amount
          : discount;
      return discount;
    }

    function getTotalItemPrice(items) {
      return items.reduce((total, item) => {
        if (item.salePrice) {
          return total + item.salePrice * item.quantity;
        }

        return total + item.price * item.quantity;
      }, 0);
    }

    const cartItemsTotalPrice = (items, coupon = null) => {
      if (items === null || items.length === 0) return 0;
      const itemCost = getTotalItemPrice(items);
      let discount = coupon ? getDiscountAmount(itemCost, coupon) : 0;
      return itemCost - discount;
    };
    const cartDiscountAmount = (items, coupon = null) => {
      if (items === null || items.length === 0) return 0;
      const itemCost = getTotalItemPrice(items);
      return coupon ? getDiscountAmount(itemCost, coupon) : 0;
    }; // cartItems, cartItemToAdd

    const addItemToCart = (state, action) => {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

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
          return newQuantity > 0
            ? [
                ...acc,
                _objectSpread(
                  _objectSpread({}, item),
                  {},
                  {
                    quantity: newQuantity,
                  }
                ),
              ]
            : [...acc];
        }

        return [...acc, item];
      }, []);
    };

    const clearItemFromCart = (state, action) => {
      return state.items.filter((item) => item.id !== action.payload.id);
    };

    const reducer = (state, action) => {
      switch (action.type) {
        case 'REHYDRATE':
          return _objectSpread(_objectSpread({}, state), action.payload);

        case 'TOGGLE_CART':
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              isOpen: !state.isOpen,
            }
          );

        case 'ADD_ITEM':
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              items: addItemToCart(state, action),
            }
          );

        case 'REMOVE_ITEM':
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              items: removeItemFromCart(state, action),
            }
          );

        case 'CLEAR_ITEM_FROM_CART':
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              items: clearItemFromCart(state, action),
            }
          );

        case 'CLEAR_CART':
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              items: [],
            }
          );

        case 'APPLY_COUPON':
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              coupon: action.payload,
            }
          );

        case 'REMOVE_COUPON':
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              coupon: null,
            }
          );

        case 'TOGGLE_RESTAURANT':
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              isRestaurant: !state.isRestaurant,
            }
          );

        default:
          throw new Error(`Unknown action: ${action.type}`);
      }
    };
    // EXTERNAL MODULE: external "localforage"
    var external_localforage_ = __webpack_require__('wiMN');
    var external_localforage_default = /*#__PURE__*/ __webpack_require__.n(
      external_localforage_
    );

    // CONCATENATED MODULE: ./src/utils/use-storage.ts
    function use_storage_ownKeys(object, enumerableOnly) {
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

    function use_storage_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          use_storage_ownKeys(Object(source), true).forEach(function (key) {
            use_storage_defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          );
        } else {
          use_storage_ownKeys(Object(source)).forEach(function (key) {
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

    function use_storage_defineProperty(obj, key, value) {
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

    const isObjectLiked = (value) =>
      value.constructor.name === 'Array' || value.constructor.name === 'Object';

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

    const hydrate = (value) => {
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
            external_localforage_default.a.setItem(
              opts.key,
              rehydrate(data),
              (err) => {
                if (err) return reject(err);
                external_localforage_default.a.setItem(
                  key,
                  opts.version,
                  (err) => {
                    if (err) return reject(err);
                    return resolve(data);
                  }
                );
              }
            );
          } else {
            resolve(data);
          }
        });
      });
    };

    const config = {
      key: '@session',
      version: 1,
      migrate: (state) => {
        return use_storage_objectSpread({}, state);
      },
    };
    const useStorage = (state, setState) => {
      const { 0: rehydrated, 1: setRehydrated } = Object(
        external_react_['useState']
      )(false);
      const { 0: error, 1: setError } = Object(external_react_['useState'])(
        null
      );
      Object(external_react_['useEffect'])(() => {
        async function init() {
          await external_localforage_default.a.getItem(
            config.key,
            (err, value) => {
              if (err) {
                setRehydrated(true);
                return setError(err);
              } // Migrate persisted data

              const restoredValue = rehydrate(value);

              if (typeof config.migrate === 'function') {
                createMigration(config, restoredValue)
                  .then((data) => setState(data))
                  .then(() => setRehydrated(true));
              } else {
                setState(restoredValue);
                setRehydrated(true);
              }
            }
          );
        }

        init();
      }, []);
      Object(external_react_['useEffect'])(() => {
        // if (isNil(state) || isEmpty(state)) {
        //   localForage.removeItem(config.key);
        // }
        external_localforage_default.a.setItem(config.key, hydrate(state));
      }, [state]);
      return {
        rehydrated,
        error,
      };
    };
    // CONCATENATED MODULE: ./src/contexts/cart/use-cart.tsx
    var __jsx = external_react_default.a.createElement;

    function use_cart_ownKeys(object, enumerableOnly) {
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

    function use_cart_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          use_cart_ownKeys(Object(source), true).forEach(function (key) {
            use_cart_defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          );
        } else {
          use_cart_ownKeys(Object(source)).forEach(function (key) {
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

    function use_cart_defineProperty(obj, key, value) {
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

    const CartContext = Object(external_react_['createContext'])({});
    const INITIAL_STATE = {
      isOpen: false,
      items: [],
      isRestaurant: false,
      coupon: null,
    };

    const useCartActions = (initialCart = INITIAL_STATE) => {
      var _state$items3;

      const { 0: state, 1: dispatch } = Object(external_react_['useReducer'])(
        reducer,
        initialCart
      );

      const addItemHandler = (item, quantity = 1) => {
        dispatch({
          type: 'ADD_ITEM',
          payload: use_cart_objectSpread(
            use_cart_objectSpread({}, item),
            {},
            {
              quantity,
            }
          ),
        });
      };

      const removeItemHandler = (item, quantity = 1) => {
        dispatch({
          type: 'REMOVE_ITEM',
          payload: use_cart_objectSpread(
            use_cart_objectSpread({}, item),
            {},
            {
              quantity,
            }
          ),
        });
      };

      const clearItemFromCartHandler = (item) => {
        dispatch({
          type: 'CLEAR_ITEM_FROM_CART',
          payload: item,
        });
      };

      const clearCartHandler = () => {
        dispatch({
          type: 'CLEAR_CART',
        });
      };

      const toggleCartHandler = () => {
        dispatch({
          type: 'TOGGLE_CART',
        });
      };

      const couponHandler = (coupon) => {
        dispatch({
          type: 'APPLY_COUPON',
          payload: coupon,
        });
      };

      const removeCouponHandler = () => {
        dispatch({
          type: 'REMOVE_COUPON',
        });
      };

      const rehydrateLocalState = (payload) => {
        dispatch({
          type: 'REHYDRATE',
          payload,
        });
      };

      const toggleRestaurant = () => {
        dispatch({
          type: 'TOGGLE_RESTAURANT',
        });
      };

      const isInCartHandler = (id) => {
        var _state$items;

        return (_state$items = state.items) === null || _state$items === void 0
          ? void 0
          : _state$items.some((item) => item.id === id);
      };

      const getItemHandler = (id) => {
        var _state$items2;

        return (_state$items2 = state.items) === null ||
          _state$items2 === void 0
          ? void 0
          : _state$items2.find((item) => item.id === id);
      };

      const getCartItemsPrice = () =>
        cartItemsTotalPrice(state.items).toFixed(2);

      const getCartItemsTotalPrice = () =>
        cartItemsTotalPrice(state.items, state.coupon).toFixed(2);

      const getDiscount = () =>
        cartDiscountAmount(state.items, state.coupon).toFixed(2);

      const getItemsCount =
        (_state$items3 = state.items) === null || _state$items3 === void 0
          ? void 0
          : _state$items3.reduce((acc, item) => acc + item.quantity, 0);
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
        toggleRestaurant,
      };
    };

    const CartProvider = ({ children }) => {
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
        toggleRestaurant,
      } = useCartActions();
      const { rehydrated, error } = useStorage(state, rehydrateLocalState);
      return __jsx(
        CartContext.Provider,
        {
          value: {
            isOpen: state.isOpen,
            items: state.items,
            coupon: state.coupon,
            isRestaurant: state.isRestaurant,
            cartItemsCount:
              (_state$items4 = state.items) === null || _state$items4 === void 0
                ? void 0
                : _state$items4.length,
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
            toggleRestaurant,
          },
        },
        children
      );
    };
    const useCart = () => Object(external_react_['useContext'])(CartContext);

    /***/
  },
};
