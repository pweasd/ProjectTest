<template>
  <div class="header__container">
    <div v-if="headerSerch" class="header__search">
      <img class="back-icon" src="../assets/image/btn_arrow_back.png" alt="검색바 끄기" @click="searchBarClickHandler">
      <div class="input__area">
        <input class="input" type="text" @focus="inputFocus">
        <img class="search-icon2" src="../assets/image/btn_search.png" alt="검색">
      </div>
    </div>

    <div v-if="headerSerch" class="header__cover" :style="'min-height :' + minHeight + 'px;'"></div>

    <div v-else-if="headerMain" class="header__main">
      <div class="search-area">
        <img class="search-icon" src="../assets/image/btn_search.png" alt="검색바 켜기" @click="searchBarClickHandler">
      </div>
      <nav class="tab-navi">
        <router-link :to="route.path" exact-active-class="active" v-for="(route, index) in MENU_ROUTES" :key="index" class="menu">
          <img class="image" :src="$route | iconFilter(route)" :alt="route.display">
        </router-link>
      </nav>
    </div>

    <div v-else class="header__backBar">{{ headerTitle }}</div>
  </div>
</template>

<script>
  import { MENU_ROUTES } from '../router/menu_routes.js'
  export default {
    filters: {
      iconFilter(value1, value2) {
        if (value1.path === value2.path) return value2.icon_on
        else return value2.icon_off
      },
    },
    created() {
      console.log('$route', this.$route)
    },
    data() {
      return {
        MENU_ROUTES,
        headerSerch: false,
      }
    },
    computed: {
      headerMain() {
        switch (this.$route.name) {
          case 'HomePage':
          case 'NewVideo':
          case 'MyPage':
            return true

          default:
            return false
        }
      },
      headerTitle() {
        return this.$store.state.title
      },
      minHeight() {
        // 스크롤 높이 - 검색 헤더 높이
        return document.body.offsetHeight - 46
      },
    },
    methods: {
      inputFocus() {},
      searchBarClickHandler() {
        console.log('click')
        this.headerSerch = !this.headerSerch
      },
    },
  }
</script>

<style lang="scss" scoped>
  .header__container {
    width: 100%;
    .header__cover {
      position: absolute;
      z-index: 5;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }
    .header__search {
      width: 100%;
      display: flex;
      .back-icon {
        width: 42px;
        height: 46px;
      }
      .input__area {
        flex: 1;
        position: relative;
        padding: 5px 6px;
        box-sizing: border-box;
      }
      .input {
        width: 100%;
        height: 100%;
        padding-right: 30px;
        box-sizing: border-box;
      }
      .search-icon2 {
        position: absolute;
        top: 10px;
        right: 13px;
        width: 24px;
        height: 24px;
      }
    }

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
  }
</style>