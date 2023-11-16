import { isContext } from "vm";
import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "详细规划",
    icon: "list",
    children: [
      {text:"年",icon:"",link:"#"},
      {text:"月",icon:"",link:"#"},
      {text:"日",icon:"",link:"#"},
    ]
  },
  {
    text: "学习过程",
    icon: "exercise",
    children: [
      {text:"Python",icon:"python",link:"#"},
      {text:"Website",icon:"",link:"#"},
      {text:"Some skill",icon:"",link:"#"},
    ]
  },
  {
    text:"分享经历",
    icon:"blog",
    children: [
      {text:"学校",icon:"",link:"#"},
      {text:"工作",icon:"",link:"#"},
      {text:"日常",icon:"",link:"#"},
      {text:"旅游",icon:"",link:"#"},
    ]
  },
  {
    text: "日常琐碎",
    icon: "read",
    children: [
      {text:"事物看法",icon:"",link:"#"},
      {text:"我的思考",icon:"",link:"#"},
      {text:"一些清单",icon:"",link:"#"},
      {text:"阅读笔记",icon:"",link:"#"},
    ]
  }

]);
