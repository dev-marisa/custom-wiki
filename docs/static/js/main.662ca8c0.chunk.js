(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(t,e,c){},20:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c(10),i=c.n(a),s=(c(16),c(17),c(18),c(11)),l=c(2),r=c(0),o=function(t){return Object(r.jsx)("button",{type:"button",onClick:t.click,className:t.active?"btn btn-sm btn-dark":"btn btn-sm btn-outline-dark","data-tooltip":"","aria-label":t.tooltip,onMouseDown:function(t){return t.preventDefault()},children:t.children})},j=function(t){var e=function(t){var e=window.getSelection();console.log(t),console.log(e);var c=e.anchorNode;"#text"===c.nodeName&&(c=c.parentElement);var n=e.anchorNode.textContent,a=Math.min(e.anchorOffset,e.focusOffset),i=Math.max(e.anchorOffset,e.focusOffset),s=document.createElement(t);s.appendChild(document.createTextNode(n.substring(a,i)));var l=[document.createTextNode(n.substring(0,a)),s,document.createTextNode(n.substring(i,n.length))];c.replaceChild(l[0],e.anchorNode),l[0].after(l[1]),l[1].after(l[2])};return Object(r.jsxs)("div",{className:"d-flex flex-wrap justify-content-center",children:[Object(r.jsxs)("div",{className:"border p5",children:[Object(r.jsx)("div",{className:"form-text mt0",children:"Layout"}),Object(r.jsxs)("div",{className:"btn-group",children:[Object(r.jsx)(o,{active:"columns"===t.tag,tooltip:"Columns",children:Object(r.jsx)("i",{className:"fas fa-columns"})}),Object(r.jsx)(o,{active:"table"===t.tag,tooltip:"Table",click:function(e){return t.setTag("table")},children:Object(r.jsx)("i",{className:"fas fa-table"})}),Object(r.jsx)(o,{active:"ul"===t.tag,tooltip:"Unordered List",click:function(e){return t.setTag("ul")},children:Object(r.jsx)("i",{className:"fas fa-list-ul"})}),Object(r.jsx)(o,{active:"ol"===t.tag,tooltip:"Ordered List",click:function(e){return t.setTag("ol")},children:Object(r.jsx)("i",{className:"fas fa-list-ol"})}),Object(r.jsx)(o,{active:!1,tooltip:"Indent",children:Object(r.jsx)("i",{className:"fas fa-indent"})}),Object(r.jsx)(o,{active:!1,tooltip:"Outdent",children:Object(r.jsx)("i",{className:"fas fa-outdent"})})]})]}),Object(r.jsxs)("div",{className:"border p5",children:[Object(r.jsx)("div",{className:"form-text mt0",children:"Type"}),Object(r.jsxs)("div",{className:"btn-group",children:[Object(r.jsxs)(o,{active:"h1"===t.tag,tooltip:"Title",click:function(e){return t.setTag("h1")},children:[Object(r.jsx)("i",{className:"fas fa-heading"}),"\xa0",Object(r.jsx)("strong",{children:"1"})]}),Object(r.jsxs)(o,{active:"h2"===t.tag,tooltip:"Subtitle",click:function(e){return t.setTag("h2")},children:[Object(r.jsx)("i",{className:"fas fa-heading"}),"\xa0",Object(r.jsx)("strong",{children:"2"})]}),Object(r.jsxs)(o,{active:"h3"===t.tag,tooltip:"Heading",click:function(e){return t.setTag("h3")},children:[Object(r.jsx)("i",{className:"fas fa-heading"}),"\xa0",Object(r.jsx)("strong",{children:"3"})]}),Object(r.jsxs)(o,{active:"h4"===t.tag,tooltip:"Subheading",click:function(e){return t.setTag("h4")},children:[Object(r.jsx)("i",{className:"fas fa-heading"}),"\xa0",Object(r.jsx)("strong",{children:"4"})]}),Object(r.jsx)(o,{active:"p"===t.tag,tooltip:"Paragraph",click:function(e){return t.setTag("p")},children:Object(r.jsx)("i",{className:"fas fa-paragraph"})}),Object(r.jsx)(o,{active:"img"===t.tag,tooltip:"Image",click:function(e){return t.setTag("img")},children:Object(r.jsx)("i",{className:"far fa-image"})}),Object(r.jsx)(o,{active:"file"===t.tag,tooltip:"File Download",click:function(e){return t.setTag("file")},children:Object(r.jsx)("i",{className:"fas fa-file-download"})}),Object(r.jsx)(o,{active:"embed"===t.tag,tooltip:"Embed",click:function(e){return t.setTag("embed")},children:Object(r.jsx)("i",{className:"far fa-play-circle"})}),Object(r.jsx)(o,{active:"pre"===t.tag,tooltip:"Code Block",click:function(e){return t.setTag("pre")},children:Object(r.jsx)("i",{className:"fas fa-code"})}),Object(r.jsx)(o,{active:"blockquote"===t.tag,tooltip:"Quote",click:function(e){return t.setTag("blockquote")},children:Object(r.jsx)("i",{className:"fas fa-quote-left"})})]})]}),Object(r.jsxs)("div",{className:"border p5",children:[Object(r.jsx)("div",{className:"form-text mt0",children:"Align"}),Object(r.jsxs)("div",{className:"btn-group",children:[Object(r.jsx)(o,{active:"left"===t.align,tooltip:"Align Left",click:function(e){return t.setAlign("left")},children:Object(r.jsx)("i",{className:"fas fa-align-left"})}),Object(r.jsx)(o,{active:"center"===t.align,tooltip:"Center Text",click:function(e){return t.setAlign("center")},children:Object(r.jsx)("i",{className:"fas fa-align-center"})}),Object(r.jsx)(o,{active:"right"===t.align,tooltip:"Align Right",click:function(e){return t.setAlign("right")},children:Object(r.jsx)("i",{className:"fas fa-align-right"})}),Object(r.jsx)(o,{active:"justify"===t.align,tooltip:"Justify Text",click:function(e){return t.setAlign("justify")},children:Object(r.jsx)("i",{className:"fas fa-align-justify"})})]})]}),Object(r.jsxs)("div",{className:"border p5",children:[Object(r.jsx)("div",{className:"form-text mt0",children:"Font"}),Object(r.jsxs)("div",{className:"btn-group",children:[Object(r.jsx)(o,{active:!1,tooltip:"Bold",click:function(t){return e("strong")},children:Object(r.jsx)("i",{className:"fas fa-bold"})}),Object(r.jsx)(o,{active:!1,tooltip:"Italic",click:function(t){return e("em")},children:Object(r.jsx)("i",{className:"fas fa-italic"})}),Object(r.jsx)(o,{active:!1,tooltip:"Underline",click:function(t){return e("u")},children:Object(r.jsx)("i",{className:"fas fa-underline"})}),Object(r.jsx)(o,{active:!1,tooltip:"Font",children:Object(r.jsx)("i",{className:"fas fa-font"})}),Object(r.jsx)(o,{active:!1,tooltip:"Icon",children:Object(r.jsx)("i",{className:"far fa-flag"})})]})]})]})},u=c(9),b=c(7),d=c(8),h=c(5);String.prototype.formatSpace=function(){var t,e="",c=null,n=Object(h.a)(this);try{for(n.s();!(t=n.n()).done;){var a=t.value;" "===a&&" "===c||(e+=a),c=a}}catch(i){n.e(i)}finally{n.f()}return e};var x=function(){function t(e,c,n,a,i,s){Object(b.a)(this,t),this.tagName=e,this.text=c,this.align=n,this.style=a,this.id=i,this.classes=s}return Object(d.a)(t,[{key:"_html",value:function(){var t,e,c,n;return t=this.id?'id="'.concat(this.id,'"'):"",e=this.classes?'class="'.concat(this.classes,'"'):"",n=this.align?"text-align:".concat(this.align,";"):"",c='style="'.concat(n+this.style,'"'),"<".concat(this.tagName," ").concat(t," ").concat(e," ").concat(c,">").concat(this.text,"</").concat(this.tagName,">").formatSpace()}}]),t}(),f=function(){function t(e,c,n,a,i,s,l,r,o,j,u){Object(b.a)(this,t),this.tagName=e,this.filename=c,this.src=n,this.alt=a,this.height=i,this.width=s,this.align=l,this.caption=r,this.style=o,this.id=j,this.classes=u}return Object(d.a)(t,[{key:"_html",value:function(){var t,e,c,n;return t=this.id?'id="'.concat(this.id,'"'):"",e=this.classes?'class="'.concat(this.classes,'"'):"",c=this.style?'style="'.concat(this.style,'"'):"",n=this.align?'style="text-align: '.concat(this.align,'";'):"","<figure ".concat(n,' >\n            <img src="').concat(this.src,'" alt="').concat(this.alt,'" ').concat(t," ").concat(e," ").concat(c," />\n        </figure>").formatSpace()}}]),t}(),O=function(t){var e=Object(n.useState)(""),c=Object(l.a)(e,2),a=c[0],i=c[1],s=Object(n.useState)(""),o=Object(l.a)(s,2),j=o[0],b=(o[1],Object(n.useState)("")),d=Object(l.a)(b,2),h=d[0];d[1];return Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.done(new x(t.tag,t.text,t.align,a,j,h))},onReset:function(e){e.preventDefault(),t.cancel("cancelling")},children:[Object(r.jsxs)("div",{className:"input-group my-3",children:[Object(r.jsx)("span",{className:"input-group-text",style:{width:"50px"},children:t.tag}),Object(r.jsx)("input",{type:"text",className:"form-control mb0",onChange:function(e){return t.setText(e.target.value)},style:Object(u.a)(Object(u.a)({},{h1:{fontWeight:500,fontSize:"32px",lineHeight:"48px",marginBottom:"20px"},h2:{fontWeight:500,fontSize:"26px",lineHeight:"39px",marginBottom:"20px"},h3:{fontWeight:500,fontSize:"22px",lineHeight:"33px",marginBottom:"20px"},h4:{fontWeight:500,fontSize:"22px",lineHeight:"33px",marginBottom:"20px"}}[t.tag]),{},{textAlign:t.align}),value:t.text,ref:function(t){t}})]}),Object(r.jsxs)("div",{className:"input-group mb-3",children:[Object(r.jsx)("span",{className:"input-group-text",children:"Custom Style"}),Object(r.jsx)("input",{type:"text",className:"form-control mb0",onChange:function(t){return i(t.target.value)},value:a})]}),Object(r.jsx)("button",{type:"submit",className:"btn btn-outline-primary",children:"Done"}),Object(r.jsx)("button",{type:"reset",className:"btn btn-outline-secondary",children:"Cancel"})]})};var g=function(t){var e=Object(n.useState)("not selected"),c=Object(l.a)(e,2),a=c[0],i=c[1],s=Object(n.useState)(""),o=Object(l.a)(s,2),j=o[0],u=o[1],b=Object(n.useState)(0),d=Object(l.a)(b,2),x=d[0],O=d[1],g=Object(n.useState)(0),m=Object(l.a)(g,2),p=m[0],v=m[1],N=Object(n.useState)(null),y=Object(l.a)(N,2),S=y[0],k=y[1],T=Object(n.useState)({}),D=Object(l.a)(T,2),w=D[0],C=D[1],A=function(t){v(t.target.width),O(t.target.height),k(t.target.width/t.target.height)};return Object(n.useEffect)((function(){C({height:x+"px",width:p+"px"})}),[x]),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.done(new f("img",a,j,a,x,p,t.align,"",function(t){var e,c=JSON.stringify(t),n="",a=Object(h.a)(c);try{for(a.s();!(e=a.n()).done;){var i=e.value;","===i?n+=";":"{"!==i&&"}"!==i&&'"'!==i&&(n+=i)}}catch(s){a.e(s)}finally{a.f()}return n+=";",console.log(n),n}(w),"",""))},onReset:function(e){e.preventDefault(),t.cancel()},children:[j?Object(r.jsxs)("div",{className:"row my-3",children:[Object(r.jsxs)("div",{className:"col input-group",children:[Object(r.jsx)("span",{className:"input-group-text",children:"Height"}),Object(r.jsx)("input",{type:"number",min:"0",value:x,onChange:function(t){O(t.target.value),v(Math.round(t.target.value*S))},className:"form-control"}),Object(r.jsx)("span",{className:"input-group-text",children:"px"})]}),Object(r.jsxs)("div",{className:"col input-group",children:[Object(r.jsx)("span",{className:"input-group-text",children:"Width"}),Object(r.jsx)("input",{type:"number",min:"0",value:p,onChange:function(t){v(t.target.value),O(Math.round(t.target.value/S))},className:"form-control"}),Object(r.jsx)("span",{className:"input-group-text",children:"px"})]})]}):"",j?Object(r.jsx)("figure",{style:{textAlign:t.align},children:Object(r.jsx)("img",{src:j,alt:a,style:w,onLoad:function(t){return A(t)},onChange:function(t){return A(t)},className:"img-upload"})}):"",Object(r.jsx)("input",{type:"file",className:"form-control",onChange:function(t){u(""),C({}),console.log(t);var e=t.target.files[0];console.log(e);var c=new FileReader;c.addEventListener("load",(function(){i(e.Name),u(c.result)}),!1),e&&c.readAsDataURL(e)}}),Object(r.jsx)("button",{type:"submit",className:"btn btn-outline-primary",children:"Done"}),Object(r.jsx)("button",{type:"reset",className:"btn btn-outline-secondary",children:"Cancel"})]})},m=function(t){var e=Object(n.useRef)(null);return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault()},onReset:function(e){e.preventDefault(),t.cancel()},children:[Object(r.jsx)("p",{id:"editor-p",contentEditable:"true",ref:e,style:{width:"100%",minHeight:"50px",boxSizing:"border-box",outline:"2px dashed #ccc",padding:"20px",textAlign:t.align}}),Object(r.jsx)("button",{type:"submit",className:"btn btn-outline-primary",children:"Done"}),Object(r.jsx)("button",{type:"reset",className:"btn btn-outline-secondary",children:"Cancel"})]})})},p=function(t){return t.pattern.test(t.tag.toLowerCase())?t.children:""},v=function(t){var e=Object(n.useState)("h1"),c=Object(l.a)(e,2),a=c[0],i=c[1],s=Object(n.useState)("left"),o=Object(l.a)(s,2),u=o[0],b=o[1],d=Object(n.useState)(""),h=Object(l.a)(d,2),x=h[0],f=h[1],v=function(e){t.done(e)},N=function(e){t.cancel()};return Object(n.useEffect)((function(){console.log(a)}),[a]),Object(r.jsxs)("div",{className:"outline-grey",children:[Object(r.jsx)(j,{tag:a,setTag:i,align:u,setAlign:b}),Object(r.jsx)(p,{tag:a,pattern:/^(p)$/,children:Object(r.jsx)(m,{tag:a,align:u,done:v,cancel:N,text:x,setText:f})}),Object(r.jsx)(p,{tag:a,pattern:/^(table)$/,children:Object(r.jsxs)("p",{className:"text-primary text-center py-3",children:['TODO: "',a,'" not implemented']})}),Object(r.jsx)(p,{tag:a,pattern:/^(ol)$/,children:Object(r.jsxs)("p",{className:"text-primary text-center py-3",children:['TODO: "',a,'" not implemented']})}),Object(r.jsx)(p,{tag:a,pattern:/^(ul)$/,children:Object(r.jsxs)("p",{className:"text-primary text-center py-3",children:['TODO: "',a,'" not implemented']})}),Object(r.jsx)(p,{tag:a,pattern:/^(file)$/,children:Object(r.jsxs)("p",{className:"text-primary text-center py-3",children:['TODO: "',a,'" not implemented']})}),Object(r.jsx)(p,{tag:a,pattern:/^(embed)$/,children:Object(r.jsxs)("p",{className:"text-primary text-center py-3",children:['TODO: "',a,'" not implemented']})}),Object(r.jsx)(p,{tag:a,pattern:/^(pre)$/,children:Object(r.jsxs)("p",{className:"text-primary text-center py-3",children:['TODO: "',a,'" not implemented']})}),Object(r.jsx)(p,{tag:a,pattern:/^(blockquote)$/,children:Object(r.jsxs)("p",{className:"text-primary text-center py-3",children:['TODO: "',a,'" not implemented']})}),Object(r.jsx)(p,{tag:a,pattern:/^(h)(1|2|3|4|5|6)$/,children:Object(r.jsx)(O,{tag:a,align:u,done:v,cancel:N,text:x,setText:f})}),Object(r.jsx)(p,{tag:a,pattern:/^(img)$/,children:Object(r.jsx)(g,{tag:a,align:u,done:v,cancel:N})})]})},N=function(t){var e=Object(n.useState)(!1),c=Object(l.a)(e,2),a=c[0],i=c[1];return Object(r.jsx)(r.Fragment,{children:a?Object(r.jsx)(v,{done:function(e){t.addSection(t.index,e),i(!1)},cancel:function(t){i(!1)}}):Object(r.jsx)("div",{className:"add-section",onClick:function(t){return i(!0)},children:"+ Add Section"})})},y=function(t){var e=Object(n.useState)([]),c=Object(l.a)(e,2),a=c[0],i=c[1],o=function(t,e){var c=Object(s.a)(a);c.splice(t+1,0,e),i(c)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"bg-dark text-light p-3",children:"Wiki Editor"}),Object(r.jsx)(N,{index:-1,addSection:o}),a.map((function(t,e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"content-section",dangerouslySetInnerHTML:{__html:t._html()}}),Object(r.jsx)(N,{index:e,addSection:o})]},e)}))]})};var S=function(){return Object(r.jsx)("div",{className:"container",children:Object(r.jsx)(y,{})})};i.a.render(Object(r.jsx)(S,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.662ca8c0.chunk.js.map