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
    { label: "What We Do", href: "#what-we-do" },
    { label: "Resources", href: "#resources" },
    { label: "Clients", href: "#clients" },
    { label: "Why DX", href: "#why-dx" },
    { label: "How We Work", href: "#how-we-work" },
  ],
  hero: {
    eyebrow: "Independent Creative Media Partner",
    statement: "链接品牌、内容与真实消费人群。",
    scrollLabel: "Explore",
  },
  whatWeDo: {
    label: "01 / What We Do",
    title: "Ideas need\nconnection.",
    intro:
      "从洞察到内容，从达人到媒介，我们让品牌表达进入真实的消费语境。",
    services: [
      {
        number: "01",
        title: "达人营销",
        titleEn: "Influencer Marketing",
        description: "以人群、场景与内容为起点，完成达人策略、筛选与投放执行。",
      },
      {
        number: "02",
        title: "媒介投放",
        titleEn: "Media Buying",
        description: "围绕传播与增长目标，规划平台组合、预算分配与持续优化。",
      },
      {
        number: "03",
        title: "内容营销",
        titleEn: "Content Marketing",
        description: "把品牌价值转化为适合平台语境、能够被理解与分享的内容。",
      },
      {
        number: "04",
        title: "品牌传播",
        titleEn: "Brand Communication",
        description: "连接创意、媒介与社会化传播，建立清晰、持续的品牌声量。",
      },
    ],
    focusLabel: "Focused Consumer Worlds",
    focusTitle: "深入真实生活，\n连接消费发生的地方。",
    focusIntro:
      "围绕三类高价值消费场景，理解人群、内容与决策之间的关系。",
    focusAreas: [
      {
        number: "01",
        title: "亲子成长",
        subtitle: "新生代家庭",
        image: assetPath("/images/focus/family-growth.jpg"),
        alt: "阳光下的儿童房与婴儿床，代表亲子成长消费场景",
      },
      {
        number: "02",
        title: "品质女性",
        subtitle: "精致生活人群",
        image: assetPath("/images/focus/quality-women.jpg"),
        alt: "梳妆台、香水与自然光，代表品质女性消费场景",
      },
      {
        number: "03",
        title: "城市消费",
        subtitle: "同城消费人群",
        image: assetPath("/images/focus/urban-consumption.jpg"),
        alt: "繁忙的城市咖啡店，代表城市消费场景",
      },
    ],
  },
  resources: {
    label: "02 / Our Resources",
    title: "Reach has\nweight.",
    intro:
      "真正有价值的规模，不只是数字更多，而是能在正确的场景中找到正确的人。",
    stats: [
      {
        number: "10,000",
        scene: "亲子成长",
        audience: "垂类母婴达人",
      },
      {
        number: "50,000",
        scene: "品质女性",
        audience: "精致生活达人",
      },
      {
        number: "200,000",
        scene: "城市消费",
        audience: "本地探店达人",
      },
    ],
    platformsLabel: "Full-platform coverage",
    platforms: ["抖音", "小红书", "Bilibili", "微信", "微博"],
  },
  clients: {
    label: "03 / Clients",
    title: "Across categories,\none standard.",
    intro:
      "从母婴、美妆与健康，到出行、食品和城市消费，我们以同一套执行标准服务不同品牌。",
    items: [
      { name: "Bonpoint", logo: assetPath("/logos/clients/bonpoint.png") },
      {
        name: "Dior Beauty Lovers",
        logo: assetPath("/logos/clients/dior-beauty-lovers.png"),
      },
      { name: "Medela", logo: assetPath("/logos/clients/medela.png") },
      { name: "BabyFirst", logo: assetPath("/logos/clients/babyfirst.png") },
      { name: "Samsonite", logo: assetPath("/logos/clients/samsonite.png") },
      { name: "AlgaeCal", logo: assetPath("/logos/clients/algaecal.png") },
      { name: "Suntory", logo: assetPath("/logos/clients/suntory.png") },
      {
        name: "Nishi Matcha House",
        logo: assetPath("/logos/clients/nishi-matcha-house.png"),
      },
    ],
  },
  whyDx: {
    label: "04 / Why DX",
    title: "Do the math.\nDo better business.",
    intro:
      "我们把复杂的媒介生意，拆成四个简单但重要的动作：减去浪费，放大匹配，增加确定性，算清真实效率。",
    concept: "四则运算，做对生意",
    principles: [
      {
        symbol: "−",
        title: "预算做减法",
        titleEn: "Less waste",
        description: "直签资源，减少不必要的中间成本，让预算回到内容与触达本身。",
      },
      {
        symbol: "×",
        title: "选人做乘法",
        titleEn: "Better match",
        description: "以四层筛选机制过滤低质账号，让合适的人放大内容价值。",
      },
      {
        symbol: "+",
        title: "执行做加法",
        titleEn: "More certainty",
        description: "从进度、审稿到排期，为每一个执行环节增加确定性。",
      },
      {
        symbol: "÷",
        title: "效果做除法",
        titleEn: "Real efficiency",
        description: "回到真实触达成本，衡量每一份预算最终产生的实际效率。",
      },
    ],
  },
  howWeWork: {
    label: "05 / How We Work",
    title: "Build gravity.\nCreate momentum.",
    intro:
      "DX「引力」模型把策略、达人、内容、执行与数据连接成持续运转的系统，让一次投放不止完成一次传播。",
    modelName: "DX「引力」模型",
    modelMeta: ["六大能力模块", "AI 辅助决策驱动"],
    modules: [
      {
        number: "01",
        title: "引力场构建",
        titleEn: "Gravity Field",
        signal: "Strategy",
        description:
          "明确品牌议题、目标人群与消费场景，为整次传播建立清晰的策略引力场。",
      },
      {
        number: "02",
        title: "轨道计算",
        titleEn: "Orbit Planning",
        signal: "Matching",
        description:
          "结合平台特征、达人画像与预算边界，计算更适合项目目标的投放组合。",
      },
      {
        number: "03",
        title: "内容共振",
        titleEn: "Content Resonance",
        signal: "Creative",
        description:
          "把品牌表达转化为真实、可参与、可传播的内容，让创意进入人群语境。",
      },
      {
        number: "04",
        title: "导航中心",
        titleEn: "Navigation Center",
        signal: "Operations",
        description:
          "集中管理进度、审稿与排期，让多方协作始终沿着正确的轨道推进。",
      },
      {
        number: "05",
        title: "数据脉冲",
        titleEn: "Data Pulse",
        signal: "Measurement",
        description:
          "持续观察曝光、互动、CPE 与 CPM，让数据成为投放过程中的实时反馈。",
      },
      {
        number: "06",
        title: "轨迹沉淀",
        titleEn: "Trajectory Archive",
        signal: "Learning",
        description:
          "归档内容表现、情感反馈与人群洞察，把每一次执行转化为可持续使用的资产。",
      },
    ],
    aiEngine: {
      title: "AI 引擎",
      titleEn: "AI Engine",
      description: "贯穿六大能力模块，辅助策略判断、资源匹配与执行优化。",
    },
    closing: "每一次投放，都在沉淀资产。",
  },
} satisfies SiteContent;
