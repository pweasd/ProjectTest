import Vue from 'vue'
import VueRouter from 'vue-router'
import { MENU_ROUTES } from './menu_routes'
import { ROUTES } from './routes'

Vue.use(VueRouter)

// routes에 다른 라우터들 합치기
const routes = MENU_ROUTES.concat(ROUTES)

let router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
