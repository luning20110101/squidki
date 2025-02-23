"use client"

import { useState } from "react"
import Hero from "@/components/Hero"
import GameIframe from "@/components/GameIframe"
import FAQ from "@/components/FAQ"

export default function Home() {
  const [currentGame, setCurrentGame] = useState("Traffic Parking")

  const handleGameSelect = (game: string) => {
    setCurrentGame(game)
  }

  return (
    <main>
      <Hero currentGame={currentGame} onGameSelect={handleGameSelect} />
      <GameIframe currentGame={currentGame} onGameSelect={handleGameSelect} />
      <FAQ />
    </main>
  )
}

