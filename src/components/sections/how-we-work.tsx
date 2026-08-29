"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import { dxTransition } from "@/components/motion/tokens";
import { siteContent } from "@/content/site";

const orbitNodes = [
  {
    left: "50%",
    top: "9%",
    labelClass: "left-1/2 top-[calc(100%+0.6rem)] -translate-x-1/2",
  },
  {
    left: "86%",
    top: "29%",
    labelClass:
      "right-[calc(100%+0.6rem)] top-1/2 -translate-y-1/2 text-right",
  },
  {
    left: "86%",
    top: "71%",
    labelClass:
      "right-[calc(100%+0.6rem)] top-1/2 -translate-y-1/2 text-right",
  },
  {
    left: "50%",
    top: "91%",
    labelClass: "bottom-[calc(100%+0.6rem)] left-1/2 -translate-x-1/2",
  },
  {
    left: "14%",
    top: "71%",
    labelClass:
      "left-[calc(100%+0.6rem)] top-1/2 -translate-y-1/2 text-left",
  },
  {
    left: "14%",
    top: "29%",
    labelClass:
      "left-[calc(100%+0.6rem)] top-1/2 -translate-y-1/2 text-left",
  },
] as const;

export function HowWeWork() {
  const content = siteContent.howWeWork;
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const shouldReduceMotion = useReducedMotion();
  const activeModule = content.modules[activeIndex];

  const selectFromKeyboard = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % content.modules.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex =
        (index - 1 + content.modules.length) % content.modules.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = content.modules.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section
      id="how-we-work"
      aria-labelledby="how-we-work-title"
      className="min-h-[108svh] bg-paper px-4 py-24 text-ink sm:px-8 sm:py-28 lg:px-12 lg:py-16"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <header className="grid gap-7 border-t border-ink pt-5 lg:grid-cols-12 lg:gap-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-dx-red lg:col-span-2">
              {content.label}
            </p>
            <h2
              id="how-we-work-title"
              className="display-type whitespace-pre-line text-[2.3rem] uppercase leading-[0.84] tracking-[-0.075em] sm:text-[clamp(3.4rem,6vw,6.5rem)] lg:col-span-7"
            >
              {content.title}
            </h2>
            <p className="max-w-md self-end text-base leading-7 text-muted lg:col-span-3 lg:text-lg lg:leading-8">
              {content.intro}
            </p>
          </header>
        </Reveal>

        <Reveal>
          <div className="mt-10 grid gap-4 border-y border-ink py-4 text-xs font-bold uppercase tracking-[0.14em] sm:grid-cols-3">
            <p className="text-dx-red">{content.modelName}</p>
            {content.modelMeta.map((item) => (
              <p key={item} className="sm:text-right">
                {item}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="mt-9 grid gap-8 lg:h-[clamp(31rem,52vh,37rem)] lg:grid-cols-12 lg:gap-10">
          <div
            id="capability-panel"
            role="tabpanel"
            aria-labelledby={`capability-tab-${activeIndex}`}
            tabIndex={0}
            className="relative flex min-h-[22rem] overflow-hidden border-y border-ink/25 lg:col-span-5 lg:h-full lg:min-h-0"
          >
            <span
              aria-hidden="true"
              className="display-type absolute right-4 top-2 text-[clamp(8rem,15vw,15rem)] leading-none tracking-[-0.09em] text-ink/[0.035]"
            >
              {activeModule.number}
            </span>
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={activeModule.number}
                initial={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, y: 20 }
                }
                animate={{ opacity: 1, y: 0 }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -20 }
                }
                transition={dxTransition(shouldReduceMotion)}
                className="relative z-10 flex w-full flex-col justify-end p-6 sm:p-9 lg:p-10 xl:p-12"
              >
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.16em]">
                  <span className="text-dx-red">{activeModule.number}</span>
                  <span className="h-px w-10 bg-ink/25" />
                  <span className="text-muted">
                    {activeModule.signal} / {activeModule.titleEn}
                  </span>
                </div>
                <h3 className="mt-6 text-[clamp(2.8rem,5vw,5.8rem)] font-bold leading-none tracking-[-0.06em]">
                  {activeModule.title}
                </h3>
                <p className="mt-7 max-w-lg text-sm leading-7 text-muted sm:text-base">
                  {activeModule.description}
                </p>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="order-first min-h-[23rem] sm:min-h-[30rem] lg:order-none lg:col-span-7 lg:h-full lg:min-h-0">
            <div
              role="tablist"
              aria-label="DX 引力模型六大能力模块"
              className="relative h-full overflow-hidden border-y border-ink/25 bg-paper"
            >
              <p className="absolute left-4 top-4 z-20 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-muted sm:left-6 sm:top-6">
                Orbit system / 01—06
              </p>

              <svg
                aria-hidden="true"
                viewBox="0 0 100 100"
                className="absolute inset-[7%] h-[86%] w-[86%]"
              >
                <ellipse
                  cx="50"
                  cy="50"
                  rx="36"
                  ry="42"
                  fill="none"
                  stroke="currentColor"
                  strokeOpacity="0.3"
                  strokeWidth="0.35"
                  vectorEffect="non-scaling-stroke"
                />
                <ellipse
                  cx="50"
                  cy="50"
                  rx="27"
                  ry="31"
                  fill="none"
                  stroke="currentColor"
                  strokeOpacity="0.14"
                  strokeWidth="0.3"
                  strokeDasharray="2 3"
                  vectorEffect="non-scaling-stroke"
                />
                <ellipse
                  cx="50"
                  cy="50"
                  rx="42"
                  ry="25"
                  fill="none"
                  stroke="currentColor"
                  strokeOpacity="0.1"
                  strokeWidth="0.3"
                  strokeDasharray="1 4"
                  transform="rotate(-18 50 50)"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              <motion.div
                aria-hidden="true"
                className="absolute inset-[11%]"
                animate={shouldReduceMotion ? undefined : { rotate: 360 }}
                transition={{
                  duration: 26,
                  repeat: shouldReduceMotion ? 0 : Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-dx-red" />
              </motion.div>

              <motion.div
                aria-hidden="true"
                className="absolute inset-[22%]"
                animate={shouldReduceMotion ? undefined : { rotate: -360 }}
                transition={{
                  duration: 34,
                  repeat: shouldReduceMotion ? 0 : Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-ink/50" />
              </motion.div>

              {orbitNodes.map((position, index) => {
                const capability = content.modules[index];
                const active = activeIndex === index;

                return (
                  <div
                    key={capability.number}
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: position.left, top: position.top }}
                  >
                    <motion.button
                      ref={(node) => {
                        tabRefs.current[index] = node;
                      }}
                      id={`capability-tab-${index}`}
                      type="button"
                      role="tab"
                      aria-label={`${capability.number} ${capability.title}`}
                      aria-selected={active}
                      aria-controls="capability-panel"
                      tabIndex={active ? 0 : -1}
                      onClick={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      onKeyDown={(event) => selectFromKeyboard(event, index)}
                      initial={false}
                      animate={{ scale: active ? 1.2 : 1 }}
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : { scale: active ? 1.23 : 1.08 }
                      }
                      whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
                      transition={dxTransition(shouldReduceMotion, 0.3)}
                      className={`relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border text-[0.58rem] font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dx-red sm:h-10 sm:w-10 ${
                        active
                          ? "border-dx-red bg-dx-red text-paper"
                          : "border-ink/30 bg-paper text-muted hover:border-ink hover:text-ink"
                      }`}
                    >
                      {capability.number}
                    </motion.button>

                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute whitespace-nowrap ${position.labelClass}`}
                    >
                      <motion.span
                        className={`block text-[0.58rem] font-bold tracking-[-0.01em] sm:text-xs ${
                          active ? "text-dx-red" : "text-muted"
                        }`}
                        initial={false}
                        animate={{ scale: active ? 1.12 : 1 }}
                        transition={dxTransition(shouldReduceMotion, 0.3)}
                      >
                        {capability.title}
                      </motion.span>
                    </span>
                  </div>
                );
              })}

              <div className="absolute left-1/2 top-1/2 flex h-[7.5rem] w-[7.5rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-ink text-center text-paper sm:h-36 sm:w-36 lg:h-40 lg:w-40 xl:h-44 xl:w-44">
                <motion.span
                  className="mb-3 h-2 w-2 rounded-full bg-dx-red"
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : { opacity: [0.35, 1, 0.35] }
                  }
                  transition={{
                    duration: 2.2,
                    repeat: shouldReduceMotion ? 0 : Number.POSITIVE_INFINITY,
                  }}
                />
                <span className="text-[0.58rem] uppercase tracking-[0.16em] text-paper/50">
                  {content.aiEngine.titleEn}
                </span>
                <strong className="mt-1 text-lg tracking-[-0.04em] sm:text-xl lg:text-2xl">
                  {content.aiEngine.title}
                </strong>
                <span className="mt-3 text-[0.52rem] uppercase tracking-[0.12em] text-paper/40">
                  {content.modelMeta[1]}
                </span>
              </div>
            </div>
          </div>
        </div>

        <Reveal>
          <div className="mt-9 grid gap-5 border-t border-ink pt-6 lg:grid-cols-12 lg:items-end">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-dx-red lg:col-span-3">
              {content.aiEngine.titleEn} / Continuous learning
            </p>
            <p className="max-w-xl text-sm leading-6 text-muted lg:col-span-4 lg:text-base lg:leading-7">
              {content.aiEngine.description}
            </p>
            <p className="text-balance text-[clamp(2.4rem,4.2vw,4.8rem)] font-bold leading-[0.92] tracking-[-0.065em] lg:col-span-5">
              {content.closing}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
