(this.webpackJsonpTVDisplay=this.webpackJsonpTVDisplay||[]).push([[0],[,,function(e,t,a){},,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),o=(a(10),a(1));a(2);var i=function(){var e=Object(n.useState)(new Date),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(o.a)(l,2),u=i[0],s=i[1];return Object(n.useEffect)((function(){var e=setInterval((function(){c(new Date)}),1e3);return function(){return clearInterval(e)}}),[]),Object(n.useEffect)((function(){var e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][(new Date).getDay()];s(e)}),[]),r.a.createElement("div",{className:"App-header"},r.a.createElement("img",{src:"/TVDisplay/img/logo.jpg",alt:"logo",align:"left"}),r.a.createElement("div",{style:{textAlign:"right",padding:"30px"}},function(e){var t=e.getHours(),a=e.getMinutes(),n=t>=12?"PM":"AM",r=a<10?"0"+a:a;return"".concat(t%12||12,":").concat(r," ").concat(n)}(a)),r.a.createElement("div",{className:"body"},r.a.createElement("p",{style:{margin:"0 auto"}},"Today's date is: ",r.a.createElement("br",null)," ",function(){var e=new Date,t=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],a=e.getDate(),n=e.getFullYear();return"".concat(t," ").concat(a,", ").concat(n)}(),".",r.a.createElement("br",null),r.a.createElement("br",null)," Today is ",u,".")))};var u=function(){var e=Object(n.useState)(new Date),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=setInterval((function(){c(new Date)}),1e3);return function(){return clearInterval(e)}}),[]),r.a.createElement("div",{className:"App-header"},r.a.createElement("img",{src:"/TVDisplay/img/logo.jpg",alt:"logo",align:"left"}),r.a.createElement("div",{style:{textAlign:"right",padding:"30px"}},function(e){var t=e.getHours(),a=e.getMinutes(),n=t>=12?"PM":"AM",r=a<10?"0"+a:a;return"".concat(t%12||12,":").concat(r," ").concat(n)}(a)),r.a.createElement("div",{className:"body"},r.a.createElement("p",{style:{margin:"0 auto"}},"I am in Chicago, IL ",r.a.createElement("br",null),r.a.createElement("div",{style:{position:"fixed",bottom:0,left:0,right:0}},r.a.createElement("img",{src:"/TVDisplay/img/skyline.png",alt:"",style:{display:"block",margin:"0 auto",height:"35vh",width:"100vw"}})))))};var s=function(){var e=Object(n.useState)(new Date),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=setInterval((function(){c(new Date)}),1e3);return function(){return clearInterval(e)}}),[]),r.a.createElement("div",{className:"App-header"},r.a.createElement("img",{src:"/TVDisplay/img/logo.jpg",alt:"logo",align:"left"}),r.a.createElement("div",{style:{textAlign:"right",padding:"30px"}},function(e){var t=e.getHours(),a=e.getMinutes(),n=t>=12?"PM":"AM",r=a<10?"0"+a:a;return"".concat(t%12||12,":").concat(r," ").concat(n)}(a)),r.a.createElement("div",null,r.a.createElement("img",{src:"/TVDisplay/img/entrance1.jpg",alt:"entrance",style:{height:"75vh",width:"100vw",align:"center"}})))};var m=function(){var e=Object(n.useState)(new Date),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=setInterval((function(){c(new Date)}),1e3);return function(){return clearInterval(e)}}),[]),r.a.createElement("div",{className:"App-header"},r.a.createElement("img",{src:"/TVDisplay/img/logo.jpg",alt:"logo",align:"left"}),r.a.createElement("div",{style:{textAlign:"right",padding:"30px"}},function(e){var t=e.getHours(),a=e.getMinutes(),n=t>=12?"PM":"AM",r=a<10?"0"+a:a;return"".concat(t%12||12,":").concat(r," ").concat(n)}(a)),r.a.createElement("div",{className:"body"},r.a.createElement("p",null,"I am in a hospital where I focus on brain recovery.")))},g=[{component:r.a.createElement(i,null)},{component:r.a.createElement(u,null)},{component:r.a.createElement(s,null)},{component:r.a.createElement(m,null)}];var v=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=setInterval((function(){c((a+1)%g.length)}),15e3);return function(){return clearInterval(e)}}),[a]),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,g[a].title),g[a].component)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.aa473123.chunk.js.map