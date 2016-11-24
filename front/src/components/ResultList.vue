<template lang="html">
  <div class="ResultList">
    <template v-for="movie in movies">
      <result-movie :title="movie.title" :year="movie.year" :img="movie.img"></result-movie>
    </template>
    <pagination :page="page" :totalPages="movie"></pagination>
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
    props: ['moviesResults'],
    computed: {
      movies () {
        return this.moviesResults.results
      }
    },
    data () {
      return {
        page: 1
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
