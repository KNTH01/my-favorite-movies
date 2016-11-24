<template lang="html">
  <div class="Pagination">
    {{ page }} | {{ totalResults }}
  </div>
</template>
<script>
  export default {
    props: {
      page: Number,
      totalResults: {
        type: Number,
        default: 1
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
