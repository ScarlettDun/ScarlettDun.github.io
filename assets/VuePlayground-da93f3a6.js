import{e as _,f,g,s,h as m,v as y,i as R,j as a,C as h,_ as r}from"./app-02a39d7b.js";const w=e=>JSON.parse(decodeURIComponent(e));var V=_({name:"VuePlayground",props:{title:{type:String,default:""},files:{type:String,required:!0},settings:{type:String,default:"{}"}},setup(e){const u=f(),i=g(!0),t=s(),l=s(),n=s(),o=m(()=>y({},u,w(e.settings))),d=async()=>{const[{ReplStore:v,Repl:p},{default:c}]=await Promise.all([r(()=>import("./vue-repl-f4b8dac3.js"),["assets/vue-repl-f4b8dac3.js","assets/app-02a39d7b.js","assets/utils-a5e1dbae-143be013.js"]),r(()=>import("./codemirror-editor-d62f7f26.js"),["assets/codemirror-editor-d62f7f26.js","assets/utils-a5e1dbae-143be013.js","assets/app-02a39d7b.js"])]);t.value=p,n.value=c,l.value=new v({serializedState:decodeURIComponent(e.files)}),o.value.vueVersion&&await l.value.setVueVersion(o.value.vueVersion)};return R(async()=>{await d(),i.value=!1}),()=>[a("div",{class:"vue-playground-wrapper"},[e.title?a("div",{class:"header"},decodeURIComponent(e.title)):null,a("div",{class:"repl-container"},[i.value?a(h,{class:"preview-loading",height:192}):null,t.value?a(t.value,{editor:n.value,store:l.value,autoResize:!0,...o.value,layout:"horizontal"}):null])])]}});export{V as default};
