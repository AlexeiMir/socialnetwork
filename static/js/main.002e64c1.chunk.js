(this["webpackJsonpreact-homework"]=this["webpackJsonpreact-homework"]||[]).push([[0],{12:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return c}));var r=n(132),a=(n(88),r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"9aa0b454-6ceb-4bde-96c6-c40c83a0a7db"}})),o={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t,"\n            ")).then((function(e){return e.data}))},followUser:function(e){return a.post("follow/".concat(e),{}).then((function(e){return e.data}))},unfollowUser:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return u.getProfile(e)}},u={getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status/",{status:e})},getProfile:function(e){return a.get("profile/"+e)}},c={me:function(){return a.get("auth/me")},login:function(e,t,n){return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},128:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var r=n(42),a=n(8),o={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Alex"},{id:3,name:"Nadia"},{id:4,name:"Anton"},{id:5,name:"Misha"}],messages:[{id:1,message:"Hi"},{id:2,message:"What about your project"},{id:3,message:"Yo"}]},u=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return Object(a.a)({},e,{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(27),a=n(28),o=n(30),u=n(29),c=n(31),i=n(0),s=n.n(i),l=n(23),f=n(10),m=function(e){return{isAuth:e.auth.isAuth}},d=function(e){var t=function(t){function n(){return Object(r.a)(this,n),Object(o.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(c.a)(n,t),Object(a.a)(n,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(l.a,{to:"/login"})}}]),n}(s.a.Component);return Object(f.b)(m)(t)}},138:function(e,t,n){e.exports={userPhoto:"users_userPhoto__1D8Lc"}},139:function(e,t,n){e.exports=n.p+"static/media/user.492e6dff.png"},140:function(e,t,n){e.exports=n.p+"static/media/preloader2.a0e82bdc.gif"},167:function(e,t,n){e.exports=n(297)},18:function(e,t,n){e.exports={nav:"Navbar_nav__KGQPT",item:"Navbar_item__1q-_-",active:"Navbar_active__22SOS"}},293:function(e,t,n){},294:function(e,t,n){},295:function(e,t,n){},296:function(e,t,n){},297:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n(97),o=n(128),u={},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;arguments.length>1&&arguments[1];return e},i=n(9),s=n.n(i),l=n(42),f=n(8),m=n(12),d=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(f.a)({},e,{},r):e}))},p={users:[],totalUsersCount:0,pageSize:10,currentPage:1,isFetching:!0,followingInProgress:[],fake:10},g=function(e){return{type:"FOLLOW",userId:e}},h=function(e){return{type:"UNFOLLOW",userId:e}},E=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},b=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},v=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},O=function(e,t,n,r){return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e(v(!0,t)),a.next=3,s.a.awrap(n(t));case 3:0==a.sent.resultCode&&e(r(t)),e(v(!1,t));case 6:case"end":return a.stop()}}))},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(f.a)({},e,{users:d(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(f.a)({},e,{users:d(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(f.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(f.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(f.a)({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(f.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(f.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(l.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},_=n(33),S=n(136),P=n(131),j={initialized:!1},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(f.a)({},e,{initialized:!0});default:return e}},C=Object(r.c)({profilePage:a.b,dialogsPage:o.a,sidebar:c,usersPage:w,auth:_.a,form:P.a,app:y}),I=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.d,N=Object(r.e)(C,I(Object(r.a)(S.a)));window._store_=N;var T=N,k=n(0),x=n.n(k),U=n(65),A=n.n(U),L=(n(293),n(27)),F=n(28),z=n(30),G=n(29),R=n(31),M=n(23),D=n(13),W=(n(294),n(96)),B=n.n(W),q=function(e){return x.a.createElement("header",{className:B.a.header},x.a.createElement("img",{src:"http://dietkremlin.ru/img/logo0601.png"}),x.a.createElement("div",{className:B.a.loginBlock},e.isAuth?x.a.createElement("div",null,e.login," - ",x.a.createElement("button",{onClick:e.logout},"Logout")):x.a.createElement(D.b,{to:"/login"},"Login")))},H=n(10),Y=function(e){function t(){return Object(L.a)(this,t),Object(z.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(F.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return x.a.createElement(q,this.props)}}]),t}(x.a.Component),X=Object(H.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:_.d})(Y),J=n(18),K=n.n(J),V=function(){return x.a.createElement("nav",{className:K.a.nav},x.a.createElement("div",{className:"".concat(K.a.item," ").concat(K.a.active)},x.a.createElement(D.b,{to:"/profile",activeClassName:K.a.active},"Profile")),x.a.createElement("div",{className:K.a.item},x.a.createElement(D.b,{to:"/dialogs",activeClassName:K.a.active},"Messages")),x.a.createElement("div",{className:K.a.item},x.a.createElement(D.b,{to:"/users",activeClassName:K.a.active},"Users")),x.a.createElement("div",{className:K.a.item},x.a.createElement(D.b,{to:"/news",activeClassName:K.a.active},"News")),x.a.createElement("div",{className:K.a.item},x.a.createElement(D.b,{to:"/music"},"Music")),x.a.createElement("div",{className:K.a.item},x.a.createElement("a",{href:"/settings"},"Settings")),x.a.createElement("div",null))},Z=(n(295),function(e){return x.a.createElement("div",null,"News")}),Q=(n(296),function(e){return x.a.createElement("div",null,"Music")}),$=n(55),ee=n(64),te=n(130),ne=n(71),re=n.n(ne),ae=n(137),oe=n.n(ae),ue=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanged,o=e.portionSize,u=void 0===o?10:o,c=Math.ceil(t/n),i=[],s=1;s<=c;s++)i.push(s);var l=Math.ceil(c/u),f=Object(k.useState)(1),m=Object(te.a)(f,2),d=m[0],p=m[1],g=(d-1)*u+1,h=d*u;return x.a.createElement("div",{className:re.a.paginator},d>1&&x.a.createElement("button",{onClick:function(){p(d-1)}},"PREV"),i.filter((function(e){return e>=g&&e<=h})).map((function(e){return x.a.createElement("span",{className:oe()(Object(ee.a)({},re.a.selectedPage,r===e),re.a.pageNumber),key:e,onClick:function(t){a(e)}},e)})),l>d&&x.a.createElement("button",{onClick:function(){p(d+1)}},"NEXT"))},ce=n(138),ie=n.n(ce),se=n(139),le=n.n(se),fe=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return x.a.createElement("div",null,x.a.createElement("div",null,x.a.createElement("span",null,x.a.createElement(D.b,{to:"/profile/"+t.id},x.a.createElement("div",null,x.a.createElement("img",{src:null!=t.photos.small?t.photos.small:le.a,className:ie.a.userPhoto}))),x.a.createElement("div",null,t.followed?x.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"Unfollow"):x.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"Follow"))),x.a.createElement("span",null,x.a.createElement("span",null,x.a.createElement("div",null," ",t.name," "),x.a.createElement("div",null," ",t.status," ")),x.a.createElement("span",null,x.a.createElement("div",null,' "user.location.country" '),x.a.createElement("div",null,' "user.location.city" ')))))},me=function(e){var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanged,o=e.users,u=Object($.a)(e,["totalItemsCount","pageSize","currentPage","onPageChanged","users"]);return x.a.createElement("div",null,x.a.createElement(ue,{totalItemsCount:t,pageSize:n,currentPage:r,onPageChanged:a}),o.map((function(e){return x.a.createElement(fe,{key:e.id,user:e,followingInProgress:u.followingInProgress,unfollow:u.unfollow,follow:u.follow})}))," ")},de=n(41),pe=n(129),ge=n(141),he=Object(ge.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Ee=function(e){return e.usersPage.totalUsersCount},be=function(e){return e.usersPage.pageSize},ve=function(e){return e.usersPage.currentPage},Oe=function(e){return e.usersPage.isFetching},we=function(e){return e.usersPage.followingInProgress},_e=function(e){function t(){var e,n;Object(L.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(z.a)(this,(e=Object(G.a)(t)).call.apply(e,[this].concat(a)))).onPageChanged=function(e){var t=n.props.pageSize;n.props.requestUsers(e,t)},n}return Object(R.a)(t,e),Object(F.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return x.a.createElement(x.a.Fragment,null,this.props.isFetching?x.a.createElement(de.a,null):null,x.a.createElement(me,{totalItemsCount:this.props.totalItemsCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,follow:this.props.follow,unfollow:this.props.unfollow,users:this.props.users,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followingInProgress}))}}]),t}(x.a.Component),Se=Object(r.d)(pe.a,Object(H.b)((function(e){return{users:he(e),totalItemsCount:Ee(e),pageSize:be(e),currentPage:ve(e),isFetching:Oe(e),followingInProgress:we(e)}}),{setCurrentPage:E,unfollow:function(e){return function(t){return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:O(t,e,m.c.unfollowUser.bind(m.c),h);case 1:case"end":return n.stop()}}))}},follow:function(e){return function(t){return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:O(t,e,m.c.followUser.bind(m.c),g);case 1:case"end":return n.stop()}}))}},toggleFollowingProgress:v,requestUsers:function(e,t){return function(n){n(b(!0)),n(E(e)),m.c.getUsers(e,t).then((function(e){n(b(!1)),n({type:"SET_USERS",users:e.items}),n({type:"SET_TOTAL_USERS_COUNT",count:e.totalCount})}))}}}))(_e),Pe=n(88),je=function(e){return function(t){return x.a.createElement(x.a.Suspense,{fallback:x.a.createElement(de.a,null)},x.a.createElement(e,t))}},ye=x.a.lazy((function(){return n.e(4).then(n.bind(null,303))})),Ce=x.a.lazy((function(){return n.e(3).then(n.bind(null,302))})),Ie=function(e){function t(){return Object(L.a)(this,t),Object(z.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(F.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?x.a.createElement("div",{className:"app-wrapper"},x.a.createElement(X,null),x.a.createElement(V,null),x.a.createElement("div",{className:"app-wrapper-content"},x.a.createElement(M.b,{path:"/profile/:userId?",render:je(Ce)}),x.a.createElement(M.b,{path:"/dialogs",render:je(ye)}),x.a.createElement(M.b,{path:"/users",render:function(){return x.a.createElement(Se,null)}}),x.a.createElement(M.b,{path:"/news",component:Z}),x.a.createElement(M.b,{path:"/music",component:Q}),x.a.createElement(M.b,{path:"/login",render:function(){return x.a.createElement(Pe.a,null)}}))):x.a.createElement(de.a,null)}}]),t}(k.Component),Ne=Object(r.d)(M.f,Object(H.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(_.b)());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(Ie),Te=function(e){return x.a.createElement(D.a,null,x.a.createElement(H.a,{store:T},x.a.createElement(Ne,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ke(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}A.a.render(x.a.createElement(Te,null),document.getElementById("root")),ke(),ke()},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return d}));var r=n(9),a=n.n(r),o=n(8),u=n(12),c=n(38),i="samurai-network/auth/SET_USER_DATA",s={id:null,login:null,email:null,isAuth:!1},l=function(e,t,n,r){return{type:i,payload:{userId:e,login:t,email:n,isAuth:r}}},f=function(){return function(e){var t,n,r,o,c;return a.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,a.a.awrap(u.a.me());case 2:0===(t=i.sent).data.resultCode&&(n=t.data.data,r=n.id,o=n.login,c=n.email,e(l(r,o,c,!0)));case 5:case"end":return i.stop()}}))}},m=function(e,t,n){return function(r){var o,i;return a.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,a.a.awrap(u.a.login(e,t,n));case 2:0===(o=s.sent).data.resultCode?r(f()):(i=o.data.messages.length>0?o.data.messages[0]:"Some error",r(Object(c.a)("login",{_error:i})));case 4:case"end":return s.stop()}}))}},d=function(e,t,n){return function(r){return a.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,a.a.awrap(u.a.logout(e,t,n));case 2:0===o.sent.data.resultCode&&r(l(null,null,null,!1));case 4:case"end":return o.stop()}}))}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(o.a)({},e,{},t.payload);default:return e}}},37:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return m}));var r=n(55),a=n(0),o=n.n(a),u=n(52),c=n.n(u),i=n(89),s=(n(48),function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,u=r&&n;return o.a.createElement("div",{className:c.a.formControl+" "+(u?c.a.error:"")},o.a.createElement("div",null,a),u&&o.a.createElement("span",null,r))}),l=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e," ",o.a.createElement("input",Object.assign({},t,n))," ")},f=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e," ",o.a.createElement("textarea",Object.assign({},t,n))," ")},m=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(i.a,Object.assign({placeholder:e,name:t,validate:n,component:r},a))," ",u)}},41:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(140),u=n.n(o);t.a=function(e){return a.a.createElement("div",null,a.a.createElement("img",{src:u.a}))}},48:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbol ")}}},52:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2la_n",error:"FormsControls_error__3lFaq",formSummaryError:"FormsControls_formSummaryError__lCLmp"}},71:function(e,t,n){e.exports={pageNumber:"Paginator_pageNumber__xpPMx",selectedPage:"Paginator_selectedPage__2AOrc",paginator:"Paginator_paginator__OnrdY"}},88:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(90),u=n(37),c=n(48),i=n(10),s=n(33),l=n(23),f=n(52),m=n.n(f),d=Object(c.a)(20),p=Object(o.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return a.a.createElement("form",{onSubmit:t},a.a.createElement("div",null,Object(u.c)("Email","email",[c.b,d],u.a),Object(u.c)("Password","password",[c.b],u.a,{type:"password"}),Object(u.c)(null,"rememberMe",[],u.a,{type:"checkbox"},"remember me"),a.a.createElement("div",null," ",a.a.createElement("button",null,"Login"),"  "),n&&a.a.createElement("div",{className:m.a.formSummaryError},n)))}));t.a=Object(i.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:s.c})((function(e){return e.isAuth?a.a.createElement(l.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"LOGIN"),a.a.createElement(p,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))}))},96:function(e,t,n){e.exports={header:"Header_header__15lcY",loginBlock:"Header_loginBlock__3mhhe"}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return m})),n.d(t,"e",(function(){return d}));var r=n(9),a=n.n(r),o=n(42),u=n(8),c=n(12),i={posts:[{id:1,name:"Hi, how are you?",likesCounter:"325"},{id:2,name:"It's my first post",likesCounter:"47"},{id:3,name:"I work succsesfully",likesCounter:"27"},{id:4,name:"I'm here",likesCounter:"45"}],newPostText:"it-kamasutra",profile:null,status:""},s=function(e){return{type:"ADD-POST",newPostText:e}},l=function(e){return{type:"SET_STATUS",status:e}},f=function(e){return function(t){var n;return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.a.awrap(c.c.getProfile(e));case 2:n=r.sent,t({type:"SET_USER_PROFILE",profile:n.data});case 4:case"end":return r.stop()}}))}},m=function(e){return function(t){var n;return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.a.awrap(c.b.getStatus(e));case 2:n=r.sent,t(l(n.data));case 4:case"end":return r.stop()}}))}},d=function(e){return function(t){return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.a.awrap(c.b.updateStatus(e));case 2:0===n.sent.data.resultCode&&t(l(e));case 4:case"end":return n.stop()}}))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:2,name:t.newPostText,likesCounter:2};return Object(u.a)({},e,{posts:[].concat(Object(o.a)(e.posts),[n]),newPostText:""});case"SET_USER_PROFILE":return Object(u.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(u.a)({},e,{status:t.status});case"DELETE_POST":return Object(u.a)({},e,{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}}},[[167,1,2]]]);
//# sourceMappingURL=main.002e64c1.chunk.js.map