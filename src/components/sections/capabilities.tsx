import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { siteContent } from "@/content/site";

const focusLayout = [
  "lg:col-span-5",
  "lg:col-span-3 lg:col-start-7 lg:mt-32",
  "lg:col-span-4 lg:col-start-9 lg:-mt-10",
] as const;

export function Capabilities() {
  const { about, capabilities } = siteContent;

  return (
    <>
      <section id="about" aria-labelledby="about-title" className="bg-paper py-24 sm:py-32 lg:py-44">
        <div className="editorial-shell">
          <Reveal>
            <div className="grid gap-12 border-t border-ink pt-5 lg:grid-cols-12">
              <p className="caps-label text-dx-red lg:col-span-3">{about.label}</p>
              <div className="lg:col-span-8 lg:col-start-5">
                <h2 id="about-title" className="text-balance text-[clamp(2.5rem,5.9vw,6rem)] font-bold leading-[0.98] tracking-[-0.065em]">
                  {about.statement}
                </h2>
                <p className="mt-10 max-w-2xl text-base leading-8 text-muted sm:text-lg lg:ml-auto lg:mt-16">
                  {about.detail}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="capabilities" aria-labelledby="capabilities-title" className="bg-ink py-24 text-paper sm:py-32 lg:py-40">
        <div className="editorial-shell">
          <Reveal>
            <header className="grid gap-10 border-t border-paper/35 pt-5 lg:grid-cols-12">
              <p className="caps-label text-dx-red lg:col-span-3">{capabilities.label}</p>
              <p className="caps-label text-paper/50 lg:col-span-5 lg:text-right">{capabilities.meta}</p>
              <h2 id="capabilities-title" className="display-type whitespace-pre-line text-[clamp(4.2rem,10vw,9.5rem)] uppercase leading-[0.8] tracking-[-0.08em] lg:col-span-8 lg:col-start-1 lg:mt-16">
                {capabilities.title}
              </h2>
              <p className="self-end text-xl font-bold tracking-[-0.04em] lg:col-span-3 lg:col-start-10 lg:text-3xl">
                {capabilities.intro}
              </p>
            </header>
          </Reveal>

          <div className="mt-20 border-t border-paper/30 lg:mt-28">
            {capabilities.services.map((service, index) => (
              <Reveal key={service.number} delay={index * 0.035} amount={0.25}>
                <article className="group grid gap-5 border-b border-paper/30 py-7 sm:grid-cols-[4rem_1fr] lg:grid-cols-12 lg:items-center lg:py-9">
                  <p className="caps-label text-dx-red lg:col-span-1">{service.number}</p>
                  <div className="lg:col-span-6">
                    <h3 className="text-[clamp(2rem,4.6vw,4.7rem)] font-bold leading-[0.95] tracking-[-0.06em] transition-transform duration-500 group-hover:translate-x-2">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-paper/55">{service.titleZh}</p>
                  </div>
                  <p className="max-w-lg text-sm leading-7 text-paper/55 sm:col-start-2 lg:col-span-4 lg:col-start-8 lg:text-base">
                    {service.description}
                  </p>
                  <ArrowUpRight aria-hidden="true" size={28} strokeWidth={1.2} className="hidden justify-self-end text-paper/35 transition-colors group-hover:text-dx-red lg:block" />
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-28 border-t border-paper/35 pt-5 lg:mt-40">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-12">
                <p className="caps-label text-dx-red lg:col-span-3">FOCUSED CONSUMER WORLDS</p>
                <h3 className="text-balance text-[clamp(2.8rem,6.2vw,6.2rem)] font-bold leading-[0.92] tracking-[-0.07em] lg:col-span-8 lg:col-start-5">
                  深入真实生活，连接消费发生的地方。
                </h3>
              </div>
            </Reveal>

            <div className="mt-16 grid gap-y-16 lg:mt-24 lg:grid-cols-12 lg:gap-x-6">
              {capabilities.focusAreas.map((area, index) => (
                <Reveal key={area.number} delay={index * 0.08} amount={0.15} className={focusLayout[index]}>
                  <article>
                    <div className={`relative overflow-hidden bg-paper/10 ${index === 1 ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                      <Image src={area.image} alt={area.alt} fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover transition-transform duration-700 ease-out hover:scale-[1.025]" />
                    </div>
                    <div className="mt-4 flex items-start justify-between border-t border-paper/50 pt-3">
                      <div>
                        <h4 className="text-2xl font-bold tracking-[-0.04em] sm:text-3xl">{area.title}</h4>
                        <p className="mt-1 text-sm text-paper/50">{area.subtitle}</p>
                      </div>
                      <span className="caps-label text-dx-red">{area.number}</span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
