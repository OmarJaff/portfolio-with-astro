import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_A3jBnphL.mjs';

const _page0  = () => import('./chunks/keystatic-api_H2YJAARz.mjs');
const _page1  = () => import('./chunks/keystatic-astro-page_XA47G3dV.mjs');
const _page2  = () => import('./chunks/generic_Ui30WqTP.mjs');
const _page3  = () => import('./chunks/index_cB9QSjwc.mjs');
const _page4  = () => import('./chunks/_.._wJXnvX1C.mjs');
const _page5  = () => import('./chunks/articles_w6Vve0MJ.mjs');
const _page6  = () => import('./chunks/_.._6RMd8t02.mjs');
const _page7  = () => import('./chunks/projects_aRkU-phJ.mjs');
const _page8  = () => import('./chunks/rss_fT9dv4NV.mjs');
const _page9  = () => import('./chunks/about_Ox55DLsp.mjs');
const _page10  = () => import('./chunks/404_uDsm6k9C.mjs');const pageMap = new Map([["node_modules/@keystatic/astro/internal/keystatic-api.js", _page0],["node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page1],["node_modules/astro/dist/assets/endpoint/generic.js", _page2],["src/pages/index.astro", _page3],["src/pages/articles/[...slug].astro", _page4],["src/pages/articles.astro", _page5],["src/pages/projects/[...slug].astro", _page6],["src/pages/projects.astro", _page7],["src/pages/rss.xml.js", _page8],["src/pages/about.astro", _page9],["src/pages/404.astro", _page10]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
