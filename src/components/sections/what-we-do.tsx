"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import { dxTransition } from "@/components/motion/tokens";
import { siteContent } from "@/content/site";

export function WhatWeDo() {
  const content = siteContent.whatWeDo;
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const shouldReduceMotion = useReducedMotion();
  const activeService = content.services[activeIndex];

  const selectFromKeyboard = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex = index;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      nextIndex = (index + 1) % content.services.length;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextIndex =
        (index - 1 + content.services.length) % content.services.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = content.services.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section
      id="what-we-do"
      aria-labelledby="what-we-do-title"
      className="min-h-[88svh] bg-ink px-4 py-24 text-paper sm:px-8 sm:py-28 lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <header className="grid gap-7 border-t border-paper/35 pt-5 lg:grid-cols-12 lg:gap-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-dx-red lg:col-span-2">
              {content.label}
            </p>
            <h2
              id="what-we-do-title"
              className="display-type whitespace-pre-line text-[3rem] uppercase leading-[0.82] tracking-[-0.075em] sm:text-[clamp(4rem,7vw,7.5rem)] lg:col-span-7"
            >
              {content.title}
            </h2>
            <p className="max-w-md self-end text-base leading-7 text-paper/65 lg:col-span-3 lg:text-lg lg:leading-8">
              {content.intro}
            </p>
          </header>
        </Reveal>

        <div className="mt-14 hidden border-y border-paper/30 lg:grid lg:min-h-[22rem] lg:grid-cols-12">
          <div
            role="tablist"
            aria-label="DX MEDIA 核心业务"
            aria-orientation="vertical"
            className="lg:col-span-5"
          >
            {content.services.map((service, index) => {
              const active = index === activeIndex;

              return (
                <button
                  key={service.number}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  id={`service-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-controls="service-panel"
                  tabIndex={active ? 0 : -1}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onKeyDown={(event) => selectFromKeyboard(event, index)}
                  className={`group relative grid w-full grid-cols-[3.25rem_1fr] items-center border-b border-paper/20 py-5 text-left last:border-b-0 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-dx-red ${
                    active ? "text-paper" : "text-paper/45 hover:text-paper"
                  }`}
                >
                  <span
                    className={`text-xs font-bold transition-colors duration-300 ${
                      active ? "text-dx-red" : "text-paper/35"
                    }`}
                  >
                    {service.number}
                  </span>
                  <span className="text-[clamp(1.75rem,2.7vw,3rem)] font-bold leading-none tracking-[-0.05em]">
                    {service.title}
                  </span>
                  <motion.span
                    aria-hidden="true"
                    className="absolute bottom-[-1px] left-0 h-[2px] bg-dx-red"
                    initial={false}
                    animate={{ width: active ? "100%" : "0%" }}
                    transition={dxTransition(shouldReduceMotion)}
                  />
                </button>
              );
            })}
          </div>

          <div
            id="service-panel"
            role="tabpanel"
            aria-labelledby={`service-tab-${activeIndex}`}
            tabIndex={0}
            className="relative flex min-h-[22rem] items-end overflow-hidden border-l border-paper/30 p-10 xl:p-14"
          >
            <span
              aria-hidden="true"
              className="display-type absolute right-6 top-2 text-[clamp(7rem,13vw,13rem)] leading-none tracking-[-0.08em] text-paper/[0.04]"
            >
              {activeService.number}
            </span>
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={activeService.number}
                initial={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, y: 20, filter: "blur(6px)" }
                }
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -20, filter: "blur(6px)" }
                }
                transition={dxTransition(shouldReduceMotion)}
                className="relative z-10 max-w-2xl"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-dx-red">
                  {activeService.titleEn}
                </p>
                <p className="mt-6 text-[clamp(1.8rem,3vw,3.4rem)] font-bold leading-[1.08] tracking-[-0.045em] text-balance">
                  {activeService.description}
                </p>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-14 border-t border-paper/30 lg:hidden">
          {content.services.map((service, index) => {
            const active = index === activeIndex;

            return (
              <article key={service.number} className="border-b border-paper/30">
                <button
                  type="button"
                  aria-expanded={active}
                  aria-controls={`mobile-service-panel-${index}`}
                  onClick={() => setActiveIndex(index)}
                  className="relative grid w-full grid-cols-[3rem_1fr] items-center py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-dx-red"
                >
                  <span className="text-xs font-bold text-dx-red">
                    {service.number}
                  </span>
                  <span className="text-2xl font-bold tracking-[-0.045em]">
                    {service.title}
                  </span>
                  {active ? (
                    <motion.span
                      layoutId="mobile-service-line"
                      aria-hidden="true"
                      className="absolute bottom-[-1px] left-0 h-[2px] w-16 bg-dx-red"
                      transition={dxTransition(shouldReduceMotion)}
                    />
                  ) : null}
                </button>
                <AnimatePresence initial={false}>
                  {active ? (
                    <motion.div
                      id={`mobile-service-panel-${index}`}
                      initial={
                        shouldReduceMotion
                          ? { opacity: 1 }
                          : { height: 0, opacity: 0, y: 12 }
                      }
                      animate={{ height: "auto", opacity: 1, y: 0 }}
                      exit={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : { height: 0, opacity: 0, y: -8 }
                      }
                      transition={dxTransition(shouldReduceMotion)}
                      className="overflow-hidden"
                    >
                      <div className="pb-7 pl-12 pr-2 pt-5">
                        <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-paper/45">
                          {service.titleEn}
                        </p>
                        <p className="mt-4 text-sm leading-7 text-paper/65">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
