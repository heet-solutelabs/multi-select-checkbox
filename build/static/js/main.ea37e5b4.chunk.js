(this["webpackJsonpreact-starter"]=this["webpackJsonpreact-starter"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(8),n=a.n(c),l=(a(13),a(5)),i=a(2),s=a.n(i),r=a(1),o=a(6),u=a(0);var h=function(e){var t=e.selectCheckBox,a=void 0===t?[]:t,c=e.setSelectCheckBox,n=void 0===c?[]:c,l=e.onChange,i=e.selectAllShowClassName;return Object(u.jsx)(u.Fragment,{children:Array.isArray(a)&&a.length>0&&a.some((function(e){return e.label&&e.value}))&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",{id:"select_all_checkbox",className:i,checked:Array.isArray(a)&&a.length>0&&a.every((function(e){return!0===e.is_active})),type:"checkbox",onChange:function(e){var t=Object(o.a)(a).map((function(t){return Object(r.a)(Object(r.a)({},t),{},{is_active:e.target.checked})})),c=t.filter((function(e){return e.is_active})).map((function(e){return Object(r.a)({},e)}));l(c.map((function(e){return delete e.is_active,Object(r.a)({},e)}))),n(t)}}),Object(u.jsx)("label",{htmlFor:"select_all_checkbox",children:"select all"})]})})};var b=function(e){var t=e.selectCheckBox,a=void 0===t?[]:t,c=e.setSelectCheckBox,n=e.onChange,l=e.listOfCheckBoxItemsClassName;return Object(u.jsx)(u.Fragment,{children:Array.isArray(a)&&a.length>0&&a.map((function(e,t){return Object(u.jsx)("div",{children:e.label&&e.value&&Object(u.jsxs)("div",{className:"flex",style:{marginBottom:"10px"},children:[Object(u.jsx)("input",{id:t,className:l,type:"checkbox",checked:!!(a&&a.length>0&&a.every((function(e){return!0===e.is_active})))||!!(null===a||void 0===a?void 0:a.find((function(t){return Object.is(null===t||void 0===t?void 0:t.is_active,e.is_active)})))&&(null===a||void 0===a?void 0:a.find((function(t){return Object.is(null===t||void 0===t?void 0:t.is_active,e.is_active)})).is_active),onChange:function(t){var l=Object(o.a)(a).map((function(a){return Object.is(a.label,e.label)?Object(r.a)(Object(r.a)({},a),{},{is_active:t.target.checked}):Object(r.a)({},a)})),i=l.filter((function(e){return e.is_active})).map((function(e){return Object(r.a)({},e)}));n(i.map((function(e){return delete e.is_active,Object(r.a)({},e)}))),c(l)}}),Object(u.jsx)("label",{htmlFor:t,children:e.label})]})},t)}))})};function j(e){var t=e.CheckBoxList,a=void 0===t?[]:t,c=e.onChange,n=e.selectAllShow,i=e.listOfCheckBoxItemsClassName,o=void 0===i?"":i,j=e.selectAllShowClassName,v=void 0===j?"":j,d=a.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{is_active:!1})})),O=s.a.useState(d),x=Object(l.a)(O,2),f=x[0],m=x[1];return Object(u.jsxs)("div",{children:[n&&Object(u.jsx)("div",{style:{marginBottom:"10px"},children:Object(u.jsx)(h,{selectCheckBox:f,setSelectCheckBox:m,onChange:function(e){c(e)},selectAllShowClassName:v})}),Object(u.jsx)(b,{listOfCheckBoxItemsClassName:o,selectCheckBox:f,setSelectCheckBox:m,onChange:function(e){c(e)}})]})}var v=[{label:"eat",value:"eat"},{label:"sleep",value:"sleep"},{label:"coding",value:"coding"},{label:"Repeat",value:"Repeat"},{label:"Reapeat again!",value:"Reapeat again!"},{label:"Reapeat again again!",value:"Reapeat again again!"}];function d(){var e=s.a.useState([]),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{children:JSON.stringify(a,null,2)}),Object(u.jsx)(j,{selectAllShow:!0,selectAllShowClassName:"Inside",listOfCheckBoxItemsClassName:"test",CheckBoxList:v,onChange:function(e){c(e)}})]})}n.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ea37e5b4.chunk.js.map