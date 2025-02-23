"use client"

import Image from "next/image"

const games = [
  {
    name: "Squidki Squid game",
    icon: "https://squidki.com/images/sprunki-but-squid-game.webp",
  },
  {
    name: "Pirate Island",
    icon: "https://imgs.crazygames.com/pirate-island_16x9/20250214090720/pirate-island_16x9-cover?metadata=none&quality=70&width=541",
  },
  {
    name: "Ludoteca",
    icon: "https://imgs.crazygames.com/ludoteca_16x9/20250217065437/ludoteca_16x9-cover?metadata=none&quality=70&width=541",
  },
  {
    name: "Snake Shooter",
    icon: "https://imgs.crazygames.com/snake-shooter-cbu_16x9/20250214062951/snake-shooter-cbu_16x9-cover?metadata=none&quality=70&width=541",
  },
  {
    name: "Craft Drill",
    icon: "https://imgs.crazygames.com/idle-craft-drill_16x9/20250212082307/idle-craft-drill_16x9-cover?metadata=none&quality=70&width=541",
  },
  {
    name: "Madness Cars Destroy",
    icon: "https://imgs.crazygames.com/madness-car-destroy_16x9/20250218081013/madness-car-destroy_16x9-cover?metadata=none&quality=70&width=541",
  },
  {
    name: "Air Block",
    icon: "https://imgs.crazygames.com/air-block_16x9/20250213083204/air-block_16x9-cover?metadata=none&quality=70&width=541",
  },
  {
    name: "Nuclear Day",
    icon: "https://imgs.crazygames.com/nuclear-day_16x9/20250214130538/nuclear-day_16x9-cover?metadata=none&quality=70&width=541",
  },
  { name: "Rects.io", icon: "https://imgs.crazygames.com/rectsio.png?metadata=none&quality=70&width=541" },
  { name: "Mekorama", icon: "https://imgs.crazygames.com/mekorama.png?metadata=none&quality=70&width=541" },
]

interface HeroProps {
  currentGame: string
  onGameSelect: (game: string) => void
}

export default function Hero({ currentGame, onGameSelect }: HeroProps) {
  const handleGameClick = (gameName: string) => {
    if (typeof onGameSelect === "function") {
      onGameSelect(gameName)
    } else {
      console.info("onGameSelect is not a function")
    }
  }

  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Where Squidki Meets Squid Game</h1>
        <p className="text-xl mb-8">Experience the thrilling intersection of Squidki, where Sprunki's musical innovation collides with the intense survival dynamics of Squid Game. In this unique gaming environment, players are challenged to create music that not only entertains but also serves as a lifeline in high-stakes elimination challenges.</p>
        <h1 className="text-5xl font-bold mb-4">A Unique Musical Survival Experience</h1>
        <p className="text-xl mb-8">In Squidki, you will immerse yourself in a world where rhythm and survival intertwine. Each challenge draws inspiration from the iconic Squid Game series, transforming traditional survival mechanics into a rhythmic battle for life. Your ability to craft compelling beats will directly influence your chances of survival, making every note count.</p>
        
        <div className="overflow-x-auto whitespace-nowrap pb-4">
          <div className="inline-flex space-x-4">
            {games.map((game, index) => (
              <div
                key={index}
                className={`flex flex-col items-center cursor-pointer hover:scale-105 transition-transform ${
                  currentGame === game.name ? "ring-4 ring-yellow-400 rounded-lg" : ""
                }`}
                onClick={() => handleGameClick(game.name)}
              >
                <Image
                  src={game.icon || "/placeholder.svg"}
                  alt={game.name}
                  width={96}
                  height={96}
                  className="rounded-lg object-cover"
                />
                <span className="mt-2 text-sm text-white">{game.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

