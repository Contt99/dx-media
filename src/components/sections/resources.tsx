import { Reveal } from "@/components/motion/reveal";
import { siteContent } from "@/content/site";

const numberAlignment = [
  "lg:justify-start",
  "lg:justify-center",
  "lg:justify-end",
] as const;

export function Resources() {
  const content = siteContent.resources;

  return (
    <section
      id="resources"
      aria-labelledby="resources-title"
      className="bg-paper px-4 py-24 text-ink sm:px-8 sm:py-32 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <header className="grid gap-8 border-t border-ink pt-5 lg:grid-cols-12">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-dx-red lg:col-span-2">
              {content.label}
            </p>
            <h2
              id="resources-title"
              className="display-type whitespace-pre-line text-[clamp(4rem,9vw,9rem)] uppercase leading-[0.84] tracking-[-0.075em] lg:col-span-7"
            >
              {content.title}
            </h2>
            <p className="max-w-md self-end text-base leading-7 text-muted lg:col-span-3 lg:text-lg lg:leading-8">
              {content.intro}
            </p>
          </header>
        </Reveal>

        <div className="mt-20 lg:mt-28">
          {content.stats.map((stat, index) => (
            <Reveal key={stat.number} amount={0.2}>
              <article className="border-t border-ink py-8 lg:py-12">
                <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                  <div className="flex items-baseline justify-between lg:col-span-3 lg:block">
                    <p className="text-xl font-bold tracking-[-0.04em] sm:text-2xl">
                      {stat.scene}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted">
                      {stat.audience}
                    </p>
                  </div>

                  <p
                    className={`display-type flex whitespace-nowrap text-[clamp(5rem,15vw,15rem)] leading-[0.72] tracking-[-0.085em] lg:col-span-9 ${numberAlignment[index]}`}
                    aria-label={`${stat.number} plus`}
                  >
                    <span>{stat.number}</span>
                    <sup className="ml-[0.08em] mt-[0.08em] text-[0.22em] leading-none tracking-normal text-dx-red">
                      +
                    </sup>
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="grid gap-8 border-y border-ink py-6 lg:grid-cols-12 lg:items-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-dx-red lg:col-span-3">
              {content.platformsLabel}
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-3 lg:col-span-9 lg:justify-end">
              {content.platforms.map((platform) => (
                <li
                  key={platform}
                  className="text-sm font-bold uppercase tracking-[0.1em] sm:text-base"
                >
                  {platform}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
