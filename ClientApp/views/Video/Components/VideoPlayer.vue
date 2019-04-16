<template>
  <div class="video-player__container">
    <div class="player" :style="'height: ' + playerHeight + 'px;'">
      <video id="myVideo" width="100%" height="100%" loop preload :style="videoStyle">
        <source :src="`http://api.wecandeo.com/video?k=${One_Min_Video}`" type="video/mp4">
      </video>

      <div class="overlayout" @click.prevent.stop="layoutClickHandler">
        <div class="detail-area">
          <p class="flow-text" style="color: red;">@풍덩~풍덩~풍덩~풍덩~풍덩~</p>
          <p class="--font-black">바다소리들으면 편안해짐!</p>
          <span style="color: aqua">#Pacific Ocean</span>
          <span style="color: aqua">#바다각!</span>
          <p>{{ viewLeftNumber }}, {{ viewRightNumber }}</p>
        </div>

        <div :class="'button-layout ' + buttonClass">
          <button class="prev" @click.prevent.stop="seekClickHandler('prev')">뒤로</button>
          <button class="play-pause" @click.prevent.stop="playClickHandler">재생</button>
          <button class="next" @click.prevent.stop="seekClickHandler('next')">앞</button>
        </div>

        <button @click.stop="belowShowMenu" style="background: transparent; position: absolute; right: 25px; bottom: 20%;">
          <!-- <img src="/static/img/MobileImage/baseline_share_white_18dp.png" alt="공유"> -->
          <p style="color: white;">공유</p>
        </button>
      </div>
      <div :class="showMenuElement(showMenu)">
        <div class="inner-content">틱톡 따라하기 2편!</div>
      </div>
    </div>

    <label class="find-file">
      <input type="file" @change="filesChange" class="file-tag" accept=".*" multiple>
    </label>
    <button @click.stop="getVideo">영상정보조회버튼</button>
    <button @click.stop="incodingVideo">인코딩영상조회버튼</button>
    <button @click="btnClick">영상업로드</button>
    <button @click="horizontalScreen">{{ horizontalMode | changeMode }}</button>
    <button @click="setVideo">영상배포버튼</button>
    <!-- <img v-if="TEST_Thumnail" :src="TEST_Thumnail[0].url" alt> -->
    <video id="video-element" style="width: 100%;">
      <source id="source" type="video/mp4">
    </video>
    <!-- <canvas id="canvas-element"></canvas> -->

    <upload-loading-modal v-if="open" :uploading="uploading" :uploadStatus="uploadStatus"></upload-loading-modal>
  </div>
</template>

