import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '@/utils/auth'
Vue.use(Vuex)
// vuex 和缓存数据的同步
export default new Vuex.Store({
  // 放置公共数据
  // 初始化时  直接将用户信息给公共状态
  state: {
    user: auth.getUser()// 从缓存中读取
  },
  // state修改必须通过mutations
  mutations: {
    updateUser (state, payload) {
      state.user = payload.user // 更新数据
      auth.setUser(payload.user)// 将数据同步设置在本地存储中
    },
    // 情况user
    clearUser (state) {
      state.user = {}
      auth.delUser()// 将缓存中的数据清空
    }
  },
  actions: {
  },
  modules: {
  }
})
