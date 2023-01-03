import{a8 as P,r as k,t as $,k as n,ai as u,ac as s,n as i,ab as l,al as m,ag as c,l as b,m as j,u as p,F as E,ah as L,p as Q,ae as V,ad as D,af as T}from"./index.ae99ad44.js";import{Q as H}from"./QItemLabel.69499165.js";import{Q as M,a as q}from"./QItem.4a94c215.js";import{Q as O}from"./QList.10a153e4.js";import{u as z,Q as A}from"./useAuthValidations.a8b861ea.js";import{Q as G}from"./QPage.19f16d6a.js";import{u as J}from"./position-engine.8177d215.js";import{u as K}from"./slides.49ccb33e.js";import{_ as W}from"./ImagesDialog.ce6e48e6.js";import{E as X}from"./style.f3f92b51.js";import{a as Y,e as Z,d as ee,c as te}from"./auth.da776fb7.js";import{v as ae}from"./v4.c4aae7a6.js";import"./selection.dacc8383.js";import"./QTooltip.76f93be4.js";import"./ClosePopup.f83d1bdb.js";import"./QMenu.46e28889.js";const le={class:"row q-col-gutter-md"},se={class:"col-3"},oe={class:"row justify-between q-mb-md"},ie=i("div",{class:"text-h5 q-mr-lg"},"H\xF6ger Sektion Slides",-1),ne={class:"col-9 row justify-center"},de={class:"full-width full-height"},re={class:"row justify-between q-mb-md"},ue={class:"col-auto"},me={key:0},ce={key:1},Ue=P({__name:"RightSlidesPage",setup(pe){const f=J(),v=K(),{form:_,validInputs:r,loading:w}=z(),g=k(!1),x=Y(Z(ee,"right-slides")),e=k(null),C=()=>{r.value=!1,_.value!=null&&_.value.validate().then(async o=>{if(o)if(w.value=!0,r.value=!0,h.value){let a=await v.addRightSlide(e.value);e.value.id=a.id,f.notify({color:"success",position:"bottom",message:"Sliden har lagts till!"})}else await v.updateRightSlide(e.value),f.notify({color:"success",position:"bottom",message:"Sliden har uppdaterats!"});else r.value=!1;w.value=!1}).catch(o=>{r.value=!1})},h=$(()=>{var o;return((o=e.value)==null?void 0:o.id)==null}),I=o=>{e.value=o},U=()=>{e.value={title:"",content:"Ny slide",time:5}},N=async()=>{e.value!=null&&(await v.deleteRightSlide(e.value.id),f.notify({color:"success",position:"bottom",message:"Sliden har tagits bort!"}),e.value=null)},B=async(o,a)=>{const t=await Promise.all(o.map(d=>new Promise((S,F)=>{const R=ae();te(d,"images",R).then(y=>S(y)).catch(y=>F(y))})));a(t.map(d=>d))};return(o,a)=>(n(),u(G,{class:"q-pa-md"},{default:s(()=>[i("div",le,[i("div",se,[i("div",oe,[ie,l(c,{color:"primary",unelevated:"",class:"col",onClick:U},{default:s(()=>[m("Ny Slide ")]),_:1})]),l(O,{bordered:"",separator:"",clickable:""},{default:s(()=>[(n(!0),b(E,null,j(p(x),t=>{var d;return n(),u(M,{class:"q-py-md",clickable:"",key:t.id,active:((d=e.value)==null?void 0:d.id)==t.id,onClick:S=>I(t)},{default:s(()=>[l(q,null,{default:s(()=>[l(H,{lines:"2"},{default:s(()=>[m(D(t.title),1)]),_:2},1024)]),_:2},1024),l(q,{side:""},{default:s(()=>[l(T,{name:"chevron_right"})]),_:1})]),_:2},1032,["active","onClick"])}),128))]),_:1})]),i("div",ne,[i("div",de,[e.value?(n(),u(A,{key:0,ref_key:"form",ref:_,onSubmit:L(C,["prevent"]),greedy:""},{default:s(()=>[i("div",re,[i("div",ue,[l(c,{color:"green-5",style:{width:"200px"},type:"submit"},{default:s(()=>[p(h)?(n(),b("span",me,"Skapa")):(n(),b("span",ce,"Uppdatera"))]),_:1}),l(c,{class:"q-ml-md",style:{width:"200px"},color:"primary",onClick:a[0]||(a[0]=t=>g.value=!0)},{default:s(()=>[m("Bilder ")]),_:1})]),p(h)?Q("",!0):(n(),u(c,{key:0,color:"red",style:{width:"200px"},class:"col-auto",onClick:N},{default:s(()=>[m("Radera")]),_:1}))]),l(V,{label:"Titel",modelValue:e.value.title,"onUpdate:modelValue":a[1]||(a[1]=t=>e.value.title=t),outlined:"",required:"",class:"q-mb-md"},null,8,["modelValue"]),l(V,{label:"Visningstid f\xF6r sliden",modelValue:e.value.time,"onUpdate:modelValue":a[2]||(a[2]=t=>e.value.time=t),outlined:"",required:"",type:"number",class:"q-mb-lg"},null,8,["modelValue"]),i("div",null,[l(p(X),{modelValue:e.value.content,"onUpdate:modelValue":a[3]||(a[3]=t=>e.value.content=t),language:"en-US",onOnUploadImg:B},null,8,["modelValue"])])]),_:1},8,["onSubmit"])):Q("",!0)])])]),l(W,{show:g.value,"onUpdate:show":a[4]||(a[4]=t=>g.value=t)},null,8,["show"])]),_:1}))}});export{Ue as default};
