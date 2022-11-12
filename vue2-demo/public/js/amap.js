AMapLoader.load({
  key: '3157122a4a9dd5a59f707ddc73b0ca80', // 申请好的Web端开发者Key，首次调用 load 时必填
  version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
  plugins: ['AMap.Marker', 'AMap.Geolocation', 'AMap.ToolBar', 'AMap.Scale', 'AMap.MapType'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
})
  .then((AMap) => {
    let map = new AMap.Map('map-container', {
      zoom: 18,
      center: [111.671411, 29.045132],
    })
    // 标记
    let marker = new AMap.Marker({
      title: '第二办公楼',
      position: [111.671411, 29.045132], // 基点位置
    })
    map.add(marker)
    // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
    map.addControl(
      new AMap.ToolBar({
        position: 'LT',
      })
    )

    // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
    map.addControl(
      new AMap.Scale({
        position: 'RT',
      })
    )
    // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
    map.addControl(new AMap.MapType());
    // 定位
    let geolocation = new AMap.Geolocation({
      // 是否使用高精度定位，默认：true
      enableHighAccuracy: true,
      // 设置定位超时时间，默认：无穷大
      timeout: 10000,
      // 定位按钮的停靠位置的偏移量
      offset: [10, 20],
      //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      zoomToAccuracy: true,
      //  定位按钮的排放位置,  RB表示右下
      position: 'RB',
    })
    map.addControl(geolocation)
    // 启动定位
    geolocation.getCurrentPosition((status, result) => {
      console.log('定位结果', status, result)
      if (status == 'complete') {
        // onComplete(result)
        console.log('位置信息：', result.position)
        map.setCenter(result.position)
        map.add(
          new AMap.Marker({
            position: [111.671411, 29.045132], // 基点位置
            title: '当前位置',
          })
        )
      } else {
        // onError(result)
        console.log('定位失败：', JSON.stringify(result))
      }
    })
  })
  .catch((e) => {
    console.log(e)
  })
