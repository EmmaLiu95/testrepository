import Vue from 'vue'
import VueRouter from 'vue-router'

import Me from '../components/Me.vue'
import About from '../components/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/about'
  },
  {
    path: '/me',
    component: Me
  },
  {
    path: '/about/:userId',
    component: About
  },
]

const router = new VueRouter({
  routes,
  //将hash模式改为history模式
  mode: 'history'
})

export default router