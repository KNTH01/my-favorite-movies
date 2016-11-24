<template lang="html">
  <div class="ResultList">
    <template v-for="movie in movies">
      <result-movie :title="movie.title" :year="movie.year" :img="movie.img"></result-movie>
    </template>
    {{ movieResults.totalPages }}
    <pagination :page="page" :totalResults="movieResults.totalResults"></pagination>
  </div>
</template>

<script>
  import ResultMovie from './ResultMovie.vue'
  import Pagination from './Pagination'

  export default {
    name: 'resultList',
    components: {
      ResultMovie,
      Pagination
    },
    props: ['movieResults'],
    data () {
      return {
        page: 1
      }
    },
    computed: {
      movies () {
        return this.movieResults.results
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ResultList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
