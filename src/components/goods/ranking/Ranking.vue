<template>
  <div class="ranking-container">
    <h3 class="title">{{ title }}</h3>
    <div class="items" v-for="item in goods" :key="item.id">
      <GoodItem
        :id="item.id"
        :pic="item.pic"
        :name="item.name"
        :price="item.price"
        :rand="item.rand"
        :sales="item.sales"
      ></GoodItem>
    </div>
  </div>
</template>

<script>
// import GoodHot from './hot/GoodHot.vue'
// import GoodDiscount from './discount/GoodDiscount.vue'
import GoodItem from '@/components/goods/GoodItem.vue'

export default {
  name: 'GoodRanking',
  props: {
    goods: {
      type: Object,
      default: () => {}
    },
    title: {
      type: String,
      default: '排行'
    }
  },
  components: { GoodItem }
}
</script>

<style lang="less" scoped>
.ranking-container {
  flex: 1;
  height: 100%;
  background-color: aqua;
  overflow: auto;
  margin-left: 5px;
  .title {
    // display: block;
    // width: 100%;
    // height: 20px;
    margin: 0 auto;
    text-align: center;
  }
}
</style>
