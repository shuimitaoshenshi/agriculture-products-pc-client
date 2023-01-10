<template>
  <div class="agentinfo-container">
    <div class="agentinfo-box">
      <v-card class="mx-auto my-12" max-width="1000">
        <v-card-title>代理人信息</v-card-title>
        <v-card-text>
          <p>姓名：{{ agentInfo.name }}</p>
          <p>订单数：{{ agentInfo.order }}</p>
          <p>提成金额：{{ agentInfo.money }}</p>
          <p>下线人数：{{ agentInfo.subordinate }}</p>
        </v-card-text>
        <v-card-actions>
          <!-- <v-btn text color="deep-purple accent-4"> Learn More </v-btn> -->
          <v-btn small color="success" dark v-if="agentInfo.cashout">
            提现
          </v-btn>
          <v-btn small disabled v-else>
            距提现{{ agentInfo.cashoutday }}天
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      agentInfo: {
        name: '小明',
        order: 1,
        money: 100,
        subordinate: 10,
        cashout: true,
        cashoutday: 10
      }
    }
  }
}
</script>

<style lang="less" scoped>
.agentinfo-container {
  display: block;
  width: 100%;
  margin-left: 50px;
  margin-top: 50px;
  .agentinfo-box {
    display: block;
    width: 80%;
    margin-left: 256px;
    margin-bottom: 20px;
  }
}
</style>
