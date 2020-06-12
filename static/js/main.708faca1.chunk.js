(this["webpackJsonpcorona-updates"]=this["webpackJsonpcorona-updates"]||[]).push([[0],{172:function(e,t,a){},173:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),n=a(53),l=a.n(n),c=a(11),d=a.n(c),o=a(27),i=a(7),m=a.n(i),u=a(54);a(172);function h(){return r.a.createElement("footer",{className:"mt-5 text-light text-center btn-block"},r.a.createElement("div",{className:"bg-dark text-light text-left"},r.a.createElement("h5",null,r.a.createElement("u",null,"About this data")),r.a.createElement("p",null,r.a.createElement("strong",null,"It changes rapidly"),r.a.createElement("br",null),"This data changes rapidly and might not reflect some cases still being reported."),r.a.createElement("p",null,r.a.createElement("strong",null,"It only includes people tested"),r.a.createElement("br",null),"Cases only include people who were tested and confirmed positive. Testing rules and availability vary by country. Some areas may not have data because they haven\u2019t published their data or haven\u2019t done so recently."),r.a.createElement("p",null,r.a.createElement("strong",null,"It comes from CSSE"),r.a.createElement("br",null),"Data comes from Coronavirus COVID-19 Global Cases by the Center for Systems Science and Engineering ",r.a.createElement("a",{href:"https://coronavirus.jhu.edu/map.html"},"(CSSE)")," at Johns Hopkins University (JHU), and cases are constantly updated from resources around the world. Daily situation reports are also available on the ",r.a.createElement("a",{href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports"},"World Health Organization site."))),r.a.createElement("h6",null,"Made by Kiran Puli  "),r.a.createElement("a",{href:"https://www.linkedin.com/in/kiran-p-40260b15b/"},r.a.createElement("i",{className:"fab fa-linkedin-in  btn btn-outline-info"})),r.a.createElement("a",{href:"https://github.com/kiranpuli"},r.a.createElement("i",{className:"fab fa-github  btn btn-outline-info"})),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/kiranpuli/coronaUpdatesDashboard",className:"text-info"},r.a.createElement("u",null,"Code")),"available on Github"))}class p extends r.a.Component{constructor(){super(),this.state={confirmed:0,recovered:0,deaths:0,g:{type:"bar",data:{labels:[],datasets:[{label:"Confirmed",data:[],backgroundColor:"yellow"},{label:"Recovered",data:[],backgroundColor:"green"},{label:"Deaths",data:[],backgroundColor:"red"}]}},countries:[],cc:"WorldWide"},this.getCountryData=this.getCountryData.bind(this),this.getData=this.getData.bind(this)}componentDidMount(){this.getData()}getData(){var e=this;return Object(o.a)(d.a.mark((function t(){var a,s,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("https://covid19.mathdro.id/api/countries");case 2:return a=t.sent,t.next=5,m.a.get("https://covid19.mathdro.id/api");case 5:return s=t.sent,t.next=8,m.a.get("https://covid19.mathdro.id/api/daily");case 8:r=t.sent,a.data.countries.map(t=>e.state.countries.push(t.name)),e.setState({confirmed:s.data.confirmed.value,recovered:s.data.recovered.value,deaths:s.data.deaths.value,cc:"WorldWide"}),r.data.map(t=>{e.state.g.data.labels.push(t.reportDate),e.state.g.data.datasets[0].data.push(t.totalConfirmed),e.state.g.data.datasets[1].data.push(t.totalRecovered),e.state.g.data.datasets[2].data.push(t.deaths.total)});case 12:case"end":return t.stop()}}),t)})))()}getCountries(){return this.state.countries.map((e,t)=>r.a.createElement("option",{key:t},e))}getCountryData(e){var t=this;return Object(o.a)(d.a.mark((function a(){var s,r;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if("WorldWide"!==(s=e.target.value)){a.next=13;break}return t.getData(),t.state.g.data.labels=[],t.state.g.data.datasets[0].data=[],t.state.g.data.datasets[1].data=[],t.state.g.data.datasets[2].data=[],a.next=9,m.a.get("https://covid19.mathdro.id/api/daily");case 9:a.sent.data.map(e=>{t.state.g.data.labels.push(e.reportDate),t.state.g.data.datasets[0].data.push(e.totalConfirmed),t.state.g.data.datasets[1].data.push(e.totalRecovered),t.state.g.data.datasets[2].data.push(e.deaths.total)}),a.next=22;break;case 13:return t.state.g.data.labels=[],t.state.g.data.datasets[0].data=[],t.state.g.data.datasets[1].data=[],t.state.g.data.datasets[2].data=[],fetch("https://pomber.github.io/covid19/timeseries.json").then(e=>e.json()).then(e=>{e[s].forEach(e=>{t.state.g.data.labels.push(e.date),t.state.g.data.datasets[0].data.push(e.confirmed),t.state.g.data.datasets[1].data.push(e.recovered),t.state.g.data.datasets[2].data.push(e.deaths)})}),a.next=20,m.a.get("https://covid19.mathdro.id/api/countries/".concat(s));case 20:r=a.sent,t.setState({confirmed:r.data.confirmed.value,recovered:r.data.recovered.value,deaths:r.data.deaths.value,cc:s});case 22:case"end":return a.stop()}}),a)})))()}render(){return r.a.createElement("div",{className:"text-danger"},r.a.createElement("h1",{className:"jumbotron text-center bg-dark "},"Corona-Virus Outbreak Dashboard"),r.a.createElement("h3",{className:"text-center btn-block"},this.state.cc," Statistics"),r.a.createElement("select",{className:"form-control w-50 mt-3 mb-3",onChange:this.getCountryData},r.a.createElement("option",{defaultValue:!0}," WorldWide "),this.getCountries()),r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card text-white bg-warning mb-3 p-5"},r.a.createElement("h2",null,r.a.createElement("i",{className:"fas fa-hospital-user"})," Confirmed"),r.a.createElement("h2",{className:"card-title"},this.state.confirmed))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card text-white bg-success mb-3 p-5"},r.a.createElement("h2",null,r.a.createElement("i",{className:"fas fa-user-plus"})," Recovered"),r.a.createElement("h2",{className:"card-title"},this.state.recovered))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card text-white bg-danger mb-3 p-5"},r.a.createElement("h2",null,r.a.createElement("i",{className:"fas fa-procedures"})," Deaths"),r.a.createElement("h2",{className:"card-title"},this.state.deaths)))),r.a.createElement("div",{className:"mt-3"},r.a.createElement(u.a,{data:this.state.g.data,options:{maintainAspectRatio:!0,responsive:!0}}),r.a.createElement("div",{className:"alert alert-warning",role:"alert"},"Try re-sizing the window ( for pc ) / rotating device ( mobile ) if graph is not showing up")),r.a.createElement(h,null))}}const g=document.getElementById("root");l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),g)},56:function(e,t,a){e.exports=a(173)}},[[56,1,2]]]);
//# sourceMappingURL=main.708faca1.chunk.js.map