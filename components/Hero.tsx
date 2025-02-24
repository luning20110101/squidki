"use client"

import Image from "next/image"

const games = [
  {
    name: "Squidki Game",
    icon: "/images/Squidki Game.jpg",
    url: "https://wowtbc.net/sprunkin/sprunki-squid-game/index.html",
  },
  {
    name: "Squidki Pyramixed Game",
    icon: "/images/Squidki Pyramixed Game.jpg",
    url: "https://wowtbc.net/sprunkin/sprunki-pyramixed/index.html",
  },
  {
    name: "Super Friday Night Squid Challenge",
    icon: "/images/Super Friday Night Squid Challenge.jpg",
    url: "https://sprunki-games.com/super-friday-night-squid-challenge.embed",
  },
  {
    name: "Squidki Retake",
    icon: "/images/Squidki Retake.jpg",
    url: "https://wowtbc.net/sprunkin/retake/index.html",
  },
  {
    name: "Squidki Shocked",
    icon: "/images/Squidki Shocked.jpg",
    url: "https://iframegame.com/embed/sprunki-shocked/index.html",
  },
  {
    name: "Squidki Sinner",
    icon: "/images/Squidki Sinner.jpg",
    url: "https://game.sprunkiincredibox.app/Sprunki%20Incredibox.html",
  },
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
        <p className="text-xl mb-8">Experience the thrilling intersection of Squidki, where Sprunki's musical innovation collides with the intense survival dynamics of Squid Game. In this unique gaming environment, players are challenged to create music that not only entertains but also serves as a lifeline in high-stakes elimination challenges. Squidki redefines what it means to survive through rhythm.</p>
        <h1 className="text-5xl font-bold mb-4">A Unique Musical Survival Experience</h1>
        <p className="text-xl mb-8">In Squidki, you will immerse yourself in a world where rhythm and survival intertwine. Each challenge draws inspiration from the iconic Squid Game series, transforming traditional survival mechanics into a rhythmic battle for life. Your ability to craft compelling beats will directly influence your chances of survival, making every note count.</p>
        <h1 className="text-5xl font-bold mb-4">Engage in Competitive Gameplay</h1>
        <p className="text-xl mb-8">Choose your role as either a contestant or a guard in Squidki, each possessing distinct musical abilities and strategies. Contestants must rely on their musical creativity to outmaneuver opponents, while guards have unique powers that can sway the outcome of challenges. This duality adds layers of strategy and excitement to Squidki, ensuring that every match is unpredictable.</p>
        <h1 className="text-5xl font-bold mb-4">Musical Challenges Await</h1>
        <p className="text-xl mb-8">As you progress through Squidki, you will face a series of increasingly difficult musical challenges that test both your rhythm and strategic thinking. The stakes are high, and each round presents new obstacles that require quick reflexes and clever tactics to overcome. Players must adapt their strategies based on the evolving dynamics of Squidki to stay ahead.</p>
        <h1 className="text-5xl font-bold mb-4">Join a Global Community</h1>
        <p className="text-xl mb-8">Connect with fellow players from around the world as you share your musical creations and survival stories in Squidki. Engage in intense rhythm battles and showcase your skills in a competitive environment that fosters camaraderie and creativity. The Squidki community is vibrant and welcoming, making it easy to find friends and rivals alike.</p>
        
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

