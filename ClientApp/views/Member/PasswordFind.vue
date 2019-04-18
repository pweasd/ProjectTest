<template>
  <div class="PasswordFind">
    <div class="PasswordFind__top">
      <p>가입할 때 입력했던 정보로</p>
      <p>비밀번호 찾기</p>
    </div>

    <div class="PasswordFind__bottom">
      <p class="PasswordFind__title">아이디</p>
      <input class="PasswordFind__input" type="text" placeholder="이름을 입력해주세요." v-model="name">

      <p class="PasswordFind__title">이메일</p>
      <input class="PasswordFind__input" type="text" placeholder="자신의 이메일을 입력해주세요." v-model="email">
    </div>

    <button class="PasswordFind__confirm">확인</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: undefined,
        email: undefined
      }
    }
  }
</script>

<style lang="scss" scoped>
.PasswordFind{
  width: 100%;
  padding: 0px 14px 24px 14px;
  background: #ffffff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .PasswordFind__top{
    padding-top: 78px;
    padding-bottom: 33px;
    font-size: 14px;
    color: #222222;
    text-align: center;
    line-height: 22px;
  }

  .PasswordFind__bottom{
    flex: 1;
    .PasswordFind__title{
      width: 100%;
      margin-top: 14px;
      font-size: 11px;
      color: #222222;
    }
    .PasswordFind__input{
      width: 100%;
      height: 36px;
      margin-top: 3px;
      padding: 0px 11px;
      border: 1px solid #DCDCDC;
      box-sizing: border-box;
      font-size: 10px;
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
  }

  .PasswordFind__confirm{
    width: 100%;
    height: 46px;
    background: #ffffff;
    border: 1px solid #DCDCDC;
    border-radius: 3px;
    box-sizing: border-box;
    font-size: 14px;
    color: #222222;
  }
}
</style>