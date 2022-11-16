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
          <div class="tools">
            <!-- 分享 -->
            <i title="分享" class="glyphicon glyphicon-share-alt"></i>
            <!-- 分享 -->
            <!-- 加入购物车 -->
            <i title="加入购物车" class="glyphicon glyphicon-shopping-cart"></i>

            <!-- 加入购物车 -->
            <!-- 收藏 -->
            <i
              title="取消收藏"
              class="glyphicon glyphicon-star"
              v-if="good.isStar"
              @click="good.isStar = !good.isStar"
            ></i>
            <i
              title="收藏"
              class="glyphicon glyphicon-star-empty"
              v-if="!good.isStar"
              @click="good.isStar = !good.isStar"
            ></i>
            <!-- 收藏 -->
          </div>
          <!-- 立即购买 -->
          <div class="buy">
            <v-btn x-large color="success">
              <div>立即选购</div>
            </v-btn>
          </div>
          <!-- 立即购买 -->
        </div>
      </div>
      <!-- 商品详情 -->
      <div class="detail">
        <h3>商品详情</h3>
        <p>
          商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1商品详情1
        </p>
        <p>商品详情2</p>
        <p>商品详情3</p>
      </div>
      <div class="comments">
        <h3>商品评论</h3>
        <ul>
          <li class="comment" v-for="item in comments" :key="item.id">
            <GoodComment :comment="item"></GoodComment>
          </li>
        </ul>
        <div class="addcomment clearfix">
          <textarea></textarea>
          <button>发表评论</button>
        </div>
      </div>
      <!-- 商品详情 -->
    </div>
  </div>
  <!-- TODO -->
  <!-- 评论 -->
  <!-- 评论 -->
  <!-- TODO -->
</template>

<script>
import Head from '@/components/Head.vue'
import Carousel from '@/components/carousel/Carousel.vue'
import GoodComment from '@/components/goods/GoodComment.vue'
export default {
  name: 'GoodInfo',
  components: {
    Head,
    Carousel,
    GoodComment
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
        price: { '100个': 18, '200个': 28, '400个': 68, '600个': 78 },
        isStar: false
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
      // comments: [
      //   '好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃',
      //   '好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃',
      //   '好吃好吃'
      // ]
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
@heightMargin: 20px;
.goodinfo-container {
  .goodinfo-main {
    background: rgb(222, 182, 216);
    width: 1200px;
    margin: 0 auto;
    // height: 1000px;
    // display: flex;
    .showgood {
      height: 700px;
      width: 90%;
      margin: 0 auto;
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
        .name {
          margin-bottom: @heightMargin;
        }
        .price {
          display: block;
          font-size: 32px;
          color: blue;
          margin-bottom: @heightMargin;
          // float: left;
        }
        .sizebt {
          margin-bottom: 180px;
        }
        .col {
          padding: 0;
          margin-bottom: @heightMargin;
        }
        .tools {
          font-size: 32px;
          display: flex;
          i {
            flex: 1;
            // margin: 10px;
          }
          margin-bottom: @heightMargin;
        }
        .buy {
          display: block;
          margin-left: 50px;
          // float: right;
        }
      }
    }
    .detail {
      margin: 10px auto;
      width: 90%;
    }
    .comments {
      margin: 10px auto;
      width: 90%;
      .comment {
        height: 100px;
      }
      .addcomment {
        textarea {
          width: 100%;
          height: 200px;
          border: 1px solid #000000;
        }
        button {
          display: block;
          width: 150px;
          height: 50px;
          background: yellow;
          margin: 10px;
          float: right;
        }
      }
    }
  }
}
</style>
