<template>
  <div>
    <div>{{ title }}</div>
    <hr />
    <input type="text" v-model="info" placeholder="路由参数" />
    <input type="text" v-model="qs" placeholder="查询字符串" />
    <input type="text" v-model="hash" placeholder="hash" />
    <el-button @click="toInfo">提交</el-button>
  </div>
</template>
<script>
import logger from '@/js/logger'
// import tools from "../../js/tools";
let app
export default {
  name: 'RouterView',
  data() {
    return {
      title: '路由参数提交页面',
      info: '',
      qs: '',
      hash: '',
    }
  },
  methods: {
    toInfo() {
      // /test/routerinfo/:info
      this.$router.push({
        path: '/test/routerinfo/' + encodeURIComponent(this.info),
        query: {
          info: this.qs,
          // query不可以二级JSON
          // page: { pageNumber: 1 }
          'page.pageNumber': 1,
        },
        hash: this.hash,
      })
    },
  },
  created() {
    app = this
    logger.debug(app.title)
  },
}
</script>
<style scoped></style>
