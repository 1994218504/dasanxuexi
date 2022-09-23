<template>
  <div>
    首页
    <a @click="toAbout()" href="javascript:viod(0)">关于</a>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    toAbout() {
      //编程式路由跳转
      this.$router.push('/about')
    },
  },
}
</script>
