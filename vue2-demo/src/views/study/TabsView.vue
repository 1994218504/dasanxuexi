<template>
  <div>
    <div> {{ title }}</div>
    <div>
      {{ tab }}
    </div>
    <div style="font-size: 2rem; padding: 1rem">
      <div v-if="tab.id == 1">第一个区域</div>
      <div v-if="tab.id == 2">黑暗骑士</div>
      <div v-if="tab.id == 3">DarkKnight</div>
    </div>

    <div>
      <span v-for="d in tabs" :key="d.id" @click="tab = d">
        <span :class="{ active: d.id == tab.id }">{{ d.text }} </span>
      </span>
    </div>
  </div>
</template>

<script>
import logger from '@/js/logger'
let app
export default {
  name: 'TabView',
  data() {
    return {
      title: 'tab切换效果',
      tabs: [
        { id: 1, text: '首页' },
        { id: 2, text: '关于' },
        { id: 3, text: '我' },
      ],
      tab: {},
    }
  },
  created() {
    app = this
    logger.debug(app.title)
    // 默认选中第一项
    app.tab = app.tabs[0]
  },
}
</script>
<style scoped>
.active {
  color: #ff0000;
}
</style>
