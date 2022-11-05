<template>
  <div class="home-container">
    <Head></Head>
    <Search></Search>
    <div class="main">
      <div class="left">
        <Left>
          <!-- <GoodHot></GoodHot>
          <GoodDiscount></GoodDiscount>
          <GoodGroup></GoodGroup> -->

          <!-- <template #group>
            <GoodGroup></GoodGroup>
          </template> -->
        </Left>
      </div>
      <div class="right">
        <Right>
          <!-- <template #ranking>
            <Ranking></Ranking>
          </template> -->
        </Right>
      </div>
    </div>
  </div>
</template>

<script>
import Head from '@/components/Head.vue'
import Search from '@/components/home/search/Search.vue'
import Left from '../../components/home/left/Left.vue'
import Right from '../../components/home/right/Right.vue'
// import Ranking from '@/components/goods/ranking/Ranking.vue'
// import GoodGroup from '../../components/goods/group/GoodGroup.vue'
export default {
  name: 'MyHome',
  components: {
    Head,
    Search,
    Left,
    Right // GoodGroup

    // Ranking
  }
}
</script>

<style lang="less" scoped>
.home-container {
  box-sizing: border-box;
  .main {
    height: 1000px;
  }
}
</style>
