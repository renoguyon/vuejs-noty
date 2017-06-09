<template>
  <div class="app-container">
    <button class="btn btn-primary" @click="show">Click me</button>
  </div>
</template>

<script>
  import '../src/styles.less'

  export default {
    methods: {
      show () {
        this.$noty.info('Lorem ipsum dolot sit amet...', {
          timeout: 5000,
          progressBar: true
        })
      }
    }
  }
</script>

<style>
  .app-container {
    padding: 20px
  }
</style>
