import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/fonts/_fonts.scss'
import './assets/style/variables.scss'
import './assets/style/planet/planet-motion.scss'
import components from './ui/index'
import { createI18n } from 'vue-i18n'
import { languages } from './translations'

const app = createApp(App)

components.forEach(component =>{
  app.component(component.name, component)
})

const i18n = createI18n({
  locale: store.state.locales.currentLocale,
  legacy: false,
  fallbackLocale: 'en',
  messages: Object.assign(languages)
})

app
  .use(i18n)
  .use(store)
  .use(router)
  .mount('#app')
