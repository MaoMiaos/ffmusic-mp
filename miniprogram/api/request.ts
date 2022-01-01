const bashUrl = 'https://ffmusic-1521271-1309041415.ap-shanghai.run.tcloudbase.com'
//如果加数字就报错
export const get = (url: string) =>{
  wx.showLoading({
    title:'加载中'
  })
  return new Promise((resolve,reject)=>{
    wx.request({
      url: bashUrl + url,
      method:"GET",
      success:(res)=>{
        //相当于一个拦截器，对200，400，404等业务错误进行处理
        //handleHttpError(res,reject);
        resolve(res.data)
      },
      fail:reject,
      complete:()=>{
        wx.hideLoading()
      }
    })
  })
}