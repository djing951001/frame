<template>
  <view class="content">
    <text>其他相关</text>
    <view class="me-fx-row-sb">
      <view class="grid-list me-fx-row-sb" @click="$emit('func', 'OtherRelated')">
        <view class="grid-list-txt me-fx-col">
          <text class="grid-list-label">评价与反馈</text>
          <text class="grid-list-value">意见反馈</text>
        </view>
        <image
          src="https://css-backup-1579076150310.obs.cn-south-1.myhuaweicloud.com/image_directory/166996728076164a2a0.png"
        />
      </view>
      <view class="grid-list me-fx-row-sb" @click="toPhone">
        <view class="grid-list-txt me-fx-col">
          <text class="grid-list-label">客服热线</text>
          <text class="grid-list-value">400-500-5689</text>
        </view>
        <image
          src="https://css-backup-1579076150310.obs.cn-south-1.myhuaweicloud.com/image_directory/16699672452268251a0.png"
        />
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    toPhone() {
      uni.makePhoneCall({
        phoneNumber: "400-500-5689", //仅为示例
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin: 0 32rpx;
  padding: 18rpx 28rpx 13rpx 28rpx;
  margin-top: 20rpx;
  background: #fff;
  border-radius: 20rpx;
  > text {
    font-size: 28rpx;
    font-family: PingFang SC-Bold, PingFang SC;
    font-weight: bold;
    color: #333333;
  }
  .grid-list {
    padding: 14rpx 14rpx 28rpx 20rpx;
    background: #f6f7f9;
    border-radius: 8rpx;
    margin-bottom: 20rpx;
    width: 43%;
    margin-top: 12rpx;
    &-txt {
      margin-top: 10rpx;
    }
    &-label {
      font-size: 28rpx;
      font-family: PingFang SC-Bold, PingFang SC;
      font-weight: bold;
      color: #333333;
      line-height: 49rpx;
    }
    &-value {
      font-size: 24rpx;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
      line-height: 49rpx;
    }
    > image {
      width: 70rpx;
      height: 70rpx;
    }
  }
}
</style>
