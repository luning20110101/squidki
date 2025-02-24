"use client"

import { useState } from "react"
import Hero from "@/components/Hero"
import GameIframe from "@/components/GameIframe"
import GameplayGuide from "@/components/GameplayGuide"
import GameplaySteps from "@/components/GameplaySteps"
import GameFeatures from "@/components/GameFeatures"
import FAQ from "@/components/FAQ"

export default function Home() {
  const [currentGame, setCurrentGame] = useState<string>("Squidki Game")

  const handleGameSelect = (gameName: string) => {
    setCurrentGame(gameName)
  }

  return (
    <main>
      <GameIframe 
        currentGame={currentGame}
        onGameSelect={handleGameSelect}
      />
      <GameplayGuide />
      <GameplaySteps />
      <Hero 
        currentGame={currentGame}
        onGameSelect={handleGameSelect}
      />
      <GameFeatures />
      <FAQ />
    </main>
  )
}

