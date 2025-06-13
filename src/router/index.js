import { createRouter, createWebHistory } from 'vue-router'
import MainContent from '../components/MainContent.vue'
import WorkTime from '../components/WorkTime.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainContent
  },
  {
    path: '/WorkTime',
    name: 'WorkTime',
    component: WorkTime
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router