(this.webpackJsonpmessi=this.webpackJsonpmessi||[]).push([[0],{28:function(n,e,t){},30:function(n,e,t){},33:function(n,e,t){"use strict";t.r(e);var r=t(0),c=t(1),i=t.n(c),a=t(17),u=t.n(a),j=(t(28),t(12)),s=t.n(j),o=t(18),b=t(4),l=(t(30),t(15)),d=t(2),O=t(3);function f(){var n=Object(d.a)(["\n  margin: 0 20px;\n"]);return f=function(){return n},n}function x(){var n=Object(d.a)(["\n  display: none;\n"]);return x=function(){return n},n}function h(){var n=Object(d.a)(["\n"]);return h=function(){return n},n}function m(){var n=Object(d.a)(["\n  display: flex;\n"]);return m=function(){return n},n}var v=O.a.div(m()),p=O.a.label(h()),g=O.a.input(x()),y=O.a.div(f()),C=function(n){var e=Object(c.useState)("\u9078\u629e\u3055\u308c\u3066\u3044\u307e\u305b\u3093"),t=Object(b.a)(e,2),i=t[0],a=t[1];return"file"!==n.type?Object(r.jsx)("p",{children:"type\u306e\u6307\u5b9a\u3001\u9593\u9055\u3063\u3066\u308b\u3088"}):Object(r.jsxs)(v,{children:[Object(r.jsxs)(p,{children:["\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e",Object(r.jsx)(g,Object(l.a)(Object(l.a)({},n),{},{onChange:function(e){return function(n,e,t){var r,c,i,a=null===n||void 0===n||null===(r=n.target)||void 0===r||null===(c=r.files)||void 0===c||null===(i=c.item(0))||void 0===i?void 0:i.name;a&&(e(n),t(a))}(e,n.onChange,a)}}))]}),Object(r.jsx)(y,{children:i})]})};function F(){var n=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 10px;\n  font-size: 2em\n"]);return F=function(){return n},n}function S(){var n=Object(d.a)(["\n  width: 40px;\n  vertical-align: middle;\n"]);return S=function(){return n},n}function w(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return w=function(){return n},n}var k=O.a.div(w()),I=O.a.img(S()),J=O.a.div(F()),M=function(n){return Object(r.jsxs)(k,{children:[Object(r.jsx)(I,{src:n.icon,alt:n.name}),Object(r.jsx)(J,{children:n.name})]})},B=function(n){return Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"icon"}),Object(r.jsx)("th",{children:"name"})]})}),n.members.length?n.members.map((function(n){return Object(r.jsx)("tr",{children:Object(r.jsx)(M,{name:n.name,icon:n.icon})},n.name)})):Object(r.jsx)(r.Fragment,{})]})},L=t(22),N=t(14);function P(){var n=Object(d.a)(["\n  display: flex;\n"]);return P=function(){return n},n}var T=O.a.div(P()),z=function(n){var e;return Object(r.jsx)(T,{children:Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"team"}),Object(r.jsx)("th",{children:"member"})]})}),null===(e=n.teams)||void 0===e?void 0:e.map((function(n,e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e}),n.map((function(n){return Object(r.jsx)("td",{children:Object(r.jsx)(M,{name:n.name,icon:n.icon})})}))]},e)}))]})})};function A(){var n=Object(d.a)(["\n  margin-right: 20px;\n"]);return A=function(){return n},n}function D(){var n=Object(d.a)(["\n  margin-right: 20px;\n"]);return D=function(){return n},n}function E(){var n=Object(d.a)(["\n  display: flex;\n"]);return E=function(){return n},n}var q=O.a.div(E()),G=O.a.div(D()),H=O.a.div(A()),K=function(n){var e=Object(c.useState)(4),t=Object(b.a)(e,2),i=t[0],a=t[1],u=Object(c.useState)(),j=Object(b.a)(u,2),s=j[0],o=j[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(q,{children:[Object(r.jsxs)(G,{children:["\u53c2\u52a0\u8005 ",n.members.length,"\u4eba"]}),Object(r.jsxs)(H,{children:["\u30c1\u30fc\u30e0\u3042\u305f\u308a ",Object(r.jsx)("input",{type:"number",value:i,onChange:function(n){a(parseInt(n.target.value))}}),"\u4eba"]}),Object(r.jsx)("button",{type:"button",onClick:function(e){o(R(Q(n.members),i))},children:"\u30c1\u30fc\u30e0\u4f5c\u6210"})]}),s?Object(r.jsx)(z,{teams:s}):Object(r.jsx)(r.Fragment,{})]})},Q=function(n){for(var e=Object(N.a)(n).slice(0),t=e.length-1;t>=0;t--){var r=Math.floor(Math.random()*(t+1)),c=[e[r],e[t]];e[t]=c[0],e[r]=c[1]}return e},R=function(n){var e=Object(N.a)(n),t=e.slice(0),r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return t.reduce((function(n,e,c){return c%r?n:[].concat(Object(L.a)(n),[t.slice(c,c+r)])}),[])};var U=function(){var n=Object(o.a)(s.a.mark((function n(e,t){var r,c,i,a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,null===(r=e.target.files)||void 0===r||null===(c=r.item(0))||void 0===c?void 0:c.text();case 2:if(i=n.sent){n.next=5;break}return n.abrupt("return");case 5:a=JSON.parse(i),t(a.members);case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),V=function(){var n=Object(c.useState)([]),e=Object(b.a)(n,2),t=e[0],i=e[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(C,{type:"file",onChange:function(n){return U(n,i)}}),Object(r.jsx)(B,{members:t}),Object(r.jsx)(K,{members:t})]})},W=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,34)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;t(n),r(n),c(n),i(n),a(n)}))};u.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(V,{})}),document.getElementById("root")),W()}},[[33,1,2]]]);
//# sourceMappingURL=main.e6aab4b1.chunk.js.map