import { createRouter, createWebHistory } from 'vue-router'
import MainContent from '../components/MainContent.vue'
import WorkTime from '../components/WorkTime.vue'
import News from '../components/News.vue'
import Evaluation from '../components/Evaluation.vue'
import DownloadDocs from '../components/DownloadDocs.vue'
import Training from '../components/Training.vue'
import Personnel from '../components/Personnel.vue'
import Salary from '../components/Salary.vue'
import Leave from '../components/Leave.vue'
import Permission from '../components/Permission.vue'

const routes = [
  { path: '/', name: 'MainContent', component: MainContent },
  { path: '/WorkTime', name: 'WorkTime', component: WorkTime },
  { path: '/News', name: 'News', component: News },
  { path: '/Training', name: 'Training', component: Training },
  { path: '/Personnel', name: 'Personnel', component: Personnel },
  { path: '/Salary', name: 'Salary', component: Salary },
  { path: '/Leave', name: 'Leave', component: Leave },
  { path: '/Evaluation', name: 'Evaluation', component: Evaluation },
  { path: '/DownloadDocs', name: 'DownloadDocs', component: DownloadDocs },
  { path: '/Permission', name: 'Permission', component: Permission },
  { path: '/Setting', name: 'Setting', component: () => import('../components/Setting.vue')},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router