<template>
  <view :style="{ paddingTop: statusBarHeight + 'px' }">
    <HeaderNew isHeaderTitle="微信授权登录"/>
    <view>
      <button
        class="wx-btn"
        open-type="getPhoneNumber"
        @getphonenumber="getPhoneNumber"
      >
        微信授权
      </button>
    </view>

  </view>
</template>
<script>
import HeaderNew from '../../components/headerNew'
import {
  loginToken
} from "@/api/modules/login/index";
export default {
  components:{ HeaderNew },
  data() {
    return {
      userInfo: {},
      code: '',
      statusBarHeight: uni.getStorageSync("statusBarHeight")
    }
  },

  onShow() {
    console.log("login show");
    this.wxLogin();
  },
  methods: {
    getPhoneNumber(e) {
      let that = this;
      console.log(e)
      that.userInfo.encryptedData = e.detail.encryptedData;
      that.userInfo.iv = e.detail.iv;
      that.userInfo.code = that.code;
      loginToken(that.userInfo).then(res => {
        that.$nextTick(() => {
          uni.setStorageSync(
          "loginToken",
            res.data.access_token
          );
          uni.setStorageSync(
            "loginTime",
            res.data.expires_time
          );
          uni.setStorageSync(
            "userPhone",
            res.data.phone
          )
          uni.switchTab({
            url: `/pages/home/index`
          });
        })
      })
    },
    wxLogin() {
      let _this = this;
      // 获取登录用户code
      wx.login({
        provider: 'weixin',
        success: function(res) {
          console.log(res);
          if(res.code){
            _this.code = res.code;
              //将用户登录code传递到后台置换用户SessionKey、OpenId等信息
              //...写用code置换SessionKey、OpenId的接口
              //置换成功调用登录方法_this.updateUserInfo();
          }else{
              uni.showToast({title: '登录失败！',duration: 2000});
          }
        },
      });
    },
    back() {
      uni.navigateBack({
        delta: 1,
      });
    },
  }
}
</script>