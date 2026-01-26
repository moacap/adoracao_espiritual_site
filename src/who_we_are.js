import { createApp } from 'vue'
import './style.css'
import AppWhoWeAre from './AppWhoWeAre.vue'
import i18n from './i18n'

const app = createApp(AppWhoWeAre)
app.use(i18n)
app.mount('#app')
