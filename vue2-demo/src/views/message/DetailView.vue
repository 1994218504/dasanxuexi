<template>
  <div>
    <div>{{ title }}</div>
    <hr />
    {{ info.title }}
    <hr />
    <div v-html="info.info">
      {{ info.info }}
    </div>
    <hr />
    {{ list }}
  </div>
</template>
<script>
import logger from '@/js/logger'
import tools from '@/js/tools'
// import tools from "../../js/tools";
let app
export default {
  name: 'DetailView.vue',
  data() {
    return {
      title: '帖子详情',
      queryInfo: {
        orderBy: 1,
        umid: -1,
      },
      list: [],
      info: {},
      page: { pageSize: 5 },
    }
  },
  methods: {
    queryDetail() {
      tools.ajax('/message/queryDetail', tools.concatJson(this.queryInfo, this.page), (data) => {
        this.list = data.list
        this.page = data.page
        this.info = data.info
      })
    },
  },
  created() {
    app = this
    logger.debug(app)
    this.queryInfo.umid = this.$route.params.umid
    if (this.queryInfo.umid) {
      this.queryDetail()
    }
  },
}
</script>
<style scoped></style>
