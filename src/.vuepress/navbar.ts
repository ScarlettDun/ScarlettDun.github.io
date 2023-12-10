import { isContext } from "vm";
import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "详细规划",
    icon: "plan",
    children: [
      {text:"年",icon:"niandu1",link:"#"},
      {text:"月",icon:"yue1",link:"#"},
      {text:"日",icon:"ri",link:"#"},
    ]
  },
  {
    text: "学习过程",
    icon: "nianji",
    children: [
      {text:"Python",icon:"python",link:"#"},
      {text:"Website",icon:"website",link:"#"},
      {text:"Some skill",icon:"jinengbiaoqian",link:"#"},
    ]
  },
  { 
    text:"分享经历",
    icon:"home",
    children: [
      {text:"学校",icon:"xuexiao_xuexiaoxinxi",link:"#"},
      {text:"工作",icon:"gongzuotai",link:"#"},
      {text:"日常",icon:"shu",link:"#"},
      {text:"旅游",icon:"plane1",link:"#"},
    ]
  },
  {
    text: "日常琐碎",
    icon: "time2",
    children: [
      {text:"事物看法",icon:"a-InnovativeIdea",link:"#"},
      {text:"我的树洞",icon:"Keyhole",link:"#"},
      {text:"一些清单",icon:"richanggongzuojilu",link:"#"},
      {text:"阅读笔记",icon:"a-bijibenbiji1",link:"#"},
    ]
  }

]);
