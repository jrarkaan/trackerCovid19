(this.webpackJsonptrackercovid=this.webpackJsonptrackercovid||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){},106:function(e,t,a){},204:function(e,t,a){},206:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),o=a.n(r),s=(a(100),a(24)),l=a.n(s),i=a(35),u=a(15),m=a(238),f=a(239),d=a(240),p=a(232),v=a(236),h=a(54),b=a(237),E=(a(102),function(e){var t=e.title,a=e.cases,n=e.total,r=e.active,o=e.isRed,s=Object(h.a)(e,["title","cases","total","active","isRed"]);return c.a.createElement(p.a,{onClick:s.onClick,className:"infoBox ".concat(r&&"infoBox--selected"," ").concat(o&&"infoBox--red")},c.a.createElement(v.a,null,c.a.createElement(b.a,{className:"infoBox__title",color:"textSecondary"},t),c.a.createElement("h2",{className:"infoBox__cases ".concat(!o&&"infoBox__cases--green")},a),c.a.createElement(b.a,{className:"infoBox__total",color:"textSecondary"},n," Total")))}),g=a(243),y=a(244),j=a(88),x=a(17),O=a.n(x),_=a(241),w=a(242),k={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",multiplier:800},recovered:{hex:"#7DD71D",rgb:"rgb(125, 215, 29)",multiplier:1200},deaths:{hex:"#FB4443",rgb:"rgb(251, 68, 67)",multiplier:2e3}},N=function(e){var t=Object(j.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},C=function(e){return e?"+".concat(O()(e).format("0.0a")):"+0"},S=(a(106),function(e){var t=e.countries,a=e.casesType,n=e.center,r=e.zoom;return c.a.createElement("div",{className:"map"},c.a.createElement(g.a,{center:n,zoom:r},c.a.createElement(y.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return c.a.createElement(_.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,color:k[t].hex,fillColor:k[t].hex,radius:Math.sqrt(e[t])*k[t].multiplier},c.a.createElement(w.a,null,c.a.createElement("div",{className:"info-container"},c.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),c.a.createElement("div",{className:"info-name"},e.country),c.a.createElement("div",{className:"info-confirmed"},"Cases: ",O()(e.cases).format("0,0")),c.a.createElement("div",{className:"info-recovered"},"Recovered: ",O()(e.recovered).format("0,0")),c.a.createElement("div",{className:"info-deaths"},"Deaths: ",O()(e.deaths).format("0,0")))))}))}(t,a)))}),B=(a(107),a(86)),D=a.n(B),I=function(e){var t=e.countries;return c.a.createElement("div",{className:D.a.table},t.map((function(e){return c.a.createElement("tr",null,c.a.createElement("td",null,e.country),c.a.createElement("td",null,c.a.createElement("strong",null,O()(e.cases).format("0,0"))))})))},R=a(87),T={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return O()(e.value).format("+0.0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return O()(e).format("0a")}}}]}},M=function(e,t){var a,n=[];for(var c in e.cases){if(a){var r={x:c,y:e[t][c]-a};n.push(r)}a=e[t][c]}return n},z=function(e){var t=e.casesType,a=void 0===t?"cases":t,r=Object(h.a)(e,["casesType"]),o=Object(n.useState)({}),s=Object(u.a)(o,2),m=s[0],f=s[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){console.log(e);var t=M(e,a);f(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),c.a.createElement("div",{className:r.className}," ",m&&m.length>0&&c.a.createElement(R.Line,{options:T,data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:m}]}}))};a(204),a(205);var A=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)("worldwide"),s=Object(u.a)(o,2),h=s[0],b=s[1],g=Object(n.useState)({}),y=Object(u.a)(g,2),j=y[0],x=y[1],O=Object(n.useState)([]),_=Object(u.a)(O,2),w=_[0],k=_[1],B=Object(n.useState)({lat:34.80746,lng:-40.4796}),D=Object(u.a)(B,2),R=D[0],T=D[1],M=Object(n.useState)(3),A=Object(u.a)(M,2),W=A[0],L=A[1],q=Object(n.useState)([]),F=Object(u.a)(q,2),J=F[0],Y=F[1],V=Object(n.useState)("cases"),$=Object(u.a)(V,2),G=$[0],H=$[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=N(e);r(t),k(a),Y(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){x(e)}))}),[]);var K=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("worldwide"!==(a=t.target.value)){e.next=7;break}return"https://disease.sh/v3/covid-19/all",e.next=5,fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){b(a),x(e),T({lat:34.80746,lng:-40.4796}),L(2)}));case 5:e.next=10;break;case 7:return n="https://disease.sh/v3/covid-19/countries/".concat(a),e.next=10,fetch(n).then((function(e){return e.json()})).then((function(e){b(a),x(e),T([e.countryInfo.lat,e.countryInfo.long]),L(4)}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"app__left"},c.a.createElement("div",{className:"app__header"},c.a.createElement("h1",null," COVID 19 Tracker"),c.a.createElement(m.a,{className:"app__dropdown"},c.a.createElement(f.a,{variant:"outlined",value:h,onChange:K},c.a.createElement(d.a,{value:"worldwide"},"Worldwide"),a.map((function(e){return c.a.createElement(d.a,{value:e.value},e.name)}))))),c.a.createElement("div",{className:"app__stats"},c.a.createElement(E,{isRed:!0,onClick:function(e){return H("cases")},active:"cases"===G,title:"Coronavirus Cases",cases:C(j.todayCases),total:C(j.cases)}),c.a.createElement(E,{onClick:function(e){return H("recovered")},active:"recovered"===G,title:"Recovered",cases:C(j.todayRecovered),total:C(j.recovered)}),c.a.createElement(E,{isRed:!0,onClick:function(e){return H("deaths")},active:"deaths"===G,title:"Deaths",cases:C(j.todayDeaths),total:C(j.deaths)})),c.a.createElement(S,{countries:J,center:R,zoom:W,casesType:G})),c.a.createElement(p.a,{className:"app__right"},c.a.createElement(v.a,null,c.a.createElement("h3",null,"Live Cases by Country"),c.a.createElement(I,{countries:w}),c.a.createElement("h3",{className:"app__graphTitle"},"Worldwide new ",G," "),c.a.createElement(z,{className:"app__graph",casesType:G}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,t,a){e.exports={table:"Table_table__2q2RE"}},95:function(e,t,a){e.exports=a(206)}},[[95,1,2]]]);
//# sourceMappingURL=main.64b07b9e.chunk.js.map