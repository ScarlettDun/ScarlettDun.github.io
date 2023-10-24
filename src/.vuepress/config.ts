import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "ScarlettDun",
  description: "一个隐秘的角落",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
