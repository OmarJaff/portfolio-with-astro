import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";
import markdoc from "@astrojs/markdoc";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), alpinejs(), react(), keystatic(), markdoc()],
  adapter: netlify(),
});
