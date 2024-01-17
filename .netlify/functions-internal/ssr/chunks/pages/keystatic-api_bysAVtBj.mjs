import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import { parseString } from 'set-cookie-parser';
import { config as config$1, collection, fields } from '@keystatic/core';

function makeHandler(_config) {
  var _config$clientId, _config$clientSecret, _config$secret;
  const handler = makeGenericAPIRouteHandler({
    ..._config,
    clientId: (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : tryOrUndefined(() => {
      return {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.KEYSTATIC_GITHUB_CLIENT_ID;
    }),
    clientSecret: (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : tryOrUndefined(() => {
      return {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.KEYSTATIC_GITHUB_CLIENT_SECRET;
    }),
    secret: (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : tryOrUndefined(() => {
      return {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.KEYSTATIC_SECRET;
    })
  }, {
    slugEnvName: "PUBLIC_KEYSTATIC_GITHUB_APP_SLUG"
  });
  return async function keystaticAPIRoute(context) {
    const {
      body,
      headers,
      status
    } = await handler(context.request);
    let headersInADifferentStructure = /* @__PURE__ */ new Map();
    if (headers) {
      if (Array.isArray(headers)) {
        for (const [key, value] of headers) {
          if (!headersInADifferentStructure.has(key.toLowerCase())) {
            headersInADifferentStructure.set(key.toLowerCase(), []);
          }
          headersInADifferentStructure.get(key.toLowerCase()).push(value);
        }
      } else if (typeof headers.entries === "function") {
        for (const [key, value] of headers.entries()) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
        if ("getSetCookie" in headers && typeof headers.getSetCookie === "function") {
          const setCookieHeaders2 = headers.getSetCookie();
          if (setCookieHeaders2 !== null && setCookieHeaders2 !== void 0 && setCookieHeaders2.length) {
            headersInADifferentStructure.set("set-cookie", setCookieHeaders2);
          }
        }
      } else {
        for (const [key, value] of Object.entries(headers)) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
      }
    }
    const setCookieHeaders = headersInADifferentStructure.get("set-cookie");
    headersInADifferentStructure.delete("set-cookie");
    if (setCookieHeaders) {
      for (const setCookieValue of setCookieHeaders) {
        var _options$sameSite;
        const {
          name,
          value,
          ...options
        } = parseString(setCookieValue);
        const sameSite = (_options$sameSite = options.sameSite) === null || _options$sameSite === void 0 ? void 0 : _options$sameSite.toLowerCase();
        context.cookies.set(name, value, {
          domain: options.domain,
          expires: options.expires,
          httpOnly: options.httpOnly,
          maxAge: options.maxAge,
          path: options.path,
          sameSite: sameSite === "lax" || sameSite === "strict" || sameSite === "none" ? sameSite : void 0
        });
      }
    }
    return new Response(body, {
      status,
      headers: [...headersInADifferentStructure.entries()].flatMap(([key, val]) => val.map((x) => [key, x]))
    });
  };
}
function tryOrUndefined(fn) {
  try {
    return fn();
  } catch {
    return void 0;
  }
}

const config = config$1({
  storage: {
    kind: "local"
  },
  collections: {
    articles: collection({
      label: "Articles",
      slugField: "title",
      path: "src/content/articles/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        Published: fields.checkbox({
          label: "Published",
          defaultValue: false
        }),
        date: fields.date({
          label: "Publish Date",
          validation: { isRequired: true }
        }),
        introduction: fields.text({
          label: "Introduction"
        }),
        content: fields.document({
          label: "Content",
          formatting: {
            inlineMarks: {
              bold: true,
              italic: true,
              strikethrough: true,
              code: true,
              subscript: true,
              superscript: true,
              underline: true
            },
            listTypes: {
              ordered: true,
              unordered: true
            },
            headingLevels: [1, 2, 3, 4, 5, 6],
            blockTypes: {
              blockquote: true,
              code: true
            },
            softBreaks: true,
            alignment: true
          },
          tables: true,
          dividers: true,
          links: true,
          images: {
            directory: "/public/images/articles/",
            publicPath: "/public/images/articles/",
            schema: {
              title: fields.text({
                label: "Caption",
                description: "The text to display under the image in a caption."
              })
            }
          }
        })
      }
    }),
    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "src/content/projects/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        isPublished: fields.checkbox({
          label: "Published",
          defaultValue: false
        }),
        isFeatured: fields.checkbox({
          label: "Featured",
          defaultValue: false
        }),
        date: fields.date({
          label: "Project Date",
          validation: { isRequired: true }
        }),
        category: fields.multiselect({
          label: "Project Category",
          options: [
            { label: "API Integration", value: "API Integration" },
            { label: "Web Development", value: "Web Development" },
            { label: "Mobile Development", value: "Mobile Development" },
            { label: "Plugin Development", value: "Plugin Development" },
            {
              label: "Web Development & API Integration",
              value: "Web Development & API Integration"
            },
            {
              label: "Mobile & Web Development",
              value: "Mobile & Web Development"
            }
          ]
        }),
        client: fields.text({ label: "Clinet Name" }),
        technologies: fields.multiselect({
          label: "Project Technologies (What I did)",
          options: [
            { label: "Winter CMS", value: "Winter CMS" },
            { label: "October CMS", value: "October CMS" },
            { label: "API Integration", value: "API Integration" },
            { label: "PHP", value: "PHP" },
            { label: "Laravel", value: "Laravel" },
            { label: "Alpine.JS", value: "Alpine.JS" },
            { label: "TailwindCSS", value: "TailwindCSS" },
            { label: "Headless CMS", value: "Headless CMS" },
            { label: "Strapi CMS", value: "Strapi CMS" },
            { label: "Flutter", value: "Flutter" },
            {
              label: "Mobie Application Development",
              value: "Mobie Application Development"
            },
            {
              label: "WordPress Plugin",
              value: "WordPress Plugin Development"
            },
            { label: "Open Souce", value: "Open Source" },
            {
              label: "Custom Integration Flow",
              value: "Custom Integration Flow"
            },
            { label: "Quality Assurance", value: "Quality Assurance" },
            { label: "Project Management", value: "Project Management" }
          ]
        }),
        project_icon: fields.image({
          label: "Project Icon (For Light Theme)",
          validation: { isRequired: true },
          directory: "/public/images/projects/",
          publicPath: "/public/images/projects/"
        }),
        dark_project_icon: fields.image({
          label: "Project Icon (For Dark Theme)",
          validation: { isRequired: true },
          directory: "/public/images/projects/",
          publicPath: "/public/images/projects/"
        }),
        image: fields.image({
          label: "Project Image",
          validation: { isRequired: false },
          directory: "/public/images/projects/",
          publicPath: "/public/images/projects/"
        }),
        introduction: fields.text({
          label: "Introduction",
          description: "Short Introduction about the project in few words"
        }),
        content: fields.document({
          label: "Content",
          formatting: {
            inlineMarks: {
              bold: true,
              italic: true,
              strikethrough: true,
              code: true,
              subscript: true,
              superscript: true,
              underline: true
            },
            listTypes: {
              ordered: true,
              unordered: true
            },
            headingLevels: [1, 2, 3, 4, 5, 6],
            blockTypes: {
              blockquote: true,
              code: true
            },
            softBreaks: true,
            alignment: true
          },
          tables: true,
          dividers: true,
          links: true,
          images: {
            directory: "/public/images/projects/",
            publicPath: "/public/images/projects/",
            schema: {
              title: fields.text({
                label: "Caption",
                description: "The text to display under the image in a caption."
              })
            }
          }
        })
      }
    })
  }
});

const all = makeHandler({ config });
const ALL = all;

const prerender = false;

export { ALL, all, prerender };
