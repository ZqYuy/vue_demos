const moduleA = {
  state: {
    privince: 'shanxi'
  },
  getters: {
    getA  (state, getters, root) {
      console.log(root)
      return state.privince
    }
  },
  actions: {},
  mutations: {
    changePrivince (state, newPrivince) {
      state.privince = newPrivince
    }
  }
}
export default moduleA
