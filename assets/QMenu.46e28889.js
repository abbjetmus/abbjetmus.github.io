import{q as ae,R as ne,S as se,aQ as ue,T as le,r as w,t as l,U as ie,aR as re,V as ce,aS as fe,W as de,aT as ve,w as R,aW as ge,O as he,aX as me,aY as M,a1 as Te,aZ as ye,v as A,x as Pe,aw as Se,z as ke,g as xe,as as Ce,a_ as Oe,a$ as qe,Q as be}from"./index.ae99ad44.js";import{a as Be,v as D,b as Ee,c as Fe,d as we,p as H,r as K,s as Re,e as Me}from"./position-engine.8177d215.js";var He=ae({name:"QMenu",inheritAttrs:!1,props:{...Be,...ne,...se,...ue,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:D},self:{type:String,validator:D},offset:{type:Array,validator:Ee},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...le,"click","escapeKey"],setup(t,{slots:Q,emit:c,attrs:d}){let n=null,f,i,v;const P=xe(),{proxy:g}=P,{$q:o}=g,a=w(null),s=w(!1),W=l(()=>t.persistent!==!0&&t.noRouteDismiss!==!0),_=ie(t,o),{registerTick:U,removeTick:$}=re(),{registerTimeout:S}=ce(),{transitionProps:j,transitionStyle:z}=fe(t),{localScrollTarget:k,changeScrollEvent:I,unconfigureScrollTarget:L}=Fe(t,E),{anchorEl:u,canShow:V}=we({showing:s}),{hide:x}=de({showing:s,canShow:V,handleShow:J,handleHide:N,hideOnRouteChange:W,processOnMount:!0}),{showPortal:C,hidePortal:O,renderPortal:X}=ve(P,a,ee),h={anchorEl:u,innerRef:a,onClickOutside(e){if(t.persistent!==!0&&s.value===!0)return x(e),(e.type==="touchstart"||e.target.classList.contains("q-dialog__backdrop"))&&be(e),!0}},q=l(()=>H(t.anchor||(t.cover===!0?"center middle":"bottom start"),o.lang.rtl)),Y=l(()=>t.cover===!0?q.value:H(t.self||"top start",o.lang.rtl)),Z=l(()=>(t.square===!0?" q-menu--square":"")+(_.value===!0?" q-menu--dark q-dark":"")),G=l(()=>t.autoClose===!0?{onClick:p}:{}),b=l(()=>s.value===!0&&t.persistent!==!0);R(b,e=>{e===!0?(Oe(T),Me(h)):(M(T),K(h))});function m(){Ce(()=>{let e=a.value;e&&e.contains(document.activeElement)!==!0&&(e=e.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||e.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||e.querySelector("[autofocus], [data-autofocus]")||e,e.focus({preventScroll:!0}))})}function J(e){if(n=t.noRefocus===!1?document.activeElement:null,ge(F),C(),E(),f=void 0,e!==void 0&&(t.touchPosition||t.contextMenu)){const y=he(e);if(y.left!==void 0){const{top:te,left:oe}=u.value.getBoundingClientRect();f={left:y.left-oe,top:y.top-te}}}i===void 0&&(i=R(()=>o.screen.width+"|"+o.screen.height+"|"+t.self+"|"+t.anchor+"|"+o.lang.rtl,r)),t.noFocus!==!0&&document.activeElement.blur(),U(()=>{r(),t.noFocus!==!0&&m()}),S(()=>{o.platform.is.ios===!0&&(v=t.autoClose,a.value.click()),r(),C(!0),c("show",e)},t.transitionDuration)}function N(e){$(),O(),B(!0),n!==null&&(e===void 0||e.qClickOutside!==!0)&&(((e&&e.type.indexOf("key")===0?n.closest('[tabindex]:not([tabindex^="-"])'):void 0)||n).focus(),n=null),S(()=>{O(!0),c("hide",e)},t.transitionDuration)}function B(e){f=void 0,i!==void 0&&(i(),i=void 0),(e===!0||s.value===!0)&&(me(F),L(),K(h),M(T)),e!==!0&&(n=null)}function E(){(u.value!==null||t.scrollTarget!==void 0)&&(k.value=Te(u.value,t.scrollTarget),I(k.value,r))}function p(e){v!==!0?(ye(g,e),c("click",e)):v=!1}function F(e){b.value===!0&&t.noFocus!==!0&&qe(a.value,e.target)!==!0&&m()}function T(e){c("escapeKey"),x(e)}function r(){const e=a.value;e===null||u.value===null||Re({el:e,offset:t.offset,anchorEl:u.value,anchorOrigin:q.value,selfOrigin:Y.value,absoluteOffset:f,fit:t.fit,cover:t.cover,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function ee(){return A(Se,j.value,()=>s.value===!0?A("div",{role:"menu",...d,ref:a,tabindex:-1,class:["q-menu q-position-engine scroll"+Z.value,d.class],style:[d.style,z.value],...G.value},Pe(Q.default)):null)}return ke(B),Object.assign(g,{focus:m,updatePosition:r}),X}});export{He as Q};
