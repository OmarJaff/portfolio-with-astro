import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as renderSlot, i as renderComponent, k as renderHead, F as Fragment, A as AstroError, l as UnknownContentCollectionError, n as renderUniqueStylesheet, o as renderScriptElement, p as createHeadAndContent, u as unescapeHTML } from './astro_qpeYxEXS.mjs';
/* empty css                                        */
import 'kleur/colors';
import 'clsx';
import { p as prependForwardSlash } from './astro/assets-service_0o-NUXar.mjs';
import rss, { pagesGlobToRssItems } from '@astrojs/rss';
/* empty css                          */

const $$Astro$n = createAstro();
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Logo;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a href="/"> <div${addAttribute(`${className} flex gap-0.5 items-baseline`, "class")}> <p class="text-2xl lg:text-3xl font-extrabold">Omar</p> <p class="text-[12px] font-bold">Jaff</p> </div> </a>`;
}, "/Users/omarjaff/Development/portfolio/src/components/Logo.astro", void 0);

const $$Astro$m = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    hasTitle = true,
    title = "button",
    ariaLabel = "button",
    role = "button",
    class: ClassName = "text-white",
    "@click": click
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(ariaLabel, "aria-label")}${addAttribute(click, "@click")}${addAttribute(`${ClassName} capitalize`, "class:list")}> ${hasTitle && renderTemplate`<p>${title}</p>`} ${renderSlot($$result, $$slots["default"])} </button>`;
}, "/Users/omarjaff/Development/portfolio/src/components/Button.astro", void 0);

const $$Astro$l = createAstro();
const $$Social = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Social;
  const { platform, username } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`https://www.${platform}.com/${username}`, "href")} target="_blank" role="menuitem"${addAttribute(`click here to navigate to my ${platform} account`, "aria-label")} class="transition duration-100 hover:text-primary-gray-300"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/omarjaff/Development/portfolio/src/components/Social.astro", void 0);

const $$Astro$k = createAstro();
const $$Menu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Menu;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(`${className} hidden md:flex  rounded-full backdrop-blur`, "class")}> <ul class="flex"> ${renderSlot($$result, $$slots["default"])} </ul> </nav> <!-- Modal --> <div x-show="open" style="display: none" x-on:keydown.escape.prevent.stop="open = false" role="dialog" aria-modal="true" x-id="['modal-title']" :aria-labelledby="$id('modal-title')"${addAttribute(`fixed inset-0 z-50 overflow-y-auto md:hidden`, "class")}> <!-- Overlay --> <div x-show="open" x-transition.opacity class="fixed inset-0 backdrop-blur-sm dark:bg-black/80 opacity-100"></div> <!-- Panel --> <div x-show="open" x-transition x-on:click="open = false" class="relative flex min-h-screen items-start justify-center p-6"> <div x-on:click.stop x-trap.noscroll.inert="open"${addAttribute(`${className} relative w-full max-w-2xl overflow-y-auto rounded-3xl p-8 shadow-lg`, "class")}> <!-- Title --> <div class="flex flex-row-reverse items-center justify-between"> ${renderComponent($$result, "Button", $$Button, { "role": "menu", "@click": "open = false", "hasTitle": false, "class": "-m-1 p-1" }, { "default": ($$result2) => renderTemplate` <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6"><path d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> ` })} <h2 class="text-sm font-medium">Navigation</h2> </div> <!-- Content --> <nav class="mt-6"> <ul class="-my-2 divide-y divide-primary-gray-600 text-base dark:divide-primary-gray-400/2"> ${renderSlot($$result, $$slots["default"])} </ul> </nav> <footer class="mt-8 flex space-x-3 w-full justify-center"> ${renderComponent($$result, "Social", $$Social, { "platform": "twitter", "username": "omarjaff95" }, { "default": ($$result2) => renderTemplate` <svg width="24" height="24" class="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path d="M14.2856 10.1635L23.2216 0H21.1048L13.3424 8.82305L7.1472 0H0L9.3704 13.3433L0 24H2.1168L10.3088 14.6806L16.8528 24H24M2.8808 1.5619H6.1328L21.1032 22.5148H17.8504"></path> </svg> ` })} ${renderComponent($$result, "Social", $$Social, { "platform": "github", "username": "omarjaff" }, { "default": ($$result2) => renderTemplate` <svg viewBox="0 0 24 24" aria-hidden="true" class="h-5 w-5 md:h-6 md:w-6 flex-none transition duration-150 group-hover:fill-teal-500" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path></svg> ` })} <!-- <Social platform="linkedin" username="omarjaff">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="h-5 w-5 md:h-6 md:w-6flex-none transition"
            fill="currentColor"
            ><path
              d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"
            ></path></svg
          >
        </Social> --> </footer> </div> </div> </div>`;
}, "/Users/omarjaff/Development/portfolio/src/components/Menu.astro", void 0);

const $$Astro$j = createAstro();
const $$MenuItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$MenuItem;
  const { title, url, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a${addAttribute(`${className} block`, "class")} data-headlessui-state="open"${addAttribute(url, "href")}>${title}</a> </li>`;
}, "/Users/omarjaff/Development/portfolio/src/components/MenuItem.astro", void 0);

