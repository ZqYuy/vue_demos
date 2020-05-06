// 导入vuex模块
import Vue from 'vue'
import Vuex from 'vuex'
// 在vue中使用vuex
Vue.use(Vuex)
// 创建一个vuex对象
const store = new Vuex.Store({
  state: {
    hello: 'hello,vuex!',
    age: 18,
    count: 1
  }
})
export default store
