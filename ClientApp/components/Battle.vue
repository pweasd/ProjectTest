<template>
  <div class="epi-container">
    <v-touch @swipeleft="clickHandler('prev')" @swiperight="clickHandler('next')">
      <div class="container">
        <div class="carousel">
          <div class="slide-left" v-for="(item, index) in items" :key="item.id" v-show="showIndex===index">{{ item.text }}</div>
        </div>

        <!-- <div class="versus">
          <div class="hero-btn">
            <button class="btn" @click="click">VS</button>
            <span class="particles-circle" v-for="n in 35" :key="n"></span>
          </div>
        </div>-->

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
      click() {
        console.log('click')
        document.getElementsByClassName('hero-btn')[0].parentElement.classList.add('active')
        setTimeout(() => {
          document.getElementsByClassName('hero-btn')[0].parentElement.classList.remove('active')
        }, 1000)
      },
      clickHandler(string) {
        // document.getElementsByClassName('hero-btn')[0].parentElement.classList.add('active')
        // setTimeout(() => {
        //   document.getElementsByClassName('hero-btn')[0].parentElement.classList.remove('active')
        // }, 1500)
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
        }, 3000)
      },
    },
  }
</script>

<style lang="scss" scoped>
  $width: 44px;
  $height: 100px;
  $bubble-d: 4.5rem; // bubble diameter
  $bubble-r: 0.5 * $bubble-d; // bubble-radius
  $particle-d: 0.375rem;
  $particle-r: 0.5 * $particle-d;
  $theme: #ffaa00;
  $loader-size: 150px;
  $speed: 1.5s;
  .versus {
    display: flex;
    align-items: center;
    // margin: 0 10px;
    position: absolute;
    text-align: center;
    left: 0;
    width: 100%;
    max-height: 90vh;
    top: 26px;
    z-index: 1;
  }
  .hero-btn {
    position: relative;
    width: $width;
    margin: auto;
    height: $width;
    .btn {
      background-color: $theme;
      border: none;
      outline: none;
      text-decoration: none;
      text-transform: uppercase;
      color: #fff;
      display: inline-block;
      width: $width;
      height: $width;
      text-align: center;
      border-radius: 50%;
      white-space: nowrap;
      text-overflow: ellipsis;
      // -moz-user-select: -moz-none;
      // -ms-user-select: none;
      // -webkit-user-select: none;
      // user-select: none;
      // -moz-appearance: none;
      // -webkit-appearance: none;
      cursor: pointer;
      outline: 0 !important;
      &:hover {
        background-color: darken($theme, 5%);
      }
      &:active {
      }
      .active &:active {
      }
      &:focus {
        box-shadow: inherit;
      }
    }
    .particles-circle {
      position: absolute;
      background-color: $theme;
      width: 30px;
      height: 30px;
      top: 10px;
      left: 50%;
      margin-left: -15px;
      z-index: -1;
      border-radius: 50%;
      transform: scale(0);
      visibility: hidden;

      &:nth-of-type(odd) {
        background-color: transparent;
      }

      @for $i from 0 through 35 {
        @keyframes particles-#{$i} {
          from {
            transform: scale(1);
            visibility: visible;
          }
          to {
            left: random(500) - 250 + 0px;
            top: random(500) - 250 + 0px;
            transform: scale(0);
            visibility: hidden;
          }
        }

        .active &:nth-of-type(#{$i}) {
          animation: particles-#{$i} $speed ($i / 40) + 0s;
        }
      }
    }
  }
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