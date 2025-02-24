import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <Link href="" className="hover:text-blue-400 transition">
            Contact Us
          </Link>
        </div>
        <div>
          <p>Support: harryc199101@gmail.com</p>
        </div>
      </div>
    </footer>
  )
}

