(window.webpackJsonp = window.webpackJsonp || []).push([
  [26, 45],
  {
    DSo7: function (e, t) {
      e.exports = function (e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      };
    },
    IGqs: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return u;
      });
      var r = n('KD1n'),
        a = n('H5qd');
      function o() {
        var e = Object(r.a)([
          '\n  query Types($searchText: String) {\n    types(searchText: $searchText) {\n      totalCount\n        items{\n          id\n          name\n          slug\n          image\n          icon\n          home_title\n          home_subtitle\n          meta_title\n          meta_keyword\n          meta_description\n        }\n    }\n  }\n',
        ]);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      var u = n.n(a)()(o());
    },
    J9Yr: function (e, t, n) {
      'use strict';
      var r = n('zQIG'),
        a = n('N7I1'),
        o = n('8mBC'),
        u = n('I/kN'),
        i = n('cMav'),
        c = n('pSQP'),
        d = n('iN+R');
      function f(e) {
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
            var a = c(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return i(this, n);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var l = n('ERkP'),
        s = !1;
      t.default = function () {
        var e,
          t = new Set();
        function n(n) {
          (e = n.props.reduceComponentsToState(d(t), n.props)),
            n.props.handleStateChange && n.props.handleStateChange(e);
        }
        return (function (i) {
          u(d, i);
          var c = f(d);
          function d(e) {
            var o;
            return (
              r(this, d), (o = c.call(this, e)), s && (t.add(a(o)), n(a(o))), o
            );
          }
          return (
            o(d, null, [
              {
                key: 'rewind',
                value: function () {
                  var n = e;
                  return (e = void 0), t.clear(), n;
                },
              },
            ]),
            o(d, [
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
            d
          );
        })(l.Component);
      };
    },
    QeBL: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('ERkP'),
        a = n.n(r),
        o = n('ysqo'),
        u = n.n(o),
        i = n('7xIC'),
        c = n.n(i),
        d = n('1U1M'),
        f = n('IGqs'),
        l = n('quMH'),
        s = a.a.createElement;
      t.default = function () {
        var e,
          t = null,
          n = Object(d.b)(f.a, { variables: { searchText: '' } }),
          a = n.data,
          o = n.error;
        if (n.loading) return s(l.default, { message: 'Loading...' });
        if (o)
          return s(l.default, {
            message: 'Error occured for only domain routing',
          });
        var i = a.types.items.map(function (e) {
          return { id: e.id, href: '/'.concat(e.slug) };
        });
        return (
          (e = i[0].href),
          localStorage.getItem('myMenu') &&
            (t = (t = JSON.parse(localStorage.getItem('myMenu'))).href),
          Object(r.useEffect)(function () {
            c.a.replace('/[type]', null !== t ? t : e);
          }),
          s(
            u.a,
            null,
            s('meta', { name: 'robots', content: 'noindex, nofollow' })
          )
        );
      };
    },
    TZT2: function (e, t, n) {
      'use strict';
      var r;
      (t.__esModule = !0), (t.AmpStateContext = void 0);
      var a = ((r = n('ERkP')) && r.__esModule
        ? r
        : { default: r }
      ).default.createContext({});
      t.AmpStateContext = a;
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
        (t.isInAmpMode = u),
        (t.useAmp = function () {
          return u(a.default.useContext(o.AmpStateContext));
        });
      var r,
        a = (r = n('ERkP')) && r.__esModule ? r : { default: r },
        o = n('TZT2');
      function u() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          r = e.hybrid,
          a = void 0 !== r && r,
          o = e.hasQuery;
        return n || (a && void 0 !== o && o);
      }
    },
    'iN+R': function (e, t, n) {
      var r = n('bOkD'),
        a = n('DSo7'),
        o = n('D7XE'),
        u = n('uYlf');
      e.exports = function (e) {
        return r(e) || a(e) || o(e) || u();
      };
    },
    'op+c': function (e, t, n) {
      'use strict';
      var r;
      (t.__esModule = !0), (t.HeadManagerContext = void 0);
      var a = ((r = n('ERkP')) && r.__esModule
        ? r
        : { default: r }
      ).default.createContext(null);
      t.HeadManagerContext = a;
    },
    quMH: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function () {
          return i;
        });
      var r = n('ERkP'),
        a = n.n(r),
        o = n('j/s1'),
        u = a.a.createElement;
      function i(e) {
        var t = e.message;
        return u(c, null, t);
      }
      var c = o.e.aside.withConfig({
        displayName: 'error-message__StyledAside',
        componentId: 'sc-5jhwvi-0',
      })({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '1.5rem',
        fontSize: '22px',
        color: '000',
        backgroundColor: '#fff',
      });
    },
    uYlf: function (e, t) {
      e.exports = function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      };
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
      (t.__esModule = !0), (t.defaultHead = d), (t.default = void 0);
      var r = c(n('ERkP')),
        a = c(n('J9Yr')),
        o = n('TZT2'),
        u = n('op+c'),
        i = n('dq4L');
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function d() {
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
      function f(e, t) {
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
      function s(e, t) {
        return e
          .reduce(function (e, t) {
            var n = r.default.Children.toArray(t.props.children);
            return e.concat(n);
          }, [])
          .reduce(f, [])
          .reverse()
          .concat(d(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return function (a) {
                var o = !0;
                if (
                  a.key &&
                  'number' !== typeof a.key &&
                  a.key.indexOf('$') > 0
                ) {
                  var u = a.key.slice(a.key.indexOf('$') + 1);
                  e.has(u) ? (o = !1) : e.add(u);
                }
                switch (a.type) {
                  case 'title':
                  case 'base':
                    t.has(a.type) ? (o = !1) : t.add(a.type);
                    break;
                  case 'meta':
                    for (var i = 0, c = l.length; i < c; i++) {
                      var d = l[i];
                      if (a.props.hasOwnProperty(d))
                        if ('charSet' === d) n.has(d) ? (o = !1) : n.add(d);
                        else {
                          var f = a.props[d],
                            s = r[d] || new Set();
                          s.has(f) ? (o = !1) : (s.add(f), (r[d] = s));
                        }
                    }
                }
                return o;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var n = e.key || t;
            return r.default.cloneElement(e, { key: n });
          });
      }
      var p = (0, a.default)();
      function m(e) {
        var t = e.children;
        return r.default.createElement(
          o.AmpStateContext.Consumer,
          null,
          function (e) {
            return r.default.createElement(
              u.HeadManagerContext.Consumer,
              null,
              function (n) {
                return r.default.createElement(
                  p,
                  {
                    reduceComponentsToState: s,
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
      m.rewind = p.rewind;
      var v = m;
      t.default = v;
    },
  },
  [['yaYD', 1, 0, 2, 3, 5]],
]);
