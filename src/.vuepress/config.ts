import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "ScarlettDun",
  description: "一个隐秘的角落",

  theme,
  head: [
    [
      "link", {
        rel: "shortcut icon",
        // href: "/favicon.ico",
        href: "/logo.png",
      }
    ]
  ]


  




  // Enable it with pwa
  // shouldPrefetch: false,
});
