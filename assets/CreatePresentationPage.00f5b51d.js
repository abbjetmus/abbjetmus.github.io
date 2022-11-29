import{$ as R,r as b,i as $,a as n,ab as m,a3 as s,f as i,a2 as t,ae as c,a9 as v,a6 as w,c as S,e as j,a4 as f,F as E,aa as L,g as Q,a5 as D,a8 as T}from"./index.334c6e8c.js";import{Q as M,a as O,b as x,c as z}from"./QList.9424d716.js";import{u as A,Q as G}from"./useAuthValidations.106d01a1.js";import{Q as H}from"./QPage.44080900.js";import{u as J,_ as K,v as W}from"./v4.d569de57.js";import{u as X}from"./slides.2c40f945.js";import{E as Y}from"./style.54d09c95.js";import{a as Z}from"./auth.007680d0.js";const ee={class:"row q-col-gutter-md"},ae={class:"col-3"},le={class:"row justify-between q-mb-md"},te=i("div",{class:"text-h5 q-mr-lg"},"Slides",-1),se={class:"q-my-md"},oe={class:"col-9 row justify-center"},ie={class:"full-width full-height"},ne={class:"row justify-between q-mb-md"},de={class:"col-auto"},ue={key:0},re={key:1},be=R({__name:"CreatePresentationPage",setup(me){const p=J(),u=X(),{form:_,validInputs:r,loading:V}=A(),g=b(!1),k=b(""),e=b(null),C=()=>{r.value=!1,_.value!=null&&_.value.validate().then(async o=>{if(o)if(V.value=!0,r.value=!0,y.value){let l=await u.addRightSlide(e.value);e.value.id=l.id,p.notify({color:"success",position:"bottom",message:"Sliden har lagts till!"})}else await u.updateRightSlide(e.value),p.notify({color:"success",position:"bottom",message:"Sliden har uppdaterats!"});else r.value=!1;V.value=!1}).catch(o=>{r.value=!1})},y=$(()=>{var o;return((o=e.value)==null?void 0:o.id)==null}),I=o=>{e.value=o},U=()=>{e.value={title:"",content:"Ny slide",time:5}},N=async()=>{e.value!=null&&(await u.deleteRightSlide(e.value.id),p.notify({color:"success",position:"bottom",message:"Sliden har tagits bort!"}),e.value=null)},B=async(o,l)=>{const a=await Promise.all(o.map(d=>new Promise((q,P)=>{const F=W();Z(d,"images",F).then(h=>q(h)).catch(h=>P(h))})));l(a.map(d=>d))};return(o,l)=>(n(),m(H,{class:"q-pa-md"},{default:s(()=>[i("div",ee,[i("div",ae,[i("div",le,[te,t(v,{color:"primary",unelevated:"",class:"col",onClick:U},{default:s(()=>[c("Ny Slide ")]),_:1})]),i("div",se,[t(w,{outlined:"",modelValue:k.value,"onUpdate:modelValue":l[0]||(l[0]=a=>k.value=a),label:"Presentationens namn"},null,8,["modelValue"])]),t(M,{bordered:"",separator:"",clickable:""},{default:s(()=>[(n(!0),S(E,null,j(f(u).rightSlides,a=>{var d;return n(),m(O,{class:"q-py-md",clickable:"",key:a.id,active:((d=e.value)==null?void 0:d.id)==a.id,onClick:q=>I(a)},{default:s(()=>[t(x,null,{default:s(()=>[t(z,{lines:"2"},{default:s(()=>[c(D(a.title),1)]),_:2},1024)]),_:2},1024),t(x,{side:""},{default:s(()=>[t(T,{name:"chevron_right"})]),_:1})]),_:2},1032,["active","onClick"])}),128))]),_:1})]),i("div",oe,[i("div",ie,[e.value?(n(),m(G,{key:0,ref_key:"form",ref:_,onSubmit:L(C,["prevent"]),greedy:""},{default:s(()=>[i("div",ne,[i("div",de,[t(v,{color:"green-5",style:{width:"200px"},type:"submit"},{default:s(()=>[f(y)?(n(),S("span",ue,"Skapa")):(n(),S("span",re,"Uppdatera"))]),_:1}),t(v,{class:"q-ml-md",style:{width:"200px"},color:"primary",onClick:l[1]||(l[1]=a=>g.value=!0)},{default:s(()=>[c("Bilder ")]),_:1})]),f(y)?Q("",!0):(n(),m(v,{key:0,color:"red",style:{width:"200px"},class:"col-auto",onClick:N},{default:s(()=>[c("Radera")]),_:1}))]),t(w,{label:"Titel",modelValue:e.value.title,"onUpdate:modelValue":l[2]||(l[2]=a=>e.value.title=a),outlined:"",required:"",class:"q-mb-md"},null,8,["modelValue"]),t(w,{label:"Visningstid f\xF6r sliden",modelValue:e.value.time,"onUpdate:modelValue":l[3]||(l[3]=a=>e.value.time=a),outlined:"",required:"",type:"number",class:"q-mb-lg"},null,8,["modelValue"]),i("div",null,[t(f(Y),{modelValue:e.value.content,"onUpdate:modelValue":l[4]||(l[4]=a=>e.value.content=a),language:"en-US",onOnUploadImg:B},null,8,["modelValue"])])]),_:1},8,["onSubmit"])):Q("",!0)])])]),t(K,{show:g.value,"onUpdate:show":l[5]||(l[5]=a=>g.value=a)},null,8,["show"])]),_:1}))}});export{be as default};