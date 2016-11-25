<template lang="html">
  <div>
    <search-bar></search-bar>
    <result-list></result-list>
  </div>
</template>

<script>
  import SearchBar from './SearchBar'
  import ResultList from './ResultList'

  export default {
    components: {
      SearchBar,
      ResultList
    }
  }
</script>
