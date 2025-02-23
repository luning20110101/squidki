import type { Locale } from "./i18n-config"

// Import language files
import en from "../dictionaries/en.json"
import zh from "../dictionaries/zh.json"
import es from "../dictionaries/es.json"

const dictionaries: Record<Locale, any> = {
  en,
  zh,
  es,
}

export const getDictionary = async (locale: Locale): Promise<any> => {
  try {
    return dictionaries[locale] || dictionaries.en // Fallback to English if locale is not found
  } catch (error) {
    console.error(`Error loading dictionary for locale ${locale}:`, error)
    return dictionaries.en // Fallback to English in case of error
  }
}

