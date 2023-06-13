<template>
  <view class="content">
    <view class="bg" :style="{ paddingTop: statusBarHeight + 'px' }">
      <headerNew
        :isGear="true"
        pathGear="/pages_setUp/personage/index"
        :isHome="false"
        :isBack="false"
        isHeaderTitle="我的"
      ></headerNew>
      <care
        :avatar="avatar"
        :driver="driver"
        :day="day"
        :second="second"
        :mileage="mileage"
        :accumulatedIncome="accumulatedIncome"
        :accountBalance="accountBalance"
        :login="login"
        @func="click"
        :grade="grade"
      ></care>
    </view>
    <waybill-center @func="click"></waybill-center>
    <related-to-me @func="click"></related-to-me>
    <!-- <terms-need-to-know @func="click"></terms-need-to-know> -->
    <other-related @func="click"></other-related>
    <view class="footer"></view>
  </view>
</template>
<script>
import { detail } from "@/api/modules/personage/index";
import { numberToCurrencyNo } from "@/common/utils/index";
import OtherRelated from "./components/OtherRelated";
import TermsNeedToKnow from "./components/TermsNeedToKnow";
import RelatedToMe from "./components/RelatedToMe";
import WaybillCenter from "./components/WaybillCenter";
import care from "./components/Care";
import headerNew from "@/components/headerNew/index";
import { pageMixin } from "@/common/utils/mixins";
export default {
  mixins: [pageMixin],
  components: { headerNew, care, WaybillCenter, RelatedToMe, TermsNeedToKnow, OtherRelated },
  data() {
    return {
      login: true, //判断是否登录
      driver: "***", //司机
      avatar:
        "https://css-backup-1579076150310.obs.cn-south-1.myhuaweicloud.com/image_directory/16700319816204042f2.png",
      day: 0,
      second: 0,
      mileage: 0,
      accumulatedIncome: "0.00",
      accountBalance: "0.00",
      grade: "1", //司机星级
      statusBarHeight: uni.getStorageSync("statusBarHeight"),
      selected: 4,
    };
  },
  //切换tab 时触发生命周期
  onTabItemTap: function (e) {},
  onShow() {
    // this.accumulatedIncome = numberToCurrencyNo("1.2");
    this.login = uni.isLogin();
    if (this.login)
      detail().then((res) => {
        console.log(res);
        if (res.code === 200) {
          let data = res.data;
          this.avatar = data.user.avatar
            ? data.user.avatar
            : "https://css-backup-1579076150310.obs.cn-south-1.myhuaweicloud.com/image_directory/16700319816204042f2.png";
          this.driver = data.user.nickName ? data.user.nickName : data.user.phonenumber;
          this.grade = data.driver.level;
        }
      });
  },
  methods: {
    click(val) {
      console.log(val);
      uni.onAuthorization("/pages/index/index");
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  background: #f3f3f3;
  min-height: 100vh;
}
.bg {
  background: url("https://css-backup-1579076150310.obs.cn-south-1.myhuaweicloud.com/image_directory/1669880832746186f9e.png")
    no-repeat;
  background-size: 100%;
}
.footer {
  height: 150rpx;
}
</style>
