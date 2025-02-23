"use client"

const GameplaySteps = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Master the art of musical survival in Squidki!</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Choose Your Role</h3>
            <p className="text-gray-300">
              Play as a Squid Game contestant or guard, each with unique musical abilities and survival mechanics
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Create Strategic Beats</h3>
            <p className="text-gray-300">
              Compose music that helps you survive each round's unique challenges and elimination conditions
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Survive and Advance</h3>
            <p className="text-gray-300">
              Use your musical skills to progress through increasingly difficult survival rounds
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl font-bold">4</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Share Your Success</h3>
            <p className="text-gray-300">
              Record your best survival runs and share them with the Squidki community
            </p>
          </div>
        </div>

        {/* Survival Tips */}
        <div className="mt-16 bg-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Squidki Survival Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="text-purple-500">✓</div>
              <p>Master the iconic Squid Game challenges with musical twists</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-purple-500">✓</div>
              <p>Combine Sprunki's musical mechanics with survival strategy</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-purple-500">✓</div>
              <p>Watch for the Front Man's musical signals</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-purple-500">✓</div>
              <p>Create strategic beats to survive elimination rounds</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-purple-500">✓</div>
              <p>Join other players in intense musical survival battles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GameplaySteps 