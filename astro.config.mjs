import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";
import markdoc from "@astrojs/markdoc";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  site: "https://65a8ed4661dae25bc8151f40--iridescent-pony-fb7c27.netlify.app",
  integrations: [tailwind(), alpinejs(), react(), keystatic(), markdoc()],
  adapter: netlify(),
});
