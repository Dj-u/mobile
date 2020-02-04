<template>
  <div>
    <van-nav-bar title="编辑资料" right-text="保存" left-arrow @click-left="$router.back()"></van-nav-bar>
    <!-- Field 是基于 Cell 实现的，可以使用 CellGroup 作为父元素来提供外边框。 -->
    <van-cell-group>
      <van-field v-model="value" placeholder="请输入用户名" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style lang="less" scoped>
</style>
