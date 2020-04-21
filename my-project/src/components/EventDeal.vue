<template>
<div>
    <button v-on:click='sayHello'>sayHello</button>
    <button @click.once='count=count+1'>count</button>
    {{count}}
    <a @click.prevent="setMessage('hello')" href="https://www.baidu.com">改变message</a>
    {{message}}
    <div class="a" @click.self="sayHello">
      <div class="b"></div>
    </div>
    <input type="text" v-on:keyup='submit'>
</div>
</template>

<script>
export default {
  data () {
    return {
      message: 'hello,vue.js',
      count: 1
    }
  },
  methods: {
    sayHello: function (e) {
      // eslint-disable-next-line no-unused-expressions
    //   alert('hello，vue')
      this.message = 'vue.js中的事件处理'
      console.log(e.target.tagName)// target 起源（标签元素）
    },
    setMessage: function (message) {
      this.message = message
    },
    submit: function (e) {
      alert(e.keyCode)
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
.a{
  background: orange;
  width:300px;
  height: 300px;
}
.b{
  background: orchid;
  width: 100px;
  height: 100px;
}
</style>
