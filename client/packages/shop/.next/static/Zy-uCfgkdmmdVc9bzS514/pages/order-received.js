(window.webpackJsonp=window.webpackJsonp||[]).push([[27,45],{DSo7:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},H8eV:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("ERkP"),o=n.n(r),a=n("ysqo"),i=n.n(a),c=o.a.createElement,l=function(e){var t=e.title,n=e.description,r=e.canonical,o=e.css,a=e.js,l=e.image;return c(i.a,null,c("title",null,t),c("meta",{name:"description",content:n}),c("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"}),c("meta",{property:"og:type",content:"website"}),c("meta",{name:"og:title",property:"og:title",content:t}),c("meta",{name:"og:description",property:"og:description",content:n}),c("meta",{property:"og:site_name",content:"Proper Noun"}),c("meta",{property:"og:url",content:"".concat(r)}),c("meta",{name:"twitter:card",content:"summary"}),c("meta",{name:"twitter:title",content:t}),c("meta",{name:"twitter:description",content:n}),c("meta",{name:"twitter:site",content:"@propernounco"}),c("meta",{name:"twitter:creator",content:"@propernounco"}),o&&c("link",{rel:"stylesheet",href:"".concat(o)}),c("meta",l?{property:"og:image",content:"".concat(l)}:{property:"og:image",content:"https://www.propernoun.co/static/images/proper-noun-social.png"}),l&&c("meta",{name:"twitter:image",content:"".concat(l)}),r&&c("link",{rel:"canonical",href:"".concat(r)}),a&&c("script",{type:"text/javascript",src:"".concat(a)}))}},J9Yr:function(e,t,n){"use strict";var r=n("zQIG"),o=n("N7I1"),a=n("8mBC"),i=n("I/kN"),c=n("cMav"),l=n("pSQP"),s=n("iN+R");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("ERkP"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(s(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(c){i(s,c);var l=u(s);function s(e){var a;return r(this,s),a=l.call(this,e),f&&(t.add(o(a)),n(o(a))),a}return a(s,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(s,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(d.Component))}},JunZ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/order-received",function(){return n("tMoA")}])},KeDb:function(e,t,n){"use strict";var r=n("zQIG"),o=n("8mBC"),a=n("I/kN"),i=n("cMav"),c=n("pSQP");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}var s=n("Y3ZS"),u=n("pONU");t.__esModule=!0,t.default=void 0;var d,f=u(n("ERkP")),p=n("cRaD"),m=n("fvxO"),h=s(n("7xIC")),v=n("L9lV");function g(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var y=new Map,b=window.IntersectionObserver,x={};function w(){return d||(b?d=new b((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var _=function(e){a(n,e);var t=l(n);function n(e){var o;return r(this,n),(o=t.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var i=e(o,a);return t=o,n=a,r=i,i}}((function(e,t){return{href:(0,v.addBasePath)(g(e)),as:t?(0,v.addBasePath)(g(t)):t}})),o.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=o.formatUrls(o.props.href,o.props.as),i=a.href,c=a.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var l=window.location.pathname;i=(0,p.resolve)(l,i),c=c?(0,p.resolve)(l,c):i,e.preventDefault();var s=o.props.scroll;null==s&&(s=c.indexOf("#")<0),h.default[o.props.replace?"replace":"push"](i,c,{shallow:o.props.shallow}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,p.resolve)(e,n);return[o,r?(0,p.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),x[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();h.default.prefetch(t[0],t[1],e).catch((function(e){0})),x[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=f.default.createElement("a",null,t));var a=f.Children.only(t),i={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),f.default.cloneElement(a,i)}}]),n}(f.Component);t.default=_},TZT2:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("ERkP"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},bOkD:function(e,t,n){var r=n("cHE3");e.exports=function(e){if(Array.isArray(e))return r(e)}},dq4L:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("ERkP"))&&r.__esModule?r:{default:r},a=n("TZT2");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}},"iN+R":function(e,t,n){var r=n("bOkD"),o=n("DSo7"),a=n("D7XE"),i=n("uYlf");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},jvDv:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return m})),n.d(t,"a",(function(){return h}));var r=n("Km8e"),o=n.n(r),a=function(e,t){var n=o()({},e,t);for(var r in e){var a;e[r]&&"object"===typeof t[r]&&o()(n,((a={})[r]=o()(e[r],t[r]),a))}return n},i={breakpoints:[40,52,64].map((function(e){return e+"em"}))},c=function(e){return"@media screen and (min-width: "+e+")"},l=function(e,t){return s(t,e,e)},s=function(e,t,n,r,o){for(t=t&&t.split?t.split("."):[t],r=0;r<t.length;r++)e=e?e[t[r]]:o;return e===o?n:e},u=function e(t){var n={},r=function(e){var r={},l=!1,u=e.theme&&e.theme.disableStyledSystemCache;for(var p in e)if(t[p]){var m=t[p],h=e[p],v=s(e.theme,m.scale,m.defaults);if("object"!==typeof h)o()(r,m(h,v,e));else{if(n.breakpoints=!u&&n.breakpoints||s(e.theme,"breakpoints",i.breakpoints),Array.isArray(h)){n.media=!u&&n.media||[null].concat(n.breakpoints.map(c)),r=a(r,d(n.media,m,v,h,e));continue}null!==h&&(r=a(r,f(n.breakpoints,m,v,h,e)),l=!0)}}return l&&(r=function(e){var t={};return Object.keys(e).sort((function(e,t){return e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"})})).forEach((function(n){t[n]=e[n]})),t}(r)),r};r.config=t,r.propNames=Object.keys(t),r.cache=n;var l=Object.keys(t).filter((function(e){return"config"!==e}));return l.length>1&&l.forEach((function(n){var o;r[n]=e(((o={})[n]=t[n],o))})),r},d=function(e,t,n,r,a){var i={};return r.slice(0,e.length).forEach((function(r,c){var l,s=e[c],u=t(r,n,a);s?o()(i,((l={})[s]=o()({},i[s],u),l)):o()(i,u)})),i},f=function(e,t,n,r,a){var i={};for(var l in r){var s=e[l],u=t(r[l],n,a);if(s){var d,f=c(s);o()(i,((d={})[f]=o()({},i[f],u),d))}else o()(i,u)}return i},p=function(e){var t=e.properties,n=e.property,r=e.scale,o=e.transform,a=void 0===o?l:o,i=e.defaultScale;t=t||[n];var c=function(e,n,r){var o={},i=a(e,n,r);if(null!==i)return t.forEach((function(e){o[e]=i})),o};return c.scale=r,c.defaults=i,c},m=function(e){void 0===e&&(e={});var t={};return Object.keys(e).forEach((function(n){var r=e[n];t[n]=!0!==r?"function"!==typeof r?p(r):r:p({property:n,scale:n})})),u(t)},h=function(){for(var e={},t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];n.forEach((function(t){t&&t.config&&o()(e,t.config)}));var a=u(e);return a}},jvFD:function(e,t,n){e.exports=n("KeDb")},"op+c":function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("ERkP"))&&r.__esModule?r:{default:r}).default.createContext(null);t.HeadManagerContext=o},pFUA:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("KD1n"),o=n("H5qd");function a(){var e=Object(r.a)(["\n  query GetUserOrders {\n    getUserOrders {\n      id\n      order_code\n      customer_id\n      contact_number\n      datetime\n      delivery_address\n      payment_method\n      payment_status\n      status\n      discount_amount\n      sub_total\n      total\n      delivery_method {\n        name\n        details\n      }\n      order_tracking {\n        status\n        ordering\n        is_current\n        step_competed\n      }\n    }\n  }\n"]);return a=function(){return e},e}var i=n.n(o)()(a())},quMH:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n("ERkP"),o=n.n(r),a=n("j/s1"),i=o.a.createElement;function c(e){var t=e.message;return i(l,null,t)}var l=a.e.aside.withConfig({displayName:"error-message__StyledAside",componentId:"sc-5jhwvi-0"})({display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",padding:"1.5rem",fontSize:"22px",color:"000",backgroundColor:"#fff"})},tMoA:function(e,t,n){"use strict";n.r(t);var r=n("ERkP"),o=n.n(r),a=n("H8eV"),i=n("jvFD"),c=n.n(i),l=n("7xIC"),s=n("1U1M"),u=n("pFUA"),d=n("quMH"),f=n("j/s1"),p=n("tZdC"),m=f.e.div.withConfig({displayName:"order-receivedstyle__OrderReceivedWrapper",componentId:"co65po-0"})(["background-color:",";position:relative;padding:100px 0 60px 0;min-height:100vh;"],Object(p.a)("colors.gray.200","#f7f7f7")),h=f.e.div.withConfig({displayName:"order-receivedstyle__OrderReceivedContainer",componentId:"co65po-1"})(["background-color:",";border:1px solid ",";padding:60px;border-radius:",";overflow:hidden;position:relative;width:calc(100% - 30px);margin-left:auto;margin-right:auto;@media (min-width:991px){width:870px;}@media (max-width:990px){padding:50px 45px;}@media (max-width:767px){padding:50px 25px;}.home-btn{display:inline-flex;align-items:center;justify-content:center;font-family:",";font-size:","px;font-weight:",";color:",";padding:5px 15px;height:36px;border:1px solid ",";border-radius:",";position:absolute;top:15px;right:15px;transition:0.15s ease-in-out;@media (max-width:767px){font-size:","px;height:34px;padding:5px 12px;}&:hover{background-color:",";border-color:",";color:",";}}.print-btn{display:inline-flex;align-items:center;justify-content:center;font-family:",";font-size:","px;font-weight:",";color:",";padding:5px 15px;height:36px;border:1px solid ",";border-radius:",";position:absolute;top:15px;right:165px;cursor:pointer;transition:0.15s ease-in-out;@media (max-width:767px){font-size:","px;height:34px;padding:5px 12px;}&:hover{background-color:",";border-color:",";color:",";}}@media print{.print-btn,.home-btn{display:none;}}"],Object(p.a)("colors.white","#ffffff"),Object(p.a)("colors.gray.500","#f1f1f1"),Object(p.a)("radii.base","6px"),Object(p.a)("fonts.body","Lato"),Object(p.a)("fontSizes.base","15"),Object(p.a)("fontWeights.regular","400"),Object(p.a)("colors.text.regular","#77798c"),Object(p.a)("colors.gray.700","#e6e6e6"),Object(p.a)("radii.base","6px"),Object(p.a)("fontSizes.sm","13"),Object(p.a)("colors.primary.regular","#009e7f"),Object(p.a)("colors.primary.regular","#009e7f"),Object(p.a)("colors.white","#ffffff"),Object(p.a)("fonts.body","Lato"),Object(p.a)("fontSizes.base","15"),Object(p.a)("fontWeights.regular","400"),Object(p.a)("colors.text.regular","#77798c"),Object(p.a)("colors.gray.700","#e6e6e6"),Object(p.a)("radii.base","6px"),Object(p.a)("fontSizes.sm","13"),Object(p.a)("colors.primary.regular","#009e7f"),Object(p.a)("colors.primary.regular","#009e7f"),Object(p.a)("colors.white","#ffffff")),v=f.e.div.withConfig({displayName:"order-receivedstyle__OrderInfo",componentId:"co65po-2"})(["margin-bottom:60px;@media (max-width:767px){margin-bottom:30px;}"]),g=f.e.div.withConfig({displayName:"order-receivedstyle__OrderDetails",componentId:"co65po-3"})(["margin-bottom:60px;@media (max-width:767px){margin-bottom:50px;}"]),y=f.e.div.withConfig({displayName:"order-receivedstyle__TotalAmount",componentId:"co65po-4"})([""]),b=f.e.h2.withConfig({displayName:"order-receivedstyle__BlockTitle",componentId:"co65po-5"})(["font-family:",";font-size:","px;font-weight:",";color:",";line-height:1;margin-bottom:32px;@media (max-width:767px){font-size:calc(","px + 1px);margin-bottom:25px;}"],Object(p.a)("fonts.heading","sans-serif"),Object(p.a)("fontSizes.lg","21"),Object(p.a)("fontWeights.bold","700"),Object(p.a)("colors.text.bold","#0D1136"),Object(p.a)("fontSizes.base","15")),x=f.e.p.withConfig({displayName:"order-receivedstyle__Text",componentId:"co65po-6"})(["font-family:",";font-size:","px;color:",";font-weight:",";line-height:1.2;display:block;margin:0;&:last-child{color:",";}"],Object(p.a)("fonts.body","Lato"),Object(p.a)("fontSizes.base","15"),Object(p.a)("colors.text.bold","#0D1136"),(function(e){return e.bold?Object(p.a)("fontWeights.bold","700"):Object(p.a)("fontWeights.regular","400")}),Object(p.a)("colors.text.medium","#424561")),w=f.e.div.withConfig({displayName:"order-receivedstyle__InfoBlockWrapper",componentId:"co65po-7"})(["display:flex;align-items:center;justify-content:space-between;margin-top:30px;@media (max-width:767px){flex-wrap:wrap;}"]),_=f.e.div.withConfig({displayName:"order-receivedstyle__InfoBlock",componentId:"co65po-8"})(["flex-grow:1;padding:0 15px;border-left:1px solid ",";@media (max-width:767px){max-width:100%;flex:0 0 100%;margin-bottom:20px;padding:0;border:0;}&:first-child{padding-left:0;border-left:0;}&:last-child{padding-right:0;}.title{margin-bottom:10px;}"],Object(p.a)("colors.gray.500","#f1f1f1")),O=f.e.div.withConfig({displayName:"order-receivedstyle__ListItem",componentId:"co65po-9"})(["display:flex;margin-bottom:20px;&:last-child{margin-bottom:0;}"]),k=f.e.div.withConfig({displayName:"order-receivedstyle__ListTitle",componentId:"co65po-10"})(["flex-basis:210px;max-width:210px;flex-shrink:0;position:relative;@media (max-width:767px){flex-basis:105px;max-width:105px;}&:after{content:':';position:absolute;top:-1px;right:-2px;line-height:1;}"]),j=f.e.div.withConfig({displayName:"order-receivedstyle__ListDes",componentId:"co65po-11"})(["padding-left:90px;@media (max-width:767px){padding-left:20px;}"]),C=m,M=n("2SGB"),S=o.a.createElement,E=function(e){var t=Object(l.useRouter)(),n=Object(s.b)(u.a),r=n.data,o=n.error;if(n.loading)return S(d.default,{message:"Loading..."});if(o)return S(d.default,{message:o.message});var a=r.getUserOrders.map((function(e){return e.id})).indexOf(t.query.itemId),i=r.getUserOrders[a];return S(C,null,S(h,null,S(c.a,{href:"/"},S("a",{className:"home-btn"},S(M.a,{id:"backHomeBtn",defaultMessage:"Back to Home"}))),S("span",{onClick:function(){window.print()},className:"print-btn"},"Print Invoice"),S(v,null,S(b,null,S(M.a,{id:"orderReceivedText",defaultMessage:"Order"})),S(w,null,S(_,null,S(x,{bold:!0,className:"title"},S(M.a,{id:"orderNumberText",defaultMessage:"Order Number"})),S(x,null,i.order_code)),S(_,null,S(x,{bold:!0,className:"title"},S(M.a,{id:"orderDateText",defaultMessage:"Date"})),S(x,null,i.datetime.split("2020").shift())),S(_,null,S(x,{bold:!0,className:"title"},S(M.a,{id:"totalText",defaultMessage:"Total"})),S(x,null,i.total)),S(_,null,S(x,{bold:!0,className:"title"},S(M.a,{id:"paymenMethodText",defaultMessage:"Payment Method"})),S(x,null,S(M.a,{id:"paymentMethodName",defaultMessage:i.payment_method}))))),S(g,null,S(b,null,S(M.a,{id:"orderDetailsText",defaultMessage:"Order Details"})),S(O,null,S(k,null,S(x,{bold:!0},S(M.a,{id:"totalItemText",defaultMessage:"Total Item"}))),S(j,null,S(x,null,"6 Items"))),S(O,null,S(k,null,S(x,{bold:!0},S(M.a,{id:"orderTimeText",defaultMessage:"Order Method"}))),S(j,null,S(x,null,i.delivery_method.details))),S(O,null,S(k,null,S(x,{bold:!0},S(M.a,{id:"deliveryLocationText",defaultMessage:"Delivery Location"}))),S(j,null,S(x,null,i.delivery_address)))),S(y,null,S(b,null,S(M.a,{id:"totalAmountText",defaultMessage:"Total Amount"})),S(O,null,S(k,null,S(x,{bold:!0},S(M.a,{id:"subTotal",defaultMessage:"Sub total"}))),S(j,null,S(x,null,i.sub_total))),S(O,null,S(k,null,S(x,{bold:!0},S(M.a,{id:"paymenMethodText",defaultMessage:"Payment Method"}))),S(j,null,S(x,null,i.payment_method))),S(O,null,S(k,null,S(x,{bold:!0},S(M.a,{id:"totalText",defaultMessage:"Total"}))),S(j,null,S(x,null,i.total))))))},I=o.a.createElement;t.default=function(){return I(o.a.Fragment,null,I(a.a,{title:"Invoice - Mahdi Fashion",description:"Invoice Details"}),I(E,null))}},tZdC:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("jvDv"),o=function(e,t){return void 0===t&&(t=null),function(n){return Object(r.d)(n.theme,e,t)}}},uYlf:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},ysqo:function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r=l(n("ERkP")),o=l(n("J9Yr")),a=n("TZT2"),i=n("op+c"),c=n("dq4L");function l(e){return e&&e.__esModule?e:{default:e}}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,l=d.length;c<l;c++){var s=d[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var u=o.props[s],f=r[s]||new Set;f.has(u)?a=!1:(f.add(u),r[s]=f)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var p=(0,o.default)();function m(e){var t=e.children;return(r.default.createElement(a.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(p,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:(0,c.isInAmpMode)(e)},t)}))})))}m.rewind=p.rewind;var h=m;t.default=h}},[["JunZ",1,0,2,3,4,5]]]);