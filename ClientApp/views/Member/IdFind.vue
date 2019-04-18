<template>
  <div class="IdFind">
    <div class="IdFind__top">
      <p>가입할 때 입력했던 정보로</p>
      <p class="IdFind__yellow">아이디 찾기</p>
    </div>

    <div class="IdFind__bottom">
      <p class="IdFind__title">이름</p>
      <input class="IdFind__input" type="text" placeholder="이름을 입력해주세요." v-model="name">

      <p class="IdFind__title">이메일</p>
      <input class="IdFind__input" type="text" placeholder="자신의 이메일을 입력해주세요." v-model="email">

      <p class="IdFind__title">생년월일</p>
      <input class="IdFind__input" type="text" placeholder="2014-01-01">
    </div>

    <button class="IdFind__confirm">확인</button>
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
.IdFind{
  width: 100%;
  padding: 0px 14px 24px 14px;
  background: #F9FAFB;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .IdFind__top{
    padding-top: 78px;
    padding-bottom: 36px;
    font-size: 14px;
    color: #222222;
    text-align: center;
    line-height: 22px;
    .IdFind__yellow{
      color: #FF8000;
    }
  }

  .IdFind__bottom{
    flex: 1;
    .IdFind__title{
      width: 100%;
      margin-top: 20px;
      font-size: 14px;
      color: #111111;
    }
    .IdFind__input{
      width: 100%;
      height: 36px;
      margin-top: 3px;
      padding: 0px 4px;
      background: transparent;
      border-top: 0px;
      border-left: 0px;
      border-right: 0px;
      border-bottom: 1px solid #D6D9DE;
      box-sizing: border-box;
      font-size: 10px;
      color: #111111;
      outline: none;
    }
    
    /* input placeholder custom */
    /* Chrome, Firefox, Opera, Safari 10.1+*/
    input::-webkit-input-placeholder {
      color: #888888;
      font-size: 10px;
    }
    input:-ms-input-placeholder {
      color: #888888;
      font-size: 10px;
    }
    input::-ms-input-placeholder {
      color: #888888;
      font-size: 10px;
    }
    input::placeholder {
      color: #888888;
      font-size: 10px;
    }
    input::-ms-clear {
      display: none;
    }
  }

  .IdFind__confirm{
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