import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// TYPES
const MAIN_SET_COUNTER = 'MAIN_SET_COUNTER'
const HEADER_TITLE = 'headerTitle'

// STATE
const state = {
  counter: 1,
  title: '',
}

// MUTATIONS
const mutations = {
  [MAIN_SET_COUNTER](state, obj) {
    state.counter = obj.counter
  },
  [HEADER_TITLE](state, payload) {
    state.title = payload
  },
}

// ACTIONS
const actions = {
  setCounter({ commit }, obj) {
    commit(MAIN_SET_COUNTER, obj)
  },
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
})
