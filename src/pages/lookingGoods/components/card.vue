<template>
  <view class="card-home">
    <view class="card-top">
      <view class="card-right-top">11111</view>
      <view class="">300/趟</view>
    </view>
    <view class="information">

    </view>
    <view></view>
  </view>
</template>
<script>
export default {
  props: {
    //来源 公开 publicity 指派 assign 历史 history
    source: {
      type: String,
      default: ''
    }
  }
  
}
</script>
<style lang="scss" scoped>
.card-home{
  width:100%;
  height: 524rpx;
  border-radius: 20rpx;
  background: #FFFFFF;
  .card-top{
    width: 100%;
    height: 64rpx;
    display: flex;
    justify-content: space-between;
    .card-right-top{
      width: 363rpx;
      background: url('@/static/icon/right-top-bg.png') no-repeat;
      background-size: 100%;
    }
  }
}
</style>