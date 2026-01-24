import { createApp } from 'vue'
import './style.css'
import AppFamiliaUlma from './AppFamiliaUlma.vue'
import i18n from './i18n'

const app = createApp(AppFamiliaUlma)
app.use(i18n)
app.mount('#app')
