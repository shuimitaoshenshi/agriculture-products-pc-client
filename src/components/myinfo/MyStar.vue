<template>
  <div class="mystar-container">
    <div
      class="star-box"
      style="width: 700px"
      v-for="item in stars"
      :key="item.id"
    >
      <router-link to="/info">
        <GoodItem
          :id="item.id"
          :pic="item.pic"
          :name="item.name"
          :price="item.price"
          :rand="item.rand"
          :sales="item.sales"
          :store="item.store"
          :isNewCus="item.isNewCus"
          :sort="item.sort"
        ></GoodItem>
      </router-link>
    </div>
  </div>
</template>

<script>
import GoodItem from '@/components/goods/GoodItem.vue'

export default {
  components: { GoodItem },
  data() {
    return {
      stars: [
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          isNewCus: true,
          sales: 1300,
          sort: '1'
        },
        {
          id: 2,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        },
        {
          id: 3,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.mystar-container {
  display: block;
  width: 100%;
  margin-left: 50px;
  margin-top: 50px;
  .star-box {
    display: block;
    width: 80%;
    margin-left: 256px;
    margin-bottom: 20px;
    font-size: 20px;
  }
}
a {
  text-decoration: none;
  color: #333;
}
a:hover,
a:visited,
a:link,
a:active {
  text-decoration: none;
  color: #333;
}
.router-link-active {
  text-decoration: none;
  color: #333;
}
</style>
