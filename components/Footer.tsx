import Link from "next/link"

export default function Footer({ lang, dict }: { lang: string; dict: any }) {
  // Fallback content if dict or dict.common is not available
  const fallbackContent = {
    contactUs: "Contact Us",
    support: "Support",
  }

  const content = dict?.common || fallbackContent

  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <Link href="" className="hover:text-blue-400 transition">
            {content.contactUs}
          </Link>
        </div>
        <div>
          <p>{content.support}: harryc199101@gmail.com</p>
        </div>
      </div>
    </footer>
  )
}

