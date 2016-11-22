<template lang="html">
  <div class="ResultMovie">
    <img class="ResultMovie-img" :src="img" :alt="title" />
  </div>
</template>

<script>
  export default {
    name: 'resultMovie',
    props: ['title', 'year', 'img'],
    data () {
      return {
        backgroundImg: {
          backgroundImg: `url(${this.img}`
        }
      }
    }
  }
</script>

<style lang="scss">
  .ResultMovie {
    border-radius: 4px;
    border: 1px solid black;
    width: 150px;
    height: 100px;
    &-img {
      width: 150px;
    }
  }
</style>
