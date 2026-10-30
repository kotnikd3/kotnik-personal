import '@/style.scss'
import { createApplication } from './app'
import { getLocale } from './plugins/i18n'

const target = document.querySelector('#app')
const locale = getLocale(window.location.pathname)
document.documentElement.lang = locale
createApplication({ locale, hydrate: target.hasChildNodes() }).mount(target)
