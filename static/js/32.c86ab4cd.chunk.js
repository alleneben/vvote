(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[32],{740:function(e,t,a){"use strict";a.r(t);var n=a(618),l=a(1),c=a.n(l),r=a(616),s=(a(617),a(619)),o=function(e){var t=e.nam,a=e.pic,o=e.selectCandidate,d=e.selectedCandidate,i=e.selected,m=e.yesornoselectedbgcolor,u=e.selectedbgcolor,b=e.bgcolor,p=e.cnm,E=e.yesorno,v=e.ballot,C=Object(l.useState)(b),g=Object(n.a)(C,2),f=(g[0],g[1],d?u:b);m&&(f="nocolor");var y=E?"Yes":"Choose";return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.j,{className:"selection "+f},c.a.createElement(r.n,{className:"selection "+f},c.a.createElement("h5",{className:"title"},p)),c.a.createElement(r.k,null,c.a.createElement("img",{height:"200",width:"400",src:s.a.fxns.resources+a,className:"card-img-top"}),c.a.createElement("h4",null,t),!v&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,i.cnt," Votes")," ",c.a.createElement("br",null),c.a.createElement("h2",null,i.pct," %"))),v&&c.a.createElement(r.l,null,c.a.createElement(r.f,{color:"primary",className:"px-4",onClick:function(){o(i,!1)}},y),E&&c.a.createElement(r.f,{color:"primary",className:"px-4",onClick:function(){return function(){var e={rid:"49",nam:"No",pic:"sample.png"};e.pid=i.pid,o(e,!0)}()}},"NO"))))},d=a(158),i=a(159),m=a(160),u=a(162),b=a(161),p=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={selectedCandidate:"",candidates:[]},n.selectCandidate=n.selectCandidate.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"componentWillMount",value:function(){console.log(s.a.utils.findcandidates("PRZ")),this.setState({candidates:s.a.utils.findcandidates("PRZ")})}},{key:"selectCandidate",value:function(e){var t=JSON.parse(localStorage.getItem("votes"));t.prz=e,localStorage.setItem("votes",JSON.stringify(t)),this.setState({selectedCandidate:e})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"row"},this.state.candidates.map((function(t){return c.a.createElement(r.u,{xs:"12",sm:"6",md:"3"},c.a.createElement(o,{key:"dd-item-".concat(t.rid),nam:t.nam,pic:t.pic,selected:t,selectedbgcolor:"purple",bgcolor:"white",selectCandidate:e.selectCandidate,selectedCandidate:t===e.state.selectedCandidate,cnm:t.rnm,ballot:e.props.ballot}))}))))}}]),a}(c.a.Component),E=(c.a.Component,function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={selectedCandidate:"",yesornoselectedbgcolor:!1,candidates:[]},n.selectCandidate=n.selectCandidate.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"componentWillMount",value:function(){this.setState({candidates:s.a.utils.findcandidates("SEC")})}},{key:"selectCandidate",value:function(e,t){var a=JSON.parse(localStorage.getItem("votes"));a.sec=e,localStorage.setItem("votes",JSON.stringify(a)),this.setState({selectedCandidate:e,yesornoselectedbgcolor:t})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"row"},this.state.candidates.map((function(t){return c.a.createElement(r.u,{xs:"12",sm:"6",md:"3"},c.a.createElement(o,{key:"dd-item-".concat(t.rid),nam:t.nam,pic:t.pic,selected:t,selectedbgcolor:"purple",bgcolor:"white",selectCandidate:e.selectCandidate,selectedCandidate:t===e.state.selectedCandidate,cnm:t.rnm,yesorno:!0,yesornoselectedbgcolor:e.state.yesornoselectedbgcolor,ballot:e.props.ballot}))}))))}}]),a}(c.a.Component)),v=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={selectedCandidate:"",yesornoselectedbgcolor:!1,candidates:[]},n.selectCandidate=n.selectCandidate.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"componentWillMount",value:function(){this.setState({candidates:s.a.utils.findcandidates("WOC")})}},{key:"selectCandidate",value:function(e,t){var a=JSON.parse(localStorage.getItem("votes"));a.wcm=e,localStorage.setItem("votes",JSON.stringify(a)),this.setState({selectedCandidate:e,yesornoselectedbgcolor:t})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"row"},this.state.candidates.map((function(t){return c.a.createElement(r.u,{xs:"12",sm:"6",md:"3"},c.a.createElement(o,{key:"dd-item-".concat(t.rid),nam:t.nam,pic:t.pic,selected:t,selectedbgcolor:"purple",bgcolor:"white",selectCandidate:e.selectCandidate,selectedCandidate:t===e.state.selectedCandidate,cnm:t.rnm,yesorno:!0,yesornoselectedbgcolor:e.state.yesornoselectedbgcolor,ballot:e.props.ballot}))}))))}}]),a}(c.a.Component),C=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={selectedCandidate:"",yesornoselectedbgcolor:!1,candidates:[]},n.selectCandidate=n.selectCandidate.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"componentWillMount",value:function(){this.setState({candidates:s.a.utils.findcandidates("TRE")})}},{key:"selectCandidate",value:function(e,t){var a=JSON.parse(localStorage.getItem("votes"));a.tre=e,localStorage.setItem("votes",JSON.stringify(a)),this.setState({selectedCandidate:e,yesornoselectedbgcolor:t})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"row"},this.state.candidates.map((function(t){return c.a.createElement(r.u,{xs:"12",sm:"6",md:"4"},c.a.createElement(o,{key:"dd-item-".concat(t.rid),nam:t.nam,pic:t.pic,selected:t,selectedbgcolor:"purple",bgcolor:"white",selectCandidate:e.selectCandidate,selectedCandidate:t===e.state.selectedCandidate,cnm:t.rnm,yesorno:!1,yesornoselectedbgcolor:"",ballot:e.props.ballot}))}))))}}]),a}(c.a.Component),g=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={selectedCandidate:"",yesornoselectedbgcolor:!1,candidates:[]},n.selectCandidate=n.selectCandidate.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"componentWillMount",value:function(){this.setState({candidates:s.a.utils.findcandidates("ORG")})}},{key:"selectCandidate",value:function(e,t){var a=JSON.parse(localStorage.getItem("votes"));a.org=e,localStorage.setItem("votes",JSON.stringify(a)),this.setState({selectedCandidate:e,yesornoselectedbgcolor:t})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"row"},this.state.candidates.map((function(t){return c.a.createElement(r.u,{xs:"12",sm:"6",md:"3"},c.a.createElement(o,{key:"dd-item-".concat(t.rid),nam:t.nam,pic:t.pic,selected:t,selectedbgcolor:"purple",bgcolor:"white",selectCandidate:e.selectCandidate,selectedCandidate:t===e.state.selectedCandidate,cnm:t.rnm,yesorno:!0,yesornoselectedbgcolor:e.state.yesornoselectedbgcolor,ballot:e.props.ballot}))}))))}}]),a}(c.a.Component);t.default=function(){var e=Object(l.useState)(""),t=Object(n.a)(e,2);t[0],t[1];return c.a.createElement(r.wb,null,c.a.createElement(r.j,null,c.a.createElement(r.n,null,"Candidates"),c.a.createElement(r.k,null,c.a.createElement(r.Kb,null,c.a.createElement(r.lb,{variant:"tabs"},c.a.createElement(r.mb,null,c.a.createElement(r.nb,null,"President")),c.a.createElement(r.mb,null,c.a.createElement(r.nb,null,"Secretary")),c.a.createElement(r.mb,null,c.a.createElement(r.nb,null,"Treasurer")),c.a.createElement(r.mb,null,c.a.createElement(r.nb,null,"Organiser")),c.a.createElement(r.mb,null,c.a.createElement(r.nb,null,"WOCOM"))),c.a.createElement(r.Ib,null,c.a.createElement(r.Jb,null,c.a.createElement(r.wb,null,c.a.createElement(p,{ballot:!0}))),c.a.createElement(r.Jb,null,c.a.createElement(r.wb,null,c.a.createElement(E,{ballot:!0}))),c.a.createElement(r.Jb,null,c.a.createElement(r.wb,null,c.a.createElement(C,{ballot:!0}))),c.a.createElement(r.Jb,null,c.a.createElement(r.wb,null,c.a.createElement(g,{ballot:!0}))),c.a.createElement(r.Jb,null,c.a.createElement(r.wb,null,c.a.createElement(v,{ballot:!0}))))))))}}}]);
//# sourceMappingURL=32.c86ab4cd.chunk.js.map