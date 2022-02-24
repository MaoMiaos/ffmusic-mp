// components/album-card/index.ts
Component({
  /**
   * 组件的属性列表
   */
  options: {
    styleIsolation: "isolated"
  },
  properties: {
    item: {
      type: Object,
      value: () => {
        return null
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTab: function () {
      const name = this.properties.item.name;
      console.log(name)
      wx.navigateTo({
        'url': '/pages/play-list/detail?id=11'
      })
    }
  }
})
