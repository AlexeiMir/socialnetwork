(this["webpackJsonpreact-homework"]=this["webpackJsonpreact-homework"]||[]).push([[3],{299:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3AMKI"}},300:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__3NBK5",posts:"MyPosts_posts__1bX5x"}},301:function(e,t,a){e.exports={item:"Post_item__HKGh_"}},302:function(e,t,a){"use strict";a.r(t);var n=a(27),s=a(28),r=a(30),o=a(29),u=a(31),l=a(0),c=a.n(l),i=a(42),p=a(300),m=a.n(p),d=a(301),f=a.n(d),h=function(e){return c.a.createElement("div",{className:f.a.item},c.a.createElement("img",{src:"https://www.freevector.com/uploads/vector/preview/12675/FreeVector-Man-Vector-Avatar.jpg"}),e.message,c.a.createElement("div",null,c.a.createElement("span",null,"like"),e.likesCounter))},E=a(64),b=a(89),v=a(90),j=a(48),O=a(37),g=Object(j.a)(10),k=Object(v.a)({form:"profile-add-post"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(b.a,Object(E.a)({placeholder:"Add new post",component:O.b,name:"newPostText",validate:[j.b,g]},"placeholder","Add new post"))),c.a.createElement("div",null,c.a.createElement("button",null,"Add post"))))})),P=c.a.memo((function(e){var t=Object(i.a)(e.posts).reverse().map((function(e){return c.a.createElement(h,{message:e.name,likesCounter:e.likesCounter})}));return c.a.createElement("div",{className:m.a.postsBlock},c.a.createElement("h3",null,"My posts"),c.a.createElement(k,{onSubmit:function(t){e.addPost(t.newPostText)}}),c.a.createElement("div",{className:m.a.posts},t))})),S=a(97),w=a(10),_=Object(w.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(S.a)(t))}}}))(P),x=a(299),A=a.n(x),B=a(41),y=a(130),M=function(e){var t=Object(l.useState)(!1),a=Object(y.a)(t,2),n=a[0],s=a[1],r=Object(l.useState)(e.status),o=Object(y.a)(r,2),u=o[0],i=o[1];return Object(l.useEffect)((function(){i(e.status)}),[e.status]),c.a.createElement("div",null,c.a.createElement("div",null,!n&&c.a.createElement("div",null,c.a.createElement("span",{onDoubleClick:function(){s(!0)}},e.status||"---"))),n&&c.a.createElement("div",null,c.a.createElement("input",{onChange:function(e){i(e.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(u)},value:u})))},C=function(e){var t=e.profile,a=e.status,n=e.updateStatus;return t?c.a.createElement("div",{className:A.a.descriptionBlock},c.a.createElement("div",null,c.a.createElement("img",{src:t.photos.large}),c.a.createElement("div",null,t.aboutMe),"Ava+description",c.a.createElement(M,{status:a,updateStatus:n}))):c.a.createElement(B.a,null)},I=function(e){return c.a.createElement("div",null,c.a.createElement(C,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),c.a.createElement(_,null))},N=a(23),T=a(7),U=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(I,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})))}}]),t}(c.a.Component);t.default=Object(T.d)(Object(w.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:S.d,getStatus:S.c,updateStatus:S.e}),N.f)(U)}}]);
//# sourceMappingURL=3.d8f71353.chunk.js.map