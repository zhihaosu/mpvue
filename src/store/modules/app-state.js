const state = () => {
  return {
    count: 10
  }
}

const actions = {}

const mutations = {
  increment: (state) => {
    state.count += 1
  },
  decrement: (state) => {
    state.count -= 1
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
