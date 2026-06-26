import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '隔壁有个想法',
  description: '把日常里的想法写清楚',
  lang: 'zh-CN',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/articles/' },
      { text: '关于', link: '/about' }
    ],
    sidebar: {
      '/articles/': [
        {
          text: '文章目录',
          items: [
            { text: '文章首页', link: '/articles/' },
            {
              text: '38篇看懂世界 · 4/38',
              collapsed: false,
              items: [
                {
                  text: '第一站：地基 · 4/6',
                  collapsed: false,
                  items: [
                    { text: '1. 经济学不是教你赚钱的', link: '/series/see-the-world/station-1-foundation/01-economics-not-about-money' },
                    { text: '2. 为什么工资涨了还是觉得不够花', link: '/series/see-the-world/station-1-foundation/02-why-always-feel-poor' },
                    { text: '3. 周末刷剧的代价，比你想的大多了', link: '/series/see-the-world/station-1-foundation/03-opportunity-cost-weekend' },
                    { text: '4. 第三杯奶茶，真的没那么好喝了', link: '/series/see-the-world/station-1-foundation/04-marginal-utility-milk-tea' }
                  ]
                }
              ]
            }
          ]
        }
      ],
      '/series/': [
        {
          text: '38篇看懂世界 · 4/38',
          collapsed: false,
          items: [
            {
              text: '第一站：地基 · 4/6',
              collapsed: false,
              items: [
                { text: '1. 经济学不是教你赚钱的', link: '/series/see-the-world/station-1-foundation/01-economics-not-about-money' },
                { text: '2. 为什么工资涨了还是觉得不够花', link: '/series/see-the-world/station-1-foundation/02-why-always-feel-poor' },
                { text: '3. 周末刷剧的代价，比你想的大多了', link: '/series/see-the-world/station-1-foundation/03-opportunity-cost-weekend' },
                { text: '4. 第三杯奶茶，真的没那么好喝了', link: '/series/see-the-world/station-1-foundation/04-marginal-utility-milk-tea' }
              ]
            }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],
    footer: {
      message: '把日常里的想法写清楚',
      copyright: 'Copyright © 2026'
    },
    search: {
      provider: 'local'
    }
  }
})
