<template>
  <view>
    <view v-if="isFixation" style="height: 80rpx;"></view>
    <view class="header-box" :class="{fixation: isFixation}"
      :style="{ paddingTop: `${isFixation ? statusBarHeight : 0}px`, background: headerBackground}">
      <view class="map-box">
        <view>
          <uni-icons type="back" size="20" class="back-icon" v-if="isBack" @click="onBack"></uni-icons>
        </view>
        <view class="header-title" v-if="isHeader">
          {{ isHeaderTitle }} 
        </view>
        <!-- <view class="icon-bottom">
          <image
            class="image"
            :src="require('@/static/icon/icon-bottom.png')"
            mode="scaleToFill"
          />
        </view> -->
      </view>
      <view class="functionality" :style="{ marginRight: `${environment == 'wx' ? '230rpx' : '32rpx'}`}">
        <view class="chat" v-if="isChat">
          <image @click="onChat" class="image" :src="require('@/static/icon/icon-chat.png')"
            mode="scaleToFill" />
        </view>
        <view class="scan" v-if="isScan">
          <image @click="onScan" class="image" :src="require('@/static/icon/icon-scan.png')"
            mode="scaleToFill" />
        </view>
        <view class="gear" v-if="isGear">
          <uni-icons @click="onGear" type="gear" size="21"></uni-icons>
        </view>
        <view class="home" v-if="isHome">
          <uni-icons @click="onHeaderHome" type="home-filled" size="21"></uni-icons>
        </view>
      </view>
    </view>
  </view>

</template>
<script>
  export default {
    props: {
      /**
       * 是否显示消息
       */
      isChat: {
        type: Boolean,
        default: true
      },
      /**
       * 是否显示标题
       */
       isHeader: {
        type: Boolean,
        default: true
       },
       //是否显示返回首页
       isHome: {
        type: Boolean,
        default: true
       },
       //特殊标记页面配合返回首页
       sourcePath: {
        type: String,
        default: 'home'
       },
      /**
       * 设置当前herder title
       * 
       */
      isHeaderTitle: {
        type: String,
        default: ''
      },
      /**
       * 是否需要返回按钮
       */
      isBack: {
        type: Boolean,
        default: true
      },
      /**
       * 是否需要固定在头部
       */
      isFixation: {
        type: Boolean,
        default: true
      },
      /**
       * 是否显示扫码
       */
      isScan: {
        type: Boolean,
        default: false
      },
      /**
       * 设置
       */
       isGear: {
        type: Boolean,
        default: false
       },
       pathGear: {
        type: String,
        default: '',
       }
    },
    data() {
      return {
        statusBarHeight: uni.getStorageSync("statusBarHeight"),
        currentPosition: uni.getStorageSync("currentPosition"),
        environment: uni.useGetPlat(),
        headerBackground: 'transparent',
        scrollTop: 0,
      };
    },
    watch: {
      scrollTop: function () {
        this.handleScroll()
      }
    },
    mounted() {
      var that = this;
      uni.$on('onPageScroll', function (data) { //接收参数
        that.scrollTop = data
      });
    },
    created() {},
    methods: {
      handleScroll() {
        if (this.scrollTop > 10) {
          this.headerBackground = `rgba(255, 255, 255,${this.scrollTop / 100})`;
        } else if (this.scrollTop == 0) {
          this.headerBackground = "transparent";
        }
      },
      onGear() {
        if(this.pathGear) {
          uni.navigateTo({
            url: this.pathGear
          })
        }
      },
      onHeaderHome() {
        if(uni.useGetPlat() == 'wx') {
          uni.switchTab({
            url: `/pages/${this.sourcePath}/index`
          })
        } else {
          uni.useJsBridge('navigate.back','')
        }
      },
      // switchover() {},
      onBack() {
        if(uni.useGetPlat() == 'wx') {
          uni.usePlusNavigateBack({
            delta: 1
          })
        } else {
          const condition = ['home','lookingGoods','personage','runGoods','service']
          if(condition.includes(this.sourcePath)) {
            uni.useJsBridge('navigate.back','')
          } else {
            uni.usePlusNavigateBack({
              delta: 1
            })
          }
        }
      },
      onChat() {},
      onScan() {
        uni.scanCode({
          success: function (res) {
            console.log('条码类型：' + res.scanType);
            console.log('条码内容：' + res.result);
          }
        });

      }
    }
  }
</script>
<style lang="scss" scoped>
  .fixation {
    position: fixed;
    top: 0;
  }

  .header-box {
    width: 100%;
    height: 80px;
    display: flex;
    z-index: 200;
    align-items: center;
    justify-content: space-between;
    padding: 0 32rpx;

    .back-icon {
      margin-right: 20rpx;
    }

    .header-title {
      color: header-title;
      font-size: 36rpx;
      font-weight: 500;
    }

    .map-box {
      display: flex;
    }

    .functionality {
      display: flex;
      .chat {
        width: 40rpx;
        height: 40rpx;
        margin-right: 30rpx;
      }

      .scan {
        width: 40rpx;
        height: 40rpx;
        margin-right: 30rpx;
      }
      .gear{
        width: 40rpx;
        height: 40rpx;
        margin-right: 30rpx;
      }
      .home{
        width: 40rpx;
        height: 40rpx;
        line-height: 40rpx;
      }
    }
  }

  .icon-bottom {
    width: 20rpx;
    height: 20rpx;
    margin-left: 11rpx;
  }
</style>