const $$Astro$i = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { class: ClassName } = Astro2.props;
  const currentPath = new URL(Astro2.request.url).pathname;
  const MenuItems = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Projects", url: "/projects" },
    { title: "Articles", url: "/articles" }
  ];
  return renderTemplate` ${maybeRenderHead()}<div x-data="{ open: false }" class="flex justify-center"> ${renderComponent($$result, "Button", $$Button, { "@click": "open = true", "title": "Menu", "ariaLabel": "click here to open the navbar menu", "class:list": [
    ClassName,
    "md:hidden rounded-full bg-primary-black-base px-4 py-2.5 flex items-center gap-3"
  ] }, { "default": ($$result2) => renderTemplate` <svg class="h-3 w-3 text-primary-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path> </svg> ` })} ${renderComponent($$result, "Menu", $$Menu, { "class": ClassName }, { "default": ($$result2) => renderTemplate`${MenuItems.map((item) => renderTemplate`${renderComponent($$result2, "MenuItem", $$MenuItem, { "class:list": [
    currentPath === item.url ? "border-b border-b-white/1 md:bg-white md:rounded-full md:text-black" : "transition duration-100 hover:text-primary-gray-300 ",
    "py-2 lg:px-6  px-4  text-primary-gray-200 lg:font-medium text-sm lg:text-md "
  ], "title": item.title, "url": item.url })}`)}` })} </div>`;
}, "/Users/omarjaff/Development/portfolio/src/components/Navbar.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Astro$h = createAstro();
const $$DarkModeToggler = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$DarkModeToggler;
  const { class: className } = Astro2.props;
  return renderTemplate(_a$3 || (_a$3 = __template$3(['<script>\n  document.addEventListener("alpine:init", () => {\n    Alpine.data("toggler", () => ({\n      theme: "",\n      init() {\n        this.theme = localStorage.theme;\n      },\n      toggle() {\n        if (\n          localStorage.theme === "dark" ||\n          (!("theme" in localStorage) &&\n            window.matchMedia("(prefers-color-scheme: dark)").matches)\n        ) {\n          document.documentElement.classList.remove("dark");\n          localStorage.theme = "light";\n          this.theme = "light";\n        } else {\n          document.documentElement.classList.add("dark");\n          localStorage.theme = "dark";\n          this.theme = "dark";\n        }\n      },\n    }));\n  });\n<\/script> ', '<div x-data="toggler"> ', " </div>"])), maybeRenderHead(), renderComponent($$result, "Button", $$Button, { "@click": "toggle()", "ariaLabel": "theme toggler", "hasTitle": false, "class": className, "ariaLabel": "dark theme toggler" }, { "default": ($$result2) => renderTemplate` <svg class="h-6 w-6 hidden dark:flex" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:hidden"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path> </svg> ` }));
}, "/Users/omarjaff/Development/portfolio/src/components/DarkModeToggler.astro", void 0);

const $$Astro$g = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto max-w-6xl lg:px-8 text-white flex-col md:flex justify-between px-4 items-center"> <div class="flex gap-x-4 md:gap-x-0 md:w-full md:justify-between"> <div class="flex flex-col justify-center items-center w-full"> <div class="flex w-full justify-between md:my-16 items-center gap-x-2"> <div role="menu" class="hidden md:flex bg-primary-black-base dark:bg-secondary-black px-4 py-2.5 lg:px-6 rounded-full justify-center items-center gap-6 text-white"> ${renderComponent($$result, "Social", $$Social, { "platform": "twitter", "username": "omarjaff95" }, { "default": ($$result2) => renderTemplate` <svg width="24" height="24" class="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path d="M14.2856 10.1635L23.2216 0H21.1048L13.3424 8.82305L7.1472 0H0L9.3704 13.3433L0 24H2.1168L10.3088 14.6806L16.8528 24H24M2.8808 1.5619H6.1328L21.1032 22.5148H17.8504"></path> </svg> ` })} ${renderComponent($$result, "Social", $$Social, { "platform": "github", "username": "omarjaff" }, { "default": ($$result2) => renderTemplate` <svg viewBox="0 0 24 24" aria-hidden="true" class="h-5 w-5 md:h-6 md:w-6 flex-none transition duration-150 group-hover:fill-teal-500" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path></svg> ` })} <!-- <Social platform="linkedin" username="omarjaff">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="h-5 w-5 md:h-6 md:w-6flex-none transition"
              fill="currentColor"
              ><path
                d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"
              ></path></svg
            >
          </Social> --> </div> <div class="relative flex w-full justify-between md:flex-none md:w-auto items-center"> ${renderComponent($$result, "Logo", $$Logo, { "class": "text-primary-black-base font-extrabold dark:text-white md:absolute md:bottom-20 md:w-full md:justify-center items-baseline" })} ${renderComponent($$result, "Navbar", $$Navbar, { "class": "bg-primary-black-base dark:bg-secondary-black/80 p-1" })} </div> ${renderComponent($$result, "DarkModeToggler", $$DarkModeToggler, { "class": "bg-primary-black-base dark:bg-secondary-black w-16 h-[10.5] justify-center py-2.5 rounded-full transition duration-100 md:hover:text-primary-gray-300 flex" })} </div> </div> </div> </div>`;
}, "/Users/omarjaff/Development/portfolio/src/components/Header.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$f = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Footer;
  const MenuItems = [
    { title: "About", url: "/about" },
    { title: "Articles", url: "/articles" },
    { title: "Projects", url: "/projects" }
  ];
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<footer class="mt-32 flex-none mx-auto max-w-6xl px-4 lg:px-8"> <div class="border-t pb-16 pt-10 border-neutral-900 dark:border-neutral-100/30"> <div class="relative"> <div class="px-4 sm:px-8"> <div class="flex flex-col items-center justify-between gap-6 sm:flex-row"> <ul class="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-neutral-950 dark:text-zinc-200"> ', ' </ul><p class="text-sm text-neutral-500 dark:text-gray-primary-300">\n\xA9<script in:line>\n              document.write(new Date().getFullYear());\n            <\/script><!-- --> Developed by Omar Jaff.\n</p> </div> </div> </div> </div> </footer>'])), maybeRenderHead(), MenuItems.map((item) => renderTemplate`${renderComponent($$result, "MenuItem", $$MenuItem, { "class": "transition text-primary-black-base dark:text-white duration-100 md:hover:text-primary-gray-300", "title": item.title, "url": item.url })}`));
}, "/Users/omarjaff/Development/portfolio/src/components/Footer.astro", void 0);

