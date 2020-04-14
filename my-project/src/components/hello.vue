<template>
    <div>
        <h1>this is a first page!</h1>
        <h2>{{message}}</h2>
        <h2>{{hobbies}}</h2>
        <button @click="sayhello">sayhello</button>
        <button @click="changemessage('赵泉钰学习vue')">changemessage</button>
    </div>
</template>
<script>
export default {
  data () {
    return {
      message: 'dkdlek',
      hobbies: ['爬山', '跑步', '竞走']
    }
  },
  methods: {
    sayhello: function () {
      console.log('hello')
    },
    changemessage: function (newMessage) {
      this.message = newMessage
      console.log(this.message)
    }
  }
}
</script>
<style scoped>
h1{
    color: red;
}
</style>
