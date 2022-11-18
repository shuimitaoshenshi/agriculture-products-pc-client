<template>
  <div class="myinfo-container">
    <Head></Head>
    <NavigationLeft></NavigationLeft>
  </div>
</template>

<script>
import Head from '@/components/Head.vue'
import NavigationLeft from '@/components/navigation/NavigationLeft.vue'
export default {
  components: {
    Head,
    NavigationLeft
  }
}
</script>

<style lang="less" scoped></style>
