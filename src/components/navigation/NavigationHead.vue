<template>
  <div class="myoder-container">
    <v-toolbar class="order-toolbar">
      <v-list>
        <router-link v-for="option in options" :to="option.url" :key="option.title" class="nav-head-option">
          <v-list-item link active-class="red">
            <v-list-item-title class="option-title">
              {{option.title}}
            </v-list-item-title>
          </v-list-item>
        </router-link>
      </v-list>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { title: '全部订单', url: '/myorder/all' },
        { title: '未支付订单', url: '/myorder/unpaid' },
        { title: '未发货订单', url: '/myorder/undelivered' },
        { title: '售后/退款', url: '/myorder/aftersale' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.order-toolbar{
  width: 80%;
  padding-right: 10px;
  align-items: center;
  .option-title{
    margin-left: 40px;
    margin-right: 40px;
    font-size:100% ;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
}
.nav-head-option{
  display: inline-block;
}
</style>
