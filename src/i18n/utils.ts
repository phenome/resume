import { strings, defaultLang } from './strings'

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang! in strings) return lang as keyof typeof strings
  return defaultLang
}

export function useTranslations(lang: keyof typeof strings) {
  return function t(key: keyof (typeof strings)[typeof defaultLang]) {
    return (
      (
        strings[lang] as (typeof strings)[typeof lang] &
          Record<string, undefined>
      )[key] ?? strings[defaultLang][key]
    )
  }
}
