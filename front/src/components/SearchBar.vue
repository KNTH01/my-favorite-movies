<template>
  <div class="SearchBar">
    <input class="SearchInput" type="search" name="search" v-model="searchInput">
  </div>
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
  

</style>
