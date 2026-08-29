import { ArrowDownRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { siteContent } from "@/content/site";

export function Hero() {
  const { brand, hero } = siteContent;

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="min-h-[100svh] bg-paper px-4 pb-6 pt-[calc(var(--header-height)+1.5rem)] sm:px-8 sm:pb-8 lg:px-12"
    >
      <div className="mx-auto flex min-h-[calc(100svh-var(--header-height)-3rem)] max-w-[1600px] flex-col justify-between">
        <Reveal>
          <div className="grid grid-cols-2 gap-4 border-t border-ink pt-3 text-[0.62rem] font-bold uppercase tracking-[0.16em] sm:text-xs lg:grid-cols-12">
            <p className="lg:col-span-4">{hero.eyebrow}</p>
            <p className="text-right text-muted lg:col-span-2 lg:col-start-11">
              Est. in digital
              <br />
              Built for culture
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08} distance={32} className="py-10 sm:py-14">
          <h1
            id="hero-title"
            className="display-type flex flex-col text-[clamp(6.25rem,18vw,17rem)] uppercase leading-[0.72] tracking-[-0.09em] md:flex-row md:items-baseline md:gap-[0.2em]"
          >
            <span>
              D<span className="text-dx-red">X</span>
            </span>
            <span>Media</span>
          </h1>
        </Reveal>

        <div className="grid gap-8 border-t border-ink pt-5 sm:grid-cols-2 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-5">
            <p className="max-w-[18em] text-balance text-xl font-bold leading-[1.25] tracking-[-0.035em] sm:text-2xl lg:text-[2rem]">
              {hero.statement}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="sm:text-right lg:col-span-3 lg:col-start-9">
            <p className="text-sm leading-6 text-muted">
              <span className="font-bold text-ink">{brand.conceptEn}</span>
              <br />
              {brand.conceptZh}
            </p>
          </Reveal>

          <Reveal delay={0.14} className="hidden justify-self-end lg:block lg:col-span-1">
            <a
              href="#what-we-do"
              aria-label="向下浏览 What We Do"
              className="group flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.16em]"
            >
              {hero.scrollLabel}
              <ArrowDownRight
                aria-hidden="true"
                size={19}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
