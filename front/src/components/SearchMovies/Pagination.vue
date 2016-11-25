<template lang="html">
  <div class="Pagination">
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li>
          <a @click.prevent="page <=1 ? 1 : page--" class="PageButton" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li v-for="(pageNumber, index) in 5" @click="page = pageNumber" :class="{ active: page === pageNumber}"><span class="PageButton">{{ pageNumber }}</span></li>
        <li>
          <a @click.prevent="page >= 5 ? 5 : page++" class="PageButton" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
  import { eventBus } from '../../main'

  export default {
    props: {
      totalResults: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
        page: 1
      }
    },
    created () {
      eventBus.$on('searchMovie', (results) => {
        this.page = Number.isInteger(parseInt(results.page)) ? parseInt(results.page) : 1
      })
    },
    watch: {
      page () {
        eventBus.searchMovie(null, this.page)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .PageButton {
    cursor: pointer;
  }
</style>
