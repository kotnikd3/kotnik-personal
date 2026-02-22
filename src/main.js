import '@/style.scss'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

library.add(faCopyright, faGithub)

import { createApp } from 'vue'
import App from './App.vue'

import i18n from '@/plugins/i18n';

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon);

app.use(i18n);
app.mount('#app');
