<template>
  <div class="myinfo-container">
    <Head></Head>
    <NavigationLeft></NavigationLeft>
    <!-- 地址管理 -->
    <router-view></router-view>
    <!-- 地址管理 -->
  </div>
</template>

<script>
import Head from '@/components/Head.vue'
import NavigationLeft from '@/components/navigation/NavigationLeft.vue'
export default {
  components: {
    Head,
    NavigationLeft
    // MyAddress
  }
}
</script>

<style lang="less" scoped></style>
