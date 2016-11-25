import Vue from 'vue'
import App from './App'

export const eventBus = new Vue({
  data: {
    searchInput: ''
  },
  methods: {
    searchMovie (searchInput = null, page = 1) {
      if (searchInput) {
        this.searchInput = searchInput
      }

      window.fetch(`/search/${this.searchInput}/${page}`)
        .then(res => {
          return res.json()
        })
        .then(json => {
          this.$emit('searchMovie', json)
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
