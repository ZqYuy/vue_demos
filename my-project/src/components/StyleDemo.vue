<template>
<div>
<div id="a" v-bind:class={blue:isblue,red:isred} style="width:100px"></div>
<button @click="change_bgColor">改变背景颜色</button>
<div id="b" v-bind:style=[aObject,bObject]>djskjdkda</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      // blue: '.blue'
      isblue: true,
      isred: false,
      aObject: {
        color: 'red',
        background: 'yellow'
      },
      bObject: {
        width: '300px',
        height: '200px'
      }
    }
  },
  methods: {
    change_bgColor: function () {
      this.isblue = !this.isblue
      this.isred = !this.isred
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
#a{
width:300px;
height: 300px;
}
.red{
background-color: red;
}
.blue{
background-color: blue;
}
</style>
