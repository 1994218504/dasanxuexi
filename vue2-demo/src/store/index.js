import logger from '@/js/logger'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const LOCAL_USER_KEY = 'vue-total-2004-userinfo'
// 本地用户信息储存服务
const USER_SERVICE = {
  saveUser(userinfo) {
    localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(userinfo))
  },
  loadUser() {
    let userinfo = localStorage.getItem(LOCAL_USER_KEY)
    if (userinfo) {
      return JSON.parse(userinfo)
    }
    return {
      isLogin: false,
      tbUser: {},
      tbUserInfo: {},
      userOtherInfo: {},
    }
  },
}

export default new Vuex.Store({
  state: {
    count: 0,
    // loginUser: USER_SERVICE.loadUser(),
  },
  getters: {},
  mutations: {
    addCount(state) {
      state.count++
    },
  },
  actions: {
    updataCount({ commit }) {
      let pro = new Promise((resolve, reject) => {
        logger.debug(resolve, reject)
        setTimeout(() => {
          commit('addCount')
          resolve()
        }, 2000)
      })

      return pro
    },
  },
  modules: {},
})
