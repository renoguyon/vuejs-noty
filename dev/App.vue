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
        this.$noty.show('First message', 'error')
      }
    }
  }
</script>

<style>
  .app-container {
    padding: 20px
  }
</style>
