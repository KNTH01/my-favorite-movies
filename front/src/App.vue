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
  @import "styles/color";

  body {
    font-size: 120%;
    background-color: $color4;
    color: $color2;
    font-family: cursive;
  }

  #app {
    width: 728px;
    background-color: #FFF;
    padding: 10px;
    border-radius: 4px;
    border-top: 4px solid black;
  }
</style>
