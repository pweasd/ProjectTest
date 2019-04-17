<template>
  <div class="header-container">
    <div v-if="mainHeader" class="header__main">
      <div class="search-area">
        <img class="search-icon" src="../assets/image/btn_search.png" alt="검색" @click="searchClickHandler">
      </div>
      <nav class="tab-navi">
        <router-link :to="route.path" exact-active-class="active" v-for="(route, index) in routes" :key="index" class="menu">
          <img class="image" :src="$route | iconFilter(route)" :alt="route.display">
        </router-link>
      </nav>
    </div>

    <div v-else class="header__search"></div>
  </div>
</template>

<script>
  import { routes } from '../router/routes.js'
  export default {
    filters: {
      iconFilter(value1, value2) {
        if (value1.path === value2.path) return value2.icon_on
        else return value2.icon_off
      },
    },
    data() {
      return {
        routes,
        mainHeader: true,
      }
    },
    methods: {
      searchClickHandler() {
        // 검색!
        this.mainHeader = false
      },
    },
  }
</script>

<style lang="scss" scoped>
  .header-container {
    width: 100%;
    .header__main {
      width: 100%;

      .search-area {
        width: 100%;
        text-align: right;
        .search-icon {
          width: 24px;
          height: 24px;
        }
      }
      .tab-navi {
        display: flex;
        justify-content: center;
        font-size: 10px;
        height: 42px;
      }
      .menu {
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:not(:last-child) {
          margin-right: 15px;
        }
        .image {
          width: 24px;
          height: 24px;
        }
        &:nth-of-type(2) {
          .image {
            width: 20px;
            height: 16px;
          }
        }
      }
      .active {
        border-bottom: 2px solid #ffaa00;
      }
    }

    .header__search {
      width: 100%;
    }
  }
</style>