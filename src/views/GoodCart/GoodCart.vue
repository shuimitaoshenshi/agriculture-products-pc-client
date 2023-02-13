<template>
  <div class="goodcart-container">
    <Head></Head>
    <div
      class="container"
      style="background-color: lightblue; margin-top: 10px"
    >
      <!-- 购物车中的商品 -->
      <div class="items" v-for="item in goods" :key="item.id" @click="goInfo">
        <!-- <router-link to="/info"> -->
        <v-row>
          <v-col cols="1"
            ><v-simple-checkbox v-model="item.state"></v-simple-checkbox
          ></v-col>
          <v-col cols="11">
            <GoodItem
              :id="item.id"
              :pic="item.pic"
              :name="item.name"
              :price="item.price"
              :rand="item.rand"
              :sales="item.sales"
              :store="item.store"
              style="width: 500px"
            >
              <!-- <div class="counter">
              <button class="subtract">-</button>
              <p class="number">{{ item.counter }}</p>
              <button class="add">+</button>
            </div> -->
              <ul class="btn-numbox">
                <li>
                  <ul class="count">
                    <li>
                      <span
                        id="num-jian"
                        class="num-jian"
                        @click.stop="item.counter--"
                        >-</span
                      >
                    </li>
                    <li>
                      <input
                        type="text"
                        class="input-num"
                        id="input-num"
                        v-model="item.counter"
                      />
                    </li>
                    <li>
                      <span
                        id="num-jia"
                        class="num-jia"
                        @click.stop="item.counter++"
                        >+</span
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </GoodItem>
          </v-col>
        </v-row>
        <!-- </router-link> -->
      </div>
      <!-- 购物车中的商品 -->
      <hr />
      <!-- 底部结算 -->
      <v-row class="total">
        <v-col cols="4">
          <div style="">
            <v-checkbox
              v-model="fullState"
              label="全选"
              @change="fullChange"
            ></v-checkbox>
          </div>
        </v-col>
        <v-col cols="3">
          <div style="line-height: 67px; height: 67px; font-size: 20px">
            已选商品{{ totalNum }}件
          </div>
        </v-col>
        <v-col cols="3">
          <div style="line-height: 67px; height: 67px; font-size: 20px">
            共计{{ totalPrice }}元
          </div>
        </v-col>
        <v-col cols="2">
          <v-btn
            color="success"
            style="width: 90%; height: 100%; font-size: 32px"
            >结算</v-btn
          >
        </v-col>
      </v-row>
      <!-- 底部结算 -->
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
          sort: '111',
          counter: 1,
          state: false
        },
        {
          id: 2,
          pic: require('@/assets/img/goog_1.jpeg'),
          name: '我是商品',
          price: 2,
          rand: 0,
          sales: 1300,
          counter: 2,
          state: false
        }
      ]
    }
  },
  computed: {
    fullState() {
      return this.goods.every((item) => item.state)
    },
    totalNum() {
      return this.goods
        .filter((item) => item.state)
        .reduce((total, item) => (total += item.counter), 0)
    },
    totalPrice() {
      return this.goods
        .filter((item) => item.state)
        .reduce((total, item) => (total += item.counter * item.price), 0)
    }
  },
  methods: {
    goInfo() {
      this.$router.push('/info')
    },
    test() {
      console.log(1)
    },
    fullChange(e) {
      this.goods.forEach((item) => (item.state = e))
    }
    // comTotalNum() {
    //   this.totalNum = 0
    //   this.goods.forEach((item) => (this.totalNum += item.counter))
    //   console.log(this.totalNum)
    // }
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
  font-size: 16px;
  .counter {
    float: left;
    display: block;
    border: #333 solid;
    p {
      display: inline-block;
      width: 50%;
      text-align: center;
      margin: 0;
      border: #333 0 solid;
    }
    button {
      display: inline-block;
      // margin: 5px;
      width: 20%;
    }
    // display: inline-block;
  }
}
.btn-numbox {
  overflow: hidden;
  // margin-top: 20px;
}

.btn-numbox li {
  float: left;
}

.btn-numbox .count {
  overflow: hidden;
  // margin: 0 16px 0 -20px;
}

.btn-numbox .count .num-jian,
.input-num,
.num-jia {
  display: inline-block;
  width: 28px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  font-size: 18px;
  color: #999;
  cursor: pointer;
  border: 1px solid #e6e6e6;
}
.btn-numbox .count .input-num {
  width: 40px;
  height: 26px;
  color: #333;
  border-left: 0;
  border-right: 0;
}
label {
  margin-bottom: 0;
}
</style>
