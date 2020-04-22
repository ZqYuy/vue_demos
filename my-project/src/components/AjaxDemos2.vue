<template>
<div>
<select name="" id="province" @change="getPro">
<option v-for="p in provinces" v-bind:key="p" :value="p">
{{p}}
</option>
</select>
<select  id="city">
<option v-for="p in city" v-bind:key="p" :value="p">
{{p}}
</option>
</select>
</div>
</template>

<script>
export default {
  data () {
    return {
      ajaxData: {},
      provinces: [],
      city: []
    }
  },
  methods: {
    getPro: function () {
      var provinceName = document.getElementById('province').value
      for (let index = 0; index < this.ajaxData.length; index++) {
        for (let key in this.ajaxData[index]) {
          if (key === provinceName) {
            this.city = this.ajaxData[index][key]
            console.log(this.city)
            break
          }
        }
      }
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成 （访问DOM元素）
  mounted () {
    this.$axios({
      url: 'http://localhost:8080/data/province',
      method: 'get'
    }).then((resp) => {
      this.ajaxData = resp.data
      console.log(resp.data)
      for (var t = 0; t < this.ajaxData.length; t++) {
        // console.log(this.ajaxData[t])
        for (let key in this.ajaxData[t]) {
          // console.log(key)
          this.provinces.push(key)
        }
      }
      // console.log(this.provinces)
      // 设置默认第一个下拉列表框
      for (let key in this.ajaxData[0]) {
        this.city = this.ajaxData[0][key]
      }
    })
  }
}
</script>
<style scoped>
/* @import url(): 引入css类 */
</style>
