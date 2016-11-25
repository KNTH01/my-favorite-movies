import Vue from 'vue'
import App from './App'

export const eventBus = new Vue({
  methods: {
    searchMovie (searchInput, page = 1) {
      window.fetch(`/search/${searchInput}/${page}`)
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
