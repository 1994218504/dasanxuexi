<template>
  <div>
    <user-info-comp></user-info-comp>
    <div>{{ title }}</div>
    <user-info-vuex-comp @status-chang="loginChange()"></user-info-vuex-comp>
    <div v-if="userinfo.isLogin">
      {{ userinfo.tbUser }}
      <hr />
      {{ userinfo.tbUserInfo }}
      <hr />
      {{ userinfo.userOtherInfo }}
    </div>
    <el-button @click="$router.push('/message/user')">我的信息</el-button>
    <h1>留言板信息部分</h1>
    {{ page }}
    <hr />
    <div v-for="d in list" :key="d.umid">
      <span @click="toDetail(d.umid)">{{ d.title }}--{{ d.user.nickname }}</span>
    </div>
  </div>
</template>
<script>
import logger from '@/js/logger'
import UserInfoComp from '@/components/UserInfoComp.vue'
import UserInfoVuexComp from '@/components/UserInfoVuexComp.vue'
import tools from '@/js/tools'
// import tools from '../../js/tools'

let app
export default {
  components: { UserInfoComp, UserInfoVuexComp },
  name: 'MainVuew',
  data() {
    return {
      title: 'ajax测试页面',
      list: [],
      page: { pageSize: 10 },
      queryInfo: {},
    }
  },
  computed: {
    userinfo() {
      return this.$store.state.loginUser
    },
  },
  methods: {
    toDetail(umid) {
      this.$router.push('/message/detail/' + umid)
    },
    query() {
      tools.ajax('/message/queryAll', tools.concatJson(this.queryInfo, this.page), (data) => {
        this.list = data.list
        this.page = data.page
      })
    },
    loginChange() {
      logger.debug('收到登录状态改变的时间')
    },
  },
  created() {
    app = this
    logger.debug(app)
    this.query()
  },
}
</script>