<script>
  import Axios from 'axios'
  import UploadLoadingModal from './UploadLoadingModal.vue'
  export default {
    components: {
      UploadLoadingModal,
    },
    filters: {
      changeMode(value) {
        if (value) return '세로모드'
        else return '가로모드'
      },
    },
    async created() {
      this.getUploadToken()
    },
    mounted() {
      // 처음에 플레이어 높이를 잡아준다
      this.getPlayerHeight()
      this.countingNumber()

      // 기기 방향 변경 시
      window.addEventListener('resize', () => {
        console.log('resize')
        console.log('window.innerWidth', window.innerWidth)
        console.log('window.innerHeight', window.innerHeight)
        if (window.innerWidth > window.innerHeight) {
          console.log('land-scape')
        } else {
          console.log('portrait')
        }
        // 플레이어 높이 재설정
        this.getPlayerHeight()
      })
    },
    data() {
      return {
        // wecandeo
        VideoVertical: 'BOKNS9AQWrHTxcoBzoDz4nAVnNv9iiNuTSJGxZIlg3ykoPnPvV8E0xSho4pqLKNis4ZCy4IG7kZTQ431147TteoAieie',
        VideoHorizontal: 'BOKNS9AQWrHTxcoBzoDz4nAVnNv9iiNuTSJGxZIlg3ylzb6MURjRkNSho4pqLKNis4ZCy4IG7kZTQ431147TteoAieie',
        One_Min_Video: 'BOKNS9AQWrHTxcoBzoDz4nAVnNv9iiNuTf0z5islt3lSrxzI1RHsS7RSho4pqLKNis4ZCy4IG7kZTQ431147TteoAieie',
        API_Key: 'd3ffd7cbce6c12a2ddd4689a0b1baaa7',
        org_access_key: 'piifA7eUipwLYCCyfgUEFSisKyeHK7JLisetsf0LnKiiVmc8ie',
        pkg: 1010076,
        testFolderId: 2007362,

        // upload
        uploading: 0,
        uploadStatus: '진행상황',
        uploadURL: undefined,
        token: undefined,
        file: undefined,
        open: false,

        // player
        TEST_Thumnail: undefined,
        viewLeftNumber: 0,
        viewRightNumber: 0,
        videoAccessKey: undefined,
        thumbnail_url: undefined,
        playFlag: false,
        buttonClass: '--none',
        showMenu: false,
        startValue: 0,
        playerHeight: undefined,
        videoStyle: '',
        horizontalMode: false,
        setTimePlay: undefined,
        setTimeNotShow: undefined,
      }
    },
    computed: {
      videoPlayPauseButton() {
        if (this.playFlag) {
          return 'pauseButton'
        } else {
          return 'playButton'
        }
      },
    },
    watch: {
      uploading(value) {
        if (value === 100) this.uploadStatus = '저장 중...'
        else this.uploadStatus = '업로드 중...'
      },
      buttonClass(value) {
        // 0.2초 사이에 일시정지를 할 수 있기 때문에 클리어
        clearTimeout(this.setTimeNotShow)
        if (value === '--close') {
          // 애니메이션 길이 만큼 지연
          this.setTimeNotShow = setTimeout(() => {
            this.buttonClass = '--none'
          }, 200)
        }
      },
    },
    methods: {
      // 틱톡과 동일하게 기기방향 고정 시, 레이아웃을 제외한 영상의 방향만 변경
      horizontalScreen(event) {
        this.horizontalMode = !this.horizontalMode

        // 인코딩한 영상비율
        let scale = 1.777

        if (scale * window.innerWidth >= window.innerHeight) {
          scale = window.innerHeight / window.innerWidth
          console.log(scale)
        }

        if (this.horizontalMode) {
          this.videoStyle = `transform: scale(${scale}) rotate(90deg);`
        } else {
          this.videoStyle = ''
        }
      },
      countingNumber() {
        this.leftCounter(513)
        this.rightCounter(459)
      },
      leftCounter(prop) {
        let count = 1
        if (prop > 40) {
          count = Math.floor(prop / 40)
        }
        console.log(count)

        let a = setInterval(() => {
          this.viewLeftNumber = this.viewLeftNumber + count
          if (this.viewLeftNumber > prop) {
            this.viewLeftNumber = prop
            clearInterval(a)
          }
        }, 20)
      },
      rightCounter(prop) {
        let count = 1
        if (prop > 40) {
          count = Math.floor(prop / 40)
        }
        let a = setInterval(() => {
          this.viewRightNumber = this.viewRightNumber + count
          if (this.viewRightNumber > prop) {
            this.viewRightNumber = prop
            clearInterval(a)
          }
        }, 20)
      },
      // 업로드 토큰 얻기
      async getUploadToken() {
        let response = await Axios.get(`http://api.wecandeo.com/web/v3/uploadToken.json?key=${this.API_Key}`)
        this.token = response.data.uploadInfo.token
        this.uploadURL = response.data.uploadInfo.uploadUrl
        console.log('uploadToken', this.token, 'uploadURL', this.uploadURL)
      },
      // 업로드 할 영상의 런타임
      videoRuntime(event, fileList) {
        // let video = document.createElement('video')
        let video = document.getElementById('video-element')
        let duration = undefined
        // let _CANVAS = document.querySelector('#canvas-element')
        // let _CANVAS_CTX = _CANVAS.getContext('2d')

        video.src = window.URL.createObjectURL(fileList[0])
        video.preload = 'metadata'
        video.onloadedmetadata = async () => {
          duration = video.duration

          console.log('duration', duration)
          console.dir(video)
          // await _CANVAS_CTX.drawImage(video, 0, 0, video.videoWidth, video.videoHeight)
          // console.log(_CANVAS.toDataURL())

          window.URL.revokeObjectURL(video.src)
          // if (duration > 8) {
          //   alert('너무커')
          //   event.target.value = null
          //   return
          // } else {
          //   return duration
          // }
        }
      },
      // 파일선택
      async filesChange(event) {
        try {
          let fileList = event.target.files
          if (!fileList.length) return

          this.videoRuntime(event, fileList)

          this.file = fileList[0]
        } catch (error) {
          console.log('error', error)
        }
      },
      // 파일 업로드
      async btnClick() {
        // 업로드 모달 오픈
        this.open = true

        let data = { videofile: this.file, folder: this.testFolderId, pkg: this.pkg }
        let formData = new FormData()
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            formData.append(`${key}`, data[key])
          }
        }
        let config = {
          headers: { 'content-type': 'multipart/form-data' },
          onUploadProgress: progressEvent => {
            this.uploading = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            console.log(this.uploading)
          },
        }
        let response = await Axios.post(`${this.uploadURL}?token=${this.token}`, formData, config)
        console.log('upLoadFile', response)
        this.uploadStatus = '업로드 완료'
        this.org_access_key = response.data.uploadInfo.uploadDetail.access_key
        this.TEST_Thumnail = response.data.uploadInfo.thumbnails
        console.log('TEST_Thumnail', this.TEST_Thumnail)
        console.log('org_access_key', this.org_access_key)

        // 업로드가 완료되고 2초 후에 모달 닫기
        setTimeout(() => {
          this.open = false
        }, 2000)
      },
      // 파일 배포패키지에 추가(인코딩 완료 시 자동으로 배포 시작)
      async setVideo() {
        this.$store.commit('loading', true)
        let response = await Axios.get(`http://api.wecandeo.com/info/v1/video/set/package.json?key=${this.API_Key}&access_key=${this.org_access_key}&pkg=${this.pkg}`)
        console.log('setPackage----', response)
        this.$store.commit('loading', false)
      },
      // 배포 완료된 파일 조회
      async getVideo() {
        let response = await Axios.get(`http://api.wecandeo.com/info/v1/video/detail.json?key=${this.API_Key}&access_key=${this.org_access_key}&pkg=${this.pkg}`)
        console.log('getVideo', response)
        this.videoAccessKey = response.data.videoDetail.videoInfo.access_key
        this.thumbnail_url = response.data.videoDetail.videoInfo.thumbnail_url
        console.log('videoAccessKey', this.videoAccessKey, 'thumbnail_url', this.thumbnail_url)
      },
      // 인코딩 파일 조회
      async incodingVideo() {
        let response = await Axios.get(`http://api.wecandeo.com/info/v1/video/encodingFiles.json?key=${this.API_Key}&access_key=${this.org_access_key}&pkg=${this.pkg}`)
        console.log('getIncodingVideo', response)
      },
      // 공유버튼으로 만들었지만 작동안하는 장식용 버튼
      shareVideo() {
        let iframe = document.getElementById('myIframe')
        let element = iframe.contentWindow || iframe.contentDocument
        let api = new smIframeAPI(element)
        console.dir(api)
        // console.dir(element.document.getElementById('ShareBtn'))
        // element.document.getElementById('ShareBtn')
      },
      // 하단 Drawer
      showMenuElement() {
        if (this.showMenu) {
          return 'below-drawer'
        } else {
          return 'below-drawer__close'
        }
      },
      // MenuHandler
      belowShowMenu() {
        this.showMenu = !this.showMenu
      },
      layoutClickHandler() {
        console.log('layoutClick')
        if (this.buttonClass === '--none' || this.buttonClass === '--close') {
          this.buttonClass = '--open'
        } else {
          this.buttonClass = '--close'
        }
      },
      // 재생, 일시정지 버튼
      async playClickHandler() {
        this.playFlag = !this.playFlag
        if (this.playFlag) {
          console.log('play!!!')
          // 약 2초 후에 버튼 삭제(애니메이션이 0.3초)
          this.setTimePlay = setTimeout(() => {
            if (this.buttonClass === '--open') this.buttonClass = '--close'
          }, 1800)

          document.getElementById('myVideo').play()
        } else {
          console.log('pause!!!')
          // 버튼삭제 이벤트 지우고 open
          clearTimeout(this.setTimePlay)
          this.buttonClass = '--open'
          document.getElementById('myVideo').pause()
        }
      },

      // 이전, 다음 버튼
      seekClickHandler(type) {
        let video = document.querySelector('video')

        let skipTime = 10

        if (type === 'prev') video.currentTime = Math.max(video.currentTime - skipTime, 0)
        else video.currentTime = Math.min(video.currentTime + skipTime, video.duration)

        if (!this.playFlag) clearTimeout(this.setTimePlay)
      },

      getPlayerHeight() {
        this.$nextTick(() => {
          this.playerHeight = window.innerHeight
        })
      },
    },
  }
