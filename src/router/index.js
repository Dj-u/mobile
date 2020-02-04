import Vue from 'vue'
import VueRouter from 'vue-router'
const Layout = () => import('@/views/layout') // 布局组件 按需加载
const Home = () => import('@/views/home')// 主页组件
const Question = () => import('@/views/question')// 问答组件
const Video = () => import('@/views/video')// 视频组件
const User = () => import('@/views/user')// 个人中心
const Profile = () => import('@/views/user/profile')// 编辑资料
const Chat = () => import('@/views/user/chat')// 小智同学组件
const Login = () => import('@/views/login') // 登录页面
const Search = () => import('@/views/search')// 搜索组件
const Result = () => import('@/views/search/result')// 搜索结果组件
const Article = () => import('@/views/article')// 文章组件
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'home',
    component: Layout, // 一级路由
    children: [{
      path: '/', component: Home // 二级路由
    },
    {
      path: '/question',
      component: Question
    },
    {
      path: '/video',
      component: Video
    },
    {
      path: '/user',
      component: User
    }]
  },
  {
    path: '/user/profile',
    component: Profile
  },
  {
    path: '/user/chat',
    component: Chat
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/search',
    component: Search
  }, {
    path: '/search/result',
    component: Result
  },
  {
    path: '/article',
    component: Article
  }

]

const router = new VueRouter({
  routes
})

export default router
