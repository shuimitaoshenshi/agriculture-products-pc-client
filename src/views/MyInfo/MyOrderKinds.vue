<template>
  <div class="nav-head">
    <NavigationHead></NavigationHead>
    <router-view :orders="orders" @delOrder="delOrder"></router-view>
  </div>
</template>

<script>
import NavigationHead from '@/components/navigation/NavigationHead.vue'
export default {
  components: {
    NavigationHead
  },
  data() {
    return {
      orders: [
        { id: 1, good: 1, num: 1, price: 1, state: 'unpaid' },
        { id: 2, good: 1, num: 1, price: 1, state: 'undelivered' },
        { id: 3, good: 1, num: 1, price: 1, state: 'aftersale' }
      ]
    }
  },
  methods: {
    delOrder(index) {
      this.orders.pop(index)
    }
  }
}
</script>

<style lang="less">
.nav-head {
  display: block;
  width: 80%;
  margin-left: 50px;
  margin-top: 20px;
  position: relative;
  left: 256px;
  top: 10px;
}
</style>
