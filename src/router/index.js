import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeApp',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/post/:id',
    name: 'PostPage',
    component: () => import('@/views/PostPage.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

