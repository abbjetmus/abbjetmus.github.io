import{b as ge,ar as xe,r as w,aq as be,Q as K,G as ye,O as j,w as y,j as Te,D as W,g as G,U as we,H as M,as as Q,M as pe,a9 as Ce,A as Ee,W as ke,X as Se,at as He,Y as Me,x as b,Z as qe,au as We,_ as Pe,av as Be,$ as Le,aw as Oe,ax as ze,S as Ae,ay as $e,az as V,a6 as Fe,aA as Re,t as I,B as De,aB as Ke,aC as je,aD as Qe,aE as Ve,V as Ie}from"./index.308153eb.js";import{c as Ne}from"./selection.78640de4.js";function lt(){return ge(xe)}const _e={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Ue({showing:e,avoidEmit:t,configureAnchorEl:u}){const{props:o,proxy:l,emit:c}=G(),n=w(null);let f;function d(a){return n.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const s={};u===void 0&&(Object.assign(s,{hide(a){l.hide(a)},toggle(a){l.toggle(a),a.qAnchorHandled=!0},toggleKey(a){be(a,13)===!0&&s.toggle(a)},contextClick(a){l.hide(a),K(a),ye(()=>{l.show(a),a.qAnchorHandled=!0})},prevent:K,mobileTouch(a){if(s.mobileCleanup(a),d(a)!==!0)return;l.hide(a),n.value.classList.add("non-selectable");const h=a.target;j(s,"anchor",[[h,"touchmove","mobileCleanup","passive"],[h,"touchend","mobileCleanup","passive"],[h,"touchcancel","mobileCleanup","passive"],[n.value,"contextmenu","prevent","notPassive"]]),f=setTimeout(()=>{l.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){n.value.classList.remove("non-selectable"),clearTimeout(f),e.value===!0&&a!==void 0&&Ne()}}),u=function(a=o.contextMenu){if(o.noParentEvent===!0||n.value===null)return;let h;a===!0?l.$q.platform.is.mobile===!0?h=[[n.value,"touchstart","mobileTouch","passive"]]:h=[[n.value,"mousedown","hide","passive"],[n.value,"contextmenu","contextClick","notPassive"]]:h=[[n.value,"click","toggle","passive"],[n.value,"keyup","toggleKey","passive"]],j(s,"anchor",h)});function r(){we(s,"anchor")}function v(a){for(n.value=a;n.value.classList.contains("q-anchor--skip");)n.value=n.value.parentNode;u()}function m(){if(o.target===!1||o.target===""||l.$el.parentNode===null)n.value=null;else if(o.target===!0)v(l.$el.parentNode);else{let a=o.target;if(typeof o.target=="string")try{a=document.querySelector(o.target)}catch{a=void 0}a!=null?(n.value=a.$el||a,u()):(n.value=null,console.error(`Anchor: target "${o.target}" not found`))}}return y(()=>o.contextMenu,a=>{n.value!==null&&(r(),u(a))}),y(()=>o.target,()=>{n.value!==null&&r(),m()}),y(()=>o.noParentEvent,a=>{n.value!==null&&(a===!0?r():u())}),Te(()=>{m(),t!==!0&&o.modelValue===!0&&n.value===null&&c("update:modelValue",!1)}),W(()=>{clearTimeout(f),r()}),{anchorEl:n,canShow:d,anchorEvents:s}}function Xe(e,t){const u=w(null);let o;function l(f,d){const s=`${d!==void 0?"add":"remove"}EventListener`,r=d!==void 0?d:o;f!==window&&f[s]("scroll",r,M.passive),window[s]("scroll",r,M.passive),o=d}function c(){u.value!==null&&(l(u.value),u.value=null)}const n=y(()=>e.noParentEvent,()=>{u.value!==null&&(c(),t())});return W(n),{localScrollTarget:u,unconfigureScrollTarget:c,changeScrollEvent:l}}let Z;const{notPassiveCapture:p}=M,g=[];function C(e){clearTimeout(Z);const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let u=Q.length-1;for(;u>=0;){const o=Q[u].$;if(o.type.name!=="QDialog")break;if(o.props.seamless!==!0)return;u--}for(let o=g.length-1;o>=0;o--){const l=g[o];if((l.anchorEl.value===null||l.anchorEl.value.contains(t)===!1)&&(t===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(t)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function Ye(e){g.push(e),g.length===1&&(document.addEventListener("mousedown",C,p),document.addEventListener("touchstart",C,p))}function N(e){const t=g.findIndex(u=>u===e);t>-1&&(g.splice(t,1),g.length===0&&(clearTimeout(Z),document.removeEventListener("mousedown",C,p),document.removeEventListener("touchstart",C,p)))}let _,U;function X(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Ge(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const q={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{q[`${e}#ltr`]=e,q[`${e}#rtl`]=e});function Y(e,t){const u=e.split(" ");return{vertical:u[0],horizontal:q[`${u[1]}#${t===!0?"rtl":"ltr"}`]}}function Ze(e,t){let{top:u,left:o,right:l,bottom:c,width:n,height:f}=e.getBoundingClientRect();return t!==void 0&&(u-=t[1],o-=t[0],c+=t[1],l+=t[0],n+=t[0],f+=t[1]),{top:u,left:o,right:l,bottom:c,width:n,height:f,middle:o+(l-o)/2,center:u+(c-u)/2}}function Je(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function et(e){if(pe.is.ios===!0&&window.visualViewport!==void 0){const f=document.body.style,{offsetLeft:d,offsetTop:s}=window.visualViewport;d!==_&&(f.setProperty("--q-pe-left",d+"px"),_=d),s!==U&&(f.setProperty("--q-pe-top",s+"px"),U=s)}let t;const{scrollLeft:u,scrollTop:o}=e.el;if(e.absoluteOffset===void 0)t=Ze(e.anchorEl,e.cover===!0?[0,0]:e.offset);else{const{top:f,left:d}=e.anchorEl.getBoundingClientRect(),s=f+e.absoluteOffset.top,r=d+e.absoluteOffset.left;t={top:s,left:r,width:1,height:1,right:r+1,center:s,middle:r,bottom:s+1}}let l={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(l.minWidth=t.width+"px",e.cover===!0&&(l.minHeight=t.height+"px")),Object.assign(e.el.style,l);const c=Je(e.el),n={top:t[e.anchorOrigin.vertical]-c[e.selfOrigin.vertical],left:t[e.anchorOrigin.horizontal]-c[e.selfOrigin.horizontal]};tt(n,t,c,e.anchorOrigin,e.selfOrigin),l={top:n.top+"px",left:n.left+"px"},n.maxHeight!==void 0&&(l.maxHeight=n.maxHeight+"px",t.height>n.maxHeight&&(l.minHeight=l.maxHeight)),n.maxWidth!==void 0&&(l.maxWidth=n.maxWidth+"px",t.width>n.maxWidth&&(l.minWidth=l.maxWidth)),Object.assign(e.el.style,l),e.el.scrollTop!==o&&(e.el.scrollTop=o),e.el.scrollLeft!==u&&(e.el.scrollLeft=u)}function tt(e,t,u,o,l){const c=u.bottom,n=u.right,f=Ce(),d=window.innerHeight-f,s=document.body.clientWidth;if(e.top<0||e.top+c>d)if(l.vertical==="center")e.top=t[o.vertical]>d/2?Math.max(0,d-c):0,e.maxHeight=Math.min(c,d);else if(t[o.vertical]>d/2){const r=Math.min(d,o.vertical==="center"?t.center:o.vertical===l.vertical?t.bottom:t.top);e.maxHeight=Math.min(c,r),e.top=Math.max(0,r-c)}else e.top=Math.max(0,o.vertical==="center"?t.center:o.vertical===l.vertical?t.top:t.bottom),e.maxHeight=Math.min(c,d-e.top);if(e.left<0||e.left+n>s)if(e.maxWidth=Math.min(n,s),l.horizontal==="middle")e.left=t[o.horizontal]>s/2?Math.max(0,s-n):0;else if(t[o.horizontal]>s/2){const r=Math.min(s,o.horizontal==="middle"?t.middle:o.horizontal===l.horizontal?t.right:t.left);e.maxWidth=Math.min(n,r),e.left=Math.max(0,r-e.maxWidth)}else e.left=Math.max(0,o.horizontal==="middle"?t.middle:o.horizontal===l.horizontal?t.left:t.right),e.maxWidth=Math.min(n,s-e.left)}var at=Ee({name:"QMenu",inheritAttrs:!1,props:{..._e,...ke,...Se,...He,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:X},self:{type:String,validator:X},offset:{type:Array,validator:Ge},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Me,"click","escapeKey"],setup(e,{slots:t,emit:u,attrs:o}){let l=null,c,n,f;const d=G(),{proxy:s}=d,{$q:r}=s,v=w(null),m=w(!1),a=b(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),h=qe(e,r),{registerTick:J,removeTick:ee}=We(),{registerTimeout:P}=Pe(),{transitionProps:te,transitionStyle:ne}=Be(e),{localScrollTarget:B,changeScrollEvent:oe,unconfigureScrollTarget:le}=Xe(e,R),{anchorEl:x,canShow:ae}=Ue({showing:m}),{hide:L}=Le({showing:m,canShow:ae,handleShow:ce,handleHide:de,hideOnRouteChange:a,processOnMount:!0}),{showPortal:O,hidePortal:z,renderPortal:ie}=Oe(d,v,he),E={anchorEl:x,innerRef:v,onClickOutside(i){if(e.persistent!==!0&&m.value===!0)return L(i),(i.type==="touchstart"||i.target.classList.contains("q-dialog__backdrop"))&&Ie(i),!0}},A=b(()=>Y(e.anchor||(e.cover===!0?"center middle":"bottom start"),r.lang.rtl)),ue=b(()=>e.cover===!0?A.value:Y(e.self||"top start",r.lang.rtl)),se=b(()=>(e.square===!0?" q-menu--square":"")+(h.value===!0?" q-menu--dark q-dark":"")),re=b(()=>e.autoClose===!0?{onClick:fe}:{}),$=b(()=>m.value===!0&&e.persistent!==!0);y($,i=>{i===!0?(je(S),Ye(E)):(V(S),N(E))});function k(){Qe(()=>{let i=v.value;i&&i.contains(document.activeElement)!==!0&&(i=i.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||i.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||i.querySelector("[autofocus], [data-autofocus]")||i,i.focus({preventScroll:!0}))})}function ce(i){if(l=e.noRefocus===!1?document.activeElement:null,ze(D),O(),R(),c=void 0,i!==void 0&&(e.touchPosition||e.contextMenu)){const H=Ae(i);if(H.left!==void 0){const{top:ve,left:me}=x.value.getBoundingClientRect();c={left:H.left-me,top:H.top-ve}}}n===void 0&&(n=y(()=>r.screen.width+"|"+r.screen.height+"|"+e.self+"|"+e.anchor+"|"+r.lang.rtl,T)),e.noFocus!==!0&&document.activeElement.blur(),J(()=>{T(),e.noFocus!==!0&&k()}),P(()=>{r.platform.is.ios===!0&&(f=e.autoClose,v.value.click()),T(),O(!0),u("show",i)},e.transitionDuration)}function de(i){ee(),z(),F(!0),l!==null&&(i===void 0||i.qClickOutside!==!0)&&(((i&&i.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),P(()=>{z(!0),u("hide",i)},e.transitionDuration)}function F(i){c=void 0,n!==void 0&&(n(),n=void 0),(i===!0||m.value===!0)&&($e(D),le(),N(E),V(S)),i!==!0&&(l=null)}function R(){(x.value!==null||e.scrollTarget!==void 0)&&(B.value=Fe(x.value,e.scrollTarget),oe(B.value,T))}function fe(i){f!==!0?(Re(s,i),u("click",i)):f=!1}function D(i){$.value===!0&&e.noFocus!==!0&&Ve(v.value,i.target)!==!0&&k()}function S(i){u("escapeKey"),L(i)}function T(){const i=v.value;i===null||x.value===null||et({el:i,offset:e.offset,anchorEl:x.value,anchorOrigin:A.value,selfOrigin:ue.value,absoluteOffset:c,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function he(){return I(Ke,te.value,()=>m.value===!0?I("div",{role:"menu",...o,ref:v,tabindex:-1,class:["q-menu q-position-engine scroll"+se.value,o.class],style:[o.style,ne.value],...re.value},De(t.default)):null)}return W(F),Object.assign(s,{focus:k,updatePosition:T}),ie}});export{at as Q,_e as a,Ge as b,Xe as c,Ue as d,Ye as e,Y as p,N as r,et as s,lt as u,X as v};