import{_ as t}from"./app-NXkVsMR_.js";var a={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://comment.scarlettdun.com/"};const o=async()=>{try{const{pageviewCount:e}=await t(()=>import("./app-NXkVsMR_.js").then(r=>r.W),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!");return}};export{o as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}