import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BaseLayOut from '@/layouts/base.layout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/login.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: BaseLayOut,
    redirect: '/home',
    meta: {
      title: '首页',
    },
    children: [
      {
        path: 'home',
        name: 'home-root',
        component: () => import('@/views/home/index.vue'),
      }
    ]
  },
  {
    path: '/explore',
    name: 'Explore',
    component: BaseLayOut,
    redirect: { name: 'explore' },
    meta: {
      title: '发现',
    },
    children: [
      {
        path: '',
        name: 'explore',
        component: () => import('@/views/explore/index.vue'),
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
