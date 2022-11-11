import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ArchiveView from '../views/ArchiveView.vue'
import AlbumView from '../views/AlbumView.vue'
import LoginPageView from '../views/LoginPageView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/archive',
    name: 'archive',
    component: ArchiveView
  },
  {
    path: '/album',
    name: 'album',
    component: AlbumView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPageView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
