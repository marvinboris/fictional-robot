(self.webpackChunk=self.webpackChunk||[]).push([[833],{4784:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});r(7294);var n=r(1252),s=r(267),i=r(7625),a=r(5893);const c=function(e){var t=e.title,r=e.titleColor,c=void 0===r?"white":r,l=e.details,o=e.children,d=e.light,u=void 0!==d&&d,f=e.icon,m=e.color;return(0,a.jsx)(n.Z,{xs:12,md:12,lg:6,xl:3,className:"pb-3",children:(0,a.jsx)(n.Z,{xs:12,className:"h-100 rounded overflow-hidden position-relative bg-".concat(m),children:(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(n.Z,{xs:12,className:"py-3 border-bottom border-show position-relative",children:(0,a.jsx)("span",{className:"text-large text-700 text-".concat(c),children:t})}),(0,a.jsxs)(n.Z,{xs:12,className:"py-3 pl-5 position-relative",children:[(0,a.jsx)("span",{style:{zIndex:0,top:16,right:16},className:"position-absolute",children:(0,a.jsx)(i.G,{icon:f,style:{zIndex:0},className:"text-".concat(u?"black":"white","-20"),size:"4x"})}),(0,a.jsx)("h1",{style:{zIndex:10},className:"text-white text-montserrat text-700",children:o}),(0,a.jsx)("div",{style:{zIndex:10},className:"text-white text-300",children:l})]})]})})})}},6937:(e,t,r)=>{"use strict";r.d(t,{Z:()=>W});var n=r(7294),s=r(3727),i=r(2122),a=r(9756),c=r(5697),l=r.n(c),o=r(4184),d=r.n(o),u=r(3663),f={tag:u.iC,active:l().bool,className:l().string,cssModule:l().object},m=function(e){var t=e.className,r=e.cssModule,s=e.active,c=e.tag,l=(0,a.Z)(e,["className","cssModule","active","tag"]),o=(0,u.mx)(d()(t,!!s&&"active","breadcrumb-item"),r);return n.createElement(c,(0,i.Z)({},l,{className:o,"aria-current":s?"page":void 0}))};m.propTypes=f,m.defaultProps={tag:"li"};const h=m;var p={tag:u.iC,listTag:u.iC,className:l().string,listClassName:l().string,cssModule:l().object,children:l().node,"aria-label":l().string},x=function(e){var t=e.className,r=e.listClassName,s=e.cssModule,c=e.children,l=e.tag,o=e.listTag,f=e["aria-label"],m=(0,a.Z)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),h=(0,u.mx)(d()(t),s),p=(0,u.mx)(d()("breadcrumb",r),s);return n.createElement(l,(0,i.Z)({},m,{className:h,"aria-label":f}),n.createElement(o,{className:p},c))};x.propTypes=p,x.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"};const b=x;var y=r(7625),j=r(7703),g=r(5893);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=S(e);if(t){var s=S(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return P(this,r)}}function P(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(a,e);var t,r,n,i=Z(a);function a(){return O(this,a),i.apply(this,arguments)}return t=a,(r=[{key:"render",value:function(){var e=this.props,t=e.items,r=e.main,n=e.icon,i=e.content.cms.pages.general.home,a=e.dark,c=void 0!==a&&a,l=null;return t&&(l=t.map((function(e,t){return(0,g.jsx)(h,{children:(0,g.jsx)(s.OL,{className:"text-".concat(c?"light":"secondary"),to:e.to,children:e.content})},t)}))),(0,g.jsxs)(b,{className:"d-none d-sm-flex align-items-center",color:c?"light":"secondary",listClassName:"bg-transparent rounded-0 justify-content-end text-large",style:{top:"50%",right:0,transform:"translateY(-30px)",position:"absolute",zIndex:1e3},children:[(0,g.jsx)(h,{children:(0,g.jsxs)(s.OL,{className:"text-".concat(c?"light":"secondary"),to:"/",children:[(0,g.jsx)(y.G,{icon:n,className:"mr-1"})," ",(0,g.jsx)("strong",{children:i})]})}),l,(0,g.jsx)(h,{className:"text-".concat(c?"light":"secondary"," text-decoration-none"),active:!0,children:r})]})}}])&&w(t.prototype,r),n&&w(t,n),a}(n.Component);const W=(0,j.$j)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e)}))(_)},4075:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});r(7294);var n=r(1252),s=r(4670),i=r(6595),a=r(7625),c=r(1436),l=r(5893);const o=function(e){var t=e.fields,r=e.array,o=e.limit,d=e.bordered,u=e.xs,f=e.sm,m=e.md,h=e.lg,p=e.xl,x=e.className,b=void 0===x?"":x,y=e.title,j=e.icon,g=e.dark,v=void 0!==g&&g,N=e.borderless,k=e.innerClassName,O=void 0===k?"":k,w=e.outerClassName,C=void 0===w?"":w,Z=e.p0,P=e.select,S=e.children,_=e.selectHandler,W=e.style,T=e.searchable,G=e.draggable,E=e.closable,M=t.map((function(e){var t=e.name;return(0,l.jsx)("th",{className:"align-middle text-nowrap",children:t},t)}));M.unshift((0,l.jsx)("th",{className:"text-center align-middle",children:"SL"},"#")),P&&M.unshift((0,l.jsx)("th",{className:"align-middle text-center",children:(0,l.jsx)("input",{type:"checkbox",onClick:_,className:"select_all"})},"select_all"));var R=r.map((function(e,r){if(o&&r>=o)return null;var n=[(0,l.jsx)("th",{className:"text-center align-middle",children:r+1},"primary"+r)];return P&&n.unshift((0,l.jsx)("th",{className:"text-center align-middle",children:(0,l.jsx)("input",{type:"checkbox",value:e._id})},"white"+r)),t.forEach((function(t){var r=t.key,s=t.minWidth,i=t.maxWidth;n.push((0,l.jsx)("td",{className:"align-middle text-nowrap text-truncate",style:{minWidth:s,maxWidth:i},children:e[r]},r))})),(0,l.jsx)("tr",{className:"align-middle",children:n},r+1)}));return(0,l.jsx)(n.Z,{xs:u,sm:f,md:m,lg:h,xl:p,className:"pb-4 ".concat(C),children:(0,l.jsxs)("div",{className:"d-flex flex-column h-100 shadow-sm ".concat(v?"text-light bg-darklight ":"text-secondary bg-soft"," ").concat(b),style:W,children:[(0,l.jsxs)("div",{className:"p-3 border-bottom border-".concat(v?"border":"border-50"," text-700 text-brokenblue d-flex position-relative"),children:[(0,l.jsxs)("span",{className:"d-inline-flex text-".concat(v?"yellow":"reset"," align-items-center"),children:[j?(0,l.jsx)(a.G,{fixedWidth:!0,className:"mr-2 text-"+(v?"yellow":"reset"),icon:j,size:"lg"}):null,y]}),(0,l.jsxs)("div",{className:"ml-auto d-none d-lg-flex justify-content-end align-items-center text-"+(v?"light":"secondary")+" position-absolute",style:{top:"50%",right:16,transform:"translateY(-50%)"},children:[T?(0,l.jsx)(s.Z,{type:"search",name:"search",className:"bg-".concat(v?"darkblue border-0":""," rounded-2 mr-3"),placeholder:"Search here..."}):null,G?(0,l.jsx)(a.G,{icon:c.Qg3,size:"lg",className:"mr-3"}):null,E?(0,l.jsx)(a.G,{icon:c.NBC,size:"2x"}):null]})]}),(0,l.jsxs)("div",{className:"flex-fill d-flex flex-column "+(Z?"p-0":"p-3"),children:[(0,l.jsx)("div",{className:"table-responsive flex-fill",children:(0,l.jsxs)(i.Z,{dark:v,bordered:d,hover:!0,borderless:N,className:"bg-".concat(v?"darkblue":""," ").concat(O),children:[(0,l.jsx)("thead",{className:v?"text-light":"bg-white text-secondary",children:(0,l.jsx)("tr",{children:M})}),(0,l.jsx)("tbody",{className:v?"bg-darklight-50 text-light":"bg-white-50 text-secondary",children:R})]})}),(0,l.jsx)("div",{className:"pt-3",children:S})]})]})})}},6792:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});r(7294);var n=r(5893);const s=function(e){var t=e.children,r=e.dark,s=void 0!==r&&r;return(0,n.jsx)("div",{className:"bg-"+(s?"grayblue":"soft")+" py-4 pl-5 pr-4 position-relative",children:t})}},9412:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});r(7294);var n=r(5893);const s=function(e){var t=e.err;return t?(0,n.jsx)("div",{className:"alert alert-danger",children:t.message?t.message:t}):null}},1658:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});r(7294);var n=r(7625),s=r(5893);const i=function(e){var t=e.icon,r=e.children,i=e.className,a=e.user,c=e.dark,l=void 0!==c&&c;return(0,s.jsxs)("div",{className:"".concat(a?"h4":"h2"," mb-2 text-").concat(l?"light":"secondary"," ").concat(i),children:[(0,s.jsx)(n.G,{icon:t,className:"mr-2 text-".concat(l?"orange":"reset"),fixedWidth:!0}),r]})}},1132:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});r(7294);var n=r(5893);const s=function(e){var t=e.children,r=e.className,s=e.dark,i=void 0!==s&&s;return(0,n.jsx)("div",{className:"text-".concat(i?"light":"secondary"," lead small ml-4 pl-3 ").concat(r),children:t})}},8833:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>T});var n=r(7294),s=r(7703),i=r(3727),a=r(5977),c=r(1252),l=r(267),o=r(1436),d=r(7625),u=r(6937),f=r(4075),m=r(1658),h=r(1132),p=r(4784),x=r(6792),b=r(9412),y=r(3950),j=r(7916),g=r(2903),v=r(5893);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Z(e,t){return(Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=_(e);if(t){var s=_(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return S(this,r)}}function S(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(a,e);var t,r,n,s=P(a);function a(){return w(this,a),s.apply(this,arguments)}return t=a,(r=[{key:"componentDidMount",value:function(){this.props.get()}},{key:"componentWillUnmount",value:function(){this.props.reset()}},{key:"render",value:function(){var e=this,t=this.props,r=t.content.cms.pages.backend.pages.dashboard.admin,n=r.title,s=r.subtitle,a=r.blocks,j=a.total_cycles,N=a.total_years,k=a.total_subjects,O=a.total_students,w=t.backend.dashboard,C=w.loading,Z=w.error,P=w.blocksData,S=w.totalCycles,_=w.totalYears,W=w.totalSubjects,T=w.totalStudents,G=null,E=null;if(C)G=(0,v.jsx)(c.Z,{xs:12,children:(0,v.jsx)(y.Z,{})});else if(E=(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(b.Z,{err:Z})}),P){var M=[{title:j.title,children:P.totalCycles,icon:o.IJ7,link:"/admin/cycles/",color:"yellow",details:j.description,titleColor:"white"},{title:N.title,children:P.totalYears,icon:o.fT7,link:"/admin/years/",color:"brown",details:N.description,titleColor:"white"},{title:k.title,children:P.totalSubjects,icon:o.FL8,link:"/admin/subjects/",color:"lightyellow",details:k.description,titleColor:"white"},{title:O.title,children:P.totalStudents,icon:o.GiY,link:"/admin/students/",color:"darkhead",details:O.description,titleColor:"white"}].map((function(e,t){var r=e.title,n=e.titleColor,s=e.icon,i=e.link,a=e.color,c=e.children,l=e.details,o=e.circleBorder,d=e.circleColor,u=e.light;return(0,v.jsx)(p.Z,{color:a,title:r,titleColor:n,details:l,circleBorder:o,circleColor:d,icon:s,link:i,light:u,children:c},t)})),R=S.map((function(t){return(0,g.v4)(t,{action:(0,v.jsxs)("div",{className:"text-center",children:[(0,v.jsx)(i.rU,{className:"text-blue mr-2",to:"/admin/cycles/".concat(t.id),children:(0,v.jsx)(d.G,{icon:o.Mdf,fixedWidth:!0})}),(0,v.jsx)(i.rU,{className:"text-green mr-2",to:"/admin/cycles/".concat(t.id,"/edit"),children:(0,v.jsx)(d.G,{icon:o.Xcf,fixedWidth:!0})}),(0,v.jsx)("a",{className:"text-red",href:"#",onClick:function(){return e.props.deletecycles(t.id)},children:(0,v.jsx)(d.G,{icon:o.$aW,fixedWidth:!0})})]})})})),z=_.map((function(t){return(0,g.v4)(t,{action:(0,v.jsxs)("div",{className:"text-center",children:[(0,v.jsx)(i.rU,{className:"text-blue mr-2",to:"/admin/years/".concat(t.id),children:(0,v.jsx)(d.G,{icon:o.Mdf,fixedWidth:!0})}),(0,v.jsx)(i.rU,{className:"text-green mr-2",to:"/admin/years/".concat(t.id,"/edit"),children:(0,v.jsx)(d.G,{icon:o.Xcf,fixedWidth:!0})}),(0,v.jsx)("a",{className:"text-red",href:"#",onClick:function(){return e.props.deleteyears(t.id)},children:(0,v.jsx)(d.G,{icon:o.$aW,fixedWidth:!0})})]})})})),D=W.map((function(t){return(0,g.v4)(t,{action:(0,v.jsxs)("div",{className:"text-center",children:[(0,v.jsx)(i.rU,{className:"text-blue mr-2",to:"/admin/subjects/".concat(t.id),children:(0,v.jsx)(d.G,{icon:o.Mdf,fixedWidth:!0})}),(0,v.jsx)(i.rU,{className:"text-green mr-2",to:"/admin/subjects/".concat(t.id,"/edit"),children:(0,v.jsx)(d.G,{icon:o.Xcf,fixedWidth:!0})}),(0,v.jsx)("a",{className:"text-red",href:"#",onClick:function(){return e.props.deletesubjects(t.id)},children:(0,v.jsx)(d.G,{icon:o.$aW,fixedWidth:!0})})]})})})),U=T.map((function(t){return(0,g.v4)(t,{action:(0,v.jsxs)("div",{className:"text-center",children:[(0,v.jsx)(i.rU,{className:"text-blue mr-2",to:"/admin/students/".concat(t.id),children:(0,v.jsx)(d.G,{icon:o.Mdf,fixedWidth:!0})}),(0,v.jsx)(i.rU,{className:"text-green mr-2",to:"/admin/students/".concat(t.id,"/edit"),children:(0,v.jsx)(d.G,{icon:o.Xcf,fixedWidth:!0})}),(0,v.jsx)("a",{className:"text-red",href:"#",onClick:function(){return e.props.deletestudents(t.id)},children:(0,v.jsx)(d.G,{icon:o.$aW,fixedWidth:!0})})]})})}));G=(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:"pt-4 px-4 pb-3 bg-yellow-10",children:(0,v.jsx)(l.Z,{children:M})}),(0,v.jsxs)(l.Z,{className:"mt-5",children:[(0,v.jsx)(f.Z,{array:R,searchable:!0,draggable:!0,closable:!0,title:"Total Cycles",icon:o.A8,bordered:!0,limit:5,lg:6,fields:[{name:"Name",key:"name"},{name:"Slug",key:"slug"},{name:"Action",key:"action"}],children:(0,v.jsx)(i.rU,{to:"/admin/cycles",className:"text-reset",children:"View full cycle list | >"})}),(0,v.jsx)(f.Z,{array:z,searchable:!0,draggable:!0,closable:!0,title:"Total Years",icon:o.A8,bordered:!0,limit:5,lg:6,fields:[{name:"Name",key:"name"},{name:"Slug",key:"slug"},{name:"Action",key:"action"}],children:(0,v.jsx)(i.rU,{to:"/admin/years",className:"text-reset",children:"View full year list | >"})}),(0,v.jsx)(f.Z,{array:D,searchable:!0,draggable:!0,closable:!0,title:"Total Subjects",icon:o.A8,bordered:!0,limit:5,lg:6,fields:[{name:"Name",key:"name"},{name:"Slug",key:"slug"},{name:"Action",key:"action"}],children:(0,v.jsx)(i.rU,{to:"/admin/subjects",className:"text-reset",children:"View full subject list | >"})}),(0,v.jsx)(f.Z,{array:U,searchable:!0,draggable:!0,closable:!0,title:"Total Students",icon:o.A8,bordered:!0,limit:5,lg:6,fields:[{name:"First name",key:"first_name"},{name:"Last name",key:"last_name"},{name:"Birth date",key:"birth_date"},{name:"Birth place",key:"birth_place"},{name:"Matricule",key:"matricule"},{name:"Action",key:"action"}],children:(0,v.jsx)(i.rU,{to:"/admin/students",className:"text-reset",children:"View full student list | >"})})]})]})}return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(x.Z,{children:[(0,v.jsx)(u.Z,{main:s,icon:o.HLz}),(0,v.jsx)(m.Z,{user:!0,icon:o.HLz,children:n}),(0,v.jsx)(h.Z,{user:!0,children:s})]}),(0,v.jsxs)("div",{className:"p-4 pb-0",children:[E,G]})]})}}])&&C(t.prototype,r),n&&C(t,n),a}(n.Component);const T=(0,a.EN)((0,s.$j)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e)}),(function(e){return{get:function(){return e(j.Ll())},reset:function(){return e(j.PC())}}}))(W))},6595:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(2122),s=r(9756),i=r(7294),a=r(5697),c=r.n(a),l=r(4184),o=r.n(l),d=r(3663),u={className:c().string,cssModule:c().object,size:c().string,bordered:c().bool,borderless:c().bool,striped:c().bool,dark:c().bool,hover:c().bool,responsive:c().oneOfType([c().bool,c().string]),tag:d.iC,responsiveTag:d.iC,innerRef:c().oneOfType([c().func,c().string,c().object])},f=function(e){var t=e.className,r=e.cssModule,a=e.size,c=e.bordered,l=e.borderless,u=e.striped,f=e.dark,m=e.hover,h=e.responsive,p=e.tag,x=e.responsiveTag,b=e.innerRef,y=(0,s.Z)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),j=(0,d.mx)(o()(t,"table",!!a&&"table-"+a,!!c&&"table-bordered",!!l&&"table-borderless",!!u&&"table-striped",!!f&&"table-dark",!!m&&"table-hover"),r),g=i.createElement(p,(0,n.Z)({},y,{ref:b,className:j}));if(h){var v=(0,d.mx)(!0===h?"table-responsive":"table-responsive-"+h,r);return i.createElement(x,{className:v},g)}return g};f.propTypes=u,f.defaultProps={tag:"table",responsiveTag:"div"};const m=f}}]);