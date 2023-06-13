export const  pageMixin={
  data() {
      return {

      }
  },
  onShow() {
    if(uni.useGetPlat() == 'wx') {
      if (typeof this.$mp.page.getTabBar === "function" && this.$mp.page.getTabBar()) {
        this.$mp.page.getTabBar().setData({
          selected: this.selected,
        });
      }
    }
  },
  onPageScroll(res) {
    uni.$emit('onPageScroll', res.scrollTop);//传递参数
  },
  methods: {
    storageToken(token) {
      if(uni.getStorageSync('loginToken') && uni.useGetPlat() != 'wx') {
        uni.setStorageSync(
          "loginToken",
          token
        );
      }
    },
  },
}