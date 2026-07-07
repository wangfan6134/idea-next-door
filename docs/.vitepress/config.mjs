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
              text: '38篇看懂世界 · 38/38',
              collapsed: false,
              items: [
                {
                  text: '第一站：地基 · 6/6',
                  collapsed: false,
                  items: [
                    { text: '1. 经济学不是教你赚钱的', link: '/series/see-the-world/station-1-foundation/01-economics-not-about-money' },
                    { text: '2. 为什么你总觉得自己穷', link: '/series/see-the-world/station-1-foundation/02-why-always-feel-poor' },
                    { text: '3. 刷剧还是加班？选错亏大了', link: '/series/see-the-world/station-1-foundation/03-opportunity-cost-weekend' },
                    { text: '4. 第三杯奶茶最难喝', link: '/series/see-the-world/station-1-foundation/04-marginal-utility-milk-tea' },
                    { text: '5. 演唱会门票凭啥这么贵', link: '/series/see-the-world/station-1-foundation/05-supply-demand-concert-ticket' },
                    { text: '6. 人和人为什么要交易', link: '/series/see-the-world/station-1-foundation/06-why-people-trade' }
                  ]
                },
                {
                  text: '第二站：你的选择 · 8/8',
                  collapsed: true,
                  items: [
                    { text: '7. 买了不穿的衣服为什么舍不得扔', link: '/series/see-the-world/station-2-your-choice/07-sunk-cost-clothes' },
                    { text: '8. 花300吃饭不心疼30块运费心疼死', link: '/series/see-the-world/station-2-your-choice/08-mental-accounting-delivery-fee' },
                    { text: '9. 为什么打折让你控制不住', link: '/series/see-the-world/station-2-your-choice/09-discount-control' },
                    { text: '10. 闺蜜买了你也想买不是你的错', link: '/series/see-the-world/station-2-your-choice/10-herd-effect-friends-buy' },
                    { text: '11. 失去100块比捡到100块更痛', link: '/series/see-the-world/station-2-your-choice/11-loss-aversion' },
                    { text: '12. 要不要办健身年卡', link: '/series/see-the-world/station-2-your-choice/12-gym-membership' },
                    { text: '13. 免费的才是最贵的', link: '/series/see-the-world/station-2-your-choice/13-free-is-expensive' },
                    { text: '14. 为什么直播间里你更容易下单', link: '/series/see-the-world/station-2-your-choice/14-livestream-shopping' }
                  ]
                },
                {
                  text: '第三站：商家视角 · 6/6',
                  collapsed: true,
                  items: [
                    { text: '15. 为什么喜茶一直在涨价', link: '/series/see-the-world/station-3-business-view/15-heytea-price-rise' },
                    { text: '16. 为什么套餐比你单点便宜', link: '/series/see-the-world/station-3-business-view/16-bundles-cheaper' },
                    { text: '17. 为什么你买机票总比别人贵', link: '/series/see-the-world/station-3-business-view/17-flight-price-discrimination' },
                    { text: '18. 为什么网红店永远在排队', link: '/series/see-the-world/station-3-business-view/18-viral-store-queue' },
                    { text: '19. 为什么拼多多能那么便宜', link: '/series/see-the-world/station-3-business-view/19-pinduoduo-cheap' },
                    { text: '20. 大品牌为什么愿意让你退货', link: '/series/see-the-world/station-3-business-view/20-brand-return-policy' }
                  ]
                },
                {
                  text: '第四站：钱的旅行 · 6/6',
                  collapsed: true,
                  items: [
                    { text: '21. 国家有钱跟你有什么关系', link: '/series/see-the-world/station-4-money-travel/21-gdp-and-you' },
                    { text: '22. 工资涨了为什么还是不够花', link: '/series/see-the-world/station-4-money-travel/22-inflation-wage' },
                    { text: '23. 房贷利率降了你该高兴吗', link: '/series/see-the-world/station-4-money-travel/23-mortgage-rate' },
                    { text: '24. 为什么找不到工作却到处在招人', link: '/series/see-the-world/station-4-money-travel/24-unemployment-mismatch' },
                    { text: '25. 国家印钱是好事还是坏事', link: '/series/see-the-world/station-4-money-travel/25-money-printing' },
                    { text: '26. 买进口化妆品为什么贵了', link: '/series/see-the-world/station-4-money-travel/26-exchange-rate-imports' }
                  ]
                },
                {
                  text: '第五站：世界失灵时 · 6/6',
                  collapsed: true,
                  items: [
                    { text: '27. 邻居装修吵到你该赔吗', link: '/series/see-the-world/station-5-world-breaks/27-neighbor-renovation-externality' },
                    { text: '28. 为什么二手车市场全是坑', link: '/series/see-the-world/station-5-world-breaks/28-used-car-market' },
                    { text: '29. 为什么路灯不收你钱', link: '/series/see-the-world/station-5-world-breaks/29-streetlights-public-goods' },
                    { text: '30. 同事摸鱼你加班公平吗', link: '/series/see-the-world/station-5-world-breaks/30-free-rider-colleague' },
                    { text: '31. 为什么大家都在等别人先降价', link: '/series/see-the-world/station-5-world-breaks/31-price-war-waiting' },
                    { text: '32. 政府什么时候该出手', link: '/series/see-the-world/station-5-world-breaks/32-government-intervention' }
                  ]
                },
                {
                  text: '第六站：你的工具箱 · 6/6',
                  collapsed: true,
                  items: [
                    { text: '33. 面试谈薪资的正确姿势', link: '/series/see-the-world/station-6-toolbox/33-salary-negotiation' },
                    { text: '34. 买房还是租房算笔账', link: '/series/see-the-world/station-6-toolbox/34-buy-or-rent' },
                    { text: '35. 要不要搞副业', link: '/series/see-the-world/station-6-toolbox/35-side-hustle' },
                    { text: '36. 消费降级不是少花钱那么简单', link: '/series/see-the-world/station-6-toolbox/36-consumption-downgrade' },
                    { text: '37. 你也能看懂经济新闻了', link: '/series/see-the-world/station-6-toolbox/37-read-economic-news' },
                    { text: '38. 你的经济学工具箱总复习', link: '/series/see-the-world/station-6-toolbox/38-economics-toolbox-review' }
                  ]
                }
              ]
            }
          ]
        }
      ],
      '/series/': [
        {
          text: '38篇看懂世界 · 38/38',
          collapsed: false,
          items: [
            {
              text: '第一站：地基 · 6/6',
              collapsed: false,
              items: [
                { text: '1. 经济学不是教你赚钱的', link: '/series/see-the-world/station-1-foundation/01-economics-not-about-money' },
                { text: '2. 为什么你总觉得自己穷', link: '/series/see-the-world/station-1-foundation/02-why-always-feel-poor' },
                { text: '3. 刷剧还是加班？选错亏大了', link: '/series/see-the-world/station-1-foundation/03-opportunity-cost-weekend' },
                { text: '4. 第三杯奶茶最难喝', link: '/series/see-the-world/station-1-foundation/04-marginal-utility-milk-tea' },
                { text: '5. 演唱会门票凭啥这么贵', link: '/series/see-the-world/station-1-foundation/05-supply-demand-concert-ticket' },
                { text: '6. 人和人为什么要交易', link: '/series/see-the-world/station-1-foundation/06-why-people-trade' }
              ]
            },
            {
              text: '第二站：你的选择 · 8/8',
              collapsed: true,
              items: [
                { text: '7. 买了不穿的衣服为什么舍不得扔', link: '/series/see-the-world/station-2-your-choice/07-sunk-cost-clothes' },
                { text: '8. 花300吃饭不心疼30块运费心疼死', link: '/series/see-the-world/station-2-your-choice/08-mental-accounting-delivery-fee' },
                { text: '9. 为什么打折让你控制不住', link: '/series/see-the-world/station-2-your-choice/09-discount-control' },
                { text: '10. 闺蜜买了你也想买不是你的错', link: '/series/see-the-world/station-2-your-choice/10-herd-effect-friends-buy' },
                { text: '11. 失去100块比捡到100块更痛', link: '/series/see-the-world/station-2-your-choice/11-loss-aversion' },
                { text: '12. 要不要办健身年卡', link: '/series/see-the-world/station-2-your-choice/12-gym-membership' },
                { text: '13. 免费的才是最贵的', link: '/series/see-the-world/station-2-your-choice/13-free-is-expensive' },
                { text: '14. 为什么直播间里你更容易下单', link: '/series/see-the-world/station-2-your-choice/14-livestream-shopping' }
              ]
            },
            {
              text: '第三站：商家视角 · 6/6',
              collapsed: true,
              items: [
                { text: '15. 为什么喜茶一直在涨价', link: '/series/see-the-world/station-3-business-view/15-heytea-price-rise' },
                { text: '16. 为什么套餐比你单点便宜', link: '/series/see-the-world/station-3-business-view/16-bundles-cheaper' },
                { text: '17. 为什么你买机票总比别人贵', link: '/series/see-the-world/station-3-business-view/17-flight-price-discrimination' },
                { text: '18. 为什么网红店永远在排队', link: '/series/see-the-world/station-3-business-view/18-viral-store-queue' },
                { text: '19. 为什么拼多多能那么便宜', link: '/series/see-the-world/station-3-business-view/19-pinduoduo-cheap' },
                { text: '20. 大品牌为什么愿意让你退货', link: '/series/see-the-world/station-3-business-view/20-brand-return-policy' }
              ]
            },
            {
              text: '第四站：钱的旅行 · 6/6',
              collapsed: true,
              items: [
                { text: '21. 国家有钱跟你有什么关系', link: '/series/see-the-world/station-4-money-travel/21-gdp-and-you' },
                { text: '22. 工资涨了为什么还是不够花', link: '/series/see-the-world/station-4-money-travel/22-inflation-wage' },
                { text: '23. 房贷利率降了你该高兴吗', link: '/series/see-the-world/station-4-money-travel/23-mortgage-rate' },
                { text: '24. 为什么找不到工作却到处在招人', link: '/series/see-the-world/station-4-money-travel/24-unemployment-mismatch' },
                { text: '25. 国家印钱是好事还是坏事', link: '/series/see-the-world/station-4-money-travel/25-money-printing' },
                { text: '26. 买进口化妆品为什么贵了', link: '/series/see-the-world/station-4-money-travel/26-exchange-rate-imports' }
              ]
            },
            {
              text: '第五站：世界失灵时 · 6/6',
              collapsed: true,
              items: [
                { text: '27. 邻居装修吵到你该赔吗', link: '/series/see-the-world/station-5-world-breaks/27-neighbor-renovation-externality' },
                { text: '28. 为什么二手车市场全是坑', link: '/series/see-the-world/station-5-world-breaks/28-used-car-market' },
                { text: '29. 为什么路灯不收你钱', link: '/series/see-the-world/station-5-world-breaks/29-streetlights-public-goods' },
                { text: '30. 同事摸鱼你加班公平吗', link: '/series/see-the-world/station-5-world-breaks/30-free-rider-colleague' },
                { text: '31. 为什么大家都在等别人先降价', link: '/series/see-the-world/station-5-world-breaks/31-price-war-waiting' },
                { text: '32. 政府什么时候该出手', link: '/series/see-the-world/station-5-world-breaks/32-government-intervention' }
              ]
            },
            {
              text: '第六站：你的工具箱 · 6/6',
              collapsed: true,
              items: [
                { text: '33. 面试谈薪资的正确姿势', link: '/series/see-the-world/station-6-toolbox/33-salary-negotiation' },
                { text: '34. 买房还是租房算笔账', link: '/series/see-the-world/station-6-toolbox/34-buy-or-rent' },
                { text: '35. 要不要搞副业', link: '/series/see-the-world/station-6-toolbox/35-side-hustle' },
                { text: '36. 消费降级不是少花钱那么简单', link: '/series/see-the-world/station-6-toolbox/36-consumption-downgrade' },
                { text: '37. 你也能看懂经济新闻了', link: '/series/see-the-world/station-6-toolbox/37-read-economic-news' },
                { text: '38. 你的经济学工具箱总复习', link: '/series/see-the-world/station-6-toolbox/38-economics-toolbox-review' }
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
