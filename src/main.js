import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faLinkedin, faInstagram)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
