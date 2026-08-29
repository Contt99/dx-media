export type NavItem = {
  readonly label: string;
  readonly href: string;
};

export type Service = {
  readonly number: string;
  readonly title: string;
  readonly titleEn: string;
  readonly description: string;
};

export type FocusArea = {
  readonly number: string;
  readonly title: string;
  readonly subtitle: string;
  readonly image: string;
  readonly alt: string;
};

export type ResourceStat = {
  readonly number: string;
  readonly scene: string;
  readonly audience: string;
};

export type Client = {
  readonly name: string;
  readonly logo: string;
};

export type WhyPrinciple = {
  readonly symbol: "−" | "×" | "+" | "÷";
  readonly title: string;
  readonly titleEn: string;
  readonly description: string;
};

export type CapabilityModule = {
  readonly number: string;
  readonly title: string;
  readonly titleEn: string;
  readonly signal: string;
  readonly description: string;
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
  readonly whatWeDo: {
    readonly label: string;
    readonly title: string;
    readonly intro: string;
    readonly services: readonly Service[];
    readonly focusLabel: string;
    readonly focusTitle: string;
    readonly focusIntro: string;
    readonly focusAreas: readonly FocusArea[];
  };
  readonly resources: {
    readonly label: string;
    readonly title: string;
    readonly intro: string;
    readonly stats: readonly ResourceStat[];
    readonly platformsLabel: string;
    readonly platforms: readonly string[];
  };
  readonly clients: {
    readonly label: string;
    readonly title: string;
    readonly intro: string;
    readonly items: readonly Client[];
  };
  readonly whyDx: {
    readonly label: string;
    readonly title: string;
    readonly intro: string;
    readonly concept: string;
    readonly principles: readonly WhyPrinciple[];
  };
  readonly howWeWork: {
    readonly label: string;
    readonly title: string;
    readonly intro: string;
    readonly modelName: string;
    readonly modelMeta: readonly string[];
    readonly modules: readonly CapabilityModule[];
    readonly aiEngine: {
      readonly title: string;
      readonly titleEn: string;
      readonly description: string;
    };
    readonly closing: string;
  };
};
