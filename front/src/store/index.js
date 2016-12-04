import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchMovie: '',
    searchResult: {}
  },
  getters: {
    searchMovie: state => state.searchMovie,
    searchResult: state => state.searchResult
  },
  mutations: {
    setSearchMovie (state, movie) {
      state.searchMovie = movie
    },
    setSearchResult (state, result) {
      state.searchResult = result
    }
  },
  actions: {
    searchMovie ({commit}, {movie, page = 1}) {
      // search movie request
      window.fetch(`/search/${movie}/${page}`)
        .then(res => {
          return res.json()
        })
        .then(json => {
          // mutate searchResult state
          commit('setSearchResult', json)
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
})
