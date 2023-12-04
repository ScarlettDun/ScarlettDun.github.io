import{a6 as t}from"./app-1ImYQ7Nk.js";var a={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://comment.scarlettdun.com/"};const o=async()=>{try{const{pageviewCount:e}=await t(()=>import("./app-1ImYQ7Nk.js").then(r=>r.af),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!");return}};export{o as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}