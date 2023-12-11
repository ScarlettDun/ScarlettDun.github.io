import{a6 as t}from"./app-8QWSv-tW.js";var n={provider:"Waline",dark:"auto",serverURL:"https://comment.scarlettdun.com/",reaction:["/Waline/emoji/wow.png","/Waline/tieba/tieba_sunglasses.png","/Waline/tieba/tieba_pick_nose.png","/Waline/tieba/1f613.png","/Waline/emoji/sleepy.png","/Waline/emoji/lemon.png"],comment:!0,pageview:!0,copyright:!1};const r=async()=>{try{const{pageviewCount:e}=await t(()=>import("./app-8QWSv-tW.js").then(a=>a.af),__vite__mapDeps([]));return e({serverURL:n.serverURL})}catch{console.error("@waline/client is not installed!");return}};export{r as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}