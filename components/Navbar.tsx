import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Squidki
        </Link>
      </div>
    </nav>
  )
}

