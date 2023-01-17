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
              <v-card-text>收货人：{{ item.consignee }}</v-card-text>
            </v-col>
            <v-col cols="2">
              <v-card-text>手机号：{{ item.phone }}</v-card-text>
            </v-col>
          </v-row>
          <v-card-text
            >{{ item.provinceName }}{{ item.cityName
            }}{{ item.districtName }}</v-card-text
          >
          <!-- 地址 -->
          <v-card-text>详细地址：{{ item.detail }}</v-card-text>

          <!-- 地址 -->
        </div>
        <!-- 未修改 -->
        <!-- 修改 -->
        <div
          class="changeContent"
          ref="changeContentRef"
          :id="'change_content_'"
          style="display: none"
        >
          <v-card-text>
            <v-row>
              <v-col>
                <v-text-field
                  outlined
                  dense
                  label="收货人"
                  clearable
                  v-model="item.consignee"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  outlined
                  dense
                  label="手机号"
                  clearable
                  v-model="item.phone"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-select
                  :items="province"
                  label="省"
                  item-text="name"
                  :item-value="(item) => item"
                  v-model="currentProvince"
                  outlined
                  @change="createCity"
                ></v-select>
              </v-col>
              <v-col>
                <v-select
                  :items="city"
                  label="市"
                  item-text="name"
                  :item-value="(item) => item"
                  v-model="currentCity"
                  outlined
                  @change="createDistrict"
                ></v-select>
              </v-col>
              <v-col>
                <v-select
                  :items="district"
                  label="区"
                  item-text="name"
                  :item-value="(item) => item"
                  outlined
                  v-model="currentDistrict"
                ></v-select>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-text>
            <v-text-field
              outlined
              dense
              label="详细地址"
              clearable
              v-model="item.detail"
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
            @click="changeAddress(item)"
          >
            修改
          </v-btn>
          <v-btn
            color="deep-purple lighten-2"
            outlined
            text
            @click="deleteAddress(item)"
          >
            删除
          </v-btn>
          <v-btn @click="test">地址</v-btn>
          <v-btn @click="login">登陆</v-btn>
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
                  label="收货人"
                  clearable
                  v-model="newAddress.consignee"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  outlined
                  dense
                  label="手机号"
                  clearable
                  v-model="newAddress.phone"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-select
                  :items="province"
                  label="省"
                  item-text="name"
                  :item-value="(item) => item"
                  v-model="currentProvince"
                  outlined
                  @change="createCity"
                ></v-select>
              </v-col>
              <v-col>
                <v-select
                  :items="city"
                  label="市"
                  item-text="name"
                  :item-value="(item) => item"
                  v-model="currentCity"
                  outlined
                  @change="createDistrict"
                ></v-select>
              </v-col>
              <v-col>
                <v-select
                  :items="district"
                  label="区"
                  item-text="name"
                  :item-value="(item) => item"
                  v-model="currentDistrict"
                  outlined
                ></v-select>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-text>
            <v-text-field
              outlined
              dense
              label="详细地址"
              clearable
              v-model="newAddress.detail"
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
            @click="addAddress(newAddress)"
          >
            <!-- @click="
              addAddress(
                newAddress.consignee,
                newAddress.phone,
                newAddress.detail
              )
            " -->
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
import addressAll from '@/assets/address.json'
import {
  addAddressApi,
  getAddressApi,
  changeAddressApi,
  deleteAddressApi
} from '@/api/address'
export default {
  data() {
    return {
      addresses: [],
      province: [],
      currentProvince: () => {},
      city: [],
      currentCity: () => {},
      district: [],
      currentDistrict: () => {},
      newAddress: {
        id: 0,
        detail: '',
        consignee: '',
        phone: ''
      }
    }
  },
  created() {
    this.createProvince()
    // this.getAddresses()
  },
  mounted() {
    this.getAddresses()
  },
  methods: {
    async getAddresses() {
      const { data: res } = await getAddressApi()
      console.log(res.data)
      this.addresses = res.data
    },
    createProvince() {
      this.province = []
      addressAll.forEach((item) => {
        const obj = {}
        obj.name = item.name
        obj.code = item.code
        obj.children = item.children
        this.province.push(obj)
        // console.log(obj)
      })
    },
    createCity() {
      this.city = []
      console.log(this.currentProvince)
      this.currentProvince.children.forEach((item) => {
        const obj = {}
        obj.name = item.name
        obj.code = item.code
        obj.children = item.children
        this.city.push(obj)
        // console.log(obj)
      })
    },
    createDistrict() {
      this.district = []
      console.log(this.currentCity)
      this.currentCity.children.forEach((item) => {
        const obj = {}
        obj.name = item.name
        obj.code = item.code
        // obj.children = item.children
        this.district.push(obj)
        // console.log(obj)
      })
    },

    async test() {
      const res = await axios.delete('/api/addressBook', {
        // detail: 'ppp',
        // consignee: 'pppppp',
        // phone: 'pppp',
        ids: '1614822206972432385'
      })
      console.log(res)
    },
    async login() {
      const res = await axios.post('/api/user/login', {
        name: '张三',
        password: '123456'
      })
      console.log(res)
    },
    async changeAddress(item) {
      // console.log('change')
      const id = item.id
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
      // 修改item的省市区信息
      item.provinceName = this.currentProvince.name
      // data.province_code = this.currentProvince.code
      item.provinceCode = this.currentProvince.code
      item.cityName = this.currentCity.name
      item.cityCode = this.currentCity.code
      item.districtName = this.currentDistrict.name
      item.districtCode = this.currentDistrict.code
      // 清空省市区信息
      this.currentProvince = {}
      this.currentCity = {}
      this.currentDistrict = {}
      this.city = []
      this.district = []
      // TODO: 发送修改信息
      const res = await changeAddressApi(item)
      console.log(res)
    },
    // async deleteAddress(id, index) {
    async deleteAddress(item) {
      console.log(item)
      const r = await deleteAddressApi(item.id)
      console.log(r)
      this.getAddresses()
      // const res = await axios.delete('/api/addressBook', item)
      // console.log(res)
      // const contentId = 'current_content_' + id
      // console.log(contentId)
      // this.addresses.pop(index)
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
    // addAddress(consignee, phone, detail) {
    // addAddress(consignee, phone, detail) {
    addAddress(data) {
      // TODO:发送添加信息
      data.provinceName = this.currentProvince.name
      // data.province_code = this.currentProvince.code
      data.provinceCode = this.currentProvince.code
      data.cityName = this.currentCity.name
      data.cityCode = this.currentCity.code
      data.districtName = this.currentDistrict.name
      data.districtCode = this.currentDistrict.code
      console.log(data)
      addAddressApi(data)
      // 新建对象
      // const newAddressItem = {}
      // newAddressItem.detail = detail
      // newAddressItem.phone = phone
      // newAddressItem.consignee = consignee
      // // 加入addresses
      // this.addresses.push(newAddressItem)
      // console.log(this.addresses)
      // // 清空

      this.newAddress.detail = ''
      this.newAddress.phone = ''
      this.newAddress.consignee = ''
      this.currentProvince = {}
      this.currentCity = {}
      this.currentDistrict = {}
      this.city = []
      this.district = []
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
