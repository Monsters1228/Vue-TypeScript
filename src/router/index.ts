import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Student from '@/components/Student.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/home/student',
    children: [
      {
        path: 'student',
        component: Student
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
