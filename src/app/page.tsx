import { Header } from "@/components/layout/header";
import { Clients } from "@/components/sections/clients";
import { Hero } from "@/components/sections/hero";
import { HowWeWork } from "@/components/sections/how-we-work";
import { Resources } from "@/components/sections/resources";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { WhyDx } from "@/components/sections/why-dx";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <Resources />
        <Clients />
        <WhyDx />
        <HowWeWork />
      </main>
    </>
  );
}
