(window.webpackJsonp = window.webpackJsonp || []).push([
  [28, 45],
  {
    '0xii': function (e, t, o) {
      (function (t) {
        for (
          var n = o('FF9q'),
            a = 'undefined' === typeof window ? t : window,
            r = ['moz', 'webkit'],
            i = 'AnimationFrame',
            l = a['request' + i],
            d = a['cancel' + i] || a['cancelRequest' + i],
            s = 0;
          !l && s < r.length;
          s++
        )
          (l = a[r[s] + 'Request' + i]),
            (d = a[r[s] + 'Cancel' + i] || a[r[s] + 'CancelRequest' + i]);
        if (!l || !d) {
          var c = 0,
            f = 0,
            p = [];
          (l = function (e) {
            if (0 === p.length) {
              var t = n(),
                o = Math.max(0, 1e3 / 60 - (t - c));
              (c = o + t),
                setTimeout(function () {
                  var e = p.slice(0);
                  p.length = 0;
                  for (var t = 0; t < e.length; t++)
                    if (!e[t].cancelled)
                      try {
                        e[t].callback(c);
                      } catch (o) {
                        setTimeout(function () {
                          throw o;
                        }, 0);
                      }
                }, Math.round(o));
            }
            return p.push({ handle: ++f, callback: e, cancelled: !1 }), f;
          }),
            (d = function (e) {
              for (var t = 0; t < p.length; t++)
                p[t].handle === e && (p[t].cancelled = !0);
            });
        }
        (e.exports = function (e) {
          return l.call(a, e);
        }),
          (e.exports.cancel = function () {
            d.apply(a, arguments);
          }),
          (e.exports.polyfill = function (e) {
            e || (e = a),
              (e.requestAnimationFrame = l),
              (e.cancelAnimationFrame = d);
          });
      }.call(this, o('lpmq')));
    },
    FF9q: function (e, t, o) {
      (function (t) {
        (function () {
          var o, n, a, r, i, l;
          'undefined' !== typeof performance &&
          null !== performance &&
          performance.now
            ? (e.exports = function () {
                return performance.now();
              })
            : 'undefined' !== typeof t && null !== t && t.hrtime
            ? ((e.exports = function () {
                return (o() - i) / 1e6;
              }),
              (n = t.hrtime),
              (r = (o = function () {
                var e;
                return 1e9 * (e = n())[0] + e[1];
              })()),
              (l = 1e9 * t.uptime()),
              (i = r - l))
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
      }.call(this, o('F63i')));
    },
    HO86: function (e, t, o) {
      'use strict';
      o.d(t, 'a', function () {
        return a;
      });
      var n = o('lEbO');
      function a(e, t) {
        if (e) {
          if ('string' === typeof e) return Object(n.a)(e, t);
          var o = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === o && e.constructor && (o = e.constructor.name),
            'Map' === o || 'Set' === o
              ? Array.from(e)
              : 'Arguments' === o ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
              ? Object(n.a)(e, t)
              : void 0
          );
        }
      }
    },
    QfjN: function (e, t, o) {
      'use strict';
      o.d(t, 'a', function () {
        return a;
      });
      var n = o('ERkP'),
        a = Object(n.createContext)({});
    },
    'QsI/': function (e, t, o) {
      'use strict';
      function n(e, t, o, n, a, r, i) {
        try {
          var l = e[r](i),
            d = l.value;
        } catch (s) {
          return void o(s);
        }
        l.done ? t(d) : Promise.resolve(d).then(n, a);
      }
      function a(e) {
        return function () {
          var t = this,
            o = arguments;
          return new Promise(function (a, r) {
            var i = e.apply(t, o);
            function l(e) {
              n(i, a, r, l, d, 'next', e);
            }
            function d(e) {
              n(i, a, r, l, d, 'throw', e);
            }
            l(void 0);
          });
        };
      }
      o.d(t, 'a', function () {
        return a;
      });
    },
    TcVw: function (e, t, o) {
      'use strict';
      o.r(t);
      var n = o('ERkP'),
        a = o.n(n),
        r = o('H8eV'),
        i = o('zygG'),
        l = o('XuDI'),
        d = o('1U1M'),
        s = o('pFUA'),
        c = o('quMH'),
        f = o('j/s1'),
        p = o('tZdC'),
        u = f.e.div.withConfig({
          displayName: 'orderstyle__DesktopView',
          componentId: 'sc-1kdth0v-0',
        })([
          'display:none;@media only screen and (min-width:990px){display:flex;}',
        ]),
        m = f.e.div.withConfig({
          displayName: 'orderstyle__MobileView',
          componentId: 'sc-1kdth0v-1',
        })([
          'display:none;@media only screen and (max-width:989px){width:100%;display:flex;}',
        ]),
        b = f.e.div.withConfig({
          displayName: 'orderstyle__OrderBox',
          componentId: 'sc-1kdth0v-2',
        })([
          'width:calc(100% - 330px);display:flex;align-items:flex-start;@media only screen and (max-width:1199px){width:100%;padding:0 20px;}',
        ]),
        g = f.e.div.withConfig({
          displayName: 'orderstyle__OrderListWrapper',
          componentId: 'sc-1kdth0v-3',
        })(
          [
            'width:330px;height:auto;display:flex;flex-direction:column;border:1px solid ',
            ';flex-shrink:0;margin-right:30px;overflow:hidden;@media only screen and (max-width:1199px){width:310px;margin-right:20px;}',
          ],
          Object(p.a)('colors.gray.500', '#f1f1f1')
        ),
        h = f.e.div.withConfig({
          displayName: 'orderstyle__OrderList',
          componentId: 'sc-1kdth0v-4',
        })(
          [
            'width:100%;padding:0 20px 20px;@media (max-width:767px){padding:0;}.rc-collapse{background-color:transparent;border-radius:0;border:0;> .rc-collapse-item{margin-bottom:15px;background-color:',
            ';border-radius:',
            ';overflow:hidden;margin-bottom:15px;display:flex;flex-direction:column;cursor:pointer;flex-shrink:0;border:1px solid transparent;&.rc-collapse-item-active{background-color:',
            ';border:1px solid ',
            ';}> .rc-collapse-header{padding:0;outline:0;}.rc-collapse-content{padding:0px;> .rc-collapse-content-box{box-sizing:border-box;padding:0px;margin:0;}}}}',
          ],
          Object(p.a)('colors.gray.200', '#f7f7f7'),
          Object(p.a)('radii.base', '6px'),
          Object(p.a)('colors.white', '#ffffff'),
          Object(p.a)('colors.gray.500', '#f1f1f1')
        ),
        y = f.e.div.withConfig({
          displayName: 'orderstyle__OrderDetailsWrapper',
          componentId: 'sc-1kdth0v-5',
        })(
          [
            'width:100%;min-height:calc(100vh - 190px);display:flex;flex-direction:column;border:1px solid ',
            ';',
          ],
          Object(p.a)('colors.gray.500', '#f1f1f1')
        ),
        x = f.e.h3.withConfig({
          displayName: 'orderstyle__Title',
          componentId: 'sc-1kdth0v-6',
        })(
          [
            'font-family:',
            ';font-size:',
            'px;font-weight:',
            ';color:',
            ';margin:25px 0;',
          ],
          Object(p.a)('fonts.heading', 'sans-serif'),
          Object(p.a)('fontSizes.lg', '21'),
          Object(p.a)('fontWeights.bold', '700'),
          Object(p.a)('colors.text.bold', '#0D1136')
        ),
        O = f.e.span.withConfig({
          displayName: 'orderstyle__ImageWrapper',
          componentId: 'sc-1kdth0v-7',
        })([
          'width:75px;height:75px;display:flex;flex-shrink:0;img{width:100%;height:100%;object-fit:cover;}',
        ]),
        w = f.e.span.withConfig({
          displayName: 'orderstyle__ItemWrapper',
          componentId: 'sc-1kdth0v-8',
        })(['display:flex;align-items:center;']),
        j = f.e.span.withConfig({
          displayName: 'orderstyle__ItemDetails',
          componentId: 'sc-1kdth0v-9',
        })([
          'display:flex;flex-direction:column;margin-left:15px;overflow:hidden;',
        ]),
        _ = f.e.span.withConfig({
          displayName: 'orderstyle__ItemName',
          componentId: 'sc-1kdth0v-10',
        })(
          [
            'font-family:',
            ';font-size:',
            'px;font-weight:',
            ';color:',
            ';margin-bottom:5px;text-overflow:ellipsis;overflow:hidden;display:inline-block;',
          ],
          Object(p.a)('fonts.body', 'Lato'),
          Object(p.a)('fontSizes.base', '15'),
          Object(p.a)('fontWeights.bold', '700'),
          Object(p.a)('colors.text.bold', '#0D1136')
        ),
        v = Object(f.e)('span').withConfig({
          displayName: 'orderstyle__ItemSize',
          componentId: 'sc-1kdth0v-11',
        })(
          [
            'font-family:',
            ';font-size:',
            'px;font-weight:',
            ';color:',
            ';margin-bottom:5px;',
          ],
          Object(p.a)('fonts.body', 'Lato'),
          Object(p.a)('fontSizes.sm', '13'),
          Object(p.a)('fontWeights.regular', '400'),
          Object(p.a)('colors.text.regular', '#77798c')
        ),
        C = Object(f.e)('span').withConfig({
          displayName: 'orderstyle__ItemPrice',
          componentId: 'sc-1kdth0v-12',
        })(
          ['font-family:', ';font-size:', 'px;font-weight:', ';color:', ';'],
          Object(p.a)('fonts.body', 'Lato'),
          Object(p.a)('fontSizes.sm', '13'),
          Object(p.a)('fontWeights.regular', '400'),
          Object(p.a)('colors.primary.regular', '#009e7f')
        ),
        I =
          (f.e.span.withConfig({
            displayName: 'orderstyle__TotalPrice',
            componentId: 'sc-1kdth0v-13',
          })(
            ['font-family:', ';font-size:', 'px;font-weight:', ';color:', ';'],
            Object(p.a)('fonts.body', 'Lato'),
            Object(p.a)('fontSizes.base', '15'),
            Object(p.a)('fontWeights.regular', '400'),
            Object(p.a)('colors.text.bold', '#0D1136')
          ),
          f.e.span.withConfig({
            displayName: 'orderstyle__NoOrderFound',
            componentId: 'sc-1kdth0v-14',
          })(
            [
              'font-family:',
              ';font-size:',
              'px;font-weight:',
              ';color:',
              ';padding:50px 0;display:flex;align-items:center;justify-content:center;',
            ],
            Object(p.a)('fonts.body', 'Lato'),
            Object(p.a)('fontSizes.base', '15'),
            Object(p.a)('fontWeights.regular', '400'),
            Object(p.a)('colors.text.regular', '#77798c')
          )),
        k = o('7xIC'),
        N = o.n(k),
        S =
          (Object(f.e)('div').withConfig({
            displayName: 'order-detailsstyle__OrderDetailsWrapper',
            componentId: 'sc-1p5tlqt-0',
          })(
            [
              'width:100%;display:flex;flex-direction:column;background-color:',
              ';',
            ],
            Object(p.a)('colors.white', '#ffffff')
          ),
          f.e.div.withConfig({
            displayName: 'order-detailsstyle__DeliveryInfo',
            componentId: 'sc-1p5tlqt-1',
          })(
            [
              'width:100%;display:flex;border-top:1px solid ',
              ';border-bottom:1px solid ',
              ';',
            ],
            Object(p.a)('colors.gray.500', '#f1f1f1'),
            Object(p.a)('colors.gray.500', '#f1f1f1')
          )),
        D = f.e.div.withConfig({
          displayName: 'order-detailsstyle__DeliveryAddress',
          componentId: 'sc-1p5tlqt-2',
        })(
          [
            'width:100%;display:flex;flex-direction:column;border-right:1px solid ',
            ';padding:20px;h3{font-family:',
            ';font-size:',
            'px;font-weight:',
            ';color:',
            ';margin-bottom:10px;}',
          ],
          Object(p.a)('colors.gray.500', '#f1f1f1'),
          Object(p.a)('fonts.body', 'Lato'),
          Object(p.a)('fontSizes.base', '15'),
          Object(p.a)('fontWeights.bold', '700'),
          Object(p.a)('colors.text.bold', '#0D1136')
        ),
        z = f.e.span.withConfig({
          displayName: 'order-detailsstyle__Address',
          componentId: 'sc-1p5tlqt-3',
        })(
          [
            'font-family:',
            ';font-size:',
            'px;font-weight:',
            ';color:',
            ';line-height:1.5;',
          ],
          Object(p.a)('fonts.body', 'Lato'),
          Object(p.a)('fontSizes.base', '15'),
          Object(p.a)('fontWeights.regular', '400'),
          Object(p.a)('colors.text.regular', '#77798c')
        ),
        T = f.e.span.withConfig({
          displayName: 'order-detailsstyle__Contact',
          componentId: 'sc-1p5tlqt-4',
        })(
          [
            'font-family:',
            ';font-size:',
            'px;font-weight:',
            ';color:',
            ';line-height:1.5;margin-bottom:15px;',
          ],
          Object(p.a)('fonts.body', 'Lato'),
          Object(p.a)('fontSizes.base', '15'),
          Object(p.a)('fontWeights.regular', '400'),
          Object(p.a)('colors.text.regular', '#77798c')
        ),
        M = f.e.div.withConfig({
          displayName: 'order-detailsstyle__CostCalculation',
          componentId: 'sc-1p5tlqt-5',
        })([
          'width:235px;display:flex;flex-direction:column;flex-shrink:0;padding:20px;@media only screen and (min-width:768px) and (max-width:990px){width:220px;}',
        ]),
        W = f.e.div.withConfig({
          displayName: 'order-detailsstyle__PriceRow',
          componentId: 'sc-1p5tlqt-6',
        })(
          [
            'font-family:',
            ';font-size:',
            'px;font-weight:',
            ';color:',
            ';margin-bottom:15px;width:100%;display:flex;align-items:center;justify-content:space-between;&:last-child{margin-bottom:0;}&.grandTotal{font-weight:',
            ';color:',
            ';}',
          ],
          Object(p.a)('fonts.body', 'Lato'),
          Object(p.a)('fontSizes.base', '15'),
          Object(p.a)('fontWeights.regular', '400'),
          Object(p.a)('colors.text.regular', '#77798c'),
          Object(p.a)('fontWeights.bold', '700'),
          Object(p.a)('colors.text.bold', '#0D1136')
        ),
        q = f.e.div.withConfig({
          displayName: 'order-detailsstyle__Price',
          componentId: 'sc-1p5tlqt-7',
        })(['color:', ';'], Object(p.a)('colors.text.bold', '#0D1136')),
        L =
          (Object(f.e)('div').withConfig({
            displayName: 'order-detailsstyle__HeadingSection',
            componentId: 'sc-1p5tlqt-8',
          })([
            'width:100%;display:flex;align-items:center;justify-content:center;margin-bottom:40px;',
          ]),
          Object(f.e)('h3').withConfig({
            displayName: 'order-detailsstyle__Title',
            componentId: 'sc-1p5tlqt-9',
          })(
            ['font-family:', ';font-size:', 'px;font-weight:', ';color:', ';'],
            Object(p.a)('fonts.heading', 'sans-serif'),
            Object(p.a)('fontSizes.lg', '21'),
            Object(p.a)('fontWeights.bold', '700'),
            Object(p.a)('colors.text.bold', '#0D1136')
          ),
          Object(f.e)('div').withConfig({
            displayName: 'order-detailsstyle__ProgressSection',
            componentId: 'sc-1p5tlqt-10',
          })([
            'width:100%;display:flex;flex-direction:column;padding:60px 0;&:last-child{margin-bottom:0;}',
          ]),
          Object(f.e)('div').withConfig({
            displayName: 'order-detailsstyle__ProgressWrapper',
            componentId: 'sc-1p5tlqt-11',
          })(
            [
              'width:100%;display:flex;padding:30px 25px;border-bottom:1px solid ',
              ';',
            ],
            Object(p.a)('colors.gray.500', '#f1f1f1')
          )),
        A = Object(f.e)('table').withConfig({
          displayName: 'order-detailsstyle__OrderTable',
          componentId: 'sc-1p5tlqt-12',
        })(
          [
            '&&{border-collapse:collapse;thead{th{padding:8px 20px;font-family:',
            ';font-size:',
            'px;font-weight:',
            ';color:',
            ';border:none;&:first-child{padding-left:110px;text-align:left;}}}tr{&:hover{background-color:inherit;}td{padding:20px;font-family:',
            ';font-size:',
            'px;font-weight:',
            ';color:',
            ';border-bottom:0;border:none;}}}',
          ],
          Object(p.a)('fonts.body', 'Lato'),
          Object(p.a)('fontSizes.sm', '13'),
          Object(p.a)('fontWeights.bold', '700'),
          Object(p.a)('colors.text.bold', '#0D1136'),
          Object(p.a)('fonts.body', 'Lato'),
          Object(p.a)('fontSizes.base', '15'),
          Object(p.a)('fontWeights.regular', '400'),
          Object(p.a)('colors.text.bold', '#0D1136')
        ),
        P =
          (f.e.div.withConfig({
            displayName: 'order-detailsstyle__OrderTableWrapper',
            componentId: 'sc-1p5tlqt-13',
          })(['.rc-table-content{border:0;}']),
          f.e.span.withConfig({
            displayName: 'order-detailsstyle__StyledLink',
            componentId: 'sc-1p5tlqt-14',
          })(
            [
              'display:inline-flex;align-items:center;justify-content:center;font-family:',
              ';font-size:',
              'px;font-weight:',
              ';color:',
              ';padding:5px 15px;height:36px;border:1px solid ',
              ';border-radius:',
              ';position:relative;width:150px;margin:15px;transition:0.15s ease-in-out;cursor:pointer;@media (max-width:767px){font-size:',
              'px;height:34px;padding:5px 12px;}&:hover{background-color:',
              ';border-color:',
              ';color:',
              ';}',
            ],
            Object(p.a)('fonts.body', 'Lato'),
            Object(p.a)('fontSizes.base', '15'),
            Object(p.a)('fontWeights.regular', '400'),
            Object(p.a)('colors.text.regular', '#77798c'),
            Object(p.a)('colors.gray.700', '#e6e6e6'),
            Object(p.a)('radii.base', '6px'),
            Object(p.a)('fontSizes.sm', '13'),
            Object(p.a)('colors.primary.regular', '#009e7f'),
            Object(p.a)('colors.primary.regular', '#009e7f'),
            Object(p.a)('colors.white', '#ffffff')
          )),
        E = o('f/wd'),
        F = o('2SGB'),
        H = a.a.createElement,
        U = function (e) {
          e.tableData, e.columns;
          var t = e.address,
            o = e.number,
            n = e.id,
            r = (e.progressStatus, e.progressData, e.subtotal),
            i = e.discount,
            l = e.grandTotal,
            d = e.deliveryMethod;
          e.ref;
          return H(
            a.a.Fragment,
            null,
            H(
              S,
              null,
              H(
                D,
                null,
                H(
                  'h3',
                  null,
                  H(F.a, {
                    id: 'deliveryAddressTitle',
                    defaultMessage: 'Delivery Method',
                  })
                ),
                H(T, null, d.name),
                H(
                  'h3',
                  null,
                  H(F.a, {
                    id: 'deliveryAddressTitle',
                    defaultMessage: 'Contact Number',
                  })
                ),
                H(T, null, o),
                H(
                  'h3',
                  null,
                  H(F.a, {
                    id: 'deliveryAddressTitle',
                    defaultMessage: 'Delivery Address',
                  })
                ),
                H(z, null, t)
              ),
              H(
                M,
                null,
                H(
                  W,
                  null,
                  H(F.a, { id: 'subTotal', defaultMessage: 'Sub total' }),
                  H(q, null, E.a, r)
                ),
                H(
                  W,
                  null,
                  H(F.a, {
                    id: 'intlOrderDetailsDiscount',
                    defaultMessage: 'Discount',
                  }),
                  H(q, null, E.a, null !== i ? i : 0)
                ),
                H(
                  W,
                  { className: 'grandTotal' },
                  H(F.a, { id: 'totalText', defaultMessage: 'Total' }),
                  H(q, null, E.a, l)
                )
              )
            ),
            H(
              P,
              {
                onClick: function () {
                  return (
                    N.a.push({
                      pathname: '/order-received',
                      query: { itemId: n },
                    }),
                    !1
                  );
                },
              },
              'Get Invoice'
            )
          );
        },
        R = Object(f.e)(z).withConfig({
          displayName: 'order-cardstyle__Address',
          componentId: 'mpx1k5-0',
        })(['']),
        G = Object(f.e)(T).withConfig({
          displayName: 'order-cardstyle__Contact',
          componentId: 'mpx1k5-1',
        })(['']),
        V = Object(f.e)(W).withConfig({
          displayName: 'order-cardstyle__PriceRow',
          componentId: 'mpx1k5-2',
        })(['']),
        B = Object(f.e)(q).withConfig({
          displayName: 'order-cardstyle__Price',
          componentId: 'mpx1k5-3',
        })(['']),
        Q =
          (Object(f.e)(A).withConfig({
            displayName: 'order-cardstyle__OrderTable',
            componentId: 'mpx1k5-4',
          })(['']),
          Object(f.e)(S).withConfig({
            displayName: 'order-cardstyle__DeliveryInfo',
            componentId: 'mpx1k5-5',
          })(['flex-direction:column;'])),
        Z = Object(f.e)(D).withConfig({
          displayName: 'order-cardstyle__DeliveryAddress',
          componentId: 'mpx1k5-6',
        })(
          ['border-bottom:1px solid ', ';border-right:0;'],
          Object(p.a)('colors.gray.500', '#f1f1f1')
        ),
        $ = Object(f.e)(M).withConfig({
          displayName: 'order-cardstyle__CostCalculation',
          componentId: 'mpx1k5-7',
        })(['width:100%;']),
        J =
          (Object(f.e)(L).withConfig({
            displayName: 'order-cardstyle__ProgressWrapper',
            componentId: 'mpx1k5-8',
          })(['@media (max-width:767px){flex-direction:column;}']),
          f.e.div.withConfig({
            displayName: 'order-cardstyle__OrderListHeader',
            componentId: 'mpx1k5-9',
          })(
            [
              'padding:15px 20px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid ',
              ';',
            ],
            Object(p.a)('colors.gray.500', '#f1f1f1')
          )),
        X = f.e.span.withConfig({
          displayName: 'order-cardstyle__TrackID',
          componentId: 'mpx1k5-10',
        })(
          [
            'font-family:',
            ';font-size:',
            'px;font-weight:',
            ';color:',
            ';span{font-weight:',
            ';}',
          ],
          Object(p.a)('fonts.body', 'Lato'),
          Object(p.a)('fontSizes.base', '15'),
          Object(p.a)('fontWeights.bold', '700'),
          Object(p.a)('colors.text.bold', '#0D1136'),
          Object(p.a)('fontWeights.regular', '400')
        ),
        K = f.e.span.withConfig({
          displayName: 'order-cardstyle__Status',
          componentId: 'mpx1k5-11',
        })(
          [
            'font-family:',
            ';font-size:',
            'px;font-weight:',
            ';color:',
            ';line-height:1;background-color:rgba(46,112,250,0.1);padding:10px;border-radius:',
            ';',
          ],
          Object(p.a)('fonts.body', 'Lato'),
          Object(p.a)('fontSizes.sm', '13'),
          Object(p.a)('fontWeights.regular', '400'),
          Object(p.a)('colors.blue.regular', '#2e70fa'),
          Object(p.a)('radii.base', '6px')
        ),
        Y = f.e.div.withConfig({
          displayName: 'order-cardstyle__OrderMeta',
          componentId: 'mpx1k5-12',
        })(['display:flex;flex-direction:column;padding:20px;']),
        ee = f.e.div.withConfig({
          displayName: 'order-cardstyle__Meta',
          componentId: 'mpx1k5-13',
        })(
          [
            'font-family:',
            ';font-size:',
            'px;font-weight:',
            ';color:',
            ';display:flex;justify-content:space-between;align-items:center;width:100%;margin-bottom:15px;@media (max-width:767px){font-size:',
            'px;}&:last-child{margin-bottom:0;}&.price{font-weight:',
            ';}',
          ],
          Object(p.a)('fonts.body', 'Lato'),
          Object(p.a)('fontSizes.sm', '13'),
          Object(p.a)('fontWeights.regular', '400'),
          Object(p.a)('colors.text.bold', '#0D1136'),
          Object(p.a)('fontSizes.base', '15'),
          Object(p.a)('fontWeights.bold', '700')
        ),
        te = f.e.div.withConfig({
          displayName: 'order-cardstyle__OrderDetail',
          componentId: 'mpx1k5-14',
        })(['display:flex;flex-direction:column;width:100%;']),
        oe = f.e.div.withConfig({
          displayName: 'order-cardstyle__CardWrapper',
          componentId: 'mpx1k5-15',
        })(['width:100%;']),
        ne = f.e.div.withConfig({
          displayName: 'order-cardstyle__SingleOrderList',
          componentId: 'mpx1k5-16',
        })(
          [
            'background-color:',
            ';border-radius:',
            ';overflow:hidden;margin-bottom:15px;display:flex;flex-direction:column;cursor:pointer;flex-shrink:0;border:2px solid transparent;&:last-child{margin-bottom:0;}&.active{border:2px solid ',
            ';}',
          ],
          Object(p.a)('colors.gray.200', '#f7f7f7'),
          Object(p.a)('radii.base', '6px'),
          Object(p.a)('colors.primary.regular', '#009e7f')
        ),
        ae =
          (f.e.div.withConfig({
            displayName: 'order-cardstyle__OrderTableMobile',
            componentId: 'mpx1k5-17',
          })([
            '.rc-table-header,.rc-table-body,.rc-table th,.rc-table td{border:0;}.rc-table-content{border:0;}',
          ]),
          a.a.createElement),
        re = function (e) {
          var t = e.orderId,
            o = e.onClick,
            n = e.className,
            r = e.status,
            i = e.date,
            l = (e.deliveryTime, e.amount);
          return ae(
            a.a.Fragment,
            null,
            ae(
              ne,
              { onClick: o, className: n },
              ae(
                J,
                null,
                ae(
                  X,
                  null,
                  ae(F.a, {
                    id: 'intlOrderCardTitleText',
                    defaultMessage: 'Order',
                  }),
                  ae('span', null, '#', t)
                ),
                ae(K, null, r)
              ),
              ae(
                Y,
                null,
                ae(
                  ee,
                  null,
                  ae(F.a, {
                    id: 'intlOrderCardDateText',
                    defaultMessage: 'Order Date',
                  }),
                  ': ',
                  ae('span', null, i)
                ),
                ae(
                  ee,
                  { className: 'price' },
                  ae(F.a, {
                    id: 'intlOrderCardTotalText',
                    defaultMessage: 'Total Price',
                  }),
                  ':',
                  ae('span', null, E.a, l)
                )
              )
            )
          );
        },
        ie = o('bJOg'),
        le = a.a.createElement,
        de = function (e) {
          var t = e.onClick,
            o = e.className,
            n = (e.columns, e.progressData),
            r = e.orders,
            i = ['accordion'];
          return (
            o && i.push(o),
            le(
              a.a.Fragment,
              null,
              le(
                ie.b,
                {
                  accordion: !0,
                  className: i.join(' '),
                  defaultActiveKey: 'active',
                  expandIcon: function () {},
                },
                r.map(function (e) {
                  return le(
                    ie.a,
                    {
                      header: le(
                        oe,
                        { onClick: t },
                        le(
                          J,
                          null,
                          le(X, null, 'Order ', le('span', null, '#', e.id)),
                          le(K, null, n[e.status - 1])
                        ),
                        le(
                          Y,
                          null,
                          le(
                            ee,
                            null,
                            'Order Date: ',
                            le('span', null, e.date)
                          ),
                          le(
                            ee,
                            null,
                            'Delivery Time: ',
                            le('span', null, e.deliveryTime)
                          ),
                          le(
                            ee,
                            { className: 'price' },
                            'Total Price:',
                            le('span', null, E.a, e.amount)
                          )
                        )
                      ),
                      headerClass: 'accordion-title',
                      key: e.id,
                    },
                    le(
                      te,
                      null,
                      le(
                        Q,
                        null,
                        le(
                          Z,
                          null,
                          le('h3', null, 'Contact Number'),
                          le(G, null, e.contact_number)
                        ),
                        le(
                          Z,
                          null,
                          le('h3', null, 'Delivery Address'),
                          le(R, null, e.delivery_address)
                        ),
                        le(
                          $,
                          null,
                          le(
                            V,
                            null,
                            'Subtotal',
                            le(B, null, E.a, e.sub_total)
                          ),
                          le(V, null, 'Discount', le(B, null, E.a, e.discount)),
                          le(
                            V,
                            { className: 'grandTotal' },
                            'Total',
                            le(B, null, E.a, e.total)
                          )
                        )
                      )
                    )
                  );
                })
              )
            )
          );
        },
        se = o('uRCu'),
        ce = a.a.createElement,
        fe = ['Order Received', 'Order On The Way', 'Order Delivered'],
        pe = [
          {
            title: ce(F.a, { id: 'cartItems', defaultMessage: 'Items' }),
            dataIndex: '',
            key: 'items',
            width: 250,
            ellipsis: !0,
            render: function (e, t) {
              return ce(
                w,
                null,
                ce(O, null, ce('img', { src: t.image, alt: t.title })),
                ce(
                  j,
                  null,
                  ce(_, null, t.title),
                  ce(v, null, t.weight),
                  ce(C, null, '$', t.price)
                )
              );
            },
          },
          {
            title: ce(F.a, {
              id: 'intlTableColTitle2',
              defaultMessage: 'Quantity',
            }),
            dataIndex: 'quantity',
            key: 'quantity',
            align: 'center',
            width: 100,
          },
          {
            title: ce(F.a, {
              id: 'intlTableColTitle3',
              defaultMessage: 'Price',
            }),
            dataIndex: '',
            key: 'price',
            align: 'right',
            width: 100,
            render: function (e, t) {
              return ce('p', null, '$', t.total);
            },
          },
        ],
        ue = function () {
          var e = Object(n.useState)(null),
            t = e[0],
            o = e[1],
            a = Object(n.useState)(''),
            r = a[0],
            f = a[1],
            p = Object(se.a)(),
            O = Object(i.a)(p, 2),
            w = O[0],
            j = O[1],
            _ = j.height - 79,
            v = Object(d.b)(s.a),
            C = v.data,
            k = v.error,
            N = v.loading;
          if (
            (Object(n.useEffect)(
              function () {
                C &&
                  0 !== C.getUserOrders.length &&
                  (o(C.getUserOrders[0]), f(C.getUserOrders[0].id));
              },
              [C]
            ),
            N)
          )
            return ce(c.default, { message: 'Loading...' });
          if (k) return ce(c.default, { message: k.message });
          var S = C.getUserOrders,
            D = function (e) {
              o(e), f(e.id);
            };
          return ce(
            b,
            null,
            ce(
              u,
              null,
              ce(
                g,
                { style: { height: j.height } },
                ce(
                  x,
                  { style: { padding: '0 20px' } },
                  ce(F.a, {
                    id: 'intlOrderPageTitle',
                    defaultMessage: 'My Order',
                  })
                ),
                ce(
                  l.Scrollbars,
                  {
                    universal: !0,
                    autoHide: !0,
                    autoHeight: !0,
                    autoHeightMin: 420,
                    autoHeightMax: isNaN(_) ? 500 : _,
                  },
                  ce(
                    h,
                    null,
                    0 !== S.length
                      ? S.map(function (e, t) {
                          return ce(re, {
                            key: t,
                            orderId: e.order_code,
                            className: t === r ? 'active' : '',
                            status: e.status,
                            date: e.datetime.split('2020').shift(),
                            amount: e.total,
                            onClick: function () {
                              D(e);
                            },
                          });
                        })
                      : ce(
                          I,
                          null,
                          ce(F.a, {
                            id: 'intlNoOrderFound',
                            defaultMessage: 'No order found',
                          })
                        )
                  )
                )
              ),
              ce(
                y,
                { ref: w },
                ce(
                  x,
                  { style: { padding: '0 20px' } },
                  ce(F.a, {
                    id: 'orderDetailsText',
                    defaultMessage: 'Order Details',
                  })
                ),
                t &&
                  ce(U, {
                    id: t.id,
                    progressStatus: t.status,
                    progressData: fe,
                    number: t.contact_number,
                    address: t.delivery_address,
                    subtotal: t.sub_total,
                    discount: t.discount_amount,
                    grandTotal: t.total,
                    tableData: t.products,
                    columns: pe,
                    deliveryMethod: t.delivery_method,
                  })
              )
            ),
            ce(
              m,
              null,
              ce(
                h,
                null,
                ce(de, {
                  orders: S,
                  className: t && t.id === r ? 'active' : '',
                  progressData: fe,
                  columns: pe,
                  onClick: function () {
                    D(t);
                  },
                })
              )
            )
          );
        },
        me = o('r0LQ'),
        be = o('jh0t'),
        ge = o('VU+f'),
        he = a.a.createElement;
      t.default = function () {
        return he(
          a.a.Fragment,
          null,
          he(r.a, {
            title: 'Order - Mahdi Fashion',
            description: 'Order Details',
          }),
          he(
            ge.a,
            null,
            he(me.b, null, he(me.c, null, he(be.a, null)), he(ue, null))
          )
        );
      };
    },
    VtSi: function (e, t, o) {
      e.exports = o('3yYM');
    },
    Zp6o: function (e, t, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/order',
        function () {
          return o('TcVw');
        },
      ]);
    },
    'f/wd': function (e, t, o) {
      'use strict';
      o.d(t, 'a', function () {
        return n;
      });
      var n = '$';
    },
    jh0t: function (e, t, o) {
      'use strict';
      var n = o('ERkP'),
        a = o.n(n),
        r = o('7xIC'),
        i = o.n(r),
        l = o('QfjN'),
        d = o('j/s1'),
        s = o('tZdC'),
        c = o('Ek28'),
        f = d.e.div.withConfig({
          displayName: 'sidebarstyle__SidebarWrapper',
          componentId: 'atg0vm-0',
        })(
          [
            'width:100%;height:auto;display:flex;flex-direction:column;flex-shrink:0;background-color:',
            ';box-shadow:0 0 6px rgba(0,0,0,0.16);',
          ],
          Object(s.a)('colors.white', '#ffffff')
        ),
        p = d.e.div.withConfig({
          displayName: 'sidebarstyle__SidebarTop',
          componentId: 'atg0vm-1',
        })(['display:flex;flex-direction:column;width:100%;padding:40px 0;']),
        u = d.e.div.withConfig({
          displayName: 'sidebarstyle__SidebarBottom',
          componentId: 'atg0vm-2',
        })(
          [
            'display:flex;flex-direction:column;width:100%;padding:40px 0;background-color:',
            ';',
          ],
          Object(s.a)('colors.gray.200', '#f7f7f7')
        ),
        m = Object(d.e)(c.a).withConfig({
          displayName: 'sidebarstyle__SidebarMenu',
          componentId: 'atg0vm-3',
        })(
          [
            'display:flex;a{font-family:',
            ';font-size:',
            'px;font-weight:',
            ';color:',
            ';transition:color 0.35s ease;padding:15px 60px;&.current-page{color:',
            ';border-left:5px solid ',
            ';padding-left:55px;}&:hover{color:',
            ';}&:last-child{margin-bottom:0;}}',
          ],
          Object(s.a)('fonts.body', 'Lato'),
          Object(s.a)('fontSizes.base', '15'),
          Object(s.a)('fontWeights.bold', '700'),
          Object(s.a)('colors.text.bold', '#0D1136'),
          Object(s.a)('colors.primary.regular', '#009e7f'),
          Object(s.a)('colors.primary.regular', '#009e7f'),
          Object(s.a)('colors.primary.regular', '#009e7f')
        ),
        b = d.e.button.withConfig({
          displayName: 'sidebarstyle__LogoutButton',
          componentId: 'atg0vm-4',
        })(
          [
            'border:none;background-color:transparent;text-align:left;cursor:pointer;font-family:',
            ';font-size:',
            'px;font-weight:',
            ';color:',
            ';transition:color 0.35s ease;padding:15px 60px;outline:0;&:hover{color:',
            ';}&:focus{box-shadow:none;}margin-bottom:0;',
          ],
          Object(s.a)('fonts.body', 'Lato'),
          Object(s.a)('fontSizes.base', '15'),
          Object(s.a)('fontWeights.bold', '700'),
          Object(s.a)('colors.text.bold', '#0D1136'),
          Object(s.a)('colors.primary.regular', '#009e7f')
        ),
        g = o('2SGB'),
        h = o('5l48'),
        y = a.a.createElement;
      t.a = function () {
        var e = Object(n.useContext)(l.a).authDispatch;
        return y(
          a.a.Fragment,
          null,
          y(
            f,
            null,
            y(
              p,
              null,
              h.o.map(function (e, t) {
                return y(m, { href: e.href, key: t, intlId: e.id });
              })
            ),
            y(
              u,
              null,
              h.n.map(function (e, t) {
                return y(m, { href: e.href, key: t, intlId: e.id });
              }),
              y(
                b,
                {
                  type: 'button',
                  onClick: function () {
                    localStorage.removeItem('access_token'),
                      e({ type: 'SIGN_OUT' }),
                      i.a.push('/');
                  },
                },
                y(g.a, { id: 'nav.logout', defaultMessage: 'Logout' })
              )
            )
          )
        );
      };
    },
    lEbO: function (e, t, o) {
      'use strict';
      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var o = 0, n = new Array(t); o < t; o++) n[o] = e[o];
        return n;
      }
      o.d(t, 'a', function () {
        return n;
      });
    },
    pFUA: function (e, t, o) {
      'use strict';
      o.d(t, 'a', function () {
        return i;
      });
      var n = o('KD1n'),
        a = o('H5qd');
      function r() {
        var e = Object(n.a)([
          '\n  query GetUserOrders {\n    getUserOrders {\n      id\n      order_code\n      customer_id\n      contact_number\n      datetime\n      delivery_address\n      payment_method\n      payment_status\n      status\n      discount_amount\n      sub_total\n      total\n      delivery_method {\n        name\n        details\n      }\n      order_tracking {\n        status\n        ordering\n        is_current\n        step_competed\n      }\n    }\n  }\n',
        ]);
        return (
          (r = function () {
            return e;
          }),
          e
        );
      }
      var i = o.n(a)()(r());
    },
    quMH: function (e, t, o) {
      'use strict';
      o.r(t),
        o.d(t, 'default', function () {
          return l;
        });
      var n = o('ERkP'),
        a = o.n(n),
        r = o('j/s1'),
        i = a.a.createElement;
      function l(e) {
        var t = e.message;
        return i(d, null, t);
      }
      var d = r.e.aside.withConfig({
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
    r0LQ: function (e, t, o) {
      'use strict';
      o.d(t, 'b', function () {
        return r;
      }),
        o.d(t, 'c', function () {
          return i;
        }),
        o.d(t, 'a', function () {
          return l;
        });
      var n = o('j/s1'),
        a = o('tZdC'),
        r = n.e.div.withConfig({
          displayName: 'user-profilestyle__PageWrapper',
          componentId: 'sc-1m4eu84-0',
        })(
          [
            'width:100%;height:auto;min-height:100vh;display:flex;flex-wrap:wrap;background-color:',
            ';padding:140px 70px 40px;@media only screen and (max-width:990px){padding:100px 0 60px;}@media only screen and (min-width:991px) and (max-width:1280px){padding:130px 15px 60px;}',
          ],
          Object(a.a)('colors.white', '#ffffff')
        ),
        i = n.e.div.withConfig({
          displayName: 'user-profilestyle__SidebarSection',
          componentId: 'sc-1m4eu84-1',
        })([
          'width:300px;flex-shrink:0;margin-right:30px;@media only screen and (max-width:1199px){display:none;}',
        ]),
        l = n.e.div.withConfig({
          displayName: 'user-profilestyle__ContentBox',
          componentId: 'sc-1m4eu84-2',
        })(
          [
            'width:calc(100% - 330px);height:auto;min-height:200px;display:flex;flex-direction:column;padding:60px 50px 20px;border:1px solid ',
            ';@media only screen and (max-width:1199px){width:100%;border:0;padding:20px;}',
          ],
          Object(a.a)('colors.gray.700', '#e6e6e6')
        );
    },
    zygG: function (e, t, o) {
      'use strict';
      o.d(t, 'a', function () {
        return a;
      });
      var n = o('HO86');
      function a(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e)) {
              var o = [],
                n = !0,
                a = !1,
                r = void 0;
              try {
                for (
                  var i, l = e[Symbol.iterator]();
                  !(n = (i = l.next()).done) &&
                  (o.push(i.value), !t || o.length !== t);
                  n = !0
                );
              } catch (d) {
                (a = !0), (r = d);
              } finally {
                try {
                  n || null == l.return || l.return();
                } finally {
                  if (a) throw r;
                }
              }
              return o;
            }
          })(e, t) ||
          Object(n.a)(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
    },
  },
  [['Zp6o', 1, 0, 2, 3, 4, 5, 6, 11, 17, 18]],
]);
