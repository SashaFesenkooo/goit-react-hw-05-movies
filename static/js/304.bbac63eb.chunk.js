"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{236:function(n,t,e){e.d(t,{Hg:function(){return r},TP:function(){return c},gH:function(){return i},tx:function(){return u},zv:function(){return a}});var o="5a20241834eb9a6674dc92f9938aafbf",r=function(n){return fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(o,"&page=").concat(n)).then((function(n){return n.json()}))},i=function(n){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&query=").concat(n)).then((function(n){return n.json()}))},c=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(o)).then((function(n){return n.json()}))},a=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(o)).then((function(n){return n.json()}))},u=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(o)).then((function(n){return n.json()}))}},174:function(n,t,e){e.d(t,{Z:function(){return p}});var o,r,i,c=e(168),a=e(444),u=e(87),s=a.ZP.ul(o||(o=(0,c.Z)(["\n  padding: 8px;\n  list-style: none;\n"]))),d=a.ZP.li(r||(r=(0,c.Z)(["\n  padding-bottom: 8px;\n"]))),f=(0,a.ZP)(u.rU)(i||(i=(0,c.Z)(["\n  display: inline-block;\n  padding: 4px 0;\n  color: #444;\n  border-bottom: 1px solid transparent;\n  text-decoration: none;\n\n  transition: border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    border-bottom: 1px solid #444;\n  }\n"]))),h=e(184);function p(n){var t=n.foundMovies,e=n.subpath,o=n.location;return(0,h.jsx)(s,{children:t.map((function(n){return(0,h.jsx)(d,{children:(0,h.jsxs)(f,{to:"".concat(e).concat(n.id),state:{from:o},children:[n.title," | ",n.vote_average]})},n.id)}))})}},304:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var o,r=e(439),i=e(689),c=e(791),a=e(236),u=e(168),s=e(444).ZP.div(o||(o=(0,u.Z)(["\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 16px;\n"]))),d=e(174),f=e(184),h=function(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],o=t[1],u=(0,i.TH)();return(0,c.useEffect)((function(){(0,a.Hg)(1).then((function(n){return n.results.map((function(n){var t=n.id,e=n.title,o=n.vote_average,r={};return r.id=t,r.title=e,r.vote_average=o,r}))})).then((function(n){o(n)}))}),[]),(0,f.jsx)(f.Fragment,{children:e&&(0,f.jsxs)(s,{children:[(0,f.jsx)("h1",{children:"Tranding today"}),(0,f.jsx)(d.Z,{foundMovies:e,subpath:"/movies/",location:u})]})})}}}]);
//# sourceMappingURL=304.bbac63eb.chunk.js.map