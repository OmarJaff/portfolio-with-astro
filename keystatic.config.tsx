// keystatic.config.ts
import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
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
          defaultValue: false,
        }),

        date: fields.date({
          label: "Publish Date",
          validation: { isRequired: true },
        }),
        introduction: fields.text({
          label: "Introduction",
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
              underline: true,
            },
            listTypes: {
              ordered: true,
              unordered: true,
            },
            headingLevels: [1, 2, 3, 4, 5, 6],
            blockTypes: {
              blockquote: true,
              code: true,
            },
            softBreaks: true,
            alignment: true,
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
                description:
                  "The text to display under the image in a caption.",
              }),
            },
          },
        }),
      },
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
          defaultValue: false,
        }),
        isFeatured: fields.checkbox({
          label: "Featured",
          defaultValue: false,
        }),
        date: fields.date({
          label: "Project Date",
          validation: { isRequired: true },
        }),
        category: fields.multiselect({
          label: "Project Category",
          options: [
            { label: "API Integration", value: "API Integration" },
            { label: "Web Development", value: "Web Development" },
            { label: "Mobile Development", value: "Mobile Development" },
          ],
        }),
        clinet: fields.text({ label: "Clinet Name" }),
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
            {
              label: "WordPress Plugin",
              value: "WordPress Plugin Development",
            },
            { label: "Open Souce", value: "Open Source" },
            {
              label: "Custom Integration Flow",
              value: "Custom Integration Flow",
            },
            { label: "Quality Assurance", value: "Quality Assurance" },
            { label: "Project Management", value: "Project Management" },
          ],
        }),
        project_icon: fields.image({
          label: "Project Icon (For Light Theme)",
          validation: { isRequired: true },
          directory: "/public/images/articles/",
          publicPath: "/public/images/articles/",
        }),
        dark_project_icon: fields.image({
          label: "Project Icon (For Dark Theme)",
          validation: { isRequired: true },
          directory: "/public/images/articles/",
          publicPath: "/public/images/articles/",
        }),
        image: fields.image({
          label: "Project Image",
          validation: { isRequired: true },
          directory: "/public/images/articles/",
          publicPath: "/public/images/articles/",
        }),
        introduction: fields.text({
          label: "Introduction",
          description: "Short Introduction about the project in few words",
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
              underline: true,
            },
            listTypes: {
              ordered: true,
              unordered: true,
            },
            headingLevels: [1, 2, 3, 4, 5, 6],
            blockTypes: {
              blockquote: true,
              code: true,
            },
            softBreaks: true,
            alignment: true,
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
                description:
                  "The text to display under the image in a caption.",
              }),
            },
          },
        }),
      },
    }),
  },
});
