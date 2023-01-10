<template>
  <div class="login-container">
    <v-card>
      <v-toolbar color="#6200ea" flat>
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

        <div class="login-title">
          <v-toolbar-title>登陆</v-toolbar-title>
        </div>

        <template v-slot:extension>
          <v-tabs v-model="tab" align-with-title>
            <v-tabs-slider color="yellow"></v-tabs-slider>

            <v-tab v-for="item in items" :key="item">
              {{ item }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item">
          <v-card flat>
            <!-- 登陆输入框 -->
            <div class="login-input">
              <template>
                <div>
                  <v-text-field
                    label="用户名"
                    hide-details="auto"
                  ></v-text-field>
                  <v-text-field
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    label="密码"
                    @click:append="show1 = !show1"
                  ></v-text-field>
                </div>
              </template>
            </div>
            <!-- 登陆输入框 -->
          </v-card>
        </v-tab-item>
      </v-tabs-items>
      <!-- 按钮 -->
      <div class="login-button">
        <template>
          <v-row align="center" justify="space-around">
            <v-btn @click="gotoRegister">注册</v-btn>
            <router-link to="/home">
              <v-btn @click="btnLogin">登陆</v-btn>
            </router-link>
          </v-row>
        </template>
      </div>
      <!-- 按钮 -->
    </v-card>
  </div>
</template>

<script>
// import { loginApi } from '@/api/login'
// import request from '@/js/request'
// import { sendMsgApi } from '@/api/login'
export default {
  name: 'LoginBox',
  data() {
    return {
      form: {
        username: '',
        password: '',
        isCus: true,
        register: false
      },
      loading: false,
      tab: null,
      items: ['农户', '买家'],
      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ''
      },
      show1: false
    }
  },
  methods: {
    gotoRegister() {
      this.$emit('register', this.form.register)
    }
    // async btnLogin() {
    //   // const res = await sendMsgApi(this.form)
    //   console.log(res)
    // }
  }
}
// login() {
//   // this.$http.post('/user/sendMsg', { phone: '15258677667' })
// }
</script>

<style lang="less" scoped>
.login-container {
  position: relative;
  width: 500px;
  margin: 20px auto 0;
  text-align: center;
  //登陆标题
  .v-toolbar__title {
    font-size: 2rem;
    color: white;
    letter-spacing: 0.5rem;
  }
  // 农户买家标签
  .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active),
  .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon,
  .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-btn,
  .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
    color: rgba(255, 255, 255, 0.54);
  }
  .v-tab {
    color: white;
    letter-spacing: 0.1rem;
    font-size: 1rem;
    flex: 1;
  }
  // 农户买家标签

  //输入框
  .login-input,
  .register-input {
    padding: 10px 20px 50px;
  }
  //输入框

  //按钮
  .login-button {
    padding: 0px 20px 20px;
    position: absolute;
    bottom: 5px;
    right: 20px;
  }
}
</style>
