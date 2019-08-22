import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7ae1a840 = () => interopDefault(import('../pages/app/index.vue' /* webpackChunkName: "pages/app/index" */))
const _81375f44 = () => interopDefault(import('../pages/reports/index.vue' /* webpackChunkName: "pages/reports/index" */))
const _a02b303e = () => interopDefault(import('../pages/app/menu.vue' /* webpackChunkName: "pages/app/menu" */))
const _7abef895 = () => interopDefault(import('../pages/app/old.vue' /* webpackChunkName: "pages/app/old" */))
const _63677a25 = () => interopDefault(import('../pages/app/register.vue' /* webpackChunkName: "pages/app/register" */))
const _04117547 = () => interopDefault(import('../pages/reports/register.vue' /* webpackChunkName: "pages/reports/register" */))
const _79aabea4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/app",
      component: _7ae1a840,
      name: "app"
    }, {
      path: "/reports",
      component: _81375f44,
      name: "reports"
    }, {
      path: "/app/menu",
      component: _a02b303e,
      name: "app-menu"
    }, {
      path: "/app/old",
      component: _7abef895,
      name: "app-old"
    }, {
      path: "/app/register",
      component: _63677a25,
      name: "app-register"
    }, {
      path: "/reports/register",
      component: _04117547,
      name: "reports-register"
    }, {
      path: "/",
      component: _79aabea4,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
