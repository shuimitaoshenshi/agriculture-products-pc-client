<template>
  <div class="gooditem-container" ref="gooditemRef">
    <div class="rand" v-if="rand">{{ rand }}</div>
    <div class="left">
      <div class="pic">
        <img :src="pic" alt="111" />
      </div>
    </div>
    <div class="right">
      <div class="top">
        <div class="name">{{ name }}</div>
      </div>
      <div class="bottom">
        <div class="price">¥{{ price }}</div>
        <div class="sales">{{ sales }}单</div>
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
@randHeight: 20px;
.gooditem-container {
  position: relative;
  display: flex;
  margin: 5px;
  padding: 5px;
  background-color: grey;
  padding-top: @randHeight;
  flex-wrap: wrap;
  > .rand {
    position: absolute;
    top: 0;
    height: @randHeight;
    font-size: 2rem;
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
    position: relative;
    float: right;
    flex: 1;
    .bottom {
      position: absolute;
      bottom: 0;
      width: 100%;
      .price {
        float: left;
      }
      .sales {
        float: right;
      }
    }
  }
}
</style>
