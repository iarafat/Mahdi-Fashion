(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
    '0xii': function (e, t, n) {
      (function (t) {
        for (
          var o = n('FF9q'),
            r = 'undefined' === typeof window ? t : window,
            i = ['moz', 'webkit'],
            a = 'AnimationFrame',
            u = r['request' + a],
            s = r['cancel' + a] || r['cancelRequest' + a],
            c = 0;
          !u && c < i.length;
          c++
        )
          (u = r[i[c] + 'Request' + a]),
            (s = r[i[c] + 'Cancel' + a] || r[i[c] + 'CancelRequest' + a]);
        if (!u || !s) {
          var l = 0,
            f = 0,
            d = [];
          (u = function (e) {
            if (0 === d.length) {
              var t = o(),
                n = Math.max(0, 1e3 / 60 - (t - l));
              (l = n + t),
                setTimeout(function () {
                  var e = d.slice(0);
                  d.length = 0;
                  for (var t = 0; t < e.length; t++)
                    if (!e[t].cancelled)
                      try {
                        e[t].callback(l);
                      } catch (n) {
                        setTimeout(function () {
                          throw n;
                        }, 0);
                      }
                }, Math.round(n));
            }
            return d.push({ handle: ++f, callback: e, cancelled: !1 }), f;
          }),
            (s = function (e) {
              for (var t = 0; t < d.length; t++)
                d[t].handle === e && (d[t].cancelled = !0);
            });
        }
        (e.exports = function (e) {
          return u.call(r, e);
        }),
          (e.exports.cancel = function () {
            s.apply(r, arguments);
          }),
          (e.exports.polyfill = function (e) {
            e || (e = r),
              (e.requestAnimationFrame = u),
              (e.cancelAnimationFrame = s);
          });
      }.call(this, n('lpmq')));
    },
    '2odn': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          defaultEasing: function (e) {
            return e < 0.5
              ? Math.pow(2 * e, 2) / 2
              : 1 - Math.pow(2 * (1 - e), 2) / 2;
          },
          linear: function (e) {
            return e;
          },
          easeInQuad: function (e) {
            return e * e;
          },
          easeOutQuad: function (e) {
            return e * (2 - e);
          },
          easeInOutQuad: function (e) {
            return e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1;
          },
          easeInCubic: function (e) {
            return e * e * e;
          },
          easeOutCubic: function (e) {
            return --e * e * e + 1;
          },
          easeInOutCubic: function (e) {
            return e < 0.5
              ? 4 * e * e * e
              : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
          },
          easeInQuart: function (e) {
            return e * e * e * e;
          },
          easeOutQuart: function (e) {
            return 1 - --e * e * e * e;
          },
          easeInOutQuart: function (e) {
            return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
          },
          easeInQuint: function (e) {
            return e * e * e * e * e;
          },
          easeOutQuint: function (e) {
            return 1 + --e * e * e * e * e;
          },
          easeInOutQuint: function (e) {
            return e < 0.5
              ? 16 * e * e * e * e * e
              : 1 + 16 * --e * e * e * e * e;
          },
        });
    },
    ApmR: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          },
        r = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        i = s(n('ERkP')),
        a = s(n('TGc1')),
        u = s(n('aWzz'));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var c = (function (e) {
        function t() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
            (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ('object' !== typeof t && 'function' !== typeof t)
                ? e
                : t;
            })(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          (function (e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          r(t, [
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = o({}, this.props);
                return (
                  t.parentBindings && delete t.parentBindings,
                  i.default.createElement(
                    'div',
                    o({}, t, {
                      ref: function (t) {
                        e.props.parentBindings.domNode = t;
                      },
                    }),
                    this.props.children
                  )
                );
              },
            },
          ]),
          t
        );
      })(i.default.Component);
      (c.propTypes = { name: u.default.string, id: u.default.string }),
        (t.default = (0, a.default)(c));
    },
    DSo7: function (e, t) {
      e.exports = function (e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      };
    },
    FF9q: function (e, t, n) {
      (function (t) {
        (function () {
          var n, o, r, i, a, u;
          'undefined' !== typeof performance &&
          null !== performance &&
          performance.now
            ? (e.exports = function () {
                return performance.now();
              })
            : 'undefined' !== typeof t && null !== t && t.hrtime
            ? ((e.exports = function () {
                return (n() - a) / 1e6;
              }),
              (o = t.hrtime),
              (i = (n = function () {
                var e;
                return 1e9 * (e = o())[0] + e[1];
              })()),
              (u = 1e9 * t.uptime()),
              (a = i - u))
            : Date.now
            ? ((e.exports = function () {
                return Date.now() - r;
              }),
              (r = Date.now()))
            : ((e.exports = function () {
                return new Date().getTime() - r;
              }),
              (r = new Date().getTime()));
        }.call(this));
      }.call(this, n('F63i')));
    },
    GSJS: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      (t.addPassiveEventListener = function (e, t, n) {
        var o = (function () {
          var e = !1;
          try {
            var t = Object.defineProperty({}, 'passive', {
              get: function () {
                e = !0;
              },
            });
            window.addEventListener('test', null, t);
          } catch (n) {}
          return e;
        })();
        e.addEventListener(t, n, !!o && { passive: !0 });
      }),
        (t.removePassiveEventListener = function (e, t, n) {
          e.removeEventListener(t, n);
        });
    },
    H8eV: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return s;
      });
      var o = n('ERkP'),
        r = n.n(o),
        i = n('ysqo'),
        a = n.n(i),
        u = r.a.createElement,
        s = function (e) {
          var t = e.title,
            n = e.description,
            o = e.canonical,
            r = e.css,
            i = e.js,
            s = e.image;
          return u(
            a.a,
            null,
            u('title', null, t),
            u('meta', { name: 'description', content: n }),
            u('meta', {
              name: 'viewport',
              content: 'width=device-width,minimum-scale=1,initial-scale=1',
            }),
            u('meta', { property: 'og:type', content: 'website' }),
            u('meta', { name: 'og:title', property: 'og:title', content: t }),
            u('meta', {
              name: 'og:description',
              property: 'og:description',
              content: n,
            }),
            u('meta', { property: 'og:site_name', content: 'Proper Noun' }),
            u('meta', { property: 'og:url', content: ''.concat(o) }),
            u('meta', { name: 'twitter:card', content: 'summary' }),
            u('meta', { name: 'twitter:title', content: t }),
            u('meta', { name: 'twitter:description', content: n }),
            u('meta', { name: 'twitter:site', content: '@propernounco' }),
            u('meta', { name: 'twitter:creator', content: '@propernounco' }),
            r && u('link', { rel: 'stylesheet', href: ''.concat(r) }),
            u(
              'meta',
              s
                ? { property: 'og:image', content: ''.concat(s) }
                : {
                    property: 'og:image',
                    content:
                      'https://www.propernoun.co/static/images/proper-noun-social.png',
                  }
            ),
            s && u('meta', { name: 'twitter:image', content: ''.concat(s) }),
            o && u('link', { rel: 'canonical', href: ''.concat(o) }),
            i && u('script', { type: 'text/javascript', src: ''.concat(i) })
          );
        };
    },
    J9Yr: function (e, t, n) {
      'use strict';
      var o = n('zQIG'),
        r = n('N7I1'),
        i = n('8mBC'),
        a = n('I/kN'),
        u = n('cMav'),
        s = n('pSQP'),
        c = n('iN+R');
      function l(e) {
        var t = (function () {
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
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            o = s(e);
          if (t) {
            var r = s(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return u(this, n);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var f = n('ERkP'),
        d = !1;
      t.default = function () {
        var e,
          t = new Set();
        function n(n) {
          (e = n.props.reduceComponentsToState(c(t), n.props)),
            n.props.handleStateChange && n.props.handleStateChange(e);
        }
        return (function (u) {
          a(c, u);
          var s = l(c);
          function c(e) {
            var i;
            return (
              o(this, c), (i = s.call(this, e)), d && (t.add(r(i)), n(r(i))), i
            );
          }
          return (
            i(c, null, [
              {
                key: 'rewind',
                value: function () {
                  var n = e;
                  return (e = void 0), t.clear(), n;
                },
              },
            ]),
            i(c, [
              {
                key: 'componentDidMount',
                value: function () {
                  t.add(this), n(this);
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
                  t.delete(this), n(this);
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
        })(f.Component);
      };
    },
    Kt3i: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      t.default = {
        pushHash: function (e) {
          if (
            ((e = e ? (0 === e.indexOf('#') ? e : '#' + e) : ''),
            history.pushState)
          ) {
            var t = window.location;
            history.pushState(
              null,
              null,
              e ? t.pathname + t.search + e : t.pathname + t.search
            );
          } else location.hash = e;
        },
        getHash: function () {
          return window.location.hash.replace(/^#/, '');
        },
        filterElementInContainer: function (e) {
          return function (t) {
            return e.contains
              ? e != t && e.contains(t)
              : !!(16 & e.compareDocumentPosition(t));
          };
        },
        scrollOffset: function (e, t) {
          return e === document
            ? t.getBoundingClientRect().top +
                (window.scrollY || window.pageYOffset)
            : 'static' !== getComputedStyle(e).position
            ? t.offsetTop
            : t.offsetTop - e.offsetTop;
        },
      };
    },
    MTOP: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      n('GSJS');
      var o,
        r = n('Kt3i'),
        i = (o = r) && o.__esModule ? o : { default: o };
      var a = {
        mountFlag: !1,
        initialized: !1,
        scroller: null,
        containers: {},
        mount: function (e) {
          (this.scroller = e),
            (this.handleHashChange = this.handleHashChange.bind(this)),
            window.addEventListener('hashchange', this.handleHashChange),
            this.initStateFromHash(),
            (this.mountFlag = !0);
        },
        mapContainer: function (e, t) {
          this.containers[e] = t;
        },
        isMounted: function () {
          return this.mountFlag;
        },
        isInitialized: function () {
          return this.initialized;
        },
        initStateFromHash: function () {
          var e = this,
            t = this.getHash();
          t
            ? window.setTimeout(function () {
                e.scrollTo(t, !0), (e.initialized = !0);
              }, 10)
            : (this.initialized = !0);
        },
        scrollTo: function (e, t) {
          var n = this.scroller;
          if (n.get(e) && (t || e !== n.getActiveLink())) {
            var o = this.containers[e] || document;
            n.scrollTo(e, { container: o });
          }
        },
        getHash: function () {
          return i.default.getHash();
        },
        changeHash: function (e) {
          this.isInitialized() &&
            i.default.getHash() !== e &&
            i.default.pushHash(e);
        },
        handleHashChange: function () {
          this.scrollTo(this.getHash());
        },
        unmount: function () {
          (this.scroller = null),
            (this.containers = null),
            window.removeEventListener('hashchange', this.handleHashChange);
        },
      };
      t.default = a;
    },
    MuVF: function (e, t, n) {
      'use strict';
      var o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          },
        r = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })();
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function a(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
      }
      function u(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var s = n('ERkP'),
        c = (n('7nmT'), n('Kt3i'), n('robK')),
        l = n('ofHe'),
        f = n('aWzz'),
        d = n('MTOP'),
        p = {
          to: f.string.isRequired,
          containerId: f.string,
          container: f.object,
          activeClass: f.string,
          spy: f.bool,
          smooth: f.oneOfType([f.bool, f.string]),
          offset: f.number,
          delay: f.number,
          isDynamic: f.bool,
          onClick: f.func,
          duration: f.oneOfType([f.number, f.func]),
          absolute: f.bool,
          onSetActive: f.func,
          onSetInactive: f.func,
          ignoreCancelEvents: f.bool,
          hashSpy: f.bool,
        },
        h = {
          Scroll: function (e, t) {
            console.warn('Helpers.Scroll is deprecated since v1.7.0');
            var n = t || l,
              f = (function (t) {
                function l(e) {
                  i(this, l);
                  var t = a(
                    this,
                    (l.__proto__ || Object.getPrototypeOf(l)).call(this, e)
                  );
                  return h.call(t), (t.state = { active: !1 }), t;
                }
                return (
                  u(l, t),
                  r(l, [
                    {
                      key: 'getScrollSpyContainer',
                      value: function () {
                        var e = this.props.containerId,
                          t = this.props.container;
                        return e
                          ? document.getElementById(e)
                          : t && t.nodeType
                          ? t
                          : document;
                      },
                    },
                    {
                      key: 'componentDidMount',
                      value: function () {
                        if (this.props.spy || this.props.hashSpy) {
                          var e = this.getScrollSpyContainer();
                          c.isMounted(e) || c.mount(e),
                            this.props.hashSpy &&
                              (d.isMounted() || d.mount(n),
                              d.mapContainer(this.props.to, e)),
                            this.props.spy &&
                              c.addStateHandler(this.stateHandler),
                            c.addSpyHandler(this.spyHandler, e),
                            this.setState({ container: e });
                        }
                      },
                    },
                    {
                      key: 'componentWillUnmount',
                      value: function () {
                        c.unmount(this.stateHandler, this.spyHandler);
                      },
                    },
                    {
                      key: 'render',
                      value: function () {
                        var t = '';
                        t =
                          this.state && this.state.active
                            ? (
                                (this.props.className || '') +
                                ' ' +
                                (this.props.activeClass || 'active')
                              ).trim()
                            : this.props.className;
                        var n = o({}, this.props);
                        for (var r in p) n.hasOwnProperty(r) && delete n[r];
                        return (
                          (n.className = t),
                          (n.onClick = this.handleClick),
                          s.createElement(e, n)
                        );
                      },
                    },
                  ]),
                  l
                );
              })(s.Component),
              h = function () {
                var e = this;
                (this.scrollTo = function (t, r) {
                  n.scrollTo(t, o({}, e.state, r));
                }),
                  (this.handleClick = function (t) {
                    e.props.onClick && e.props.onClick(t),
                      t.stopPropagation && t.stopPropagation(),
                      t.preventDefault && t.preventDefault(),
                      e.scrollTo(e.props.to, e.props);
                  }),
                  (this.stateHandler = function () {
                    n.getActiveLink() !== e.props.to &&
                      (null !== e.state &&
                        e.state.active &&
                        e.props.onSetInactive &&
                        e.props.onSetInactive(),
                      e.setState({ active: !1 }));
                  }),
                  (this.spyHandler = function (t) {
                    var o = e.getScrollSpyContainer();
                    if (!d.isMounted() || d.isInitialized()) {
                      var r = e.props.to,
                        i = null,
                        a = 0,
                        u = 0,
                        s = 0;
                      if (o.getBoundingClientRect)
                        s = o.getBoundingClientRect().top;
                      if (!i || e.props.isDynamic) {
                        if (!(i = n.get(r))) return;
                        var l = i.getBoundingClientRect();
                        u = (a = l.top - s + t) + l.height;
                      }
                      var f = t - e.props.offset,
                        p = f >= Math.floor(a) && f < Math.floor(u),
                        h = f < Math.floor(a) || f >= Math.floor(u),
                        m = n.getActiveLink();
                      return h
                        ? (r === m && n.setActiveLink(void 0),
                          e.props.hashSpy &&
                            d.getHash() === r &&
                            d.changeHash(),
                          e.props.spy &&
                            e.state.active &&
                            (e.setState({ active: !1 }),
                            e.props.onSetInactive && e.props.onSetInactive()),
                          c.updateStates())
                        : p && m !== r
                        ? (n.setActiveLink(r),
                          e.props.hashSpy && d.changeHash(r),
                          e.props.spy &&
                            (e.setState({ active: !0 }),
                            e.props.onSetActive && e.props.onSetActive(r)),
                          c.updateStates())
                        : void 0;
                    }
                  });
              };
            return (f.propTypes = p), (f.defaultProps = { offset: 0 }), f;
          },
          Element: function (e) {
            console.warn('Helpers.Element is deprecated since v1.7.0');
            var t = (function (t) {
              function n(e) {
                i(this, n);
                var t = a(
                  this,
                  (n.__proto__ || Object.getPrototypeOf(n)).call(this, e)
                );
                return (t.childBindings = { domNode: null }), t;
              }
              return (
                u(n, t),
                r(n, [
                  {
                    key: 'componentDidMount',
                    value: function () {
                      if ('undefined' === typeof window) return !1;
                      this.registerElems(this.props.name);
                    },
                  },
                  {
                    key: 'componentDidUpdate',
                    value: function (e) {
                      this.props.name !== e.name &&
                        this.registerElems(this.props.name);
                    },
                  },
                  {
                    key: 'componentWillUnmount',
                    value: function () {
                      if ('undefined' === typeof window) return !1;
                      l.unregister(this.props.name);
                    },
                  },
                  {
                    key: 'registerElems',
                    value: function (e) {
                      l.register(e, this.childBindings.domNode);
                    },
                  },
                  {
                    key: 'render',
                    value: function () {
                      return s.createElement(
                        e,
                        o({}, this.props, {
                          parentBindings: this.childBindings,
                        })
                      );
                    },
                  },
                ]),
                n
              );
            })(s.Component);
            return (t.propTypes = { name: f.string, id: f.string }), t;
          },
        };
      e.exports = h;
    },
    OBVT: function (e, t, n) {
      'use strict';
      function o() {
        return (o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          }).apply(this, arguments);
      }
      var r = function (e, t, n, o, r) {
          for (t = t && t.split ? t.split('.') : [t], o = 0; o < t.length; o++)
            e = e ? e[t[o]] : r;
          return e === r ? n : e;
        },
        i = [40, 52, 64].map(function (e) {
          return e + 'em';
        }),
        a = {
          space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
          fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
        },
        u = {
          bg: 'backgroundColor',
          m: 'margin',
          mt: 'marginTop',
          mr: 'marginRight',
          mb: 'marginBottom',
          ml: 'marginLeft',
          mx: 'marginX',
          my: 'marginY',
          p: 'padding',
          pt: 'paddingTop',
          pr: 'paddingRight',
          pb: 'paddingBottom',
          pl: 'paddingLeft',
          px: 'paddingX',
          py: 'paddingY',
        },
        s = {
          marginX: ['marginLeft', 'marginRight'],
          marginY: ['marginTop', 'marginBottom'],
          paddingX: ['paddingLeft', 'paddingRight'],
          paddingY: ['paddingTop', 'paddingBottom'],
          size: ['width', 'height'],
        },
        c = {
          color: 'colors',
          backgroundColor: 'colors',
          borderColor: 'colors',
          margin: 'space',
          marginTop: 'space',
          marginRight: 'space',
          marginBottom: 'space',
          marginLeft: 'space',
          marginX: 'space',
          marginY: 'space',
          padding: 'space',
          paddingTop: 'space',
          paddingRight: 'space',
          paddingBottom: 'space',
          paddingLeft: 'space',
          paddingX: 'space',
          paddingY: 'space',
          top: 'space',
          right: 'space',
          bottom: 'space',
          left: 'space',
          gridGap: 'space',
          gridColumnGap: 'space',
          gridRowGap: 'space',
          gap: 'space',
          columnGap: 'space',
          rowGap: 'space',
          fontFamily: 'fonts',
          fontSize: 'fontSizes',
          fontWeight: 'fontWeights',
          lineHeight: 'lineHeights',
          letterSpacing: 'letterSpacings',
          border: 'borders',
          borderTop: 'borders',
          borderRight: 'borders',
          borderBottom: 'borders',
          borderLeft: 'borders',
          borderWidth: 'borderWidths',
          borderStyle: 'borderStyles',
          borderRadius: 'radii',
          borderTopRightRadius: 'radii',
          borderTopLeftRadius: 'radii',
          borderBottomRightRadius: 'radii',
          borderBottomLeftRadius: 'radii',
          borderTopWidth: 'borderWidths',
          borderTopColor: 'colors',
          borderTopStyle: 'borderStyles',
          borderBottomWidth: 'borderWidths',
          borderBottomColor: 'colors',
          borderBottomStyle: 'borderStyles',
          borderLeftWidth: 'borderWidths',
          borderLeftColor: 'colors',
          borderLeftStyle: 'borderStyles',
          borderRightWidth: 'borderWidths',
          borderRightColor: 'colors',
          borderRightStyle: 'borderStyles',
          outlineColor: 'colors',
          boxShadow: 'shadows',
          textShadow: 'shadows',
          zIndex: 'zIndices',
          width: 'sizes',
          minWidth: 'sizes',
          maxWidth: 'sizes',
          height: 'sizes',
          minHeight: 'sizes',
          maxHeight: 'sizes',
          flexBasis: 'sizes',
          size: 'sizes',
          fill: 'colors',
          stroke: 'colors',
        },
        l = function (e, t) {
          if ('number' !== typeof t || t >= 0) return r(e, t, t);
          var n = Math.abs(t),
            o = r(e, n, n);
          return 'string' === typeof o ? '-' + o : -1 * o;
        },
        f = [
          'margin',
          'marginTop',
          'marginRight',
          'marginBottom',
          'marginLeft',
          'marginX',
          'marginY',
          'top',
          'bottom',
          'left',
          'right',
        ].reduce(function (e, t) {
          var n;
          return o({}, e, (((n = {})[t] = l), n));
        }, {});
      t.a = function e(t) {
        return function (n) {
          void 0 === n && (n = {});
          var l = o({}, a, {}, n.theme || n),
            d = {},
            p = (function (e) {
              return function (t) {
                var n = {},
                  o = r(t, 'breakpoints', i),
                  a = [null].concat(
                    o.map(function (e) {
                      return '@media screen and (min-width: ' + e + ')';
                    })
                  );
                for (var u in e) {
                  var s = 'function' === typeof e[u] ? e[u](t) : e[u];
                  if (null != s)
                    if (Array.isArray(s))
                      for (var c = 0; c < s.slice(0, a.length).length; c++) {
                        var l = a[c];
                        l
                          ? ((n[l] = n[l] || {}),
                            null != s[c] && (n[l][u] = s[c]))
                          : (n[u] = s[c]);
                      }
                    else n[u] = s;
                }
                return n;
              };
            })('function' === typeof t ? t(l) : t)(l);
          for (var h in p) {
            var m = p[h],
              y = 'function' === typeof m ? m(l) : m;
            if ('variant' !== h)
              if (y && 'object' === typeof y) d[h] = e(y)(l);
              else {
                var v = r(u, h, h),
                  g = r(c, v),
                  b = r(l, g, r(l, v, {})),
                  w = r(f, v, r)(b, y, y);
                if (s[v])
                  for (var S = s[v], O = 0; O < S.length; O++) d[S[O]] = w;
                else d[v] = w;
              }
            else d = o({}, d, {}, e(r(l, y))(l));
          }
          return d;
        };
      };
    },
    TGc1: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          },
        r = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        i = s(n('ERkP')),
        a = (s(n('7nmT')), s(n('ofHe'))),
        u = s(n('aWzz'));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.default = function (e) {
        var t = (function (t) {
          function n(e) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, n);
            var t = (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ('object' !== typeof t && 'function' !== typeof t)
                ? e
                : t;
            })(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
            return (t.childBindings = { domNode: null }), t;
          }
          return (
            (function (e, t) {
              if ('function' !== typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(n, t),
            r(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  if ('undefined' === typeof window) return !1;
                  this.registerElems(this.props.name);
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  this.props.name !== e.name &&
                    this.registerElems(this.props.name);
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  if ('undefined' === typeof window) return !1;
                  a.default.unregister(this.props.name);
                },
              },
              {
                key: 'registerElems',
                value: function (e) {
                  a.default.register(e, this.childBindings.domNode);
                },
              },
              {
                key: 'render',
                value: function () {
                  return i.default.createElement(
                    e,
                    o({}, this.props, { parentBindings: this.childBindings })
                  );
                },
              },
            ]),
            n
          );
        })(i.default.Component);
        return (
          (t.propTypes = { name: u.default.string, id: u.default.string }), t
        );
      };
    },
    TZT2: function (e, t, n) {
      'use strict';
      var o;
      (t.__esModule = !0), (t.AmpStateContext = void 0);
      var r = ((o = n('ERkP')) && o.__esModule
        ? o
        : { default: o }
      ).default.createContext({});
      t.AmpStateContext = r;
    },
    'X0+8': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = {
        registered: {},
        scrollEvent: {
          register: function (e, t) {
            o.registered[e] = t;
          },
          remove: function (e) {
            o.registered[e] = null;
          },
        },
      };
      t.default = o;
    },
    XORh: function (e, t, n) {
      (function (t) {
        var n = 'Expected a function',
          o = NaN,
          r = '[object Symbol]',
          i = /^\s+|\s+$/g,
          a = /^[-+]0x[0-9a-f]+$/i,
          u = /^0b[01]+$/i,
          s = /^0o[0-7]+$/i,
          c = parseInt,
          l = 'object' == typeof t && t && t.Object === Object && t,
          f = 'object' == typeof self && self && self.Object === Object && self,
          d = l || f || Function('return this')(),
          p = Object.prototype.toString,
          h = Math.max,
          m = Math.min,
          y = function () {
            return d.Date.now();
          };
        function v(e, t, o) {
          var r,
            i,
            a,
            u,
            s,
            c,
            l = 0,
            f = !1,
            d = !1,
            p = !0;
          if ('function' != typeof e) throw new TypeError(n);
          function v(t) {
            var n = r,
              o = i;
            return (r = i = void 0), (l = t), (u = e.apply(o, n));
          }
          function w(e) {
            var n = e - c;
            return void 0 === c || n >= t || n < 0 || (d && e - l >= a);
          }
          function S() {
            var e = y();
            if (w(e)) return O(e);
            s = setTimeout(
              S,
              (function (e) {
                var n = t - (e - c);
                return d ? m(n, a - (e - l)) : n;
              })(e)
            );
          }
          function O(e) {
            return (s = void 0), p && r ? v(e) : ((r = i = void 0), u);
          }
          function _() {
            var e = y(),
              n = w(e);
            if (((r = arguments), (i = this), (c = e), n)) {
              if (void 0 === s)
                return (function (e) {
                  return (l = e), (s = setTimeout(S, t)), f ? v(e) : u;
                })(c);
              if (d) return (s = setTimeout(S, t)), v(c);
            }
            return void 0 === s && (s = setTimeout(S, t)), u;
          }
          return (
            (t = b(t) || 0),
            g(o) &&
              ((f = !!o.leading),
              (a = (d = 'maxWait' in o) ? h(b(o.maxWait) || 0, t) : a),
              (p = 'trailing' in o ? !!o.trailing : p)),
            (_.cancel = function () {
              void 0 !== s && clearTimeout(s),
                (l = 0),
                (r = c = i = s = void 0);
            }),
            (_.flush = function () {
              return void 0 === s ? u : O(y());
            }),
            _
          );
        }
        function g(e) {
          var t = typeof e;
          return !!e && ('object' == t || 'function' == t);
        }
        function b(e) {
          if ('number' == typeof e) return e;
          if (
            (function (e) {
              return (
                'symbol' == typeof e ||
                ((function (e) {
                  return !!e && 'object' == typeof e;
                })(e) &&
                  p.call(e) == r)
              );
            })(e)
          )
            return o;
          if (g(e)) {
            var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
            e = g(t) ? t + '' : t;
          }
          if ('string' != typeof e) return 0 === e ? e : +e;
          e = e.replace(i, '');
          var n = u.test(e);
          return n || s.test(e) ? c(e.slice(2), n ? 2 : 8) : a.test(e) ? o : +e;
        }
        e.exports = function (e, t, o) {
          var r = !0,
            i = !0;
          if ('function' != typeof e) throw new TypeError(n);
          return (
            g(o) &&
              ((r = 'leading' in o ? !!o.leading : r),
              (i = 'trailing' in o ? !!o.trailing : i)),
            v(e, t, { leading: r, maxWait: t, trailing: i })
          );
        };
      }.call(this, n('lpmq')));
    },
    Xeac: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          },
        r = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        i = l(n('ERkP')),
        a = l(n('robK')),
        u = l(n('ofHe')),
        s = l(n('aWzz')),
        c = l(n('MTOP'));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var f = {
        to: s.default.string.isRequired,
        containerId: s.default.string,
        container: s.default.object,
        activeClass: s.default.string,
        spy: s.default.bool,
        smooth: s.default.oneOfType([s.default.bool, s.default.string]),
        offset: s.default.number,
        delay: s.default.number,
        isDynamic: s.default.bool,
        onClick: s.default.func,
        duration: s.default.oneOfType([s.default.number, s.default.func]),
        absolute: s.default.bool,
        onSetActive: s.default.func,
        onSetInactive: s.default.func,
        ignoreCancelEvents: s.default.bool,
        hashSpy: s.default.bool,
      };
      t.default = function (e, t) {
        var n = t || u.default,
          s = (function (t) {
            function u(e) {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, u);
              var t = (function (e, t) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !t || ('object' !== typeof t && 'function' !== typeof t)
                  ? e
                  : t;
              })(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this, e));
              return l.call(t), (t.state = { active: !1 }), t;
            }
            return (
              (function (e, t) {
                if ('function' !== typeof t && null !== t)
                  throw new TypeError(
                    'Super expression must either be null or a function, not ' +
                      typeof t
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t));
              })(u, t),
              r(u, [
                {
                  key: 'getScrollSpyContainer',
                  value: function () {
                    var e = this.props.containerId,
                      t = this.props.container;
                    return e && !t
                      ? document.getElementById(e)
                      : t && t.nodeType
                      ? t
                      : document;
                  },
                },
                {
                  key: 'componentDidMount',
                  value: function () {
                    if (this.props.spy || this.props.hashSpy) {
                      var e = this.getScrollSpyContainer();
                      a.default.isMounted(e) || a.default.mount(e),
                        this.props.hashSpy &&
                          (c.default.isMounted() || c.default.mount(n),
                          c.default.mapContainer(this.props.to, e)),
                        a.default.addSpyHandler(this.spyHandler, e),
                        this.setState({ container: e });
                    }
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    a.default.unmount(this.stateHandler, this.spyHandler);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var t = '';
                    t =
                      this.state && this.state.active
                        ? (
                            (this.props.className || '') +
                            ' ' +
                            (this.props.activeClass || 'active')
                          ).trim()
                        : this.props.className;
                    var n = o({}, this.props);
                    for (var r in f) n.hasOwnProperty(r) && delete n[r];
                    return (
                      (n.className = t),
                      (n.onClick = this.handleClick),
                      i.default.createElement(e, n)
                    );
                  },
                },
              ]),
              u
            );
          })(i.default.PureComponent),
          l = function () {
            var e = this;
            (this.scrollTo = function (t, r) {
              n.scrollTo(t, o({}, e.state, r));
            }),
              (this.handleClick = function (t) {
                e.props.onClick && e.props.onClick(t),
                  t.stopPropagation && t.stopPropagation(),
                  t.preventDefault && t.preventDefault(),
                  e.scrollTo(e.props.to, e.props);
              }),
              (this.spyHandler = function (t) {
                var o = e.getScrollSpyContainer();
                if (!c.default.isMounted() || c.default.isInitialized()) {
                  var r = e.props.to,
                    i = null,
                    a = 0,
                    u = 0,
                    s = 0;
                  if (o.getBoundingClientRect)
                    s = o.getBoundingClientRect().top;
                  if (!i || e.props.isDynamic) {
                    if (!(i = n.get(r))) return;
                    var l = i.getBoundingClientRect();
                    u = (a = l.top - s + t) + l.height;
                  }
                  var f = t - e.props.offset,
                    d = f >= Math.floor(a) && f < Math.floor(u),
                    p = f < Math.floor(a) || f >= Math.floor(u),
                    h = n.getActiveLink();
                  p &&
                    (r === h && n.setActiveLink(void 0),
                    e.props.hashSpy &&
                      c.default.getHash() === r &&
                      c.default.changeHash(),
                    e.props.spy &&
                      e.state.active &&
                      (e.setState({ active: !1 }),
                      e.props.onSetInactive && e.props.onSetInactive(r, i))),
                    !d ||
                      (h === r && !1 !== e.state.active) ||
                      (n.setActiveLink(r),
                      e.props.hashSpy && c.default.changeHash(r),
                      e.props.spy &&
                        (e.setState({ active: !0 }),
                        e.props.onSetActive && e.props.onSetActive(r, i)));
                }
              });
          };
        return (s.propTypes = f), (s.defaultProps = { offset: 0 }), s;
      };
    },
    aptK: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return s;
      });
      var o = n('ERkP'),
        r = n.n(o),
        i = n('j/s1'),
        a = n('OBVT'),
        u = r.a.createElement,
        s = function (e) {
          var t = e.title,
            n = e.subtitle,
            o = (e.backdrop, e.bgColor);
          return u(
            c,
            { style: { backgroundColor: o } },
            u(l, null, t),
            n && u(f, null, n)
          );
        },
        c = i.e.div.withConfig({
          displayName: 'heading__StyledBox',
          componentId: 'sc-1c0mctp-0',
        })(Object(a.a)({ py: [30, 50], px: ['1rem', 0] }), { width: '100%' }),
        l = i.e.h2.withConfig({
          displayName: 'heading__StyledH2',
          componentId: 'sc-1c0mctp-1',
        })(
          Object(a.a)({
            fontSize: 'xl',
            fontWeight: 700,
            color: 'primary.regular',
            marginBottom: '1.5rem',
          })
        ),
        f = i.e.p.withConfig({
          displayName: 'heading__StyledP',
          componentId: 'sc-1c0mctp-2',
        })({ fontSize: 14, color: 'text.medium' });
    },
    bOkD: function (e, t, n) {
      var o = n('cHE3');
      e.exports = function (e) {
        if (Array.isArray(e)) return o(e);
      };
    },
    bl2F: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      }),
        n.d(t, 'b', function () {
          return u;
        }),
        n.d(t, 'c', function () {
          return s;
        }),
        n.d(t, 'd', function () {
          return c;
        }),
        n.d(t, 'e', function () {
          return l;
        }),
        n.d(t, 'g', function () {
          return f;
        }),
        n.d(t, 'f', function () {
          return d;
        });
      var o = n('j/s1'),
        r = n('OBVT'),
        i = n('jF6n'),
        a = o.e.div.withConfig({
          displayName: 'terms-and-services__StyledContainer',
          componentId: 'vekb8k-0',
        })(Object(r.a)({ width: ['100%', '90vw'] }), {
          margin: 'auto',
          paddingTop: 100,
          paddingBottom: 150,
        }),
        u = o.e.div.withConfig({
          displayName: 'terms-and-services__StyledContent',
          componentId: 'vekb8k-1',
        })(Object(r.a)({ flexDirection: ['column', 'row'] }), {
          display: 'flex',
        }),
        s = o.e.h2.withConfig({
          displayName: 'terms-and-services__StyledContentHeading',
          componentId: 'vekb8k-2',
        })(
          Object(r.a)({ px: ['1rem', 0], fontSize: 'xl', color: 'text.bold' }),
          { marginBottom: 20 }
        ),
        c = o.e.div.withConfig({
          displayName: 'terms-and-services__StyledLeftContent',
          componentId: 'vekb8k-3',
        })(
          Object(r.a)({
            flexDirection: ['column', 'row'],
            width: ['100%', '25%'],
          }),
          { flex: '0 0 auto' }
        ),
        l = o.e.div.withConfig({
          displayName: 'terms-and-services__StyledLeftInnerContent',
          componentId: 'vekb8k-4',
        })(
          Object(r.a)({
            backgroundColor: ['#fff', 'transparent'],
            padding: ['1rem', 0],
          })
        ),
        f = o.e.div.withConfig({
          displayName: 'terms-and-services__StyledRightContent',
          componentId: 'vekb8k-5',
        })(
          Object(r.a)({
            p: {
              fontSize: 'base',
              color: 'text.medium',
              marginBottom: 20,
              padding: ['1rem', 0],
            },
            lineHeight: 1.8,
          })
        ),
        d = Object(o.e)(i.Link).withConfig({
          displayName: 'terms-and-services__StyledLink',
          componentId: 'vekb8k-6',
        })(Object(r.a)({ '&.active, :hover': { color: 'primary.regular' } }), {
          fontSize: 14,
          textDecoration: 'none',
          padding: '10px 0',
          display: 'block',
          textTransform: 'uppercase',
          transition: 'all 0.3s ease',
        });
    },
    'dJH/': function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = i(n('ERkP')),
        r = i(n('Xeac'));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
      }
      var u = (function (e) {
        function t() {
          var e, n, r;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, t);
          for (var i = arguments.length, u = Array(i), s = 0; s < i; s++)
            u[s] = arguments[s];
          return (
            (n = r = a(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                e,
                [this].concat(u)
              )
            )),
            (r.render = function () {
              return o.default.createElement('a', r.props, r.props.children);
            }),
            a(r, n)
          );
        }
        return (
          (function (e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          t
        );
      })(o.default.Component);
      t.default = (0, r.default)(u);
    },
    dq4L: function (e, t, n) {
      'use strict';
      (t.__esModule = !0),
        (t.isInAmpMode = a),
        (t.useAmp = function () {
          return a(r.default.useContext(i.AmpStateContext));
        });
      var o,
        r = (o = n('ERkP')) && o.__esModule ? o : { default: o },
        i = n('TZT2');
      function a() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          o = e.hybrid,
          r = void 0 !== o && o,
          i = e.hasQuery;
        return n || (r && void 0 !== i && i);
      }
    },
    e2ma: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          },
        r = (u(n('Kt3i')), u(n('2odn'))),
        i = u(n('honK')),
        a = u(n('X0+8'));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var s = function (e) {
          return r.default[e.smooth] || r.default.defaultEasing;
        },
        c =
          (function () {
            if ('undefined' !== typeof window)
              return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame
              );
          })() ||
          function (e, t, n) {
            window.setTimeout(e, n || 1e3 / 60, new Date().getTime());
          },
        l = function (e) {
          var t = e.data.containerElement;
          if (t && t !== document && t !== document.body) return t.scrollTop;
          var n = void 0 !== window.pageXOffset,
            o = 'CSS1Compat' === (document.compatMode || '');
          return n
            ? window.pageYOffset
            : o
            ? document.documentElement.scrollTop
            : document.body.scrollTop;
        },
        f = function e(t, n, o) {
          var r = n.data;
          if (n.ignoreCancelEvents || !r.cancel)
            if (
              ((r.deltaTop = Math.round(r.targetPositionY - r.startPositionY)),
              null === r.start && (r.start = o),
              (r.progress = o - r.start),
              (r.percent =
                r.progress >= r.duration ? 1 : t(r.progress / r.duration)),
              (r.currentPositionY =
                r.startPositionY + Math.ceil(r.deltaTop * r.percent)),
              r.containerElement &&
              r.containerElement !== document &&
              r.containerElement !== document.body
                ? (r.containerElement.scrollTop = r.currentPositionY)
                : window.scrollTo(0, r.currentPositionY),
              r.percent < 1)
            ) {
              var i = e.bind(null, t, n);
              c.call(window, i);
            } else
              a.default.registered.end &&
                a.default.registered.end(r.to, r.target, r.currentPositionY);
          else
            a.default.registered.end &&
              a.default.registered.end(r.to, r.target, r.currentPositionY);
        },
        d = function (e) {
          e.data.containerElement = e
            ? e.containerId
              ? document.getElementById(e.containerId)
              : e.container && e.container.nodeType
              ? e.container
              : document
            : null;
        },
        p = function (e, t, n, o) {
          if (
            ((t.data = t.data || {
              currentPositionY: 0,
              startPositionY: 0,
              targetPositionY: 0,
              progress: 0,
              duration: 0,
              cancel: !1,
              target: null,
              containerElement: null,
              to: null,
              start: null,
              deltaTop: null,
              percent: null,
              delayTimeout: null,
            }),
            window.clearTimeout(t.data.delayTimeout),
            i.default.subscribe(function () {
              t.data.cancel = !0;
            }),
            d(t),
            (t.data.start = null),
            (t.data.cancel = !1),
            (t.data.startPositionY = l(t)),
            (t.data.targetPositionY = t.absolute
              ? e
              : e + t.data.startPositionY),
            t.data.startPositionY !== t.data.targetPositionY)
          ) {
            var r;
            (t.data.deltaTop = Math.round(
              t.data.targetPositionY - t.data.startPositionY
            )),
              (t.data.duration = ('function' === typeof (r = t.duration)
                ? r
                : function () {
                    return r;
                  })(t.data.deltaTop)),
              (t.data.duration = isNaN(parseFloat(t.data.duration))
                ? 1e3
                : parseFloat(t.data.duration)),
              (t.data.to = n),
              (t.data.target = o);
            var u = s(t),
              p = f.bind(null, u, t);
            t && t.delay > 0
              ? (t.data.delayTimeout = window.setTimeout(function () {
                  a.default.registered.begin &&
                    a.default.registered.begin(t.data.to, t.data.target),
                    c.call(window, p);
                }, t.delay))
              : (a.default.registered.begin &&
                  a.default.registered.begin(t.data.to, t.data.target),
                c.call(window, p));
          } else
            a.default.registered.end &&
              a.default.registered.end(
                t.data.to,
                t.data.target,
                t.data.currentPositionY
              );
        },
        h = function (e) {
          return (
            ((e = o({}, e)).data = e.data || {
              currentPositionY: 0,
              startPositionY: 0,
              targetPositionY: 0,
              progress: 0,
              duration: 0,
              cancel: !1,
              target: null,
              containerElement: null,
              to: null,
              start: null,
              deltaTop: null,
              percent: null,
              delayTimeout: null,
            }),
            (e.absolute = !0),
            e
          );
        };
      t.default = {
        animateTopScroll: p,
        getAnimationType: s,
        scrollToTop: function (e) {
          p(0, h(e));
        },
        scrollToBottom: function (e) {
          (e = h(e)),
            d(e),
            p(
              (function (e) {
                var t = e.data.containerElement;
                if (t && t !== document && t !== document.body)
                  return t.scrollHeight - t.offsetHeight;
                var n = document.body,
                  o = document.documentElement;
                return Math.max(
                  n.scrollHeight,
                  n.offsetHeight,
                  o.clientHeight,
                  o.scrollHeight,
                  o.offsetHeight
                );
              })(e),
              e
            );
        },
        scrollTo: function (e, t) {
          p(e, h(t));
        },
        scrollMore: function (e, t) {
          (t = h(t)), d(t), p(l(t) + e, t);
        },
      };
    },
    'ft+Y': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var o = n('ERkP'),
        r = function (e) {
          arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          var t = Object(o.useState)(function () {
              return window.matchMedia(e).matches;
            }),
            n = t[0],
            r = t[1];
          return (
            Object(o.useEffect)(
              function () {
                var t = !0,
                  n = window.matchMedia(e),
                  o = function () {
                    t && r(!!n.matches);
                  };
                return (
                  n.addListener(o),
                  r(n.matches),
                  function () {
                    (t = !1), n.removeListener(o);
                  }
                );
              },
              [e]
            ),
            n
          );
        };
    },
    honK: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = n('GSJS'),
        r = ['mousedown', 'mousewheel', 'touchmove', 'keydown'];
      t.default = {
        subscribe: function (e) {
          return (
            'undefined' !== typeof document &&
            r.forEach(function (t) {
              return (0, o.addPassiveEventListener)(document, t, e);
            })
          );
        },
      };
    },
    'iN+R': function (e, t, n) {
      var o = n('bOkD'),
        r = n('DSo7'),
        i = n('D7XE'),
        a = n('uYlf');
      e.exports = function (e) {
        return o(e) || r(e) || i(e) || a();
      };
    },
    jF6n: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.Helpers = t.ScrollElement = t.ScrollLink = t.animateScroll = t.scrollSpy = t.Events = t.scroller = t.Element = t.Button = t.Link = void 0);
      var o = p(n('dJH/')),
        r = p(n('m5fJ')),
        i = p(n('ApmR')),
        a = p(n('ofHe')),
        u = p(n('X0+8')),
        s = p(n('robK')),
        c = p(n('e2ma')),
        l = p(n('Xeac')),
        f = p(n('TGc1')),
        d = p(n('MuVF'));
      function p(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.Link = o.default),
        (t.Button = r.default),
        (t.Element = i.default),
        (t.scroller = a.default),
        (t.Events = u.default),
        (t.scrollSpy = s.default),
        (t.animateScroll = c.default),
        (t.ScrollLink = l.default),
        (t.ScrollElement = f.default),
        (t.Helpers = d.default),
        (t.default = {
          Link: o.default,
          Button: r.default,
          Element: i.default,
          scroller: a.default,
          Events: u.default,
          scrollSpy: s.default,
          animateScroll: c.default,
          ScrollLink: l.default,
          ScrollElement: f.default,
          Helpers: d.default,
        });
    },
    lpmq: function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function('return this')();
      } catch (o) {
        'object' === typeof window && (n = window);
      }
      e.exports = n;
    },
    m5fJ: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        r = a(n('ERkP')),
        i = a(n('Xeac'));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var u = (function (e) {
        function t() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
            (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ('object' !== typeof t && 'function' !== typeof t)
                ? e
                : t;
            })(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          (function (e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          o(t, [
            {
              key: 'render',
              value: function () {
                return r.default.createElement(
                  'input',
                  this.props,
                  this.props.children
                );
              },
            },
          ]),
          t
        );
      })(r.default.Component);
      t.default = (0, i.default)(u);
    },
    ofHe: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          },
        r = u(n('Kt3i')),
        i = u(n('e2ma')),
        a = u(n('X0+8'));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var s = {},
        c = void 0;
      t.default = {
        unmount: function () {
          s = {};
        },
        register: function (e, t) {
          s[e] = t;
        },
        unregister: function (e) {
          delete s[e];
        },
        get: function (e) {
          return (
            s[e] ||
            document.getElementById(e) ||
            document.getElementsByName(e)[0] ||
            document.getElementsByClassName(e)[0]
          );
        },
        setActiveLink: function (e) {
          return (c = e);
        },
        getActiveLink: function () {
          return c;
        },
        scrollTo: function (e, t) {
          var n = this.get(e);
          if (n) {
            var u = (t = o({}, t, { absolute: !1 })).containerId,
              s = t.container,
              c = void 0;
            (c = u
              ? document.getElementById(u)
              : s && s.nodeType
              ? s
              : document),
              (t.absolute = !0);
            var l = r.default.scrollOffset(c, n) + (t.offset || 0);
            if (!t.smooth)
              return (
                a.default.registered.begin && a.default.registered.begin(e, n),
                c === document ? window.scrollTo(0, l) : (c.scrollTop = l),
                void (
                  a.default.registered.end && a.default.registered.end(e, n)
                )
              );
            i.default.animateTopScroll(l, t, e, n);
          } else console.warn('target Element not found');
        },
      };
    },
    'op+c': function (e, t, n) {
      'use strict';
      var o;
      (t.__esModule = !0), (t.HeadManagerContext = void 0);
      var r = ((o = n('ERkP')) && o.__esModule
        ? o
        : { default: o }
      ).default.createContext(null);
      t.HeadManagerContext = r;
    },
    robK: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o,
        r = n('XORh'),
        i = (o = r) && o.__esModule ? o : { default: o },
        a = n('GSJS');
      var u = {
        spyCallbacks: [],
        spySetState: [],
        scrollSpyContainers: [],
        mount: function (e) {
          if (e) {
            var t = (function (e) {
              return (0, i.default)(e, 66);
            })(function (t) {
              u.scrollHandler(e);
            });
            u.scrollSpyContainers.push(e),
              (0, a.addPassiveEventListener)(e, 'scroll', t);
          }
        },
        isMounted: function (e) {
          return -1 !== u.scrollSpyContainers.indexOf(e);
        },
        currentPositionY: function (e) {
          if (e === document) {
            var t = void 0 !== window.pageXOffset,
              n = 'CSS1Compat' === (document.compatMode || '');
            return t
              ? window.pageYOffset
              : n
              ? document.documentElement.scrollTop
              : document.body.scrollTop;
          }
          return e.scrollTop;
        },
        scrollHandler: function (e) {
          (
            u.scrollSpyContainers[u.scrollSpyContainers.indexOf(e)]
              .spyCallbacks || []
          ).forEach(function (t) {
            return t(u.currentPositionY(e));
          });
        },
        addStateHandler: function (e) {
          u.spySetState.push(e);
        },
        addSpyHandler: function (e, t) {
          var n = u.scrollSpyContainers[u.scrollSpyContainers.indexOf(t)];
          n.spyCallbacks || (n.spyCallbacks = []),
            n.spyCallbacks.push(e),
            e(u.currentPositionY(t));
        },
        updateStates: function () {
          u.spySetState.forEach(function (e) {
            return e();
          });
        },
        unmount: function (e, t) {
          u.scrollSpyContainers.forEach(function (e) {
            return (
              e.spyCallbacks &&
              e.spyCallbacks.length &&
              e.spyCallbacks.splice(e.spyCallbacks.indexOf(t), 1)
            );
          }),
            u.spySetState &&
              u.spySetState.length &&
              u.spySetState.splice(u.spySetState.indexOf(e), 1),
            document.removeEventListener('scroll', u.scrollHandler);
        },
        update: function () {
          return u.scrollSpyContainers.forEach(function (e) {
            return u.scrollHandler(e);
          });
        },
      };
      t.default = u;
    },
    uYlf: function (e, t) {
      e.exports = function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      };
    },
    ysqo: function (e, t, n) {
      'use strict';
      (t.__esModule = !0), (t.defaultHead = c), (t.default = void 0);
      var o = s(n('ERkP')),
        r = s(n('J9Yr')),
        i = n('TZT2'),
        a = n('op+c'),
        u = n('dq4L');
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [o.default.createElement('meta', { charSet: 'utf-8' })];
        return (
          e ||
            t.push(
              o.default.createElement('meta', {
                name: 'viewport',
                content: 'width=device-width',
              })
            ),
          t
        );
      }
      function l(e, t) {
        return 'string' === typeof t || 'number' === typeof t
          ? e
          : t.type === o.default.Fragment
          ? e.concat(
              o.default.Children.toArray(t.props.children).reduce(function (
                e,
                t
              ) {
                return 'string' === typeof t || 'number' === typeof t
                  ? e
                  : e.concat(t);
              },
              [])
            )
          : e.concat(t);
      }
      var f = ['name', 'httpEquiv', 'charSet', 'itemProp'];
      function d(e, t) {
        return e
          .reduce(function (e, t) {
            var n = o.default.Children.toArray(t.props.children);
            return e.concat(n);
          }, [])
          .reduce(l, [])
          .reverse()
          .concat(c(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                o = {};
              return function (r) {
                var i = !0;
                if (
                  r.key &&
                  'number' !== typeof r.key &&
                  r.key.indexOf('$') > 0
                ) {
                  var a = r.key.slice(r.key.indexOf('$') + 1);
                  e.has(a) ? (i = !1) : e.add(a);
                }
                switch (r.type) {
                  case 'title':
                  case 'base':
                    t.has(r.type) ? (i = !1) : t.add(r.type);
                    break;
                  case 'meta':
                    for (var u = 0, s = f.length; u < s; u++) {
                      var c = f[u];
                      if (r.props.hasOwnProperty(c))
                        if ('charSet' === c) n.has(c) ? (i = !1) : n.add(c);
                        else {
                          var l = r.props[c],
                            d = o[c] || new Set();
                          d.has(l) ? (i = !1) : (d.add(l), (o[c] = d));
                        }
                    }
                }
                return i;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var n = e.key || t;
            return o.default.cloneElement(e, { key: n });
          });
      }
      var p = (0, r.default)();
      function h(e) {
        var t = e.children;
        return o.default.createElement(
          i.AmpStateContext.Consumer,
          null,
          function (e) {
            return o.default.createElement(
              a.HeadManagerContext.Consumer,
              null,
              function (n) {
                return o.default.createElement(
                  p,
                  {
                    reduceComponentsToState: d,
                    handleStateChange: n,
                    inAmpMode: (0, u.isInAmpMode)(e),
                  },
                  t
                );
              }
            );
          }
        );
      }
      h.rewind = p.rewind;
      var m = h;
      t.default = m;
    },
  },
]);
