import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import About from '../views/about.vue'
import Profile from '../views/profile.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/profile', component: Profile }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
