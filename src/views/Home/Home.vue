<template>
  <div class="home-container">
    <Head></Head>
    <div class="main">
      <Carousel></Carousel>
      <BackTop></BackTop>
      <Classify :sorts="sorts"></Classify>
      <div class="goods" v-for="{ id, name } in sorts" :key="id">
        <a :name="'/home/' + name">
          <h2>{{ name }}</h2>
        </a>
        <WaterFall></WaterFall>
      </div>
    </div>
  </div>
</template>

<script>
import Head from '@/components/Head.vue'
import Carousel from '@/components/home/carousel/Carousel.vue'
import WaterFall from '@/components/home/goods/WaterFall.vue'
import Classify from '@/components/home/classify/HomeClassify.vue'
import BackTop from '@/components/back/BackTop'
export default {
  name: 'MyHome',
  components: {
    Head,
    Carousel,
    WaterFall,
    Classify,
    BackTop
  },
  data() {
    return {
      sorts: [
        {
          id: 1,
          name: '111'
        },
        {
          id: 2,
          name: '211'
        },
        {
          id: 3,
          name: '311'
        },
        {
          id: 4,
          name: '411'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
  color: #333;
}
a:hover,
a:visited,
a:link,
a:active {
  text-decoration: none;
  color: #333;
}
.router-link-active {
  text-decoration: none;
  color: #333;
}

.home-container {
  box-sizing: border-box;

  > .main {
    width: 1200px;

    // height: 1000px;
    // background: blue;
    margin: 0 auto;
  }
}
</style>
