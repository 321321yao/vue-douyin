(function(e){function t(t){for(var r,a,c=t[0],i=t[1],s=t[2],f=0,d=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"assets/js/"+({}[e]||e)+"."+{"chunk-38e9b03c":"8ea45c39","chunk-4357c261":"3f2f7c89","chunk-4f47f3c9":"46cf8434","chunk-5f889348":"6ef96a2d","chunk-7a44960a":"b62d96c0","chunk-986c3f4a":"2e320395","chunk-ecee81dc":"4296bec7"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-38e9b03c":1,"chunk-4357c261":1,"chunk-4f47f3c9":1,"chunk-5f889348":1,"chunk-7a44960a":1,"chunk-986c3f4a":1,"chunk-ecee81dc":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="assets/css/"+({}[e]||e)+"."+{"chunk-38e9b03c":"0b573094","chunk-4357c261":"054ed3f1","chunk-4f47f3c9":"ad415b01","chunk-5f889348":"64540147","chunk-7a44960a":"ad415b01","chunk-986c3f4a":"157c6365","chunk-ecee81dc":"ad5e8f13"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],f=s.getAttribute("data-href");if(f===r||f===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],l.parentNode.removeChild(l),n(u)},l.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=c(e);var d=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=f;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"loginByPassword",(function(){return P})),n.d(r,"logout",(function(){return C})),n.d(r,"getNums",(function(){return I}));var a={};n.r(a),n.d(a,"isLogged",(function(){return N})),n.d(a,"loginInfo",(function(){return R})),n.d(a,"statistic",(function(){return A}));n("cadf"),n("551c"),n("f751"),n("097d");var o,u=n("2b0e"),c=n("5c96"),i=n.n(c),s=(n("0fae"),n("f867"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),f=[],d=n("2877"),l={},p=Object(d["a"])(l,s,f,!1,null,null,null),h=p.exports,m=n("8c4f"),b=n("2f62"),g={isLogged:!1,loginInfo:{},statistic:{today:{},sum:{}}},v=g,k=n("bd86"),w="SET_ISLOGGED",y="SET_LOGININFO",O="SET_STATISTIC",x=(o={},Object(k["a"])(o,w,(function(e,t){e.isLogged=t})),Object(k["a"])(o,y,(function(e,t){e.loginInfo=t})),Object(k["a"])(o,O,(function(e,t){e.statistic=t})),o),j=x,E=(n("96cf"),n("3b8d")),L=n("bc3a"),S=n.n(L),T="http://127.0.0.1:3000",_=S.a.create({baseURL:T,withCredentials:!0}),P=function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,t.state,e.next=3,_.post("/api/common/admin/loginByPassword",{email:n.username,password:n.password});case 3:if(a=e.sent,200!==a.status){e.next=9;break}r(w,!0),r(y,a.data.data),e.next=10;break;case 9:throw new Error("login fail");case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),C=function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=t.commit,r(w,!1),r(y,{});case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),I=function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,t.state,e.next=3,_.get("/api/admin/getNums");case 3:if(r=e.sent,200!==r.status){e.next=8;break}n(O,r.data.data),e.next=9;break;case 8:throw new Error("network error");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(e){return e.isLogged},R=function(e){return e.loginInfo},A=function(e){return e.statistic},B=n("b054"),M=n.n(B);u["default"].use(b["a"]);var U=!1,D=new b["a"].Store({actions:r,getters:a,state:v,mutations:j,strict:U,plugins:U?[M()()]:[]});u["default"].use(m["a"]);var G=new m["a"]({routes:[{path:"/",component:function(){return n.e("chunk-986c3f4a").then(n.bind(null,"a55b"))}},{path:"/index",component:function(){return n.e("chunk-38e9b03c").then(n.bind(null,"d504"))},children:[{path:"",component:function(){return n.e("chunk-4357c261").then(n.bind(null,"bb51"))}},{path:"/userList",component:function(){return n.e("chunk-ecee81dc").then(n.bind(null,"ab3a"))},meta:["数据管理","用户列表"]},{path:"/videoList",component:function(){return n.e("chunk-5f889348").then(n.bind(null,"f0d0"))},meta:["数据管理","视频列表"]},{path:"/addUser",component:function(){return n.e("chunk-4f47f3c9").then(n.bind(null,"58af"))},meta:["添加数据","添加用户"]},{path:"/addVideo",component:function(){return n.e("chunk-7a44960a").then(n.bind(null,"605d"))},meta:["添加数据","添加视频"]}]}]});G.beforeEach((function(e,t,n){D.state.isLogged||"/"===e.path?n():n({path:"/"})}));var $=G,q=S.a.create({baseURL:T,withCredentials:!0});u["default"].prototype.$axios=q,u["default"].config.productionTip=!1,u["default"].use(i.a),new u["default"]({router:$,store:D,render:function(e){return e(h)}}).$mount("#app")},f867:function(e,t,n){}});