<template>
  <div class="waterfall-container">
    <!-- <h2 class="title">商品一览</h2> -->
    <!-- <slot name="group" class="group"></slot>
    <slot name="default" class="group"></slot> -->
    <div class="items newCus" v-for="item in newCus" :key="item.id">
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
        >
          <div class="button">
            <v-btn color="success"> 立即选购 </v-btn>
          </div>
        </GoodItem>
      </router-link>
    </div>
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
          <div class="button">
            <v-btn color="success"> 立即选购 </v-btn>
          </div>
        </GoodItem>
      </router-link>
    </div>
  </div>
</template>

<script>
import GoodItem from '@/components/goods/GoodItem.vue'
export default {
  name: 'WaterFall',
  props: {
    category: {
      type: String
    }
  },
  data() {
    return {
      newCus: [
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
          id: 1,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 1,
          rand: 0,
          sales: 1300
        }
      ],
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
.waterfall-container {
  background-color: blue;
  display: block;
  // height: 100px;
  .title {
    margin-top: 0;
    text-align: center;
    color: white;
  }
  .items {
    width: 33%;
    display: inline-block;
    // float: left;
  }
}
</style>