const $$Astro$e = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/omarjaff/Development/portfolio/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$d = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1([`<html lang="en" class="font-sans antialiased"> <head><meta charset="UTF-8"><meta name="description" content="Omar Jaff's Portfolio"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/images/favicon.svg"><link rel="stylesheet" href="/public/css/prism-nord.css"><meta name="generator"`, "><title>", '</title><!-- This controls the logic for changing the dark mode buttons appearance based on the users set preference --><script>\n      const setDarkMode = () => {\n        if (typeof window !== "undefined") {\n          const isSystemColorSchemeDark = window.matchMedia(\n            "(prefers-color-scheme: dark)"\n          ).matches;\n          const storageTheme = localStorage.getItem("theme");\n          if (!storageTheme && isSystemColorSchemeDark) {\n            document.documentElement.classList.add("dark");\n          } else if (storageTheme === "light") {\n            document.documentElement.classList.add("light");\n          } else {\n            // we already server render light theme\n            document.documentElement.classList.add("dark");\n            // localStorage.theme = "light";\n          }\n        }\n      };\n\n      // Runs on initial navigation\n      setDarkMode();\n\n      document.addEventListener("astro:after-swap", setDarkMode);\n    <\/script>', "", '</head> <body class="pt-8 md:pt-10 bg-primary-white dark:bg-neutral-950 selection:text-white selection:bg-primary-black-base dark:selection:text-black dark:selection:bg-white/80"> ', " ", " ", " </body></html>"])), addAttribute(Astro2.generator, "content"), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/omarjaff/Development/portfolio/src/layouts/Layout.astro", void 0);

const $$Astro$c = createAstro();
const $$ProjectCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const {
    title = "Integration with Western Union",
    darkThemeImageSrc = "/WU-Dark.svg",
    darkThemeImageAlt = "image detail",
    category = [],
    imgSrc = "/WU-Light.svg",
    imgAlt = "project icon",
    date = "2023-02",
    introduction = "We developed is a crowdfunding platform for friends and family Allowing users to take personal loans from their network without a traditional financial institution. And this is the second part of the paragraph to give additional details about this project and part of the paragraph to give additional details about this project.",
    url = "/"
  } = Astro2.props;
  const FormatedProjectDate = new Date(date).toLocaleString("en-US", {
    month: "long",
    year: "numeric"
  });
  return renderTemplate`${maybeRenderHead()}<div class="flex"> <article class="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 dark:ring-neutral-200/10 transition hover:bg-neutral-100 dark:hover:bg-neutral-900 sm:p-8"> <h3> <a${addAttribute(url, "href")}><span class="absolute inset-0 rounded-3xl"></span> <div class="h-16 w-16 flex items-center"> <img${addAttribute(darkThemeImageAlt, "alt")} class="hidden dark:flex"${addAttribute(darkThemeImageSrc, "src")} style="color: transparent;"> <img${addAttribute(imgAlt, "alt")} class="dark:hidden"${addAttribute(imgSrc, "src")} style="color: transparent;"> </div> </a> </h3><p class="mt-6 flex gap-x-2 text-sm text-neutral-950 dark:text-neutral-100"> <time${addAttribute(FormatedProjectDate, "datetime")} class="font-semibold">${FormatedProjectDate}</time><span class="text-neutral-300 dark:text-neutral-400" aria-hidden="true">/</span> ${category && category.map((cat) => renderTemplate`<span>${cat}</span>`)} </p><p class="mt-6 font-display text-2xl font-semibold text-neutral-950 dark:text-neutral-100"> ${title} </p><p class="mt-4 text-base text-neutral-600 dark:text-neutral-400 line-clamp-5"> ${introduction} </p> </article> </div>`;
}, "/Users/omarjaff/Development/portfolio/src/components/ProjectCard.astro", void 0);

const $$Astro$b = createAstro();
const $$WorkPanel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$WorkPanel;
  const { works = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-2xl border border-neutral-950/5 p-6 dark:border-neutral-200/10"> <h2 class="flex text-sm font-semibold text-neutral-950 dark:text-neutral-100"> <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="h-6 w-6 flex-none"><path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" class="fill-neutral-100 stroke-neutral-400 dark:fill-neutral-100/10 dark:stroke-neutral-500"></path><path d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5" class="stroke-neutral-400 dark:stroke-neutral-500"></path></svg><span class="ml-3">Work</span> </h2><ol class="mt-6 space-y-4"> ${works.map((work) => renderTemplate`<li class="flex gap-4"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"> <img alt="company Logo" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" class="h-7 w-7"${addAttribute(work.logoURL, "src")} style="color: transparent;"> </div> <dl class="flex flex-auto flex-wrap gap-x-2"> <dd class="w-full flex-none text-sm font-medium text-neutral-900 dark:text-neutral-100"> ${work.company} </dd> <dt class="sr-only">Role</dt> <dd class="text-xs text-neutral-500 dark:text-neutral-400"> ${work.role} </dd> <dt class="sr-only">Date</dt> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <dt class="sr-only">Company</dt> <dd class="ml-auto text-xs text-neutral-500 dark:text-neutral-500" aria-label="2019 until Present"> <time${addAttribute(work.from, "datetime")}>${work.from}</time> <span aria-hidden="true">—</span> <time${addAttribute(work.to, "datetime")}>${work.to}</time> </dd> ` })} </dl> ` })} </li>`)} </ol><a class="w-full flex justify-center pt-2" href="../../public/cv/omar.pdf" target="_blank"> ${renderComponent($$result, "Button", $$Button, { "class": "bg-primary-black-base dark:bg-secondary-black h-[10.5] justify-center py-2.5 px-5 rounded-full transition duration-100 text-neutral-100 items-center gap-x-2 group-hover:text-neutral-300 hover:text-neutral-300 flex capitalize", "title": "Preview CV", "role": "button", "ariaLabel": "Preview CV" }, { "default": ($$result2) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 stroke-zinc-100 transition group-active:stroke-neutral-500 group-hover:stroke-neutral-500 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path> </svg> ` })} </a> </div>`;
}, "/Users/omarjaff/Development/portfolio/src/components/WorkPanel.astro", void 0);

