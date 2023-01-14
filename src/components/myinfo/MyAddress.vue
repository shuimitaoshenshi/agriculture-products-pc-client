<template>
  <div class="myaddress-container">
    <!-- 已有地址 -->
    <div class="address-box" v-for="(item, index) in addresses" :key="item.id">
      <v-card>
        <v-card-title>地址{{ index + 1 }}</v-card-title>
        <!-- 未修改 -->
        <div
          class="currentContent"
          ref="currentContentRef"
          :id="'current_content_' + item.id"
        >
          <v-row>
            <v-col cols="2">
              <v-card-text>{{ item.reciever }}</v-card-text>
            </v-col>
            <v-col cols="2">
              <v-card-text>{{ item.tele }}</v-card-text>
            </v-col>
          </v-row>

          <!-- 地址 -->
          <v-card-text>{{ item.address }}</v-card-text>

          <!-- 地址 -->
        </div>
        <!-- 未修改 -->
        <!-- 修改 -->
        <div
          class="changeContent"
          ref="changeContentRef"
          :id="'change_content_' + item.id"
          style="display: none"
        >
          <v-card-text>
            <v-row>
              <v-col>
                <v-text-field
                  outlined
                  dense
                  label="收件人"
                  clearable
                  v-model="item.reciever"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  outlined
                  dense
                  label="手机号"
                  clearable
                  v-model="item.tele"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-text>
            <v-text-field
              outlined
              dense
              label="地址"
              clearable
              v-model="item.address"
            ></v-text-field>
          </v-card-text>
        </div>
        <!-- 修改 -->

        <!-- 增改按钮 -->
        <v-card-actions>
          <v-btn
            color="deep-purple lighten-2"
            outlined
            text
            @click="changeAddress(item.id)"
          >
            修改
          </v-btn>
          <v-btn
            color="deep-purple lighten-2"
            outlined
            text
            @click="deleteAddress(item.id, index)"
          >
            删除
          </v-btn>
          <v-btn @click="test"></v-btn>
        </v-card-actions>
        <!-- 增改按钮 -->
      </v-card>
    </div>
    <!-- 已有地址 -->
    <!-- 添加地址 -->
    <div class="address-box">
      <v-card>
        <v-card-title>地址{{ addresses.length + 1 }}</v-card-title>
        <!-- 修改 -->
        <div
          class="changeContent"
          ref="changeContentRef"
          :id="'change_content_'"
        >
          <v-card-text>
            <v-row>
              <v-col>
                <v-text-field
                  outlined
                  dense
                  label="收件人"
                  clearable
                  v-model="newAddress.reciever"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  outlined
                  dense
                  label="手机号"
                  clearable
                  v-model="newAddress.tele"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-text>
            <v-text-field
              outlined
              dense
              label="地址"
              clearable
              v-model="newAddress.address"
            ></v-text-field>
          </v-card-text>
        </div>
        <!-- 修改 -->

        <!-- 增改按钮 -->
        <v-card-actions>
          <v-btn
            color="deep-purple lighten-2"
            outlined
            text
            @click="
              addAddress(
                newAddress.reciever,
                newAddress.tele,
                newAddress.address
              )
            "
          >
            添加地址
          </v-btn>
        </v-card-actions>
        <!-- 增改按钮 -->
      </v-card>
    </div>
    <!-- 添加地址 -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      addresses: [
        { id: 1, address: '东湖', reciever: 'xxx', tele: '123545' },
        { id: 2, address: '东湖', reciever: 'xxx', tele: '123545' },
        { id: 3, address: '东湖', reciever: 'xxx', tele: '123545' },
        { id: 4, address: '东湖', reciever: 'xxx', tele: '123545' },
        { id: 5, address: '东湖', reciever: 'xxx', tele: '123545' },
        { id: 6, address: '东湖', reciever: 'xxx', tele: '123545' },
        { id: 7, address: '东湖', reciever: 'xxx', tele: '123545' }
      ],
      newAddress: {
        // id未定
        id: 99999,
        address: '',
        reciever: '',
        tele: ''
      }
    }
  },
  methods: {
    async test() {
      const res = await axios.get('/api/addressBook/list')
      console.log(res)
      console.log(1)
    },
    changeAddress(id) {
      console.log('change')
      const contentId = 'current_content_' + id
      const currentContentRef = this.$refs.currentContentRef
      currentContentRef.forEach((ref) => {
        if (ref.id === contentId) {
          if (ref.style.display === 'none') {
            ref.style.display = ''
            ref.nextSibling.style.display = 'none'
          } else {
            ref.style.display = 'none'
            ref.nextSibling.style.display = ''
          }
        }
      })
      // TODO: 发送修改信息
    },
    deleteAddress(id, index) {
      console.log('delete')
      const contentId = 'current_content_' + id
      console.log(contentId)
      this.addresses.pop(index)
      // const currentContentRef = this.$refs.currentContentRef
      // console.log(currentContentRef[0].parentNode)
      // currentContentRef[0].parentNode.style.display = 'none'
      // currentContentRef.forEach((ref) => {
      //   if (ref.id === contentId) {
      //     ref.parentNode.style.display = 'none'
      //   }
      // })
      // TODO: 发送删除信息
    },
    addAddress(reciever, tele, address) {
      // TODO:发送添加信息

      console.log('add')

      // 新建对象
      const newAddressItem = {}
      newAddressItem.address = address
      newAddressItem.tele = tele
      newAddressItem.reciever = reciever
      // 加入addresses
      this.addresses.push(newAddressItem)
      console.log(this.addresses)
      // 清空

      this.newAddress.address = ''
      this.newAddress.tele = ''
      this.newAddress.reciever = ''

      // TODO 验证
    }
  }
}
</script>

<style lang="less" scoped>
.myaddress-container {
  display: block;
  margin-left: 50px;
  margin-top: 50px;
  .address-box {
    display: block;
    width: 80%;
    margin-left: 256px;
    margin-bottom: 20px;
  }
}
</style>
