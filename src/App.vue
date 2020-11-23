<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="30%">
    <Marvel />
  </div>
</template>

<script>
import Marvel from './components/Marvel.vue'

export default {
  name: 'App',
  components: {
    Marvel
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
