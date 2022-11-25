"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[272],{3272:function(n,e,r){r.r(e),r.d(e,{default:function(){return R}});var t,o,i,a=r(2791),s=r(9434),c=r(3634),d=r(6916),l=function(n){return n.contacts.items},p=function(n){return n.contacts.isLoading},x=function(n){return n.contacts.error},u=(0,d.P1)([l,function(n){return n.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),f=r(5984),b=r(168),m=r(6444),g=m.ZP.form(t||(t=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 10px;\n\n  margin-bottom: 20px;\n\n  label {\n    display: block;\n    margin-bottom: 5px;\n    font-size: 20px;\n  }\n  input {\n    width: 250px;\n\n    font-size: 14px;\n\n    border: 1px solid rgba(33, 33, 33, 0.2);\n    border-radius: 4px;\n    background-color: transparent;\n    padding: 5px;\n    outline: none;\n    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:focus {\n      border-color: #2196f3;\n    }\n  }\n  button {\n    padding: 5px 5px;\n    border: none;\n    border-radius: 4px;\n    min-width: 90px;\n\n    background-color: #2196f3;\n    color: #ffffff;\n\n    font-family: inherit;\n    font-weight: 500;\n    font-size: 14px;\n\n    text-align: center;\n\n    cursor: pointer;\n\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n      color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover,\n    &:focus {\n      background-color: #2196f3;\n      color: #ffffff;\n      box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1),\n        0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);\n    }\n  }\n"]))),h=r(184);function j(){var n=(0,s.v9)(l),e=(0,s.I0)();return(0,h.jsxs)(g,{onSubmit:function(r){r.preventDefault();var t=r.target,o=t.name,i=t.number,a={name:o.value,number:i.value};if(n.some((function(n){return n.name.toLowerCase()===o.value.toLowerCase()})))return alert("".concat(o.value," is already in contacts."));e((0,c.uK)(a)),t.reset()},children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("label",{htmlFor:(0,f.x0)(),children:"Name"}),(0,h.jsx)("input",{id:(0,f.x0)(),type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("label",{htmlFor:(0,f.x0)(),children:"Number"}),(0,h.jsx)("input",{id:(0,f.x0)(),type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,h.jsx)("button",{type:"submit",children:"Add contact"})]})}var v,y,Z,w,k,z,P,C,F=m.ZP.h1(o||(o=(0,b.Z)(["\n  margin-bottom: 20px;\n  text-align: center;\n  font-weight: 700;\n  font-size: 30px;\n"]))),_=m.ZP.h2(i||(i=(0,b.Z)(["\n  margin-bottom: 20px;\n  text-align: center;\n  font-weight: 500;\n  font-size: 30px;\n"]))),L=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(F,{children:"Phonebook"}),(0,h.jsx)(j,{}),(0,h.jsx)(_,{children:"Contacts"})]})},A=r(3165),I=m.ZP.div(v||(v=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 5px;\n\n  margin-bottom: 20px;\n\n  label {\n    display: block;\n    margin-bottom: 5px;\n    font-size: 20px;\n  }\n  input {\n    width: 250px;\n\n    font-size: 12px;\n\n    border: 1px solid rgba(33, 33, 33, 0.2);\n    border-radius: 4px;\n    background-color: transparent;\n    padding: 5px;\n    outline: none;\n    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:focus {\n      border-color: #2196f3;\n    }\n  }\n"]))),q=function(){var n=(0,s.I0)();return(0,h.jsxs)(I,{children:[(0,h.jsx)("label",{htmlFor:(0,f.x0)(),children:"Find contacts by name"}),(0,h.jsx)("input",{id:(0,f.x0)(),type:"text",name:"filter",onChange:function(e){var r=e.target.value;n((0,A.T)(r.trim()))}})]})},M=r(7322),N=m.ZP.div(y||(y=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding: 5px 0;\n"]))),K=m.ZP.p(Z||(Z=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 5px;\n  font-family: inherit;\n  font-size: 15px;\n\n  flex-grow: 1;\n\n  span {\n    font-size: 12px;\n  }\n"]))),S=m.ZP.div(w||(w=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n\n  border-radius: 50%;\n  background-color: ",";\n"])),(function(n){return n.color})),B=m.ZP.button(k||(k=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  padding: 0;\n  margin: 0;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n\n  svg {\n    color: #bdbdbd;\n  }\n\n  &:hover {\n    svg {\n      color: #2196f3;\n    }\n  }\n"]))),D=function(n){var e,r=n.contact,t=r.id,o=r.name,i=r.number,a=(0,s.I0)();return(0,h.jsxs)(N,{children:[(0,h.jsx)(S,{color:"#".concat(Math.floor(16777215*Math.random()).toString(16)),children:(e=o,e.charAt(0).toUpperCase())}),(0,h.jsxs)(K,{children:[o,(0,h.jsxs)("span",{children:["Phone: ",i]})]}),(0,h.jsx)(B,{type:"button",onClick:function(){a((0,c.GK)(t))},children:(0,h.jsx)(M.FH3,{size:28})})]})},E=m.ZP.ul(z||(z=(0,b.Z)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]))),G=m.ZP.li(P||(P=(0,b.Z)(["\n  border-top: 1px solid #2f2f37;\n"]))),H=function(){var n=(0,s.v9)(u);return(0,h.jsx)(E,{children:n.map((function(n){return(0,h.jsx)(G,{children:(0,h.jsx)(D,{contact:n})},n.id)}))})},J=m.ZP.div(C||(C=(0,b.Z)(["\n  width: 280px;\n  padding: 20px;\n\n  margin: 0 auto;\n\n  border: 1px solid black;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,\n    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;\n"]))),R=function(){var n=(0,s.I0)(),e=(0,s.v9)(p),r=(0,s.v9)(x);return(0,a.useEffect)((function(){n((0,c.yF)())}),[n]),(0,h.jsxs)(J,{children:[(0,h.jsx)(L,{}),(0,h.jsx)(q,{}),e&&!r&&(0,h.jsx)("b",{children:"Request in progress..."}),(0,h.jsx)(H,{})]})}}}]);
//# sourceMappingURL=272.0bf51b76.chunk.js.map