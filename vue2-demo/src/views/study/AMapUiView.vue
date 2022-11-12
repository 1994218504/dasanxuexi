<template>
  <div class="container">
    <div>
      <div>{{ title }}-{{ info }}</div>
      <div id="map-container">
        <iframe :src="locatorUrl" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>
<script>
import logger from '@/js/logger'
export default {
  name: 'AMapUiView',
  data() {
    return {
      title: '高德地图拖拽演示',
      info: {},
      locatorUrl: '',
    }
  },
  methods: {
    loctorInfo(event) {
      logger.debug('拖拽定位信息', event)
    },
  },
  mounted() {
    window.addEventListener('message', this.loctorInfo)
  },
  destroyed() {
    window.removeEventListener('message', this.loctorInfo)
  },
  created() {
    this.locatorUrl = 'https://m.amap.com/picker/?zoom=16&center=111.671411, 29.045132&key=3157122a4a9dd5a59f707ddc73b0ca80;'
  },
}
</script>
<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

#map-container {
  width: 100vw;
  height: 100vh;
  /* flex: 1; */
}
#map-container iframe {
  width: 100vw;
  height: 100vh;
}
</style>
