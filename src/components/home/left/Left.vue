<template>
  <div class="left-container col-lg-8 col-md-8">
    <h2 class="title">商品一览</h2>
    <!-- <slot name="group" class="group"></slot>
    <slot name="default" class="group"></slot> -->
    <div class="items" col-sm-12 col-lg-6 v-for="item in goods" :key="item.id">
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
import GoodItem from '@/components/goods/GoodItem.vue'
export default {
  name: 'HomeLeft',
  data() {
    return {
      goods: [
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/good_2.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/good_2.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/good_2.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/good_2.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/good_2.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/good_2.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/good_2.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/good_2.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/good_2.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/good_2.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 2,
          pic: require('@/assets/img/good_2.jpeg'),
          name: '我是商品',
          price: 2,
          rand: 0,
          sales: 1000
        },
        {
          id: 3,
          pic: require('@/assets/img/good_2.jpeg'),
          name: '我是商品',
          price: 2,
          rand: 0,
          sales: 1000
        }
      ]
    }
  },
  components: { GoodItem }
}
</script>

<style lang="less" scoped>
.left-container {
  height: 1000px;
  background-color: blue;
  float: left;
  overflow: scroll;
  // padding: 15px;
  .title {
    margin-top: 0;
    text-align: center;
    color: white;
  }
  .items {
    // font-size: 3rem;
    // @media screen and (max-width: 1200px) {
    //   width: 25%;
    // }
    // @media screen and (max-width: 992px) {
    width: 33%;
    // }
    @media screen and (max-width: 768px) {
      width: 50%;
    }
    // @media screen and (min-width: 1200px) {
    //   width: 25%;
    // }

    float: left;
  }
}
</style>
