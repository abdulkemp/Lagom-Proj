import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'loginRegister',
    component: () => import ('../views/LoginRegisterView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import ('../views/AdminView.vue')
  },
  {
    path: '/admins',
    name: 'admins',
    component: () => import ('../views/AdminsView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import ('../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router