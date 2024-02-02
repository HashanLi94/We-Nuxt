// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
	devtools: { enabled: true },

	// 1. set the '@/' for the root
	alias: {
		"@": resolve("_dirname", "/"),
	},

	// 2. CSS
	css: ["~/assets/scss/main.scss"],

	// 3. nuxt/tailwind css as a module
	modules: ["@nuxtjs/tailwindcss"],

	tailwindcss: {
		cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
		configPath: "tailwind.config",
		exposeConfig: false,
		exposeLevel: 2,
		config: {},
		injectPosition: "first",
		viewer: true,
	},
});
