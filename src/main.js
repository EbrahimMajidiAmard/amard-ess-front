import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setBaseApi } from './config/apiConfig'

async function bootstrap() {
  try {
    const response = await fetch('/config.json')
    const config = await response.json()
    setBaseApi(config.apiBaseUrl)

    const app = createApp(App)
    app.use(router)
    app.mount('#app')
  } catch (error) {
    console.error('خطا در بارگذاری config.json:', error)
  }
}

bootstrap()