import{z as ae,V as ne,W as se,aS as ue,X as le,r as w,v as l,Y as ie,aT as re,Z as ce,aU as fe,_ as de,aV as ve,w as A,aW as ge,R as he,aX as me,aY as M,a5 as ye,aZ as Pe,q as R,A as Te,a_ as ke,C as Ce,g as Se,a$ as xe,aA as qe,b0 as Oe,U as be}from"./index.22e0c437.js";import{a as Be,v as D,b as Ee,c as Fe,d as we,p as H,r as K,s as Ae,e as Me}from"./position-engine.30b6c244.js";var He=ae({name:"QMenu",inheritAttrs:!1,props:{...Be,...ne,...se,...ue,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:D},self:{type:String,validator:D},offset:{type:Array,validator:Ee},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...le,"click","escapeKey"],setup(t,{slots:W,emit:c,attrs:d}){let n=null,f,i,v;const T=Se(),{proxy:g}=T,{$q:o}=g,a=w(null),s=w(!1),_=l(()=>t.persistent!==!0&&t.noRouteDismiss!==!0),Q=ie(t,o),{registerTick:U,removeTick:V}=re(),{registerTimeout:k}=ce(),{transitionProps:X,transitionStyle:Y}=fe(t),{localScrollTarget:C,changeScrollEvent:Z,unconfigureScrollTarget:$}=Fe(t,E),{anchorEl:u,canShow:j}=we({showing:s}),{hide:S}=de({showing:s,canShow:j,handleShow:J,handleHide:N,hideOnRouteChange:_,processOnMount:!0}),{showPortal:x,hidePortal:q,renderPortal:z}=ve(T,a,ee),h={anchorEl:u,innerRef:a,onClickOutside(e){if(t.persistent!==!0&&s.value===!0)return S(e),(e.type==="touchstart"||e.target.classList.contains("q-dialog__backdrop"))&&be(e),!0}},O=l(()=>H(t.anchor||(t.cover===!0?"center middle":"bottom start"),o.lang.rtl)),I=l(()=>t.cover===!0?O.value:H(t.self||"top start",o.lang.rtl)),L=l(()=>(t.square===!0?" q-menu--square":"")+(Q.value===!0?" q-menu--dark q-dark":"")),G=l(()=>t.autoClose===!0?{onClick:p}:{}),b=l(()=>s.value===!0&&t.persistent!==!0);A(b,e=>{e===!0?(xe(y),Me(h)):(M(y),K(h))});function m(){qe(()=>{let e=a.value;e&&e.contains(document.activeElement)!==!0&&(e=e.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||e.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||e.querySelector("[autofocus], [data-autofocus]")||e,e.focus({preventScroll:!0}))})}function J(e){if(n=t.noRefocus===!1?document.activeElement:null,ge(F),x(),E(),f=void 0,e!==void 0&&(t.touchPosition||t.contextMenu)){const P=he(e);if(P.left!==void 0){const{top:te,left:oe}=u.value.getBoundingClientRect();f={left:P.left-oe,top:P.top-te}}}i===void 0&&(i=A(()=>o.screen.width+"|"+o.screen.height+"|"+t.self+"|"+t.anchor+"|"+o.lang.rtl,r)),t.noFocus!==!0&&document.activeElement.blur(),U(()=>{r(),t.noFocus!==!0&&m()}),k(()=>{o.platform.is.ios===!0&&(v=t.autoClose,a.value.click()),r(),x(!0),c("show",e)},t.transitionDuration)}function N(e){V(),q(),B(!0),n!==null&&(e===void 0||e.qClickOutside!==!0)&&(((e&&e.type.indexOf("key")===0?n.closest('[tabindex]:not([tabindex^="-"])'):void 0)||n).focus(),n=null),k(()=>{q(!0),c("hide",e)},t.transitionDuration)}function B(e){f=void 0,i!==void 0&&(i(),i=void 0),(e===!0||s.value===!0)&&(me(F),$(),K(h),M(y)),e!==!0&&(n=null)}function E(){(u.value!==null||t.scrollTarget!==void 0)&&(C.value=ye(u.value,t.scrollTarget),Z(C.value,r))}function p(e){v!==!0?(Pe(g,e),c("click",e)):v=!1}function F(e){b.value===!0&&t.noFocus!==!0&&Oe(a.value,e.target)!==!0&&m()}function y(e){c("escapeKey"),S(e)}function r(){const e=a.value;e===null||u.value===null||Ae({el:e,offset:t.offset,anchorEl:u.value,anchorOrigin:O.value,selfOrigin:I.value,absoluteOffset:f,fit:t.fit,cover:t.cover,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function ee(){return R(ke,X.value,()=>s.value===!0?R("div",{role:"menu",...d,ref:a,tabindex:-1,class:["q-menu q-position-engine scroll"+L.value,d.class],style:[d.style,Y.value],...G.value},Te(W.default)):null)}return Ce(B),Object.assign(g,{focus:m,updatePosition:r}),z}});export{He as Q};
