export const formatTime = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

const formatNumber = (n: number) => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}

const tokenKey = 'MiaoMao'
export const setToken = (token: string) => {
  console.log(token)
  wx.setStorageSync(tokenKey, token)
}


export const getToken = () => {
  return wx.getStorageSync(tokenKey) || null
}

export const removeToken = () => {
  wx.setStorageSync(tokenKey, '');
}