<template>
  <view :style="{ paddingTop: statusBarHeight + 'px' }" class="background-box">
    <HeaderNew :isBack="false" :isScan="false" isHeaderTitle="运单跟踪"/>
    <view class="runGoods-box">
      <view class="current-box">
        <wxAmap/>
      </view>
    </view>
  </view>
</template>
<script>
import HeaderNew from '../../components/headerNew'
import wxAmap from './components/wxAmap.vue'
export default {
  components:{HeaderNew , wxAmap},
  data() {
    return {
      statusBarHeight: uni.getStorageSync("statusBarHeight")
    }
  },
  //切换tab 时触发生命周期
  onTabItemTap : function(e) {

  },
  onShow() {
    if (typeof this.$mp.page.getTabBar === "function" && this.$mp.page.getTabBar()) {
      this.$mp.page.getTabBar().setData({
        selected: 1,
      });
    }
  },
  methods:{

  }
}
</script>
<style lang="scss" scoped>
.background-box{
  min-height: calc(100vh - 200rpx) ;
  background: url('https://css-backup-1579076150310.obs.cn-south-1.myhuaweicloud.com/image_directory/166980736020951b089.png') no-repeat;
  background-size: 100%;
}
.runGoods-box{
  padding: 0 32rpx;
}
.current-box{
  height: 460rpx;
  padding: 12rpx;
  border: 2px solid #ffffff;
  border-radius: 20rpx;
  margin-top: 12rpx;
  background: rgba($color: #CEDDFC, $alpha: 0.7);
}
</style>