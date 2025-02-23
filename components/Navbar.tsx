import Link from "next/link"
import LanguageSwitcher from "./LanguageSwitcher"

export default function Navbar({ lang, dict }: { lang: string; dict: any }) {
  // Fallback content if dict or dict.common is not available
  const fallbackContent = {
    gameName: "Squidki"
  }

  const content = dict?.common || fallbackContent

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={`/${lang}`} className="text-xl font-bold">
          {content.gameName}
        </Link>
        <div className="space-x-4">
          <Link href={`/${lang}/login`} className="hover:text-blue-400 transition">
            {content.login}
          </Link>
          <Link href={`/${lang}`} className="hover:text-blue-400 transition">
            {content.home}
          </Link>
          <Link href={`/${lang}/privacy`} className="hover:text-blue-400 transition">
            {content.privacy}
          </Link>
          <Link href={`/${lang}/blog`} className="hover:text-blue-400 transition">
            {content.blog}
          </Link>
          <LanguageSwitcher lang={lang} />
        </div>
      </div>
    </nav>
  )
}

