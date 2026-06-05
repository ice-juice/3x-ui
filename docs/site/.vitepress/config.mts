import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '3x-ui Docs',
  description: 'A bilingual operator guide for the 3x-ui panel.',
  base: '/3x-ui/',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#0f172a' }],
    ['meta', { property: 'og:title', content: '3x-ui Docs' }],
    ['meta', { property: 'og:description', content: 'Modern documentation for 3x-ui operators.' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '3x-ui Docs',
    nav: [
      { text: 'Guide', link: '/guide/system-status' },
      { text: 'Reality', link: '/inbounds/reality' },
      { text: 'Wiki', link: 'https://github.com/ice-juice/3x-ui/wiki' },
      { text: 'GitHub', link: 'https://github.com/ice-juice/3x-ui' }
    ],
    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Home', link: '/' },
          { text: 'System Status', link: '/guide/system-status' }
        ]
      },
      {
        text: 'Operate',
        items: [
          { text: 'Inbounds', link: '/inbounds/' },
          { text: 'Reality Inbound', link: '/inbounds/reality' },
          { text: 'Clients', link: '/guide/clients' },
          { text: 'Groups', link: '/guide/groups' },
          { text: 'Nodes', link: '/guide/nodes' }
        ]
      },
      {
        text: 'Configure',
        items: [
          { text: 'Panel Settings', link: '/guide/panel-settings' },
          { text: 'Xray Configuration', link: '/guide/xray-configuration' }
        ]
      },
      {
        text: 'Integrate',
        items: [
          { text: 'API Docs', link: '/guide/api-docs' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ice-juice/3x-ui' }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: 'On this page'
    },
    docFooter: {
      prev: 'Previous',
      next: 'Next'
    },
    lastUpdated: {
      text: 'Updated',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    footer: {
      message: 'Built for 3x-ui operators.',
      copyright: 'Documentation content follows the repository license.'
    }
  }
})
