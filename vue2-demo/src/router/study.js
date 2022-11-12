//测试模块的路由信息
let routers = [
  {
    path: '/study/page',
    name: 'studypage',
    component: () => import('../views/study/PageView.vue'),
  },
  {
    path: '/study/vuex',
    name: 'studyvuex',
    component: () => import('../views/study/VuexView.vue'),
  },
  {
    path: '/study/vuexother',
    name: 'studyvuexvuexother',
    component: () => import('../views/study/VuexOtherView.vue'),
  },
  {
    path: '/study/amap',
    name: 'studyvuexvuexother',
    component: () => import('../views/study/AMapView.vue'),
  },
  {
    path: '/study/amapui',
    name: 'studyvuexvuexother',
    component: () => import('../views/study/AMapUiView.vue'),
  },
]

export default routers
