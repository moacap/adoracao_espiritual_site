import { createApp } from 'vue'
import './style.css'
import AppRecomendacaoInfo from './AppRecomendacaoInfo.vue'
import i18n from './i18n'

const app = createApp(AppRecomendacaoInfo)
app.use(i18n)
app.mount('#app')
