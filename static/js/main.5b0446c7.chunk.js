(this.webpackJsonplab3=this.webpackJsonplab3||[]).push([[0],{66:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(19),r=a.n(n),s=a(10),i=a(7),l=a(9),j=a(82),o=a(93),d=a(89),b=a(87),h=a(80),u=a(83),x=a(84),O=a(85),m=a(90),g=(a(41),a(92));function v(){var e=Object(g.a)(),t=e.t,a=e.i18n;function n(){var e=localStorage.getItem("lang");return null===e?"en":e}return Object(c.useEffect)((function(){a.changeLanguage(n())}),[]),{t:t,getCurrLang:n,setLang:function(e){localStorage.setItem("lang",e),a.changeLanguage(e)}}}a(66);var f=a(14),p=a(81);function y(e){var t=Object(c.useState)(!1),a=Object(l.a)(t,2),n=a[0],r=a[1],s=Object(c.useRef)(null);function i(e,t){var a=t.split("."),c=e;return a.forEach((function(e){c=c.hasOwnProperty(e)?c[e]:null})),c}return Object(c.useEffect)((function(){fetch("/RPI_lab3/db/"+e).then((function(e){return e.json()})).then((function(t){if(void 0===t)throw new Error(e+" was not found");if(!t.hasOwnProperty("data"))throw new Error("Invalid file format "+e);s.current=t.data,r(!0)}))}),[]),[n,function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(""===t)return s.current;var c=[];return null!==s.current&&s.current.forEach((function(n){var r=i(n,e);null!==r&&(!0===a&&r===t||!1===a&&-1!==r.toLowerCase().indexOf(t.toLowerCase()))&&c.push(n)})),c}]}var w=a(1);function N(e){var t=v(),a=t.t,n=t.getCurrLang,r=Object(c.useState)(null),i=Object(l.a)(r,2),j=i[0],o=i[1],d=y("writersS.json"),b=Object(l.a)(d,2),u=b[0],x=b[1];return Object(c.useEffect)((function(){if(u){var e=x("",""),t=(a=e.length,Math.floor(Math.random()*a));o(e[t])}var a}),[u]),Object(w.jsx)(h.a,{id:e.id,style:e.style,fluid:!0,className:"d-flex flex-column justify-content-center align-items-center",children:!0===u&&null!==j?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h3",{children:a("landing.writerOTD")}),Object(w.jsxs)(h.a,{className:"mb-5 d-flex flex-column justify-content-center align-items-center",children:[Object(w.jsx)(h.a,{style:{height:"250px",width:"250px"},children:Object(w.jsx)("img",{className:"w-100 h-100",style:{objectFit:"cover",objectPosition:"top"},src:j.photoUrl,alt:"Avatar"})}),Object(w.jsxs)(h.a,{children:[Object(w.jsx)("h3",{className:"text-center",children:j.name[n()]}),Object(w.jsxs)("h4",{className:"text-center",children:[j.dob," - ",j.dod]}),Object(w.jsx)("p",{className:"text-center",children:j.description[n()]})]}),Object(w.jsx)(s.b,{className:"btn btn-outline-secondary",to:"/Writers/"+j.id,children:a("landing.writerLink")})]})]}):Object(w.jsx)(p.a,{animation:"border"})})}var k=a.p+"static/media/vlad-icon.9034cdfe.jpg",L=a.p+"static/media/nikita-icon.d2f1b068.jpg";function S(){var e=v(),t=e.setLang,a=e.getCurrLang,n=Object(c.useState)(a()),r=Object(l.a)(n,2),s=r[0],i=r[1];return Object(w.jsx)(j.a,{toggle:!0,children:[{name:"ENG",value:"en"},{name:"RUS",value:"ru"}].map((function(e,a){return Object(w.jsx)(o.a,{type:"radio",variant:"outline-secondary",value:e.value,checked:s===e.value,onChange:function(e){i(e.currentTarget.value),t(e.currentTarget.value)},children:e.name},a)}))})}function I(){var e=v().t;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(d.a,{bg:"light",expand:"lg",children:[Object(w.jsx)(f.a,{className:"navbar-brand",smooth:!0,to:"#land",children:"Belarusian Writers"}),Object(w.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(w.jsx)(d.a.Collapse,{id:"basic-navbar-nav",children:Object(w.jsxs)(b.a,{className:"ml-auto",children:[Object(w.jsx)(f.a,{className:"nav-link",smooth:!0,to:"#daily",children:e("navbar.daily")}),Object(w.jsx)(f.a,{className:"nav-link",smooth:!0,to:"#devs",children:e("navbar.devs")}),Object(w.jsx)(s.b,{className:"nav-link",to:"/Writers",children:e("navbar.writers")}),Object(w.jsx)(S,{})]})})]}),Object(w.jsx)(h.a,{id:"land",fluid:!0,style:{backgroundColor:"#fff"},children:Object(w.jsxs)(u.a,{style:{backgroundImage:"linear-gradient(180deg, rgba(212, 44, 44, 1) 60%, rgba(0, 189, 3, 1) 100%)"},children:[Object(w.jsx)(x.a,{className:"justify-content-center",children:Object(w.jsx)("h1",{className:"big-heading text-center",children:e("landing.label")})}),Object(w.jsx)(x.a,{className:"justify-content-center",children:Object(w.jsx)("h2",{className:"text-center",children:e("landing.desc")})}),Object(w.jsx)(x.a,{className:"justify-content-center",children:Object(w.jsx)(s.b,{className:"btn btn-lg btn-outline-light",to:"/Writers",children:e("landing.button")})})]})}),Object(w.jsx)(N,{style:{height:"90vh"},id:"daily"}),Object(w.jsx)(h.a,{id:"devs",className:"pt-5",style:{backgroundImage:"linear-gradient(180deg, rgba(255, 255, 255, 1) 1%, rgba(53, 62, 74, 1) 100%)",color:"white"},fluid:!0,children:Object(w.jsxs)(x.a,{className:"justify-content-center",children:[Object(w.jsx)(O.a,{md:2,children:Object(w.jsxs)(m.a,{className:"mb-5 text-center",text:"dark",style:{width:"12rem"},children:[Object(w.jsx)(m.a.Img,{variant:"top",src:k}),Object(w.jsxs)(m.a.Body,{children:[Object(w.jsx)(m.a.Title,{children:"Nevinskiy Vladislav"}),Object(w.jsx)(m.a.Text,{children:Object(w.jsx)("a",{className:"mb-0",href:"https://github.com/newvlad2001",children:"newvlad2001"})})]})]})}),Object(w.jsx)(O.a,{md:2,children:Object(w.jsxs)(m.a,{className:"mb-5 text-center",text:"dark",style:{width:"12rem"},children:[Object(w.jsx)(m.a.Img,{variant:"top",src:L}),Object(w.jsxs)(m.a.Body,{children:[Object(w.jsx)(m.a.Title,{children:"Fedarenchyk Nikita"}),Object(w.jsx)(m.a.Text,{children:Object(w.jsx)("a",{className:"mb-0",href:"https://github.com/Fedarenchyk-16",children:"Fedarenchyk-16"})})]})]})})]})})]})}var C=a(86),F=a(91);function E(e){var t=v(),a=t.t,c=t.getCurrLang;if(null!==e.writers&&e.writers.length>0){var n=[];return e.writers.forEach((function(e){n.push(Object(w.jsx)(O.a,{className:"justify-content-center",md:3,children:Object(w.jsxs)(m.a,{className:"mb-5",style:{width:"230px",height:"450px"},children:[Object(w.jsx)(m.a.Img,{variant:"top",style:{height:"200px",objectFit:"cover",objectPosition:"left top"},src:e.photoUrl}),Object(w.jsxs)(m.a.Body,{children:[Object(w.jsx)(m.a.Title,{children:e.name[c()]}),Object(w.jsx)(m.a.Text,{children:e.description[c()]})]}),Object(w.jsx)(m.a.Footer,{className:"d-flex flex-column justify-content-center align-items-center",children:Object(w.jsx)(s.b,{className:"mt-auto btn btn-outline-secondary",to:"/Writers/"+e.id,children:a("landing.writerLink")})})]})}))})),Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(h.a,{fluid:!0,children:Object(w.jsx)(x.a,{children:n})})})}return null}var T=a(39),P=a(88);function W(e){var t=v().getCurrLang,a=Object(c.useState)(!1),n=Object(l.a)(a,2),r=n[0],s=n[1],i=Object(c.useState)(null),j=Object(l.a)(i,2),o=j[0],d=j[1],b=y("writersS.json"),u=Object(l.a)(b,2),x=u[0],O=u[1],m=y("writersL.json"),g=Object(l.a)(m,2),f=g[0],N=g[1];return Object(c.useEffect)((function(){if(!0===x&&!0===f){var t=O("id",parseInt(e.id),!0)[0],a=N("id",parseInt(e.id),!0)[0];void 0!==t&&void 0!==a?(Object.assign(t,a),d(t),s(!0)):s(!1)}}),[e.id,x,f]),Object(w.jsx)(w.Fragment,{children:!0===r?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(h.a,{className:"mb-5",children:[Object(w.jsx)(h.a,{md:3,style:{height:"250px",width:"250px"},children:Object(w.jsx)("img",{className:"w-100 h-100",style:{objectFit:"cover",objectPosition:"top"},src:o.photoUrl,alt:"Avatar"})}),Object(w.jsxs)(h.a,{md:9,children:[Object(w.jsx)("h3",{className:"text-center",children:o.name[t()]}),Object(w.jsxs)("h4",{className:"text-center",children:[o.dob," - ",o.dod]}),Object(w.jsx)("p",{children:o.longDescription[t()]})]})]}),Object(w.jsx)(h.a,{id:"bio",children:Object(w.jsx)(T.Timeline,{lineColor:"#ddd",children:function(){var e=[];return o.bio.forEach((function(a){e.push(Object(w.jsxs)(T.TimelineItem,{style:{color:"#21c25c"},dateInnerStyle:{background:"#21c25c",color:"#000"},bodyContainerStyle:{background:"#ddd",padding:"20px",borderRadius:"8px",boxShadow:"0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"},dateText:a.date,children:[Object(w.jsx)("h3",{children:a.title[t()]}),Object(w.jsx)("p",{children:a.text[t()]})]}))})),e}()})}),Object(w.jsxs)(h.a,{style:{width:"60vw"},children:[Object(w.jsx)(h.a,{id:"photos",className:"mb-5",children:Object(w.jsx)(P.a,{style:{backgroundColor:"var(--secondary)"},children:function(){var e=[];return o.photos.forEach((function(t){e.push(Object(w.jsx)(P.a.Item,{children:Object(w.jsx)("img",{style:{height:"60vh",objectFit:"cover",objectPosition:"top",margin:"auto"},className:"d-block",src:t,alt:"Loading"})}))})),e}()})}),Object(w.jsx)(h.a,{id:"video",style:{height:"60vh"},className:"mb-5",children:Object(w.jsx)("iframe",{className:"w-100 h-100",src:"https://www.youtube.com/embed/"+o.video,title:"Writer video",style:{border:0},allowFullScreen:!0})}),Object(w.jsx)(h.a,{id:"map",style:{height:"60vh"},className:"mb-5",children:Object(w.jsx)("iframe",{className:"w-100 h-100",src:"https://www.google.com/maps/embed?pb="+o.location,title:"Writer location",style:{border:0},loading:"lazy"})})]})]}):Object(w.jsx)(p.a,{animation:"border"})})}function B(){var e=v(),t=e.t,a=e.getCurrLang,n=Object(i.f)().id,r=y("writersS.json"),j=Object(l.a)(r,2),o=j[0],u=j[1],x=Object(c.useState)(null),O=Object(l.a)(x,2),m=O[0],g=O[1],N=Object(c.useState)(""),k=Object(l.a)(N,2),L=k[0],I=k[1];return Object(c.useEffect)((function(){!0===o&&g(u("name."+a(),L))}),[o,L]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(d.a,{bg:"light",expand:"lg",children:[Object(w.jsx)(f.a,{className:"navbar-brand",smooth:!0,to:"/",children:"Belarusian Writers"}),Object(w.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(w.jsx)(d.a.Collapse,{id:"basic-navbar-nav",children:Object(w.jsxs)(b.a,{className:"ml-auto",children:[void 0===n?Object(w.jsx)(C.a,{className:"mr-4",children:Object(w.jsx)(F.a,{value:L,onChange:function(e){return I(e.target.value)},placeholder:t("writers.search")})}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(f.a,{className:"nav-link",smooth:!0,to:"#bio",children:t("writers.bio")}),Object(w.jsx)(f.a,{className:"nav-link",smooth:!0,to:"#photos",children:t("writers.photos")}),Object(w.jsx)(f.a,{className:"nav-link",smooth:!0,to:"#video",children:t("writers.video")}),Object(w.jsx)(f.a,{className:"nav-link",smooth:!0,to:"#map",children:t("writers.map")}),Object(w.jsx)(s.b,{className:"nav-link",to:"/Writers",children:t("navbar.writers")})]}),Object(w.jsx)(S,{})]})})]}),Object(w.jsx)(h.a,{children:void 0===n?!1===o?Object(w.jsx)(p.a,{animation:"border"}):Object(w.jsx)(E,{writers:m}):Object(w.jsx)(W,{id:n})})]})}var R=function(){return Object(w.jsx)("div",{children:"Loading"})};var U=function(){return Object(w.jsx)(c.Suspense,{fallback:Object(w.jsx)(R,{}),children:Object(w.jsx)(s.a,{basename:"/RPI_lab3",children:Object(w.jsxs)(i.c,{children:[Object(w.jsx)(i.a,{exact:!0,path:"/",component:I}),Object(w.jsx)(i.a,{path:"/Writers/:id?",component:B})]})})})},_=a(40),A=a(54),D=a(25);_.a.use(A.a).use(D.e).init({backend:{loadPath:"/RPI_lab3/locales/{{lng}}/translation.json"},fallbackLng:"en",interpolation:{escapeValue:!1}});_.a;r.a.render(Object(w.jsx)(U,{}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.5b0446c7.chunk.js.map