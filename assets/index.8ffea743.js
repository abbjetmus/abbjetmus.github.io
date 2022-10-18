import{u as X,aw as V}from"./index.56596687.js";import{g as W,q as G,a as K}from"./vue-quill.snow.3ff57131.js";function Yt(){return X(V)}var I={},b={},d={},s={},Y=function(e){return Q(e)&&!J(e)};function Q(t){return!!t&&typeof t=="object"}function J(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||te(t)}var Z=typeof Symbol=="function"&&Symbol.for,ee=Z?Symbol.for("react.element"):60103;function te(t){return t.$$typeof===ee}function ne(t){return Array.isArray(t)?[]:{}}function m(t,e){return e.clone!==!1&&e.isMergeableObject(t)?h(ne(t),t,e):t}function re(t,e,i){return t.concat(e).map(function(n){return m(n,i)})}function ie(t,e,i){var n={};return i.isMergeableObject(t)&&Object.keys(t).forEach(function(r){n[r]=m(t[r],i)}),Object.keys(e).forEach(function(r){!i.isMergeableObject(e[r])||!t[r]?n[r]=m(e[r],i):n[r]=h(t[r],e[r],i)}),n}function h(t,e,i){i=i||{},i.arrayMerge=i.arrayMerge||re,i.isMergeableObject=i.isMergeableObject||Y;var n=Array.isArray(e),r=Array.isArray(t),o=n===r;return o?n?i.arrayMerge(t,e,i):ie(t,e,i):m(e,i)}h.all=function(e,i){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(n,r){return h(n,r,i)},{})};var oe=h,ae=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"})),le=W(ae),y={};Object.defineProperty(y,"__esModule",{value:!0});var ue=function(){function t(e,i){for(var n=0;n<i.length;n++){var r=i[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),ce=s;fe(ce);function fe(t){return t&&t.__esModule?t:{default:t}}function se(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var ye=function(){function t(e){se(this,t),this.formatter=e}return ue(t,[{key:"onCreate",value:function(){}},{key:"onDestroy",value:function(){}},{key:"onUpdate",value:function(){}}]),t}();y.default=ye;Object.defineProperty(s,"__esModule",{value:!0});var de=function(){function t(e,i){for(var n=0;n<i.length;n++){var r=i[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),he=le,ve=_(he),ge=b,pe=_(ge),me=y;_(me);var be=d;_(be);function _(t){return t&&t.__esModule?t:{default:t}}function _e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Oe=function(e,i){return i},ke=function(){function t(e){var i=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};_e(this,t),this.onClick=function(){i.hide()},this.quill=e,this.options=(0,ve.default)(pe.default,n,{arrayMerge:Oe}),this.currentSpec=null,this.actions=[],this.overlay=document.createElement("div"),this.overlay.classList.add(this.options.overlay.className),this.options.overlay.style&&Object.assign(this.overlay.style,this.options.overlay.style),document.execCommand("enableObjectResizing",!1,"false"),this.quill.root.parentNode.style.position=this.quill.root.parentNode.style.position||"relative",this.quill.root.addEventListener("click",this.onClick),this.specs=this.options.specs.map(function(r){return new r(i)}),this.specs.forEach(function(r){return r.init()})}return de(t,[{key:"show",value:function(i){this.currentSpec=i,this.currentSpec.setSelection(),this.setUserSelect("none"),this.quill.root.parentNode.appendChild(this.overlay),this.repositionOverlay(),this.createActions(i)}},{key:"hide",value:function(){!this.currentSpec||(this.currentSpec.onHide(),this.currentSpec=null,this.quill.root.parentNode.removeChild(this.overlay),this.overlay.style.setProperty("display","none"),this.setUserSelect(""),this.destroyActions())}},{key:"update",value:function(){this.repositionOverlay(),this.actions.forEach(function(i){return i.onUpdate()})}},{key:"createActions",value:function(i){var n=this;this.actions=i.getActions().map(function(r){var o=new r(n);return o.onCreate(),o})}},{key:"destroyActions",value:function(){this.actions.forEach(function(i){return i.onDestroy()}),this.actions=[]}},{key:"repositionOverlay",value:function(){if(!!this.currentSpec){var i=this.currentSpec.getOverlayElement();if(!!i){var n=this.quill.root.parentNode,r=i.getBoundingClientRect(),o=n.getBoundingClientRect();Object.assign(this.overlay.style,{display:"block",left:r.left-o.left-1+n.scrollLeft+"px",top:r.top-o.top+n.scrollTop+"px",width:r.width+"px",height:r.height+"px"})}}}},{key:"setUserSelect",value:function(i){var n=this,r=["userSelect","mozUserSelect","webkitUserSelect","msUserSelect"];r.forEach(function(o){n.quill.root.style.setProperty(o,i),document.documentElement&&document.documentElement.style.setProperty(o,i)})}}]),t}();s.default=ke;var O={},k={};Object.defineProperty(k,"__esModule",{value:!0});var Se=function(){function t(e,i){for(var n=0;n<i.length;n++){var r=i[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();function B(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Ae(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var R="left",D="center",M="right",we=function(){function t(e){var i=this,n;Ae(this,t),this.applyStyle=e.aligner.applyStyle,this.alignAttribute=e.attribute,this.alignments=(n={},B(n,R,{name:R,icon:e.icons.left,apply:function(o){i.setAlignment(o,R),i.setStyle(o,"inline","left","0 1em 1em 0")}}),B(n,D,{name:D,icon:e.icons.center,apply:function(o){i.setAlignment(o,D),i.setStyle(o,"block",null,"auto")}}),B(n,M,{name:M,icon:e.icons.right,apply:function(o){i.setAlignment(o,M),i.setStyle(o,"inline","right","0 0 1em 1em")}}),n)}return Se(t,[{key:"getAlignments",value:function(){var i=this;return Object.keys(this.alignments).map(function(n){return i.alignments[n]})}},{key:"clear",value:function(i){i.removeAttribute(this.alignAttribute),this.setStyle(i,null,null,null)}},{key:"isAligned",value:function(i,n){return i.getAttribute(this.alignAttribute)===n.name}},{key:"setAlignment",value:function(i,n){i.setAttribute(this.alignAttribute,n)}},{key:"setStyle",value:function(i,n,r,o){this.applyStyle&&(i.style.setProperty("display",n),i.style.setProperty("float",r),i.style.setProperty("margin",o))}}]),t}();k.default=we;var Ee=s;xe(Ee);function xe(t){return t&&t.__esModule?t:{default:t}}var S={};Object.defineProperty(S,"__esModule",{value:!0});var $e=function(){function t(e,i){for(var n=0;n<i.length;n++){var r=i[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),Pe=s;Be(Pe);function Be(t){return t&&t.__esModule?t:{default:t}}function Re(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var De=function(){function t(){Re(this,t),this.toolbar=null,this.buttons=[]}return $e(t,[{key:"create",value:function(i,n){var r=document.createElement("div");return r.classList.add(i.options.align.toolbar.mainClassName),this.addToolbarStyle(i,r),this.addButtons(i,r,n),this.toolbar=r,this.toolbar}},{key:"destroy",value:function(){this.toolbar=null,this.buttons=[]}},{key:"getElement",value:function(){return this.toolbar}},{key:"addToolbarStyle",value:function(i,n){i.options.align.toolbar.mainStyle&&Object.assign(n.style,i.options.align.toolbar.mainStyle)}},{key:"addButtonStyle",value:function(i,n,r){r.options.align.toolbar.buttonStyle&&(Object.assign(i.style,r.options.align.toolbar.buttonStyle),n>0&&(i.style.borderLeftWidth="0")),r.options.align.toolbar.svgStyle&&Object.assign(i.children[0].style,r.options.align.toolbar.svgStyle)}},{key:"addButtons",value:function(i,n,r){var o=this;r.getAlignments().forEach(function(a,c){var l=document.createElement("span");l.classList.add(i.options.align.toolbar.buttonClassName),l.innerHTML=a.icon,l.addEventListener("click",function(){o.onButtonClick(l,i,a,r)}),o.preselectButton(l,a,i,r),o.addButtonStyle(l,c,i),o.buttons.push(l),n.appendChild(l)})}},{key:"preselectButton",value:function(i,n,r,o){if(!!r.currentSpec){var a=r.currentSpec.getTargetElement();!a||o.isAligned(a,n)&&this.selectButton(r,i)}}},{key:"onButtonClick",value:function(i,n,r,o){if(!!n.currentSpec){var a=n.currentSpec.getTargetElement();!a||this.clickButton(i,a,n,r,o)}}},{key:"clickButton",value:function(i,n,r,o,a){var c=this;this.buttons.forEach(function(l){c.deselectButton(r,l)}),a.isAligned(n,o)?r.options.align.toolbar.allowDeselect?a.clear(n):this.selectButton(r,i):(this.selectButton(r,i),o.apply(n)),r.update()}},{key:"selectButton",value:function(i,n){n.classList.add("is-selected"),i.options.align.toolbar.addButtonSelectStyle&&n.style.setProperty("filter","invert(20%)")}},{key:"deselectButton",value:function(i,n){n.classList.remove("is-selected"),i.options.align.toolbar.addButtonSelectStyle&&n.style.removeProperty("filter")}}]),t}();S.default=De;Object.defineProperty(O,"__esModule",{value:!0});var Me=function(){function t(e,i){for(var n=0;n<i.length;n++){var r=i[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),Te=y,je=A(Te),He=s;A(He);var Ie=k,Le=A(Ie),qe=S,Ue=A(qe);function A(t){return t&&t.__esModule?t:{default:t}}function Ce(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ze(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Ne(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Fe=function(t){Ne(e,t);function e(i){Ce(this,e);var n=ze(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,i));return n.aligner=new Le.default(i.options.align),n.toolbar=new Ue.default,n}return Me(e,[{key:"onCreate",value:function(){var n=this.toolbar.create(this.formatter,this.aligner);this.formatter.overlay.appendChild(n)}},{key:"onDestroy",value:function(){var n=this.toolbar.getElement();!n||(this.formatter.overlay.removeChild(n),this.toolbar.destroy())}}]),e}(je.default);O.default=Fe;var w={};Object.defineProperty(w,"__esModule",{value:!0});var Xe=function(){function t(e,i){for(var n=0;n<i.length;n++){var r=i[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),Ve=y,We=L(Ve),Ge=s;L(Ge);function L(t){return t&&t.__esModule?t:{default:t}}function Ke(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ye(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Qe(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Je=function(t){Qe(e,t);function e(i){Ke(this,e);var n=Ye(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,i));return n.onMouseDown=function(r){if(r.target instanceof HTMLElement&&(n.dragHandle=r.target,n.setCursor(n.dragHandle.style.cursor),!!n.formatter.currentSpec)){var o=n.formatter.currentSpec.getTargetElement();if(!!o){var a=o.getBoundingClientRect();n.dragStartX=r.clientX,n.preDragWidth=a.width,n.targetRatio=a.height/a.width,document.addEventListener("mousemove",n.onDrag),document.addEventListener("mouseup",n.onMouseUp)}}},n.onDrag=function(r){if(!!n.formatter.currentSpec){var o=n.formatter.currentSpec.getTargetElement();if(!!o){var a=r.clientX-n.dragStartX,c=0;n.dragHandle===n.topLeftHandle||n.dragHandle===n.bottomLeftHandle?c=Math.round(n.preDragWidth-a):c=Math.round(n.preDragWidth+a);var l=n.targetRatio*c;o.setAttribute("width",""+c),o.setAttribute("height",""+l),n.formatter.update()}}},n.onMouseUp=function(){n.setCursor(""),document.removeEventListener("mousemove",n.onDrag),document.removeEventListener("mouseup",n.onMouseUp)},n.topLeftHandle=n.createHandle("top-left","nwse-resize"),n.topRightHandle=n.createHandle("top-right","nesw-resize"),n.bottomRightHandle=n.createHandle("bottom-right","nwse-resize"),n.bottomLeftHandle=n.createHandle("bottom-left","nesw-resize"),n.dragHandle=null,n.dragStartX=0,n.preDragWidth=0,n.targetRatio=0,n}return Xe(e,[{key:"onCreate",value:function(){this.formatter.overlay.appendChild(this.topLeftHandle),this.formatter.overlay.appendChild(this.topRightHandle),this.formatter.overlay.appendChild(this.bottomRightHandle),this.formatter.overlay.appendChild(this.bottomLeftHandle),this.repositionHandles(this.formatter.options.resize.handleStyle)}},{key:"onDestroy",value:function(){this.setCursor(""),this.formatter.overlay.removeChild(this.topLeftHandle),this.formatter.overlay.removeChild(this.topRightHandle),this.formatter.overlay.removeChild(this.bottomRightHandle),this.formatter.overlay.removeChild(this.bottomLeftHandle)}},{key:"createHandle",value:function(n,r){var o=document.createElement("div");return o.classList.add(this.formatter.options.resize.handleClassName),o.setAttribute("data-position",n),o.style.cursor=r,this.formatter.options.resize.handleStyle&&Object.assign(o.style,this.formatter.options.resize.handleStyle),o.addEventListener("mousedown",this.onMouseDown),o}},{key:"repositionHandles",value:function(n){var r="0px",o="0px";n&&(n.width&&(r=-parseFloat(n.width)/2+"px"),n.height&&(o=-parseFloat(n.height)/2+"px")),Object.assign(this.topLeftHandle.style,{left:r,top:o}),Object.assign(this.topRightHandle.style,{right:r,top:o}),Object.assign(this.bottomRightHandle.style,{right:r,bottom:o}),Object.assign(this.bottomLeftHandle.style,{left:r,bottom:o})}},{key:"setCursor",value:function(n){if(document.body&&(document.body.style.cursor=n),this.formatter.currentSpec){var r=this.formatter.currentSpec.getOverlayElement();r&&(r.style.cursor=n)}}}]),e}(We.default);w.default=Je;var E={};Object.defineProperty(E,"__esModule",{value:!0});var Ze=function(){function t(e,i){for(var n=0;n<i.length;n++){var r=i[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),et=G.exports,tt=q(et),nt=y,rt=q(nt);function q(t){return t&&t.__esModule?t:{default:t}}function it(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function j(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function ot(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var at=function(t){ot(e,t);function e(){var i,n,r,o;it(this,e);for(var a=arguments.length,c=Array(a),l=0;l<a;l++)c[l]=arguments[l];return o=(n=(r=j(this,(i=e.__proto__||Object.getPrototypeOf(e)).call.apply(i,[this].concat(c))),r),r.onKeyUp=function(g){if(!!r.formatter.currentSpec&&(g.keyCode===46||g.keyCode===8)){var p=tt.default.find(r.formatter.currentSpec.getTargetElement());p&&p.deleteAt(0),r.formatter.hide()}},n),j(r,o)}return Ze(e,[{key:"onCreate",value:function(){document.addEventListener("keyup",this.onKeyUp,!0),this.formatter.quill.root.addEventListener("input",this.onKeyUp,!0)}},{key:"onDestroy",value:function(){document.removeEventListener("keyup",this.onKeyUp),this.formatter.quill.root.removeEventListener("input",this.onKeyUp)}}]),e}(rt.default);E.default=at;Object.defineProperty(d,"__esModule",{value:!0});var lt=function(){function t(e,i){for(var n=0;n<i.length;n++){var r=i[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),ut=s;v(ut);var ct=y;v(ct);var ft=O,st=v(ft),yt=w,dt=v(yt),ht=E,vt=v(ht);function v(t){return t&&t.__esModule?t:{default:t}}function gt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var pt=function(){function t(e){gt(this,t),this.formatter=e}return lt(t,[{key:"init",value:function(){}},{key:"getActions",value:function(){return[st.default,dt.default,vt.default]}},{key:"getTargetElement",value:function(){return null}},{key:"getOverlayElement",value:function(){return this.getTargetElement()}},{key:"setSelection",value:function(){this.formatter.quill.setSelection(null)}},{key:"onHide",value:function(){}}]),t}();d.default=pt;var x={};Object.defineProperty(x,"__esModule",{value:!0});var mt=function(){function t(e,i){for(var n=0;n<i.length;n++){var r=i[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),bt=d,_t=U(bt),Ot=s;U(Ot);function U(t){return t&&t.__esModule?t:{default:t}}function kt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function St(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function At(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var wt=function(t){At(e,t);function e(i){kt(this,e);var n=St(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,i));return n.onClick=function(r){var o=r.target;!(o instanceof HTMLElement)||o.tagName!=="IMG"||(n.img=o,n.formatter.show(n))},n.img=null,n}return mt(e,[{key:"init",value:function(){this.formatter.quill.root.addEventListener("click",this.onClick)}},{key:"getTargetElement",value:function(){return this.img}},{key:"onHide",value:function(){this.img=null}}]),e}(_t.default);x.default=wt;var $={},P={};Object.defineProperty(P,"__esModule",{value:!0});var Et=function(){function t(e,i){for(var n=0;n<i.length;n++){var r=i[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),xt=d,$t=C(xt),Pt=s;C(Pt);function C(t){return t&&t.__esModule?t:{default:t}}function Bt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Rt(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Dt(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var H="data-blot-formatter-unclickable-bound",Mt="blot-formatter__proxy-image",Tt=function(t){Dt(e,t);function e(i,n){Bt(this,e);var r=Rt(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,i));return r.onTextChange=function(){Array.from(document.querySelectorAll(r.selector+":not(["+H+"])")).forEach(function(o){o.setAttribute(H,"true"),o.addEventListener("mouseenter",r.onMouseEnter)})},r.onMouseEnter=function(o){var a=o.target;a instanceof HTMLElement&&(r.nextUnclickable=a,r.repositionProxyImage(r.nextUnclickable))},r.onProxyImageClick=function(){r.unclickable=r.nextUnclickable,r.nextUnclickable=null,r.formatter.show(r),r.hideProxyImage()},r.selector=n,r.unclickable=null,r.nextUnclickable=null,r}return Et(e,[{key:"init",value:function(){document.body&&document.body.appendChild(this.createProxyImage()),this.hideProxyImage(),this.proxyImage.addEventListener("click",this.onProxyImageClick),this.formatter.quill.on("text-change",this.onTextChange)}},{key:"getTargetElement",value:function(){return this.unclickable}},{key:"getOverlayElement",value:function(){return this.unclickable}},{key:"onHide",value:function(){this.hideProxyImage(),this.nextUnclickable=null,this.unclickable=null}},{key:"createProxyImage",value:function(){var n=document.createElement("canvas"),r=n.getContext("2d");return r.globalAlpha=0,r.fillRect(0,0,1,1),this.proxyImage=document.createElement("img"),this.proxyImage.src=n.toDataURL("image/png"),this.proxyImage.classList.add(Mt),Object.assign(this.proxyImage.style,{position:"absolute",margin:"0"}),this.proxyImage}},{key:"hideProxyImage",value:function(){Object.assign(this.proxyImage.style,{display:"none"})}},{key:"repositionProxyImage",value:function(n){var r=n.getBoundingClientRect();Object.assign(this.proxyImage.style,{display:"block",left:r.left+window.pageXOffset+"px",top:r.top+window.pageYOffset+"px",width:r.width+"px",height:r.height+"px"})}}]),e}($t.default);P.default=Tt;Object.defineProperty($,"__esModule",{value:!0});var jt=P,Ht=z(jt),It=s;z(It);function z(t){return t&&t.__esModule?t:{default:t}}function Lt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function qt(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Ut(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Ct=function(t){Ut(e,t);function e(i){return Lt(this,e),qt(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,i,"iframe.ql-video"))}return e}(Ht.default);$.default=Ct;Object.defineProperty(b,"__esModule",{value:!0});var zt=d;T(zt);var Nt=x,Ft=T(Nt),Xt=$,Vt=T(Xt);function T(t){return t&&t.__esModule?t:{default:t}}var Wt={specs:[Ft.default,Vt.default],overlay:{className:"blot-formatter__overlay",style:{position:"absolute",boxSizing:"border-box",border:"1px dashed #444"}},align:{attribute:"data-align",aligner:{applyStyle:!0},icons:{left:`
        <svg viewbox="0 0 18 18">
          <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line>
          <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line>
          <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line>
        </svg>
      `,center:`
        <svg viewbox="0 0 18 18">
           <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>
          <line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line>
          <line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line>
        </svg>
      `,right:`
        <svg viewbox="0 0 18 18">
          <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>
          <line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line>
          <line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line>
        </svg>
      `},toolbar:{allowDeselect:!0,mainClassName:"blot-formatter__toolbar",mainStyle:{position:"absolute",top:"-12px",right:"0",left:"0",height:"0",minWidth:"100px",font:"12px/1.0 Arial, Helvetica, sans-serif",textAlign:"center",color:"#333",boxSizing:"border-box",cursor:"default",zIndex:"1"},buttonClassName:"blot-formatter__toolbar-button",addButtonSelectStyle:!0,buttonStyle:{display:"inline-block",width:"24px",height:"24px",background:"white",border:"1px solid #999",verticalAlign:"middle"},svgStyle:{display:"inline-block",width:"24px",height:"24px",background:"white",border:"1px solid #999",verticalAlign:"middle"}}},resize:{handleClassName:"blot-formatter__resize-handle",handleStyle:{position:"absolute",height:"12px",width:"12px",backgroundColor:"white",border:"1px solid #777",boxSizing:"border-box",opacity:"0.80"}}};b.default=Wt;(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=b;Object.defineProperty(t,"DefaultOptions",{enumerable:!0,get:function(){return f(e).default}});var i=s;Object.defineProperty(t,"default",{enumerable:!0,get:function(){return f(i).default}});var n=y;Object.defineProperty(t,"Action",{enumerable:!0,get:function(){return f(n).default}});var r=O;Object.defineProperty(t,"AlignAction",{enumerable:!0,get:function(){return f(r).default}});var o=k;Object.defineProperty(t,"DefaultAligner",{enumerable:!0,get:function(){return f(o).default}});var a=S;Object.defineProperty(t,"DefaultToolbar",{enumerable:!0,get:function(){return f(a).default}});var c=E;Object.defineProperty(t,"DeleteAction",{enumerable:!0,get:function(){return f(c).default}});var l=w;Object.defineProperty(t,"ResizeAction",{enumerable:!0,get:function(){return f(l).default}});var g=d;Object.defineProperty(t,"BlotSpec",{enumerable:!0,get:function(){return f(g).default}});var p=x;Object.defineProperty(t,"ImageSpec",{enumerable:!0,get:function(){return f(p).default}});var N=P;Object.defineProperty(t,"UnclickableBlotSpec",{enumerable:!0,get:function(){return f(N).default}});var F=$;Object.defineProperty(t,"IframeVideoSpec",{enumerable:!0,get:function(){return f(F).default}});function f(u){return u&&u.__esModule?u:{default:u}}})(I);var Qt=K(I);export{Qt as B,Yt as u};
