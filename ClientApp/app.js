import Vue from 'vue'
import axios from 'axios'
import router from './router/index'
import store from './store'
import { sync } from 'vuex-router-sync'
import App from 'views/app-root'

var VueTouch = require('vue-touch')
Vue.use(VueTouch, { name: 'v-touch' })

Vue.prototype.$http = axios

sync(store, router)

const app = new Vue({
  store,
  router,
  ...App,
})

export { app, router, store }
