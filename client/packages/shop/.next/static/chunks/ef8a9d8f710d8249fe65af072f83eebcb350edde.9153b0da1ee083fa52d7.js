(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    '1Pcy': function (e, t) {
      e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      };
    },
    '97Jx': function (e, t) {
      function n() {
        return (
          (e.exports = n =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            }),
          n.apply(this, arguments)
        );
      }
      e.exports = n;
    },
    BrGu: function (e, t, n) {
      'use strict';
      function i(e) {
        return e && 'object' === typeof e && 'default' in e ? e.default : e;
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = i(n('LdEA')),
        o = i(n('W/Kd')),
        a = i(n('1Pcy')),
        s = i(n('97Jx')),
        l = i(n('ERkP')),
        u = i(n('7nmT')),
        c = void 0,
        d = void 0,
        p = [],
        f = function (e) {
          return (
            'undefined' !== typeof window && window.requestAnimationFrame(e)
          );
        },
        h = function (e) {
          return (
            'undefined' !== typeof window && window.cancelAnimationFrame(e)
          );
        },
        g = void 0,
        m = function () {
          return Date.now();
        },
        v = void 0,
        y = void 0,
        w = function (e, t) {
          return (d = { fn: e, transform: t });
        },
        b = function (e) {
          return (p = e);
        },
        x = function (e) {
          return (c = e);
        },
        S = function (e) {
          return (g = e);
        },
        E = function (e) {
          return (v = e);
        },
        O = function (e) {
          return (y = e);
        },
        z = Object.freeze({
          get bugfixes() {
            return c;
          },
          get applyAnimatedValues() {
            return d;
          },
          get colorNames() {
            return p;
          },
          get requestFrame() {
            return f;
          },
          get cancelFrame() {
            return h;
          },
          get interpolation() {
            return g;
          },
          get now() {
            return m;
          },
          get defaultElement() {
            return v;
          },
          get createAnimatedStyle() {
            return y;
          },
          injectApplyAnimatedValues: w,
          injectColorNames: b,
          injectBugfixes: x,
          injectInterpolation: S,
          injectFrame: function (e, t) {
            var n;
            return (f = (n = [e, t])[0]), (h = n[1]), n;
          },
          injectNow: function (e) {
            return (m = e);
          },
          injectDefaultElement: E,
          injectCreateAnimatedStyle: O,
        }),
        k = (function () {
          function e() {}
          var t = e.prototype;
          return (
            (t.attach = function () {}),
            (t.detach = function () {}),
            (t.getValue = function () {}),
            (t.getAnimatedValue = function () {
              return this.getValue();
            }),
            (t.addChild = function (e) {}),
            (t.removeChild = function (e) {}),
            (t.getChildren = function () {
              return [];
            }),
            e
          );
        })(),
        R = function (e) {
          return Object.keys(e).map(function (t) {
            return e[t];
          });
        },
        P = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, i = new Array(n), r = 0;
              r < n;
              r++
            )
              i[r] = arguments[r];
            return (
              ((t = e.call.apply(e, [this].concat(i)) || this).children = []),
              (t.getChildren = function () {
                return t.children;
              }),
              (t.getPayload = function (e) {
                return (
                  void 0 === e && (e = void 0),
                  void 0 !== e && t.payload ? t.payload[e] : t.payload || a(t)
                );
              }),
              t
            );
          }
          o(t, e);
          var n = t.prototype;
          return (
            (n.addChild = function (e) {
              0 === this.children.length && this.attach(),
                this.children.push(e);
            }),
            (n.removeChild = function (e) {
              var t = this.children.indexOf(e);
              this.children.splice(t, 1),
                0 === this.children.length && this.detach();
            }),
            t
          );
        })(k),
        C = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, i = new Array(n), r = 0;
              r < n;
              r++
            )
              i[r] = arguments[r];
            return (
              ((t = e.call.apply(e, [this].concat(i)) || this).payload = []),
              (t.getAnimatedValue = function () {
                return t.getValue();
              }),
              (t.attach = function () {
                return t.payload.forEach(function (e) {
                  return e instanceof k && e.addChild(a(t));
                });
              }),
              (t.detach = function () {
                return t.payload.forEach(function (e) {
                  return e instanceof k && e.removeChild(a(t));
                });
              }),
              t
            );
          }
          return o(t, e), t;
        })(P),
        N = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, i = new Array(n), r = 0;
              r < n;
              r++
            )
              i[r] = arguments[r];
            return (
              ((t = e.call.apply(e, [this].concat(i)) || this).payload = {}),
              (t.getAnimatedValue = function () {
                return t.getValue(!0);
              }),
              (t.attach = function () {
                return R(t.payload).forEach(function (e) {
                  return e instanceof k && e.addChild(a(t));
                });
              }),
              (t.detach = function () {
                return R(t.payload).forEach(function (e) {
                  return e instanceof k && e.removeChild(a(t));
                });
              }),
              t
            );
          }
          return (
            o(t, e),
            (t.prototype.getValue = function (e) {
              void 0 === e && (e = !1);
              var t = {};
              for (var n in this.payload) {
                var i = this.payload[n];
                (!e || i instanceof k) &&
                  (t[n] =
                    i instanceof k
                      ? i[e ? 'getAnimatedValue' : 'getValue']()
                      : i);
              }
              return t;
            }),
            t
          );
        })(P),
        A = (function (e) {
          function t(t) {
            var n;
            return (
              (n = e.call(this) || this),
              !(t = t || {}).transform ||
                t.transform instanceof k ||
                (t = d.transform(t)),
              (n.payload = t),
              n
            );
          }
          return o(t, e), t;
        })(N),
        j = {
          transparent: 0,
          aliceblue: 4042850303,
          antiquewhite: 4209760255,
          aqua: 16777215,
          aquamarine: 2147472639,
          azure: 4043309055,
          beige: 4126530815,
          bisque: 4293182719,
          black: 255,
          blanchedalmond: 4293643775,
          blue: 65535,
          blueviolet: 2318131967,
          brown: 2771004159,
          burlywood: 3736635391,
          burntsienna: 3934150143,
          cadetblue: 1604231423,
          chartreuse: 2147418367,
          chocolate: 3530104575,
          coral: 4286533887,
          cornflowerblue: 1687547391,
          cornsilk: 4294499583,
          crimson: 3692313855,
          cyan: 16777215,
          darkblue: 35839,
          darkcyan: 9145343,
          darkgoldenrod: 3095792639,
          darkgray: 2846468607,
          darkgreen: 6553855,
          darkgrey: 2846468607,
          darkkhaki: 3182914559,
          darkmagenta: 2332068863,
          darkolivegreen: 1433087999,
          darkorange: 4287365375,
          darkorchid: 2570243327,
          darkred: 2332033279,
          darksalmon: 3918953215,
          darkseagreen: 2411499519,
          darkslateblue: 1211993087,
          darkslategray: 793726975,
          darkslategrey: 793726975,
          darkturquoise: 13554175,
          darkviolet: 2483082239,
          deeppink: 4279538687,
          deepskyblue: 12582911,
          dimgray: 1768516095,
          dimgrey: 1768516095,
          dodgerblue: 512819199,
          firebrick: 2988581631,
          floralwhite: 4294635775,
          forestgreen: 579543807,
          fuchsia: 4278255615,
          gainsboro: 3705462015,
          ghostwhite: 4177068031,
          gold: 4292280575,
          goldenrod: 3668254975,
          gray: 2155905279,
          green: 8388863,
          greenyellow: 2919182335,
          grey: 2155905279,
          honeydew: 4043305215,
          hotpink: 4285117695,
          indianred: 3445382399,
          indigo: 1258324735,
          ivory: 4294963455,
          khaki: 4041641215,
          lavender: 3873897215,
          lavenderblush: 4293981695,
          lawngreen: 2096890111,
          lemonchiffon: 4294626815,
          lightblue: 2916673279,
          lightcoral: 4034953471,
          lightcyan: 3774873599,
          lightgoldenrodyellow: 4210742015,
          lightgray: 3553874943,
          lightgreen: 2431553791,
          lightgrey: 3553874943,
          lightpink: 4290167295,
          lightsalmon: 4288707327,
          lightseagreen: 548580095,
          lightskyblue: 2278488831,
          lightslategray: 2005441023,
          lightslategrey: 2005441023,
          lightsteelblue: 2965692159,
          lightyellow: 4294959359,
          lime: 16711935,
          limegreen: 852308735,
          linen: 4210091775,
          magenta: 4278255615,
          maroon: 2147483903,
          mediumaquamarine: 1724754687,
          mediumblue: 52735,
          mediumorchid: 3126187007,
          mediumpurple: 2473647103,
          mediumseagreen: 1018393087,
          mediumslateblue: 2070474495,
          mediumspringgreen: 16423679,
          mediumturquoise: 1221709055,
          mediumvioletred: 3340076543,
          midnightblue: 421097727,
          mintcream: 4127193855,
          mistyrose: 4293190143,
          moccasin: 4293178879,
          navajowhite: 4292783615,
          navy: 33023,
          oldlace: 4260751103,
          olive: 2155872511,
          olivedrab: 1804477439,
          orange: 4289003775,
          orangered: 4282712319,
          orchid: 3664828159,
          palegoldenrod: 4008225535,
          palegreen: 2566625535,
          paleturquoise: 2951671551,
          palevioletred: 3681588223,
          papayawhip: 4293907967,
          peachpuff: 4292524543,
          peru: 3448061951,
          pink: 4290825215,
          plum: 3718307327,
          powderblue: 2967529215,
          purple: 2147516671,
          rebeccapurple: 1714657791,
          red: 4278190335,
          rosybrown: 3163525119,
          royalblue: 1097458175,
          saddlebrown: 2336560127,
          salmon: 4202722047,
          sandybrown: 4104413439,
          seagreen: 780883967,
          seashell: 4294307583,
          sienna: 2689740287,
          silver: 3233857791,
          skyblue: 2278484991,
          slateblue: 1784335871,
          slategray: 1887473919,
          slategrey: 1887473919,
          snow: 4294638335,
          springgreen: 16744447,
          steelblue: 1182971135,
          tan: 3535047935,
          teal: 8421631,
          thistle: 3636451583,
          tomato: 4284696575,
          turquoise: 1088475391,
          violet: 4001558271,
          wheat: 4125012991,
          white: 4294967295,
          whitesmoke: 4126537215,
          yellow: 4294902015,
          yellowgreen: 2597139199,
        },
        T = (function () {
          function e() {}
          return (
            (e.create = function (t, n, i) {
              if ('function' === typeof t) return t;
              if (g && t.output && 'string' === typeof t.output[0]) return g(t);
              if (Array.isArray(t))
                return e.create({
                  range: t,
                  output: n,
                  extrapolate: i || 'extend',
                });
              var r = t.output,
                o = t.range || [0, 1],
                a =
                  t.easing ||
                  function (e) {
                    return e;
                  },
                s = 'extend',
                l = t.map;
              void 0 !== t.extrapolateLeft
                ? (s = t.extrapolateLeft)
                : void 0 !== t.extrapolate && (s = t.extrapolate);
              var u = 'extend';
              return (
                void 0 !== t.extrapolateRight
                  ? (u = t.extrapolateRight)
                  : void 0 !== t.extrapolate && (u = t.extrapolate),
                function (e) {
                  var t = (function (e, t) {
                    for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
                    return n - 1;
                  })(e, o);
                  return (function (e, t, n, i, r, o, a, s, l) {
                    var u = l ? l(e) : e;
                    if (u < t) {
                      if ('identity' === a) return u;
                      'clamp' === a && (u = t);
                    }
                    if (u > n) {
                      if ('identity' === s) return u;
                      'clamp' === s && (u = n);
                    }
                    if (i === r) return i;
                    if (t === n) return e <= t ? i : r;
                    t === -1 / 0
                      ? (u = -u)
                      : n === 1 / 0
                      ? (u -= t)
                      : (u = (u - t) / (n - t));
                    (u = o(u)),
                      i === -1 / 0
                        ? (u = -u)
                        : r === 1 / 0
                        ? (u += i)
                        : (u = u * (r - i) + i);
                    return u;
                  })(e, o[t], o[t + 1], r[t], r[t + 1], a, s, u, l);
                }
              );
            }),
            e
          );
        })();
      var M = '[-+]?\\d*\\.?\\d+',
        D = M + '%';
      function W() {
        return (
          '\\(\\s*(' +
          Array.prototype.slice.call(arguments).join(')\\s*,\\s*(') +
          ')\\s*\\)'
        );
      }
      var _ = new RegExp('rgb' + W(M, M, M)),
        V = new RegExp('rgba' + W(M, M, M, M)),
        L = new RegExp('hsl' + W(M, D, D)),
        H = new RegExp('hsla' + W(M, D, D, M)),
        F = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        I = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        B = /^#([0-9a-fA-F]{6})$/,
        U = /^#([0-9a-fA-F]{8})$/;
      function q(e, t, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? e + 6 * (t - e) * n
            : n < 0.5
            ? t
            : n < 2 / 3
            ? e + (t - e) * (2 / 3 - n) * 6
            : e
        );
      }
      function G(e, t, n) {
        var i = n < 0.5 ? n * (1 + t) : n + t - n * t,
          r = 2 * n - i,
          o = q(r, i, e + 1 / 3),
          a = q(r, i, e),
          s = q(r, i, e - 1 / 3);
        return (
          (Math.round(255 * o) << 24) |
          (Math.round(255 * a) << 16) |
          (Math.round(255 * s) << 8)
        );
      }
      function X(e) {
        var t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t;
      }
      function Y(e) {
        return (((parseFloat(e) % 360) + 360) % 360) / 360;
      }
      function K(e) {
        var t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
      }
      function $(e) {
        var t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100;
      }
      function J(e) {
        var t = (function (e) {
          var t;
          return 'number' === typeof e
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
              ? e
              : null
            : (t = B.exec(e))
            ? parseInt(t[1] + 'ff', 16) >>> 0
            : j.hasOwnProperty(e)
            ? j[e]
            : (t = _.exec(e))
            ? ((X(t[1]) << 24) | (X(t[2]) << 16) | (X(t[3]) << 8) | 255) >>> 0
            : (t = V.exec(e))
            ? ((X(t[1]) << 24) | (X(t[2]) << 16) | (X(t[3]) << 8) | K(t[4])) >>>
              0
            : (t = F.exec(e))
            ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
            : (t = U.exec(e))
            ? parseInt(t[1], 16) >>> 0
            : (t = I.exec(e))
            ? parseInt(
                t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4],
                16
              ) >>> 0
            : (t = L.exec(e))
            ? (255 | G(Y(t[1]), $(t[2]), $(t[3]))) >>> 0
            : (t = H.exec(e))
            ? (G(Y(t[1]), $(t[2]), $(t[3])) | K(t[4])) >>> 0
            : null;
        })(e);
        return null === t
          ? e
          : 'rgba(' +
              ((4278190080 & (t = t || 0)) >>> 24) +
              ', ' +
              ((16711680 & t) >>> 16) +
              ', ' +
              ((65280 & t) >>> 8) +
              ', ' +
              (255 & t) / 255 +
              ')';
      }
      var Z = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Q = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        ee = new RegExp('(' + Object.keys(j).join('|') + ')', 'g');
      var te = (function (e) {
        function t(n, i, r) {
          var o;
          return (
            ((o = e.call(this) || this).getValue = function () {
              var e;
              return (e = o).calc.apply(
                e,
                o.payload.map(function (e) {
                  return e.getValue();
                })
              );
            }),
            (o.updateConfig = function (e, t) {
              return (o.calc = T.create(e, t));
            }),
            (o.interpolate = function (e, n) {
              return new t(a(o), e, n);
            }),
            (o.payload =
              n instanceof C && !n.updateConfig
                ? n.payload
                : Array.isArray(n)
                ? n
                : [n]),
            (o.calc = T.create(i, r)),
            o
          );
        }
        return o(t, e), t;
      })(C);
      var ne = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this) || this).setValue = function (e, t) {
                void 0 === t && (t = !0), (n.value = e), t && n.flush();
              }),
              (n.getValue = function () {
                return n.value;
              }),
              (n.updateStyles = function () {
                return (function e(t, n) {
                  'function' === typeof t.update
                    ? n.add(t)
                    : t.getChildren().forEach(function (t) {
                        return e(t, n);
                      });
                })(a(n), n.animatedStyles);
              }),
              (n.updateValue = function (e) {
                return n.flush((n.value = e));
              }),
              (n.interpolate = function (e, t) {
                return new te(a(n), e, t);
              }),
              (n.value = t),
              (n.animatedStyles = new Set()),
              (n.done = !1),
              (n.startPosition = t),
              (n.lastPosition = t),
              (n.lastVelocity = void 0),
              (n.lastTime = void 0),
              (n.controller = void 0),
              n
            );
          }
          o(t, e);
          var n = t.prototype;
          return (
            (n.flush = function () {
              0 === this.animatedStyles.size && this.updateStyles(),
                this.animatedStyles.forEach(function (e) {
                  return e.update();
                });
            }),
            (n.prepare = function (e) {
              void 0 === this.controller && (this.controller = e),
                this.controller === e &&
                  ((this.startPosition = this.value),
                  (this.lastPosition = this.value),
                  (this.lastVelocity = e.isActive ? this.lastVelocity : void 0),
                  (this.lastTime = e.isActive ? this.lastTime : void 0),
                  (this.done = !1),
                  this.animatedStyles.clear());
            }),
            t
          );
        })(P),
        ie = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this) || this).setValue = function (e, t) {
                void 0 === t && (t = !0),
                  Array.isArray(e)
                    ? e.length === n.payload.length &&
                      e.forEach(function (e, i) {
                        return n.payload[i].setValue(e, t);
                      })
                    : n.payload.forEach(function (i, r) {
                        return n.payload[r].setValue(e, t);
                      });
              }),
              (n.getValue = function () {
                return n.payload.map(function (e) {
                  return e.getValue();
                });
              }),
              (n.interpolate = function (e, t) {
                return new te(a(n), e, t);
              }),
              (n.payload = t.map(function (e) {
                return new ne(e);
              })),
              n
            );
          }
          return o(t, e), t;
        })(C);
      function re(e, t) {
        return void 0 === e || null === e ? t : e;
      }
      function oe(e) {
        return void 0 !== e ? (Array.isArray(e) ? e : [e]) : [];
      }
      function ae(e, t) {
        if (typeof e !== typeof t) return !1;
        if ('string' === typeof e || 'number' === typeof e) return e === t;
        var n;
        for (n in e) if (!(n in t)) return !1;
        for (n in t) if (e[n] !== t[n]) return !1;
        return void 0 !== n || e === t;
      }
      function se(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1;
          i < t;
          i++
        )
          n[i - 1] = arguments[i];
        return 'function' === typeof e ? e.apply(void 0, n) : e;
      }
      function le(e) {
        return Object.keys(e).map(function (t) {
          return e[t];
        });
      }
      function ue(e) {
        var t = (function (e) {
            return (
              e.to,
              e.from,
              e.config,
              e.native,
              e.onStart,
              e.onRest,
              e.onFrame,
              e.children,
              e.reset,
              e.reverse,
              e.force,
              e.immediate,
              e.impl,
              e.inject,
              e.delay,
              e.attach,
              e.destroyed,
              e.interpolateTo,
              e.autoStart,
              e.ref,
              r(e, [
                'to',
                'from',
                'config',
                'native',
                'onStart',
                'onRest',
                'onFrame',
                'children',
                'reset',
                'reverse',
                'force',
                'immediate',
                'impl',
                'inject',
                'delay',
                'attach',
                'destroyed',
                'interpolateTo',
                'autoStart',
                'ref',
              ])
            );
          })(e),
          n = Object.keys(e).reduce(function (n, i) {
            var r;
            return void 0 !== t[i] ? n : s({}, n, (((r = {})[i] = e[i]), r));
          }, {});
        return s({ to: t }, n);
      }
      function ce(e, t) {
        var n,
          i = t[0],
          r = t[1];
        return s(
          {},
          e,
          (((n = {})[i] = new (Array.isArray(r) ? ie : ne)(r)), n)
        );
      }
      function de(e) {
        var t = e.from,
          n = e.to,
          i = e.native,
          r = Object.entries(s({}, t, n));
        return i ? r.reduce(ce, {}) : s({}, t, n);
      }
      function pe(e, t) {
        return (
          t &&
            ('function' === typeof t
              ? t(e)
              : 'object' === typeof t && (t.current = e)),
          e
        );
      }
      var fe = function (e) {
          return 'auto' === e;
        },
        he = function (e, t) {
          return function (n, i) {
            var r,
              o = i[0],
              a = i[1];
            return s(
              {},
              n,
              (((r = {})[o] =
                'auto' === a ? (~o.indexOf('height') ? t : e) : a),
              r)
            );
          };
        };
      var ge = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        },
        me = ['Webkit', 'Ms', 'Moz', 'O'];
      function ve(e, t, n) {
        return null == t || 'boolean' === typeof t || '' === t
          ? ''
          : n ||
            'number' !== typeof t ||
            0 === t ||
            (ge.hasOwnProperty(e) && ge[e])
          ? ('' + t).trim()
          : t + 'px';
      }
      ge = Object.keys(ge).reduce(function (e, t) {
        return (
          me.forEach(function (n) {
            return (e[
              (function (e, t) {
                return e + t.charAt(0).toUpperCase() + t.substring(1);
              })(n, t)
            ] = e[t]);
          }),
          e
        );
      }, ge);
      var ye = {};
      O(function (e) {
        return new A(e);
      }),
        E('div'),
        S(function (e) {
          var t = e.output
              .map(function (e) {
                return e.replace(Q, J);
              })
              .map(function (e) {
                return e.replace(ee, J);
              }),
            n = t[0].match(Z).map(function () {
              return [];
            });
          t.forEach(function (e) {
            e.match(Z).forEach(function (e, t) {
              return n[t].push(+e);
            });
          });
          var i = t[0].match(Z).map(function (t, i) {
            return T.create(s({}, e, { output: n[i] }));
          });
          return function (e) {
            var n = 0;
            return t[0]
              .replace(Z, function () {
                return i[n++](e);
              })
              .replace(
                /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
                function (e, t, n, i, r) {
                  return (
                    'rgba(' +
                    Math.round(t) +
                    ', ' +
                    Math.round(n) +
                    ', ' +
                    Math.round(i) +
                    ', ' +
                    r +
                    ')'
                  );
                }
              );
          };
        }),
        b(j),
        x(function (e, t) {
          var n = e.from,
            i = e.to,
            r = e.children;
          if (le(i).some(fe) || le(n).some(fe)) {
            var o = r(de(e));
            if (o) {
              Array.isArray(o) && (o = { type: 'div', props: { children: o } });
              var a = o.props.style;
              return l.createElement(
                o.type,
                s({ key: o.key ? o.key : void 0 }, o.props, {
                  style: s({}, a, {
                    position: 'absolute',
                    visibility: 'hidden',
                  }),
                  ref: function (r) {
                    if (r) {
                      var o,
                        a,
                        l = u.findDOMNode(r),
                        c = getComputedStyle(l);
                      if ('border-box' === c.boxSizing)
                        (o = l.offsetWidth), (a = l.offsetHeight);
                      else {
                        var d =
                            parseFloat(c.paddingLeft || 0) +
                            parseFloat(c.paddingRight || 0),
                          p =
                            parseFloat(c.paddingTop || 0) +
                            parseFloat(c.paddingBottom || 0),
                          f =
                            parseFloat(c.borderLeftWidth || 0) +
                            parseFloat(c.borderRightWidth || 0),
                          h =
                            parseFloat(c.borderTopWidth || 0) +
                            parseFloat(c.borderBottomWidth || 0);
                        (o = l.offsetWidth - d - f),
                          (a = l.offsetHeight - p - h);
                      }
                      var g = he(o, a);
                      t(
                        s({}, e, {
                          from: Object.entries(n).reduce(g, n),
                          to: Object.entries(i).reduce(g, i),
                        })
                      );
                    }
                  },
                })
              );
            }
          }
        }),
        w(
          function (e, t) {
            if (!e.nodeType || void 0 === e.setAttribute) return !1;
            var n = t.style,
              i = t.children,
              o = t.scrollTop,
              a = t.scrollLeft,
              s = r(t, ['style', 'children', 'scrollTop', 'scrollLeft']);
            for (var l in (void 0 !== o && (e.scrollTop = o),
            void 0 !== a && (e.scrollLeft = a),
            void 0 !== i && (e.textContent = i),
            n))
              if (n.hasOwnProperty(l)) {
                var u = 0 === l.indexOf('--'),
                  c = ve(l, n[l], u);
                'float' === l && (l = 'cssFloat'),
                  u ? e.style.setProperty(l, c) : (e.style[l] = c);
              }
            for (var d in s) {
              var p =
                ye[d] ||
                (ye[d] = d.replace(/([A-Z])/g, function (e) {
                  return '-' + e.toLowerCase();
                }));
              'undefined' !== typeof e.getAttribute(p) &&
                e.setAttribute(p, s[d]);
            }
          },
          function (e) {
            return e;
          }
        );
      var we = !1,
        be = new Set(),
        xe = function e() {
          var t = m(),
            n = be,
            i = Array.isArray(n),
            r = 0;
          for (n = i ? n : n[Symbol.iterator](); ; ) {
            var o;
            if (i) {
              if (r >= n.length) break;
              o = n[r++];
            } else {
              if ((r = n.next()).done) break;
              o = r.value;
            }
            for (var a = o, s = !0, l = !0, u = 0; u < a.configs.length; u++) {
              for (
                var c = a.configs[u], d = void 0, p = void 0, h = 0;
                h < c.animatedValues.length;
                h++
              ) {
                var g = c.animatedValues[h];
                if (!g.done) {
                  var v = c.fromValues[h],
                    y = c.toValues[h],
                    w = g.lastPosition,
                    b = y instanceof k,
                    x = Array.isArray(c.initialVelocity)
                      ? c.initialVelocity[h]
                      : c.initialVelocity;
                  if (
                    (b && (y = y.getValue()),
                    c.immediate || (!b && !c.decay && v === y))
                  )
                    g.updateValue(y), (g.done = !0);
                  else if (c.delay && t - a.startTime < c.delay) s = !1;
                  else if (
                    ((l = !1), 'string' !== typeof v && 'string' !== typeof y)
                  ) {
                    if (void 0 !== c.duration)
                      (w =
                        v +
                        c.easing((t - a.startTime - c.delay) / c.duration) *
                          (y - v)),
                        (d = t >= a.startTime + c.delay + c.duration);
                    else if (c.decay)
                      (w =
                        v +
                        (x / (1 - 0.998)) *
                          (1 - Math.exp(-(1 - 0.998) * (t - a.startTime)))),
                        (d = Math.abs(g.lastPosition - w) < 0.1) && (y = w);
                    else {
                      (p = void 0 !== g.lastTime ? g.lastTime : t),
                        (x =
                          void 0 !== g.lastVelocity
                            ? g.lastVelocity
                            : c.initialVelocity),
                        t > p + 64 && (p = t);
                      for (var S = Math.floor(t - p), E = 0; E < S; ++E) {
                        w +=
                          (1 *
                            (x +=
                              (1 *
                                ((-c.tension * (w - y) + -c.friction * x) /
                                  c.mass)) /
                              1e3)) /
                          1e3;
                      }
                      var O =
                          !(!c.clamp || 0 === c.tension) &&
                          (v < y ? w > y : w < y),
                        z = Math.abs(x) <= c.precision,
                        R = 0 === c.tension || Math.abs(y - w) <= c.precision;
                      (d = O || (z && R)),
                        (g.lastVelocity = x),
                        (g.lastTime = t);
                    }
                    b && !c.toValues[h].done && (d = !1),
                      d ? (g.value !== y && (w = y), (g.done = !0)) : (s = !1),
                      g.updateValue(w),
                      (g.lastPosition = w);
                  } else g.updateValue(y), (g.done = !0);
                }
              }
              (!a.props.onFrame && a.props.native) ||
                (a.animatedProps[c.name] = c.interpolation.getValue());
            }
            (!a.props.onFrame && a.props.native) ||
              (!a.props.native && a.onUpdate && a.onUpdate(),
              a.props.onFrame && a.props.onFrame(a.animatedProps)),
              s &&
                (be.delete(a), a.debouncedOnEnd({ finished: !0, noChange: l }));
          }
          be.size ? f(e) : (we = !1);
        },
        Se = function (e) {
          be.has(e) && be.delete(e);
        },
        Ee = (function () {
          function e(e, t) {
            var n = this;
            void 0 === t &&
              (t = { native: !0, interpolateTo: !0, autoStart: !0 }),
              (this.getValues = function () {
                return n.props.native ? n.interpolations : n.animatedProps;
              }),
              (this.dependents = new Set()),
              (this.isActive = !1),
              (this.hasChanged = !1),
              (this.props = {}),
              (this.merged = {}),
              (this.animations = {}),
              (this.interpolations = {}),
              (this.animatedProps = {}),
              (this.configs = []),
              (this.frame = void 0),
              (this.startTime = void 0),
              (this.lastTime = void 0),
              this.update(s({}, e, t));
          }
          var t = e.prototype;
          return (
            (t.update = function (e) {
              var t = this;
              this.props = s({}, this.props, e);
              var n = this.props.interpolateTo ? ue(this.props) : this.props,
                i = n.from,
                r = void 0 === i ? {} : i,
                o = n.to,
                a = void 0 === o ? {} : o,
                l = n.config,
                u = void 0 === l ? {} : l,
                c = n.delay,
                d = void 0 === c ? 0 : c,
                f = n.reverse,
                h = n.attach,
                g = n.reset,
                m = n.immediate,
                v = n.autoStart,
                y = n.ref;
              if (f) {
                var w = [a, r];
                (r = w[0]), (a = w[1]);
              }
              this.hasChanged = !1;
              var b = h && h(this),
                x = g ? {} : this.merged;
              if (
                ((this.merged = s({}, r, x, a)),
                (this.animations = Object.entries(this.merged).reduce(function (
                  e,
                  n,
                  i
                ) {
                  var o,
                    a,
                    l,
                    c = n[0],
                    f = n[1],
                    h = (!g && e[c]) || {},
                    v = 'number' === typeof f,
                    y =
                      'string' === typeof f &&
                      !f.startsWith('#') &&
                      !/\d/.test(f) &&
                      !p[f],
                    w = !v && !y && Array.isArray(f),
                    x = void 0 !== r[c] ? r[c] : f,
                    S = v || w ? f : y ? f : 1,
                    E = se(u, c);
                  if (
                    (b && (S = b.animations[c].parent),
                    void 0 === E.decay && ae(h.changes, f))
                  )
                    return e;
                  if (((t.hasChanged = !0), v || y))
                    a = l = h.parent || new ne(x);
                  else if (w) a = l = h.parent || new ie(x);
                  else {
                    var O =
                      h.interpolation && h.interpolation.calc(h.parent.value);
                    h.parent ? (a = h.parent).setValue(0, !1) : (a = new ne(0));
                    var z = { output: [void 0 !== O ? O : x, f] };
                    h.interpolation
                      ? ((l = h.interpolation), h.interpolation.updateConfig(z))
                      : (l = a.interpolate(z));
                  }
                  se(m, c) && a.setValue(f, !1);
                  var k = oe(a.getPayload());
                  return (
                    k.forEach(function (e) {
                      return e.prepare(t);
                    }),
                    s(
                      {},
                      e,
                      (((o = {})[c] = s({}, h, {
                        name: c,
                        parent: a,
                        interpolation: l,
                        animatedValues: k,
                        changes: f,
                        fromValues: oe(a.getValue()),
                        toValues: oe(b ? S.getPayload() : S),
                        immediate: se(m, c),
                        delay: re(E.delay, d || 0),
                        initialVelocity: re(E.velocity, 0),
                        clamp: re(E.clamp, !1),
                        precision: re(E.precision, 0.01),
                        tension: re(E.tension, 170),
                        friction: re(E.friction, 26),
                        mass: re(E.mass, 1),
                        duration: E.duration,
                        easing: re(E.easing, function (e) {
                          return e;
                        }),
                        decay: E.decay,
                      })),
                      o)
                    )
                  );
                },
                this.animations)),
                this.hasChanged)
              )
                for (var S in ((this.configs = le(this.animations)),
                (this.animatedProps = {}),
                (this.interpolations = {}),
                this.animations))
                  (this.interpolations[S] = this.animations[S].interpolation),
                    (this.animatedProps[S] = this.animations[
                      S
                    ].interpolation.getValue());
              for (
                var E = arguments.length,
                  O = new Array(E > 1 ? E - 1 : 0),
                  z = 1;
                z < E;
                z++
              )
                O[z - 1] = arguments[z];
              y || (!v && !O.length) || this.start.apply(this, O);
              var k = O[0],
                R = O[1];
              return (
                (this.onEnd = 'function' === typeof k && k),
                (this.onUpdate = R),
                this.getValues()
              );
            }),
            (t.start = function (e, t) {
              var n,
                i = this;
              return (
                (this.startTime = m()),
                this.isActive && this.stop(),
                (this.isActive = !0),
                (this.onEnd = 'function' === typeof e && e),
                (this.onUpdate = t),
                this.props.onStart && this.props.onStart(),
                (n = this),
                be.has(n) || (be.add(n), we || f(xe), (we = !0)),
                new Promise(function (e) {
                  return (i.resolve = e);
                })
              );
            }),
            (t.stop = function (e) {
              void 0 === e && (e = !1),
                e &&
                  le(this.animations).forEach(function (e) {
                    return (e.changes = void 0);
                  }),
                this.debouncedOnEnd({ finished: e });
            }),
            (t.destroy = function () {
              Se(this),
                (this.props = {}),
                (this.merged = {}),
                (this.animations = {}),
                (this.interpolations = {}),
                (this.animatedProps = {}),
                (this.configs = []);
            }),
            (t.debouncedOnEnd = function (e) {
              Se(this), (this.isActive = !1);
              var t = this.onEnd;
              (this.onEnd = null),
                t && t(e),
                this.resolve && this.resolve(),
                (this.resolve = null);
            }),
            e
          );
        })(),
        Oe = (function (e) {
          function t(t, n) {
            var i;
            return (
              (i = e.call(this) || this),
              t.style && (t = s({}, t, { style: y(t.style) })),
              (i.payload = t),
              (i.update = n),
              i.attach(),
              i
            );
          }
          return o(t, e), t;
        })(N);
      function ze(e) {
        var t = (function (t) {
          function n(e) {
            var n;
            return (
              ((n = t.call(this) || this).callback = function () {
                n.node &&
                  !1 ===
                    d.fn(n.node, n.propsAnimated.getAnimatedValue(), a(n)) &&
                  n.forceUpdate();
              }),
              n.attachProps(e),
              n
            );
          }
          o(n, t);
          var i = n.prototype;
          return (
            (i.componentWillUnmount = function () {
              this.propsAnimated && this.propsAnimated.detach();
            }),
            (i.setNativeProps = function (e) {
              !1 === d.fn(this.node, e, this) && this.forceUpdate();
            }),
            (i.attachProps = function (e) {
              e.forwardRef;
              var t = r(e, ['forwardRef']),
                n = this.propsAnimated;
              (this.propsAnimated = new Oe(t, this.callback)), n && n.detach();
            }),
            (i.shouldComponentUpdate = function (e) {
              var t = e.style,
                n = r(e, ['style']),
                i = this.props,
                o = i.style;
              return (
                (!ae(r(i, ['style']), n) || !ae(o, t)) &&
                (this.attachProps(e), !0)
              );
            }),
            (i.render = function () {
              var t = this,
                n = this.propsAnimated.getValue(),
                i =
                  (n.scrollTop,
                  n.scrollLeft,
                  r(n, ['scrollTop', 'scrollLeft']));
              return l.createElement(
                e,
                s({}, i, {
                  ref: function (e) {
                    return (t.node = pe(e, t.props.forwardRef));
                  },
                })
              );
            }),
            n
          );
        })(l.Component);
        return l.forwardRef(function (e, n) {
          return l.createElement(t, s({}, e, { forwardRef: n }));
        });
      }
      var ke = {
          default: { tension: 170, friction: 26 },
          gentle: { tension: 120, friction: 14 },
          wobbly: { tension: 180, friction: 12 },
          stiff: { tension: 210, friction: 20 },
          slow: { tension: 280, friction: 60 },
          molasses: { tension: 280, friction: 120 },
        },
        Re = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, i = new Array(n), r = 0;
              r < n;
              r++
            )
              i[r] = arguments[r];
            return (
              ((t = e.call.apply(e, [this].concat(i)) || this).state = {
                lastProps: { from: {}, to: {} },
                propsChanged: !1,
                internal: !1,
              }),
              (t.controller = new Ee(null, null)),
              (t.didUpdate = !1),
              (t.didInject = !1),
              (t.finished = !0),
              (t.start = function () {
                t.finished = !1;
                var e = t.mounted;
                t.controller.start(function (n) {
                  return t.finish(s({}, n, { wasMounted: e }));
                }, t.update);
              }),
              (t.stop = function () {
                return t.controller.stop(!0);
              }),
              (t.update = function () {
                return t.mounted && t.setState({ internal: !0 });
              }),
              (t.finish = function (e) {
                var n = e.finished,
                  i = e.noChange,
                  r = e.wasMounted;
                (t.finished = !0),
                  t.mounted &&
                    n &&
                    (!t.props.onRest ||
                      (!r && i) ||
                      t.props.onRest(t.controller.merged),
                    t.mounted &&
                      t.didInject &&
                      ((t.afterInject = de(t.props)),
                      t.setState({ internal: !0 })),
                    t.mounted &&
                      (t.didInject || t.props.after) &&
                      t.setState({ internal: !0 }),
                    (t.didInject = !1));
              }),
              t
            );
          }
          o(t, e);
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              this.componentDidUpdate(), (this.mounted = !0);
            }),
            (n.componentWillUnmount = function () {
              (this.mounted = !1), this.stop();
            }),
            (t.getDerivedStateFromProps = function (e, t) {
              var n = t.internal,
                i = t.lastProps,
                r = e.from,
                o = e.to,
                a = e.reset,
                s = e.force;
              return {
                propsChanged:
                  !ae(o, i.to) || !ae(r, i.from) || (a && !n) || (s && !n),
                lastProps: e,
                internal: !1,
              };
            }),
            (n.render = function () {
              var e = this,
                t = this.props.children,
                n = this.state.propsChanged;
              if (this.props.inject && n && !this.injectProps) {
                var i = this.props.inject(this.props, function (t) {
                  (e.injectProps = t), e.setState({ internal: !0 });
                });
                if (i) return i;
              }
              (this.injectProps || n) &&
                ((this.didInject = !1),
                this.injectProps
                  ? (this.controller.update(this.injectProps),
                    (this.didInject = !0))
                  : n && this.controller.update(this.props),
                (this.didUpdate = !0),
                (this.afterInject = void 0),
                (this.injectProps = void 0));
              var r = s({}, this.controller.getValues(), this.afterInject);
              return (
                this.finished && (r = s({}, r, this.props.after)),
                Object.keys(r).length ? t(r) : null
              );
            }),
            (n.componentDidUpdate = function () {
              this.didUpdate && this.start(), (this.didUpdate = !1);
            }),
            t
          );
        })(l.Component);
      Re.defaultProps = {
        from: {},
        to: {},
        config: ke.default,
        native: !1,
        immediate: !1,
        reset: !1,
        force: !1,
        inject: c,
      };
      var Pe = (function (e) {
        function t() {
          for (var t, n = arguments.length, i = new Array(n), r = 0; r < n; r++)
            i[r] = arguments[r];
          return (
            ((t = e.call.apply(e, [this].concat(i)) || this).first = !0),
            (t.instances = new Set()),
            (t.hook = function (e, n, i, r) {
              return (
                t.instances.add(e),
                (r ? n === i - 1 : 0 === n)
                  ? void 0
                  : Array.from(t.instances)[r ? n + 1 : n - 1]
              );
            }),
            t
          );
        }
        o(t, e);
        var n = t.prototype;
        return (
          (n.render = function () {
            var e = this,
              t = this.props,
              n = t.items,
              i = t.children,
              o = t.from,
              a = void 0 === o ? {} : o,
              u = t.initial,
              c = t.reverse,
              d = t.keys,
              p = t.delay,
              f = t.onRest,
              h = r(t, [
                'items',
                'children',
                'from',
                'initial',
                'reverse',
                'keys',
                'delay',
                'onRest',
              ]),
              g = oe(n);
            return oe(g).map(function (t, n) {
              return l.createElement(
                Re,
                s(
                  {
                    onRest: 0 === n ? f : null,
                    key: 'function' === typeof d ? d(t) : oe(d)[n],
                    from: e.first && void 0 !== u ? u || {} : a,
                  },
                  h,
                  {
                    delay: (0 === n && p) || void 0,
                    attach: function (t) {
                      return e.hook(t, n, g.length, c);
                    },
                    children: function (e) {
                      var r = i(t, n);
                      return r ? r(e) : null;
                    },
                  }
                )
              );
            });
          }),
          (n.componentDidUpdate = function (e) {
            (this.first = !1),
              e.items !== this.props.items && this.instances.clear();
          }),
          t
        );
      })(l.PureComponent);
      Pe.defaultProps = {
        keys: function (e) {
          return e;
        },
      };
      var Ce = (function (e) {
        function t() {
          for (var t, n = arguments.length, i = new Array(n), r = 0; r < n; r++)
            i[r] = arguments[r];
          return (
            ((t = e.call.apply(e, [this].concat(i)) || this).guid = 0),
            (t.state = {
              props: {},
              resolve: function () {
                return null;
              },
              last: !0,
              index: 0,
            }),
            (t.next = function (e, n, i) {
              return (
                void 0 === n && (n = !0),
                void 0 === i && (i = 0),
                (t.running = !0),
                new Promise(function (r) {
                  t.mounted &&
                    t.setState(
                      function (t) {
                        return { props: e, resolve: r, last: n, index: i };
                      },
                      function () {
                        return (t.running = !1);
                      }
                    );
                })
              );
            }),
            t
          );
        }
        o(t, e);
        var n = t.prototype;
        return (
          (n.componentDidMount = function () {
            (this.mounted = !0), this.componentDidUpdate({});
          }),
          (n.componentWillUnmount = function () {
            this.mounted = !1;
          }),
          (n.componentDidUpdate = function (e) {
            var t = this,
              n = this.props,
              i = n.states,
              r = n.filter,
              o = n.state;
            (e.state !== this.props.state ||
              (this.props.reset && !this.running) ||
              !ae(i[o], e.states[e.state])) &&
              i &&
              o &&
              i[o] &&
              (function () {
                var e = ++t.guid,
                  n = i[o];
                if (n)
                  if (Array.isArray(n))
                    for (
                      var a = Promise.resolve(),
                        s = function (i) {
                          var o = i,
                            s = n[o],
                            l = o === n.length - 1;
                          a = a.then(function () {
                            return e === t.guid && t.next(r(s), l, o);
                          });
                        },
                        l = 0;
                      l < n.length;
                      l++
                    )
                      s(l);
                  else if ('function' === typeof n) {
                    var u = 0;
                    n(
                      function (n, i) {
                        return (
                          void 0 === i && (i = !1),
                          e === t.guid && t.next(r(n), i, u++)
                        );
                      },
                      function () {
                        return f(function () {
                          return t.instance && t.instance.stop();
                        });
                      },
                      t.props
                    );
                  } else t.next(r(i[o]));
              })();
          }),
          (n.render = function () {
            var e = this,
              t = this.state,
              n = t.props,
              i = t.resolve,
              o = t.last,
              a = t.index;
            if (!n || 0 === Object.keys(n).length) return null;
            var u = this.props,
              c = (u.state, u.filter, u.states, u.config),
              d = u.primitive,
              p = u.onRest,
              f = u.forwardRef,
              h = r(u, [
                'state',
                'filter',
                'states',
                'config',
                'primitive',
                'onRest',
                'forwardRef',
              ]);
            return (
              Array.isArray(c) && (c = c[a]),
              l.createElement(
                d,
                s(
                  {
                    ref: function (t) {
                      return (e.instance = pe(t, f));
                    },
                    config: c,
                  },
                  h,
                  n,
                  {
                    onRest: function (e) {
                      i(e), p && o && p(e);
                    },
                  }
                )
              )
            );
          }),
          t
        );
      })(l.PureComponent);
      Ce.defaultProps = { state: '__default' };
      var Ne = l.forwardRef(function (e, t) {
        return l.createElement(Ce, s({}, e, { forwardRef: t }));
      });
      (Ne.create = function (e) {
        return function (t, n) {
          var i;
          return (
            void 0 === n &&
              (n = function (e) {
                return e;
              }),
            ('function' === typeof t || Array.isArray(t)) &&
              (((i = {}).__default = t), (t = i)),
            function (i) {
              return l.createElement(
                Ce,
                s({ primitive: e, states: t, filter: n }, i)
              );
            }
          );
        };
      }),
        (Ne.Spring = function (e) {
          return Ne.create(Re)(e, ue);
        }),
        (Ne.Trail = function (e) {
          return Ne.create(Pe)(e, ue);
        });
      var Ae = 0,
        je = function (e) {
          var t = e.items,
            n = e.keys,
            i = r(e, ['items', 'keys']);
          return (
            (t = oe(void 0 !== t ? t : null)),
            (n = 'function' === typeof n ? t.map(n) : oe(n)),
            s(
              {
                items: t,
                keys: n.map(function (e) {
                  return String(e);
                }),
              },
              i
            )
          );
        },
        Te = (function (e) {
          o(n, e);
          var t = n.prototype;
          function n(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).destroyItem = function (e, t, i) {
                return function (r) {
                  var o = n.props,
                    a = o.onRest,
                    s = o.onDestroyed;
                  n.mounted &&
                    (s && s(e),
                    n.setState(function (e) {
                      return {
                        deleted: e.deleted.filter(function (e) {
                          return e.key !== t;
                        }),
                      };
                    }),
                    a && a(e, i, r));
                };
              }),
              (n.state = {
                first: !0,
                transitions: [],
                current: {},
                deleted: [],
                prevProps: t,
              }),
              n
            );
          }
          return (
            (t.componentDidMount = function () {
              this.mounted = !0;
            }),
            (t.componentWillUnmount = function () {
              this.mounted = !1;
            }),
            (n.getDerivedStateFromProps = function (e, t) {
              var n = t.first,
                i = t.prevProps,
                o = r(t, ['first', 'prevProps']),
                a = je(e),
                l = a.items,
                u = a.keys,
                c = a.initial,
                d = a.from,
                p = a.enter,
                f = a.leave,
                h = a.update,
                g = a.trail,
                m = void 0 === g ? 0 : g,
                v = a.unique,
                y = a.config,
                w = je(i),
                b = w.keys,
                x = w.items,
                S = s({}, o.current),
                E = [].concat(o.deleted),
                O = Object.keys(S),
                z = new Set(O),
                k = new Set(u),
                R = u.filter(function (e) {
                  return !z.has(e);
                }),
                P = o.transitions
                  .filter(function (e) {
                    return !e.destroyed && !k.has(e.originalKey);
                  })
                  .map(function (e) {
                    return e.originalKey;
                  }),
                C = u.filter(function (e) {
                  return z.has(e);
                }),
                N = 0;
              R.forEach(function (e) {
                v &&
                  E.find(function (t) {
                    return t.originalKey === e;
                  }) &&
                  (E = E.filter(function (t) {
                    return t.originalKey !== e;
                  }));
                var t = u.indexOf(e),
                  i = l[t];
                S[e] = {
                  state: 'enter',
                  originalKey: e,
                  key: v ? String(e) : Ae++,
                  item: i,
                  trail: (N += m),
                  config: se(y, i, 'enter'),
                  from: se(n && void 0 !== c ? c || {} : d, i),
                  to: se(p, i),
                };
              }),
                P.forEach(function (e) {
                  var t = b.indexOf(e),
                    n = x[t];
                  E.push(
                    s({}, S[e], {
                      state: 'leave',
                      destroyed: !0,
                      left: b[Math.max(0, t - 1)],
                      right: b[Math.min(b.length, t + 1)],
                      trail: (N += m),
                      config: se(y, n, 'leave'),
                      to: se(f, n),
                    })
                  ),
                    delete S[e];
                }),
                C.forEach(function (e) {
                  var t = u.indexOf(e),
                    n = l[t];
                  S[e] = s({}, S[e], {
                    item: n,
                    state: 'update',
                    trail: (N += m),
                    config: se(y, n, 'update'),
                    to: se(h, n),
                  });
                });
              var A = u.map(function (e) {
                return S[e];
              });
              return (
                E.forEach(function (e) {
                  var t,
                    n = e.left,
                    i = e.right,
                    o = r(e, ['left', 'right']);
                  -1 !==
                    (t = A.findIndex(function (e) {
                      return e.originalKey === n;
                    })) && (t += 1),
                    -1 === t &&
                      (t = A.findIndex(function (e) {
                        return e.originalKey === i;
                      })),
                    -1 === t &&
                      (t = E.findIndex(function (e) {
                        return e.originalKey === n;
                      })),
                    -1 === t &&
                      (t = E.findIndex(function (e) {
                        return e.originalKey === i;
                      })),
                    (t = Math.max(0, t)),
                    (A = [].concat(A.slice(0, t), [o], A.slice(t)));
                }),
                {
                  first: n && 0 === R.length,
                  transitions: A,
                  current: S,
                  deleted: E,
                  prevProps: e,
                }
              );
            }),
            (t.render = function () {
              var e = this,
                t = this.props,
                n =
                  (t.initial,
                  t.from,
                  t.enter,
                  t.leave,
                  t.update,
                  t.onDestroyed,
                  t.keys,
                  t.items,
                  t.onFrame),
                i = t.onRest,
                o = t.onStart,
                a = (t.trail, t.config, t.children),
                u = (t.unique, t.reset),
                c = r(t, [
                  'initial',
                  'from',
                  'enter',
                  'leave',
                  'update',
                  'onDestroyed',
                  'keys',
                  'items',
                  'onFrame',
                  'onRest',
                  'onStart',
                  'trail',
                  'config',
                  'children',
                  'unique',
                  'reset',
                ]);
              return this.state.transitions.map(function (t, r) {
                var d,
                  p = t.state,
                  f = t.key,
                  h = t.item,
                  g = t.from,
                  m = t.to,
                  v = t.trail,
                  y = t.config,
                  w = t.destroyed;
                return l.createElement(
                  Ne,
                  s(
                    {
                      reset: u && 'enter' === p,
                      primitive: Re,
                      state: p,
                      filter: ue,
                      states: ((d = {}), (d[p] = m), d),
                      key: f,
                      onRest: w
                        ? e.destroyItem(h, f, p)
                        : i &&
                          function (e) {
                            return i(h, p, e);
                          },
                      onStart:
                        o &&
                        function () {
                          return o(h, p);
                        },
                      onFrame:
                        n &&
                        function (e) {
                          return n(h, p, e);
                        },
                      delay: v,
                      config: y,
                    },
                    c,
                    {
                      from: g,
                      children: function (e) {
                        var t = a(h, p, r);
                        return t ? t(e) : null;
                      },
                    }
                  )
                );
              });
            }),
            n
          );
        })(l.PureComponent);
      Te.defaultProps = {
        keys: function (e) {
          return e;
        },
        unique: !1,
        reset: !1,
      };
      var Me = [
        'a',
        'abbr',
        'address',
        'area',
        'article',
        'aside',
        'audio',
        'b',
        'base',
        'bdi',
        'bdo',
        'big',
        'blockquote',
        'body',
        'br',
        'button',
        'canvas',
        'caption',
        'cite',
        'code',
        'col',
        'colgroup',
        'data',
        'datalist',
        'dd',
        'del',
        'details',
        'dfn',
        'dialog',
        'div',
        'dl',
        'dt',
        'em',
        'embed',
        'fieldset',
        'figcaption',
        'figure',
        'footer',
        'form',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'head',
        'header',
        'hgroup',
        'hr',
        'html',
        'i',
        'iframe',
        'img',
        'input',
        'ins',
        'kbd',
        'keygen',
        'label',
        'legend',
        'li',
        'link',
        'main',
        'map',
        'mark',
        'marquee',
        'menu',
        'menuitem',
        'meta',
        'meter',
        'nav',
        'noscript',
        'object',
        'ol',
        'optgroup',
        'option',
        'output',
        'p',
        'param',
        'picture',
        'pre',
        'progress',
        'q',
        'rp',
        'rt',
        'ruby',
        's',
        'samp',
        'script',
        'section',
        'select',
        'small',
        'source',
        'span',
        'strong',
        'style',
        'sub',
        'summary',
        'sup',
        'table',
        'tbody',
        'td',
        'textarea',
        'tfoot',
        'th',
        'thead',
        'time',
        'title',
        'tr',
        'track',
        'u',
        'ul',
        'var',
        'video',
        'wbr',
        'circle',
        'clipPath',
        'defs',
        'ellipse',
        'foreignObject',
        'g',
        'image',
        'line',
        'linearGradient',
        'mask',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'radialGradient',
        'rect',
        'stop',
        'svg',
        'text',
        'tspan',
      ].reduce(function (e, t) {
        return (e[t] = ze(t)), e;
      }, ze);
      (t.Spring = Re),
        (t.Keyframes = Ne),
        (t.Transition = Te),
        (t.Trail = Pe),
        (t.Controller = Ee),
        (t.config = ke),
        (t.animated = Me),
        (t.interpolate = function (e, t, n) {
          return e && new te(e, t, n);
        }),
        (t.Globals = z);
    },
    CEpn: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i,
        r = n('ERkP'),
        o = (i = r) && 'object' === typeof i && 'default' in i ? i.default : i,
        a = new (n('zqiA'))(),
        s = a.getBrowser(),
        l = (a.getCPU(), a.getDevice()),
        u = a.getEngine(),
        c = a.getOS(),
        d = a.getUA(),
        p = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 'none';
          return e || t;
        },
        f = function () {
          return (
            !(
              'undefined' === typeof window ||
              (!window.navigator && !navigator)
            ) &&
            (window.navigator || navigator)
          );
        },
        h = function (e) {
          var t = f();
          return (
            t &&
            (-1 !== t.platform.indexOf(e) ||
              ('MacIntel' === t.platform &&
                t.maxTouchPoints > 1 &&
                !window.MSStream))
          );
        };
      function g(e) {
        return (g =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function m(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function v(e, t, n) {
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
      }
      function y() {
        return (y =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      function w(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function b(e) {
        return (b = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function x(e, t) {
        return (x =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function S(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      var E = 'mobile',
        O = 'tablet',
        z = 'smarttv',
        k = 'console',
        R = 'wearable',
        P = void 0,
        C = 'Chrome',
        N = 'Firefox',
        A = 'Opera',
        j = 'Yandex',
        T = 'Safari',
        M = 'Internet Explorer',
        D = 'Edge',
        W = 'Chromium',
        _ = 'IE',
        V = 'Mobile Safari',
        L = 'iOS',
        H = 'Android',
        F = 'Windows Phone',
        I = {
          isMobile: !1,
          isTablet: !1,
          isBrowser: !1,
          isSmartTV: !1,
          isConsole: !1,
          isWearable: !1,
        },
        B = function (e, t, n, i, r) {
          return {
            isBrowser: e,
            browserMajorVersion: p(t.major),
            browserFullVersion: p(t.version),
            browserName: p(t.name),
            engineName: p(n.name),
            engineVersion: p(n.version),
            osName: p(i.name),
            osVersion: p(i.version),
            userAgent: p(r),
          };
        },
        U = function (e, t, n, i) {
          return (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? w(n, !0).forEach(function (t) {
                    v(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : w(n).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          })({}, e, {
            vendor: p(t.vendor),
            model: p(t.model),
            os: p(n.name),
            osVersion: p(n.version),
            ua: p(i),
          });
        },
        q = function (e, t, n, i) {
          return {
            isSmartTV: e,
            engineName: p(t.name),
            engineVersion: p(t.version),
            osName: p(n.name),
            osVersion: p(n.version),
            userAgent: p(i),
          };
        },
        G = function (e, t, n, i) {
          return {
            isConsole: e,
            engineName: p(t.name),
            engineVersion: p(t.version),
            osName: p(n.name),
            osVersion: p(n.version),
            userAgent: p(i),
          };
        },
        X = function (e, t, n, i) {
          return {
            isWearable: e,
            engineName: p(t.name),
            engineVersion: p(t.version),
            osName: p(n.name),
            osVersion: p(n.version),
            userAgent: p(i),
          };
        },
        Y = (function (e) {
          switch (e) {
            case E:
              return { isMobile: !0 };
            case O:
              return { isTablet: !0 };
            case z:
              return { isSmartTV: !0 };
            case k:
              return { isConsole: !0 };
            case R:
              return { isWearable: !0 };
            case P:
              return { isBrowser: !0 };
            default:
              return I;
          }
        })(l.type);
      var K = function () {
          return h('iPad');
        },
        $ = l.type === z,
        J = l.type === k,
        Z = l.type === R,
        Q = s.name === V || K(),
        ee = s.name === W,
        te =
          (function () {
            switch (l.type) {
              case E:
              case O:
                return !0;
              default:
                return !1;
            }
          })() || K(),
        ne = l.type === E,
        ie = l.type === O || K(),
        re = l.type === P,
        oe = c.name === H,
        ae = c.name === F,
        se = c.name === L || K(),
        le = s.name === C,
        ue = s.name === N,
        ce = s.name === T || s.name === V,
        de = s.name === A,
        pe = s.name === M || s.name === _,
        fe = p(c.version),
        he = p(c.name),
        ge = p(s.version),
        me = p(s.major),
        ve = p(s.name),
        ye = p(l.vendor),
        we = p(l.model),
        be = p(u.name),
        xe = p(u.version),
        Se = p(d),
        Ee = s.name === D,
        Oe = s.name === j,
        ze = p(l.type, 'browser'),
        ke = (function () {
          var e = f();
          return (
            e &&
            (/iPad|iPhone|iPod/.test(e.platform) ||
              ('MacIntel' === e.platform && e.maxTouchPoints > 1)) &&
            !window.MSStream
          );
        })(),
        Re = K(),
        Pe = h('iPhone'),
        Ce = h('iPod'),
        Ne = (function () {
          var e = f(),
            t = e && e.userAgent.toLowerCase();
          return 'string' === typeof t && /electron/.test(t);
        })();
      (t.AndroidView = function (e) {
        var t = e.renderWithFragment,
          n = e.children,
          i = e.viewClassName,
          a = e.style;
        return oe
          ? t
            ? o.createElement(r.Fragment, null, n)
            : o.createElement('div', { className: i, style: a }, n)
          : null;
      }),
        (t.BrowserView = function (e) {
          var t = e.renderWithFragment,
            n = e.children,
            i = e.viewClassName,
            a = e.style;
          return re
            ? t
              ? o.createElement(r.Fragment, null, n)
              : o.createElement('div', { className: i, style: a }, n)
            : null;
        }),
        (t.ConsoleView = function (e) {
          var t = e.renderWithFragment,
            n = e.children,
            i = e.viewClassName,
            a = e.style;
          return J
            ? t
              ? o.createElement(r.Fragment, null, n)
              : o.createElement('div', { className: i, style: a }, n)
            : null;
        }),
        (t.CustomView = function (e) {
          var t = e.renderWithFragment,
            n = e.children,
            i = e.viewClassName,
            a = e.style;
          return e.condition
            ? t
              ? o.createElement(r.Fragment, null, n)
              : o.createElement('div', { className: i, style: a }, n)
            : null;
        }),
        (t.IEView = function (e) {
          var t = e.renderWithFragment,
            n = e.children,
            i = e.viewClassName,
            a = e.style;
          return pe
            ? t
              ? o.createElement(r.Fragment, null, n)
              : o.createElement('div', { className: i, style: a }, n)
            : null;
        }),
        (t.IOSView = function (e) {
          var t = e.renderWithFragment,
            n = e.children,
            i = e.viewClassName,
            a = e.style;
          return se
            ? t
              ? o.createElement(r.Fragment, null, n)
              : o.createElement('div', { className: i, style: a }, n)
            : null;
        }),
        (t.MobileOnlyView = function (e) {
          var t = e.renderWithFragment,
            n = e.children,
            i = e.viewClassName,
            a = e.style;
          return ne
            ? t
              ? o.createElement(r.Fragment, null, n)
              : o.createElement('div', { className: i, style: a }, n)
            : null;
        }),
        (t.MobileView = function (e) {
          var t = e.renderWithFragment,
            n = e.children,
            i = e.viewClassName,
            a = e.style;
          return te
            ? t
              ? o.createElement(r.Fragment, null, n)
              : o.createElement('div', { className: i, style: a }, n)
            : null;
        }),
        (t.SmartTVView = function (e) {
          var t = e.renderWithFragment,
            n = e.children,
            i = e.viewClassName,
            a = e.style;
          return $
            ? t
              ? o.createElement(r.Fragment, null, n)
              : o.createElement('div', { className: i, style: a }, n)
            : null;
        }),
        (t.TabletView = function (e) {
          var t = e.renderWithFragment,
            n = e.children,
            i = e.viewClassName,
            a = e.style;
          return ie
            ? t
              ? o.createElement(r.Fragment, null, n)
              : o.createElement('div', { className: i, style: a }, n)
            : null;
        }),
        (t.WearableView = function (e) {
          var t = e.renderWithFragment,
            n = e.children,
            i = e.viewClassName,
            a = e.style;
          return Z
            ? t
              ? o.createElement(r.Fragment, null, n)
              : o.createElement('div', { className: i, style: a }, n)
            : null;
        }),
        (t.WinPhoneView = function (e) {
          var t = e.renderWithFragment,
            n = e.children,
            i = e.viewClassName,
            a = e.style;
          return ae
            ? t
              ? o.createElement(r.Fragment, null, n)
              : o.createElement('div', { className: i, style: a }, n)
            : null;
        }),
        (t.browserName = ve),
        (t.browserVersion = me),
        (t.deviceDetect = function () {
          var e = Y.isBrowser,
            t = Y.isMobile,
            n = Y.isTablet,
            i = Y.isSmartTV,
            r = Y.isConsole,
            o = Y.isWearable;
          return e
            ? B(e, s, u, c, d)
            : i
            ? q(i, u, c, d)
            : r
            ? G(r, u, c, d)
            : t
            ? U(Y, l, c, d)
            : n
            ? U(Y, l, c, d)
            : o
            ? X(o, u, c, d)
            : void 0;
        }),
        (t.deviceType = ze),
        (t.engineName = be),
        (t.engineVersion = xe),
        (t.fullBrowserVersion = ge),
        (t.getUA = Se),
        (t.isAndroid = oe),
        (t.isBrowser = re),
        (t.isChrome = le),
        (t.isChromium = ee),
        (t.isConsole = J),
        (t.isEdge = Ee),
        (t.isElectron = Ne),
        (t.isFirefox = ue),
        (t.isIE = pe),
        (t.isIOS = se),
        (t.isIOS13 = ke),
        (t.isIPad13 = Re),
        (t.isIPhone13 = Pe),
        (t.isIPod13 = Ce),
        (t.isMobile = te),
        (t.isMobileOnly = ne),
        (t.isMobileSafari = Q),
        (t.isOpera = de),
        (t.isSafari = ce),
        (t.isSmartTV = $),
        (t.isTablet = ie),
        (t.isWearable = Z),
        (t.isWinPhone = ae),
        (t.isYandex = Oe),
        (t.mobileModel = we),
        (t.mobileVendor = ye),
        (t.osName = he),
        (t.osVersion = fe),
        (t.withOrientationChange = function (e) {
          return (function (t) {
            function n(e) {
              var t, i, r;
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
                })(this, n),
                (i = this),
                ((t =
                  !(r = b(n).call(this, e)) ||
                  ('object' !== typeof r && 'function' !== typeof r)
                    ? S(i)
                    : r).isEventListenerAdded = !1),
                (t.handleOrientationChange = t.handleOrientationChange.bind(
                  S(t)
                )),
                (t.onOrientationChange = t.onOrientationChange.bind(S(t))),
                (t.onPageLoad = t.onPageLoad.bind(S(t))),
                (t.state = { isLandscape: !1, isPortrait: !1 }),
                t
              );
            }
            var i, r, a;
            return (
              (function (e, t) {
                if ('function' !== typeof t && null !== t)
                  throw new TypeError(
                    'Super expression must either be null or a function'
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && x(e, t);
              })(n, t),
              (i = n),
              (r = [
                {
                  key: 'handleOrientationChange',
                  value: function () {
                    this.isEventListenerAdded ||
                      (this.isEventListenerAdded = !0);
                    var e = window.innerWidth > window.innerHeight ? 90 : 0;
                    this.setState({
                      isPortrait: 0 === e,
                      isLandscape: 90 === e,
                    });
                  },
                },
                {
                  key: 'onOrientationChange',
                  value: function () {
                    this.handleOrientationChange();
                  },
                },
                {
                  key: 'onPageLoad',
                  value: function () {
                    this.handleOrientationChange();
                  },
                },
                {
                  key: 'componentDidMount',
                  value: function () {
                    void 0 !==
                      ('undefined' === typeof window
                        ? 'undefined'
                        : g(window)) &&
                      te &&
                      (this.isEventListenerAdded
                        ? window.removeEventListener(
                            'load',
                            this.onPageLoad,
                            !1
                          )
                        : (this.handleOrientationChange(),
                          window.addEventListener('load', this.onPageLoad, !1)),
                      window.addEventListener(
                        'resize',
                        this.onOrientationChange,
                        !1
                      ));
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    window.removeEventListener(
                      'resize',
                      this.onOrientationChange,
                      !1
                    );
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return o.createElement(
                      e,
                      y({}, this.props, {
                        isLandscape: this.state.isLandscape,
                        isPortrait: this.state.isPortrait,
                      })
                    );
                  },
                },
              ]) && m(i.prototype, r),
              a && m(i, a),
              n
            );
          })(o.Component);
        });
    },
    HbsM: function (e, t, n) {
      'use strict';
      var i =
          (this && this.__assign) ||
          function () {
            return (i =
              Object.assign ||
              function (e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        r =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = r(n('ERkP')),
        a = {
          top: {
            width: '100%',
            height: '10px',
            top: '-5px',
            left: '0px',
            cursor: 'row-resize',
          },
          right: {
            width: '10px',
            height: '100%',
            top: '0px',
            right: '-5px',
            cursor: 'col-resize',
          },
          bottom: {
            width: '100%',
            height: '10px',
            bottom: '-5px',
            left: '0px',
            cursor: 'row-resize',
          },
          left: {
            width: '10px',
            height: '100%',
            top: '0px',
            left: '-5px',
            cursor: 'col-resize',
          },
          topRight: {
            width: '20px',
            height: '20px',
            position: 'absolute',
            right: '-10px',
            top: '-10px',
            cursor: 'ne-resize',
          },
          bottomRight: {
            width: '20px',
            height: '20px',
            position: 'absolute',
            right: '-10px',
            bottom: '-10px',
            cursor: 'se-resize',
          },
          bottomLeft: {
            width: '20px',
            height: '20px',
            position: 'absolute',
            left: '-10px',
            bottom: '-10px',
            cursor: 'sw-resize',
          },
          topLeft: {
            width: '20px',
            height: '20px',
            position: 'absolute',
            left: '-10px',
            top: '-10px',
            cursor: 'nw-resize',
          },
        };
      t.Resizer = function (e) {
        return o.createElement(
          'div',
          {
            className: e.className || '',
            style: i(
              { position: 'absolute', userSelect: 'none' },
              a[e.direction],
              e.replaceStyles || {}
            ),
            onMouseDown: function (t) {
              e.onResizeStart(t, e.direction);
            },
            onTouchStart: function (t) {
              e.onResizeStart(t, e.direction);
            },
          },
          e.children
        );
      };
    },
    LdEA: function (e, t) {
      e.exports = function (e, t) {
        if (null == e) return {};
        var n,
          i,
          r = {},
          o = Object.keys(e);
        for (i = 0; i < o.length; i++)
          (n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r;
      };
    },
    'VU+f': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return j;
      }),
        n.d(t, 'c', function () {
          return R;
        }),
        n.d(t, 'b', function () {
          return P;
        });
      var i = n('ERkP'),
        r = n.n(i),
        o = n('7nmT'),
        a = n.n(o);
      var s = n('X3tg'),
        l = function (e, t) {
          return (l =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        };
      var u = function () {
        return (u =
          Object.assign ||
          function (e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
              for (var r in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e;
          }).apply(this, arguments);
      };
      var c = n('womh'),
        d = {
          width: 'auto',
          height: 'auto',
          display: 'inline-block',
          position: 'absolute',
          top: 0,
          left: 0,
        },
        p = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.isResizing = !1),
              (n.state = {
                original: { x: 0, y: 0 },
                bounds: { top: 0, right: 0, bottom: 0, left: 0 },
                maxWidth: t.maxWidth,
                maxHeight: t.maxHeight,
              }),
              (n.onResizeStart = n.onResizeStart.bind(n)),
              (n.onResize = n.onResize.bind(n)),
              (n.onResizeStop = n.onResizeStop.bind(n)),
              (n.onDragStart = n.onDragStart.bind(n)),
              (n.onDrag = n.onDrag.bind(n)),
              (n.onDragStop = n.onDragStop.bind(n)),
              (n.getMaxSizesFromProps = n.getMaxSizesFromProps.bind(n)),
              n
            );
          }
          return (
            (function (e, t) {
              function n() {
                this.constructor = e;
              }
              l(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            })(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this.getOffsetFromParent(),
                t = e.left,
                n = e.top,
                i = this.getDraggablePosition(),
                r = i.x,
                o = i.y;
              this.draggable.setState({ x: r - t, y: o - n }),
                this.forceUpdate();
            }),
            (t.prototype.getDraggablePosition = function () {
              var e = this.draggable.state;
              return { x: e.x, y: e.y };
            }),
            (t.prototype.getParent = function () {
              return this.resizable && this.resizable.parentNode;
            }),
            (t.prototype.getParentSize = function () {
              return this.resizable.getParentSize();
            }),
            (t.prototype.getMaxSizesFromProps = function () {
              return {
                maxWidth:
                  'undefined' === typeof this.props.maxWidth
                    ? Number.MAX_SAFE_INTEGER
                    : this.props.maxWidth,
                maxHeight:
                  'undefined' === typeof this.props.maxHeight
                    ? Number.MAX_SAFE_INTEGER
                    : this.props.maxHeight,
              };
            }),
            (t.prototype.getSelfElement = function () {
              return this.resizable && this.resizable.resizable;
            }),
            (t.prototype.getOffsetHeight = function (e) {
              var t = this.props.scale;
              switch (this.props.bounds) {
                case 'window':
                  return window.innerHeight / t;
                case 'body':
                  return document.body.offsetHeight / t;
                default:
                  return e.offsetHeight;
              }
            }),
            (t.prototype.getOffsetWidth = function (e) {
              var t = this.props.scale;
              switch (this.props.bounds) {
                case 'window':
                  return window.innerWidth / t;
                case 'body':
                  return document.body.offsetWidth / t;
                default:
                  return e.offsetWidth;
              }
            }),
            (t.prototype.onDragStart = function (e, t) {
              if (
                (this.props.onDragStart && this.props.onDragStart(e, t),
                this.props.bounds)
              ) {
                var n,
                  i = this.getParent(),
                  r = this.props.scale;
                if ('parent' === this.props.bounds) n = i;
                else {
                  if ('body' === this.props.bounds) {
                    var o = i.getBoundingClientRect(),
                      a = o.left,
                      s = o.top,
                      l = document.body.getBoundingClientRect(),
                      u = -(a - i.offsetLeft * r - l.left) / r,
                      c = -(s - i.offsetTop * r - l.top) / r,
                      d =
                        (document.body.offsetWidth -
                          this.resizable.size.width * r) /
                          r +
                        u,
                      p =
                        (document.body.offsetHeight -
                          this.resizable.size.height * r) /
                          r +
                        c;
                    return this.setState({
                      bounds: { top: c, right: d, bottom: p, left: u },
                    });
                  }
                  if ('window' === this.props.bounds) {
                    if (!this.resizable) return;
                    var f = i.getBoundingClientRect(),
                      h = f.left,
                      g = f.top,
                      m = -(h - i.offsetLeft * r) / r,
                      v = -(g - i.offsetTop * r) / r;
                    (d =
                      (window.innerWidth - this.resizable.size.width * r) / r +
                      m),
                      (p =
                        (window.innerHeight - this.resizable.size.height * r) /
                          r +
                        v);
                    return this.setState({
                      bounds: { top: v, right: d, bottom: p, left: m },
                    });
                  }
                  n = document.querySelector(this.props.bounds);
                }
                if (n instanceof HTMLElement && i instanceof HTMLElement) {
                  var y = n.getBoundingClientRect(),
                    w = y.left,
                    b = y.top,
                    x = i.getBoundingClientRect(),
                    S = (w - x.left) / r,
                    E = b - x.top;
                  if (this.resizable) {
                    var O = this.getOffsetFromParent();
                    this.setState({
                      bounds: {
                        top: E - O.top,
                        right:
                          S +
                          (n.offsetWidth - this.resizable.size.width) -
                          O.left / r,
                        bottom:
                          E +
                          (n.offsetHeight - this.resizable.size.height) -
                          O.top,
                        left: S - O.left / r,
                      },
                    });
                  }
                }
              }
            }),
            (t.prototype.onDrag = function (e, t) {
              if (this.props.onDrag) {
                var n = this.getOffsetFromParent();
                this.props.onDrag(
                  e,
                  u({}, t, { x: t.x - n.left, y: t.y - n.top })
                );
              }
            }),
            (t.prototype.onDragStop = function (e, t) {
              if (this.props.onDragStop) {
                var n = this.getOffsetFromParent(),
                  i = n.left,
                  r = n.top;
                return this.props.onDragStop(
                  e,
                  u({}, t, { x: t.x + i, y: t.y + r })
                );
              }
            }),
            (t.prototype.onResizeStart = function (e, t, n) {
              e.stopPropagation(), (this.isResizing = !0);
              var i = this.props.scale;
              if (
                (this.setState({ original: this.getDraggablePosition() }),
                this.props.bounds)
              ) {
                var r = this.getParent(),
                  o = void 0;
                o =
                  'parent' === this.props.bounds
                    ? r
                    : 'body' === this.props.bounds
                    ? document.body
                    : 'window' === this.props.bounds
                    ? window
                    : document.querySelector(this.props.bounds);
                var a = this.getSelfElement();
                if (
                  a instanceof Element &&
                  (o instanceof HTMLElement || o === window) &&
                  r instanceof HTMLElement
                ) {
                  var s = this.getMaxSizesFromProps(),
                    l = s.maxWidth,
                    u = s.maxHeight,
                    c = this.getParentSize();
                  if (l && 'string' === typeof l)
                    if (l.endsWith('%')) {
                      var d = Number(l.replace('%', '')) / 100;
                      l = c.width * d;
                    } else
                      l.endsWith('px') && (l = Number(l.replace('px', '')));
                  if (u && 'string' === typeof u)
                    if (u.endsWith('%')) {
                      d = Number(u.replace('%', '')) / 100;
                      u = c.width * d;
                    } else
                      u.endsWith('px') && (u = Number(u.replace('px', '')));
                  var p = a.getBoundingClientRect(),
                    f = p.left,
                    h = p.top,
                    g =
                      'window' === this.props.bounds
                        ? { left: 0, top: 0 }
                        : o.getBoundingClientRect(),
                    m = g.left,
                    v = g.top,
                    y = this.getOffsetWidth(o),
                    w = this.getOffsetHeight(o),
                    b = t.toLowerCase().endsWith('left'),
                    x = t.toLowerCase().endsWith('right'),
                    S = t.startsWith('top'),
                    E = t.startsWith('bottom');
                  if (b && this.resizable) {
                    var O = (f - m) / i + this.resizable.size.width;
                    this.setState({ maxWidth: O > Number(l) ? l : O });
                  }
                  if (x || (this.props.lockAspectRatio && !b)) {
                    O = y + (m - f) / i;
                    this.setState({ maxWidth: O > Number(l) ? l : O });
                  }
                  if (S && this.resizable) {
                    O = (h - v) / i + this.resizable.size.height;
                    this.setState({ maxHeight: O > Number(u) ? u : O });
                  }
                  if (E || (this.props.lockAspectRatio && !S)) {
                    O = w + (v - h) / i;
                    this.setState({ maxHeight: O > Number(u) ? u : O });
                  }
                }
              } else
                this.setState({
                  maxWidth: this.props.maxWidth,
                  maxHeight: this.props.maxHeight,
                });
              this.props.onResizeStart && this.props.onResizeStart(e, t, n);
            }),
            (t.prototype.onResize = function (e, t, n, i) {
              var r,
                o,
                a = this.getOffsetFromParent();
              /left/i.test(t) &&
                ((r = this.state.original.x - i.width),
                this.props.position || this.draggable.setState({ x: r }),
                (r += a.left)),
                /top/i.test(t) &&
                  ((o = this.state.original.y - i.height),
                  this.props.position || this.draggable.setState({ y: o }),
                  (o += a.top)),
                this.props.onResize &&
                  ('undefined' === typeof r &&
                    (r = this.getDraggablePosition().x + a.left),
                  'undefined' === typeof o &&
                    (o = this.getDraggablePosition().y + a.top),
                  this.props.onResize(e, t, n, i, { x: r, y: o }));
            }),
            (t.prototype.onResizeStop = function (e, t, n, i) {
              this.isResizing = !1;
              var r = this.getMaxSizesFromProps(),
                o = r.maxWidth,
                a = r.maxHeight;
              if (
                (this.setState({ maxWidth: o, maxHeight: a }),
                this.props.onResizeStop)
              ) {
                var s = this.getDraggablePosition();
                this.props.onResizeStop(e, t, n, i, s);
              }
            }),
            (t.prototype.updateSize = function (e) {
              this.resizable &&
                this.resizable.updateSize({ width: e.width, height: e.height });
            }),
            (t.prototype.updatePosition = function (e) {
              this.draggable.setState(e);
            }),
            (t.prototype.getOffsetFromParent = function () {
              var e = this.props.scale,
                t = this.getParent(),
                n = this.getSelfElement();
              if (!t || null === n) return { top: 0, left: 0 };
              var i = t.getBoundingClientRect(),
                r = i.left,
                o = i.top,
                a = n.getBoundingClientRect(),
                s = this.getDraggablePosition();
              return { left: a.left - r - s.x * e, top: a.top - o - s.y * e };
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.disableDragging,
                r = t.style,
                o = t.dragHandleClassName,
                a = t.position,
                l = t.onMouseDown,
                p = t.dragAxis,
                f = t.dragGrid,
                h = t.bounds,
                g = t.enableUserSelectHack,
                m = t.cancel,
                v = t.children,
                y =
                  (t.onResizeStart,
                  t.onResize,
                  t.onResizeStop,
                  t.onDragStart,
                  t.onDrag,
                  t.onDragStop,
                  t.resizeHandleStyles),
                w = t.resizeHandleClasses,
                b = t.enableResizing,
                x = t.resizeGrid,
                S = t.resizeHandleWrapperClass,
                E = t.resizeHandleWrapperStyle,
                O = t.scale,
                z = (function (e, t) {
                  var n = {};
                  for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) &&
                      t.indexOf(i) < 0 &&
                      (n[i] = e[i]);
                  if (
                    null != e &&
                    'function' === typeof Object.getOwnPropertySymbols
                  ) {
                    var r = 0;
                    for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
                      t.indexOf(i[r]) < 0 && (n[i[r]] = e[i[r]]);
                  }
                  return n;
                })(t, [
                  'disableDragging',
                  'style',
                  'dragHandleClassName',
                  'position',
                  'onMouseDown',
                  'dragAxis',
                  'dragGrid',
                  'bounds',
                  'enableUserSelectHack',
                  'cancel',
                  'children',
                  'onResizeStart',
                  'onResize',
                  'onResizeStop',
                  'onDragStart',
                  'onDrag',
                  'onDragStop',
                  'resizeHandleStyles',
                  'resizeHandleClasses',
                  'enableResizing',
                  'resizeGrid',
                  'resizeHandleWrapperClass',
                  'resizeHandleWrapperStyle',
                  'scale',
                ]),
                k = this.props.default ? u({}, this.props.default) : void 0;
              delete z.default;
              var R,
                P = u(
                  {},
                  d,
                  n || o ? { cursor: 'auto' } : { cursor: 'move' },
                  r
                ),
                C = this.getOffsetFromParent(),
                N = C.left,
                A = C.top;
              return (
                a && (R = { x: a.x - N, y: a.y - A }),
                Object(i.createElement)(
                  c,
                  {
                    ref: function (t) {
                      t && (e.draggable = t);
                    },
                    handle: o ? '.' + o : void 0,
                    defaultPosition: k,
                    onMouseDown: l,
                    onStart: this.onDragStart,
                    onDrag: this.onDrag,
                    onStop: this.onDragStop,
                    axis: p,
                    disabled: n,
                    grid: f,
                    bounds: h ? this.state.bounds : void 0,
                    position: R,
                    enableUserSelectHack: g,
                    cancel: m,
                    scale: O,
                  },
                  Object(i.createElement)(
                    s.Resizable,
                    u({}, z, {
                      ref: function (t) {
                        t && (e.resizable = t);
                      },
                      defaultSize: k,
                      size: this.props.size,
                      enable: b,
                      onResizeStart: this.onResizeStart,
                      onResize: this.onResize,
                      onResizeStop: this.onResizeStop,
                      style: P,
                      minWidth: this.props.minWidth,
                      minHeight: this.props.minHeight,
                      maxWidth: this.isResizing
                        ? this.state.maxWidth
                        : this.props.maxWidth,
                      maxHeight: this.isResizing
                        ? this.state.maxHeight
                        : this.props.maxHeight,
                      grid: x,
                      handleWrapperClass: S,
                      handleWrapperStyle: E,
                      lockAspectRatio: this.props.lockAspectRatio,
                      lockAspectRatioExtraWidth: this.props
                        .lockAspectRatioExtraWidth,
                      lockAspectRatioExtraHeight: this.props
                        .lockAspectRatioExtraHeight,
                      handleStyles: y,
                      handleClasses: w,
                      scale: this.props.scale,
                    }),
                    v
                  )
                )
              );
            }),
            (t.defaultProps = {
              maxWidth: Number.MAX_SAFE_INTEGER,
              maxHeight: Number.MAX_SAFE_INTEGER,
              scale: 1,
              onResizeStart: function () {},
              onResize: function () {},
              onResizeStop: function () {},
              onDragStart: function () {},
              onDrag: function () {},
              onDragStop: function () {},
            }),
            t
          );
        })(i.Component);
      function f(e) {
        var t = e.modalRef,
          n = e.dispatch,
          r = e.closeOnClickOutside,
          o = function (e) {
            var i = a.a.findDOMNode(t.current);
            i && !i.contains(e.target) && r && n({});
          };
        Object(i.useEffect)(function () {
          return (
            document.addEventListener('mousedown', o),
            function () {
              document.removeEventListener('mousedown', o);
            }
          );
        }, []);
      }
      var h = n('CEpn'),
        g = new Set(),
        m = function () {
          return g.forEach(function (e) {
            return e();
          });
        };
      function v(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 250,
          n = arguments[2],
          i = void 0,
          r = void 0;
        return function () {
          var o = n || this,
            a = Date.now(),
            s = arguments;
          i && a < i + t
            ? (clearTimeout(r),
              (r = setTimeout(function () {
                (i = a), e.apply(o, s);
              }, t)))
            : ((i = a), e.apply(o, s));
        };
      }
      var y = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = 100,
          n = e.height,
          i = e.width,
          o = r.a.useState({
            width: window.innerWidth,
            height: window.innerHeight,
          }),
          a = o[0],
          s = o[1],
          l = v(function () {
            s({ width: window.innerWidth, height: window.innerHeight });
          }, t);
        return (
          h.isMobile ||
            r.a.useEffect(function () {
              return (
                0 === g.size && window.addEventListener('resize', m, !0),
                (n < a.height || i < a.width) && g.add(l),
                function () {
                  g.delete(l),
                    0 === g.size && window.removeEventListener('resize', m, !0);
                }
              );
            }, []),
          a
        );
      };
      function w() {
        Object(i.useLayoutEffect)(function () {
          var e = window.getComputedStyle(document.body).overflow;
          return (
            (document.body.style.overflow = 'hidden'),
            function () {
              return (document.body.style.overflow = e);
            }
          );
        }, []);
      }
      var b =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        };
      var x = n('BrGu'),
        S = function (e) {
          return e
            ? { width: e.offsetWidth, height: e.offsetHeight }
            : { width: 0, height: 0 };
        },
        E = function (e) {
          var t = Object(i.useState)(S(e ? e.current : {})),
            n = t[0],
            r = t[1],
            o = Object(i.useCallback)(
              function () {
                e.current && r(S(e.current));
              },
              [e]
            );
          return (
            Object(i.useLayoutEffect)(
              function () {
                if (e.current) {
                  if ((o(), 'function' === typeof ResizeObserver)) {
                    var t = new ResizeObserver(function () {
                      return o();
                    });
                    return (
                      t.observe(e.current),
                      function () {
                        t.disconnect(e.current), (t = null);
                      }
                    );
                  }
                  return (
                    window.addEventListener('resize', o),
                    function () {
                      window.removeEventListener('resize', o);
                    }
                  );
                }
              },
              [e.current]
            ),
            n
          );
        },
        O =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          };
      var z = function () {
          return r.a.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '32',
              height: '32',
              viewBox: '0 0 32 32',
            },
            r.a.createElement('path', {
              id: '_ionicons_svg_ios-close_5_',
              'data-name': '_ionicons_svg_ios-close (5)',
              d:
                'M179.418,175.84l10.925-10.925a2.56,2.56,0,0,0-3.62-3.62L175.8,172.22l-10.925-10.925a2.56,2.56,0,1,0-3.62,3.62l10.925,10.925-10.925,10.925a2.56,2.56,0,0,0,3.62,3.62L175.8,179.46l10.925,10.925a2.56,2.56,0,0,0,3.62-3.62Z',
              transform: 'translate(-160.5 -160.55)',
              fill: 'currentColor',
            })
          );
        },
        k =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          },
        R = void 0,
        P = void 0,
        C = {
          show: !1,
          springState: !1,
          component: null,
          closeOnClickOutside: !0,
          closeComponent: null,
          componentProps: {},
          overlayClassName: '',
          withRnd: !1,
          springStyle: '',
          config: {
            default: { width: 500, height: 300 },
            className: '',
            minWidth: 300,
            minHeight: 'auto',
            lockAspectRatio: !0,
            disableDragging: !0,
            bounds: '.reuseModalParentWrapper',
            enableResizing: {
              bottom: !1,
              bottomLeft: !1,
              bottomRight: !1,
              left: !1,
              right: !1,
              top: !1,
              topLeft: !1,
              topRight: !1,
            },
          },
        };
      function N() {
        return !(
          'undefined' === typeof window ||
          !window.document ||
          !window.document.createElement
        );
      }
      var A = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return k({}, e, {
          show: void 0 !== t.show ? t.show : !e.show,
          springState:
            void 0 !== t.springState ? t.springState : !e.springState,
          withRnd: void 0 !== t.withRnd ? t.withRnd : e.withRnd,
          springStyle: void 0 !== t.springStyle ? t.springStyle : e.springStyle,
          overlayClassName:
            void 0 !== t.overlayClassName
              ? t.overlayClassName
              : e.overlayClassName,
          component: void 0 !== t.component ? t.component : null,
          componentProps: void 0 !== t.componentProps ? t.componentProps : {},
          closeComponent: void 0 !== t.closeComponent ? t.closeComponent : null,
          closeOnClickOutside:
            void 0 !== t.closeOnClickOutside
              ? t.closeOnClickOutside
              : e.closeOnClickOutside,
          config: void 0 !== t.config ? k({}, e.config, t.config) : e.config,
        });
      };
      function j(e) {
        var t = e.children,
          n = (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = Object(i.useState)(null),
              n = t[0],
              o = t[1],
              s = e.id;
            return (
              Object(i.useEffect)(function () {
                var e = window.document.getElementById(s || '__next');
                if ((e || (e = document.body), !e)) return null;
                var t = window.document.createElement('div');
                return (
                  e.appendChild(t),
                  o(t),
                  function () {
                    e.removeChild(t);
                  }
                );
              }, []),
              function (e) {
                return n
                  ? a.a.createPortal(e.children, n)
                  : r.a.createElement(i.Fragment, null, e.children);
              }
            );
          })(),
          o = Object(i.useReducer)(A, C),
          s = o[0],
          l = o[1];
        (R = l),
          (P = function () {
            l();
          });
        var u = s.show,
          c = s.component,
          d = s.closeComponent,
          h = s.overlayClassName,
          g = s.withRnd,
          m = s.springStyle,
          v = s.springState,
          S = (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = e.dispatch,
              n = e.closeOnClickOutside,
              o = y();
            return function (e) {
              var a = Object(i.useRef)();
              f({ modalRef: a, dispatch: t, closeOnClickOutside: n }), w();
              var s = e.config,
                l = b({}, s, {
                  className: 'reuseModalHolder ' + s.className,
                  maxWidth:
                    s.default.width >= o.width
                      ? o.width - 40
                      : 'auto' === s.default.width
                      ? o.width - 40
                      : '',
                  maxHeight:
                    s.default.height >= o.width
                      ? o.height - 60
                      : 'auto' === s.default.height
                      ? o.height - 60
                      : '',
                  default: {
                    width: s.default.width,
                    height: s.default.height,
                    x: s.default.x
                      ? s.default.x
                      : s.default.width <= o.width
                      ? (o.width - s.default.width) / 2
                      : 20,
                    y: s.default.y
                      ? s.default.y
                      : s.default.height <= o.height
                      ? (o.height - s.default.height) / 2
                      : 30,
                  },
                });
              return r.a.createElement(
                p,
                b({}, l, { ref: a }),
                r.a.createElement(
                  'div',
                  { className: 'innerRndComponent' },
                  e.children
                )
              );
            };
          })({ dispatch: l, closeOnClickOutside: s.closeOnClickOutside }),
          k = (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = e.dispatch,
              n = e.closeOnClickOutside;
            return function (e) {
              var o = Object(i.useRef)(),
                a = E(o),
                s = y(a);
              f({ modalRef: o, dispatch: t, closeOnClickOutside: n }), w();
              var l = e.configs,
                u = e.style,
                c = O({}, l, {
                  className: 'reuseModalHolder ' + l.className,
                  maxHeight: l.maxHeight
                    ? l.maxHeight
                    : (l.height ? l.height : l.default.height) >= s.height
                    ? s.height - 60
                    : 'auto' === l.height || 'auto' === l.default.height
                    ? s.height - 60
                    : '',
                  maxWidth: l.maxWidth
                    ? l.maxWidth
                    : (l.width ? l.width : l.default.width) >= s.width
                    ? s.width - 40
                    : 'auto' === l.width || 'auto' === l.default.width
                    ? s.width - 40
                    : '',
                  width: l.width ? l.width : l.default.width,
                  height: l.height ? l.height : l.default.height,
                  x: l.default.x
                    ? l.default.x
                    : l.x
                    ? l.x
                    : (l.width ? l.width : l.default.width) <= s.width
                    ? (s.width - (l.width ? l.width : l.default.width)) / 2
                    : a.width <= s.width
                    ? (s.width - a.width) / 2
                    : 20,
                  y: l.default.y
                    ? l.default.y
                    : l.y
                    ? l.y
                    : (l.height ? l.height : l.default.height) <= s.height
                    ? (s.height - (l.height ? l.height : l.default.height)) / 2
                    : a.height <= s.height
                    ? (s.height - a.height) / 2
                    : 30,
                  animationFrom: l.animationFrom
                    ? l.animationFrom
                    : { opacity: '0.4', transform: 'scale3d(0.3, 0.3, 0.3)' },
                  animationTo: l.animationTo
                    ? l.animationTo
                    : { opacity: '1', transform: 'scale3d(1, 1, 1)' },
                  transition: l.transition
                    ? l.transition
                    : { mass: 1, tension: 130, friction: 26 },
                }),
                d = {
                  maxWidth: c.maxWidth,
                  maxHeight: c.maxHeight,
                  width: c.width,
                  height: c.height,
                  position: 'absolute',
                  left: c.x,
                  top: c.y,
                };
              return r.a.createElement(
                x.Spring,
                {
                  from: O({}, c.animationFrom),
                  to: O({}, c.animationTo),
                  config: c.transition,
                },
                function (t) {
                  return r.a.createElement(
                    'div',
                    { ref: o, className: c.className, style: O({}, d, u, t) },
                    r.a.createElement(
                      'div',
                      { className: 'innerRndComponent' },
                      e.children
                    )
                  );
                }
              );
            };
          })({ dispatch: l, closeOnClickOutside: s.closeOnClickOutside }),
          j = c,
          T =
            d ||
            function () {
              return r.a.createElement(
                'button',
                {
                  className: 'reuseModalCloseBtn',
                  onClick: function () {
                    l({});
                  },
                },
                r.a.createElement(z, null)
              );
            };
        return r.a.createElement(
          i.Fragment,
          null,
          u &&
            r.a.createElement(
              i.Fragment,
              null,
              N
                ? g
                  ? r.a.createElement(
                      i.Fragment,
                      null,
                      r.a.createElement('div', {
                        className: 'reuseModalOverlay ' + h,
                      }),
                      r.a.createElement(T, null),
                      r.a.createElement(
                        'div',
                        { className: 'reuseModalParentWrapper' },
                        r.a.createElement(
                          S,
                          { config: s.config },
                          r.a.createElement(j, s.componentProps)
                        )
                      )
                    )
                  : r.a.createElement(
                      i.Fragment,
                      null,
                      r.a.createElement('div', {
                        className: 'reuseModalOverlay ' + h,
                      }),
                      r.a.createElement(T, null),
                      r.a.createElement(
                        'div',
                        { className: 'reuseModalParentWrapper' },
                        r.a.createElement(
                          k,
                          { configs: s.config, springState: v, style: m },
                          r.a.createElement(j, s.componentProps)
                        )
                      )
                    )
                : r.a.createElement(
                    n,
                    null,
                    r.a.createElement('div', {
                      className: 'reuseModalOverlay ' + h,
                    }),
                    r.a.createElement(T, null),
                    r.a.createElement(
                      'div',
                      { className: 'reuseModalParrentWrapper' },
                      r.a.createElement(
                        S,
                        { config: s.config },
                        r.a.createElement(j, s.componentProps)
                      )
                    )
                  )
            ),
          t
        );
      }
    },
    'W/Kd': function (e, t) {
      e.exports = function (e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      };
    },
    X3tg: function (e, t, n) {
      'use strict';
      var i =
          (this && this.__extends) ||
          (function () {
            var e = function (t, n) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                })(t, n);
            };
            return function (t, n) {
              function i() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((i.prototype = n.prototype), new i()));
            };
          })(),
        r =
          (this && this.__assign) ||
          function () {
            return (r =
              Object.assign ||
              function (e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        o =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var s = o(n('ERkP')),
        l = n('HbsM'),
        u = a(n('Yu3e')),
        c = { width: 'auto', height: 'auto' },
        d = u.default(function (e, t, n) {
          return Math.max(Math.min(e, n), t);
        }),
        p = u.default(function (e, t) {
          return Math.round(e / t) * t;
        }),
        f = u.default(function (e, t) {
          return new RegExp(e, 'i').test(t);
        }),
        h = u.default(function (e, t, n) {
          void 0 === n && (n = 0);
          var i = t.reduce(function (n, i, r) {
              return Math.abs(i - e) < Math.abs(t[n] - e) ? r : n;
            }, 0),
            r = Math.abs(t[i] - e);
          return 0 === n || r < n ? t[i] : e;
        }),
        g = u.default(function (e, t) {
          return e.substr(e.length - t.length, t.length) === t;
        }),
        m = u.default(function (e) {
          return 'auto' === (e = e.toString())
            ? e
            : g(e, 'px')
            ? e
            : g(e, '%')
            ? e
            : g(e, 'vh')
            ? e
            : g(e, 'vw')
            ? e
            : g(e, 'vmax')
            ? e
            : g(e, 'vmin')
            ? e
            : e + 'px';
        }),
        v = u.default(function (e, t, n, i, r) {
          if (t && 'string' === typeof t && g(t, '%')) {
            var o = Number(t.replace('%', '')) / 100;
            t = e.width * o;
          }
          if (n && 'string' === typeof n && g(n, '%')) {
            o = Number(n.replace('%', '')) / 100;
            n = e.height * o;
          }
          if (i && 'string' === typeof i && g(i, '%')) {
            o = Number(i.replace('%', '')) / 100;
            i = e.width * o;
          }
          if (r && 'string' === typeof r && g(r, '%')) {
            o = Number(r.replace('%', '')) / 100;
            r = e.height * o;
          }
          return {
            maxWidth: 'undefined' === typeof t ? void 0 : Number(t),
            maxHeight: 'undefined' === typeof n ? void 0 : Number(n),
            minWidth: 'undefined' === typeof i ? void 0 : Number(i),
            minHeight: 'undefined' === typeof r ? void 0 : Number(r),
          };
        }),
        y = [
          'style',
          'className',
          'grid',
          'snap',
          'bounds',
          'size',
          'defaultSize',
          'minWidth',
          'minHeight',
          'maxWidth',
          'maxHeight',
          'lockAspectRatio',
          'lockAspectRatioExtraWidth',
          'lockAspectRatioExtraHeight',
          'enable',
          'handleStyles',
          'handleClasses',
          'handleWrapperStyle',
          'handleWrapperClass',
          'children',
          'onResizeStart',
          'onResize',
          'onResizeStop',
          'handleComponent',
          'scale',
          'resizeRatio',
          'snapGap',
        ],
        w = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.ratio = 1),
              (n.resizable = null),
              (n.extendsProps = {}),
              (n.parentLeft = 0),
              (n.parentTop = 0),
              (n.resizableLeft = 0),
              (n.resizableTop = 0),
              (n.targetLeft = 0),
              (n.targetTop = 0),
              (n.state = {
                isResizing: !1,
                resizeCursor: 'auto',
                width:
                  'undefined' === typeof (n.propsSize && n.propsSize.width)
                    ? 'auto'
                    : n.propsSize && n.propsSize.width,
                height:
                  'undefined' === typeof (n.propsSize && n.propsSize.height)
                    ? 'auto'
                    : n.propsSize && n.propsSize.height,
                direction: 'right',
                original: { x: 0, y: 0, width: 0, height: 0 },
              }),
              n.updateExtendsProps(t),
              (n.onResizeStart = n.onResizeStart.bind(n)),
              (n.onMouseMove = n.onMouseMove.bind(n)),
              (n.onMouseUp = n.onMouseUp.bind(n)),
              'undefined' !== typeof window &&
                (window.addEventListener('mouseup', n.onMouseUp),
                window.addEventListener('mousemove', n.onMouseMove),
                window.addEventListener('mouseleave', n.onMouseUp),
                window.addEventListener('touchmove', n.onMouseMove),
                window.addEventListener('touchend', n.onMouseUp)),
              n
            );
          }
          return (
            i(t, e),
            Object.defineProperty(t.prototype, 'parentNode', {
              get: function () {
                return this.resizable ? this.resizable.parentNode : null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'propsSize', {
              get: function () {
                return this.props.size || this.props.defaultSize || c;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'base', {
              get: function () {
                var e = this.parentNode;
                if (e)
                  for (
                    var t = 0, n = [].slice.call(e.children);
                    t < n.length;
                    t++
                  ) {
                    var i = n[t];
                    if (
                      i instanceof HTMLElement &&
                      i.classList.contains('__resizable_base__')
                    )
                      return i;
                  }
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'size', {
              get: function () {
                var e = 0,
                  t = 0;
                if ('undefined' !== typeof window && this.resizable) {
                  var n = this.resizable.offsetWidth,
                    i = this.resizable.offsetHeight,
                    r = this.resizable.style.position;
                  'relative' !== r &&
                    (this.resizable.style.position = 'relative'),
                    (e =
                      'auto' !== this.resizable.style.width
                        ? this.resizable.offsetWidth
                        : n),
                    (t =
                      'auto' !== this.resizable.style.height
                        ? this.resizable.offsetHeight
                        : i),
                    (this.resizable.style.position = r);
                }
                return { width: e, height: t };
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'sizeStyle', {
              get: function () {
                var e = this,
                  t = this.props.size,
                  n = function (t) {
                    if (
                      'undefined' === typeof e.state[t] ||
                      'auto' === e.state[t]
                    )
                      return 'auto';
                    if (
                      e.propsSize &&
                      e.propsSize[t] &&
                      g(e.propsSize[t].toString(), '%')
                    ) {
                      if (g(e.state[t].toString(), '%'))
                        return e.state[t].toString();
                      var n = e.getParentSize();
                      return (
                        (Number(e.state[t].toString().replace('px', '')) /
                          n[t]) *
                          100 +
                        '%'
                      );
                    }
                    return m(e.state[t]);
                  };
                return {
                  width:
                    t &&
                    'undefined' !== typeof t.width &&
                    !this.state.isResizing
                      ? m(t.width)
                      : n('width'),
                  height:
                    t &&
                    'undefined' !== typeof t.height &&
                    !this.state.isResizing
                      ? m(t.height)
                      : n('height'),
                };
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.updateExtendsProps = function (e) {
              this.extendsProps = Object.keys(e).reduce(function (t, n) {
                return -1 !== y.indexOf(n) ? t : ((t[n] = e[n]), t);
              }, {});
            }),
            (t.prototype.getParentSize = function () {
              if (!this.base || !this.parentNode)
                return { width: window.innerWidth, height: window.innerHeight };
              var e = !1,
                t = this.parentNode.style.flexWrap,
                n = this.base.style.minWidth;
              'wrap' !== t &&
                ((e = !0), (this.parentNode.style.flexWrap = 'wrap')),
                (this.base.style.position = 'relative'),
                (this.base.style.minWidth = '100%');
              var i = {
                width: this.base.offsetWidth,
                height: this.base.offsetHeight,
              };
              return (
                (this.base.style.position = 'absolute'),
                e && (this.parentNode.style.flexWrap = t),
                (this.base.style.minWidth = n),
                i
              );
            }),
            (t.prototype.componentDidMount = function () {
              this.setState({
                width: this.state.width || this.size.width,
                height: this.state.height || this.size.height,
              });
              var e = this.parentNode;
              if (e instanceof HTMLElement && !this.base) {
                var t = document.createElement('div');
                (t.style.width = '100%'),
                  (t.style.height = '100%'),
                  (t.style.position = 'absolute'),
                  (t.style.transform = 'scale(0, 0)'),
                  (t.style.left = '0'),
                  (t.style.flex = '0'),
                  t.classList
                    ? t.classList.add('__resizable_base__')
                    : (t.className += '__resizable_base__'),
                  e.appendChild(t);
              }
            }),
            (t.prototype.componentWillReceiveProps = function (e) {
              this.updateExtendsProps(e);
            }),
            (t.prototype.componentWillUnmount = function () {
              if ('undefined' !== typeof window) {
                window.removeEventListener('mouseup', this.onMouseUp),
                  window.removeEventListener('mousemove', this.onMouseMove),
                  window.removeEventListener('mouseleave', this.onMouseUp),
                  window.removeEventListener('touchmove', this.onMouseMove),
                  window.removeEventListener('touchend', this.onMouseUp);
                var e = this.parentNode;
                if (!this.base || !e) return;
                if (!(e instanceof HTMLElement) || !(this.base instanceof Node))
                  return;
                e.removeChild(this.base);
              }
            }),
            (t.prototype.createSizeForCssProperty = function (e, t) {
              var n = this.propsSize && this.propsSize[t];
              return 'auto' !== this.state[t] ||
                this.state.original[t] !== e ||
                ('undefined' !== typeof n && 'auto' !== n)
                ? e
                : 'auto';
            }),
            (t.prototype.calculateNewMaxFromBoundary = function (e, t) {
              if ('parent' === this.props.bounds) {
                var n = this.parentNode;
                if (n instanceof HTMLElement) {
                  var i =
                      n.offsetWidth + (this.parentLeft - this.resizableLeft),
                    r = n.offsetHeight + (this.parentTop - this.resizableTop);
                  (e = e && e < i ? e : i), (t = t && t < r ? t : r);
                }
              } else if ('window' === this.props.bounds) {
                if ('undefined' !== typeof window) {
                  (i = window.innerWidth - this.resizableLeft),
                    (r = window.innerHeight - this.resizableTop);
                  (e = e && e < i ? e : i), (t = t && t < r ? t : r);
                }
              } else if (this.props.bounds instanceof HTMLElement) {
                (i =
                  this.props.bounds.offsetWidth +
                  (this.targetLeft - this.resizableLeft)),
                  (r =
                    this.props.bounds.offsetHeight +
                    (this.targetTop - this.resizableTop));
                (e = e && e < i ? e : i), (t = t && t < r ? t : r);
              }
              return { maxWidth: e, maxHeight: t };
            }),
            (t.prototype.calculateNewSizeFromDirection = function (e, t) {
              var n = this.props.scale || 1,
                i = this.props.resizeRatio || 1,
                r = this.state,
                o = r.direction,
                a = r.original,
                s = this.props,
                l = s.lockAspectRatio,
                u = s.lockAspectRatioExtraHeight,
                c = s.lockAspectRatioExtraWidth,
                d = a.width,
                p = a.height,
                h = u || 0,
                g = c || 0;
              return (
                f('right', o) &&
                  ((d = a.width + ((e - a.x) * i) / n),
                  l && (p = (d - g) / this.ratio + h)),
                f('left', o) &&
                  ((d = a.width - ((e - a.x) * i) / n),
                  l && (p = (d - g) / this.ratio + h)),
                f('bottom', o) &&
                  ((p = a.height + ((t - a.y) * i) / n),
                  l && (d = (p - h) * this.ratio + g)),
                f('top', o) &&
                  ((p = a.height - ((t - a.y) * i) / n),
                  l && (d = (p - h) * this.ratio + g)),
                { newWidth: d, newHeight: p }
              );
            }),
            (t.prototype.calculateNewSizeFromAspectRatio = function (
              e,
              t,
              n,
              i
            ) {
              var r = this.props,
                o = r.lockAspectRatio,
                a = r.lockAspectRatioExtraHeight,
                s = r.lockAspectRatioExtraWidth,
                l = 'undefined' === typeof i.width ? 10 : i.width,
                u = 'undefined' === typeof n.width || n.width < 0 ? e : n.width,
                c = 'undefined' === typeof i.height ? 10 : i.height,
                p =
                  'undefined' === typeof n.height || n.height < 0
                    ? t
                    : n.height,
                f = a || 0,
                h = s || 0;
              if (o) {
                var g = (c - f) * this.ratio + h,
                  m = (p - f) * this.ratio + h,
                  v = (l - h) / this.ratio + f,
                  y = (u - h) / this.ratio + f,
                  w = Math.max(l, g),
                  b = Math.min(u, m),
                  x = Math.max(c, v),
                  S = Math.min(p, y);
                (e = d(e, w, b)), (t = d(t, x, S));
              } else (e = d(e, l, u)), (t = d(t, c, p));
              return { newWidth: e, newHeight: t };
            }),
            (t.prototype.setBoundingClientRect = function () {
              if ('parent' === this.props.bounds) {
                var e = this.parentNode;
                if (e instanceof HTMLElement) {
                  var t = e.getBoundingClientRect();
                  (this.parentLeft = t.left), (this.parentTop = t.top);
                }
              }
              if (this.props.bounds instanceof HTMLElement) {
                var n = this.props.bounds.getBoundingClientRect();
                (this.targetLeft = n.left), (this.targetTop = n.top);
              }
              if (this.resizable) {
                var i = this.resizable.getBoundingClientRect(),
                  r = i.left,
                  o = i.top;
                (this.resizableLeft = r), (this.resizableTop = o);
              }
            }),
            (t.prototype.onResizeStart = function (e, t) {
              var n = 0,
                i = 0;
              if (e.nativeEvent instanceof MouseEvent) {
                if (
                  ((n = e.nativeEvent.clientX),
                  (i = e.nativeEvent.clientY),
                  3 === e.nativeEvent.which)
                )
                  return;
              } else
                e.nativeEvent instanceof TouchEvent &&
                  ((n = e.nativeEvent.touches[0].clientX),
                  (i = e.nativeEvent.touches[0].clientY));
              this.props.onResizeStart &&
                this.resizable &&
                this.props.onResizeStart(e, t, this.resizable),
                this.props.size &&
                  ('undefined' !== typeof this.props.size.height &&
                    this.props.size.height !== this.state.height &&
                    this.setState({ height: this.props.size.height }),
                  'undefined' !== typeof this.props.size.width &&
                    this.props.size.width !== this.state.width &&
                    this.setState({ width: this.props.size.width })),
                (this.ratio =
                  'number' === typeof this.props.lockAspectRatio
                    ? this.props.lockAspectRatio
                    : this.size.width / this.size.height),
                this.setBoundingClientRect(),
                this.setState({
                  original: {
                    x: n,
                    y: i,
                    width: this.size.width,
                    height: this.size.height,
                  },
                  isResizing: !0,
                  resizeCursor:
                    window.getComputedStyle(e.target).cursor || 'auto',
                  direction: t,
                });
            }),
            (t.prototype.onMouseMove = function (e) {
              if (this.state.isResizing && this.resizable) {
                var t = this.props,
                  n = t.maxWidth,
                  i = t.maxHeight,
                  r = t.minWidth,
                  o = t.minHeight,
                  a =
                    e instanceof MouseEvent ? e.clientX : e.touches[0].clientX,
                  s =
                    e instanceof MouseEvent ? e.clientY : e.touches[0].clientY,
                  l = this.state,
                  u = l.direction,
                  c = l.original,
                  d = l.width,
                  f = l.height,
                  m = this.getParentSize(),
                  y = v(m, n, i, r, o);
                (n = y.maxWidth),
                  (i = y.maxHeight),
                  (r = y.minWidth),
                  (o = y.minHeight);
                var w = this.calculateNewSizeFromDirection(a, s),
                  b = w.newHeight,
                  x = w.newWidth,
                  S = this.calculateNewMaxFromBoundary(n, i),
                  E = this.calculateNewSizeFromAspectRatio(
                    x,
                    b,
                    { width: S.maxWidth, height: S.maxHeight },
                    { width: r, height: o }
                  );
                if (((x = E.newWidth), (b = E.newHeight), this.props.grid)) {
                  var O = p(x, this.props.grid[0]),
                    z = p(b, this.props.grid[1]),
                    k = this.props.snapGap || 0;
                  (x = 0 === k || Math.abs(O - x) <= k ? O : x),
                    (b = 0 === k || Math.abs(z - b) <= k ? z : b);
                }
                this.props.snap &&
                  this.props.snap.x &&
                  (x = h(x, this.props.snap.x, this.props.snapGap)),
                  this.props.snap &&
                    this.props.snap.y &&
                    (b = h(b, this.props.snap.y, this.props.snapGap));
                var R = { width: x - c.width, height: b - c.height };
                if (d && 'string' === typeof d)
                  if (g(d, '%')) x = (x / m.width) * 100 + '%';
                  else if (g(d, 'vw')) {
                    x = (x / window.innerWidth) * 100 + 'vw';
                  } else if (g(d, 'vh')) {
                    x = (x / window.innerHeight) * 100 + 'vh';
                  }
                if (f && 'string' === typeof f)
                  if (g(f, '%')) b = (b / m.height) * 100 + '%';
                  else if (g(f, 'vw')) {
                    b = (b / window.innerWidth) * 100 + 'vw';
                  } else if (g(f, 'vh')) {
                    b = (b / window.innerHeight) * 100 + 'vh';
                  }
                this.setState({
                  width: this.createSizeForCssProperty(x, 'width'),
                  height: this.createSizeForCssProperty(b, 'height'),
                }),
                  this.props.onResize &&
                    this.props.onResize(e, u, this.resizable, R);
              }
            }),
            (t.prototype.onMouseUp = function (e) {
              var t = this.state,
                n = t.isResizing,
                i = t.direction,
                r = t.original;
              if (n && this.resizable) {
                var o = {
                  width: this.size.width - r.width,
                  height: this.size.height - r.height,
                };
                this.props.onResizeStop &&
                  this.props.onResizeStop(e, i, this.resizable, o),
                  this.props.size && this.setState(this.props.size),
                  this.setState({ isResizing: !1, resizeCursor: 'auto' });
              }
            }),
            (t.prototype.updateSize = function (e) {
              this.setState({ width: e.width, height: e.height });
            }),
            (t.prototype.renderResizer = function () {
              var e = this,
                t = this.props,
                n = t.enable,
                i = t.handleStyles,
                r = t.handleClasses,
                o = t.handleWrapperStyle,
                a = t.handleWrapperClass,
                u = t.handleComponent;
              if (!n) return null;
              var c = Object.keys(n).map(function (t) {
                return !1 !== n[t]
                  ? s.createElement(
                      l.Resizer,
                      {
                        key: t,
                        direction: t,
                        onResizeStart: e.onResizeStart,
                        replaceStyles: i && i[t],
                        className: r && r[t],
                      },
                      u && u[t] ? u[t] : null
                    )
                  : null;
              });
              return s.createElement('span', { className: a, style: o }, c);
            }),
            (t.prototype.render = function () {
              var e = this;
              return s.createElement(
                'div',
                r(
                  {
                    ref: function (t) {
                      t && (e.resizable = t);
                    },
                    style: r(
                      {
                        position: 'relative',
                        userSelect: this.state.isResizing ? 'none' : 'auto',
                      },
                      this.props.style,
                      this.sizeStyle,
                      {
                        maxWidth: this.props.maxWidth,
                        maxHeight: this.props.maxHeight,
                        minWidth: this.props.minWidth,
                        minHeight: this.props.minHeight,
                        boxSizing: 'border-box',
                      }
                    ),
                    className: this.props.className,
                  },
                  this.extendsProps
                ),
                this.state.isResizing &&
                  s.createElement('div', {
                    style: {
                      height: '100%',
                      width: '100%',
                      backgroundColor: 'rgba(0,0,0,0)',
                      cursor: '' + (this.state.resizeCursor || 'auto'),
                      opacity: 0,
                      position: 'fixed',
                      zIndex: 9999,
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    },
                  }),
                this.props.children,
                this.renderResizer()
              );
            }),
            (t.defaultProps = {
              onResizeStart: function () {},
              onResize: function () {},
              onResizeStop: function () {},
              enable: {
                top: !0,
                right: !0,
                bottom: !0,
                left: !0,
                topRight: !0,
                bottomRight: !0,
                bottomLeft: !0,
                topLeft: !0,
              },
              style: {},
              grid: [1, 1],
              lockAspectRatio: !1,
              lockAspectRatioExtraWidth: 0,
              lockAspectRatioExtraHeight: 0,
              scale: 1,
              resizeRatio: 1,
              snapGap: 0,
            }),
            t
          );
        })(s.Component);
      t.Resizable = w;
    },
    Yu3e: function (e, t) {
      function n(e, t, n, i) {
        var r,
          o =
            null == (r = i) || 'number' === typeof r || 'boolean' === typeof r
              ? i
              : n(i),
          a = t.get(o);
        return (
          'undefined' === typeof a && ((a = e.call(this, i)), t.set(o, a)), a
        );
      }
      function i(e, t, n) {
        var i = Array.prototype.slice.call(arguments, 3),
          r = n(i),
          o = t.get(r);
        return (
          'undefined' === typeof o && ((o = e.apply(this, i)), t.set(r, o)), o
        );
      }
      function r(e, t, n, i, r) {
        return n.bind(t, e, i, r);
      }
      function o(e, t) {
        return r(
          e,
          this,
          1 === e.length ? n : i,
          t.cache.create(),
          t.serializer
        );
      }
      function a() {
        return JSON.stringify(arguments);
      }
      function s() {
        this.cache = Object.create(null);
      }
      (s.prototype.has = function (e) {
        return e in this.cache;
      }),
        (s.prototype.get = function (e) {
          return this.cache[e];
        }),
        (s.prototype.set = function (e, t) {
          this.cache[e] = t;
        });
      var l = {
        create: function () {
          return new s();
        },
      };
      (e.exports = function (e, t) {
        var n = t && t.cache ? t.cache : l,
          i = t && t.serializer ? t.serializer : a;
        return (t && t.strategy ? t.strategy : o)(e, {
          cache: n,
          serializer: i,
        });
      }),
        (e.exports.strategies = {
          variadic: function (e, t) {
            return r(e, this, i, t.cache.create(), t.serializer);
          },
          monadic: function (e, t) {
            return r(e, this, n, t.cache.create(), t.serializer);
          },
        });
    },
    jvDv: function (e, t, n) {
      'use strict';
      n.d(t, 'd', function () {
        return u;
      }),
        n.d(t, 'b', function () {
          return c;
        }),
        n.d(t, 'c', function () {
          return f;
        }),
        n.d(t, 'e', function () {
          return h;
        }),
        n.d(t, 'a', function () {
          return g;
        });
      var i = n('Km8e'),
        r = n.n(i),
        o = function (e, t) {
          var n = r()({}, e, t);
          for (var i in e) {
            var o;
            e[i] &&
              'object' === typeof t[i] &&
              r()(n, (((o = {})[i] = r()(e[i], t[i])), o));
          }
          return n;
        },
        a = {
          breakpoints: [40, 52, 64].map(function (e) {
            return e + 'em';
          }),
        },
        s = function (e) {
          return '@media screen and (min-width: ' + e + ')';
        },
        l = function (e, t) {
          return u(t, e, e);
        },
        u = function (e, t, n, i, r) {
          for (t = t && t.split ? t.split('.') : [t], i = 0; i < t.length; i++)
            e = e ? e[t[i]] : r;
          return e === r ? n : e;
        },
        c = function e(t) {
          var n = {},
            i = function (e) {
              var i = {},
                l = !1,
                c = e.theme && e.theme.disableStyledSystemCache;
              for (var f in e)
                if (t[f]) {
                  var h = t[f],
                    g = e[f],
                    m = u(e.theme, h.scale, h.defaults);
                  if ('object' !== typeof g) r()(i, h(g, m, e));
                  else {
                    if (
                      ((n.breakpoints =
                        (!c && n.breakpoints) ||
                        u(e.theme, 'breakpoints', a.breakpoints)),
                      Array.isArray(g))
                    ) {
                      (n.media =
                        (!c && n.media) || [null].concat(n.breakpoints.map(s))),
                        (i = o(i, d(n.media, h, m, g, e)));
                      continue;
                    }
                    null !== g &&
                      ((i = o(i, p(n.breakpoints, h, m, g, e))), (l = !0));
                  }
                }
              return (
                l &&
                  (i = (function (e) {
                    var t = {};
                    return (
                      Object.keys(e)
                        .sort(function (e, t) {
                          return e.localeCompare(t, void 0, {
                            numeric: !0,
                            sensitivity: 'base',
                          });
                        })
                        .forEach(function (n) {
                          t[n] = e[n];
                        }),
                      t
                    );
                  })(i)),
                i
              );
            };
          (i.config = t), (i.propNames = Object.keys(t)), (i.cache = n);
          var l = Object.keys(t).filter(function (e) {
            return 'config' !== e;
          });
          return (
            l.length > 1 &&
              l.forEach(function (n) {
                var r;
                i[n] = e((((r = {})[n] = t[n]), r));
              }),
            i
          );
        },
        d = function (e, t, n, i, o) {
          var a = {};
          return (
            i.slice(0, e.length).forEach(function (i, s) {
              var l,
                u = e[s],
                c = t(i, n, o);
              u ? r()(a, (((l = {})[u] = r()({}, a[u], c)), l)) : r()(a, c);
            }),
            a
          );
        },
        p = function (e, t, n, i, o) {
          var a = {};
          for (var l in i) {
            var u = e[l],
              c = t(i[l], n, o);
            if (u) {
              var d,
                p = s(u);
              r()(a, (((d = {})[p] = r()({}, a[p], c)), d));
            } else r()(a, c);
          }
          return a;
        },
        f = function (e) {
          var t = e.properties,
            n = e.property,
            i = e.scale,
            r = e.transform,
            o = void 0 === r ? l : r,
            a = e.defaultScale;
          t = t || [n];
          var s = function (e, n, i) {
            var r = {},
              a = o(e, n, i);
            if (null !== a)
              return (
                t.forEach(function (e) {
                  r[e] = a;
                }),
                r
              );
          };
          return (s.scale = i), (s.defaults = a), s;
        },
        h = function (e) {
          void 0 === e && (e = {});
          var t = {};
          return (
            Object.keys(e).forEach(function (n) {
              var i = e[n];
              t[n] =
                !0 !== i
                  ? 'function' !== typeof i
                    ? f(i)
                    : i
                  : f({ property: n, scale: n });
            }),
            c(t)
          );
        },
        g = function () {
          for (
            var e = {}, t = arguments.length, n = new Array(t), i = 0;
            i < t;
            i++
          )
            n[i] = arguments[i];
          n.forEach(function (t) {
            t && t.config && r()(e, t.config);
          });
          var o = c(e);
          return o;
        };
    },
    tZdC: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var i = n('jvDv'),
        r = function (e, t) {
          return (
            void 0 === t && (t = null),
            function (n) {
              return Object(i.d)(n.theme, e, t);
            }
          );
        };
    },
    womh: function (e, t, n) {
      e.exports = (function (e, t) {
        'use strict';
        function n(e, t) {
          return e((t = { exports: {} }), t.exports), t.exports;
        }
        function i(e) {
          return function () {
            return e;
          };
        }
        (e = e && e.hasOwnProperty('default') ? e.default : e),
          (t = t && t.hasOwnProperty('default') ? t.default : t);
        var r = function () {};
        (r.thatReturns = i),
          (r.thatReturnsFalse = i(!1)),
          (r.thatReturnsTrue = i(!0)),
          (r.thatReturnsNull = i(null)),
          (r.thatReturnsThis = function () {
            return this;
          }),
          (r.thatReturnsArgument = function (e) {
            return e;
          });
        var o = r,
          a = function (e) {};
        a = function (e) {
          if (void 0 === e)
            throw new Error('invariant requires an error message argument');
        };
        var s = function (e, t, n, i, r, o, s, l) {
            if ((a(t), !e)) {
              var u;
              if (void 0 === t)
                u = new Error(
                  'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
                );
              else {
                var c = [n, i, r, o, s, l],
                  d = 0;
                (u = new Error(
                  t.replace(/%s/g, function () {
                    return c[d++];
                  })
                )).name = 'Invariant Violation';
              }
              throw ((u.framesToPop = 1), u);
            }
          },
          l = function (e) {
            for (
              var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1;
              i < t;
              i++
            )
              n[i - 1] = arguments[i];
            var r = 0,
              o =
                'Warning: ' +
                e.replace(/%s/g, function () {
                  return n[r++];
                });
            'undefined' !== typeof console && console.error(o);
            try {
              throw new Error(o);
            } catch (a) {}
          },
          u = function (e, t) {
            if (void 0 === t)
              throw new Error(
                '`warning(condition, format, ...args)` requires a warning message argument'
              );
            if (0 !== t.indexOf('Failed Composite propType: ') && !e) {
              for (
                var n = arguments.length, i = Array(n > 2 ? n - 2 : 0), r = 2;
                r < n;
                r++
              )
                i[r - 2] = arguments[r];
              l.apply(void 0, [t].concat(i));
            }
          },
          c = Object.getOwnPropertySymbols,
          d = Object.prototype.hasOwnProperty,
          p = Object.prototype.propertyIsEnumerable;
        function f(e) {
          if (null === e || void 0 === e)
            throw new TypeError(
              'Object.assign cannot be called with null or undefined'
            );
          return Object(e);
        }
        var h = (function () {
            try {
              if (!Object.assign) return !1;
              var e = new String('abc');
              if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0]))
                return !1;
              for (var t = {}, n = 0; n < 10; n++)
                t['_' + String.fromCharCode(n)] = n;
              if (
                '0123456789' !==
                Object.getOwnPropertyNames(t)
                  .map(function (e) {
                    return t[e];
                  })
                  .join('')
              )
                return !1;
              var i = {};
              return (
                'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                  i[e] = e;
                }),
                'abcdefghijklmnopqrst' ===
                  Object.keys(Object.assign({}, i)).join('')
              );
            } catch (r) {
              return !1;
            }
          })()
            ? Object.assign
            : function (e, t) {
                for (var n, i, r = f(e), o = 1; o < arguments.length; o++) {
                  for (var a in (n = Object(arguments[o])))
                    d.call(n, a) && (r[a] = n[a]);
                  if (c) {
                    i = c(n);
                    for (var s = 0; s < i.length; s++)
                      p.call(n, i[s]) && (r[i[s]] = n[i[s]]);
                  }
                }
                return r;
              },
          g = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
          m = s,
          v = u,
          y = g,
          w = {},
          b = function (e, t, n, i, r) {
            for (var o in e)
              if (e.hasOwnProperty(o)) {
                var a;
                try {
                  m(
                    'function' === typeof e[o],
                    '%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.',
                    i || 'React class',
                    n,
                    o,
                    typeof e[o]
                  ),
                    (a = e[o](t, o, i, n, null, y));
                } catch (l) {
                  a = l;
                }
                if (
                  (v(
                    !a || a instanceof Error,
                    '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                    i || 'React class',
                    n,
                    o,
                    typeof a
                  ),
                  a instanceof Error && !(a.message in w))
                ) {
                  w[a.message] = !0;
                  var s = r ? r() : '';
                  v(
                    !1,
                    'Failed %s type: %s%s',
                    n,
                    a.message,
                    null != s ? s : ''
                  );
                }
              }
          },
          x = function (e, t) {
            var n = 'function' === typeof Symbol && Symbol.iterator,
              i = '@@iterator',
              r = '<<anonymous>>',
              a = {
                array: d('array'),
                bool: d('boolean'),
                func: d('function'),
                number: d('number'),
                object: d('object'),
                string: d('string'),
                symbol: d('symbol'),
                any: c(o.thatReturnsNull),
                arrayOf: function (e) {
                  return c(function (t, n, i, r, o) {
                    if ('function' !== typeof e)
                      return new l(
                        'Property `' +
                          o +
                          '` of component `' +
                          i +
                          '` has invalid PropType notation inside arrayOf.'
                      );
                    var a = t[n];
                    if (!Array.isArray(a))
                      return new l(
                        'Invalid ' +
                          r +
                          ' `' +
                          o +
                          '` of type `' +
                          f(a) +
                          '` supplied to `' +
                          i +
                          '`, expected an array.'
                      );
                    for (var s = 0; s < a.length; s++) {
                      var u = e(a, s, i, r, o + '[' + s + ']', g);
                      if (u instanceof Error) return u;
                    }
                    return null;
                  });
                },
                element: c(function (t, n, i, r, o) {
                  var a = t[n];
                  return e(a)
                    ? null
                    : new l(
                        'Invalid ' +
                          r +
                          ' `' +
                          o +
                          '` of type `' +
                          f(a) +
                          '` supplied to `' +
                          i +
                          '`, expected a single ReactElement.'
                      );
                }),
                instanceOf: function (e) {
                  return c(function (t, n, i, o, a) {
                    if (!(t[n] instanceof e)) {
                      var s = e.name || r;
                      return new l(
                        'Invalid ' +
                          o +
                          ' `' +
                          a +
                          '` of type `' +
                          ((u = t[n]).constructor && u.constructor.name
                            ? u.constructor.name
                            : r) +
                          '` supplied to `' +
                          i +
                          '`, expected instance of `' +
                          s +
                          '`.'
                      );
                    }
                    var u;
                    return null;
                  });
                },
                node: c(function (e, t, n, i, r) {
                  return p(e[t])
                    ? null
                    : new l(
                        'Invalid ' +
                          i +
                          ' `' +
                          r +
                          '` supplied to `' +
                          n +
                          '`, expected a ReactNode.'
                      );
                }),
                objectOf: function (e) {
                  return c(function (t, n, i, r, o) {
                    if ('function' !== typeof e)
                      return new l(
                        'Property `' +
                          o +
                          '` of component `' +
                          i +
                          '` has invalid PropType notation inside objectOf.'
                      );
                    var a = t[n],
                      s = f(a);
                    if ('object' !== s)
                      return new l(
                        'Invalid ' +
                          r +
                          ' `' +
                          o +
                          '` of type `' +
                          s +
                          '` supplied to `' +
                          i +
                          '`, expected an object.'
                      );
                    for (var u in a)
                      if (a.hasOwnProperty(u)) {
                        var c = e(a, u, i, r, o + '.' + u, g);
                        if (c instanceof Error) return c;
                      }
                    return null;
                  });
                },
                oneOf: function (e) {
                  return Array.isArray(e)
                    ? c(function (t, n, i, r, o) {
                        for (var a = t[n], s = 0; s < e.length; s++)
                          if (
                            ((u = a),
                            (c = e[s]),
                            u === c
                              ? 0 !== u || 1 / u === 1 / c
                              : u !== u && c !== c)
                          )
                            return null;
                        var u, c;
                        return new l(
                          'Invalid ' +
                            r +
                            ' `' +
                            o +
                            '` of value `' +
                            a +
                            '` supplied to `' +
                            i +
                            '`, expected one of ' +
                            JSON.stringify(e) +
                            '.'
                        );
                      })
                    : (u(
                        !1,
                        'Invalid argument supplied to oneOf, expected an instance of array.'
                      ),
                      o.thatReturnsNull);
                },
                oneOfType: function (e) {
                  if (!Array.isArray(e))
                    return (
                      u(
                        !1,
                        'Invalid argument supplied to oneOfType, expected an instance of array.'
                      ),
                      o.thatReturnsNull
                    );
                  for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    if ('function' !== typeof n)
                      return (
                        u(
                          !1,
                          'Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.',
                          v(n),
                          t
                        ),
                        o.thatReturnsNull
                      );
                  }
                  return c(function (t, n, i, r, o) {
                    for (var a = 0; a < e.length; a++)
                      if (null == (0, e[a])(t, n, i, r, o, g)) return null;
                    return new l(
                      'Invalid ' + r + ' `' + o + '` supplied to `' + i + '`.'
                    );
                  });
                },
                shape: function (e) {
                  return c(function (t, n, i, r, o) {
                    var a = t[n],
                      s = f(a);
                    if ('object' !== s)
                      return new l(
                        'Invalid ' +
                          r +
                          ' `' +
                          o +
                          '` of type `' +
                          s +
                          '` supplied to `' +
                          i +
                          '`, expected `object`.'
                      );
                    for (var u in e) {
                      var c = e[u];
                      if (c) {
                        var d = c(a, u, i, r, o + '.' + u, g);
                        if (d) return d;
                      }
                    }
                    return null;
                  });
                },
                exact: function (e) {
                  return c(function (t, n, i, r, o) {
                    var a = t[n],
                      s = f(a);
                    if ('object' !== s)
                      return new l(
                        'Invalid ' +
                          r +
                          ' `' +
                          o +
                          '` of type `' +
                          s +
                          '` supplied to `' +
                          i +
                          '`, expected `object`.'
                      );
                    var u = h({}, t[n], e);
                    for (var c in u) {
                      var d = e[c];
                      if (!d)
                        return new l(
                          'Invalid ' +
                            r +
                            ' `' +
                            o +
                            '` key `' +
                            c +
                            '` supplied to `' +
                            i +
                            '`.\nBad object: ' +
                            JSON.stringify(t[n], null, '  ') +
                            '\nValid keys: ' +
                            JSON.stringify(Object.keys(e), null, '  ')
                        );
                      var p = d(a, c, i, r, o + '.' + c, g);
                      if (p) return p;
                    }
                    return null;
                  });
                },
              };
            function l(e) {
              (this.message = e), (this.stack = '');
            }
            function c(e) {
              var n = {},
                i = 0;
              function o(o, a, c, d, p, f, h) {
                if (((d = d || r), (f = f || c), h !== g))
                  if (t)
                    s(
                      !1,
                      'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types'
                    );
                  else if ('undefined' !== typeof console) {
                    var m = d + ':' + c;
                    !n[m] &&
                      i < 3 &&
                      (u(
                        !1,
                        'You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.',
                        f,
                        d
                      ),
                      (n[m] = !0),
                      i++);
                  }
                return null == a[c]
                  ? o
                    ? null === a[c]
                      ? new l(
                          'The ' +
                            p +
                            ' `' +
                            f +
                            '` is marked as required in `' +
                            d +
                            '`, but its value is `null`.'
                        )
                      : new l(
                          'The ' +
                            p +
                            ' `' +
                            f +
                            '` is marked as required in `' +
                            d +
                            '`, but its value is `undefined`.'
                        )
                    : null
                  : e(a, c, d, p, f);
              }
              var a = o.bind(null, !1);
              return (a.isRequired = o.bind(null, !0)), a;
            }
            function d(e) {
              return c(function (t, n, i, r, o, a) {
                var s = t[n];
                return f(s) !== e
                  ? new l(
                      'Invalid ' +
                        r +
                        ' `' +
                        o +
                        '` of type `' +
                        m(s) +
                        '` supplied to `' +
                        i +
                        '`, expected `' +
                        e +
                        '`.'
                    )
                  : null;
              });
            }
            function p(t) {
              switch (typeof t) {
                case 'number':
                case 'string':
                case 'undefined':
                  return !0;
                case 'boolean':
                  return !t;
                case 'object':
                  if (Array.isArray(t)) return t.every(p);
                  if (null === t || e(t)) return !0;
                  var r = (function (e) {
                    var t = e && ((n && e[n]) || e[i]);
                    if ('function' === typeof t) return t;
                  })(t);
                  if (!r) return !1;
                  var o,
                    a = r.call(t);
                  if (r !== t.entries) {
                    for (; !(o = a.next()).done; ) if (!p(o.value)) return !1;
                  } else
                    for (; !(o = a.next()).done; ) {
                      var s = o.value;
                      if (s && !p(s[1])) return !1;
                    }
                  return !0;
                default:
                  return !1;
              }
            }
            function f(e) {
              var t = typeof e;
              return Array.isArray(e)
                ? 'array'
                : e instanceof RegExp
                ? 'object'
                : (function (e, t) {
                    return (
                      'symbol' === e ||
                      'Symbol' === t['@@toStringTag'] ||
                      ('function' === typeof Symbol && t instanceof Symbol)
                    );
                  })(t, e)
                ? 'symbol'
                : t;
            }
            function m(e) {
              if ('undefined' === typeof e || null === e) return '' + e;
              var t = f(e);
              if ('object' === t) {
                if (e instanceof Date) return 'date';
                if (e instanceof RegExp) return 'regexp';
              }
              return t;
            }
            function v(e) {
              var t = m(e);
              switch (t) {
                case 'array':
                case 'object':
                  return 'an ' + t;
                case 'boolean':
                case 'date':
                case 'regexp':
                  return 'a ' + t;
                default:
                  return t;
              }
            }
            return (
              (l.prototype = Error.prototype),
              (a.checkPropTypes = b),
              (a.PropTypes = a),
              a
            );
          },
          S = n(function (e) {
            var t =
              ('function' === typeof Symbol &&
                Symbol.for &&
                Symbol.for('react.element')) ||
              60103;
            e.exports = x(function (e) {
              return 'object' === typeof e && null !== e && e.$$typeof === t;
            }, !0);
          }),
          E = n(function (e) {
            !(function () {
              var t = {}.hasOwnProperty;
              function n() {
                for (var e = [], i = 0; i < arguments.length; i++) {
                  var r = arguments[i];
                  if (r) {
                    var o = typeof r;
                    if ('string' === o || 'number' === o) e.push(r);
                    else if (Array.isArray(r)) e.push(n.apply(null, r));
                    else if ('object' === o)
                      for (var a in r) t.call(r, a) && r[a] && e.push(a);
                  }
                }
                return e.join(' ');
              }
              e.exports ? (e.exports = n) : (window.classNames = n);
            })();
          });
        function O(e, t) {
          for (var n = 0, i = e.length; n < i; n++)
            if (t.apply(t, [e[n], n, e])) return e[n];
        }
        function z(e) {
          return (
            'function' === typeof e ||
            '[object Function]' === Object.prototype.toString.call(e)
          );
        }
        function k(e) {
          return 'number' === typeof e && !isNaN(e);
        }
        function R(e) {
          return parseInt(e, 10);
        }
        function P(e, t, n) {
          if (e[t])
            return new Error(
              'Invalid prop ' +
                t +
                ' passed to ' +
                n +
                ' - do not set this, set it on the child.'
            );
        }
        var C = ['Moz', 'Webkit', 'O', 'ms'];
        function N(e, t) {
          return t
            ? '' +
                t +
                (function (e) {
                  for (var t = '', n = !0, i = 0; i < e.length; i++)
                    n
                      ? ((t += e[i].toUpperCase()), (n = !1))
                      : '-' === e[i]
                      ? (n = !0)
                      : (t += e[i]);
                  return t;
                })(e)
            : e;
        }
        var A = (function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 'transform';
            if (
              'undefined' === typeof window ||
              'undefined' === typeof window.document
            )
              return '';
            var t = window.document.documentElement.style;
            if (e in t) return '';
            for (var n = 0; n < C.length; n++) if (N(e, C[n]) in t) return C[n];
            return '';
          })(),
          j = function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          },
          T = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  'value' in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          M = function (e, t, n) {
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
          },
          D =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            },
          W = function (e, t) {
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
          },
          _ = function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ('object' !== typeof t && 'function' !== typeof t)
              ? e
              : t;
          },
          V = function (e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e))
              return (function (e, t) {
                var n = [],
                  i = !0,
                  r = !1,
                  o = void 0;
                try {
                  for (
                    var a, s = e[Symbol.iterator]();
                    !(i = (a = s.next()).done) &&
                    (n.push(a.value), !t || n.length !== t);
                    i = !0
                  );
                } catch (l) {
                  (r = !0), (o = l);
                } finally {
                  try {
                    !i && s.return && s.return();
                  } finally {
                    if (r) throw o;
                  }
                }
                return n;
              })(e, t);
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            );
          },
          L = '';
        function H(e, t) {
          return (
            L ||
              (L = O(
                [
                  'matches',
                  'webkitMatchesSelector',
                  'mozMatchesSelector',
                  'msMatchesSelector',
                  'oMatchesSelector',
                ],
                function (t) {
                  return z(e[t]);
                }
              )),
            !!z(e[L]) && e[L](t)
          );
        }
        function F(e, t, n) {
          var i = e;
          do {
            if (H(i, t)) return !0;
            if (i === n) return !1;
            i = i.parentNode;
          } while (i);
          return !1;
        }
        function I(e, t, n) {
          e &&
            (e.attachEvent
              ? e.attachEvent('on' + t, n)
              : e.addEventListener
              ? e.addEventListener(t, n, !0)
              : (e['on' + t] = n));
        }
        function B(e, t, n) {
          e &&
            (e.detachEvent
              ? e.detachEvent('on' + t, n)
              : e.removeEventListener
              ? e.removeEventListener(t, n, !0)
              : (e['on' + t] = null));
        }
        function U(e) {
          var t = e.clientHeight,
            n = e.ownerDocument.defaultView.getComputedStyle(e);
          return (t += R(n.borderTopWidth)), (t += R(n.borderBottomWidth));
        }
        function q(e) {
          var t = e.clientWidth,
            n = e.ownerDocument.defaultView.getComputedStyle(e);
          return (t += R(n.borderLeftWidth)), (t += R(n.borderRightWidth));
        }
        function G(e) {
          var t = e.clientHeight,
            n = e.ownerDocument.defaultView.getComputedStyle(e);
          return (t -= R(n.paddingTop)), (t -= R(n.paddingBottom));
        }
        function X(e) {
          var t = e.clientWidth,
            n = e.ownerDocument.defaultView.getComputedStyle(e);
          return (t -= R(n.paddingLeft)), (t -= R(n.paddingRight));
        }
        function Y(e, t, n) {
          var i = 'translate(' + e.x + n + ',' + e.y + n + ')';
          return (
            t &&
              (i =
                'translate(' +
                ('string' === typeof t.x ? t.x : t.x + n) +
                ', ' +
                ('string' === typeof t.y ? t.y : t.y + n) +
                ')' +
                i),
            i
          );
        }
        function K(e) {
          if (e) {
            var t,
              n,
              i = e.getElementById('react-draggable-style-el');
            i ||
              (((i = e.createElement('style')).type = 'text/css'),
              (i.id = 'react-draggable-style-el'),
              (i.innerHTML =
                '.react-draggable-transparent-selection *::-moz-selection {background: transparent;}\n'),
              (i.innerHTML +=
                '.react-draggable-transparent-selection *::selection {background: transparent;}\n'),
              e.getElementsByTagName('head')[0].appendChild(i)),
              e.body &&
                ((t = e.body),
                (n = 'react-draggable-transparent-selection'),
                t.classList
                  ? t.classList.add(n)
                  : t.className.match(
                      new RegExp('(?:^|\\s)' + n + '(?!\\S)')
                    ) || (t.className += ' ' + n));
          }
        }
        function $(e) {
          try {
            e &&
              e.body &&
              ((t = e.body),
              (n = 'react-draggable-transparent-selection'),
              t.classList
                ? t.classList.remove(n)
                : (t.className = t.className.replace(
                    new RegExp('(?:^|\\s)' + n + '(?!\\S)', 'g'),
                    ''
                  ))),
              e.selection
                ? e.selection.empty()
                : window.getSelection().removeAllRanges();
          } catch (i) {}
          var t, n;
        }
        function J() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return D({ touchAction: 'none' }, e);
        }
        function Z(e) {
          return 'both' === e.props.axis || 'x' === e.props.axis;
        }
        function Q(e) {
          return 'both' === e.props.axis || 'y' === e.props.axis;
        }
        function ee(e, t, n) {
          var i =
            'number' === typeof t
              ? (function (e, t) {
                  return (
                    (e.targetTouches &&
                      O(e.targetTouches, function (e) {
                        return t === e.identifier;
                      })) ||
                    (e.changedTouches &&
                      O(e.changedTouches, function (e) {
                        return t === e.identifier;
                      }))
                  );
                })(e, t)
              : null;
          if ('number' === typeof t && !i) return null;
          var r = ie(n);
          return (function (e, t) {
            var n =
              t === t.ownerDocument.body
                ? { left: 0, top: 0 }
                : t.getBoundingClientRect();
            return {
              x: e.clientX + t.scrollLeft - n.left,
              y: e.clientY + t.scrollTop - n.top,
            };
          })(
            i || e,
            n.props.offsetParent || r.offsetParent || r.ownerDocument.body
          );
        }
        function te(e, t, n) {
          var i = e.state,
            r = !k(i.lastX),
            o = ie(e);
          return r
            ? { node: o, deltaX: 0, deltaY: 0, lastX: t, lastY: n, x: t, y: n }
            : {
                node: o,
                deltaX: t - i.lastX,
                deltaY: n - i.lastY,
                lastX: i.lastX,
                lastY: i.lastY,
                x: t,
                y: n,
              };
        }
        function ne(e, t) {
          var n = e.props.scale;
          return {
            node: t.node,
            x: e.state.x + t.deltaX / n,
            y: e.state.y + t.deltaY / n,
            deltaX: t.deltaX / n,
            deltaY: t.deltaY / n,
            lastX: e.state.x,
            lastY: e.state.y,
          };
        }
        function ie(t) {
          var n = e.findDOMNode(t);
          if (!n) throw new Error('<DraggableCore>: Unmounted during event!');
          return n;
        }
        var re = {
            touch: { start: 'touchstart', move: 'touchmove', stop: 'touchend' },
            mouse: { start: 'mousedown', move: 'mousemove', stop: 'mouseup' },
          },
          oe = re.mouse,
          ae = (function (n) {
            function i() {
              var t, n, r;
              j(this, i);
              for (var o = arguments.length, a = Array(o), s = 0; s < o; s++)
                a[s] = arguments[s];
              return (
                (n = r = _(
                  this,
                  (t = i.__proto__ || Object.getPrototypeOf(i)).call.apply(
                    t,
                    [this].concat(a)
                  )
                )),
                (r.state = {
                  dragging: !1,
                  lastX: NaN,
                  lastY: NaN,
                  touchIdentifier: null,
                }),
                (r.handleDragStart = function (t) {
                  if (
                    (r.props.onMouseDown(t),
                    !r.props.allowAnyClick &&
                      'number' === typeof t.button &&
                      0 !== t.button)
                  )
                    return !1;
                  var n = e.findDOMNode(r);
                  if (!n || !n.ownerDocument || !n.ownerDocument.body)
                    throw new Error(
                      '<DraggableCore> not mounted on DragStart!'
                    );
                  var i = n.ownerDocument;
                  if (
                    !(
                      r.props.disabled ||
                      !(t.target instanceof i.defaultView.Node) ||
                      (r.props.handle && !F(t.target, r.props.handle, n)) ||
                      (r.props.cancel && F(t.target, r.props.cancel, n))
                    )
                  ) {
                    var o = (function (e) {
                      return e.targetTouches && e.targetTouches[0]
                        ? e.targetTouches[0].identifier
                        : e.changedTouches && e.changedTouches[0]
                        ? e.changedTouches[0].identifier
                        : void 0;
                    })(t);
                    r.setState({ touchIdentifier: o });
                    var a = ee(t, o, r);
                    if (null != a) {
                      var s = a.x,
                        l = a.y,
                        u = te(r, s, l);
                      r.props.onStart,
                        !1 !== r.props.onStart(t, u) &&
                          (r.props.enableUserSelectHack && K(i),
                          r.setState({ dragging: !0, lastX: s, lastY: l }),
                          I(i, oe.move, r.handleDrag),
                          I(i, oe.stop, r.handleDragStop));
                    }
                  }
                }),
                (r.handleDrag = function (e) {
                  'touchmove' === e.type && e.preventDefault();
                  var t = ee(e, r.state.touchIdentifier, r);
                  if (null != t) {
                    var n,
                      i,
                      o,
                      a = t.x,
                      s = t.y;
                    if (Array.isArray(r.props.grid)) {
                      var l = a - r.state.lastX,
                        u = s - r.state.lastY,
                        c =
                          ((n = r.props.grid),
                          (i = l),
                          (o = u),
                          [
                            Math.round(i / n[0]) * n[0],
                            Math.round(o / n[1]) * n[1],
                          ]),
                        d = V(c, 2);
                      if (((l = d[0]), (u = d[1]), !l && !u)) return;
                      (a = r.state.lastX + l), (s = r.state.lastY + u);
                    }
                    var p = te(r, a, s);
                    if (!1 !== r.props.onDrag(e, p))
                      r.setState({ lastX: a, lastY: s });
                    else
                      try {
                        r.handleDragStop(new MouseEvent('mouseup'));
                      } catch (h) {
                        var f = document.createEvent('MouseEvents');
                        f.initMouseEvent(
                          'mouseup',
                          !0,
                          !0,
                          window,
                          0,
                          0,
                          0,
                          0,
                          0,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null
                        ),
                          r.handleDragStop(f);
                      }
                  }
                }),
                (r.handleDragStop = function (t) {
                  if (r.state.dragging) {
                    var n = ee(t, r.state.touchIdentifier, r);
                    if (null != n) {
                      var i = n.x,
                        o = n.y,
                        a = te(r, i, o),
                        s = e.findDOMNode(r);
                      s && r.props.enableUserSelectHack && $(s.ownerDocument),
                        r.setState({ dragging: !1, lastX: NaN, lastY: NaN }),
                        r.props.onStop(t, a),
                        s &&
                          (B(s.ownerDocument, oe.move, r.handleDrag),
                          B(s.ownerDocument, oe.stop, r.handleDragStop));
                    }
                  }
                }),
                (r.onMouseDown = function (e) {
                  return (oe = re.mouse), r.handleDragStart(e);
                }),
                (r.onMouseUp = function (e) {
                  return (oe = re.mouse), r.handleDragStop(e);
                }),
                (r.onTouchStart = function (e) {
                  return (oe = re.touch), r.handleDragStart(e);
                }),
                (r.onTouchEnd = function (e) {
                  return (oe = re.touch), r.handleDragStop(e);
                }),
                _(r, n)
              );
            }
            return (
              W(i, n),
              T(i, [
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    var t = e.findDOMNode(this);
                    if (t) {
                      var n = t.ownerDocument;
                      B(n, re.mouse.move, this.handleDrag),
                        B(n, re.touch.move, this.handleDrag),
                        B(n, re.mouse.stop, this.handleDragStop),
                        B(n, re.touch.stop, this.handleDragStop),
                        this.props.enableUserSelectHack && $(n);
                    }
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return t.cloneElement(
                      t.Children.only(this.props.children),
                      {
                        style: J(this.props.children.props.style),
                        onMouseDown: this.onMouseDown,
                        onTouchStart: this.onTouchStart,
                        onMouseUp: this.onMouseUp,
                        onTouchEnd: this.onTouchEnd,
                      }
                    );
                  },
                },
              ]),
              i
            );
          })(t.Component);
        (ae.displayName = 'DraggableCore'),
          (ae.propTypes = {
            allowAnyClick: S.bool,
            disabled: S.bool,
            enableUserSelectHack: S.bool,
            offsetParent: function (e, t) {
              if (e[t] && 1 !== e[t].nodeType)
                throw new Error("Draggable's offsetParent must be a DOM Node.");
            },
            grid: S.arrayOf(S.number),
            scale: S.number,
            handle: S.string,
            cancel: S.string,
            onStart: S.func,
            onDrag: S.func,
            onStop: S.func,
            onMouseDown: S.func,
            className: P,
            style: P,
            transform: P,
          }),
          (ae.defaultProps = {
            allowAnyClick: !1,
            cancel: null,
            disabled: !1,
            enableUserSelectHack: !0,
            offsetParent: null,
            handle: null,
            grid: null,
            transform: null,
            onStart: function () {},
            onDrag: function () {},
            onStop: function () {},
            onMouseDown: function () {},
          });
        var se = (function (n) {
          function i(e) {
            j(this, i);
            var t = _(
              this,
              (i.__proto__ || Object.getPrototypeOf(i)).call(this, e)
            );
            return (
              (t.onDragStart = function (e, n) {
                if (!1 === t.props.onStart(e, ne(t, n))) return !1;
                t.setState({ dragging: !0, dragged: !0 });
              }),
              (t.onDrag = function (e, n) {
                if (!t.state.dragging) return !1;
                var i = ne(t, n),
                  r = { x: i.x, y: i.y };
                if (t.props.bounds) {
                  var o = r.x,
                    a = r.y;
                  (r.x += t.state.slackX), (r.y += t.state.slackY);
                  var s = (function (e, t, n) {
                      if (!e.props.bounds) return [t, n];
                      var i = e.props.bounds;
                      i =
                        'string' === typeof i
                          ? i
                          : (function (e) {
                              return {
                                left: e.left,
                                top: e.top,
                                right: e.right,
                                bottom: e.bottom,
                              };
                            })(i);
                      var r = ie(e);
                      if ('string' === typeof i) {
                        var o = r.ownerDocument,
                          a = o.defaultView,
                          s = void 0;
                        if (
                          !(
                            (s =
                              'parent' === i
                                ? r.parentNode
                                : o.querySelector(i)) instanceof a.HTMLElement
                          )
                        )
                          throw new Error(
                            'Bounds selector "' +
                              i +
                              '" could not find an element.'
                          );
                        var l = a.getComputedStyle(r),
                          u = a.getComputedStyle(s);
                        i = {
                          left:
                            -r.offsetLeft + R(u.paddingLeft) + R(l.marginLeft),
                          top: -r.offsetTop + R(u.paddingTop) + R(l.marginTop),
                          right:
                            X(s) -
                            q(r) -
                            r.offsetLeft +
                            R(u.paddingRight) -
                            R(l.marginRight),
                          bottom:
                            G(s) -
                            U(r) -
                            r.offsetTop +
                            R(u.paddingBottom) -
                            R(l.marginBottom),
                        };
                      }
                      return (
                        k(i.right) && (t = Math.min(t, i.right)),
                        k(i.bottom) && (n = Math.min(n, i.bottom)),
                        k(i.left) && (t = Math.max(t, i.left)),
                        k(i.top) && (n = Math.max(n, i.top)),
                        [t, n]
                      );
                    })(t, r.x, r.y),
                    l = V(s, 2),
                    u = l[0],
                    c = l[1];
                  (r.x = u),
                    (r.y = c),
                    (r.slackX = t.state.slackX + (o - r.x)),
                    (r.slackY = t.state.slackY + (a - r.y)),
                    (i.x = r.x),
                    (i.y = r.y),
                    (i.deltaX = r.x - t.state.x),
                    (i.deltaY = r.y - t.state.y);
                }
                if (!1 === t.props.onDrag(e, i)) return !1;
                t.setState(r);
              }),
              (t.onDragStop = function (e, n) {
                if (!t.state.dragging) return !1;
                if (!1 === t.props.onStop(e, ne(t, n))) return !1;
                var i = { dragging: !1, slackX: 0, slackY: 0 };
                if (Boolean(t.props.position)) {
                  var r = t.props.position,
                    o = r.x,
                    a = r.y;
                  (i.x = o), (i.y = a);
                }
                t.setState(i);
              }),
              (t.state = {
                dragging: !1,
                dragged: !1,
                x: e.position ? e.position.x : e.defaultPosition.x,
                y: e.position ? e.position.y : e.defaultPosition.y,
                slackX: 0,
                slackY: 0,
                isElementSVG: !1,
              }),
              t
            );
          }
          return (
            W(i, n),
            T(i, [
              {
                key: 'componentWillMount',
                value: function () {
                  !this.props.position ||
                    this.props.onDrag ||
                    this.props.onStop ||
                    console.warn(
                      'A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.'
                    );
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  'undefined' !== typeof window.SVGElement &&
                    e.findDOMNode(this) instanceof window.SVGElement &&
                    this.setState({ isElementSVG: !0 });
                },
              },
              {
                key: 'componentWillReceiveProps',
                value: function (e) {
                  !e.position ||
                    (this.props.position &&
                      e.position.x === this.props.position.x &&
                      e.position.y === this.props.position.y) ||
                    this.setState({ x: e.position.x, y: e.position.y });
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.setState({ dragging: !1 });
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    n,
                    i,
                    r = {},
                    o = null,
                    a = !Boolean(this.props.position) || this.state.dragging,
                    s = this.props.position || this.props.defaultPosition,
                    l = {
                      x: Z(this) && a ? this.state.x : s.x,
                      y: Q(this) && a ? this.state.y : s.y,
                    };
                  this.state.isElementSVG
                    ? ((n = l),
                      (i = this.props.positionOffset),
                      (o = Y(n, i, '')))
                    : (r = (function (e, t) {
                        var n = Y(e, t, 'px');
                        return M({}, N('transform', A), n);
                      })(l, this.props.positionOffset));
                  var u = this.props,
                    c = u.defaultClassName,
                    d = u.defaultClassNameDragging,
                    p = u.defaultClassNameDragged,
                    f = t.Children.only(this.props.children),
                    h = E(
                      f.props.className || '',
                      c,
                      (M((e = {}), d, this.state.dragging),
                      M(e, p, this.state.dragged),
                      e)
                    );
                  return t.createElement(
                    ae,
                    D({}, this.props, {
                      onStart: this.onDragStart,
                      onDrag: this.onDrag,
                      onStop: this.onDragStop,
                    }),
                    t.cloneElement(f, {
                      className: h,
                      style: D({}, f.props.style, r),
                      transform: o,
                    })
                  );
                },
              },
            ]),
            i
          );
        })(t.Component);
        return (
          (se.displayName = 'Draggable'),
          (se.propTypes = D({}, ae.propTypes, {
            axis: S.oneOf(['both', 'x', 'y', 'none']),
            bounds: S.oneOfType([
              S.shape({
                left: S.number,
                right: S.number,
                top: S.number,
                bottom: S.number,
              }),
              S.string,
              S.oneOf([!1]),
            ]),
            defaultClassName: S.string,
            defaultClassNameDragging: S.string,
            defaultClassNameDragged: S.string,
            defaultPosition: S.shape({ x: S.number, y: S.number }),
            positionOffset: S.shape({
              x: S.oneOfType([S.number, S.string]),
              y: S.oneOfType([S.number, S.string]),
            }),
            position: S.shape({ x: S.number, y: S.number }),
            className: P,
            style: P,
            transform: P,
          })),
          (se.defaultProps = D({}, ae.defaultProps, {
            axis: 'both',
            bounds: !1,
            defaultClassName: 'react-draggable',
            defaultClassNameDragging: 'react-draggable-dragging',
            defaultClassNameDragged: 'react-draggable-dragged',
            defaultPosition: { x: 0, y: 0 },
            position: null,
            scale: 1,
          })),
          (se.default = se),
          (se.DraggableCore = ae),
          se
        );
      })(n('7nmT'), n('ERkP'));
    },
    zqiA: function (e, t, n) {
      var i;
      !(function (r, o) {
        'use strict';
        var a = 'model',
          s = 'name',
          l = 'type',
          u = 'vendor',
          c = 'version',
          d = 'mobile',
          p = 'tablet',
          f = 'smarttv',
          h = {
            extend: function (e, t) {
              var n = {};
              for (var i in e)
                t[i] && t[i].length % 2 === 0
                  ? (n[i] = t[i].concat(e[i]))
                  : (n[i] = e[i]);
              return n;
            },
            has: function (e, t) {
              return (
                'string' === typeof e &&
                -1 !== t.toLowerCase().indexOf(e.toLowerCase())
              );
            },
            lowerize: function (e) {
              return e.toLowerCase();
            },
            major: function (e) {
              return 'string' === typeof e
                ? e.replace(/[^\d\.]/g, '').split('.')[0]
                : void 0;
            },
            trim: function (e) {
              return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
            },
          },
          g = {
            rgx: function (e, t) {
              for (var n, i, r, o, a, s, l = 0; l < t.length && !a; ) {
                var u = t[l],
                  c = t[l + 1];
                for (n = i = 0; n < u.length && !a; )
                  if ((a = u[n++].exec(e)))
                    for (r = 0; r < c.length; r++)
                      (s = a[++i]),
                        'object' === typeof (o = c[r]) && o.length > 0
                          ? 2 == o.length
                            ? 'function' == typeof o[1]
                              ? (this[o[0]] = o[1].call(this, s))
                              : (this[o[0]] = o[1])
                            : 3 == o.length
                            ? 'function' !== typeof o[1] ||
                              (o[1].exec && o[1].test)
                              ? (this[o[0]] = s
                                  ? s.replace(o[1], o[2])
                                  : void 0)
                              : (this[o[0]] = s
                                  ? o[1].call(this, s, o[2])
                                  : void 0)
                            : 4 == o.length &&
                              (this[o[0]] = s
                                ? o[3].call(this, s.replace(o[1], o[2]))
                                : void 0)
                          : (this[o] = s || void 0);
                l += 2;
              }
            },
            str: function (e, t) {
              for (var n in t)
                if ('object' === typeof t[n] && t[n].length > 0) {
                  for (var i = 0; i < t[n].length; i++)
                    if (h.has(t[n][i], e)) return '?' === n ? void 0 : n;
                } else if (h.has(t[n], e)) return '?' === n ? void 0 : n;
              return e;
            },
          },
          m = {
            browser: {
              oldsafari: {
                version: {
                  '1.0': '/8',
                  1.2: '/1',
                  1.3: '/3',
                  '2.0': '/412',
                  '2.0.2': '/416',
                  '2.0.3': '/417',
                  '2.0.4': '/419',
                  '?': '/',
                },
              },
            },
            device: {
              amazon: { model: { 'Fire Phone': ['SD', 'KF'] } },
              sprint: {
                model: { 'Evo Shift 4G': '7373KT' },
                vendor: { HTC: 'APA', Sprint: 'Sprint' },
              },
            },
            os: {
              windows: {
                version: {
                  ME: '4.90',
                  'NT 3.11': 'NT3.51',
                  'NT 4.0': 'NT4.0',
                  2e3: 'NT 5.0',
                  XP: ['NT 5.1', 'NT 5.2'],
                  Vista: 'NT 6.0',
                  7: 'NT 6.1',
                  8: 'NT 6.2',
                  8.1: 'NT 6.3',
                  10: ['NT 6.4', 'NT 10.0'],
                  RT: 'ARM',
                },
              },
            },
          },
          v = {
            browser: [
              [
                /(opera\smini)\/([\w\.-]+)/i,
                /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,
                /(opera).+version\/([\w\.]+)/i,
                /(opera)[\/\s]+([\w\.]+)/i,
              ],
              [s, c],
              [/(opios)[\/\s]+([\w\.]+)/i],
              [[s, 'Opera Mini'], c],
              [/\s(opr)\/([\w\.]+)/i],
              [[s, 'Opera'], c],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
                /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,
                /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,
                /(?:ms|\()(ie)\s([\w\.]+)/i,
                /(rekonq)\/([\w\.]*)/i,
                /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,
              ],
              [s, c],
              [/(konqueror)\/([\w\.]+)/i],
              [[s, 'Konqueror'], c],
              [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
              [[s, 'IE'], c],
              [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
              [[s, 'Edge'], c],
              [/(yabrowser)\/([\w\.]+)/i],
              [[s, 'Yandex'], c],
              [/(Avast)\/([\w\.]+)/i],
              [[s, 'Avast Secure Browser'], c],
              [/(AVG)\/([\w\.]+)/i],
              [[s, 'AVG Secure Browser'], c],
              [/(puffin)\/([\w\.]+)/i],
              [[s, 'Puffin'], c],
              [/(focus)\/([\w\.]+)/i],
              [[s, 'Firefox Focus'], c],
              [/(opt)\/([\w\.]+)/i],
              [[s, 'Opera Touch'], c],
              [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
              [[s, 'UCBrowser'], c],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[s, /_/g, ' '], c],
              [/(windowswechat qbcore)\/([\w\.]+)/i],
              [[s, 'WeChat(Win) Desktop'], c],
              [/(micromessenger)\/([\w\.]+)/i],
              [[s, 'WeChat'], c],
              [/(brave)\/([\w\.]+)/i],
              [[s, 'Brave'], c],
              [/(qqbrowserlite)\/([\w\.]+)/i],
              [s, c],
              [/(QQ)\/([\d\.]+)/i],
              [s, c],
              [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
              [s, c],
              [/(baiduboxapp)[\/\s]?([\w\.]+)/i],
              [s, c],
              [/(2345Explorer)[\/\s]?([\w\.]+)/i],
              [s, c],
              [/(MetaSr)[\/\s]?([\w\.]+)/i],
              [s],
              [/(LBBROWSER)/i],
              [s],
              [/xiaomi\/miuibrowser\/([\w\.]+)/i],
              [c, [s, 'MIUI Browser']],
              [/;fbav\/([\w\.]+);/i],
              [c, [s, 'Facebook']],
              [
                /safari\s(line)\/([\w\.]+)/i,
                /android.+(line)\/([\w\.]+)\/iab/i,
              ],
              [s, c],
              [/headlesschrome(?:\/([\w\.]+)|\s)/i],
              [c, [s, 'Chrome Headless']],
              [/\swv\).+(chrome)\/([\w\.]+)/i],
              [[s, /(.+)/, '$1 WebView'], c],
              [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
              [[s, /(.+(?:g|us))(.+)/, '$1 $2'], c],
              [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
              [c, [s, 'Android Browser']],
              [/(sailfishbrowser)\/([\w\.]+)/i],
              [[s, 'Sailfish Browser'], c],
              [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
              [s, c],
              [/(dolfin)\/([\w\.]+)/i],
              [[s, 'Dolphin'], c],
              [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
              [[s, '360 Browser']],
              [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
              [[s, 'Chrome'], c],
              [/(coast)\/([\w\.]+)/i],
              [[s, 'Opera Coast'], c],
              [/fxios\/([\w\.-]+)/i],
              [c, [s, 'Firefox']],
              [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
              [c, [s, 'Mobile Safari']],
              [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
              [c, s],
              [
                /webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i,
              ],
              [[s, 'GSA'], c],
              [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
              [s, [c, g.str, m.browser.oldsafari.version]],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [s, c],
              [/(navigator|netscape)\/([\w\.-]+)/i],
              [[s, 'Netscape'], c],
              [
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
                /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                /(links)\s\(([\w\.]+)/i,
                /(gobrowser)\/?([\w\.]*)/i,
                /(ice\s?browser)\/v?([\w\._]+)/i,
                /(mosaic)[\/\s]([\w\.]+)/i,
              ],
              [s, c],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
              [['architecture', 'amd64']],
              [/(ia32(?=;))/i],
              [['architecture', h.lowerize]],
              [/((?:i[346]|x)86)[;\)]/i],
              [['architecture', 'ia32']],
              [/windows\s(ce|mobile);\sppc;/i],
              [['architecture', 'arm']],
              [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
              [['architecture', /ower/, '', h.lowerize]],
              [/(sun4\w)[;\)]/i],
              [['architecture', 'sparc']],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i,
              ],
              [['architecture', h.lowerize]],
            ],
            device: [
              [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
              [a, u, [l, p]],
              [/applecoremedia\/[\w\.]+ \((ipad)/],
              [a, [u, 'Apple'], [l, p]],
              [/(apple\s{0,1}tv)/i],
              [
                [a, 'Apple TV'],
                [u, 'Apple'],
                [l, f],
              ],
              [
                /(archos)\s(gamepad2?)/i,
                /(hp).+(touchpad)/i,
                /(hp).+(tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /\s(nook)[\w\s]+build\/(\w+)/i,
                /(dell)\s(strea[kpr\s\d]*[\dko])/i,
              ],
              [u, a, [l, p]],
              [/(kf[A-z]+)\sbuild\/.+silk\//i],
              [a, [u, 'Amazon'], [l, p]],
              [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
              [
                [a, g.str, m.device.amazon.model],
                [u, 'Amazon'],
                [l, d],
              ],
              [/android.+aft([bms])\sbuild/i],
              [a, [u, 'Amazon'], [l, f]],
              [/\((ip[honed|\s\w*]+);.+(apple)/i],
              [a, u, [l, d]],
              [/\((ip[honed|\s\w*]+);/i],
              [a, [u, 'Apple'], [l, d]],
              [
                /(blackberry)[\s-]?(\w+)/i,
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                /(hp)\s([\w\s]+\w)/i,
                /(asus)-?(\w+)/i,
              ],
              [u, a, [l, d]],
              [/\(bb10;\s(\w+)/i],
              [a, [u, 'BlackBerry'], [l, d]],
              [
                /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i,
              ],
              [a, [u, 'Asus'], [l, p]],
              [
                /(sony)\s(tablet\s[ps])\sbuild\//i,
                /(sony)?(?:sgp.+)\sbuild\//i,
              ],
              [
                [u, 'Sony'],
                [a, 'Xperia Tablet'],
                [l, p],
              ],
              [
                /android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [a, [u, 'Sony'], [l, d]],
              [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
              [u, a, [l, 'console']],
              [/android.+;\s(shield)\sbuild/i],
              [a, [u, 'Nvidia'], [l, 'console']],
              [/(playstation\s[34portablevi]+)/i],
              [a, [u, 'Sony'], [l, 'console']],
              [/(sprint\s(\w+))/i],
              [
                [u, g.str, m.device.sprint.vendor],
                [a, g.str, m.device.sprint.model],
                [l, d],
              ],
              [
                /(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,
                /(zte)-(\w*)/i,
                /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i,
              ],
              [u, [a, /_/g, ' '], [l, d]],
              [/(nexus\s9)/i],
              [a, [u, 'HTC'], [l, p]],
              [
                /d\/huawei([\w\s-]+)[;\)]/i,
                /(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i,
              ],
              [a, [u, 'Huawei'], [l, d]],
              [/android.+(bah2?-a?[lw]\d{2})/i],
              [a, [u, 'Huawei'], [l, p]],
              [/(microsoft);\s(lumia[\s\w]+)/i],
              [u, a, [l, d]],
              [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
              [a, [u, 'Microsoft'], [l, 'console']],
              [/(kin\.[onetw]{3})/i],
              [
                [a, /\./g, ' '],
                [u, 'Microsoft'],
                [l, d],
              ],
              [
                /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
                /mot[\s-]?(\w*)/i,
                /(XT\d{3,4}) build\//i,
                /(nexus\s6)/i,
              ],
              [a, [u, 'Motorola'], [l, d]],
              [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
              [a, [u, 'Motorola'], [l, p]],
              [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
              [
                [u, h.trim],
                [a, h.trim],
                [l, f],
              ],
              [/hbbtv.+maple;(\d+)/i],
              [
                [a, /^/, 'SmartTV'],
                [u, 'Samsung'],
                [l, f],
              ],
              [/\(dtv[\);].+(aquos)/i],
              [a, [u, 'Sharp'], [l, f]],
              [
                /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
                /((SM-T\w+))/i,
              ],
              [[u, 'Samsung'], a, [l, p]],
              [/smart-tv.+(samsung)/i],
              [u, [l, f], a],
              [
                /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
                /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
                /sec-((sgh\w+))/i,
              ],
              [[u, 'Samsung'], a, [l, d]],
              [/sie-(\w*)/i],
              [a, [u, 'Siemens'], [l, d]],
              [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
              [[u, 'Nokia'], a, [l, d]],
              [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
              [a, [u, 'Acer'], [l, p]],
              [/android.+([vl]k\-?\d{3})\s+build/i],
              [a, [u, 'LG'], [l, p]],
              [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
              [[u, 'LG'], a, [l, p]],
              [/(lg) netcast\.tv/i],
              [u, a, [l, f]],
              [
                /(nexus\s[45])/i,
                /lg[e;\s\/-]+(\w*)/i,
                /android.+lg(\-?[\d\w]+)\s+build/i,
              ],
              [a, [u, 'LG'], [l, d]],
              [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
              [u, a, [l, p]],
              [/android.+(ideatab[a-z0-9\-\s]+)/i],
              [a, [u, 'Lenovo'], [l, p]],
              [/(lenovo)[_\s-]?([\w-]+)/i],
              [u, a, [l, d]],
              [/linux;.+((jolla));/i],
              [u, a, [l, d]],
              [/((pebble))app\/[\d\.]+\s/i],
              [u, a, [l, 'wearable']],
              [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
              [u, a, [l, d]],
              [/crkey/i],
              [
                [a, 'Chromecast'],
                [u, 'Google'],
                [l, f],
              ],
              [/android.+;\s(glass)\s\d/i],
              [a, [u, 'Google'], [l, 'wearable']],
              [/android.+;\s(pixel c)[\s)]/i],
              [a, [u, 'Google'], [l, p]],
              [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],
              [a, [u, 'Google'], [l, d]],
              [
                /android.+;\s(\w+)\s+build\/hm\1/i,
                /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,
                /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,
                /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i,
              ],
              [
                [a, /_/g, ' '],
                [u, 'Xiaomi'],
                [l, d],
              ],
              [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
              [
                [a, /_/g, ' '],
                [u, 'Xiaomi'],
                [l, p],
              ],
              [/android.+;\s(m[1-5]\snote)\sbuild/i],
              [a, [u, 'Meizu'], [l, d]],
              [/(mz)-([\w-]{2,})/i],
              [[u, 'Meizu'], a, [l, d]],
              [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i],
              [a, [u, 'OnePlus'], [l, d]],
              [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
              [a, [u, 'RCA'], [l, p]],
              [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
              [a, [u, 'Dell'], [l, p]],
              [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
              [a, [u, 'Verizon'], [l, p]],
              [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
              [[u, 'Barnes & Noble'], a, [l, p]],
              [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
              [a, [u, 'NuVision'], [l, p]],
              [/android.+;\s(k88)\sbuild/i],
              [a, [u, 'ZTE'], [l, p]],
              [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
              [a, [u, 'Swiss'], [l, d]],
              [/android.+[;\/]\s*(zur\d{3})\s+build/i],
              [a, [u, 'Swiss'], [l, p]],
              [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
              [a, [u, 'Zeki'], [l, p]],
              [
                /(android).+[;\/]\s+([YR]\d{2})\s+build/i,
                /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i,
              ],
              [[u, 'Dragon Touch'], a, [l, p]],
              [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
              [a, [u, 'Insignia'], [l, p]],
              [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
              [a, [u, 'NextBook'], [l, p]],
              [
                /android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i,
              ],
              [[u, 'Voice'], a, [l, d]],
              [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
              [[u, 'LvTel'], a, [l, d]],
              [/android.+;\s(PH-1)\s/i],
              [a, [u, 'Essential'], [l, d]],
              [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
              [a, [u, 'Envizen'], [l, p]],
              [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
              [u, a, [l, p]],
              [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
              [a, [u, 'MachSpeed'], [l, p]],
              [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
              [u, a, [l, p]],
              [/android.+[;\/]\s*TU_(1491)\s+build/i],
              [a, [u, 'Rotor'], [l, p]],
              [/android.+(KS(.+))\s+build/i],
              [a, [u, 'Amazon'], [l, p]],
              [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
              [u, a, [l, p]],
              [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
              [[l, h.lowerize], u, a],
              [/[\s\/\(](smart-?tv)[;\)]/i],
              [[l, f]],
              [/(android[\w\.\s\-]{0,9});.+build/i],
              [a, [u, 'Generic']],
            ],
            engine: [
              [/windows.+\sedge\/([\w\.]+)/i],
              [c, [s, 'EdgeHTML']],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [c, [s, 'Blink']],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
                /(icab)[\/\s]([23]\.[\d\.]+)/i,
              ],
              [s, c],
              [/rv\:([\w\.]{1,9}).+(gecko)/i],
              [c, s],
            ],
            os: [
              [/microsoft\s(windows)\s(vista|xp)/i],
              [s, c],
              [
                /(windows)\snt\s6\.2;\s(arm)/i,
                /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,
                /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i,
              ],
              [s, [c, g.str, m.os.windows.version]],
              [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
              [
                [s, 'Windows'],
                [c, g.str, m.os.windows.version],
              ],
              [/\((bb)(10);/i],
              [[s, 'BlackBerry'], c],
              [
                /(blackberry)\w*\/?([\w\.]*)/i,
                /(tizen|kaios)[\/\s]([\w\.]+)/i,
                /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,
              ],
              [s, c],
              [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
              [[s, 'Symbian'], c],
              [/\((series40);/i],
              [s],
              [/mozilla.+\(mobile;.+gecko.+firefox/i],
              [[s, 'Firefox OS'], c],
              [
                /(nintendo|playstation)\s([wids34portablevu]+)/i,
                /(mint)[\/\s\(]?(\w*)/i,
                /(mageia|vectorlinux)[;\s]/i,
                /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
                /(hurd|linux)\s?([\w\.]*)/i,
                /(gnu)\s?([\w\.]*)/i,
              ],
              [s, c],
              [/(cros)\s[\w]+\s([\w\.]+\w)/i],
              [[s, 'Chromium OS'], c],
              [/(sunos)\s?([\w\.\d]*)/i],
              [[s, 'Solaris'], c],
              [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
              [s, c],
              [/(haiku)\s(\w+)/i],
              [s, c],
              [
                /cfnetwork\/.+darwin/i,
                /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,
              ],
              [
                [c, /_/g, '.'],
                [s, 'iOS'],
              ],
              [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
              [
                [s, 'Mac OS'],
                [c, /_/g, '.'],
              ],
              [
                /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,
                /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,
                /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
                /(unix)\s?([\w\.]*)/i,
              ],
              [s, c],
            ],
          },
          y = function (e, t) {
            if (
              ('object' === typeof e && ((t = e), (e = void 0)),
              !(this instanceof y))
            )
              return new y(e, t).getResult();
            var n =
                e ||
                (r && r.navigator && r.navigator.userAgent
                  ? r.navigator.userAgent
                  : ''),
              i = t ? h.extend(v, t) : v;
            return (
              (this.getBrowser = function () {
                var e = { name: void 0, version: void 0 };
                return (
                  g.rgx.call(e, n, i.browser), (e.major = h.major(e.version)), e
                );
              }),
              (this.getCPU = function () {
                var e = { architecture: void 0 };
                return g.rgx.call(e, n, i.cpu), e;
              }),
              (this.getDevice = function () {
                var e = { vendor: void 0, model: void 0, type: void 0 };
                return g.rgx.call(e, n, i.device), e;
              }),
              (this.getEngine = function () {
                var e = { name: void 0, version: void 0 };
                return g.rgx.call(e, n, i.engine), e;
              }),
              (this.getOS = function () {
                var e = { name: void 0, version: void 0 };
                return g.rgx.call(e, n, i.os), e;
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return n;
              }),
              (this.setUA = function (e) {
                return (n = e), this;
              }),
              this
            );
          };
        (y.VERSION = '0.7.21'),
          (y.BROWSER = { NAME: s, MAJOR: 'major', VERSION: c }),
          (y.CPU = { ARCHITECTURE: 'architecture' }),
          (y.DEVICE = {
            MODEL: a,
            VENDOR: u,
            TYPE: l,
            CONSOLE: 'console',
            MOBILE: d,
            SMARTTV: f,
            TABLET: p,
            WEARABLE: 'wearable',
            EMBEDDED: 'embedded',
          }),
          (y.ENGINE = { NAME: s, VERSION: c }),
          (y.OS = { NAME: s, VERSION: c }),
          'undefined' !== typeof t
            ? ('undefined' !== typeof e && e.exports && (t = e.exports = y),
              (t.UAParser = y))
            : void 0 ===
                (i = function () {
                  return y;
                }.call(t, n, t, e)) || (e.exports = i);
        var w = r && (r.jQuery || r.Zepto);
        if (w && !w.ua) {
          var b = new y();
          (w.ua = b.getResult()),
            (w.ua.get = function () {
              return b.getUA();
            }),
            (w.ua.set = function (e) {
              b.setUA(e);
              var t = b.getResult();
              for (var n in t) w.ua[n] = t[n];
            });
        }
      })('object' === typeof window ? window : this);
    },
  },
]);
