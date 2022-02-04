import { getToken, removeToken, setToken } from "../utils/util"

const bashUrl = 'http://localhost:8080/'
//如果加数字就报错
export const get = (url: string) =>{
  wx.showLoading({
    title:'加载中'
  })
  //定义返回体any，否则走默认unknown值
  return new Promise<any>((resolve,reject)=>{
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
export const post = (url: string,data:object) =>{
  wx.showLoading({
    title:'加载中'
  })
  //定义返回体any，否则走默认unknown值
  return new Promise<any>((resolve,reject)=>{
    wx.request({
      url: bashUrl + url,
      method:"POST",
      data,
      success:(res)=>{
        //相当于一个拦截器，对200，400，404等业务错误进行处理
        //handleHttpError(res,reject);
        console.log(res)
        if(res.statusCode === 401){
          removeToken()
          const currentPages = getCurrentPages()
          const currentRoute = currentPages[currentPages.length -1].route
          if(currentRoute !== 'pages/login/index'){
            wx.navigateTo({
              url:'pages/login/index'
          })
          }
          wx.showToast({
            title:'用户未登录',
            icon:'error'
          })
        }
        console.log(res.data);
        _handleToken(res.data)
        resolve(res.data)
      },
      fail:(error)=>{
        console.log(error)
      },
      complete:()=>{
        wx.hideLoading()
      }
    })
  })
}

const _handleToken = (token:any) =>{
  if(token && getToken() !== token){
      setToken('Bearer '+token)
      wx.navigateBack()
  }
}