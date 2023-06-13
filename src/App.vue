<script>
	import { wxGetAddress } from '@/common/utils/index'
	export default {
		onLaunch: function () {
			// 刘海屏高度
			uni.getSystemInfo({
				success: function (res) {
					uni.setStorageSync(
						"statusBarHeight",
						res.statusBarHeight
					);
				}
			})
			this.lookDetails()
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		},
		methods: {
			// 查看详细地址；
			lookDetails() {
				let _this = this
				uni.getSetting({
					success() {
						if (!uni.getStorageSync("currentPosition")) {
							uni.getLocation({
								type: 'wgs84',
								success: function (res) {
								wxGetAddress(res).then(mapdata => {
									console.log(mapdata)
										if(mapdata.length > 0) {
											_this.$nextTick(() => {
												uni.setStorageSync(
													"currentPosition",
													mapdata[0].regeocodeData.addressComponent
												)
											});
										}
									})
								},
								fail(error) {
									console.log('失败', error)
								}
							})
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/common/css/tabbar.scss';
	@import '@/common/css/index.scss';
</style>