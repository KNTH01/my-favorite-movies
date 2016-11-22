<template>
  <div id="app">
    <search-bar></search-bar>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar'

export default {
  name: 'app',
  components: {
    SearchBar
  }
}
</script>

<style lang="scss">
body {
  background-color: #EEE;
}

#app {
  width: 728px;
  background-color: #FFF;
  border-radius: 4px;
  border-top: 4px solid black;
}
</style>
