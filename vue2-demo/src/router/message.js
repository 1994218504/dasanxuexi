let routers = [
  {
    path: '/message',
    name: 'message',
    component: () => import('../views/message/HomeView.vue'),
  },
  {
    path: '/message/main',
    name: 'messagemain',
    component: () => import('../views/message/MainView.vue'),
  },
  {
    path: '/message/user',
    name: 'messageuser',
    component: () => import('../views/message/UserView.vue'),
  },
  {
    path: '/message/detail/:umid',
    name: 'messageuserumid',
    component: () => import('../views/message/DetailView.vue'),
  },
]
export default routers
