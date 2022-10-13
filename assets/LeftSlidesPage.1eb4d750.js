import{V as Q,r as V,a as L,Y as r,a9 as m,$ as s,a3 as o,_ as i,ac as _,a7 as p,Z as v,ar as z,a0 as a,as as C,a8 as I,a4 as N,a2 as S,a1 as B,a6 as j}from"./index.f7cab669.js";import{u as F,a as E,Q as R,b as T,c as y,d as U}from"./useAuthValidations.0e7ef909.js";import{u as $,Q as A}from"./use-quasar.7d7e4484.js";import{Q as M}from"./QPage.a8baab2b.js";import{u as P}from"./slides.2a8483df.js";import"./auth.055c622e.js";const D={class:"q-mb-md row q-col-gutter-md"},G={class:"row col-4 align-items"},Y=o("div",{class:"text-h5 q-mr-lg"},"V\xE4nster Sektion Slides",-1),Z=o("div",{class:"text-h5 col-8 text-center"},null,-1),H={class:"row q-col-gutter-md"},J={class:"col-4"},K={class:"col-8 row justify-center"},O={class:"full-width"},W={class:"q-gutter-sm"},X={class:"row justify-between"},ee={class:"col-auto"},te={key:0},ae={key:1},ue=Q({__name:"LeftSlidesPage",setup(le){const t=$(),c=P(),{form:f,validInputs:u,loading:g}=F(),e=V(null),k=()=>{u.value=!1,f.value!=null&&f.value.validate().then(async n=>{if(n)if(g.value=!0,u.value=!0,h.value){let d=await c.addLeftSlide(e.value);e.value.id=d.id,t.notify({color:"success",position:"bottom",message:"Sliden har lagts till!"})}else await c.updateLeftSlide(e.value),t.notify({color:"success",position:"bottom",message:"Sliden har uppdaterats!"});else u.value=!1;g.value=!1}).catch(n=>{u.value=!1})},h=L(()=>{var n;return((n=e.value)==null?void 0:n.id)==null}),w=n=>{e.value=n},q=()=>{e.value={title:"",content:""}},x=async()=>{e.value!=null&&(await c.deleteLeftSlide(e.value.id),t.notify({color:"success",position:"bottom",message:"Sliden har tagits bort!"}),e.value=null)};return(n,d)=>(r(),m(M,{class:"q-pa-md"},{default:s(()=>[o("div",D,[o("div",G,[Y,i(p,{color:"primary",unelevated:"",class:"col",onClick:q},{default:s(()=>[_("Ny Slide ")]),_:1})]),Z]),o("div",H,[o("div",J,[i(E,{bordered:"",separator:"",clickable:""},{default:s(()=>[(r(!0),v(C,null,z(a(c).leftSlides,l=>{var b;return r(),m(T,{class:"q-py-md",clickable:"",key:l.id,active:((b=e.value)==null?void 0:b.id)==l.id,onClick:oe=>w(l)},{default:s(()=>[i(y,null,{default:s(()=>[i(U,{lines:"2"},{default:s(()=>[_(B(l.title),1)]),_:2},1024)]),_:2},1024),i(y,{side:""},{default:s(()=>[i(j,{name:"chevron_right"})]),_:1})]),_:2},1032,["active","onClick"])}),128))]),_:1})]),o("div",K,[o("div",O,[e.value?(r(),m(R,{key:0,ref_key:"form",ref:f,onSubmit:I(k,["prevent"]),greedy:""},{default:s(()=>[e.value?(r(),m(N,{key:0,label:"Titel",modelValue:e.value.title,"onUpdate:modelValue":d[0]||(d[0]=l=>e.value.title=l),outlined:"",required:"",rules:[l=>l.length>0],class:"q-mb-lg"},null,8,["modelValue","rules"])):S("",!0),o("div",W,[i(A,{required:"",rules:[l=>l.length>0],modelValue:e.value.content,"onUpdate:modelValue":d[1]||(d[1]=l=>e.value.content=l),dense:a(t).screen.lt.md,toolbar:[[{label:a(t).lang.editor.align,icon:a(t).iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]},{label:a(t).lang.editor.align,icon:a(t).iconSet.editor.align,fixedLabel:!0,options:["left","center","right","justify"]}],["bold","italic","strike","underline","subscript","superscript"],["token","hr","link","custom_btn"],["print","fullscreen"],[{label:a(t).lang.editor.formatting,icon:a(t).iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:a(t).lang.editor.fontSize,icon:a(t).iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]},{label:a(t).lang.editor.defaultFont,icon:a(t).iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"],["viewsource"]],fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}},null,8,["rules","modelValue","dense","toolbar"])]),o("div",X,[o("div",ee,[i(p,{color:"green-5",style:{width:"200px"},class:"q-mt-md q-mr-md",type:"submit"},{default:s(()=>[a(h)?(r(),v("span",te,"Skapa")):(r(),v("span",ae,"Uppdatera"))]),_:1})]),i(p,{color:"red",style:{width:"200px"},class:"q-mt-md col-auto",onClick:x},{default:s(()=>[_("Radera")]),_:1})])]),_:1},8,["onSubmit"])):S("",!0)])])])]),_:1}))}});export{ue as default};
