import type { SiteContent } from "@/types/site";

export const siteContent = {
  brand: {
    name: "DX MEDIA",
    conceptEn: "Digital X",
    conceptZh: "链接无限",
  },
  navigation: [
    { label: "What We Do", href: "#what-we-do" },
    { label: "Why DX", href: "#why-dx" },
    { label: "How We Work", href: "#how-we-work" },
  ],
  hero: {
    eyebrow: "Independent Creative & Media Partner",
    statement: "链接品牌、内容与真实消费人群。",
    scrollLabel: "Scroll to connect",
  },
  capabilities: {
    label: "01 / WHAT WE DO",
    title: "IDEAS\u00A0COME\u00A0TO\u00A0LIFE\nTHROUGH\nCONNECTION.",
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
  },
  methodology: {
    why: {
      label: "02 / WHY DX",
      title: "DO THE MATH.\nDO BUSINESS BETTER.",
      intro: "四则运算，做对生意。",
      principles: [
        {
          symbol: "−",
          title: "Less waste",
          titleZh: "预算做减法",
          description: "减少无效损耗，让预算回到内容与真实触达。",
        },
        {
          symbol: "×",
          title: "Better match",
          titleZh: "选人做乘法",
          description: "以多维筛选找到更合适的人，放大内容价值。",
        },
        {
          symbol: "+",
          title: "More certainty",
          titleZh: "执行做加法",
          description: "以清晰的进度、审稿与排期，为执行增加确定性。",
        },
        {
          symbol: "÷",
          title: "Real efficiency",
          titleZh: "效果做除法",
          description: "回到真实触达成本，持续衡量并优化实际效率。",
        },
      ],
    },
    how: {
      label: "03 / HOW WE WORK",
      title: "BUILD GRAVITY.\nCREATE MOMENTUM.",
      intro: "构建引力，创造持续向前的传播动能。",
      model: "DX GRAVITY MODEL",
      nodes: [
        { number: "01", title: "引力场构建", meta: "STRATEGY / GRAVITY FIELD" },
        { number: "02", title: "轨道计算", meta: "MATCHING / ORBIT PLANNING" },
        { number: "03", title: "内容共振", meta: "CREATIVE / CONTENT RESONANCE" },
        { number: "04", title: "导航中心", meta: "OPERATIONS / NAVIGATION CENTER" },
        { number: "05", title: "数据脉冲", meta: "MEASUREMENT / DATA PULSE" },
        { number: "06", title: "轨迹沉淀", meta: "LEARNING / TRAJECTORY ARCHIVE" },
      ],
      ai: "AI ENGINE · 贯穿所有阶段",
    },
  },
  footer: {
    eyebrow: "INDEPENDENT CREATIVE & MEDIA PARTNER",
    copyright: "© 2026 DX MEDIA",
  },
} satisfies SiteContent;
