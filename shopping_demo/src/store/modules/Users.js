import user from '@/ajax/user'
const state = {
  users: []
}
const getters = {
  users: state => state.users
  // function (state) {
  // return state.users
  // }
}
const mutations = {
  setUsers (state, users) {
    state.users = users
  }
}
const actions = {
  getUsers ({commit}) {
    // user.getUsers(function (data) {
    //   // console.log(data)/
    //   commit('setUsers', data)
    // })
    user.getUsers(data => {
      commit('setUsers', data)
    })
  }
}
export default {
  // namespaced: true, // 用于在全局引用此文里的方法时标识这一个文件名
  state,
  getters,
  mutations,
  actions
}
