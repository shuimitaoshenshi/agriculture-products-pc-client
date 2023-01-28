<template>
  <div class="goodcart-container">
    <Head></Head>
    <div class="container" style="background-color: black">
      <div class="items" v-for="item in goods" :key="item.id">
        <router-link to="/info">
          <GoodItem
            :id="item.id"
            :pic="item.pic"
            :name="item.name"
            :price="item.price"
            :rand="item.rand"
            :sales="item.sales"
            :store="item.store"
          >
            <template #goodcart></template>
          </GoodItem>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Head from '@/components/Head.vue'
import GoodItem from '@/components/goods/GoodItem.vue'
export default {
  components: {
    Head,
    GoodItem
  },
  data() {
    return {
      goods: [
        {
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300,
          sort: '111'
        },
        {
          id: 2,
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
a {
  text-decoration: none;
  display: block;
  color: #333;
}
a:hover,
a:visited,
a:link,
a:active {
  color: #333;
}
.router-link-active {
  text-decoration: none;
  color: #333;
}
.items {
  font-size: 32px;
}
</style>
