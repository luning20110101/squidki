import Hero from "@/components/Hero"
import GameIframe from "@/components/GameIframe"
import GameplayGuide from "@/components/GameplayGuide"
import GameplaySteps from "@/components/GameplaySteps"
import GameFeatures from "@/components/GameFeatures"
import FAQ from "@/components/FAQ"

export default function Home() {
  return (
    <main>
      <GameIframe />
      <GameplayGuide />
      <Hero />
      <GameplaySteps />
      <GameFeatures />
      <FAQ />
    </main>
  )
}

