<template>
  <div class="JoinMember">
    <div class="JoinMember__top">
      <div class="JoinMember__circle">
        <img src="" alt="">
      </div>
      <p class="JoinMember__text">프로필 사진</p>
    </div>

    <div class="JoinMember__middle">
      <p class="JoinMember__title">아이디</p>
      <input class="JoinMember__input" type="text" placeholder="아이디를 입력해주세요." v-model="id">

      <p class="JoinMember__title">비밀번호</p>
      <input class="JoinMember__input" type="password" placeholder="비밀번호를 입력해주세요." v-model="password">

      <p class="JoinMember__title">비밀번호 확인</p>
      <input class="JoinMember__input" type="password" v-model="passwordConfirm">
    </div>

    <div class="JoinMember__bottom">
      <p class="JoinMember__title">이름</p>
      <input class="JoinMember__input" type="text" placeholder="이름을 입력해주세요." v-model="name">

      <p class="JoinMember__title">닉네임</p>
      <input class="JoinMember__input" type="text" placeholder="닉네임을 입력해주세요." v-model="nickname">

      <p class="JoinMember__title">이메일</p>
      <input class="JoinMember__input" type="text" placeholder="자신의 이메일을 입력해주세요." v-model="email">

      <p class="JoinMember__title">생년월일</p>
      <input class="JoinMember__input" type="text" placeholder="2014-01-01">

      <p class="JoinMember__title">휴대전화 번호</p>
      <input class="JoinMember__input" type="text" placeholder="-를 제외하고 입력해주세요." v-model="phone">

      <button class="JoinMember__join">가입하기</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: undefined,
        password: undefined,
        passwordConfirm: undefined,
        name: undefined,
        nickname: undefined,
        email: undefined,
        phone: undefined,
      }
    }
  }
</script>

<style lang="scss" scoped>
.JoinMember{
  width: 100%;
  background: #ffffff;
  .JoinMember__top{
    width: 100%;
    height: 180px;
    border-bottom: 1px solid #DCDCDC;
    box-sizing: border-box;
    .JoinMember__circle{
      position: relative;
      top: 46px;
      left: calc(50% - 35px);
      width: 70px;
      height: 70px;
      background: black;
      border-bottom: 1px solid #DCDCDC;
      border-radius: 50%;
      box-sizing: border-box;
    }
    .JoinMember__text{
      position: relative;
      top: 55px;
      left: calc(50% - 35px);
      width: 70px;
      font-size: 10px;
      color: #888888;
      text-align: center;
    }
  }
  .JoinMember__middle{
    width: 100%;
    padding: 6px 14px 20px 14px;
    border-bottom: 1px solid #DCDCDC;
    box-sizing: border-box;
  }
  .JoinMember__bottom{
    width: 100%;
    padding: 0px 14px 14px 14px;
    box-sizing: border-box;
    .JoinMember__join{
      width: 100%;
      height: 46px;
      margin-top: 60px;
      margin-bottom: 10px;
      background: #ffffff;
      border: 1px solid #DCDCDC;
      border-radius: 3px;
      box-sizing: border-box;
      font-size: 14px;
      color: #222222;
    }
  }
  .JoinMember__title{
    width: 100%;
    margin-top: 14px;
    font-size: 11px;
    color: #222222;
  }
  .JoinMember__input{
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
</style>