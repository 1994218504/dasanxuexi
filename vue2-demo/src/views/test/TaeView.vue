<template>
  <div>
    <div>{{ title }}</div>
    <div v-if="tab == 1">1111</div>
    <div v-if="tab == 2">2222</div>
    <div v-if="tab == 3">4</div>
    <div class="emnu" v-for="d in tabs" :key="d.id" :class="{ active: tab == d.id }">
      <span @click="clicktabs(d.id)">
        {{ d.title }}
      </span>
    </div>
  </div>
</template>
<script>
import logger from '@/js/logger'
// import tools from "../../js/tools";
let app
export default {
  name: 'TestAjaxView',
  data() {
    return {
      title: 'ajax测试页面',
      tabs: [
        {
          id: 1,
          title: '首页',
        },
        {
          id: 2,
          title: '关于',
        },
        {
          id: 3,
          title: '人才',
        },
      ],
      tab: 1,
    }
  },
  methods: {
    clicktabs(tabs) {
      this.tab = tabs
    },
  },
  created() {
    app = this
    logger.debug(app)
  },
}
</script>
<style scoped>
.emnu {
  display: inline-block;
  margin: 1rem;
  border-bottom: 1px solid transparent;
}
.emnu:hover,
.active {
  border-color: #f00;
}
</style>
