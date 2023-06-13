<template>
  <view class="content">
    <view class="content-title">
      <image :src="avatar"></image>
      <view class="content-item">
        <view class="content-item-title" @click="$emit('func', 'care')">
          <view class="content-item-title-left">
            <text>{{ login ? driver : "登录/注册" }}</text>
            <view class="grade" v-if="login">
              <image
                src="https://css-backup-1579076150310.obs.cn-south-1.myhuaweicloud.com/image_directory/1669886587052249ae1.png"
              >
              </image>
              <view class="grade-txt">lv{{ grade }}</view>
            </view>
          </view>
          <uni-icons type="right" size="16" color="#fff"></uni-icons>
        </view>
        <view class="content-item-txt">{{
          login ? `已加入${day}天，完成${second}次运输，总里程${mileage}km` : "点击登录/注册账号"
        }}</view>
      </view>
    </view>
    <view class="content-footer">
      <view class="content-footer-left" @click="$emit('func', 'care')">
        <view class="content-footer-left-txt">
          <text>累计收益(元)</text>
          <uni-icons type="right" size="16" color="#fff"></uni-icons>
        </view>
        <text>{{ login ? (eye ? accumulatedIncome : "***") : "--" }}</text>
      </view>
      <view class="content-footer-right" @click="$emit('func', 'care')">
        <view class="content-footer-left-txt">
          <text>账户余额(元)</text>
          <uni-icons type="right" size="16" color="#fff"></uni-icons>
        </view>
        <text>{{ login ? (eye ? accountBalance : "***") : "--" }}</text>
      </view>
      <view v-if="login">
        <uni-icons
          class="eye"
          v-if="!eye"
          type="eye-filled"
          size="20"
          color="#fff"
          @click="eye = !eye"
        ></uni-icons>
        <uni-icons
          class="eye"
          v-else
          type="eye-slash-filled"
          size="20"
          color="#fff"
          @click="eye = !eye"
        ></uni-icons>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    login: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
      default:
        "https://css-backup-1579076150310.obs.cn-south-1.myhuaweicloud.com/image_directory/16700319816204042f2.png",
    },
    driver: {
      type: String,
      default: "***",
    },
    grade: {
      type: String | Number,
      default: "1",
    },
    day: {
      type: String | Number,
      default: 0,
    },
    second: {
      type: String | Number,
      default: 0,
    },
    mileage: {
      type: String | Number,
      default: 0,
    },
    accumulatedIncome: {
      type: String | Number,
      default: "0.00",
    },
    accountBalance: {
      type: String | Number,
      default: "0.00",
    },
  },
  data() {
    return {
      eye: false,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.content {
  margin: 30rpx 32rpx 20rpx 32rpx;
  background: linear-gradient(135deg, #1b40f3 0%, #73b9f7 100%);
  border-radius: 20rpx;
  &-title {
    display: flex;
    padding: 39rpx 28rpx 30rpx 30rpx;
    > image {
      width: 90rpx;
      height: 90rpx;
      border-radius: 50%;
      background: #fff;
      flex: 0 0 auto;
    }
  }
  &-item {
    display: flex;
    flex-direction: column;
    margin-left: 23rpx;
    width: 100%;
    &-title {
      display: flex;
      justify-content: space-between;
      width: 100%;
      &-left {
        display: flex;
        > text {
          font-size: 36rpx;
          font-family: PingFang SC-Bold, PingFang SC;
          font-weight: bold;
          color: #ffffff;
          line-height: 49rpx;
        }
        .grade {
          position: relative;
          margin-left: 9rpx;
          display: flex;
          align-items: center;
          z-index: 10;
          > image {
            width: 96rpx;
            height: 34rpx;
          }
          &-txt {
            position: absolute;
            z-index: 11;
            left: 42rpx;
            top: 0;
            font-size: 20rpx;
            font-family: PingFang SC-Bold, PingFang SC;
            font-weight: bold;
            color: #1d375f;
            line-height: 49rpx;
          }
        }
      }
    }
    &-txt {
      font-size: 24rpx;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: 49rpx;
    }
  }
  &-footer {
    padding: 30rpx 0;
    // background: linear-gradient(135deg, rgba(27, 64, 243, 0.8) 0%, rgba(115, 185, 247, 0.8) 100%);
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0px 0px 20rpx 20rpx;
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    font-size: 50rpx;
    font-family: Bahnschrift-Regular, Bahnschrift;
    font-weight: 400;
    color: #ffffff;
    line-height: 49rpx;
    &-left {
      border-right: 1rpx #fff solid;
      width: 50%;
      padding-left: 40rpx;
      &-txt {
        display: flex;
        > text {
          font-size: 24rpx;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          line-height: 49rpx;
          margin-right: 14rpx;
        }
      }
    }
    &-right {
      padding-left: 50rpx;
      width: 50%;
    }
    .eye {
      position: absolute;
      z-index: 10;
      right: 20rpx;
      top: 10rpx;
    }
  }
}
</style>
