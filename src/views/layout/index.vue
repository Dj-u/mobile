<template>
  <div class="container">
    <!--使用vant导航组件  -->
    <van-nav-bar fixed v-if="showNavBar" title="黑马头条" right-text="搜索"></van-nav-bar>
    <!-- 二级路由容器  首页/问答/视频/我的-->
    <!-- :class="{ 名称: 布尔值 }" -->
    <div class="my-wrapper" :class="{ noTop:!showNavBar}">
      <router-view></router-view>
    </div>
    <!-- 标签栏  开启路由模式 route :route="true"(布尔)  route="true"(字符串)-->
    <van-tabbar route>
      <!-- router-link  to 跳转到响应页面 -->
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/question" icon="chat-o">问答</van-tabbar-item>
      <van-tabbar-item to="/video" icon="video-o">视频</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'layout',
  computed: {
    // 是否显示showNavBar
    showNavBar () {
      // this指向组件实例
      return this.$route.path !== '/user'
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
  .my-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-top: 45px;
    padding-bottom: 50px;
    box-sizing: border-box;
    &.noTop {
      padding-top: 0;
    }
  }
}
</style>
