(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(4),r=c.n(s),a=c(2),l=(c(9),c(0));var o=function(e){var t=e.menuOpen,c=e.setMenuOpen;return Object(l.jsx)("div",{className:"navbar "+(t&&"active"),children:Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsxs)("div",{className:"left",children:[Object(l.jsx)("a",{href:"#intro",className:"logo",children:"My Portfolio"}),Object(l.jsx)("div",{className:"itemContainer",children:Object(l.jsx)("span",{children:"4046807224"})}),Object(l.jsx)("div",{className:"itemContainer",children:Object(l.jsx)("span",{children:"patrickdsutcliffe@gmail.com"})})]}),Object(l.jsx)("div",{className:"right",children:Object(l.jsxs)("div",{className:"hamburger",onClick:function(){return c(!t)},children:[Object(l.jsx)("span",{className:"line1"}),Object(l.jsx)("span",{className:"line2"}),Object(l.jsx)("span",{className:"line3"})]})})]})})};c(11);function j(){var e=Object(n.useState)(0),t=Object(a.a)(e,2),c=t[0],i=t[1],s=[{id:"1",icon:"",title:"PlaceHolder",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",img:""},{id:"2",icon:"",title:"PlaceHolder",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",img:""},{id:"3",icon:"",title:"PlaceHodler",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",img:""}],r=function(e){i("left"===e?c>0?c-1:2:c<s.length-1?c+1:0)};return Object(l.jsxs)("div",{className:"works",id:"works",children:[Object(l.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*c,"vw)")},children:s.map((function(e){return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"item",children:[Object(l.jsx)("div",{className:"left",children:Object(l.jsxs)("div",{className:"leftContainer",children:[Object(l.jsx)("div",{className:"imgContainer",children:Object(l.jsx)("img",{src:e.icon,alt:""})}),Object(l.jsx)("h2",{children:e.title}),Object(l.jsx)("p",{children:e.desc}),Object(l.jsx)("span",{children:"Projects"})]})}),Object(l.jsx)("div",{className:"right",children:Object(l.jsx)("img",{src:"",alt:""})})]})})}))}),Object(l.jsx)("img",{src:"assets/arrow.png",className:"arrow left",alt:"",onClick:function(){return r("left")}}),Object(l.jsx)("img",{src:"assets/arrow.png",className:"arrow right",alt:"",onClick:function(){return r()}})]})}c(12);var d=function(){return Object(l.jsx)("div",{className:"about-container",children:"yes"})};c(13);var u=function(){return Object(l.jsx)("div",{className:"contact-container",children:"WEEEE"})};c(14),c(15);var m=function(e){var t=e.menuOpen,c=e.setMenuOpen;return Object(l.jsx)("div",{className:"menu "+(t&&"active"),children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{onClick:function(){return c(!1)},children:Object(l.jsx)("a",{href:"#intro",children:"Home"})}),Object(l.jsx)("li",{onClick:function(){return c(!1)},children:Object(l.jsx)("a",{href:"#works",children:"Works"})}),Object(l.jsx)("li",{onClick:function(){return c(!1)},children:Object(l.jsx)("a",{href:"#contact",children:"Contact"})})]})})};c(16);function p(e){var t=e.id,c=e.title,n=e.active,i=e.setSelected;return Object(l.jsx)("li",{className:n?"portfolioList active":"portfolioList",onClick:function(){return i(t)},children:c})}c(17);var b=[{id:1,title:"Event Planner",img:"./assets/project-2",url:""},{id:2,title:"Date Night Picker",img:"",url:"https://group-event-planner.herokuapp.com/"},{id:3,title:"Placeholder for project 3",img:"",url:"https://group-event-planner.herokuapp.com/"}],h=[{id:1,title:"Note Taker App",img:"",url:"https://group-event-planner.herokuapp.com/"},{id:2,title:"Weather Dashboard",img:"",url:"https://group-event-planner.herokuapp.com/"},{id:3,title:"Java Password Generator",img:"",url:"https://group-event-planner.herokuapp.com/"}];function O(){var e=Object(n.useState)("featured"),t=Object(a.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)([]),r=Object(a.a)(s,2),o=r[0],j=r[1];return Object(n.useEffect)((function(){switch(c){case"featured":default:j(b);break;case"web":j(h)}}),[c]),Object(l.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(l.jsx)("h1",{children:"Portfolio"}),Object(l.jsx)("ul",{children:[{id:"featured",title:"Featured"},{id:"web",title:"Web App"}].map((function(e){return Object(l.jsx)(p,{title:e.title,active:c===e.id,setSelected:i,id:e.id})}))}),Object(l.jsx)("div",{className:"container",children:o.map((function(e){return Object(l.jsxs)("div",{className:"item",children:[Object(l.jsx)("img",{src:e.img,alt:""}),Object(l.jsx)("h3",{children:e.title})]})}))})]})}var f=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],i=t[1];return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(o,{menuOpen:c,setMenuOpen:i}),Object(l.jsx)(m,{menuOpen:c,setMenuOpen:i}),Object(l.jsxs)("div",{className:"sections",children:[Object(l.jsx)(d,{}),Object(l.jsx)(O,{}),Object(l.jsx)(j,{}),Object(l.jsx)(u,{})]})]})};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.e16acbd8.chunk.js.map