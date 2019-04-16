<template>
  <div class="VideoUpload">
    <div class="VideoUpload__video">
      <input type="file" @change="filesChange" id="input_file" class="file-tag" accept=".mp4">
      <div class="square" @click="uploadClickHandler">
        <p v-if="!file" style="color: white;">탭하면 파일 업로드</p>
        <video id="video-element" class="video-thumnail">
          <source id="source" type="video/mp4">
        </video>
      </div>
    </div>

    <div class="VideoUpload__detail">
      <p class="VideoUpload__title">강의 제목 <font class="VideoUpload__red">*필수입력</font></p>
      <input class="VideoUpload_input" type="text" placeholder="강의 제목을 입력해주세요.">

      <p class="VideoUpload__title">강의 설명 <font class="VideoUpload__red">*필수입력</font></p>
      <textarea class="VideoUpload__textArea" placeholder="강의에 대한 설명을 입력해주세요."></textarea>

      <p class="VideoUpload__title">지정 태그 <font class="VideoUpload__red">*필수입력</font></p>
      <div class="VideoUpload__tagArea">
        <el-popover placement="bottom" width="160" v-model="visibleList[0]">
          <div class="TagContainer" v-for="(tag,index) in tagGradeList" :key="tag.id">
            <button class="VideoUpload__tag" @click="tagClicked(0, tag)">#{{ tag }}</button>

            <div class="TagGradeLine" v-if="index == 5 || index == 8"></div>
          </div>

          <el-button slot="reference">#{{ tagList[0] }}</el-button>
        </el-popover>

        <el-popover placement="bottom" width="160" v-model="visibleList[1]">
          <div class="TagContainer" v-for="tag in tagSubjectList" :key="tag.id">
            <button class="VideoUpload__tag" @click="tagClicked(1, tag)">#{{ tag }}</button>
          </div>

          <el-button slot="reference">#{{ tagList[1] }}</el-button>
        </el-popover>

        <el-popover placement="bottom" width="160" v-model="visibleList[2]">
          <div class="TagContainer" v-for="tag in tagDedanList" :key="tag.id">
            <button class="VideoUpload__tag" @click="tagClicked(2, tag)">#{{ tag }}</button>
          </div>

          <el-button slot="reference">#{{ tagList[2] }}</el-button>
        </el-popover>

        <el-popover placement="bottom" width="160" v-model="visibleList[3]">
          <div class="TagContainer" v-for="tag in tagSodanList" :key="tag.id">
            <button class="VideoUpload__tag" @click="tagClicked(3, tag)">#{{ tag }}</button>
          </div>

          <el-button slot="reference">#{{ tagList[3] }}</el-button>
        </el-popover>
      </div>

      <p class="VideoUpload__title">자유 태그</p>
      <input class="VideoUpload_input" type="text" placeholder="#태그 입력">

      <button class="VideoUpload__uploadButton" @click="saveClicked">올리기</button>
    </div>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        file: undefined,
        tagGradeList: ['초등 1학년','초등 2학년','초등 3학년','초등 4학년','초등 5학년','초등 6학년','중등 1학년','중등 2학년','중등 3학년','고등 1학년','고등 2학년','고등 3학년'],
        tagSubjectList: ['국어','수학','영어','과학','사회','음악','미술','체육'],
        tagDedanList: ['대단원1','대단원2','대단원3','대단원4'],
        tagSodanList: ['소단원1','소단원2','소단원3','소단원4'],
        visibleList: [false, false, false, false],
        selectedList: [false, false, false, false],
        tagList: ['학년','과목','대단원','소단원']
      }
    },
    methods: {
      uploadClickHandler() {
        document.getElementById('input_file').click()
      },
      setVideoThumnail(event, fileList) {
        // let video = document.createElement('video')
        let video = document.getElementById('video-element')
        let duration = undefined

        video.src = window.URL.createObjectURL(fileList[0])
        video.preload = 'metadata'

        try {
          video.onloadedmetadata = async () => {
            duration = video.duration
            window.URL.revokeObjectURL(video.src)
          }
        } catch (error) {
          window.URL.revokeObjectURL(video.src)
          console.log(error)
        }
      },
      // 파일선택
      async filesChange(event) {
        try {
          let fileList = event.target.files
          if (!fileList.length) return

          this.setVideoThumnail(event, fileList)

          this.file = fileList[0]
        } catch (error) {
          console.log('error', error)
        }
      },
      tagClicked(index, tag) {
        if (!this.selectedList[index]) {
          this.selectedList.splice(index, 1, true)
        }

        let button = document.getElementsByClassName("el-button")[index];
        button.style.border = "1px solid #888888";

        this.visibleList.splice(index, 1, false)
        this.tagList.splice(index, 1, tag)
      },
      saveClicked() {
        let check = false

        this.selectedList.find(item => {
          if (!item) {
            check = true
          }
        })
        
        if (check) {
          console.log('선택안된거 있음');
          return
        }

        console.log('선택안된거 없음');
      }
    },
    watch: {
      selectedList: {
        handler: function(val, oldVal) {
          console.log('현재값', val);
          console.log('이전값', oldVal);
        },
        deep: true
      }
    }
  }
