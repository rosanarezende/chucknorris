(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{100:function(e,n,t){"use strict";t.r(n);var a,r=t(0),A=t.n(r),o=t(15),c=t.n(o),i=(t(77),t(7)),u=t(61),l=t(24),m=t(19),g=t(50),s=t(23),d=t(20),p={openLoading:!1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_LOADING":return Object(d.a)(Object(d.a)({},e),{},{openLoading:n.payload.option});default:return e}},C={categories:[],selectedCategory:"",joke:{}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_CATEGORIES":return Object(d.a)(Object(d.a)({},e),{},{categories:n.payload.categories});case"SET_SELECTED_CATEGORY":return Object(d.a)(Object(d.a)({},e),{},{selectedCategory:n.payload.categoryName});case"SET_JOKE_BY_CATEGORY":return Object(d.a)(Object(d.a)({},e),{},{joke:n.payload.joke});default:return e}},f=Object(m.a)(),b=[Object(l.a)(Object(g.a)(f),u.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}],v=Object(l.e)((a=f,Object(l.c)({router:Object(s.b)(a),loading:h,jokes:E})),l.d.apply(void 0,b)),k=t(36),O="/",y="/category/:name",w="https://api.chucknorris.io/jokes",K=t(10),j=t(126),J=t(118),Q=t(13),I=t(14);function B(){var e=Object(Q.a)(["\n    cursor: pointer;\n    margin: 1rem 0;\n    display: flex;\n    align-items: center;\n"]);return B=function(){return e},e}function S(){var e=Object(Q.a)(["\n    height: 90vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"]);return S=function(){return e},e}var D=I.a.div(S()),q=I.a.div(B());var T=function(){var e=Object(i.d)(),n=Object(K.d)(O);return A.a.createElement(A.a.Fragment,null,A.a.createElement(D,null,A.a.createElement(J.a,{variant:"h5"},"P\xe1gina n\xe3o encontrada"),A.a.createElement(q,{onClick:function(){return e(n)}},A.a.createElement(j.a,null),A.a.createElement(J.a,{variant:"inherit",style:{marginLeft:"10px"}},"Voltar para Home"))))},x=t(25),M=t.n(x),Z=t(35),N=t(45),V=t.n(N),F=function(e){return{type:"SET_LOADING",payload:{option:e}}},Y=function(e){return{type:"SET_JOKE_BY_CATEGORY",payload:{joke:e}}},U=function(e){return function(){var n=Object(Z.a)(M.a.mark((function n(t){var a;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(F(!0)),n.prev=1,n.next=4,V.a.get("".concat(w,"/random?category=").concat(e));case 4:a=n.sent,t(F(!1)),t(Y(a.data)),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),t(F(!1)),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()},R=t(124);function L(){var e=Object(Q.a)(["\n    width: 15rem;\n    height: 10rem;\n    margin: 1rem;\n\n    @media screen and (max-device-width: 1200px) {\n        width: 10rem;\n        height: 5rem;\n        margin: 0.5rem;\n    }\n"]);return L=function(){return e},e}function z(){var e=Object(Q.a)(["\n    display: flex;\n    justify-content: center;\n    margin: 2em auto;\n    flex-wrap: wrap;\n\n    @media screen and (max-device-width: 1200px) {\n        margin: 1em auto;\n    }\n"]);return z=function(){return e},e}function H(){var e=Object(Q.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 60%;\n    margin: 3em auto;\n    min-height: 80vh;\n\n    @media screen and (max-device-width: 1200px) {\n        width: 90%;\n        margin: 1em auto;\n    }\n"]);return H=function(){return e},e}var G=I.a.div(H()),W=I.a.div(z()),X=Object(I.a)(R.a)(L());var P=function(){var e=Object(i.d)(),n=Object(i.e)((function(e){return e.jokes})).categories;Object(r.useEffect)((function(){e(function(){var e=Object(Z.a)(M.a.mark((function e(n){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(F(!0)),e.prev=1,e.next=4,V.a.get("".concat(w,"/categories"));case 4:t=e.sent,n(F(!1)),n({type:"SET_CATEGORIES",payload:{categories:t.data}}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),n(F(!1)),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n){return e.apply(this,arguments)}}())}),[e]);var t=function(){var n=Object(Z.a)(M.a.mark((function n(t){return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e({type:"SET_SELECTED_CATEGORY",payload:{categoryName:t}});case 2:e(Object(K.d)("/category/".concat(t)));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return A.a.createElement(G,null,A.a.createElement(J.a,{variant:"h5",align:"center"},"Choose a category to retrieve a random Chuck Norris joke!"),A.a.createElement(W,null,null===n||void 0===n?void 0:n.map((function(e){return A.a.createElement(X,{key:e,onClick:function(){return t(e)},variant:"outlined",color:"secondary"},e)}))))};function _(){var e=Object(Q.a)(["\n    width: 30%;\n    margin: 1em auto 3em; \n    \n    @media screen and (max-device-width: 1200px) {\n        width: 50%;\n    }\n"]);return _=function(){return e},e}function $(){var e=Object(Q.a)(["\n    height: 8vh;\n    width: auto;\n    margin-left: 1em;\n"]);return $=function(){return e},e}function ee(){var e=Object(Q.a)(["\n    display: flex;\n    align-items: center;\n    margin: 2em auto;\n"]);return ee=function(){return e},e}function ne(){var e=Object(Q.a)(["\n     display: flex;\n     flex-direction: column;\n"]);return ne=function(){return e},e}function te(){var e=Object(Q.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 50%;\n    margin: 3em auto;\n\n    @media screen and (max-device-width: 1200px) {\n        width: 90%;\n        margin: 2em auto;\n    }\n"]);return te=function(){return e},e}var ae=I.a.div(te()),re=I.a.div(ne()),Ae=I.a.div(ee()),oe=I.a.img($()),ce=Object(I.a)(R.a)(_());var ie=function(){var e,n,t=Object(i.d)(),a=Object(i.e)((function(e){return e.jokes})),o=a.selectedCategory,c=a.joke;return n=0===Object.keys(o).length?window.location.pathname.substr(10,15):o,Object(r.useEffect)((function(){return t(U(n)),function(){return t(Y({}))}}),[t,o,n]),A.a.createElement(ae,null,0!==Object.keys(c).length&&A.a.createElement(A.a.Fragment,null,A.a.createElement(J.a,{variant:"h5",align:"center"},null===(e=n)||void 0===e?void 0:e.toUpperCase()," JOKE"),A.a.createElement(re,null,A.a.createElement(Ae,null,A.a.createElement(J.a,{variant:"overline",align:"center"},null===c||void 0===c?void 0:c.value),A.a.createElement(oe,{src:null===c||void 0===c?void 0:c.icon_url,alt:"icon"})),A.a.createElement(ce,{variant:"contained",color:"secondary",onClick:function(){return t(U(n))}},"NEW ",n," JOKE"),A.a.createElement(J.a,{variant:"caption"},"Details in: ",A.a.createElement("a",{href:null===c||void 0===c?void 0:c.url},"ChuckNorris.io")))))};var ue=function(e){var n=e.history;return A.a.createElement(s.a,{history:n},A.a.createElement(k.c,null,A.a.createElement(k.a,{exact:!0,path:O,component:P}),A.a.createElement(k.a,{exact:!0,path:y,component:ie}),A.a.createElement(k.a,{path:"*",component:T})))},le=t(68),me=Object(le.a)({palette:{common:{black:"#000",white:"#fff"},background:{paper:"#fff",default:"#fafafa"},primary:{light:"rgba(125, 192, 215, 1)",main:"rgba(41, 171, 225, 1)",dark:"rgba(33, 126, 166, 1)",contrastText:"#fff"},secondary:{light:"rgba(250, 179, 136, 1)",main:"rgba(241, 90, 36, 1)",dark:"rgba(191, 72, 29, 1)",contrastText:"#fff"},error:{light:"#e57373",main:"#f44336",dark:"#d32f2f",contrastText:"#fff"},text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"}}}),ge=t(122),se=t(123),de=t(127),pe=t(120);var he=function(){var e=Object(i.d)();return A.a.createElement(de.a,{position:"static",style:{height:"8vh",justifyContent:"center"}},A.a.createElement(pe.a,{variant:"dense"},A.a.createElement("img",{src:"data:image/gif;base64,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",alt:"chucknorris",style:{height:"6vh",width:"auto"},onClick:function(){return e(Object(K.d)(O))}}),A.a.createElement("div",{style:{flexGrow:1}}),A.a.createElement(J.a,{variant:"h6"},"CHUCK NORRIS FACTS"),A.a.createElement("div",{style:{flexGrow:1}})))},Ce=t(121),Ee=t(125);var fe=function(){var e=Object(i.d)(),n=Object(i.e)((function(e){return e.loading})).openLoading;return A.a.createElement(Ee.a,{open:n,onClick:function(){e(F(!1))},style:{zIndex:10}},A.a.createElement(Ce.a,null))};var be=function(){return A.a.createElement(i.a,{store:v},A.a.createElement(ge.a,{theme:me},A.a.createElement(se.a,null),A.a.createElement(he,null),A.a.createElement(fe,null),A.a.createElement(ue,{history:f})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(A.a.createElement(be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,n,t){e.exports=t(100)},77:function(e,n,t){}},[[72,1,2]]]);
//# sourceMappingURL=main.12029692.chunk.js.map