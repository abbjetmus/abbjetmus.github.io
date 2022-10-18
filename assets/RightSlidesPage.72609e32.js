import{h as I,r as v,l as N,ac as R,a as n,ad as d,a3 as a,f as l,a2 as s,ae as p,a9 as f,c as _,e as U,a4 as k,F as E,aa as L,a6 as w,g as h,a5 as T,a8 as j}from"./index.56596687.js";import{u as P,a as $,Q as D,b as H,c as Q,d as M}from"./useAuthValidations.c62abfe1.js";import{Q as z}from"./QPage.dec982fa.js";import{B as A,u as G}from"./index.8ffea743.js";import{u as J}from"./slides.74b2a72d.js";import"./vue-quill.snow.3ff57131.js";import"./auth.17d318c2.js";const K={class:"q-mb-md row q-col-gutter-md"},O={class:"row col-4 align-items"},W=l("div",{class:"text-h5 q-mr-lg"},"H\xF6ger Sektion Slides",-1),X=l("div",{class:"text-h5 col-8 text-center"},null,-1),Y={class:"row q-col-gutter-md"},Z={class:"col-4"},ee={class:"col-8 row justify-center"},te={class:"full-width"},le={class:"row justify-between"},ae={class:"col-auto"},se={key:0},oe={key:1},fe=I({__name:"RightSlidesPage",setup(ie){const q=v({name:"blotFormatter",module:A,options:{}}),c=G(),u=J(),{form:m,validInputs:r,loading:g}=P(),e=v(null),y=v(null),x=()=>{r.value=!1,m.value!=null&&m.value.validate().then(async o=>{if(o)if(g.value=!0,r.value=!0,S.value){let i=await u.addRightSlide(e.value);e.value.id=i.id,c.notify({color:"success",position:"bottom",message:"Sliden har lagts till!"})}else await u.updateRightSlide(e.value),c.notify({color:"success",position:"bottom",message:"Sliden har uppdaterats!"});else r.value=!1;g.value=!1}).catch(o=>{r.value=!1})},S=N(()=>{var o;return((o=e.value)==null?void 0:o.id)==null}),V=o=>{e.value=o,y.value.setContents(e.value.content,"api")},C=()=>{e.value={title:"",content:"",time:5}},B=async()=>{e.value!=null&&(await u.deleteRightSlide(e.value.id),c.notify({color:"success",position:"bottom",message:"Sliden har tagits bort!"}),e.value=null)};return(o,i)=>{const F=R("QuillEditor");return n(),d(z,{class:"q-pa-md"},{default:a(()=>[l("div",K,[l("div",O,[W,s(f,{color:"primary",unelevated:"",class:"col",onClick:C},{default:a(()=>[p("Ny Slide ")]),_:1})]),X]),l("div",Y,[l("div",Z,[s($,{bordered:"",separator:"",clickable:""},{default:a(()=>[(n(!0),_(E,null,U(k(u).rightSlides,t=>{var b;return n(),d(H,{class:"q-py-md",clickable:"",key:t.id,active:((b=e.value)==null?void 0:b.id)==t.id,onClick:ne=>V(t)},{default:a(()=>[s(Q,null,{default:a(()=>[s(M,{lines:"2"},{default:a(()=>[p(T(t.title),1)]),_:2},1024)]),_:2},1024),s(Q,{side:""},{default:a(()=>[s(j,{name:"chevron_right"})]),_:1})]),_:2},1032,["active","onClick"])}),128))]),_:1})]),l("div",ee,[l("div",te,[e.value?(n(),d(D,{key:0,ref_key:"form",ref:m,onSubmit:L(x,["prevent"]),greedy:""},{default:a(()=>[e.value?(n(),d(w,{key:0,label:"Titel",modelValue:e.value.title,"onUpdate:modelValue":i[0]||(i[0]=t=>e.value.title=t),outlined:"",required:"",rules:[t=>t.length>0]},null,8,["modelValue","rules"])):h("",!0),e.value?(n(),d(w,{key:1,label:"Visningstid f\xF6r sliden",modelValue:e.value.time,"onUpdate:modelValue":i[1]||(i[1]=t=>e.value.time=t),outlined:"",required:"",type:"number",class:"q-mb-lg"},null,8,["modelValue"])):h("",!0),l("div",null,[s(F,{ref_key:"editor",ref:y,modules:q.value,style:{"min-height":"400px"},theme:"snow",toolbar:"full",content:e.value.content,"onUpdate:content":i[2]||(i[2]=t=>e.value.content=t),contentType:"html"},null,8,["modules","content"])]),l("div",le,[l("div",ae,[s(f,{color:"green-5",style:{width:"200px"},class:"q-mt-md q-mr-md",type:"submit"},{default:a(()=>[k(S)?(n(),_("span",se,"Skapa")):(n(),_("span",oe,"Uppdatera"))]),_:1})]),s(f,{color:"red",style:{width:"200px"},class:"q-mt-md col-auto",onClick:B},{default:a(()=>[p("Radera")]),_:1})])]),_:1},8,["onSubmit"])):h("",!0)])])])]),_:1})}}});export{fe as default};
