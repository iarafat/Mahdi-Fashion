(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    '5l48': function (e, t, n) {
      'use strict';
      n.d(t, 'i', function () {
        return u;
      }),
        n.d(t, 'h', function () {
          return c;
        }),
        n.d(t, 'j', function () {
          return l;
        }),
        n.d(t, 'f', function () {
          return f;
        }),
        n.d(t, 'b', function () {
          return d;
        }),
        n.d(t, 'c', function () {
          return p;
        }),
        n.d(t, 'g', function () {
          return h;
        }),
        n.d(t, 'k', function () {
          return v;
        }),
        n.d(t, 'q', function () {
          return y;
        }),
        n.d(t, 'm', function () {
          return m;
        }),
        n.d(t, 'p', function () {
          return O;
        }),
        n.d(t, 'a', function () {
          return j;
        }),
        n.d(t, 'd', function () {
          return S;
        }),
        n.d(t, 'e', function () {
          return k;
        }),
        n.d(t, 'l', function () {
          return E;
        }),
        n.d(t, 'o', function () {
          return R;
        }),
        n.d(t, 'n', function () {
          return D;
        });
      var r = n('VtSi'),
        i = n.n(r),
        a = n('QsI/'),
        o = n('bM43'),
        s = n('IGqs'),
        u = '/',
        c = '/grocery',
        l = '/makeup',
        f = '/clothing',
        d = '/bags',
        p = '/book',
        h = '/furniture',
        v = '/medicine',
        y = '/restaurant',
        m = '/profile',
        b = { id: 'nav.help', defaultMessage: 'Help', href: '/help' },
        g = { id: 'nav.order', href: '/order', defaultMessage: 'Order' },
        O = {
          id: 'nav.request_medicine',
          defaultMessage: 'Request Medicine',
          href: '/request-medicine',
        },
        w = { id: 'nav.profile', defaultMessage: 'Profile', href: m },
        j = [w];
      function S() {
        return x.apply(this, arguments);
      }
      function x() {
        return (x = Object(a.a)(
          i.a.mark(function e() {
            var t, n, r;
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = Object(o.a)()),
                      (e.next = 3),
                      t.query({ query: s.a, variables: { searchText: '' } })
                    );
                  case 3:
                    return (
                      (n = e.sent),
                      (e.next = 6),
                      n.data.types.items.map(function (e) {
                        return {
                          id: e.id,
                          href: '/'.concat(e.slug),
                          defaultMessage: e.name,
                          icon: e.icon,
                          dynamic: !0,
                        };
                      })
                    );
                  case 6:
                    return (r = e.sent), e.abrupt('return', r);
                  case 8:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var k = [
          {
            id: 'nav.grocery',
            href: c,
            defaultMessage: 'Grocery',
            icon: 'FruitsVegetable',
            dynamic: !0,
          },
          {
            id: 'nav.makeup',
            defaultMessage: 'Makeup',
            href: l,
            icon: 'FacialCare',
            dynamic: !0,
          },
          {
            id: 'nav.bags',
            defaultMessage: 'Bags',
            href: d,
            icon: 'Handbag',
            dynamic: !0,
          },
        ],
        E = [{ id: 'nav.home', defaultMessage: 'Home', href: u }].concat(j, [
          b,
          { id: 'nav.offer', defaultMessage: 'Offer', href: '/offer' },
        ]),
        R = [g, b],
        D = [w];
    },
    IGqs: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var r = n('KD1n'),
        i = n('H5qd');
      function a() {
        var e = Object(r.a)([
          '\n  query Types($searchText: String) {\n    types(searchText: $searchText) {\n      totalCount\n        items{\n          id\n          name\n          slug\n          image\n          icon\n          home_title\n          home_subtitle\n          meta_title\n          meta_keyword\n          meta_description\n        }\n    }\n  }\n',
        ]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      var o = n.n(i)()(a());
    },
    KeDb: function (e, t, n) {
      'use strict';
      var r = n('zQIG'),
        i = n('8mBC'),
        a = n('I/kN'),
        o = n('cMav'),
        s = n('pSQP');
      function u(e) {
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
            r = s(e);
          if (t) {
            var i = s(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return o(this, n);
        };
      }
      var c = n('Y3ZS'),
        l = n('pONU');
      (t.__esModule = !0), (t.default = void 0);
      var f,
        d = l(n('ERkP')),
        p = n('cRaD'),
        h = n('fvxO'),
        v = c(n('7xIC')),
        y = n('L9lV');
      function m(e) {
        return e && 'object' === typeof e ? (0, h.formatWithValidation)(e) : e;
      }
      var b = new Map(),
        g = window.IntersectionObserver,
        O = {};
      function w() {
        return (
          f ||
          (g
            ? (f = new g(
                function (e) {
                  e.forEach(function (e) {
                    if (b.has(e.target)) {
                      var t = b.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (f.unobserve(e.target), b.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: '200px' }
              ))
            : void 0)
        );
      }
      var j = (function (e) {
        a(n, e);
        var t = u(n);
        function n(e) {
          var i;
          return (
            r(this, n),
            ((i = t.call(this, e)).p = void 0),
            (i.cleanUpListeners = function () {}),
            (i.formatUrls = (function (e) {
              var t = null,
                n = null,
                r = null;
              return function (i, a) {
                if (r && i === t && a === n) return r;
                var o = e(i, a);
                return (t = i), (n = a), (r = o), o;
              };
            })(function (e, t) {
              return {
                href: (0, y.addBasePath)(m(e)),
                as: t ? (0, y.addBasePath)(m(t)) : t,
              };
            })),
            (i.linkClicked = function (e) {
              var t = e.currentTarget,
                n = t.nodeName,
                r = t.target;
              if (
                'A' !== n ||
                !(
                  (r && '_self' !== r) ||
                  e.metaKey ||
                  e.ctrlKey ||
                  e.shiftKey ||
                  (e.nativeEvent && 2 === e.nativeEvent.which)
                )
              ) {
                var a = i.formatUrls(i.props.href, i.props.as),
                  o = a.href,
                  s = a.as;
                if (
                  (function (e) {
                    var t = (0, p.parse)(e, !1, !0),
                      n = (0, p.parse)((0, h.getLocationOrigin)(), !1, !0);
                    return (
                      !t.host ||
                      (t.protocol === n.protocol && t.host === n.host)
                    );
                  })(o)
                ) {
                  var u = window.location.pathname;
                  (o = (0, p.resolve)(u, o)),
                    (s = s ? (0, p.resolve)(u, s) : o),
                    e.preventDefault();
                  var c = i.props.scroll;
                  null == c && (c = s.indexOf('#') < 0),
                    v.default[i.props.replace ? 'replace' : 'push'](o, s, {
                      shallow: i.props.shallow,
                    }).then(function (e) {
                      e && c && (window.scrollTo(0, 0), document.body.focus());
                    });
                }
              }
            }),
            (i.p = !1 !== e.prefetch),
            i
          );
        }
        return (
          i(n, [
            {
              key: 'componentWillUnmount',
              value: function () {
                this.cleanUpListeners();
              },
            },
            {
              key: 'getPaths',
              value: function () {
                var e = window.location.pathname,
                  t = this.formatUrls(this.props.href, this.props.as),
                  n = t.href,
                  r = t.as,
                  i = (0, p.resolve)(e, n);
                return [i, r ? (0, p.resolve)(e, r) : i];
              },
            },
            {
              key: 'handleRef',
              value: function (e) {
                var t = this;
                this.p &&
                  g &&
                  e &&
                  e.tagName &&
                  (this.cleanUpListeners(),
                  O[this.getPaths().join('%')] ||
                    (this.cleanUpListeners = (function (e, t) {
                      var n = w();
                      return n
                        ? (n.observe(e),
                          b.set(e, t),
                          function () {
                            try {
                              n.unobserve(e);
                            } catch (t) {
                              console.error(t);
                            }
                            b.delete(e);
                          })
                        : function () {};
                    })(e, function () {
                      t.prefetch();
                    })));
              },
            },
            {
              key: 'prefetch',
              value: function (e) {
                if (this.p) {
                  var t = this.getPaths();
                  v.default.prefetch(t[0], t[1], e).catch(function (e) {
                    0;
                  }),
                    (O[t.join('%')] = !0);
                }
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = this.props.children,
                  n = this.formatUrls(this.props.href, this.props.as),
                  r = n.href,
                  i = n.as;
                'string' === typeof t &&
                  (t = d.default.createElement('a', null, t));
                var a = d.Children.only(t),
                  o = {
                    ref: function (t) {
                      e.handleRef(t),
                        a &&
                          'object' === typeof a &&
                          a.ref &&
                          ('function' === typeof a.ref
                            ? a.ref(t)
                            : 'object' === typeof a.ref && (a.ref.current = t));
                    },
                    onMouseEnter: function (t) {
                      a.props &&
                        'function' === typeof a.props.onMouseEnter &&
                        a.props.onMouseEnter(t),
                        e.prefetch({ priority: !0 });
                    },
                    onClick: function (t) {
                      a.props &&
                        'function' === typeof a.props.onClick &&
                        a.props.onClick(t),
                        t.defaultPrevented || e.linkClicked(t);
                    },
                  };
                return (
                  (!this.props.passHref &&
                    ('a' !== a.type || 'href' in a.props)) ||
                    (o.href = i || r),
                  d.default.cloneElement(a, o)
                );
              },
            },
          ]),
          n
        );
      })(d.Component);
      t.default = j;
    },
    bM43: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return Re;
      }),
        n.d(t, 'b', function () {
          return De;
        });
      var r = n('ERkP'),
        i = n('qrFu'),
        a = n('D57K'),
        o = n('/ebn');
      function s(e) {
        return {
          kind: 'Document',
          definitions: [
            {
              kind: 'OperationDefinition',
              operation: 'query',
              name: { kind: 'Name', value: 'GeneratedClientQuery' },
              selectionSet: u(e),
            },
          ],
        };
      }
      function u(e) {
        if (
          'number' === typeof e ||
          'boolean' === typeof e ||
          'string' === typeof e ||
          'undefined' === typeof e ||
          null === e
        )
          return null;
        if (Array.isArray(e)) return u(e[0]);
        var t = [];
        return (
          Object.keys(e).forEach(function (n) {
            var r = {
              kind: 'Field',
              name: { kind: 'Name', value: n },
              selectionSet: u(e[n]) || void 0,
            };
            t.push(r);
          }),
          { kind: 'SelectionSet', selections: t }
        );
      }
      var c,
        l = {
          kind: 'Document',
          definitions: [
            {
              kind: 'OperationDefinition',
              operation: 'query',
              name: null,
              variableDefinitions: null,
              directives: [],
              selectionSet: {
                kind: 'SelectionSet',
                selections: [
                  {
                    kind: 'Field',
                    alias: null,
                    name: { kind: 'Name', value: '__typename' },
                    arguments: [],
                    directives: [],
                    selectionSet: null,
                  },
                ],
              },
            },
          ],
        },
        f = (function () {
          function e() {}
          return (
            (e.prototype.transformDocument = function (e) {
              return e;
            }),
            (e.prototype.transformForLink = function (e) {
              return e;
            }),
            (e.prototype.readQuery = function (e, t) {
              return (
                void 0 === t && (t = !1),
                this.read({
                  query: e.query,
                  variables: e.variables,
                  optimistic: t,
                })
              );
            }),
            (e.prototype.readFragment = function (e, t) {
              return (
                void 0 === t && (t = !1),
                this.read({
                  query: Object(o.k)(e.fragment, e.fragmentName),
                  variables: e.variables,
                  rootId: e.id,
                  optimistic: t,
                })
              );
            }),
            (e.prototype.writeQuery = function (e) {
              this.write({
                dataId: 'ROOT_QUERY',
                result: e.data,
                query: e.query,
                variables: e.variables,
              });
            }),
            (e.prototype.writeFragment = function (e) {
              this.write({
                dataId: e.id,
                result: e.data,
                variables: e.variables,
                query: Object(o.k)(e.fragment, e.fragmentName),
              });
            }),
            (e.prototype.writeData = function (e) {
              var t,
                n,
                r = e.id,
                i = e.data;
              if ('undefined' !== typeof r) {
                var a = null;
                try {
                  a = this.read({ rootId: r, optimistic: !1, query: l });
                } catch (f) {}
                var o = (a && a.__typename) || '__ClientData',
                  c = Object.assign({ __typename: o }, i);
                this.writeFragment({
                  id: r,
                  fragment:
                    ((t = c),
                    (n = o),
                    {
                      kind: 'Document',
                      definitions: [
                        {
                          kind: 'FragmentDefinition',
                          typeCondition: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: n || '__FakeType' },
                          },
                          name: { kind: 'Name', value: 'GeneratedClientQuery' },
                          selectionSet: u(t),
                        },
                      ],
                    }),
                  data: c,
                });
              } else this.writeQuery({ query: s(i), data: i });
            }),
            e
          );
        })();
      c || (c = {});
      var d = n('hhN/'),
        p = null,
        h = {},
        v = 1,
        y = Array,
        m =
          y['@wry/context:Slot'] ||
          (function () {
            var e = (function () {
              function e() {
                this.id = [
                  'slot',
                  v++,
                  Date.now(),
                  Math.random().toString(36).slice(2),
                ].join(':');
              }
              return (
                (e.prototype.hasValue = function () {
                  for (var e = p; e; e = e.parent)
                    if (this.id in e.slots) {
                      var t = e.slots[this.id];
                      if (t === h) break;
                      return e !== p && (p.slots[this.id] = t), !0;
                    }
                  return p && (p.slots[this.id] = h), !1;
                }),
                (e.prototype.getValue = function () {
                  if (this.hasValue()) return p.slots[this.id];
                }),
                (e.prototype.withValue = function (e, t, n, r) {
                  var i,
                    a = (((i = { __proto__: null })[this.id] = e), i),
                    o = p;
                  p = { parent: o, slots: a };
                  try {
                    return t.apply(r, n);
                  } finally {
                    p = o;
                  }
                }),
                (e.bind = function (e) {
                  var t = p;
                  return function () {
                    var n = p;
                    try {
                      return (p = t), e.apply(this, arguments);
                    } finally {
                      p = n;
                    }
                  };
                }),
                (e.noContext = function (e, t, n) {
                  if (!p) return e.apply(n, t);
                  var r = p;
                  try {
                    return (p = null), e.apply(n, t);
                  } finally {
                    p = r;
                  }
                }),
                e
              );
            })();
            try {
              Object.defineProperty(y, '@wry/context:Slot', {
                value: (y['@wry/context:Slot'] = e),
                enumerable: !1,
                writable: !1,
                configurable: !1,
              });
            } finally {
              return e;
            }
          })();
      m.bind, m.noContext;
      function b() {}
      var g = (function () {
          function e(e, t) {
            void 0 === e && (e = 1 / 0),
              void 0 === t && (t = b),
              (this.max = e),
              (this.dispose = t),
              (this.map = new Map()),
              (this.newest = null),
              (this.oldest = null);
          }
          return (
            (e.prototype.has = function (e) {
              return this.map.has(e);
            }),
            (e.prototype.get = function (e) {
              var t = this.getEntry(e);
              return t && t.value;
            }),
            (e.prototype.getEntry = function (e) {
              var t = this.map.get(e);
              if (t && t !== this.newest) {
                var n = t.older,
                  r = t.newer;
                r && (r.older = n),
                  n && (n.newer = r),
                  (t.older = this.newest),
                  (t.older.newer = t),
                  (t.newer = null),
                  (this.newest = t),
                  t === this.oldest && (this.oldest = r);
              }
              return t;
            }),
            (e.prototype.set = function (e, t) {
              var n = this.getEntry(e);
              return n
                ? (n.value = t)
                : ((n = { key: e, value: t, newer: null, older: this.newest }),
                  this.newest && (this.newest.newer = n),
                  (this.newest = n),
                  (this.oldest = this.oldest || n),
                  this.map.set(e, n),
                  n.value);
            }),
            (e.prototype.clean = function () {
              for (; this.oldest && this.map.size > this.max; )
                this.delete(this.oldest.key);
            }),
            (e.prototype.delete = function (e) {
              var t = this.map.get(e);
              return (
                !!t &&
                (t === this.newest && (this.newest = t.older),
                t === this.oldest && (this.oldest = t.newer),
                t.newer && (t.newer.older = t.older),
                t.older && (t.older.newer = t.newer),
                this.map.delete(e),
                this.dispose(t.value, e),
                !0)
              );
            }),
            e
          );
        })(),
        O = new m(),
        w = [],
        j = [],
        S = 100;
      function x(e, t) {
        if (!e) throw new Error(t || 'assertion failure');
      }
      function k(e) {
        switch (e.length) {
          case 0:
            throw new Error('unknown value');
          case 1:
            return e[0];
          case 2:
            throw e[1];
        }
      }
      var E = (function () {
        function e(t, n) {
          (this.fn = t),
            (this.args = n),
            (this.parents = new Set()),
            (this.childValues = new Map()),
            (this.dirtyChildren = null),
            (this.dirty = !0),
            (this.recomputing = !1),
            (this.value = []),
            ++e.count;
        }
        return (
          (e.prototype.recompute = function () {
            if (
              (x(!this.recomputing, 'already recomputing'),
              (function (e) {
                var t = O.getValue();
                if (t)
                  return (
                    e.parents.add(t),
                    t.childValues.has(e) || t.childValues.set(e, []),
                    D(e) ? T(t, e) : I(t, e),
                    t
                  );
              })(this) || !F(this))
            )
              return D(this)
                ? (function (e) {
                    var t = _(e);
                    O.withValue(e, R, [e]),
                      (function (e) {
                        if ('function' === typeof e.subscribe)
                          try {
                            A(e),
                              (e.unsubscribe = e.subscribe.apply(null, e.args));
                          } catch (t) {
                            return e.setDirty(), !1;
                          }
                        return !0;
                      })(e) &&
                        (function (e) {
                          if (((e.dirty = !1), D(e))) return;
                          C(e);
                        })(e);
                    return t.forEach(F), k(e.value);
                  })(this)
                : k(this.value);
          }),
          (e.prototype.setDirty = function () {
            this.dirty ||
              ((this.dirty = !0), (this.value.length = 0), V(this), A(this));
          }),
          (e.prototype.dispose = function () {
            var e = this;
            _(this).forEach(F),
              A(this),
              this.parents.forEach(function (t) {
                t.setDirty(), q(t, e);
              });
          }),
          (e.count = 0),
          e
        );
      })();
      function R(e) {
        (e.recomputing = !0), (e.value.length = 0);
        try {
          e.value[0] = e.fn.apply(null, e.args);
        } catch (t) {
          e.value[1] = t;
        }
        e.recomputing = !1;
      }
      function D(e) {
        return e.dirty || !(!e.dirtyChildren || !e.dirtyChildren.size);
      }
      function V(e) {
        e.parents.forEach(function (t) {
          return T(t, e);
        });
      }
      function C(e) {
        e.parents.forEach(function (t) {
          return I(t, e);
        });
      }
      function T(e, t) {
        if ((x(e.childValues.has(t)), x(D(t)), e.dirtyChildren)) {
          if (e.dirtyChildren.has(t)) return;
        } else e.dirtyChildren = j.pop() || new Set();
        e.dirtyChildren.add(t), V(e);
      }
      function I(e, t) {
        x(e.childValues.has(t)), x(!D(t));
        var n = e.childValues.get(t);
        0 === n.length
          ? e.childValues.set(t, t.value.slice(0))
          : (function (e, t) {
              var n = e.length;
              return n > 0 && n === t.length && e[n - 1] === t[n - 1];
            })(n, t.value) || e.setDirty(),
          M(e, t),
          D(e) || C(e);
      }
      function M(e, t) {
        var n = e.dirtyChildren;
        n &&
          (n.delete(t),
          0 === n.size &&
            (j.length < S && j.push(n), (e.dirtyChildren = null)));
      }
      function F(e) {
        return (
          0 === e.parents.size &&
          'function' === typeof e.reportOrphan &&
          !0 === e.reportOrphan()
        );
      }
      function _(e) {
        var t = w;
        return (
          e.childValues.size > 0 &&
            ((t = []),
            e.childValues.forEach(function (n, r) {
              q(e, r), t.push(r);
            })),
          x(null === e.dirtyChildren),
          t
        );
      }
      function q(e, t) {
        t.parents.delete(e), e.childValues.delete(t), M(e, t);
      }
      function A(e) {
        var t = e.unsubscribe;
        'function' === typeof t && ((e.unsubscribe = void 0), t());
      }
      var N = (function () {
        function e(e) {
          this.weakness = e;
        }
        return (
          (e.prototype.lookup = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return this.lookupArray(e);
          }),
          (e.prototype.lookupArray = function (e) {
            var t = this;
            return (
              e.forEach(function (e) {
                return (t = t.getChildTrie(e));
              }),
              t.data || (t.data = Object.create(null))
            );
          }),
          (e.prototype.getChildTrie = function (t) {
            var n =
                this.weakness &&
                (function (e) {
                  switch (typeof e) {
                    case 'object':
                      if (null === e) break;
                    case 'function':
                      return !0;
                  }
                  return !1;
                })(t)
                  ? this.weak || (this.weak = new WeakMap())
                  : this.strong || (this.strong = new Map()),
              r = n.get(t);
            return r || n.set(t, (r = new e(this.weakness))), r;
          }),
          e
        );
      })();
      var Q = new N('function' === typeof WeakMap);
      function P() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return Q.lookupArray(e);
      }
      var U = new Set();
      function K(e, t) {
        void 0 === t && (t = Object.create(null));
        var n = new g(t.max || Math.pow(2, 16), function (e) {
            return e.dispose();
          }),
          r = !!t.disposable,
          i = t.makeCacheKey || P;
        function a() {
          if (!r || O.hasValue()) {
            var a = i.apply(null, arguments);
            if (void 0 === a) return e.apply(null, arguments);
            var o = Array.prototype.slice.call(arguments),
              s = n.get(a);
            s
              ? (s.args = o)
              : ((s = new E(e, o)),
                n.set(a, s),
                (s.subscribe = t.subscribe),
                r &&
                  (s.reportOrphan = function () {
                    return n.delete(a);
                  }));
            var u = s.recompute();
            return (
              n.set(a, s),
              U.add(n),
              O.hasValue() ||
                (U.forEach(function (e) {
                  return e.clean();
                }),
                U.clear()),
              r ? void 0 : u
            );
          }
        }
        return (
          (a.dirty = function () {
            var e = i.apply(null, arguments),
              t = void 0 !== e && n.get(e);
            t && t.setDirty();
          }),
          a
        );
      }
      var B = n('Vvrm'),
        W = !1;
      function z() {
        var e = !W;
        return Object(o.y)() || (W = !0), e;
      }
      var G = (function () {
          function e() {}
          return (
            (e.prototype.ensureReady = function () {
              return Promise.resolve();
            }),
            (e.prototype.canBypassInit = function () {
              return !0;
            }),
            (e.prototype.match = function (e, t, n) {
              var r = n.store.get(e.id),
                i = 'ROOT_QUERY' === e.id;
              if (!r) return i;
              var a = r.__typename,
                o = void 0 === a ? i && 'Query' : a;
              return (o && o === t) || (z(), 'heuristic');
            }),
            e
          );
        })(),
        H =
          ((function () {
            function e(e) {
              e && e.introspectionQueryResultData
                ? ((this.possibleTypesMap = this.parseIntrospectionResult(
                    e.introspectionQueryResultData
                  )),
                  (this.isReady = !0))
                : (this.isReady = !1),
                (this.match = this.match.bind(this));
            }
            (e.prototype.match = function (e, t, n) {
              Object(B.b)(this.isReady, 1);
              var r = n.store.get(e.id),
                i = 'ROOT_QUERY' === e.id;
              if (!r) return i;
              var a = r.__typename,
                o = void 0 === a ? i && 'Query' : a;
              if ((Object(B.b)(o, 2), o === t)) return !0;
              var s = this.possibleTypesMap[t];
              return !!(o && s && s.indexOf(o) > -1);
            }),
              (e.prototype.parseIntrospectionResult = function (e) {
                var t = {};
                return (
                  e.__schema.types.forEach(function (e) {
                    ('UNION' !== e.kind && 'INTERFACE' !== e.kind) ||
                      (t[e.name] = e.possibleTypes.map(function (e) {
                        return e.name;
                      }));
                  }),
                  t
                );
              });
          })(),
          Object.prototype.hasOwnProperty),
        L = (function () {
          function e(e) {
            var t = this;
            void 0 === e && (e = Object.create(null)),
              (this.data = e),
              (this.depend = K(
                function (e) {
                  return t.data[e];
                },
                {
                  disposable: !0,
                  makeCacheKey: function (e) {
                    return e;
                  },
                }
              ));
          }
          return (
            (e.prototype.toObject = function () {
              return this.data;
            }),
            (e.prototype.get = function (e) {
              return this.depend(e), this.data[e];
            }),
            (e.prototype.set = function (e, t) {
              t !== this.data[e] && ((this.data[e] = t), this.depend.dirty(e));
            }),
            (e.prototype.delete = function (e) {
              H.call(this.data, e) &&
                (delete this.data[e], this.depend.dirty(e));
            }),
            (e.prototype.clear = function () {
              this.replace(null);
            }),
            (e.prototype.replace = function (e) {
              var t = this;
              e
                ? (Object.keys(e).forEach(function (n) {
                    t.set(n, e[n]);
                  }),
                  Object.keys(this.data).forEach(function (n) {
                    H.call(e, n) || t.delete(n);
                  }))
                : Object.keys(this.data).forEach(function (e) {
                    t.delete(e);
                  });
            }),
            e
          );
        })();
      function J(e) {
        return new L(e);
      }
      var Y = (function () {
        function e(e) {
          var t = this,
            n = void 0 === e ? {} : e,
            r = n.cacheKeyRoot,
            i = void 0 === r ? new N(o.e) : r,
            a = n.freezeResults,
            s = void 0 !== a && a,
            u = this.executeStoreQuery,
            c = this.executeSelectionSet,
            l = this.executeSubSelectedArray;
          (this.freezeResults = s),
            (this.executeStoreQuery = K(
              function (e) {
                return u.call(t, e);
              },
              {
                makeCacheKey: function (e) {
                  var t = e.query,
                    n = e.rootValue,
                    r = e.contextValue,
                    a = e.variableValues,
                    o = e.fragmentMatcher;
                  if (r.store instanceof L)
                    return i.lookup(r.store, t, o, JSON.stringify(a), n.id);
                },
              }
            )),
            (this.executeSelectionSet = K(
              function (e) {
                return c.call(t, e);
              },
              {
                makeCacheKey: function (e) {
                  var t = e.selectionSet,
                    n = e.rootValue,
                    r = e.execContext;
                  if (r.contextValue.store instanceof L)
                    return i.lookup(
                      r.contextValue.store,
                      t,
                      r.fragmentMatcher,
                      JSON.stringify(r.variableValues),
                      n.id
                    );
                },
              }
            )),
            (this.executeSubSelectedArray = K(
              function (e) {
                return l.call(t, e);
              },
              {
                makeCacheKey: function (e) {
                  var t = e.field,
                    n = e.array,
                    r = e.execContext;
                  if (r.contextValue.store instanceof L)
                    return i.lookup(
                      r.contextValue.store,
                      t,
                      n,
                      JSON.stringify(r.variableValues)
                    );
                },
              }
            ));
        }
        return (
          (e.prototype.readQueryFromStore = function (e) {
            return this.diffQueryAgainstStore(
              Object(a.a)(Object(a.a)({}, e), { returnPartialData: !1 })
            ).result;
          }),
          (e.prototype.diffQueryAgainstStore = function (e) {
            var t = e.store,
              n = e.query,
              r = e.variables,
              i = e.previousResult,
              a = e.returnPartialData,
              s = void 0 === a || a,
              u = e.rootId,
              c = void 0 === u ? 'ROOT_QUERY' : u,
              l = e.fragmentMatcherFunction,
              f = e.config,
              p = Object(o.o)(n);
            r = Object(o.c)({}, Object(o.h)(p), r);
            var h = {
                store: t,
                dataIdFromObject: f && f.dataIdFromObject,
                cacheRedirects: (f && f.cacheRedirects) || {},
              },
              v = this.executeStoreQuery({
                query: n,
                rootValue: {
                  type: 'id',
                  id: c,
                  generated: !0,
                  typename: 'Query',
                },
                contextValue: h,
                variableValues: r,
                fragmentMatcher: l,
              }),
              y = v.missing && v.missing.length > 0;
            return (
              y &&
                !s &&
                v.missing.forEach(function (e) {
                  if (!e.tolerable) throw new B.a(8);
                }),
              i && Object(d.a)(i, v.result) && (v.result = i),
              { result: v.result, complete: !y }
            );
          }),
          (e.prototype.executeStoreQuery = function (e) {
            var t = e.query,
              n = e.rootValue,
              r = e.contextValue,
              i = e.variableValues,
              a = e.fragmentMatcher,
              s = void 0 === a ? Z : a,
              u = Object(o.l)(t),
              c = Object(o.j)(t),
              l = {
                query: t,
                fragmentMap: Object(o.g)(c),
                contextValue: r,
                variableValues: i,
                fragmentMatcher: s,
              };
            return this.executeSelectionSet({
              selectionSet: u.selectionSet,
              rootValue: n,
              execContext: l,
            });
          }),
          (e.prototype.executeSelectionSet = function (e) {
            var t = this,
              n = e.selectionSet,
              r = e.rootValue,
              i = e.execContext,
              s = i.fragmentMap,
              u = i.contextValue,
              c = i.variableValues,
              l = { result: null },
              f = [],
              d = u.store.get(r.id),
              p =
                (d && d.__typename) ||
                ('ROOT_QUERY' === r.id && 'Query') ||
                void 0;
            function h(e) {
              var t;
              return (
                e.missing &&
                  ((l.missing = l.missing || []),
                  (t = l.missing).push.apply(t, e.missing)),
                e.result
              );
            }
            return (
              n.selections.forEach(function (e) {
                var n;
                if (Object(o.F)(e, c))
                  if (Object(o.t)(e)) {
                    var l = h(t.executeField(d, p, e, i));
                    'undefined' !== typeof l &&
                      f.push((((n = {})[Object(o.E)(e)] = l), n));
                  } else {
                    var v = void 0;
                    if (Object(o.v)(e)) v = e;
                    else if (!(v = s[e.name.value])) throw new B.a(9);
                    var y = v.typeCondition && v.typeCondition.name.value,
                      m = !y || i.fragmentMatcher(r, y, u);
                    if (m) {
                      var b = t.executeSelectionSet({
                        selectionSet: v.selectionSet,
                        rootValue: r,
                        execContext: i,
                      });
                      'heuristic' === m &&
                        b.missing &&
                        (b = Object(a.a)(Object(a.a)({}, b), {
                          missing: b.missing.map(function (e) {
                            return Object(a.a)(Object(a.a)({}, e), {
                              tolerable: !0,
                            });
                          }),
                        })),
                        f.push(h(b));
                    }
                  }
              }),
              (l.result = Object(o.B)(f)),
              this.freezeResults,
              l
            );
          }),
          (e.prototype.executeField = function (e, t, n, r) {
            var i = r.variableValues,
              a = r.contextValue,
              s = (function (e, t, n, r, i, a) {
                a.resultKey;
                var s = a.directives,
                  u = n;
                (r || s) && (u = Object(o.p)(u, r, s));
                var c = void 0;
                if (
                  e &&
                  'undefined' === typeof (c = e[u]) &&
                  i.cacheRedirects &&
                  'string' === typeof t
                ) {
                  var l = i.cacheRedirects[t];
                  if (l) {
                    var f = l[n];
                    f &&
                      (c = f(e, r, {
                        getCacheKey: function (e) {
                          var t = i.dataIdFromObject(e);
                          return (
                            t && Object(o.H)({ id: t, typename: e.__typename })
                          );
                        },
                      }));
                  }
                }
                if ('undefined' === typeof c)
                  return {
                    result: c,
                    missing: [{ object: e, fieldName: u, tolerable: !1 }],
                  };
                Object(o.w)(c) && (c = c.json);
                return { result: c };
              })(e, t, n.name.value, Object(o.b)(n, i), a, {
                resultKey: Object(o.E)(n),
                directives: Object(o.i)(n, i),
              });
            return Array.isArray(s.result)
              ? this.combineExecResults(
                  s,
                  this.executeSubSelectedArray({
                    field: n,
                    array: s.result,
                    execContext: r,
                  })
                )
              : n.selectionSet
              ? null == s.result
                ? s
                : this.combineExecResults(
                    s,
                    this.executeSelectionSet({
                      selectionSet: n.selectionSet,
                      rootValue: s.result,
                      execContext: r,
                    })
                  )
              : ($(n, s.result), this.freezeResults, s);
          }),
          (e.prototype.combineExecResults = function () {
            for (var e, t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            return (
              t.forEach(function (t) {
                t.missing && (e = e || []).push.apply(e, t.missing);
              }),
              { result: t.pop().result, missing: e }
            );
          }),
          (e.prototype.executeSubSelectedArray = function (e) {
            var t,
              n = this,
              r = e.field,
              i = e.array,
              a = e.execContext;
            function o(e) {
              return (
                e.missing && (t = t || []).push.apply(t, e.missing), e.result
              );
            }
            return (
              (i = i.map(function (e) {
                return null === e
                  ? null
                  : Array.isArray(e)
                  ? o(
                      n.executeSubSelectedArray({
                        field: r,
                        array: e,
                        execContext: a,
                      })
                    )
                  : r.selectionSet
                  ? o(
                      n.executeSelectionSet({
                        selectionSet: r.selectionSet,
                        rootValue: e,
                        execContext: a,
                      })
                    )
                  : ($(r, e), e);
              })),
              this.freezeResults,
              { result: i, missing: t }
            );
          }),
          e
        );
      })();
      function $(e, t) {
        if (!e.selectionSet && Object(o.u)(t)) throw new B.a(10);
      }
      function Z() {
        return !0;
      }
      var X = (function () {
        function e(e) {
          void 0 === e && (e = Object.create(null)), (this.data = e);
        }
        return (
          (e.prototype.toObject = function () {
            return this.data;
          }),
          (e.prototype.get = function (e) {
            return this.data[e];
          }),
          (e.prototype.set = function (e, t) {
            this.data[e] = t;
          }),
          (e.prototype.delete = function (e) {
            this.data[e] = void 0;
          }),
          (e.prototype.clear = function () {
            this.data = Object.create(null);
          }),
          (e.prototype.replace = function (e) {
            this.data = e || Object.create(null);
          }),
          e
        );
      })();
      var ee = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.type = 'WriteError'), t;
        }
        return Object(a.c)(t, e), t;
      })(Error);
      var te = (function () {
        function e() {}
        return (
          (e.prototype.writeQueryToStore = function (e) {
            var t = e.query,
              n = e.result,
              r = e.store,
              i = void 0 === r ? J() : r,
              a = e.variables,
              o = e.dataIdFromObject,
              s = e.fragmentMatcherFunction;
            return this.writeResultToStore({
              dataId: 'ROOT_QUERY',
              result: n,
              document: t,
              store: i,
              variables: a,
              dataIdFromObject: o,
              fragmentMatcherFunction: s,
            });
          }),
          (e.prototype.writeResultToStore = function (e) {
            var t = e.dataId,
              n = e.result,
              r = e.document,
              i = e.store,
              a = void 0 === i ? J() : i,
              s = e.variables,
              u = e.dataIdFromObject,
              c = e.fragmentMatcherFunction,
              l = Object(o.m)(r);
            try {
              return this.writeSelectionSetToStore({
                result: n,
                dataId: t,
                selectionSet: l.selectionSet,
                context: {
                  store: a,
                  processedData: {},
                  variables: Object(o.c)({}, Object(o.h)(l), s),
                  dataIdFromObject: u,
                  fragmentMap: Object(o.g)(Object(o.j)(r)),
                  fragmentMatcherFunction: c,
                },
              });
            } catch (f) {
              throw (function (e, t) {
                var n = new ee(
                  'Error writing result to store for query:\n ' +
                    JSON.stringify(t)
                );
                return (n.message += '\n' + e.message), (n.stack = e.stack), n;
              })(f, r);
            }
          }),
          (e.prototype.writeSelectionSetToStore = function (e) {
            var t = this,
              n = e.result,
              r = e.dataId,
              i = e.selectionSet,
              a = e.context,
              s = a.variables,
              u = a.store,
              c = a.fragmentMap;
            return (
              i.selections.forEach(function (e) {
                var i;
                if (Object(o.F)(e, s))
                  if (Object(o.t)(e)) {
                    var u = Object(o.E)(e),
                      l = n[u];
                    if ('undefined' !== typeof l)
                      t.writeFieldToStore({
                        dataId: r,
                        value: l,
                        field: e,
                        context: a,
                      });
                    else {
                      var f = !1,
                        d = !1;
                      e.directives &&
                        e.directives.length &&
                        ((f = e.directives.some(function (e) {
                          return e.name && 'defer' === e.name.value;
                        })),
                        (d = e.directives.some(function (e) {
                          return e.name && 'client' === e.name.value;
                        }))),
                        !f && !d && a.fragmentMatcherFunction;
                    }
                  } else {
                    var p = void 0;
                    Object(o.v)(e)
                      ? (p = e)
                      : ((p = (c || {})[e.name.value]), Object(B.b)(p, 3));
                    var h = !0;
                    if (a.fragmentMatcherFunction && p.typeCondition) {
                      var v = r || 'self',
                        y = Object(o.H)({ id: v, typename: void 0 }),
                        m = {
                          store: new X(((i = {}), (i[v] = n), i)),
                          cacheRedirects: {},
                        },
                        b = a.fragmentMatcherFunction(
                          y,
                          p.typeCondition.name.value,
                          m
                        );
                      Object(o.x)(), (h = !!b);
                    }
                    h &&
                      t.writeSelectionSetToStore({
                        result: n,
                        selectionSet: p.selectionSet,
                        dataId: r,
                        context: a,
                      });
                  }
              }),
              u
            );
          }),
          (e.prototype.writeFieldToStore = function (e) {
            var t,
              n,
              r,
              i = e.field,
              s = e.value,
              u = e.dataId,
              c = e.context,
              l = c.variables,
              f = c.dataIdFromObject,
              p = c.store,
              h = Object(o.G)(i, l);
            if (i.selectionSet && null !== s)
              if (Array.isArray(s)) {
                var v = u + '.' + h;
                n = this.processArrayValue(s, v, i.selectionSet, c);
              } else {
                var y = u + '.' + h,
                  m = !0;
                if ((ne(y) || (y = '$' + y), f)) {
                  var b = f(s);
                  Object(B.b)(!b || !ne(b), 4),
                    (b || ('number' === typeof b && 0 === b)) &&
                      ((y = b), (m = !1));
                }
                re(y, i, c.processedData) ||
                  this.writeSelectionSetToStore({
                    dataId: y,
                    result: s,
                    selectionSet: i.selectionSet,
                    context: c,
                  });
                var g = s.__typename;
                n = Object(o.H)({ id: y, typename: g }, m);
                var O = (r = p.get(u)) && r[h];
                if (O !== n && Object(o.u)(O)) {
                  var w = void 0 !== O.typename,
                    j = void 0 !== g,
                    S = w && j && O.typename !== g;
                  Object(B.b)(!m || O.generated || S, 5),
                    Object(B.b)(!w || j, 6),
                    O.generated &&
                      (S
                        ? m || p.delete(O.id)
                        : (function e(t, n, r) {
                            if (t === n) return !1;
                            var i = r.get(t),
                              s = r.get(n),
                              u = !1;
                            Object.keys(i).forEach(function (t) {
                              var n = i[t],
                                a = s[t];
                              Object(o.u)(n) &&
                                ne(n.id) &&
                                Object(o.u)(a) &&
                                !Object(d.a)(n, a) &&
                                e(n.id, a.id, r) &&
                                (u = !0);
                            }),
                              r.delete(t);
                            var c = Object(a.a)(Object(a.a)({}, i), s);
                            if (Object(d.a)(c, s)) return u;
                            return r.set(n, c), !0;
                          })(O.id, n.id, p));
                }
              }
            else
              n =
                null != s && 'object' === typeof s
                  ? { type: 'json', json: s }
                  : s;
            ((r = p.get(u)) && Object(d.a)(n, r[h])) ||
              p.set(u, Object(a.a)(Object(a.a)({}, r), (((t = {})[h] = n), t)));
          }),
          (e.prototype.processArrayValue = function (e, t, n, r) {
            var i = this;
            return e.map(function (e, a) {
              if (null === e) return null;
              var s = t + '.' + a;
              if (Array.isArray(e)) return i.processArrayValue(e, s, n, r);
              var u = !0;
              if (r.dataIdFromObject) {
                var c = r.dataIdFromObject(e);
                c && ((s = c), (u = !1));
              }
              return (
                re(s, n, r.processedData) ||
                  i.writeSelectionSetToStore({
                    dataId: s,
                    result: e,
                    selectionSet: n,
                    context: r,
                  }),
                Object(o.H)({ id: s, typename: e.__typename }, u)
              );
            });
          }),
          e
        );
      })();
      function ne(e) {
        return '$' === e[0];
      }
      function re(e, t, n) {
        if (!n) return !1;
        if (n[e]) {
          if (n[e].indexOf(t) >= 0) return !0;
          n[e].push(t);
        } else n[e] = [t];
        return !1;
      }
      var ie = {
        fragmentMatcher: new G(),
        dataIdFromObject: function (e) {
          if (e.__typename) {
            if (void 0 !== e.id) return e.__typename + ':' + e.id;
            if (void 0 !== e._id) return e.__typename + ':' + e._id;
          }
          return null;
        },
        addTypename: !0,
        resultCaching: !0,
        freezeResults: !1,
      };
      var ae = Object.prototype.hasOwnProperty,
        oe = (function (e) {
          function t(t, n, r) {
            var i = e.call(this, Object.create(null)) || this;
            return (i.optimisticId = t), (i.parent = n), (i.transaction = r), i;
          }
          return (
            Object(a.c)(t, e),
            (t.prototype.toObject = function () {
              return Object(a.a)(
                Object(a.a)({}, this.parent.toObject()),
                this.data
              );
            }),
            (t.prototype.get = function (e) {
              return ae.call(this.data, e) ? this.data[e] : this.parent.get(e);
            }),
            t
          );
        })(X),
        se = (function (e) {
          function t(t) {
            void 0 === t && (t = {});
            var n = e.call(this) || this;
            (n.watches = new Set()),
              (n.typenameDocumentCache = new Map()),
              (n.cacheKeyRoot = new N(o.e)),
              (n.silenceBroadcast = !1),
              (n.config = Object(a.a)(Object(a.a)({}, ie), t)),
              n.config.customResolvers &&
                (n.config.cacheRedirects = n.config.customResolvers),
              n.config.cacheResolvers &&
                (n.config.cacheRedirects = n.config.cacheResolvers),
              (n.addTypename = !!n.config.addTypename),
              (n.data = n.config.resultCaching ? new L() : new X()),
              (n.optimisticData = n.data),
              (n.storeWriter = new te()),
              (n.storeReader = new Y({
                cacheKeyRoot: n.cacheKeyRoot,
                freezeResults: t.freezeResults,
              }));
            var r = n,
              i = r.maybeBroadcastWatch;
            return (
              (n.maybeBroadcastWatch = K(
                function (e) {
                  return i.call(n, e);
                },
                {
                  makeCacheKey: function (e) {
                    if (!e.optimistic && !e.previousResult)
                      return r.data instanceof L
                        ? r.cacheKeyRoot.lookup(
                            e.query,
                            JSON.stringify(e.variables)
                          )
                        : void 0;
                  },
                }
              )),
              n
            );
          }
          return (
            Object(a.c)(t, e),
            (t.prototype.restore = function (e) {
              return e && this.data.replace(e), this;
            }),
            (t.prototype.extract = function (e) {
              return (
                void 0 === e && (e = !1),
                (e ? this.optimisticData : this.data).toObject()
              );
            }),
            (t.prototype.read = function (e) {
              if (
                'string' === typeof e.rootId &&
                'undefined' === typeof this.data.get(e.rootId)
              )
                return null;
              var t = this.config.fragmentMatcher,
                n = t && t.match;
              return (
                this.storeReader.readQueryFromStore({
                  store: e.optimistic ? this.optimisticData : this.data,
                  query: this.transformDocument(e.query),
                  variables: e.variables,
                  rootId: e.rootId,
                  fragmentMatcherFunction: n,
                  previousResult: e.previousResult,
                  config: this.config,
                }) || null
              );
            }),
            (t.prototype.write = function (e) {
              var t = this.config.fragmentMatcher,
                n = t && t.match;
              this.storeWriter.writeResultToStore({
                dataId: e.dataId,
                result: e.result,
                variables: e.variables,
                document: this.transformDocument(e.query),
                store: this.data,
                dataIdFromObject: this.config.dataIdFromObject,
                fragmentMatcherFunction: n,
              }),
                this.broadcastWatches();
            }),
            (t.prototype.diff = function (e) {
              var t = this.config.fragmentMatcher,
                n = t && t.match;
              return this.storeReader.diffQueryAgainstStore({
                store: e.optimistic ? this.optimisticData : this.data,
                query: this.transformDocument(e.query),
                variables: e.variables,
                returnPartialData: e.returnPartialData,
                previousResult: e.previousResult,
                fragmentMatcherFunction: n,
                config: this.config,
              });
            }),
            (t.prototype.watch = function (e) {
              var t = this;
              return (
                this.watches.add(e),
                function () {
                  t.watches.delete(e);
                }
              );
            }),
            (t.prototype.evict = function (e) {
              throw new B.a(7);
            }),
            (t.prototype.reset = function () {
              return (
                this.data.clear(), this.broadcastWatches(), Promise.resolve()
              );
            }),
            (t.prototype.removeOptimistic = function (e) {
              for (
                var t = [], n = 0, r = this.optimisticData;
                r instanceof oe;

              )
                r.optimisticId === e ? ++n : t.push(r), (r = r.parent);
              if (n > 0) {
                for (this.optimisticData = r; t.length > 0; ) {
                  var i = t.pop();
                  this.performTransaction(i.transaction, i.optimisticId);
                }
                this.broadcastWatches();
              }
            }),
            (t.prototype.performTransaction = function (e, t) {
              var n = this.data,
                r = this.silenceBroadcast;
              (this.silenceBroadcast = !0),
                'string' === typeof t &&
                  (this.data = this.optimisticData = new oe(
                    t,
                    this.optimisticData,
                    e
                  ));
              try {
                e(this);
              } finally {
                (this.silenceBroadcast = r), (this.data = n);
              }
              this.broadcastWatches();
            }),
            (t.prototype.recordOptimisticTransaction = function (e, t) {
              return this.performTransaction(e, t);
            }),
            (t.prototype.transformDocument = function (e) {
              if (this.addTypename) {
                var t = this.typenameDocumentCache.get(e);
                return (
                  t ||
                    ((t = Object(o.a)(e)),
                    this.typenameDocumentCache.set(e, t),
                    this.typenameDocumentCache.set(t, t)),
                  t
                );
              }
              return e;
            }),
            (t.prototype.broadcastWatches = function () {
              var e = this;
              this.silenceBroadcast ||
                this.watches.forEach(function (t) {
                  return e.maybeBroadcastWatch(t);
                });
            }),
            (t.prototype.maybeBroadcastWatch = function (e) {
              e.callback(
                this.diff({
                  query: e.query,
                  variables: e.variables,
                  previousResult: e.previousResult && e.previousResult(),
                  optimistic: e.optimistic,
                })
              );
            }),
            t
          );
        })(f),
        ue = n('3U3H'),
        ce = n('lTsX'),
        le = n('MZHy'),
        fe = n('n4xo');
      function de(e) {
        return Object(le.b)(e, { leave: pe });
      }
      var pe = {
        Name: function (e) {
          return e.value;
        },
        Variable: function (e) {
          return '$' + e.name;
        },
        Document: function (e) {
          return ve(e.definitions, '\n\n') + '\n';
        },
        OperationDefinition: function (e) {
          var t = e.operation,
            n = e.name,
            r = me('(', ve(e.variableDefinitions, ', '), ')'),
            i = ve(e.directives, ' '),
            a = e.selectionSet;
          return n || i || r || 'query' !== t
            ? ve([t, ve([n, r]), i, a], ' ')
            : a;
        },
        VariableDefinition: function (e) {
          var t = e.variable,
            n = e.type,
            r = e.defaultValue,
            i = e.directives;
          return t + ': ' + n + me(' = ', r) + me(' ', ve(i, ' '));
        },
        SelectionSet: function (e) {
          return ye(e.selections);
        },
        Field: function (e) {
          var t = e.alias,
            n = e.name,
            r = e.arguments,
            i = e.directives,
            a = e.selectionSet;
          return ve(
            [me('', t, ': ') + n + me('(', ve(r, ', '), ')'), ve(i, ' '), a],
            ' '
          );
        },
        Argument: function (e) {
          return e.name + ': ' + e.value;
        },
        FragmentSpread: function (e) {
          return '...' + e.name + me(' ', ve(e.directives, ' '));
        },
        InlineFragment: function (e) {
          var t = e.typeCondition,
            n = e.directives,
            r = e.selectionSet;
          return ve(['...', me('on ', t), ve(n, ' '), r], ' ');
        },
        FragmentDefinition: function (e) {
          var t = e.name,
            n = e.typeCondition,
            r = e.variableDefinitions,
            i = e.directives,
            a = e.selectionSet;
          return (
            'fragment '.concat(t).concat(me('(', ve(r, ', '), ')'), ' ') +
            'on '.concat(n, ' ').concat(me('', ve(i, ' '), ' ')) +
            a
          );
        },
        IntValue: function (e) {
          return e.value;
        },
        FloatValue: function (e) {
          return e.value;
        },
        StringValue: function (e, t) {
          var n = e.value;
          return e.block
            ? Object(fe.b)(n, 'description' === t ? '' : '  ')
            : JSON.stringify(n);
        },
        BooleanValue: function (e) {
          return e.value ? 'true' : 'false';
        },
        NullValue: function () {
          return 'null';
        },
        EnumValue: function (e) {
          return e.value;
        },
        ListValue: function (e) {
          return '[' + ve(e.values, ', ') + ']';
        },
        ObjectValue: function (e) {
          return '{' + ve(e.fields, ', ') + '}';
        },
        ObjectField: function (e) {
          return e.name + ': ' + e.value;
        },
        Directive: function (e) {
          return '@' + e.name + me('(', ve(e.arguments, ', '), ')');
        },
        NamedType: function (e) {
          return e.name;
        },
        ListType: function (e) {
          return '[' + e.type + ']';
        },
        NonNullType: function (e) {
          return e.type + '!';
        },
        SchemaDefinition: he(function (e) {
          var t = e.directives,
            n = e.operationTypes;
          return ve(['schema', ve(t, ' '), ye(n)], ' ');
        }),
        OperationTypeDefinition: function (e) {
          return e.operation + ': ' + e.type;
        },
        ScalarTypeDefinition: he(function (e) {
          return ve(['scalar', e.name, ve(e.directives, ' ')], ' ');
        }),
        ObjectTypeDefinition: he(function (e) {
          var t = e.name,
            n = e.interfaces,
            r = e.directives,
            i = e.fields;
          return ve(
            ['type', t, me('implements ', ve(n, ' & ')), ve(r, ' '), ye(i)],
            ' '
          );
        }),
        FieldDefinition: he(function (e) {
          var t = e.name,
            n = e.arguments,
            r = e.type,
            i = e.directives;
          return (
            t +
            (Oe(n)
              ? me('(\n', be(ve(n, '\n')), '\n)')
              : me('(', ve(n, ', '), ')')) +
            ': ' +
            r +
            me(' ', ve(i, ' '))
          );
        }),
        InputValueDefinition: he(function (e) {
          var t = e.name,
            n = e.type,
            r = e.defaultValue,
            i = e.directives;
          return ve([t + ': ' + n, me('= ', r), ve(i, ' ')], ' ');
        }),
        InterfaceTypeDefinition: he(function (e) {
          var t = e.name,
            n = e.interfaces,
            r = e.directives,
            i = e.fields;
          return ve(
            [
              'interface',
              t,
              me('implements ', ve(n, ' & ')),
              ve(r, ' '),
              ye(i),
            ],
            ' '
          );
        }),
        UnionTypeDefinition: he(function (e) {
          var t = e.name,
            n = e.directives,
            r = e.types;
          return ve(
            [
              'union',
              t,
              ve(n, ' '),
              r && 0 !== r.length ? '= ' + ve(r, ' | ') : '',
            ],
            ' '
          );
        }),
        EnumTypeDefinition: he(function (e) {
          var t = e.name,
            n = e.directives,
            r = e.values;
          return ve(['enum', t, ve(n, ' '), ye(r)], ' ');
        }),
        EnumValueDefinition: he(function (e) {
          return ve([e.name, ve(e.directives, ' ')], ' ');
        }),
        InputObjectTypeDefinition: he(function (e) {
          var t = e.name,
            n = e.directives,
            r = e.fields;
          return ve(['input', t, ve(n, ' '), ye(r)], ' ');
        }),
        DirectiveDefinition: he(function (e) {
          var t = e.name,
            n = e.arguments,
            r = e.repeatable,
            i = e.locations;
          return (
            'directive @' +
            t +
            (Oe(n)
              ? me('(\n', be(ve(n, '\n')), '\n)')
              : me('(', ve(n, ', '), ')')) +
            (r ? ' repeatable' : '') +
            ' on ' +
            ve(i, ' | ')
          );
        }),
        SchemaExtension: function (e) {
          var t = e.directives,
            n = e.operationTypes;
          return ve(['extend schema', ve(t, ' '), ye(n)], ' ');
        },
        ScalarTypeExtension: function (e) {
          return ve(['extend scalar', e.name, ve(e.directives, ' ')], ' ');
        },
        ObjectTypeExtension: function (e) {
          var t = e.name,
            n = e.interfaces,
            r = e.directives,
            i = e.fields;
          return ve(
            [
              'extend type',
              t,
              me('implements ', ve(n, ' & ')),
              ve(r, ' '),
              ye(i),
            ],
            ' '
          );
        },
        InterfaceTypeExtension: function (e) {
          var t = e.name,
            n = e.interfaces,
            r = e.directives,
            i = e.fields;
          return ve(
            [
              'extend interface',
              t,
              me('implements ', ve(n, ' & ')),
              ve(r, ' '),
              ye(i),
            ],
            ' '
          );
        },
        UnionTypeExtension: function (e) {
          var t = e.name,
            n = e.directives,
            r = e.types;
          return ve(
            [
              'extend union',
              t,
              ve(n, ' '),
              r && 0 !== r.length ? '= ' + ve(r, ' | ') : '',
            ],
            ' '
          );
        },
        EnumTypeExtension: function (e) {
          var t = e.name,
            n = e.directives,
            r = e.values;
          return ve(['extend enum', t, ve(n, ' '), ye(r)], ' ');
        },
        InputObjectTypeExtension: function (e) {
          var t = e.name,
            n = e.directives,
            r = e.fields;
          return ve(['extend input', t, ve(n, ' '), ye(r)], ' ');
        },
      };
      function he(e) {
        return function (t) {
          return ve([t.description, e(t)], '\n');
        };
      }
      function ve(e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
        return null !==
          (t =
            null === e || void 0 === e
              ? void 0
              : e
                  .filter(function (e) {
                    return e;
                  })
                  .join(n)) && void 0 !== t
          ? t
          : '';
      }
      function ye(e) {
        return e && 0 !== e.length ? '{\n' + be(ve(e, '\n')) + '\n}' : '';
      }
      function me(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '';
        return t ? e + t + n : '';
      }
      function be(e) {
        return e && '  ' + e.replace(/\n/g, '\n  ');
      }
      function ge(e) {
        return -1 !== e.indexOf('\n');
      }
      function Oe(e) {
        return e && e.some(ge);
      }
      var we = {
          http: { includeQuery: !0, includeExtensions: !1 },
          headers: { accept: '*/*', 'content-type': 'application/json' },
          options: { method: 'POST' },
        },
        je = function (e, t, n) {
          var r = new Error(n);
          throw (
            ((r.name = 'ServerError'),
            (r.response = e),
            (r.statusCode = e.status),
            (r.result = t),
            r)
          );
        },
        Se = function (e, t) {
          var n;
          try {
            n = JSON.stringify(e);
          } catch (i) {
            var r = new B.a(2);
            throw ((r.parseError = i), r);
          }
          return n;
        },
        xe = function (e) {
          void 0 === e && (e = {});
          var t = e.uri,
            n = void 0 === t ? '/graphql' : t,
            r = e.fetch,
            i = e.includeExtensions,
            o = e.useGETForQueries,
            s = Object(a.e)(e, [
              'uri',
              'fetch',
              'includeExtensions',
              'useGETForQueries',
            ]);
          !(function (e) {
            if (!e && 'undefined' === typeof fetch) {
              throw ('undefined' === typeof window && 'node-fetch', new B.a(1));
            }
          })(r),
            r || (r = fetch);
          var u = {
            http: { includeExtensions: i },
            options: s.fetchOptions,
            credentials: s.credentials,
            headers: s.headers,
          };
          return new ue.a(function (e) {
            var t = (function (e, t) {
                var n = e.getContext().uri;
                return n || ('function' === typeof t ? t(e) : t || '/graphql');
              })(e, n),
              i = e.getContext(),
              s = {};
            if (i.clientAwareness) {
              var c = i.clientAwareness,
                l = c.name,
                f = c.version;
              l && (s['apollographql-client-name'] = l),
                f && (s['apollographql-client-version'] = f);
            }
            var d,
              p = Object(a.a)({}, s, i.headers),
              h = {
                http: i.http,
                options: i.fetchOptions,
                credentials: i.credentials,
                headers: p,
              },
              v = (function (e, t) {
                for (var n = [], r = 2; r < arguments.length; r++)
                  n[r - 2] = arguments[r];
                var i = Object(a.a)({}, t.options, {
                    headers: t.headers,
                    credentials: t.credentials,
                  }),
                  o = t.http;
                n.forEach(function (e) {
                  (i = Object(a.a)({}, i, e.options, {
                    headers: Object(a.a)({}, i.headers, e.headers),
                  })),
                    e.credentials && (i.credentials = e.credentials),
                    (o = Object(a.a)({}, o, e.http));
                });
                var s = e.operationName,
                  u = e.extensions,
                  c = e.variables,
                  l = e.query,
                  f = { operationName: s, variables: c };
                return (
                  o.includeExtensions && (f.extensions = u),
                  o.includeQuery && (f.query = de(l)),
                  { options: i, body: f }
                );
              })(e, we, u, h),
              y = v.options,
              m = v.body;
            if (!y.signal) {
              var b = (function () {
                  if ('undefined' === typeof AbortController)
                    return { controller: !1, signal: !1 };
                  var e = new AbortController();
                  return { controller: e, signal: e.signal };
                })(),
                g = b.controller,
                O = b.signal;
              (d = g) && (y.signal = O);
            }
            if (
              (o &&
                !e.query.definitions.some(function (e) {
                  return (
                    'OperationDefinition' === e.kind &&
                    'mutation' === e.operation
                  );
                }) &&
                (y.method = 'GET'),
              'GET' === y.method)
            ) {
              var w = (function (e, t) {
                  var n = [],
                    r = function (e, t) {
                      n.push(e + '=' + encodeURIComponent(t));
                    };
                  'query' in t && r('query', t.query);
                  t.operationName && r('operationName', t.operationName);
                  if (t.variables) {
                    var i = void 0;
                    try {
                      i = Se(t.variables, 'Variables map');
                    } catch (S) {
                      return { parseError: S };
                    }
                    r('variables', i);
                  }
                  if (t.extensions) {
                    var a = void 0;
                    try {
                      a = Se(t.extensions, 'Extensions map');
                    } catch (S) {
                      return { parseError: S };
                    }
                    r('extensions', a);
                  }
                  var o = '',
                    s = e,
                    u = e.indexOf('#');
                  -1 !== u && ((o = e.substr(u)), (s = e.substr(0, u)));
                  var c = -1 === s.indexOf('?') ? '?' : '&';
                  return { newURI: s + c + n.join('&') + o };
                })(t, m),
                j = w.newURI,
                S = w.parseError;
              if (S) return Object(ue.c)(S);
              t = j;
            } else
              try {
                y.body = Se(m, 'Payload');
              } catch (S) {
                return Object(ue.c)(S);
              }
            return new ce.a(function (n) {
              var i;
              return (
                r(t, y)
                  .then(function (t) {
                    return e.setContext({ response: t }), t;
                  })
                  .then(
                    ((i = e),
                    function (e) {
                      return e
                        .text()
                        .then(function (t) {
                          try {
                            return JSON.parse(t);
                          } catch (r) {
                            var n = r;
                            return (
                              (n.name = 'ServerParseError'),
                              (n.response = e),
                              (n.statusCode = e.status),
                              (n.bodyText = t),
                              Promise.reject(n)
                            );
                          }
                        })
                        .then(function (t) {
                          return (
                            e.status >= 300 &&
                              je(
                                e,
                                t,
                                'Response not successful: Received status code ' +
                                  e.status
                              ),
                            Array.isArray(t) ||
                              t.hasOwnProperty('data') ||
                              t.hasOwnProperty('errors') ||
                              je(
                                e,
                                t,
                                "Server response was missing for query '" +
                                  (Array.isArray(i)
                                    ? i.map(function (e) {
                                        return e.operationName;
                                      })
                                    : i.operationName) +
                                  "'."
                              ),
                            t
                          );
                        });
                    })
                  )
                  .then(function (e) {
                    return n.next(e), n.complete(), e;
                  })
                  .catch(function (e) {
                    'AbortError' !== e.name &&
                      (e.result &&
                        e.result.errors &&
                        e.result.data &&
                        n.next(e.result),
                      n.error(e));
                  }),
                function () {
                  d && d.abort();
                }
              );
            });
          });
        };
      var ke,
        Ee = (function (e) {
          function t(t) {
            return e.call(this, xe(t).request) || this;
          }
          return Object(a.c)(t, e), t;
        })(ue.a);
      function Re() {
        var e,
          t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null,
          n =
            null !== (e = ke) && void 0 !== e
              ? e
              : (function () {
                  var e = null;
                  return (
                    (e = localStorage.getItem('access_token')),
                    new i.a({
                      ssrMode: !1,
                      link: new Ee({
                        uri: 'http://api.mahdifashion.com/api',
                        credentials: 'same-origin',
                        headers: { 'x-access-token': e || '' },
                        onError: function (e) {
                          var t = e.networkError,
                            n = e.graphQLErrors;
                          console.log('graphQLErrors', n),
                            console.log('networkError', t);
                        },
                      }),
                      cache: new se(),
                    })
                  );
                })();
        return t && n.cache.restore(t), ke || (ke = n), n;
      }
      function De(e) {
        return Object(r.useMemo)(
          function () {
            return Re(e);
          },
          [e]
        );
      }
      console.log('http://api.mahdifashion.com/api');
    },
    jvFD: function (e, t, n) {
      e.exports = n('KeDb');
    },
  },
]);