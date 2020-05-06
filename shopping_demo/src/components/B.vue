<template>
<div class="b">
<h1>b组件</h1>
{{BChild}}
<p>$arrts:{{$attrs}}</p>
<my-c v-bind="$attrs" v-on="$listeners"></my-c>
</div>
</template>

<script>
import C from '@/components/C'

export default {
  components: {
    MyC: C
  },
  props: ['BChild'],
  inheritAttrs: false,
  data () {
    return {

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
.b{
  border: 1px solid blue;
width: 400px;
height: 400px;
}
/* @import url(): 引入css类 */
</style>
