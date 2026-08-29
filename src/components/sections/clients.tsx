import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { siteContent } from "@/content/site";

export function Clients() {
  const content = siteContent.clients;

  return (
    <section
      id="clients"
      aria-labelledby="clients-title"
      className="bg-white px-4 py-24 text-ink sm:px-8 sm:py-32 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <header className="grid gap-8 border-t border-ink pt-5 lg:grid-cols-12">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-dx-red lg:col-span-2">
              {content.label}
            </p>
            <h2
              id="clients-title"
              className="display-type whitespace-pre-line text-[clamp(3.7rem,8vw,8rem)] uppercase leading-[0.84] tracking-[-0.075em] lg:col-span-7"
            >
              {content.title}
            </h2>
            <p className="max-w-md self-end text-base leading-7 text-muted lg:col-span-3 lg:text-lg lg:leading-8">
              {content.intro}
            </p>
          </header>
        </Reveal>

        <Reveal className="mt-16 lg:mt-24">
          <ul className="grid grid-cols-2 border-l border-t border-ink/25 lg:grid-cols-4">
            {content.items.map((client, index) => (
              <li
                key={client.name}
                className="group relative min-h-44 border-b border-r border-ink/25 sm:min-h-56 lg:min-h-64"
              >
                <span className="absolute left-4 top-4 z-10 text-[0.62rem] font-bold tracking-[0.12em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-contain p-8 grayscale mix-blend-multiply transition-[filter,opacity,transform] duration-500 group-hover:scale-[1.03] group-hover:grayscale-0 sm:p-12 lg:p-14"
                />
                <span className="sr-only">{client.name}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
