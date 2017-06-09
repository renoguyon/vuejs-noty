<template>
  <div class="app-container">
    <button class="btn btn-primary" @click="show">Click me</button>
  </div>
</template>

<script>
  import 'noty/lib/noty.css'

  export default {
    methods: {
      show () {
        this.$noty.info('Lorem ipsum dolot sit amet...')
      }
    }
  }
</script>

<style>
  .app-container {
    padding: 20px
  }
</style>
