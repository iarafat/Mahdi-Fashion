(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{YBdp:function(t,n,e){"use strict";e.r(n);var a=e("KD1n"),o=e("ERkP"),i=e.n(o),r=e("j/s1"),c=e("tZdC"),s=e("VU+f"),l=e("AmvX"),m=e("H/+S"),p=e("f/wd"),u=e("fofi"),f=e("2SGB"),d=e("tFEG"),b=i.a.createElement;function g(){var t=Object(a.a)(["\n  .cartPopup{\n    top: auto !important;\n    left: auto !important;\n    bottom: 50px !important;\n    right: 50px !important;\n    box-shadow: ",";\n    transform-origin: bottom right;\n\n    @media (max-width: 580px) {\n      max-width: none!important;\n      width: 100% !important;\n      bottom: 0 !important;\n      left: 0!important;\n      background: ",";\n      overflow: initial !important;\n      transform-origin: bottom center;\n    }\n  }\n"]);return g=function(){return t},t}var h=Object(r.c)(g(),Object(c.a)("shadows.big","0 21px 36px rgba(0, 0, 0, 0.16)"),Object(c.a)("colors.white","#ffffff"));n.default=function(t){var n=t.deviceType,e=n.mobile,a=(n.tablet,n.desktop,Object(d.b)()),o=a.isOpen,r=a.cartItemsCount,c=a.toggleCart,g=a.calculatePrice,w=!0===o?"cartPopupFixed":"";return b(i.a.Fragment,null,e?b(i.a.Fragment,null,b(h,null),b(m.c,{className:"product-cart",itemCount:r,itemPostfix:b(f.a,r>1?{id:"cartItems",defaultMessage:"items"}:{id:"cartItem",defaultMessage:"item"}),price:g(),pricePrefix:"$",onClick:function(){Object(s.c)({show:!0,config:{className:"cartPopup",width:"auto",height:"auto",enableResizing:!1,disableDragging:!0,transition:{tension:360,friction:40}},closeOnClickOutside:!0,component:l.a,closeComponent:function(){return b("div",null)},componentProps:{onCloseBtnClick:s.b,scrollbarHeight:330}})}})):b(i.a.Fragment,null,b(u.b,{className:w},o&&b(l.a,{onCloseBtnClick:c,scrollbarHeight:"100vh"})),b(m.b,{className:"product-cart",itemCount:r,itemPostfix:b(f.a,r>1?{id:"cartItems",defaultMessage:"items"}:{id:"cartItem",defaultMessage:"item"}),price:g(),pricePrefix:p.a,onClick:c})))}}}]);