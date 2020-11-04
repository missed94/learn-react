(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{248:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return u}));var n=a(64),r=a(0),o=a.n(r),l=a(251),s=a.n(l),c=function(e){return function(t){var a=t.input,r=t.meta,l=Object(n.a)(t,["input","meta"]),c=r.touched&&r.error;return o.a.createElement("div",{className:c?"".concat(s.a.formControl," ").concat(s.a.error):"".concat(s.a.formControl)},o.a.createElement("div",null,o.a.createElement(e,Object.assign({},a,l))),c?o.a.createElement("p",{className:s.a.errorMessage},r.error):null)}},i=c("textarea"),u=c("input")},249:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},251:function(e,t,a){e.exports={formControl:"FormControls_formControl__gmpsC",error:"FormControls_error__HbhS_",errorMessage:"FormControls_errorMessage__2zmCJ"}},268:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(5),r=a(0),o=a.n(r),l=a(17),s=function(e){return{isAuth:e.auth.isAuth}},c=function(e){return Object(l.b)(s)((function(t){return t.isAuth?o.a.createElement(e,t):o.a.createElement(n.a,{to:"/login"})}))}},290:function(e,t,a){},304:function(e,t,a){e.exports={textarea:"NewPostForm_textarea__3Iwi_",addBtn:"NewPostForm_addBtn__MvEZd",form__summaryError:"NewPostForm_form__summaryError__SoRHI"}},352:function(e,t,a){e.exports={profileInfoComponent:"ProfileInfo_profileInfoComponent__3k6Bg",banner__wrap:"ProfileInfo_banner__wrap__1Z-d6",banner:"ProfileInfo_banner__2wRen"}},353:function(e,t,a){e.exports={profileStatusComponent:"ProfileStatus_profileStatusComponent__wk3mw",authUserStatus:"ProfileStatus_authUserStatus__1WklD"}},354:function(e,t,a){e.exports={row:"ProfileData_row__ifJ9p",row__title:"ProfileData_row__title__ujXII"}},355:function(e,t,a){},356:function(e,t,a){e.exports={profileAvatarComponent:"ProfileAvatar_profileAvatarComponent__fkpyt",avatar__container:"ProfileAvatar_avatar__container__14rdc",avatar__imgWrapper:"ProfileAvatar_avatar__imgWrapper__39XJe",avatar:"ProfileAvatar_avatar__264n-"}},409:function(e,t,a){e.exports={MyPostsComponent:"My_posts_MyPostsComponent__19-p-"}},410:function(e,t,a){e.exports={postComponent:"Post_postComponent__3KXCl"}},415:function(e,t,a){"use strict";a.r(t);var n=a(42),r=a(43),o=a(44),l=a(45),s=a(0),c=a.n(s),i=a(290),u=a.n(i),m=a(69),p=a(352),f=a.n(p),d=a(25),_=a(353),E=a.n(_),v=a(116),h=a(117),b=(Object(h.a)({form:"status"})((function(e){return c.a.createElement("form",{onBlur:e.handleSubmit,onSubmit:e.handleSubmit},c.a.createElement(v.a,{autoFocus:!0,name:"status",component:"input",placeholder:"Enter status"}),c.a.createElement("button",null,"Save"))})),function(e){var t=Object(s.useState)(!1),a=Object(m.a)(t,2),n=a[0],r=a[1],o=Object(s.useState)(e.status),l=Object(m.a)(o,2),i=l[0],u=l[1];Object(s.useEffect)((function(){u(e.status)}),[e.status]);var p=function(){e.isOwner&&r(!0)},f=function(){r(!1),e.updateUserStatus(i)};return c.a.createElement("div",{className:E.a.profileStatusComponent},!n&&c.a.createElement("div",{className:E.a.status__wrap},c.a.createElement("span",{className:e.isOwner?E.a.authUserStatus:E.a.userStatus,onClick:p},e.isOwner?e.status||"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441":e.status||null)),n&&c.a.createElement("form",null,c.a.createElement("input",{autoFocus:!0,onClick:p,onChange:function(e){u(e.target.value)},onBlur:f,value:i}),c.a.createElement("button",{onClick:f},"Save")))}),P=a(354),g=a.n(P),N=a(355),k=a.n(N),w=function(e){var t=e.contactTitle,a=e.contactValue;return c.a.createElement("li",{className:k.a.contactComponent},t,": ",c.a.createElement("a",{href:a},a))},C=function(e){var t=e.profile,a=e.activateEditMode,n=e.isOwner;return c.a.createElement("div",{className:g.a.ProfileDataComponent},n&&c.a.createElement("button",{onClick:a},"Change profile info"),c.a.createElement("div",{className:g.a.row},c.a.createElement("h4",{className:g.a.row__title},"Name:"),t.fullName),c.a.createElement("div",{className:g.a.row},c.a.createElement("h4",{className:g.a.row__title},"About me:"),t.aboutMe),c.a.createElement("div",{className:g.a.row},c.a.createElement("h4",{className:g.a.row__title},"Contacts:"),c.a.createElement("ul",null,Object.keys(t.contacts).map((function(e){return c.a.createElement(w,{key:e,contactTitle:e,contactValue:t.contacts[e]})})))),c.a.createElement("div",{className:g.a.row},c.a.createElement("h4",{className:g.a.row__title},"Looking for a job:"),c.a.createElement("p",null,t.lookingForAJob?"yes":"no")),c.a.createElement("div",{className:g.a.row},c.a.createElement("h4",{className:g.a.row__title},"Professional skills:"),t.lookingForAJob?c.a.createElement("p",null,t.lookingForAJobDescription):null))},O=a(356),y=a.n(O),S=a(413),j=a(305),A=a(416),I=function(e){var t=e.profile,a=e.isOwner,n=e.savePhoto;return c.a.createElement("div",{className:y.a.profileAvatarComponent},c.a.createElement("div",{className:y.a.avatar__container},c.a.createElement("div",{className:y.a.avatar__imgWrapper},c.a.createElement("img",{className:y.a.avatar,src:t.photos.large||"https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png",alt:""})),a&&c.a.createElement(S.a,{onChange:function(e){e.fileList.length&&n(e.fileList[0].originFileObj)}},c.a.createElement(j.a,{icon:c.a.createElement(A.a,null)},"Click to Upload"))," "))},U=a(304),x=a.n(U),F=a(248),M=a(249),D=Object(h.a)({form:"profile-data"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return c.a.createElement("form",{onSubmit:t},c.a.createElement("div",null,c.a.createElement("h4",null,"Name:"),c.a.createElement(v.a,{className:x.a.fullNameInput,name:"fullName",component:F.a,placeholder:"Enter your full name",validate:[M.b]})),c.a.createElement("div",null,c.a.createElement("h4",null,"About me:"),c.a.createElement(v.a,{className:x.a.AboutMeInput,name:"aboutMe",component:F.b,placeholder:"Ask about you"})),c.a.createElement("div",null,c.a.createElement("h4",null,"Contacts:"),c.a.createElement("ul",null,Object.keys(a.contacts).map((function(e){return c.a.createElement("ul",{className:x.a.contactInputs__list},c.a.createElement("p",null,e,":"),c.a.createElement(v.a,{className:x.a.contactInputs__item,name:"contacts.".concat(e),component:F.a,placeholder:"Ask your ".concat(e)}))}))),n&&c.a.createElement("div",{className:x.a.form__summaryError}," ",n," ")),c.a.createElement("div",null,c.a.createElement("h4",null,"Looking for a job:"),c.a.createElement(v.a,{className:x.a.lookingForAJobInput,name:"lookingForAJob",component:"input",type:"checkbox"})),c.a.createElement("div",null,c.a.createElement("h4",null,"Professional skills:"),c.a.createElement(v.a,{className:x.a.skillsInput,name:"lookingForAJobDescription",component:F.b,placeholder:"Ask your skills"})),c.a.createElement("button",null,"Submit profile info"))})),J=function(e){var t=e.profile,a=e.status,n=e.updateUserStatus,r=e.isOwner,o=e.savePhoto,l=e.updateProfileData,i=Object(s.useState)(!1),u=Object(m.a)(i,2),p=u[0],_=u[1];return t?c.a.createElement("div",{className:f.a.profileInfoComponent},c.a.createElement(I,{isOwner:r,profile:t,savePhoto:o}),c.a.createElement(b,{isOwner:r,status:a,updateUserStatus:n}),p?c.a.createElement(D,{profile:t,initialValues:t,onSubmit:function(e){l(e).then((function(){_(!1)}))}}):c.a.createElement(C,{profile:t,activateEditMode:function(){r&&_(!0)},isOwner:r})):c.a.createElement(d.a,null)},B=a(50),L=a(409),T=a.n(L),W=a(410),z=a.n(W),V=function(e){return c.a.createElement("li",{className:z.a.postComponent},c.a.createElement("div",null,c.a.createElement("img",{src:"https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png",alt:""}),c.a.createElement("p",{className:z.a.comment},e.message),c.a.createElement("div",null,c.a.createElement("p",null,"Like ",c.a.createElement("span",null,e.likes)))),c.a.createElement("button",{onClick:function(){e.removePost(e.id)}},"remove post"))},X=Object(M.a)(10),H=Object(h.a)({form:"post"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement(v.a,{className:x.a.textarea,name:"post",component:F.b,placeholder:"Enter your post",validate:[M.b,X]}),c.a.createElement("button",{className:x.a.addBtn},"Add post"))})),R=function(e){var t=e.myPosts.map((function(t,a){return c.a.createElement(V,{key:t.id,id:t.id,removePost:e.removePost,message:t.message,likes:t.likes})}));return c.a.createElement("div",{className:T.a.MyPostsComponent},c.a.createElement("h3",null,"My posts"),c.a.createElement("div",null,c.a.createElement(H,{onSubmit:function(t){e.addPost(t.post)}})),c.a.createElement("ul",{className:T.a.posts},t))},Z=a(17),q=a(19),K=Object(q.d)(Object(Z.b)((function(e){return{myPosts:e.profilePage.myPosts,newPostText:e.profilePage.newPostText}}),{addPost:B.a,removePost:B.e}),c.a.memo)(R),G=function(e){var t=e.profile,a=e.status,n=e.updateUserStatus,r=e.isOwner,o=e.savePhoto,l=e.updateProfileData;return c.a.createElement("div",{className:u.a.profileComponent},c.a.createElement(J,{updateProfileData:l,savePhoto:o,isOwner:r,profile:t,status:a,updateUserStatus:n}),c.a.createElement(K,null))},Q=a(5),Y=a(268),$=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.AuthUserId),this.props.getProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return c.a.createElement("div",{className:u.a.profileComponent},c.a.createElement(G,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus,savePhoto:this.props.savePhoto,updateProfileData:this.props.updateProfileData})))}}]),a}(c.a.Component);t.default=Object(q.d)(Object(Z.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,AuthUserId:e.auth.userId}}),{getProfile:B.c,getUserStatus:B.d,updateUserStatus:B.h,savePhoto:B.f,updateProfileData:B.g}),Q.f,Y.a)($)}}]);
//# sourceMappingURL=5.26a6e80d.chunk.js.map