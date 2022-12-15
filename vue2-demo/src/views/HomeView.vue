<template>
  <div>
    首页
    <a v-for="p in pages" :key="p.path" @click="toPage(p.path)" href="javascript:void(0)">{{ p.title }}</a>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      pages: [
        { title: '关于', path: '/about' },
        { title: '留言板首页', path: '/message/main' },
        { title: 'websocket测试', path: '/test/ws' },
        { title: '登录界面', path: '/user/login' },
        { title: '地址栏传信息', path: '/test/router' },
        { title: '分页组件演示', path: '/study/page' },
        { title: '利用组件演示信息管理', path: '/study/vuex' },
        { title: 'vuex管理用户登录信息', path: '/study/vuexother' },
        { title: '未知', path: '/message' },
        { title: '未知', path: '/message/user' },
        { title: '头像', path: '/test/logo' },
        { title: '页面跳转', path: '/study/tabe' },
        { title: '2004页面跳转', path: '/test/tab' },
        { title: '2004页面跳转one', path: '/test/tab/one' },
        { title: '2004页面跳转two', path: '/test/tab/two' },
        { title: '2004页面跳转there', path: '/test/tab/there' },
      ],
    }
  },
  methods: {
    toAbout() {
      //编程式路由跳转
      this.$router.push('/about')
    },
    toPage(page) {
      this.$router.push(page)
    },
  },
}
</script>
<style scoped>
a {
  display: inline-block;
  margin: 0.5rem;
}
a:not(:last-child)::after {
  content: '  |  ';
  display: inline-block;
  margin: 0.2rem;
}
.divspan {
  flex-flow: column;
  white-space: nowrap;
}
</style>
