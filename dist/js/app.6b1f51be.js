(function(t){function e(e){for(var a,s,c=e[0],r=e[1],l=e[2],d=0,p=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var r=n[c];0!==i[r]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"03b8":function(t,e,n){},"09d1":function(t,e,n){},"14d5":function(t,e,n){"use strict";n("5435")},2395:function(t,e,n){},"23fa":function(t,e,n){"use strict";n("b19d")},"254e":function(t,e,n){"use strict";n("a2a1")},"27c4":function(t,e,n){},"2b6b":function(t,e,n){},3087:function(t,e,n){"use strict";n("ad0c")},"32a9":function(t,e,n){t.exports=n.p+"img/jiangpai3.f2d0cfb5.svg"},"40d8":function(t,e,n){"use strict";n("d866")},5435:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("0fae");var a=n("9e2f"),i=n.n(a),o=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"}}),n("el-container",{staticClass:"home-container"},[n("el-header",{attrs:{height:"56px"}},[n("app-header")],1),n("el-container",[n("el-aside",{attrs:{width:"200px"}},[n("app-aside")],1),n("el-main",[n("router-view"),n("div",{staticClass:"copyright"},[t._v("Copyright © 2021 hello happy Incorporated. All rights reserved.")])],1)],1)],1)],1)},c=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[t._m(0),t._m(1),a("div",{staticClass:"right"},[a("i",{staticClass:"iconfont icon-tixing"}),a("i",{staticClass:"iconfont icon-quanping"}),a("img",{attrs:{src:t.userimg?"":n("6cd4"),alt:""}}),a("span",[t._v(t._s(t.name))])])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left"},[a("img",{attrs:{src:n("cf05"),alt:""}}),a("span",[t._v("某某云平台")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"center"},[n("i",{staticClass:"iconfont icon-table"}),n("i",{staticClass:"iconfont icon-shuaxin"}),n("span",[t._v("企业功能")]),n("span",[t._v("帮助文档")])])}],u={name:"AppHeader",data:function(){return{userimg:"",name:"某某某科技有限公司"}}},d=u,p=(n("824f"),n("2877")),m=Object(p["a"])(d,r,l,!1,null,"2d87116c",null),f=m.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-menu",{attrs:{"background-color":"#fff","text-color":"#8c8c8c","active-text-color":"#014da1","unique-opened":!0,router:!0}},[n("el-menu-item",{attrs:{index:"/home"}},[n("template",{slot:"title"},[n("i",{staticClass:"iconfont icon-zhuye"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("控制台")])])],2),t._l(t.menulist,(function(e,a){return n("el-submenu",{key:a,attrs:{index:e.path+" "}},[n("template",{slot:"title"},[n("i",{staticClass:"iconfont",class:e.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.auName))])]),t._l(e.children,(function(e,a){return n("el-menu-item",{key:a,attrs:{index:"/"+e.path}},[n("template",{slot:"title"},[n("i",{staticClass:"iconfont icon-yingyongzhongxin"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.auName))])])],2)}))],2)}))],2)},v=[];n("bc3a");function g(){}var _={name:"AppAside",components:{getMenuList:g},data:function(){return{menulist:[]}},created:function(){this.menulist=[{auName:"标识管理",icon:"icon-shuju",path:"Home",children:[{auName:"导航一",icon:"icon-gouwuche",path:"Identi"},{auName:"导航二",icon:"icon-gouwuche",path:"2-2"}]},{auName:"产品管理",icon:"icon-shuju",path:"3"},{auName:"营销管理",icon:"icon-diannao",path:"4"},{auName:"商城管理",icon:"icon-gouwuche",path:"5"},{auName:"电子质保",icon:"icon-zhibao",path:"6"},{auName:"防窜管理",icon:"icon-bd-",path:"7"},{auName:"消源管理",icon:"icon-lianjie",path:"8"},{auName:"统计分析",icon:"icon-statistic",path:"9"},{auName:"组织结构",icon:"icon-zuzhi",path:"10"},{auName:"应用中心",icon:"icon-yingyongzhongxin",path:"11"}]},methods:{}},b=_,C=(n("254e"),Object(p["a"])(b,h,v,!1,null,"05ad860c",null)),y=C.exports,x={name:"App",components:{AppAside:y,AppHeader:f}},k=x,w=(n("7c55"),Object(p["a"])(k,s,c,!1,null,null,null)),j=w.exports,O=n("eedf"),N=n.n(O);o["default"].use(N.a);var T=n("1f94"),E=n.n(T),$=(n("ed2c"),n("8c4f")),A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{attrs:{gutter:10,justify:"space-between"}},[n("el-col",{attrs:{span:18,xs:24}},[n("el-row",{attrs:{gutter:10,justify:"space-between"}},[n("el-col",{attrs:{span:8,xs:24}},[n("Welcome",{staticClass:"grid-content row1-1"})],1),n("el-col",{attrs:{span:16,xs:24}},[n("el-row",{attrs:{gutter:10,justify:"space-between"}},[n("el-col",{attrs:{span:12}},[n("leftover",{staticClass:"grid-content row1-2",attrs:{title:"账户余额",num:t.accountLeft,btnleft:"充值记录",btnright:"消费记录"},on:{leftClick:t.accountInRecord,rightClick:t.accountOutRecord}})],1),n("el-col",{attrs:{span:12}},[n("leftover",{staticClass:"grid-content row1-2",attrs:{title:"剩余码量",num:t.codeNum,btnleft:"立即购买",btnright:"购买记录"},on:{leftClick:t.codeBuy,rightClick:t.codeBuyRecord}})],1)],1),n("el-row",[n("NumTable",{staticClass:"grid-content row2-2"})],1)],1)],1),n("el-row",[n("el-col",[n("home-chart",{staticClass:"grid-content row3-1"})],1)],1)],1),n("el-col",{attrs:{span:6,xs:24}},[n("el-row",{attrs:{gutter:10,justify:"space-between"}},[n("el-col",[n("button",{staticClass:"button row1-2-1_4"},[t._v("企业型入口")])]),n("el-col",[n("home-todo",{staticClass:"grid-content row1-2-3_4"})],1),n("el-col",[n("home-entrance",{staticClass:"grid-content row2-2"})],1),n("el-col",[n("home-ranking",{staticClass:"grid-content row3-1"})],1)],1)],1)],1)},H=[],z=(n("b680"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"hello"},[a("img",{attrs:{src:t.info.conpanylogo?t.info.conpanylogo:n("b1ce")}}),a("div",{staticClass:"hello-info"},[a("div",[a("span",{staticClass:"hello-com"},[t._v(t._s(t.info.name)+",您好！")]),a("el-button",{staticClass:"hello-change",attrs:{type:"text"}},[t._v("编辑资料")])],1),a("div",{staticClass:"hello-phone"},[t._v(t._s(t.phonenum))])])]),a("div",{staticClass:"company"},[a("div",[a("div",[t._v(" 企业名称："+t._s(t.info.name)+" "),a("span",{staticClass:"isnotAuth",class:{isAuth:t.info.isAuth}},[t._v(t._s(t.info.isAuth?"已认证":"未认证"))])]),a("div",[t._v(" 所属代理："+t._s(t.info.agent)+" ")])])]),a("div",{staticClass:"company-number"},[a("div",[a("p",[t._v("企业前缀")]),a("div",[t._v(t._s(t.info.companyNum))])])])])}),R=[],P=(n("fb6a"),{name:"welcome",data:function(){return{info:{name:"某某某科技有限公司",phone:"13512345678",conpanylogo:"",isAuth:"True",agent:"某某某某代理有限公司",companyNum:"88.118.1234"}}},computed:{phonenum:function(){return this.info.phone.slice(0,3)+"****"+this.info.phone.slice(7)}}}),M=P,S=(n("92b1"),Object(p["a"])(M,z,R,!1,null,"6eab74ad",null)),D=S.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"home-title"},[t._v(" "+t._s(t.title)+" ")]),n("div",{staticClass:"num"},[t._v(" "+t._s(t.num)+" ")]),n("div",{staticClass:"btn"},[n("el-button",{attrs:{type:"text"},nativeOn:{click:function(e){return t.leftClick.apply(null,arguments)}}},[t._v(t._s(t.btnleft))]),n("el-button",{attrs:{type:"text"},on:{click:t.rightClick}},[t._v(t._s(t.btnright))])],1)])},L=[],B={name:"leftover",props:{title:"",num:"",btnleft:"",btnright:""},methods:{rightClick:function(){this.$emit("rightClick")},leftClick:function(){this.$emit("leftClick")}}},q=B,F=(n("97ca"),Object(p["a"])(q,I,L,!1,null,"ac40c8c6",null)),J=F.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("table",{attrs:{rules:"cols"}},t._l(t.info,(function(e){return n("td",t._l(e,(function(e){return n("div",[n("tr",{staticClass:"home-table-num"},[t._v(t._s(e.num))]),n("tr",{staticClass:"homt-table-text"},[t._v(t._s(e.title))])])})),0)})),0)])},W=[],G={name:"NumTable",data:function(){return{info:[[{title:"今日生码总量",num:0},{title:"累计生码总量",num:1234}],[{title:"今日扫描总量",num:0},{title:"累计扫描总量",num:75}],[{title:"今日查验总量",num:0},{title:"累计查验总量",num:38}]]}}},V=G,K=(n("40d8"),Object(p["a"])(V,U,W,!1,null,"7d59f07a",null)),Q=K.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-chart",{staticClass:"vchart",attrs:{option:t.option,autoresize:!0}})},Y=[],Z=n("22b4"),tt=n("f95e"),et=n("3620"),nt=n("9394"),at=n("ff32"),it=n("4b2a"),ot=n("5c7f");Object(Z["a"])([tt["a"],nt["a"],at["a"],et["a"],it["a"]]);var st={name:"DemoChart",components:{VChart:ot["a"]},provide:{},props:{option:{}},data:function(){return{}}},ct=st,rt=Object(p["a"])(ct,X,Y,!1,null,"58f61763",null),lt=rt.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"home-title"},[t._v("标识统计趋势图")]),n("div",{staticClass:"time"},[n("el-radio-group",{attrs:{size:"mini",fill:"#014da1"},on:{change:function(e){return t.timeChange()}},model:{value:t.rstTime,callback:function(e){t.rstTime=e},expression:"rstTime"}},[n("el-radio-button",{attrs:{label:"近7天"}}),n("el-radio-button",{attrs:{label:"近30天"}}),n("el-date-picker",{staticClass:"otherTime",attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始月份","end-placeholder":"结束月份",size:"mini"},model:{value:t.rstTime,callback:function(e){t.rstTime=e},expression:"rstTime"}})],1)],1),n("demo-chart",{staticClass:"info-chart",attrs:{option:t.option}})],1)},dt=[],pt={name:"HomeChart",components:{DemoChart:lt},data:function(){return{rstTime:"近7天",otherTime:"",option:{legend:{data:["生码数量","扫描数量","查验数量"]},xAxis:{type:"category",boundaryGap:!1,data:["7.25","7.26","7.27","7.28","7.29","7.30","7.31"]},yAxis:{type:"value"},series:[{name:"生码数量",data:[2,12,5,1,5,11,4],type:"line",smooth:!0},{name:"扫描数量",type:"line",stack:"总量",data:[2,11,4,2,5,11,3],smooth:!0},{name:"查验数量",data:[1,12,5,1,4,11,3],type:"line",smooth:!0}]}}},methods:{timeChange:function(){"近7天"==this.rstTime?(this.option.xAxis.data=["7.25","7.26","7.27","7.28","7.29","7.30","7.31"],this.option.series[0].data=[2,12,5,1,5,11,4],this.option.series[1].data=[2,11,4,2,5,11,3],this.option.series[2].data=[1,12,5,1,4,11,3]):"近30天"==this.rstTime&&(this.option.xAxis.data=["7.18","7.19","7.20","7.21","7.22","7.23","7.24","7.25","7.26","7.27","7.28","7.29","7.30","7.31"],this.option.series[0].data=[2,12,5,1,5,11,4,2,1,5,8,5,11,4],this.option.series[1].data=[2,11,4,2,5,11,3,5,1,4,11,3,8,5],this.option.series[2].data=[1,12,5,1,4,11,3,2,0,4,12,5,11,3])}}},mt=pt,ft=(n("23fa"),Object(p["a"])(mt,ut,dt,!1,null,"0cfe674b",null)),ht=ft.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"home-title"},[t._v("待办事项")]),n("table",[n("td",[n("tr",{staticClass:"home-table-num"},[t._v(t._s(t.todo.ask))]),n("tr",[t._v("售后工单")])]),n("td",[n("tr",{staticClass:"home-table-num"},[t._v(t._s(t.todo.after))]),n("tr",[t._v("询价工单")])]),n("td",[n("tr",{staticClass:"home-table-num"},[t._v(t._s(t.todo.wait))]),n("tr",[t._v("待联系")])])])])},gt=[],_t={name:"HomeTodo",data:function(){return{todo:{after:0,ask:0,wait:0}}}},bt=_t,Ct=(n("922f"),Object(p["a"])(bt,vt,gt,!1,null,"b74634a0",null)),yt=Ct.exports,xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"home-title"},[t._v("常用快捷入口")]),n("div",{staticClass:"btn"},[n("el-link",{staticClass:"btn-entrance",attrs:{href:""}},[t._v("标识明细")]),n("el-link",{staticClass:"btn-entrance",attrs:{href:""}},[t._v("标识生成")]),n("el-link",{staticClass:"btn-entrance",attrs:{href:""}},[t._v("产品管理")]),n("el-link",{staticClass:"btn-entrance",attrs:{href:""}},[t._v("产品修改")]),n("el-link",{staticClass:"btn-entrance",attrs:{href:""}},[t._v("扫码统计")])],1)])},kt=[],wt={name:"HomeEntrance"},jt=wt,Ot=(n("3087"),Object(p["a"])(jt,xt,kt,!1,null,"23a350c6",null)),Nt=Ot.exports,Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"home-title"},[t._v("标识排行")]),a("table",[t._m(0),t._l(t.ranking,(function(e){return a("tr",{staticClass:"rank-item"},[a("td",[e.ranking<4?a("img",{staticClass:"info-icon",attrs:{src:n("89d9")("./jiangpai"+e.ranking+".svg")}}):t._e()]),a("td",{staticClass:"info-img"},[a("el-image",{staticStyle:{width:"30px",height:"30px"},attrs:{src:e.img}})],1),a("td",{staticClass:"info-detail"},[a("div",[t._v(t._s(e.code))]),a("div",[t._v(t._s(e.name))])]),a("td",{staticClass:"info-num"},[a("span",[t._v(t._s(e.num))]),t._v("次 ")])])}))],2)])},Et=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{staticClass:"table-title"},[n("th",{attrs:{colspan:"3"}},[t._v("标识信息")]),n("th",[t._v("扫码次数")])])}],$t={name:"HomeRanking",data:function(){return{ranking:[{ranking:1,img:"http://cdn.178hui.com/upload/2016/0802/15485692709.jpg",code:"88.188.19637/2021012345678901234455678",name:"九三维生素A大豆油",num:16},{ranking:2,img:"http://cdn.178hui.com/upload/1920/2021/0726/01220537083.jpg",code:"88.188.19637/2021098765432133466789980",name:"五大冷矿泉水[测试]",num:13},{ranking:3,img:"http://cdn.178hui.com/upload/1920/2021/0725/14420586459.jpg",code:"88.188.19637/2021012543234455677821098",name:"不知名商品一",num:12},{ranking:4,img:"http://cdn.178hui.com/upload/1920/2021/0726/17400489831.jpg",code:"88.188.19637/2021012345455677821254378",name:"不知名商品二",num:10},{ranking:5,img:"http://cdn.178hui.com/upload/1920/2021/0727/11563330828.jpg",code:"88.188.19637/2021012213346677782125678",name:"又一个不知名商品",num:7},{ranking:6,img:"http://cdn.178hui.com/upload/1920/2021/0731/00270475363.jpg",code:"88.188.19637/2021044556773444545567078",name:"还是不知名商品",num:6}]}},methods:{}},At=$t,Ht=(n("e2d4"),Object(p["a"])(At,Tt,Et,!1,null,"26cb9e91",null)),zt=Ht.exports,Rt={name:"Home",components:{HomeChart:ht,Welcome:D,Leftover:J,NumTable:Q,DemoChart:lt,HomeTodo:yt,HomeEntrance:Nt,HomeRanking:zt},data:function(){return{balance:12500,codeNum:108766}},computed:{accountLeft:function(){return"￥"+this.balance.toFixed(2)}},methods:{accountInRecord:function(){console.log("单击充值记录")},accountOutRecord:function(){console.log("单击消费记录")},codeBuy:function(){console.log("单击立即购买")},codeBuyRecord:function(){console.log("单击购买记录")}}},Pt=Rt,Mt=(n("14d5"),Object(p["a"])(Pt,A,H,!1,null,"9753c946",null)),St=Mt.exports,Dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("标识管理")])},It=[],Lt={name:"Identi"},Bt=Lt,qt=Object(p["a"])(Bt,Dt,It,!1,null,"d78f8db0",null),Ft=qt.exports;o["default"].use($["a"]);var Jt=[{path:"",redirect:"/home"},{path:"/home",component:St},{path:"/identi",component:Ft}],Ut=new $["a"]({routes:Jt,mode:"hash"}),Wt=Ut;o["default"].use(i.a),o["default"].use(E.a),o["default"].config.productionTip=!1,new o["default"]({render:function(t){return t(j)},router:Wt}).$mount("#app")},"603d":function(t,e,n){},"6cd4":function(t,e,n){t.exports=n.p+"img/userpic.586c9ef6.png"},"7c55":function(t,e,n){"use strict";n("2395")},"824f":function(t,e,n){"use strict";n("603d")},"89d9":function(t,e,n){var a={"./jiangpai1.svg":"fe1c","./jiangpai2.svg":"cbf0","./jiangpai3.svg":"32a9"};function i(t){var e=o(t);return n(e)}function o(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=o,t.exports=i,i.id="89d9"},"922f":function(t,e,n){"use strict";n("2b6b")},"92b1":function(t,e,n){"use strict";n("27c4")},"97ca":function(t,e,n){"use strict";n("09d1")},a2a1:function(t,e,n){},ad0c:function(t,e,n){},b19d:function(t,e,n){},b1ce:function(t,e,n){t.exports=n.p+"img/companylogo.71db0233.png"},cbf0:function(t,e,n){t.exports=n.p+"img/jiangpai2.9a6c981d.svg"},cf05:function(t,e,n){t.exports=n.p+"img/logo.c00469b7.png"},d866:function(t,e,n){},e2d4:function(t,e,n){"use strict";n("03b8")},ed2c:function(t,e,n){},fe1c:function(t,e,n){t.exports=n.p+"img/jiangpai1.6d96979e.svg"}});
//# sourceMappingURL=app.6b1f51be.js.map