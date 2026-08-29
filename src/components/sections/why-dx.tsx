"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import { dxTransition } from "@/components/motion/tokens";
import { siteContent } from "@/content/site";

export function WhyDx() {
  const content = siteContent.whyDx;
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const shouldReduceMotion = useReducedMotion();
  const activePrinciple = content.principles[activeIndex];

  const selectFromKeyboard = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % content.principles.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex =
        (index - 1 + content.principles.length) % content.principles.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = content.principles.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section
      id="why-dx"
      aria-labelledby="why-dx-title"
      className="min-h-[92svh] bg-ink px-4 py-24 text-paper sm:px-8 sm:py-28 lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <header className="grid gap-7 border-t border-paper/35 pt-5 lg:grid-cols-12 lg:gap-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-dx-red lg:col-span-2">
              {content.label}
            </p>
            <h2
              id="why-dx-title"
              className="display-type whitespace-pre-line text-[2.9rem] uppercase leading-[0.84] tracking-[-0.075em] sm:text-[clamp(3.5rem,6.4vw,7rem)] lg:col-span-7"
            >
              {content.title}
            </h2>
            <p className="max-w-md self-end text-base leading-7 text-paper/60 lg:col-span-3 lg:text-lg lg:leading-8">
              {content.intro}
            </p>
          </header>
        </Reveal>

        <div className="mt-12 hidden min-h-[25rem] border-y border-paper/30 lg:grid lg:grid-cols-12">
          <div className="relative flex items-center justify-center overflow-hidden border-r border-paper/30 lg:col-span-5">
            <p className="absolute left-7 top-6 text-xs font-bold uppercase tracking-[0.16em] text-paper/40">
              {content.concept} / DX arithmetic
            </p>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={activePrinciple.symbol}
                aria-hidden="true"
                initial={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, scale: 0.72, rotate: activeIndex % 2 ? 8 : -8 }
                }
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, scale: 1.12, rotate: activeIndex % 2 ? -6 : 6 }
                }
                transition={dxTransition(shouldReduceMotion, 0.5)}
                className="display-type text-[clamp(15rem,27vw,28rem)] leading-[0.55] tracking-[-0.1em] text-dx-red"
              >
                {activePrinciple.symbol}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="flex flex-col lg:col-span-7">
            <div
              role="tablist"
              aria-label="DX 四则运算方法"
              className="grid grid-cols-4 border-b border-paper/30"
            >
              {content.principles.map((principle, index) => {
                const active = index === activeIndex;

                return (
                  <button
                    key={principle.symbol}
                    ref={(node) => {
                      tabRefs.current[index] = node;
                    }}
                    id={`principle-tab-${index}`}
                    type="button"
                    role="tab"
                    aria-label={`${principle.symbol} ${principle.title}`}
                    aria-selected={active}
                    aria-controls="principle-panel"
                    tabIndex={active ? 0 : -1}
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onKeyDown={(event) => selectFromKeyboard(event, index)}
                    className={`relative border-r border-paper/20 py-4 text-center text-4xl font-bold last:border-r-0 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-dx-red ${
                      active ? "text-dx-red" : "text-paper/35 hover:text-paper"
                    }`}
                  >
                    {principle.symbol}
                    <motion.span
                      aria-hidden="true"
                      className="absolute bottom-[-1px] left-0 h-[3px] bg-dx-red"
                      initial={false}
                      animate={{ width: active ? "100%" : "0%" }}
                      transition={dxTransition(shouldReduceMotion)}
                    />
                  </button>
                );
              })}
            </div>

            <div
              id="principle-panel"
              role="tabpanel"
              aria-labelledby={`principle-tab-${activeIndex}`}
              tabIndex={0}
              className="flex flex-1 items-end p-10 xl:p-14"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.article
                  key={activePrinciple.symbol}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 0, y: 20, filter: "blur(5px)" }
                  }
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: -20, filter: "blur(5px)" }
                  }
                  transition={dxTransition(shouldReduceMotion)}
                  className="max-w-2xl"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-dx-red">
                    {activePrinciple.titleEn}
                  </p>
                  <h3 className="mt-4 text-[clamp(2.8rem,5vw,5.8rem)] font-bold leading-none tracking-[-0.06em]">
                    {activePrinciple.title}
                  </h3>
                  <p className="mt-6 max-w-xl text-base leading-7 text-paper/60">
                    {activePrinciple.description}
                  </p>
                </motion.article>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-paper/30 lg:hidden">
          <p className="border-b border-paper/30 py-4 text-xs font-bold uppercase tracking-[0.14em] text-paper/40">
            {content.concept} / DX arithmetic
          </p>
          {content.principles.map((principle, index) => {
            const active = index === activeIndex;

            return (
              <article key={principle.symbol} className="border-b border-paper/30">
                <button
                  type="button"
                  aria-expanded={active}
                  aria-controls={`mobile-principle-panel-${index}`}
                  onClick={() => setActiveIndex(index)}
                  className="relative grid w-full grid-cols-[4rem_1fr] items-center py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-dx-red"
                >
                  <span className="display-type text-5xl leading-none text-dx-red">
                    {principle.symbol}
                  </span>
                  <span className="text-xl font-bold tracking-[-0.04em]">
                    {principle.title}
                  </span>
                  {active ? (
                    <motion.span
                      layoutId="mobile-principle-line"
                      aria-hidden="true"
                      className="absolute bottom-[-1px] left-0 h-[2px] w-16 bg-dx-red"
                      transition={dxTransition(shouldReduceMotion)}
                    />
                  ) : null}
                </button>
                <AnimatePresence initial={false}>
                  {active ? (
                    <motion.div
                      id={`mobile-principle-panel-${index}`}
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
                      <div className="pb-7 pl-16 pr-2 pt-4">
                        <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-paper/45">
                          {principle.titleEn}
                        </p>
                        <p className="mt-4 text-sm leading-7 text-paper/60">
                          {principle.description}
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
