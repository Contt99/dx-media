"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { siteContent } from "@/content/site";

const orbitPositions = [
  "left-1/2 top-[7%] -translate-x-1/2",
  "right-[6%] top-[25%]",
  "right-[6%] bottom-[24%]",
  "left-1/2 bottom-[7%] -translate-x-1/2",
  "left-[6%] bottom-[24%]",
  "left-[6%] top-[25%]",
] as const;

export function Methodology() {
  const content = siteContent.methodology;
  const [activeTab, setActiveTab] = useState<"why" | "how">("why");
  const reduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="methodology-title" className="bg-ink py-24 text-paper sm:py-32 lg:py-40">
      <div className="editorial-shell">
        <header className="grid gap-9 border-t border-paper/35 pt-5 lg:grid-cols-12">
          <p className="caps-label text-dx-red lg:col-span-4">{content.label}</p>
          <div className="lg:col-span-8 lg:col-start-5">
            <h2 id="methodology-title" className="display-type text-[clamp(4rem,9.2vw,9rem)] uppercase leading-[0.8] tracking-[-0.08em]">
              WHY DX<br />HOW WE WORK
            </h2>
          </div>
        </header>

        <div role="tablist" aria-label="DX 方法论" className="mt-14 flex border-y border-paper/30 lg:mt-20">
          {(["why", "how"] as const).map((tab) => {
            const active = activeTab === tab;
            const label = tab === "why" ? "WHY DX" : "HOW WE WORK";
            return (
              <button
                key={tab}
                type="button"
                role="tab"
                id={`tab-${tab}`}
                aria-selected={active}
                aria-controls={`panel-${tab}`}
                onClick={() => setActiveTab(tab)}
                className={`relative flex-1 px-3 py-5 text-left text-sm font-bold tracking-[-0.02em] transition-colors sm:px-6 sm:text-xl ${active ? "text-paper" : "text-paper/35 hover:text-paper/70"}`}
              >
                <span className="mr-3 text-[0.62rem] text-dx-red">{tab === "why" ? "01" : "02"}</span>
                {label}
                {active ? <motion.span layoutId="methodology-tab" className="absolute inset-x-0 bottom-[-1px] h-0.5 bg-dx-red" transition={{ duration: reduceMotion ? 0 : 0.35 }} /> : null}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          {activeTab === "why" ? (
            <motion.div
              key="why"
              id="panel-why"
              role="tabpanel"
              aria-labelledby="tab-why"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: reduceMotion ? 0 : 0.4 }}
              className="grid gap-14 pt-14 lg:grid-cols-12 lg:pt-20"
            >
              <div className="lg:col-span-3">
                <p className="caps-label text-dx-red">WHY DX</p>
                <h3 className="mt-5 max-w-[8em] text-3xl font-bold leading-[1.08] tracking-[-0.05em] sm:text-4xl">{content.why.statement}</h3>
              </div>
              <div className="lg:col-span-8 lg:col-start-5">
                {content.why.principles.map((principle) => (
                  <article key={principle.symbol} className="group grid grid-cols-[5rem_1fr] gap-5 border-t border-paper/25 py-8 sm:grid-cols-[8rem_1fr] lg:grid-cols-12 lg:items-center lg:py-10">
                    <span aria-hidden="true" className="display-type text-[clamp(5.2rem,10vw,9rem)] leading-[0.58] text-dx-red transition-transform duration-500 group-hover:translate-x-2 lg:col-span-3">{principle.symbol}</span>
                    <div className="lg:col-span-8 lg:col-start-5">
                      <h4 className="text-2xl font-bold tracking-[-0.04em] sm:text-4xl">{principle.title}</h4>
                      <p className="mt-3 text-sm leading-6 text-paper/50 sm:text-base">{principle.description}</p>
                    </div>
                  </article>
                ))}
                <div className="border-t border-paper/25" />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="how"
              id="panel-how"
              role="tabpanel"
              aria-labelledby="tab-how"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: reduceMotion ? 0 : 0.4 }}
              className="pt-14 lg:pt-20"
            >
              <div className="grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <p className="caps-label text-dx-red">{content.how.model}</p>
                  <h3 className="display-type mt-6 whitespace-pre-line text-[clamp(3.4rem,6.3vw,6.2rem)] uppercase leading-[0.83] tracking-[-0.075em]">{content.how.statement}</h3>
                  <p className="mt-6 text-sm text-paper/45">构建引力，驱动传播势能。</p>
                </div>

                <div className="relative hidden h-[36rem] overflow-hidden border-y border-paper/25 lg:col-span-8 lg:block">
                  <svg aria-hidden="true" viewBox="0 0 100 70" className="absolute inset-[5%] h-[90%] w-[90%]">
                    <ellipse cx="50" cy="35" rx="42" ry="27" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="0.25" />
                    <ellipse cx="50" cy="35" rx="31" ry="20" fill="none" stroke="currentColor" strokeOpacity="0.14" strokeWidth="0.2" strokeDasharray="1 2" />
                    <ellipse cx="50" cy="35" rx="38" ry="15" fill="none" stroke="currentColor" strokeOpacity="0.12" strokeWidth="0.2" transform="rotate(-16 50 35)" />
                  </svg>
                  {content.how.nodes.map((node, index) => (
                    <div key={node.number} className={`absolute ${orbitPositions[index]}`}>
                      <p className="caps-label text-dx-red">{node.number} / {node.meta}</p>
                      <p className="mt-2 text-xl font-bold tracking-[-0.04em]">{node.title}</p>
                    </div>
                  ))}
                  <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-dx-red text-center">
                    <span className="caps-label text-paper/65">CONTINUOUS</span>
                    <strong className="mt-2 text-2xl tracking-[-0.04em]">AI ENGINE</strong>
                    <span className="mt-2 text-xs text-paper/70">贯穿所有阶段</span>
                  </div>
                </div>

                <div className="border-t border-paper/25 lg:hidden">
                  {content.how.nodes.map((node) => (
                    <div key={node.number} className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-paper/25 py-5">
                      <span className="caps-label text-dx-red">{node.number}</span>
                      <div>
                        <p className="text-xl font-bold">{node.title}</p>
                        <p className="caps-label mt-2 text-paper/40">{node.meta}</p>
                      </div>
                    </div>
                  ))}
                  <p className="caps-label border-b border-paper/25 py-5 text-dx-red">{content.how.ai}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
