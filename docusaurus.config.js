// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Discourse Developer Docs",
  tagline:
    "Customize and integrate with Discourse, the online home for your community",
  url: "https://docs-demo.dtaylor.uk",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://discourse.org/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "davidtaylorhq", // Usually your GitHub org/user name.
  projectName: "discourse-docs-experiment", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "Discourse Developer Docs",
        logo: {
          alt: "Discourse Logo",
          src: "https://d11a6trkgmumsb.cloudfront.net/original/3X/9/a/9af9456df3a40537038643d987ffcbd553ad3296.svg",
        },
        items: [
          {
            type: "doc",
            docId: "guides/intro",
            position: "left",
            label: "Guides",
          },
          {
            type: "doc",
            docId: "reference/intro",
            position: "left",
            label: "Reference",
          },
          {
            label: "REST API",
            position: "left",
            to: "/docs/rest-api/discourse-api-documentation",
          },
          {
            href: "https://github.com/discourse/discourse",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Guides",
                to: "/docs/guides/intro",
              },
              {
                label: "Reference",
                to: "/docs/reference/intro",
              },
              {
                label: "REST API",
                to: "/docs/rest-api/discourse-api-documentation",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Meta",
                href: "https://meta.discourse.org",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/discourse",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "discourse.org",
                to: "https://discourse.org",
              },
              {
                label: "Blog",
                to: "https://blog.discourse.org",
              },
              {
                label: "GitHub",
                href: "https://github.com/discourse/discourse",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Civilized Discourse Construction Kit Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "csharp", "php"],
      },
    }),

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          petstore: {
            specPath: "examples/openapi.yml",
            outputDir: "docs/rest-api",
            hideSendButton: true,
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
        },
      },
    ],
    require.resolve("docusaurus-lunr-search"),
  ],

  themes: ["docusaurus-theme-openapi-docs"],
};

module.exports = config;
