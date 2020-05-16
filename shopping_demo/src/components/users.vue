<template>
<div>
<button @click="getAllUsers">获取所有的user信息</button>
{{$store.state.users.users}}
<table>
<tr>
<td>username</td>
<td>userpwd</td>
</tr>
<tr v-for="(user,index) in $store.state.users.users" v-bind:key="index">
<td>{{user.username}}</td>
<td>{{user.userpwd}}</td>
</tr>
</table>
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
      // users: []
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成 （访问DOM元素）
  mounted () {
    this.getUsers()
  },
  methods: {
    ...mapActions(['getUsers']),
    getAllUsers: function () {
      // this.$store.dispatch('getUsers')
    }
  },
  computed: {
    ...mapGetters(['users'])
  }
}
</script>
<style scoped>
/* @import url(): 引入css类 */
</style>