</script>

<style lang="scss">
  .VideoUpload{
    width: 100%;
    .VideoUpload__video{
      width: 100%;
      height: 178px;
      border: 1px solid #DCDCDC;
      box-sizing: border-box;
      .file-tag {
        display: none;
      }
      .square {
        width: 100%;
        height: 100%;
        background-color: black;
      }
      .video-thumnail {
        width: 100%;
        max-height: 176px;
      }
    }
    .VideoUpload__detail{
      padding: 20px 14px;
      box-sizing: border-box;
      .VideoUpload__title{
        font-size: 11px;
        color: #222222;
      }
      .VideoUpload__red{
        font-size: 9px;
        color: #EE0303;
      }
      .VideoUpload_input{
        width: 100%;
        height: 36px;
        margin-top: 3px;
        margin-bottom: 20px;
        padding: 0px 10px;
        border: 1px solid #DCDCDC;
        box-sizing: border-box;
        font-size: 10px;
        color: #222222;
      }
      .VideoUpload__textArea{
        width: 100%;
        height: 68px;
        margin-top: 3px;
        margin-bottom: 20px;
        padding: 10px;
        border: 1px solid #DCDCDC;
        box-sizing: border-box;
        font-size: 10px;
        color: #222222;
        resize: none;
      }
      .VideoUpload__tagArea{
        width: 100%;
        margin-top: 3px;
        margin-bottom: 20px;
      }
      .VideoUpload__uploadButton{
        width: 100%;
        height: 46px;
        margin-top: 10px;
        margin-bottom: 20px;
        background: #FFFFFF;
        border: 1px solid #DCDCDC;
        border-radius: 3px;
        box-sizing: border-box;
        font-size: 14px;
        color: #222222;
      }

      /* input placeholder custom */
      /* Chrome, Firefox, Opera, Safari 10.1+*/
      input::-webkit-input-placeholder {
        color: #bbbbbb;
        font-size: 10px;
      }
      input:-ms-input-placeholder {
        color: #bbbbbb;
        font-size: 10px;
      }
      input::-ms-input-placeholder {
        color: #bbbbbb;
        font-size: 10px;
      }
      input::placeholder {
        color: #bbbbbb;
        font-size: 10px;
      }
      input::-ms-clear {
        display: none;
      }
      
      /* textarea placeholder custom */
      /* Chrome, Firefox, Opera, Safari 10.1+*/
      textarea::-webkit-input-placeholder {
        color: #bbbbbb;
        font-size: 10px;
      }
      textarea:-ms-input-placeholder {
        color: #bbbbbb;
        font-size: 10px;
      }
      textarea::-ms-input-placeholder {
        color: #bbbbbb;
        font-size: 10px;
      }
      textarea::placeholder {
        color: #bbbbbb;
        font-size: 10px;
      }
      textarea::-ms-clear {
        display: none;
      }
    }
  }
  .el-button {
    height: 26px;
    line-height: 26px;
    padding: 0px 15px;
    font-size: 10px;
    border-color: #DCDCDC;
  }
  .el-button:focus, .el-button:hover{
    color: #222222;
    border-color: #FFE600;
    background-color: #FFFFFF;
  }
</style>