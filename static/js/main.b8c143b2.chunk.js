(this.webpackJsonpfinal_proyect=this.webpackJsonpfinal_proyect||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var c=a(3),n=a(4),o=a.n(n),s=a(16),r=a.n(s),i=(a(23),a(24),a(7)),l=a(17),d=(a(28),l.a.initializeApp({apiKey:"AIzaSyC7Sdn3R-fW5KS-2ucCwzpGnB0HYKElHDM",authDomain:"test-java-python.firebaseapp.com",databaseURL:"https://test-java-python.firebaseio.com",projectId:"test-java-python",storageBucket:"test-java-python.appspot.com",messagingSenderId:"167375922955",appId:"1:167375922955:web:6ba473481c885a4da2e40e"}).database());function u(){return d}var j=Object(n.lazy)((function(){return Promise.all([a.e(2),a.e(4)]).then(a.bind(null,163))})),b=[0,0,0,0,0,0,0,0,0,0],m=o.a.memo((function(e){var t=e.params,a=Object(n.useState)({valor:0,nombre:"cargando...",vecesprendido:0}),o=Object(i.a)(a,2),s=o[0],r=o[1],l=t.key;return Object(n.useEffect)((function(){u().ref("quiz/eladc".concat(l)).on("value",(function(e){var t=e.val(),a={valor:t.valor,promedio:t.prom,nombre:t.nombre,masinfo:"ADC numero ".concat(l)};b.shift(),b.push(t.valor),r(a)}))}),[l]),Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("div",{className:"card-header",children:Object(c.jsxs)("h2",{className:"aqua",children:[" SENSOR : ",s.nombre]})}),Object(c.jsxs)("div",{className:" card-body",children:[Object(c.jsxs)("p",{children:["Valor: ",s.valor]}),Object(c.jsxs)("p",{children:["promedio: ",s.promedio]}),Object(c.jsxs)("p",{children:["Mas info: ",s.masinfo]}),Object(c.jsx)(n.Suspense,{fallback:Object(c.jsx)("p",{children:"cargando... "}),children:Object(c.jsx)(j,{num:s.valor,arrayLol:b})})]}),Object(c.jsx)("div",{className:"card-footer",children:Object(c.jsx)("a",{href:".../Proyecto_instru",children:"pagina principal"})})]})}));var f=function(e){console.log(e),u().ref("Leds/N".concat(e.num)).update({state:e.state})};var p=function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),o=a[0],s=a[1],r=Object(n.useState)({itsGoing:"",numberOfGuest:1}),l=Object(i.a)(r,2),d=l[0],j=l[1],b=Object(n.useState)("btn-secondary"),m=Object(i.a)(b,2),p=m[0],O=m[1],h=function(e){var t=Object(n.useState)({state:!1}),a=Object(i.a)(t,2),c=a[0],o=a[1];return console.log(e),Object(n.useEffect)((function(){0!==e&&u().ref("Leds/N".concat(e)).on("value",(function(e){var t=e.val();console.log(t),o(t)}))}),[e]),c.state}(o);return Object(n.useEffect)((function(){console.log(h),O(h?"btn-danger":"btn-success")}),[h]),Object(n.useEffect)((function(){s(e.numero)}),[e.numero]),Object(c.jsxs)("label",{className:"btn ".concat(p," btn-rounded form-check-label"),children:[Object(c.jsxs)("span",{children:["ROCIADOR","".concat(o)]}),Object(c.jsx)("input",{type:"checkbox",checked:h,name:"isGoing",className:"form-check-input input-button",value:d.itsGoing,onChange:function(e){var t=e.target.checked;console.log(t),f({num:o,state:t}),j({itsGoing:t,numberOfGuest:d.numberOfGuest+1})},autoComplete:"off"})]})};var O=function(e){for(var t=[],a=0;a<e.num;a++)t[a]=a+1;var n=t.map((function(e){return Object(c.jsx)(p,{numero:e},e)}));return Object(c.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.log("ENTRE")},className:"p-1",children:Object(c.jsx)("div",{className:"btn-group ","data-toggle":"buttons",children:n})})};var h=function(){var e=Object(n.useState)([{nombre:"Cargando...",valor:0,vecesprendido:0,pos:0,link:"/"}]),t=Object(i.a)(e,2),a=t[0],o=t[1],s=Object(n.useState)(0),r=Object(i.a)(s,2),l=r[0],d=r[1];Object(n.useEffect)((function(){u().ref("quiz").on("value",(function(e){var t=[],a=e.val();d(a.nDatos);for(var c=0;c<a.nDatos;c++){var n=e.child("eladc".concat(c+1)).val();t[c]={nombre:n.nombre,valor:n.valor,prom:n.prom,masinfo:"aca esta la info",pos:c+1,link:"".concat(".../Proyecto_instru","/sensor/").concat(c+1)}}o(t)}))}),[]);var j=a.map((function(e){return Object(c.jsxs)("div",{className:"card pb-2 pt-2 mr-auto ml-auto",children:[Object(c.jsx)("div",{className:"card-header",children:Object(c.jsx)("h3",{children:e.nombre})}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsxs)("p",{className:"aqua",children:["valor : ",e.valor]}),Object(c.jsxs)("p",{children:["prom : ",e.prom]})]}),Object(c.jsx)("div",{className:"card-footer",children:Object(c.jsx)("a",{href:e.link,className:"aqua",children:"m\xe1s info"})})]},e.nombre)}));return"organize-cards",Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("div",{className:"card-header",children:Object(c.jsx)("h2",{className:"aqua",children:"Mediciones"})}),Object(c.jsx)("div",{className:"card-body ".concat("organize-cards"),children:j}),Object(c.jsx)("div",{className:"card-footer",children:Object(c.jsx)(O,{num:l})})]})},v=a(13);var x=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("section",{className:"App-content col-md-10 offset-md-1",children:[Object(c.jsx)(v.a,{path:".../Proyecto_instru/sensor/:key",component:m}),Object(c.jsx)(v.a,{path:".../Proyecto_instru",component:h})]})})},g=function(e){e&&e instanceof Function&&a.e(5).then(a.bind(null,164)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),o(e),s(e)}))};r.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),g()}},[[29,1,3]]]);
//# sourceMappingURL=main.b8c143b2.chunk.js.map