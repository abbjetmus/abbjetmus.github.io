import{A as B,X as C,aF as _,Z as y,aG as I,x as c,a2 as z,g as R,t as o,ai as s,aH as w,aI as V,V as $}from"./index.308153eb.js";const b=["B","KB","MB","GB","TB","PB"];function M(e){let l=0;for(;parseInt(e,10)>=1024&&l<b.length-1;)e/=1024,++l;return`${e.toFixed(1)}${b[l]}`}function P(e,l,a){return a<=l?l:Math.min(a,Math.max(l,e))}function Q(e,l,a){if(a<=l)return l;const n=a-l+1;let i=l+(e-l)%n;return i<l&&(i=n+i),i===0?0:i}const A={xs:8,sm:10,md:14,lg:20,xl:24};var K=B({name:"QChip",props:{...C,..._,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:l,emit:a}){const{proxy:{$q:n}}=R(),i=y(e,n),f=I(e,A),m=c(()=>e.selected===!0||e.icon!==void 0),g=c(()=>e.selected===!0?e.iconSelected||n.iconSet.chip.selected:e.icon),q=c(()=>e.iconRemove||n.iconSet.chip.remove),u=c(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),S=c(()=>{const t=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(t?` text-${t} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(u.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(i.value===!0?" q-chip--dark q-dark":"")}),d=c(()=>{const t=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},r={...t,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||n.lang.label.remove};return{chip:t,remove:r}});function k(t){t.keyCode===13&&h(t)}function h(t){e.disable||(a("update:selected",!e.selected),a("click",t))}function v(t){(t.keyCode===void 0||t.keyCode===13)&&($(t),e.disable===!1&&(a("update:modelValue",!1),a("remove")))}function x(){const t=[];u.value===!0&&t.push(o("div",{class:"q-focus-helper"})),m.value===!0&&t.push(o(s,{class:"q-chip__icon q-chip__icon--left",name:g.value}));const r=e.label!==void 0?[o("div",{class:"ellipsis"},[e.label])]:void 0;return t.push(o("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},w(l.default,r))),e.iconRight&&t.push(o(s,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&t.push(o(s,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:q.value,...d.value.remove,onClick:v,onKeyup:v})),t}return()=>{if(e.modelValue===!1)return;const t={class:S.value,style:f.value};return u.value===!0&&Object.assign(t,d.value.chip,{onClick:h,onKeyup:k}),z("div",t,x(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[V,e.ripple]])}}});export{K as Q,P as b,M as h,Q as n};