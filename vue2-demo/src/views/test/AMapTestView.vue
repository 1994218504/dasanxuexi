<template>
  <div>
    <div>{{ title }}</div>
    <map-container-comp></map-container-comp>
  </div>
</template>
<script>
import logger from '@/js/logger'
import MapContainerComp from '@/components/MapContainerComp.vue'
// import tools from "../../js/tools";
let app
export default {
  name: 'AmapTest',
  components: { MapContainerComp },
  data() {
    return {
      title: '测试定位city通过接口获取天气',
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
