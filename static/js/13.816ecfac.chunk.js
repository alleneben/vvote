(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[13],{637:function(e,t,a){"use strict";var l=a(1),n=a.n(l),r=a(622),c=a(627),s=a(698),m=Object(c.a)("success")||"#4dbd74",o=Object(c.a)("info")||"#20a8d8";Object(c.a)("danger");t.a=function(e){var t=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},a=function(){for(var a=[],l=[],n=[],r=0;r<=27;r++)a.push(t(50,200)),l.push(t(80,100)),n.push(65);return[{label:"My First dataset",backgroundColor:Object(s.a)(o,10),borderColor:o,pointHoverBackgroundColor:o,borderWidth:2,data:e.data?e.data.cnts:[]},{label:"My Second dataset",backgroundColor:"transparent",borderColor:m,pointHoverBackgroundColor:m,borderWidth:2,data:e.data?e.data.cnts:[]}]}(),l={maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{gridLines:{drawOnChartArea:!1}}],yAxes:[{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250},gridLines:{display:!0}}]},elements:{point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}};return n.a.createElement(r.c,Object.assign({},e,{datasets:a,options:l,labels:e.data?e.data.labels:[]}))}},728:function(e,t){},742:function(e,t,a){"use strict";a.r(t);var l=a(618),n=a(1),r=a.n(n),c=a(616),s=a(637),m=a(699);a.n(m)()("http://fhsvoting.com:8000");var o=Object(n.lazy)((function(){return a.e(4).then(a.bind(null,646))}));t.default=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0];t[1];Object(n.useEffect)((function(){return function(){}}),[]);var m=function(){var e=[],t=[],l=[];if(void 0!==a.sd)return a.sd.map((function(a,n){"13"===a.roi&&"TRE"===a.dsc?(a.dsc="TRE-NO",a.pnm="Tresurer-NO"):"13"===a.roi&&"PRC"===a.dsc?(a.dsc="PRC-NO",a.pnm="Procurement Officer-NO"):"13"===a.roi&&"WLF"===a.dsc&&(a.dsc="WLF-NO",a.pnm="Welfare Chairman-NO"),e.push({cnt:a.cnt,dsc:a.dsc,pnm:a.pnm,pct:a.pct}),t.push(a.dsc),l.push(a.cnt)})),{data:e,labels:t,cnts:l}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,{data:a}),r.a.createElement(c.wb,null,r.a.createElement(c.u,null,r.a.createElement(c.j,null,r.a.createElement(c.n,null,"Vote Summaries 1"),r.a.createElement(c.k,null,r.a.createElement(c.wb,null,r.a.createElement(c.u,{xs:"12",md:"6",xl:"6"},r.a.createElement(c.wb,null,r.a.createElement(c.u,{sm:"6"},r.a.createElement(c.i,{color:"info"},r.a.createElement("small",{className:"text-muted"},"Total Voters"),r.a.createElement("br",null),r.a.createElement("strong",{className:"h4"},a.tt?a.tt.pct:(0).toString()))),r.a.createElement(c.u,{sm:"6"},r.a.createElement(c.i,{color:"danger"},r.a.createElement("small",{className:"text-muted"},"Total Votes Cast"),r.a.createElement("br",null),r.a.createElement("strong",{className:"h4"},a.tt?a.tt.cnt:(0).toString())))),r.a.createElement("hr",{className:"mt-0"})),r.a.createElement(c.u,{xs:"12",md:"6",xl:"6"},r.a.createElement(c.wb,null,r.a.createElement(c.u,{sm:"6"},r.a.createElement(c.i,{color:"warning"},r.a.createElement("small",{className:"text-muted"},"Total Valid Votes"),r.a.createElement("br",null),r.a.createElement("strong",{className:"h4"},a.tt?a.tt.roi:(0).toString()))),r.a.createElement(c.u,{sm:"6"},r.a.createElement(c.i,{color:"success"},r.a.createElement("small",{className:"text-muted"},"Total Non Valid Votes"),r.a.createElement("br",null),r.a.createElement("strong",{className:"h4"},a.tt?a.tt.cnt:(0).toString())))),r.a.createElement("hr",{className:"mt-0"}))),r.a.createElement("br",null))))),r.a.createElement(c.wb,null,r.a.createElement(c.u,null,r.a.createElement(c.j,null,r.a.createElement(c.n,null,"Vote Summaries 2"),r.a.createElement(c.k,null,r.a.createElement(c.wb,null,m()&&m().data.map((function(e,t){return r.a.createElement(c.u,{xs:"12",md:"6",xl:"6",className:"mb-sm-2 mb-0",key:t},r.a.createElement("div",{className:"progress-group-prepend"},r.a.createElement("span",{className:"progress-group-text"},e.pnm)),r.a.createElement("div",{className:"progress-group-bars"},e.cnt," which is ",(e.cnt/a.tt.pct).toFixed(2),"%",r.a.createElement(c.ub,{className:"progress-xs",color:"info",value:e.cnt}),r.a.createElement(c.ub,{className:"progress-xs",color:"danger",value:"100"})))})),r.a.createElement("hr",{className:"mt-0"}),r.a.createElement("div",{className:"legend text-center"},r.a.createElement("small",null,r.a.createElement("sup",{className:"px-1"},r.a.createElement(c.b,{shape:"pill",color:"info"},"\xa0")),"Current Votes \xa0",r.a.createElement("sup",{className:"px-1"},r.a.createElement(c.b,{shape:"pill",color:"danger"},"\xa0")),"Expected Votes (",a.tt?a.tt.pct:0,")"))),r.a.createElement("br",null))))),r.a.createElement(c.j,null,r.a.createElement(c.k,null,r.a.createElement(c.wb,null,r.a.createElement(c.u,{sm:"5"},r.a.createElement("h4",{id:"traffic",className:"card-title mb-0"},"Votes Distributions"),r.a.createElement("div",{className:"small text-muted"},"August 2020")),r.a.createElement(c.u,{sm:"7",className:"d-none d-md-block"})),r.a.createElement(s.a,{style:{height:"300px",marginTop:"40px"},data:m()}))))}}}]);
//# sourceMappingURL=13.816ecfac.chunk.js.map