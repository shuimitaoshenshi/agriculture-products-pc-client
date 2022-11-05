import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import $ from 'jquery'
import '@/assets/css/common.css'
import '@/bootstrap/css/bootstrap.min.css'
import '@/bootstrap/js/bootstrap.min.js'

Vue.config.productionTip = false
Vue.prototype.$ = $
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
