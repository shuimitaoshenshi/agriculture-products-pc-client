<template>
  <div class="navigationleft-container">
    <v-navigation-drawer
      class="accent-4 clearfix"
      permanent
      absolute
      style="top: 52px"
    >
      <v-list>
        <router-link :to="item.url" v-for="item in items" :key="item.title">
          <v-list-item link>
            <!-- <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon> -->

            <v-list-item-content>
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block
            ><router-link to="/login"> 退 出 登 陆 </router-link></v-btn
          >
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: '订单', url: '/my/order' },
        { title: '收藏', url: '/my/star' },
        { title: '地址管理', url: '/my/address' }
      ]
    }
  },
  methods: {
    // 在左导航插入代理人链接
    insertAgent() {
      this.items.push({ title: '代理人信息', url: '/my/agent' })
    }
  },
  created() {
    // 如果是代理人，显示代理人信息
    // this.insertAgent() ;
    this.insertAgent()
  }
}
</script>

<style lang="less" scoped>
.navigationleft-container {
  display: block;
  float: left;
  aside {
    // top: 52px;
  }
}
</style>
