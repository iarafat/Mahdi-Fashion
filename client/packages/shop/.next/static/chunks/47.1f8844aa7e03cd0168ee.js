(window.webpackJsonp = window.webpackJsonp || []).push([
  [47],
  {
    '7i2D': function (e, n, a) {
      'use strict';
      a.r(n);
      var t = a('HbGN'),
        l = a('ERkP'),
        c = a.n(l),
        i = a('2SGB'),
        r = a('dFr0'),
        o = a('ZhUJ'),
        d = c.a.createElement;
      n.default = function (e) {
        var n = e.title,
          a = e.image,
          l = e.name,
          u = e.discountInPercent,
          s =
            (e.onChange,
            e.increment,
            e.decrement,
            e.data,
            e.deviceType,
            e.onClick);
        Object(t.a)(e, [
          'title',
          'image',
          'name',
          'discountInPercent',
          'onChange',
          'increment',
          'decrement',
          'data',
          'deviceType',
          'onClick',
        ]);
        return d(
          o.b,
          { onClick: s, className: 'book-card' },
          d(
            o.c,
            null,
            d(r.a, {
              url: a,
              className: 'product-image',
              style: { position: 'relative' },
              alt: n,
            }),
            u ? d(c.a.Fragment, null, d(o.f, null, u, '%')) : ''
          ),
          d(
            o.d,
            null,
            d(o.k, null, n),
            d(
              o.a,
              null,
              d(i.a, { id: 'intlTextBy', defaultMessage: 'by' }),
              ' ',
              l
            )
          )
        );
      };
    },
  },
]);
