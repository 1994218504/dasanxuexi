<template>
  <div>
    <div>{{ title }}</div>
    <div>路由参数：{{ info }}</div>
    <div>查询字符串：{{ qs }}</div>
    <div>hash：{{ hash }}</div>
  </div>
</template>
<script>
import logger from '@/js/logger'
// import tools from "../../js/tools";
let app
export default {
  name: 'RouterInfoView',
  data() {
    return {
      title: '路由参数显示页面',
      info: '',
      qs: {},
      hash: '',
    }
  },
  methods: {},
  created() {
    app = this
    logger.debug(app.title)
    // 获取路由参数/test/routerinfo/:info
    this.info = decodeURIComponent(this.$route.params.info)
    this.qs = this.$route.query
    this.hash = decodeURIComponent(this.$route.hash)
    if (decodeURIComponent(this.$route.hash)) {
      let dsaofihnk = true
      logger.debug('chakanhashzhi', dsaofihnk)
    } else {
      let dsaofihnk = false
      logger.debug('chakanhashzhi', dsaofihnk)
    }
    // 没有vue也可以获取到信息
    logger.debug(location.href)
    logger.debug(location.pathname, location.protocol)
    logger.debug(location.search)
    logger.debug(location)
    // js的地址栏解码
    let info = '黑暗骑士 DarK Knight ?:'
    logger.debug(encodeURIComponent(info))
    logger.debug(decodeURIComponent(encodeURIComponent(info)))
  },
}
</script>
<style scoped></style>
