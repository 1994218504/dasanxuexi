<template>
  <div>
    <div>{{ title }}</div>
    <div>{{ now | formatDate('hh:mm:ss') }}</div>
  </div>
</template>
<script>
import logger from '@/js/logger'
// import tools from "../../js/tools";
let app
let timer
export default {
  name: 'PageView',
  data() {
    return {
      title: '分页组件演示',
      now: new Date(),
    }
  },
  methods: {},
  created() {
    app = this
    logger.debug(app)
    this.$logger.debug(this.title, this.$md5('abcd'))
    timer = setInterval(() => {
      this.now = new Date()
    }, 1000)
  },
  destroyed() {
    if (timer) {
      clearInterval(timer)
    }
  },
}
</script>
<style scoped></style>
