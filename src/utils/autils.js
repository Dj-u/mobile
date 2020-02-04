// 专门处理用户信息的存储和删除 以及获取 放置在localStorge
const USER_TOKEN = 'hm-yidong-token' // key  专门用来存储用户信息
// 存储用户信息
export function setUser (user) {
  localStorage.setItem(USER_TOKEN, JSON.stringify(user))
}
// 读取用户信息
export function getUser () {
  // 短路表达式  前边true 后边不执行  前边false 后边执行
  return JSON.parse(localStorage.getItem(USER_TOKEN) || '{}')
}
// 删除用户信息
export function delUser () {
  localStorage.removeItem(USER_TOKEN)
}
