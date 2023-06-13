<template>
  <view class="content">
    <view class="content-title">
      <text>运单中心</text>
      <view class="content-more" @click="$emit('func', 'WaybillCenter')">
        <text>更多</text>
        <uni-icons type="right" size="16" color="#999999"></uni-icons>
      </view>
    </view>
    <view class="grid">
      <view @click="$emit('func', 'WaybillCenter')"
        v-for="item in list"
        :key="item.text"
        class="WaybillCenterList"
      >
        <image :src="item.url" />
        <text>{{ item.text }}</text>
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
          url: "https://css-backup-1579076150310.obs.cn-south-1.myhuaweicloud.com/image_directory/16699481702887508db.png",
          text: "已接单",
        },
        {
          url: "https://css-backup-1579076150310.obs.cn-south-1.myhuaweicloud.com/image_directory/166994819419356bedd.png",
          text: "已装货",
        },
        {
          url: "https://css-backup-1579076150310.obs.cn-south-1.myhuaweicloud.com/image_directory/1669948219376f30ed7.png",
          text: "已卸货",
        },
        {
          url: "https://css-backup-1579076150310.obs.cn-south-1.myhuaweicloud.com/image_directory/1669948243108a4295e.png",
          text: "已复核",
        },
        {
          url: "https://css-backup-1579076150310.obs.cn-south-1.myhuaweicloud.com/image_directory/1669948265679196e47.png",
          text: "已申请",
        },
        {
          url: "https://css-backup-1579076150310.obs.cn-south-1.myhuaweicloud.com/image_directory/1669948290693c50f99.png",
          text: "已打款",
        },
        {
          url: "https://css-backup-1579076150310.obs.cn-south-1.myhuaweicloud.com/image_directory/1669948309640c2357f.png",
          text: "已完成",
        },
        {
          url: "https://css-backup-1579076150310.obs.cn-south-1.myhuaweicloud.com/image_directory/16699483308029b5713.png",
          text: "已取消",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin: 0 32rpx;
  padding: 0 28rpx;
  background: #fff;
  border-radius: 20rpx;
  &-title {
    padding-top: 18rpx;
    display: flex;
    justify-content: space-between;
    > text {
      font-size: 28rpx;
      font-family: PingFang SC-Bold, PingFang SC;
      font-weight: bold;
      color: #333333;
    }
  }
  &-more {
    display: flex;
    > text {
      font-size: 24rpx;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
      line-height: 49rpx;
      margin-right: 5rpx;
    }
  }
  .grid {
    margin-top: 22rpx;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
    .WaybillCenterList {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 30rpx;
      > image {
        width: 58rpx;
        height: 58rpx;
      }
      > text {
        margin-top: 10rpx;
        font-size: 24rpx;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 49rpx;
      }
    }
  }
}
</style>
