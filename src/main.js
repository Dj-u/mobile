import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible' // 引入自动适配插件
Vue.use(Vant) // 全局注册  在任意位置可以使用Vant组件库 实际上调用了 Vant 的 install方法
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
