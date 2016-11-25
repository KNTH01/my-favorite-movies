<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <search-bar @searchMovie="searchMovie"></search-bar>
          <result-list :movieResults="movieResults"></result-list>
        </div>
      </div>
    </div>
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
      movieResults: []
    }
  },
  methods: {
    searchMovie (movieResults) {
      console.log(movieResults)
      this.movieResults = movieResults
    }
  }
}
</script>

<style lang="scss">
  @import "styles/color";

  body {
    background-color: $color4;
    color: $color2;
    padding:12px;
  }

  #app {
    background-color: #FFF;
    padding: 10px;
    border-radius: 4px;
    border-top: 4px solid black;
  }
</style>
