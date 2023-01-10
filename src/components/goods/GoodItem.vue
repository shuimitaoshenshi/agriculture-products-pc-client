<template>
  <div class="gooditem-container" ref="gooditemRef">
    <!-- <div class="rand" v-if="rand">{{ rand }}</div> -->
    <div class="newCus" v-if="isNewCus">
      <div class="base"></div>
      <span>新客专享</span>
    </div>
    <div class="left">
      <div class="pic">
        <img :src="pic" alt="111" />
      </div>
    </div>
    <div class="right">
      <div class="top">
        <div class="name">{{ name }}</div>
        <div class="price">¥{{ price }}</div>
      </div>
      <div class="bottom">
        <div class="store">库存{{ store }}件</div>
        <div class="button">
          <v-btn color="success"> 立即选购 </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pic: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0
    },
    rand: {
      type: Number,
      default: 0
    },
    sales: {
      type: Number,
      default: -1
    },
    store: {
      type: Number,
      default: 0
    },
    isNewCus: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // pic_src: require('@/assets/good_1.jpeg')
    }
  },
  mounted() {
    if (!this.rand) {
      this.removeRand()
    }
  },
  methods: {
    // getImg(pic) {
    //   return require(pic)
    // }
    removeRand() {
      this.$refs.gooditemRef.style.paddingTop = '0'
      // console.log(this.$refs.gooditemRef.style.paddingLeft='0')
    }
  }
}
</script>

<style lang="less" scoped>
// @randHeight: 20px;
// @buttonHeight:40px;
.gooditem-container {
  position: relative;
  display: flex;
  margin: 5px;
  padding: 5px;
  background-color: grey;
  // padding-top: @randHeight;
  // flex-wrap: wrap;
  > .rand {
    position: absolute;
    top: 0;
    // height: @randHeight;
    font-size: 2rem;
  }
  .newCus {
    position: absolute;
    top: 0;
    left: 0;
    span {
      position: absolute;
      margin: 10px;
      top: 0;
      display: block;
      width: 55px;
      color: white;
    }
    .base {
      width: 0;
      height: 0;
      border-top: 100px solid red;
      border-right: 100px solid transparent;
    }
  }
  .left {
    float: left;
    flex: 1;
    .pic {
      display: block;
      margin: 5px;
      img {
        width: 76%;
        // scale: ();
      }
    }
  }
  .right {
    padding: 10px;
    position: relative;
    float: right;
    flex: 1;

    .bottom {
      position: absolute;
      bottom: 0;
      width: 100%;
      .price,
      .sales,
      .store {
        float: left;
        line-height: 36px;
        margin-right: 40px;
        // float: left;
      }
      // .sales {
      //   // display: block;
      //   // float: right;
      // }
      // .store {
      //   // display: block;
      //   // float: right;
      // }
      .button {
        float: left;
      }
    }
  }
}
</style>
