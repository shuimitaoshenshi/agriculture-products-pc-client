import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import $ from 'jquery'
import '@/bootstrap/css/bootstrap.min.css'
import '@/bootstrap/js/bootstrap.min.js'
import '@/assets/css/base.css'
import axios from 'axios'
axios.defaults.baseURL = ''
Vue.config.productionTip = false
Vue.prototype.$ = $
Vue.prototype.$http = axios
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
