<template>
  <div class="SearchBar">
    <div class="input-group input-group-lg">
      <input type="search" v-model="searchInput" @keypress.enter="searchMovie" class="form-control" placeholder="Search...">
      <span class="input-group-btn">
        <button class="btn btn-primary" type="button">Go!</button>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'searchBar',
    computed: {
      searchInput: {
        get () {
          return this.$store.getters.searchMovie
        },
        set (value) {
          this.$store.commit('setSearchMovie', value)
        }
      }
    },
    methods: {
      searchMovie () {
        this.$store.dispatch('searchMovie', {
          movie: this.searchInput
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .SearchBar {
    margin: 0 0 20px 0;
  }
</style>
