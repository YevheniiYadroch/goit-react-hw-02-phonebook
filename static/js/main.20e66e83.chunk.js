(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(7),i=n.n(c),o=(n(14),n(9)),s=n(2),l=n(3),u=n(5),d=n(4),m=n(22),h=n(8),b=(n(15),n(0)),j=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(h.a)({},a,r))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(b.jsxs)("form",{className:"ContactForm",onSubmit:this.props.onChange,children:[Object(b.jsx)("label",{htmlFor:"name",className:"ContactForm__name",children:"Name"}),Object(b.jsx)("input",{className:"ContactForm__input",value:t,type:"text",name:"name",id:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange}),Object(b.jsx)("label",{htmlFor:"number",className:"ContactForm__number",children:"Number"}),Object(b.jsx)("input",{className:"ContactForm__input",value:n,type:"tel",name:"number",id:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange}),Object(b.jsx)("button",{type:"submit",className:"ContactForm__button",children:"Add contact"})]})}}]),n}(a.Component),p=(n(17),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"Filter",children:[Object(b.jsx)("h3",{className:"Filter__title",children:"Find contacts by name"}),Object(b.jsx)("input",{type:"text",name:"search",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.props.onChange})]})}}]),n}(a.Component));var f=function(e){var t=e.props;return Object(b.jsxs)("p",{className:"ContactList__text",children:[t.name,": ",t.number]})};n(18);var C=function(e){var t=e.props,n=e.onDelete;return Object(b.jsx)("ul",{className:"ContactList",children:t.map((function(e){return Object(b.jsxs)("li",{className:"ContactList__item",children:[Object(b.jsx)(f,{props:e}),Object(b.jsx)("button",{className:"ContactList__button","data-id":e.id,onClick:n,type:"button",children:"Delete"})]},e.id)}))})},O=(n(19),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.formChangeHandle=function(t){if(t.preventDefault(),e.state.contacts.some((function(e){return e.name===t.target.children.name.value})))return alert("".concat(t.target.children.name.value," is already in contacts"));e.setState((function(e){return{contacts:[].concat(Object(o.a)(e.contacts),[{id:Object(m.a)(),name:t.target.children.name.value,number:t.target.children.number.value}])}}))},e.searchHandle=function(t){e.setState({filter:t.currentTarget.value})},e.onDelete=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t.target.dataset.id}))}}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e.state.filter.toLowerCase())}));return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Phonebook"}),Object(b.jsx)(j,{onChange:this.formChangeHandle}),Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(p,{onChange:this.searchHandle}),Object(b.jsx)(C,{props:t,onDelete:this.onDelete})]})}}]),n}(a.Component)),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),g()}],[[20,1,2]]]);
//# sourceMappingURL=main.20e66e83.chunk.js.map