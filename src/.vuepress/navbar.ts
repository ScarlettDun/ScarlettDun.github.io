import { isContext } from "vm";
import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "详细规划",
    icon: "table",
    children: [
      {text:"年",icon:"launch",link:"#"},
      {text:"月",icon:"light",link:"#"},
      {text:"日",icon:"leaf",link:"#"},
    ]
  },
  {
    text: "学习过程",
    icon: "study",
    children: [
      {text:"Python",icon:"python",link:"#"},
      {text:"Website",icon:"network",link:"#"},
      {text:"Some skill",icon:"style",link:"#"},
    ]
  },
  { 
    text:"分享经历",
    icon:"blog",
    children: [
      {text:"学校",icon:"superscript",link:"#"},
      {text:"工作",icon:"strong",link:"#"},
      {text:"日常",icon:"share",link:"#"},
      {text:"旅游",icon:"sitemap",link:"#"},
    ]
  },
  {
    text: "日常琐碎",
    icon: "storage",
    children: [
      {text:"事物看法",icon:"write",link:"#"},
      {text:"我的树洞",icon:"home",link:"#"},
      {text:"一些清单",icon:"list",link:"#"},
      {text:"阅读笔记",icon:"read",link:"#"},
    ]
  }

]);
