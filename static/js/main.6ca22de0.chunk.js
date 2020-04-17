(this["webpackJsonpreact-movies"]=this["webpackJsonpreact-movies"]||[]).push([[0],{147:function(e,t,a){e.exports=a(257)},152:function(e,t,a){},153:function(e,t,a){},223:function(e,t,a){},224:function(e,t,a){},229:function(e,t,a){},257:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(5),r=a.n(o),i=(a(152),a(44)),l=a(45),m=a(52),u=a(51),s=(a(87),a(153),a(258)),p=a(107),h=a(263),d=a(267),g=a(48),f=s.a.Header,E=function(){return c.a.createElement(s.a,null,c.a.createElement(f,{style:{position:"fixed",zIndex:1,width:"100%",padding:"0 150px"}},c.a.createElement(p.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"]},c.a.createElement(p.a.Item,{key:"1"},c.a.createElement(g.b,{to:"/"},c.a.createElement(d.a,null),"Home")),c.a.createElement(p.a.Item,{key:"2"},c.a.createElement(h.a,{style:{width:200,justifyContent:"flex-end"},placeholder:"Search..."})),c.a.createElement(p.a.Item,{key:"3"}))))},v=a(32),b=(a(223),a(24)),y=a(262),j=(a(224),function(e){return c.a.createElement("div",{className:"container"},c.a.createElement(y.a,{className:"site-page-header",title:e.tittle,subTitle:e.subtittle}))}),w=a(259),k=(a(229),"https://api.themoviedb.org/3"),O="8331c0e63f02372a473a46db041c13db",S=function(e){return c.a.createElement("div",{className:"container"},c.a.createElement(w.a,{autoplay:!0},e.data.map((function(e){return c.a.createElement("img",{className:"img_darker",key:e.id,src:"".concat("https://image.tmdb.org/t/p/").concat("original").concat(e.backdrop_path),alt:"IMAGES"})})),c.a.createElement("h1",null,e.data.title)))},x=a(56),P=a(17),M=a(261),_=M.a.Meta,C=function(e){return c.a.createElement("div",null,e.clickable?c.a.createElement(g.b,{to:{pathname:"/".concat(e.movieId),movieName:"".concat(e.movieName)}},c.a.createElement(M.a,{hoverable:!0,style:{width:240},cover:c.a.createElement("img",{alt:"example",src:"".concat("https://image.tmdb.org/t/p/").concat("original").concat(e.poster)})},c.a.createElement(_,{title:e.tittle,description:e.score}))):c.a.createElement(M.a,{hoverable:!0,style:{width:240},cover:c.a.createElement("img",{alt:"example",src:"".concat("https://image.tmdb.org/t/p/").concat("original").concat(e.poster)})},c.a.createElement(_,{title:e.tittle,description:e.score})))},D=function(e){return c.a.createElement(x.a,{gutter:[32,32]},e.data.map((function(e){return c.a.createElement(P.a,{lg:6,md:8,xs:24},c.a.createElement(C,{poster:e.poster_path,tittle:e.original_title,score:e.vote_average}))})))},N=a(260),I=a(265),T=a(268),R=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(N.a,{orientation:"right"},c.a.createElement(I.a,{type:"primary",icon:c.a.createElement(T.a,null)},e.name)))},U=function(e){return c.a.createElement("div",null,c.a.createElement(y.a,{title:e.tittle,subTitle:e.subtittle}),c.a.createElement(D,{data:e.data}),c.a.createElement(R,{name:e.button}))},B=a(264),F=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={movies:[],nowPlaying:[],upComing:[],popular:[],topRated:[],currentPage:0,totalPage:0,searchTerm:""},e.fetchDataNowPlaying=function(t){fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({nowPlaying:[].concat(Object(b.a)(e.state.nowPlaying),Object(b.a)(t.results.slice(0,6)))})}))},e.fetchDataPopular=function(t){fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({popular:[].concat(Object(b.a)(e.state.popular),Object(b.a)(t.results.slice(0,8)))})}))},e.fetchDataUpcoming=function(t){fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({upComing:[].concat(Object(b.a)(e.state.upComing),Object(b.a)(t.results.slice(0,8)))})}))},e.fetchDataTopRated=function(t){fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({topRated:[].concat(Object(b.a)(e.state.topRated),Object(b.a)(t.results.slice(0,8)))})}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e="".concat(k,"/movie/popular?api_key=").concat(O,"&language=en-US&page=1"),t="".concat(k,"/movie/now_playing?api_key=").concat(O,"&language=en-US&page=1"),a="".concat(k,"/movie/upcoming?api_key=").concat(O,"&language=en-US&page=1"),n="".concat(k,"/movie/top_rated?api_key=").concat(O,"&language=en-US&page=1");this.fetchDataNowPlaying(t),this.fetchDataPopular(e),this.fetchDataUpcoming(a),this.fetchDataTopRated(n)}},{key:"render",value:function(){return c.a.createElement("div",{style:{margin:"0 150px"}},0===this.state.nowPlaying.length?c.a.createElement("div",{style:{marginTop:"150px"}},c.a.createElement(B.a,{active:!0}),c.a.createElement(B.a,{active:!0})):c.a.createElement(c.a.Fragment,null,c.a.createElement(j,{tittle:"Movies",subtittle:"Now Playing"}),c.a.createElement(S,{data:this.state.nowPlaying}),c.a.createElement(U,{tittle:"Movies",subtittle:"Popular",data:this.state.popular,button:"See More"}),c.a.createElement(U,{tittle:"Movies",subtittle:"Up Coming",data:this.state.upComing,button:"See More"}),c.a.createElement(U,{tittle:"Movies",subtittle:"Top Rated",data:this.state.topRated,button:"See More"})))}}]),a}(n.Component),H=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,"Movie")}}]),a}(n.Component),z=a(266),A=function(){return c.a.createElement(z.a,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:c.a.createElement(I.a,{type:"primary"},"Back Home")})},J=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement(g.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(E,null),c.a.createElement(v.c,null,c.a.createElement(v.a,{path:"/",component:F,exact:!0}),c.a.createElement(v.a,{path:"/:movieId",component:H,exact:!0}),c.a.createElement(v.a,{component:A}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[147,1,2]]]);
//# sourceMappingURL=main.6ca22de0.chunk.js.map