"use client"

import Image from "next/image"

const games = [
  {
    name: "Squidki Game",
    icon: "/images/Squidki Game.jpg",
    url: "https://wowtbc.net/sprunkin/sprunki-squid-game/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    name: "Squidki Pyramixed Game",
    icon: "/images/Squidki Pyramixed Game.jpg",
    url: "https://wowtbc.net/sprunkin/sprunki-pyramixed/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    name: "Super Friday Night Squid Challenge",
    icon: "/images/Super Friday Night Squid Challenge.jpg",
    url: "https://sprunki-games.com/super-friday-night-squid-challenge.embed",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    name: "Squidki Retake",
    icon: "/images/Squidki Retake.jpg",
    url: "https://wowtbc.net/sprunkin/retake/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    name: "Squidki Shocked",
    icon: "/images/Squidki Shocked.jpg",
    url: "https://iframegame.com/embed/sprunki-shocked/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    name: "Squidki Sinner",
    icon: "/images/Squidki Sinner.jpg",
    url: "https://game.sprunkiincredibox.app/Sprunki%20Incredibox.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
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
        <h2 className="text-3xl md:text-4xl font-bold tracking-wider mb-8 text-center">Play {selectedGame.name}</h2>
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
              <>
                <div className="bg-gray-800 p-6 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold mb-4">Game Information</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p><strong>Developer:</strong> {selectedGame.info.developer}</p>
                      <p><strong>Rating:</strong> {selectedGame.info.rating} ({selectedGame.info.votes} votes)</p>
                      <p><strong>Released:</strong> {selectedGame.info.released}</p>
                      <p><strong>Last Updated:</strong> {selectedGame.info.lastUpdated}</p>
                    </div>
                    <div>
                      <p><strong>Technology:</strong> {selectedGame.info.technology}</p>
                      <p><strong>Platform:</strong> {selectedGame.info.platform}</p>
                      <p><strong>Controls:</strong> {selectedGame.info.controls}</p>
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

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-6">Squidki Survival Tips</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <div className="text-purple-500">✓</div>
                      <p>Become adept at navigating the signature challenges of Squid Game, now infused with exciting musical elements. Understanding the unique mechanics of each challenge is crucial for survival, allowing you to leverage your musical skills to stay ahead of the competition.</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="text-purple-500">✓</div>
                      <p>Integrate Sprunki's innovative musical mechanics into your survival strategy. Crafting beats that resonate with the game's rhythm will enhance your ability to maneuver through obstacles and outsmart opponents, making every decision count in your quest for survival.</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="text-purple-500">✓</div>
                      <p>Stay alert to the Front Man's musical cues, as they provide vital information about upcoming challenges and threats. Recognizing these signals can give you a strategic advantage, helping you prepare for what lies ahead and ensuring you’re always one step ahead of your rivals.</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="text-purple-500">✓</div>
                      <p>Utilize your musical creativity to compose strategic beats tailored for each elimination round. Your compositions should not only entertain but also serve as tactical tools that can influence the dynamics of the game, enhancing your chances of survival against formidable opponents.</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="text-purple-500">✓</div>
                      <p>Engage with a vibrant community of players in thrilling musical survival battles. Collaborate, compete, and share strategies with others as you navigate through the intense challenges that Squidki offers. The camaraderie and competition will elevate your gaming experience, making each victory even more rewarding.</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="lg:w-1/4">
            <div className="grid grid-cols-1 gap-4">
              {games.map((game, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center cursor-pointer hover:scale-105 transition-transform ${
                    currentGame === game.name ? "ring-4 ring-yellow-400 rounded-lg" : ""
                  }`}
                  onClick={() => handleGameClick(game.name)}
                >
                  <Image
                    src={game.icon}
                    alt={game.name}
                    width={200}
                    height={112}
                    className="rounded-lg object-cover w-full"
                    priority={index < 4}
                  />
                  <span className="mt-2 text-base text-center">{game.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

