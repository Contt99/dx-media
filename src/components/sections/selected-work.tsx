import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { siteContent } from "@/content/site";
import type { CaseStudy } from "@/types/site";

function CaseCopy({ project }: { project: CaseStudy }) {
  return (
    <div className="flex h-full flex-col p-5 sm:p-8 lg:p-10 xl:p-12">
      <div className="flex items-center justify-between border-t border-current/35 pt-3">
        <span className="caps-label text-dx-red">CASE / {project.number}</span>
        <span className="caps-label opacity-45">{project.kicker}</span>
      </div>
      <h3 className="display-type mt-8 text-[clamp(3.7rem,7.2vw,7.4rem)] uppercase leading-[0.78] tracking-[-0.085em] lg:mt-10">{project.client}</h3>
      <p className="mt-7 text-xl font-bold leading-tight tracking-[-0.04em] sm:text-3xl">{project.title}</p>

      <div className="mt-8 grid grid-cols-2 gap-5 border-t border-current/25 pt-5">
        {project.meta.map((item) => (
          <div key={item.label}>
            <p className="caps-label text-dx-red">{item.label}</p>
            <p className="mt-2 text-xs font-bold leading-5 sm:text-sm">{item.value}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 max-w-xl text-sm leading-7 opacity-60 sm:text-base">{project.description}</p>
      <ul className="mt-auto flex flex-wrap gap-x-5 gap-y-2 border-t border-current/25 pt-5">
        {project.tags.map((tag) => <li key={tag} className="caps-label opacity-60">{tag}</li>)}
      </ul>
    </div>
  );
}

function CaseMedia({ project }: { project: CaseStudy }) {
  if (project.tone === "algaecal") {
    return (
      <div className="relative min-h-[32rem] overflow-hidden bg-dx-green lg:min-h-full">
        <Image src={project.images[0].src} alt={project.images[0].alt} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
        <div className="absolute inset-x-[6%] top-[7%] border-y border-paper/45 py-3 text-center text-[0.62rem] font-bold tracking-[0.14em] text-paper">MULTI-AUDIENCE CREATOR MATRIX</div>
        <Image src={project.images[1].src} alt={project.images[1].alt} fill sizes="(min-width: 1024px) 52vw, 92vw" className="z-10 object-contain object-bottom p-[5%] pt-[17%]" />
        <span aria-hidden="true" className="absolute bottom-[6%] left-[5%] z-20 display-type text-[clamp(6rem,13vw,13rem)] leading-none tracking-[-0.08em] text-paper/10">03</span>
      </div>
    );
  }

  return (
    <div className="relative min-h-[34rem] overflow-hidden bg-ink lg:min-h-full">
      <div className="absolute inset-0 lg:right-[28%]">
        <Image src={project.images[0].src} alt={project.images[0].alt} fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" />
      </div>
      <div className="absolute bottom-4 right-4 h-[34%] w-[38%] border-4 border-paper bg-ink sm:bottom-6 sm:right-6 lg:h-[42%] lg:w-[31%]">
        <Image src={project.images[1].src} alt={project.images[1].alt} fill sizes="(min-width: 1024px) 20vw, 38vw" className="object-cover" />
      </div>
      <div className="absolute right-4 top-4 hidden h-[38%] w-[26%] border-4 border-paper bg-ink sm:right-6 sm:top-6 lg:block">
        <Image src={project.images[2].src} alt={project.images[2].alt} fill sizes="20vw" className="object-cover" />
      </div>
      <span aria-hidden="true" className="absolute left-5 top-3 display-type text-[clamp(6rem,12vw,12rem)] leading-none tracking-[-0.08em] text-paper/25">{project.number}</span>
    </div>
  );
}

export function SelectedWork() {
  const work = siteContent.work;

  return (
    <section id="work" aria-labelledby="work-title" className="bg-paper pb-24 pt-24 text-ink sm:pb-32 sm:pt-32 lg:pb-40 lg:pt-40">
      <div className="editorial-shell">
        <Reveal>
          <header className="grid gap-10 border-t border-ink pt-5 lg:grid-cols-12">
            <p className="caps-label text-dx-red lg:col-span-3">{work.label}</p>
            <h2 id="work-title" className="display-type whitespace-pre-line text-[clamp(4rem,9vw,9rem)] uppercase leading-[0.8] tracking-[-0.08em] lg:col-span-8 lg:col-start-5 lg:mt-14">{work.title}</h2>
          </header>
        </Reveal>
      </div>

      <div className="mt-16 space-y-12 lg:mt-24 lg:space-y-[16vh]">
        {work.cases.map((project, index) => (
          <article
            key={project.client}
            className={`capture-static-card relative mx-auto min-h-[50rem] w-[calc(100%-1rem)] max-w-[100rem] overflow-hidden border border-ink/25 lg:sticky lg:top-[calc(var(--header-height)+0.75rem)] lg:min-h-[calc(100svh-var(--header-height)-1.5rem)] ${project.tone === "samsonite" ? "bg-[#ddd8ce]" : "bg-paper"}`}
            style={{ zIndex: index + 1 }}
          >
            <div className="grid min-h-[inherit] lg:grid-cols-12">
              <div className="lg:col-span-5"><CaseCopy project={project} /></div>
              <div className="min-h-[32rem] lg:col-span-7"><CaseMedia project={project} /></div>
            </div>
          </article>
        ))}
      </div>

      <div className="editorial-shell mt-28 lg:mt-44">
        <Reveal>
          <div className="grid gap-8 border-t border-ink pt-5 lg:grid-cols-12">
            <p className="caps-label text-dx-red lg:col-span-3">PROJECT ARCHIVE / MORE WORK</p>
            <h3 className="display-type text-[clamp(3.6rem,8vw,8rem)] uppercase leading-[0.82] tracking-[-0.075em] lg:col-span-8 lg:col-start-5">MORE IDEAS.<br />MORE CONNECTIONS.</h3>
          </div>
        </Reveal>

        <div className="mt-16 grid border-l border-t border-ink/25 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {work.archive.map((project, index) => (
            <Reveal key={project.number} delay={index * 0.05}>
              <article className="group flex h-full min-h-[32rem] flex-col border-b border-r border-ink/25">
                <div className="p-5 sm:p-6">
                  <p className="display-type text-5xl leading-none text-dx-red">{project.number}</p>
                  <h4 className="mt-8 text-xl font-bold tracking-[-0.04em]">{project.client} · {project.title}</h4>
                  <p className="mt-3 text-xs font-bold leading-5 text-muted">{project.categories}</p>
                  <p className="mt-4 text-sm leading-6 text-muted">{project.description}</p>
                </div>
                <div className="relative mt-auto aspect-[3/2] overflow-hidden bg-paper-deep">
                  <Image src={project.image} alt={project.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
