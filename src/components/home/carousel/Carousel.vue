<template>
  <div class="carousel-container">
    <v-carousel cycle>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <img :src="item.src" :alt="item.src" />
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: 'CarouselH',
  data() {
    return {
      items: [
        {
          src: require('@/assets/img/WechatIMG42.jpeg')
        },
        {
          src: require('@/assets/img/WechatIMG42.jpeg')
        },
        {
          src: require('@/assets/img/WechatIMG42.jpeg')
        },
        {
          src: require('@/assets/img/WechatIMG42.jpeg')
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.carousel-container {
  margin-bottom: 20px;
}
</style>
