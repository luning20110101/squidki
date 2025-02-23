"use client"
import { usePathname } from "next/navigation"

export default function LanguageSwitcher({ lang }: { lang: string }) {
  const pathname = usePathname()
  const path = pathname.replace(`/${lang}`, "")

  return (
    <div className="inline-block">
      <select
        value={lang}
        onChange={(e) => {
          window.location.href = `/${e.target.value}${path}`
        }}
        className="bg-gray-700 text-white rounded p-1"
      >
        <option value="en">English</option>
      </select>
    </div>
  )
}

