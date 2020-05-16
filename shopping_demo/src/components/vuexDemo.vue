<template>
<div>
<h1>{{$store.state.hello}}</h1>
<button @click="getStoreAge">getStoreAge</button>
<h3>{{$store.state.name}}</h3>
<p>{{$store.state.address}}</p>
<h3>getters</h3>
<p>{{this.$store.getters.getPersonMsg}}</p>
<p>{{this.$store.getters.getAll}}</p>
<button @click="chengeName('xz')">改变name</button>
<button @click="chengeHello('欢迎使用vuex！')">改变hello</button>
<button @click="chengeTow">改变两个</button>
<button @click="addAddress">添加</button>
<button @click="delAddress">删除</button>
<hr>
<button @click="aChengeName">调用action</button>
<button @click="ajax">调用ajax</button>
<br>
{{this.$store.state.users}}
<hr>
<table>
<tr>
<td>name</td>
<td>password</td>
</tr>
<tr v-for="(dom, index) in $store.state.users" v-bind:key="index">
<td>{{dom.username}}</td>
<td>{{dom.userpwd}}</td>
</tr>
</table>
<hr>
<h3>多个模块</h3>
{{$store.state.a.privince}}
{{$store.state.b.privince}}
{{$store.state.b.name}}
{{$store.state.c.privince}}
<br>
<!-- {{$store.state.name}} -->
<button @click="changeAPrivince">改变模块A中的privince</button>
<button @click="getA">调用模块A中的get</button>
<h2>没有使用辅助函数调用user</h2>
<h4>调用state</h4>
{{$store.state.user.mytest}}
<h4>调用getter </h4>
{{$store.getters.doSome}}
<h2>使用辅助函数调用user</h2>
<h4>调用state</h4>
{{this.user.mytest}}<br>
{{this.test}}
</div>
</template>

<script>
// 解构赋值
// import vuex from 'vuex'
// 导入辅助函数
import {mapState, mapGetters} from 'vuex'
export default {
  data () {
    return {
      users: this.$store.state.users
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
    // 同时改变两个
    chengeTow: function (payload) {
      // this.$store.commit('setEdit', payload)
      this.$store.commit({
        type: 'setEdit',
        payload:
        {
          'newName': 'jack',
          'newHello': '欢迎欢迎 热烈欢迎'
        }
      })
    },
    // 添加
    addAddress: function () {
      this.$store.commit('addAddress', '山西晋中')
    },
    // 删除
    delAddress: function () {
      this.$store.commit('delAddress')
    },
    // 异步改变名字
    aChengeName: function () {
      this.$store.dispatch('editAction', 'Tom, and Jack')
    },
    ajax: function () {
      this.$store.dispatch('addUsersAction', [])
    },
    changeAPrivince: function () {
      this.$store.commit('changePrivince', '河北')
    },
    getA: function () {
      console.log(this.$store.getters.getA)
      // console.log(vuex)/
    }
  },
  computed: {
    // ...表示的是对象展开符号
    // 对象混入到外部对象中
    ...mapState({
      'user': 'user'
    }),
    ...mapGetters({
      'test': 'doSome'
    })
  }
}
</script>
<style scoped>
/* @import url(): 引入css类 */
</style>
