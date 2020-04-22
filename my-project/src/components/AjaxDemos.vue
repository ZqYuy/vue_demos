<template>
<div>
<h1>vue.js通过Axios实现ajax</h1>
<table>
<tr>
<td>name</td>
<td>pwd</td>
</tr>
<tr v-for="p in ajaxData" v-bind:key="p.username">
<td>{{p.username}}</td>
<td>{{p.userpwd}}</td>
</tr>
</table>
</div>
</template>

<script>
export default {
  data () {
    return {
      ajaxData: []
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成 （访问DOM元素）
  mounted () {
    // console.log(this.$axios)
    let that = this
    this.$axios({
      url: 'http://localhost:3000/api/user',
      method: 'get'
    }).then(function (resp) {
      that.ajaxData = resp.data
      console.log(resp.data)
    }).cache((e) => {
      console.log(e)
    })
  }
}
</script>
<style scoped>
/* @import url(): 引入css类 */
</style>
