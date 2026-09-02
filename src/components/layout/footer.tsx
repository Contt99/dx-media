import { ArrowUpRight } from "lucide-react";
import { siteContent } from "@/content/site";

export function Footer() {
  const { brand, footer } = siteContent;

  return (
    <footer id="contact" className="bg-ink py-8 text-paper sm:py-10 lg:py-12">
      <div className="editorial-shell flex min-h-[88svh] flex-col justify-between">
        <div className="grid grid-cols-2 gap-4 border-t border-paper/35 pt-3 lg:grid-cols-12">
          <p className="caps-label text-dx-red lg:col-span-5">{footer.eyebrow}</p>
          <p className="caps-label text-right text-paper/50 lg:col-span-2 lg:col-start-11">SHANGHAI / CHINA</p>
        </div>

        <div className="py-16 lg:py-24">
          <p className="caps-label mb-8 text-paper/40">DX MEDIA / DIGITAL X</p>
          <h2 className="display-type whitespace-pre-line text-[clamp(4.6rem,13.2vw,13rem)] uppercase leading-[0.74] tracking-[-0.09em]">{footer.statement}</h2>
        </div>

        <div className="grid gap-7 border-t border-paper/35 pt-5 sm:grid-cols-2 lg:grid-cols-12 lg:items-end">
          <p className="display-type text-4xl tracking-[-0.06em] lg:col-span-4">
            D<span className="text-dx-red">X</span> MEDIA
          </p>
          <p className="text-sm leading-6 text-paper/55 lg:col-span-2 lg:col-start-8">
            {brand.conceptEn}<br />{brand.conceptZh}
          </p>
          <a href="#top" aria-label="返回页面顶部" className="group flex items-center gap-2 text-sm font-bold sm:justify-self-end lg:col-span-3">
            BACK TO TOP
            <ArrowUpRight aria-hidden="true" size={20} strokeWidth={1.4} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </footer>
  );
}
