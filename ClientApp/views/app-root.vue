<template>
  <div id="app" class="container-fluid">
    <main-header params="route: route"></main-header>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header.vue'

  export default {
    components: {
      'main-header': Header,
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
