(this.webpackJsonpwatchmovie=this.webpackJsonpwatchmovie||[]).push([[0],[,,,,,,,,,,,function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/notfound.0e7066aa.jpg"},,,,,,,,function(e,t,c){},,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(13),i=c.n(a),r=(c(19),c(3)),o=c(2),l=c(5),j=c.n(l),d=c(7),b=c(4),h=(c(21),c(0));function u(e){var t=null==e.img?c(11).default:"https://image.tmdb.org/t/p/w500/"+e.img;return Object(h.jsx)("div",{className:"grid-item",children:Object(h.jsxs)(r.b,{style:{textDecoration:"none"},to:"/movie/"+e.id,children:[Object(h.jsx)("img",{className:"image-poster border-img ",src:t,alt:t}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"color-font",children:e.title})]})})}c(23);function p(e){var t=Object(s.useState)(e.page),c=Object(b.a)(t,2),n=c[0],a=c[1],i=e.total,r=[],o=n-2;o<=0&&(o=1);var l=n+2;l>i&&(l=i);for(var j=function(t){r.push(Object(h.jsx)("div",{className:t===n?"round-effect active":"round-effect",onClick:function(){a(t),e.onChange(t)},children:t},t))},d=o;d<=l;d++)j(d);return Object(h.jsxs)("div",{className:"flex-container",children:[Object(h.jsxs)("div",{children:["Page ",n," Of ",i]}),Object(h.jsxs)("div",{className:"paginate-ctn",children:[Object(h.jsx)("div",{className:"round-effect",onClick:function(){n>1&&(a(n-1),e.onChange(n-1))},children:"\u2039"}),r,Object(h.jsx)("div",{className:"round-effect",onClick:function(){n<i&&(a(n+1),e.onChange(n+1))},children:"\u203a"})]})]})}var m=function(){var e=Object(d.a)(j.a.mark((function e(t){var c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDc5OWUyYTExODIyZjg5NDIyMzNhNTgyNDEwOWJjMyIsInN1YiI6IjYxOGRjNzZjOWE4YThhMDA0MzUxZTA0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ARZF3j4q3eB3S5qbYTqT8nGgJ4udbDNx4BUGnTk22s4","Content-Type":"application/json;charset=utf-8"}});case 2:return c=e.sent,e.next=5,c.json();case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();c(24);function O(){var e=Object(s.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(1),i=Object(b.a)(a,2),r=i[0],o=i[1];Object(s.useEffect)((function(){l(r)}),[r]);var l=function(){var e=Object(d.a)(j.a.mark((function e(t){var c,s,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://api.themoviedb.org/3/movie/popular?page=".concat(t),s=m(c),e.next=4,s;case 4:a=e.sent,n(a),o(a.page);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"grid-container",children:!!c.results&&c.results.map((function(e){return Object(h.jsx)(u,{img:e.poster_path,title:e.title,id:e.id},e.id)}))}),Object(h.jsx)(p,{page:r,total:500,onChange:function(e){o(e)}})]})}c(25),c(26);function x(){return Object(h.jsx)("header",{className:"header-fixed",children:Object(h.jsxs)("div",{className:"header-limiter",children:[Object(h.jsx)("h1",{children:Object(h.jsxs)(r.b,{to:"/",children:["Watch",Object(h.jsx)("span",{children:"Movies"})]})}),Object(h.jsxs)("nav",{children:[Object(h.jsx)(r.b,{to:"/",children:"Home"}),Object(h.jsx)(r.b,{to:"/",children:"Blog"}),Object(h.jsx)(r.b,{to:"/",children:"Pricing"}),Object(h.jsx)(r.b,{to:"/",children:"About"}),Object(h.jsx)(r.b,{to:"/",children:"Faq"}),Object(h.jsx)(r.b,{to:"/",children:"Contact"})]})]})})}c(27);function f(){return Object(h.jsx)("div",{children:Object(h.jsx)("footer",{className:"footer",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"footer-col",children:[Object(h.jsx)("h4",{children:"Sitesoch"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(r.b,{to:"/",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)(r.b,{to:"/",children:"About"})}),Object(h.jsx)("li",{children:Object(h.jsx)(r.b,{to:"/",children:"Pricing"})}),Object(h.jsx)("li",{children:Object(h.jsx)(r.b,{to:"/",children:"Privacy Policy"})})]})]}),Object(h.jsxs)("div",{className:"footer-col",children:[Object(h.jsx)("h4",{children:"Get Help"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(r.b,{to:"/",children:"Shipping"})}),Object(h.jsx)("li",{children:Object(h.jsx)(r.b,{to:"/",children:"Returns"})}),Object(h.jsx)("li",{children:Object(h.jsx)(r.b,{to:"/",children:"Order Status"})}),Object(h.jsx)("li",{children:Object(h.jsx)(r.b,{to:"/",children:"Payment Options"})})]})]}),Object(h.jsxs)("div",{className:"footer-col",children:[Object(h.jsx)("h4",{children:"Address"}),Object(h.jsx)("ul",{children:Object(h.jsx)("li",{children:Object(h.jsx)(r.b,{to:"/",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate adipisci quia ab omnis id ipsum quae inventore"})})})]}),Object(h.jsxs)("div",{className:"footer-col",children:[Object(h.jsx)("h4",{children:"follow us"}),Object(h.jsxs)("div",{className:"social-links",children:[Object(h.jsx)(r.b,{to:"/",children:Object(h.jsx)("i",{className:"fa fa-google"})}),Object(h.jsx)(r.b,{to:"/",children:Object(h.jsx)("i",{className:"fa fa-facebook-f"})}),Object(h.jsx)(r.b,{to:"/",children:Object(h.jsx)("i",{className:"fa fa-instagram"})}),Object(h.jsx)(r.b,{to:"/",children:Object(h.jsx)("i",{className:"fa fa-twitter"})})]})]})]})})})})}c(28);var v=c(8),g=c.n(v);function N(e){var t=e.size,c=e.sizeSVG,n=e.strokeWidth,a=e.percentage,i=e.color,r=Object(s.useState)(0),o=Object(b.a)(r,2),l=o[0],j=o[1];Object(s.useEffect)((function(){j(a)}),[a]);var d="0 0 ".concat(t," ").concat(t),u=(t-n)/2,p=u*Math.PI*2,m=l*p/10;return Object(h.jsxs)("svg",{width:c,height:c,viewBox:d,children:[Object(h.jsx)("circle",{fill:"none",stroke:"#ccc",cx:t/2,cy:t/2,r:u,strokeWidth:"".concat(n,"px")}),Object(h.jsx)("circle",{fill:"none",stroke:i,cx:t/2,cy:t/2,r:u,strokeWidth:"".concat(n,"px"),transform:"rotate(-90 ".concat(t/2," ").concat(t/2,")"),strokeDasharray:[m,p-m],strokeLinecap:"round",style:{transition:"all 0.5s"}}),Object(h.jsx)("text",{fill:"#f4b907",fontSize:"64px",x:"50%",y:"50%",dy:"20px",textAnchor:"middle",children:"".concat(a)})]})}var w=c(14),y=c.n(w);function k(){var e=Object(s.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)([]),l=Object(b.a)(i,2),p=l[0],O=l[1],x=Object(s.useState)([]),f=Object(b.a)(x,2),v=f[0],w=f[1],k=Object(s.useState)([]),_=Object(b.a)(k,2),S=_[0],I=_[1],C=Object(s.useState)([]),D=Object(b.a)(C,2),A=D[0],M=D[1],J=Object(o.g)().movieId,T="https://image.tmdb.org/t/p/original";Object(s.useEffect)((function(){z(J),W(J),B(J)}),[J]);var z=function(){var e=Object(d.a)(j.a.mark((function e(t){var c,s,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://api.themoviedb.org/3/movie/".concat(t),s=m(c),e.next=4,s;case 4:n=e.sent,a(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(d.a)(j.a.mark((function e(t){var c,s,n,a,i,r,o,l,d,b;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=[],s="https://api.themoviedb.org/3/movie/".concat(t,"/videos"),n="https://api.themoviedb.org/3/movie/".concat(t,"/images"),a="https://api.themoviedb.org/3/movie/".concat(t,"/credits"),i=m(s),r=m(n),o=m(a),e.next=9,i;case 9:return l=e.sent,e.next=12,r;case 12:return d=e.sent,e.next=15,o;case 15:b=e.sent,d.backdrops.map((function(e){c.push({original:"".concat(T+e.file_path),thumbnail:"".concat(T+e.file_path)})})),d.posters.map((function(e){c.push({original:"".concat(T+e.file_path),thumbnail:"".concat(T+e.file_path)})})),w(l),O(c),I(b);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(d.a)(j.a.mark((function e(t){var c,s,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://api.themoviedb.org/3/movie/".concat(t,"/similar"),s=m(c),e.next=4,s;case 4:n=e.sent,console.log(n),M(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"background-movie",style:{backgroundImage:"url(".concat(T+n.poster_path,")")},children:[Object(h.jsxs)("div",{className:"detailsContainer ",children:[Object(h.jsx)("img",{className:"col movieImg",src:null==n.poster_path?c(11).default:T+n.poster_path,alt:n.poster_path}),Object(h.jsxs)("div",{className:"col2 movieDetails",children:[Object(h.jsx)("p",{className:"firstItem",children:Object(h.jsx)("strong",{children:n.title})}),Object(h.jsxs)("div",{className:"rate-and-dates",children:[Object(h.jsx)(N,{size:250,sizeSVG:80,strokeWidth:20.5,percentage:n.vote_average,color:"#f4b907"}),Object(h.jsxs)("p",{style:{marginleft:"2%"},className:"p-titles",children:[Object(h.jsx)("strong",{className:"color-titles",children:"RunTime: "}),function(e){var t=Math.floor(e/60),c=e%60;return c=c<10?"0"+c:c,"".concat(t,"hrs:").concat(c,"mins")}(n.runtime)]})]}),Object(h.jsxs)("p",{className:"p-titles ",children:[Object(h.jsx)("strong",{className:"color-titles",children:"Tagline: "}),n.tagline]}),Object(h.jsx)("p",{className:"color-titles p-overview",children:n.overview}),Object(h.jsxs)("p",{className:"p-titles ",children:[Object(h.jsx)("strong",{className:"color-titles",children:"Genres: "}),!!n.genres&&n.genres.map((function(e){return e.name})).join(", ")]}),Object(h.jsxs)("p",{className:"p-titles ",children:[Object(h.jsx)("strong",{className:"color-titles",children:"Homepage: "}),Object(h.jsx)("a",{className:"no-link",href:n.homepage,children:n.homepage})]}),Object(h.jsxs)("p",{className:"p-titles ",children:[Object(h.jsx)("strong",{className:"color-titles",children:"Status: "}),n.status]}),Object(h.jsxs)("p",{className:"p-titles ",children:[Object(h.jsx)("strong",{className:"color-titles",children:"Release date: "}),n.release_date]}),Object(h.jsxs)("p",{className:"p-titles ",children:[Object(h.jsx)("strong",{className:"color-titles",children:"Cast: "}),Object(h.jsx)(y.a,{className:"margin-cast",lines:2,more:"Show More",less:"Show Less",expanded:!1,children:!!S.cast&&S.cast.map((function(e){return Object(h.jsx)(r.b,{style:{textDecoration:"none",color:"white"},to:"/actor/"+e.id,children:e.name},e.id)})).reduce((function(e,t){return null===e?t:Object(h.jsxs)(h.Fragment,{children:[e," , ",t]})}),null)})]}),Object(h.jsxs)("div",{className:"logos-companies",children:[Object(h.jsx)("strong",{className:"color-titles",children:" production companies: "}),!!n.production_companies&&n.production_companies.map((function(e,t){if(null!=e.logo_path)return Object(h.jsx)("img",{className:"img-logo",src:T+e.logo_path,alt:e.name+t},e.name)}))]})]})]}),Object(h.jsx)("div",{className:"imgesContainer",children:Object(h.jsx)("div",{className:"colImages",children:Object(h.jsx)(g.a,{items:p,showIndex:!0})})}),Object(h.jsx)("div",{className:"videosContainer",children:!!v.results&&v.results.map((function(e,t){return Object(h.jsxs)("div",{className:"col-video",children:[Object(h.jsx)("iframe",{title:e.name,src:"https://youtube.com/embed/".concat(e.key),allowFullScreen:!0},e.name+t),Object(h.jsx)("p",{style:{color:"white"},children:e.name})]})}))}),Object(h.jsxs)("div",{className:"similarMovies",children:[Object(h.jsx)("p",{className:"p-similar",children:" Similar movies"}),Object(h.jsx)("div",{className:"grid-container",children:!!A.results&&A.results.map((function(e){return Object(h.jsx)(u,{img:e.poster_path,title:e.title,id:e.id},e.id)}))})]})]})}c(33);function _(){var e=Object(o.g)().actorId,t="https://image.tmdb.org/t/p/original",c=Object(s.useState)([]),n=Object(b.a)(c,2),a=n[0],i=n[1],r=Object(s.useState)([]),l=Object(b.a)(r,2),p=l[0],O=l[1],x=Object(s.useState)([]),f=Object(b.a)(x,2),v=f[0],N=f[1],w=Object(s.useState)([]),y=Object(b.a)(w,2),k=y[0],_=y[1];Object(s.useEffect)((function(){S(e),I(e),C(e),D(e)}),[e]);var S=function(){var e=Object(d.a)(j.a.mark((function e(t){var c,s,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://api.themoviedb.org/3/person/".concat(t),s=m(c),e.next=4,s;case 4:n=e.sent,i(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(d.a)(j.a.mark((function e(c){var s,n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="https://api.themoviedb.org/3/person/".concat(c,"/images"),n=[],a=m(s),e.next=5,a;case 5:e.sent.profiles.map((function(e){n.push({original:"".concat(t+e.file_path),thumbnail:"".concat(t+e.file_path)})})),O(n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(d.a)(j.a.mark((function e(t){var c,s,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=" https://api.themoviedb.org/3/person/".concat(t,"/external_ids"),s=m(c),e.next=4,s;case 4:n=e.sent,N(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(d.a)(j.a.mark((function e(t){var c,s,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://api.themoviedb.org/3/person/".concat(t,"/movie_credits"),s=m(c),e.next=4,s;case 4:n=e.sent,_(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"detailsContainerActor",children:[Object(h.jsxs)("div",{className:"profile-image",children:[Object(h.jsx)("img",{className:"col-details-actor ActorImg",src:null==a.profile_path?"":t+a.profile_path,alt:a.profile_path}),Object(h.jsxs)("p",{className:"p-name",children:[" ",a.name]}),Object(h.jsx)("p",{className:"p-title",children:"Also known as "}),Object(h.jsx)("p",{className:"p-content",children:!!a.also_known_as&&a.also_known_as.map((function(e){return e})).join(", ")}),Object(h.jsx)("p",{className:"p-title",children:"Birthday"})," ",Object(h.jsxs)("p",{className:"p-content",children:[a.birthday," (",function(e){var t=new Date,c=new Date(e),s=t.getFullYear()-c.getFullYear(),n=t.getMonth()-c.getMonth();return(n<0||0===n&&t.getDate()<c.getDate())&&s--,s}(a.birthday)," Years)"]}),Object(h.jsx)("p",{className:"p-title",children:"deathday"})," ",Object(h.jsx)("p",{className:"p-content",children:null==a.deathday?"Still Alive \ud83e\udd19":a.deathday+" \ud83e\udd76 \ud83d\ude2d"}),Object(h.jsx)("p",{className:"p-title",children:"Place of birth"})," ",Object(h.jsx)("p",{className:"p-content",children:a.place_of_birth}),Object(h.jsxs)("div",{className:"social-links",children:[null==v.facebook_id?"":Object(h.jsx)("a",{href:"https://www.facebook.com/"+v.facebook_id,target:"_blank",children:Object(h.jsx)("i",{className:"fa fa-facebook-f"})}),null==v.instagram_id?"":Object(h.jsx)("a",{href:"https://www.instagram.com/"+v.instagram_id,target:"_blank",children:Object(h.jsx)("i",{className:"fa fa-instagram"})}),null==v.twitter_id?"":Object(h.jsx)("a",{href:"https://twitter.com/"+v.twitter_id,target:"_blank",children:Object(h.jsx)("i",{className:"fa fa-twitter"})})]})]}),Object(h.jsxs)("div",{className:"profile-bio-images",children:[Object(h.jsx)("p",{className:"p-bio",children:" Biography"}),Object(h.jsxs)("p",{className:"biograpy",children:[" ",a.biography]}),Object(h.jsx)("div",{className:"col-images-gallery",children:Object(h.jsx)(g.a,{items:p,showIndex:!0})})]})]}),Object(h.jsxs)("div",{className:"actoraAppearances",children:[Object(h.jsx)("p",{className:"p-bio",children:" Actor's appearances"}),Object(h.jsx)("div",{className:"grid-container",children:!!k.cast&&k.cast.map((function(e){return Object(h.jsx)(u,{img:e.poster_path,title:e.title,id:e.id},e.id)}))})]})]})}c(34);var S=function(){return Object(h.jsxs)(r.a,{children:[Object(h.jsx)(x,{}),Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/",element:Object(h.jsx)(O,{})}),Object(h.jsx)(o.a,{exact:!0,path:"/movie/:movieId",element:Object(h.jsx)(k,{})}),Object(h.jsx)(o.a,{exact:!0,path:"/actor/:actorId",element:Object(h.jsx)(_,{})})]}),Object(h.jsx)(f,{})]})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root")),I()}],[[35,1,2]]]);
//# sourceMappingURL=main.6ea79d55.chunk.js.map