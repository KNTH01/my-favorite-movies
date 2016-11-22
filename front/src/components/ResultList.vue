<template lang="html">
  <div class="">
    <div v-for="movie in movies">
      <result-movie :title="movie.title" :year="movie.year" :img="movie.img"></result-movie>
    </div>
  </div>
</template>

<script>
  import ResultMovie from './ResultMovie.vue'

  export default {
    name: 'resultList',
    components: {
      ResultMovie
    },
    props: ['movies'],
    data () {
      return {
        page: 1
      }
    }
  }
</script>

<style lang="scss">

</style>
