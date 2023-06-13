<template>
  <view :style="{ paddingTop: statusBarHeight + 'px' }" class="home-box">
    <HeaderNew/>
    首页
    <view @click="isUserLogin">点击判断是否登录</view>
  </view>
</template>
<script>
import HeaderNew from '../../components/headerNew'
export default {
  components:{HeaderNew},
  data() {
    return {
      statusBarHeight: uni.getStorageSync("statusBarHeight")
    }
  },
  methods: {
    isUserLogin() {
      // if()
    }
  },
  //切换tab 时触发生命周期
  onTabItemTap : function(e) {
    
  },
}
</script>
<style lang="scss" scoped>
.home-box{
  background-image: url('https://css-backup-1579076150310.obs.cn-south-1.myhuaweicloud.com/image_directory/166980736020951b089.png');
  background-repeat:no-repeat;
  background-size: 100%;
}
</style>