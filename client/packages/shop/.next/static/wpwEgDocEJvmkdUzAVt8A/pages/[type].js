(window.webpackJsonp = window.webpackJsonp || []).push([
  [22],
  {
    '7NlZ': function (t, e, n) {
      'use strict';
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(e, n);
          };
          return function (e, n) {
            function i() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((i.prototype = n.prototype), new i()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = n('ERkP'),
        r = n('i7tg'),
        a = n('vWkV'),
        s = n('YVsU'),
        l = n('AXyH'),
        c = n('LCQb'),
        u = n('Z0Xe'),
        d = 400,
        p = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (
              (n.containerRef = o.createRef()),
              (n.listRef = o.createRef()),
              (n.state = {
                itemWidth: 0,
                slidesToShow: 0,
                currentSlide: 0,
                totalItems: o.Children.count(e.children),
                deviceType: '',
                domLoaded: !1,
                transform: 0,
                containerWidth: 0,
              }),
              (n.onResize = n.onResize.bind(n)),
              (n.handleDown = n.handleDown.bind(n)),
              (n.handleMove = n.handleMove.bind(n)),
              (n.handleOut = n.handleOut.bind(n)),
              (n.onKeyUp = n.onKeyUp.bind(n)),
              (n.handleEnter = n.handleEnter.bind(n)),
              (n.setIsInThrottle = n.setIsInThrottle.bind(n)),
              (n.next = r.throttle(
                n.next.bind(n),
                e.transitionDuration || d,
                n.setIsInThrottle
              )),
              (n.previous = r.throttle(
                n.previous.bind(n),
                e.transitionDuration || d,
                n.setIsInThrottle
              )),
              (n.goToSlide = r.throttle(
                n.goToSlide.bind(n),
                e.transitionDuration || d,
                n.setIsInThrottle
              )),
              (n.onMove = !1),
              (n.initialX = 0),
              (n.lastX = 0),
              (n.isAnimationAllowed = !1),
              (n.direction = ''),
              (n.initialY = 0),
              (n.isInThrottle = !1),
              (n.transformPlaceHolder = 0),
              n
            );
          }
          return (
            i(e, t),
            (e.prototype.resetTotalItems = function () {
              var t = this,
                e = o.Children.count(this.props.children),
                n = r.notEnoughChildren(this.state)
                  ? 0
                  : Math.max(0, Math.min(this.state.currentSlide, e));
              this.setState({ totalItems: e, currentSlide: n }, function () {
                t.setContainerAndItemWidth(t.state.slidesToShow, !0);
              });
            }),
            (e.prototype.setIsInThrottle = function (t) {
              void 0 === t && (t = !1), (this.isInThrottle = t);
            }),
            (e.prototype.setTransformDirectly = function (t, e) {
              var n = this.props.additionalTransfrom,
                i = u.getTransform(this.state, this.props, t);
              (this.transformPlaceHolder = t),
                this.listRef &&
                  this.listRef.current &&
                  (this.setAnimationDirectly(e),
                  (this.listRef.current.style.transform =
                    'translate3d(' + (i + n) + 'px,0,0)'));
            }),
            (e.prototype.setAnimationDirectly = function (t) {
              this.listRef &&
                this.listRef.current &&
                (this.listRef.current.style.transition = t
                  ? this.props.customTransition || 'transform 400ms ease-in-out'
                  : 'none');
            }),
            (e.prototype.componentDidMount = function () {
              this.setState({ domLoaded: !0 }),
                this.setItemsToShow(),
                window.addEventListener('resize', this.onResize),
                this.onResize(!0),
                this.props.keyBoardControl &&
                  window.addEventListener('keyup', this.onKeyUp),
                this.props.autoPlay &&
                  this.props.autoPlaySpeed &&
                  (this.autoPlay = setInterval(
                    this.next,
                    this.props.autoPlaySpeed
                  ));
            }),
            (e.prototype.setClones = function (t, e, n, i) {
              var a = this;
              void 0 === i && (i = !1), (this.isAnimationAllowed = !1);
              var s = o.Children.toArray(this.props.children),
                l = r.getInitialSlideInInfiniteMode(
                  t || this.state.slidesToShow,
                  s
                ),
                c = r.getClones(this.state.slidesToShow, s),
                u =
                  s.length < this.state.slidesToShow
                    ? 0
                    : this.state.currentSlide;
              this.setState(
                { totalItems: c.length, currentSlide: n && !i ? u : l },
                function () {
                  a.correctItemsPosition(e || a.state.itemWidth);
                }
              );
            }),
            (e.prototype.setItemsToShow = function (t, e) {
              var n = this,
                i = this.props.responsive;
              Object.keys(i).forEach(function (o) {
                var r = i[o],
                  a = r.breakpoint,
                  s = r.items,
                  l = a.max,
                  c = a.min;
                window.innerWidth >= c &&
                  window.innerWidth <= l &&
                  (n.setState({ slidesToShow: s, deviceType: o }),
                  n.setContainerAndItemWidth(s, t, e));
              });
            }),
            (e.prototype.setContainerAndItemWidth = function (t, e, n) {
              var i = this;
              if (this.containerRef && this.containerRef.current) {
                var o = this.containerRef.current.offsetWidth,
                  a = r.getItemClientSideWidth(this.props, t, o);
                this.setState({ containerWidth: o, itemWidth: a }, function () {
                  i.props.infinite && i.setClones(t, a, e, n);
                }),
                  e && this.correctItemsPosition(a);
              }
            }),
            (e.prototype.correctItemsPosition = function (t, e, n) {
              e && (this.isAnimationAllowed = !0),
                !e && this.isAnimationAllowed && (this.isAnimationAllowed = !1);
              var i =
                this.state.totalItems < this.state.slidesToShow
                  ? 0
                  : -t * this.state.currentSlide;
              n && this.setTransformDirectly(i, !0),
                this.setState({ transform: i });
            }),
            (e.prototype.onResize = function (t) {
              var e;
              (e = !!this.props.infinite && ('boolean' != typeof t || !t)),
                this.setItemsToShow(e);
            }),
            (e.prototype.componentDidUpdate = function (t, e) {
              var n = this,
                i = t.keyBoardControl,
                o = t.autoPlay,
                r = t.children,
                a = e.containerWidth,
                s = e.domLoaded,
                l = e.currentSlide;
              this.containerRef &&
                this.containerRef.current &&
                this.containerRef.current.offsetWidth !== a &&
                setTimeout(function () {
                  n.setItemsToShow(!0);
                }, this.props.transitionDuration || d),
                i &&
                  !this.props.keyBoardControl &&
                  window.removeEventListener('keyup', this.onKeyUp),
                !i &&
                  this.props.keyBoardControl &&
                  window.addEventListener('keyup', this.onKeyUp),
                o &&
                  !this.props.autoPlay &&
                  this.autoPlay &&
                  (clearInterval(this.autoPlay), (this.autoPlay = void 0)),
                o ||
                  !this.props.autoPlay ||
                  this.autoPlay ||
                  (this.autoPlay = setInterval(
                    this.next,
                    this.props.autoPlaySpeed
                  )),
                r.length !== this.props.children.length
                  ? setTimeout(function () {
                      n.props.infinite
                        ? n.setClones(
                            n.state.slidesToShow,
                            n.state.itemWidth,
                            !0,
                            !0
                          )
                        : n.resetTotalItems();
                    }, this.props.transitionDuration || d)
                  : this.props.infinite &&
                    this.state.currentSlide !== l &&
                    this.correctClonesPosition({ domLoaded: s }),
                this.transformPlaceHolder !== this.state.transform &&
                  (this.transformPlaceHolder = this.state.transform);
            }),
            (e.prototype.correctClonesPosition = function (t) {
              var e = this,
                n = t.domLoaded,
                i = o.Children.toArray(this.props.children),
                a = r.checkClonesPosition(this.state, i, this.props),
                s = a.isReachingTheEnd,
                l = a.isReachingTheStart,
                c = a.nextSlide,
                u = a.nextPosition;
              this.state.domLoaded &&
                n &&
                (s || l) &&
                ((this.isAnimationAllowed = !1),
                setTimeout(function () {
                  e.setState({ transform: u, currentSlide: c });
                }, this.props.transitionDuration || d));
            }),
            (e.prototype.next = function (t) {
              var e = this;
              void 0 === t && (t = 0);
              var n = this.props,
                i = n.afterChange,
                o = n.beforeChange;
              if (!r.notEnoughChildren(this.state)) {
                var a = r.populateNextSlides(this.state, this.props, t),
                  s = a.nextSlides,
                  l = a.nextPosition,
                  c = this.state.currentSlide;
                void 0 !== s &&
                  void 0 !== l &&
                  ('function' == typeof o && o(s, this.getState()),
                  (this.isAnimationAllowed = !0),
                  this.setState({ transform: l, currentSlide: s }, function () {
                    'function' == typeof i &&
                      setTimeout(function () {
                        i(c, e.getState());
                      }, e.props.transitionDuration || d);
                  }));
              }
            }),
            (e.prototype.previous = function (t) {
              var e = this;
              void 0 === t && (t = 0);
              var n = this.props,
                i = n.afterChange,
                o = n.beforeChange;
              if (!r.notEnoughChildren(this.state)) {
                var a = r.populatePreviousSlides(this.state, this.props, t),
                  s = a.nextSlides,
                  l = a.nextPosition;
                if (void 0 !== s && void 0 !== l) {
                  var c = this.state.currentSlide;
                  'function' == typeof o && o(s, this.getState()),
                    (this.isAnimationAllowed = !0),
                    this.setState(
                      { transform: l, currentSlide: s },
                      function () {
                        'function' == typeof i &&
                          setTimeout(function () {
                            i(c, e.getState());
                          }, e.props.transitionDuration || d);
                      }
                    );
                }
              }
            }),
            (e.prototype.componentWillUnmount = function () {
              window.removeEventListener('resize', this.onResize),
                this.props.keyBoardControl &&
                  window.removeEventListener('keyup', this.onKeyUp),
                this.props.autoPlay &&
                  this.autoPlay &&
                  (clearInterval(this.autoPlay), (this.autoPlay = void 0));
            }),
            (e.prototype.resetMoveStatus = function () {
              (this.onMove = !1),
                (this.initialX = 0),
                (this.lastX = 0),
                (this.direction = ''),
                (this.initialY = 0);
            }),
            (e.prototype.handleDown = function (t) {
              if (
                !(
                  (!a.isMouseMoveEvent(t) && !this.props.swipeable) ||
                  (a.isMouseMoveEvent(t) && !this.props.draggable) ||
                  this.isInThrottle
                )
              ) {
                var e = a.isMouseMoveEvent(t) ? t : t.touches[0],
                  n = e.clientX,
                  i = e.clientY;
                (this.onMove = !0),
                  (this.initialX = n),
                  (this.initialY = i),
                  (this.lastX = n),
                  (this.isAnimationAllowed = !1);
              }
            }),
            (e.prototype.handleMove = function (t) {
              if (
                !(
                  (!a.isMouseMoveEvent(t) && !this.props.swipeable) ||
                  (a.isMouseMoveEvent(t) && !this.props.draggable) ||
                  r.notEnoughChildren(this.state)
                )
              ) {
                var e = a.isMouseMoveEvent(t) ? t : t.touches[0],
                  n = e.clientX,
                  i = e.clientY,
                  o = this.initialX - n,
                  s = this.initialY - i;
                if (
                  (!a.isMouseMoveEvent(t) &&
                    this.autoPlay &&
                    this.props.autoPlay &&
                    (clearInterval(this.autoPlay), (this.autoPlay = void 0)),
                  this.onMove)
                ) {
                  if (!(Math.abs(o) > Math.abs(s))) return;
                  var l = r.populateSlidesOnMouseTouchMove(
                      this.state,
                      this.props,
                      this.initialX,
                      this.lastX,
                      n,
                      this.transformPlaceHolder
                    ),
                    c = l.direction,
                    u = l.nextPosition,
                    d = l.canContinue;
                  c &&
                    ((this.direction = c),
                    d && void 0 !== u && this.setTransformDirectly(u)),
                    (this.lastX = n);
                }
              }
            }),
            (e.prototype.handleOut = function (t) {
              this.props.autoPlay &&
                !this.autoPlay &&
                (this.autoPlay = setInterval(
                  this.next,
                  this.props.autoPlaySpeed
                ));
              var e = 'touchend' === t.type && !this.props.swipeable,
                n =
                  ('mouseleave' === t.type || 'mouseup' === t.type) &&
                  !this.props.draggable;
              if (!e && !n && this.onMove) {
                if ((this.setAnimationDirectly(!0), 'right' === this.direction))
                  if (
                    this.initialX - this.lastX >=
                    this.props.minimumTouchDrag
                  ) {
                    var i = Math.round(
                      (this.initialX - this.lastX) / this.state.itemWidth
                    );
                    this.next(i);
                  } else
                    this.correctItemsPosition(this.state.itemWidth, !0, !0);
                'left' === this.direction &&
                  (this.lastX - this.initialX > this.props.minimumTouchDrag
                    ? ((i = Math.round(
                        (this.lastX - this.initialX) / this.state.itemWidth
                      )),
                      this.previous(i))
                    : this.correctItemsPosition(this.state.itemWidth, !0, !0)),
                  this.resetMoveStatus();
              }
            }),
            (e.prototype.onKeyUp = function (t) {
              switch (t.keyCode) {
                case 37:
                  return this.previous();
                case 39:
                  return this.next();
              }
            }),
            (e.prototype.handleEnter = function () {
              this.autoPlay &&
                this.props.autoPlay &&
                (clearInterval(this.autoPlay), (this.autoPlay = void 0));
            }),
            (e.prototype.goToSlide = function (t, e) {
              var n = this;
              if (!this.isInThrottle) {
                var i = this.state.itemWidth,
                  o = this.props,
                  r = o.afterChange,
                  a = o.beforeChange,
                  s = this.state.currentSlide;
                'function' != typeof a ||
                  (e && ('object' != typeof e || e.skipBeforeChange)) ||
                  a(t, this.getState()),
                  (this.isAnimationAllowed = !0),
                  this.setState(
                    { currentSlide: t, transform: -i * t },
                    function () {
                      n.props.infinite &&
                        n.correctClonesPosition({ domLoaded: !0 }),
                        'function' != typeof r ||
                          (e && ('object' != typeof e || e.skipAfterChange)) ||
                          setTimeout(function () {
                            r(s, n.getState());
                          }, n.props.transitionDuration || d);
                    }
                  );
              }
            }),
            (e.prototype.getState = function () {
              return this.state;
            }),
            (e.prototype.renderLeftArrow = function () {
              var t = this,
                e = this.props.customLeftArrow;
              return o.createElement(l.LeftArrow, {
                customLeftArrow: e,
                getState: function () {
                  return t.getState();
                },
                previous: this.previous,
              });
            }),
            (e.prototype.renderRightArrow = function () {
              var t = this,
                e = this.props.customRightArrow;
              return o.createElement(l.RightArrow, {
                customRightArrow: e,
                getState: function () {
                  return t.getState();
                },
                next: this.next,
              });
            }),
            (e.prototype.renderButtonGroups = function () {
              var t = this,
                e = this.props.customButtonGroup;
              return e
                ? o.cloneElement(e, {
                    previous: function () {
                      return t.previous();
                    },
                    next: function () {
                      return t.next();
                    },
                    goToSlide: function (e, n) {
                      return t.goToSlide(e, n);
                    },
                    carouselState: this.getState(),
                  })
                : null;
            }),
            (e.prototype.renderDotsList = function () {
              var t = this;
              return o.createElement(s.default, {
                state: this.state,
                props: this.props,
                goToSlide: this.goToSlide,
                getState: function () {
                  return t.getState();
                },
              });
            }),
            (e.prototype.renderCarouselItems = function () {
              var t = [];
              if (this.props.infinite) {
                var e = o.Children.toArray(this.props.children);
                t = r.getClones(this.state.slidesToShow, e);
              }
              return o.createElement(c.default, {
                clones: t,
                goToSlide: this.goToSlide,
                state: this.state,
                notEnoughChildren: r.notEnoughChildren(this.state),
                props: this.props,
              });
            }),
            (e.prototype.render = function () {
              var t = this.props,
                e = t.deviceType,
                n = t.arrows,
                i = t.removeArrowOnDeviceType,
                a = t.infinite,
                s = t.containerClass,
                l = t.sliderClass,
                c = t.customTransition,
                d = t.additionalTransfrom,
                p = t.renderDotsOutside,
                f = t.renderButtonGroupOutside,
                h = t.className,
                m = r.getInitialState(this.state, this.props),
                v = m.shouldRenderOnSSR,
                g = m.shouldRenderAtAll,
                y = r.isInLeftEnd(this.state),
                w = r.isInRightEnd(this.state),
                b =
                  n &&
                  !(
                    i &&
                    ((e && -1 < i.indexOf(e)) ||
                      (this.state.deviceType &&
                        -1 < i.indexOf(this.state.deviceType)))
                  ) &&
                  !r.notEnoughChildren(this.state) &&
                  g,
                x = !a && y,
                S = !a && w,
                O = u.getTransform(this.state, this.props);
              return o.createElement(
                o.Fragment,
                null,
                o.createElement(
                  'div',
                  {
                    className: 'react-multi-carousel-list ' + s + ' ' + h,
                    ref: this.containerRef,
                  },
                  o.createElement(
                    'ul',
                    {
                      ref: this.listRef,
                      className: 'react-multi-carousel-track ' + l,
                      style: {
                        transition: this.isAnimationAllowed
                          ? c || 'transform 400ms ease-in-out'
                          : 'none',
                        overflow: v ? 'hidden' : 'unset',
                        transform: 'translate3d(' + (O + d) + 'px,0,0)',
                      },
                      onMouseMove: this.handleMove,
                      onMouseDown: this.handleDown,
                      onMouseUp: this.handleOut,
                      onMouseEnter: this.handleEnter,
                      onMouseLeave: this.handleOut,
                      onTouchStart: this.handleDown,
                      onTouchMove: this.handleMove,
                      onTouchEnd: this.handleOut,
                    },
                    this.renderCarouselItems()
                  ),
                  b && !x && this.renderLeftArrow(),
                  b && !S && this.renderRightArrow(),
                  g && !f && this.renderButtonGroups(),
                  g && !p && this.renderDotsList()
                ),
                g && p && this.renderDotsList(),
                g && f && this.renderButtonGroups()
              );
            }),
            (e.defaultProps = {
              slidesToSlide: 1,
              infinite: !1,
              draggable: !0,
              swipeable: !0,
              arrows: !0,
              containerClass: '',
              sliderClass: '',
              itemClass: '',
              keyBoardControl: !0,
              autoPlaySpeed: 3e3,
              showDots: !1,
              renderDotsOutside: !1,
              renderButtonGroupOutside: !1,
              minimumTouchDrag: 80,
              className: '',
              dotListClass: '',
              focusOnSelect: !1,
              centerMode: !1,
              additionalTransfrom: 0,
            }),
            e
          );
        })(o.Component);
      e.default = p;
    },
    '7f0m': function (t, e) {
      t.exports =
        '/_next/static/images/offer-1-1f7a4c9ea0ba5a216bc7af1f60d044e0.png';
    },
    '9+8O': function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n('MjxK'),
        o = n('Z0Xe');
      e.getLookupTableForNextSlides = function (t, e, n, r) {
        var a = {},
          s = o.getSlidesToSlide(e, n);
        return (
          Array(t)
            .fill(0)
            .forEach(function (t, n) {
              var o = i.getOriginalCounterPart(n, e, r);
              if (0 === n) a[0] = o;
              else {
                var l = a[n - 1] + s;
                a[n] = l;
              }
            }),
          a
        );
      };
    },
    AXyH: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n('ERkP');
      e.LeftArrow = function (t) {
        var e = t.customLeftArrow,
          n = t.getState,
          o = t.previous;
        return e
          ? i.cloneElement(e, {
              onClick: function () {
                return o();
              },
              carouselState: n(),
            })
          : i.createElement('button', {
              'aria-label': 'Go to previous slide',
              className:
                'react-multiple-carousel__arrow react-multiple-carousel__arrow--left',
              onClick: function () {
                return o();
              },
            });
      };
      e.RightArrow = function (t) {
        var e = t.customRightArrow,
          n = t.next,
          o = t.getState;
        return e
          ? i.cloneElement(e, {
              onClick: function () {
                return n();
              },
              carouselState: o(),
            })
          : i.createElement('button', {
              'aria-label': 'Go to next slide',
              className:
                'react-multiple-carousel__arrow react-multiple-carousel__arrow--right',
              onClick: function () {
                return n();
              },
            });
      };
    },
    AaBP: function (t, e) {
      t.exports =
        '/_next/static/images/makeup-d35970108639dd1b5ea1af732250c450.png';
    },
    BMAw: function (t, e) {
      t.exports =
        '/_next/static/images/cloths-bc740630f228713e4bb0de8a7bffce22.png';
    },
    DSo7: function (t, e) {
      t.exports = function (t) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(t))
          return Array.from(t);
      };
    },
    Ej6a: function (t, e) {
      t.exports =
        '/_next/static/images/furniture-1653225bd210688946d20a4b28cf8b0e.png';
    },
    Ek28: function (t, e, n) {
      'use strict';
      var i = n('ERkP'),
        o = n.n(i),
        r = n('j/s1'),
        a = n('jvFD'),
        s = n.n(a),
        l = n('7xIC'),
        c = n('2SGB'),
        u = o.a.createElement,
        d = r.e.span.withConfig({
          displayName: 'nav-link__Icon',
          componentId: 'sc-6likiw-0',
        })([
          'min-width:16px;margin-right:10px;display:flex;align-items:center;justify-content:center;',
        ]);
      e.a = Object(l.withRouter)(function (t) {
        var e = t.href,
          n = t.label,
          i = t.intlId,
          o = t.router,
          r = t.icon,
          a = t.className,
          l = t.onClick,
          p = t.iconClass,
          f = t.dynamic,
          h = o.pathname === e || o.asPath === e;
        return u(
          'div',
          { onClick: l, className: a || '' },
          u(
            s.a,
            f ? { href: '/[type]', as: e } : { href: e },
            u(
              'a',
              {
                className: h ? ' current-page' : '',
                style: { display: 'flex', alignItems: 'center' },
              },
              r ? u(d, { className: p }, r) : '',
              u(
                'span',
                { className: 'label' },
                i
                  ? u(c.a, { id: i || 'defaultNavLinkId', defaultMessage: n })
                  : n
              )
            )
          )
        );
      });
    },
    H8eV: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return l;
      });
      var i = n('ERkP'),
        o = n.n(i),
        r = n('ysqo'),
        a = n.n(r),
        s = o.a.createElement,
        l = function (t) {
          var e = t.title,
            n = t.description,
            i = t.canonical,
            o = t.css,
            r = t.js,
            l = t.image;
          return s(
            a.a,
            null,
            s('title', null, e),
            s('meta', { name: 'description', content: n }),
            s('meta', {
              name: 'viewport',
              content: 'width=device-width,minimum-scale=1,initial-scale=1',
            }),
            s('meta', { property: 'og:type', content: 'website' }),
            s('meta', { name: 'og:title', property: 'og:title', content: e }),
            s('meta', {
              name: 'og:description',
              property: 'og:description',
              content: n,
            }),
            s('meta', { property: 'og:site_name', content: 'Proper Noun' }),
            s('meta', { property: 'og:url', content: ''.concat(i) }),
            s('meta', { name: 'twitter:card', content: 'summary' }),
            s('meta', { name: 'twitter:title', content: e }),
            s('meta', { name: 'twitter:description', content: n }),
            s('meta', { name: 'twitter:site', content: '@propernounco' }),
            s('meta', { name: 'twitter:creator', content: '@propernounco' }),
            o && s('link', { rel: 'stylesheet', href: ''.concat(o) }),
            s(
              'meta',
              l
                ? { property: 'og:image', content: ''.concat(l) }
                : {
                    property: 'og:image',
                    content:
                      'https://www.propernoun.co/static/images/proper-noun-social.png',
                  }
            ),
            l && s('meta', { name: 'twitter:image', content: ''.concat(l) }),
            i && s('link', { rel: 'canonical', href: ''.concat(i) }),
            r && s('script', { type: 'text/javascript', src: ''.concat(r) })
          );
        };
    },
    J9Yr: function (t, e, n) {
      'use strict';
      var i = n('zQIG'),
        o = n('N7I1'),
        r = n('8mBC'),
        a = n('I/kN'),
        s = n('cMav'),
        l = n('pSQP'),
        c = n('iN+R');
      function u(t) {
        var e = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = l(t);
          if (e) {
            var o = l(this).constructor;
            n = Reflect.construct(i, arguments, o);
          } else n = i.apply(this, arguments);
          return s(this, n);
        };
      }
      (e.__esModule = !0), (e.default = void 0);
      var d = n('ERkP'),
        p = !1;
      e.default = function () {
        var t,
          e = new Set();
        function n(n) {
          (t = n.props.reduceComponentsToState(c(e), n.props)),
            n.props.handleStateChange && n.props.handleStateChange(t);
        }
        return (function (s) {
          a(c, s);
          var l = u(c);
          function c(t) {
            var r;
            return (
              i(this, c), (r = l.call(this, t)), p && (e.add(o(r)), n(o(r))), r
            );
          }
          return (
            r(c, null, [
              {
                key: 'rewind',
                value: function () {
                  var n = t;
                  return (t = void 0), e.clear(), n;
                },
              },
            ]),
            r(c, [
              {
                key: 'componentDidMount',
                value: function () {
                  e.add(this), n(this);
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  n(this);
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  e.delete(this), n(this);
                },
              },
              {
                key: 'render',
                value: function () {
                  return null;
                },
              },
            ]),
            c
          );
        })(d.Component);
      };
    },
    JUKJ: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      e.default = function (t, e, n) {
        var i;
        return function () {
          var o = arguments;
          i ||
            (t.apply(this, o),
            (i = !0),
            'function' == typeof n && n(!0),
            setTimeout(function () {
              (i = !1), 'function' == typeof n && n(!1);
            }, e));
        };
      };
    },
    LCQb: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n('ERkP'),
        o = n('i7tg');
      e.default = function (t) {
        var e = t.props,
          n = t.state,
          r = t.goToSlide,
          a = t.clones,
          s = t.notEnoughChildren,
          l = n.itemWidth,
          c = e.children,
          u = e.infinite,
          d = e.itemClass,
          p = e.partialVisbile,
          f = e.partialVisible,
          h = o.getInitialState(n, e),
          m = h.flexBisis,
          v = h.shouldRenderOnSSR,
          g = h.domFullyLoaded,
          y = h.partialVisibilityGutter;
        return h.shouldRenderAtAll
          ? (p &&
              console.warn(
                'WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'
              ),
            i.createElement(
              i.Fragment,
              null,
              (u ? a : i.Children.toArray(c)).map(function (t, a) {
                return i.createElement(
                  'li',
                  {
                    key: a,
                    'data-index': a,
                    onClick: function () {
                      e.focusOnSelect && r(a);
                    },
                    'aria-hidden': o.getIfSlideIsVisbile(a, n)
                      ? 'false'
                      : 'true',
                    style: {
                      flex: v ? '1 0 ' + m + '%' : 'auto',
                      position: 'relative',
                      width: g
                        ? ((p || f) && y && !s ? l - y : l) + 'px'
                        : 'auto',
                    },
                    className:
                      'react-multi-carousel-item ' +
                      (o.getIfSlideIsVisbile(a, n)
                        ? 'react-multi-carousel-item--active'
                        : '') +
                      ' ' +
                      d,
                  },
                  t
                );
              })
            ))
          : null;
      };
    },
    MjxK: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.getOriginalCounterPart = function (t, e, n) {
          var i = e.slidesToShow,
            o = e.currentSlide;
          return n.length > 2 * i
            ? t + 2 * i
            : o >= n.length
            ? n.length + t
            : t;
        }),
        (e.getOriginalIndexLookupTableByClones = function (t, e) {
          if (e.length > 2 * t) {
            for (
              var n = {}, i = e.length - 2 * t, o = e.length - i, r = i, a = 0;
              a < o;
              a++
            )
              (n[a] = r), r++;
            var s = e.length + o,
              l = s + e.slice(0, 2 * t).length,
              c = 0;
            for (a = s; a <= l; a++) (n[a] = c), c++;
            var u = s,
              d = 0;
            for (a = o; a < u; a++) (n[a] = d), d++;
            return n;
          }
          n = {};
          var p = 3 * e.length,
            f = 0;
          for (a = 0; a < p; a++) (n[a] = f), ++f === e.length && (f = 0);
          return n;
        }),
        (e.getClones = function (t, e) {
          return e.length < t
            ? e
            : e.length > 2 * t
            ? e.slice(e.length - 2 * t, e.length).concat(e, e.slice(0, 2 * t))
            : e.concat(e, e);
        }),
        (e.getInitialSlideInInfiniteMode = function (t, e) {
          return e.length > 2 * t ? 2 * t : e.length;
        }),
        (e.checkClonesPosition = function (t, e, n) {
          var i,
            o = t.currentSlide,
            r = t.slidesToShow,
            a = t.itemWidth,
            s = t.totalItems,
            l = 0,
            c = 0,
            u = 0 === o,
            d = e.length - (e.length - 2 * r);
          return (
            e.length < r
              ? ((c = l = 0), (u = i = !1))
              : e.length > 2 * r
              ? ((i = o >= d + e.length) && (c = -a * (l = o - e.length)),
                u && (c = -a * (l = d + (e.length - 2 * r))))
              : ((i = o >= 2 * e.length) && (c = -a * (l = o - e.length)),
                u &&
                  (c = n.showDots
                    ? -a * (l = e.length)
                    : -a * (l = s - 2 * r))),
            {
              isReachingTheEnd: i,
              isReachingTheStart: u,
              nextSlide: l,
              nextPosition: c,
            }
          );
        });
    },
    PQXp: function (t, e) {
      t.exports =
        '/_next/static/images/books-f5200ba7535257ce70a563fc9ff56f35.png';
    },
    QVBA: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/[type]',
        function () {
          return n('roL4');
        },
      ]);
    },
    'Qx/Q': function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.populateSlidesOnMouseTouchMove = function (t, e, n, i, o, r) {
          var a,
            s,
            l = t.itemWidth,
            c = t.slidesToShow,
            u = t.totalItems,
            d = t.currentSlide,
            p = e.infinite,
            f = !1,
            h = Math.round((n - i) / l),
            m = Math.round((i - n) / l),
            v = n < o;
          if (o < n && h <= c) {
            a = 'right';
            var g = Math.abs(-l * (u - c)),
              y = r - (i - o),
              w = d === u - c;
            (Math.abs(y) <= g || (w && p)) && ((s = y), (f = !0));
          }
          return (
            v &&
              m <= c &&
              ((a = 'left'),
              ((y = r + (o - i)) <= 0 || (0 === d && p)) &&
                ((f = !0), (s = y))),
            { direction: a, nextPosition: s, canContinue: f }
          );
        });
    },
    R4SK: function (t, e) {
      t.exports =
        '/_next/static/images/grocery-f1565ac25de02b9295dccc2da13004ab.png';
    },
    TZT2: function (t, e, n) {
      'use strict';
      var i;
      (e.__esModule = !0), (e.AmpStateContext = void 0);
      var o = ((i = n('ERkP')) && i.__esModule
        ? i
        : { default: i }
      ).default.createContext({});
      e.AmpStateContext = o;
    },
    XOkS: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n('Z0Xe');
      e.populateNextSlides = function (t, e, n) {
        void 0 === n && (n = 0);
        var o,
          r,
          a = t.slidesToShow,
          s = t.currentSlide,
          l = t.itemWidth,
          c = t.totalItems,
          u = i.getSlidesToSlide(t, e),
          d = s + 1 + n + a + (0 < n ? 0 : u);
        return (
          (r =
            d <= c
              ? -l * (o = s + n + (0 < n ? 0 : u))
              : c < d && s !== c - a
              ? -l * (o = c - a)
              : (o = void 0)),
          { nextSlides: o, nextPosition: r }
        );
      };
    },
    YVsU: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n('ERkP'),
        o = n('MjxK'),
        r = n('9+8O'),
        a = n('Z0Xe');
      e.default = function (t) {
        var e = t.props,
          n = t.state,
          s = t.goToSlide,
          l = t.getState,
          c = e.showDots,
          u = e.customDot,
          d = e.dotListClass,
          p = e.infinite,
          f = e.children;
        if (!c || a.notEnoughChildren(n)) return null;
        var h,
          m = n.currentSlide,
          v = n.slidesToShow,
          g = a.getSlidesToSlide(n, e),
          y = i.Children.toArray(f);
        h = p ? Math.ceil(y.length / g) : Math.ceil((y.length - v) / g) + 1;
        var w = r.getLookupTableForNextSlides(h, n, e, y),
          b = o.getOriginalIndexLookupTableByClones(v, y),
          x = b[m];
        return i.createElement(
          'ul',
          { className: 'react-multi-carousel-dot-list ' + d },
          Array(h)
            .fill(0)
            .map(function (t, e) {
              var n, o;
              if (p) {
                o = w[e];
                var r = b[o];
                n = x === r || (r <= x && x < r + g);
              } else {
                var a = y.length - v,
                  c = e * g;
                n =
                  (o = a < c ? a : c) === m ||
                  (o < m && m < o + g && m < y.length - v);
              }
              return u
                ? i.cloneElement(u, {
                    index: e,
                    active: n,
                    key: e,
                    onClick: function () {
                      return s(o);
                    },
                    carouselState: l(),
                  })
                : i.createElement(
                    'li',
                    {
                      'data-index': e,
                      key: e,
                      className:
                        'react-multi-carousel-dot ' +
                        (n ? 'react-multi-carousel-dot--active' : ''),
                    },
                    i.createElement('button', {
                      'aria-label': 'Go to slide ' + (e + 1),
                      onClick: function () {
                        return s(o);
                      },
                    })
                  );
            })
        );
      };
    },
    Z0Xe: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n('fzz/');
      function o(t) {
        var e = t.slidesToShow;
        return t.totalItems < e;
      }
      function r(t, e, n) {
        var i = n || t.transform;
        return (!e.infinite && 0 === t.currentSlide) || o(t)
          ? i
          : i + t.itemWidth / 2;
      }
      function a(t) {
        var e = t.currentSlide,
          n = t.totalItems;
        return !(e + t.slidesToShow < n);
      }
      function s(t, e, n, i) {
        void 0 === e && (e = 0);
        var r = t.currentSlide,
          s = t.slidesToShow,
          l = a(t),
          c = !n.infinite && l,
          u = i || t.transform;
        if (o(t)) return u;
        var d = u + r * e;
        return c ? d + (t.containerWidth - (t.itemWidth - e) * s) : d;
      }
      (e.notEnoughChildren = o),
        (e.getInitialState = function (t, e) {
          var n,
            o = t.domLoaded,
            r = t.slidesToShow,
            a = t.containerWidth,
            s = t.itemWidth,
            l = e.deviceType,
            c = e.responsive,
            u = e.ssr,
            d = e.partialVisbile,
            p = e.partialVisible,
            f = Boolean(o && r && a && s);
          u && l && !f && (n = i.getWidthFromDeviceType(l, c));
          var h = Boolean(u && l && !f && n);
          return {
            shouldRenderOnSSR: h,
            flexBisis: n,
            domFullyLoaded: f,
            partialVisibilityGutter: i.getPartialVisibilityGutter(
              c,
              d || p,
              l,
              t.deviceType
            ),
            shouldRenderAtAll: h || f,
          };
        }),
        (e.getIfSlideIsVisbile = function (t, e) {
          var n = e.currentSlide,
            i = e.slidesToShow;
          return n <= t && t < n + i;
        }),
        (e.getTransformForCenterMode = r),
        (e.isInLeftEnd = function (t) {
          return !(0 < t.currentSlide);
        }),
        (e.isInRightEnd = a),
        (e.getTransformForPartialVsibile = s),
        (e.getTransform = function (t, e, n) {
          var o = e.partialVisbile,
            a = e.partialVisible,
            l = e.responsive,
            c = e.deviceType,
            u = e.centerMode,
            d = n || t.transform,
            p = i.getPartialVisibilityGutter(l, o || a, c, t.deviceType);
          return a || o ? s(t, p, e, n) : u ? r(t, e, n) : d;
        }),
        (e.getSlidesToSlide = function (t, e) {
          var n = t.domLoaded,
            i = t.slidesToShow,
            o = t.containerWidth,
            r = t.itemWidth,
            a = e.deviceType,
            s = e.responsive,
            l = e.slidesToSlide || 1,
            c = Boolean(n && i && o && r);
          return (
            e.ssr &&
              e.deviceType &&
              !c &&
              Object.keys(s).forEach(function (t) {
                var e = s[t].slidesToSlide;
                a === t && e && (l = e);
              }),
            c &&
              Object.keys(s).forEach(function (t) {
                var e = s[t],
                  n = e.breakpoint,
                  i = e.slidesToSlide,
                  o = n.max,
                  r = n.min;
                i &&
                  window.innerWidth >= r &&
                  window.innerWidth <= o &&
                  (l = i);
              }),
            l
          );
        });
    },
    ayqs: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = function (t, e) {
          var n = e.partialVisbile,
            i = e.partialVisible,
            o = e.centerMode,
            r = e.ssr,
            a = e.responsive;
          if ((n || i) && o)
            throw new Error(
              'center mode can not be used at the same time with partialVisible'
            );
          if (!a)
            throw r
              ? new Error(
                  'ssr mode need to be used in conjunction with responsive prop'
                )
              : new Error(
                  'Responsive prop is needed for deciding the amount of items to show on the screen'
                );
          if (a && 'object' != typeof a)
            throw new Error('responsive prop must be an object');
        });
    },
    bOkD: function (t, e, n) {
      var i = n('cHE3');
      t.exports = function (t) {
        if (Array.isArray(t)) return i(t);
      };
    },
    dq4L: function (t, e, n) {
      'use strict';
      (e.__esModule = !0),
        (e.isInAmpMode = a),
        (e.useAmp = function () {
          return a(o.default.useContext(r.AmpStateContext));
        });
      var i,
        o = (i = n('ERkP')) && i.__esModule ? i : { default: i },
        r = n('TZT2');
      function a() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.ampFirst,
          n = void 0 !== e && e,
          i = t.hybrid,
          o = void 0 !== i && i,
          r = t.hasQuery;
        return n || (o && void 0 !== r && r);
      }
    },
    eIFp: function (t, e) {
      t.exports =
        '/_next/static/images/offer-2-90d3534e1ad62a8b8a977f1290e61e9f.png';
    },
    fUjb: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n('ERkP'),
        o = n('Z0Xe'),
        r = n('Z0Xe');
      e.populatePreviousSlides = function (t, e, n) {
        void 0 === n && (n = 0);
        var a,
          s,
          l = t.currentSlide,
          c = t.itemWidth,
          u = t.slidesToShow,
          d = e.children,
          p = e.showDots,
          f = e.infinite,
          h = o.getSlidesToSlide(t, e),
          m = l - n - (0 < n ? 0 : h),
          v = (i.Children.toArray(d).length - u) % h;
        return (
          (s =
            0 <= m
              ? ((a = m),
                p && !f && 0 < v && r.isInRightEnd(t) && (a = l - v),
                -c * a)
              : (a = m < 0 && 0 !== l ? 0 : void 0)),
          { nextSlides: a, nextPosition: s }
        );
      };
    },
    'fzz/': function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      (e.getPartialVisibilityGutter = function (t, e, n, i) {
        var o = 0,
          r = i || n;
        return (
          e &&
            r &&
            (o = t[r].partialVisibilityGutter || t[r].paritialVisibilityGutter),
          o
        );
      }),
        (e.getWidthFromDeviceType = function (t, e) {
          var n;
          return e[t] && (n = (100 / e[t].items).toFixed(1)), n;
        }),
        (e.getItemClientSideWidth = function (t, e, n) {
          return Math.round(n / (e + (t.centerMode ? 1 : 0)));
        });
    },
    hz1c: function (t, e) {
      t.exports =
        '/_next/static/images/offer-3-2f8285b13bef950f843cb4147666af6e.png';
    },
    hzYQ: function (t, e) {
      t.exports =
        '/_next/static/images/bags-ac02ab6ebb5355d936d3577015f180c8.png';
    },
    i7tg: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n('MjxK');
      (e.getOriginalCounterPart = i.getOriginalCounterPart),
        (e.getClones = i.getClones),
        (e.checkClonesPosition = i.checkClonesPosition),
        (e.getInitialSlideInInfiniteMode = i.getInitialSlideInInfiniteMode);
      var o = n('fzz/');
      (e.getWidthFromDeviceType = o.getWidthFromDeviceType),
        (e.getPartialVisibilityGutter = o.getPartialVisibilityGutter),
        (e.getItemClientSideWidth = o.getItemClientSideWidth);
      var r = n('Z0Xe');
      (e.getInitialState = r.getInitialState),
        (e.getIfSlideIsVisbile = r.getIfSlideIsVisbile),
        (e.getTransformForCenterMode = r.getTransformForCenterMode),
        (e.getTransformForPartialVsibile = r.getTransformForPartialVsibile),
        (e.isInLeftEnd = r.isInLeftEnd),
        (e.isInRightEnd = r.isInRightEnd),
        (e.notEnoughChildren = r.notEnoughChildren),
        (e.getSlidesToSlide = r.getSlidesToSlide);
      var a = n('JUKJ');
      e.throttle = a.default;
      var s = n('ayqs');
      e.throwError = s.default;
      var l = n('XOkS');
      e.populateNextSlides = l.populateNextSlides;
      var c = n('fUjb');
      e.populatePreviousSlides = c.populatePreviousSlides;
      var u = n('Qx/Q');
      e.populateSlidesOnMouseTouchMove = u.populateSlidesOnMouseTouchMove;
    },
    'iN+R': function (t, e, n) {
      var i = n('bOkD'),
        o = n('DSo7'),
        r = n('D7XE'),
        a = n('uYlf');
      t.exports = function (t) {
        return i(t) || o(t) || r(t) || a();
      };
    },
    lTvC: function (t, e, n) {
      'use strict';
      (function (t) {
        n.d(e, 'a', function () {
          return S;
        });
        var i = n('tsZ/'),
          o = (n('aWzz'), n('ERkP')),
          r = n.n(o),
          a = n('kvVz');
        function s(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        function l(t) {
          return (l = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function c(t, e) {
          return (c =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function u(t, e) {
          return !e || ('object' !== typeof e && 'function' !== typeof e)
            ? (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(t)
            : e;
        }
        function d(t, e) {
          var n,
            i =
              ((n = t),
              !isNaN(parseFloat(n)) && isFinite(n)
                ? parseFloat(n)
                : 'px' === n.slice(-2)
                ? parseFloat(n.slice(0, -2))
                : void 0);
          if ('number' === typeof i) return i;
          var o = (function (t) {
            if ('%' === t.slice(-1)) return parseFloat(t.slice(0, -1)) / 100;
          })(t);
          return 'number' === typeof o ? o * e : void 0;
        }
        var p = 'above',
          f = 'inside',
          h = 'below',
          m = 'invisible';
        function v(t) {
          return 'string' === typeof t.type;
        }
        var g,
          y =
            '<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.';
        var w = [];
        function b(t) {
          w.push(t),
            g ||
              (g = setTimeout(function () {
                var t;
                for (g = null; (t = w.shift()); ) t();
              }, 0));
          var e = !0;
          return function () {
            if (e) {
              e = !1;
              var n = w.indexOf(t);
              -1 !== n &&
                (w.splice(n, 1),
                !w.length && g && (clearTimeout(g), (g = null)));
            }
          };
        }
        var x = {
            debug: !1,
            scrollableAncestor: void 0,
            children: void 0,
            topOffset: '0px',
            bottomOffset: '0px',
            horizontal: !1,
            onEnter: function () {},
            onLeave: function () {},
            onPositionChange: function () {},
            fireOnRapidScroll: !0,
          },
          S = (function (e) {
            function n(t) {
              var e;
              return (
                (function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError('Cannot call a class as a function');
                })(this, n),
                ((e = u(this, l(n).call(this, t))).refElement = function (t) {
                  e._ref = t;
                }),
                e
              );
            }
            var o, g, w;
            return (
              (function (t, e) {
                if ('function' !== typeof e && null !== e)
                  throw new TypeError(
                    'Super expression must either be null or a function'
                  );
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: { value: t, writable: !0, configurable: !0 },
                })),
                  e && c(t, e);
              })(n, e),
              (o = n),
              (g = [
                {
                  key: 'componentDidMount',
                  value: function () {
                    var t = this;
                    n.getWindow() &&
                      (this.cancelOnNextTick = b(function () {
                        t.cancelOnNextTick = null;
                        var e = t.props,
                          n = e.children;
                        e.debug,
                          (function (t, e) {
                            if (t && !v(t) && !e) throw new Error(y);
                          })(n, t._ref),
                          (t._handleScroll = t._handleScroll.bind(t)),
                          (t.scrollableAncestor = t._findScrollableAncestor()),
                          (t.scrollEventListenerUnsubscribe = Object(
                            i.a
                          )(t.scrollableAncestor, 'scroll', t._handleScroll, {
                            passive: !0,
                          })),
                          (t.resizeEventListenerUnsubscribe = Object(
                            i.a
                          )(window, 'resize', t._handleScroll, {
                            passive: !0,
                          })),
                          t._handleScroll(null);
                      }));
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function () {
                    var t = this;
                    n.getWindow() &&
                      this.scrollableAncestor &&
                      (this.cancelOnNextTick ||
                        (this.cancelOnNextTick = b(function () {
                          (t.cancelOnNextTick = null), t._handleScroll(null);
                        })));
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    n.getWindow() &&
                      (this.scrollEventListenerUnsubscribe &&
                        this.scrollEventListenerUnsubscribe(),
                      this.resizeEventListenerUnsubscribe &&
                        this.resizeEventListenerUnsubscribe(),
                      this.cancelOnNextTick && this.cancelOnNextTick());
                  },
                },
                {
                  key: '_findScrollableAncestor',
                  value: function () {
                    var e = this.props,
                      n = e.horizontal,
                      i = e.scrollableAncestor;
                    if (i)
                      return (function (e) {
                        return 'window' === e ? t.window : e;
                      })(i);
                    for (var o = this._ref; o.parentNode; ) {
                      if ((o = o.parentNode) === document.body) return window;
                      var r = window.getComputedStyle(o),
                        a =
                          (n
                            ? r.getPropertyValue('overflow-x')
                            : r.getPropertyValue('overflow-y')) ||
                          r.getPropertyValue('overflow');
                      if ('auto' === a || 'scroll' === a) return o;
                    }
                    return window;
                  },
                },
                {
                  key: '_handleScroll',
                  value: function (t) {
                    if (this._ref) {
                      var e = this._getBounds(),
                        n = (function (t) {
                          return t.viewportBottom - t.viewportTop === 0
                            ? m
                            : t.viewportTop <= t.waypointTop &&
                              t.waypointTop <= t.viewportBottom
                            ? f
                            : t.viewportTop <= t.waypointBottom &&
                              t.waypointBottom <= t.viewportBottom
                            ? f
                            : t.waypointTop <= t.viewportTop &&
                              t.viewportBottom <= t.waypointBottom
                            ? f
                            : t.viewportBottom < t.waypointTop
                            ? h
                            : t.waypointTop < t.viewportTop
                            ? p
                            : m;
                        })(e),
                        i = this._previousPosition,
                        o = this.props,
                        r = (o.debug, o.onPositionChange),
                        a = o.onEnter,
                        s = o.onLeave,
                        l = o.fireOnRapidScroll;
                      if (((this._previousPosition = n), i !== n)) {
                        var c = {
                          currentPosition: n,
                          previousPosition: i,
                          event: t,
                          waypointTop: e.waypointTop,
                          waypointBottom: e.waypointBottom,
                          viewportTop: e.viewportTop,
                          viewportBottom: e.viewportBottom,
                        };
                        r.call(this, c),
                          n === f
                            ? a.call(this, c)
                            : i === f && s.call(this, c),
                          l &&
                            ((i === h && n === p) || (i === p && n === h)) &&
                            (a.call(this, {
                              currentPosition: f,
                              previousPosition: i,
                              event: t,
                              waypointTop: e.waypointTop,
                              waypointBottom: e.waypointBottom,
                              viewportTop: e.viewportTop,
                              viewportBottom: e.viewportBottom,
                            }),
                            s.call(this, {
                              currentPosition: n,
                              previousPosition: f,
                              event: t,
                              waypointTop: e.waypointTop,
                              waypointBottom: e.waypointBottom,
                              viewportTop: e.viewportTop,
                              viewportBottom: e.viewportBottom,
                            }));
                      }
                    }
                  },
                },
                {
                  key: '_getBounds',
                  value: function () {
                    var t,
                      e,
                      n = this.props,
                      i = n.horizontal,
                      o = (n.debug, this._ref.getBoundingClientRect()),
                      r = o.left,
                      a = o.top,
                      s = o.right,
                      l = o.bottom,
                      c = i ? r : a,
                      u = i ? s : l;
                    this.scrollableAncestor === window
                      ? ((t = i ? window.innerWidth : window.innerHeight),
                        (e = 0))
                      : ((t = i
                          ? this.scrollableAncestor.offsetWidth
                          : this.scrollableAncestor.offsetHeight),
                        (e = i
                          ? this.scrollableAncestor.getBoundingClientRect().left
                          : this.scrollableAncestor.getBoundingClientRect()
                              .top));
                    var p = this.props,
                      f = p.bottomOffset;
                    return {
                      waypointTop: c,
                      waypointBottom: u,
                      viewportTop: e + d(p.topOffset, t),
                      viewportBottom: e + t - d(f, t),
                    };
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var t = this,
                      e = this.props.children;
                    return e
                      ? v(e) || Object(a.isForwardRef)(e)
                        ? r.a.cloneElement(e, {
                            ref: function (n) {
                              t.refElement(n),
                                e.ref &&
                                  ('function' === typeof e.ref
                                    ? e.ref(n)
                                    : (e.ref.current = n));
                            },
                          })
                        : r.a.cloneElement(e, { innerRef: this.refElement })
                      : r.a.createElement('span', {
                          ref: this.refElement,
                          style: { fontSize: 0 },
                        });
                  },
                },
              ]) && s(o.prototype, g),
              w && s(o, w),
              n
            );
          })(r.a.PureComponent);
        (S.above = p),
          (S.below = h),
          (S.inside = f),
          (S.invisible = m),
          (S.getWindow = function () {
            if ('undefined' !== typeof window) return window;
          }),
          (S.defaultProps = x),
          (S.displayName = 'Waypoint');
      }.call(this, n('lpmq')));
    },
    'op+c': function (t, e, n) {
      'use strict';
      var i;
      (e.__esModule = !0), (e.HeadManagerContext = void 0);
      var o = ((i = n('ERkP')) && i.__esModule
        ? i
        : { default: i }
      ).default.createContext(null);
      e.HeadManagerContext = o;
    },
    roL4: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, '__N_SSG', function () {
          return At;
        });
      var i = n('ERkP'),
        o = n.n(i),
        r = n('AU4o'),
        a = n.n(r),
        s = n('7xIC'),
        l = n('VU+f'),
        c = n('1U1M'),
        u = n('Ek28'),
        d = n('j/s1'),
        p = n('tZdC'),
        f = d.e.div.withConfig({
          displayName: 'store-navstyle__StoreNavWrapper',
          componentId: 'sc-1f4v04y-0',
        })(
          [
            'width:100%;overflow:hidden;z-index:1;position:relative;background-color:',
            ';height:55px;',
          ],
          Object(p.a)('colors.white', '#ffffff')
        ),
        h = d.e.div.withConfig({
          displayName: 'store-navstyle__StoreNavLinks',
          componentId: 'sc-1f4v04y-1',
        })(
          [
            'display:flex;flex-wrap:nowrap;align-items:flex-start;height:80px;overflow-y:hidden;overflow-x:auto;padding-top:15px;padding-bottom:25px;padding-left:15px;padding-right:15px;.store-nav-link{margin-right:10px;a{display:flex;align-items:center;font-size:calc(',
            ' - 1px);font-weight:',
            ';color:',
            ';padding:5px 9px;border-radius:',
            ';line-height:1.2;white-space:nowrap;svg{margin-right:5px;flex-shrink:0;}&.current-page{color:',
            ';background-color:',
            ';}}}',
          ],
          Object(p.a)('fontSizes.base', '15px'),
          Object(p.a)('fontWeights.bold', '700'),
          Object(p.a)('colors.text.regular', '#77798C'),
          Object(p.a)('radii.base', '6px'),
          Object(p.a)('colors.primary.regular', '#009E7F'),
          Object(p.a)('colors.gray.100', '#f9f9f9')
        ),
        m = f,
        v = o.a.createElement,
        g = function (t) {
          var e = t.className,
            n = t.items;
          return v(
            m,
            { className: e },
            v(
              h,
              null,
              (void 0 === n ? [] : n).map(function (t, e) {
                return v(u.a, {
                  className: 'store-nav-link',
                  href: t.href,
                  label: t.defaultMessage,
                  intlId: t.id,
                  dynamic: t.dynamic,
                  key: e,
                });
              })
            )
          );
        },
        y = n('cxan'),
        w = n('HbGN'),
        b = n('vZPQ'),
        x = n.n(b),
        S = n('0zej'),
        O = n('KclG'),
        T = n('uiyz'),
        _ = o.a.createElement,
        C = Object(d.e)('button').withConfig({
          displayName: 'carousel__ButtonPrev',
          componentId: 'sdn1m3-0',
        })(
          [
            'height:40px;width:40px;display:flex;align-items:center;justify-content:center;background-color:',
            ';color:',
            ';padding:0;border-radius:20px;box-shadow:',
            ';border:0;outline:0;cursor:pointer;position:absolute;top:50%;left:40px;margin-top:-20px;z-index:99;',
          ],
          Object(p.a)('colors.white', '#ffffff'),
          Object(p.a)('colors.primary.regular', '#009E7F'),
          Object(p.a)('shadows.base', '0 3px 6px rgba(0, 0, 0, 0.16)')
        ),
        P = Object(d.e)('button').withConfig({
          displayName: 'carousel__ButtonNext',
          componentId: 'sdn1m3-1',
        })(
          [
            'height:40px;width:40px;display:flex;align-items:center;justify-content:center;background-color:#ffffff;color:',
            ';padding:0;border-radius:20px;box-shadow:',
            ';border:0;outline:0;cursor:pointer;position:absolute;top:50%;right:40px;margin-top:-20px;z-index:99;',
          ],
          Object(p.a)('colors.primary.regular', '#009E7F'),
          Object(p.a)('shadows.base', '0 3px 6px rgba(0, 0, 0, 0.16)')
        ),
        E = Object(d.e)('div').withConfig({
          displayName: 'carousel__ButtonGroupWrapper',
          componentId: 'sdn1m3-2',
        })(['']),
        k = function (t) {
          var e = t.onClick,
            n = t.children;
          return _(
            C,
            {
              onClick: function (t) {
                t.preventDefault(), e();
              },
              className: 'prevButton',
            },
            n
          );
        },
        I = function (t) {
          var e = t.onClick,
            n = t.children;
          return _(
            P,
            {
              onClick: function (t) {
                t.preventDefault(), e();
              },
              className: 'nextButton',
            },
            n
          );
        },
        j = function (t) {
          var e = t.next,
            n = t.previous,
            i = Object(T.b)().isRtl;
          return _(
            E,
            null,
            i
              ? _(
                  o.a.Fragment,
                  null,
                  _(
                    I,
                    {
                      onClick: function () {
                        return e();
                      },
                      className: 'rtl',
                    },
                    _(O.a, null)
                  ),
                  _(
                    k,
                    {
                      onClick: function () {
                        return n();
                      },
                    },
                    _(S.a, null)
                  )
                )
              : _(
                  o.a.Fragment,
                  null,
                  _(
                    k,
                    {
                      onClick: function () {
                        return n();
                      },
                    },
                    _(O.a, null)
                  ),
                  _(
                    I,
                    {
                      onClick: function () {
                        return e();
                      },
                    },
                    _(S.a, null)
                  )
                )
          );
        },
        M = {
          desktop: { breakpoint: { max: 3e3, min: 1024 }, items: 3 },
          tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
          mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
        };
      function A(t) {
        var e = t.data,
          n = t.deviceType,
          i = (n.mobile, n.tablet, n.desktop, t.component),
          o = t.autoPlay,
          r = void 0 !== o && o,
          a = t.infinite,
          s = void 0 === a || a,
          l = (t.customLeftArrow, t.customRightArrow, t.itemClass),
          c =
            (t.isRtl,
            Object(w.a)(t, [
              'data',
              'deviceType',
              'component',
              'autoPlay',
              'infinite',
              'customLeftArrow',
              'customRightArrow',
              'itemClass',
              'isRtl',
            ]));
        return _(
          'div',
          { dir: 'ltr' },
          _(
            x.a,
            Object(y.a)(
              {
                arrows: !1,
                responsive: M,
                showDots: !1,
                slidesToSlide: 1,
                infinite: s,
                containerClass: 'container-with-dots',
                itemClass: l,
                autoPlay: r,
                autoPlaySpeed: 3e3,
                renderButtonGroupOutside: !0,
                additionalTransfrom: 0,
                customButtonGroup: _(j, null),
              },
              c
            ),
            e.map(function (t, e) {
              return i
                ? i(t)
                : _(
                    'div',
                    {
                      style: { padding: '0 15px', overflow: 'hidden' },
                      key: e,
                    },
                    _(
                      'a',
                      {
                        href: t.link,
                        style: { display: 'flex', cursor: 'pointer' },
                      },
                      _('img', {
                        key: t.id,
                        src: t.imgSrc,
                        alt: t.alt,
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
      var R,
        D = n('2SGB'),
        N = n('GkOb'),
        B = n('OBVT'),
        L = d.e.div.withConfig({
          displayName: 'bannerstyle__Box',
          componentId: 'sc-1wl29p7-0',
        })(Object(B.a)({ height: [200, '100vh'] }), {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          position: 'relative',
        }),
        W = d.e.div.withConfig({
          displayName: 'bannerstyle__Image',
          componentId: 'sc-1wl29p7-1',
        })(
          Object(B.a)({ backgroundSize: ['cover'] }),
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
          N.a
        ),
        z = d.e.div.withConfig({
          displayName: 'bannerstyle__Content',
          componentId: 'sc-1wl29p7-2',
        })(Object(B.a)({ px: ['15px'], pt: [40, 0] }), {
          position: 'relative',
          zIndex: 2,
        }),
        V = d.e.h2.withConfig({
          displayName: 'bannerstyle__Title',
          componentId: 'sc-1wl29p7-3',
        })(
          Object(B.a)({
            fontSize: [17, '2xl', 45],
            color: 'text.bold',
            fontWeight: 'bold',
          }),
          { marginBottom: 15, textAlign: 'center' }
        ),
        X = d.e.p.withConfig({
          displayName: 'bannerstyle__Description',
          componentId: 'sc-1wl29p7-4',
        })(
          Object(B.a)({
            fontSize: ['base', 'md'],
            color: 'text.regular',
            marginBottom: [null, 60],
            display: ['none', 'block'],
            fontWeight: 'regular',
            lineHeight: 'body',
          }),
          { textAlign: 'center' }
        ),
        H = n('lTvC'),
        F = n('xZKy'),
        G = o.a.createElement,
        U = function (t) {
          var e = t.imageUrl,
            n = t.intlTitleId,
            o = t.intlDescriptionId,
            r = Object(F.b)(),
            a = Object(i.useCallback)(
              function () {
                return r({ type: 'SET_STICKY' });
              },
              [r]
            ),
            s = Object(i.useCallback)(
              function () {
                return r({ type: 'REMOVE_STICKY' });
              },
              [r]
            );
          return G(
            L,
            null,
            G(W, { backgroundImage: 'url('.concat(e, ')') }),
            G(
              z,
              null,
              G(
                V,
                null,
                G(D.a, {
                  id: 'Set Your Title Through Language File',
                  defaultMessage: n,
                  values: { minute: 90 },
                })
              ),
              G(
                X,
                null,
                G(D.a, {
                  id: 'Set Your Description Through Language File',
                  defaultMessage: o,
                })
              ),
              G(H.a, {
                onEnter: s,
                onLeave: a,
                onPositionChange: function (t) {
                  var e = t.currentPosition;
                  (e && 'above' !== e) || a();
                },
              })
            )
          );
        },
        Z = d.e.div.withConfig({
          displayName: 'pagesstyle__MobileCarouselDropdown',
          componentId: 'sc-1pjed90-0',
        })(['@media (min-width:990px){display:none;}']),
        Y =
          (d.e.div.withConfig({
            displayName: 'pagesstyle__OfferPageWrapper',
            componentId: 'sc-1pjed90-1',
          })(
            [
              'width:100%;height:auto;min-height:100vh;display:flex;flex-direction:column;background-color:',
              ';position:relative;padding:100px 60px 60px;justify-content:space-between;@media (max-width:768px){padding:100px 30px 60px;}@media (max-width:1199px){padding:100px 30px 60px;}',
            ],
            Object(p.a)('colors.gray.200', '#f7f7f7')
          ),
          d.e.div.withConfig({
            displayName: 'pagesstyle__HeaderSection',
            componentId: 'sc-1pjed90-2',
          })(
            [
              'display:flex;flex-wrap:wrap;width:100%;min-height:400px;background-color:',
              ';',
            ],
            Object(p.a)('colors.gray.300', '#f4f4f4')
          ),
          d.e.main.withConfig({
            displayName: 'pagesstyle__MainContentArea',
            componentId: 'sc-1pjed90-3',
          })(
            [
              'width:100%;display:flex;flex-wrap:wrap;background-color:',
              ';padding-right:0;transition:padding-right 0.35s ease-in-out;',
            ],
            Object(p.a)('colors.gray.200', '#f7f7f7')
          )),
        K = d.e.div.withConfig({
          displayName: 'pagesstyle__SidebarSection',
          componentId: 'sc-1pjed90-4',
        })(
          [
            'background-color:',
            ';width:280px;@media (max-width:990px){display:none;}',
          ],
          Object(p.a)('colors.white', '#ffffff')
        ),
        Q = d.e.div.withConfig({
          displayName: 'pagesstyle__ContentSection',
          componentId: 'sc-1pjed90-5',
        })([
          'width:calc(100% - 280px);height:auto;min-height:100vh;padding:30px 30px 50px;@media (max-width:768px){padding:30px 7.5px 100px;}@media (max-width:1199px) and (min-width:991px){padding:15px 30px 50px;}@media (max-width:1367px) and (min-width:1200px){padding:15px 30px 50px;}@media (max-width:990px){width:100%;}@media (max-width:768px){padding-top:15px;min-height:auto;}.offer-slider{padding:0 0 30px 30px;}',
        ]),
        q = d.e.div.withConfig({
          displayName: 'pagesstyle__OfferSection',
          componentId: 'sc-1pjed90-6',
        })(
          [
            'width:100%;display:block;padding:60px;background-color:',
            ';position:relative;border-bottom:1px solid ',
            ';@media (max-width:1199px) and (min-width:991px){padding:20px 15px;.prevButton{left:0;}.nextButton{right:0;}}@media (max-width:990px){padding:15px;.prevButton{left:5px;}.nextButton{right:5px;}}',
          ],
          Object(p.a)('colors.white', '#ffffff'),
          Object(p.a)('colors.gray.500', '#f1f1f1')
        ),
        J =
          (d.e.h2.withConfig({
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
            Object(p.a)('fontSizes.xl', '24'),
            Object(p.a)('fontWeights.bold', '700'),
            Object(p.a)('colors.primary.regular', '#009e7f'),
            Object(p.a)('colors.primary.regular', '#009e7f')
          ),
          d.e.div.withConfig({
            displayName: 'pagesstyle__ProductsRow',
            componentId: 'sc-1pjed90-8',
          })(
            [
              'display:flex;flex-wrap:wrap;margin-top:30px;background-color:',
              ';@media (max-width:768px){margin-left:-7.5px;margin-right:-7.5px;margin-top:15px;}',
            ],
            Object(p.a)('colors.gray.200', '#f7f7f7')
          ),
          d.e.div.withConfig({
            displayName: 'pagesstyle__ProductsCol',
            componentId: 'sc-1pjed90-9',
          })([
            'flex:0 0 20%;max-width:20%;padding-left:15px;padding-right:15px;margin-bottom:30px;@media (max-width:1650px){flex:0 0 25%;max-width:25%;}@media (max-width:1300px){flex:0 0 33.3333333%;max-width:33.3333333%;}@media (max-width:1199px) and (min-width:900px){padding-left:10px;padding-right:10px;margin-bottom:20px;}@media (max-width:899px) and (min-width:769px){flex:0 0 50%;max-width:50%;}@media (max-width:768px){padding-left:7.5px;padding-right:7.5px;margin-bottom:15px;flex:0 0 50%;max-width:50%;}@media (max-width:490px){flex:0 0 100%;max-width:100%;}',
          ]),
          n('7f0m')),
        $ = n.n(J),
        tt = n('hz1c'),
        et = n.n(tt),
        nt = n('eIFp'),
        it = n.n(nt),
        ot = [
          { id: '1', imgSrc: $.a, alt: 'Offer 1' },
          { id: '2', imgSrc: it.a, alt: 'Offer 2' },
          { id: '3', imgSrc: et.a, alt: 'Offer 3' },
        ],
        rt = n('R4SK'),
        at = n.n(rt),
        st = n('AaBP'),
        lt = n.n(st),
        ct = n('hzYQ'),
        ut = n.n(ct),
        dt = n('BMAw'),
        pt = n.n(dt),
        ft = n('PQXp'),
        ht = n.n(ft),
        mt = n('Ej6a'),
        vt = n.n(mt),
        gt = n('tfq8'),
        yt = n.n(gt),
        wt = (at.a, lt.a, ut.a, pt.a, vt.a, ht.a, yt.a, n('H8eV')),
        bt = n('zjfJ'),
        xt = !(!window.document || !window.document.createElement);
      function St(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function Ot(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? St(Object(n), !0).forEach(function (e) {
                Object(bt.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : St(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function Tt(t) {
        var e = t.percentOfElement,
          n = void 0 === e ? 50 : e,
          o = t.offsetPX,
          r = void 0 === o ? 0 : o,
          a = t.onMount,
          s = void 0 !== a && a,
          l = t.container,
          c = void 0 === l ? (xt ? window : null) : l,
          u = t.percentOfContainer,
          d = void 0 === u ? 50 : u,
          p = t.direction,
          f = void 0 === p ? R.Vertical : p,
          h = Object(i.useRef)(null),
          m = Object(i.useCallback)(
            function () {
              h.current &&
                (function (t, e) {
                  var n = e.container,
                    i = e.percentOfElement,
                    o = e.offsetPX,
                    r = e.direction,
                    a = e.percentOfContainer,
                    s = t.current.getClientRects()[0],
                    l = r === R.Vertical,
                    c = l ? s.height : s.width,
                    u = l ? s.y : s.x,
                    d =
                      n === window
                        ? l
                          ? n.innerHeight
                          : n.innerWidth
                        : l
                        ? n.scrollHeight
                        : n.scrollWidth,
                    p = (c * i) / 100;
                  o && (p += o);
                  var f = (l ? n.scrollY : n.scrollX) + u + ((d * a) / 100 + p),
                    h = l ? { top: f } : { left: f };
                  window.scrollTo(Ot(Ot({}, h), {}, { behavior: 'smooth' }));
                })(h, {
                  percentOfElement: n,
                  offsetPX: r,
                  container: c,
                  percentOfContainer: d,
                  direction: f,
                });
            },
            [h.current]
          );
        return (
          Object(i.useEffect)(function () {
            s && m();
          }, []),
          { elRef: h, scroll: m }
        );
      }
      !(function (t) {
        (t[(t.Horizontal = 0)] = 'Horizontal'),
          (t[(t.Vertical = 1)] = 'Vertical');
      })(R || (R = {}));
      var _t = n('IGqs'),
        Ct = n('5l48'),
        Pt = n('quMH'),
        Et = n('W1nP'),
        kt = o.a.createElement,
        It = a()(
          function () {
            return Promise.all([n.e(8), n.e(10), n.e(17), n.e(44)]).then(
              n.bind(null, '8XX/')
            );
          },
          {
            loadableGenerated: {
              webpack: function () {
                return ['8XX/'];
              },
              modules: ['layouts/sidebar/sidebar'],
            },
          }
        ),
        jt = a()(
          function () {
            return Promise.all([n.e(8), n.e(14)]).then(n.bind(null, 'SZ6D'));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return ['SZ6D'];
              },
              modules: ['components/product-grid/product-list/product-list'],
            },
          }
        ),
        Mt = a()(
          function () {
            return Promise.all([n.e(6), n.e(8), n.e(14)]).then(
              n.bind(null, 'gZAk')
            );
          },
          {
            ssr: !1,
            loadableGenerated: {
              webpack: function () {
                return ['gZAk'];
              },
              modules: ['features/carts/cart-popup'],
            },
          }
        ),
        At = !0;
      e.default = function (t) {
        var e = t.deviceType,
          n = Object(s.useRouter)().query,
          i = Tt({
            percentOfElement: 0,
            percentOfContainer: 0,
            offsetPX: -110,
          }),
          r = i.elRef,
          a = i.scroll;
        o.a.useEffect(
          function () {
            (n.text || n.category) && a();
          },
          [n.text, n.category]
        );
        var u = n.type,
          d = Object(c.b)(_t.a, { variables: { searchText: u } }),
          p = d.data,
          f = d.loading,
          h = d.error;
        if (f) return kt(Pt.default, { message: 'Loading...' });
        if (h) return kt(Pt.default, { message: h.message });
        var m = p.types.items[0],
          v = m.home_title,
          y = m.home_subtitle,
          w = m.image;
        return kt(
          o.a.Fragment,
          null,
          kt(wt.a, { title: v, description: y }),
          kt(
            l.a,
            null,
            kt(U, { intlTitleId: v, intlDescriptionId: y, imageUrl: Et.a + w }),
            kt(
              Z,
              null,
              kt(g, { items: Ct.e }),
              kt(It, { type: u, deviceType: e })
            ),
            kt(
              q,
              null,
              kt(
                'div',
                { style: { margin: '0 -10px' } },
                kt(A, { deviceType: e, data: ot })
              )
            ),
            kt(
              Y,
              null,
              kt(K, null, kt(It, { type: u, deviceType: e })),
              kt(
                Q,
                null,
                kt(
                  'div',
                  { ref: r },
                  kt(jt, { type: u, deviceType: e, fetchLimit: 20 })
                )
              )
            ),
            kt(Mt, { deviceType: e })
          )
        );
      };
    },
    sDBz: function (t, e, n) {
      'use strict';
      n.d(e, 'b', function () {
        return a;
      }),
        n.d(e, 'a', function () {
          return s;
        });
      var i = n('zjfJ');
      function o(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function r(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? o(Object(n), !0).forEach(function (e) {
                Object(i.a)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var a = {
        searchTerm: '',
        isSticky: !1,
        isSidebarSticky: !0,
        isDrawerOpen: !1,
      };
      function s(t, e) {
        switch (e.type) {
          case 'SET_SEARCH_TERM':
            return r(r({}, t), {}, { searchTerm: e.payload });
          case 'SET_STICKY':
            return r(r({}, t), {}, { isSticky: !0 });
          case 'REMOVE_STICKY':
            return r(r({}, t), {}, { isSticky: !1 });
          case 'SET_SIDEBAR_STICKY':
            return r(r({}, t), {}, { isSidebarSticky: !0 });
          case 'REMOVE_SIDEBAR_STICKY':
            return r(r({}, t), {}, { isSidebarSticky: !1 });
          case 'TOGGLE_DRAWER':
            return r(r({}, t), {}, { isDrawerOpen: !t.isDrawerOpen });
          default:
            throw new Error('Unsupported action type at App Reducer');
        }
      }
    },
    t7Zs: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = n('7NlZ');
      e.default = i.default;
    },
    tfq8: function (t, e) {
      t.exports =
        '/_next/static/images/medicine-6e8ebb087020b94d3aeae59c5c51744f.png';
    },
    'tsZ/': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return c;
      });
      var i = !(
        'undefined' === typeof window ||
        !window.document ||
        !window.document.createElement
      );
      var o = void 0;
      function r() {
        return (
          void 0 === o &&
            (o = (function () {
              if (!i) return !1;
              if (
                !window.addEventListener ||
                !window.removeEventListener ||
                !Object.defineProperty
              )
                return !1;
              var t = !1;
              try {
                var e = Object.defineProperty({}, 'passive', {
                    get: function () {
                      t = !0;
                    },
                  }),
                  n = function () {};
                window.addEventListener('testPassiveEventSupport', n, e),
                  window.removeEventListener('testPassiveEventSupport', n, e);
              } catch (o) {}
              return t;
            })()),
          o
        );
      }
      function a(t) {
        t.handlers === t.nextHandlers && (t.nextHandlers = t.handlers.slice());
      }
      function s(t) {
        (this.target = t), (this.events = {});
      }
      (s.prototype.getEventHandlers = function (t, e) {
        var n,
          i =
            String(t) +
            ' ' +
            String(
              (n = e)
                ? !0 === n
                  ? 100
                  : (n.capture << 0) + (n.passive << 1) + (n.once << 2)
                : 0
            );
        return (
          this.events[i] ||
            ((this.events[i] = { handlers: [], handleEvent: void 0 }),
            (this.events[i].nextHandlers = this.events[i].handlers)),
          this.events[i]
        );
      }),
        (s.prototype.handleEvent = function (t, e, n) {
          var i = this.getEventHandlers(t, e);
          (i.handlers = i.nextHandlers),
            i.handlers.forEach(function (t) {
              t && t(n);
            });
        }),
        (s.prototype.add = function (t, e, n) {
          var i = this,
            o = this.getEventHandlers(t, n);
          a(o),
            0 === o.nextHandlers.length &&
              ((o.handleEvent = this.handleEvent.bind(this, t, n)),
              this.target.addEventListener(t, o.handleEvent, n)),
            o.nextHandlers.push(e);
          var r = !0;
          return function () {
            if (r) {
              (r = !1), a(o);
              var s = o.nextHandlers.indexOf(e);
              o.nextHandlers.splice(s, 1),
                0 === o.nextHandlers.length &&
                  (i.target &&
                    i.target.removeEventListener(t, o.handleEvent, n),
                  (o.handleEvent = void 0));
            }
          };
        });
      var l = '__consolidated_events_handlers__';
      function c(t, e, n, i) {
        t[l] || (t[l] = new s(t));
        var o = (function (t) {
          if (t) return r() ? t : !!t.capture;
        })(i);
        return t[l].add(e, n, o);
      }
    },
    uYlf: function (t, e) {
      t.exports = function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      };
    },
    vWkV: function (t, e, n) {
      'use strict';
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(e, n);
          };
          return function (e, n) {
            function i() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((i.prototype = n.prototype), new i()));
          };
        })();
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = n('ERkP');
      e.isMouseMoveEvent = function (t) {
        return 'clientY' in t;
      };
      var r = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return i(e, t), e;
      })(o.Component);
      e.default = r;
    },
    vZPQ: function (t, e, n) {
      t.exports = n('t7Zs');
    },
    ysqo: function (t, e, n) {
      'use strict';
      (e.__esModule = !0), (e.defaultHead = c), (e.default = void 0);
      var i = l(n('ERkP')),
        o = l(n('J9Yr')),
        r = n('TZT2'),
        a = n('op+c'),
        s = n('dq4L');
      function l(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function c() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          e = [i.default.createElement('meta', { charSet: 'utf-8' })];
        return (
          t ||
            e.push(
              i.default.createElement('meta', {
                name: 'viewport',
                content: 'width=device-width',
              })
            ),
          e
        );
      }
      function u(t, e) {
        return 'string' === typeof e || 'number' === typeof e
          ? t
          : e.type === i.default.Fragment
          ? t.concat(
              i.default.Children.toArray(e.props.children).reduce(function (
                t,
                e
              ) {
                return 'string' === typeof e || 'number' === typeof e
                  ? t
                  : t.concat(e);
              },
              [])
            )
          : t.concat(e);
      }
      var d = ['name', 'httpEquiv', 'charSet', 'itemProp'];
      function p(t, e) {
        return t
          .reduce(function (t, e) {
            var n = i.default.Children.toArray(e.props.children);
            return t.concat(n);
          }, [])
          .reduce(u, [])
          .reverse()
          .concat(c(e.inAmpMode))
          .filter(
            (function () {
              var t = new Set(),
                e = new Set(),
                n = new Set(),
                i = {};
              return function (o) {
                var r = !0;
                if (
                  o.key &&
                  'number' !== typeof o.key &&
                  o.key.indexOf('$') > 0
                ) {
                  var a = o.key.slice(o.key.indexOf('$') + 1);
                  t.has(a) ? (r = !1) : t.add(a);
                }
                switch (o.type) {
                  case 'title':
                  case 'base':
                    e.has(o.type) ? (r = !1) : e.add(o.type);
                    break;
                  case 'meta':
                    for (var s = 0, l = d.length; s < l; s++) {
                      var c = d[s];
                      if (o.props.hasOwnProperty(c))
                        if ('charSet' === c) n.has(c) ? (r = !1) : n.add(c);
                        else {
                          var u = o.props[c],
                            p = i[c] || new Set();
                          p.has(u) ? (r = !1) : (p.add(u), (i[c] = p));
                        }
                    }
                }
                return r;
              };
            })()
          )
          .reverse()
          .map(function (t, e) {
            var n = t.key || e;
            return i.default.cloneElement(t, { key: n });
          });
      }
      var f = (0, o.default)();
      function h(t) {
        var e = t.children;
        return i.default.createElement(
          r.AmpStateContext.Consumer,
          null,
          function (t) {
            return i.default.createElement(
              a.HeadManagerContext.Consumer,
              null,
              function (n) {
                return i.default.createElement(
                  f,
                  {
                    reduceComponentsToState: p,
                    handleStateChange: n,
                    inAmpMode: (0, s.isInAmpMode)(t),
                  },
                  e
                );
              }
            );
          }
        );
      }
      h.rewind = f.rewind;
      var m = h;
      e.default = m;
    },
  },
  [['QVBA', 1, 0, 2, 4, 3, 5, 7, 9, 11, 13, 15]],
]);
