import { Hero } from "@/components/sections/Hero";
import About from "@/components/sections/About";
import MissionVision from "@/components/sections/MissionVision";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <MissionVision />
      <Services />
    </main>
  )
}