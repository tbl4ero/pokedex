(this["webpackJsonptest-teask"]=this["webpackJsonptest-teask"]||[]).push([[0],{215:function(n,e,t){},216:function(n,e,t){"use strict";t.r(e);var r,a,o,i,c,l,s,p,u,d,b,m,f,x,g,h,O,j,E,w,k,v,y,S,z,C,D,A,F,_,T,V,B,R,P,I,L,H,M,N,W,Y,K,U,X,q,J,Q,G=t(0),Z=t.n(G),$=t(42),nn=t.n($),en=t(7),tn=t(14),rn=t(2),an=t(1),on=an.b.div(r||(r=Object(rn.a)(["\n  width: 50px;\n  margin: 10px auto;\n"]))),cn=an.b.svg(a||(a=Object(rn.a)(["\n  animation: rotate 2s linear infinite;\n  width: 50px;\n  height: 50px;\n  \n  & .path {\n    stroke: #5652BF;\n    stroke-linecap: round;\n    animation: dash 1.5s ease-in-out infinite;\n  }\n  \n  @keyframes rotate {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes dash {\n    0% {\n      stroke-dasharray: 1, 150;\n      stroke-dashoffset: 0;\n    }\n    50% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -35;\n    }\n    100% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -124;\n    }\n  }\n"]))),ln=function(){return Z.a.createElement(on,null,Z.a.createElement(cn,{viewBox:"0 0 50 50"},Z.a.createElement("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"4",stroke:"#fff"})))},sn=t(43),pn={normal:"#B9B8A9",bug:"#C2D21F",grass:"#8CD751",fire:"#FA5643",poison:"#AA5DA1",water:"#56AEFF",fighting:"#A75544",flying:"#79A4FF",ground:"#EBC956",rock:"#CDBC72",ghost:"#7975D6",electric:"#FDE53C",psychic:"#FA65B5",ice:"#96F1FF",dragon:"#8975FF",dark:"#8E6956",steel:"#C4C2DB",fairy:"#FAADFF"},un={hp:"HP",attack:"ATK",defense:"DEF","special-attack":"Sp. ATK","special-defense":"Sp. DEF",speed:"Speed"},dn=Object(an.c)(o||(o=Object(rn.a)(["\n  from {\n    opacity: 0;\n    margin-bottom: -20px;\n  }\n  to {\n    opacity: 1;\n    margin-bottom: 0;\n  }\n"]))),bn=an.b.div(i||(i=Object(rn.a)(['\n  border-radius: 14px;\n  box-sizing: border-box;\n  height: 100%;\n  font-family: "Roboto";\n  flex-direction: column;\n  background: ',";\n  transition: 0.2s ease-in-out;\n  display: flex;\n  align-items: center;\n  box-shadow: 2px 4px 2px 1px rgb(209 174 209);\n  padding: 15px;\n  animation: "," .3s ease-in-out;\n  :hover {\n    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.15);\n  }\n"])),(function(n){return pn[n.background]}),dn),mn=(an.b.div(c||(c=Object(rn.a)(["\n  display: flex;\n  padding: 5px;\n  font-weight: 500;\n  background: ",";\n  color: white;\n  font-size: 13px;\n  letter-spacing: .5px;\n  margin-left: 5px;\n  border: 2px solid white;\n  border-radius: 8px;\n"])),(function(n){return pn[n.type]})),Object(an.b)(sn.b)(l||(l=Object(rn.a)(["\n  text-decoration: none;\n"])))),fn=an.b.h2(s||(s=Object(rn.a)(["\n  text-align: center;\n  letter-spacing: 5px;\n  color: #fff;\n  text-shadow: -2px 2px 1px black, 0 2px 1px black;\n"]))),xn=an.b.div(p||(p=Object(rn.a)(["\n  margin-top: auto;\n  display: flex;\n  align-self: flex-start;\n  width: 100%;\n"]))),gn=an.b.div(u||(u=Object(rn.a)(["\n  text-align: right;\n  flex: 1;\n  font-size: 18px;\n  align-self: center;\n  color: black;\n"]))),hn=function(n){return Z.a.createElement(Z.a.Fragment,null,n.name?Z.a.createElement(mn,{to:"/pokedex/pokemon/".concat(n.name)},Z.a.createElement(bn,{background:n.types[0].type.name},Z.a.createElement("img",{height:"130",src:n.sprites.other["official-artwork"].front_default}),Z.a.createElement(fn,null,n.name.toUpperCase()),Z.a.createElement(xn,null,n.types.map((function(n){return Z.a.createElement("img",{alt:"",height:"20",style:{color:"black",margin:"5px"},src:"/pokedex/icons/".concat(n.type.name,".svg")})})),Z.a.createElement(gn,null,"#","".concat(n.id).padStart(3,"0"))))):Z.a.createElement(ln,null))},On=t(44),jn=t(45),En=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{shouldBeHidden:!1},e=Object(G.useRef)(),t=Object(G.useState)(null),r=Object(en.a)(t,2),a=r[0],o=r[1],i=new IntersectionObserver((function(n){n.forEach((function(n){0===n.intersectionRatio?o(!1):o(!0)}))}),n);return Object(G.useEffect)((function(){i.observe(e.current)}),[]),[e,a]},wn=an.b.div(d||(d=Object(rn.a)(["\n  height: 100px;\n  width: 100%;\n"]))),kn=an.b.div(b||(b=Object(rn.a)(["\n  display: grid;\n  padding: 20px 0;\n  -webkit-overflow-scrolling: touch;\n  touch-action: none;\n  position: ",";\n  transition: 0.3s ease-in-out;\n  cursor: ",";\n  width: 100%;\n  height: 70px;\n  box-sizing: border-box;\n  box-shadow: none;\n  grid-template-columns: 10% auto 10%;\n  ","\n"])),(function(n){return!n.inView&&"fixed"}),(function(n){return!n.inView&&"pointer"}),(function(n){return!n.inView&&Object(an.a)(m||(m=Object(rn.a)(["\n      overflow-x: hidden;\n      padding ",";\n      background: ",";\n      box-shadow: ",";\n      @media(min-width: 800px) {\n        height: ",";\n      }\n      @media(max-width: 800px) {\n        padding 20px 0;\n        bottom: 0;\n        clip: ",";\n\n      }"])),n.minimized&&"0px",!n.minimized&&"#EDEDED",!n.minimized&&"0px -1px 18px 7px rgba(0,0,0,0.65)",n.minimized&&"70px",n.minimized&&"rect(auto, auto, auto, auto)")})),vn=an.b.input(f||(f=Object(rn.a)(["\n  justify-self: center;\n  border-radius: 0;\n  background: rgba(0, 0, 0, 0);\n  color: black;\n  outline: none;\n  height: 18px;\n  margin: auto 0;\n  padding: 4px;\n  font-family: Roboto;\n  caret-color: black;\n  border: none;\n  font-weight: 700;\n  outline: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  margin-left: -20px;\n  padding-left: 24px;\n  ::placeholder {\n    color: rgba(0, 0, 0, 0.4);\n  }\n  :hover {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.8);\n  }\n"]))),yn=an.b.div(x||(x=Object(rn.a)(["\n  display: ",";\n  justify-content: center;\n  align-items: center;\n"])),(function(n){return!n.inView&&n.minimized?"none":"flex"})),Sn=Object(an.c)(g||(g=Object(rn.a)(["\n  0% {\n  }\n  10% {\n    border-radius: 0;\n  }\n  20% {\n    border-radius: 0;\n    height: 0;\n  }\n  30% {\n    transform: rotate(45deg);\n    border-radius: 0;\n    height: 0;\n    width: 40px;\n    left: -1px;\n    top: 18px;\n  }\n  40% {\n    transform: rotate(45deg);\n    border-radius: 0;\n    height: 0;\n    width: 40px;\n    border: none;\n    border-bottom: 2px solid black;\n    left: 0;\n    top: 18px;\n  }\n  100% {\n    transform: rotate(45deg);\n    border-radius: 0;\n    height: 0;\n    width: 40px;\n    left: 0;\n    top: 18px;\n    border: none;\n    border-bottom: 2px solid black;\n  }\n"]))),zn=Object(an.c)(h||(h=Object(rn.a)(["\n  100% {\n    border: 2px solid black;\n    \n  }\n  40% {\n    border-radius: 0;\n  }\n  30% {\n    border-radius: 0;\n    border: 2px solid black;\n    height: 0;\n  }\n  20% {\n    transform: rotate(45deg);\n    border-radius: 0;\n    height: 0;\n    width: 40px;\n    left: -1px;\n    border: 1px solid black;\n\n    top: 18px;\n  }\n  10% {\n    transform: rotate(45deg);\n    border-radius: 0;\n    height: 0;\n    width: 40px;\n    left: 0;\n    top: 18px;\n    border: 2px solid black;\n\n  }\n  0% {\n    transform: rotate(45deg);\n    border-radius: 0;\n    height: 0;\n    width: 40px;\n    left: 0;\n    top: 18px;\n    border: none;\n    border-bottom: 1px solid black;\n\n  }\n"]))),Cn=Object(an.c)(O||(O=Object(rn.a)(["\n  0% {\n\n  }\n  100% {    \n    background: none;\n    transform: rotate(135deg);\n    background: transparent;\n  }\n"]))),Dn=Object(an.c)(j||(j=Object(rn.a)(["\n  0% {    \n    background: none;\n    transform: rotate(135deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n"]))),An=Object(an.c)(E||(E=Object(rn.a)(["\n  0% {\n  }\n  50% {\n    transform: scale(0.9) rotate(20deg);\n\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n"]))),Fn=an.b.div(w||(w=Object(rn.a)(["\n  height: 40px;\n  top: 10px;\n  margin-left: 20px;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  width: 40px;\n  border: ",";\n  background-color: ",";\n  position: fixed;\n  border-radius: 50%;\n\n  ",'\n\n  :before, :after {\n    content: " ";\n    position: absolute;\n  }\n\n  :after {\n    animation: ',";\n    height: 20px;\n    transform-origin: 50% calc(100% - 2px);\n    width: 40px;\n    border-top-left-radius: 40px;\n    border-top-right-radius: 40px;\n    background: red;\n    display: inline-block;\n    border-bottom: 2px solid black;\n  }\n\n  :before {\n    animation: ",";\n    z-index: 20;\n    width: 7px;\n    height: 7px;\n    top: calc(50% - 4px);\n    left: calc(50% - 5px);\n    border-radius: 50%;\n    background: white;\n    border: 2px solid black;\n  }\n  animation: "," 3s\n    ease-in-out infinite;\n"])),(function(n){return n.inView||n.minimized?"2px solid black":"none"}),(function(n){return n.inView||n.minimized?"white":"transparent"}),(function(n){return!n.inView&&Object(an.a)(k||(k=Object(rn.a)(["\n      position: fixed;\n      top: 15px;\n      @media (max-width: 800px) {\n        bottom: 15px;\n        top: auto;\n        transform: scale(0.8);\n      }\n    "])))}),(function(n){return n.inView||n.minimized?Object(an.a)(y||(y=Object(rn.a)(["\n            "," .25s linear normal forwards\n          "])),Dn):Object(an.a)(v||(v=Object(rn.a)(["\n            "," .25s linear normal forwards\n          "])),Cn)}),(function(n){return n.inView||null===n.minimized||n.minimized?Object(an.a)(z||(z=Object(rn.a)(["\n            "," .3s linear normal forwards\n          "])),zn):Object(an.a)(S||(S=Object(rn.a)(["\n            "," .3s linear normal forwards\n          "])),Sn)}),(function(n){return!n.inView&&n.minimized&&An})),_n=function(n){return{type:"SET_SEARCH_QUERY",query:n}},Tn=function(){var n=Object(tn.b)(),e=Object(tn.c)((function(n){return n})).searchValue,t=Object(G.useState)(!0),r=Object(en.a)(t,2),a=r[0],o=r[1],i=En({rootMargin:"20px",threshold:0}),c=Object(en.a)(i,2),l=c[0],s=c[1];return Z.a.createElement(wn,{ref:l},Z.a.createElement(kn,{inView:s,minimized:a},Z.a.createElement("div",null,Z.a.createElement(Fn,{minimized:a,inView:s,onClick:function(){return!s&&o(!a)}})),Z.a.createElement(yn,{inView:s,minimized:a},Z.a.createElement(On.a,{icon:jn.a,color:"#000",alignmentBaseline:"central",opacity:"0.4"}),Z.a.createElement(vn,{defaultValue:e,onChange:function(e){return n(_n(e.target.value))},placeholder:"Search pokemon..."}))))},Vn=t(16),Bn=t.n(Vn),Rn=t(12),Pn=t(5),In=t(26),Ln=t(89),Hn=function(){var n=Object(In.a)(Bn.a.mark((function n(e){var t;return Bn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e,{headers:{"Access-Control-Allow-Origin":"*"},mode:"cors"}).then((function(n){return n.json()}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),Mn=function(n){return{type:"SET_CARDS",cards:n}},Nn=function(n){return{type:"SET_POKEMON",pokemon:n}},Wn=function(n,e){return function(){var t=Object(In.a)(Bn.a.mark((function t(r){var a,o,i,c,l;return Bn.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Hn("https://pokeapi.co/api/v2/pokemon/".concat(n));case 2:return a=t.sent,t.next=5,Hn("https://pokeapi.co/api/v2/pokemon-species/".concat(n));case 5:return o=t.sent,t.next=8,Object(Ln.a)(a.sprites.other["official-artwork"].front_default).then((function(n){return n[2].toString()}));case 8:return i=t.sent,t.next=11,Promise.all(Object(Pn.a)(a.abilities.map((function(n){return Hn("https://pokeapi.co/api/v2/ability/".concat(n.ability.name))}))));case 11:c=t.sent,l=Object(Rn.a)(Object(Rn.a)(Object(Rn.a)({},a),o),{},{bgColor:i,ads:c}),r(Nn(l)),e(!1);case 15:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},Yn=an.b.div(C||(C=Object(rn.a)(["\n    max-width: 1400px;\n    box-sizing: border-box;\n    width: 100%;\n    margin: 0 auto;\n    flex-direction: column;\n    margin-top: 40px;\n    flex-wrap: wrap;\n"]))),Kn=an.b.div(D||(D=Object(rn.a)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 230px);\n    grid-gap: 20px;\n    justify-content: center;\n"]))),Un=function(){var n=Object(tn.c)((function(n){return{pokemons:n.pokemonList,searchValue:n.searchValue}})),e=n.pokemons,t=n.searchValue,r=Object(G.useState)(0),a=Object(en.a)(r,2),o=a[0],i=a[1],c=Object(tn.b)(),l=En({threshold:1}),s=Object(en.a)(l,2),p=s[0],u=s[1];return Object(G.useEffect)((function(){u&&i(o+50)}),[u]),Object(G.useEffect)((function(){i(50)}),[t]),Object(G.useEffect)((function(){0===e.length&&c(function(){var n=Object(In.a)(Bn.a.mark((function n(e){var t,r;return Bn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=0,(r=function(){var n=Object(In.a)(Bn.a.mark((function n(){var a,o,i;return Bn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(t>=1150)){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,Hn("https://pokeapi.co/api/v2/pokemon?limit=50&offset=".concat(t));case 4:return a=n.sent,o=a.results,n.next=8,Promise.all(Object(Pn.a)(o.map((function(n){return Hn(n.url)}))));case 8:return i=(i=n.sent).map((function(n){return{name:n.name,types:n.types,sprites:n.sprites,id:n.id}})),e(Mn(i)),t+=50,n.abrupt("return",r());case 13:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}())();case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}),[]),Z.a.createElement(Z.a.Fragment,null,Z.a.createElement(Tn,null),Z.a.createElement(Yn,null,Z.a.createElement(Kn,null,e.filter((function(n){var e=n.name;return new RegExp(t).test(e)})).slice(0,o).map((function(n){return Z.a.createElement(hn,Object.assign({key:n.name},n))}))),Z.a.createElement("div",{style:{padding:"5px",margin:"10px 0"},ref:p})))},Xn=t(6),qn=t(8),Jn=t(95),Qn={plugins:{legend:{display:!1},tooltip:{displayColors:!1,displayTItle:!1}},scales:{r:{pointLabels:{backdropColor:"rgba(0, 0, 0, .5)",backdropPaddingX:3,backdropPaddingY:1,font:{size:16,weight:"700"},color:"white"},ticks:{display:!1,maxTicksLimit:3,beginAtZero:!0,max:500},grid:{color:"white",lines:{width:10},lineWidth:4},angleLines:{color:"white",width:10}}}},Gn=an.b.div(A||(A=Object(rn.a)(["\n  width: 350px;\n  position: relative;\n  z-index: 10;\n  box-sizing: border-box;\n  padding: 30px;\n  margin: auto;\n  @media (max-width: 400px) {\n    width: 300px;\n  }\n"]))),Zn=function(n){var e=n.stats.reduce((function(n,e){return Object(Rn.a)(Object(Rn.a)({},n),{},Object(qn.a)({},un[e.stat.name],e.base_stat))}),{}),t={labels:Object(Pn.a)(Object.keys(e)),datasets:[{backgroundColor:"rgba(255,255,255,.55)",borderColor:"rgb(255,255,255)",pointBackgroundColor:"rgb(255,255,255)",pointHitRadius:5,pointRadius:4,data:Object(Pn.a)(Object.values(e))}]};return Z.a.createElement(Gn,null,Z.a.createElement(Jn.a,{type:"radar",data:t,options:Qn}))},$n=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=Object(G.useState)(!1),t=Object(en.a)(e,2),r=t[0],a=t[1],o=Object(G.useState)({x:0,y:0}),i=Object(en.a)(o,2),c=i[0],l=i[1];return{isHovered:r,hoverOptions:{onMouseMove:function(e){if(a(!0),n){var t=e.currentTarget.getBoundingClientRect(),r=t.left,o=t.top;l({x:e.clientX-r,y:e.clientY-o})}},onTouchStart:function(){a(!0),n&&l({x:0,y:0})},ontouchend:function(){return a(!1)},onMouseLeave:function(){return a(!1)}},cursorPos:c}},ne=an.b.div(F||(F=Object(rn.a)(["\n  display: flex;\n  margin: ",";\n  ",";\n  flex-wrap: wrap;\n  z-index: 15;\n  align-items: flex-start;\n  position: relative;\n  justify-content: ",";\n"])),(function(n){return n.margin||"0 auto"}),(function(n){return n.direction&&"flex-direction: ".concat(n.direction)}),(function(n){return n.align||"center"})),ee=an.b.div(_||(_=Object(rn.a)(["\n  display: flex;\n  padding: 5px;\n  background: ",";\n  border-radius: 50%;\n  margin-left: 5px;\n  border: 2px solid white;\n"])),(function(n){return pn[n.type]})),te=an.b.div(T||(T=Object(rn.a)(["\n  text-transform: uppercase;\n  padding: 10px 15px;\n  height: 20px;\n  margin: 5px;\n  background: rgba(255, 255, 255, 0.75);\n  font-weight: bolder;\n  border-radius: 14px;\n  box-shadow: 0 20px 25px -10px rgb(0 0 0 / 15%);\n"]))),re=an.b.div(V||(V=Object(rn.a)(["\n  margin: 0 auto;\n"]))),ae=an.b.div(B||(B=Object(rn.a)(["\n  margin-left: auto;\n  cursor: pointer;\n  font-size: 22px;\n  margin-bottom: 10px;\n  @media (hover: hover) and (pointer: fine) {\n    display: none;\n  }\n"]))),oe=an.b.div(R||(R=Object(rn.a)(["\n  z-index: 99999;\n  position: absolute;\n  left: ","px;\n  bottom: ","px;\n  width: 220px;\n  @media (hover: none) and (pointer: coarse) {\n    left: -25%;\n    bottom: 30px;\n  }\n  display: flex;\n  flex-wrap: wrap;\n  color: black;\n  max-width: 300px;\n  transform: translate(-40px);\n  padding: 10px;\n  background: #ffffff;\n  border-radius: 4px;\n  box-shadow: 0px 4px 16px 2px rgba(0, 0, 0, 0.62);\n"])),(function(n){return n.cursorPos.x-10}),(function(n){return 40-n.cursorPos.y})),ie=an.b.li(P||(P=Object(rn.a)(["\n  color: white;\n  margin: 5px 0;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  font-size: 18px;\n  border-bottom: 2px dashed black;\n  padding-bottom: 2px;\n  text-transform: uppercase;\n"]))),ce=an.b.strong(I||(I=Object(rn.a)(["\n  margin-top: auto;\n"]))),le=an.b.ul(L||(L=Object(rn.a)(["\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),se=an.b.h2(H||(H=Object(rn.a)(["\n  color: white;\n  font-weight: 500;\n  text-shadow: rgb(0 0 0 / 25%) 0px 0px 12px;\n"]))),pe=an.b.div(M||(M=Object(rn.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 270px;\n  height: 100px;\n"]))),ue=function(n){var e=$n(!0),t=e.isHovered,r=e.hoverOptions,a=e.cursorPos,o=Object(G.useState)(!1),i=Object(en.a)(o,2),c=i[0],l=i[1];return Z.a.createElement(ie,Object.assign({},r,{onTouchStart:function(){return l(!1)}}),t&&!c&&Z.a.createElement(oe,{cursorPos:a},Z.a.createElement(ce,null,n.tooltipTitle),Z.a.createElement(ae,{onClick:function(){return l(!0)}},Z.a.createElement(On.a,{icon:jn.b})),n.tooltipDescription),Z.a.createElement("div",null,n.children))},de=function(n){return Z.a.createElement(ne,{direction:"column",margin:"0"},Z.a.createElement(ne,{align:"flex-start",margin:"20px 0"},n.types.map((function(n){return Z.a.createElement(ee,{type:n.type.name},Z.a.createElement("img",{height:"20",src:"/pokedex/icons/".concat(n.type.name,".svg")}))}))),Z.a.createElement(pe,null,Z.a.createElement(te,null,"Weight: ",n.weight),Z.a.createElement(te,null,"Height: ",n.height),Z.a.createElement(te,null,"Area: ",n.habitat.name)),Z.a.createElement(re,null,Z.a.createElement(se,null,"ABILIITIES:"),Z.a.createElement(le,null,n.ads.map((function(n,e){return Z.a.createElement(ue,{tooltipTitle:n.name,tooltipDescription:n.effect_entries.filter((function(n){return"en"===n.language.name}))[0].short_effect},n.name)})))))},be=an.b.h1(N||(N=Object(rn.a)(["\n  text-align: center;\n  font-size: 80px;\n  margin-bottom: 0;\n  color: white;\n  margin-top: 7px;\n  text-shadow: 0 0 12px rgb(0 0 0 / 25%);\n  @media (max-width: 640px) {\n    font-size: 60px;\n  }\n"]))),me=an.b.h2(W||(W=Object(rn.a)(["\n  text-align: center;\n  color: rgba(255, 255, 255, 0.7);\n  font-weight: bolder;\n  letter-spacing: 2px;\n  margin-top: 10px;\n  font-size: 45px;\n  margin-bottom: 25px;\n  text-shadow: 0 0 12px rgb(0 0 0 / 25%);\n"]))),fe=an.b.img(Y||(Y=Object(rn.a)(["\n  margin-right: -80px;\n  position: relative;\n  @media (max-width: 1120px) {\n    max-height: 370px;\n    margin-right: -50px;\n  }\n  @media (max-width: 690px) {\n    margin-right: 0;\n    max-height: 300px;\n  }\n"]))),xe=an.b.div(K||(K=Object(rn.a)(["\n  display: flex;\n  margin: ",";\n  ",";\n  flex-wrap: wrap;\n  z-index: 15;\n  align-items: flex-start;\n  position: relative;\n  justify-content: ",";\n"])),(function(n){return n.margin||"0 auto"}),(function(n){return n.direction&&"flex-direction: ".concat(n.direction)}),(function(n){return n.align||"center"})),ge=t(96),he=Object(an.b)(ge.a)(U||(U=Object(rn.a)(["\n  margin: 40px;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.2);;\n  transition: 0.2s ease-in-out;\n  margin-bottom: 0;\n  :hover {\n    color: rgba(0, 0, 0, 0.6);\n  }\n"]))),Oe=function(n){return Z.a.createElement(he,{onClick:n.route,height:"50",width:"50"})},je=an.b.div(q||(q=Object(rn.a)(["\n  margin: auto;\n"]))),Ee=an.b.div(J||(J=Object(rn.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  width: 100%;\n  min-height: 100vh;\n  animation: "," 0.6s ease-in-out;\n  background-color: rgb(",");\n"])),(function(n){return e=n.bg,Object(an.c)(X||(X=Object(rn.a)(["\n  from {\n    background: #EDEDED;\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    background: ",";\n  }\n"])),e);var e}),(function(n){return n.bg})),we=an.b.div(Q||(Q=Object(rn.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n"]))),ke=function(n){var e=n.WrappedComponent,t=n.match,r=n.setData,a=n.history,o=n.selector,i=Object(G.useState)(!0),c=Object(en.a)(i,2),l=c[0],s=c[1],p=Object(tn.b)(),u=Object(tn.c)((function(n){return{data:n[o]}})).data;return Object(G.useEffect)((function(){p(r(t.params.name,s))}),[]),Z.a.createElement(Z.a.Fragment,null,l?Z.a.createElement(je,null,Z.a.createElement(ln,null)):Z.a.createElement(Ee,{bg:u.bgColor},Z.a.createElement(Oe,{route:a.goBack}),Z.a.createElement(we,null,Z.a.createElement(e,u))))},ve=function(n){return Z.a.createElement(Z.a.Fragment,null,Z.a.createElement(be,null,n.name),Z.a.createElement(me,null,"#","".concat(n.id).padStart(3,"0")),Z.a.createElement(xe,null,Z.a.createElement(de,n),Z.a.createElement(fe,{src:n.sprites.other["official-artwork"].front_default}),Z.a.createElement(Zn,n)))},ye=function(n){return Z.a.createElement(ke,{WrappedComponent:ve,color:n.color,match:n.match,setData:Wn,selector:"currentPokemon",history:n.history})},Se=t(32),ze=t(94),Ce=function(n,e,t){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,a=arguments.length>1?arguments[1]:void 0;return a.type===t?a[e]:r}},De={currentPokemon:Ce(null,"pokemon","SET_POKEMON"),currentAbility:Ce(null,"ability","SET_ABILITY"),pokemonList:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return"SET_CARDS"===e.type?[].concat(Object(Pn.a)(n),Object(Pn.a)(e.cards)):n},loading:Ce(!0,"loading","SET_LOADING"),searchValue:Ce("","query","SET_SEARCH_QUERY")},Ae=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Se.c,Fe=Object(Se.d)(Object(Se.b)(De),Ae(Object(Se.a)(ze.a))),_e=function(){return Z.a.createElement("div",{style:{fontFamily:"Roboto",minHeight:"100vh",background:"#EDEDED",display:"flex",flexDirection:"column"}},Z.a.createElement(sn.a,null,Z.a.createElement(Xn.a,{path:"/pokedex/",exact:!0,component:Un}),Z.a.createElement(Xn.a,{path:"/pokedex/pokemon/:name",component:ye})))};var Te=function(){return Z.a.createElement(tn.a,{store:Fe},Z.a.createElement(_e,null))};t(215);nn.a.render(Z.a.createElement(Z.a.StrictMode,null,Z.a.createElement(Te,null)),document.getElementById("root"))},97:function(n,e,t){n.exports=t(216)}},[[97,1,2]]]);
//# sourceMappingURL=main.b40c6094.chunk.js.map