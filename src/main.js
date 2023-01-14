import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import $ from 'jquery'
import '@/bootstrap/css/bootstrap.min.css'
import '@/bootstrap/js/bootstrap.min.js'
import '@/assets/css/base.css'
import '@mdi/font/css/materialdesignicons.css'

// import axios from 'axios'
// import request from './js/request'
// axios.defaults.baseURL = 'http://127.0.0.1:8080'
// axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

Vue.config.productionTip = false
Vue.prototype.$ = $

// Vue.prototype.$http = request
// Vue.prototype.$http = axios
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
