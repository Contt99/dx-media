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

export type FocusArea = {
  readonly number: string;
  readonly title: string;
  readonly subtitle: string;
  readonly image: string;
  readonly alt: string;
};

export type ResourceStat = {
  readonly value: string;
  readonly label: string;
  readonly world: string;
};

export type BrandAsset = {
  readonly name: string;
  readonly logo: string;
};

export type WhyPrinciple = {
  readonly symbol: "−" | "×" | "+" | "÷";
  readonly title: string;
  readonly description: string;
};

export type GravityNode = {
  readonly number: string;
  readonly title: string;
  readonly meta: string;
};

export type CaseStudy = {
  readonly number: string;
  readonly client: string;
  readonly kicker: string;
  readonly title: string;
  readonly meta: readonly { readonly label: string; readonly value: string }[];
  readonly description: string;
  readonly tags: readonly string[];
  readonly images: readonly { readonly src: string; readonly alt: string }[];
  readonly tone: "bonpoint" | "samsonite" | "algaecal";
};

export type ArchiveProject = {
  readonly number: string;
  readonly client: string;
  readonly title: string;
  readonly categories: string;
  readonly description: string;
  readonly image: string;
  readonly alt: string;
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
  readonly about: {
    readonly label: string;
    readonly statement: string;
    readonly detail: string;
  };
  readonly capabilities: {
    readonly label: string;
    readonly title: string;
    readonly meta: string;
    readonly intro: string;
    readonly services: readonly Service[];
    readonly focusAreas: readonly FocusArea[];
  };
  readonly scale: {
    readonly label: string;
    readonly title: string;
    readonly intro: string;
    readonly stats: readonly ResourceStat[];
    readonly platforms: readonly BrandAsset[];
    readonly clients: readonly BrandAsset[];
  };
  readonly methodology: {
    readonly label: string;
    readonly why: {
      readonly title: string;
      readonly statement: string;
      readonly principles: readonly WhyPrinciple[];
    };
    readonly how: {
      readonly title: string;
      readonly statement: string;
      readonly model: string;
      readonly nodes: readonly GravityNode[];
      readonly ai: string;
    };
  };
  readonly work: {
    readonly label: string;
    readonly title: string;
    readonly cases: readonly CaseStudy[];
    readonly archive: readonly ArchiveProject[];
  };
  readonly footer: {
    readonly eyebrow: string;
    readonly statement: string;
  };
};
