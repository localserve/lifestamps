(this.webpackJsonplifestamps=this.webpackJsonplifestamps||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(8),o=n.n(r),i=(n(14),n(9)),s=n(4),l=(n(15),n(0));function u(e){var t=e.btnActions,n=e.inputActions,a=e.value;return Object(l.jsxs)("div",{className:"add-text-container",children:[Object(l.jsx)("textarea",{value:a,id:"add-text",name:"add-text",placeholder:"enter text here",onInput:n.onInput}),Object(l.jsx)("button",{id:"add-text-btn",onClick:t.onSubmit,children:"+"})]})}function d(e){var t=e.list;return Object(l.jsx)("div",{className:"stamps",children:t&&t.length>0&&t.map((function(e,t){var n=e.note,a=e.ts;return Object(l.jsxs)("div",{className:"stamp",children:[Object(l.jsx)("div",{className:"ts",children:a}),Object(l.jsx)("div",{className:"note",children:n})]},"list-item-".concat(t))}))})}var f=n(3),j=n(5),b=n(19);function O(){var e=(new Date).toJSON().split("T"),t=Object(s.a)(e,2),n=t[0],a=t[1].split(".")[0];return"".concat(n.replace(/-/g,".")," ").concat(a)}function h(){if("undefined"===typeof localStorage)return!1;try{return localStorage.setItem("feature_test","yes"),"yes"===localStorage.getItem("feature_test")&&(localStorage.removeItem("feature_test"),!0)}catch(e){return!1}}function g(e){if(h())return null!==localStorage.getItem(e)}function m(e){return{push:function(t){!function(e,t){if(h())if(g(e)){var n=JSON.parse(localStorage.getItem(e));n.push(t),localStorage.setItem(e,JSON.stringify(n))}else{var a=[t];localStorage.setItem(e,JSON.stringify(a))}}(e,t)},fetch:function(){var t=[];try{t=JSON.parse(function(e){return h()?localStorage.getItem(e):"no localStorage"}(e)||"")||[]}catch(n){console.error(n.message)}finally{return t}},clear:function(){!function(e){h()&&g(e)&&localStorage.removeItem(e)}(e)},addAtBeginning:function(t){!function(e,t){if(h()){if(g(e)){var n=localStorage.getItem(e);if(n){var a=JSON.parse(n);return a.unshift(t),void localStorage.setItem(e,JSON.stringify(a))}}var c=[t];localStorage.setItem(e,JSON.stringify(c))}}(e,t)}}}function p(e){var t=e.actions.onFileRead;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("label",{htmlFor:"upload",children:"Upload earlier downloaded json"}),Object(l.jsx)("input",{type:"file",id:"upload",name:"upload",accept:"application/json",onChange:function(e){var n,a,c=null===e||void 0===e||null===(n=e.currentTarget)||void 0===n||null===(a=n.files)||void 0===a?void 0:a[0],r=new FileReader;r.onload=function(e){var n=JSON.parse(e.target.result);t(n),console.log(n)},r.readAsText(c,"utf-8")},style:{visibility:"hidden"}})]})}var v=function(){var e=m("LIFESTAMPS"),t=e.addAtBeginning,n=e.fetch,c=e.clear,r=Object(a.useState)(""),o=Object(s.a)(r,2),h=o[0],g=o[1],v=Object(a.useState)(n()),S=Object(s.a)(v,2),x=S[0],N=S[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("h2",{className:"brand",children:Object(l.jsx)("a",{href:"/lifestamps",children:"LifeStamps"})})}),Object(l.jsxs)("section",{className:"content",children:[Object(l.jsx)(u,{value:h,btnActions:{onSubmit:function(e){if(h){var n=function(e,t){var n=Date.now();return{note:e,ts:O(),id:Object(b.a)(),created_at:n,updated_at:n,serial:t,type:"LifeStamp"}}(h,x.length+1);N([n].concat(Object(i.a)(x))),t(n),g("")}}},inputActions:{onInput:function(e){g(e.currentTarget.value)}}}),Object(l.jsx)(d,{list:x})]}),Object(l.jsxs)("footer",{className:"footer",children:[Object(l.jsxs)("div",{className:"controls",children:[x.length>0&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("a",{href:"data:text/json;charset=utf-8,".concat(encodeURIComponent(JSON.stringify(x,null,4))),download:"lifestamps-".concat((new Date).toLocaleDateString(),".json"),children:"download"}),"|"]}),Object(l.jsx)(p,{actions:{onFileRead:function(e){var n=function(e,t){var n=e.reduce((function(e,t){return Object(j.a)(Object(j.a)({},e),{},Object(f.a)({},"".concat(t.id),t))}),{});return n=t.reduce((function(e,t){return Object(j.a)(Object(j.a)({},e),{},Object(f.a)({},"".concat(t.id),t))}),n),Object.values(n)}(x,e);c(),n.forEach((function(e){return t(e)})),N(n)}}})]}),Object(l.jsx)("h6",{children:"lifestamps by anubhav | v0.5.0-20"})]})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),S()}},[[17,1,2]]]);
//# sourceMappingURL=main.06ec086e.chunk.js.map