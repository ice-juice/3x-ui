import { defineConfig } from 'vitepress'

const englishNav = [
  { text: 'Guide', link: '/guide/system-status' },
  { text: 'Deployment Scenarios', link: '/deployment-scenarios/' },
  { text: 'API', link: '/guide/api-docs' },
  { text: 'Wiki', link: 'https://github.com/ice-juice/3x-ui/wiki' },
  { text: 'GitHub', link: 'https://github.com/ice-juice/3x-ui' }
]

const englishSidebar = [
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
      { text: 'Clients', link: '/guide/clients' },
      { text: 'Groups', link: '/guide/groups' },
      { text: 'Nodes', link: '/guide/nodes' }
    ]
  },
  {
    text: 'Panel Settings',
    items: [
      { text: 'General', link: '/guide/panel-settings' },
      { text: 'Security Settings', link: '/guide/security-settings' },
      { text: 'Telegram Bot', link: '/guide/telegram-bot-settings' },
      { text: 'Subscription Settings', link: '/guide/subscription-settings' },
      { text: 'Sub Formats', link: '/guide/subscription-formats' }
    ]
  },
  {
    text: 'Xray Configuration',
    items: [
      { text: 'Basic Configuration', link: '/guide/xray-configuration' },
      { text: 'Routing Rules', link: '/guide/xray-routing' },
      { text: 'Outbounds', link: '/guide/xray-outbounds' },
      { text: 'Balancers', link: '/guide/xray-balancers' },
      { text: 'DNS', link: '/guide/xray-dns' },
      { text: 'Advanced Configuration', link: '/guide/xray-advanced' }
    ]
  },
  {
    text: 'Deployment Scenarios',
    items: [
      { text: 'Overview', link: '/deployment-scenarios/' },
      { text: 'Reality Inbound', link: '/deployment-scenarios/reality-inbound' }
    ]
  },
  {
    text: 'Integrate',
    items: [
      { text: 'API Docs', link: '/guide/api-docs' }
    ]
  }
]

const chineseNav = [
  { text: '指南', link: '/zh/guide/system-status' },
  { text: '部署场景', link: '/zh/deployment-scenarios/' },
  { text: 'API', link: '/zh/guide/api-docs' },
  { text: 'Wiki', link: 'https://github.com/ice-juice/3x-ui/wiki' },
  { text: 'GitHub', link: 'https://github.com/ice-juice/3x-ui' }
]

const chineseSidebar = [
  {
    text: '概览',
    items: [
      { text: '首页', link: '/zh/' },
      { text: '系统状态', link: '/zh/guide/system-status' }
    ]
  },
  {
    text: '运维',
    items: [
      { text: '入站', link: '/zh/inbounds/' },
      { text: '客户端', link: '/zh/guide/clients' },
      { text: '分组', link: '/zh/guide/groups' },
      { text: '节点', link: '/zh/guide/nodes' }
    ]
  },
  {
    text: '面板设置',
    items: [
      { text: '常规', link: '/zh/guide/panel-settings' },
      { text: '安全设定', link: '/zh/guide/security-settings' },
      { text: 'Telegram 机器人', link: '/zh/guide/telegram-bot-settings' },
      { text: '订阅设置', link: '/zh/guide/subscription-settings' },
      { text: 'Sub Formats', link: '/zh/guide/subscription-formats' }
    ]
  },
  {
    text: 'Xray 配置',
    items: [
      { text: '基础配置', link: '/zh/guide/xray-configuration' },
      { text: '路由规则', link: '/zh/guide/xray-routing' },
      { text: '出站', link: '/zh/guide/xray-outbounds' },
      { text: '负载均衡', link: '/zh/guide/xray-balancers' },
      { text: 'DNS', link: '/zh/guide/xray-dns' },
      { text: '高级配置', link: '/zh/guide/xray-advanced' }
    ]
  },
  {
    text: '部署场景',
    items: [
      { text: '总览', link: '/zh/deployment-scenarios/' },
      { text: 'Reality 入站', link: '/zh/deployment-scenarios/reality-inbound' }
    ]
  },
  {
    text: '集成',
    items: [
      { text: 'API 文档', link: '/zh/guide/api-docs' }
    ]
  }
]

export default defineConfig({
  title: '3x-ui Docs',
  description: 'Modern operator documentation for the 3x-ui panel.',
  base: '/3x-ui/',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/3x-ui/logo.svg' }],
    ['link', { rel: 'shortcut icon', type: 'image/svg+xml', href: '/3x-ui/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#0f172a' }],
    ['meta', { property: 'og:title', content: '3x-ui Docs' }],
    ['meta', { property: 'og:description', content: 'Modern documentation for 3x-ui operators.' }]
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      link: '/?lang=en'
    },
    zh: {
      label: '中文',
      lang: 'zh-CN',
      link: '/zh/',
      title: '3x-ui 文档',
      description: '面向 3x-ui 面板的现代化运维文档。',
      themeConfig: {
        nav: chineseNav,
        sidebar: chineseSidebar,
        langMenuLabel: '切换语言',
        darkModeSwitchLabel: '外观',
        lightModeSwitchTitle: '切换到浅色主题',
        darkModeSwitchTitle: '切换到深色主题',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        externalLinkIcon: true,
        outline: {
          level: [2, 3],
          label: '本页目录'
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        lastUpdated: {
          text: '更新于',
          formatOptions: {
            dateStyle: 'medium',
            timeStyle: 'short'
          }
        },
        footer: {
          message: '为 3x-ui 运维人员构建。',
          copyright: '文档内容遵循仓库许可证。'
        },
        search: {
          provider: 'local',
          options: {
            locales: {
              zh: {
                translations: {
                  button: {
                    buttonText: '搜索',
                    buttonAriaLabel: '搜索'
                  },
                  modal: {
                    displayDetails: '显示详细列表',
                    resetButtonTitle: '重置搜索',
                    backButtonTitle: '关闭搜索',
                    noResultsText: '没有结果',
                    footer: {
                      selectText: '选择',
                      selectKeyAriaLabel: '回车',
                      navigateText: '导航',
                      navigateUpKeyAriaLabel: '上箭头',
                      navigateDownKeyAriaLabel: '下箭头',
                      closeText: '关闭',
                      closeKeyAriaLabel: 'esc'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '3x-ui Docs',
    nav: englishNav,
    sidebar: englishSidebar,
    langMenuLabel: 'Change language',
    darkModeSwitchLabel: 'Appearance',
    lightModeSwitchTitle: 'Switch to light theme',
    darkModeSwitchTitle: 'Switch to dark theme',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Return to top',
    externalLinkIcon: true,
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
