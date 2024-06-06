// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Roombanker wiki',
  tagline: 'Roombanker wiki',
  favicon: 'img/favicon.png',
  noIndex: false,
  // Set the production url of your site here
  url: 'https://wiki.roombanker.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dusun001', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
        require.resolve('@easyops-cn/docusaurus-search-local'),
        {
            hashed: true,
            // language: ['en', 'zh'],
            docsRouteBasePath: '/',
        },
    ],
],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Roombanker',
          srcDark: '/img/dark-logo.png',
          src: '/img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'user-manual',
            position: 'left',
            label: 'User Manual',
            className: 'navbar_doc_items',
          },
          {
            type: 'doc',
            docId: 'specification-list',
            position: 'left',
            label: 'Specification',
            className: 'navbar_doc_items',
          },
          {
            type: 'doc',
            docId: 'quick-start-guide-list',
            position: 'left',
            label: 'Quick Start Guide',
            className: 'navbar_doc_items',
          },
          {
            to: 'https://docs.google.com/forms/d/e/1FAIpQLSeeSv5VR42MGoAU8d-X9ifmR5iVBR11sLnqLxeu3ikDG_UAAQ/viewform?usp=sf_link',
            position: 'left',
            className: 'navbar_doc_items',
            // className: 'header-shop-link',
            label: 'Contact Us',
          },
          {
            to: 'https://www.roombanker.com/',
            position: 'right',
            className: 'navbar_doc_right_items',
            // className: 'header-shop-link',
            label: 'Shop 👜',
          },
          {
            href: 'https://github.com/Roombanker01/wiki',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Navigation',
            items: [
              {
                label: 'User Manual',
                to: '/user-manual',
              },
              {
                label: 'Specification',
                to: '/specification-list',
              },
              {
                label: 'Quick Start Guide',
                to: '/quick-start-guide-list',
              },
            ],
          },
          {
            title: 'Devices',
            items: [
              {
                label: 'Home Security Hub (Pico)',
                to: '/hub/home-security-hub-pico/specification',
              },
              {
                label: 'Home Security Hub (Station)',
                to: '/hub/home-security-hub-station/specification',
              },
              {
                label: 'Motion Sensor',
                to: '/motion-sensor/pir-sensor/specification',
              },
              {
                label: 'Door Sensor',
                to: '/door-sensor/door-magnetic-sensor/specification',
              },
              {
                label: 'Panic Button',
                to: '/panic-button/panic-button/specification',
              },
              {
                label: 'Smoke Sensor',
                to: '/environmental-monitoring-sensor/smoke-sensor/specification',
              }
            ],
          },
          {
            title: 'Devices',
            items: [
              {
                label: 'Temperature Humidity Monitor',
                to: '/environmental-monitoring-sensor/temperature-humidity-monitor/specification',
              },
              {
                label: 'Water Leak Detector',
                to: '/environmental-monitoring-sensor/water-leak-detector/specification',
              },
              {
                label: 'Indoor Siren',
                to: '/alarm-siren/indoor-siren/specification',
              },
              {
                label: 'Outdoor Siren',
                to: '/alarm-siren/outdoor-siren/specification',
              },
              {
                label: 'Smart Thermostat',
                to: '/automation-device/smart-thermostat/specification',
              }
            ],
          },
          {
            title: 'Devices',
            items: [
              {
                label: 'Wall Switch',
                to: '/automation-device/wall-switch/specification',
              },
              {
                label: 'Smart Plug (EU)',
                to: '/automation-device/smart-plug-eu/specification',
              },
              {
                label: 'Smart Plug (US)',
                to: '/automation-device/smart-plug-us/specification',
              },
              {
                label: 'Keypad',
                to: '/control-device/keypad/specification',
              },
              {
                label: 'Keyfob',
                to: '/control-device/keyfob/specification',
              },
              {
                label: 'Relay',
                to: '/automation-device/relay/specification',
              }
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'Roombanker Website',
                href: 'https://www.roombanker.com/',
              },
              {
                label: 'Roombanker Solutions',
                href: 'https://www.roombanker.com/solution/',
              },
              {
                label: 'Company Intro',
                href: 'https://www.roombanker.com/about-us/',
              },
              {
                label: 'Company News',
                href: 'https://www.roombanker.com/news/',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Roombanker.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'L8CL4JH3FE',
        apiKey: 'd4f73bbe43b5a64479a558e8d83dfc97',
        indexName: 'roombanker',
        contextualSearch: false,
        searchParameters: {},
        searchPagePath: 'search',
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
    }),
};

module.exports = config;
