<template>
  <div class="card2">
    <v-row>
      <v-col cols="8">
        <div class="left">
          <div class="couponMoney">
            <span>{{ money }}¥</span>{{ info }}
          </div>
          <div class="couponName">{{ name }}</div>
          <div class="couponTime">{{ startTime }}-{{ endTime }}</div>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="right">
          <router-link to="/home"> 使用 </router-link>
        </div>
      </v-col>
    </v-row>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 0
    },
    money: {
      type: Number,
      default: 0
    },
    info: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    startTime: {
      type: String,
      default: ''
    },
    endTime: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
@cardSize: 2;
// 去除部分基础样式
.row {
  margin-right: 0;
  margin-left: 0;
}
.col-xl,
.col-xl-auto,
.col-xl-12,
.col-xl-11,
.col-xl-10,
.col-xl-9,
.col-xl-8,
.col-xl-7,
.col-xl-6,
.col-xl-5,
.col-xl-4,
.col-xl-3,
.col-xl-2,
.col-xl-1,
.col-lg,
.col-lg-auto,
.col-lg-12,
.col-lg-11,
.col-lg-10,
.col-lg-9,
.col-lg-8,
.col-lg-7,
.col-lg-6,
.col-lg-5,
.col-lg-4,
.col-lg-3,
.col-lg-2,
.col-lg-1,
.col-md,
.col-md-auto,
.col-md-12,
.col-md-11,
.col-md-10,
.col-md-9,
.col-md-8,
.col-md-7,
.col-md-6,
.col-md-5,
.col-md-4,
.col-md-3,
.col-md-2,
.col-md-1,
.col-sm,
.col-sm-auto,
.col-sm-12,
.col-sm-11,
.col-sm-10,
.col-sm-9,
.col-sm-8,
.col-sm-7,
.col-sm-6,
.col-sm-5,
.col-sm-4,
.col-sm-3,
.col-sm-2,
.col-sm-1,
.col,
.col-auto,
.col-12,
.col-11,
.col-10,
.col-9,
.col-8,
.col-7,
.col-6,
.col-5,
.col-4,
.col-3,
.col-2,
.col-1 {
  width: 100%;
  padding: 0;
}
// 优惠券
.card2 {
  font-size: 16px * @cardSize;
  width: 200px * @cardSize;
  height: 100px * @cardSize;
  position: relative;
  background: radial-gradient(
        circle at 130px * @cardSize top,
        transparent 10px * @cardSize,
        #f8a8b0 0
      )
      top / 100% 51px * @cardSize no-repeat,
    radial-gradient(
        circle at 130px * @cardSize bottom,
        transparent 10px * @cardSize,
        #f8a8b0 0
      )
      bottom / 100% 51px * @cardSize no-repeat;
  border-radius: 4px * @cardSize;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2));
  /* box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2); */
  .left {
    margin: 10px * @cardSize;
    span {
      color: red;
      margin-right: 10px * @cardSize;
    }
    .couponName {
      font-size: 14px * @cardSize;
    }
    .couponTime {
      font-size: 10px * @cardSize;
    }
  }
  .right {
    line-height: 100px * @cardSize;
    text-align: center;
  }
}
// 优惠券的线
.card2 > .line {
  position: absolute;
  top: 50px * @cardSize;
  right: 31px * @cardSize;
  width: 78px * @cardSize;
  height: 1px * @cardSize;
  background-image: linear-gradient(
    to right,
    #ffffff 0%,
    #ffffff 50%,
    transparent 50%
  );
  background-size: 12px * @cardSize 1px * @cardSize;
  background-repeat: repeat-x;
  transform: rotate(90deg);
}
</style>
