"use client"

const GameplayGuide = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-[1920px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Master Squidki: Your Ultimate Guide</h2>

        <div className="max-w-[1600px] mx-auto space-y-10">
          {/* Introduction */}
          <div className="bg-gray-800 rounded-lg p-12">
            <h3 className="text-2xl font-bold mb-6">Welcome to Squidki</h3>
            <p className="text-gray-300 leading-relaxed text-lg max-w-[1400px] mx-auto">
              Squidki revolutionizes the music-based gaming experience by blending creativity with unexpected twists. As a Squidki player, your mission is to build and customize a band of eccentric characters, each contributing their own distinct sounds to create mesmerizing Squidki melodies. Through the unique Squidki customization system and outfit choices, you'll unlock various musical combinations and discover hidden soundscapes.
            </p>
          </div>

          {/* Gameplay Phases */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-800 rounded-lg p-12">
              <h3 className="text-xl font-bold mb-6">Phase 1: Building Your Squidki Band</h3>
              <ul className="text-gray-300 space-y-4 list-disc pl-6 text-lg">
                <li>Choose from Squidki's unique avatar collection including TV heads, satellite dishes, and Medusa-like figures</li>
                <li>Master Squidki's character customization to modify their sound</li>
                <li>Experiment with different Squidki combinations to create original melodies</li>
                <li>Begin your Squidki journey with cheerful, upbeat compositions</li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-12">
              <h3 className="text-xl font-bold mb-6">Phase 2: Squidki's Dark Evolution</h3>
              <ul className="text-gray-300 space-y-4 list-disc pl-6 text-lg">
                <li>Experience how Squidki transforms your harmonious melodies into haunting soundscapes</li>
                <li>Witness your Squidki characters evolve in unexpected ways</li>
                <li>Adapt to Squidki's new musical challenges as the atmosphere changes</li>
                <li>Discover complex Squidki character variations</li>
              </ul>
            </div>
          </div>

          {/* Advanced Features */}
          <div className="bg-gray-800 rounded-lg p-12">
            <h3 className="text-2xl font-bold mb-8">Advanced Squidki Elements</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xl font-semibold mb-6">Squidki Character Behavior</h4>
                <ul className="text-gray-300 space-y-4 list-disc pl-6 text-lg">
                  <li>Each Squidki character has unique performance traits</li>
                  <li>Discover individual Squidki sound contributions</li>
                  <li>Master Squidki character interactions for better melodies</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-6">Squidki Progress System</h4>
                <ul className="text-gray-300 space-y-4 list-disc pl-6 text-lg">
                  <li>Track your Squidki character evolution in the gallery</li>
                  <li>Earn unique Squidki achievements</li>
                  <li>Unlock exclusive Squidki content as you advance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tips & Tricks */}
          <div className="bg-gray-800 rounded-lg p-12">
            <h3 className="text-2xl font-bold mb-8">Squidki Success Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="text-gray-300">
                <h4 className="text-xl font-semibold mb-6">Squidki Experimentation</h4>
                <p className="text-lg leading-relaxed">Explore different Squidki character combinations and customizations to discover unique sound patterns in your musical journey.</p>
              </div>
              <div className="text-gray-300">
                <h4 className="text-xl font-semibold mb-6">Squidki Progression</h4>
                <p className="text-lg leading-relaxed">Take time to master each Squidki phase thoroughly before advancing to maintain the best gaming experience.</p>
              </div>
              <div className="text-gray-300">
                <h4 className="text-xl font-semibold mb-6">Squidki Spirit</h4>
                <p className="text-lg leading-relaxed">Embrace the creative process and unexpected transformations in your Squidki adventure!</p>
              </div>
            </div>
          </div>

          {/* Gameplay Video */}
          <div className="bg-gray-800 rounded-lg p-12">
            <h3 className="text-2xl font-bold mb-8">Gameplay Video</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2">
                <iframe width="688" height="387" src="https://www.youtube.com/embed/YBWb6h5Abes"
                        title="Incredibox Sprunki - Squidki (Normal/Horror)" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <p className="text-gray-300 text-lg text-center mt-6">
                  Watch this comprehensive overview of Squidki's unique gameplay mechanics and features.
                </p>
              </div>

              <div className="w-full md:w-1/2">
                <iframe width="688" height="387" src="https://www.youtube.com/embed/xu_u-K7ufKg"
                        title="Incredibox Sprunki But SQUIDKI | New Mod | CUTE VS SCARY BEATS 2" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <p className="text-gray-300 text-lg text-center mt-6">
                  Discover advanced techniques and strategies to master Squidki's challenging levels.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GameplayGuide
