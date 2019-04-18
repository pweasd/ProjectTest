<template>
  <div class="IdConfirm">
    <div class="IdConfirm__top">
      <img class="IdConfirm__image" src="" alt="">
    </div>

    <div class="IdConfirm__bottom">
      <p class="IdConfirm__title">회원 정보</p>
      
      <div class="IdConfirm__box">
        <div class="IdConfirm__text">
          <div class="IdConfirm__bold">아이디 :</div>
          <span class="IdConfirm__light">{{ id }}</span>
        </div>
        <div class="IdConfirm__text">
          <div class="IdConfirm__bold">이름 :</div>
          <span class="IdConfirm__light">{{ name }}</span>
        </div>
        <div class="IdConfirm__text">
          <div class="IdConfirm__bold">이메일 :</div>
          <span class="IdConfirm__light">{{ email }}</span>
        </div>
      </div>

      <p class="IdConfirm__find">비밀번호 찾기</p>
    </div>

    <button class="IdConfirm__login">로그인하러 가기</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: undefined,
        name: undefined,
        email: undefined,
      }
    }
  }
</script>

<style lang="scss" scoped>
.IdConfirm{
  width: 100%;
  padding: 0px 14px 24px 14px;
  background: #F9FAFB;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .IdConfirm__top{
    height: 120px;
    width: 120px;
    margin-top: 46px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    .IdConfirm__image{
      width: 100%;
      height: 100%;
    }
  }
  .IdConfirm__bottom{
    flex: 1;
    width: 100%;
    .IdConfirm__title{
      font-size: 14px;
      color: #111111;
    }
    .IdConfirm__box{
      margin-top: 10px;
      width: 100%;
      height: 130px;
      padding: 14px 25px 26px 25px;
      background: #ffffff;
      border: 1px solid #DCDCDC;
      box-sizing: border-box;  
    }
    .IdConfirm__text{
      width: 100%;
      margin-top: 12px;
      display: flex;
      font-size: 12px;
    }
    .IdConfirm__bold{
      width: 43px;
      color: #111111;
      text-align: right;
    }
    .IdConfirm__light{
      flex: 1;
      padding-left: 24px;
      color: #444444;
      text-align: left;
    }
    .IdConfirm__find{
      margin-top: 8px;
      font-size: 12px;
      color: #FF8000;
      text-align: right;
    }
  }
  .IdConfirm__login{
    width: 100%;
    height: 46px;
    background: #ffffff;
    border: 1px solid #FF8000;
    box-sizing: border-box;
    font-size: 14px;
    color: #FF8000;
  }
}
</style>