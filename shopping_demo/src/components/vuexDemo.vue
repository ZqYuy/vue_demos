<template>
<div>
<h1>{{$store.state.hello}}</h1>
<button @click="getStoreAge">getStoreAge</button>
<h3>{{$store.state.name}}</h3>
<button @click="chengeName('xz')">改变name</button>
<button @click="chengeHello('欢迎使用vuex！')">改变hello</button>
<button @click="chengeTow('jack', '欢迎欢迎')">改变两个</button>
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
    },
    chengeName: function (newName) {
      this.$store.commit('edit', newName)
    },
    chengeHello: function (newHello) {
      this.$store.commit('chengeHello', newHello)
    },
    chengeTow: function (newName, newHello) {
      this.$store.commit('setEdit', newName, newHello)
    }
  }
}
</script>
<style scoped>
/* @import url(): 引入css类 */
</style>
