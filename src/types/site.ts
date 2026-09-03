export type NavItem = {
  readonly label: string;
  readonly href: string;
};

export type Service = {
  readonly number: string;
  readonly title: string;
  readonly titleZh: string;
  readonly description: string;
};

export type WhyPrinciple = {
  readonly symbol: "−" | "×" | "+" | "÷";
  readonly title: string;
  readonly titleZh: string;
  readonly description: string;
};

export type GravityNode = {
  readonly number: string;
  readonly title: string;
  readonly meta: string;
};

export type SiteContent = {
  readonly brand: {
    readonly name: string;
    readonly conceptEn: string;
    readonly conceptZh: string;
  };
  readonly navigation: readonly NavItem[];
  readonly hero: {
    readonly eyebrow: string;
    readonly statement: string;
    readonly scrollLabel: string;
  };
  readonly capabilities: {
    readonly label: string;
    readonly title: string;
    readonly meta: string;
    readonly intro: readonly [string, string];
    readonly services: readonly Service[];
  };
  readonly methodology: {
    readonly why: {
      readonly label: string;
      readonly title: string;
      readonly intro: string;
      readonly principles: readonly WhyPrinciple[];
    };
    readonly how: {
      readonly label: string;
      readonly title: string;
      readonly intro: string;
      readonly model: string;
      readonly nodes: readonly GravityNode[];
      readonly ai: string;
    };
  };
  readonly footer: {
    readonly eyebrow: string;
    readonly copyright: string;
  };
};
