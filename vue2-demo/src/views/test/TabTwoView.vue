<template>
  <div>
    <div>{{ title }}</div>
    <tabs-comp path="/test/tab/two"></tabs-comp>
  </div>
</template>
<script>
import logger from '@/js/logger'
import TabsComp from '@/components/TabsComp.vue'
let app
export default {
  name: 'TestAjaxView',
  components: { TabsComp },
  data() {
    return {
      title: 'therh页面',
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
