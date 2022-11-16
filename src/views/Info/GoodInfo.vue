<template>
  <div class="goodinfo-container">
    <Head></Head>
    <div class="goodinfo-main">
      <div class="showgood">
        <div class="left">
          <div class="carousel">
            <Carousel :max-width="500"></Carousel>
          </div>
        </div>
        <div class="right">
          <div class="name">
            <h1>{{ good.name }}</h1>
          </div>
          <div class="price" ref="priceRef">
            ¥{{ good.price[this.currentSize] }}
          </div>
          <!--  选择商品规格/数量 -->
          <div class="sizebt">
            <h3>选择商品规格/数量</h3>
            <v-col cols="auto">
              <v-btn-toggle v-model="currentSize" color="deep-purple ">
                <v-btn
                  focus
                  v-for="{ id, size } in sizes"
                  :key="id"
                  @click="changeSize(size)"
                  >{{ size }}
                </v-btn>
              </v-btn-toggle>
            </v-col>
          </div>
          <!--  选择商品规格/数量 -->
        </div>
      </div>
      <!-- 商品详情 -->
      <div class="detail">
        <h3>商品详情</h3>
        <p>商品详情1</p>
        <p>商品详情2</p>
        <p>商品详情3</p>
      </div>
      <!-- 商品详情 -->
      <!-- 分享 -->
      <!-- 分享 -->
      <!-- 收藏 -->
      <!-- 收藏 -->
      <!-- 加入购物车 -->
      <!-- 加入购物车 -->
      <!-- 立即购买 -->
      <!-- 立即购买 -->
    </div>
  </div>
</template>

<script>
import Head from '@/components/Head.vue'
import Carousel from '@/components/carousel/Carousel.vue'

export default {
  name: 'GoodInfo',
  components: {
    Head,
    Carousel
  },
  // props: {
  //   currentSize: {
  //     type: String,
  //     default: '1个'
  //   }
  // },
  created() {
    this.initCurrentSize()
  },
  data() {
    return {
      good: {
        name: '新鲜杨梅',
        price: { '100个': 18, '200个': 28, '400个': 68, '600个': 78 }
      },
      sizes: [
        {
          id: 1,
          size: '100个'
        },
        {
          id: 2,
          size: '200个'
        },
        {
          id: 3,
          size: '400个'
        },
        {
          id: 4,
          size: '600个'
        }
      ],
      currentSize: ''
    }
  },
  methods: {
    initCurrentSize() {
      this.currentSize = this.sizes[0].size
    },

    changeSize(size) {
      this.currentSize = size
      this.$refs.priceRef.innerText = '¥' + this.good.price[size]
      // this.currentSize = this.good.price[]
    }
  }
}
</script>

<style lang="less" scoped>
.goodinfo-container {
  .goodinfo-main {
    background: rgb(211, 124, 211);
    width: 1200px;
    margin: 0 auto;
    height: 1000px;
    // display: flex;
    .showgood {
      height: 700px;
      width: 100%;
      border-bottom: solid 1px black;
      .left {
        display: block;
        float: left;
        width: 510px;
        .carousel {
          width: 500px;
          height: 500px;
          margin: 10px;
        }
      }
      .right {
        float: left;
        display: block;
        width: 320px;
        margin-left: 50px;
        .price {
          display: block;
          font-size: 32px;
          color: red;
          // float: left;
        }
        .col {
          padding: 0;
        }
      }
    }
  }
}
</style>
