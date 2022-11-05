<template>
  <div class="login-main-container">
    <!-- <img
      :src="require('@/assets/loginBackground.png')"
      alt="1"
      class="login-background"
    /> -->
    <div class="logo-name">
      <img src="@/assets/logo.png" alt="" class="logo" />
      <!-- <h1 class="name">农产品</h1> -->
      <img src="@/assets/name.png" alt="" class="name" />
      <img src="@/assets/logo.png" alt="" class="logo" />
    </div>
    <LoginBox v-if="isRegister" @register="goRegister"></LoginBox>
    <RegisterBox v-else @suc-register="backLogin"></RegisterBox>
  </div>
</template>

<script>
import LoginBox from '@/components/login/LoginBox.vue'
import RegisterBox from '@/components/login/RegisterBox.vue'
export default {
  name: 'FarmCusLogin',
  components: { LoginBox, RegisterBox },
  data() {
    return {
      isRegister: true
    }
  },
  methods: {
    goRegister(val) {
      this.isRegister = val
    },
    backLogin(val) {
      this.isRegister = val
    }
  }
}
</script>
<style lang="less" scoped>
.login-main-container {
  // background-attachment: fixed;
  // .login-background {
  //   z-index: -1;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   scale: 2;
  // }
  height: 1000px;
  background: url('@/assets/loginBackground.png') no-repeat;
  background-size: 100% 100%;

  .logo-name {
    // display: block;
    margin: 0 auto;
    width: 1000px;
    height: 200px;
    .logo {
      width: 200px;
      height: 200px;
      float: left;
    }
    .name {
      width: 600px;
      height: 200px;
      line-height: 200px;
      text-align: center;
      float: left;
    }
  }
}
</style>
