import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Squidki */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Squidki</h3>
            <p className="text-gray-400">Squidki - Play All Sprunky Games</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.brainrotclicker.pro" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Brainrot Clicker
                </a>
              </li>
              <li>
                <a href="https://www.mergefellas.pro" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Merge Fellas
                </a>
              </li>
              <li>
                <a href="https://cheese-chompers-3d.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Cheese Chompers 3D
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  HarryC199101@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-gray-400">© 2025 Squidki. All rights reserved.</p>
            <p className="text-gray-400 text-center">
              Disclaimer: <a href="/" className="text-blue-400 hover:text-blue-300">Squidki</a> is an independent website and is not affiliated with any organizations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

