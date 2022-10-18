import{y as de,z as N,q as ve,A as fe,B as R,C as K,G as Z,I as W,H as X,r as H,l as f,w as B,s as G,n as me,j as m,ap as pe,aq as he,m as J,ar as ge,k as se,as as ye,at as _e,o as ue,i as ce,au as ee,K as xe,M as be,R as Ce,av as we,a9 as Y,$ as Pe,h as Se,a as T,ad as O,a3 as w,f as k,a2 as U,c as te,e as ne,a4 as F,F as ae,g as qe}from"./index.56596687.js";import{g as ie,s as oe,c as ke}from"./selection.1b486a91.js";import{Q as Ie}from"./QPage.dec982fa.js";import{u as $e}from"./slides.74b2a72d.js";import"./auth.17d318c2.js";function Te(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((o,s)=>{const r=parseFloat(o);r&&(n[s]=r)}),n}var Be=de({name:"touch-swipe",beforeMount(e,{value:n,arg:o,modifiers:s}){if(s.mouse!==!0&&N.has.touch!==!0)return;const r=s.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:Te(o),direction:ie(s),noop:ve,mouseStart(i){oe(i,t)&&fe(i)&&(R(t,"temp",[[document,"mousemove","move",`notPassive${r}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(i,!0))},touchStart(i){if(oe(i,t)){const l=i.target;R(t,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","notPassiveCapture"],[l,"touchend","end","notPassiveCapture"]]),t.start(i)}},start(i,l){N.is.firefox===!0&&K(e,!0);const h=Z(i);t.event={x:h.left,y:h.top,time:Date.now(),mouse:l===!0,dir:!1}},move(i){if(t.event===void 0)return;if(t.event.dir!==!1){W(i);return}const l=Date.now()-t.event.time;if(l===0)return;const h=Z(i),g=h.left-t.event.x,u=Math.abs(g),p=h.top-t.event.y,d=Math.abs(p);if(t.event.mouse!==!0){if(u<t.sensitivity[1]&&d<t.sensitivity[1]){t.end(i);return}}else if(u<t.sensitivity[2]&&d<t.sensitivity[2])return;const y=u/l,x=d/l;t.direction.vertical===!0&&u<d&&u<100&&x>t.sensitivity[0]&&(t.event.dir=p<0?"up":"down"),t.direction.horizontal===!0&&u>d&&d<100&&y>t.sensitivity[0]&&(t.event.dir=g<0?"left":"right"),t.direction.up===!0&&u<d&&p<0&&u<100&&x>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&u<d&&p>0&&u<100&&x>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&u>d&&g<0&&d<100&&y>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&u>d&&g>0&&d<100&&y>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(W(i),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ke(),t.styleCleanup=I=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const b=()=>{document.body.classList.remove("no-pointer-events--children")};I===!0?setTimeout(b,50):b()}),t.handler({evt:i,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:l,distance:{x:u,y:d}})):t.end(i)},end(i){t.event!==void 0&&(X(t,"temp"),N.is.firefox===!0&&K(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),i!==void 0&&t.event.dir!==!1&&W(i),t.event=void 0)}};if(e.__qtouchswipe=t,s.mouse===!0){const i=s.mouseCapture===!0||s.mousecapture===!0?"Capture":"";R(t,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}N.has.touch===!0&&R(t,"main",[[e,"touchstart","touchStart",`passive${s.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const o=e.__qtouchswipe;o!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&o.end(),o.handler=n.value),o.direction=ie(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(X(n,"main"),X(n,"temp"),N.is.firefox===!0&&K(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function Ve(){const e=new Map;return{getCache:function(n,o){return e[n]===void 0?e[n]=o:e[n]},getCacheWithFn:function(n,o){return e[n]===void 0?e[n]=o():e[n]}}}const Ae={name:{required:!0},disable:Boolean},le={setup(e,{slots:n}){return()=>m("div",{class:"q-panel scroll",role:"tabpanel"},J(n.default))}},Ee={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Me=["update:modelValue","before-transition","transition"];function Ne(){const{props:e,emit:n,proxy:o}=G(),{getCacheWithFn:s}=Ve();let r,t;const i=H(null),l=H(null);function h(a){const c=e.vertical===!0?"up":"left";C((o.$q.lang.rtl===!0?-1:1)*(a.direction===c?1:-1))}const g=f(()=>[[Be,h,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),u=f(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),p=f(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),d=f(()=>`--q-transition-duration: ${e.transitionDuration}ms`),y=f(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),x=f(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),I=f(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);B(()=>e.modelValue,(a,c)=>{const _=P(a)===!0?A(a):-1;t!==!0&&$(_===-1?0:_<A(c)?-1:1),i.value!==_&&(i.value=_,n("before-transition",a,c),me(()=>{n("transition",a,c)}))});function b(){C(1)}function Q(){C(-1)}function V(a){n("update:modelValue",a)}function P(a){return a!=null&&a!==""}function A(a){return r.findIndex(c=>c.props.name===a&&c.props.disable!==""&&c.props.disable!==!0)}function j(){return r.filter(a=>a.props.disable!==""&&a.props.disable!==!0)}function $(a){const c=a!==0&&e.animated===!0&&i.value!==-1?"q-transition--"+(a===-1?u.value:p.value):null;l.value!==c&&(l.value=c)}function C(a,c=i.value){let _=c+a;for(;_>-1&&_<r.length;){const q=r[_];if(q!==void 0&&q.props.disable!==""&&q.props.disable!==!0){$(a),t=!0,n("update:modelValue",q.props.name),setTimeout(()=>{t=!1});return}_+=a}e.infinite===!0&&r.length>0&&c!==-1&&c!==r.length&&C(a,a===-1?r.length:-1)}function E(){const a=A(e.modelValue);return i.value!==a&&(i.value=a),!0}function z(){const a=P(e.modelValue)===!0&&E()&&r[i.value];return e.keepAlive===!0?[m(ge,x.value,[m(I.value===!0?s(y.value,()=>({...le,name:y.value})):le,{key:y.value,style:d.value},()=>a)])]:[m("div",{class:"q-panel scroll",style:d.value,key:y.value,role:"tabpanel"},[a])]}function v(){if(r.length!==0)return e.animated===!0?[m(pe,{name:l.value},z)]:z()}function S(a){return r=he(J(a.default,[])).filter(c=>c.props!==null&&c.props.slot===void 0&&P(c.props.name)===!0),r.length}function M(){return r}return Object.assign(o,{next:b,previous:Q,goTo:V}),{panelIndex:i,panelDirectives:g,updatePanelsList:S,updatePanelIndex:E,getPanelContent:v,getEnabledPanels:j,getPanels:M,isValidPanelName:P,keepAliveProps:x,needsUniqueKeepAliveWrapper:I,goToPanelByOffset:C,goToPanel:V,nextPanel:b,previousPanel:Q}}var L=se({name:"QCarouselSlide",props:{...Ae,imgSrc:String},setup(e,{slots:n}){const o=f(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>m("div",{class:"q-carousel__slide",style:o.value},J(n.default))}});let D=0;const Fe={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Le=["update:fullscreen","fullscreen"];function De(){const e=G(),{props:n,emit:o,proxy:s}=e;let r,t,i;const l=H(!1);ye(e)===!0&&B(()=>s.$route.fullPath,()=>{n.noRouteFullscreenExit!==!0&&u()}),B(()=>n.fullscreen,p=>{l.value!==p&&h()}),B(l,p=>{o("update:fullscreen",p),o("fullscreen",p)});function h(){l.value===!0?u():g()}function g(){l.value!==!0&&(l.value=!0,i=s.$el.parentNode,i.replaceChild(t,s.$el),document.body.appendChild(s.$el),D++,D===1&&document.body.classList.add("q-body--fullscreen-mixin"),r={handler:u},ee.add(r))}function u(){l.value===!0&&(r!==void 0&&(ee.remove(r),r=void 0),i.replaceChild(s.$el,t),l.value=!1,D=Math.max(0,D-1),D===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),s.$el.scrollIntoView!==void 0&&setTimeout(()=>{s.$el.scrollIntoView()})))}return _e(()=>{t=document.createElement("span")}),ue(()=>{n.fullscreen===!0&&g()}),ce(u),Object.assign(s,{toggleFullscreen:h,setFullscreen:g,exitFullscreen:u}),{inFullscreen:l,toggleFullscreen:h}}const He=["top","right","bottom","left"],Qe=["regular","flat","outline","push","unelevated"];var re=se({name:"QCarousel",props:{...xe,...Ee,...Fe,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>Qe.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>He.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Le,...Me],setup(e,{slots:n}){const{proxy:{$q:o}}=G(),s=be(e,o);let r,t;const{updatePanelsList:i,getPanelContent:l,panelDirectives:h,goToPanel:g,previousPanel:u,nextPanel:p,getEnabledPanels:d,panelIndex:y}=Ne(),{inFullscreen:x}=De(),I=f(()=>x.value!==!0&&e.height!==void 0?{height:e.height}:{}),b=f(()=>e.vertical===!0?"vertical":"horizontal"),Q=f(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(x.value===!0?" fullscreen":"")+(s.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${b.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${j.value}`:"")),V=f(()=>{const v=[e.prevIcon||o.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||o.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&o.lang.rtl===!0?v.reverse():v}),P=f(()=>e.navigationIcon||o.iconSet.carousel.navigationIcon),A=f(()=>e.navigationActiveIcon||P.value),j=f(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),$=f(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));B(()=>e.modelValue,()=>{e.autoplay&&(clearInterval(r),C())}),B(()=>e.autoplay,v=>{v?C():clearInterval(r)});function C(){const v=we(e.autoplay)===!0?e.autoplay:5e3;r=setTimeout(v>=0?p:u,Math.abs(v))}ue(()=>{e.autoplay&&C()}),ce(()=>{clearInterval(r)});function E(v,S){return m("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${v} q-carousel__navigation--${j.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[m("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},d().map(S))])}function z(){const v=[];if(e.navigation===!0){const S=n["navigation-icon"]!==void 0?n["navigation-icon"]:a=>m(Y,{key:"nav"+a.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${a.active===!0?"":"in"}active`,...a.btnProps,onClick:a.onClick}),M=t-1;v.push(E("buttons",(a,c)=>{const _=a.props.name,q=y.value===c;return S({index:c,maxIndex:M,name:_,active:q,btnProps:{icon:q===!0?A.value:P.value,size:"sm",...$.value},onClick:()=>{g(_)}})}))}else if(e.thumbnails===!0){const S=e.controlColor!==void 0?` text-${e.controlColor}`:"";v.push(E("thumbnails",M=>{const a=M.props;return m("img",{key:"tmb#"+a.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${a.name===e.modelValue?"":"in"}active`+S,src:a.imgSrc||a["img-src"],onClick:()=>{g(a.name)}})}))}return e.arrows===!0&&y.value>=0&&((e.infinite===!0||y.value>0)&&v.push(m("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${b.value} absolute flex flex-center`},[m(Y,{icon:V.value[0],...$.value,onClick:u})])),(e.infinite===!0||y.value<t-1)&&v.push(m("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${b.value} absolute flex flex-center`},[m(Y,{icon:V.value[1],...$.value,onClick:p})]))),Pe(n.control,v)}return()=>(t=i(n),m("div",{class:Q.value,style:I.value},[Ce("div",{class:"q-carousel__slides-container"},l(),"sl-cont",e.swipeable,()=>h.value)].concat(z())))}});const je={class:"col-6 q-gutter-md"},ze=k("iframe",{style:{height:"100%",width:"100%"},src:"https://cloud.timeedit.net/abbindustrigymnasium/web/public1/ri.html?h=f&sid=3&p=0.w%2C12.w&objects=7602.20&ox=0&types=0&fe=0&dw=130&hh=60&pp=t&ahf=t&h2=2",title:"220S"},`
          `,-1),Re=k("iframe",{style:{height:"100%",width:"100%"},src:"https://cloud.timeedit.net/abbindustrigymnasium/web/public1/ri.html?h=f&sid=3&p=0.w%2C12.w&objects=7614.20&ox=0&types=0&fe=0&dw=130&hh=60&pp=t&ahf=t&h2=2",title:"210S"},`
          `,-1),Oe=k("iframe",{style:{height:"100%",width:"100%"},src:"https://cloud.timeedit.net/abbindustrigymnasium/web/public1/ri.html?h=f&sid=3&p=0.w%2C12.w&objects=7612.20&ox=0&types=0&fe=0&dw=130&hh=60&pp=t&ahf=t&h2=2",title:"200S"},`
          `,-1),Ue=["innerHTML"],Ke={class:"col-6 q-gutter-md"},We=["innerHTML"],et=Se({__name:"IndexPage",setup(e){const n=$e();console.log(n.rightSlides);const o=H(1),s=H(1);return(r,t)=>(T(),O(Ie,{class:"row q-pa-md full-height"},{default:w(()=>[k("div",je,[U(re,{class:"full-height",animated:"",modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=i=>o.value=i),navigation:"","keep-alive":"",infinite:"",autoplay:o.value>3?F(n).leftSlides[o.value-1].time:2e4,arrows:"","transition-duration":"600","transition-prev":"slide-right","transition-next":"slide-left"},{default:w(()=>[U(L,{name:1,class:"full-height"},{default:w(()=>[ze]),_:1}),U(L,{name:2,class:"full-height"},{default:w(()=>[Re]),_:1}),U(L,{name:3,class:"full-height"},{default:w(()=>[Oe]),_:1}),(T(!0),te(ae,null,ne(F(n).leftSlides,(i,l)=>(T(),O(L,{key:l,name:l+3},{default:w(()=>[k("div",{innerHTML:i.content},null,8,Ue)]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue","autoplay"])]),k("div",Ke,[F(n).rightSlides.length>0?(T(),O(re,{key:0,animated:"",class:"full-height",modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=i=>s.value=i),navigation:"",infinite:"","keep-alive":"",autoplay:F(n).rightSlides[s.value-1].time*1e3,arrows:"","transition-duration":"300","transition-prev":"slide-right","transition-next":"slide-left"},{default:w(()=>[(T(!0),te(ae,null,ne(F(n).rightSlides,(i,l)=>(T(),O(L,{class:"full-height",key:l,name:l+1},{default:w(()=>[k("div",{innerHTML:i.content},null,8,We)]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue","autoplay"])):qe("",!0)])]),_:1}))}});export{et as default};
