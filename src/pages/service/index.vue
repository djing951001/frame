<template>
  <view :style="{ paddingTop: statusBarHeight + 'px' }">
    营运
  </view>
</template>
<script>

export default {
  data() {
    return {
      statusBarHeight: uni.getStorageSync("statusBarHeight")
    }
  },
  onShow() {
    if (typeof this.$mp.page.getTabBar === "function" && this.$mp.page.getTabBar()) {
      this.$mp.page.getTabBar().setData({
        selected: 3,
      });
    }
  },
  //切换tab 时触发生命周期
  onTabItemTap : function(e) {

  },
}
</script>