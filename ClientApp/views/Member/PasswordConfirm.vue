<template>
  <div class="PasswordConfirm">
    <div class="PasswordConfirm__top">
      <img src="" alt="">
    </div>

    <div class="PasswordConfirm__bottom">
      <p class="PasswordConfirm__title">회원 정보</p>
      
      <div class="PasswordConfirm__box">
        <div class="PasswordConfirm__text">
          <div class="PasswordConfirm__bold">아이디 :</div>
          <span class="PasswordConfirm__light">{{ id }}</span>
        </div>
        <div class="PasswordConfirm__text">
          <div class="PasswordConfirm__bold">이름 :</div>
          <span class="PasswordConfirm__light">{{ name }}</span>
        </div>
        <div class="PasswordConfirm__text">
          <div class="PasswordConfirm__bold">비밀번호 :</div>
          <span class="PasswordConfirm__light">{{ password }}</span>
        </div>
      </div>
    </div>

    <button class="PasswordConfirm__login">로그인하러 가기</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: undefined,
        name: undefined,
        password: undefined,
      }
    }
  }
</script>

<style lang="scss" scoped>
.PasswordConfirm{
  width: 100%;
  padding: 0px 14px 24px 14px;
  background: #ffffff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .PasswordConfirm__top{
    height: 196px;
  }
  .PasswordConfirm__bottom{
    flex: 1;
    width: 100%;
    .PasswordConfirm__title{
      font-size: 14px;
      color: #222222;
    }
    .PasswordConfirm__box{
      margin-top: 10px;
      width: 100%;
      height: 130px;
      padding: 14px 25px 26px 16px;
      border: 1px solid #DCDCDC;
      box-sizing: border-box;  
    }
    .PasswordConfirm__text{
      width: 100%;
      margin-top: 12px;
      display: flex;
      font-size: 12px;
    }
    .PasswordConfirm__bold{
      width: 55px;
      color: #222222;
      text-align: right;
    }
    .PasswordConfirm__light{
      flex: 1;
      padding-left: 24px;
      color: #555555;
      text-align: left;
    }
  }
  .PasswordConfirm__login{
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