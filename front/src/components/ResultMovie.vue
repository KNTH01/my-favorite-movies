<template lang="html">
  <div class="ResultMovie" :style="backgroundImg">
    <div class="ResultMovie-detail">
      {{ title }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'resultMovie',
    props: ['title', 'year', 'img'],
    data () {
      return {
        backgroundImg: {
          background: `url(${this.img}`
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/color";

  .ResultMovie {
    width: 150px;
    height: 200px;
    border-radius: 4px;
    margin: 0 0 20px 0;
    &-detail {
      border-radius: 4px 4px 0 0;
      padding: 5px;
      background-color: $color2;
      height: 20px;
      color: #FFF;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

</style>
