<template lang="html">
  <div class="ResultList">
    <div class="row">
      <div class="col-sm-12">
        <div class="MoviesContainer">
          <template v-for="movie in movies">
            <result-movie :title="movie.title" :year="movie.year" :img="movie.img"></result-movie>
          </template>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <template v-if="movies">
          <pagination :totalResults="parseInt(movieResults.totalResults)"></pagination>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import ResultMovie from './ResultMovie'
  import Pagination from './Pagination'
  import { mapGetters } from 'vuex'

  export default {
    name: 'resultList',
    components: {
      ResultMovie,
      Pagination
    },
    data () {
      return {
        movieResults: {}
      }
    },
    computed: {
      ...mapGetters(['searchResult']),
      movies () {
        return this.searchResult.results
      }
    }
  }
</script>

<style lang="scss" scoped>
  .MoviesContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
