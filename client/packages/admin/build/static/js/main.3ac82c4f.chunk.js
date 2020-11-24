(this["webpackJsonp@pick-bazar/admin"]=this["webpackJsonp@pick-bazar/admin"]||[]).push([[6],{12:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"q",(function(){return l})),n.d(t,"l",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"k",(function(){return i})),n.d(t,"f",(function(){return c})),n.d(t,"i",(function(){return s})),n.d(t,"j",(function(){return m})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return f})),n.d(t,"h",(function(){return d})),n.d(t,"n",(function(){return h})),n.d(t,"p",(function(){return p})),n.d(t,"o",(function(){return E})),n.d(t,"c",(function(){return b})),n.d(t,"m",(function(){return g})),n.d(t,"g",(function(){return y}));const a="/",l="/types",r="/products",o="/categories",i="/payment-options",c="/delivery-methods",s="/login",m="/orders",u="/customers",f="/coupons",d="/home-cards",h="/settings",p="/staff-members",E="/site-settings",b="$",g="running",y="expired"},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(49),l=n(33),r=n(0),o=n.n(r),i=n(34),c=n.n(i),s=n(25);function m(){const e=Object(l.a)(["\n  mutation LoginUser(\n    $phone: String!\n    $password: String!\n  ) {\n    login(\n      phone: $phone\n      password: $password\n    ) {\n      user {\n        name\n        phones {\n          number\n        }\n      }\n      access_token\n    }\n  }\n"]);return m=function(){return e},e}const u=c()(m()),f=o.a.createContext({});t.b=e=>{const t=Object(s.a)(u,{onCompleted:e=>{c(!0),localStorage.setItem("admin_access_token","".concat(e.login.access_token))},onError:e=>{c(!1),console.error("Error creating a post",e)}}),n=Object(a.a)(t,1)[0],l=o.a.useState(!!localStorage.getItem("admin_access_token")),r=Object(a.a)(l,2),i=r[0],c=r[1];return o.a.createElement(f.Provider,{value:{isAuthenticated:i,authenticate:function({phone:e,password:t},a){let l=e.toString(),r=t.toString();n({variables:{phone:l,password:r}}),a()},signout:function(e){c(!1),localStorage.removeItem("admin_access_token")}}},o.a.createElement(o.a.Fragment,null,e.children))}},75:function(e,t,n){e.exports=n(89)},85:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(61),o=n.n(r),i=n(51),c=n(71),s=n(23),m=n(95),u=n(11),f=n(48),d=n(93),h=n(94);const p=Object(d.a)(Object(f.a)(Object(f.a)({},h.a),{},{primaryFontFamily:"'Lato', sans-serif",primary:"#00C58D",primary700:"#00bd87"}),{name:"custom-typography",typography:{primaryFontFamily:"'Lato', sans-serif",font11:{fontFamily:"'Lato', sans-serif",fontSize:"11px",fontWeight:400,lineHeight:1.5},fontBold11:{fontFamily:"'Lato', sans-serif",fontSize:"11px",fontWeight:700,lineHeight:1.5},font12:{fontFamily:"'Lato', sans-serif",fontSize:"12px",fontWeight:400,lineHeight:1.5},fontBold12:{fontFamily:"'Lato', sans-serif",fontSize:"12px",fontWeight:700,lineHeight:1.5},font13:{fontFamily:"'Lato', sans-serif",fontSize:"13px",fontWeight:400,lineHeight:1.5},fontBold13:{fontFamily:"'Lato', sans-serif",fontSize:"13px",fontWeight:700,lineHeight:1.5},font14:{fontFamily:"'Lato', sans-serif",fontSize:"14px",fontWeight:400,lineHeight:1.5},fontBold14:{fontFamily:"'Lato', sans-serif",fontSize:"14px",fontWeight:700,lineHeight:1.5},font16:{fontFamily:"'Lato', sans-serif",fontSize:"16px",fontWeight:400,lineHeight:1.5},fontBold16:{fontFamily:"'Lato', sans-serif",fontSize:"16px",fontWeight:700,lineHeight:1.5},font18:{fontFamily:"'Lato', sans-serif",fontSize:"18px",fontWeight:400,lineHeight:1.5},fontBold18:{fontFamily:"'Lato', sans-serif",fontSize:"18px",fontWeight:700,lineHeight:1.5},font21:{fontFamily:"'Lato', sans-serif",fontSize:"21px",fontWeight:400,lineHeight:1.5},fontBold21:{fontFamily:"'Lato', sans-serif",fontSize:"21px",fontWeight:700,lineHeight:1.5},font24:{fontFamily:"'Lato', sans-serif",fontSize:"24px",fontWeight:400,lineHeight:1.5},fontBold24:{fontFamily:"'Lato', sans-serif",fontSize:"24px",fontWeight:700,lineHeight:1.5},font30:{fontFamily:"'Lato', sans-serif",fontSize:"30px",fontWeight:400,lineHeight:1.5},fontBold30:{fontFamily:"'Lato', sans-serif",fontSize:"30px",fontWeight:700,lineHeight:1.5},font350:{fontSize:"14px",fontWeight:700,lineHeight:"24px"},font450:{fontSize:"15px",fontWeight:700,lineHeight:"22px"}},sizing:{scale25:"25px",scale30:"30px"},borders:{borderE6:{borderColor:"#E6E6E6",borderStyle:"solid",borderWidth:"1px"},borderEA:{borderColor:"#eaeaea",borderStyle:"solid",borderWidth:"1px"}},colors:{primary:"#00C58D",primary700:"#00bd87",primary400:"#03D3B5",red400:"#FC5C63",red700:"#FC6687",greyE6:"#E6E6E6",textDark:"#161F6A",textNormal:"#666D92",borderE6:"#E6E6E6",borderF1:"#f1f1f1",backgroundF7:"#f7f7f7",lightGreen:"#00d4b5",warning:"#f4c243",blue400:"#2067fa",purple400:"#8A6AFC"},buttonBorderRadius:"3px"});var E=n(58),b=n(33),g=n(6),y=n(12),S=n(54),x=n(72);const z=Object(x.b)("div",()=>({display:"flex",justifyContent:"center",alignItems:"center",height:"500px",width:"100%",padding:"5%",position:"relative"})),k=Object(x.b)("div",e=>({display:"inline-block",background:e.$theme.colors.primary,height:"5px",width:"5px",opacity:0,borderRadius:"50%",transform:"translateX(-300px)",margin:"0 2px 0 2px",animationDuration:"4s",animationIterationCount:"infinite",animationName:{from:{transform:"translateX(0px)",opacity:"0.8"},to:{transform:"translateX(300px)",opacity:"0"}},animationDelay:e.delay&&e.delay})),j=e=>l.a.createElement(k,{delay:e}),O=Object(a.memo)(e=>{const t=e.color,n=void 0===t?"#4092de":t;return l.a.createElement(z,{color:n},l.a.createElement(j,{delay:".8s"}),l.a.createElement(j,{delay:".7s"}),l.a.createElement(j,{delay:".6s"}),l.a.createElement(j,{delay:".5s"}),l.a.createElement(j,{delay:".4s"}),l.a.createElement(j,{delay:".3s"}),l.a.createElement(j,{delay:".2s"}),l.a.createElement(j,{delay:".1s"}))});var F=n(52),W=n(25);function w(){const e=Object(b.a)(["\n  query AuthCheck {\n    userAuthCheck {\n      status\n      message\n    }\n  }\n"]);return w=function(){return e},e}const L=Object(a.lazy)(()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(24)]).then(n.bind(null,426))),H=Object(a.lazy)(()=>Promise.all([n.e(0),n.e(1),n.e(3),n.e(19),n.e(12)]).then(n.bind(null,415))),v=Object(a.lazy)(()=>Promise.all([n.e(0),n.e(3),n.e(5),n.e(8),n.e(11)]).then(n.bind(null,412))),C=Object(a.lazy)(()=>Promise.all([n.e(15),n.e(16)]).then(n.bind(null,413))),P=Object(a.lazy)(()=>Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(20)]).then(n.bind(null,418))),B=Object(a.lazy)(()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(23)]).then(n.bind(null,419))),_=Object(a.lazy)(()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(28)]).then(n.bind(null,420))),A=Object(a.lazy)(()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(22)]).then(n.bind(null,421))),I=Object(a.lazy)(()=>Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(26)]).then(n.bind(null,422))),D=Object(a.lazy)(()=>Promise.all([n.e(4),n.e(14)]).then(n.bind(null,427))),$=Object(a.lazy)(()=>Promise.all([n.e(0),n.e(5),n.e(17)]).then(n.bind(null,411))),q=Object(a.lazy)(()=>Promise.all([n.e(0),n.e(1),n.e(3),n.e(13)]).then(n.bind(null,428))),X=Object(a.lazy)(()=>Promise.all([n.e(0),n.e(1),n.e(3),n.e(18)]).then(n.bind(null,429))),J=Object(a.lazy)(()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(27)]).then(n.bind(null,423))),N=Object(a.lazy)(()=>Promise.all([n.e(0),n.e(10),n.e(21)]).then(n.bind(null,430))),R=Object(a.lazy)(()=>n.e(25).then(n.bind(null,431))),G=Object(F.a)(w());function U(e){let t=e.children,n=Object(E.a)(e,["children"]);const r=Object(W.b)(G),o=(r.data,r.error,r.refetch),i=Object(a.useContext)(S.a),c=i.isAuthenticated,s=i.signout;return(e=>{const t=localStorage.getItem("admin_access_token");!!t&&e(t)})((function(e){e&&o().then(e=>{e.data&&!e.data.userAuthCheck.status&&s()})})),l.a.createElement(g.b,Object.assign({},n,{render:({location:e})=>c?t:l.a.createElement(g.a,{to:{pathname:"/login",state:{from:e}}})}))}var K=()=>l.a.createElement(S.b,null,l.a.createElement(a.Suspense,{fallback:l.a.createElement(O,null)},l.a.createElement(g.d,null,l.a.createElement(U,{exact:!0,path:y.e},l.a.createElement(v,null,l.a.createElement(a.Suspense,{fallback:l.a.createElement(O,null)},l.a.createElement(C,null)))),l.a.createElement(U,{path:y.q},l.a.createElement(v,null,l.a.createElement(a.Suspense,{fallback:l.a.createElement(O,null)},l.a.createElement(L,null)))),l.a.createElement(U,{path:y.l},l.a.createElement(v,null,l.a.createElement(a.Suspense,{fallback:l.a.createElement(O,null)},l.a.createElement(H,null)))),l.a.createElement(U,{path:y.a},l.a.createElement(v,null,l.a.createElement(a.Suspense,{fallback:l.a.createElement(O,null)},l.a.createElement(P,null)))),l.a.createElement(U,{path:y.k},l.a.createElement(v,null,l.a.createElement(a.Suspense,{fallback:l.a.createElement(O,null)},l.a.createElement(B,null)))),l.a.createElement(U,{path:y.f},l.a.createElement(v,null,l.a.createElement(a.Suspense,{fallback:l.a.createElement(O,null)},l.a.createElement(_,null)))),l.a.createElement(U,{path:y.j},l.a.createElement(v,null,l.a.createElement(a.Suspense,{fallback:l.a.createElement(O,null)},l.a.createElement(I,null)))),l.a.createElement(U,{path:y.d},l.a.createElement(v,null,l.a.createElement(a.Suspense,{fallback:l.a.createElement(O,null)},l.a.createElement(X,null)))),l.a.createElement(U,{path:y.b},l.a.createElement(v,null,l.a.createElement(a.Suspense,{fallback:l.a.createElement(O,null)},l.a.createElement(J,null)))),l.a.createElement(U,{path:y.h},l.a.createElement(v,null,l.a.createElement(a.Suspense,{fallback:l.a.createElement(O,null)},l.a.createElement(A,null)))),l.a.createElement(U,{path:y.n},l.a.createElement(v,null,l.a.createElement(a.Suspense,{fallback:l.a.createElement(O,null)},l.a.createElement(D,null)))),l.a.createElement(U,{path:y.p},l.a.createElement(v,null,l.a.createElement(a.Suspense,{fallback:l.a.createElement(O,null)},l.a.createElement(q,null)))),l.a.createElement(U,{path:y.o},l.a.createElement(v,null,l.a.createElement(a.Suspense,{fallback:l.a.createElement(O,null)},l.a.createElement($,null)))),l.a.createElement(g.b,{path:y.i},l.a.createElement(N,null)),l.a.createElement(g.b,{component:R})))),M=n(36),Q=n(9),T=n(19),V=n(28);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(85);const Y=new M.a({uri:"http://api.mahdifashion.com/api"}),Z=new Q.a((e,t)=>{const n=localStorage.getItem("admin_access_token");return e.setContext({headers:{"x-access-token":n||""}}),t(e)}),ee=new T.a({link:Z.concat(Y),cache:new V.a});function te(){const e=new c.a;return l.a.createElement(u.a,{client:ee},l.a.createElement(s.a,{value:e},l.a.createElement(m.a,{theme:p},l.a.createElement(i.a,null,l.a.createElement(K,null)))))}o.a.render(l.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[75,7,9]]]);
//# sourceMappingURL=main.3ac82c4f.chunk.js.map