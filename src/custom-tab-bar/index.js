const app = getApp()

Component({
  data: {
    selected: 2,
    color: "#C0C4CC",
    selectedColor: "#3A65FF",
    list: [
      {
      pagePath: "/pages/lookingGoods/index",
      iconPath: "../static/tabbar/index_a.png",
      selectedIconPath: "../static/tabbar/index_b.png",
      text: "找货",
      isSpecial: false
    }, {
      pagePath: "/pages/runGoods/index",
      iconPath:"../static/tabbar/process_a.png",
      selectedIconPath: "../static/tabbar/process_b.png",
      text: "跑货",
      isSpecial: false
    },
    {
      pagePath: "/pages/home/index",
      iconPath: "../static/tabbar/center.png",
      selectedIconPath: "../static/tabbar/center.png",
      text: "",
      isSpecial: false
    },
    {
      pagePath:"/pages/service/index",
      iconPath: "../static/tabbar/app_a.png",
      selectedIconPath: "../static/tabbar/app_b.png",
      text: "营运",
      isSpecial: false
    }, {
      pagePath: "/pages/personage/index",
      iconPath: "../static/tabbar/mine_a.png",
      selectedIconPath: "../static/tabbar/mine_b.png",
      text: "我的",
      isSpecial: false
    }
  ]
  },
  attached() {
  },
  methods: {
    　　// 切换 tab 事件
        switchTab(e) {
          let that = this
          const idx = e.currentTarget.dataset.index
          const path = e.currentTarget.dataset.path
    
          // 跳转页面
          wx.switchTab({
             url: path,
          })
    
          that.setData({
            selected: idx
          })
        }
  }
})
