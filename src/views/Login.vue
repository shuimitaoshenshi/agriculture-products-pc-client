<template>
  <div class="login-container">
    <img src="@/assets/loginBackground.png" alt="" class="login-background" />
    <div class="logo-name">
      <img src="@/assets/logo.png" alt="" class="logo" />
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
.login-background {
  z-index: -1;
  position: absolute;
  scale: 2;
}
.logo-name {
  display: block;
  margin: 0 auto;
  width: 1000px;
  height: 200px;
  .logo {
    width: 200px;
    height: 200px;
  }
  .name {
    width: 600px;
    height: 200px;
  }
}
</style>
