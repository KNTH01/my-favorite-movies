<template>
  <div class="SearchBar">
      <input class="SearchInput" type="search" name="search" v-model="searchInput" @keypress.enter="searchMovie">
      <div class="SearchBtn">
        <button class="SearchBtn-input Button Button-primary" @click="searchMovie">Go</button>
      </div>
  </div>
</template>

<script>
import { eventBus } from '../../main'

export default {
  name: 'searchBar',
  data () {
    return {
      searchInput: 'Batman'
    }
  },
  methods: {
    searchMovie () {
      eventBus.searchMovie(this.searchInput)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/color";

  $paddindSearch: 4px 10px;

  .SearchBar {
    width: 100%;
    display: table;
  }

  .SearchInput {
    width: 100%;
    font-size: 2em;
    display: table-cell;
    padding: $paddindSearch;
    border: 1px solid $color1;
    border-radius: 4px 0 0 4px;
    margin-bottom: 20px;

    &:focus {
      outline: none;
    }
  }

  .SearchBtn {
    display: table-cell;
    width: 1px;
    &-input {
      &:focus {
        outline: none;
      }
      border: 1px solid $color1;
      border-radius: 0 4px 4px 0px;
      padding: $paddindSearch;
      font-size: 2em;
    }
  }

  .Button {
    &-primary {
      background-color: $color1;
      color: #FFF;
    }
  }
</style>
