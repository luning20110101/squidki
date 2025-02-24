"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleGameClick = (gameName: string) => {
    if (typeof onGameSelect === "function") {
      onGameSelect(gameName)
      setIsMenuOpen(false) // 选择游戏后关闭菜单
      if (window.location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        router.push("/")
      }
    }
  }

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto">
        {/* 桌面端布局 */}
        <div className="hidden lg:flex justify-between items-center">
          <Link href="/" className="text-3xl md:text-4xl font-bold tracking-wider hover:text-purple-400 transition-colors">
            Squidki
          </Link>
          <div className="flex items-center space-x-6">
            {recommendedGames.map((game, index) => (
              <button
                key={index}
                onClick={() => handleGameClick(game.name)}
                className="text-base hover:text-purple-400 transition-colors whitespace-nowrap"
              >
                {game.name}
              </button>
            ))}
            <Link 
              href="/more-games"
              className="ml-6 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              More Squidki
            </Link>
          </div>
        </div>

        {/* 平板端布局 */}
        <div className="hidden md:flex lg:hidden justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-wider hover:text-purple-400 transition-colors">
            Squidki
          </Link>
          <div className="flex items-center space-x-4">
            {recommendedGames.map((game, index) => (
              <button
                key={index}
                onClick={() => handleGameClick(game.name)}
                className="text-sm hover:text-purple-400 transition-colors whitespace-nowrap"
              >
                {game.name}
              </button>
            ))}
            <Link 
              href="/more-games"
              className="ml-4 px-3 py-1.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
            >
              More Squidki
            </Link>
          </div>
        </div>

        {/* 移动端布局 */}
        <div className="md:hidden flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-wider hover:text-purple-400 transition-colors">
            Squidki
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* 移动端下拉菜单 */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {recommendedGames.map((game, index) => (
              <button
                key={index}
                onClick={() => handleGameClick(game.name)}
                className="block w-full text-left px-4 py-2 text-base hover:bg-gray-700 rounded transition-colors"
              >
                {game.name}
              </button>
            ))}
            <Link 
              href="/more-games"
              className="block w-full text-left px-4 py-2 text-base hover:bg-gray-700 rounded transition-colors"
            >
              More Squidki
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

