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
          formatting: true,
          dividers: true,
          links: true,
          images: true,
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

        Published: fields.checkbox({
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
            { label: "API Integration", value: "api" },
            { label: "Web Development", value: "development" },
            { label: "Mobile Development", value: "mobile-dev" },
          ],
        }),
        clinet: fields.text({ label: "Clinet Name" }),
        technologies: fields.multiselect({
          label: "Project Technologies (What I did)",
          options: [
            { label: "Winter CMS", value: "winter-cms" },
            { label: "October CMS", value: "october-cms" },
            { label: "API Integration", value: "api-int" },
            { label: "PHP", value: "php" },
            { label: "Laravel", value: "laravel" },
            { label: "Alpine.JS", value: "alpine" },
            { label: "TailwindCSS", value: "tailwind" },
            { label: "WordPress Plugin", value: "wordpress" },
            { label: "Open Souce", value: "isOpenSourced" },
            { label: "Custom Integration Flow", value: "flow" },
            { label: "Quality Assurance", value: "qa" },
            { label: "Project Management", value: "management" },
          ],
        }),
        project_icon: fields.image({
          label: "Project Icon (For Light Theme)",
          validation: { isRequired: true },
          publicPath: "public/images/projects",
        }),
        dark_project_icon: fields.image({
          label: "Project Icon (For Dark Theme)",
          validation: { isRequired: true },
          publicPath: "public/images/projects",
        }),
        image: fields.image({
          label: "Project Image",
          validation: { isRequired: true },
          publicPath: "public/images/projects",
        }),
        introduction: fields.text({
          label: "Introduction",
          description: "Short Introduction about the project in few words",
        }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
});
