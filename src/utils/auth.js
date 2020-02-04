// 专门处理用户信息的存储和删除 以及获取 放置在localStorge
const USER_TOKEN = 'hm-yidong-token' // key  专门用来存储用户信息
// 存储用户信息
export function setUser (user) {
  // localStorage 存储的是字符串  要把对象转成字符串
  localStorage.setItem(USER_TOKEN, JSON.stringify(user))
}
// 读取用户信息
export function getUser () {
  // 导出的是字符串 要转成对象
  // 短路表达式  前边true 后边不执行  前边false 后边执行  空字符串会报错
  return JSON.parse(localStorage.getItem(USER_TOKEN) || '{}')
}
// 删除用户信息
export function delUser () {
  localStorage.removeItem(USER_TOKEN)
}
