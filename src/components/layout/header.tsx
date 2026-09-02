"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteContent } from "@/content/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const sections = siteContent.navigation.flatMap((item) => {
      const element = document.getElementById(item.href.slice(1));
      return element ? [{ href: item.href, element }] : [];
    });
    let animationFrame: number | null = null;

    const updateActiveSection = () => {
      animationFrame = null;
      const headerHeight = Number.parseFloat(
        window
          .getComputedStyle(document.documentElement)
          .getPropertyValue("--header-height"),
      );
      const marker =
        (Number.isNaN(headerHeight) ? 0 : headerHeight) +
        window.innerHeight * 0.28;
      const currentSection = sections.find(({ element }) => {
        const rect = element.getBoundingClientRect();
        return rect.top <= marker && rect.bottom > marker;
      });

      setActiveHref((current) =>
        current === currentSection?.href ? current : (currentSection?.href ?? null),
      );
    };

    const requestActiveSectionUpdate = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", requestActiveSectionUpdate, {
      passive: true,
    });
    window.addEventListener("resize", requestActiveSectionUpdate);

    return () => {
      window.removeEventListener("scroll", requestActiveSectionUpdate);
      window.removeEventListener("resize", requestActiveSectionUpdate);
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 h-[var(--header-height)] border-b border-ink/20 bg-paper/95">
      <div className="editorial-shell flex h-full items-center justify-between">
        <a
          href="#top"
          aria-label="返回 DX MEDIA 首页"
          className="display-type text-[1.05rem] tracking-[-0.055em] text-ink sm:text-lg"
        >
          D<span className="text-dx-red">X</span> MEDIA
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          <span className="hidden text-[0.67rem] uppercase tracking-[0.18em] text-muted xl:inline">
            Shanghai / China
          </span>
          <nav aria-label="主导航">
            <ul className="flex items-center gap-7 xl:gap-10">
              {siteContent.navigation.map((item) => {
                const active = activeHref === item.href;

                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={active ? "location" : undefined}
                      className={`group flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] transition-colors duration-300 xl:gap-3 ${
                        active
                          ? "text-dx-red"
                          : "text-ink hover:text-dx-red"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`h-px origin-left transition-all duration-300 ${
                          active
                            ? "w-6 bg-dx-red"
                            : "w-3 bg-ink/25 group-hover:w-6 group-hover:bg-dx-red"
                        }`}
                      />
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center text-ink lg:hidden"
          aria-label={menuOpen ? "关闭导航" : "打开导航"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-navigation"
            className="fixed inset-x-0 bottom-0 top-[var(--header-height)] flex flex-col justify-between bg-ink px-5 pb-8 pt-8 text-paper lg:hidden"
            initial={shouldReduceMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.28 }}
          >
            <nav aria-label="移动端导航">
              <ul>
                {siteContent.navigation.map((item, index) => {
                  const active = activeHref === item.href;

                  return (
                    <li key={item.href} className="border-t border-paper/20">
                      <a
                        href={item.href}
                        aria-current={active ? "location" : undefined}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-baseline justify-between py-4 transition-colors duration-300 sm:py-5 ${
                          active ? "text-dx-red" : "text-paper"
                        }`}
                      >
                        <span className="display-type text-[clamp(2.2rem,11vw,4rem)] uppercase leading-none tracking-[-0.06em]">
                          {item.label}
                        </span>
                        <span
                          className={`text-xs transition-colors duration-300 ${
                            active ? "text-dx-red" : "text-paper/40"
                          }`}
                        >
                          0{index + 1}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <p className="text-sm leading-6 text-paper/60">
              {siteContent.brand.conceptEn}
              <br />
              {siteContent.brand.conceptZh}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
