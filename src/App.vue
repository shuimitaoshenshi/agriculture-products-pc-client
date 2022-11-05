<template>
  <!-- App.vue -->
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: ['Appetizers', 'Entrees'],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>
<style lang="less" scoped>
/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
  margin: 0 auto;
}
</style>
