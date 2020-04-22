<template>

<div>
<span>千米</span><input type="text" v-model="kelometers"><br>
<span>米</span><input type="text" v-model="meters"><br>
</div>
</template>

<script>
// 引入组件
export default {
  data () {
    return {
      kelometers: 0,
      meters: 0
    }
  },
  methods: {

  },
  watch: {
    kelometers: function (value) {
      this.kelometers = value
      this.meters = value * 1000
    },
    meters: function (value) {
      this.meters = value
      this.kelometers = value / 1000
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
</style>
