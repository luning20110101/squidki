import Hero from "@/components/Hero"
import GameIframe from "@/components/GameIframe"
import GameplaySteps from "@/components/GameplaySteps"
import GameFeatures from "@/components/GameFeatures"
import FAQ from "@/components/FAQ"

export default function Home() {
  return (
    <main>
      <Hero />
      <GameIframe />
      <GameplaySteps />
      <GameFeatures />
      <FAQ />
    </main>
  )
}

