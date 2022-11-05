<template>
  <div class="goodbox-container">
    <div class="title">1</div>
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
import GoodItem from './GoodItem.vue'
export default {
  props: {
    goods: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    GoodItem
  }
}
</script>

<style lang="less" scoped>
.goodbox-container {
  position: relative;
  .title {
    display: block;
    position: absolute;
  }
  margin: 5px 0;
  height: 100%;
  overflow: scroll;
}
</style>
