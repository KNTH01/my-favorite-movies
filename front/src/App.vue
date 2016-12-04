<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <navigation></navigation>
          <div class="AppContainer">
            <transition name="fade" appear>
              <router-view></router-view>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navigation from './components/Navigation'

  export default {
    name: 'app',
    components: {
      Navigation
    }
  }
</script>

<style lang="scss">
  @import "styles/color";

  body {
    background-color: $color4;
    color: $color2;
    padding:12px;
  }

  .AppContainer {
    background-color: #FFF;
    padding: 10px;
    border-radius: 4px;
    border-top: 4px solid black;
  }

  .fade {
    $duration: 0.8s;
    &-enter {
      opacity: 0;
      &-active {
        transition: opacity $duration ease-out;
      }
    }
    &-leave {
      &-leave-active {
        opacity: 1;
        transition: opacity $duration ease-out;
      }
    }
  }
</style>
