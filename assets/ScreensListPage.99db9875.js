import{q as h,ad as f,k as s,ak as r,ae as o,n as a,ag as l,z as n,aj as i,u as m,l as u,m as k,F as w}from"./index.308153eb.js";import{Q as b,a as g}from"./QItem.dcfa4b1a.js";import{Q as v}from"./QList.5939a205.js";import{Q as q}from"./QPage.78ed50f3.js";import{a as $,e as Q,d as S}from"./auth.4b2e518d.js";const C={class:"row q-mb-lg"},B={class:"q-my-none q-mr-md"},z={class:"row justify-between"},L={class:"row q-gutter-md"},N={key:1,class:"text-h6 q-py-none q-my-none"},x=h({__name:"ScreensListPage",setup(P){const c=$(Q(S,"screens")),d=f(),p=async e=>{await d.push(`edit-screen/${e}`)},y=async e=>{await d.push(`preview-screen/${e}`)};return(e,j)=>(s(),r(q,{class:"q-pa-md"},{default:o(()=>[a("div",C,[a("h5",B,l(e.$t("myScreens")),1),n(i,{unelevated:"",icon:"add",color:"primary",to:"/create-screen",label:e.$t("createNewScreen")},null,8,["label"])]),m(c).length>0?(s(),r(v,{key:0,bordered:"",separator:"",clickable:""},{default:o(()=>[(s(!0),u(w,null,k(m(c),t=>(s(),r(b,{key:t.id,class:"q-py-md"},{default:o(()=>[n(g,null,{default:o(()=>[a("div",z,[a("div",null,l(t.name),1),a("div",L,[n(i,{size:"sm",icon:"edit",label:e.$t("edit"),onClick:_=>p(t.id),color:"primary",style:{width:"200px"}},null,8,["label","onClick"]),n(i,{size:"sm",icon:"tv",label:e.$t("display"),onClick:_=>y(t.id),color:"primary",style:{width:"200px"}},null,8,["label","onClick"])])])]),_:2},1024)]),_:2},1024))),128))]),_:1})):(s(),u("h6",N,l(e.$t("noScreensMessage")),1))]),_:1}))}});export{x as default};
