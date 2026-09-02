import type { SiteContent } from "@/types/site";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetPath = (path: string) => `${publicBasePath}${path}`;

export const siteContent = {
  brand: {
    name: "DX MEDIA",
    conceptEn: "Digital X",
    conceptZh: "链接无限",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Independent Creative Media Partner",
    statement: "链接品牌、内容与真实消费人群。",
    scrollLabel: "Scroll to connect",
  },
  about: {
    label: "DX / INDEPENDENT SINCE DAY ONE",
    statement: "我们让创意进入真实语境，让每一次连接更有价值。",
    detail:
      "DX MEDIA 是一家立足上海的独立创意媒介伙伴。我们以人群洞察为起点，将达人、内容、媒介与品牌表达连接成可被感知、参与和分享的传播体验。",
  },
  capabilities: {
    label: "01 / WHAT WE DO",
    title: "IDEAS MOVE\nTHROUGH\nCONNECTION.",
    meta: "INFLUENCER / MEDIA / CONTENT / BRAND",
    intro: "让创意，在连接中发生。",
    services: [
      {
        number: "01",
        title: "Influencer Marketing",
        titleZh: "达人营销",
        description: "以人群与场景为起点，完成达人策略、筛选、内容协作与投放执行。",
      },
      {
        number: "02",
        title: "Media Buying",
        titleZh: "媒介投放",
        description: "围绕传播目标规划平台组合、预算分配与持续优化。",
      },
      {
        number: "03",
        title: "Content Marketing",
        titleZh: "内容营销",
        description: "把品牌价值转化为适合平台语境、能够被理解与分享的内容。",
      },
      {
        number: "04",
        title: "Brand Communication",
        titleZh: "品牌传播",
        description: "连接创意、媒介与社会化传播，建立清晰、持续的品牌声量。",
      },
    ],
    focusAreas: [
      {
        number: "01",
        title: "亲子成长",
        subtitle: "新生代家庭",
        image: assetPath("/images/focus/family-growth.jpg"),
        alt: "亲子在自然光下相处的生活场景",
      },
      {
        number: "02",
        title: "品质女性",
        subtitle: "精致生活人群",
        image: assetPath("/images/focus/quality-women.jpg"),
        alt: "都市女性与品质生活场景",
      },
      {
        number: "03",
        title: "城市消费",
        subtitle: "同城消费人群",
        image: assetPath("/images/focus/urban-consumption.jpg"),
        alt: "城市街区与本地消费场景",
      },
    ],
  },
  scale: {
    label: "02 / SCALE & CLIENTS",
    title: "REACH AT SCALE.",
    intro: "规模化触达，放大传播价值。",
    stats: [
      { value: "10,000+", label: "垂类母婴达人", world: "亲子成长" },
      { value: "50,000+", label: "精致生活达人", world: "品质女性" },
      { value: "200,000+", label: "本地探店达人", world: "城市消费" },
    ],
    platforms: [
      { name: "抖音", logo: assetPath("/logos/platforms/douyin.svg") },
      { name: "小红书", logo: assetPath("/logos/platforms/xiaohongshu.svg") },
      { name: "哔哩哔哩", logo: assetPath("/logos/platforms/bilibili.png") },
      { name: "微信", logo: assetPath("/logos/platforms/wechat.svg") },
      { name: "微博", logo: assetPath("/logos/platforms/weibo.png") },
      { name: "大众点评", logo: assetPath("/logos/platforms/dianping.png") },
    ],
    clients: [
      { name: "Bonpoint", logo: assetPath("/logos/clients/bonpoint.png") },
      { name: "DIOR 迪奥美妆", logo: assetPath("/logos/clients/dior-beauty-lovers.png") },
      { name: "Medela", logo: assetPath("/logos/clients/medela.png") },
      { name: "BabyFirst", logo: assetPath("/logos/clients/babyfirst.png") },
      { name: "Samsonite", logo: assetPath("/logos/clients/samsonite.png") },
      { name: "AlgaeCal", logo: assetPath("/logos/clients/algaecal.png") },
      { name: "SUNTORY", logo: assetPath("/logos/clients/suntory.png") },
      { name: "西园抹茶", logo: assetPath("/logos/clients/nishi-matcha-house.png") },
      { name: "DOCUMENTS 闻献", logo: assetPath("/logos/clients/documents.png") },
      { name: "NEIWAI 内外", logo: assetPath("/logos/clients/neiwai.png") },
      { name: "毛戈平", logo: assetPath("/logos/clients/maogeping.png") },
    ],
  },
  methodology: {
    label: "03 / WHY DX · HOW WE WORK",
    why: {
      title: "WHY DX",
      statement: "四则运算，做对生意。",
      principles: [
        { symbol: "−", title: "预算做减法", description: "直签资源，让预算回到内容与触达" },
        { symbol: "×", title: "选人做乘法", description: "四层筛选，让合适的人放大内容价值" },
        { symbol: "+", title: "执行做加法", description: "进度、审稿与排期，为执行增加确定性" },
        { symbol: "÷", title: "效果做除法", description: "回到真实触达成本，衡量实际效率" },
      ],
    },
    how: {
      title: "HOW WE WORK",
      statement: "BUILD GRAVITY.\nDRIVE MOMENTUM.",
      model: "DX GRAVITY MODEL",
      nodes: [
        { number: "01", title: "引力场构建", meta: "STRATEGY" },
        { number: "02", title: "轨道计算", meta: "MATCHING" },
        { number: "03", title: "内容共振", meta: "CREATIVE" },
        { number: "04", title: "导航中心", meta: "OPERATIONS" },
        { number: "05", title: "数据脉冲", meta: "MEASUREMENT" },
        { number: "06", title: "轨迹沉淀", meta: "LEARNING" },
      ],
      ai: "AI ENGINE · 贯穿所有阶段",
    },
  },
  work: {
    label: "04 / SELECTED WORK",
    title: "IDEAS MOVE\nTHROUGH\nCONNECTION.",
    cases: [
      {
        number: "01",
        client: "BONPOINT",
        kicker: "50TH ANNIVERSARY",
        title: "“趣游空间”限时展览",
        meta: [
          { label: "LOCATION", value: "SHANGHAI / ZHANGYUAN" },
          { label: "SCOPE", value: "EXPERIENCE / CREATOR CONTENT" },
        ],
        description:
          "统筹上海本地生活方式、母婴、穿搭及时尚达人探展；以展览空间和品牌传承为叙事线索，联动品牌账号内容，串联线下体验与线上传播。",
        tags: ["线下达人探展", "品牌账号内容"],
        images: [
          { src: assetPath("/images/cases/bonpoint/bonpoint-hero.webp"), alt: "Bonpoint 50周年张园限时展览建筑装置" },
          { src: assetPath("/images/cases/bonpoint/bonpoint-space.webp"), alt: "Bonpoint 限时展览室内空间" },
          { src: assetPath("/images/cases/bonpoint/bonpoint-tote.webp"), alt: "Bonpoint 樱桃刺绣纪念手袋" },
        ],
        tone: "bonpoint",
      },
      {
        number: "02",
        client: "SAMSONITE",
        kicker: "PRODUCT LAUNCH",
        title: "新秀丽 · 拉杆箱新品推广",
        meta: [
          { label: "CHANNEL", value: "XIAOHONGSHU / PRODUCT SEEDING" },
          { label: "WORLD", value: "FASHION / LIFESTYLE / TRAVEL" },
        ],
        description:
          "围绕新秀丽拉杆箱新品推广，以都市通勤与短途出行为核心场景，联动 Fashion、Lifestyle、Travel 达人完成小红书内容种草。",
        tags: ["都市通勤", "短途出行"],
        images: [
          { src: assetPath("/images/cases/samsonite/samsonite-walk.webp"), alt: "都市女性携新秀丽拉杆箱穿行街区" },
          { src: assetPath("/images/cases/samsonite/samsonite-detail.webp"), alt: "新秀丽黑色拉杆箱细节" },
          { src: assetPath("/images/cases/samsonite/samsonite-station.webp"), alt: "都市女性与新秀丽拉杆箱生活方式场景" },
        ],
        tone: "samsonite",
      },
      {
        number: "03",
        client: "ALGAECAL",
        kicker: "MULTI-AUDIENCE CAMPAIGN",
        title: "AlgaeCal · 多人群达人合作",
        meta: [
          { label: "AUDIENCE", value: "中老年 / 宝妈 / 运动健身" },
          { label: "STRATEGY", value: "MULTI-AUDIENCE CREATOR MATRIX" },
        ],
        description:
          "在澳洲保健品行业舆论环境复杂的背景下，为 AlgaeCal 制定多年龄段达人投放策略。覆盖中老年真实用户、宝妈群体、运动健身达人等多元 TA，以日常骨骼养护场景为切入点，构建跨圈层口碑内容矩阵。",
        tags: ["MULTI-AUDIENCE", "ACTIVE LIFESTYLE", "MATURE AUDIENCE"],
        images: [
          { src: assetPath("/images/cases/algaecal/algaecal-backdrop.webp"), alt: "AlgaeCal 深绿色品牌背景" },
          { src: assetPath("/images/cases/algaecal/algaecal-product.webp"), alt: "AlgaeCal Plus 与 Strontium Boost 产品组合" },
        ],
        tone: "algaecal",
      },
    ],
    archive: [
      {
        number: "01",
        client: "宝贝第一",
        title: "618大促带货",
        categories: "儿童冲锋车 / 推车 / 腰凳",
        description: "多产品线垂类母婴达人矩阵，实现站内引流与转化。",
        image: assetPath("/images/archive/babyfirst.webp"),
        alt: "宝贝第一儿童安全座椅项目画面",
      },
      {
        number: "02",
        client: "内外",
        title: "橙标系列新品推广",
        categories: "抹胸 / 美背 / 云朵杯",
        description: "以“日常舒适感”切入，统一多品类视觉调性。",
        image: assetPath("/images/archive/neiwai.webp"),
        alt: "内外橙标系列新品视觉",
      },
      {
        number: "03",
        client: "闻献",
        title: "“人杰地灵”城市限定",
        categories: "西岸线下发布会 / 明星到场",
        description: "明星与达人共同打卡，打通线下体验与线上传播。",
        image: assetPath("/images/archive/documents.webp"),
        alt: "闻献人杰地灵城市限定香水视觉",
      },
      {
        number: "04",
        client: "美德乐",
        title: "纯羊毛脂膏",
        categories: "小红书种草 / 哺乳期场景",
        description: "围绕四大核心卖点，产出真实哺乳场景内容。",
        image: assetPath("/images/archive/medela.webp"),
        alt: "美德乐纯羊毛脂膏产品视觉",
      },
    ],
  },
  footer: {
    eyebrow: "INDEPENDENT CREATIVE MEDIA PARTNER",
    statement: "MAKE THE\nCONNECTION.",
  },
} satisfies SiteContent;
