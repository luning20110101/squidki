"use client"

const GameFeatures = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Discover what makes Squidki a revolutionary musical survival experience
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Musical Survival */}
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎵</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Musical Survival</h3>
            <p className="text-gray-300">
              Compete in intense musical challenges where your rhythm skills determine your survival
            </p>
          </div>

          {/* Character Transformations */}
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔄</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Character Transformations</h3>
            <p className="text-gray-300">
              Play as iconic guards and contestants, each with unique musical abilities and survival mechanics
            </p>
          </div>

          {/* Strategic Gameplay */}
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Strategic Gameplay</h3>
            <p className="text-gray-300">
              Master both musical creation and survival strategy to progress through increasingly challenging rounds
            </p>
          </div>

          {/* Competitive Community */}
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌐</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Competitive Community</h3>
            <p className="text-gray-300">
              Share your musical survival stories and compete with players worldwide in intense rhythm battles
            </p>
          </div>

          {/* Progressive Difficulty */}
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Progressive Difficulty</h3>
            <p className="text-gray-300">
              Face increasingly challenging musical trials as you advance through different survival rounds
            </p>
          </div>

          {/* Intuitive Controls */}
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Intuitive Controls</h3>
            <p className="text-gray-300">
              Easy-to-learn mechanics that combine musical creation with survival gameplay
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GameFeatures 