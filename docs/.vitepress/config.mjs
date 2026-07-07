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
                    { text: '3. 刷剧还是加班选错亏大了', link: '/series/see-the-world/station-1-foundation/03-opportunity-cost-weekend' },
                    { text: '4. 第三杯奶茶最难喝', link: '/series/see-the-world/station-1-foundation/04-marginal-utility-milk-tea' },
                    { text: '5. 演唱会门票凭啥这么贵', link: '/series/see-the-world/station-1-foundation/05-supply-demand-concert-ticket' },
                    { text: '6. 你做饭我洗碗这不是爱情是经济学', link: '/series/see-the-world/station-1-foundation/06-why-people-trade' }
                  ]
                },
                {
                  text: '第二站：你的选择 · 8/8',
                  collapsed: true,
                  items: [
                    { text: '7. 衣柜里1200的大衣吊牌都没拆', link: '/series/see-the-world/station-2-your-choice/07-sunk-cost-clothes' },
                    { text: '8. 花300吃饭不心疼30块运费心疼死', link: '/series/see-the-world/station-2-your-choice/08-mental-accounting-delivery-fee' },
                    { text: '9. 原价1999现价399你试都没试就买了', link: '/series/see-the-world/station-2-your-choice/09-discount-control' },
                    { text: '10. 闺蜜买了你也想买不是你的错', link: '/series/see-the-world/station-2-your-choice/10-herd-effect-friends-buy' },
                    { text: '11. 失去100块比捡到100块更痛', link: '/series/see-the-world/station-2-your-choice/11-loss-aversion' },
                    { text: '12. 办了3000的年卡去了三次单次1000块', link: '/series/see-the-world/station-2-your-choice/12-gym-membership' },
                    { text: '13. 免费的才是最贵的', link: '/series/see-the-world/station-2-your-choice/13-free-is-expensive' },
                    { text: '14. 主播喊最后50单你的大脑关机了', link: '/series/see-the-world/station-2-your-choice/14-livestream-shopping' }
                  ]
                },
                {
                  text: '第三站：商家视角 · 6/6',
                  collapsed: true,
                  items: [
                    { text: '15. 喜茶从19涨到32你还在买', link: '/series/see-the-world/station-3-business-view/15-heytea-price-rise' },
                    { text: '16. 套餐省了10块你多花了20', link: '/series/see-the-world/station-3-business-view/16-bundles-cheaper' },
                    { text: '17. 为什么你买机票总比别人贵', link: '/series/see-the-world/station-3-business-view/17-flight-price-discrimination' },
                    { text: '18. 排了40分钟喝到的奶茶也就那样', link: '/series/see-the-world/station-3-business-view/18-viral-store-queue' },
                    { text: '19. 同样的垃圾袋淘宝12.9拼多多4.9', link: '/series/see-the-world/station-3-business-view/19-pinduoduo-cheap' },
                    { text: '20. 优衣库让你穿一天再退不怕亏吗', link: '/series/see-the-world/station-3-business-view/20-brand-return-policy' }
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
                    { text: '28. 二手车老板说美女一手车两周后发动机灯亮了', link: '/series/see-the-world/station-5-world-breaks/28-used-car-market' },
                    { text: '29. 路灯不收你钱因为没人收得上来', link: '/series/see-the-world/station-5-world-breaks/29-streetlights-public-goods' },
                    { text: '30. 同事摸鱼你加班公平吗', link: '/series/see-the-world/station-5-world-breaks/30-free-rider-colleague' },
                    { text: '31. 三家奶茶店家家不想降价家家在降', link: '/series/see-the-world/station-5-world-breaks/31-price-war-waiting' },
                    { text: '32. 化工厂建在你家旁边你找谁说理', link: '/series/see-the-world/station-5-world-breaks/32-government-intervention' }
                  ]
                },
                {
                  text: '第六站：你的工具箱 · 6/6',
                  collapsed: true,
                  items: [
                    { text: '33. 面试谈薪资的正确姿势', link: '/series/see-the-world/station-6-toolbox/33-salary-negotiation' },
                    { text: '34. 买房还是租房算笔账', link: '/series/see-the-world/station-6-toolbox/34-buy-or-rent' },
                    { text: '35. 时薪500的律师跑网约车亏不亏', link: '/series/see-the-world/station-6-toolbox/35-side-hustle' },
                    { text: '36. 消费降级不是少花钱那么简单', link: '/series/see-the-world/station-6-toolbox/36-consumption-downgrade' },
                    { text: '37. 央行降准0.5个百分点你终于知道啥意思了', link: '/series/see-the-world/station-6-toolbox/37-read-economic-news' },
                    { text: '38. 38篇走完你脑子里的世界变了', link: '/series/see-the-world/station-6-toolbox/38-economics-toolbox-review' }
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
                { text: '3. 刷剧还是加班选错亏大了', link: '/series/see-the-world/station-1-foundation/03-opportunity-cost-weekend' },
                { text: '4. 第三杯奶茶最难喝', link: '/series/see-the-world/station-1-foundation/04-marginal-utility-milk-tea' },
                { text: '5. 演唱会门票凭啥这么贵', link: '/series/see-the-world/station-1-foundation/05-supply-demand-concert-ticket' },
                { text: '6. 你做饭我洗碗这不是爱情是经济学', link: '/series/see-the-world/station-1-foundation/06-why-people-trade' }
              ]
            },
            {
              text: '第二站：你的选择 · 8/8',
              collapsed: true,
              items: [
                { text: '7. 衣柜里1200的大衣吊牌都没拆', link: '/series/see-the-world/station-2-your-choice/07-sunk-cost-clothes' },
                { text: '8. 花300吃饭不心疼30块运费心疼死', link: '/series/see-the-world/station-2-your-choice/08-mental-accounting-delivery-fee' },
                { text: '9. 原价1999现价399你试都没试就买了', link: '/series/see-the-world/station-2-your-choice/09-discount-control' },
                { text: '10. 闺蜜买了你也想买不是你的错', link: '/series/see-the-world/station-2-your-choice/10-herd-effect-friends-buy' },
                { text: '11. 失去100块比捡到100块更痛', link: '/series/see-the-world/station-2-your-choice/11-loss-aversion' },
                { text: '12. 办了3000的年卡去了三次单次1000块', link: '/series/see-the-world/station-2-your-choice/12-gym-membership' },
                { text: '13. 免费的才是最贵的', link: '/series/see-the-world/station-2-your-choice/13-free-is-expensive' },
                { text: '14. 主播喊最后50单你的大脑关机了', link: '/series/see-the-world/station-2-your-choice/14-livestream-shopping' }
              ]
            },
            {
              text: '第三站：商家视角 · 6/6',
              collapsed: true,
              items: [
                { text: '15. 喜茶从19涨到32你还在买', link: '/series/see-the-world/station-3-business-view/15-heytea-price-rise' },
                { text: '16. 套餐省了10块你多花了20', link: '/series/see-the-world/station-3-business-view/16-bundles-cheaper' },
                { text: '17. 为什么你买机票总比别人贵', link: '/series/see-the-world/station-3-business-view/17-flight-price-discrimination' },
                { text: '18. 排了40分钟喝到的奶茶也就那样', link: '/series/see-the-world/station-3-business-view/18-viral-store-queue' },
                { text: '19. 同样的垃圾袋淘宝12.9拼多多4.9', link: '/series/see-the-world/station-3-business-view/19-pinduoduo-cheap' },
                { text: '20. 优衣库让你穿一天再退不怕亏吗', link: '/series/see-the-world/station-3-business-view/20-brand-return-policy' }
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
                { text: '28. 二手车老板说美女一手车两周后发动机灯亮了', link: '/series/see-the-world/station-5-world-breaks/28-used-car-market' },
                { text: '29. 路灯不收你钱因为没人收得上来', link: '/series/see-the-world/station-5-world-breaks/29-streetlights-public-goods' },
                { text: '30. 同事摸鱼你加班公平吗', link: '/series/see-the-world/station-5-world-breaks/30-free-rider-colleague' },
                { text: '31. 三家奶茶店家家不想降价家家在降', link: '/series/see-the-world/station-5-world-breaks/31-price-war-waiting' },
                { text: '32. 化工厂建在你家旁边你找谁说理', link: '/series/see-the-world/station-5-world-breaks/32-government-intervention' }
              ]
            },
            {
              text: '第六站：你的工具箱 · 6/6',
              collapsed: true,
              items: [
                { text: '33. 面试谈薪资的正确姿势', link: '/series/see-the-world/station-6-toolbox/33-salary-negotiation' },
                { text: '34. 买房还是租房算笔账', link: '/series/see-the-world/station-6-toolbox/34-buy-or-rent' },
                { text: '35. 时薪500的律师跑网约车亏不亏', link: '/series/see-the-world/station-6-toolbox/35-side-hustle' },
                { text: '36. 消费降级不是少花钱那么简单', link: '/series/see-the-world/station-6-toolbox/36-consumption-downgrade' },
                { text: '37. 央行降准0.5个百分点你终于知道啥意思了', link: '/series/see-the-world/station-6-toolbox/37-read-economic-news' },
                { text: '38. 38篇走完你脑子里的世界变了', link: '/series/see-the-world/station-6-toolbox/38-economics-toolbox-review' }
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
