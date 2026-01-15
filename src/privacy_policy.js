import { createApp } from 'vue'
import './style.css'
import AppPrivacyPolicy from './AppPrivacyPolicy.vue'
import i18n from './i18n'

const app = createApp(AppPrivacyPolicy)
app.use(i18n)
app.mount('#app')
