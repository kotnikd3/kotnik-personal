import { createApp } from 'vue'
import App from './App.vue'

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faGoodreads } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons'

library.add(faGithub, faGoodreads, faCopyright, faBookOpenReader)

// Custom CSS
require('./mystyles.scss');

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#body-vue')
