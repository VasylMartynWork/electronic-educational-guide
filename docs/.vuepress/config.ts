import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
	base: "/",

	lang: "en-US",
	title: "Основи програмування мовою C#",
	description: "A docs demo for vuepress-theme-hope",

	theme,

	// Enable it with pwa
	// shouldPrefetch: false,
});