const $$Astro$a = createAstro();
const $$CertificatePanel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$CertificatePanel;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-2xl border border-neutral-950/5 p-6 dark:border-neutral-200/10"> <h2 class="flex text-sm font-semibold text-neutral-950 dark:text-neutral-100"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 fill-neutral-100 stroke-neutral-400 dark:fill-neutral-100/10 dark:stroke-neutral-500"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"></path> </svg> <span class="ml-3">Certificates</span> </h2> <div class="w-full pt-6 md:flex gap-x-4"> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/Users/omarjaff/Development/portfolio/src/components/CertificatePanel.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/articles/my-first-article-copy.mdoc": () => import('./my-first-article-copy_ETw70pfV.mjs'),"/src/content/articles/my-first-article.mdoc": () => import('./my-first-article_lNC5qjWi.mjs'),"/src/content/projects/carre-four-and-nass-wallet-api-integration.mdoc": () => import('./carre-four-and-nass-wallet-api-integration_d01-Iiph.mjs'),"/src/content/projects/du-circle-website.mdoc": () => import('./du-circle-website_4EkV0RFL.mjs'),"/src/content/projects/my-korek-and-nass-wallet-glue-page.mdoc": () => import('./my-korek-and-nass-wallet-glue-page_4fmB_LtN.mjs'),"/src/content/projects/nass-wallet-unhcr-and-iris-guard-integration-project.mdoc": () => import('./nass-wallet-unhcr-and-iris-guard-integration-project_YQb3ESIq.mjs'),"/src/content/projects/nass-wallet-website.mdoc": () => import('./nass-wallet-website_hCok6Suf.mjs'),"/src/content/projects/project-monitoring-system.mdoc": () => import('./project-monitoring-system_pzXmdGhM.mjs'),"/src/content/projects/the-fee-estimator-tool-for-international-money-transfer.mdoc": () => import('./the-fee-estimator-tool-for-international-money-transfer_zIje-58B.mjs'),"/src/content/projects/wedo-academy-website.mdoc": () => import('./wedo-academy-website_VDaXtzZF.mjs'),"/src/content/projects/western-union-project.mdoc": () => import('./western-union-project_MsyxT1L1.mjs'),"/src/content/projects/word-press-plugin-for-nass-wallet-payment-gateway.mdoc": () => import('./word-press-plugin-for-nass-wallet-payment-gateway_7PQVEDDK.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"articles":{"type":"content","entries":{"my-first-article-copy":"/src/content/articles/my-first-article-copy.mdoc","my-first-article":"/src/content/articles/my-first-article.mdoc"}},"projects":{"type":"content","entries":{"carre-four-and-nass-wallet-api-integration":"/src/content/projects/carre-four-and-nass-wallet-api-integration.mdoc","my-korek-and-nass-wallet-glue-page":"/src/content/projects/my-korek-and-nass-wallet-glue-page.mdoc","du-circle-website":"/src/content/projects/du-circle-website.mdoc","nass-wallet-website":"/src/content/projects/nass-wallet-website.mdoc","wedo-academy-website":"/src/content/projects/wedo-academy-website.mdoc","project-monitoring-system":"/src/content/projects/project-monitoring-system.mdoc","nass-wallet-unhcr-and-iris-guard-integration-project":"/src/content/projects/nass-wallet-unhcr-and-iris-guard-integration-project.mdoc","the-fee-estimator-tool-for-international-money-transfer":"/src/content/projects/the-fee-estimator-tool-for-international-money-transfer.mdoc","western-union-project":"/src/content/projects/western-union-project.mdoc","word-press-plugin-for-nass-wallet-payment-gateway":"/src/content/projects/word-press-plugin-for-nass-wallet-payment-gateway.mdoc"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/articles/my-first-article-copy.mdoc": () => import('./my-first-article-copy_g_ClBlI4.mjs'),"/src/content/articles/my-first-article.mdoc": () => import('./my-first-article_rIoUqM3c.mjs'),"/src/content/projects/carre-four-and-nass-wallet-api-integration.mdoc": () => import('./carre-four-and-nass-wallet-api-integration_LAcWiU15.mjs'),"/src/content/projects/du-circle-website.mdoc": () => import('./du-circle-website_LAMxcU-B.mjs'),"/src/content/projects/my-korek-and-nass-wallet-glue-page.mdoc": () => import('./my-korek-and-nass-wallet-glue-page_iiXL0SUb.mjs'),"/src/content/projects/nass-wallet-unhcr-and-iris-guard-integration-project.mdoc": () => import('./nass-wallet-unhcr-and-iris-guard-integration-project_PMVxqOPu.mjs'),"/src/content/projects/nass-wallet-website.mdoc": () => import('./nass-wallet-website_ZvH9dreE.mjs'),"/src/content/projects/project-monitoring-system.mdoc": () => import('./project-monitoring-system__FVul1_E.mjs'),"/src/content/projects/the-fee-estimator-tool-for-international-money-transfer.mdoc": () => import('./the-fee-estimator-tool-for-international-money-transfer_KceZLs_9.mjs'),"/src/content/projects/wedo-academy-website.mdoc": () => import('./wedo-academy-website_VBdLNU5g.mjs'),"/src/content/projects/western-union-project.mdoc": () => import('./western-union-project_RfDettUk.mjs'),"/src/content/projects/word-press-plugin-for-nass-wallet-payment-gateway.mdoc": () => import('./word-press-plugin-for-nass-wallet-payment-gateway_Mh_6ZD02.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$9 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Index;
  const allProjects = await getCollection("projects");
  const experiences = [
    {
      title: "Development",
      description: "As a seasoned full-stack web developer with 5 years of hands-on experience, I bring a wealth of knowledge to every project. From crafting robust back-end solutions to designing intuitive user interfaces, I'm passionate about transforming ideas into seamless, user-centric web experiences."
    },
    {
      title: "Finance and Technology",
      description: "With a dedicated focus on the intersection of finance and technology, I've spent the last 3 years delving into the dynamic world of fintech. Leading various financial integrations among diverse stakeholders, my expertise lies in harnessing technology to drive innovation and efficiency in the financial landscape."
    },
    {
      title: "Cloud Computing",
      description: "Embarking on my cloud computing journey with AWS, I'm proud to hold an AWS certification. I've embraced the power of cloud technology, leveraging AWS services to optimize performance, enhance scalability, and ensure the seamless operation of digital solutions. The cloud is not just a platform; it's a foundation for transformative possibilities."
    }
  ];
  const works = [
    {
      company: "Free Lancing",
      logoURL: "../../public/images/freelancing.svg",
      role: "Web Developer",
      from: "2019",
      to: "Present"
    },
    {
      company: "NassWallet",
      logoURL: "../../public/images/nasswallet-logo.svg",
      role: "Senior Product Engineer",
      from: "2020",
      to: "2023"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Omar's Portfolio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-32 mx-auto max-w-6xl px-6 lg:px-10"> <header class="my-10 space-y-20"> <div class="space-y-6 lg:space-y-8 mt-12"> <h1 class="text-primary-black-base xl:w-3/4 dark:text-white font-semibold text-4xl md:text-7xl leading-snug">
Full Stack Web Developer & API Integration Specialist
</h1> <p class="dark:text-primary-gray-200 text-primary-black-base md:w-2/3 text-base md:text-lg leading-6 pr-20">
Hello World! I'm Omar, a seasoned full-stack developer with 5 years of
          experience in web enchantment. I'm fluent in HTML, CSS, JavaScript,
          and PHP, and I boast some serious dance moves with financial APIs.
</p> </div> <div class="dark:text-white font-semibold flex w-full justify-between items-center"> <div class="space-y-2"> <p class="font-semibold">Let's Talk</p> <p><a href="mailto:me@omarjaff.com">me@omarjaff.com</a></p> </div> <div class="text-white flex space-x-2 items-center bg-primary-black-base dark:bg-secondary-black px-4 py-3 lg:px-6 rounded-full"> <p>Scroll Down</p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"></path> </svg> </div> </div> </header> <!-- Projects Section --> <section id="projects" class="mx-auto max-w-7xl"> <div> <h2 class="font-display font-semibold text-4xl text-neutral-950 dark:text-neutral-100">
Projects
</h2> </div> <div class="mx-auto max-w-7xl mt-16"> <div class="mx-auto max-w-2xl lg:max-w-none space-y-6"> <div class="grid grid-cols-1 gap-8 lg:grid-cols-3"> ${allProjects.filter(
    (project) => project.data.isPublished && project.data.isFeatured
  ).sort((a, b) => new Date(b.data.date) - new Date(a.data.date)).map((project) => renderTemplate`${renderComponent($$result2, "Project", $$ProjectCard, { "key": project.slug, "url": `/projects/${project.slug}`, "category": project.data.category, "title": project.data.title, "date": project.data.date, "introduction": project.data.introduction, "technologies": project.data.technologies, "imgSrc": project.data.project_icon, "darkThemeImageSrc": project.data.dark_project_icon })}`)} </div> <div> <a href="/projects" class="text-neutral-950 dark:text-neutral-300 flex gap-x-2 items-center w-full justify-end underline-offset-4 underline">View all projects
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" data-slot="icon" class="w-5 h-5 dark:text-neutral-300"> <path fill-rule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clip-rule="evenodd"></path> </svg> </a> </div> </div> </div> </section> <!-- Experties --> <section class="mx-auto max-w-7xl mt-24 sm:mt-32 lg:mt-40"> <div class="mx-auto max-w-2xl lg:max-w-none"> <div class="max-w-2xl" style="opacity: 1; transform: none;"> <h2> <span class="sr-only"> -</span><span class="block font-display tracking-tight [text-wrap:balance] text-4xl font-semibold text-neutral-950 dark:text-neutral-100">Expertise</span> </h2><div class="mt-6 text-base sm:text-lg text-neutral-600 dark:text-neutral-400"> <p>Transforming Challenges into Opportunities</p> </div> </div> </div> <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-16"> <div class="mx-auto max-w-2xl lg:max-w-none"> <div class="lg:flex lg:items-center lg:justify-end"> <div class="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12"> <div class="w-full flex-none lg:w-[45rem]" style="opacity: 1; transform: none;"> <div class="justify-center lg:justify-end relative flex aspect-[719/680] w-full grayscale"> <svg viewBox="0 0 655 680" fill="none" class="h-full"><g clip-path="url(#:S1:-clip)" class="group"><g class="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105"><foreignObject width="655" height="680"><img alt="a development area" loading="lazy" width="2400" height="3000" decoding="async" data-nimg="1" class="w-full bg-neutral-100 object-cover" style="color:transparent;aspect-ratio:655 / 680" sizes="(min-width: 1024px) 41rem, 31rem" src="../../public/images/dev-image.webp"></foreignObject></g><use href="#:S1:-shape" stroke-width="2" class="stroke-neutral-950/10"></use></g><defs><clipPath id=":S1:-clip"><path id=":S1:-shape" d="M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z" fill-rule="evenodd" clip-rule="evenodd"></path></clipPath></defs></svg> </div> </div> </div><div> <ul role="list" class="text-base text-neutral-600 dark:text-neutral-400 mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4"> ${experiences.map((experience) => renderTemplate`<li class="group mt-10 first:mt-0"> <div style="opacity: 1; transform: none;"> <div class="pt-10  group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"> <strong class="font-semibold text-neutral-950 dark:text-neutral-100"> ${experience.title} </strong> ${experience.description} </div> </div> </li>`)} </ul> </div> </div> </div> </div> </section> <!-- Work Experiance and CV --> <section class="space-y-6 grid"> ${renderComponent($$result2, "WorkPanel", $$WorkPanel, { "works": works })} ${renderComponent($$result2, "CertificatePanel", $$CertificatePanel, {}, { "default": ($$result3) => renderTemplate` <iframe name="acclaim-badge" allowtransparency="true" id="embedded-badge-8b1966c6-8337-4c4c-8380-6fbf24ff2190" src="//www.credly.com/embedded_badge/8b1966c6-8337-4c4c-8380-6fbf24ff2190" title="View my verified achievement on Credly." class="h-72 w-full"></iframe> ` })} </section> </main> ` })}`;
}, "/Users/omarjaff/Development/portfolio/src/pages/index.astro", void 0);

const $$file$6 = "/Users/omarjaff/Development/portfolio/src/pages/index.astro";
const $$url$6 = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$6,
  url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$8 = createAstro();
const $$ArticleLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ArticleLayout;
  const { frontmatter } = Astro2.props;
  const publishedDate = new Date(frontmatter.date).toLocaleString("en-US", {
    month: "long",
    year: "numeric"
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": frontmatter.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative px-4 sm:px-8 lg:px-12 my-12"> <div class="mx-auto max-w-2xl lg:max-w-6xl"> <div class="xl:relative"> <div class="mx-auto max-w-2xl"> <a href="/articles"> <button type="button" aria-label="Go back to articles" class="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"><svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"><path d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button> </a> <article> <header class="flex flex-col"> <h1 class="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"> ${frontmatter.title} </h1><time${addAttribute(publishedDate, "datetime")} class="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"><span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span><span class="ml-3">${publishedDate}</span></time> </header> <main class="mt-8 prose lg:prose-xl prose-neutral dark:prose-invert prose-img:rounded-xl hover:prose-img:opacity-90 prose-img:transition-opacity duration-600 prose-a:underline prose-a:text-blue-700 hover:prose-a:text-blue-900"> ${frontmatter.introduction} ${renderSlot($$result2, $$slots["default"])} </main> </article> </div> </div> </div> </div> ` })}`;
}, "/Users/omarjaff/Development/portfolio/src/layouts/ArticleLayout.astro", void 0);

const $$Astro$7 = createAstro();
async function getStaticPaths$1() {
  const blogEntries = await getCollection("articles");
  return blogEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$$1;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "ArticleLayout", $$ArticleLayout, { "frontmatter": entry.data }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/omarjaff/Development/portfolio/src/pages/articles/[...slug].astro", void 0);

const $$file$5 = "/Users/omarjaff/Development/portfolio/src/pages/articles/[...slug].astro";
const $$url$5 = "/articles/[...slug]";

const ____slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$1,
  file: $$file$5,
  getStaticPaths: getStaticPaths$1,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro();
const $$ArticleCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ArticleCard;
  const { headline, introduction, publishedDate, url = "/" } = Astro2.props;
  const FormatedProjectDate = new Date(publishedDate).toLocaleString("en-US", {
    month: "long",
    year: "numeric"
  });
  return renderTemplate`${maybeRenderHead()}<article class="md:grid md:grid-cols-4 md:items-baseline"> <div class="md:col-span-3 group relative flex flex-col items-start"> <h2 class="text-base font-semibold tracking-tight text-neutral-950 dark:text-neutral-100"> <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-neutral-200 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-neutral-800/50 sm:-inset-x-6 sm:rounded-2xl"></div><a${addAttribute(url, "href")}><span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span class="relative z-10">${headline}</span></a> </h2><time class="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-neutral-400 dark:text-neutral-500 pl-3.5"${addAttribute(FormatedProjectDate, "datetime")}><span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true"><span class="h-4 w-0.5 rounded-full bg-neutral-200 dark:bg-neutral-500"></span></span>${FormatedProjectDate}</time><p class="relative z-10 mt-2 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3"> ${introduction} </p><div aria-hidden="true" class="relative z-10 mt-4 flex items-center text-sm font-medium dark:text-neutral-100 text-neutral-800">
Read article<svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="ml-1 h-4 w-4 stroke-current"><path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> </div> </div><time class="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-neutral-400 dark:text-neutral-500"${addAttribute(FormatedProjectDate, "datetime")}>${FormatedProjectDate}</time> </article>`;
}, "/Users/omarjaff/Development/portfolio/src/components/articleCard.astro", void 0);

