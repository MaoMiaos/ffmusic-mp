import { getToken } from "./utils/util";

// app.ts
App({
  globalData: {

  },
  _isLoginPage() {
    const currentPages = getCurrentPages()
    console.log(currentPages)
    return false;
  },
  //在onlaunch定义到token，然后存储到全局，
  // onShow() {
  //   if(!getToken()){
  //     wx.navigateTo({
  //       url:'pages/login/index'
  //     })
  //   }
  // },
})