import{u as Ze,az as et,i as b,h as ye,r as w,w as q,m as R,j as C,ap as pe,k as xe,aA as tt,ah as Be,C as Se,n as nt,A as ee,o as lt,q as be,G as fe,s as he,aB as we,y as ot,X as at,I as Le,J as it,aC as Oe,K as We,L as rt,aD as Re,M as ze,aE as De,N as $e,aF as Ae,aG as ut,E as st,aH as ct,aI as Te,U as Qe,aJ as dt,am as ft,aK as ht,aL as mt,H as Fe,x as vt,aM as gt,aN as yt,$ as pt,a as j,ab as Y,a3 as S,a2 as T,aO as Ce,aP as xt,f as me,c as bt,e as St,aQ as ke,a9 as ce,P as Ee,ae as de,aR as wt,F as Tt,aS as Ct}from"./index.334c6e8c.js";import{Q as kt,a as Et,b as _t}from"./QList.9424d716.js";import{c as ve}from"./slides.2c40f945.js";import{r as qt,b as Pt,l as Ht,c as Mt,f as Bt}from"./auth.007680d0.js";function Lt(){return Ze(et)}const Ot={ratio:[String,Number]};function Wt(e,t){return b(()=>{const a=Number(e.ratio||(t!==void 0?t.value:void 0));return isNaN(a)!==!0&&a>0?{paddingBottom:`${100/a}%`}:null})}const Rt=16/9;var zt=ye({name:"QImg",props:{...Ot,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Rt},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:t,emit:a}){const n=w(e.initialRatio),o=Wt(e,n);let r;const l=[w(null),w(e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null)],d=w(0),f=w(!1),u=w(!1),c=b(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),v=b(()=>({width:e.width,height:e.height})),m=b(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),i=b(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));q(()=>y(),P);function y(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function P(s){if(clearTimeout(r),u.value=!1,s===null){f.value=!1,l[0].value=null,l[1].value=null;return}f.value=!0,l[d.value].value=s}function z({target:s}){r!==null&&(clearTimeout(r),n.value=s.naturalHeight===0?.5:s.naturalWidth/s.naturalHeight,H(s,1))}function H(s,E){r===null||E===1e3||(s.complete===!0?L(s):r=setTimeout(()=>{H(s,E+1)},50))}function L(s){r!==null&&(d.value=d.value===1?0:1,l[d.value].value=null,f.value=!1,u.value=!1,a("load",s.currentSrc||s.src))}function D(s){clearTimeout(r),f.value=!1,u.value=!0,l[0].value=null,l[1].value=null,a("error",s)}function O(s,E){return C("div",{class:"q-img__container absolute-full",key:s},E)}function x(s){const E=l[s].value,k={key:"img_"+s,class:m.value,style:i.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...E};return d.value===s?(k.class+=" q-img__image--waiting",Object.assign(k,{onLoad:z,onError:D})):k.class+=" q-img__image--loaded",O("img"+s,C("img",k))}function $(){return f.value!==!0?C("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},xe(t[u.value===!0?"error":"default"])):C("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},t.loading!==void 0?t.loading():e.noSpinner===!0?void 0:[C(tt,{color:e.spinnerColor,size:e.spinnerSize})])}return P(y()),R(()=>{clearTimeout(r),r=null}),()=>{const s=[];return o.value!==null&&s.push(C("div",{key:"filler",style:o.value})),u.value!==!0&&(l[0].value!==null&&s.push(x(0)),l[1].value!==null&&s.push(x(1))),s.push(C(pe,{name:"q-transition--fade"},$)),C("div",{class:c.value,style:v.value,role:"img","aria-label":e.alt},s)}}});const Ie={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Ne({showing:e,avoidEmit:t,configureAnchorEl:a}){const{props:n,proxy:o,emit:r}=be(),l=w(null);let d;function f(i){return l.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const u={};a===void 0&&(Object.assign(u,{hide(i){o.hide(i)},toggle(i){o.toggle(i),i.qAnchorHandled=!0},toggleKey(i){Be(i,13)===!0&&u.toggle(i)},contextClick(i){o.hide(i),Se(i),nt(()=>{o.show(i),i.qAnchorHandled=!0})},prevent:Se,mobileTouch(i){if(u.mobileCleanup(i),f(i)!==!0)return;o.hide(i),l.value.classList.add("non-selectable");const y=i.target;ee(u,"anchor",[[y,"touchmove","mobileCleanup","passive"],[y,"touchend","mobileCleanup","passive"],[y,"touchcancel","mobileCleanup","passive"],[l.value,"contextmenu","prevent","notPassive"]]),d=setTimeout(()=>{o.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){l.value.classList.remove("non-selectable"),clearTimeout(d),e.value===!0&&i!==void 0&&ve()}}),a=function(i=n.contextMenu){if(n.noParentEvent===!0||l.value===null)return;let y;i===!0?o.$q.platform.is.mobile===!0?y=[[l.value,"touchstart","mobileTouch","passive"]]:y=[[l.value,"mousedown","hide","passive"],[l.value,"contextmenu","contextClick","notPassive"]]:y=[[l.value,"click","toggle","passive"],[l.value,"keyup","toggleKey","passive"]],ee(u,"anchor",y)});function c(){fe(u,"anchor")}function v(i){for(l.value=i;l.value.classList.contains("q-anchor--skip");)l.value=l.value.parentNode;a()}function m(){if(n.target===!1||n.target===""||o.$el.parentNode===null)l.value=null;else if(n.target===!0)v(o.$el.parentNode);else{let i=n.target;if(typeof n.target=="string")try{i=document.querySelector(n.target)}catch{i=void 0}i!=null?(l.value=i.$el||i,a()):(l.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return q(()=>n.contextMenu,i=>{l.value!==null&&(c(),a(i))}),q(()=>n.target,()=>{l.value!==null&&c(),m()}),q(()=>n.noParentEvent,i=>{l.value!==null&&(i===!0?c():a())}),lt(()=>{m(),t!==!0&&n.modelValue===!0&&l.value===null&&r("update:modelValue",!1)}),R(()=>{clearTimeout(d),c()}),{anchorEl:l,canShow:f,anchorEvents:u}}function Ue(e,t){const a=w(null);let n;function o(d,f){const u=`${f!==void 0?"add":"remove"}EventListener`,c=f!==void 0?f:n;d!==window&&d[u]("scroll",c,he.passive),window[u]("scroll",c,he.passive),n=f}function r(){a.value!==null&&(o(a.value),a.value=null)}const l=q(()=>e.noParentEvent,()=>{a.value!==null&&(r(),t())});return R(l),{localScrollTarget:a,unconfigureScrollTarget:r,changeScrollEvent:o}}let je;const{notPassiveCapture:te}=he,B=[];function ne(e){clearTimeout(je);const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let a=we.length-1;for(;a>=0;){const n=we[a].$;if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;a--}for(let n=B.length-1;n>=0;n--){const o=B[n];if((o.anchorEl.value===null||o.anchorEl.value.contains(t)===!1)&&(t===document.body||o.innerRef.value!==null&&o.innerRef.value.contains(t)===!1))e.qClickOutside=!0,o.onClickOutside(e);else return}}function Ve(e){B.push(e),B.length===1&&(document.addEventListener("mousedown",ne,te),document.addEventListener("touchstart",ne,te))}function le(e){const t=B.findIndex(a=>a===e);t>-1&&(B.splice(t,1),B.length===0&&(clearTimeout(je),document.removeEventListener("mousedown",ne,te),document.removeEventListener("touchstart",ne,te)))}let _e,qe;function oe(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Ke(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const ge={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{ge[`${e}#ltr`]=e,ge[`${e}#rtl`]=e});function ae(e,t){const a=e.split(" ");return{vertical:a[0],horizontal:ge[`${a[1]}#${t===!0?"rtl":"ltr"}`]}}function Dt(e,t){let{top:a,left:n,right:o,bottom:r,width:l,height:d}=e.getBoundingClientRect();return t!==void 0&&(a-=t[1],n-=t[0],r+=t[1],o+=t[0],l+=t[0],d+=t[1]),{top:a,left:n,right:o,bottom:r,width:l,height:d,middle:n+(o-n)/2,center:a+(r-a)/2}}function $t(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function Ge(e){if(ot.is.ios===!0&&window.visualViewport!==void 0){const d=document.body.style,{offsetLeft:f,offsetTop:u}=window.visualViewport;f!==_e&&(d.setProperty("--q-pe-left",f+"px"),_e=f),u!==qe&&(d.setProperty("--q-pe-top",u+"px"),qe=u)}let t;const{scrollLeft:a,scrollTop:n}=e.el;if(e.absoluteOffset===void 0)t=Dt(e.anchorEl,e.cover===!0?[0,0]:e.offset);else{const{top:d,left:f}=e.anchorEl.getBoundingClientRect(),u=d+e.absoluteOffset.top,c=f+e.absoluteOffset.left;t={top:u,left:c,width:1,height:1,right:c+1,center:u,middle:c,bottom:u+1}}let o={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(o.minWidth=t.width+"px",e.cover===!0&&(o.minHeight=t.height+"px")),Object.assign(e.el.style,o);const r=$t(e.el),l={top:t[e.anchorOrigin.vertical]-r[e.selfOrigin.vertical],left:t[e.anchorOrigin.horizontal]-r[e.selfOrigin.horizontal]};At(l,t,r,e.anchorOrigin,e.selfOrigin),o={top:l.top+"px",left:l.left+"px"},l.maxHeight!==void 0&&(o.maxHeight=l.maxHeight+"px",t.height>l.maxHeight&&(o.minHeight=o.maxHeight)),l.maxWidth!==void 0&&(o.maxWidth=l.maxWidth+"px",t.width>l.maxWidth&&(o.minWidth=o.maxWidth)),Object.assign(e.el.style,o),e.el.scrollTop!==n&&(e.el.scrollTop=n),e.el.scrollLeft!==a&&(e.el.scrollLeft=a)}function At(e,t,a,n,o){const r=a.bottom,l=a.right,d=at(),f=window.innerHeight-d,u=document.body.clientWidth;if(e.top<0||e.top+r>f)if(o.vertical==="center")e.top=t[n.vertical]>f/2?Math.max(0,f-r):0,e.maxHeight=Math.min(r,f);else if(t[n.vertical]>f/2){const c=Math.min(f,n.vertical==="center"?t.center:n.vertical===o.vertical?t.bottom:t.top);e.maxHeight=Math.min(r,c),e.top=Math.max(0,c-r)}else e.top=Math.max(0,n.vertical==="center"?t.center:n.vertical===o.vertical?t.top:t.bottom),e.maxHeight=Math.min(r,f-e.top);if(e.left<0||e.left+l>u)if(e.maxWidth=Math.min(l,u),o.horizontal==="middle")e.left=t[n.horizontal]>u/2?Math.max(0,u-l):0;else if(t[n.horizontal]>u/2){const c=Math.min(u,n.horizontal==="middle"?t.middle:n.horizontal===o.horizontal?t.right:t.left);e.maxWidth=Math.min(l,c),e.left=Math.max(0,c-e.maxWidth)}else e.left=Math.max(0,n.horizontal==="middle"?t.middle:n.horizontal===o.horizontal?t.left:t.right),e.maxWidth=Math.min(l,u-e.left)}var Qt=ye({name:"QMenu",inheritAttrs:!1,props:{...Ie,...Le,...it,...Oe,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:oe},self:{type:String,validator:oe},offset:{type:Array,validator:Ke},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...We,"click","escape-key"],setup(e,{slots:t,emit:a,attrs:n}){let o=null,r,l,d;const f=be(),{proxy:u}=f,{$q:c}=u,v=w(null),m=w(!1),i=b(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),y=rt(e,c),{registerTick:P,removeTick:z}=Re(),{registerTimeout:H}=ze(),{transition:L,transitionStyle:D}=De(e,m),{localScrollTarget:O,changeScrollEvent:x,unconfigureScrollTarget:$}=Ue(e,g),{anchorEl:s,canShow:E}=Ne({showing:m}),{hide:k}=$e({showing:m,canShow:E,handleShow:J,handleHide:ue,hideOnRouteChange:i,processOnMount:!0}),{showPortal:A,hidePortal:Q,renderPortal:ie}=Ae(f,v,Je),F={anchorEl:s,innerRef:v,onClickOutside(h){if(e.persistent!==!0&&m.value===!0)return k(h),(h.type==="touchstart"||h.target.classList.contains("q-dialog__backdrop"))&&Fe(h),!0}},V=b(()=>ae(e.anchor||(e.cover===!0?"center middle":"bottom start"),c.lang.rtl)),K=b(()=>e.cover===!0?V.value:ae(e.self||"top start",c.lang.rtl)),M=b(()=>(e.square===!0?" q-menu--square":"")+(y.value===!0?" q-menu--dark q-dark":"")),re=b(()=>e.autoClose===!0?{onClick:N}:{}),G=b(()=>m.value===!0&&e.persistent!==!0);q(G,h=>{h===!0?(ht(W),Ve(F)):(Te(W),le(F))});function I(){ft(()=>{let h=v.value;h&&h.contains(document.activeElement)!==!0&&(h=h.querySelector("[autofocus], [data-autofocus]")||h,h.focus({preventScroll:!0}))})}function J(h){if(o=e.noRefocus===!1?document.activeElement:null,ut(_),A(),g(),r=void 0,h!==void 0&&(e.touchPosition||e.contextMenu)){const se=st(h);if(se.left!==void 0){const{top:Xe,left:Ye}=s.value.getBoundingClientRect();r={left:se.left-Ye,top:se.top-Xe}}}l===void 0&&(l=q(()=>c.screen.width+"|"+c.screen.height+"|"+e.self+"|"+e.anchor+"|"+c.lang.rtl,U)),e.noFocus!==!0&&document.activeElement.blur(),P(()=>{U(),e.noFocus!==!0&&I()}),H(()=>{c.platform.is.ios===!0&&(d=e.autoClose,v.value.click()),U(),A(!0),a("show",h)},e.transitionDuration)}function ue(h){z(),Q(),X(!0),o!==null&&(h===void 0||h.qClickOutside!==!0)&&(o.focus(),o=null),H(()=>{Q(!0),a("hide",h)},e.transitionDuration)}function X(h){r=void 0,l!==void 0&&(l(),l=void 0),(h===!0||m.value===!0)&&(ct(_),$(),le(F),Te(W)),h!==!0&&(o=null)}function g(){(s.value!==null||e.scrollTarget!==void 0)&&(O.value=Qe(s.value,e.scrollTarget),x(O.value,U))}function N(h){d!==!0?(dt(u,h),a("click",h)):d=!1}function _(h){G.value===!0&&e.noFocus!==!0&&mt(v.value,h.target)!==!0&&I()}function W(h){a("escape-key"),k(h)}function U(){const h=v.value;h===null||s.value===null||Ge({el:h,offset:e.offset,anchorEl:s.value,anchorOrigin:V.value,selfOrigin:K.value,absoluteOffset:r,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Je(){return C(pe,{name:L.value,appear:!0},()=>m.value===!0?C("div",{role:"menu",...n,ref:v,tabindex:-1,class:["q-menu q-position-engine scroll"+M.value,n.class],style:[n.style,D.value],...re.value},xe(t.default)):null)}return R(X),Object.assign(u,{focus:I,updatePosition:U}),ie}}),Ft=ye({name:"QTooltip",inheritAttrs:!1,props:{...Ie,...Le,...Oe,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:oe},self:{type:String,default:"top middle",validator:oe},offset:{type:Array,default:()=>[14,14],validator:Ke},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...We],setup(e,{slots:t,emit:a,attrs:n}){let o,r;const l=be(),{proxy:{$q:d}}=l,f=w(null),u=w(!1),c=b(()=>ae(e.anchor,d.lang.rtl)),v=b(()=>ae(e.self,d.lang.rtl)),m=b(()=>e.persistent!==!0),{registerTick:i,removeTick:y}=Re(),{registerTimeout:P}=ze(),{transition:z,transitionStyle:H}=De(e,u),{localScrollTarget:L,changeScrollEvent:D,unconfigureScrollTarget:O}=Ue(e,J),{anchorEl:x,canShow:$,anchorEvents:s}=Ne({showing:u,configureAnchorEl:I}),{show:E,hide:k}=$e({showing:u,canShow:$,handleShow:F,handleHide:V,hideOnRouteChange:m,processOnMount:!0});Object.assign(s,{delayShow:re,delayHide:G});const{showPortal:A,hidePortal:Q,renderPortal:ie}=Ae(l,f,X);if(d.platform.is.mobile===!0){const g={anchorEl:x,innerRef:f,onClickOutside(_){return k(_),_.target.classList.contains("q-dialog__backdrop")&&Fe(_),!0}},N=b(()=>e.modelValue===null&&e.persistent!==!0&&u.value===!0);q(N,_=>{(_===!0?Ve:le)(g)}),R(()=>{le(g)})}function F(g){A(),i(()=>{r=new MutationObserver(()=>M()),r.observe(f.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),M(),J()}),o===void 0&&(o=q(()=>d.screen.width+"|"+d.screen.height+"|"+e.self+"|"+e.anchor+"|"+d.lang.rtl,M)),P(()=>{A(!0),a("show",g)},e.transitionDuration)}function V(g){y(),Q(),K(),P(()=>{Q(!0),a("hide",g)},e.transitionDuration)}function K(){r!==void 0&&(r.disconnect(),r=void 0),o!==void 0&&(o(),o=void 0),O(),fe(s,"tooltipTemp")}function M(){const g=f.value;x.value===null||!g||Ge({el:g,offset:e.offset,anchorEl:x.value,anchorOrigin:c.value,selfOrigin:v.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function re(g){if(d.platform.is.mobile===!0){ve(),document.body.classList.add("non-selectable");const N=x.value,_=["touchmove","touchcancel","touchend","click"].map(W=>[N,W,"delayHide","passiveCapture"]);ee(s,"tooltipTemp",_)}P(()=>{E(g)},e.delay)}function G(g){d.platform.is.mobile===!0&&(fe(s,"tooltipTemp"),ve(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),P(()=>{k(g)},e.hideDelay)}function I(){if(e.noParentEvent===!0||x.value===null)return;const g=d.platform.is.mobile===!0?[[x.value,"touchstart","delayShow","passive"]]:[[x.value,"mouseenter","delayShow","passive"],[x.value,"mouseleave","delayHide","passive"]];ee(s,"anchor",g)}function J(){if(x.value!==null||e.scrollTarget!==void 0){L.value=Qe(x.value,e.scrollTarget);const g=e.noParentEvent===!0?M:k;D(L.value,g)}}function ue(){return u.value===!0?C("div",{...n,ref:f,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",n.class],style:[n.style,H.value],role:"complementary"},xe(t.default)):null}function X(){return C(pe,{name:z.value,appear:!0},ue)}return R(K),Object.assign(l.proxy,{updatePosition:M}),ie}});function Pe(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var He=vt({name:"close-popup",beforeMount(e,{value:t}){const a={depth:Pe(t),handler(n){a.depth!==0&&setTimeout(()=>{const o=gt(e);o!==void 0&&yt(o,n,a.depth)})},handlerKey(n){Be(n,13)===!0&&a.handler(n)}};e.__qclosepopup=a,e.addEventListener("click",a.handler),e.addEventListener("keyup",a.handlerKey)},updated(e,{value:t,oldValue:a}){t!==a&&(e.__qclosepopup.depth=Pe(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});function It(e){const t=document.createElement("textarea");t.value=e,t.contentEditable="true",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();const a=document.execCommand("copy");return t.remove(),a}function Nt(e){return navigator.clipboard!==void 0?navigator.clipboard.writeText(e):new Promise((t,a)=>{const n=It(e);n?t(!0):a(n)})}const Ut=me("div",{class:"text-h5"},"Bilder",-1),jt={class:"row q-gutter-md"},Vt={class:"absolute-top-right q-pa-xs"},nn=pt({__name:"ImagesDialog",props:{show:{type:Boolean,required:!0}},emits:["update:show"],setup(e,{emit:t}){const a=e,n=qt(Pt,"/images"),o=w([]);Ht(n).then(c=>{c.prefixes.forEach(v=>{}),c.items.forEach(async v=>{const m=await Mt(v.fullPath);o.value.push({imageUrl:m,fullPath:v.fullPath})})}).catch(c=>{});const r=Lt(),l=w(!1);q(()=>a.show,c=>{l.value=c});const d=()=>{l.value=!1,t("update:show",l.value)},f=async c=>{Nt(c).then(()=>{r.notify({color:"success",position:"bottom",message:"Bilden l\xE4nken har kopierats!"})}).catch(()=>{console.log("fail!")})},u=async c=>{await Bt(c)?r.notify({color:"success",position:"bottom",message:"Bilden har raderats!"}):r.notify({color:"error",position:"bottom",message:"Misslyckades radera bilden!"})};return(c,v)=>(j(),Y(Ct,{padding:"",modelValue:l.value,"onUpdate:modelValue":v[0]||(v[0]=m=>l.value=m),onBeforeHide:d,maximized:""},{default:S(()=>[T(ke,{class:"q-pa-lg"},{default:S(()=>[T(Ce,null,{default:S(()=>[Ut]),_:1}),T(xt),T(Ce,null,{default:S(()=>[me("div",jt,[(j(!0),bt(Tt,null,St(o.value,(m,i)=>(j(),Y(ke,{class:"relative-position",key:i,style:{"min-width":"300px",height:"auto !important"}},{default:S(()=>[T(zt,{src:m.imageUrl},null,8,["src"]),T(ce,{color:"white","text-color":"black",unelevated:"",size:"sm",label:"mer",style:{position:"absolute",top:"10px",right:"10px"}},{default:S(()=>[T(Qt,{"touch-position":""},{default:S(()=>[T(kt,{style:{"min-width":"160px"}},{default:S(()=>[Ee((j(),Y(Et,{clickable:"",onClick:y=>u(m.fullPath)},{default:S(()=>[T(_t,null,{default:S(()=>[de("Radera")]),_:1})]),_:2},1032,["onClick"])),[[He]])]),_:2},1024)]),_:2},1024)]),_:2},1024),T(wt,null,{default:S(()=>[T(ce,{color:"primary",unelevated:"",class:"full-width",onClick:y=>f(m.imageUrl)},{default:S(()=>[de("Kopiera l\xE4nk ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))])]),_:1}),me("div",Vt,[Ee((j(),Y(ce,{round:"",flat:"",color:"grey-7",icon:"clear",onClick:d},{default:S(()=>[T(Ft,null,{default:S(()=>[de("St\xE4ng")]),_:1})]),_:1})),[[He]])])]),_:1})]),_:1},8,["modelValue"]))}});let Z;const Kt=new Uint8Array(16);function Gt(){if(!Z&&(Z=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Z))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Z(Kt)}const p=[];for(let e=0;e<256;++e)p.push((e+256).toString(16).slice(1));function Jt(e,t=0){return(p[e[t+0]]+p[e[t+1]]+p[e[t+2]]+p[e[t+3]]+"-"+p[e[t+4]]+p[e[t+5]]+"-"+p[e[t+6]]+p[e[t+7]]+"-"+p[e[t+8]]+p[e[t+9]]+"-"+p[e[t+10]]+p[e[t+11]]+p[e[t+12]]+p[e[t+13]]+p[e[t+14]]+p[e[t+15]]).toLowerCase()}const Xt=typeof crypto!="undefined"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var Me={randomUUID:Xt};function ln(e,t,a){if(Me.randomUUID&&!t&&!e)return Me.randomUUID();e=e||{};const n=e.random||(e.rng||Gt)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,t){a=a||0;for(let o=0;o<16;++o)t[a+o]=n[o];return t}return Jt(n)}export{nn as _,Lt as u,ln as v};