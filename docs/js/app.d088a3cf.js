(function(t){function e(e){for(var a,n,o=e[0],l=e[1],c=e[2],u=0,m=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&m.push(r[n][0]),r[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,o=1;o<s.length;o++){var l=s[o];0!==r[l]&&(a=!1)}a&&(i.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},r={app:0},i=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/Online_Dating_App/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034b":function(t,e,s){},"034f":function(t,e,s){"use strict";s("85ec")},"2f1e":function(t,e,s){},"43d9":function(t,e,s){},"45f3":function(t,e,s){"use strict";s("ea88")},"4d42":function(t,e,s){"use strict";s("ebbb")},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{attrs:{id:"app"}},[s("Header"),s("v-main",[s("router-view")],1)],1)},i=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-app-bar",{attrs:{app:"",color:"indigo lighten-1",elevation:"4",dark:""}},[s("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!0}}}),t.isUserPage?s("v-toolbar-title",[t._v(t._s(t.getUserById(t.id).name))]):t.isMessageList?s("v-toolbar-title",[t._v(" Message List ")]):s("v-toolbar-title",[t._v("Online Dating App")])],1),s("v-navigation-drawer",{staticClass:"drawer",attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[s("v-list",{attrs:{nav:"",dense:""}},[s("v-list-item-group",{attrs:{"active-class":"indigo--text text--lighten-3"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[s("router-link",{attrs:{to:"/user"}},[s("v-list-item",[s("v-list-item-icon",[s("v-icon",{attrs:{color:"indigo lighten-1"}},[t._v("mdi-account-group")])],1),s("v-list-item-title",[t._v("User List")])],1)],1),s("router-link",{attrs:{to:"/message-list"}},[s("v-list-item",[s("v-list-item-icon",[s("v-icon",{attrs:{color:"indigo lighten-1"}},[t._v("mdi-chat-processing")])],1),s("v-list-item-title",[t._v("Message List")])],1)],1)],1)],1)],1)],1)},o=[],l=s("2f62"),c={data:()=>({drawer:!1,group:null}),computed:{id(){return this.$route.params.id},isMessageList(){return"/message-list"===this.$route.fullPath},isUserPage(){return void 0!==this.id},...Object(l["c"])(["getUserById"])}},d=c,u=(s("b68c"),s("2877")),m=s("6544"),g=s.n(m),p=s("40dc"),v=s("5bc1"),f=s("132d"),h=s("8860"),b=s("da13"),_=s("1baa"),C=s("34c3"),y=s("5d23"),k=s("f774"),x=s("2a7f"),U=Object(u["a"])(d,n,o,!1,null,"4c63c582",null),w=U.exports;g()(U,{VAppBar:p["a"],VAppBarNavIcon:v["a"],VIcon:f["a"],VList:h["a"],VListItem:b["a"],VListItemGroup:_["a"],VListItemIcon:C["a"],VListItemTitle:y["a"],VNavigationDrawer:k["a"],VToolbarTitle:x["a"]});var M={name:"App",components:{Header:w},data:()=>({}),created:function(){s("ed18").config(),this.$store.dispatch("fetchUsers")}},L=M,O=(s("034f"),s("7496")),I=s("f6c4"),j=Object(u["a"])(L,r,i,!1,null,null,null),V=j.exports;g()(j,{VApp:O["a"],VMain:I["a"]});var B=s("bc3a"),$=s.n(B);const A={users:[],usersAreEmply:!0},E={getAllUsers:t=>t.users,getUserById:t=>e=>t.users.find(t=>t.id===e)},S={fetchUsers:async function({commit:t}){if(A.usersAreEmply){this.commit("setIsLoading",!0);let e=[];const s=await $.a.get("https://randomuser.me/api/?results=30");console.log(s.data);for(let t=0;t<30;t++){let a={id:s.data.results[t].login.uuid,name:s.data.results[t].name.first+" "+s.data.results[t].name.last,gender:s.data.results[t].gender,age:s.data.results[t].dob.age,country:s.data.results[t].location.country,state:s.data.results[t].location.state,city:s.data.results[t].location.city,email:s.data.results[t].email,imgUrl:s.data.results[t].picture.large,talked:!1};e.push(a)}this.commit("setUsersAreEmpty",!1),this.commit("setIsLoading",!1),t("setUsers",e)}},setUsersAreEmpty:function({commit:t},e){t("setUsersAreEmpty",e)},setTalkedUser:function({commit:t},e){t("setTalkedUser",e)}},T={setUsers:function(t,e){t.users=e},setUsersAreEmpty:function(t,e){t.usersAreEmply=e},setTalkedUser:function(t,e){t.users.find(t=>t.id===e)["talked"]=!0}};var P={state:A,getters:E,actions:S,mutations:T};class D{constructor(t,e,s,a){this.message=t,this.date=e,this.timeStamp=s,this.isMine=a}}const H={messages:[]},z={getMessages:t=>t.messages,getChatLogById:t=>e=>t.messages.find(t=>t.id===e).chatLog,getLastChat:t=>e=>{const s=t.messages.find(t=>t.id===e).chatLog;return s[s.length-1]}},F={fetchReply:function({commit:t},{id:e,message:s}){let a=new FormData;a.append("apikey","DZZpsK1EbHaKZnzceM1H6L2tAAp6iYtQ"),a.append("query",s);let r=new D;fetch("https://api.a3rt.recruit.co.jp/talk/v1/smalltalk",{method:"POST",body:a}).then(t=>t.json()).then(s=>{const a=new Date;r.date=a.getFullYear()+"/"+a.getMonth()+"/"+a.getDay(),r.timeStamp=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds(),r.message=s.results[0].reply,r.isMine=!1,t("setMessage",{id:e,chat:r})})},setMessage:function({commit:t},{id:e,message:s}){let a=new D;const r=new Date;a.date=r.getFullYear()+"/"+r.getMonth()+"/"+r.getDay(),a.timeStamp=r.getHours()+":"+r.getMinutes()+":"+r.getSeconds(),a.message=s,a.isMine=!0,t("setMessage",{id:e,chat:a})},setMessageObj:function({commit:t},e){t("setMessageObj",e)}},R={setMessageObj:(t,e)=>{const s={id:e,chatLog:[]};t.messages.push(s)},setMessage:(t,{id:e,chat:s})=>{t.messages.find(t=>t.id===e).chatLog.push(s)}};var K={state:H,getters:z,actions:F,mutations:R};a["a"].use(l["a"]);var Y=new l["a"].Store({state:{isLoading:!1},actions:{setIsLoading:function({commit:t},e){t("setIsLoading",e)}},mutations:{setIsLoading:function(t,e){t.isLoading=e}},modules:{users:P,messages:K}}),Z=s("f309");a["a"].use(Z["a"]);var G=new Z["a"]({}),J=s("8c4f"),N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-gradient"},[s("p",{staticClass:"dark-purple large-font"},[t._v("Wellcome to")]),s("p",{staticClass:"dark-purple large-font"},[t._v("Online Dating App")]),s("router-link",{attrs:{to:"/user"}},[s("v-btn",{staticClass:"my-3 mx-2 white--text",attrs:{color:"indigo lighten-1"}},[t._v(" Show All Users ")])],1)],1)},q=[],Q={name:"TopPage"},W=Q,X=(s("dc7a"),s("8336")),tt=Object(u["a"])(W,N,q,!1,null,"2c8de590",null),et=tt.exports;g()(tt,{VBtn:X["a"]});var st=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[t.isLoading?s("Loading"):t._e(),s("UserCard")],1)},at=[],rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},t._l(t.getAllUsers,(function(e,a){return s("div",{key:a},[s("div",{staticClass:"user-card"},[s("v-avatar",{staticClass:"mb-5",attrs:{size:"180"}},[s("img",{attrs:{src:""+e.imgUrl}})]),s("h2",{staticClass:"montserrat dark-purple pb-1"},[t._v(" "+t._s(e.name)+" ")]),s("h3",{staticClass:"montserrat dark-purple pb-1"},[t._v("Age: "+t._s(e.age))]),s("h3",{staticClass:"montserrat dark-purple pb-1"},[s("v-icon",{attrs:{color:"indigo darken-2"}},[t._v(" mdi-map-marker ")]),t._v(" "+t._s(e.country)+" ")],1),s("div",{staticClass:"btns"},[s("router-link",{attrs:{to:"/user/"+e.id}},[s("v-btn",{staticClass:"my-3 mx-2 white--text",attrs:{color:"indigo lighten-1"}},[t._v(" Profile ")])],1),s("router-link",{attrs:{to:"/user/"+e.id+"/chat"}},[s("v-btn",{staticClass:"my-3 mx-2 white--text",attrs:{color:"indigo lighten-1"}},[t._v(" Message ")])],1)],1)],1)])})),0)},it=[],nt={name:"UserCards",computed:{...Object(l["c"])(["getAllUsers"])},methods:{}},ot=nt,lt=(s("5b03"),s("8212")),ct=Object(u["a"])(ot,rt,it,!1,null,"15ef1179",null),dt=ct.exports;g()(ct,{VAvatar:lt["a"],VBtn:X["a"],VIcon:f["a"]});var ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"loading"})},mt=[],gt={name:"Loading"},pt=gt,vt=(s("4d42"),Object(u["a"])(pt,ut,mt,!1,null,"c15ab1b2",null)),ft=vt.exports,ht={name:"UserList",components:{UserCard:dt,Loading:ft},computed:{...Object(l["d"])(["isLoading"])},methods:{...Object(l["b"])(["fetchUsers"])},created:function(){this.fetchUsers()}},bt=ht,_t=(s("b1f8"),Object(u["a"])(bt,st,at,!1,null,"274b4f03",null)),Ct=_t.exports,yt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-gradient"},[s("v-avatar",{staticClass:"mb-5",attrs:{size:"180"}},[s("img",{attrs:{src:""+t.getUserById(t.id).imgUrl}})]),s("div",{staticClass:"text-center mb-5"},[s("h2",{staticClass:"montserrat dark-purple mb-2"},[t._v(" "+t._s(t.getUserById(t.id).name)+" ")]),s("div",{staticClass:"d-flex"},[s("v-icon",{attrs:{color:"indigo lighten-1"}},[t._v(" mdi-email ")]),s("h3",{staticClass:"montserrat dark-purple font-small"},[t._v(" "+t._s(t.getUserById(t.id).email)+" ")])],1)]),s("div",{staticClass:"list"},[t._m(0),s("div",{staticClass:"text-right"},[s("h3",{staticClass:"montserrat dark-purple"},[t._v(t._s(t.getUserById(t.id).gender))])])]),s("div",{staticClass:"list"},[t._m(1),s("div",{staticClass:"text-right"},[s("h3",{staticClass:"montserrat dark-purple"},[t._v(t._s(t.getUserById(t.id).age))])])]),s("div",{staticClass:"list"},[t._m(2),s("div",{staticClass:"text-right"},[s("h3",{staticClass:"montserrat dark-purple"},[t._v(t._s(t.getUserById(t.id).country))])])]),s("div",{staticClass:"list"},[t._m(3),s("div",{staticClass:"text-right"},[s("h3",{staticClass:"montserrat dark-purple"},[t._v(t._s(t.getUserById(t.id).state))])])]),s("div",{staticClass:"list"},[t._m(4),s("div",{staticClass:"text-right"},[s("h3",{staticClass:"montserrat dark-purple"},[t._v(t._s(t.getUserById(t.id).city))])])]),s("div",{staticClass:"btn-container"},[s("router-link",{attrs:{to:"/user"}},[s("v-btn",{staticClass:"ma-4 white--text",attrs:{color:"indigo lighten-1"}},[s("v-icon",[t._v("mdi-arrow-u-left-bottom-bold")]),t._v(" Back ")],1)],1),s("router-link",{attrs:{to:"/user/"+t.id+"/chat"}},[s("v-btn",{staticClass:"ma-2 white--text",attrs:{color:"indigo lighten-1"}},[t._v(" Message ")])],1)],1)],1)},kt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-left"},[s("h3",{staticClass:"montserrat dark-purple"},[t._v("Gender")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-left"},[s("h3",{staticClass:"montserrat dark-purple"},[t._v("Age")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-left"},[s("h3",{staticClass:"montserrat dark-purple"},[t._v("Country")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-left"},[s("h3",{staticClass:"montserrat dark-purple"},[t._v("State")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-left"},[s("h3",{staticClass:"montserrat dark-purple"},[t._v("City")])])}],xt={name:"UserDetail",computed:{id(){return this.$route.params.id},...Object(l["c"])(["getUserById"])}},Ut=xt,wt=(s("d500"),Object(u["a"])(Ut,yt,kt,!1,null,"bd8176a8",null)),Mt=wt.exports;g()(wt,{VAvatar:lt["a"],VBtn:X["a"],VIcon:f["a"]});var Lt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-gradient"},[s("ChatLog"),s("v-footer",{attrs:{fixed:"",inset:"",height:"70",color:"white"}},[s("v-row",[s("router-link",{attrs:{to:"/user"}},[t.$vuetify.breakpoint.xs?t._e():s("v-btn",{staticClass:"mt-6 mx-3",attrs:{icon:"",small:"",color:"indigo lighten-1"}},[s("v-icon",{attrs:{color:"indigo lighten-1"}},[t._v("mdi-account-group")])],1)],1),s("v-text-field",{staticClass:"montserrat mt-5 ml-3",attrs:{label:"Message",color:"indigo lighten-1",clearable:"",outlined:"",rounded:"",dense:""},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.onKeydownEnter(e.keyCode,t.getUserById(t.id))}},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),s("v-btn",{staticClass:"mt-6 mx-3",attrs:{icon:"",small:"",color:"indigo lighten-1",disabled:!t.message},on:{click:function(e){t.sendMessage(t.getUserById(t.id))}}},[s("v-icon",{attrs:{color:"indigo lighten-1"}},[t._v("mdi-send")])],1)],1)],1)],1)},Ot=[],It=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},t._l(t.getChatLogById(t.id),(function(e,a){return s("div",{key:a},[s("v-row",{class:{"justify-end":e.isMine}},[s("v-avatar",{staticClass:"ml-5 mt-5",attrs:{size:"70"}},[e.isMine?t._e():s("img",{attrs:{src:""+t.getUserById(t.id).imgUrl}})]),s("div",[s("div",{staticClass:"rounded-lg montserrat white--text pa-3 ma-4 drop-shadow",class:{"deep-purple lighten-1":e.isMine,"indigo lighten-1":!e.isMine,"rounded-br-0":e.isMine,"rounded-bl-0":!e.isMine}},[s("p",{staticClass:"message-text"},[t._v(" "+t._s(e.message)+" ")])]),s("div",{staticClass:"montserrat dark-purple mx-5 text-end"},[t._v(" "+t._s(e.date)+" "+t._s(e.timeStamp)+" ")])])],1)],1)})),0)},jt=[],Vt={name:"ChatLog",computed:{id(){return this.$route.params.id},...Object(l["c"])(["getChatLogById","getUserById"])},methods:{}},Bt=Vt,$t=(s("6381"),s("0fd9")),At=Object(u["a"])(Bt,It,jt,!1,null,"4134d27d",null),Et=At.exports;g()(At,{VAvatar:lt["a"],VRow:$t["a"]});var St={name:"Chat",data(){return{message:""}},components:{ChatLog:Et},computed:{id(){return this.$route.params.id},...Object(l["c"])(["getUserById"])},methods:{onKeydownEnter:function(t,e){13===t&&this.sendMessage(e)},sendMessage:function(t){t.talked||(this.$store.dispatch("setMessageObj",this.id),this.$store.dispatch("setTalkedUser",this.id)),this.$store.dispatch("setMessage",{id:this.id,message:this.message}),this.$store.dispatch("fetchReply",{id:this.id,message:this.message})}}},Tt=St,Pt=(s("6be4"),s("553a")),Dt=s("8654"),Ht=Object(u["a"])(Tt,Lt,Ot,!1,null,"19dd9af2",null),zt=Ht.exports;g()(Ht,{VBtn:X["a"],VFooter:Pt["a"],VIcon:f["a"],VRow:$t["a"],VTextField:Dt["a"]});var Ft=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-gradient"},[s("v-col",{attrs:{cols:"12"}},t._l(t.getMessages,(function(e,a){return s("div",{key:a},[s("router-link",{attrs:{to:"/user/"+e.id+"/chat"}},[s("v-card",{staticClass:"ma-2 mx-md-4 px-1 px-md-3"},[s("v-card-text",[s("v-row",{attrs:{align:"center"}},[s("v-col",{attrs:{cols:"4",sm:"3"}},[s("v-avatar",{staticClass:"mr-4",attrs:{size:"70"}},[s("img",{attrs:{src:""+t.getUserById(e.id).imgUrl}})])],1),s("v-col",{attrs:{cols:"8",sm:"6"}},[s("p",{staticClass:"title montserrat dark-purple"},[t._v(" "+t._s(t.getUserById(e.id).name)+" ")]),s("p",{staticClass:"subtitle-1 montserrat dark-purple"},[t._v(" "+t._s(t.getLastChat(e.id).message)+" ")])]),s("v-col",{attrs:{cols:"8",sm:"3"}},[s("p",{staticClass:"body-2 montserrat dark-purple text-right"},[t._v(" "+t._s(t.getLastChat(e.id).date)+" "),t.$vuetify.breakpoint.mobile?t._e():s("br"),t._v(" "+t._s(t.getLastChat(e.id).timeStamp)+" ")])])],1)],1)],1)],1)],1)})),0)],1)},Rt=[],Kt={name:"MessageList",computed:{...Object(l["c"])(["getMessages","getUserById","getLastChat"])},methods:{}},Yt=Kt,Zt=(s("45f3"),s("b0af")),Gt=s("99d9"),Jt=s("62ad"),Nt=Object(u["a"])(Yt,Ft,Rt,!1,null,"348049f5",null),qt=Nt.exports;g()(Nt,{VAvatar:lt["a"],VCard:Zt["a"],VCardText:Gt["a"],VCol:Jt["a"],VRow:$t["a"]}),a["a"].use(J["a"]);const Qt=[{path:"/",name:"toppage",component:et},{path:"/user",name:"userlist",component:Ct},{path:"/user/:id",name:"userdetail",component:Mt},{path:"/user/:id/chat",name:"chat",component:zt},{path:"/message-list",name:"messagelist",component:qt}];var Wt=new J["a"]({mode:"history",base:"/Online_Dating_App/",routes:Qt});s("034b");a["a"].config.productionTip=!1,new a["a"]({store:Y,vuetify:G,router:Wt,render:t=>t(V)}).$mount("#app")},"5b03":function(t,e,s){"use strict";s("df71")},"5ec3":function(t,e,s){},6381:function(t,e,s){"use strict";s("5ec3")},"6be4":function(t,e,s){"use strict";s("ff84")},"85ec":function(t,e,s){},a1c9:function(t,e,s){},b1f8:function(t,e,s){"use strict";s("a1c9")},b68c:function(t,e,s){"use strict";s("43d9")},d500:function(t,e,s){"use strict";s("f1cf")},dc7a:function(t,e,s){"use strict";s("2f1e")},df71:function(t,e,s){},ea88:function(t,e,s){},ebbb:function(t,e,s){},f1cf:function(t,e,s){},ff84:function(t,e,s){}});
//# sourceMappingURL=app.d088a3cf.js.map