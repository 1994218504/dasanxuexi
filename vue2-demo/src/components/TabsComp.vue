<template>
  <div>
    <div v-for="d in tabs" :key="d.path" class="emnu">
      <span :class="{ active: paths == d.path }" @click="changeTab(d)">{{ d.title }}</span>
    </div>
  </div>
</template>
<script>
// 还有一个解决方法，可以避免多个页面而要使用统一布局
// 布局和菜单切换写成模板页
// 内容通过tab值来加载不同组件显示
// /stydy/abc/:tab
// /styde/abc/index
export default {
  name: 'TabsComp',
  props: {
    path: {
      default() {
        return ''
      },
    },
  },
  data() {
    return {
      tabs: [
        { path: '/test/tab/one', title: '首页' },
        { path: '/test/tab/two', title: '关于' },
        { path: '/test/tab/there', title: '人才' },
      ],
      paths: '',
    }
  },
  methods: {
    changeTab(tab) {
      this.$router.push(tab.path)
    },
  },
  created() {
    console.log('==========props', this.path)
    console.log('=----------------->', this.$route.path == this.tabs[0].path)
    this.paths = this.$route.path
    // this.$router.push(this.path)
  },
}
</script>
<style scoped>
.emnu {
  display: inline-block;
  margin: 1rem;
  padding: 1rem;
  border-bottom: 1px solid transparent;
}
.emnu span:not(:last-of-type)::after {
  content: '|';
  display: inline-block;
  margin: 0 1rem;
  color: #dcdcdc;
}
.emnu:hover {
  border-color: #f00;
}
.active {
  color: #f00;
}
</style>
