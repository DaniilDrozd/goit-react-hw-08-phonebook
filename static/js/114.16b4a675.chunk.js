"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[114],{6114:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(9434),r=n(2791),u=function(e){return e.contacts.loading},c=function(e){return e.contacts.filter},s=function(e){return e.contacts.items},i=function(e){return e.contacts.error},l="ContactList_btnContact__XKgt7",o="ContactList_ulList__1XsEM",m=n(8893),f=n(184),v=function(){var e=(0,a.v9)(s),t=(0,a.v9)(c),n=(0,a.I0)(),u=e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return(0,r.useEffect)((function(){n((0,m.uK)())}),[n]),(0,f.jsx)("ul",{className:o,children:u.map((function(e){var t=e.name,a=e.number,r=e.id;return(0,f.jsxs)("li",{id:r,children:[t,": ",a,(0,f.jsx)("button",{className:l,type:"button",onClick:function(){return n((0,m.GK)(r))},children:"Delete"})]},r)}))})},d=n(186),b="Filter_NameStyle__mJ3iG";function _(){var e=(0,a.v9)(c),t=(0,a.I0)();return(0,f.jsx)("div",{children:(0,f.jsxs)("label",{children:["Find contacts by name",(0,f.jsx)("input",{type:"text",value:e,onChange:function(e){t((0,d.M)(e.target.value))},className:b})]})})}var x=n(9439),h=n(8813),p={NameStyle:"ContactForm_NameStyle__ILIJk",numberSlyle:"ContactForm_numberSlyle__dDvTc",inputSlyle:"ContactForm_inputSlyle__NakgU"};var y=function(){var e=(0,a.I0)(),t=(0,a.v9)(s),n=(0,r.useState)(""),u=(0,x.Z)(n,2),c=u[0],i=u[1],l=(0,r.useState)(""),o=(0,x.Z)(l,2),v=o[0],d=o[1],b=function(e){var t=e.target,n=t.value;switch(t.name){case"name":i(n);break;case"number":d(n);break;default:return}};return(0,f.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t.some((function(e){var t=e.name;return t&&t.toLowerCase()===c.toLowerCase()}))?alert("".concat(c," is already in contacts!")):(e((0,m.uK)({name:c,number:v,id:(0,h.nanoid)()})),i(""),d(""))},children:[(0,f.jsxs)("label",{className:p.NameStyle,children:["Name:",(0,f.jsx)("input",{className:p.inputStyle,type:"text",name:"name",value:c,onChange:b})]}),(0,f.jsxs)("label",{className:p.NumberStyle,children:["Number:",(0,f.jsx)("input",{className:p.inputStyle,type:"text",name:"number",value:v,onChange:b})]}),(0,f.jsx)("button",{type:"submit",children:"Submit"})]})},j=function(){var e=(0,a.I0)(),t=(0,a.v9)(u),n=(0,a.v9)(i);return(0,r.useEffect)((function(){e(s())}),[e]),(0,f.jsxs)("div",{children:[(0,f.jsx)(y,{}),(0,f.jsx)(_,{}),t&&!n&&(0,f.jsx)(v,{}),(0,f.jsx)(v,{})]})}}}]);
//# sourceMappingURL=114.16b4a675.chunk.js.map