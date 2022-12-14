import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home/Home.vue'
import GoodInfo from '@/views/GoodInfo/GoodInfo.vue'
import MyInfo from '@/views/MyInfo/MyInfo.vue'
import GoodCart from '@/views/GoodCart/GoodCart.vue'
import MyAddress from '@/components/myinfo/MyAddress.vue'
import AgentInfo from '@/components/myinfo/AgentInfo.vue'
import MyStar from '@/components/myinfo/MyStar.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/home/:sort', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Login },
  { path: '/info', component: GoodInfo },
  {
    path: '/my',
    component: MyInfo,
    children: [
      { path: '', component: MyAddress },
      { path: 'address', component: MyAddress },
      { path: 'star', component: MyStar },
      { path: 'agent', component: AgentInfo }
    ]
  },
  { path: '/cart', component: GoodCart }
]

const router = new VueRouter({
  routes
})

export default router
