(this.webpackJsonptrackit=this.webpackJsonptrackit||[]).push([[0],{180:function(e,t,c){"use strict";c.r(t);var a=c(3),n=c(1),s=c(51),i=c.n(s),r=c(7),o=c(5),j=c(17),l=c(8),d=c.n(l),b=(c(77),c(52)),h=c.n(b),u=c(0),O=function(){return Object(u.jsx)("div",{align:"center",children:Object(u.jsx)(h.a,{color:"#FFFFFF",type:"ThreeDots",height:80,width:80})})};function m(e){var t=Object(n.useState)(""),c=Object(a.a)(t,2),s=c[0],i=c[1],l=Object(n.useState)(""),b=Object(a.a)(l,2),h=b[0],m=b[1],x=Object(n.useState)(!1),p=Object(a.a)(x,2),v=p[0],f=p[1],g=Object(n.useState)(!1),k=Object(a.a)(g,2),N=k[0],S=k[1],y=Object(o.f)(),C=e.setToken,F=e.setImage;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"logo",children:Object(u.jsx)("img",{src:"pictures/logo.svg",alt:"logo"})}),Object(u.jsxs)("div",{className:"login",children:[Object(u.jsx)("input",{type:"text",placeholder:"email",onChange:function(e){return i(e.target.value)}}),Object(u.jsx)("input",{type:N?"text":"password",placeholder:"senha",onChange:function(e){return m(e.target.value)}}),Object(u.jsx)("span",{onClick:function(){S(!N)},className:"lnr lnr-eye"}),Object(u.jsx)("div",{className:"send-login",onClick:function(){if(Object(j.isEmail)(s))if(""!==h){f(!0);var e={password:h,email:s},t=d.a.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",e);t.then((function(e){f(!1),C(e.data.token),F(e.data.image),y.push("/hoje")})),t.catch((function(e){alert("Email ou senha incorretos"),f(!1)}))}else alert("Insira sua senha");else alert("Insira um email v\xe1lido")},children:v?Object(u.jsx)(O,{}):"Entrar"}),Object(u.jsx)(r.b,{to:"/cadastro",className:"create-account",children:"N\xe3o tem uma conta? Cadastre-se"})]})]})}function x(){var e=Object(n.useState)(""),t=Object(a.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(""),l=Object(a.a)(i,2),b=l[0],h=l[1],m=Object(n.useState)(""),x=Object(a.a)(m,2),p=x[0],v=x[1],f=Object(n.useState)(""),g=Object(a.a)(f,2),k=g[0],N=g[1],S=Object(n.useState)(!1),y=Object(a.a)(S,2),C=y[0],F=y[1],E=Object(n.useState)(!1),q=Object(a.a)(E,2),H=q[0],I=q[1],T=Object(o.f)();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"logo",children:Object(u.jsx)("img",{src:"pictures/logo.svg",alt:"logo"})}),Object(u.jsxs)("div",{className:"register",children:[Object(u.jsx)("input",{type:"text",placeholder:"email",onChange:function(e){return N(e.target.value)}}),Object(u.jsx)("input",{type:H?"text":"password",placeholder:"senha",onChange:function(e){return h(e.target.value)}}),Object(u.jsx)("span",{onClick:function(){I(!H)},className:"lnr lnr-eye"}),Object(u.jsx)("input",{type:"text",placeholder:"nome",onChange:function(e){return s(e.target.value)}}),Object(u.jsx)("input",{type:"text",placeholder:"foto",onChange:function(e){return v(e.target.value)}}),Object(u.jsx)("div",{className:"send-register",onClick:function(){if(Object(j.isEmail)(k))if(""!==b)if(""!==c)if(Object(j.isURL)(p)){F(!0);var e={name:c,password:b,image:p,email:k},t=d.a.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",e);t.then((function(e){F(!1),T.push("/")})),t.catch((function(e){alert("Erro ao criar conta"),F(!1)}))}else alert("Insira uma imagem v\xe1lida");else alert("Insira seu nome");else alert("Insira uma senha");else alert("Insira um email v\xe1lido")},children:C?Object(u.jsx)(O,{}):"Cadastrar"}),Object(u.jsx)(r.b,{to:"/",className:"create-account",children:"J\xe1 tem uma conta? Fa\xe7a login!"})]})]})}var p=c(18),v=c(54),f=c.n(v);function g(e){var t=e.id,c=e.name,a=e.currentSequence,n=e.token,s=e.highestSequence,i=e.done,r=e.render,o=e.setRender,j={headers:{Authorization:"Bearer ".concat(n)}};return Object(u.jsxs)("div",{className:"today-habit",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"today-habit-name",children:c}),Object(u.jsxs)("div",{className:"sequence",children:[Object(u.jsx)("div",{children:"Sequ\xeancia atual: "}),Object(u.jsxs)("div",{className:a===s?"green":"",children:[a," dias"]})]}),Object(u.jsxs)("div",{className:"sequence",children:[Object(u.jsx)("div",{children:"Seu recorde: "}),Object(u.jsxs)("div",{className:a===s?"green":"",children:[s," dias"]})]})]}),Object(u.jsx)("span",{className:i?"lnr lnr-checkmark-circle green":"lnr lnr-checkmark-circle",onClick:function(){return function(e){var t="https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/".concat(e,"/check"),c="https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/".concat(e,"/uncheck");if(i){var a=d.a.post(c,{},j);a.then((function(e){2!=r[0]?o([2]):o([1])})),a.catch((function(e){alert("Erro ao selecionar!")}))}else{var n=d.a.post(t,{},j);n.then((function(e){2!=r[0]?o([2]):o([1])})),n.catch((function(e){alert("Erro ao selecionar!")}))}}(t)}})]})}function k(e){var t=e.token,c=e.image,s=Object(n.useState)([]),i=Object(a.a)(s,2),o=i[0],j=i[1],l=Object(n.useState)([1]),b=Object(a.a)(l,2),h=b[0],O=b[1],m=0,x={headers:{Authorization:"Bearer ".concat(t)}},v=f()().format("dddd, DD/MM"),k=o.filter((function(e){return!0===e.done}));return o.length>0&&(m=k.length/o.length*100),Object(n.useEffect)((function(){d.a.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",x).then((function(e){j(Object(p.a)(e.data))}))}),h),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"content",children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("div",{className:"title",children:"TrackIt"}),Object(u.jsx)("img",{src:c,alt:"perfil"})]}),Object(u.jsx)("div",{className:"page-title",children:v}),Object(u.jsx)("div",{className:0===m?"subtitle":"subtitle green",children:0===m?"Nenhum H\xe1bito conclu\xeddo ainda":"".concat(m.toFixed(),"% dos h\xe1bitos conclu\xeddos")}),o.map((function(e){return Object(u.jsx)(g,{name:e.name,id:e.id,done:e.done,currentSequence:e.currentSequence,highestSequence:e.highestSequence,token:t,setRender:O,render:h})})),Object(u.jsxs)("div",{className:"footer",children:[Object(u.jsx)(r.b,{to:"/habitos",children:"H\xe1bitos"}),Object(u.jsx)(r.b,{to:"/historico",children:"Hist\xf3rico"})]}),Object(u.jsx)("div",{className:"today",children:"Hoje"})]})})}function N(e){var t=e.id,c=e.name,a=e.days,n=e.token,s=e.setRender,i={headers:{Authorization:"Bearer ".concat(n)}};return Object(u.jsxs)("div",{className:"my-habit",children:[Object(u.jsx)("div",{className:"my-habit-name",children:c}),Object(u.jsx)("span",{class:"lnr lnr-trash",onClick:function(){return function(e){var c="https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/".concat(e),a=d.a.delete(c,i);a.then((function(e){s([t])})),a.catch((function(e){alert("Erro ao excluir h\xe1bito")}))}(t)}}),Object(u.jsx)("div",{className:"days",children:["D","S","T","Q","Q","S","S"].map((function(e,t){return Object(u.jsx)("div",{className:(c=t,a.filter((function(e){return e===c})).length>0?"day selected-day":"day"),children:e});var c}))})]})}function S(e){var t=e.token,c=e.image,s=Object(n.useState)([]),i=Object(a.a)(s,2),o=i[0],j=i[1],l=Object(n.useState)([]),b=Object(a.a)(l,2),h=b[0],m=b[1],x=Object(n.useState)(!1),v=Object(a.a)(x,2),f=v[0],g=v[1],k=Object(n.useState)([]),S=Object(a.a)(k,2),y=S[0],C=S[1],F=Object(n.useState)(!1),E=Object(a.a)(F,2),q=E[0],H=E[1],I=Object(n.useState)([1]),T=Object(a.a)(I,2),w=T[0],D=T[1],A={headers:{Authorization:"Bearer ".concat(t)}};function R(e){return y.filter((function(t){return t===e})).length>0}return Object(n.useEffect)((function(){d.a.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",A).then((function(e){j(Object(p.a)(e.data))}))}),w),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"content",children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("div",{className:"title",children:"TrackIt"}),Object(u.jsx)("img",{src:c,alt:"perfil"})]}),Object(u.jsxs)("div",{className:"page-title",children:[Object(u.jsx)("div",{children:"Meus h\xe1bitos"}),Object(u.jsx)("span",{className:"lnr lnr-plus-circle",onClick:function(){f?g(!1):(C([]),g(!0))}})]}),Object(u.jsxs)("div",{className:f?"add-habit":"add-habit hidden",children:[Object(u.jsx)("input",{type:"text",placeholder:"nome do h\xe1bito",onChange:function(e){return m(e.target.value)}}),Object(u.jsx)("div",{className:"days",children:["D","S","T","Q","Q","S","S"].map((function(e,t){return Object(u.jsx)("div",{className:R(t)?"day selected-day":"day",id:t,onClick:function(){return function(e){if(R(e)){var t=y.filter((function(t){return t!=e}));C(t)}else C([].concat(Object(p.a)(y),[e]))}(t)},children:e})}))}),Object(u.jsxs)("div",{className:"add-buttons",children:[Object(u.jsx)("div",{className:"cancel",onClick:function(){C([]),g(!1)},children:"Cancelar"}),Object(u.jsx)("div",{className:"save",onClick:function(){if(""!==h)if(0!==y.length){H(!0);var e={name:h,days:y},t=d.a.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",e,A);t.then((function(e){H(!1),2!=w[0]?D([2]):D([1]),g(!1)})),t.catch((function(e){alert("Erro ao criar h\xe1bito"),H(!1)}))}else alert("Selecione um dia");else alert("Digite um h\xe1bito")},children:q?Object(u.jsx)(O,{}):"Salvar"})]})]}),o.map((function(e){return Object(u.jsx)(N,{id:e.id,name:e.name,days:e.days,token:t,setRender:D})})),Object(u.jsxs)("div",{className:o.length>0?"no-habit hidden":"no-habit",children:["Voc\xea n\xe3o tem nenhum h\xe1bito ",Object(u.jsx)("br",{})," cadastrado ainda. Adicione um h\xe1bito"," ",Object(u.jsx)("br",{})," para come\xe7ar a trackear."]}),Object(u.jsxs)("div",{className:"footer",children:[Object(u.jsx)(r.b,{to:"/habitos",children:"H\xe1bitos"}),Object(u.jsx)(r.b,{to:"/historico",children:"Hist\xf3rico"})]}),Object(u.jsx)(r.b,{to:"/hoje",className:"today",children:"Hoje"})]})})}function y(e){var t=e.image;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"content",children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("div",{className:"title",children:"TrackIt"}),Object(u.jsx)("img",{src:t,alt:"perfil"})]}),Object(u.jsx)("div",{className:"page-title",children:"Hist\xf3rico"}),Object(u.jsxs)("div",{className:"no-habit",children:["Em breve voc\xea poder\xe1 ver o hist\xf3rico ",Object(u.jsx)("br",{})," dos seus h\xe1bitos aqui!"]}),Object(u.jsxs)("div",{className:"footer",children:[Object(u.jsx)(r.b,{to:"/habitos",children:"H\xe1bitos"}),Object(u.jsx)(r.b,{to:"/historico",children:"Hist\xf3rico"})]}),Object(u.jsx)(r.b,{to:"/hoje",className:"today",children:"Hoje"})]})})}function C(){var e=Object(n.useState)(""),t=Object(a.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(""),j=Object(a.a)(i,2),l=j[0],d=j[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(r.a,{children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/",exact:!0,children:Object(u.jsx)(m,{setToken:s,setImage:d})}),Object(u.jsx)(o.a,{path:"/cadastro",exact:!0,children:Object(u.jsx)(x,{})}),Object(u.jsx)(o.a,{path:"/hoje",exact:!0,children:Object(u.jsx)(k,{token:c,image:l})}),Object(u.jsx)(o.a,{path:"/habitos",exact:!0,children:Object(u.jsx)(S,{token:c,image:l})}),Object(u.jsx)(o.a,{path:"/historico",exact:!0,children:Object(u.jsx)(y,{token:c,image:l})})]})})})}i.a.render(Object(u.jsx)(C,{}),document.querySelector(".root"))}},[[180,1,2]]]);
//# sourceMappingURL=main.31ff40fb.chunk.js.map