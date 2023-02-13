<template>
  <div>
    <div class="order-box" v-for="(item,index) in orders" :key="index">
      <v-card v-show="item.state==='aftersale'">
          <div class="order-state">
          {{item.state}}
          </div>
        <v-card-title>订单{{index+1}}</v-card-title>
        <div
          class="currentContent"
          ref="currentContentRef"
          :id="'current_content_' + item.id"
          >
          <v-row>
            <v-col cols="2">
              <v-card-text>good:{{ item.good }}</v-card-text>
            </v-col>
            <v-col cols="2">
              <v-card-text>num:{{ item.num }}</v-card-text>
            </v-col>
            <v-col cols="2">
              <v-card-text>price:{{ item.price }}</v-card-text>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-btn
            color="deep-purple lighten-2"
            outlined
            text
            @click="deleteOrder"
            >
            删除
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
      </div>
  </div>
</template>

<script>
export default {
  props: ['orders'],
  methods: {
    deleteOrder(id, index) {
      this.$emit('delOrder', index)
    }
  }
}
</script>

<style lang="less" scoped>
  .order-box{
    display: block;
    margin-top: 10px;
    width: 80%;
    font-size: 20px;
    .order-state{
      border: 3px solid rgb(219, 140, 248);
      background-color: rgb(219, 140, 248);
      border-radius: 2px;
      padding: 1px;
      margin-top: 15px;
      margin-right: 10px;
      font-family:'Courier New', Courier, monospace;
      float: right;
    }
  }
</style>
