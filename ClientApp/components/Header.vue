<template>
  <div class="header-container">
    <nav class="tab-navi">
      <router-link :to="route.path" exact-active-class="active" v-for="(route, index) in routes" :key="index" class="menu">
        <img class="image" :src="route | iconFilter" :alt="route.display">
      </router-link>
    </nav>
  </div>
</template>

<script>
  import { routes } from '../router/routes.js'
  export default {
    filters: {
      iconFilter(route) {
        switch (route.name) {
          case 'HomePage':
            return '/dist/image/btn_home_off.png'
          case 'NewVideo':
            return '/dist/image/btn_home_off.png'
          case 'MyPage':
            return '/dist/image/btn_home_off.png'

          default:
            break
        }
      },
    },
    data() {
      return {
        routes,
      }
    },
  }
</script>

<style lang="scss" scoped>
  .header-container {
    width: 100%;
    height: 100px;
    .tab-navi {
      display: flex;
      justify-content: center;
      font-size: 10px;
    }
    .menu {
      width: 50px;
      display: flex;
      justify-content: center;
      &:not(:last-child) {
        margin-right: 15px;
      }
    }
    .active {
      border-bottom: 2px solid #ffaa00;
    }
    .image {
      width: 24px;
      height: 24px;
    }
  }
</style>