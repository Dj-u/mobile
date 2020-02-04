import axios from 'axios'
import JSONBig from 'json-bigint'
import store from '@/store'
import router from '@/router'
// 创建一个axios实例  和原来的 axios 没有关系
const instance = axios.create({
  // 构造参数
  baseURL: 'http://ttapi.research.itcast.cn/app/v1_0', // 设置请求地址
  transformResponse: [function (data) {
    // data就是后端响应的字符串 默认的转化是JSON.parse 处理大数字有问题 需要JSONBig替换
    // try catch 捕获异常
    try {
      return JSONBig.parse(data)
    } catch (error) {
      return data
    }
  }]
})
// 请求拦截器
instance.interceptors.request.use(function (config) {
  // config 请求参数
  if (store.state.user.token) {
    //   统一注册token  看api文档
    config.headers['Authorization'] = `Bearer ${store.state.user.token}`
  }
}, function (error) {
  return Promise.reject(error)
})
// 响应拦截器
instance.interceptors.response.user(function (response) {
  // 得到response 实际上被axios包了一层数据
  try {
    // 将数据解构
    return response.data.data
  } catch (error) {
    return response.data
  }
}, async function (error) {
  // 如何拿到token失效标识
  if (error.response.status === 401) {
    let toPath = {
      path: '/login',
      query: {
        redirectUrl: router.currentRoute.path // 当前页面地址 做成参数传到登录页
      }
    }
    // 判断本地有没有refresh_token  续命标志
    if (store.state.user.refresh_token) {
      // 可以续命
      // 不能用instance继续请求刷新token 因为会再次进入请求拦截器 会把失效token传进去
      // 要用原始的axios
      try {
        let result = await axios({
          url: 'http://ttapi.research.itcast.cn/app/v1_0/authorizations',
          headers: {
            Authorization: `Bearer ${store.state.user.refresh_token}`
          },
          method: 'put'
        })
        // 将数据同步到vuex和本地存储中
        store.commit('updateUser', {
          user: {
            token: result.data.data.token, // 更新到本地
            refresh_token: store.state.user.refresh_token
          }
        })
        // 将401错误请求再次发送出去
        return instance(error.config)
      } catch (error) {
        // refresh_token已经无法续命
        store.commit('clearUser')// 情况信息
        // 直接回登录
        router.push(toPath)
      }
    } else {
      // 否则回到登录页  当在一个页面需要登录 希望登录后回到当前浏览的这个页面
      //   params(动态路由 /user/:) query(/user?id=123)
      router.push(toPath)
    }
  }
  return Promise.reject(error)
})
export default instance
