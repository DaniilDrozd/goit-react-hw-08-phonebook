"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[114],{6114:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var a=n(9434),r=n(2791),u=n(8893),c="ContactList_btnContact__XKgt7",s="ContactList_ulList__1XsEM",o="ContactList_Li__ruAVF",l=function(t){return t.contacts.loading},i=function(t){return t.contacts.filter},m=function(t){return t.contacts.items},_=function(t){return t.contacts.error},f=n(184),b=function(){var t=(0,a.v9)(m),e=(0,a.v9)(i),n=(0,a.I0)(),l=t.filter((function(t){return(t.name||"").toLowerCase().includes((e||"").toLowerCase())}));return(0,r.useEffect)((function(){n((0,u.uK)())}),[n]),(0,f.jsx)("ul",{className:s,children:l.map((function(t){var e=t.name,a=t.number,r=t.id;return(0,f.jsxs)("li",{className:o,id:r,children:[e,": ",a,(0,f.jsx)("button",{className:c,type:"button",onClick:function(){return n((0,u.GK)(r))},children:"Delete"})]},r)}))})},d=n(186),v="Filter_NameStyle__mJ3iG";function N(){var t=(0,a.v9)(i),e=(0,a.I0)();return(0,f.jsx)("div",{children:(0,f.jsxs)("label",{className:v,children:["Find contacts by name",(0,f.jsx)("input",{type:"text",value:t,onChange:function(t){e((0,d.M)(t.target.value))},className:v})]})})}var C=n(9439),h=n(8813),x={NameStyle:"ContactForm_NameStyle__ILIJk",numberSlyle:"ContactForm_numberSlyle__dDvTc",inputSlyle:"ContactForm_inputSlyle__NakgU",form:"ContactForm_form__dhl+T",button:"ContactForm_button__eSwX9",NumberStyle:"ContactForm_NumberStyle__moW0U",btn:"ContactForm_btn__wll+u"};var y=function(){var t=(0,a.I0)(),e=(0,a.v9)(m),n=(0,r.useState)(""),c=(0,C.Z)(n,2),s=c[0],o=c[1],l=(0,r.useState)(""),i=(0,C.Z)(l,2),_=i[0],b=i[1],d=function(t){var e=t.target,n=e.value;switch(e.name){case"name":o(n);break;case"number":b(n);break;default:return}};return(0,f.jsxs)("form",{className:x.form,onSubmit:function(n){n.preventDefault(),e.some((function(t){var e=t.name;return e&&e.toLowerCase()===s.toLowerCase()}))?alert("".concat(s," is already in contacts!")):(t((0,u.uK)({name:s,number:_,id:(0,h.nanoid)()})),o(""),b(""))},children:[(0,f.jsxs)("label",{className:x.NameStyle,children:["Name:",(0,f.jsx)("input",{className:x.inputStyle,type:"text",name:"name",value:s,onChange:d})]}),(0,f.jsxs)("label",{className:x.NumberStyle,children:["Number:",(0,f.jsx)("input",{className:x.inputStyle,type:"text",name:"number",value:_,onChange:d})]}),(0,f.jsx)("button",{className:x.btn,type:"submit",children:"Submit"})]})},p=function(){var t=(0,a.I0)(),e=(0,a.v9)(l),n=(0,a.v9)(_);return(0,r.useEffect)((function(){t((0,u.NJ)())}),[t]),(0,f.jsxs)("div",{children:[(0,f.jsx)(y,{}),(0,f.jsx)(N,{}),e&&!n&&(0,f.jsx)(b,{}),(0,f.jsx)(b,{})]})}}}]);
//# sourceMappingURL=114.2cba1fe2.chunk.js.map