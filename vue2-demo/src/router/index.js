import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import test from './test'
import page from './study'
import message from './message'
import user from './user'
import error from './error'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
]
  .concat(test)
  .concat(page)
  .concat(message)
  .concat(user)
  .concat(error)
  .concat([
    //通配符路由配置*表示任意路径
    // 所以本配置一定要在路由列表的最后
    {
      path: '*',
      name: 'all_toher',
      // redirect表示重定向到其它path
      redirect: '/error/404',
    },
  ])

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
