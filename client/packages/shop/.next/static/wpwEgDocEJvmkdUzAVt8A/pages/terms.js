(window.webpackJsonp = window.webpackJsonp || []).push([
  [35],
  {
    idGw: function (e, o, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/terms',
        function () {
          return t('tmBl');
        },
      ]);
    },
    tmBl: function (e, o, t) {
      'use strict';
      t.r(o);
      var i = t('ERkP'),
        n = t.n(i),
        a = t('gyFy'),
        r = t.n(a),
        s = t('bl2F'),
        l = t('aptK'),
        c = t('jF6n'),
        d = t('H8eV'),
        u = t('ft+Y'),
        p = 'Terms of Service',
        m = '01/01/2020',
        y = [
          {
            id: '1',
            title: 'Purpose',
            description:
              '<p>Little &amp; Big is committed to protecting your privacy because we are committed to valuing people. Our Privacy Policy below sets out how your personal information is collected, used and protected. The&nbsp;<a href="http://demo">Demo Country Privacy Principles</a>&nbsp;also apply to us.</p><p>This Privacy Policy describes our policies and procedures on the collection, holding, use and disclosure of your personal information and should be read together with our&nbsp;Terms and Conditions. By providing your personal information you consent to our collection, use and disclosure of that information in accordance with this Privacy Policy.</p>',
          },
          {
            id: '2',
            title: 'What is Personal Data?',
            description:
              '<p>When used in this Policy, "personal information" has the meaning given in the Privacy Act. Generally, it means any information or an opinion that could be used to identify you.</p>',
          },
          {
            id: '3',
            title: 'Personal Data Collected',
            description:
              '<p>Personal Data collected for the following purposes and using the following services:</p><ol><li>Google Analytics: Cookies; Usage Data</li><li>Contact form: email address; first name; phone number</li><li>Mailing list or newsletter: email address; first name</li></ol>',
          },
          {
            id: '4',
            title: 'Accessing your Personal Data',
            description:
              '<p>You may request access to your personal information collected by us, and ask that we correct that personal information. You can ask for access or correction by contacting us and we will usually respond within 30 days. If we refuse to give you access to, or correct, your personal information, we will notify you in writing setting out the reasons.</p>',
          },
          {
            id: '5',
            title: 'Complaints',
            description:
              '<p>If you believe your privacy has been breached or you have a complaint about how we have handled your personal information, please contact us in writing.  We will respond within a reasonable period (usually within 30 days).</p>',
          },
          {
            id: '6',
            title: 'Owner and Data Controller',
            description:
              '<p>The Commons<br>20-40 demo St,<br>Jon doe NSW 2008<br>Country<br><br>Email: demo@demo.com</p>',
          },
        ],
        h = n.a.createElement;
      o.default = function () {
        var e = p,
          o = m,
          t = y,
          i = Object(u.a)('(max-width: 580px)'),
          a = [];
        return (
          t.forEach(function (e) {
            a.push(e.title);
          }),
          h(
            n.a.Fragment,
            null,
            h(d.a, { title: e, description: 'Mahdi Fashion privacy page' }),
            h(
              s.a,
              null,
              h(l.a, { title: e, subtitle: 'Last update: '.concat(o) }),
              h(
                s.b,
                null,
                h(
                  s.d,
                  null,
                  h(
                    r.a,
                    { top: i ? 68 : 150, innerZ: '1' },
                    h(
                      s.e,
                      null,
                      a.map(function (e) {
                        return h(
                          s.f,
                          {
                            key: e,
                            activeClass: 'active',
                            to: e,
                            spy: !0,
                            smooth: !0,
                            offset: -276,
                            duration: 500,
                          },
                          e
                        );
                      })
                    )
                  )
                ),
                h(
                  s.g,
                  null,
                  t.map(function (e, o) {
                    return h(
                      c.Element,
                      { name: e.title, style: { paddingBottom: 40 }, key: o },
                      h(s.c, null, e.title),
                      h('div', {
                        className: 'html-content',
                        dangerouslySetInnerHTML: { __html: e.description },
                      })
                    );
                  })
                )
              )
            )
          )
        );
      };
    },
  },
  [['idGw', 1, 0, 3, 10, 19]],
]);
