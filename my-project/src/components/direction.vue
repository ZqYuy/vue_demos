<template>
<div>
    <h1>Vue中系统指令学习</h1>
    <!-- <div v-text="message">

    </div>
    <div v-html="message">

    </div>
    <div v-if="isShow">v-if当isShow为true时  这个标签显示</div>
    <div v-else-if="isShow">v-else当isShow为false时  这个标签显示</div>
    <div v-show="isShow">v-show当isShow为true时  这个标签显示</div>
    <hr>
    <div>
        <ul>
            <li v-for="item in hobbies" v-bind:key="item">
                {{item}}
            </li>
            <li v-for="(item,index) in hobbies" v-bind:key="index">
                {{index}}
            </li>
            <li v-for="(value,key,index) in person" v-bind:key="key">
                {{value}}:{{key}}:{{index}}
            </li>
        </ul>
    </div>
    <hr> -->
    <!-- <a v-bind:href="baidu">百度</a> -->
    <!-- <a :href="local">local</a> -->
    <hr>
    <h3>双向数据绑定</h3>
        请输入用户名：<input type="text" v-model="person.username">
        <!-- <button></button> -->
        <label for="">女</label>
        <input type="radio" value="female" v-model="person.sex">
        <label for="">男</label>
        <input type="radio" value="male" v-model="person.sex">
        <input type="checkbox" value="游泳" v-model="person.hobbies"/>游泳
        <input type="checkbox" value="爬山" v-model="person.hobbies"/>爬山
        <input type="checkbox" value="竞走" v-model="person.hobbies"/>竞走
        <select name="" id="" v-model="person.option">
            <option value="请选择">请选择</option>
            <option value="消防员">消防员</option>
            <option value="警察">警察</option>
            <option value="学生">学生</option>
            <option value="老师">老师</option>
        </select>
        <h4>显示个人信息</h4>
        username：{{person.username}}
        gender:{{person.sex}}
        hobbies:{{person.hobbies}}
        identity:{{person.option}}
</div>
</template>

<script>
export default {
  data () {
    return {
    //   message: '<h1>v-html和v-text之间的区别</h1>',
    //   isShow: true,
    //   hobbies: ['竞走', '爬山', '游泳'],
    //   person: {'name': '赵泉钰', 'age': 18},
    //   baidu: 'https://baidu.com',
    //   local: 'http://localhost:8080/direction',
      person: {
        username: '刘华1234',
        sex: 'female',
        hobbies: ['爬山', '竞走'],
        option: '消防员'
      }
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
h1{
    color:red
}
li{
    list-style: none;
}
</style>
