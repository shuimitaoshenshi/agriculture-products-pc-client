<template>
  <div class="coupon-container">
    <div class="coupon-box" v-for="item in coupons" :key="item.id">
      <GoodCoupon
        :id="item.id"
        :money="item.money"
        :info="item.info"
        :name="item.name"
        :startTime="item.startTime"
        :endTime="item.endTime"
      ></GoodCoupon>
    </div>
  </div>
</template>

<script>
import GoodCoupon from '@/components/goods/GoodCoupon.vue'
export default {
  components: {
    GoodCoupon
  },
  data() {
    return {
      coupons: [
        {
          id: 1,
          money: 10,
          info: '新客专享',
          name: '店铺优惠券',
          startTime: '2022.10.9 8:00',
          endTime: '2023.10.9 23:59'
        },
        {
          id: 2,
          money: 10,
          info: '新客专享',
          name: '店铺优惠券',
          startTime: '2022.10.9 8:00',
          endTime: '2023.10.9 23:59'
        },
        {
          id: 3,
          money: 10,
          info: '新客专享',
          name: '店铺优惠券',
          startTime: '2022.10.9 8:00',
          endTime: '2023.10.9 23:59'
        },
        {
          id: 4,
          money: 10,
          info: '新客专享',
          name: '店铺优惠券',
          startTime: '2022.10.9 8:00',
          endTime: '2023.10.9 23:59'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.coupon-container {
  display: block;
  margin-left: 256px;
  margin-top: 50px;
  .coupon-box {
    display: inline-block;
    // width: 80%;
    margin-left: 50px;
    margin-bottom: 40px;
  }
}
</style>
