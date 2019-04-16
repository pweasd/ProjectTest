<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <header params="route: route"></header>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
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
