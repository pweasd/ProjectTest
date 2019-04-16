<template>
  <div class="epi-container">
    <v-touch @swipeleft="clickHandler('prev')" @swiperight="clickHandler('next')">
      <div class="container">
        <div class="carousel">
          <div class="slide-left" v-for="(item, index) in items" :key="item.id" v-show="showIndex===index">
            <div class="image" style="background: red;"></div>
            <div class="title">{{ item.text }}</div>
          </div>
        </div>

        <div class="versus">VS</div>

        <div class="carousel">
          <div class="slide-right" v-for="(item, index) in items" :key="item.id" v-show="showIndex===index">
            <div class="image" style="background: blue;"></div>
            <div class="title">{{ item.text }}</div>
          </div>
        </div>
      </div>
    </v-touch>
    <!-- <button @click="clickHandler('prev')">Prev</button>
    <button @click="clickHandler('next')">Next</button>-->
  </div>
</template>

<script>
  export default {
    props: {
      items: {
        default: () => {
          return [{ text: 'A' }, { text: 'B' }, { text: 'C' }]
        },
      },
      autoPlay: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        text: '',
        showIndex: 0,
        interval: undefined,
      }
    },
    mounted() {
      if (this.autoPlay) {
        this.autoPlayMethod()
      }
    },
    methods: {
      clickHandler(string) {
        // 직접 조작할 경우 인터벌의 시간과 키프레임의 시간이 안맞으므로 인터벌의 시간을 초기화
        clearInterval(this.interval)
        this.autoPlayMethod()

        if (string === 'next') {
          if (this.showIndex < this.items.length - 1) {
            this.showIndex++
          } else {
            this.showIndex = 0
          }
        } else {
          if (this.showIndex > 0) {
            this.showIndex--
          } else {
            this.showIndex = this.items.length - 1
          }
        }
      },
      autoPlayMethod() {
        this.interval = setInterval(() => {
          this.clickHandler('next')
        }, 3500)
      },
    },
  }
</script>

<style lang="scss" scoped>
  $height: 136px;
  @mixin slide-item() {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 2px;
    box-sizing: border-box;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .epi-container {
    width: 100%;
    height: 100%;
    max-width: 768px;
    margin: 0 auto;
    .container {
      display: flex;
      width: 100%;
      height: $height;
      position: relative;
    }
    .carousel {
      position: relative;
      flex: 1;
      overflow: hidden; // 옆으로 빠질 때 스크롤 방지
    }
    .versus {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 22%;
      left: 43%;
      z-index: 1;
      font-size: 18px;
      color: white;
      width: 44px;
      height: 44px;
      background-color: #ffaa00;
      border: 3px solid #ffffff;
      box-sizing: border-box;
      border-radius: 50%;
      // margin: 0 10px;
    }
    @keyframes fadeout {
      0% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
    .slide-left {
      @include slide-item();

      // background-color: #ed1c24;
      animation: slide-left 0.9s cubic-bezier(0.5, 0.69, 0.46, 1.55) backwards, fadeout 3.6s;
    }
    @keyframes slide-left {
      0% {
        // left: -100%;
        transform: translateX(-150%);
      }
      50% {
        transform: translateX(30%);
      }
      65% {
        transform: translateX(0);
      }
      80% {
        transform: translateX(15%);
      }
      100% {
        // left: 0;
        transform: translateX(0);
      }
    }
    .slide-right {
      @include slide-item();
      // background-color: #0072bc;
      animation: slide-right 0.9s cubic-bezier(0.5, 0.69, 0.46, 1.55) backwards, fadeout 3.6s;
    }
    @keyframes slide-right {
      0% {
        // right: -100%;
        transform: translateX(150%);
      }
      50% {
        transform: translateX(-30%);
      }
      65% {
        transform: translateX(0);
      }
      80% {
        transform: translateX(-15%);
      }
      100% {
        // right: 0;
        transform: translateX(0);
      }
    }
    .image {
      height: 100px;
    }
    .title {
      height: calc(100% - 100px);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>