// components/music-list/index.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    likeable:{
      type:Boolean,
      value:false
    },
    list:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    list:[
      {cover:'../../images/yequ.jpeg',
        name:'夜曲',
        album:'十一月的肖邦',
        artist:'周杰伦'
      },
      {cover:'../../images/yequ.jpeg',
      name:'夜曲',
      album:'十一月的肖邦',
      artist:'周杰伦'
      },
      {cover:'../../images/yequ.jpeg',
      name:'夜曲',
      album:'十一月的肖邦',
      artist:'周杰伦'
      },
      {cover:'../../images/yequ.jpeg',
      name:'夜曲',
      album:'十一月的肖邦',
      artist:'周杰伦'
      },
      ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
