<template>
  <div>
    <div>{{ title }}</div>
  </div>
</template>
<script>
import logger from '@/js/logger'
// import tools from "../../js/tools";
let app
export default {
  name: 'Error404View',
  data() {
    return {
      title: '页面走丢了',
    }
  },
  methods: {},
  created() {
    app = this
    logger.debug(app)
  },
}
</script>
<style scoped></style>
