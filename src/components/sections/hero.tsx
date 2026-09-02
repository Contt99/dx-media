import { ArrowDownRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { siteContent } from "@/content/site";

export function Hero() {
  const { brand, hero } = siteContent;

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative min-h-[100svh] overflow-hidden bg-paper pt-[var(--header-height)]"
    >
      <div aria-hidden="true" className="absolute left-[42%] top-[18%] h-[54vw] max-h-[54rem] min-h-96 w-[54vw] max-w-[54rem] min-w-96 rounded-full border border-ink/10" />
      <div aria-hidden="true" className="absolute left-[48%] top-[22%] h-[42vw] max-h-[42rem] min-h-72 w-[42vw] max-w-[42rem] min-w-72 rounded-full border border-dashed border-ink/10" />
      <span aria-hidden="true" className="absolute left-[72%] top-[31%] h-2.5 w-2.5 rounded-full bg-dx-red" />

      <div className="editorial-shell relative grid min-h-[calc(100svh-var(--header-height))] grid-rows-[auto_1fr_auto] py-5 sm:py-7">
        <Reveal>
          <div className="grid grid-cols-2 gap-4 border-t border-ink pt-3 lg:grid-cols-12">
            <p className="caps-label text-dx-red lg:col-span-4">{hero.eyebrow}</p>
            <p className="caps-label text-right text-muted lg:col-span-2 lg:col-start-11">
              Shanghai / China
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col justify-center py-12 lg:py-16">
          <Reveal delay={0.06} distance={32}>
            <p className="caps-label mb-5 text-muted sm:mb-8">Digital X — connection as a medium</p>
            <h1
              id="hero-title"
              className="display-type flex flex-col text-[clamp(5rem,16.5vw,15.8rem)] uppercase leading-[0.73] tracking-[-0.09em]"
            >
              <span>
                D<span className="text-dx-red">X</span>
              </span>
              <span className="self-end pr-[2vw]">Media</span>
            </h1>
          </Reveal>
        </div>

        <div className="grid gap-7 border-t border-ink pt-5 sm:grid-cols-2 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-5">
            <p className="max-w-[18em] text-balance text-xl font-bold leading-[1.15] tracking-[-0.04em] sm:text-2xl lg:text-[2.05rem]">
              {hero.statement}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-2 lg:col-start-9">
            <p className="text-sm leading-6 text-muted">
              <span className="font-bold text-ink">{brand.conceptEn}</span>
              <br />
              {brand.conceptZh}
            </p>
          </Reveal>

          <Reveal delay={0.14} className="justify-self-start sm:justify-self-end lg:col-span-2">
            <a
              href="#what-we-do"
              aria-label="向下浏览公司能力"
              className="group flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.16em]"
            >
              {hero.scrollLabel}
              <ArrowDownRight
                aria-hidden="true"
                size={20}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
