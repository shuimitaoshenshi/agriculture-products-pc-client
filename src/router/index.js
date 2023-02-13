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
import LoginBox from '@/components/login/LoginBox.vue'
import RegisterBox from '@/components/login/RegisterBox.vue'
import Coupon from '@/components/myinfo/MyCoupon.vue'
import UndeliveredOrder from '@/components/myinfo/OrderKinds/UndeliveredOrder.vue'
import UnpaidOrder from '@/components/myinfo/OrderKinds/UnpaidOrder.vue'
import AllOrder from '@/components/myinfo/OrderKinds/AllOrder.vue'
import MyOrderKinds from '@/views/MyInfo/MyOrderKinds.vue'
import AftersaleOrder from '@/components/myinfo/OrderKinds/AftersaleOrder.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/home', component: Home },
  { path: '/home/:sort', component: Home },
  {
    path: '/login',
    component: Login,
    redirect: '/login/login',
    children: [
      { path: 'login', component: LoginBox },
      { path: 'register', component: RegisterBox }
    ]
  },
  { path: '/info', component: GoodInfo },
  {
    path: '/my',
    component: MyInfo,
    children: [
      { path: '', component: MyAddress },
      { path: 'address', component: MyAddress },
      { path: 'star', component: MyStar },
      { path: 'agent', component: AgentInfo },
      { path: 'coupon', component: Coupon },
      {
        path: 'order',
        component: MyOrderKinds,
        children: [
          { path: '', component: AllOrder },
          { path: '/myorder/all', component: AllOrder },
          { path: '/myorder/unpaid', component: UnpaidOrder },
          { path: '/myorder/undelivered', component: UndeliveredOrder },
          { path: '/myorder/aftersale', component: AftersaleOrder }
        ]
      }
    ]
  },
  { path: '/cart', component: GoodCart }
]

const router = new VueRouter({
  routes
})

export default router
