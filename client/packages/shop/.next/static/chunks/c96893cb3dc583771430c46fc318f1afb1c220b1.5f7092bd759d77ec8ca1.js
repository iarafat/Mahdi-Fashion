(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
    '0xii': function (e, t, n) {
      (function (t) {
        for (
          var r = n('FF9q'),
            a = 'undefined' === typeof window ? t : window,
            o = ['moz', 'webkit'],
            i = 'AnimationFrame',
            u = a['request' + i],
            c = a['cancel' + i] || a['cancelRequest' + i],
            s = 0;
          !u && s < o.length;
          s++
        )
          (u = a[o[s] + 'Request' + i]),
            (c = a[o[s] + 'Cancel' + i] || a[o[s] + 'CancelRequest' + i]);
        if (!u || !c) {
          var l = 0,
            f = 0,
            d = [];
          (u = function (e) {
            if (0 === d.length) {
              var t = r(),
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
            (c = function (e) {
              for (var t = 0; t < d.length; t++)
                d[t].handle === e && (d[t].cancelled = !0);
            });
        }
        (e.exports = function (e) {
          return u.call(a, e);
        }),
          (e.exports.cancel = function () {
            c.apply(a, arguments);
          }),
          (e.exports.polyfill = function (e) {
            e || (e = a),
              (e.requestAnimationFrame = u),
              (e.cancelAnimationFrame = c);
          });
      }.call(this, n('lpmq')));
    },
    '0zej': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var r = n('ERkP'),
        a = n.n(r).a.createElement,
        o = function (e) {
          var t = e.color,
            n = void 0 === t ? 'currentColor' : t,
            r = e.width,
            o = void 0 === r ? '18px' : r,
            i = e.height;
          return a(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 512 512',
              width: o,
              height: void 0 === i ? '18px' : i,
            },
            a('path', {
              d:
                'M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z',
              fill: n,
              stroke: n,
            })
          );
        };
    },
    FF9q: function (e, t, n) {
      (function (t) {
        (function () {
          var n, r, a, o, i, u;
          'undefined' !== typeof performance &&
          null !== performance &&
          performance.now
            ? (e.exports = function () {
                return performance.now();
              })
            : 'undefined' !== typeof t && null !== t && t.hrtime
            ? ((e.exports = function () {
                return (n() - i) / 1e6;
              }),
              (r = t.hrtime),
              (o = (n = function () {
                var e;
                return 1e9 * (e = r())[0] + e[1];
              })()),
              (u = 1e9 * t.uptime()),
              (i = o - u))
            : Date.now
            ? ((e.exports = function () {
                return Date.now() - a;
              }),
              (a = Date.now()))
            : ((e.exports = function () {
                return new Date().getTime() - a;
              }),
              (a = new Date().getTime()));
        }.call(this));
      }.call(this, n('F63i')));
    },
    'MXV/': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var r = n('ERkP'),
        a = n.n(r).a.createElement,
        o = function (e) {
          e.color;
          var t = e.width,
            n = void 0 === t ? '18px' : t,
            r = e.height;
          return a(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: n,
              height: void 0 === r ? '18px' : r,
              viewBox: '0 0 231.91 292',
            },
            a(
              'defs',
              null,
              a(
                'linearGradient',
                {
                  id: 'linear-gradient',
                  x1: '1',
                  y1: '0.439',
                  x2: '0.369',
                  y2: '1',
                  gradientUnits: 'objectBoundingBox',
                },
                a('stop', { offset: '0', stopColor: '#029477' }),
                a('stop', { offset: '1', stopColor: '#009e7f' })
              )
            ),
            a(
              'g',
              {
                id: 'no_cart_in_bag_2',
                'data-name': 'no cart in bag 2',
                transform: 'translate(-1388 -351)',
              },
              a('ellipse', {
                id: 'Ellipse_2873',
                'data-name': 'Ellipse 2873',
                cx: '115.955',
                cy: '27.366',
                rx: '115.955',
                ry: '27.366',
                transform: 'translate(1388 588.268)',
                fill: '#ddd',
                opacity: '0.25',
              }),
              a('path', {
                id: 'Path_18691',
                'data-name': 'Path 18691',
                d:
                  'M29.632,0H170.368A29.828,29.828,0,0,1,200,30.021V209.979A29.828,29.828,0,0,1,170.368,240H29.632A29.828,29.828,0,0,1,0,209.979V30.021A29.828,29.828,0,0,1,29.632,0Z',
                transform: 'translate(1403 381)',
                fill: '#009e7f',
              }),
              a('path', {
                id: 'Rectangle_1852',
                'data-name': 'Rectangle 1852',
                d:
                  'M30,0H170a30,30,0,0,1,30,30v0a30,30,0,0,1-30,30H12.857A12.857,12.857,0,0,1,0,47.143V30A30,30,0,0,1,30,0Z',
                transform: 'translate(1403 381)',
                fill: '#006854',
              }),
              a('path', {
                id: 'Rectangle_1853',
                'data-name': 'Rectangle 1853',
                d:
                  'M42,0H158a42,42,0,0,1,42,42v0a18,18,0,0,1-18,18H18A18,18,0,0,1,0,42v0A42,42,0,0,1,42,0Z',
                transform: 'translate(1403 381)',
                fill: '#006854',
              }),
              a('path', {
                id: 'Path_18685',
                'data-name': 'Path 18685',
                d:
                  'M446.31,246.056a30,30,0,1,1,30-30A30.034,30.034,0,0,1,446.31,246.056Zm0-53.294A23.3,23.3,0,1,0,469.9,216.056,23.471,23.471,0,0,0,446.31,192.762Z',
                transform: 'translate(1056.69 164.944)',
                fill: '#006854',
              }),
              a('path', {
                id: 'Path_18686',
                'data-name': 'Path 18686',
                d:
                  'M446.31,375.181a30,30,0,1,1,30-30A30.034,30.034,0,0,1,446.31,375.181Zm0-53.294A23.3,23.3,0,1,0,469.9,345.181,23.471,23.471,0,0,0,446.31,321.887Z',
                transform: 'translate(1057.793 95.684)',
                fill: '#009e7f',
              }),
              a('circle', {
                id: 'Ellipse_2874',
                'data-name': 'Ellipse 2874',
                cx: '28.689',
                cy: '28.689',
                r: '28.689',
                transform: 'translate(1473.823 511.046)',
                fill: '#006854',
              }),
              a('circle', {
                id: 'Ellipse_2875',
                'data-name': 'Ellipse 2875',
                cx: '15.046',
                cy: '15.046',
                r: '15.046',
                transform: 'translate(1481.401 547.854) rotate(-45)',
                fill: '#009e7f',
              }),
              a('path', {
                id: 'Path_18687',
                'data-name': 'Path 18687',
                d:
                  'M399.71,531.27a71.755,71.755,0,0,1,12.65-13.6c3.4-2.863-1.5-7.726-4.882-4.882a78.392,78.392,0,0,0-13.73,15c-2.56,3.644,3.424,7.1,5.962,3.485Z',
                transform: 'translate(1060.579 -35.703)',
                fill: '#006854',
              }),
              a('path', {
                id: 'Path_18688',
                'data-name': 'Path 18688',
                d:
                  'M412.913,527.786a78.419,78.419,0,0,0-13.73-15c-3.38-2.843-8.289,2.017-4.882,4.882a71.785,71.785,0,0,1,12.65,13.6c2.535,3.609,8.525.162,5.962-3.485Z',
                transform: 'translate(1060.566 -35.704)',
                fill: '#006854',
              }),
              a('path', {
                id: 'Path_18689',
                'data-name': 'Path 18689',
                d:
                  'M583.278,527.786a78.417,78.417,0,0,0-13.73-15c-3.38-2.843-8.289,2.017-4.882,4.882a71.768,71.768,0,0,1,12.65,13.6c2.535,3.609,8.525.162,5.962-3.485Z',
                transform: 'translate(970.304 -35.704)',
                fill: '#006854',
              }),
              a('path', {
                id: 'Path_18690',
                'data-name': 'Path 18690',
                d:
                  'M570.075,531.27a71.77,71.77,0,0,1,12.65-13.6c3.4-2.863-1.5-7.726-4.882-4.882a78.407,78.407,0,0,0-13.73,15c-2.56,3.644,3.424,7.1,5.962,3.485Z',
                transform: 'translate(970.318 -35.703)',
                fill: '#006854',
              }),
              a('path', {
                id: 'Path_18692',
                'data-name': 'Path 18692',
                d:
                  'M301.243,287.464a19.115,19.115,0,0,1,8.071,9.077,19.637,19.637,0,0,1,1.6,7.88v26.085a19.349,19.349,0,0,1-9.672,16.957c-10.048-6.858-16.544-17.742-16.544-30S291.2,294.322,301.243,287.464Z',
                transform: 'translate(1292.301 101.536)',
                fill: 'url(#linear-gradient)',
              }),
              a('path', {
                id: 'Path_18693',
                'data-name': 'Path 18693',
                d:
                  'M294.371,287.464a19.115,19.115,0,0,0-8.071,9.077,19.637,19.637,0,0,0-1.6,7.88v26.085a19.349,19.349,0,0,0,9.672,16.957c10.048-6.858,16.544-17.742,16.544-30S304.419,294.322,294.371,287.464Z',
                transform: 'translate(1118.301 101.536)',
                fill: 'url(#linear-gradient)',
              })
            )
          );
        };
    },
    QfjN: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return a;
      });
      var r = n('ERkP'),
        a = Object(r.createContext)({});
    },
    kp67: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return te;
      });
      var r = n('ERkP'),
        a = n.n(r),
        o = n('VtSi'),
        i = n.n(o),
        u = n('QsI/'),
        c = n('zygG'),
        s = n('j/s1'),
        l = n('tZdC'),
        f = n('B68Z'),
        d =
          (s.e.div.withConfig({
            displayName: 'authentication-formstyle__IconWrapper',
            componentId: 'sc-92tj4w-0',
          })(['display:flex;margin-right:6px;']),
          s.e.div.withConfig({
            displayName: 'authentication-formstyle__Wrapper',
            componentId: 'sc-92tj4w-1',
          })(
            ['text-align:center;background-color:', ';'],
            Object(l.a)('colors.white', '#ffffff')
          )),
        p = s.e.div.withConfig({
          displayName: 'authentication-formstyle__Container',
          componentId: 'sc-92tj4w-2',
        })([
          'padding:40px 60px 0;@media (max-width:768px){padding:40px 30px 0;}',
        ]),
        h =
          (s.e.div.withConfig({
            displayName: 'authentication-formstyle__LogoWrapper',
            componentId: 'sc-92tj4w-3',
          })(['margin-bottom:30px;img{max-width:160px;}']),
          s.e.h3.withConfig({
            displayName: 'authentication-formstyle__Heading',
            componentId: 'sc-92tj4w-4',
          })(
            [
              'margin-bottom:10px;font-family:',
              ';font-size:',
              'px;font-weight:',
              ';color:',
              ';',
            ],
            Object(l.a)('fonts.heading', 'sans-serif'),
            Object(l.a)('fontSizes.lg', '21'),
            Object(l.a)('fontWeights.bold', '700'),
            Object(l.a)('colors.primary.regular', '#009e7f')
          )),
        m = s.e.span.withConfig({
          displayName: 'authentication-formstyle__SubHeading',
          componentId: 'sc-92tj4w-5',
        })(
          [
            'margin-bottom:30px;font-family:',
            ';font-size:',
            'px;font-weight:',
            ';color:',
            ';display:block;',
          ],
          Object(l.a)('fonts.body', 'Lato'),
          Object(l.a)('fontSizes.base', '15'),
          Object(l.a)('fontWeights.regular', '400'),
          Object(l.a)('colors.text.regular', '#77798c')
        ),
        g = s.e.div.withConfig({
          displayName: 'authentication-formstyle__OfferSection',
          componentId: 'sc-92tj4w-6',
        })(
          [
            'padding:20px;background-color:',
            ';color:',
            ';display:flex;justify-content:center;align-items:center;',
          ],
          Object(l.a)('colors.gray.200', '#F7F7F7'),
          Object(l.a)('colors.primary.regular', '#009e7f')
        ),
        y = s.e.p.withConfig({
          displayName: 'authentication-formstyle__Offer',
          componentId: 'sc-92tj4w-7',
        })(
          [
            'font-family:',
            ';font-size:',
            'px;font-weight:',
            ';color:',
            ';margin:0;',
          ],
          Object(l.a)('fonts.body', 'Lato'),
          Object(l.a)('fontSizes.base', '15'),
          Object(l.a)('fontWeights.regular', '400'),
          Object(l.a)('colors.text.regular', '#77798c')
        ),
        b = s.e.p.withConfig({
          displayName: 'authentication-formstyle__HelperText',
          componentId: 'sc-92tj4w-8',
        })(
          [
            'font-family:',
            ';font-size:',
            'px;font-weight:',
            ';color:',
            ';margin:0;text-align:center;width:100%;a{font-weight:',
            ';color:',
            ';text-decoration:underline;}',
          ],
          Object(l.a)('fonts.body', 'Lato'),
          Object(l.a)('fontSizes.sm', '13'),
          Object(l.a)('fontWeights.regular', '400'),
          Object(l.a)('colors.text.regular', '#77798c'),
          Object(l.a)('fontWeights.bold', '700'),
          Object(l.a)('colors.blue.link', '#4285f4')
        ),
        v =
          (s.e.div.withConfig({
            displayName: 'authentication-formstyle__Divider',
            componentId: 'sc-92tj4w-9',
          })(
            [
              'padding:15px 0;width:100%;display:flex;justify-content:center;align-items:center;position:relative;span{font-family:',
              ';font-size:',
              'px;font-weight:',
              ';color:',
              ';line-height:1;background-color:',
              ";z-index:1;position:relative;padding:0 10px;}&::before{content:'';width:100%;height:1px;background-color:",
              ';position:absolute;top:50%;}',
            ],
            Object(l.a)('fonts.body', 'Lato'),
            Object(l.a)('fontSizes.base', '15'),
            Object(l.a)('fontWeights.regular', '400'),
            Object(l.a)('colors.text.bold', '#0D1136'),
            Object(l.a)('colors.white', '#ffffff'),
            Object(l.a)('colors.gray.500', '#f1f1f1')
          ),
          s.e.button.withConfig({
            displayName: 'authentication-formstyle__LinkButton',
            componentId: 'sc-92tj4w-10',
          })(
            [
              'background-color:transparent;border:0;outline:0;box-shadow:none;padding:0;font-size:calc(',
              'px - 1px);font-weight:',
              ';color:',
              ';text-decoration:underline;cursor:pointer;',
            ],
            Object(l.a)('fontSizes.base', '15'),
            Object(l.a)('fontWeights.bold', '700'),
            Object(l.a)('colors.primary.regular', '#009e7f')
          )),
        C = n('1U1M'),
        w = n('QfjN'),
        _ = n('yVh0'),
        x = n('2SGB'),
        S = n('VU+f'),
        j = n('VnWI'),
        O = n('KD1n'),
        k = n('H5qd'),
        N = n.n(k);
      function E() {
        var e = Object(O.a)([
          '\nmutation Login($phone: String!, $password: String!) {\n    login(phone: $phone, password: $password) {\n        user {\n            id\n            phones{\n                number\n            }\n        }\n        access_token\n    }\n}\n',
        ]);
        return (
          (E = function () {
            return e;
          }),
          e
        );
      }
      var T = N()(E()),
        I = n('7xIC'),
        P = n.n(I),
        A = n('z82P'),
        F = n.n(A),
        M = a.a.createElement;
      function D() {
        var e = Object(I.useRouter)(),
          t = Object(_.a)(),
          n = Object(r.useContext)(w.a).authDispatch,
          o = a.a.useState(''),
          s = Object(c.a)(o, 2),
          l = s[0],
          b = s[1],
          O = a.a.useState(''),
          k = Object(c.a)(O, 2),
          N = k[0],
          E = k[1],
          A = Object(C.a)(T, {
            onCompleted: function (t) {
              var r = t.login,
                a = r.access_token,
                o = r.user;
              localStorage.setItem('access_token', ''.concat(a)),
                n({ type: 'SIGNIN_SUCCESS', user: o }),
                Object(S.b)(),
                P.a.push('/[type]', e.asPath);
            },
            onError: function (e) {
              b(''), E('');
            },
          }),
          D = Object(c.a)(A, 2),
          z = D[0],
          L = D[1],
          R = L.loading,
          B = L.error;
        L.data;
        return M(
          d,
          null,
          M(
            p,
            null,
            M(
              h,
              null,
              M(x.a, { id: 'welcomeBack', defaultMessage: 'Welcome Back' })
            ),
            M(
              m,
              null,
              M(x.a, {
                id: 'loginText',
                defaultMessage: 'Login with your phone number & password',
              })
            ),
            M(
              'form',
              {
                onSubmit: (function () {
                  var e = Object(u.a)(
                    i.a.mark(function e(t) {
                      return i.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                t.preventDefault(),
                                (e.next = 3),
                                z({ variables: { phone: l, password: N } })
                              );
                            case 3:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              M(F.a, {
                inputProps: { name: 'phone', required: !0, autoFocus: !0 },
                containerStyle: { textAlign: 'left' },
                inputStyle: {
                  backgroundColor: '#F7F7F7',
                  height: '48px',
                  marginBottom: '10px',
                  width: '100%',
                },
                country: 'bd',
                value: l,
                onChange: function (e, t, n, r) {
                  b(e);
                },
              }),
              M(j.a, {
                type: 'password',
                placeholder: t.formatMessage({
                  id: 'passwordPlaceholder',
                  defaultMessage: 'Password (min 6 characters)',
                }),
                value: N,
                onChange: function (e) {
                  return E(e.target.value);
                },
                required: !0,
                height: '48px',
                backgroundColor: '#F7F7F7',
                mb: '10px',
              }),
              M(
                f.a,
                {
                  variant: 'primary',
                  size: 'big',
                  style: { width: '100%' },
                  type: 'submit',
                },
                M(x.a, { id: 'continueBtn', defaultMessage: 'Continue' })
              )
            ),
            R && M('p', { style: { marginTop: '15px' } }, 'Loading...'),
            B && M('p', { style: { marginTop: '15px' } }, ' Please try again'),
            M(
              y,
              { style: { padding: '20px 0' } },
              M(x.a, {
                id: 'dontHaveAccount',
                defaultMessage: "Don't have any account?",
              }),
              ' ',
              M(
                v,
                {
                  onClick: function () {
                    n({ type: 'SIGNUP' });
                  },
                },
                M(x.a, { id: 'signUpBtnText', defaultMessage: 'Sign Up' })
              )
            )
          ),
          M(
            g,
            null,
            M(
              y,
              null,
              M(x.a, {
                id: 'phoneVerifyText',
                defaultMessage: 'Phone number not verified?',
              }),
              ' ',
              M(
                v,
                {
                  onClick: function () {
                    n({ type: 'PHONE_VERIFICATION' });
                  },
                },
                M(x.a, { id: 'verifyNowText', defaultMessage: 'Verify Now' })
              )
            )
          )
        );
      }
      var z = n('jvFD'),
        L = n.n(z);
      function R() {
        var e = Object(O.a)([
          '\nmutation phoneVerificationCheck($phone: String!, $verification_code: String!) {\n    phoneVerificationCheck(phone: $phone, verification_code: $verification_code) {\n        user {\n            id\n            phones{\n                number\n            }\n        }\n        access_token\n  }\n}\n',
        ]);
        return (
          (R = function () {
            return e;
          }),
          e
        );
      }
      function B() {
        var e = Object(O.a)([
          '\nmutation phoneVerification($phone: String!) {\n    phoneVerification(phone: $phone) {\n    status\n    message\n  }\n}\n',
        ]);
        return (
          (B = function () {
            return e;
          }),
          e
        );
      }
      function V() {
        var e = Object(O.a)([
          '\nmutation SignUp($phone: String!, $password: String!) {\n  signUp(phone: $phone, password: $password) {\n    status\n    message\n  }\n}\n',
        ]);
        return (
          (V = function () {
            return e;
          }),
          e
        );
      }
      var $ = N()(V()),
        G = N()(B()),
        U = N()(R()),
        q = a.a.createElement;
      function W() {
        var e = Object(_.a)(),
          t = Object(r.useContext)(w.a),
          n = (t.authState, t.authDispatch),
          o = a.a.useState(''),
          s = Object(c.a)(o, 2),
          l = s[0],
          g = s[1],
          S = a.a.useState(''),
          O = Object(c.a)(S, 2),
          k = O[0],
          N = O[1],
          E = Object(C.a)($, {
            onCompleted: function (e) {
              localStorage.setItem('phone_number', ''.concat(l)),
                n({ type: 'OTP_VERIFICATION' });
            },
            onError: function (e) {
              g(''), N(''), console.log(e);
            },
          }),
          T = Object(c.a)(E, 2),
          I = T[0],
          P = T[1],
          A = P.loading,
          M = P.error;
        return q(
          d,
          null,
          q(
            p,
            null,
            q(
              h,
              null,
              q(x.a, { id: 'signUpBtnText', defaultMessage: 'Sign Up' })
            ),
            q(
              m,
              null,
              q(x.a, {
                id: 'signUpText',
                defaultMessage: 'Every fill is required in sign up',
              })
            ),
            q(
              'form',
              {
                method: 'post',
                onSubmit: (function () {
                  var e = Object(u.a)(
                    i.a.mark(function e(t) {
                      return i.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                t.preventDefault(),
                                (e.next = 3),
                                I({ variables: { phone: l, password: k } })
                              );
                            case 3:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              q(F.a, {
                inputProps: { name: 'phone', required: !0, autoFocus: !0 },
                containerStyle: { textAlign: 'left' },
                inputStyle: {
                  backgroundColor: '#F7F7F7',
                  height: '48px',
                  marginBottom: '10px',
                  width: '100%',
                },
                country: 'bd',
                value: l,
                onChange: function (e, t, n, r) {
                  g(e);
                },
              }),
              q(j.a, {
                type: 'password',
                name: 'password',
                value: k,
                onChange: function (e) {
                  return N(e.target.value);
                },
                placeholder: e.formatMessage({
                  id: 'passwordPlaceholder',
                  defaultMessage: 'Password (min 6 characters)',
                }),
                height: '48px',
                backgroundColor: '#F7F7F7',
                mb: '10px',
                required: !0,
              }),
              q(
                b,
                { style: { padding: '20px 0 30px' } },
                q(x.a, {
                  id: 'tramsText',
                  defaultMessage: "By signing up, you agree to Mahdi Fashion's",
                }),
                '\xa0',
                q(
                  L.a,
                  { href: '/' },
                  q(
                    'a',
                    null,
                    q(x.a, {
                      id: 'termsConditionText',
                      defaultMessage: 'Terms & Condition',
                    })
                  )
                )
              ),
              q(
                f.a,
                {
                  variant: 'primary',
                  size: 'big',
                  width: '100%',
                  type: 'submit',
                },
                q(x.a, { id: 'continueBtn', defaultMessage: 'Continue' })
              )
            ),
            A && q('p', { style: { marginTop: '15px' } }, 'Loading...'),
            M &&
              q(
                'p',
                { style: { marginTop: '15px', color: 'red' } },
                'Please try again'
              ),
            q(
              y,
              { style: { padding: '20px 0' } },
              q(x.a, {
                id: 'alreadyHaveAccount',
                defaultMessage: 'Already have an account?',
              }),
              ' ',
              q(
                v,
                {
                  onClick: function () {
                    n({ type: 'SIGNIN' });
                  },
                },
                q(x.a, { id: 'loginBtnText', defaultMessage: 'Login' })
              )
            )
          )
        );
      }
      var H = a.a.createElement;
      function K() {
        var e = Object(r.useContext)(w.a).authDispatch,
          t = Object(_.a)();
        return H(
          d,
          null,
          H(
            p,
            { style: { paddingBottom: 30 } },
            H(
              h,
              null,
              H(x.a, {
                id: 'forgotPassText',
                defaultMessage: 'Forgot Password',
              })
            ),
            H(
              m,
              null,
              H(x.a, {
                id: 'sendResetPassText',
                defaultMessage: "We'll send you a link to reset your password",
              })
            ),
            H(j.a, {
              type: 'text',
              placeholder: t.formatMessage({
                id: 'emailAddressPlaceholder',
                defaultMessage: 'Email Address or Contact No.',
              }),
              height: '48px',
              backgroundColor: '#F7F7F7',
              mb: '10px',
            }),
            H(
              f.a,
              {
                variant: 'primary',
                size: 'big',
                style: { width: '100%' },
                type: 'submit',
              },
              H(x.a, {
                id: 'resetPasswordBtn',
                defaultMessage: 'Reset Password',
              })
            ),
            H(
              y,
              { style: { padding: '20px 0 0' } },
              H(x.a, { id: 'backToSign', defaultMessage: 'Back to' }),
              ' ',
              H(
                v,
                {
                  onClick: function () {
                    e({ type: 'SIGNIN' });
                  },
                },
                H(x.a, { id: 'loginBtnText', defaultMessage: 'Login' })
              )
            )
          )
        );
      }
      var Z = a.a.createElement,
        J = s.e.div.withConfig({
          displayName: 'otpForm__Container',
          componentId: 'sc-196twzv-0',
        })(['padding:40px 60px;@media (max-width:768px){padding:40px 30px;}']);
      function Q() {
        var e = Object(I.useRouter)(),
          t = Object(_.a)(),
          n = Object(r.useContext)(w.a).authDispatch,
          o = a.a.useState(''),
          s = Object(c.a)(o, 2),
          l = s[0],
          p = s[1],
          g = Object(C.a)(U, {
            onCompleted: function (t) {
              var r = t.phoneVerificationCheck,
                a = r.access_token,
                o = r.user;
              localStorage.removeItem('phone_number'),
                localStorage.setItem('access_token', ''.concat(a)),
                n({ type: 'SIGNIN_SUCCESS', user: o }),
                Object(S.b)(),
                P.a.push('/[type]', e.asPath);
            },
            onError: function (e) {
              p('');
            },
          }),
          y = Object(c.a)(g, 2),
          b = y[0],
          v = y[1],
          O = v.loading,
          k = v.error,
          N =
            (v.data,
            (function () {
              var e = Object(u.a)(
                i.a.mark(function e(t) {
                  return i.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t.preventDefault(),
                            (e.next = 3),
                            b({
                              variables: {
                                verification_code: l,
                                phone: localStorage.getItem('phone_number'),
                              },
                            })
                          );
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })());
        return Z(
          d,
          null,
          Z(
            J,
            null,
            Z(
              h,
              null,
              Z(x.a, { id: 'otpForm', defaultMessage: 'Verify Phone Number' })
            ),
            Z(
              m,
              null,
              Z(x.a, {
                id: 'otpText',
                defaultMessage: 'Login with your phone number & password',
              })
            ),
            Z(
              'form',
              { onSubmit: N },
              Z(j.a, {
                type: 'text',
                placeholder: t.formatMessage({
                  id: 'verificationCodePlaceholder',
                  defaultMessage: 'Verification Code',
                }),
                value: l,
                onChange: function (e) {
                  return p(e.target.value);
                },
                required: !0,
                height: '48px',
                backgroundColor: '#F7F7F7',
                mb: '10px',
              }),
              Z(
                f.a,
                {
                  variant: 'primary',
                  size: 'big',
                  style: { width: '100%' },
                  type: 'submit',
                },
                'Verify Now'
              )
            ),
            O && Z('p', { style: { marginTop: '15px' } }, 'Loading...'),
            k &&
              Z(
                'p',
                { style: { marginTop: '15px', color: 'red' } },
                ' ',
                k.message
              )
          )
        );
      }
      var Y = a.a.createElement;
      function X() {
        var e = Object(r.useContext)(w.a).authDispatch,
          t = a.a.useState(''),
          n = Object(c.a)(t, 2),
          o = n[0],
          s = n[1],
          l = Object(C.a)(G, {
            onCompleted: function (t) {
              localStorage.setItem('phone_number', ''.concat(o)),
                e({ type: 'OTP_VERIFICATION' });
            },
            onError: function (e) {
              s(''), console.log(e);
            },
          }),
          g = Object(c.a)(l, 2),
          b = g[0],
          _ = g[1],
          S = _.loading,
          j = _.error;
        return Y(
          d,
          null,
          Y(
            p,
            { style: { paddingBottom: 30 } },
            Y(
              h,
              null,
              Y(x.a, {
                id: 'phoneVerificationText',
                defaultMessage: 'Phone Verification',
              })
            ),
            Y(
              m,
              null,
              Y(x.a, {
                id: 'sendPhoneVerifyText',
                defaultMessage:
                  "We'll send you a verification code to verify your phone number",
              })
            ),
            Y(
              'form',
              {
                method: 'post',
                onSubmit: (function () {
                  var e = Object(u.a)(
                    i.a.mark(function e(t) {
                      return i.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                t.preventDefault(),
                                (e.next = 3),
                                b({ variables: { phone: o } })
                              );
                            case 3:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              Y(F.a, {
                inputProps: { name: 'phone', required: !0, autoFocus: !0 },
                containerStyle: { textAlign: 'left' },
                inputStyle: {
                  backgroundColor: '#F7F7F7',
                  height: '48px',
                  marginBottom: '10px',
                  width: '100%',
                },
                country: 'bd',
                value: o,
                onChange: function (e, t, n, r) {
                  s(e);
                },
              }),
              Y(
                f.a,
                {
                  variant: 'primary',
                  size: 'big',
                  style: { width: '100%' },
                  type: 'submit',
                },
                'Send Code'
              )
            ),
            S && Y('p', { style: { marginTop: '15px' } }, 'Loading...'),
            j &&
              Y(
                'p',
                { style: { marginTop: '15px', color: 'red' } },
                'Please try again!'
              ),
            Y(
              y,
              { style: { padding: '20px 0' } },
              Y(x.a, { id: 'backToSign', defaultMessage: 'Back to' }),
              ' ',
              Y(
                v,
                {
                  onClick: function () {
                    e({ type: 'SIGNIN' });
                  },
                },
                Y(x.a, { id: 'loginBtnText', defaultMessage: 'Login' })
              )
            )
          )
        );
      }
      var ee = a.a.createElement;
      function te() {
        var e,
          t = Object(r.useContext)(w.a).authState;
        return (
          'signIn' === t.currentForm && (e = D),
          'signUp' === t.currentForm && (e = W),
          'forgotPass' === t.currentForm && (e = K),
          'otpVerification' === t.currentForm && (e = Q),
          'phoneVerification' === t.currentForm && (e = X),
          ee(e, null)
        );
      }
    },
    yVh0: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return i;
      });
      var r = n('ERkP'),
        a = n('YQpL'),
        o = n('R56p');
      function i() {
        var e = r.useContext(a.a);
        return Object(o.f)(e), e;
      }
    },
    z82P: function (e, t, n) {
      e.exports = (function (e) {
        var t = {};
        function n(r) {
          if (t[r]) return t[r].exports;
          var a = (t[r] = { i: r, l: !1, exports: {} });
          return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
        }
        return (
          (n.m = e),
          (n.c = t),
          (n.d = function (e, t, r) {
            n.o(e, t) ||
              Object.defineProperty(e, t, { enumerable: !0, get: r });
          }),
          (n.r = function (e) {
            'undefined' != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
              Object.defineProperty(e, '__esModule', { value: !0 });
          }),
          (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (
              (n.r(r),
              Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
              2 & t && 'string' != typeof e)
            )
              for (var a in e)
                n.d(
                  r,
                  a,
                  function (t) {
                    return e[t];
                  }.bind(null, a)
                );
            return r;
          }),
          (n.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return n.d(t, 'a', t), t;
          }),
          (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (n.p = ''),
          n((n.s = 9))
        );
      })([
        function (e, t) {
          e.exports = n('ERkP');
        },
        function (e, t, n) {
          var r;
          !(function () {
            'use strict';
            var n = {}.hasOwnProperty;
            function a() {
              for (var e = [], t = 0; t < arguments.length; t++) {
                var r = arguments[t];
                if (r) {
                  var o = typeof r;
                  if ('string' === o || 'number' === o) e.push(r);
                  else if (Array.isArray(r) && r.length) {
                    var i = a.apply(null, r);
                    i && e.push(i);
                  } else if ('object' === o)
                    for (var u in r) n.call(r, u) && r[u] && e.push(u);
                }
              }
              return e.join(' ');
            }
            e.exports
              ? ((a.default = a), (e.exports = a))
              : void 0 ===
                  (r = function () {
                    return a;
                  }.apply(t, [])) || (e.exports = r);
          })();
        },
        function (e, t, n) {
          (function (t) {
            var n = 1 / 0,
              r = 17976931348623157e292,
              a = NaN,
              o = '[object Symbol]',
              i = /^\s+|\s+$/g,
              u = /^[-+]0x[0-9a-f]+$/i,
              c = /^0b[01]+$/i,
              s = /^0o[0-7]+$/i,
              l = parseInt,
              f = 'object' == typeof t && t && t.Object === Object && t,
              d =
                'object' == typeof self &&
                self &&
                self.Object === Object &&
                self,
              p = f || d || Function('return this')(),
              h = Object.prototype.toString,
              m = p.Symbol,
              g = m ? m.prototype : void 0,
              y = g ? g.toString : void 0;
            function b(e) {
              if ('string' == typeof e) return e;
              if (C(e)) return y ? y.call(e) : '';
              var t = e + '';
              return '0' == t && 1 / e == -n ? '-0' : t;
            }
            function v(e) {
              var t = typeof e;
              return !!e && ('object' == t || 'function' == t);
            }
            function C(e) {
              return (
                'symbol' == typeof e ||
                ((function (e) {
                  return !!e && 'object' == typeof e;
                })(e) &&
                  h.call(e) == o)
              );
            }
            function w(e) {
              return e
                ? (e = (function (e) {
                    if ('number' == typeof e) return e;
                    if (C(e)) return a;
                    if (v(e)) {
                      var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
                      e = v(t) ? t + '' : t;
                    }
                    if ('string' != typeof e) return 0 === e ? e : +e;
                    e = e.replace(i, '');
                    var n = c.test(e);
                    return n || s.test(e)
                      ? l(e.slice(2), n ? 2 : 8)
                      : u.test(e)
                      ? a
                      : +e;
                  })(e)) === n || e === -n
                  ? (e < 0 ? -1 : 1) * r
                  : e == e
                  ? e
                  : 0
                : 0 === e
                ? e
                : 0;
            }
            e.exports = function (e, t, n) {
              var r, a, o;
              return (
                (e = null == (r = e) ? '' : b(r)),
                (a = (function (e) {
                  var t = w(e),
                    n = t % 1;
                  return t == t ? (n ? t - n : t) : 0;
                })(n)),
                0,
                (o = e.length),
                a == a &&
                  (void 0 !== o && (a = a <= o ? a : o), (a = a >= 0 ? a : 0)),
                (n = a),
                (t = b(t)),
                e.slice(n, n + t.length) == t
              );
            };
          }.call(this, n(3)));
        },
        function (e, t) {
          var n;
          n = (function () {
            return this;
          })();
          try {
            n = n || new Function('return this')();
          } catch (e) {
            'object' == typeof window && (n = window);
          }
          e.exports = n;
        },
        function (e, t, n) {
          (function (t) {
            var n,
              r = 'Expected a function',
              a = '__lodash_hash_undefined__',
              o = '[object Function]',
              i = '[object GeneratorFunction]',
              u = /^\[object .+?Constructor\]$/,
              c = 'object' == typeof t && t && t.Object === Object && t,
              s =
                'object' == typeof self &&
                self &&
                self.Object === Object &&
                self,
              l = c || s || Function('return this')(),
              f = Array.prototype,
              d = Function.prototype,
              p = Object.prototype,
              h = l['__core-js_shared__'],
              m = (n = /[^.]+$/.exec((h && h.keys && h.keys.IE_PROTO) || ''))
                ? 'Symbol(src)_1.' + n
                : '',
              g = d.toString,
              y = p.hasOwnProperty,
              b = p.toString,
              v = RegExp(
                '^' +
                  g
                    .call(y)
                    .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      '$1.*?'
                    ) +
                  '$'
              ),
              C = f.splice,
              w = N(l, 'Map'),
              _ = N(Object, 'create');
            function x(e) {
              var t = -1,
                n = e ? e.length : 0;
              for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1]);
              }
            }
            function S(e) {
              var t = -1,
                n = e ? e.length : 0;
              for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1]);
              }
            }
            function j(e) {
              var t = -1,
                n = e ? e.length : 0;
              for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1]);
              }
            }
            function O(e, t) {
              for (var n, r, a = e.length; a--; )
                if ((n = e[a][0]) === (r = t) || (n != n && r != r)) return a;
              return -1;
            }
            function k(e, t) {
              var n,
                r,
                a = e.__data__;
              return (
                'string' == (r = typeof (n = t)) ||
                'number' == r ||
                'symbol' == r ||
                'boolean' == r
                  ? '__proto__' !== n
                  : null === n
              )
                ? a['string' == typeof t ? 'string' : 'hash']
                : a.map;
            }
            function N(e, t) {
              var n = (function (e, t) {
                return null == e ? void 0 : e[t];
              })(e, t);
              return (function (e) {
                return (
                  !(!T(e) || ((t = e), m && m in t)) &&
                  ((function (e) {
                    var t = T(e) ? b.call(e) : '';
                    return t == o || t == i;
                  })(e) ||
                  (function (e) {
                    var t = !1;
                    if (null != e && 'function' != typeof e.toString)
                      try {
                        t = !!(e + '');
                      } catch (e) {}
                    return t;
                  })(e)
                    ? v
                    : u
                  ).test(
                    (function (e) {
                      if (null != e) {
                        try {
                          return g.call(e);
                        } catch (e) {}
                        try {
                          return e + '';
                        } catch (e) {}
                      }
                      return '';
                    })(e)
                  )
                );
                var t;
              })(n)
                ? n
                : void 0;
            }
            function E(e, t) {
              if ('function' != typeof e || (t && 'function' != typeof t))
                throw new TypeError(r);
              var n = function () {
                var r = arguments,
                  a = t ? t.apply(this, r) : r[0],
                  o = n.cache;
                if (o.has(a)) return o.get(a);
                var i = e.apply(this, r);
                return (n.cache = o.set(a, i)), i;
              };
              return (n.cache = new (E.Cache || j)()), n;
            }
            function T(e) {
              var t = typeof e;
              return !!e && ('object' == t || 'function' == t);
            }
            (x.prototype.clear = function () {
              this.__data__ = _ ? _(null) : {};
            }),
              (x.prototype.delete = function (e) {
                return this.has(e) && delete this.__data__[e];
              }),
              (x.prototype.get = function (e) {
                var t = this.__data__;
                if (_) {
                  var n = t[e];
                  return n === a ? void 0 : n;
                }
                return y.call(t, e) ? t[e] : void 0;
              }),
              (x.prototype.has = function (e) {
                var t = this.__data__;
                return _ ? void 0 !== t[e] : y.call(t, e);
              }),
              (x.prototype.set = function (e, t) {
                return (this.__data__[e] = _ && void 0 === t ? a : t), this;
              }),
              (S.prototype.clear = function () {
                this.__data__ = [];
              }),
              (S.prototype.delete = function (e) {
                var t = this.__data__,
                  n = O(t, e);
                return (
                  !(n < 0) &&
                  (n == t.length - 1 ? t.pop() : C.call(t, n, 1), !0)
                );
              }),
              (S.prototype.get = function (e) {
                var t = this.__data__,
                  n = O(t, e);
                return n < 0 ? void 0 : t[n][1];
              }),
              (S.prototype.has = function (e) {
                return O(this.__data__, e) > -1;
              }),
              (S.prototype.set = function (e, t) {
                var n = this.__data__,
                  r = O(n, e);
                return r < 0 ? n.push([e, t]) : (n[r][1] = t), this;
              }),
              (j.prototype.clear = function () {
                this.__data__ = {
                  hash: new x(),
                  map: new (w || S)(),
                  string: new x(),
                };
              }),
              (j.prototype.delete = function (e) {
                return k(this, e).delete(e);
              }),
              (j.prototype.get = function (e) {
                return k(this, e).get(e);
              }),
              (j.prototype.has = function (e) {
                return k(this, e).has(e);
              }),
              (j.prototype.set = function (e, t) {
                return k(this, e).set(e, t), this;
              }),
              (E.Cache = j),
              (e.exports = E);
          }.call(this, n(3)));
        },
        function (e, t, n) {
          (function (t) {
            var n = NaN,
              r = '[object Symbol]',
              a = /^\s+|\s+$/g,
              o = /^[-+]0x[0-9a-f]+$/i,
              i = /^0b[01]+$/i,
              u = /^0o[0-7]+$/i,
              c = parseInt,
              s = 'object' == typeof t && t && t.Object === Object && t,
              l =
                'object' == typeof self &&
                self &&
                self.Object === Object &&
                self,
              f = s || l || Function('return this')(),
              d = Object.prototype.toString,
              p = Math.max,
              h = Math.min,
              m = function () {
                return f.Date.now();
              };
            function g(e) {
              var t = typeof e;
              return !!e && ('object' == t || 'function' == t);
            }
            function y(e) {
              if ('number' == typeof e) return e;
              if (
                (function (e) {
                  return (
                    'symbol' == typeof e ||
                    ((function (e) {
                      return !!e && 'object' == typeof e;
                    })(e) &&
                      d.call(e) == r)
                  );
                })(e)
              )
                return n;
              if (g(e)) {
                var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
                e = g(t) ? t + '' : t;
              }
              if ('string' != typeof e) return 0 === e ? e : +e;
              e = e.replace(a, '');
              var s = i.test(e);
              return s || u.test(e)
                ? c(e.slice(2), s ? 2 : 8)
                : o.test(e)
                ? n
                : +e;
            }
            e.exports = function (e, t, n) {
              var r,
                a,
                o,
                i,
                u,
                c,
                s = 0,
                l = !1,
                f = !1,
                d = !0;
              if ('function' != typeof e)
                throw new TypeError('Expected a function');
              function b(t) {
                var n = r,
                  o = a;
                return (r = a = void 0), (s = t), (i = e.apply(o, n));
              }
              function v(e) {
                var n = e - c;
                return void 0 === c || n >= t || n < 0 || (f && e - s >= o);
              }
              function C() {
                var e = m();
                if (v(e)) return w(e);
                u = setTimeout(
                  C,
                  (function (e) {
                    var n = t - (e - c);
                    return f ? h(n, o - (e - s)) : n;
                  })(e)
                );
              }
              function w(e) {
                return (u = void 0), d && r ? b(e) : ((r = a = void 0), i);
              }
              function _() {
                var e = m(),
                  n = v(e);
                if (((r = arguments), (a = this), (c = e), n)) {
                  if (void 0 === u)
                    return (function (e) {
                      return (s = e), (u = setTimeout(C, t)), l ? b(e) : i;
                    })(c);
                  if (f) return (u = setTimeout(C, t)), b(c);
                }
                return void 0 === u && (u = setTimeout(C, t)), i;
              }
              return (
                (t = y(t) || 0),
                g(n) &&
                  ((l = !!n.leading),
                  (o = (f = 'maxWait' in n) ? p(y(n.maxWait) || 0, t) : o),
                  (d = 'trailing' in n ? !!n.trailing : d)),
                (_.cancel = function () {
                  void 0 !== u && clearTimeout(u),
                    (s = 0),
                    (r = c = a = u = void 0);
                }),
                (_.flush = function () {
                  return void 0 === u ? i : w(m());
                }),
                _
              );
            };
          }.call(this, n(3)));
        },
        function (e, t, n) {
          (function (e, n) {
            var r = 'Expected a function',
              a = '__lodash_hash_undefined__',
              o = 1,
              i = 2,
              u = 1 / 0,
              c = 9007199254740991,
              s = '[object Arguments]',
              l = '[object Array]',
              f = '[object Boolean]',
              d = '[object Date]',
              p = '[object Error]',
              h = '[object Function]',
              m = '[object GeneratorFunction]',
              g = '[object Map]',
              y = '[object Number]',
              b = '[object Object]',
              v = '[object RegExp]',
              C = '[object Set]',
              w = '[object String]',
              _ = '[object Symbol]',
              x = '[object ArrayBuffer]',
              S = '[object DataView]',
              j = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
              O = /^\w*$/,
              k = /^\./,
              N = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
              E = /\\(\\)?/g,
              T = /^\[object .+?Constructor\]$/,
              I = /^(?:0|[1-9]\d*)$/,
              P = {};
            (P['[object Float32Array]'] = P['[object Float64Array]'] = P[
              '[object Int8Array]'
            ] = P['[object Int16Array]'] = P['[object Int32Array]'] = P[
              '[object Uint8Array]'
            ] = P['[object Uint8ClampedArray]'] = P['[object Uint16Array]'] = P[
              '[object Uint32Array]'
            ] = !0),
              (P[s] = P[l] = P[x] = P[f] = P[S] = P[d] = P[p] = P[h] = P[g] = P[
                y
              ] = P[b] = P[v] = P[C] = P[w] = P['[object WeakMap]'] = !1);
            var A = 'object' == typeof e && e && e.Object === Object && e,
              F =
                'object' == typeof self &&
                self &&
                self.Object === Object &&
                self,
              M = A || F || Function('return this')(),
              D = t && !t.nodeType && t,
              z = D && 'object' == typeof n && n && !n.nodeType && n,
              L = z && z.exports === D && A.process,
              R = (function () {
                try {
                  return L && L.binding('util');
                } catch (e) {}
              })(),
              B = R && R.isTypedArray;
            function V(e, t, n, r) {
              var a = -1,
                o = e ? e.length : 0;
              for (r && o && (n = e[++a]); ++a < o; ) n = t(n, e[a], a, e);
              return n;
            }
            function $(e, t) {
              for (var n = -1, r = e ? e.length : 0; ++n < r; )
                if (t(e[n], n, e)) return !0;
              return !1;
            }
            function G(e, t, n, r, a) {
              return (
                a(e, function (e, a, o) {
                  n = r ? ((r = !1), e) : t(n, e, a, o);
                }),
                n
              );
            }
            function U(e) {
              var t = !1;
              if (null != e && 'function' != typeof e.toString)
                try {
                  t = !!(e + '');
                } catch (e) {}
              return t;
            }
            function q(e) {
              var t = -1,
                n = Array(e.size);
              return (
                e.forEach(function (e, r) {
                  n[++t] = [r, e];
                }),
                n
              );
            }
            function W(e) {
              var t = -1,
                n = Array(e.size);
              return (
                e.forEach(function (e) {
                  n[++t] = e;
                }),
                n
              );
            }
            var H,
              K,
              Z,
              J = Array.prototype,
              Q = Function.prototype,
              Y = Object.prototype,
              X = M['__core-js_shared__'],
              ee = (H = /[^.]+$/.exec((X && X.keys && X.keys.IE_PROTO) || ''))
                ? 'Symbol(src)_1.' + H
                : '',
              te = Q.toString,
              ne = Y.hasOwnProperty,
              re = Y.toString,
              ae = RegExp(
                '^' +
                  te
                    .call(ne)
                    .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      '$1.*?'
                    ) +
                  '$'
              ),
              oe = M.Symbol,
              ie = M.Uint8Array,
              ue = Y.propertyIsEnumerable,
              ce = J.splice,
              se =
                ((K = Object.keys),
                (Z = Object),
                function (e) {
                  return K(Z(e));
                }),
              le = Be(M, 'DataView'),
              fe = Be(M, 'Map'),
              de = Be(M, 'Promise'),
              pe = Be(M, 'Set'),
              he = Be(M, 'WeakMap'),
              me = Be(Object, 'create'),
              ge = Ke(le),
              ye = Ke(fe),
              be = Ke(de),
              ve = Ke(pe),
              Ce = Ke(he),
              we = oe ? oe.prototype : void 0,
              _e = we ? we.valueOf : void 0,
              xe = we ? we.toString : void 0;
            function Se(e) {
              var t = -1,
                n = e ? e.length : 0;
              for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1]);
              }
            }
            function je(e) {
              var t = -1,
                n = e ? e.length : 0;
              for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1]);
              }
            }
            function Oe(e) {
              var t = -1,
                n = e ? e.length : 0;
              for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1]);
              }
            }
            function ke(e) {
              var t = -1,
                n = e ? e.length : 0;
              for (this.__data__ = new Oe(); ++t < n; ) this.add(e[t]);
            }
            function Ne(e) {
              this.__data__ = new je(e);
            }
            function Ee(e, t) {
              for (var n = e.length; n--; ) if (Je(e[n][0], t)) return n;
              return -1;
            }
            (Se.prototype.clear = function () {
              this.__data__ = me ? me(null) : {};
            }),
              (Se.prototype.delete = function (e) {
                return this.has(e) && delete this.__data__[e];
              }),
              (Se.prototype.get = function (e) {
                var t = this.__data__;
                if (me) {
                  var n = t[e];
                  return n === a ? void 0 : n;
                }
                return ne.call(t, e) ? t[e] : void 0;
              }),
              (Se.prototype.has = function (e) {
                var t = this.__data__;
                return me ? void 0 !== t[e] : ne.call(t, e);
              }),
              (Se.prototype.set = function (e, t) {
                return (this.__data__[e] = me && void 0 === t ? a : t), this;
              }),
              (je.prototype.clear = function () {
                this.__data__ = [];
              }),
              (je.prototype.delete = function (e) {
                var t = this.__data__,
                  n = Ee(t, e);
                return (
                  !(n < 0) &&
                  (n == t.length - 1 ? t.pop() : ce.call(t, n, 1), !0)
                );
              }),
              (je.prototype.get = function (e) {
                var t = this.__data__,
                  n = Ee(t, e);
                return n < 0 ? void 0 : t[n][1];
              }),
              (je.prototype.has = function (e) {
                return Ee(this.__data__, e) > -1;
              }),
              (je.prototype.set = function (e, t) {
                var n = this.__data__,
                  r = Ee(n, e);
                return r < 0 ? n.push([e, t]) : (n[r][1] = t), this;
              }),
              (Oe.prototype.clear = function () {
                this.__data__ = {
                  hash: new Se(),
                  map: new (fe || je)(),
                  string: new Se(),
                };
              }),
              (Oe.prototype.delete = function (e) {
                return Re(this, e).delete(e);
              }),
              (Oe.prototype.get = function (e) {
                return Re(this, e).get(e);
              }),
              (Oe.prototype.has = function (e) {
                return Re(this, e).has(e);
              }),
              (Oe.prototype.set = function (e, t) {
                return Re(this, e).set(e, t), this;
              }),
              (ke.prototype.add = ke.prototype.push = function (e) {
                return this.__data__.set(e, a), this;
              }),
              (ke.prototype.has = function (e) {
                return this.__data__.has(e);
              }),
              (Ne.prototype.clear = function () {
                this.__data__ = new je();
              }),
              (Ne.prototype.delete = function (e) {
                return this.__data__.delete(e);
              }),
              (Ne.prototype.get = function (e) {
                return this.__data__.get(e);
              }),
              (Ne.prototype.has = function (e) {
                return this.__data__.has(e);
              }),
              (Ne.prototype.set = function (e, t) {
                var n = this.__data__;
                if (n instanceof je) {
                  var r = n.__data__;
                  if (!fe || r.length < 199) return r.push([e, t]), this;
                  n = this.__data__ = new Oe(r);
                }
                return n.set(e, t), this;
              });
            var Te,
              Ie =
                ((Te = function (e, t) {
                  return e && Pe(e, t, it);
                }),
                function (e, t) {
                  if (null == e) return e;
                  if (!Xe(e)) return Te(e, t);
                  for (
                    var n = e.length, r = -1, a = Object(e);
                    ++r < n && !1 !== t(a[r], r, a);

                  );
                  return e;
                }),
              Pe = function (e, t, n) {
                for (var r = -1, a = Object(e), o = n(e), i = o.length; i--; ) {
                  var u = o[++r];
                  if (!1 === t(a[u], u, a)) break;
                }
                return e;
              };
            function Ae(e, t) {
              for (
                var n = 0, r = (t = Ge(t, e) ? [t] : ze(t)).length;
                null != e && n < r;

              )
                e = e[He(t[n++])];
              return n && n == r ? e : void 0;
            }
            function Fe(e, t) {
              return null != e && t in Object(e);
            }
            function Me(e, t, n, r, a) {
              return (
                e === t ||
                (null == e || null == t || (!nt(e) && !rt(t))
                  ? e != e && t != t
                  : (function (e, t, n, r, a, u) {
                      var c = Ye(e),
                        h = Ye(t),
                        m = l,
                        j = l;
                      c || (m = (m = Ve(e)) == s ? b : m),
                        h || (j = (j = Ve(t)) == s ? b : j);
                      var O = m == b && !U(e),
                        k = j == b && !U(t),
                        N = m == j;
                      if (N && !O)
                        return (
                          u || (u = new Ne()),
                          c || ot(e)
                            ? Le(e, t, n, r, a, u)
                            : (function (e, t, n, r, a, u, c) {
                                switch (n) {
                                  case S:
                                    if (
                                      e.byteLength != t.byteLength ||
                                      e.byteOffset != t.byteOffset
                                    )
                                      return !1;
                                    (e = e.buffer), (t = t.buffer);
                                  case x:
                                    return !(
                                      e.byteLength != t.byteLength ||
                                      !r(new ie(e), new ie(t))
                                    );
                                  case f:
                                  case d:
                                  case y:
                                    return Je(+e, +t);
                                  case p:
                                    return (
                                      e.name == t.name && e.message == t.message
                                    );
                                  case v:
                                  case w:
                                    return e == t + '';
                                  case g:
                                    var s = q;
                                  case C:
                                    var l = u & i;
                                    if ((s || (s = W), e.size != t.size && !l))
                                      return !1;
                                    var h = c.get(e);
                                    if (h) return h == t;
                                    (u |= o), c.set(e, t);
                                    var m = Le(s(e), s(t), r, a, u, c);
                                    return c.delete(e), m;
                                  case _:
                                    if (_e) return _e.call(e) == _e.call(t);
                                }
                                return !1;
                              })(e, t, m, n, r, a, u)
                        );
                      if (!(a & i)) {
                        var E = O && ne.call(e, '__wrapped__'),
                          T = k && ne.call(t, '__wrapped__');
                        if (E || T) {
                          var I = E ? e.value() : e,
                            P = T ? t.value() : t;
                          return u || (u = new Ne()), n(I, P, r, a, u);
                        }
                      }
                      return (
                        !!N &&
                        (u || (u = new Ne()),
                        (function (e, t, n, r, a, o) {
                          var u = a & i,
                            c = it(e),
                            s = c.length;
                          if (s != it(t).length && !u) return !1;
                          for (var l = s; l--; ) {
                            var f = c[l];
                            if (!(u ? f in t : ne.call(t, f))) return !1;
                          }
                          var d = o.get(e);
                          if (d && o.get(t)) return d == t;
                          var p = !0;
                          o.set(e, t), o.set(t, e);
                          for (var h = u; ++l < s; ) {
                            var m = e[(f = c[l])],
                              g = t[f];
                            if (r)
                              var y = u
                                ? r(g, m, f, t, e, o)
                                : r(m, g, f, e, t, o);
                            if (
                              !(void 0 === y ? m === g || n(m, g, r, a, o) : y)
                            ) {
                              p = !1;
                              break;
                            }
                            h || (h = 'constructor' == f);
                          }
                          if (p && !h) {
                            var b = e.constructor,
                              v = t.constructor;
                            b != v &&
                              'constructor' in e &&
                              'constructor' in t &&
                              !(
                                'function' == typeof b &&
                                b instanceof b &&
                                'function' == typeof v &&
                                v instanceof v
                              ) &&
                              (p = !1);
                          }
                          return o.delete(e), o.delete(t), p;
                        })(e, t, n, r, a, u))
                      );
                    })(e, t, Me, n, r, a))
              );
            }
            function De(e) {
              return 'function' == typeof e
                ? e
                : null == e
                ? ut
                : 'object' == typeof e
                ? Ye(e)
                  ? (function (e, t) {
                      return Ge(e) && Ue(t)
                        ? qe(He(e), t)
                        : function (n) {
                            var r = (function (e, t, n) {
                              var r = null == e ? void 0 : Ae(e, t);
                              return void 0 === r ? void 0 : r;
                            })(n, e);
                            return void 0 === r && r === t
                              ? (function (e, t) {
                                  return (
                                    null != e &&
                                    (function (e, t, n) {
                                      for (
                                        var r,
                                          a = -1,
                                          o = (t = Ge(t, e) ? [t] : ze(t))
                                            .length;
                                        ++a < o;

                                      ) {
                                        var i = He(t[a]);
                                        if (!(r = null != e && n(e, i))) break;
                                        e = e[i];
                                      }
                                      return (
                                        r ||
                                        (!!(o = e ? e.length : 0) &&
                                          tt(o) &&
                                          $e(i, o) &&
                                          (Ye(e) || Qe(e)))
                                      );
                                    })(e, t, Fe)
                                  );
                                })(n, e)
                              : Me(t, r, void 0, o | i);
                          };
                    })(e[0], e[1])
                  : (function (e) {
                      var t = (function (e) {
                        for (var t = it(e), n = t.length; n--; ) {
                          var r = t[n],
                            a = e[r];
                          t[n] = [r, a, Ue(a)];
                        }
                        return t;
                      })(e);
                      return 1 == t.length && t[0][2]
                        ? qe(t[0][0], t[0][1])
                        : function (n) {
                            return (
                              n === e ||
                              (function (e, t, n, r) {
                                var a = n.length,
                                  u = a;
                                if (null == e) return !u;
                                for (e = Object(e); a--; ) {
                                  var c = n[a];
                                  if (c[2] ? c[1] !== e[c[0]] : !(c[0] in e))
                                    return !1;
                                }
                                for (; ++a < u; ) {
                                  var s = (c = n[a])[0],
                                    l = e[s],
                                    f = c[1];
                                  if (c[2]) {
                                    if (void 0 === l && !(s in e)) return !1;
                                  } else {
                                    var d,
                                      p = new Ne();
                                    if (
                                      !(void 0 === d
                                        ? Me(f, l, r, o | i, p)
                                        : d)
                                    )
                                      return !1;
                                  }
                                }
                                return !0;
                              })(n, 0, t)
                            );
                          };
                    })(e)
                : Ge((t = e))
                ? ((n = He(t)),
                  function (e) {
                    return null == e ? void 0 : e[n];
                  })
                : (function (e) {
                    return function (t) {
                      return Ae(t, e);
                    };
                  })(t);
              var t, n;
            }
            function ze(e) {
              return Ye(e) ? e : We(e);
            }
            function Le(e, t, n, r, a, u) {
              var c = a & i,
                s = e.length,
                l = t.length;
              if (s != l && !(c && l > s)) return !1;
              var f = u.get(e);
              if (f && u.get(t)) return f == t;
              var d = -1,
                p = !0,
                h = a & o ? new ke() : void 0;
              for (u.set(e, t), u.set(t, e); ++d < s; ) {
                var m = e[d],
                  g = t[d];
                if (r) var y = c ? r(g, m, d, t, e, u) : r(m, g, d, e, t, u);
                if (void 0 !== y) {
                  if (y) continue;
                  p = !1;
                  break;
                }
                if (h) {
                  if (
                    !$(t, function (e, t) {
                      if (!h.has(t) && (m === e || n(m, e, r, a, u)))
                        return h.add(t);
                    })
                  ) {
                    p = !1;
                    break;
                  }
                } else if (m !== g && !n(m, g, r, a, u)) {
                  p = !1;
                  break;
                }
              }
              return u.delete(e), u.delete(t), p;
            }
            function Re(e, t) {
              var n,
                r,
                a = e.__data__;
              return (
                'string' == (r = typeof (n = t)) ||
                'number' == r ||
                'symbol' == r ||
                'boolean' == r
                  ? '__proto__' !== n
                  : null === n
              )
                ? a['string' == typeof t ? 'string' : 'hash']
                : a.map;
            }
            function Be(e, t) {
              var n = (function (e, t) {
                return null == e ? void 0 : e[t];
              })(e, t);
              return (function (e) {
                return (
                  !(
                    !nt(e) ||
                    (function (e) {
                      return !!ee && ee in e;
                    })(e)
                  ) && (et(e) || U(e) ? ae : T).test(Ke(e))
                );
              })(n)
                ? n
                : void 0;
            }
            var Ve = function (e) {
              return re.call(e);
            };
            function $e(e, t) {
              return (
                !!(t = null == t ? c : t) &&
                ('number' == typeof e || I.test(e)) &&
                e > -1 &&
                e % 1 == 0 &&
                e < t
              );
            }
            function Ge(e, t) {
              if (Ye(e)) return !1;
              var n = typeof e;
              return (
                !(
                  'number' != n &&
                  'symbol' != n &&
                  'boolean' != n &&
                  null != e &&
                  !at(e)
                ) ||
                O.test(e) ||
                !j.test(e) ||
                (null != t && e in Object(t))
              );
            }
            function Ue(e) {
              return e == e && !nt(e);
            }
            function qe(e, t) {
              return function (n) {
                return (
                  null != n && n[e] === t && (void 0 !== t || e in Object(n))
                );
              };
            }
            ((le && Ve(new le(new ArrayBuffer(1))) != S) ||
              (fe && Ve(new fe()) != g) ||
              (de && '[object Promise]' != Ve(de.resolve())) ||
              (pe && Ve(new pe()) != C) ||
              (he && '[object WeakMap]' != Ve(new he()))) &&
              (Ve = function (e) {
                var t = re.call(e),
                  n = t == b ? e.constructor : void 0,
                  r = n ? Ke(n) : void 0;
                if (r)
                  switch (r) {
                    case ge:
                      return S;
                    case ye:
                      return g;
                    case be:
                      return '[object Promise]';
                    case ve:
                      return C;
                    case Ce:
                      return '[object WeakMap]';
                  }
                return t;
              });
            var We = Ze(function (e) {
              var t;
              e =
                null == (t = e)
                  ? ''
                  : (function (e) {
                      if ('string' == typeof e) return e;
                      if (at(e)) return xe ? xe.call(e) : '';
                      var t = e + '';
                      return '0' == t && 1 / e == -u ? '-0' : t;
                    })(t);
              var n = [];
              return (
                k.test(e) && n.push(''),
                e.replace(N, function (e, t, r, a) {
                  n.push(r ? a.replace(E, '$1') : t || e);
                }),
                n
              );
            });
            function He(e) {
              if ('string' == typeof e || at(e)) return e;
              var t = e + '';
              return '0' == t && 1 / e == -u ? '-0' : t;
            }
            function Ke(e) {
              if (null != e) {
                try {
                  return te.call(e);
                } catch (e) {}
                try {
                  return e + '';
                } catch (e) {}
              }
              return '';
            }
            function Ze(e, t) {
              if ('function' != typeof e || (t && 'function' != typeof t))
                throw new TypeError(r);
              var n = function () {
                var r = arguments,
                  a = t ? t.apply(this, r) : r[0],
                  o = n.cache;
                if (o.has(a)) return o.get(a);
                var i = e.apply(this, r);
                return (n.cache = o.set(a, i)), i;
              };
              return (n.cache = new (Ze.Cache || Oe)()), n;
            }
            function Je(e, t) {
              return e === t || (e != e && t != t);
            }
            function Qe(e) {
              return (
                (function (e) {
                  return rt(e) && Xe(e);
                })(e) &&
                ne.call(e, 'callee') &&
                (!ue.call(e, 'callee') || re.call(e) == s)
              );
            }
            Ze.Cache = Oe;
            var Ye = Array.isArray;
            function Xe(e) {
              return null != e && tt(e.length) && !et(e);
            }
            function et(e) {
              var t = nt(e) ? re.call(e) : '';
              return t == h || t == m;
            }
            function tt(e) {
              return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= c;
            }
            function nt(e) {
              var t = typeof e;
              return !!e && ('object' == t || 'function' == t);
            }
            function rt(e) {
              return !!e && 'object' == typeof e;
            }
            function at(e) {
              return 'symbol' == typeof e || (rt(e) && re.call(e) == _);
            }
            var ot = B
              ? (function (e) {
                  return function (t) {
                    return e(t);
                  };
                })(B)
              : function (e) {
                  return rt(e) && tt(e.length) && !!P[re.call(e)];
                };
            function it(e) {
              return Xe(e)
                ? (function (e, t) {
                    var n =
                        Ye(e) || Qe(e)
                          ? (function (e, t) {
                              for (var n = -1, r = Array(e); ++n < e; )
                                r[n] = t(n);
                              return r;
                            })(e.length, String)
                          : [],
                      r = n.length,
                      a = !!r;
                    for (var o in e)
                      (!t && !ne.call(e, o)) ||
                        (a && ('length' == o || $e(o, r))) ||
                        n.push(o);
                    return n;
                  })(e)
                : (function (e) {
                    if (
                      ((n = (t = e) && t.constructor),
                      t !== (('function' == typeof n && n.prototype) || Y))
                    )
                      return se(e);
                    var t,
                      n,
                      r = [];
                    for (var a in Object(e))
                      ne.call(e, a) && 'constructor' != a && r.push(a);
                    return r;
                  })(e);
            }
            function ut(e) {
              return e;
            }
            n.exports = function (e, t, n) {
              var r = Ye(e) ? V : G,
                a = arguments.length < 3;
              return r(e, De(t), n, a, Ie);
            };
          }.call(this, n(3), n(7)(e)));
        },
        function (e, t) {
          e.exports = function (e) {
            return (
              e.webpackPolyfill ||
                ((e.deprecate = function () {}),
                (e.paths = []),
                e.children || (e.children = []),
                Object.defineProperty(e, 'loaded', {
                  enumerable: !0,
                  get: function () {
                    return e.l;
                  },
                }),
                Object.defineProperty(e, 'id', {
                  enumerable: !0,
                  get: function () {
                    return e.i;
                  },
                }),
                (e.webpackPolyfill = 1)),
              e
            );
          };
        },
        function (e, t) {
          String.prototype.padEnd ||
            (String.prototype.padEnd = function (e, t) {
              return (
                (e >>= 0),
                (t = String(void 0 !== t ? t : ' ')),
                this.length > e
                  ? String(this)
                  : ((e -= this.length) > t.length &&
                      (t += t.repeat(e / t.length)),
                    String(this) + t.slice(0, e))
              );
            });
        },
        function (e, t, n) {
          'use strict';
          function r(e, t, n) {
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
          function a(e) {
            if (
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          }
          function o(e) {
            return (
              (function (e) {
                if (Array.isArray(e)) {
                  for (var t = 0, n = new Array(e.length); t < e.length; t++)
                    n[t] = e[t];
                  return n;
                }
              })(e) ||
              a(e) ||
              (function () {
                throw new TypeError(
                  'Invalid attempt to spread non-iterable instance'
                );
              })()
            );
          }
          function i(e) {
            if (Array.isArray(e)) return e;
          }
          function u() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            );
          }
          function c(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }
          function s(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          function l(e) {
            return (l =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  })(e);
          }
          function f(e) {
            return (f =
              'function' == typeof Symbol && 'symbol' === l(Symbol.iterator)
                ? function (e) {
                    return l(e);
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : l(e);
                  })(e);
          }
          function d(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function p(e) {
            return (p = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function h(e, t) {
            return (h =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          n.r(t);
          var m = n(0),
            g = n.n(m),
            y = n(5),
            b = n.n(y),
            v = n(4),
            C = n.n(v),
            w = n(6),
            _ = n.n(w),
            x = n(2),
            S = n.n(x),
            j = n(1),
            O = n.n(j);
          function k(e, t) {
            return (
              i(e) ||
              (function (e, t) {
                var n = [],
                  r = !0,
                  a = !1,
                  o = void 0;
                try {
                  for (
                    var i, u = e[Symbol.iterator]();
                    !(r = (i = u.next()).done) &&
                    (n.push(i.value), !t || n.length !== t);
                    r = !0
                  );
                } catch (e) {
                  (a = !0), (o = e);
                } finally {
                  try {
                    r || null == u.return || u.return();
                  } finally {
                    if (a) throw o;
                  }
                }
                return n;
              })(e, t) ||
              u()
            );
          }
          n(8);
          var N = [
              ['Afghanistan', ['asia'], 'af', '93'],
              ['Albania', ['europe'], 'al', '355'],
              ['Algeria', ['africa', 'north-africa'], 'dz', '213'],
              ['Andorra', ['europe'], 'ad', '376'],
              ['Angola', ['africa'], 'ao', '244'],
              ['Antigua and Barbuda', ['america', 'carribean'], 'ag', '1268'],
              [
                'Argentina',
                ['america', 'south-america'],
                'ar',
                '54',
                '(..) ........',
                0,
                [
                  '11',
                  '221',
                  '223',
                  '261',
                  '264',
                  '2652',
                  '280',
                  '2905',
                  '291',
                  '2920',
                  '2966',
                  '299',
                  '341',
                  '342',
                  '343',
                  '351',
                  '376',
                  '379',
                  '381',
                  '3833',
                  '385',
                  '387',
                  '388',
                ],
              ],
              ['Armenia', ['asia', 'ex-ussr'], 'am', '374'],
              ['Aruba', ['america', 'carribean'], 'aw', '297'],
              [
                'Australia',
                ['oceania'],
                'au',
                '61',
                '(..) .... ....',
                0,
                ['2', '3', '4', '7', '8', '02', '03', '04', '07', '08'],
              ],
              ['Austria', ['europe', 'eu-union'], 'at', '43'],
              ['Azerbaijan', ['asia', 'ex-ussr'], 'az', '994'],
              ['Bahamas', ['america', 'carribean'], 'bs', '1242'],
              ['Bahrain', ['middle-east'], 'bh', '973'],
              ['Bangladesh', ['asia'], 'bd', '880'],
              ['Barbados', ['america', 'carribean'], 'bb', '1246'],
              ['Belarus', ['europe', 'ex-ussr'], 'by', '375', '(..) ... .. ..'],
              ['Belgium', ['europe', 'eu-union'], 'be', '32', '... .. .. ..'],
              ['Belize', ['america', 'central-america'], 'bz', '501'],
              ['Benin', ['africa'], 'bj', '229'],
              ['Bhutan', ['asia'], 'bt', '975'],
              ['Bolivia', ['america', 'south-america'], 'bo', '591'],
              ['Bosnia and Herzegovina', ['europe', 'ex-yugos'], 'ba', '387'],
              ['Botswana', ['africa'], 'bw', '267'],
              [
                'Brazil',
                ['america', 'south-america'],
                'br',
                '55',
                '(..) .........',
              ],
              ['British Indian Ocean Territory', ['asia'], 'io', '246'],
              ['Brunei', ['asia'], 'bn', '673'],
              ['Bulgaria', ['europe', 'eu-union'], 'bg', '359'],
              ['Burkina Faso', ['africa'], 'bf', '226'],
              ['Burundi', ['africa'], 'bi', '257'],
              ['Cambodia', ['asia'], 'kh', '855'],
              ['Cameroon', ['africa'], 'cm', '237'],
              [
                'Canada',
                ['america', 'north-america'],
                'ca',
                '1',
                '(...) ...-....',
                1,
                [
                  '204',
                  '226',
                  '236',
                  '249',
                  '250',
                  '289',
                  '306',
                  '343',
                  '365',
                  '387',
                  '403',
                  '416',
                  '418',
                  '431',
                  '437',
                  '438',
                  '450',
                  '506',
                  '514',
                  '519',
                  '548',
                  '579',
                  '581',
                  '587',
                  '604',
                  '613',
                  '639',
                  '647',
                  '672',
                  '705',
                  '709',
                  '742',
                  '778',
                  '780',
                  '782',
                  '807',
                  '819',
                  '825',
                  '867',
                  '873',
                  '902',
                  '905',
                ],
              ],
              ['Cape Verde', ['africa'], 'cv', '238'],
              [
                'Caribbean Netherlands',
                ['america', 'carribean'],
                'bq',
                '599',
                '',
                1,
              ],
              ['Central African Republic', ['africa'], 'cf', '236'],
              ['Chad', ['africa'], 'td', '235'],
              ['Chile', ['america', 'south-america'], 'cl', '56'],
              ['China', ['asia'], 'cn', '86', '..-.........'],
              ['Colombia', ['america', 'south-america'], 'co', '57'],
              ['Comoros', ['africa'], 'km', '269'],
              ['Congo', ['africa'], 'cd', '243'],
              ['Congo', ['africa'], 'cg', '242'],
              [
                'Costa Rica',
                ['america', 'central-america'],
                'cr',
                '506',
                '....-....',
              ],
              ['C\xf4te d\u2019Ivoire', ['africa'], 'ci', '225', '.. .. .. ..'],
              ['Croatia', ['europe', 'eu-union', 'ex-yugos'], 'hr', '385'],
              ['Cuba', ['america', 'carribean'], 'cu', '53'],
              ['Cura\xe7ao', ['america', 'carribean'], 'cw', '599', '', 0],
              ['Cyprus', ['europe', 'eu-union'], 'cy', '357', '.. ......'],
              ['Czech Republic', ['europe', 'eu-union'], 'cz', '420'],
              [
                'Denmark',
                ['europe', 'eu-union', 'baltic'],
                'dk',
                '45',
                '.. .. .. ..',
              ],
              ['Djibouti', ['africa'], 'dj', '253'],
              ['Dominica', ['america', 'carribean'], 'dm', '1767'],
              [
                'Dominican Republic',
                ['america', 'carribean'],
                'do',
                '1',
                '',
                2,
                ['809', '829', '849'],
              ],
              ['Ecuador', ['america', 'south-america'], 'ec', '593'],
              ['Egypt', ['africa', 'north-africa'], 'eg', '20'],
              [
                'El Salvador',
                ['america', 'central-america'],
                'sv',
                '503',
                '....-....',
              ],
              ['Equatorial Guinea', ['africa'], 'gq', '240'],
              ['Eritrea', ['africa'], 'er', '291'],
              [
                'Estonia',
                ['europe', 'eu-union', 'ex-ussr', 'baltic'],
                'ee',
                '372',
                '.... ......',
              ],
              ['Ethiopia', ['africa'], 'et', '251'],
              ['Fiji', ['oceania'], 'fj', '679'],
              [
                'Finland',
                ['europe', 'eu-union', 'baltic'],
                'fi',
                '358',
                '.. ... .. ..',
              ],
              ['France', ['europe', 'eu-union'], 'fr', '33', '. .. .. .. ..'],
              ['French Guiana', ['america', 'south-america'], 'gf', '594'],
              ['French Polynesia', ['oceania'], 'pf', '689'],
              ['Gabon', ['africa'], 'ga', '241'],
              ['Gambia', ['africa'], 'gm', '220'],
              ['Georgia', ['asia', 'ex-ussr'], 'ge', '995'],
              [
                'Germany',
                ['europe', 'eu-union', 'baltic'],
                'de',
                '49',
                '.... ........',
              ],
              ['Ghana', ['africa'], 'gh', '233'],
              ['Greece', ['europe', 'eu-union'], 'gr', '30'],
              ['Grenada', ['america', 'carribean'], 'gd', '1473'],
              ['Guadeloupe', ['america', 'carribean'], 'gp', '590', '', 0],
              ['Guam', ['oceania'], 'gu', '1671'],
              [
                'Guatemala',
                ['america', 'central-america'],
                'gt',
                '502',
                '....-....',
              ],
              ['Guinea', ['africa'], 'gn', '224'],
              ['Guinea-Bissau', ['africa'], 'gw', '245'],
              ['Guyana', ['america', 'south-america'], 'gy', '592'],
              ['Haiti', ['america', 'carribean'], 'ht', '509', '....-....'],
              ['Honduras', ['america', 'central-america'], 'hn', '504'],
              ['Hong Kong', ['asia'], 'hk', '852', '.... ....'],
              ['Hungary', ['europe', 'eu-union'], 'hu', '36'],
              ['Iceland', ['europe'], 'is', '354', '... ....'],
              ['India', ['asia'], 'in', '91', '.....-.....'],
              ['Indonesia', ['asia'], 'id', '62'],
              ['Iran', ['middle-east'], 'ir', '98', '... ... ....'],
              ['Iraq', ['middle-east'], 'iq', '964'],
              ['Ireland', ['europe', 'eu-union'], 'ie', '353', '.. .......'],
              ['Israel', ['middle-east'], 'il', '972', '... ... ....'],
              ['Italy', ['europe', 'eu-union'], 'it', '39', '... .......', 0],
              ['Jamaica', ['america', 'carribean'], 'jm', '1876'],
              ['Japan', ['asia'], 'jp', '81', '.. .... ....'],
              ['Jordan', ['middle-east'], 'jo', '962'],
              [
                'Kazakhstan',
                ['asia', 'ex-ussr'],
                'kz',
                '7',
                '... ...-..-..',
                1,
                [
                  '310',
                  '311',
                  '312',
                  '313',
                  '315',
                  '318',
                  '321',
                  '324',
                  '325',
                  '326',
                  '327',
                  '336',
                  '7172',
                  '73622',
                ],
              ],
              ['Kenya', ['africa'], 'ke', '254'],
              ['Kiribati', ['oceania'], 'ki', '686'],
              ['Kosovo', ['europe', 'ex-yugos'], 'xk', '383'],
              ['Kuwait', ['middle-east'], 'kw', '965'],
              ['Kyrgyzstan', ['asia', 'ex-ussr'], 'kg', '996'],
              ['Laos', ['asia'], 'la', '856'],
              [
                'Latvia',
                ['europe', 'eu-union', 'ex-ussr', 'baltic'],
                'lv',
                '371',
              ],
              ['Lebanon', ['middle-east'], 'lb', '961'],
              ['Lesotho', ['africa'], 'ls', '266'],
              ['Liberia', ['africa'], 'lr', '231'],
              ['Libya', ['africa', 'north-africa'], 'ly', '218'],
              ['Liechtenstein', ['europe'], 'li', '423'],
              [
                'Lithuania',
                ['europe', 'eu-union', 'ex-ussr', 'baltic'],
                'lt',
                '370',
              ],
              ['Luxembourg', ['europe', 'eu-union'], 'lu', '352'],
              ['Macau', ['asia'], 'mo', '853'],
              ['Macedonia', ['europe', 'ex-yugos'], 'mk', '389'],
              ['Madagascar', ['africa'], 'mg', '261'],
              ['Malawi', ['africa'], 'mw', '265'],
              ['Malaysia', ['asia'], 'my', '60', '..-....-....'],
              ['Maldives', ['asia'], 'mv', '960'],
              ['Mali', ['africa'], 'ml', '223'],
              ['Malta', ['europe', 'eu-union'], 'mt', '356'],
              ['Marshall Islands', ['oceania'], 'mh', '692'],
              ['Martinique', ['america', 'carribean'], 'mq', '596'],
              ['Mauritania', ['africa'], 'mr', '222'],
              ['Mauritius', ['africa'], 'mu', '230'],
              [
                'Mexico',
                ['america', 'central-america'],
                'mx',
                '52',
                '... ... ....',
                0,
                ['55', '81', '33', '656', '664', '998', '774', '229'],
              ],
              ['Micronesia', ['oceania'], 'fm', '691'],
              ['Moldova', ['europe'], 'md', '373', '(..) ..-..-..'],
              ['Monaco', ['europe'], 'mc', '377'],
              ['Mongolia', ['asia'], 'mn', '976'],
              ['Montenegro', ['europe', 'ex-yugos'], 'me', '382'],
              ['Morocco', ['africa', 'north-africa'], 'ma', '212'],
              ['Mozambique', ['africa'], 'mz', '258'],
              ['Myanmar', ['asia'], 'mm', '95'],
              ['Namibia', ['africa'], 'na', '264'],
              ['Nauru', ['africa'], 'nr', '674'],
              ['Nepal', ['asia'], 'np', '977'],
              [
                'Netherlands',
                ['europe', 'eu-union'],
                'nl',
                '31',
                '.. ........',
              ],
              ['New Caledonia', ['oceania'], 'nc', '687'],
              ['New Zealand', ['oceania'], 'nz', '64', '...-...-....'],
              ['Nicaragua', ['america', 'central-america'], 'ni', '505'],
              ['Niger', ['africa'], 'ne', '227'],
              ['Nigeria', ['africa'], 'ng', '234'],
              ['North Korea', ['asia'], 'kp', '850'],
              ['Norway', ['europe', 'baltic'], 'no', '47', '... .. ...'],
              ['Oman', ['middle-east'], 'om', '968'],
              ['Pakistan', ['asia'], 'pk', '92', '...-.......'],
              ['Palau', ['oceania'], 'pw', '680'],
              ['Palestine', ['middle-east'], 'ps', '970'],
              ['Panama', ['america', 'central-america'], 'pa', '507'],
              ['Papua New Guinea', ['oceania'], 'pg', '675'],
              ['Paraguay', ['america', 'south-america'], 'py', '595'],
              ['Peru', ['america', 'south-america'], 'pe', '51'],
              ['Philippines', ['asia'], 'ph', '63', '.... .......'],
              [
                'Poland',
                ['europe', 'eu-union', 'baltic'],
                'pl',
                '48',
                '...-...-...',
              ],
              ['Portugal', ['europe', 'eu-union'], 'pt', '351'],
              [
                'Puerto Rico',
                ['america', 'carribean'],
                'pr',
                '1',
                '',
                3,
                ['787', '939'],
              ],
              ['Qatar', ['middle-east'], 'qa', '974'],
              ['R\xe9union', ['africa'], 're', '262'],
              ['Romania', ['europe', 'eu-union'], 'ro', '40'],
              [
                'Russia',
                ['europe', 'asia', 'ex-ussr', 'baltic'],
                'ru',
                '7',
                '(...) ...-..-..',
                0,
              ],
              ['Rwanda', ['africa'], 'rw', '250'],
              ['Saint Kitts and Nevis', ['america', 'carribean'], 'kn', '1869'],
              ['Saint Lucia', ['america', 'carribean'], 'lc', '1758'],
              [
                'Saint Vincent and the Grenadines',
                ['america', 'carribean'],
                'vc',
                '1784',
              ],
              ['Samoa', ['oceania'], 'ws', '685'],
              ['San Marino', ['europe'], 'sm', '378'],
              ['S\xe3o Tom\xe9 and Pr\xedncipe', ['africa'], 'st', '239'],
              ['Saudi Arabia', ['middle-east'], 'sa', '966'],
              ['Senegal', ['africa'], 'sn', '221'],
              ['Serbia', ['europe', 'ex-yugos'], 'rs', '381'],
              ['Seychelles', ['africa'], 'sc', '248'],
              ['Sierra Leone', ['africa'], 'sl', '232'],
              ['Singapore', ['asia'], 'sg', '65', '....-....'],
              ['Slovakia', ['europe', 'eu-union'], 'sk', '421'],
              ['Slovenia', ['europe', 'eu-union', 'ex-yugos'], 'si', '386'],
              ['Solomon Islands', ['oceania'], 'sb', '677'],
              ['Somalia', ['africa'], 'so', '252'],
              ['South Africa', ['africa'], 'za', '27'],
              ['South Korea', ['asia'], 'kr', '82', '... .... ....'],
              ['South Sudan', ['africa', 'north-africa'], 'ss', '211'],
              ['Spain', ['europe', 'eu-union'], 'es', '34', '... ... ...'],
              ['Sri Lanka', ['asia'], 'lk', '94'],
              ['Sudan', ['africa'], 'sd', '249'],
              ['Suriname', ['america', 'south-america'], 'sr', '597'],
              ['Swaziland', ['africa'], 'sz', '268'],
              [
                'Sweden',
                ['europe', 'eu-union', 'baltic'],
                'se',
                '46',
                '(...) ...-...',
              ],
              ['Switzerland', ['europe'], 'ch', '41', '.. ... .. ..'],
              ['Syria', ['middle-east'], 'sy', '963'],
              ['Taiwan', ['asia'], 'tw', '886'],
              ['Tajikistan', ['asia', 'ex-ussr'], 'tj', '992'],
              ['Tanzania', ['africa'], 'tz', '255'],
              ['Thailand', ['asia'], 'th', '66'],
              ['Timor-Leste', ['asia'], 'tl', '670'],
              ['Togo', ['africa'], 'tg', '228'],
              ['Tonga', ['oceania'], 'to', '676'],
              ['Trinidad and Tobago', ['america', 'carribean'], 'tt', '1868'],
              ['Tunisia', ['africa', 'north-africa'], 'tn', '216'],
              ['Turkey', ['europe'], 'tr', '90', '... ... .. ..'],
              ['Turkmenistan', ['asia', 'ex-ussr'], 'tm', '993'],
              ['Tuvalu', ['asia'], 'tv', '688'],
              ['Uganda', ['africa'], 'ug', '256'],
              ['Ukraine', ['europe', 'ex-ussr'], 'ua', '380', '(..) ... .. ..'],
              ['United Arab Emirates', ['middle-east'], 'ae', '971'],
              [
                'United Kingdom',
                ['europe', 'eu-union'],
                'gb',
                '44',
                '.... ......',
              ],
              [
                'United States',
                ['america', 'north-america'],
                'us',
                '1',
                '(...) ...-....',
                0,
                [
                  '907',
                  '205',
                  '251',
                  '256',
                  '334',
                  '479',
                  '501',
                  '870',
                  '480',
                  '520',
                  '602',
                  '623',
                  '928',
                  '209',
                  '213',
                  '310',
                  '323',
                  '408',
                  '415',
                  '510',
                  '530',
                  '559',
                  '562',
                  '619',
                  '626',
                  '650',
                  '661',
                  '707',
                  '714',
                  '760',
                  '805',
                  '818',
                  '831',
                  '858',
                  '909',
                  '916',
                  '925',
                  '949',
                  '951',
                  '303',
                  '719',
                  '970',
                  '203',
                  '860',
                  '202',
                  '302',
                  '239',
                  '305',
                  '321',
                  '352',
                  '386',
                  '407',
                  '561',
                  '727',
                  '772',
                  '813',
                  '850',
                  '863',
                  '904',
                  '941',
                  '954',
                  '229',
                  '404',
                  '478',
                  '706',
                  '770',
                  '912',
                  '808',
                  '319',
                  '515',
                  '563',
                  '641',
                  '712',
                  '208',
                  '217',
                  '309',
                  '312',
                  '618',
                  '630',
                  '708',
                  '773',
                  '815',
                  '847',
                  '219',
                  '260',
                  '317',
                  '574',
                  '765',
                  '812',
                  '316',
                  '620',
                  '785',
                  '913',
                  '270',
                  '502',
                  '606',
                  '859',
                  '225',
                  '318',
                  '337',
                  '504',
                  '985',
                  '413',
                  '508',
                  '617',
                  '781',
                  '978',
                  '301',
                  '410',
                  '207',
                  '231',
                  '248',
                  '269',
                  '313',
                  '517',
                  '586',
                  '616',
                  '734',
                  '810',
                  '906',
                  '989',
                  '218',
                  '320',
                  '507',
                  '612',
                  '651',
                  '763',
                  '952',
                  '314',
                  '417',
                  '573',
                  '636',
                  '660',
                  '816',
                  '228',
                  '601',
                  '662',
                  '406',
                  '252',
                  '336',
                  '704',
                  '828',
                  '910',
                  '919',
                  '701',
                  '308',
                  '402',
                  '603',
                  '201',
                  '609',
                  '732',
                  '856',
                  '908',
                  '973',
                  '505',
                  '575',
                  '702',
                  '775',
                  '212',
                  '315',
                  '516',
                  '518',
                  '585',
                  '607',
                  '631',
                  '716',
                  '718',
                  '845',
                  '914',
                  '216',
                  '330',
                  '419',
                  '440',
                  '513',
                  '614',
                  '740',
                  '937',
                  '405',
                  '580',
                  '918',
                  '503',
                  '541',
                  '215',
                  '412',
                  '570',
                  '610',
                  '717',
                  '724',
                  '814',
                  '401',
                  '803',
                  '843',
                  '864',
                  '605',
                  '423',
                  '615',
                  '731',
                  '865',
                  '901',
                  '931',
                  '210',
                  '214',
                  '254',
                  '281',
                  '325',
                  '361',
                  '409',
                  '432',
                  '512',
                  '713',
                  '806',
                  '817',
                  '830',
                  '903',
                  '915',
                  '936',
                  '940',
                  '956',
                  '972',
                  '979',
                  '435',
                  '801',
                  '276',
                  '434',
                  '540',
                  '703',
                  '757',
                  '804',
                  '802',
                  '206',
                  '253',
                  '360',
                  '425',
                  '509',
                  '262',
                  '414',
                  '608',
                  '715',
                  '920',
                  '304',
                  '307',
                ],
              ],
              ['Uruguay', ['america', 'south-america'], 'uy', '598'],
              ['Uzbekistan', ['asia', 'ex-ussr'], 'uz', '998'],
              ['Vanuatu', ['oceania'], 'vu', '678'],
              ['Vatican City', ['europe'], 'va', '39', '.. .... ....', 1],
              ['Venezuela', ['america', 'south-america'], 've', '58'],
              ['Vietnam', ['asia'], 'vn', '84'],
              ['Yemen', ['middle-east'], 'ye', '967'],
              ['Zambia', ['africa'], 'zm', '260'],
              ['Zimbabwe', ['africa'], 'zw', '263'],
            ],
            E = [
              ['American Samoa', ['oceania'], 'as', '1684'],
              ['Anguilla', ['america', 'carribean'], 'ai', '1264'],
              ['Bermuda', ['america', 'north-america'], 'bm', '1441'],
              [
                'British Virgin Islands',
                ['america', 'carribean'],
                'vg',
                '1284',
              ],
              ['Cayman Islands', ['america', 'carribean'], 'ky', '1345'],
              ['Cook Islands', ['oceania'], 'ck', '682'],
              ['Falkland Islands', ['america', 'south-america'], 'fk', '500'],
              ['Faroe Islands', ['europe'], 'fo', '298'],
              ['Gibraltar', ['europe'], 'gi', '350'],
              ['Greenland', ['america'], 'gl', '299'],
              ['Jersey', ['europe', 'eu-union'], 'je', '44', '.... ......'],
              ['Montserrat', ['america', 'carribean'], 'ms', '1664'],
              ['Niue', ['asia'], 'nu', '683'],
              ['Norfolk Island', ['oceania'], 'nf', '672'],
              ['Northern Mariana Islands', ['oceania'], 'mp', '1670'],
              [
                'Saint Barth\xe9lemy',
                ['america', 'carribean'],
                'bl',
                '590',
                '',
                1,
              ],
              ['Saint Helena', ['africa'], 'sh', '290'],
              ['Saint Martin', ['america', 'carribean'], 'mf', '590', '', 2],
              [
                'Saint Pierre and Miquelon',
                ['america', 'north-america'],
                'pm',
                '508',
              ],
              ['Sint Maarten', ['america', 'carribean'], 'sx', '1721'],
              ['Tokelau', ['oceania'], 'tk', '690'],
              [
                'Turks and Caicos Islands',
                ['america', 'carribean'],
                'tc',
                '1649',
              ],
              ['U.S. Virgin Islands', ['america', 'carribean'], 'vi', '1340'],
              ['Wallis and Futuna', ['oceania'], 'wf', '681'],
            ];
          function T(e, t, n, r, a) {
            return !n || a
              ? e + ''.padEnd(t.length, '.') + ' ' + r
              : e + ''.padEnd(t.length, '.') + ' ' + n;
          }
          function I(e, t, n, a, i) {
            var u,
              c,
              s = [];
            return (
              (c = !0 === t),
              [
                (u = []).concat.apply(
                  u,
                  o(
                    e.map(function (e) {
                      var o = {
                          name: e[0],
                          regions: e[1],
                          iso2: e[2],
                          countryCode: e[3],
                          dialCode: e[3],
                          format: T(n, e[3], e[4], a, i),
                          priority: e[5] || 0,
                        },
                        u = [];
                      return (
                        e[6] &&
                          e[6].map(function (t) {
                            var n = (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                var n =
                                    null != arguments[t] ? arguments[t] : {},
                                  a = Object.keys(n);
                                'function' ==
                                  typeof Object.getOwnPropertySymbols &&
                                  (a = a.concat(
                                    Object.getOwnPropertySymbols(n).filter(
                                      function (e) {
                                        return Object.getOwnPropertyDescriptor(
                                          n,
                                          e
                                        ).enumerable;
                                      }
                                    )
                                  )),
                                  a.forEach(function (t) {
                                    r(e, t, n[t]);
                                  });
                              }
                              return e;
                            })({}, o);
                            (n.dialCode = e[3] + t),
                              (n.isAreaCode = !0),
                              (n.areaCodeLength = t.length),
                              u.push(n);
                          }),
                        u.length > 0
                          ? ((o.mainCode = !0),
                            c ||
                            ('Array' === t.constructor.name && t.includes(e[2]))
                              ? ((o.hasAreaCodes = !0), [o].concat(u))
                              : ((s = s.concat(u)), [o]))
                          : [o]
                      );
                    })
                  )
                ),
                s,
              ]
            );
          }
          function P(e, t, n, r) {
            if (null !== n) {
              var a = Object.keys(n),
                o = Object.values(n);
              a.forEach(function (n, a) {
                if (r) return e.push([n, o[a]]);
                var i = e.findIndex(function (e) {
                  return e[0] === n;
                });
                if (-1 === i) {
                  var u = [n];
                  (u[t] = o[a]), e.push(u);
                } else e[i][t] = o[a];
              });
            }
          }
          function A(e, t) {
            return 0 === t.length
              ? e
              : e.map(function (e) {
                  var n = t.findIndex(function (t) {
                    return t[0] === e[2];
                  });
                  if (-1 === n) return e;
                  var r = t[n];
                  return (
                    r[1] && (e[4] = r[1]),
                    r[3] && (e[5] = r[3]),
                    r[2] && (e[6] = r[2]),
                    e
                  );
                });
          }
          var F = function e(t, n, r, a, i, u, s, l, f, d, p, h, m, g) {
              c(this, e),
                (this.filterRegions = function (e, t) {
                  if ('string' == typeof e) {
                    var n = e;
                    return t.filter(function (e) {
                      return e.regions.some(function (e) {
                        return e === n;
                      });
                    });
                  }
                  return t.filter(function (t) {
                    return e
                      .map(function (e) {
                        return t.regions.some(function (t) {
                          return t === e;
                        });
                      })
                      .some(function (e) {
                        return e;
                      });
                  });
                }),
                (this.sortTerritories = function (e, t) {
                  var n = [].concat(o(e), o(t));
                  return (
                    n.sort(function (e, t) {
                      return e.name < t.name ? -1 : e.name > t.name ? 1 : 0;
                    }),
                    n
                  );
                }),
                (this.getFilteredCountryList = function (e, t, n) {
                  return 0 === e.length
                    ? t
                    : n
                    ? e
                        .map(function (e) {
                          var n = t.find(function (t) {
                            return t.iso2 === e;
                          });
                          if (n) return n;
                        })
                        .filter(function (e) {
                          return e;
                        })
                    : t.filter(function (t) {
                        return e.some(function (e) {
                          return e === t.iso2;
                        });
                      });
                }),
                (this.localizeCountries = function (e, t, n) {
                  for (var r = 0; r < e.length; r++)
                    void 0 !== t[e[r].iso2]
                      ? (e[r].localName = t[e[r].iso2])
                      : void 0 !== t[e[r].name] &&
                        (e[r].localName = t[e[r].name]);
                  return (
                    n ||
                      e.sort(function (e, t) {
                        return e.localName < t.localName
                          ? -1
                          : e.localName > t.localName
                          ? 1
                          : 0;
                      }),
                    e
                  );
                }),
                (this.getCustomAreas = function (e, t) {
                  for (var n = [], r = 0; r < t.length; r++) {
                    var a = JSON.parse(JSON.stringify(e));
                    (a.dialCode += t[r]), n.push(a);
                  }
                  return n;
                }),
                (this.excludeCountries = function (e, t) {
                  return 0 === t.length
                    ? e
                    : e.filter(function (e) {
                        return !t.includes(e.iso2);
                      });
                });
              var y = (function (e, t, n) {
                  var r = [];
                  return P(r, 1, e, !0), P(r, 3, t), P(r, 2, n), r;
                })(l, f, d),
                b = A(JSON.parse(JSON.stringify(N)), y),
                v = A(JSON.parse(JSON.stringify(E)), y),
                C = k(I(b, t, h, m, g), 2),
                w = C[0],
                _ = C[1];
              if (n) {
                var x = k(I(v, t, h, m, g), 2),
                  S = x[0];
                x[1], (w = this.sortTerritories(S, w));
              }
              r && (w = this.filterRegions(r, w)),
                (this.onlyCountries = this.localizeCountries(
                  this.excludeCountries(
                    this.getFilteredCountryList(
                      a,
                      w,
                      s.includes('onlyCountries')
                    ),
                    u
                  ),
                  p,
                  s.includes('onlyCountries')
                )),
                (this.preferredCountries =
                  0 === i.length
                    ? []
                    : this.localizeCountries(
                        this.getFilteredCountryList(
                          i,
                          w,
                          s.includes('preferredCountries')
                        ),
                        p,
                        s.includes('preferredCountries')
                      )),
                (this.hiddenAreaCodes = this.excludeCountries(
                  this.getFilteredCountryList(a, _),
                  u
                ));
            },
            M = (function (e) {
              function t(e) {
                var n;
                c(this, t),
                  ((n = (function (e, t) {
                    return !t || ('object' !== f(t) && 'function' != typeof t)
                      ? d(e)
                      : t;
                  })(this, p(t).call(this, e))).getProbableCandidate = C()(
                    function (e) {
                      return e && 0 !== e.length
                        ? n.state.onlyCountries.filter(function (t) {
                            return S()(t.name.toLowerCase(), e.toLowerCase());
                          }, d(d(n)))[0]
                        : null;
                    }
                  )),
                  (n.guessSelectedCountry = C()(function (e, t, r, a) {
                    var o;
                    if (
                      !1 === n.props.enableAreaCodes &&
                      (a.some(function (t) {
                        if (S()(e, t.dialCode))
                          return (
                            r.some(function (e) {
                              if (t.iso2 === e.iso2 && e.mainCode)
                                return (o = e), !0;
                            }),
                            !0
                          );
                      }),
                      o)
                    )
                      return o;
                    var i = r.find(function (e) {
                      return e.iso2 == t;
                    });
                    if ('' === e.trim()) return i;
                    var u = r.reduce(
                      function (t, n) {
                        if (S()(e, n.dialCode)) {
                          if (n.dialCode.length > t.dialCode.length) return n;
                          if (
                            n.dialCode.length === t.dialCode.length &&
                            n.priority < t.priority
                          )
                            return n;
                        }
                        return t;
                      },
                      { dialCode: '', priority: 10001 },
                      d(d(n))
                    );
                    return u.name ? u : i;
                  })),
                  (n.updateCountry = function (e) {
                    var t,
                      r = n.state.onlyCountries;
                    (t =
                      e.indexOf(0) >= '0' && e.indexOf(0) <= '9'
                        ? r.find(function (t) {
                            return t.dialCode == +e;
                          })
                        : r.find(function (t) {
                            return t.iso2 == e;
                          })) &&
                      t.dialCode &&
                      n.setState({
                        selectedCountry: t,
                        formattedNumber: n.props.disableCountryCode
                          ? ''
                          : n.formatNumber(t.dialCode, t),
                      });
                  }),
                  (n.scrollTo = function (e, t) {
                    if (e) {
                      var r = n.dropdownRef;
                      if (r && document.body) {
                        var a = r.offsetHeight,
                          o =
                            r.getBoundingClientRect().top +
                            document.body.scrollTop,
                          i = o + a,
                          u = e,
                          c = u.getBoundingClientRect(),
                          s = u.offsetHeight,
                          l = c.top + document.body.scrollTop,
                          f = l + s,
                          d = l - o + r.scrollTop,
                          p = a / 2 - s / 2;
                        if (n.props.enableSearch ? l < o + 32 : l < o)
                          t && (d -= p), (r.scrollTop = d);
                        else if (f > i) {
                          t && (d += p);
                          var h = a - s;
                          r.scrollTop = d - h;
                        }
                      }
                    }
                  }),
                  (n.scrollToTop = function () {
                    var e = n.dropdownRef;
                    e && document.body && (e.scrollTop = 0);
                  }),
                  (n.formatNumber = function (e, t) {
                    if (!t) return e;
                    var r,
                      o = t.format,
                      c = n.props,
                      s = c.disableCountryCode,
                      l = c.enableAreaCodeStretch,
                      f = c.enableLongNumbers,
                      d = c.autoFormat;
                    if (
                      (s
                        ? ((r = o.split(' ')).shift(), (r = r.join(' ')))
                        : l && t.isAreaCode
                        ? (((r = o.split(' '))[1] = r[1].replace(
                            /\.+/,
                            ''.padEnd(t.areaCodeLength, '.')
                          )),
                          (r = r.join(' ')))
                        : (r = o),
                      !e || 0 === e.length)
                    )
                      return s ? '' : n.props.prefix;
                    if ((e && e.length < 2) || !r || !d)
                      return s ? e : n.props.prefix + e;
                    var p,
                      h = _()(
                        r,
                        function (e, t) {
                          if (0 === e.remainingText.length) return e;
                          if ('.' !== t)
                            return {
                              formattedText: e.formattedText + t,
                              remainingText: e.remainingText,
                            };
                          var n,
                            r = i((n = e.remainingText)) || a(n) || u(),
                            o = r[0],
                            c = r.slice(1);
                          return {
                            formattedText: e.formattedText + o,
                            remainingText: c,
                          };
                        },
                        { formattedText: '', remainingText: e.split('') }
                      );
                    return (
                      (p = f
                        ? h.formattedText + h.remainingText.join('')
                        : h.formattedText).includes('(') &&
                        !p.includes(')') &&
                        (p += ')'),
                      p
                    );
                  }),
                  (n.cursorToEnd = function () {
                    var e = n.numberInputRef;
                    e.focus();
                    var t = e.value.length;
                    ')' === e.value.charAt(t - 1) && (t -= 1),
                      e.setSelectionRange(t, t);
                  }),
                  (n.getElement = function (e) {
                    return n['flag_no_'.concat(e)];
                  }),
                  (n.getCountryData = function () {
                    return n.state.selectedCountry
                      ? {
                          name: n.state.selectedCountry.name || '',
                          dialCode: n.state.selectedCountry.dialCode || '',
                          countryCode: n.state.selectedCountry.iso2 || '',
                          format: n.state.selectedCountry.format || '',
                        }
                      : {};
                  }),
                  (n.handleFlagDropdownClick = function (e) {
                    if (
                      (e.preventDefault(),
                      n.state.showDropdown || !n.props.disabled)
                    ) {
                      var t = n.state,
                        r = t.preferredCountries,
                        a = t.selectedCountry,
                        o = r
                          .concat(n.state.onlyCountries)
                          .findIndex(function (e) {
                            return (
                              e.dialCode === a.dialCode && e.iso2 === a.iso2
                            );
                          });
                      n.setState(
                        {
                          showDropdown: !n.state.showDropdown,
                          highlightCountryIndex: o,
                        },
                        function () {
                          n.state.showDropdown &&
                            n.scrollTo(
                              n.getElement(n.state.highlightCountryIndex)
                            );
                        }
                      );
                    }
                  }),
                  (n.handleInput = function (e) {
                    var t = e.target.value,
                      r = n.props,
                      a = r.prefix,
                      o = r.onChange,
                      i = n.props.disableCountryCode ? '' : a,
                      u = n.state.selectedCountry,
                      c = n.state.freezeSelection;
                    if (!n.props.countryCodeEditable) {
                      var s =
                        a +
                        (u.hasAreaCodes
                          ? n.state.onlyCountries.find(function (e) {
                              return e.iso2 === u.iso2 && e.mainCode;
                            }).dialCode
                          : u.dialCode);
                      if (t.slice(0, s.length) !== s) return;
                    }
                    if (t === a)
                      return (
                        o && o('', n.getCountryData(), e, ''),
                        n.setState({ formattedNumber: '' })
                      );
                    if (t.replace(/\D/g, '').length > 15) {
                      if (!1 === n.props.enableLongNumbers) return;
                      if (
                        'number' == typeof n.props.enableLongNumbers &&
                        t.replace(/\D/g, '').length > n.props.enableLongNumbers
                      )
                        return;
                    }
                    if (t !== n.state.formattedNumber) {
                      e.preventDefault
                        ? e.preventDefault()
                        : (e.returnValue = !1);
                      var l = n.props.country,
                        f = n.state,
                        d = f.onlyCountries,
                        p = f.selectedCountry,
                        h = f.hiddenAreaCodes;
                      if ((o && e.persist(), t.length > 0)) {
                        var m = t.replace(/\D/g, '');
                        (!n.state.freezeSelection ||
                          p.dialCode.length > m.length) &&
                          ((u = n.props.disableCountryGuess
                            ? p
                            : n.guessSelectedCountry(
                                m.substring(0, 6),
                                l,
                                d,
                                h
                              ) || p),
                          (c = !1)),
                          (i = n.formatNumber(m, u)),
                          (u = u.dialCode ? u : p);
                      }
                      var g = e.target.selectionStart,
                        y = n.state.formattedNumber,
                        b = i.length - y.length;
                      n.setState(
                        {
                          formattedNumber: i,
                          freezeSelection: c,
                          selectedCountry: u,
                        },
                        function () {
                          b > 0 && (g -= b),
                            ')' == i.charAt(i.length - 1)
                              ? n.numberInputRef.setSelectionRange(
                                  i.length - 1,
                                  i.length - 1
                                )
                              : g > 0 &&
                                y.length >= i.length &&
                                n.numberInputRef.setSelectionRange(g, g),
                            o &&
                              o(
                                i.replace(/[^0-9]+/g, ''),
                                n.getCountryData(),
                                e,
                                i
                              );
                        }
                      );
                    }
                  }),
                  (n.handleInputClick = function (e) {
                    n.setState({ showDropdown: !1 }),
                      n.props.onClick && n.props.onClick(e, n.getCountryData());
                  }),
                  (n.handleDoubleClick = function (e) {
                    var t = e.target.value.length;
                    e.target.setSelectionRange(0, t);
                  }),
                  (n.handleFlagItemClick = function (e, t) {
                    var r = n.state.selectedCountry,
                      a = n.state.onlyCountries.find(function (t) {
                        return t == e;
                      });
                    if (a) {
                      var o = n.state.formattedNumber
                          .replace(' ', '')
                          .replace('(', '')
                          .replace(')', '')
                          .replace('-', ''),
                        i =
                          o.length > 1
                            ? o.replace(r.dialCode, a.dialCode)
                            : a.dialCode,
                        u = n.formatNumber(i.replace(/\D/g, ''), a);
                      n.setState(
                        {
                          showDropdown: !1,
                          selectedCountry: a,
                          freezeSelection: !0,
                          formattedNumber: u,
                        },
                        function () {
                          n.cursorToEnd(),
                            n.props.onChange &&
                              n.props.onChange(
                                u.replace(/[^0-9]+/g, ''),
                                n.getCountryData(),
                                t,
                                u
                              );
                        }
                      );
                    }
                  }),
                  (n.handleInputFocus = function (e) {
                    n.numberInputRef &&
                      n.numberInputRef.value === n.props.prefix &&
                      n.state.selectedCountry &&
                      !n.props.disableCountryCode &&
                      n.setState(
                        {
                          formattedNumber:
                            n.props.prefix + n.state.selectedCountry.dialCode,
                        },
                        function () {
                          n.props.jumpCursorToEnd &&
                            setTimeout(n.cursorToEnd, 0);
                        }
                      ),
                      n.setState({ placeholder: '' }),
                      n.props.onFocus && n.props.onFocus(e, n.getCountryData()),
                      n.props.jumpCursorToEnd && setTimeout(n.cursorToEnd, 0);
                  }),
                  (n.handleInputBlur = function (e) {
                    e.target.value ||
                      n.setState({ placeholder: n.props.placeholder }),
                      n.props.onBlur && n.props.onBlur(e, n.getCountryData());
                  }),
                  (n.handleInputCopy = function (e) {
                    if (n.props.copyNumbersOnly) {
                      var t = window
                        .getSelection()
                        .toString()
                        .replace(/[^0-9]+/g, '');
                      e.clipboardData.setData('text/plain', t),
                        e.preventDefault();
                    }
                  }),
                  (n.getHighlightCountryIndex = function (e) {
                    var t = n.state.highlightCountryIndex + e;
                    return t < 0 ||
                      t >=
                        n.state.onlyCountries.length +
                          n.state.preferredCountries.length
                      ? t - e
                      : n.props.enableSearch &&
                        t > n.getSearchFilteredCountries().length
                      ? 0
                      : t;
                  }),
                  (n.searchCountry = function () {
                    var e =
                        n.getProbableCandidate(n.state.queryString) ||
                        n.state.onlyCountries[0],
                      t =
                        n.state.onlyCountries.findIndex(function (t) {
                          return t == e;
                        }) + n.state.preferredCountries.length;
                    n.scrollTo(n.getElement(t), !0),
                      n.setState({ queryString: '', highlightCountryIndex: t });
                  }),
                  (n.handleKeydown = function (e) {
                    var t = n.props.keys,
                      r = e.target.className;
                    if (
                      r.includes('selected-flag') &&
                      e.which === t.ENTER &&
                      !n.state.showDropdown
                    )
                      return n.handleFlagDropdownClick(e);
                    if (
                      r.includes('form-control') &&
                      (e.which === t.ENTER || e.which === t.ESC)
                    )
                      return e.target.blur();
                    if (
                      n.state.showDropdown &&
                      !n.props.disabled &&
                      (!r.includes('search-box') ||
                        e.which === t.UP ||
                        e.which === t.DOWN ||
                        e.which === t.ENTER ||
                        (e.which === t.ESC && '' === e.target.value))
                    ) {
                      e.preventDefault
                        ? e.preventDefault()
                        : (e.returnValue = !1);
                      var a = function (e) {
                        n.setState(
                          {
                            highlightCountryIndex: n.getHighlightCountryIndex(
                              e
                            ),
                          },
                          function () {
                            n.scrollTo(
                              n.getElement(n.state.highlightCountryIndex),
                              !0
                            );
                          }
                        );
                      };
                      switch (e.which) {
                        case t.DOWN:
                          a(1);
                          break;
                        case t.UP:
                          a(-1);
                          break;
                        case t.ENTER:
                          n.props.enableSearch
                            ? n.handleFlagItemClick(
                                n.getSearchFilteredCountries()[
                                  n.state.highlightCountryIndex
                                ] || n.getSearchFilteredCountries()[0],
                                e
                              )
                            : n.handleFlagItemClick(
                                [].concat(
                                  o(n.state.preferredCountries),
                                  o(n.state.onlyCountries)
                                )[n.state.highlightCountryIndex],
                                e
                              );
                          break;
                        case t.ESC:
                        case t.TAB:
                          n.setState({ showDropdown: !1 }, n.cursorToEnd);
                          break;
                        default:
                          ((e.which >= t.A && e.which <= t.Z) ||
                            e.which === t.SPACE) &&
                            n.setState(
                              {
                                queryString:
                                  n.state.queryString +
                                  String.fromCharCode(e.which),
                              },
                              n.state.debouncedQueryStingSearcher
                            );
                      }
                    }
                  }),
                  (n.handleInputKeyDown = function (e) {
                    var t = n.props,
                      r = t.keys,
                      a = t.onEnterKeyPress,
                      o = t.onKeyDown;
                    e.which === r.ENTER && a && a(e), o && o(e);
                  }),
                  (n.handleClickOutside = function (e) {
                    n.dropdownRef &&
                      !n.dropdownContainerRef.contains(e.target) &&
                      n.state.showDropdown &&
                      n.setState({ showDropdown: !1 });
                  }),
                  (n.handleSearchChange = function (e) {
                    var t = e.currentTarget.value,
                      r = n.state,
                      a = r.preferredCountries,
                      o = r.selectedCountry,
                      i = 0;
                    if ('' === t && o) {
                      var u = n.state.onlyCountries;
                      (i = a.concat(u).findIndex(function (e) {
                        return e == o;
                      })),
                        setTimeout(function () {
                          return n.scrollTo(n.getElement(i));
                        }, 100);
                    }
                    n.setState({ searchValue: t, highlightCountryIndex: i });
                  }),
                  (n.getDropdownCountryName = function (e) {
                    return e.localName || e.name;
                  }),
                  (n.getSearchFilteredCountries = function () {
                    var e = n.state,
                      t = e.preferredCountries,
                      r = e.onlyCountries,
                      a = e.searchValue,
                      i = n.props.enableSearch,
                      u = t.concat(r),
                      c = a.trim().toLowerCase();
                    if (i && c) {
                      if (/^\d+$/.test(c))
                        return u.filter(function (e) {
                          var t = e.dialCode;
                          return [''.concat(t)].some(function (e) {
                            return e.toLowerCase().includes(c);
                          });
                        });
                      var s = u.filter(function (e) {
                          var t = e.iso2;
                          return [''.concat(t)].some(function (e) {
                            return e.toLowerCase().includes(c);
                          });
                        }),
                        l = u.filter(function (e) {
                          var t = e.name,
                            n = e.localName;
                          return (
                            e.iso2,
                            [''.concat(t), ''.concat(n || '')].some(function (
                              e
                            ) {
                              return e.toLowerCase().includes(c);
                            })
                          );
                        });
                      return n.scrollToTop(), o(new Set([].concat(s, l)));
                    }
                    return u;
                  }),
                  (n.getCountryDropdownList = function () {
                    var e,
                      t = n.state,
                      a = t.preferredCountries,
                      o = t.highlightCountryIndex,
                      i = t.showDropdown,
                      u = t.searchValue,
                      c = n.props,
                      s = c.disableDropdown,
                      l = c.prefix,
                      f = n.props,
                      d = f.enableSearch,
                      p = f.searchNotFound,
                      h = f.disableSearchIcon,
                      m = f.searchClass,
                      y = f.searchStyle,
                      b = f.searchPlaceholder,
                      v = f.autocompleteSearch,
                      C = n.getSearchFilteredCountries().map(function (e, t) {
                        var r = o === t,
                          a = O()({
                            country: !0,
                            preferred: 'us' === e.iso2 || 'gb' === e.iso2,
                            active: 'us' === e.iso2,
                            highlight: r,
                          }),
                          i = 'flag '.concat(e.iso2);
                        return g.a.createElement(
                          'li',
                          Object.assign(
                            {
                              ref: function (e) {
                                return (n['flag_no_'.concat(t)] = e);
                              },
                              key: 'flag_no_'.concat(t),
                              'data-flag-key': 'flag_no_'.concat(t),
                              className: a,
                              'data-dial-code': '1',
                              tabIndex: s ? '-1' : '0',
                              'data-country-code': e.iso2,
                              onClick: function (t) {
                                return n.handleFlagItemClick(e, t);
                              },
                              role: 'option',
                            },
                            r ? { 'aria-selected': !0 } : {}
                          ),
                          g.a.createElement('div', { className: i }),
                          g.a.createElement(
                            'span',
                            { className: 'country-name' },
                            n.getDropdownCountryName(e)
                          ),
                          g.a.createElement(
                            'span',
                            { className: 'dial-code' },
                            e.format
                              ? n.formatNumber(e.dialCode, e)
                              : l + e.dialCode
                          )
                        );
                      }),
                      w = g.a.createElement('li', {
                        key: 'dashes',
                        className: 'divider',
                      });
                    a.length > 0 &&
                      (!d || (d && !u.trim())) &&
                      C.splice(a.length, 0, w);
                    var _ = O()(
                      (r((e = {}), n.props.dropdownClass, !0),
                      r(e, 'country-list', !0),
                      r(e, 'hide', !i),
                      e)
                    );
                    return g.a.createElement(
                      'ul',
                      {
                        ref: function (e) {
                          return !d && e && e.focus(), (n.dropdownRef = e);
                        },
                        className: _,
                        style: n.props.dropdownStyle,
                        role: 'listbox',
                        tabIndex: '0',
                      },
                      d &&
                        g.a.createElement(
                          'li',
                          { className: O()(r({ search: !0 }, m, m)) },
                          !h &&
                            g.a.createElement(
                              'span',
                              {
                                className: O()(
                                  r(
                                    { 'search-emoji': !0 },
                                    ''.concat(m, '-emoji'),
                                    m
                                  )
                                ),
                                role: 'img',
                                'aria-label': 'Magnifying glass',
                              },
                              '\ud83d\udd0e'
                            ),
                          g.a.createElement('input', {
                            className: O()(
                              r({ 'search-box': !0 }, ''.concat(m, '-box'), m)
                            ),
                            style: y,
                            type: 'search',
                            placeholder: b,
                            autoFocus: !0,
                            autoComplete: v ? 'on' : 'off',
                            value: u,
                            onChange: n.handleSearchChange,
                          })
                        ),
                      C.length > 0
                        ? C
                        : g.a.createElement(
                            'li',
                            { className: 'no-entries-message' },
                            g.a.createElement('span', null, p)
                          )
                    );
                  });
                var s,
                  l = new F(
                    e.enableAreaCodes,
                    e.enableTerritories,
                    e.regions,
                    e.onlyCountries,
                    e.preferredCountries,
                    e.excludeCountries,
                    e.preserveOrder,
                    e.masks,
                    e.priority,
                    e.areaCodes,
                    e.localization,
                    e.prefix,
                    e.defaultMask,
                    e.alwaysDefaultMask
                  ),
                  h = l.onlyCountries,
                  m = l.preferredCountries,
                  y = l.hiddenAreaCodes,
                  v = e.value ? e.value.replace(/\D/g, '') : '';
                s = e.disableInitialCountryGuess
                  ? 0
                  : v.length > 1
                  ? n.guessSelectedCountry(
                      v.substring(0, 6),
                      e.country,
                      h,
                      y
                    ) || 0
                  : (e.country &&
                      h.find(function (t) {
                        return t.iso2 == e.country;
                      })) ||
                    0;
                var w,
                  x =
                    v.length < 2 && s && !S()(v, s.dialCode) ? s.dialCode : '';
                w =
                  '' === v && 0 === s
                    ? ''
                    : n.formatNumber(
                        (e.disableCountryCode ? '' : x) + v,
                        s.name ? s : void 0
                      );
                var j = h.findIndex(function (e) {
                  return e == s;
                });
                return (
                  (n.state = {
                    showDropdown: e.showDropdown,
                    formattedNumber: w,
                    onlyCountries: h,
                    preferredCountries: m,
                    hiddenAreaCodes: y,
                    selectedCountry: s,
                    highlightCountryIndex: j,
                    queryString: '',
                    freezeSelection: !1,
                    debouncedQueryStingSearcher: b()(n.searchCountry, 250),
                    searchValue: '',
                  }),
                  n
                );
              }
              var n, l;
              return (
                (function (e, t) {
                  if ('function' != typeof t && null !== t)
                    throw new TypeError(
                      'Super expression must either be null or a function'
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    t && h(e, t);
                })(t, e),
                (n = t),
                (l = [
                  {
                    key: 'componentDidMount',
                    value: function () {
                      document.addEventListener &&
                        this.props.enableClickOutside &&
                        document.addEventListener(
                          'mousedown',
                          this.handleClickOutside
                        );
                    },
                  },
                  {
                    key: 'componentWillUnmount',
                    value: function () {
                      document.removeEventListener &&
                        this.props.enableClickOutside &&
                        document.removeEventListener(
                          'mousedown',
                          this.handleClickOutside
                        );
                    },
                  },
                  {
                    key: 'componentDidUpdate',
                    value: function (e, t, n) {
                      e.country !== this.props.country
                        ? this.updateCountry(this.props.country)
                        : e.value !== this.props.value &&
                          this.updateFormattedNumber(this.props.value);
                    },
                  },
                  {
                    key: 'updateFormattedNumber',
                    value: function (e) {
                      if (null === e)
                        return this.setState({
                          selectedCountry: 0,
                          formattedNumber: '',
                        });
                      var t = this.state,
                        n = t.onlyCountries,
                        r = t.selectedCountry,
                        a = t.hiddenAreaCodes,
                        o = this.props,
                        i = o.country,
                        u = o.prefix;
                      if ('' === e)
                        return this.setState({
                          selectedCountry: r,
                          formattedNumber: '',
                        });
                      var c,
                        s,
                        l = e.replace(/\D/g, '');
                      if (r && S()(e, u + r.dialCode))
                        (s = this.formatNumber(l, r)),
                          this.setState({ formattedNumber: s });
                      else {
                        var f =
                          (c = this.props.disableCountryGuess
                            ? r
                            : this.guessSelectedCountry(
                                l.substring(0, 6),
                                i,
                                n,
                                a
                              ) || r) && S()(l, u + c.dialCode)
                            ? c.dialCode
                            : '';
                        (s = this.formatNumber(
                          (this.props.disableCountryCode ? '' : f) + l,
                          c || void 0
                        )),
                          this.setState({
                            selectedCountry: c,
                            formattedNumber: s,
                          });
                      }
                    },
                  },
                  {
                    key: 'render',
                    value: function () {
                      var e,
                        t,
                        n,
                        a,
                        o,
                        i = this,
                        u = this.state,
                        c = u.onlyCountries,
                        s = u.selectedCountry,
                        l = u.showDropdown,
                        f = u.formattedNumber,
                        d = u.hiddenAreaCodes,
                        p = this.props,
                        h = p.disableDropdown,
                        m = p.renderStringAsFlag,
                        y = p.isValid,
                        b = p.defaultErrorMessage,
                        v = p.specialLabel;
                      if ('boolean' == typeof y) a = y;
                      else {
                        var C = y(f.replace(/\D/g, ''), s, c, d);
                        'boolean' == typeof C
                          ? !1 === (a = C) && (o = b)
                          : ((a = !1), (o = C));
                      }
                      var w = O()(
                          (r((e = {}), this.props.containerClass, !0),
                          r(e, 'react-tel-input', !0),
                          e)
                        ),
                        _ = O()({ arrow: !0, up: l }),
                        x = O()(
                          (r((t = {}), this.props.inputClass, !0),
                          r(t, 'form-control', !0),
                          r(t, 'invalid-number', !a),
                          r(t, 'open', l),
                          t)
                        ),
                        S = O()({ 'selected-flag': !0, open: l }),
                        j = O()(
                          (r((n = {}), this.props.buttonClass, !0),
                          r(n, 'flag-dropdown', !0),
                          r(n, 'invalid-number', !a),
                          r(n, 'open', l),
                          n)
                        ),
                        k = 'flag '.concat(s && s.iso2);
                      return g.a.createElement(
                        'div',
                        {
                          className: w,
                          style: this.props.style || this.props.containerStyle,
                          onKeyDown: this.handleKeydown,
                        },
                        v &&
                          g.a.createElement(
                            'div',
                            { className: 'special-label' },
                            v
                          ),
                        o &&
                          g.a.createElement(
                            'div',
                            { className: 'invalid-number-message' },
                            o
                          ),
                        g.a.createElement(
                          'input',
                          Object.assign(
                            {
                              className: x,
                              style: this.props.inputStyle,
                              onChange: this.handleInput,
                              onClick: this.handleInputClick,
                              onDoubleClick: this.handleDoubleClick,
                              onFocus: this.handleInputFocus,
                              onBlur: this.handleInputBlur,
                              onCopy: this.handleInputCopy,
                              value: f,
                              ref: function (e) {
                                return (i.numberInputRef = e);
                              },
                              onKeyDown: this.handleInputKeyDown,
                              placeholder: this.props.placeholder,
                              disabled: this.props.disabled,
                              type: 'tel',
                            },
                            this.props.inputProps
                          )
                        ),
                        g.a.createElement(
                          'div',
                          {
                            className: j,
                            style: this.props.buttonStyle,
                            ref: function (e) {
                              return (i.dropdownContainerRef = e);
                            },
                          },
                          m
                            ? g.a.createElement('div', { className: S }, m)
                            : g.a.createElement(
                                'div',
                                {
                                  onClick: h
                                    ? void 0
                                    : this.handleFlagDropdownClick,
                                  className: S,
                                  title: s
                                    ? ''
                                        .concat(s.name, ': + ')
                                        .concat(s.dialCode)
                                    : '',
                                  tabIndex: h ? '-1' : '0',
                                  role: 'button',
                                  'aria-haspopup': 'listbox',
                                  'aria-expanded': !!l || void 0,
                                },
                                g.a.createElement(
                                  'div',
                                  { className: k },
                                  !h &&
                                    g.a.createElement('div', { className: _ })
                                )
                              ),
                          l && this.getCountryDropdownList()
                        )
                      );
                    },
                  },
                ]) && s(n.prototype, l),
                t
              );
            })(g.a.Component);
          (M.defaultProps = {
            country: '',
            value: '',
            onlyCountries: [],
            preferredCountries: [],
            excludeCountries: [],
            placeholder: '1 (702) 123-4567',
            searchPlaceholder: 'search',
            searchNotFound: 'No entries to show',
            flagsImagePath: './flags.png',
            disabled: !1,
            containerStyle: {},
            inputStyle: {},
            buttonStyle: {},
            dropdownStyle: {},
            searchStyle: {},
            containerClass: '',
            inputClass: '',
            buttonClass: '',
            dropdownClass: '',
            searchClass: '',
            autoFormat: !0,
            enableAreaCodes: !1,
            enableTerritories: !1,
            disableCountryCode: !1,
            disableDropdown: !1,
            enableLongNumbers: !1,
            countryCodeEditable: !0,
            enableSearch: !1,
            disableSearchIcon: !1,
            disableInitialCountryGuess: !1,
            disableCountryGuess: !1,
            regions: '',
            inputProps: {},
            localization: {},
            masks: null,
            priority: null,
            areaCodes: null,
            preserveOrder: [],
            defaultMask: '... ... ... ... ..',
            alwaysDefaultMask: !1,
            prefix: '+',
            copyNumbersOnly: !0,
            renderStringAsFlag: '',
            autocompleteSearch: !1,
            jumpCursorToEnd: !0,
            enableAreaCodeStretch: !1,
            enableClickOutside: !0,
            showDropdown: !1,
            isValid: !0,
            defaultErrorMessage: '',
            specialLabel: 'Phone',
            onEnterKeyPress: null,
            keys: {
              UP: 38,
              DOWN: 40,
              RIGHT: 39,
              LEFT: 37,
              ENTER: 13,
              ESC: 27,
              PLUS: 43,
              A: 65,
              Z: 90,
              SPACE: 32,
              TAB: 9,
            },
          }),
            (t.default = M);
        },
      ]);
    },
  },
]);
