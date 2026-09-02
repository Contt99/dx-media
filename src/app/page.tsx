import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CaptureMode } from "@/components/motion/capture-mode";
import { Capabilities } from "@/components/sections/capabilities";
import { Hero } from "@/components/sections/hero";
import { Methodology } from "@/components/sections/methodology";
import { ScaleClients } from "@/components/sections/scale-clients";
import { SelectedWork } from "@/components/sections/selected-work";

export default function Home() {
  return (
    <>
      <CaptureMode />
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <ScaleClients />
        <Methodology />
        <SelectedWork />
      </main>
      <Footer />
    </>
  );
}
