import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { siteContent } from "@/content/site";

const focusLayouts = [
  "lg:col-span-4",
  "lg:col-span-3 lg:col-start-6 lg:mt-28",
  "lg:col-span-4 lg:col-start-9",
] as const;

export function WhatWeDo() {
  const content = siteContent.whatWeDo;

  return (
    <section id="what-we-do" aria-labelledby="what-we-do-title">
      <div className="bg-ink px-4 py-24 text-paper sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <header className="grid gap-10 border-t border-paper/35 pt-5 lg:grid-cols-12">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-dx-red lg:col-span-2">
                {content.label}
              </p>
              <h2
                id="what-we-do-title"
                className="display-type whitespace-pre-line text-[clamp(4.3rem,10vw,10rem)] uppercase leading-[0.82] tracking-[-0.075em] lg:col-span-7"
              >
                {content.title}
              </h2>
              <p className="max-w-md self-end text-base leading-7 text-paper/65 lg:col-span-3 lg:text-lg lg:leading-8">
                {content.intro}
              </p>
            </header>
          </Reveal>

          <div className="mt-20 border-t border-paper/30 lg:mt-28">
            {content.services.map((service, index) => (
              <Reveal key={service.number} delay={index * 0.04} amount={0.3}>
                <article className="group grid gap-4 border-b border-paper/30 py-6 sm:grid-cols-[4rem_1fr] lg:grid-cols-12 lg:items-center lg:py-8">
                  <p className="text-xs font-bold text-dx-red lg:col-span-1">
                    {service.number}
                  </p>
                  <div className="lg:col-span-5">
                    <h3 className="text-[clamp(2rem,4.2vw,4.5rem)] font-bold leading-none tracking-[-0.055em] transition-transform duration-500 group-hover:translate-x-2">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.16em] text-paper/45">
                      {service.titleEn}
                    </p>
                  </div>
                  <p className="max-w-xl text-sm leading-6 text-paper/60 sm:col-start-2 lg:col-span-4 lg:col-start-8 lg:text-base lg:leading-7">
                    {service.description}
                  </p>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="hidden justify-self-end text-paper/45 transition-colors duration-300 group-hover:text-dx-red lg:block lg:col-span-1"
                    size={30}
                    strokeWidth={1.2}
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-paper px-4 py-24 text-ink sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <header className="grid gap-8 border-t border-ink pt-5 lg:grid-cols-12">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-dx-red lg:col-span-3">
                {content.focusLabel}
              </p>
              <h2 className="text-balance whitespace-pre-line text-[clamp(2.6rem,6vw,6rem)] font-bold leading-[0.95] tracking-[-0.065em] lg:col-span-6">
                {content.focusTitle}
              </h2>
              <p className="max-w-sm self-end text-sm leading-7 text-muted lg:col-span-3 lg:text-base">
                {content.focusIntro}
              </p>
            </header>
          </Reveal>

          <div className="mt-16 grid gap-y-16 lg:mt-24 lg:grid-cols-12 lg:gap-x-6">
            {content.focusAreas.map((area, index) => (
              <Reveal
                key={area.number}
                delay={index * 0.08}
                amount={0.15}
                className={focusLayouts[index]}
              >
                <article>
                  <div className="relative aspect-[4/5] overflow-hidden bg-line">
                    <Image
                      src={area.image}
                      alt={area.alt}
                      fill
                      sizes="(min-width: 1024px) 34vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out hover:scale-[1.025]"
                    />
                  </div>
                  <div className="mt-4 flex items-start justify-between border-t border-ink pt-3">
                    <div>
                      <h3 className="text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
                        {area.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted">{area.subtitle}</p>
                    </div>
                    <span className="text-xs font-bold text-dx-red">
                      {area.number}
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
