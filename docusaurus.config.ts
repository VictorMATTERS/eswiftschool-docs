import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'eSwiftSchool',
  tagline: 'Your Ultimate School Management Solution',
  favicon: 'img/favicon.ico',

  // Set your actual production domain
  url: 'https://docs.eswiftschool.com',
  baseUrl: '/',

  // If you plan to use GitHub Pages, adjust these
  organizationName: 'eswiftschool', // your GitHub org/user name
  projectName: 'documentation', // your repo name if deployed from GitHub

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/eswiftschool/documentation/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/eswiftschool/documentation/edit/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/eswiftschool-social-card.jpg',
    navbar: {
      title: 'eSwiftSchool',
      logo: {
        alt: 'eSwiftSchool Logo',
        src: 'img/logo.png',
      },
      items: [
        { to: '/docs/admin/intro', label: 'Admin', position: 'left' },
        { to: '/docs/parent/intro', label: 'Parent', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://eswiftschool.com',
          label: 'eSwiftSchool',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Admin Tutorial',
              to: '/docs/admin/intro',
            },
            {
              label: 'Parent Tutorial',
              to: '/docs/parent/intro',
            },
          ],
        },
        {
          title: 'Connect with us',
          items: [
            {
              label: 'Twitter',
              href: 'https://x.com/eswiftschool',
            },
            {
              label: 'Facebook',
              href: 'https://facebook.com/eswiftschool',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'eSwiftSchool',
              href: 'https://eswiftschool.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} eSwiftSchool`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
