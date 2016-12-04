<template lang="html">
  <div class="Pagination">
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li>
          <a @click.prevent="page <=1 ? 1 : page--" class="PageButton" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li v-for="(pageNumber, index) in totalPage" @click="page = pageNumber" :class="{ active: page === pageNumber}"><span class="PageButton">{{ pageNumber }}</span></li>
        <li>
          <a @click.prevent="page >= totalPage ? totalPage : page++" class="PageButton" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        page: 1
      }
    },
    computed: {
      totalResults () {
        return this.$store.getters.searchResult.totalResults
      },
      totalPage () {
        return Math.ceil(this.totalResults / 10)
      }
    },
    watch: {
      page () {
        this.$store.dispatch('searchMovie', {
          movie: this.$store.getters.searchMovie,
          page: this.page
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .PageButton {
    cursor: pointer;
  }
</style>
