<template>
  <div class="container">
    <van-nav-bar title="登录" left-arrow @click-left="$router.back()"></van-nav-bar>
    <!-- 手机号 验证码 登录按钮 -->
    <van-cell-group>
      <van-field
        :error-message="errMsg.mobile"
        v-model="loginForm.mobile"
        @blur="checkMobile"
        label="手机号"
        placeholder="请输入手机号码"
      ></van-field>
      <van-field
        :error-message="errMsg.code"
        @blur="checkCode"
        v-model="loginForm.code"
        label="验证码"
        placeholder="请输入验证码"
      >
        <!-- slot指定给哪个坑提案内容 -->
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
      <div class="btn-box">
        <van-button @click="login" type="info" block round size="small">登录</van-button>
      </div>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        mobile: '13911111111',
        code: '246810'
      },
      errMsg: {
        mobile: '',
        code: ''
      }
    }
  },
  methods: {
    checkMobile () {
      // 判断 为空 判断格式
      if (!this.loginForm.mobile) {
        this.errMsg.mobile = '手机号码不能为空'
        return false
      }
      // 判断格式  正则表达式
      if (!/^1[3-9]\d{9}$/.test(this.loginForm.mobile)) {
        this.errMsg.mobile = '手机格式不正确'
        return false
      }
      this.errMsg.mobile = '' // 清空信息
      return true
    },
    checkCode () {
      if (!this.loginForm.code) {
        this.errMsg.code = '验证码不能为空'
        return false
      }
      if (!/^\d{6}$/.test(this.loginForm.code)) {
        this.errMsg.code = '验证码必须为6位数字'
        return false
      }
      this.errMsg.code = '' // 清空信息
      return true
    },
    // 登录方法
    login () {
      if (this.checkMobile() && this.checkCode()) {
        // 如果都通过 表示前端校验通过 还要调用接口

      }
    }
  }
}
</script>

<style lang="less" scoped>
.btn-box {
  padding: 10px;
}
</style>