const $$Astro$5 = createAstro();
const $$Articles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Articles;
  const allArticles = await getCollection("articles");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Articles" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-12 px-4 sm:px-8 mx-auto max-w-6xl space-y-28"> <header class="mx-auto max-w-2xl lg:max-w-none"> <div class="max-w-2xl" style="opacity: 1; transform: none;"> <h2> <span class="sr-only"> -</span><span class="block font-display tracking-tight [text-wrap:balance] text-4xl font-semibold text-neutral-950 dark:text-neutral-100">Writing on software, lifestyle and financial Technology</span> </h2><div class="mt-6 text-base sm:text-lg text-neutral-600 dark:text-neutral-400"> <p>
Welcome to my space where web development, lifestyle, and fintech
            converge. Dive into concise articles crafted with passion and
            personality. Whether you're coding, seeking lifestyle insights, or
            navigating fintech trends, find curated content for the curious
            mind.
</p> </div> </div> </header> <div class="mt-16 sm:mt-20"> <div class="md:border-l md:border-neutral-200 md:pl-6 md:dark:border-neutral-600/40"> <div class="flex max-w-3xl flex-col gap-y-16"> ${allArticles.flatMap(
    (article) => article.data.Published ? renderTemplate`${renderComponent($$result2, "Article", $$ArticleCard, { "url": `/articles/${article.slug}`, "headline": article.data.title, "introduction": article.data.introduction, "publishedDate": article.data.date })}` : []
  )} </div> </div> </div> </div> ` })}`;
}, "/Users/omarjaff/Development/portfolio/src/pages/articles.astro", void 0);

