import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { siteContent } from "@/content/site";

export function Capabilities() {
  const { capabilities } = siteContent;

  return (
    <section id="what-we-do" aria-labelledby="capabilities-title" className="bg-ink py-24 text-paper sm:py-32 lg:py-40">
        <div className="editorial-shell">
          <Reveal>
            <header className="grid gap-10 border-t border-paper/35 pt-5 lg:grid-cols-12">
              <p className="caps-label text-dx-red lg:col-span-3">{capabilities.label}</p>
              <p className="caps-label text-paper/50 lg:col-span-5 lg:text-right">{capabilities.meta}</p>
              <h2 id="capabilities-title" className="display-type min-w-0 whitespace-pre-line text-[clamp(1.95rem,9vw,7rem)] uppercase leading-[0.8] tracking-[-0.08em] lg:col-span-9 lg:col-start-1 lg:mt-16 lg:text-[clamp(4rem,6.5vw,7rem)]">
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
        </div>
      </section>
  );
}
