<template>
  <div class="LoginPage">
    <div class="LoginPage__top">
      <img class="LoginPage__logo" src="" alt="로고">
    </div>

    <input class="LoginPage__input" type="text" placeholder="아이디" v-model="id">
    <input class="LoginPage__input" type="password" placeholder="비밀번호" v-model="password" @keydown.enter="btnLogin">

    <div class="LoginPage__text">
      <div class="LoginPage__left">
        <span @click="btnFindId">아이디 찾기</span> | <span @click="btnFindPassword">비밀번호 찾기</span>
      </div>
      <div class="LoginPage__right" @click="btnJoin">
        무료 회원가입 >
      </div>
    </div>

    <button class="LoginPage__button" @click="btnLogin">로그인</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: undefined,
        password: undefined
      }
    },
    methods: {
      btnFindId() {
        // 아이디 찾기 클릭
        console.log('아이디');
      },
      btnFindPassword() {
        // 비밀번호 찾기 클릭
        console.log('비밀번호');
      },
      btnJoin() {
        // 무료 회원가입 클릭
        console.log('회원가입');
      },
      btnLogin() {
        // 로그인 버튼 클릭
        console.log('로그인');
      }
    }
  }
</script>

<style lang="scss" scoped>
.LoginPage{
  padding:30px;
  background-image: linear-gradient(151deg, #ffffff, #F2F4F6);
  box-sizing: border-box;
  .LoginPage__top{
    width: 118px;
    height: 70px;
    margin-top: 52px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 53px;
    .LoginPage__logo{
      width: 100%;
      height: 100%;
    }
  }
  .LoginPage__input{
    width: 100%;
    height: 36px;
    margin-top: 6px;
    padding: 0px 6px;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 1px solid #DCDCDC;
    background: transparent;
    box-sizing: border-box;
    font-size: 12px;
    color: #111111;
    outline: none;
  }

  /* input placeholder custom */
  /* Chrome, Firefox, Opera, Safari 10.1+*/
  input::-webkit-input-placeholder {
    color: rgba($color: #444444, $alpha: 0.55);
    font-size: 12px;
  }
  input:-ms-input-placeholder {
    color: rgba($color: #444444, $alpha: 0.55);
    font-size: 12px;
  }
  input::-ms-input-placeholder {
    color: rgba($color: #444444, $alpha: 0.55);
    font-size: 12px;
  }
  input::placeholder {
    color: rgba($color: #444444, $alpha: 0.55);
    font-size: 12px;
  }
  input::-ms-clear {
    display: none;
  }

  .LoginPage__text{
    display: flex;
    height: 17px;
    margin-top: 15px;
    margin-bottom: 48px;
    font-size: 9px;
    align-items: center;
    .LoginPage__left{
      flex: 1;
      color: rgba($color: #333333, $alpha: 0.74);
    }
    .LoginPage__right{
      color: #444444;
      font-size: 11px;
    }
  }
  .LoginPage__button{
    width: 100%;
    height: 46px;
    background: #ffffff;
    border: 1px solid #DCDCDC;
    box-sizing: border-box;
    font-size: 14px;
    color: #FF8000;
    // -webkit-tap-highlight-color: transparent; // 모바일 버튼 클릭 시 클릭 효과 없애기
  }
}
</style>