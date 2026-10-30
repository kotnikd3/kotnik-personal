import { createApp, createSSRApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faCouch } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import createAppI18n from './plugins/i18n'

library.add(faCopyright, faGithub, faCouch)

export function createApplication({ locale = 'sl', hydrate = false } = {}) {
    const app = (hydrate ? createSSRApp : createApp)(App)
    app.component('font-awesome-icon', FontAwesomeIcon)
    app.use(createAppI18n(locale))
    return app
}