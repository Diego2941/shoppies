(this.webpackJsonpshoppies=this.webpackJsonpshoppies||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(2),i=c.n(s),r=c(9),a=c.n(r),o=c(3),l=c(8),j=c.n(l),u=c(10),h="https://www.omdbapi.com/?apikey=".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/shoppies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_OMDB_KEY,"&s="),b=function(e){var t=Object(s.useState)([]),c=Object(o.a)(t,2),n=c[0],i=c[1],r=Object(s.useState)(""),a=Object(o.a)(r,2),l=a[0],b=a[1],O=function(){var t=Object(u.a)(j.a.mark((function t(){var c,n,s,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,b(""),t.next=4,fetch("".concat(h).concat(e));case 4:return c=t.sent,t.next=7,c.json();case 7:n=t.sent,s=n.Error,(r=n.Search)?i(r):s?(i([]),b(s)):(i([]),b("Error occurred please try again")),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0),i([]),b("Error occurred please try again");case 17:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();return Object(s.useEffect)((function(){O()}),[e]),{error:l,movies:n}},O=Object(s.createContext)(),m=function(e){var t=e.children,c=Object(s.useState)(""),i=Object(o.a)(c,2),r=i[0],a=i[1],l=Object(s.useState)([]),j=Object(o.a)(l,2),u=j[0],h=j[1],m=Object(s.useState)(null),d=Object(o.a)(m,2),x=d[0],f=d[1],v=b(r),p=v.error,N=v.movies;return Object(s.useEffect)((function(){var e=JSON.parse(localStorage.getItem("Nominations"));h(e=e||[])}),[]),Object(s.useEffect)((function(){localStorage.setItem("Nominations",JSON.stringify(u))}),[u]),Object(n.jsx)(O.Provider,{value:{searchTitle:r,nominations:u,movie:x,movies:N,error:p,setSearchTitle:a,setNominations:h,setMovie:f},children:t})},d=function(){return Object(s.useContext)(O)},x=c(6),f=function(){var e=d(),t=e.nominations,c=e.setNominations,s=e.setMovie;return Object(n.jsxs)("section",{className:"nominations",children:[Object(n.jsxs)("div",{className:"list-title",children:[Object(n.jsx)("h2",{children:" Nominations "}),Object(n.jsxs)("h2",{children:[" ",t.length," "]})]}),Object(n.jsx)("ul",{children:t.map((function(e){return Object(n.jsxs)("li",{className:"list",children:[Object(n.jsxs)("h3",{className:"movie-title",onClick:function(){return s(e)},children:[e.Title," (",e.Year,")"]}),Object(n.jsx)(x.b,{className:"icon",onClick:function(){return function(e){var n=t.filter((function(t){return t.imdbID!==e.imdbID}));c(n)}(e)}})]},e.imdbID)}))})]})},v=c(12),p=function(){var e=d(),t=e.searchTitle,c=e.nominations,s=e.movies,i=e.error,r=e.setNominations,a=e.setMovie,o=t&&i?i:"Use Search bar to Search",l=t.length<20?t:t.substring(1,21)+"...";return Object(n.jsxs)("section",{className:"results",children:[Object(n.jsxs)("h2",{children:[" Results for ",l?'"'.concat(l,'"'):""," "]}),Object(n.jsx)("ul",{children:s.length<1?Object(n.jsx)("h2",{children:o}):s.map((function(e){return Object(n.jsxs)("li",{className:"list",children:[Object(n.jsxs)("h3",{className:"movie-title",onClick:function(){return a(e)},children:[e.Title," (",e.Year,")"]}),(t=e,c.some((function(e){return e.imdbID===t.imdbID}))?"":Object(n.jsx)(x.a,{className:"icon",onClick:function(){return function(e){c.length>=5?alert("You have reach maximum of 5 nominations"):r((function(t){return[e].concat(Object(v.a)(t))}))}(e)}}))]},e.imdbID);var t}))})]})},N=c(11),S=function(){var e=d().setSearchTitle,t=i.a.useRef("");return Object(n.jsx)("section",{className:"search",children:Object(n.jsxs)("form",{className:"search-form",action:"",children:[Object(n.jsx)("div",{children:Object(n.jsx)("label",{htmlFor:"search-title",children:"Movie Titles"})}),Object(n.jsxs)("div",{className:"search-bar",children:[Object(n.jsx)(N.a,{className:"icon-static"}),Object(n.jsx)("input",{className:"input-field",type:"text",id:"search-title",placeholder:"Search Movie Title ...",ref:t,onChange:function(){e(t.current.value)}})]})]})})},T=(c(19),function(){var e=d().movie;return e?Object(n.jsxs)("section",{className:"movie",children:[Object(n.jsx)("a",{href:e.Poster,children:Object(n.jsx)("img",{src:e.Poster,alt:e.Title})}),Object(n.jsxs)("div",{className:"movie-info",children:[Object(n.jsx)("h2",{children:"Movie Details"}),Object(n.jsxs)("h3",{children:["Title: ",e.Title]}),Object(n.jsxs)("h3",{children:["Year: ",e.Year]}),Object(n.jsxs)("h3",{children:["Type: ",e.Type]}),Object(n.jsxs)("h3",{children:["imdbID: ",e.imdbID]})]})]}):Object(n.jsx)(n.Fragment,{})});var g=function(){return Object(n.jsxs)("main",{children:[Object(n.jsx)("h2",{className:"header",children:"The Shoppies"}),Object(n.jsx)(S,{}),Object(n.jsx)(p,{}),Object(n.jsx)(f,{}),Object(n.jsx)(T,{})]})};a.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(m,{children:Object(n.jsx)(g,{})})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.2f7dcd0f.chunk.js.map