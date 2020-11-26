(window.webpackJsonp = window.webpackJsonp || []).push([
  [28],
  {
    '8mBC': function (e, t) {
      function n(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      e.exports = function (e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e;
      };
    },
    D7XE: function (e, t, n) {
      var r = n('cHE3');
      e.exports = function (e, t) {
        if (e) {
          if ('string' === typeof e) return r(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(e, t)
              : void 0
          );
        }
      };
    },
    DSo7: function (e, t) {
      e.exports = function (e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      };
    },
    'I/kN': function (e, t, n) {
      var r = n('w7mb');
      e.exports = function (e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && r(e, t);
      };
    },
    J9Yr: function (e, t, n) {
      'use strict';
      var r = n('zQIG'),
        o = n('N7I1'),
        u = n('8mBC'),
        a = n('I/kN'),
        i = n('cMav'),
        c = n('pSQP'),
        f = n('iN+R');
      function s(e) {
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
          return i(this, n);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var l = n('ERkP'),
        p = !1;
      t.default = function () {
        var e,
          t = new Set();
        function n(n) {
          (e = n.props.reduceComponentsToState(f(t), n.props)),
            n.props.handleStateChange && n.props.handleStateChange(e);
        }
        return (function (i) {
          a(f, i);
          var c = s(f);
          function f(e) {
            var u;
            return (
              r(this, f), (u = c.call(this, e)), p && (t.add(o(u)), n(o(u))), u
            );
          }
          return (
            u(f, null, [
              {
                key: 'rewind',
                value: function () {
                  var n = e;
                  return (e = void 0), t.clear(), n;
                },
              },
            ]),
            u(f, [
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
            f
          );
        })(l.Component);
      };
    },
    Km8e: function (e, t, n) {
      'use strict';
      var r = Object.assign.bind(Object);
      (e.exports = r), (e.exports.default = e.exports);
    },
    N7I1: function (e, t) {
      e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      };
    },
    QeBL: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('ERkP'),
        o = n.n(r),
        u = n('ysqo'),
        a = n.n(u),
        i = n('7xIC'),
        c = n.n(i),
        f = o.a.createElement;
      t.default = function () {
        return (
          Object(r.useEffect)(function () {
            c.a.replace('/[type]', '/grocery');
          }),
          f(
            a.a,
            null,
            f('meta', { name: 'robots', content: 'noindex, nofollow' })
          )
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
    bOkD: function (e, t, n) {
      var r = n('cHE3');
      e.exports = function (e) {
        if (Array.isArray(e)) return r(e);
      };
    },
    cHE3: function (e, t) {
      e.exports = function (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      };
    },
    cMav: function (e, t, n) {
      var r = n('i2RQ'),
        o = n('N7I1');
      e.exports = function (e, t) {
        return !t || ('object' !== r(t) && 'function' !== typeof t) ? o(e) : t;
      };
    },
    dq4L: function (e, t, n) {
      'use strict';
      (t.__esModule = !0),
        (t.isInAmpMode = a),
        (t.useAmp = function () {
          return a(o.default.useContext(u.AmpStateContext));
        });
      var r,
        o = (r = n('ERkP')) && r.__esModule ? r : { default: r },
        u = n('TZT2');
      function a() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          r = e.hybrid,
          o = void 0 !== r && r,
          u = e.hasQuery;
        return n || (o && void 0 !== u && u);
      }
    },
    i2RQ: function (e, t) {
      function n(t) {
        return (
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? (e.exports = n = function (e) {
                return typeof e;
              })
            : (e.exports = n = function (e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              }),
          n(t)
        );
      }
      e.exports = n;
    },
    'iN+R': function (e, t, n) {
      var r = n('bOkD'),
        o = n('DSo7'),
        u = n('D7XE'),
        a = n('uYlf');
      e.exports = function (e) {
        return r(e) || o(e) || u(e) || a();
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
    pSQP: function (e, t) {
      function n(t) {
        return (
          (e.exports = n = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          n(t)
        );
      }
      e.exports = n;
    },
    uYlf: function (e, t) {
      e.exports = function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      };
    },
    w7mb: function (e, t) {
      function n(t, r) {
        return (
          (e.exports = n =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          n(t, r)
        );
      }
      e.exports = n;
    },
    yaYD: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return n('QeBL');
        },
      ]);
    },
    ysqo: function (e, t, n) {
      'use strict';
      (t.__esModule = !0), (t.defaultHead = f), (t.default = void 0);
      var r = c(n('ERkP')),
        o = c(n('J9Yr')),
        u = n('TZT2'),
        a = n('op+c'),
        i = n('dq4L');
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function f() {
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
      function s(e, t) {
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
      var l = ['name', 'httpEquiv', 'charSet', 'itemProp'];
      function p(e, t) {
        return e
          .reduce(function (e, t) {
            var n = r.default.Children.toArray(t.props.children);
            return e.concat(n);
          }, [])
          .reduce(s, [])
          .reverse()
          .concat(f(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return function (o) {
                var u = !0;
                if (
                  o.key &&
                  'number' !== typeof o.key &&
                  o.key.indexOf('$') > 0
                ) {
                  var a = o.key.slice(o.key.indexOf('$') + 1);
                  e.has(a) ? (u = !1) : e.add(a);
                }
                switch (o.type) {
                  case 'title':
                  case 'base':
                    t.has(o.type) ? (u = !1) : t.add(o.type);
                    break;
                  case 'meta':
                    for (var i = 0, c = l.length; i < c; i++) {
                      var f = l[i];
                      if (o.props.hasOwnProperty(f))
                        if ('charSet' === f) n.has(f) ? (u = !1) : n.add(f);
                        else {
                          var s = o.props[f],
                            p = r[f] || new Set();
                          p.has(s) ? (u = !1) : (p.add(s), (r[f] = p));
                        }
                    }
                }
                return u;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var n = e.key || t;
            return r.default.cloneElement(e, { key: n });
          });
      }
      var d = (0, o.default)();
      function y(e) {
        var t = e.children;
        return r.default.createElement(
          u.AmpStateContext.Consumer,
          null,
          function (e) {
            return r.default.createElement(
              a.HeadManagerContext.Consumer,
              null,
              function (n) {
                return r.default.createElement(
                  d,
                  {
                    reduceComponentsToState: p,
                    handleStateChange: n,
                    inAmpMode: (0, i.isInAmpMode)(e),
                  },
                  t
                );
              }
            );
          }
        );
      }
      y.rewind = d.rewind;
      var v = y;
      t.default = v;
    },
    zQIG: function (e, t) {
      e.exports = function (e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      };
    },
  },
  [['yaYD', 1, 0, 2]],
]);
