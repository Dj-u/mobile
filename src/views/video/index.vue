<template>
  <div>
    <div class="split"></div>
    <van-skeleton avatar title :row="3" />
    <div class="split"></div>
    <van-skeleton avatar title :row="3" />
    <div class="split"></div>
    <van-skeleton  avatar title :row="3" />
    <div class="split"></div>
    <van-skeleton avatar title :row="3" />
  </div>
</template>

<script>
export default {
  name: 'videos'
}
</script>

<style lang="less" scoped>
.split {
  height: 20px;
}
</style>
