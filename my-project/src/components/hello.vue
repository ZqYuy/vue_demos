<template>
    <div ref="hello">
        <h1>this is a first page!</h1>
        <h2>{{message}}</h2>
        <h2>{{hobbies}}</h2>
        <!-- {{2+3}}
    {{2*3}}
    {{23%3}}
    {{6>7?6:7}}
    {{isShow?true:false}}
    {{message.split('').reverse().join('')}} -->
        <button @click="sayhello">sayhello</button>
        <button @click="changemessage('赵泉钰学习vue')">changemessage</button>
        <MyLogo :title='title'></MyLogo>
        <router-link :to="{name:'eventdeal',query:{id:5,name:'zqy'}}">query eventdeal</router-link>
        <button @click="getID(5)">查询详细</button>
        <router-link :to="{name:'eventdeal',params:{id:5,name:'zqy'}}">params eventdeal</router-link>
        <router-link to="eventdeal/5/zqy">zh eventdeal</router-link>

    </div>
</template>
<script>
import MyLogo from '@/components/logo'
export default {
  components: {
    MyLogo: MyLogo
  },
  data () {
    return {
      message: 'dkdlek',
      hobbies: ['爬山', '跑步', '竞走'],
      isShow: false,
      title: '给子组件传递数值'
    }
  },
  methods: {
    sayhello: function () {
      console.log('hello')
    },
    getID: function (id) {
      console.log(id)
      this.$router.push({
        name: 'eventdeal',
        query: {
          'id': id
        }
      })
    },
    changemessage: function (newMessage) {
      this.message = newMessage
      // console.log(this.message)
      // console.log(this.$el)
      // $el关联的dom元素
      // console.log(this.$data['message'])
      // 获取data下面的message数据
      // console.log(this.$options)
      // 获取所有自定义的
      // console.log(this.$options['methods']['changemessage'])
      // console.log(this.$options['methods'].changemessage)
      // 获取自定义的属性
      // console.log(this.$refs.hello)
      // 获取页面中所有包含ref属性的dom元素
      console.log(this.$parent)// 获取父节点
      console.log(this.$children)// 获取子节点
    }
  }
}
</script>
<style scoped>
h1{
    color: red;
}
</style>
