<template>
<div>
<h1>在父组件中使用子组件</h1>
<!-- <My-Child title="parent title"></My-Child> -->
<My-Child :title="parentTitle" class="mychild" color='blue' name='this is no props' v-on:listenToChild='getChildData'>
<!-- <span>this is parent</span> -->
<span>{{parentTitle}}</span>
<template #mydefault="a">
<span>{{a.name}}</span>
</template>
<template v-slot:[slotname]><h1>123</h1></template>
</My-Child>
{{ChildData}}
<button @click="chengeSlotName">动态插槽变化</button>
</div>
</template>

<script>
// 导入子组件
import ChildComponent from '@/components/ChildComponent'
// 声明
export default {
  components: {
    MyChild: ChildComponent
  },
  data () {
    return {
      parentTitle: 'this is a parent component',
      ChildData: '',
      user: {
        name: 'parent name'
      },
      slotname: 'a'
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成 （访问DOM元素）
  mounted () {
    console.log(this.$el.children[1])
    console.log(this.$el.children[1].getAttribute('name'))
  },
  methods: {
    getChildData: function (data) {
      alert(data)
      this.ChildData = data
    },
    chengeSlotName: function () {
      if (this.slotname === 'a') {
        this.slotname = 'b'
      } else {
        this.slotname = 'a'
      }
    }
  }
}
</script>
<style scoped>
/* @import url(): 引入css类 */
</style>
