<template>
  <div class="TermsAgree">
    <div class="TermsAgree__terms">
      이용약관 들어가는 곳
    </div>

    <div class="TermsAgree__agreement">
      <label class="TermsAgree__checkbox">
        <input type="checkbox" v-model="useAgree" @change="useAgreeChecked">
        <span class="TermsAgree__checkmark"></span>
        <span>이용약관에 동의합니다.</span>
      </label>
    </div>

    <div class="TermsAgree__terms">
      약관 들어가는 곳
    </div>
    
    <div class="TermsAgree__agreement">
      <label class="TermsAgree__checkbox">
        <input type="checkbox" v-model="privateAgree" @change="privateAgreeChecked">
        <span class="TermsAgree__checkmark"></span>
        <span>개인정보취급방침에 동의합니다.</span>
      </label>
    </div>

    <div class="TermsAgree__line"></div>

    <div class="TermsAgree__agreement">
      <label class="TermsAgree__checkbox">
        <input type="checkbox" v-model="allAgree" @change="allAgreeChecked">
        <span class="TermsAgree__checkmark"></span>
        <span>모두 동의합니다.</span>
      </label>
    </div>
    
    <button class="TermsAgree__btnNext">다음</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        useAgree: false,
        privateAgree: false,
        allAgree: false
      }
    },
    methods: {
      useAgreeChecked() {
        if (this.useAgree) {
          if (this.privateAgree) {
            this.allAgree = true
          }
        } else {
          if (this.allAgree) {
            this.allAgree = false
          }
        }
      },
      privateAgreeChecked(val) {
        if (this.privateAgree) {
          if (this.useAgree) {
            this.allAgree = true
          }
        } else {
          if (this.allAgree) {
            this.allAgree = false
          }
        }
      },
      allAgreeChecked() {
        if (this.allAgree) {
          this.useAgree = true
          this.privateAgree = true
        } else {
          this.useAgree = false
          this.privateAgree = false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.TermsAgree{
  padding: 14px;
  background: #F9FAFB;
  box-sizing: border-box;
  .TermsAgree__agreement{
    margin-bottom: 20px;
    .TermsAgree__checkbox {
      display: block;
      position: relative;
      padding-left: 20px;
      cursor: pointer;
      // font-family: 'NanumGothic Regular';
      font-size: 12px;
      color: #111111;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    /* Hide the browser's default checkbox */
    .TermsAgree__checkbox input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
      margin-left: 10px;
    }

    /* Create a custom checkbox */
    .TermsAgree__checkmark {
      position: absolute;
      top: 3px;
      left: 0;
      height: 12px;
      width: 12px;
      border: 1px solid #DCDCDC;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      background: #ffffff;
    }

    /* On mouse-over, add a grey background color */
    .TermsAgree__checkbox:hover input ~ .TermsAgree__checkmark {
    }

    /* When the checkbox is checked, add a blue background */
    .TermsAgree__checkbox input:checked ~ .TermsAgree__checkmark {
    }

    /* Create the TermsAgree__checkmark/indicator (hidden when not checked) */
    .TermsAgree__checkmark:after {
      content: '';
      position: absolute;
      display: none;
    }

    /* Show the TermsAgree__checkmark when checked */
    .TermsAgree__checkbox input:checked ~ .TermsAgree__checkmark:after {
      display: block;
    }

    /* Style the TermsAgree__checkmark/indicator */
    .TermsAgree__checkbox .TermsAgree__checkmark:after {
      left: 3px;
      top: 0px;
      width: 2.5px;
      height: 5px;
      border: solid #FFAA00;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
  .TermsAgree__terms{
    width: 100%;
    height: 140px;
    margin-bottom: 7px;
    padding: 10px;
    background: #FFFFFF;
    border: 1px solid #DCDCDC;
    box-sizing: border-box;
    font-size: 10px;
    color: #555555;
    overflow-y: auto;
  }
  .TermsAgree__line{
    width: 100%;
    height: 1px;
    margin-top: 24px;
    margin-bottom: 26px;
    background: #D6D9DE;
  }
  .TermsAgree__btnNext{
    width: 100%;
    height: 46px;
    margin-top: 8px;
    margin-bottom: 10px;
    background: #ffffff;
    border: 1px solid #FF8000;
    box-sizing: border-box;
    font-size: 14px;
    color: #FF8000;
  }
}
</style>