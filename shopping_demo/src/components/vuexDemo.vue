<template>
<div>
<h1>{{$store.state.hello}}</h1>
<button @click="getStoreAge">getStoreAge</button>
</div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成 （访问DOM元素）
  mounted () {

  },
  methods: {
    getStoreAge: function () {
      alert(this.$store.state.age)
    }
  }
}
</script>
<style scoped>
/* @import url(): 引入css类 */
</style>
