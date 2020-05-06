<template>
<div class="c">
<h1>c组件</h1>
<p>$arrts:{{$attrs}}</p>

{{CChild}}
<button @click="CToA">向A组件发送数据</button>
<!-- {{$attrs}} -->
</div>
</template>

<script>
export default {
  props: ['CChild'],
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
    CToA: function () {
      // alert('ok')
      this.$emit('getCData', 'C to A')
    }
  }
}
</script>
<style scoped>
.c{
  border: 1px solid yellow;
width: 200px;
height: 200px;
}
/* @import url(): 引入css类 */
</style>
