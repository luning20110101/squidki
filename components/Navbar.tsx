"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

interface NavbarProps {
  onGameSelect?: (gameName: string) => void
}

const recommendedGames = [
  {
    name: "Squidki Game",
    url: "https://wowtbc.net/sprunkin/sprunki-squid-game/index.html"
  },
  {
    name: "Squidki Pyramixed Game",
    url: "https://wowtbc.net/sprunkin/sprunki-pyramixed/index.html"
  },
  {
    name: "Squidki Retake",
    url: "https://wowtbc.net/sprunkin/retake/index.html"
  },
  {
    name: "Squidki Sinner",
    url: "https://game.sprunkiincredibox.app/Sprunki%20Incredibox.html"
  }
]

export default function Navbar({ onGameSelect }: NavbarProps) {
  const router = useRouter()

  const handleGameClick = (gameName: string) => {
    if (typeof onGameSelect === "function") {
      onGameSelect(gameName)
      // 如果在首页，滚动到游戏区域
      if (window.location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        // 如果不在首页，先跳转到首页
        router.push("/")
      }
    }
  }

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl md:text-4xl font-bold tracking-wider hover:text-purple-400 transition-colors">
          Squidki
        </Link>
        <div className="hidden md:flex space-x-6">
          {recommendedGames.map((game, index) => (
            <button
              key={index}
              onClick={() => handleGameClick(game.name)}
              className="text-sm hover:text-purple-400 transition-colors whitespace-nowrap"
            >
              {game.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

