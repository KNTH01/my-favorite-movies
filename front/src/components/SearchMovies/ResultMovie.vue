<template lang="html">
  <div class="ResultMovie" :style="backgroundStyle">
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
        backgroundStyle: {
        }
      }
    },
    created () {
      this.setBackground()
    },
    computed: {
      backgroundImg () {
        const defaultImg = 'url(http://www.freeiconspng.com/uploads/movie-icon-2.png)'
        return this.img === 'N/A' ? defaultImg : `url(${this.img}`
      }
    },
    watch: {
      img () {
        this.setBackground()
      }
    },
    methods: {
      setBackground () {
        this.backgroundStyle.backgroundImage = this.backgroundImg
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/color";

  .ResultMovie {
    width: 150px;
    height: 200px;
    border-radius: 4px;
    margin: 0 0 20px 0;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 150px 200px;
    &-detail {
      border-radius: 4px 4px 0 0;
      padding: 5px;
      background-color: $color2;
      height: 30px;
      color: #FFF;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

</style>