</script>

<style lang="scss" scoped>
  .video-player__container {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    .player {
      width: 100%;
      position: relative;
      overflow: hidden;
      background-color: black;
      // padding-top: 56.25%;
      box-sizing: border-box;
      // iframe {
      //   position: absolute;
      //   top: 0;
      //   left: 0;
      // }
      #myVideo {
        position: absolute;
        top: 0;
        left: 0;
        // 가로영상이면 넣고, 세로영상이면 빼고
        // width: 100%;
        // height: 100%;
        // margin: 0 auto;
      }
      .overlayout {
        position: absolute;
        z-index: 4;
        color: #ffffff;
        top: 0;
        width: 100%;
        height: 100%;
      }
      /deep/ video::-webkit-media-controls-overlay-play-button {
        // display: none;
      }
      .detail-area {
        position: absolute;
        width: 100%;
        bottom: 33px;
      }
      .flow-text {
        font-size: 20px;
        animation: flow 7s linear infinite;
      }
      @keyframes flow {
        from {
          transform: translateX(-50%);
        }
        to {
          transform: translateX(100%);
        }
      }
      .button-layout {
        position: absolute;
        top: 50%;
        left: 50%;
      }
      .--open {
        animation-name: fadeIn;
        animation-fill-mode: forwards;
        animation-duration: 0.2s;
      }
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      .--close {
        animation-name: fadeOut;
        animation-fill-mode: forwards;
        animation-duration: 0.2s;
      }
      @keyframes fadeOut {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
      .--none {
        display: none;
      }

      .prev {
      }

      .next {
      }

      .playButton {
        border-left: solid 30px white;
        border-bottom: solid 30px transparent;
        border-top: solid 30px transparent;
      }

      .pauseButton {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50px;
        height: 50px;
        border-style: double;
        border-width: 0px 0px 0px 37px;
        border-color: white;
        opacity: 0.5;
      }
    }
    .inner-content {
      width: 100%;
      height: 602px;
      background-color: #ffffff;
    }
    .below-drawer {
      position: relative;
      z-index: 2;
      animation: belowDrawer 0.5s;
      animation-timing-function: ease;
      // animation-fill-mode: backwards;
    }
    @keyframes belowDrawer {
      from {
        // display: block;
        bottom: -100%;
      }
      to {
        bottom: 0;
      }
    }
    .below-drawer__close {
      display: block;
      position: relative;
      bottom: -100%;
      z-index: 2;
      animation: belowDrawerClose 0.3s;
      animation-timing-function: ease;
      animation-fill-mode: forwards;
    }
    @keyframes belowDrawerClose {
      from {
        bottom: 0;
      }
      to {
        opacity: 0;
        bottom: -100%;
      }
    }
  }
</style>