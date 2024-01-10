import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/tou',
    name: 'tou',
    component: () => import('../views/Tou-reveser.vue')
  },
  {
    path: '/show',
    name: 'show',
    component: () => import('../views/Woder-list.vue')
  },
  {
    path: '/head',
    name: 'head',
    component: () => import('../views/Head-sculpture.vue')
  },
  {
    path: '/expr',
    name: 'expr',
    component: () => import('../views/ExpressView.vue')
  },
  {
    path: '/det',
    name: 'det',
    component: () => import('../views/DetailsView.vue')
  },
  {
    path: '/mob',
    name: 'mob',
    component: () => import('../views/MobileWallpaper.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
