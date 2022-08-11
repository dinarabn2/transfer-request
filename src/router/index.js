import { createRouter, createWebHistory } from 'vue-router'
import Auth from './../views/Auth.vue'

const routes = [
  {
    path: "/",
    redirect: {
      name: "login",
    },
  },
  {
      path: '/login',
      name: "login",
      component: Auth
  },
  {
    path: "/main",
    name: "main",
    component: () => import('./../views/Main.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
