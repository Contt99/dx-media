import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { siteContent } from "@/content/site";

export function ScaleClients() {
  const scale = siteContent.scale;

  return (
    <section aria-labelledby="scale-title" className="bg-paper py-24 text-ink sm:py-32 lg:py-40">
      <div className="editorial-shell">
        <Reveal>
          <header className="grid gap-8 border-t border-ink pt-5 lg:grid-cols-12">
            <p className="caps-label text-dx-red lg:col-span-3">{scale.label}</p>
            <p className="caps-label text-muted lg:col-span-4 lg:col-start-9 lg:text-right">FULL-PLATFORM COVERAGE</p>
            <h2 id="scale-title" className="display-type text-[clamp(4rem,10.4vw,10rem)] leading-[0.8] tracking-[-0.085em] lg:col-span-10 lg:mt-14">
              {scale.title}
            </h2>
            <p className="text-lg font-bold tracking-[-0.03em] lg:col-span-2 lg:self-end lg:text-right">{scale.intro}</p>
          </header>
        </Reveal>

        <div className="mt-20 border-t border-ink lg:mt-28">
          {scale.stats.map((stat) => (
            <Reveal key={stat.value} amount={0.3}>
              <article className="grid gap-4 border-b border-ink/25 py-8 sm:grid-cols-[10rem_1fr] lg:grid-cols-12 lg:items-center lg:py-10">
                <p className="text-xl font-bold tracking-[-0.04em] lg:col-span-2">{stat.world}</p>
                <p className="display-type whitespace-nowrap text-[clamp(4.3rem,11.5vw,11.5rem)] leading-[0.72] tracking-[-0.085em] text-dx-red sm:col-start-2 lg:col-span-7 lg:col-start-4">
                  {stat.value}
                </p>
                <p className="text-sm text-muted sm:col-start-2 lg:col-span-2 lg:col-start-11 lg:text-right lg:text-base">{stat.label}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 grid gap-8 border-t border-ink pt-5 lg:mt-28 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="caps-label text-dx-red">FULL-PLATFORM COVERAGE</p>
              <p className="mt-4 max-w-xs text-sm leading-6 text-muted">覆盖内容、社交与本地生活平台，让表达进入人群真实使用的媒介环境。</p>
            </div>
            <ul className="grid grid-cols-3 gap-px bg-ink/20 lg:col-span-9 lg:grid-cols-6">
              {scale.platforms.map((platform) => (
                <li key={platform.name} className="group flex aspect-square flex-col items-center justify-center bg-paper p-4 sm:p-6">
                  <div className="relative h-11 w-11 overflow-hidden bg-transparent sm:h-14 sm:w-14">
                    <Image src={platform.logo} alt={`${platform.name} logo`} fill sizes="56px" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <span className="mt-3 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-muted">{platform.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-28 lg:mt-40">
          <Reveal>
            <div className="grid gap-8 border-t border-ink pt-5 lg:grid-cols-12">
              <p className="caps-label text-dx-red lg:col-span-3">CLIENTS / ONE STANDARD</p>
              <h3 className="display-type text-[clamp(3.4rem,7.8vw,7.8rem)] uppercase leading-[0.82] tracking-[-0.075em] lg:col-span-8 lg:col-start-5">
                ACROSS<br />CATEGORIES.
              </h3>
            </div>
          </Reveal>

          <Reveal className="mt-16 lg:mt-24">
            <ul className="grid grid-cols-2 border-l border-t border-ink/20 sm:grid-cols-3 lg:grid-cols-4">
              {scale.clients.map((client, index) => (
                <li key={client.name} className="group relative min-h-44 border-b border-r border-ink/20 sm:min-h-52">
                  <span className="absolute left-4 top-4 text-[0.6rem] font-bold tracking-[0.12em] text-muted">{String(index + 1).padStart(2, "0")}</span>
                  <Image src={client.logo} alt={`${client.name} logo`} fill sizes="(min-width: 1024px) 24vw, 50vw" className="object-contain p-10 grayscale mix-blend-multiply transition-[filter,transform] duration-500 group-hover:scale-[1.025] group-hover:grayscale-0 sm:p-12" />
                  <span className="sr-only">{client.name}</span>
                </li>
              ))}
              <li className="group relative flex min-h-44 flex-col items-center justify-center border-b border-r border-ink/20 sm:min-h-52">
                <span className="absolute left-4 top-4 text-[0.6rem] font-bold tracking-[0.12em] text-muted">12</span>
                <span aria-hidden="true" className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-ink/20 transition-colors duration-300 group-hover:bg-dx-red" />
                  <span className="h-2.5 w-2.5 rounded-full bg-ink/20 transition-colors duration-300 group-hover:bg-dx-red" />
                  <span className="h-2.5 w-2.5 rounded-full bg-ink/20 transition-colors duration-300 group-hover:bg-dx-red" />
                </span>
                <p className="mt-6 text-sm font-bold tracking-[-0.02em] text-muted">
                  更多品牌 <span className="ml-1 uppercase tracking-[0.08em]">MORE</span>
                </p>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
