(this.webpackJsonplifestamps=this.webpackJsonplifestamps||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(8),o=n.n(r),s=(n(14),n(9)),i=n(5),l=(n(15),Object(a.createContext)({})),u=n(0);function d(){return Object(u.jsx)(l.Consumer,{children:function(e){var t=e.onAddStamp,n=e.onTextInput,a=e.textValue;return Object(u.jsxs)("div",{className:"add-text-container",children:[Object(u.jsx)("textarea",{value:a,id:"add-text",name:"add-text",placeholder:"enter text here",onInput:function(e){return n(e)}}),Object(u.jsx)("button",{id:"add-text-btn",onClick:t,children:"+"})]})}})}var j=n(2);function f(){return Object(u.jsx)(l.Consumer,{children:function(e){var t=e.stamps;return Object(u.jsx)("div",{className:"stamps",children:t&&t.length>0&&t.map((function(e,t){return{note:e.note.replace(/(#\w+)/g,'<span class="highlighted">$1</span>'),ts:e.ts,key:"list-item-".concat(t)}})).map((function(e){return Object(u.jsx)(p,Object(j.a)({},e))}))})}})}function p(e){var t=e.note,n=e.ts,a=e.key;return Object(u.jsxs)("div",{className:"stamp",children:[Object(u.jsx)("div",{className:"ts",children:n}),Object(u.jsx)("div",{className:"note",dangerouslySetInnerHTML:{__html:t}})]},a)}var m=n(4),b=n(19);function O(){var e=(new Date).toJSON().split("T"),t=Object(i.a)(e,2),n=t[0],a=t[1].split(".")[0];return"".concat(n.replace(/-/g,".")," ").concat(a)}function h(){if("undefined"===typeof localStorage)return!1;try{return localStorage.setItem("feature_test","yes"),"yes"===localStorage.getItem("feature_test")&&(localStorage.removeItem("feature_test"),!0)}catch(e){return!1}}function g(e){if(h())return null!==localStorage.getItem(e)}function v(e){return{push:function(t){!function(e,t){if(h())if(g(e)){var n=JSON.parse(localStorage.getItem(e));n.push(t),localStorage.setItem(e,JSON.stringify(n))}else{var a=[t];localStorage.setItem(e,JSON.stringify(a))}}(e,t)},fetch:function(){var t=[];try{t=JSON.parse(function(e){return h()?localStorage.getItem(e):"no localStorage"}(e)||"")||[]}catch(n){console.error(null===n||void 0===n?void 0:n.message)}finally{return t}},clear:function(){!function(e){h()&&g(e)&&localStorage.removeItem(e)}(e)},addAtBeginning:function(t){!function(e,t){if(h()){if(g(e)){var n=localStorage.getItem(e);if(n){var a=JSON.parse(n);return a.unshift(t),void localStorage.setItem(e,JSON.stringify(a))}}var c=[t];localStorage.setItem(e,JSON.stringify(c))}}(e,t)}}}var x=n.p+"static/media/file_upload_white_24dp.efa74fb3.svg";function S(e){var t=e.actions.onFileRead;return Object(u.jsxs)("label",{htmlFor:"upload",style:{cursor:"pointer"},className:"upload-control",children:[Object(u.jsx)("img",{src:x,alt:"upload previously downloaded json."}),Object(u.jsx)("input",{type:"file",id:"upload",name:"upload",accept:"application/json",onChange:function(e){var n,a,c=null===e||void 0===e||null===(n=e.currentTarget)||void 0===n||null===(a=n.files)||void 0===a?void 0:a[0],r=new FileReader;r.onload=function(e){var n=JSON.parse(e.target.result);t(n),console.log(n)},r.readAsText(c,"utf-8")},style:{display:"none"}})]})}var y=n.p+"static/media/file_download_white_24dp.e46f4fb0.svg";function N(){return Object(u.jsx)(l.Consumer,{children:function(e){var t=e.stamps;return Object(u.jsx)(u.Fragment,{children:t.length>0&&Object(u.jsx)("a",{href:"data:text/json;charset=utf-8,".concat(encodeURIComponent(JSON.stringify(t,null,4))),download:"lifestamps-".concat((new Date).toLocaleDateString(),".json"),className:"download-control",children:Object(u.jsx)("img",{src:y,alt:"download your lifestamps as json"})})})}})}var I=function(){var e=v("LIFESTAMPS"),t=e.addAtBeginning,n=e.fetch,c=e.clear,r=Object(a.useState)(""),o=Object(i.a)(r,2),p=o[0],h=o[1],g=Object(a.useState)(n()),x=Object(i.a)(g,2),y=x[0],I=x[1];return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(l.Provider,{value:{stamps:y,onAddStamp:function(e){if(p){var n=function(e,t){var n=Date.now();return{note:e,ts:O(),id:Object(b.a)(),created_at:n,updated_at:n,serial:t,type:"LifeStamp"}}(p,y.length+1);I([n].concat(Object(s.a)(y))),t(n),h("")}},onTextInput:function(e){h(e.currentTarget.value)},textValue:p},children:[Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("h2",{className:"brand",children:Object(u.jsx)("a",{href:"/lifestamps",children:"LifeStamps"})})}),Object(u.jsxs)("section",{className:"content",children:[Object(u.jsx)(d,{}),Object(u.jsx)(f,{})]}),Object(u.jsxs)("footer",{className:"footer",children:[Object(u.jsxs)("div",{className:"controls",children:[Object(u.jsx)(u.Fragment,{children:"JSON: (you can download and upload your data)"}),Object(u.jsx)(N,{}),Object(u.jsx)(S,{actions:{onFileRead:function(e){var n=function(e,t){var n=e.reduce((function(e,t){return Object(j.a)(Object(j.a)({},e),{},Object(m.a)({},"".concat(t.id),t))}),{});return n=t.reduce((function(e,t){return Object(j.a)(Object(j.a)({},e),{},Object(m.a)({},"".concat(t.id),t))}),n),Object.values(n)}(y,e);c(),n.forEach((function(e){return t(e)})),I(n)}}})]}),Object(u.jsx)("div",{children:"\xa0"}),Object(u.jsx)("h6",{children:"lifestamps by anubhav | 0.14.0-80"})]})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(I,{})}),document.getElementById("root")),w()}},[[17,1,2]]]);
//# sourceMappingURL=main.d2c9c43f.chunk.js.map