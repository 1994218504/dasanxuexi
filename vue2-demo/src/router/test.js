//测试模块的路由信息
let routers = [
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test/HomeView.vue'),
  },

  {
    path: '/test/test',
    name: 'test',
    component: () => import('../views/test/TestView.vue'),
  },

  {
    path: '/test/ws',
    name: 'testWs',
    component: () => import('../views/test/WsView.vue'),
  },
  {
    path: '/test/router',
    name: 'testrouter',
    component: () => import('../views/test/RouterView.vue'),
  },
  {
    path: '/test/routerinfo/:info',
    name: 'tesetrouterinfo',
    component: () => import('../views/test/RouterInfoView.vue'),
  },
  {
    path: '/test/amap',
    name: 'tesetrouterinfo',
    component: () => import('../views/test/AMapTestView.vue'),
  },
  {
    path: '/test/logo',
    name: 'tesetrouterinfo',
    component: () => import('../views/test/LogoView.vue'),
  },
  {
    path: '/test/tab',
    name: 'tesetrouterinfo',
    component: () => import('../views/test/TaeView.vue'),
  },
  {
    path: '/test/tab/one',
    name: 'tesetrouterinfo',
    component: () => import('../views/test/TabOneView.vue'),
  },
  {
    path: '/test/tab/two',
    name: 'tesetrouterinfo',
    component: () => import('../views/test/TabTwoView.vue'),
  },
  {
    path: '/test/tab/there',
    name: 'tesetrouterinfo',
    component: () => import('../views/test/TabthereView.vue'),
  },
]

export default routers
