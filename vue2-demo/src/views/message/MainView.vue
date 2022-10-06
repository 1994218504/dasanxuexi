<template>
  <div>
    <div>{{ title }}</div>
    <user-info-comp></user-info-comp>
  </div>
</template>
<script>
import logger from '@/js/logger'
import UserInfoComp from '@/components/UserInfoComp.vue'
// import tools from '../../js/tools'

let app
export default {
  components: { UserInfoComp },
  name: 'MainVuew',
  data() {
    return {
      title: 'ajax测试页面',
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