const $$file$4 = "/Users/omarjaff/Development/portfolio/src/pages/articles.astro";
const $$url$4 = "/articles";

const articles = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Articles,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro();
const $$ProjectLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ProjectLayout;
  const { frontmatter } = Astro2.props;
  const FormatedProjectDate = new Date(frontmatter.date).toLocaleString("en-US", {
    year: "numeric"
  });
  return renderTemplate(_a || (_a = __template(['<script type="module">\n  import { animate, scroll } from "../../node_modules/motion";\n  const rootElement = document.getElementById("rootElement");\n\n  scroll(\n    animate(\n      "#projectimg",\n      {\n        filter: [\n          "grayscale(100%)",\n          "grayscale(100%)",\n          "grayscale(0%)",\n          "grayscale(0%)",\n          "grayscale(0%)",\n          "grayscale(100%)",\n          "grayscale(100%)",\n        ],\n      },\n      {\n        easing: ["ease-in", "linear", "ease-out"],\n      }\n    ),\n    {\n      offset: ["start start", "end end"],\n    }\n  );\n<\/script> ', ""])), renderComponent($$result, "Layout", $$Layout, { "title": frontmatter.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-20 dark:text-white"> <header> <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-28 text-center"> <div class="mx-auto max-w-2xl lg:max-w-none"> <div> <h1> <span class="block font-display text-base font-semibold dark:text-neutral-200 text-neutral-950 capitalize">${frontmatter.category} Project</span><span class="sr-only"> -</span><span class="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 dark:text-neutral-100 [text-wrap:balance] sm:text-6xl mx-auto">${frontmatter.title}</span> </h1><div class="mt-6 max-w-3xl text-lg text-neutral-600 dark:text-neutral-400 mx-auto"> <p> ${frontmatter.introduction} </p> </div> </div> </div> </div> <div class="mt-24 border-t border-neutral-200 dark:border-neutral-800 bg-transparent sm:mt-32 lg:mt-40"> <div class="mx-auto max-w-7xl px-6 lg:px-8"> <div class="mx-auto max-w-2xl lg:max-w-none"> <div class="mx-auto max-w-5xl"> <dl class="-mx-6 grid grid-cols-1 text-sm text-neutral-950 dark:text-neutral-100 sm:mx-0 sm:grid-cols-3"> <div class="border-t border-neutral-200 dark:border-neutral-800 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0"> <dt class="font-semibold dark:font-bold">Client</dt><dd> ${frontmatter.client} </dd> </div><div class="border-t border-neutral-200 dark:border-neutral-800 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0"> <dt class="font-semibold dark:font-bold">Year</dt><dd> <time${addAttribute(FormatedProjectDate, "datetime")}>${FormatedProjectDate}</time> </dd> </div><div class="border-t border-neutral-200 dark:border-neutral-800 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0"> <dt class="font-semibold dark:font-bold">Service</dt><dd class="dark:"> ${frontmatter.category} </dd> </div> </dl> </div> </div> </div> </div><div class="border-y border-neutral-200 bg-neutral-100 dark:bg-neutral-900/80 dark:border-neutral-800"> <div class="-my-px mx-auto max-w-[76rem] bg-neutral-200 dark:bg-neutral-800"> ${frontmatter.image && renderTemplate`<div class="group relative"> <img id="projectimg"${addAttribute(`${frontmatter.title}'s project image`, "alt")} width="3648" height="3117" decoding="async" class="w-full" sizes="(min-width: 1216px) 76rem, 100vw"${addAttribute(`${frontmatter.image}`, "src")}> </div>`} </div> </div> </header> <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40"> <div class="mx-auto max-w-3xl"> <div class="grayscale-0 prose lg:prose-xl hover:prose-img:opacity-90 prose-img:transition-opacity duration-600 prose-a:underline prose-a:text-blue-700 hover:prose-a:text-blue-900 prose-neutral dark:prose-invert"> ${renderSlot($$result2, $$slots["default"])} ${frontmatter.whatWeDid && renderTemplate`<h2 class="dark:text-neutral-100">What we did</h2>`} </div> <h2 class="mt-12 font-semibold dark:text-neutral-200 text-neutral-950 text-2xl">What is done?</h2> <ul role="list" class="flex flex-wrap gap-4 sm:gap-x-4 list-none mt-6"> ${frontmatter.technologies && frontmatter.technologies.map((tech) => renderTemplate`<li class="rounded-full bg-neutral-100 dark:bg-neutral-700 dark:text-neutral-200 px-4 py-1.5 text-base text-neutral-600 hover:bg-neutral-300 dark:hover:bg-neutral-800 transition-colors duration-200"> ${tech} </li>`)} </ul> </div> </div> </div> ` }));
}, "/Users/omarjaff/Development/portfolio/src/layouts/ProjectLayout.astro", void 0);

const $$Astro$3 = createAstro();
async function getStaticPaths() {
  const projects = await getCollection("projects");
  return projects.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "ProjectLayout", $$ProjectLayout, { "frontmatter": entry.data }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/omarjaff/Development/portfolio/src/pages/projects/[...slug].astro", void 0);

const $$file$3 = "/Users/omarjaff/Development/portfolio/src/pages/projects/[...slug].astro";
const $$url$3 = "/projects/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file$3,
  getStaticPaths,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Projects;
  const allProjects = await getCollection("projects");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-12 px-4 sm:px-8 mx-auto max-w-6xl space-y-28"> <div class="mx-auto max-w-2xl lg:max-w-none"> <div class="max-w-2xl" style="opacity: 1; transform: none;"> <h2> <span class="sr-only"> -</span><span class="block font-display tracking-tight [text-wrap:balance] text-4xl font-semibold text-neutral-950 dark:text-neutral-100">My Projects</span> </h2><div class="mt-6 text-base sm:text-lg text-neutral-600 dark:text-neutral-400"> <p>
Dive into my digital playground! Here, you'll find a mix of cool
            stuff I've been up to. From whipping up user-friendly experiences to
            tackling tricky tech challenges, these projects are like my digital
            adventures.
</p> </div> </div> </div> <div class="mx-auto max-w-2xl lg:max-w-none space-y-6"> <div class="grid grid-cols-1 gap-8 lg:grid-cols-3"> ${allProjects.filter((project) => project.data.isPublished).sort((a, b) => new Date(b.data.date) - new Date(a.data.date)).map((project) => renderTemplate`${renderComponent($$result2, "Project", $$ProjectCard, { "key": project.slug, "url": `/projects/${project.slug}`, "category": project.data.category, "title": project.data.title, "date": project.data.date, "introduction": project.data.introduction, "technologies": project.data.technologies, "imgSrc": project.data.project_icon, "darkThemeImageSrc": project.data.dark_project_icon })}`)} </div> </div> </div> ` })}`;
}, "/Users/omarjaff/Development/portfolio/src/pages/projects.astro", void 0);

const $$file$2 = "/Users/omarjaff/Development/portfolio/src/pages/projects.astro";
const $$url$2 = "/projects";

const projects = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

async function GET(context) {
  return rss({
    title: "My Articles | Blog",
    description: "My Articles",
    site: context.site,
    items: await pagesGlobToRssItems(/* #__PURE__ */ Object.assign({})),
    customData: `<language>en-us</language>`,
  });
}

const rss_xml = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Me" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-6xl px-6 lg:px-8 mt-12"> <header class="relative space-y-8"> <div class="flex w-full dark:text-neutral-100 text-neutral-950 text-5xl sm:text-8xl lg:text-9xl font-bold leading-none"> <h1 class="z-10">Hey, <br> I'm Omar</h1> <img class="w-36 sm:w-52 lg:w-96 lg:-top-24 -top-7 right-0 md:right-12 md:-top-5 object-contain absolute rounded-3xl contrast-150 grayscale-0 dark:grayscale-0 saturate-50" src="/public/images/me.webp" alt="omar jaff"> </div> <div> <a class="text-sm my-12 lg:text-xl z-10 text-neutral-100 font-semibold items-center gap-x-2 bg-neutral-950 dark:bg-neutral-100 dark:text-neutral-950 px-4 py-2.5 rounded-full" href="mailto:me@omarjaff.com">me@omarjaff.com
</a> </div> </header> <main class="mt-10 sm:mt-16 md:mt-32 lg:mt-40 space-y-20 dark:text-neutral-100 text-neutral-950"> <div class="text-neutral-700 dark:text-neutral-300 text-base prose lg:prose-xl dark:prose-invert"> <p>
I'm a passionate full-stack web developer with a proven track record
          of transforming ideas into digital reality. With 5 years of hands-on
          experience, I thrive on creating user-centric web experiences that
          resonate.
</p> <h3>What I Bring to the Table:</h3> <h4>🚀 Expertise in Development:</h4> <p>
I specialize in full-stack web development, bringing ideas to life
          through robust back-end solutions and intuitive user interfaces.
          Crafting seamless digital experiences is not just a job for me; it's a
          creative journey.
</p> <h4>💡 Fintech Innovator:</h4> <p>
In the dynamic world of fintech, I've spent the past 3 years leading
          various financial integrations. My passion lies in leveraging
          technology to drive innovation and efficiency in the financial
          landscape, creating solutions that make an impact.
</p> <h4>☁️ Cloud Computing Enthusiast:</h4> <p>
Certified by AWS, I've embraced the power of cloud technology. My
          journey with AWS involves optimizing performance, enhancing
          scalability, and ensuring the seamless operation of digital solutions.
          The cloud is not just a platform; it's a foundation for transformative
          possibilities.
</p> <h3>What Drives Me:</h3> <h4>🌐 Empowering Digital Experiences:</h4> <p>
Every line of code I write is dedicated to empowering digital
          experiences. I believe in creating solutions that not only meet but
          exceed expectations, leaving a lasting impression on users.
</p> <h4>🛠️ Innovation at Every Step:</h4> <p>
Whether it's developing a custom WordPress plugin, bridging APIs, or
          crafting a disaster recovery plan, I approach each project with
          innovation at its core. Challenges are opportunities to find creative
          solutions.
</p> <h4>Join Me on This Digital Journey:</h4> <p>
Let's connect and explore the endless possibilities of technology.
          Whether you're a fellow developer, a stakeholder in fintech, or
          someone curious about the digital realm, I invite you to be a part of
          this journey. Together, let's turn ideas into digital masterpieces.
<a href="mailto:me@omarjaff.com">me@omarjaff.com</a> </p> </div> </main> </div> ` })}`;
}, "/Users/omarjaff/Development/portfolio/src/pages/about.astro", void 0);

const $$file$1 = "/Users/omarjaff/Development/portfolio/src/pages/about.astro";
const $$url$1 = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`<html class="h-full"> ${maybeRenderHead()}<body class="h-full"> <main class="relative isolate min-h-full"> <img src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-top"> <div class="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8"> <p class="text-base font-semibold leading-8 text-white">404</p> <h1 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
Page not found
</h1> <p class="mt-4 text-base text-white/70 sm:mt-6">
Sorry, we couldn't find the page you're looking for.
</p> <div class="mt-10 flex justify-center"> <a href="/" class="text-sm font-semibold leading-7 text-white"><span aria-hidden="true">&larr;</span> Back to home</a> </div> </div> </main> </body></html>`;
}, "/Users/omarjaff/Development/portfolio/src/pages/404.astro", void 0);

const $$file = "/Users/omarjaff/Development/portfolio/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { ____slug_$1 as _, articles as a, ____slug_ as b, about as c, _404 as d, index as i, projects as p, rss_xml as r };
