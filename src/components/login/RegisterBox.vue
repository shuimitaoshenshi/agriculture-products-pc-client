<template>
  <div class="login-container">
    <v-card>
      <v-toolbar color="#6200ea" flat>
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

        <div class="register-title">
          <v-toolbar-title>注册</v-toolbar-title>
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
            <!-- 注册输入框 -->
            <div class="register-input">
              <template>
                <div>
                  <v-text-field
                    label="创建用户名"
                    hide-details="auto"
                    v-model="form.name"
                  ></v-text-field>
                  <v-text-field
                    label="创建密码"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    @click:append="show1 = !show1"
                    v-model="form.password"
                  ></v-text-field>
                  <v-text-field
                    label="确认密码"
                    :type="show1 ? 'text' : 'password'"
                    v-model="comfirmpassword"
                  ></v-text-field>
                </div>
              </template>
            </div>
            <!-- 注册输入框 -->
            <!-- 错误提示 -->
            <v-card-text v-if="hint !== '' || hint === null">
              {{ hint }}
            </v-card-text>
            <!-- 错误提示 -->
          </v-card>
          <!-- 按钮 -->
          <div class="login-button">
            <template>
              <v-row align="center" justify="space-around">
                <!-- <router-link to="/login"> -->
                <v-btn
                  @click="
                    btnRegister(item)
                    sucRegister()
                  "
                  >确认注册</v-btn
                >
                <v-btn @click="gotoLogin">返回登陆</v-btn>
                <!-- </router-link> -->
              </v-row>
            </template>
          </div>
          <!-- 按钮 -->
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import { userRegisterApi, sellerRegisterApi } from '@/api/login'
export default {
  name: 'RegisterBox',
  data() {
    return {
      form: {
        name: '',
        password: ''
      },
      hint: '',
      show1: false,
      comfirmpassword: '',
      tab: null,
      items: ['商家', '买家'],
      isRegister: true
    }
  },

  methods: {
    sucRegister() {
      this.$emit('suc-register', this.isRegister)
    },
    gotoLogin() {
      this.$router.push('/login')
    },
    updataHint(hint) {
      this.hint = hint
    },
    async btnRegister(item) {
      if (
        this.form.name === '' ||
        this.form.password === '' ||
        this.comfirmpassword === ''
      ) {
        return this.updataHint('用户名和密码不能为空')
      }
      if (this.form.password === this.comfirmpassword) {
        this.hint = ''
        let res
        if (item === '商家') {
          res = await sellerRegisterApi(this.form)
          console.log(res)
        } else {
          res = await userRegisterApi(this.form)
          console.log(res)
        }
        this.updataHint(res.data.msg)
        if (res.status !== 200) return this.updataHint(res.data.msg)
        this.$router.push('/login')
      } else {
        this.updataHint('两次密码不一致')
      }
    }
  },
  mounted() {
    this.updataHint()
  }
}
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
