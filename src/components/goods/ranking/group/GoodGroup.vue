<template>
  <div class="goodgroup-container">
    <GoodBox :goods="goods"></GoodBox>
  </div>
</template>

<script>
import GoodBox from '@/components/goods/GoodBox.vue'

export default {
  data() {
    return {
      goods: [
        {
          id: 1,
          pic: require('@/assets/good_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 1,
          sales: 1300
        },
        {
          id: 2,
          pic: require('@/assets/good_1.jpeg'),
          name: '我是商品',
          price: 2,
          rand: 2,
          sales: 1000
        },
        {
          id: 3,
          pic: require('@/assets/img/good_3.jpeg'),
          name: '我是商品',
          price: 2,
          rand: 2,
          sales: 1000
        },
        {
          id: 4,
          pic: require('@/assets/good_1.jpeg'),
          name: '我是商品',
          price: 2,
          rand: 2,
          sales: 1000
        }
      ]
    }
  },
  components: {
    GoodBox
  }
}
</script>

<style lang="less" scoped>
.goodgroup-container {
  flex: 1;
  width: 100px;
  height: 1000px;
  background-color: red;
}
</style>
