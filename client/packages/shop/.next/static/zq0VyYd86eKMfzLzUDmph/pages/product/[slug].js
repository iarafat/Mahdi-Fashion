(window.webpackJsonp = window.webpackJsonp || []).push([
  [32],
  {
    '/QYh': function (e, t, n) {
      'use strict';
      var r = n('O5Wi'),
        o = n('zQIG'),
        a = n('8mBC');
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function c(e, t) {
        var n;
        if ('undefined' === typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ('string' === typeof e) return l(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === n && e.constructor && (n = e.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(e);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return l(e, t);
            })(e)) ||
            (t && e && 'number' === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var a,
          i = !0,
          u = !1;
        return {
          s: function () {
            n = e[Symbol.iterator]();
          },
          n: function () {
            var e = n.next();
            return (i = e.done), e;
          },
          e: function (e) {
            (u = !0), (a = e);
          },
          f: function () {
            try {
              i || null == n.return || n.return();
            } finally {
              if (u) throw a;
            }
          },
        };
      }
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      (t.__esModule = !0), (t.default = void 0);
      var d,
        s = (d = n('ERkP')) && d.__esModule ? d : { default: d },
        f = n('D3Vl'),
        p = n('4smK');
      var m = [],
        h = [],
        y = !1;
      function v(e) {
        var t = e(),
          n = { loading: !0, loaded: null, error: null };
        return (
          (n.promise = t
            .then(function (e) {
              return (n.loading = !1), (n.loaded = e), e;
            })
            .catch(function (e) {
              throw ((n.loading = !1), (n.error = e), e);
            })),
          n
        );
      }
      function g(e) {
        var t = { loading: !1, loaded: {}, error: null },
          n = [];
        try {
          Object.keys(e).forEach(function (r) {
            var o = v(e[r]);
            o.loading
              ? (t.loading = !0)
              : ((t.loaded[r] = o.loaded), (t.error = o.error)),
              n.push(o.promise),
              o.promise
                .then(function (e) {
                  t.loaded[r] = e;
                })
                .catch(function (e) {
                  t.error = e;
                });
          });
        } catch (r) {
          t.error = r;
        }
        return (
          (t.promise = Promise.all(n)
            .then(function (e) {
              return (t.loading = !1), e;
            })
            .catch(function (e) {
              throw ((t.loading = !1), e);
            })),
          t
        );
      }
      function b(e, t) {
        return s.default.createElement(
          (function (e) {
            return e && e.__esModule ? e.default : e;
          })(e),
          t
        );
      }
      function w(e, t) {
        var n = Object.assign(
            {
              loader: null,
              loading: null,
              delay: 200,
              timeout: null,
              render: b,
              webpack: null,
              modules: null,
            },
            t
          ),
          r = null;
        function o() {
          if (!r) {
            var t = new _(e, n);
            r = {
              getCurrentValue: t.getCurrentValue.bind(t),
              subscribe: t.subscribe.bind(t),
              retry: t.retry.bind(t),
              promise: t.promise.bind(t),
            };
          }
          return r.promise();
        }
        if (!y && 'function' === typeof n.webpack) {
          var a = n.webpack();
          h.push(function (e) {
            var t,
              n = c(a);
            try {
              for (n.s(); !(t = n.n()).done; ) {
                var r = t.value;
                if (-1 !== e.indexOf(r)) return o();
              }
            } catch (i) {
              n.e(i);
            } finally {
              n.f();
            }
          });
        }
        var i = function (e, t) {
          o();
          var a = s.default.useContext(p.LoadableContext),
            i = (0, f.useSubscription)(r);
          return (
            s.default.useImperativeHandle(
              t,
              function () {
                return { retry: r.retry };
              },
              []
            ),
            a &&
              Array.isArray(n.modules) &&
              n.modules.forEach(function (e) {
                a(e);
              }),
            s.default.useMemo(
              function () {
                return i.loading || i.error
                  ? s.default.createElement(n.loading, {
                      isLoading: i.loading,
                      pastDelay: i.pastDelay,
                      timedOut: i.timedOut,
                      error: i.error,
                      retry: r.retry,
                    })
                  : i.loaded
                  ? n.render(i.loaded, e)
                  : null;
              },
              [e, i]
            )
          );
        };
        return (
          (i.preload = function () {
            return o();
          }),
          (i.displayName = 'LoadableComponent'),
          s.default.forwardRef(i)
        );
      }
      var _ = (function () {
        function e(t, n) {
          o(this, e),
            (this._loadFn = t),
            (this._opts = n),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
        return (
          a(e, [
            {
              key: 'promise',
              value: function () {
                return this._res.promise;
              },
            },
            {
              key: 'retry',
              value: function () {
                var e = this;
                this._clearTimeouts(),
                  (this._res = this._loadFn(this._opts.loader)),
                  (this._state = { pastDelay: !1, timedOut: !1 });
                var t = this._res,
                  n = this._opts;
                t.loading &&
                  ('number' === typeof n.delay &&
                    (0 === n.delay
                      ? (this._state.pastDelay = !0)
                      : (this._delay = setTimeout(function () {
                          e._update({ pastDelay: !0 });
                        }, n.delay))),
                  'number' === typeof n.timeout &&
                    (this._timeout = setTimeout(function () {
                      e._update({ timedOut: !0 });
                    }, n.timeout))),
                  this._res.promise
                    .then(function () {
                      e._update({}), e._clearTimeouts();
                    })
                    .catch(function (t) {
                      e._update({}), e._clearTimeouts();
                    }),
                  this._update({});
              },
            },
            {
              key: '_update',
              value: function (e) {
                (this._state = u(
                  u({}, this._state),
                  {},
                  {
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading,
                  },
                  e
                )),
                  this._callbacks.forEach(function (e) {
                    return e();
                  });
              },
            },
            {
              key: '_clearTimeouts',
              value: function () {
                clearTimeout(this._delay), clearTimeout(this._timeout);
              },
            },
            {
              key: 'getCurrentValue',
              value: function () {
                return this._state;
              },
            },
            {
              key: 'subscribe',
              value: function (e) {
                var t = this;
                return (
                  this._callbacks.add(e),
                  function () {
                    t._callbacks.delete(e);
                  }
                );
              },
            },
          ]),
          e
        );
      })();
      function x(e) {
        return w(v, e);
      }
      function O(e, t) {
        for (var n = []; e.length; ) {
          var r = e.pop();
          n.push(r(t));
        }
        return Promise.all(n).then(function () {
          if (e.length) return O(e, t);
        });
      }
      (x.Map = function (e) {
        if ('function' !== typeof e.render)
          throw new Error(
            'LoadableMap requires a `render(loaded, props)` function'
          );
        return w(g, e);
      }),
        (x.preloadAll = function () {
          return new Promise(function (e, t) {
            O(m).then(e, t);
          });
        }),
        (x.preloadReady = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise(function (t) {
            var n = function () {
              return (y = !0), t();
            };
            O(h, e).then(n, n);
          });
        }),
        (window.__NEXT_PRELOADREADY = x.preloadReady);
      var k = x;
      t.default = k;
    },
    '20XJ': function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, '__N_SSP', function () {
          return y;
        });
      var r = n('ERkP'),
        o = n.n(r),
        a = n('AU4o'),
        i = n.n(a),
        u = n('H8eV'),
        c = n('VU+f'),
        l = n('j/s1'),
        d = n('tZdC'),
        s = l.e.div.withConfig({
          displayName: 'product-singlestyle__ProductSingleWrapper',
          componentId: 'sc-13bc9wo-0',
        })(
          [
            'padding:78px 0 60px 0;position:relative;background-color:',
            ';@media (min-width:1600px){padding-top:89px;}@media (max-width:990px){padding-top:60px;}',
          ],
          Object(d.a)('colors.gray.200', '#f7f7f7')
        ),
        f = l.e.div.withConfig({
          displayName: 'product-singlestyle__ProductSingleContainer',
          componentId: 'sc-13bc9wo-1',
        })(['width:100%;']),
        p =
          (l.e.div.withConfig({
            displayName: 'product-singlestyle__RelatedItemContainer',
            componentId: 'sc-13bc9wo-2',
          })([
            'display:flex;flex-wrap:wrap;margin-left:-15px;margin-right:-15px;@media (max-width:1199px) and (min-width:990px){margin-left:-10px;margin-right:-10px;}@media (max-width:768px){margin-left:-7.5px;margin-right:-7.5px;}',
          ]),
          l.e.div.withConfig({
            displayName: 'product-singlestyle__RealatedItemCol',
            componentId: 'sc-13bc9wo-3',
          })([
            'flex:0 0 20%;max-width:20%;padding-left:15px;padding-right:15px;margin-bottom:30px;@media (max-width:1500px){flex:0 0 20%;max-width:20%;}@media (max-width:1200px){flex:0 0 33.3333333%;max-width:33.3333333%;}@media (max-width:1199px) and (min-width:991px){padding-left:10px;padding-right:10px;}@media (max-width:768px){padding-left:7.5px;padding-right:7.5px;margin-bottom:15px;}@media (max-width:767px){flex:0 0 50%;max-width:50%;}',
          ]),
          l.e.div.withConfig({
            displayName: 'product-singlestyle__Loading',
            componentId: 'sc-13bc9wo-4',
          })(
            [
              'width:100%;padding:10px;display:flex;align-items:center;justify-content:center;font-size:calc(',
              ' - 1px);color:#222222;',
            ],
            Object(d.a)('fontSizes.base', '15px')
          ),
          s),
        m = o.a.createElement,
        h = i()(
          function () {
            return Promise.all([n.e(2), n.e(3), n.e(5), n.e(6), n.e(36)]).then(
              n.bind(null, 'amd9')
            );
          },
          {
            loadableGenerated: {
              webpack: function () {
                return ['amd9'];
              },
              modules: [
                'components/product-details/product-details-one/product-details-one',
              ],
            },
          }
        ),
        y =
          (i()(
            function () {
              return Promise.all([
                n.e(0),
                n.e(2),
                n.e(3),
                n.e(5),
                n.e(38),
              ]).then(n.bind(null, '3yRL'));
            },
            {
              loadableGenerated: {
                webpack: function () {
                  return ['3yRL'];
                },
                modules: [
                  'components/product-details/product-details-two/product-details-two',
                ],
              },
            }
          ),
          i()(
            function () {
              return Promise.all([
                n.e(0),
                n.e(2),
                n.e(3),
                n.e(6),
                n.e(37),
              ]).then(n.bind(null, 'gZAk'));
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
          !0);
      t.default = function (e) {
        var t = e.data,
          n = e.deviceType,
          r = t.getProduct,
          a = m(h, { product: r, deviceType: n });
        return m(
          o.a.Fragment,
          null,
          m(u.a, {
            title: ''.concat(r.name, ' - Mahdi Fashion'),
            description: ''.concat(r.name, ' Details'),
          }),
          m(c.a, null, m(p, null, m(f, { style: { marginTop: '50px' } }, a)))
        );
      };
    },
    '4smK': function (e, t, n) {
      'use strict';
      var r;
      (t.__esModule = !0), (t.LoadableContext = void 0);
      var o = ((r = n('ERkP')) && r.__esModule
        ? r
        : { default: r }
      ).default.createContext(null);
      t.LoadableContext = o;
    },
    AU4o: function (e, t, n) {
      'use strict';
      var r = n('O5Wi');
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      (t.__esModule = !0),
        (t.noSSR = d),
        (t.default = function (e, t) {
          var n = u.default,
            r = {
              loading: function (e) {
                e.error, e.isLoading;
                return e.pastDelay, null;
              },
            };
          e instanceof Promise
            ? (r.loader = function () {
                return e;
              })
            : 'function' === typeof e
            ? (r.loader = e)
            : 'object' === typeof e && (r = a(a({}, r), e));
          if (
            ((r = a(a({}, r), t)),
            'object' === typeof e &&
              !(e instanceof Promise) &&
              (e.render &&
                (r.render = function (t, n) {
                  return e.render(n, t);
                }),
              e.modules))
          ) {
            n = u.default.Map;
            var o = {},
              i = e.modules();
            Object.keys(i).forEach(function (e) {
              var t = i[e];
              'function' !== typeof t.then
                ? (o[e] = t)
                : (o[e] = function () {
                    return t.then(function (e) {
                      return e.default || e;
                    });
                  });
            }),
              (r.loader = o);
          }
          r.loadableGenerated &&
            delete (r = a(a({}, r), r.loadableGenerated)).loadableGenerated;
          if ('boolean' === typeof r.ssr) {
            if (!r.ssr) return delete r.ssr, d(n, r);
            delete r.ssr;
          }
          return n(r);
        });
      var i = c(n('ERkP')),
        u = c(n('/QYh'));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var l = !1;
      function d(e, t) {
        if ((delete t.webpack, delete t.modules, !l)) return e(t);
        var n = t.loading;
        return function () {
          return i.default.createElement(n, {
            error: null,
            isLoading: !0,
            pastDelay: !1,
            timedOut: !1,
          });
        };
      }
    },
    DSo7: function (e, t) {
      e.exports = function (e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      };
    },
    H8eV: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return c;
      });
      var r = n('ERkP'),
        o = n.n(r),
        a = n('ysqo'),
        i = n.n(a),
        u = o.a.createElement,
        c = function (e) {
          var t = e.title,
            n = e.description,
            r = e.canonical,
            o = e.css,
            a = e.js,
            c = e.image;
          return u(
            i.a,
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
            u('meta', { property: 'og:url', content: ''.concat(r) }),
            u('meta', { name: 'twitter:card', content: 'summary' }),
            u('meta', { name: 'twitter:title', content: t }),
            u('meta', { name: 'twitter:description', content: n }),
            u('meta', { name: 'twitter:site', content: '@propernounco' }),
            u('meta', { name: 'twitter:creator', content: '@propernounco' }),
            o && u('link', { rel: 'stylesheet', href: ''.concat(o) }),
            u(
              'meta',
              c
                ? { property: 'og:image', content: ''.concat(c) }
                : {
                    property: 'og:image',
                    content:
                      'https://www.propernoun.co/static/images/proper-noun-social.png',
                  }
            ),
            c && u('meta', { name: 'twitter:image', content: ''.concat(c) }),
            r && u('link', { rel: 'canonical', href: ''.concat(r) }),
            a && u('script', { type: 'text/javascript', src: ''.concat(a) })
          );
        };
    },
    J9Yr: function (e, t, n) {
      'use strict';
      var r = n('zQIG'),
        o = n('N7I1'),
        a = n('8mBC'),
        i = n('I/kN'),
        u = n('cMav'),
        c = n('pSQP'),
        l = n('iN+R');
      function d(e) {
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
            r = c(e);
          if (t) {
            var o = c(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return u(this, n);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var s = n('ERkP'),
        f = !1;
      t.default = function () {
        var e,
          t = new Set();
        function n(n) {
          (e = n.props.reduceComponentsToState(l(t), n.props)),
            n.props.handleStateChange && n.props.handleStateChange(e);
        }
        return (function (u) {
          i(l, u);
          var c = d(l);
          function l(e) {
            var a;
            return (
              r(this, l), (a = c.call(this, e)), f && (t.add(o(a)), n(o(a))), a
            );
          }
          return (
            a(l, null, [
              {
                key: 'rewind',
                value: function () {
                  var n = e;
                  return (e = void 0), t.clear(), n;
                },
              },
            ]),
            a(l, [
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
            l
          );
        })(s.Component);
      };
    },
    O5Wi: function (e, t) {
      e.exports = function (e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      };
    },
    TZT2: function (e, t, n) {
      'use strict';
      var r;
      (t.__esModule = !0), (t.AmpStateContext = void 0);
      var o = ((r = n('ERkP')) && r.__esModule
        ? r
        : { default: r }
      ).default.createContext({});
      t.AmpStateContext = o;
    },
    a89X: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/product/[slug]',
        function () {
          return n('20XJ');
        },
      ]);
    },
    bOkD: function (e, t, n) {
      var r = n('cHE3');
      e.exports = function (e) {
        if (Array.isArray(e)) return r(e);
      };
    },
    dq4L: function (e, t, n) {
      'use strict';
      (t.__esModule = !0),
        (t.isInAmpMode = i),
        (t.useAmp = function () {
          return i(o.default.useContext(a.AmpStateContext));
        });
      var r,
        o = (r = n('ERkP')) && r.__esModule ? r : { default: r },
        a = n('TZT2');
      function i() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          r = e.hybrid,
          o = void 0 !== r && r,
          a = e.hasQuery;
        return n || (o && void 0 !== a && a);
      }
    },
    'iN+R': function (e, t, n) {
      var r = n('bOkD'),
        o = n('DSo7'),
        a = n('D7XE'),
        i = n('uYlf');
      e.exports = function (e) {
        return r(e) || o(e) || a(e) || i();
      };
    },
    'op+c': function (e, t, n) {
      'use strict';
      var r;
      (t.__esModule = !0), (t.HeadManagerContext = void 0);
      var o = ((r = n('ERkP')) && r.__esModule
        ? r
        : { default: r }
      ).default.createContext(null);
      t.HeadManagerContext = o;
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
      (t.__esModule = !0), (t.defaultHead = l), (t.default = void 0);
      var r = c(n('ERkP')),
        o = c(n('J9Yr')),
        a = n('TZT2'),
        i = n('op+c'),
        u = n('dq4L');
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [r.default.createElement('meta', { charSet: 'utf-8' })];
        return (
          e ||
            t.push(
              r.default.createElement('meta', {
                name: 'viewport',
                content: 'width=device-width',
              })
            ),
          t
        );
      }
      function d(e, t) {
        return 'string' === typeof t || 'number' === typeof t
          ? e
          : t.type === r.default.Fragment
          ? e.concat(
              r.default.Children.toArray(t.props.children).reduce(function (
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
      var s = ['name', 'httpEquiv', 'charSet', 'itemProp'];
      function f(e, t) {
        return e
          .reduce(function (e, t) {
            var n = r.default.Children.toArray(t.props.children);
            return e.concat(n);
          }, [])
          .reduce(d, [])
          .reverse()
          .concat(l(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return function (o) {
                var a = !0;
                if (
                  o.key &&
                  'number' !== typeof o.key &&
                  o.key.indexOf('$') > 0
                ) {
                  var i = o.key.slice(o.key.indexOf('$') + 1);
                  e.has(i) ? (a = !1) : e.add(i);
                }
                switch (o.type) {
                  case 'title':
                  case 'base':
                    t.has(o.type) ? (a = !1) : t.add(o.type);
                    break;
                  case 'meta':
                    for (var u = 0, c = s.length; u < c; u++) {
                      var l = s[u];
                      if (o.props.hasOwnProperty(l))
                        if ('charSet' === l) n.has(l) ? (a = !1) : n.add(l);
                        else {
                          var d = o.props[l],
                            f = r[l] || new Set();
                          f.has(d) ? (a = !1) : (f.add(d), (r[l] = f));
                        }
                    }
                }
                return a;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var n = e.key || t;
            return r.default.cloneElement(e, { key: n });
          });
      }
      var p = (0, o.default)();
      function m(e) {
        var t = e.children;
        return r.default.createElement(
          a.AmpStateContext.Consumer,
          null,
          function (e) {
            return r.default.createElement(
              i.HeadManagerContext.Consumer,
              null,
              function (n) {
                return r.default.createElement(
                  p,
                  {
                    reduceComponentsToState: f,
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
      m.rewind = p.rewind;
      var h = m;
      t.default = h;
    },
  },
  [['a89X', 1, 0, 4, 7]],
]);
