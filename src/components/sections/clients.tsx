import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { siteContent } from "@/content/site";

export function Clients() {
  const content = siteContent.clients;

  return (
    <section
      id="clients"
      aria-labelledby="clients-title"
      className="bg-white px-4 py-20 text-ink sm:px-8 sm:py-24 lg:min-h-[50svh] lg:px-12 lg:py-14"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <header className="grid gap-6 border-t border-ink pt-4 lg:grid-cols-12 lg:gap-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-dx-red lg:col-span-2">
              {content.label}
            </p>
            <h2
              id="clients-title"
              className="display-type whitespace-pre-line text-[2rem] uppercase leading-[0.84] tracking-[-0.075em] sm:text-[clamp(3.2rem,5.6vw,6rem)] lg:col-span-7"
            >
              {content.title}
            </h2>
            <p className="max-w-md self-end text-sm leading-6 text-muted lg:col-span-3 lg:text-base lg:leading-7">
              {content.intro}
            </p>
          </header>
        </Reveal>

        <Reveal className="mt-10 lg:mt-9">
          <ul className="flex snap-x snap-mandatory overflow-x-auto border-l border-t border-ink/25 lg:grid lg:grid-cols-4 lg:overflow-visible">
            {content.items.map((client, index) => (
              <li
                key={client.name}
                className="group relative h-36 min-w-[68vw] snap-start border-b border-r border-ink/25 bg-white sm:min-w-[42vw] lg:h-28 lg:min-w-0"
              >
                <span className="absolute left-3 top-3 z-10 text-[0.58rem] font-bold tracking-[0.12em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 42vw, 68vw"
                  className="object-contain p-8 pb-11 grayscale mix-blend-multiply transition-[filter,opacity,transform] duration-500 group-hover:scale-[1.025] group-hover:grayscale-0 lg:p-6 lg:pb-9"
                />
                <span className="absolute bottom-3 left-3 right-3 truncate text-[0.6rem] font-bold uppercase tracking-[0.1em] text-muted transition-colors duration-300 group-hover:text-ink">
                  {client.name}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
