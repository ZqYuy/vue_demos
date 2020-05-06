<template>
<div class="a">
<h1>a组件</h1>
{{message}}
<my-b :BChild="BChild" :CChild="CChild" v-on:getCData="AGetCData">  </my-b>
</div>
</template>

<script>

import B from '@/components/B'
export default {
  components: {
    MyB: B
  },
  data () {
    return {
      BChild: 'A组件传递给B组件',
      CChild: 'A组件传递给C组件',
      message: ''
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成 （访问DOM元素）
  mounted () {

  },
  methods: {
    AGetCData: function (data) {
      console.log('接收C ->A发送的数据    ' + data)
      this.message = data
    }
  }
}
</script>
<style scoped>
.a{
  border: 1px solid red;
width: 600px;
height: 600px;
}
/* @import url(): 引入css类 */
</style>
