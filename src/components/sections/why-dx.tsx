import { Reveal } from "@/components/motion/reveal";
import { siteContent } from "@/content/site";

export function WhyDx() {
  const content = siteContent.whyDx;

  return (
    <section
      id="why-dx"
      aria-labelledby="why-dx-title"
      className="bg-ink px-4 py-24 text-paper sm:px-8 sm:py-32 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <header className="grid gap-8 border-t border-paper/35 pt-5 lg:grid-cols-12">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-dx-red lg:col-span-2">
              {content.label}
            </p>
            <h2
              id="why-dx-title"
              className="display-type whitespace-pre-line text-[clamp(3.8rem,8vw,8rem)] uppercase leading-[0.84] tracking-[-0.075em] lg:col-span-7"
            >
              {content.title}
            </h2>
            <p className="max-w-md self-end text-base leading-7 text-paper/60 lg:col-span-3 lg:text-lg lg:leading-8">
              {content.intro}
            </p>
          </header>
        </Reveal>

        <div className="mt-20 grid gap-14 lg:mt-28 lg:grid-cols-12 lg:gap-8">
          <Reveal className="self-start lg:sticky lg:top-28 lg:col-span-3">
            <p className="border-t border-paper/30 pt-4 text-2xl font-bold leading-tight tracking-[-0.04em] sm:text-3xl">
              {content.concept}
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-paper/40">
              DX arithmetic
            </p>
          </Reveal>

          <div className="lg:col-span-9">
            {content.principles.map((principle, index) => (
              <Reveal
                key={principle.symbol}
                delay={index * 0.04}
                amount={0.25}
              >
                <article className="group grid grid-cols-[7rem_1fr] gap-5 border-t border-paper/30 py-9 sm:grid-cols-[9rem_1fr] sm:py-12 lg:grid-cols-12 lg:gap-6 lg:py-14">
                  <span
                    aria-hidden="true"
                    className="display-type text-[clamp(6.5rem,15vw,13rem)] leading-[0.62] tracking-[-0.08em] text-dx-red transition-transform duration-500 group-hover:translate-x-2 lg:col-span-3"
                  >
                    {principle.symbol}
                  </span>
                  <div className="self-center lg:col-span-8 lg:col-start-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-paper/40">
                      {principle.titleEn}
                    </p>
                    <h3 className="mt-3 text-[clamp(2rem,4vw,4.5rem)] font-bold leading-none tracking-[-0.055em]">
                      {principle.title}
                    </h3>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-paper/60 sm:text-base">
                      {principle.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
            <div className="border-t border-paper/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
