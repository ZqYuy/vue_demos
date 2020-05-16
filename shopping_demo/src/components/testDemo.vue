<template>
<div>
<button @click="getAllUsers">测试ACTION</button>
{{$store.state.users.users}}
</div>
</template>

<script>
import user from '@/ajax/user'
export default {
  data () {
    return {
      users: []
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {

  },
  methods: {
    f1: function (data) {
      console.log(data)
    },
    getAllUsers: function () {
      this.$store.dispatch('getUsers')
    }
  },
  // 生命周期 - 挂载完成 （访问DOM元素）
  mounted () {
    user.getUsers(function (data) {
      console.log(data)
    })
  }
}
</script>
<style scoped>
/* @import url(): 引入css类 */
</style>
