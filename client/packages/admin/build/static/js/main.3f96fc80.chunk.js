(this["webpackJsonp@pick-bazar/admin"]=this["webpackJsonp@pick-bazar/admin"]||[]).push([[4],{17:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"h",(function(){return l})),n.d(t,"a",(function(){return o})),n.d(t,"f",(function(){return r})),n.d(t,"g",(function(){return i})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"i",(function(){return m})),n.d(t,"k",(function(){return f})),n.d(t,"j",(function(){return u})),n.d(t,"c",(function(){return d}));const a="/",l="/products",o="/category",r="/login",i="/orders",c="/customers",s="/coupons",m="/settings",f="/staff-members",u="/site-settings",d="$"},50:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(46),l=n(55),o=n(0),r=n.n(o),i=n(31),c=n.n(i),s=n(47);function m(){const e=Object(l.a)(["\n  mutation LoginUser(\n    $phone: String!\n    $password: String!\n  ) {\n    login(\n      phone: $phone\n      password: $password\n    ) {\n      user {\n        name\n        phones {\n          number\n        }\n      }\n      access_token\n    }\n  }\n"]);return m=function(){return e},e}const f=c()(m()),u=r.a.createContext({});t.b=e=>{const t=Object(s.a)(f,{onCompleted:e=>{c(!0),localStorage.setItem("admin_access_token","".concat(e.login.access_token))},onError:e=>{c(!1),console.error("Error creating a post",e)}}),n=Object(a.a)(t,1)[0],l=r.a.useState(!!localStorage.getItem("admin_access_token")),o=Object(a.a)(l,2),i=o[0],c=o[1];return r.a.createElement(u.Provider,{value:{isAuthenticated:i,authenticate:function({phone:e,password:t},a){let l=e.toString(),o=t.toString();n({variables:{phone:l,password:o}}),a()},signout:function(e){c(!1),localStorage.removeItem("admin_access_token")}}},r.a.createElement(r.a.Fragment,null,e.children))}},73:function(e,t,n){e.exports=n(87)},83:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(60),r=n.n(o),i=n(48),c=n(68),s=n(23),m=n(93),f=n(11),u=n(44),d=n(91),p=n(92);const h=Object(d.a)(Object(u.a)(Object(u.a)({},p.a),{},{primaryFontFamily:"'Lato', sans-serif",primary:"#00C58D",primary700:"#00bd87"}),{name:"custom-typography",typography:{primaryFontFamily:"'Lato', sans-serif",font11:{fontFamily:"'Lato', sans-serif",fontSize:"11px",fontWeight:400,lineHeight:1.5},fontBold11:{fontFamily:"'Lato', sans-serif",fontSize:"11px",fontWeight:700,lineHeight:1.5},font12:{fontFamily:"'Lato', sans-serif",fontSize:"12px",fontWeight:400,lineHeight:1.5},fontBold12:{fontFamily:"'Lato', sans-serif",fontSize:"12px",fontWeight:700,lineHeight:1.5},font13:{fontFamily:"'Lato', sans-serif",fontSize:"13px",fontWeight:400,lineHeight:1.5},fontBold13:{fontFamily:"'Lato', sans-serif",fontSize:"13px",fontWeight:700,lineHeight:1.5},font14:{fontFamily:"'Lato', sans-serif",fontSize:"14px",fontWeight:400,lineHeight:1.5},fontBold14:{fontFamily:"'Lato', sans-serif",fontSize:"14px",fontWeight:700,lineHeight:1.5},font16:{fontFamily:"'Lato', sans-serif",fontSize:"16px",fontWeight:400,lineHeight:1.5},fontBold16:{fontFamily:"'Lato', sans-serif",fontSize:"16px",fontWeight:700,lineHeight:1.5},font18:{fontFamily:"'Lato', sans-serif",fontSize:"18px",fontWeight:400,lineHeight:1.5},fontBold18:{fontFamily:"'Lato', sans-serif",fontSize:"18px",fontWeight:700,lineHeight:1.5},font21:{fontFamily:"'Lato', sans-serif",fontSize:"21px",fontWeight:400,lineHeight:1.5},fontBold21:{fontFamily:"'Lato', sans-serif",fontSize:"21px",fontWeight:700,lineHeight:1.5},font24:{fontFamily:"'Lato', sans-serif",fontSize:"24px",fontWeight:400,lineHeight:1.5},fontBold24:{fontFamily:"'Lato', sans-serif",fontSize:"24px",fontWeight:700,lineHeight:1.5},font30:{fontFamily:"'Lato', sans-serif",fontSize:"30px",fontWeight:400,lineHeight:1.5},fontBold30:{fontFamily:"'Lato', sans-serif",fontSize:"30px",fontWeight:700,lineHeight:1.5},font350:{fontSize:"14px",fontWeight:700,lineHeight:"24px"},font450:{fontSize:"15px",fontWeight:700,lineHeight:"22px"}},sizing:{scale25:"25px",scale30:"30px"},borders:{borderE6:{borderColor:"#E6E6E6",borderStyle:"solid",borderWidth:"1px"},borderEA:{borderColor:"#eaeaea",borderStyle:"solid",borderWidth:"1px"}},colors:{primary:"#00C58D",primary700:"#00bd87",primary400:"#03D3B5",red400:"#FC5C63",red700:"#FC6687",greyE6:"#E6E6E6",textDark:"#161F6A",textNormal:"#666D92",borderE6:"#E6E6E6",borderF1:"#f1f1f1",backgroundF7:"#f7f7f7",lightGreen:"#00d4b5",warning:"#f4c243",blue400:"#2067fa",purple400:"#8A6AFC"},buttonBorderRadius:"3px"});var E=n(54),b=n(6),g=n(17),y=n(50),x=n(70);const S=Object(x.b)("div",()=>({display:"flex",justifyContent:"center",alignItems:"center",height:"500px",width:"100%",padding:"5%",position:"relative"})),z=Object(x.b)("div",e=>({display:"inline-block",background:e.$theme.colors.primary,height:"5px",width:"5px",opacity:0,borderRadius:"50%",transform:"translateX(-300px)",margin:"0 2px 0 2px",animationDuration:"4s",animationIterationCount:"infinite",animationName:{from:{transform:"translateX(0px)",opacity:"0.8"},to:{transform:"translateX(300px)",opacity:"0"}},animationDelay:e.delay&&e.delay})),F=e=>l.a.createElement(z,{delay:e}),j=Object(a.memo)(e=>{const t=e.color,n=void 0===t?"#4092de":t;return l.a.createElement(S,{color:n},l.a.createElement(F,{delay:".8s"}),l.a.createElement(F,{delay:".7s"}),l.a.createElement(F,{delay:".6s"}),l.a.createElement(F,{delay:".5s"}),l.a.createElement(F,{delay:".4s"}),l.a.createElement(F,{delay:".3s"}),l.a.createElement(F,{delay:".2s"}),l.a.createElement(F,{delay:".1s"}))}),k=Object(a.lazy)(()=>Promise.all([n.e(0),n.e(1),n.e(18),n.e(14)]).then(n.bind(null,288))),O=Object(a.lazy)(()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(8),n.e(9)]).then(n.bind(null,285))),W=Object(a.lazy)(()=>Promise.all([n.e(12),n.e(23)]).then(n.bind(null,284))),L=Object(a.lazy)(()=>Promise.all([n.e(0),n.e(1),n.e(24),n.e(3),n.e(19)]).then(n.bind(null,291))),H=Object(a.lazy)(()=>Promise.all([n.e(0),n.e(1),n.e(22),n.e(17)]).then(n.bind(null,292))),w=Object(a.lazy)(()=>Promise.all([n.e(3),n.e(15)]).then(n.bind(null,293))),v=Object(a.lazy)(()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(16)]).then(n.bind(null,283))),B=Object(a.lazy)(()=>Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,294))),C=Object(a.lazy)(()=>Promise.all([n.e(0),n.e(1),n.e(13)]).then(n.bind(null,295))),P=Object(a.lazy)(()=>Promise.all([n.e(0),n.e(1),n.e(21),n.e(10)]).then(n.bind(null,296))),_=Object(a.lazy)(()=>Promise.all([n.e(0),n.e(7),n.e(20)]).then(n.bind(null,297))),D=Object(a.lazy)(()=>n.e(25).then(n.bind(null,298)));function $(e){let t=e.children,n=Object(E.a)(e,["children"]);const o=Object(a.useContext)(y.a).isAuthenticated;return l.a.createElement(b.b,Object.assign({},n,{render:({location:e})=>o?t:l.a.createElement(b.a,{to:{pathname:"/login",state:{from:e}}})}))}var A=()=>l.a.createElement(y.b,null,l.a.createElement(a.Suspense,{fallback:l.a.createElement(j,null)},l.a.createElement(b.d,null,l.a.createElement($,{exact:!0,path:g.e},l.a.createElement(O,null,l.a.createElement(a.Suspense,{fallback:l.a.createElement(j,null)},l.a.createElement(W,null)))),l.a.createElement($,{path:g.h},l.a.createElement(O,null,l.a.createElement(a.Suspense,{fallback:l.a.createElement(j,null)},l.a.createElement(k,null)))),l.a.createElement($,{path:g.a},l.a.createElement(O,null,l.a.createElement(a.Suspense,{fallback:l.a.createElement(j,null)},l.a.createElement(L,null)))),l.a.createElement($,{path:g.g},l.a.createElement(O,null,l.a.createElement(a.Suspense,{fallback:l.a.createElement(j,null)},l.a.createElement(H,null)))),l.a.createElement($,{path:g.d},l.a.createElement(O,null,l.a.createElement(a.Suspense,{fallback:l.a.createElement(j,null)},l.a.createElement(C,null)))),l.a.createElement($,{path:g.b},l.a.createElement(O,null,l.a.createElement(a.Suspense,{fallback:l.a.createElement(j,null)},l.a.createElement(P,null)))),l.a.createElement($,{path:g.i},l.a.createElement(O,null,l.a.createElement(a.Suspense,{fallback:l.a.createElement(j,null)},l.a.createElement(w,null)))),l.a.createElement($,{path:g.k},l.a.createElement(O,null,l.a.createElement(a.Suspense,{fallback:l.a.createElement(j,null)},l.a.createElement(B,null)))),l.a.createElement($,{path:g.j},l.a.createElement(O,null,l.a.createElement(a.Suspense,{fallback:l.a.createElement(j,null)},l.a.createElement(v,null)))),l.a.createElement(b.b,{path:g.f},l.a.createElement(_,null)),l.a.createElement(b.b,{component:D})))),I=n(69);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(83);const X=new I.a({uri:"http://localhost:7000/api"});function J(){const e=new c.a;return l.a.createElement(f.a,{client:X},l.a.createElement(s.a,{value:e},l.a.createElement(m.a,{theme:h},l.a.createElement(i.a,null,l.a.createElement(A,null)))))}r.a.render(l.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[73,5,6]]]);
//# sourceMappingURL=main.3f96fc80.chunk.js.map