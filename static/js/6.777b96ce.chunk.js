(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{248:function(e,a,t){"use strict";t.d(a,"b",(function(){return c})),t.d(a,"a",(function(){return l}));var n=t(64),s=t(0),r=t.n(s),o=t(251),m=t.n(o),i=function(e){return function(a){var t=a.input,s=a.meta,o=Object(n.a)(a,["input","meta"]),i=s.touched&&s.error;return r.a.createElement("div",{className:i?"".concat(m.a.formControl," ").concat(m.a.error):"".concat(m.a.formControl)},r.a.createElement("div",null,r.a.createElement(e,Object.assign({},t,o))),i?r.a.createElement("p",{className:m.a.errorMessage},s.error):null)}},c=i("textarea"),l=i("input")},249:function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"a",(function(){return s}));var n=function(e){if(!e)return"Field is required"},s=function(e){return function(a){if(a&&a.length>e)return"Max length is ".concat(e," symbols")}}},251:function(e,a,t){e.exports={formControl:"FormControls_formControl__gmpsC",error:"FormControls_error__HbhS_",errorMessage:"FormControls_errorMessage__2zmCJ"}},268:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(5),s=t(0),r=t.n(s),o=t(17),m=function(e){return{isAuth:e.auth.isAuth}},i=function(e){return Object(o.b)(m)((function(a){return a.isAuth?r.a.createElement(e,a):r.a.createElement(n.a,{to:"/login"})}))}},308:function(e,a,t){e.exports={dialogsComponent:"Dialogs_dialogsComponent__oQ9sd",dialogs:"Dialogs_dialogs__2qFJK",messages:"Dialogs_messages__1msKO",messages__list:"Dialogs_messages__list__4EPsm"}},309:function(e,a,t){e.exports={link:"DialogItem_link__2YXWH",active:"DialogItem_active__3fAM3"}},310:function(e,a,t){e.exports={message:"Message_message__1y0h8"}},311:function(e,a,t){e.exports={sendForm:"MessageForm_sendForm__3Numn",textarea:"MessageForm_textarea__1rbZQ",btn:"MessageForm_btn__8wU4z"}},417:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(308),o=t.n(r),m=t(309),i=t.n(m),c=t(9),l=function(e){return s.a.createElement("li",{className:i.a.dialogComponent},s.a.createElement(c.b,{to:"/dialogs/".concat(e.id),className:i.a.link,activeClassName:i.a.active},s.a.createElement("img",{src:"https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png",alt:""}),e.name))},u=t(310),g=t.n(u),d=function(e){return s.a.createElement("li",{className:g.a.message},s.a.createElement("img",{src:"https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png",alt:""}),s.a.createElement("p",null,e.message))},_=t(311),f=t.n(_),p=t(116),b=t(117),E=t(248),v=t(249),h=Object(v.a)(40),N=Object(b.a)({form:"message"})((function(e){return s.a.createElement("div",{className:f.a.messageFormComponent},s.a.createElement("form",{onSubmit:e.handleSubmit,className:f.a.sendForm},s.a.createElement(p.a,{className:f.a.textarea,name:"message",placeholder:"Enter your message",validate:[v.b,h],component:E.b}),s.a.createElement("button",{type:"submit",className:f.a.btn},"Send message")))})),C=function(e){var a=e.dialogs.map((function(e,a){return s.a.createElement(l,{key:e.id,name:e.name,id:e.id})})),t=e.messages.map((function(e,a){return s.a.createElement(d,{key:e.id,message:e.message})}));return s.a.createElement("div",{className:o.a.dialogsComponent},s.a.createElement("div",{className:o.a.dialogs},s.a.createElement("ul",{className:o.a.dialogs__list},a)),s.a.createElement("div",{className:o.a.messages},s.a.createElement("ul",{className:o.a.messages__list},t),s.a.createElement(N,{onSubmit:function(a){e.onSendMessage(10,a.message)}})))},y=t(17),M=t(268),F=t(19),x=t(79);a.default=Object(F.d)(Object(y.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages,newMessage:e.dialogsPage.newMessage}}),{onSendMessage:x.b}),M.a)(C)}}]);
//# sourceMappingURL=6.777b96ce.chunk.js.map