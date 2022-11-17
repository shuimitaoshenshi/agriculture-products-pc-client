import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home/Home.vue'
import GoodInfo from '@/views/GoodInfo/GoodInfo.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/home/:sort', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Login },
  { path: '/info', component: GoodInfo }
]

const router = new VueRouter({
  routes
})

export default router
