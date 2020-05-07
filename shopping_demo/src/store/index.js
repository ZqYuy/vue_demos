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
    count: 1,
    name: 'ZqYuy'
  },
  mutations: {
    // edit: function (state, newName) {
    //   state.name = newName
    // },
    edit (state, newName) {
      state.name = newName
    },
    chengeHello (state, newHello) {
      state.hello = newHello
    },
    setEdit (state, newName, newHello) {
      state.name = newName
      state.hello = newHello
    }
  }
})
export default store
