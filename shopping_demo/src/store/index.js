// 导入vuex模块
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import moduleA from './A'
import moduleB from './B'
import moduleC from './C'
import user from './modules/user'
import users from './modules/users'
// 在vue中使用vuex
Vue.use(Vuex)
// 定义多个模块

// 创建一个vuex对象
const store = new Vuex.Store({
  // 声明模块
  modules: {
    a: moduleA,
    b: moduleB,
    c: moduleC,
    user: user,
    users: users
  },
  state: {
    hello: 'hello,vuex!',
    age: 18,
    count: 1,
    name: 'ZqYuy',
    users: [],
    users2: []

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
    setEdit (state, payload) {
      state.name = payload.payload.newName
      state.hello = payload.payload.newHello
    },
    addAddress (state, address) {
      Vue.set(state, 'address', address)
    },
    delAddress (state) {
      Vue.delete(state, 'address')
    },
    addUsers: function (state, payload) {
      state.users = payload
    }
  },
  getters: {
    getPersonMsg: function (state) {
      return state.name + ' ' + state.age
    },
    getAll: function (state, getters) {
      return state.hello + ' ' + getters.getPersonMsg
    }
  },
  actions: {
    editAction (context, newName) {
      setTimeout(() => {
        // context.commit('edit', newName)
        this.state.name = newName
      }, 1000)
    },
    addUsersAction (context, payload) {
      axios({
        url: 'http://localhost:3000/api/user',
        method: 'get'
      }).then((resp) => {
        console.log(resp.data)
        context.commit('addUsers', resp.data)
      })
    }
    // ,
    //     aEdit (context, payload) {
    // return new Promise((resolve, reject) => {

    // })
    //     }
  }
})
export default store
