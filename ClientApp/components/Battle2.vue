<template>
  <div class="epi-container">
    <v-touch @swipeleft="clickHandler('prev')" @swiperight="clickHandler('next')">
      <div class="container">
        <div class="carousel">
          <div class="slide-left" v-for="(item, index) in items" :key="item.id" v-show="showIndex===index">{{ item.text }}</div>
        </div>

        <div class="versus">VS</div>

        <div class="carousel">
          <div class="slide-right" v-for="(item, index) in items" :key="item.id" v-show="showIndex===index">{{ item.text }}</div>
        </div>
      </div>
    </v-touch>
    <button @click="clickHandler('prev')">Prev</button>
    <button @click="clickHandler('next')">Next</button>
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
      }
    },
    mounted() {
      if (this.autoPlay) {
        this.autoPlayMethod()
      }
    },
    methods: {
      clickHandler(string) {
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
        setInterval(() => {
          this.clickHandler('next')
        }, 3500)
      },
    },
  }
</script>

<style lang="scss" scoped>
  $width: 150px;
  $height: 100px;
  .epi-container {
    width: 100%;
    height: 100%;
    max-width: 768px;
    margin: 0 auto;
    .container {
      display: flex;
      width: 100%;
      height: 100px;
    }
    .carousel {
      position: relative;
      flex: 1;
      border: 1px solid #555555;
      overflow: hidden; // 옆으로 빠질 때 스크롤 방지
    }
    .versus {
      display: flex;
      align-items: center;
      margin: 0 10px;
    }
    .slide-left {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background-color: #ed1c24;
      animation: slide-left 0.8s cubic-bezier(0.1, 0.69, 0.36, 1.55) backwards;
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
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background-color: #0072bc;
      animation: slide-right 0.8s cubic-bezier(0.1, 0.69, 0.36, 1.55) backwards;
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
  }
</style>