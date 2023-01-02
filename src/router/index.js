import { createRouter, createWebHistory } from 'vue-router'
import StartPage from '../views/StartPage.vue'
import ThanksPage from '../views/ThanksPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: StartPage
  },
  {
    path: '/thanks',
    name: 'thp',
    component: ThanksPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
