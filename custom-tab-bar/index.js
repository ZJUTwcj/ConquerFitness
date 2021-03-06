Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "../../pages/index/index",
      iconPath: "/image/icon_component.png",
      selectedIconPath: "/image/icon_component_HL.png",
      text: "首页"
    }, {
      pagePath: "../../pages/Train/Train",
      iconPath: "/image/icon_train.png",
      selectedIconPath: "/image/icon_train_selected.png",
      text: "训练 "
    },
    {
      pagePath: "../../pages/Count/Count",
      iconPath: "/image/icon_tubiao.png",
      selectedIconPath: "/image/icon_tubiao_selected.png",
      text: "统计"
    }
  ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})