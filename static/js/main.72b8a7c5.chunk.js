(this["webpackJsonptodolist-weather-react-app"]=this["webpackJsonptodolist-weather-react-app"]||[]).push([[0],{29:function(n,e,t){n.exports=t(52)},52:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),c=t(21),o=t.n(c),i=t(2),u=t(3),l=t(5),d=t(7),p=t(27),f=[{id:1,text:"\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131",check:!1},{id:2,text:"UI \ub9cc\ub4e4\uae30",check:!0},{id:3,text:"\uae30\ub2a5 \uad6c\ud604",check:!1}];function s(n,e){switch(e.type){case"CREATE":return n.concat(e.todo);case"TOGGLE":return n.map((function(n){return n.id===e.id?Object(p.a)({},n,{check:!n.check}):n}));case"REMOVE":return n.filter((function(n){return n.id!==e.id}));default:throw new Error("Unhandled ".concat(e.type))}}var m=Object(r.createContext)(),b=Object(r.createContext)(),x=Object(r.createContext)();function v(n){var e=n.children,t=Object(r.useReducer)(s,f),c=Object(l.a)(t,2),o=c[0],i=c[1],u=Object(r.useRef)(4);return a.a.createElement(m.Provider,{value:o},a.a.createElement(b.Provider,{value:i},a.a.createElement(x.Provider,{value:u},e)))}function h(){return Object(r.useContext)(m)}function g(){return Object(r.useContext)(b)}var E=t(9),O=t.n(E),j=t(22),k=t(23),w=t.n(k),y=t(6);function C(){var n=Object(i.a)(["\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 8px solid #3498db;\n  width: 40px;\n  height: 40px;\n  animation: spin 2s linear infinite;\n  position: absolute;\n  top: 40px;\n  right: 50px;\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  @media (max-width: 768px) {\n    top: 83px;\n    right: 86px;\n  }\n"]);return C=function(){return n},n}function z(){var n=Object(i.a)(["\n  position: absolute;\n  top: 30px;\n  right: 40px;\n  text-align: center;\n  & div {\n    display: flex;\n    align-items: center;\n    font-size: 48px;\n  }\n  & h4 {\n    margin-top: 10px;\n  }\n\n  @media (max-width: 768px) {\n    top: 70px;\n    right: 73px;\n  }\n"]);return z=function(){return n},n}var R=u.c.div(z()),S=u.c.div(C()),D={Clear:{icon:a.a.createElement(y.c,null)},Rain:{icon:a.a.createElement(y.e,null)},Haze:{icon:a.a.createElement(y.b,null)},Snow:{icon:a.a.createElement(y.f,null)},Clouds:{icon:a.a.createElement(y.a,null)},Fog:{icon:a.a.createElement(y.d,null)},Mist:{icon:a.a.createElement(y.d,null)}};var F=function(){var n=Object(r.useState)(null),e=Object(l.a)(n,2),t=e[0],c=e[1],o=Object(r.useState)(null),i=Object(l.a)(o,2),u=i[0],d=i[1],p=Object(r.useState)(!1),f=Object(l.a)(p,2),s=f[0],m=f[1];return Object(r.useEffect)((function(){var n=function(){var n=Object(j.a)(O.a.mark((function n(e,t){var r;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,m(!0),n.next=4,w.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(t,"&appid=e5332e24c31f61a15f503bcab6b71d18"));case 4:r=n.sent,c(r.data),m(!1),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),d(n.t0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e,t){return n.apply(this,arguments)}}();navigator.geolocation.getCurrentPosition((function(e){n(e.coords.latitude,e.coords.longitude)}))}),[]),s?a.a.createElement(S,null):t?u?a.a.createElement("div",null,"\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.",u):a.a.createElement(a.a.Fragment,null,a.a.createElement(R,null,a.a.createElement("div",null,D[t.weather[0].main].icon,a.a.createElement("span",null,Math.ceil(t.main.temp-273.15),"\xba")),a.a.createElement("h3",null,t.name))):null};function G(){var n=Object(i.a)(["\n  border-bottom: 1px solid #a5d8ff;\n  height: 120px;\n  padding: 40px 40px 10px 40px;\n  position: relative;\n\n  & h1 {\n    margin: 0;\n    color: #0b7285;\n  }\n\n  & h3 {\n    margin: 0;\n    color: #ffa8a8;\n  }\n\n  & p {\n    margin-bottom: 0;\n    color: #ced4da;\n    font-weight: bold;\n  }\n"]);return G=function(){return n},n}var L=u.c.div(G());var M=function(){var n=h().filter((function(n){return!0!==n.check})),e=new Date(Date.now()),t=e.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}),r=e.toLocaleDateString("ko-KR",{weekday:"long"});return a.a.createElement(L,null,a.a.createElement(F,null),a.a.createElement("h1",null,t),a.a.createElement("h3",null,r),a.a.createElement("p",null,"\ud560 \uc77c ",n.length," \ub0a8\uc74c"))};function P(){var n=Object(i.a)(["\n  color: #343a40;\n  font-size: 24px;\n  flex: 1;\n  padding-left: 20px;\n"]);return P=function(){return n},n}function T(){var n=Object(i.a)(["\n  display: none;\n  cursor: pointer;\n  color: #ced4da;\n  font-size: 24px;\n"]);return T=function(){return n},n}function A(){var n=Object(i.a)(["\n  width: 32px;\n  height: 32px;\n  text-align: center;\n  border-radius: 50%;\n  border: 1px solid #dee2e6;\n  color: #dee2e6;\n  cursor: pointer;\n"]);return A=function(){return n},n}function I(){var n=Object(i.a)(["\n  display: flex;\n  padding-bottom: 20px;\n  font-size: 24px;\n\n  &:hover .remove {\n    display: block;\n  }\n"]);return I=function(){return n},n}var J=u.c.div(I()),K=u.c.div(A()),U=u.c.div(T()),V=u.c.div(P());var B=function(n){var e=n.id,t=n.text,r=n.check,c=g();return a.a.createElement(a.a.Fragment,null,a.a.createElement(J,null,a.a.createElement(K,{onClick:function(){c({type:"TOGGLE",id:e})}},r&&a.a.createElement(d.c,null)),a.a.createElement(V,null,t),a.a.createElement(U,{className:"remove",onClick:function(){c({type:"REMOVE",id:e})}},a.a.createElement(d.b,null))))};function H(){var n=Object(i.a)(["\n  max-height: 330px;\n  padding: 40px;\n  overflow: auto;\n"]);return H=function(){return n},n}var N=u.c.div(H());var q=function(){var n=h();return a.a.createElement(N,null,n.map((function(n){return a.a.createElement(B,{key:n.id,id:n.id,text:n.text,check:n.check})})))};function Q(){var n=Object(i.a)(["\n  height: 50%;\n  width: 100%;\n  border-radius: 15px;\n  border: none;\n  font-size: 26px;\n  padding: 10px;\n"]);return Q=function(){return n},n}function W(){var n=Object(i.a)(["\n  background: #f8f0fc;\n  position: absolute;\n  bottom: 0;\n  height: 200px;\n  width: 100%;\n  padding: 40px;\n  box-sizing: border-box;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n"]);return W=function(){return n},n}function X(){var n=Object(i.a)(["\n      transform: translate(-50%, 50%) rotate(45deg);\n      transition: 0.4s;\n    "]);return X=function(){return n},n}function Y(){var n=Object(i.a)(["\n  font-size: 100px;\n  display: flex;\n  justify-content: center;\n  width: 100px;\n  height: 100px;\n  background: #a5d8ff;\n  border-radius: 50%;\n  color: #fff;\n  position: absolute;\n  bottom: 0%;\n  left: 50%;\n  transform: translate(-50%, 50%);\n  z-index: 5;\n  cursor: pointer;\n\n  ","\n"]);return Y=function(){return n},n}function Z(){var n=Object(i.a)(["\n  background: #fff;\n  height: 780px;\n  margin-top: 100px;\n  border-radius: 15px;\n  box-sizing: border-box;\n  position: relative;\n"]);return Z=function(){return n},n}var $=u.c.div(Z()),_=u.c.div(Y(),(function(n){return n.open&&Object(u.b)(X())})),nn=u.c.form(W()),en=u.c.input(Q());var tn=function(){var n=Object(r.useState)(!1),e=Object(l.a)(n,2),t=e[0],c=e[1],o=Object(r.useState)(""),i=Object(l.a)(o,2),u=i[0],p=i[1],f=g(),s=Object(r.useContext)(x);return a.a.createElement($,null,a.a.createElement(M,null),a.a.createElement(q,null),t&&a.a.createElement(nn,{onSubmit:function(){f({type:"CREATE",todo:{id:s.current,text:u,check:!1}}),p(""),c(!t),s.current+=1}},a.a.createElement(en,{placeholder:"\ud560 \uc77c\uc744 \uc785\ub825 \ud6c4 Enter",value:u,onChange:function(n){return p(n.target.value)},autoFocus:!0})),a.a.createElement(_,{open:t,onClick:function(){c(!t)}},a.a.createElement(d.a,null)))};function rn(){var n=Object(i.a)(["\n  body {\n    background : #99e9f2;\n    max-width : 580px;\n    margin : 0 auto;\n  }\n"]);return rn=function(){return n},n}var an=Object(u.a)(rn());var cn=function(){return a.a.createElement(v,null,a.a.createElement(an,null),a.a.createElement(tn,null))};o.a.render(a.a.createElement(cn,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.72b8a7c5.chunk.js.map