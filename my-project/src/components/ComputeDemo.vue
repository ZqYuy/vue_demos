<template>
<div>
  <input type="text" v-model="message">
  {{reverseString}}<br/>
  {{site}}<br/>
  <button @click="setSite">163</button>
</div>
</template>

<script>
export default {
  data () {
    return {
      message: 'vue.js is a MVVM frontend framework!',
      name: 'baidu',
      url: 'https://www.baidu.com'
    }
  },
  methods: {
    reverseString2: function () {
      return this.message.split('').reverse().join('')
    },
    setSite: function () {
      alert('ok')
      this.site = '163 https://www.163.com'
      console.log(this.name)
      console.log(this.url)
    }
  },
  computed: {
    reverseString: function () {
      return this.message.split('').reverse().join('')
    },
    site: {
      get: function () {
        return this.name + ' ' + this.url
      },
      set: function (newData) {
        let array1 = newData.split(' ')
        this.name = array1[0]
        this.url = array1[1]
      }
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成 （访问DOM元素）
  mounted () {

  }
}
</script>
<style scoped>
/* @import url(): 引入css类 */
</style>
