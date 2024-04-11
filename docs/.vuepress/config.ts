import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
	base: "/",

	lang: "en-US",
	title: "Основи програмування мовою C#",
	description: "Електронний довідник для мови C#",

	theme,

	// Enable it with pwa
	// shouldPrefetch: false,
});
