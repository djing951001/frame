<template>
  <view :style="{ paddingTop: statusBarHeight + 'px' }" class="background-box">
    <HeaderNew :isBack="false" :isScan="false" isHeaderTitle="货源大厅"/>
    <view class="card">
      <card/>
    </view>
  </view>
</template>
<script>
import HeaderNew from '../../components/headerNew'
import card from './components/card.vue'
import { pageMixin } from '@/common/utils/mixins'
export default {
  components:{ HeaderNew, card},
  mixins:[pageMixin],
  data() {
    return {
      statusBarHeight: uni.getStorageSync("statusBarHeight"),
      selected: 0
    }
  },
  //切换tab 时触发生命周期
  onTabItemTap : function(e) {

  },
  onShow() {
    if (typeof this.$mp.page.getTabBar === "function" && this.$mp.page.getTabBar()) {
      this.$mp.page.getTabBar().setData({
        selected: 0,
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
.card{
  padding: 0 32rpx;
}
</style>