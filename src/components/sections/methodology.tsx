import { Reveal } from "@/components/motion/reveal";
import { siteContent } from "@/content/site";

const orbitPositions = [
  "left-1/2 top-[7%] -translate-x-1/2 text-center",
  "right-[5%] top-[24%] text-right",
  "right-[5%] bottom-[22%] text-right",
  "left-1/2 bottom-[7%] -translate-x-1/2 text-center",
  "left-[5%] bottom-[22%]",
  "left-[5%] top-[24%]",
] as const;

export function Methodology() {
  const { why, how } = siteContent.methodology;

  return (
    <>
      <section
        id="why-dx"
        aria-labelledby="why-dx-title"
        className="bg-ink py-24 text-paper sm:py-32 lg:py-40"
      >
        <div className="editorial-shell">
          <Reveal>
            <header className="grid gap-9 border-t border-paper/35 pt-5 lg:grid-cols-12">
              <p className="caps-label text-dx-red lg:col-span-3">
                {why.label}
              </p>
              <h2
                id="why-dx-title"
                className="display-type min-w-0 whitespace-pre-line text-[clamp(3.3rem,9.2vw,9rem)] uppercase leading-[0.8] tracking-[-0.08em] lg:col-span-8 lg:col-start-5"
              >
                {why.title}
              </h2>
            </header>
          </Reveal>

          <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-12">
            <Reveal className="lg:col-span-3">
              <p className="caps-label text-dx-red">WHY DX</p>
              <p className="mt-5 max-w-[8em] text-3xl font-bold leading-[1.08] tracking-[-0.05em] sm:text-4xl">
                {why.intro}
              </p>
            </Reveal>

            <div className="lg:col-span-8 lg:col-start-5">
              {why.principles.map((principle, index) => (
                <Reveal key={principle.symbol} delay={index * 0.04} amount={0.2}>
                  <article className="group grid grid-cols-[5rem_1fr] gap-5 border-t border-paper/25 py-8 sm:grid-cols-[8rem_1fr] lg:grid-cols-12 lg:items-center lg:py-9">
                    <span
                      aria-hidden="true"
                      className="display-type text-[clamp(5.2rem,10vw,9rem)] leading-[0.58] text-dx-red transition-transform duration-500 group-hover:translate-x-2 lg:col-span-3"
                    >
                      {principle.symbol}
                    </span>
                    <div className="lg:col-span-8 lg:col-start-5">
                      <h3 className="text-[clamp(2rem,4vw,4rem)] font-bold leading-none tracking-[-0.055em]">
                        {principle.title}
                      </h3>
                      <p className="mt-2 text-base font-bold text-paper/75 sm:text-lg">
                        {principle.titleZh}
                      </p>
                      <p className="mt-4 max-w-xl text-sm leading-6 text-paper/45 sm:text-base">
                        {principle.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
              <div className="border-t border-paper/25" />
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-we-work"
        aria-labelledby="how-we-work-title"
        className="bg-paper py-24 text-ink sm:py-32 lg:py-40"
      >
        <div className="editorial-shell">
          <Reveal>
            <header className="grid gap-9 border-t border-ink pt-5 lg:grid-cols-12">
              <p className="caps-label text-dx-red lg:col-span-3">
                {how.label}
              </p>
              <p className="caps-label text-muted lg:col-span-3 lg:col-start-10 lg:text-right">
                {how.model}
              </p>
              <h2
                id="how-we-work-title"
                className="display-type min-w-0 whitespace-pre-line text-[clamp(3.3rem,9.2vw,9rem)] uppercase leading-[0.8] tracking-[-0.08em] lg:col-span-9 lg:mt-14"
              >
                {how.title}
              </h2>
              <p className="max-w-sm self-end text-lg font-bold leading-snug tracking-[-0.035em] lg:col-span-3 lg:text-right lg:text-2xl">
                {how.intro}
              </p>
            </header>
          </Reveal>

          <Reveal className="mt-20 lg:mt-28" amount={0.1}>
            <div className="relative hidden h-[38rem] overflow-hidden border-y border-ink/25 lg:block">
              <svg
                aria-hidden="true"
                viewBox="0 0 100 70"
                className="absolute inset-[5%] h-[90%] w-[90%]"
              >
                <ellipse cx="50" cy="35" rx="42" ry="27" fill="none" stroke="currentColor" strokeOpacity="0.24" strokeWidth="0.25" />
                <ellipse cx="50" cy="35" rx="31" ry="20" fill="none" stroke="currentColor" strokeOpacity="0.16" strokeWidth="0.2" strokeDasharray="1 2" />
                <ellipse cx="50" cy="35" rx="38" ry="15" fill="none" stroke="currentColor" strokeOpacity="0.14" strokeWidth="0.2" transform="rotate(-16 50 35)" />
              </svg>

              {how.nodes.map((node, index) => (
                <div key={node.number} className={`group absolute max-w-64 ${orbitPositions[index]}`}>
                  <p className="caps-label text-dx-red transition-colors duration-300 group-hover:text-ink">
                    {node.number} / {node.meta}
                  </p>
                  <p className="mt-2 text-xl font-bold tracking-[-0.04em] transition-transform duration-300 group-hover:-translate-y-1">
                    {node.title}
                  </p>
                </div>
              ))}

              <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-dx-red text-center text-paper shadow-[0_0_0_1.5rem_rgba(210,15,53,0.08)]">
                <span className="caps-label text-paper/65">CONTINUOUS</span>
                <strong className="mt-2 text-2xl tracking-[-0.04em]">AI ENGINE</strong>
                <span className="mt-2 text-xs text-paper/70">贯穿所有阶段</span>
              </div>
            </div>
          </Reveal>

          <div className="mt-16 border-t border-ink/25 lg:hidden">
            {how.nodes.map((node, index) => (
              <Reveal key={node.number} delay={index * 0.035} amount={0.2}>
                <article className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-ink/25 py-5">
                  <span className="caps-label text-dx-red">{node.number}</span>
                  <div>
                    <h3 className="text-xl font-bold">{node.title}</h3>
                    <p className="caps-label mt-2 text-muted">{node.meta}</p>
                  </div>
                </article>
              </Reveal>
            ))}
            <p className="caps-label border-b border-ink/25 py-5 text-dx-red">
              {how.ai}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
