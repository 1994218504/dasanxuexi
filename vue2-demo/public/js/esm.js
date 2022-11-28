import Vue from './vue.esm.min.js'
import tools from './tools.js'
import QueryString from './qs.min.js'

console.log(tools.info)
tools.test('模块化js很好用，页面不用导入js文件')

new Vue({
  el: '#app',
  data() {
    return {
      title: '黑暗骑士',
    }
  },
})

console.log(QueryString.stringify({ info: 'dd' }))

