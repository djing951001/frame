<template>
  <view class="content">
    <text>与我相关</text>
    <view class="content-item me-fx-row-sa">
      <view
        class="content-item-list me-fx-col-c-c"
        v-for="item in list"
        :key="item.text"
        @click="$emit('func', 'RelatedToMe')"
      >
        <image :src="item.url" />
        <text>{{ item.text }}</text>
      </view>
    </view>
    <view class="grid">
      <view
        v-for="(item, index) in items"
        :class="index % 2 === 1 ? 'left' : 'right'"
        :key="item.id"
        class="grid-list me-fx-row-sb"
        @click="$emit('func', 'RelatedToMe')"
      >
        <view class="grid-list-txt me-fx-col">
          <text class="grid-list-label">{{ item.title }}</text>
          <text class="grid-list-value">{{ item.content }}</text>
        </view>
        <image :src="item.url" />
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          url: "https://css-backup-1579076150310.obs.cn-south-1.myhuaweicloud.com/image_directory/166995107358632e120.png",
          text: "安行码",
        },
        {
          url: "https://css-backup-1579076150310.obs.cn-south-1.myhuaweicloud.com/image_directory/1669951100461327685.png",
          text: "实名认证",
        },
        {
          url: "https://css-backup-1579076150310.obs.cn-south-1.myhuaweicloud.com/image_directory/16699511325195edae0.png",
          text: "关注货主",
        },
        {
          url: "https://css-backup-1579076150310.obs.cn-south-1.myhuaweicloud.com/image_directory/16699511501737e7a0a.png",
          text: "交易记录",
        },
      ],
      items: [
        {
          url: "https://css-backup-1579076150310.obs.cn-south-1.myhuaweicloud.com/image_directory/1669952524614fa7e5d.png",
          title: "集货码",
          content: "了解岗控条款",
        },
        {
          url: "https://css-backup-1579076150310.obs.cn-south-1.myhuaweicloud.com/image_directory/166995253941240f7e7.png",
          title: "异常报备",
          content: "了解岗控条款",
        },
        {
          url: "https://css-backup-1579076150310.obs.cn-south-1.myhuaweicloud.com/image_directory/1669952555981579278.png",
          title: "园区预约",
          content: "了解岗控条款",
        },
        {
          url: "https://css-backup-1579076150310.obs.cn-south-1.myhuaweicloud.com/image_directory/16699525824245a4161.png",
          title: "预约排队",
          content: "了解岗控条款",
        },
        {
          url: "https://css-backup-1579076150310.obs.cn-south-1.myhuaweicloud.com/image_directory/166995260478323fa70.png",
          title: "客户评价",
          content: "查看我的评价",
        },
        {
          url: "https://css-backup-1579076150310.obs.cn-south-1.myhuaweicloud.com/image_directory/1669952623206d57a8e.png",
          title: "油卡充值",
          content: "了解岗控条款",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
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
  &-item {
    padding: 27rpx 0 8rpx 0;
    &-list {
      > image {
        width: 70rpx;
        height: 70rpx;
      }
      > text {
        font-size: 24rpx;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 49rpx;
      }
    }
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    margin: 20rpx 0 0 0;
    &-list {
      padding: 14rpx 13rpx 28rpx 20rpx;
      background: #f6f7f9;
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
        width: 70rpx;
        height: 70rpx;
      }
    }
  }
}
</style>
