(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[10],{618:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(628);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},619:function(e,t,n){"use strict";t.a={fxns:{endpoint:"http://fhsvoting.com/votes/biz/bis/",resources:"http://fhsvoting.com/votes/biz/img/",login:function(e,t){return fetch(t,{method:"post",body:e}).then((function(e){return e.json()}))},base:function(e,t){return fetch(t,{method:"post",body:e}).then((function(e){return e.json()}))},basicdata:function(e,t){return fetch(t,{method:"post",body:e}).then((function(e){return e.json()}))},loaddata:function(e,t){return fetch(t,{method:"post",body:e}).then((function(e){return e.json()}))},send:function(e,t){return fetch(t,{method:"post",body:e}).then((function(e){return e.json()}))},getfile:function(e,t){return fetch(t,{method:"post",body:e}).then((function(e){return e.blob()}))},logout:function(e,t){return fetch(t,{method:"post",body:e}).then((function(e){return e.json()}))},usercombo:function(e,t){return fetch(t,{method:"post",body:e}).then((function(e){return e.json()}))},combo:function(e,t){return fetch(t,{method:"post",body:e}).then((function(e){return e.json()}))},submit:function(e,t){return fetch(t,{method:"post",body:e}).then((function(e){return e.json()}))}},utils:{formatpostsearch:function(e){return r(e)},findcandidates:function(e){return o(e)}}};var r=function(e){var t=e.dbcfg,n=e.params,r=new FormData;for(var o in n)"sdt"===o||"edt"===o||r.append(o,n[o]);return r.append("s",t.s),r.append("a",t.a),r.append("m",t.m),r.append("d",t.d),r.append("dd",JSON.stringify(t.props)),r},o=function(e){return JSON.parse(localStorage.getItem("out")).out.can.filter((function(t){return t.dsc===e}))}},628:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(629);function o(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},629:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},673:function(e,t,n){e.exports=n.p+"static/media/vote.123d2316.jpg"},754:function(e,t,n){"use strict";n.r(t);var r=n(618),o=n(1),a=n.n(o),c=n(616),i=n(378),u=n(152),s=n(617),l=n(619),d={getmenus:function(e){return function(e){var t,n=e.mn,r=e.pv,o=[];for(t in n){var a=n[t].nam,c=n[t].smn,i=[],u=[];for(var s in c){var l=c[s],d=p(l,r);i.push({text:s,cid:l,ssm:d})}u.push(Object.keys(i)),o.push({text:a,smenus:i,objk:u,icon:t})}return o}(e)},getPDF:function(e,t,n){return function(e,t,n){var r="pdf"===n?new Blob([e],{type:"application/pdf"}):new Blob([e],{type:"text/csv"}),o=window.URL.createObjectURL(r),a=document.createElement("a"),c=new Date,i=c.getDate(),u=c.getMonth(),s=c.getFullYear(),l=c.getHours(),d=c.getMinutes(),p=c.getSeconds();a.href=o,a.setAttribute("download",t+"_"+i+"-"+u+"-"+s+"_"+l+"_"+d+"_"+p+"."+n),a.click()}(e,t,n)},combo:function(e,t,n,r){return f(e,t,n,r)},getcookie:function(e){return function(e){var t=("; "+document.cookie).split("; "+e+"=");if(2==t.length)return t.pop().split(";").shift()}(e)},chartOptions:function(){return{maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:0,suggestedMax:600,padding:20,fontColor:"#9a9a9a"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}]}}},chart2:function(e,t,n){return function(e,t,n){return{data:function(n){var r=n.getContext("2d").createLinearGradient(0,230,0,50);return r.addColorStop(1,"rgba(29,140,248,0.2)"),r.addColorStop(.4,"rgba(29,140,248,0.0)"),r.addColorStop(0,"rgba(29,140,248,0)"),{labels:t,datasets:[{label:"Data",fill:!0,backgroundColor:r,borderColor:"#1f8ef1",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#1f8ef1",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#1f8ef1",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:e}]}},options:n}}(e,t,n)}};function p(e,t){var n,r=t,o=[];for(n in r)if(r[n].acf==e){var a=r[n].btx,c=r[n].bfn;o.push({text:a,fn:c})}return o}var f=function(e,t,n,r){return null};var m=function(e){var t=e.submit,l=Object(o.useState)({unm:"",pwd:""}),p=Object(r.a)(l,2),f=p[0],m=p[1],b=function(e){return m(Object(u.a)(Object(u.a)({},f),{},Object(i.a)({},e.target.name,e.target.value)))};return a.a.createElement(c.m,null,a.a.createElement(c.j,{className:"p-4"},a.a.createElement(c.k,null,a.a.createElement(c.J,null,a.a.createElement("h1",null,"Login"),a.a.createElement("p",{className:"text-muted"},"Sign In to your account and vote"),a.a.createElement(c.V,{className:"mb-3"},a.a.createElement(c.X,null,a.a.createElement(c.Y,null,a.a.createElement(s.a,{name:"cil-user"}))),a.a.createElement(c.S,{type:"text",placeholder:"Studentno",autoComplete:"studentno",name:"unm",value:f.unm,onChange:b})),a.a.createElement(c.V,{className:"mb-4"},a.a.createElement(c.X,null,a.a.createElement(c.Y,null,a.a.createElement(s.a,{name:"cil-lock-locked"}))),a.a.createElement(c.S,{type:"password",placeholder:"Password",autoComplete:"current-password",name:"pwd",value:f.pwd,onChange:b})),a.a.createElement(c.wb,null,a.a.createElement(c.u,{xs:"6"},a.a.createElement(c.f,{color:"primary",className:"px-4",onClick:function(e){if(f.unm&&f.pwd){var n=new FormData,r=d.getcookie("_inspire");n.append("unm",f.unm),n.append("pwd",f.pwd),n.append("s","auth"),n.append("a","authverify"),n.append("ssi",r),n.append("ctx","2"),n.append("m","l"),t(n)}}},"Login")),a.a.createElement(c.u,{xs:"6",className:"text-right"}))))),a.a.createElement(c.j,{className:"text-white bg-white py-5 d-md-down-none",style:{width:"44%"}},a.a.createElement(c.k,{className:"text-center"},a.a.createElement("div",null,a.a.createElement("img",{src:n(673),width:"300",height:"320",alt:"",srcSet:""})))))},b=a.a.createContext({});t.default=function(e){var t=Object(o.useContext)(b),n=(t.state,t.dispatch),i=Object(o.useState)(null),u=Object(r.a)(i,2),s=u[0],d=u[1],p=Object(o.useState)(null),f=Object(r.a)(p,2),h=f[0],g=f[1],y=Object(o.useState)(null),v=Object(r.a)(y,2),w=(v[0],v[1]),j=a.a.useState(10),E=Object(r.a)(j,2),S=E[0],x=E[1];return a.a.createElement("div",{className:"c-app c-default-layout flex-row align-items-center"},a.a.createElement(c.w,null,a.a.createElement(c.wb,{className:"justify-content-center"},a.a.createElement(c.u,{md:"8"},s&&h&&a.a.createElement(c.a,{color:"danger",show:S,closeButton:!0,onShowChange:x},h," ",S,a.a.createElement(c.ub,{striped:!0,color:"danger",value:10*Number(S),size:"xs",className:"mb-3"})),a.a.createElement(m,{submit:function(t){x(10),d(!1),g(""),w(!0),l.a.fxns.login(t,l.a.fxns.endpoint).then((function(t){var n=t,r=n.tkn;if(n.success)switch(n.sd.LST){case"0":console.log("case 0");break;case"1":localStorage.setItem("out",JSON.stringify({out:n})),localStorage.setItem("token",JSON.stringify({token:r})),localStorage.setItem("votes",JSON.stringify({prz:"",vpz:"",sec:"",tre:"",prc:"",org:"",pro:"",wlf:"",woc:""})),document.cookie="_inspire="+r,e.history.push("/dashboard");default:n.st&&n.sm&&console.log("something else came up")}else d(!0),g(n.em),w(!1),document.cookie="_inspire= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"}),(function(e){n({type:"NOTIFY",payload:e,login:!0,title:"System error",initloading:!1,ntype:"danger",time:7,place:"tc"})}))}})))))}}}]);
//# sourceMappingURL=10.ddd0d572.chunk.js.map