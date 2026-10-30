import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import sl from '@/locales/sl.json'

export function getLocale(pathname) {
  return pathname === '/en/' || pathname === '/en' ? 'en' : 'sl'
}

export default function createAppI18n(locale = 'sl') {
  return createI18n({
    locale,
    fallbackLocale: 'sl',
    messages: {
      en,
      sl,
    },
    allowComposition: true,
    legacy: false,
    warnHtmlMessage: false,
  })
}
