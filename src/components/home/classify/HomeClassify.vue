<template>
  <div class="homeclassify-container">
    <v-card>
      <v-tabs dark background-color="teal darken-3" show-arrows>
        <v-tabs-slider color="teal lighten-3"></v-tabs-slider>

        <v-tab v-for="{ id, name } in sorts" :key="id">
          <a :href="'#/home/' + name">{{ name }}</a>
        </v-tab>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    sorts: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
  color: #fff;
}
a:hover,
a:visited,
a:link,
a:active {
  text-decoration: none;
  color: #fff;
}
.router-link-active {
  text-decoration: none;
  color: #fff;
}
.homeclassify-container {
  .v-tabs {
    padding: 0 0;
    a {
      display: block;
      width: 100%;
      height: 100%;
      line-height: 48px;
    }
  }
}
</style>
