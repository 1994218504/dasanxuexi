<template>
  <div>
    <div>{{ title }}</div>
    <tabs-comp path="/test/tab/one"></tabs-comp>
  </div>
</template>
<script>
import logger from '@/js/logger'
import TabsComp from '@/components/TabsComp.vue'
// import tools from "../../js/tools";
let app
export default {
  components: { TabsComp },
  name: 'TestAjaxView',
  data() {
    return {
      title: 'one页面',
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
