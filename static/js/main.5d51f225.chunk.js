(this.webpackJsonplifestamps=this.webpackJsonplifestamps||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(6),o=n.n(r),s=(n(12),n(7)),i=n(2),l=(n(13),n(0));function u(t){var e=t.btnActions,n=t.inputActions,a=t.value;return Object(l.jsxs)("div",{className:"add-text-container",children:[Object(l.jsx)("textarea",{value:a,id:"add-text",name:"add-text",placeholder:"enter text here",onInput:n.onInput}),Object(l.jsx)("button",{id:"add-text-btn",onClick:e.onSubmit,children:"+"})]})}function f(t){var e=t.list;return Object(l.jsx)("div",{className:"stamps",children:e&&e.length>0&&e.map((function(t){return JSON.parse(t)})).map((function(t,e){var n=t.note,a=t.ts;return Object(l.jsxs)("div",{className:"stamp",children:[Object(l.jsx)("div",{className:"ts",children:a}),Object(l.jsx)("div",{className:"note",children:n})]},"list-item-".concat(e))}))})}var d=n(17);function j(){var t=(new Date).toJSON().split("T"),e=Object(i.a)(t,2),n=e[0],a=e[1].split("."),c=Object(i.a)(a,2),r=c[0];c[1];return"".concat(n.replace(/\-/g,".")," ").concat(r)}function g(){if("undefined"===typeof localStorage)return!1;try{return localStorage.setItem("feature_test","yes"),"yes"===localStorage.getItem("feature_test")&&(localStorage.removeItem("feature_test"),!0)}catch(t){return!1}}function m(t){if(g())return null!==localStorage.getItem(t)}function O(t){return{push:function(e){e&&e.length>=3&&function(t,e){if(g())if(m(t)){var n=JSON.parse(localStorage.getItem(t));n.push(e),localStorage.setItem(t,JSON.stringify(n))}else{var a=[e];localStorage.setItem(t,JSON.stringify(a))}}(t,e)},fetch:function(){return JSON.parse(function(t){return g()?localStorage.getItem(t):"no localStorage"}(t))||[]},clear:function(){!function(t){g()&&m(t)&&localStorage.removeItem(t)}(t)},addAtBeginning:function(e){e&&e.length>0&&function(t,e){if(g())if(m(t)){var n=JSON.parse(localStorage.getItem(t));n.unshift(e),localStorage.setItem(t,JSON.stringify(n))}else{var a=[e];localStorage.setItem(t,JSON.stringify(a))}}(t,e)}}}var b=function(){var t=O("LIFESTAMPS"),e=t.addAtBeginning,n=t.fetch,c=Object(a.useState)(""),r=Object(i.a)(c,2),o=r[0],g=r[1],m=Object(a.useState)(n()),b=Object(i.a)(m,2),h=b[0],S=b[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("h2",{className:"brand",children:"LifeStamps"})}),Object(l.jsxs)("section",{className:"content",children:[Object(l.jsx)(u,{value:o,btnActions:{onSubmit:function(t){if(o){var n=JSON.stringify({note:o,ts:j(),id:Object(d.a)()});S([n].concat(Object(s.a)(h))),e(n),g("")}}},inputActions:{onInput:function(t){g(t.currentTarget.value)}}}),Object(l.jsx)(f,{list:h})]}),Object(l.jsx)("footer",{className:"footer",children:h.length>0&&Object(l.jsx)("a",{href:"data:text/json;charset=utf-8,".concat(encodeURIComponent(JSON.stringify(h,null,4))),download:"lifestamps-".concat((new Date).toLocaleDateString(),".json"),children:"download"})})]})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.5d51f225.chunk.js.map