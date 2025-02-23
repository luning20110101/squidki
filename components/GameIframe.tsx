"use client"

import Image from "next/image"

const games = [
  {
    name: "Sprunki Squid game",
    icon: "https://squidki.com/images/sprunki-but-squid-game.webp",
    url: "https://wowtbc.net/sprunkin/sprunki-squid-game/index.html",
    info: {
      developer: "Df Game",
      rating: "8.1",
      votes: "476",
      released: "February 2025",
      lastUpdated: "February 17, 2025",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Puzzle", "Parking", "Mobile", "Avoid", "Car", "Crash", "Logic", "Mouse", "Brain"],
      description: "Discover various Squid Game-inspired musical challenges. Each mode offers unique survival mechanics and themed musical experiences..",
      controls: "Use the left mouse button to play.",
    },
  },
  {
    name: "Pirate Island",
    icon: "https://imgs.crazygames.com/pirate-island_16x9/20250214090720/pirate-island_16x9-cover?metadata=none&quality=70&width=541",
    url: "https://www.crazygames.com/embed/pirate-island",
  },
  {
    name: "Ludoteca",
    icon: "https://imgs.crazygames.com/ludoteca_16x9/20250217065437/ludoteca_16x9-cover?metadata=none&quality=70&width=541",
    url: "https://www.crazygames.com/embed/ludoteca",
  },
  {
    name: "Snake Shooter",
    icon: "https://imgs.crazygames.com/snake-shooter-cbu_16x9/20250214062951/snake-shooter-cbu_16x9-cover?metadata=none&quality=70&width=541",
    url: "https://www.crazygames.com/embed/snake-shooter-cbu",
  },
  {
    name: "Craft Drill",
    icon: "https://imgs.crazygames.com/idle-craft-drill_16x9/20250212082307/idle-craft-drill_16x9-cover?metadata=none&quality=70&width=541",
    url: "https://www.crazygames.com/embed/idle-craft-drill",
  },
  {
    name: "Madness Cars Destroy",
    icon: "https://imgs.crazygames.com/madness-car-destroy_16x9/20250218081013/madness-car-destroy_16x9-cover?metadata=none&quality=70&width=541",
    url: "https://www.crazygames.com/dk/embed/madness-car-destroy",
  },
  {
    name: "Air Block",
    icon: "https://imgs.crazygames.com/air-block_16x9/20250213083204/air-block_16x9-cover?metadata=none&quality=70&width=541",
    url: "https://www.crazygames.com/embed/air-block",
  },
  {
    name: "Nuclear Day",
    icon: "https://imgs.crazygames.com/nuclear-day_16x9/20250214130538/nuclear-day_16x9-cover?metadata=none&quality=70&width=541",
    url: "https://www.crazygames.com/embed/nuclear-day",
  },
  {
    name: "Rects.io",
    icon: "https://imgs.crazygames.com/rectsio.png?metadata=none&quality=70&width=541",
    url: "https://www.crazygames.com/dk/embed/rectsio",
  },
  {
    name: "Mekorama",
    icon: "https://imgs.crazygames.com/mekorama.png?metadata=none&quality=70&width=541",
    url: "https://www.crazygames.com/dk/embed/mekorama",
  },
  {
    name: "Snake Shooter",
    icon: "https://imgs.crazygames.com/snake-shooter-cbu_16x9/20250214062951/snake-shooter-cbu_16x9-cover?metadata=none&quality=70&width=541",
    url: "https://www.crazygames.com/embed/snake-shooter-cbu",
  },
  {
    name: "Mystery Digger",
    icon: "https://imgs.crazygames.com/ragdoll-archers_16x9/20240205020743/ragdoll-archers_16x9-cover?metadata=none&quality=70&width=541",
    url: "https://www.crazygames.com/embed/ragdoll-archers",
  },
  {
    name: "Ragdoll Archers",
    icon: "https://imgs.crazygames.com/snake-shooter-cbu_16x9/20250214062951/snake-shooter-cbu_16x9-cover?metadata=none&quality=70&width=541",
    url: "https://www.crazygames.com/embed/snake-shooter-cbu",
  },
  {
    name: "Space Waves",
    icon: "https://imgs.crazygames.com/space-waves_16x9/20241203031650/space-waves_16x9-cover?metadata=none&quality=70&width=541",
    url: "https://www.crazygames.com/embed/space-waves",
  },
  {
    name: "Bloxd.io",
    icon: "https://imgs.crazygames.com/games/bloxdhop-io/cover_16x9-1709115453824.png?metadata=none&quality=70&width=541",
    url: "https://www.crazygames.com/embed/bloxdhop-io",
  },
  {
    name: "Sprunki  ",
    icon: "https://imgs.crazygames.com/games/sprunki-itn/cover_16x9-1732009692724.png?metadata=none&quality=70&width=541",
    url: "https://www.crazygames.com/embed/sprunki-itn",
  },
  {
    name: "Color Match  ",
    icon: "https://imgs.crazygames.com/color-match-amg_16x9/20241223043902/color-match-amg_16x9-cover?metadata=none&quality=70&width=541",
    url: "https://www.crazygames.com/embed/color-match-amg",
  },
  {
    name: "Bridge Race",
    icon: "https://imgs.crazygames.com/bridge-race_16x9/20241227062023/bridge-race_16x9-cover?metadata=none&quality=70&width=541",
    url: "https://www.crazygames.com/embed/bridge-race",
  },
]

interface GameIframeProps {
  currentGame: string
  onGameSelect: (game: string) => void
}

export default function GameIframe({ currentGame, onGameSelect }: GameIframeProps) {
  const selectedGame = games.find((game) => game.name === currentGame) || games[0]

  const handleGameClick = (gameName: string) => {
    if (typeof onGameSelect === "function") {
      onGameSelect(gameName)
    } else {
      console.info("onGameSelect is not a function")
    }
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Play {selectedGame.name}</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4">
            <div className="aspect-w-16 aspect-h-9 mb-8">
              <iframe
                src={selectedGame.url}
                className="w-full h-full"
                style={{ aspectRatio: "16 / 9" }}
                allowFullScreen
              ></iframe>
            </div>
            {selectedGame.info && (
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Game Information</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p>
                      <strong>Developer:</strong> {selectedGame.info.developer}
                    </p>
                    <p>
                      <strong>Rating:</strong> {selectedGame.info.rating} ({selectedGame.info.votes} votes)
                    </p>
                    <p>
                      <strong>Released:</strong> {selectedGame.info.released}
                    </p>
                    <p>
                      <strong>Last Updated:</strong> {selectedGame.info.lastUpdated}
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Technology:</strong> {selectedGame.info.technology}
                    </p>
                    <p>
                      <strong>Platform:</strong> {selectedGame.info.platform}
                    </p>
                    <p>
                      <strong>Controls:</strong> {selectedGame.info.controls}
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <strong>Tags:</strong>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedGame.info.tags.map((tag, index) => (
                      <span key={index} className="bg-blue-600 text-white px-2 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <strong>Description:</strong>
                  <p className="mt-2">{selectedGame.info.description}</p>
                </div>
              </div>
            )}
          </div>
          <div className="lg:w-1/4">
            <div className="grid grid-cols-2 gap-4">
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
                    width={100}
                    height={56}
                    className="rounded-lg object-cover"
                  />
                  <span className="mt-2 text-sm text-center">{game.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

