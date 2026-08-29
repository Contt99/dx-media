"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import { dxTransition } from "@/components/motion/tokens";
import { siteContent } from "@/content/site";

export function Resources() {
  const focusContent = siteContent.whatWeDo;
  const content = siteContent.resources;
  const worlds = focusContent.focusAreas.map((area, index) => ({
    ...area,
    resource: content.stats[index],
  }));
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const shouldReduceMotion = useReducedMotion();
  const activeWorld = worlds[activeIndex];

  const selectFromKeyboard = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % worlds.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + worlds.length) % worlds.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = worlds.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section
      id="resources"
      aria-labelledby="resources-title"
      className="min-h-[100svh] bg-paper px-4 py-24 text-ink sm:px-8 sm:py-28 lg:px-12 lg:py-16"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <header className="grid gap-7 border-t border-ink pt-5 lg:grid-cols-12 lg:gap-8">
            <div className="space-y-2 text-xs font-bold uppercase tracking-[0.16em] text-dx-red lg:col-span-2">
              <p>{focusContent.focusLabel}</p>
              <p>{content.label}</p>
            </div>
            <div className="lg:col-span-7">
              <h2
                id="resources-title"
                className="whitespace-pre-line text-[clamp(2.7rem,5.6vw,6rem)] font-bold leading-[0.92] tracking-[-0.065em]"
              >
                {focusContent.focusTitle}
              </h2>
              <p className="display-type mt-4 whitespace-pre-line text-[clamp(1.6rem,2.6vw,3rem)] uppercase leading-none tracking-[-0.055em] text-muted">
                {content.title}
              </p>
            </div>
            <div className="max-w-md self-end space-y-3 text-sm leading-6 text-muted lg:col-span-3 lg:text-base lg:leading-7">
              <p>{focusContent.focusIntro}</p>
              <p>{content.intro}</p>
            </div>
          </header>
        </Reveal>

        <div
          role="tablist"
          aria-label="重点消费场景与资源"
          className="mt-12 grid grid-cols-3 border-y border-ink lg:mt-10"
        >
          {worlds.map((world, index) => {
            const active = index === activeIndex;

            return (
              <button
                key={world.number}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                id={`world-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={active}
                aria-controls="world-panel"
                tabIndex={active ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onKeyDown={(event) => selectFromKeyboard(event, index)}
                className={`relative border-r border-ink/25 px-2 py-4 text-left last:border-r-0 sm:px-5 lg:grid lg:grid-cols-[3rem_1fr] lg:items-center lg:py-5 ${
                  active ? "text-ink" : "text-muted hover:text-ink"
                } focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-dx-red`}
              >
                <span
                  className={`block text-[0.62rem] font-bold sm:text-xs ${
                    active ? "text-dx-red" : "text-muted"
                  }`}
                >
                  {world.number}
                </span>
                <span className="mt-2 block text-sm font-bold tracking-[-0.025em] sm:text-lg lg:mt-0 lg:text-2xl">
                  {world.title}
                </span>
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
          id="world-panel"
          role="tabpanel"
          aria-labelledby={`world-tab-${activeIndex}`}
          tabIndex={0}
          className="grid border-b border-ink lg:h-[clamp(24rem,43vh,34rem)] lg:grid-cols-12"
        >
          <div className="relative min-h-[19rem] overflow-hidden bg-line sm:min-h-[26rem] lg:col-span-7 lg:min-h-0">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeWorld.number}
                className="absolute inset-0"
                initial={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : {
                        opacity: 0,
                        scale: 1.035,
                        clipPath: "inset(0 0 100% 0)",
                      }
                }
                animate={{
                  opacity: 1,
                  scale: 1,
                  clipPath: "inset(0 0 0% 0)",
                }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        scale: 0.985,
                        clipPath: "inset(100% 0 0 0)",
                      }
                }
                transition={dxTransition(shouldReduceMotion, 0.55)}
              >
                <Image
                  src={activeWorld.image}
                  alt={activeWorld.alt}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-ink/10" />
                <p className="absolute bottom-5 left-5 text-xs font-bold uppercase tracking-[0.16em] text-white sm:bottom-7 sm:left-7">
                  {activeWorld.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative flex min-h-[26rem] overflow-hidden p-6 sm:p-8 lg:col-span-5 lg:min-h-0 lg:border-l lg:border-ink xl:p-10">
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={activeWorld.number}
                initial={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, x: 24, y: 10 }
                }
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: -18, y: -8 }
                }
                transition={dxTransition(shouldReduceMotion)}
                className="flex w-full flex-col"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-dx-red">
                      World / Scene
                    </p>
                    <h3 className="mt-2 text-[clamp(2rem,3vw,3.4rem)] font-bold leading-none tracking-[-0.055em]">
                      {activeWorld.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">
                      {activeWorld.subtitle}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-dx-red">
                    {activeWorld.number}
                  </span>
                </div>

                <motion.p
                  key={activeWorld.resource.number}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={dxTransition(shouldReduceMotion, 0.55)}
                  className="display-type mt-auto whitespace-nowrap text-[clamp(4.5rem,8.5vw,9rem)] leading-[0.72] tracking-[-0.085em]"
                  aria-label={`${activeWorld.resource.number} plus`}
                >
                  {activeWorld.resource.number}
                  <sup className="ml-[0.08em] align-top text-[0.22em] leading-none tracking-normal text-dx-red">
                    +
                  </sup>
                </motion.p>

                <div className="mt-7 grid grid-cols-2 gap-5 border-t border-ink/25 pt-4 text-sm">
                  <div>
                    <p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-muted">
                      Scene
                    </p>
                    <p className="mt-1 font-bold">{activeWorld.resource.scene}</p>
                  </div>
                  <div>
                    <p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-muted">
                      Audience
                    </p>
                    <p className="mt-1 font-bold">
                      {activeWorld.resource.audience}
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-ink/25 pt-4">
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-dx-red">
                    {content.platformsLabel}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                    {content.platforms.map((platform) => (
                      <li
                        key={platform}
                        className="text-xs font-bold uppercase tracking-[0.08em]"
                      >
                        {platform}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
