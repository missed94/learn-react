(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[7],{248:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return u}));var a=r(64),n=r(0),o=r.n(n),c=r(251),l=r.n(c),m=function(e){return function(t){var r=t.input,n=t.meta,c=Object(a.a)(t,["input","meta"]),m=n.touched&&n.error;return o.a.createElement("div",{className:m?"".concat(l.a.formControl," ").concat(l.a.error):"".concat(l.a.formControl)},o.a.createElement("div",null,o.a.createElement(e,Object.assign({},r,c))),m?o.a.createElement("p",{className:l.a.errorMessage},n.error):null)}},i=m("textarea"),u=m("input")},249:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return n}));var a=function(e){if(!e)return"Field is required"},n=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},251:function(e,t,r){e.exports={formControl:"FormControls_formControl__gmpsC",error:"FormControls_error__HbhS_",errorMessage:"FormControls_errorMessage__2zmCJ"}},411:function(e,t,r){},412:function(e,t,r){e.exports={login__form:"LoginForm_login__form__1q0VW",form__summaryError:"LoginForm_form__summaryError__pe4Wl"}},419:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(411),c=r.n(o),l=r(412),m=r.n(l),i=r(116),u=r(117),s=r(248),p=(r(249),Object(u.a)({form:"login"})((function(e){var t=e.error,r=e.handleSubmit,a=e.captchaUrl;return n.a.createElement("div",{className:m.a.loginFormComponent},n.a.createElement("form",{className:m.a.login__form,onSubmit:r},n.a.createElement("div",null,n.a.createElement(i.a,{type:"text",name:"email",placeholder:"email",component:s.a})),n.a.createElement("div",null,n.a.createElement(i.a,{type:"password",name:"password",placeholder:"password",component:s.a})),n.a.createElement("label",null,n.a.createElement(i.a,{component:"input",type:"checkbox",name:"rememberMe"}),n.a.createElement("span",null,"remember me")),a&&n.a.createElement("div",{className:m.a.captcha__wrapper},n.a.createElement("img",{src:a,alt:"captcha"}),n.a.createElement(i.a,{type:"text",name:"captcha",placeholder:"enter symbols",component:s.a})),t&&n.a.createElement("div",{className:m.a.form__summaryError}," ",t," "),n.a.createElement("div",null,n.a.createElement("button",{type:"submit"},"Login"))))}))),f=r(17),_=r(26),h=r(5);t.default=Object(f.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:_.c})((function(e){var t=e.login,r=e.isAuth,a=e.captchaUrl;return r?n.a.createElement(h.a,{to:"/profile"}):n.a.createElement("div",{className:c.a.loginComponent},n.a.createElement("h1",null,"LOGIN"),n.a.createElement(p,{captchaUrl:a,onSubmit:function(e){t(e.email,e.password,e.rememberMe,e.captcha)}}))}))}}]);
//# sourceMappingURL=7.88eb59f0.chunk.js.map