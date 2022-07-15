import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import router from './router/index'
import './plugins/element.js'

Vue.use(VueRouter)

Vue.config.productionTip = false

import axios from 'axios';

//创建一个axios实例
Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3001/api'
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')