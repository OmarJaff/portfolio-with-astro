import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [tailwind(), alpinejs(), react(), keystatic(), markdoc()],
  site: "http://example.com"
});