<template>
  <div id="app">
    <search-bar @searchMovie="searchMovie"></search-bar>
    <result-list :moviesResults="moviesResults"></result-list>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar'
import ResultList from './components/ResultList'

export default {
  name: 'app',
  components: {
    SearchBar,
    ResultList
  },
  data () {
    return {
      moviesResults: []
    }
  },
  methods: {
    searchMovie (moviesResults) {
      this.moviesResults = moviesResults
    }
  }
}
</script>

<style lang="scss">
  @import "styles/color";

  body {
    font-size: 120%;
    background-color: $color4;
    color: $color2;
    font-family: cursive;
  }

  #app {
    width: 728px;
    background-color: #FFF;
    padding: 10px;
    border-radius: 4px;
    border-top: 4px solid black;
  }
</style>
