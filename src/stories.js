import { createApp } from 'vue'
import './style.css'
import AppStories from './AppStories.vue'
import i18n from './i18n'

const app = createApp(AppStories)
app.use(i18n)
app.mount('#app')
