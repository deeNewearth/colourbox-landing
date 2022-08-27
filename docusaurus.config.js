// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ColourBox',
  tagline: 'all in one monetization tool for creators.',
  url: 'https://colourbox.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'colourbox', // Usually your GitHub org/user name.
  projectName: 'colourbox', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://code.krystalhouse.labizbille.com/newEarth/ne-tokenized/colourbox-nft/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://code.krystalhouse.labizbille.com/newEarth/ne-tokenized/colourbox-nft/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        //disableSwitch: true
      },
      navbar: {
        logo: {
          alt: 'ColourBox Logo',
          src: 'img/colourbox_logo_label.png',
        },

        items: [
          { to: '/blog', label: 'RESOURCES', position: 'right' },
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'FAQs',
          },
          { to: '/contact-us', label: 'CONTACT US', position: 'right' },
          // {
          //   to: 'https://rinkeby.staging.colourbox.io/',
          //   label: 'GET STARTED',
          //   position: 'right',
          //   className: 'button button--default button--md button-mr button-rounded'
          // },
          /*{
            href: 'https://app.colourbox.io',
            label: 'Start streaming',
            position: 'right',
          },*/
        ],
      },
      footer: {
        style: 'dark',
        links: [
          /*{
            title: 'Docs',
            items: [
              {
                label: 'Getting started',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
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
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },*/
        ],
        copyright: `Copyright © ${new Date().getFullYear()} New Earth Art & Tech LLC.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
