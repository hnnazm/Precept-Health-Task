import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    BASE_URL: 'http://163.47.115.230:30000/api',
    isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated') || 'false'),
    user: JSON.parse(localStorage.getItem('user') || '{}'),
    allUsers: [],
    deviceType: [],
    modelTypeOverview: []
  },
  mutations: {
    login(state, data) {
      state.user = data
      state.isAuthenticated = true
      localStorage.setItem('user', JSON.stringify(data))
      localStorage.setItem('isAuthenticated', 'true')
    },
    getUsers(state, data) {
      state.allUsers = data
    },
    getDeviceType(state, data) {
      state.deviceType = data
    },
    getModelTypeOverview(state, data) {
      state.modelTypeOverview = data
    }
  },
  actions: {
    async login({ commit, state }, user) {
      const response = await fetch(`${state.BASE_URL}/login`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'same-origin',
        body: JSON.stringify({
          email: user.email,
          password: user.password
        })
      })
      const data = await response.json()
      if (data.access_token) {
        commit('login', data)
      }
    },
    // async getUsers({ commit, state }) {
    //   const response = await fetch(`${state.BASE_URL}/users`, {
    //     method: 'GET',
    //     headers: {
    //       "authorization": state.token
    //     },
    //     credentials: "same-origin"
    //   })
    //   const data = await response.json()
    //   commit('getUsers', data)
    // },
    // async getDeviceType({commit, state}) {
    //   const response = await fetch(`${state.BASE_URL}/devicetype?limit=40`, {
    //     method: 'GET',
    //     headers: {
    //       "authorization": state.token
    //     },
    //     credentials: "same-origin"
    //   })
    //   const data = await response.json()
    //   commit('getDeviceType', data)
    // },
    // async getModelTypeOverview({ commit, state }) {
    //   const data = await fetchFromServer({ state }, '/modeltype')
    //   commit('getModelTypeOverview', data)
    // }
  },
  modules: {
  }
})
