<template>
  <div id="app">
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

<style lang="scss">
  #app {
    height: 100%;
  }
  // 태그 수정을 위한 css
  .el-popover {
    width: 100% !important;
    left: 0px !important;
    padding-top: 6px;
    padding-left: 8px;
    padding-right: 2px;
    padding-bottom: 12px;
    box-sizing: border-box;
    box-shadow: none;
    border-color: #DCDCDC;
    border-radius: 0px !important;
    z-index: 0 !important;
    .popper__arrow{
      border-bottom-color: #DCDCDC !important;
    }
    .TagContainer{
      display: inline-block;
      width: calc(33.3333% - 6px);
      margin-right: 6px;
      .VideoUpload__tag{
        width: 100%;
        height: 26px;
        margin-top: 6px;
        background: #FFFFFF !important;
        border: 1px solid #DCDCDC;
        box-sizing: border-box;
        border-radius: 3px;
        font-size: 10px;
        color: #222222;
      }
      .VideoUpload__tag:active{
        background: #FFE600 !important;
      }
      .TagGradeLine{
        width: calc(100vw - 18px);
        height: 1px;
        position: relative;
        left: calc(-66.6666vw + 8px);
        margin-top: 12px;
        margin-bottom: 6px;
        background: #DCDCDC;
      }
    }
  }
</style>