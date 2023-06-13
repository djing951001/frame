<template>
  <view class="map-box">
    <map id="navi_map" :longitude="longitude" :latitude="latitude" :scale="scale" :markers="markers" :polyline="polyline"></map>
  </view>
</template>
<script>
  const amapFile = require('@/common/utils/amap-wx.130.js')
  const myAmapFun = new amapFile.AMapWX({
    key: process.env.VUE_APP_BASE_KEY_WXMAP
  });
  export default {
    props: {
      //当前地图中心店位置经度  （必传）
      longitude: {
        type: String,
        default: ''
      },
      //当前地图中心点位置纬度 （必传）
      latitude: {
        type: String,
        default: ''
      },
      //开始经纬度 （不传将不出现路线）
      //119.514182,26.052922
      origin: {
        type: String,
        default: ''
      },
      //结束经纬度（不传将不出现路线）
      // 119.915162,26.653822
      destination: {
        type: String,
        default: ''
      },
      //点标记 可以用于当前位置 & 开始结束 位置的标记
      //示例
      // markers: [
      //     {
      //       iconPath: '@/......',
      //       id: 0,
      //       latitude: 26.052922,
      //       longitude: 119.514182,
      //       width: 20,
      //       height: 30
      //     }]
      markers: {
        type: Array,
        default: []
      },
      //地图缩放比例
      scale: {
        type: Number,
        default: 8
      }
    },
    data() {
      return {
          polyline: []
      };
    },
    methods: {
      onMap() {
        let that = this
          console.log('000', myAmapFun)
          myAmapFun.getDrivingRoute({
            origin: this.origin,
            destination: this.destination,
            success: function (data) {
              console.log(data, '00000')
              var points = [];
              if (data.paths && data.paths[0] && data.paths[0].steps) {
                var steps = data.paths[0].steps;
                for (var i = 0; i < steps.length; i++) {
                  var poLen = steps[i].polyline.split(';');
                  for (var j = 0; j < poLen.length; j++) {
                    points.push({
                      longitude: parseFloat(poLen[j].split(',')[0]),
                      latitude: parseFloat(poLen[j].split(',')[1])
                    })
                  }
                }
              }
              that.$nextTick(() => {
                that.polyline= [{
                  points: points,
                  color: "#3959F8",
                  width: 5
                }]
              })
              that.isShow = true
            },
            fail: function (info) {}
          })
        }
    },
    created() {
      this.onMap()
    },
    onLoad(options) {}
  }
</script>
<style lang="scss" scoped>
.map-box{
  width: 100%;
  height: 100%;
}
#navi_map{
  width: 100% !important;
  height: 100% !important;
}
map{
  width: 100% !important;
  height: 100% !important;
  border-radius: 20rpx;
}
</style>