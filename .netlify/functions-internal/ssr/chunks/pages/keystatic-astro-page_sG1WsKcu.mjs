/* empty css                                         */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent } from '../astro_qpeYxEXS.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const prerender = false;
const $$KeystaticAstroPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$KeystaticAstroPage;
  return renderTemplate`${renderComponent($$result, "Keystatic", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/omarjaff/Development/portfolio/node_modules/@keystatic/astro/internal/keystatic-page", "client:component-export": "Keystatic" })}`;
}, "/Users/omarjaff/Development/portfolio/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", void 0);

const $$file = "/Users/omarjaff/Development/portfolio/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro";
const $$url = undefined;

export { $$KeystaticAstroPage as default, $$file as file, prerender, $$url as url };
