<template>
  <form action="/search" method="GET">
    <div class="SearchBar">
        <input class="SearchInput" type="search" name="search" v-model="searchInput">
        <div class="SearchBtn">
          <input class="SearchBtn-input Button Button-primary" type="submit" value="Go">
        </div>
    </div>
</form>
</template>

<script>
export default {
  name: 'searchBar',
  data () {
    return {
      searchInput: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../styles/color";
  
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
