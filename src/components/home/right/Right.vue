<template>
  <div class="right-container col-lg-4 col-md-4">
    <!-- <slot name="ranking" class="ranking"></slot> -->
    <Ranking :goods="hot_goods" :title="title[0]"></Ranking>
    <Ranking :goods="discount_goods" :title="title[1]"></Ranking>
  </div>
</template>

<script>
import Ranking from '@/components/goods/ranking/Ranking.vue'
export default {
  name: 'HomeRight',
  data() {
    return {
      ranking_list: ['hot', 'discount'],
      hot_goods: [
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
      ],
      discount_goods: [
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
          pic: require('@/assets/img/good_2.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/good_2.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/good_2.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/good_2.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/good_2.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/good_2.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/good_2.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/good_2.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/good_2.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 1,
          pic: require('@/assets/img/good_2.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 2,
          pic: require('@/assets/img/good_2.jpeg'),
          name: '我是商品',
          price: 2,
          rand: 2,
          sales: 1000
        },
        {
          id: 3,
          pic: require('@/assets/img/good_2.jpeg'),
          name: '我是商品',
          price: 2,
          rand: 2,
          sales: 1000
        }
      ],
      title: ['热销榜', '促销榜']
    }
  },
  components: { Ranking }
}
</script>

<style lang="less" scoped>
.right-container {
  height: 1000px;
  background-color: pink;
  float: right;
  display: flex;
}
</style>
