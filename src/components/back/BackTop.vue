<template>
  <div>
    <transition name="fade">
      <v-btn
        v-show="backTopShow"
        class="goTop"
        color="success"
        fab
        small
        dark
        @click="$vuetify.goTo(0, 'duration')"
        ><v-icon>mdi-chevron-up</v-icon></v-btn
      >
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backTopShow: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (document.documentElement.scrollTop + document.body.scrollTop > 500) {
        this.backTopShow = true
      } else {
        this.backTopShow = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.goTop {
  position: fixed;
  z-index: 5;
  right: 50px;
  bottom: 15%;
  color: blue;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
