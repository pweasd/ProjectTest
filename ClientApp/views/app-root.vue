<template>
  <div id="app">
    <header params="route: route"></header>

    <router-view></router-view>
  </div>
</template>

<script>
  import Header from '../components/Header.vue'

  export default {
    components: {
      Header,
    },

    data() {
      return {}
    },
  }
</script>

<style>
</style>
