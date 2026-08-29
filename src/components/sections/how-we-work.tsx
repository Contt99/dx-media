"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import { siteContent } from "@/content/site";

const orbitNodes = [
  {
    left: "50%",
    top: "8%",
    labelClass: "left-1/2 top-[calc(100%+0.65rem)] -translate-x-1/2",
  },
  {
    left: "86%",
    top: "29%",
    labelClass:
      "right-[calc(100%+0.65rem)] top-1/2 -translate-y-1/2 text-right",
  },
  {
    left: "86%",
    top: "71%",
    labelClass:
      "right-[calc(100%+0.65rem)] top-1/2 -translate-y-1/2 text-right",
  },
  {
    left: "50%",
    top: "92%",
    labelClass: "bottom-[calc(100%+0.65rem)] left-1/2 -translate-x-1/2",
  },
  {
    left: "14%",
    top: "71%",
    labelClass:
      "left-[calc(100%+0.65rem)] top-1/2 -translate-y-1/2 text-left",
  },
  {
    left: "14%",
    top: "29%",
    labelClass:
      "left-[calc(100%+0.65rem)] top-1/2 -translate-y-1/2 text-left",
  },
] as const;

export function HowWeWork() {
  const content = siteContent.howWeWork;
  const [activeIndex, setActiveIndex] = useState(0);
  const moduleRefs = useRef<(HTMLElement | null)[]>([]);
  const modulesLayoutRef = useRef<HTMLDivElement>(null);
  const orbitPanelRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleNodeClick = (index: number) => {
    setActiveIndex(index);

    const target = moduleRefs.current[index];
    const layout = modulesLayoutRef.current;
    const orbitPanel = orbitPanelRef.current;

    if (!target || !layout || !orbitPanel) {
      return;
    }

    const currentScrollY = window.scrollY;
    const targetRect = target.getBoundingClientRect();
    const layoutRect = layout.getBoundingClientRect();
    const stickyTop = Number.parseFloat(
      window.getComputedStyle(orbitPanel).top,
    );
    const centeredScrollTop =
      currentScrollY +
      targetRect.top -
      (window.innerHeight - targetRect.height) / 2;
    const pinnedStart = currentScrollY + layoutRect.top - stickyTop;
    const pinnedEnd =
      currentScrollY +
      layoutRect.bottom -
      orbitPanel.offsetHeight -
      stickyTop;
    const targetScrollTop =
      pinnedEnd > pinnedStart
        ? Math.min(Math.max(centeredScrollTop, pinnedStart), pinnedEnd)
        : centeredScrollTop;

    window.scrollTo({
      top: Math.max(0, targetScrollTop),
      left: window.scrollX,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      id="how-we-work"
      aria-labelledby="how-we-work-title"
      className="bg-paper px-4 py-24 text-ink sm:px-8 sm:py-32 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <header className="grid gap-8 border-t border-ink pt-5 lg:grid-cols-12">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-dx-red lg:col-span-2">
              {content.label}
            </p>
            <h2
              id="how-we-work-title"
              className="display-type whitespace-pre-line text-[clamp(3.8rem,8vw,8rem)] uppercase leading-[0.84] tracking-[-0.075em] lg:col-span-7"
            >
              {content.title}
            </h2>
            <p className="max-w-md self-end text-base leading-7 text-muted lg:col-span-3 lg:text-lg lg:leading-8">
              {content.intro}
            </p>
          </header>
        </Reveal>

        <Reveal>
          <div className="mt-16 grid gap-5 border-y border-ink py-5 text-xs font-bold uppercase tracking-[0.14em] sm:grid-cols-3 lg:mt-24">
            <p className="text-dx-red">{content.modelName}</p>
            {content.modelMeta.map((item) => (
              <p key={item} className="sm:text-right">
                {item}
              </p>
            ))}
          </div>
        </Reveal>

        <div
          ref={modulesLayoutRef}
          className="mt-16 grid lg:mt-24 lg:grid-cols-12 lg:gap-12"
        >
          <div className="lg:col-span-5">
            {content.modules.map((module, index) => {
              const active = activeIndex === index;

              return (
                <motion.article
                  key={module.number}
                  ref={(node) => {
                    moduleRefs.current[index] = node;
                  }}
                  onViewportEnter={() => setActiveIndex(index)}
                  viewport={{ amount: 0.58 }}
                  initial={false}
                  animate={{ opacity: active ? 1 : 0.42 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
                  className="relative flex min-h-[34vh] flex-col justify-center border-t border-ink py-10 last:border-b sm:min-h-[38vh] lg:min-h-[55vh] lg:py-16"
                >
                  <motion.span
                    aria-hidden="true"
                    className="absolute left-0 top-[-1px] h-[2px] bg-dx-red"
                    initial={false}
                    animate={{ width: active ? "5rem" : "0rem" }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
                  />
                  <div className="grid grid-cols-[3rem_1fr] gap-4 sm:grid-cols-[4rem_1fr]">
                    <p className="pt-1 text-xs font-bold text-dx-red">
                      {module.number}
                    </p>
                    <div>
                      <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-muted">
                        {module.signal} / {module.titleEn}
                      </p>
                      <h3 className="mt-4 text-[clamp(2.1rem,4vw,4rem)] font-bold leading-none tracking-[-0.055em]">
                        {module.title}
                      </h3>
                      <p className="mt-6 max-w-lg text-sm leading-7 text-muted sm:text-base">
                        {module.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div
            ref={orbitPanelRef}
            className="order-first sticky top-[var(--header-height)] z-10 mb-14 h-[min(86vw,26rem)] self-start bg-paper lg:order-none lg:col-span-7 lg:top-28 lg:mb-0 lg:h-[calc(100vh-9rem)] lg:max-h-[760px] lg:min-h-[600px]"
          >
            <div
              role="group"
              aria-label="DX 引力模型能力导航"
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
                      type="button"
                      aria-label={`跳转到${capability.title}`}
                      aria-pressed={active}
                      onClick={() => handleNodeClick(index)}
                      initial={false}
                      animate={{ scale: active ? 1.22 : 1 }}
                      whileHover={shouldReduceMotion ? undefined : { scale: active ? 1.26 : 1.08 }}
                      whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border text-[0.58rem] font-bold transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dx-red sm:h-10 sm:w-10 ${
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
                        className={`block text-[0.62rem] font-bold tracking-[-0.01em] transition-colors duration-300 sm:text-xs ${
                          active ? "text-dx-red" : "text-muted"
                        }`}
                        initial={false}
                        animate={{ scale: active ? 1.12 : 1 }}
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        {capability.title}
                      </motion.span>
                    </span>
                  </div>
                );
              })}

              <div className="absolute left-1/2 top-1/2 flex h-[7.5rem] w-[7.5rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-ink text-center text-paper sm:h-36 sm:w-36 lg:h-44 lg:w-44">
                <motion.span
                  className="mb-3 h-2 w-2 rounded-full bg-dx-red"
                  animate={shouldReduceMotion ? undefined : { opacity: [0.35, 1, 0.35] }}
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
              </div>

            </div>
          </div>
        </div>

        <Reveal>
          <div className="mt-24 grid gap-8 border-t border-ink pt-8 lg:mt-36 lg:grid-cols-12 lg:pt-12">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-dx-red lg:col-span-3">
              {content.aiEngine.titleEn} / Continuous learning
            </p>
            <div className="lg:col-span-9">
              <p className="max-w-2xl text-base leading-7 text-muted lg:text-lg lg:leading-8">
                {content.aiEngine.description}
              </p>
              <p className="mt-14 text-balance text-[clamp(2.8rem,7vw,7rem)] font-bold leading-[0.92] tracking-[-0.07em]">
                {content.closing}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
