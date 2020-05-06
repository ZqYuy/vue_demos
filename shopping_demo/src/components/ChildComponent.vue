<template>
<div class="child" color="red">
<h1>这是一个子组件</h1>
<h3>通过事件，在子组件上单击事件，传递给父组件</h3>
<button @click="sendMSToParent">传递给父组件</button>
{{title}}
<h3>崽子组件中定义一个插槽</h3>
<button><slot v-bind="user" name="mydefault">{{user.name}}</slot></button>
<!-- 通过slot可以把父组件的内容插入到子组件的任何地方 -->
<p><slot name="mySlot"></slot></p>
<span><slot name="mySlot1"></slot></span>
<span>A:<slot name="a"></slot></span>
<span>B:<slot name="b"></slot></span>
</div>
</template>

<script>
export default {
  props: ['title'],
  // inheritAttrs: false, // 不会从父组件里继承属性值
  // class属性 子组件和父组件合并
  data () {
    return {
      user: {
        name: 'child name'
      }
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成 （访问DOM元素）
  mounted () {
    console.log(this.$el.getAttribute('color'))
    console.log(this.$el.getAttribute('class'))
  },
  methods: {
    sendMSToParent: function () {
      this.$emit('listenToChild', '这是子组件发送给父组件的数据')
    }
  }
}
</script>
<style scoped>
.child{
  border: 1px solid red
}
/* @import url(): 引入css类 */
</style>
