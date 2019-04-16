<template>
  <div id="app" class="container-fluid">
    <!-- <header params="route: route"></header> -->
    <div>
      <header></header>
      <!-- <nav params="route: route"></nav> -->
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  import nav from '../components/nav-menu'
  import Header from '../components/Header.vue'

  export default {
    components: {
      Header,
      nav,
    },

    data() {
      return {}
    },
  }
</script>

<style>
  #app {
    height: 100%;
  }
</style>
