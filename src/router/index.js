import { createRouter, createWebHistory } from 'vue-router'
import MainContent from '../components/MainContent.vue'
import WorkTime from '../components/WorkTime.vue'
import News from '../components/News.vue'

const routes = [
  { path: '/', name: 'MainContent', component: MainContent },
  { path: '/WorkTime', name: 'WorkTime', component: WorkTime },
  { path: '/News', name: 'News', component: News }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router