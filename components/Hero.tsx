"use client"

interface HeroProps {
  currentGame?: string;
  onGameSelect?: (gameName: string) => void;
}

export default function Hero({ currentGame, onGameSelect }: HeroProps = {}) {
  return (
    <section className="bg-purple-600 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Where Squidki Meets Squid Game</h1>
        <p className="text-lg md:text-xl mb-8">
          Experience the thrilling intersection of Squidki, where Sprunki's musical innovation collides with the intense survival dynamics of Squid Game. In this unique gaming environment, players are challenged to create music that not only entertains but also serves as a lifeline in high-stakes elimination challenges.
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">A Unique Musical Survival Experience</h2>
        <p className="text-lg md:text-xl mb-8">
          In Squidki, you will immerse yourself in a world where rhythm and survival intertwine. Each challenge draws inspiration from the iconic Squid Game series, transforming traditional survival mechanics into a rhythmic battle for life.
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">Engage in Competitive Gameplay</h2>
        <p className="text-lg md:text-xl mb-8">
          Choose your role as either a contestant or a guard in Squidki, each possessing distinct musical abilities and strategies. Contestants must rely on their musical creativity to outmaneuver opponents, while guards have unique powers that can sway the outcome of challenges.
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">Musical Challenges Await</h2>
        <p className="text-lg md:text-xl mb-8">
          As you progress through Squidki, you will face a series of increasingly difficult musical challenges that test both your rhythm and strategic thinking. The stakes are high, and each round presents new obstacles that require quick reflexes and clever tactics to overcome.
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">Join a Global Community</h2>
        <p className="text-lg md:text-xl mb-8">
          Connect with fellow players from around the world as you share your musical creations and survival stories in Squidki. Engage in intense rhythm battles and showcase your skills in a competitive environment that fosters camaraderie and creativity.
        </p>
      </div>
    </section>
  )
}

