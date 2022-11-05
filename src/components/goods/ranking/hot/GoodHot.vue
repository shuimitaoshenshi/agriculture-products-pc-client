<template>
  <div class="goodhot-container">
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
// import GoodBox from '../GoodBox.vue'
import GoodItem from '@/components/goods/GoodItem.vue'
export default {
  data() {
    return {
      goods: [
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 2,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 2,
          rand: 2,
          sales: 1000
        }
      ]
    }
  },
  components: { GoodItem }
}
</script>

<style lang="less" scoped>
.goodhot-container {
  width: 100px;
  height: 100%;
  background-color: aqua;
  padding: 5px;
  overflow: auto;
}
</style>
