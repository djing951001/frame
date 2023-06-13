<template>
  <view class="content">
    <text>条款须知</text>
    <view class="grid">
      <view
        v-for="(item, index) in items"
        :class="{ left: index % 2 === 1, right: index % 2 !== 1, top: index > 1 }"
        :key="item.title"
        class="grid-list me-fx-row-sb"
        @click="$emit('func', 'TermsNeedToKnow')"
      >
        <view class="grid-list-txt me-fx-col">
          <text class="grid-list-label">{{ item.title }}</text>
          <text class="grid-list-value">{{ item.content }}</text>
        </view>
        <image :class="index > 1 ? 'img' : ''" :src="item.url" />
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          url: "https://css-backup-1579076150310.obs.cn-south-1.myhuaweicloud.com/image_directory/166996385184920a603.png",
          title: "司机服务须知",
          content: "了解司机合规服务须知",
        },
        {
          url: "https://css-backup-1579076150310.obs.cn-south-1.myhuaweicloud.com/image_directory/1669963873889ebd0ab.png",
          title: "司机接单条款",
          content: "了解司机接单条款信息",
        },
        {
          url: "https://css-backup-1579076150310.obs.cn-south-1.myhuaweicloud.com/image_directory/1669963896285681c95.png",
          title: "常见问题",
          content: "了解产品常见FAQ",
        },
        {
          url: "https://css-backup-1579076150310.obs.cn-south-1.myhuaweicloud.com/image_directory/1669963917398436968.png",
          title: "商学院",
          content: "线上司机学习中心",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.top {
  margin-top: 41rpx;
}
.right {
  margin-right: 10rpx;
}
.left {
  margin-left: 10rpx;
}
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
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    // grid-template-rows: repeat(2, 1fr);
    margin-top: 18rpx;
    &-list {
      position: relative;
      padding: 24rpx 13rpx 28rpx 20rpx;
      background: #e8f7ff;
      border-radius: 8rpx;
      margin-bottom: 20rpx;
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
        position: absolute;
        width: 88rpx;
        height: 88rpx;
        top: -22rpx;
        right: 15rpx;
      }
      .img {
        width: 130rpx;
        height: 130rpx;
        top: -42rpx;
        right: 0;
      }
    }
  }
}
</style>
