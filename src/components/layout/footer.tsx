import { ArrowUpRight } from "lucide-react";
import { siteContent } from "@/content/site";

export function Footer() {
  const { brand, footer } = siteContent;

  return (
    <footer id="contact" className="bg-ink py-9 text-paper sm:py-12">
      <div className="editorial-shell">
        <div className="grid grid-cols-2 gap-4 border-t border-paper/35 pt-4 lg:grid-cols-12">
          <p className="caps-label text-dx-red lg:col-span-5">
            {footer.eyebrow}
          </p>
          <a
            href="#top"
            aria-label="返回页面顶部"
            className="group flex items-center justify-end gap-2 text-[0.67rem] font-bold uppercase tracking-[0.16em] lg:col-span-2 lg:col-start-11"
          >
            Back to top
            <ArrowUpRight
              aria-hidden="true"
              size={18}
              strokeWidth={1.4}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>

        <div className="grid gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:items-end lg:py-24">
          <p className="display-type text-[clamp(4.6rem,13vw,12.5rem)] uppercase leading-[0.72] tracking-[-0.09em] lg:col-span-9">
            D<span className="text-dx-red">X</span> MEDIA
          </p>
          <p className="text-sm leading-6 text-paper/55 lg:col-span-2 lg:col-start-11 lg:text-right">
            <span className="font-bold text-paper">{brand.conceptEn}</span>
            <br />
            {brand.conceptZh}
          </p>
        </div>

        <div className="flex flex-col gap-3 border-t border-paper/35 pt-4 text-[0.67rem] font-bold uppercase tracking-[0.14em] text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright}</p>
          <p>{brand.conceptEn} · {brand.conceptZh}</p>
        </div>
      </div>
    </footer>
  );
}
