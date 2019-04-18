<template>
  <div class="MyPageNonMember">
    <div class="MyPageNonMember__top">
      <div class="MyPageNonMember__circle">
        <img class="MyPageNonMember__image" src="" alt="비회원안내">
      </div>

      <p>또가배 회원님은</p>
      <p>로그인을 해주세요.</p>

      <button class="MyPageNonMember__login">로그인</button>
    </div>

    <div class="MyPageNonMember__bottom">
      <p class="MyPageNonMember__gray">비회원 이신가요?</p>
      <p class="MyPageNonMember__orange">회원 가입 하러가기</p>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.MyPageNonMember{
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 56px;
  padding-bottom: 42px;
  background: #F2F4F6;
  box-sizing: border-box;
  .MyPageNonMember__top{
    flex: 1;
    font-size: 14px;
    color: #111111;
    text-align: center;
    line-height: 20px;
    .MyPageNonMember__circle{
      width: 120px;
      height: 120px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 24px;
      .MyPageNonMember__image{
      }
    }
    .MyPageNonMember__login{
      width: 110px;
      height: 46px;
      margin-top: 24px;
      background: #FFAA00;
      border: 1px solid #FFAA00;
      border-radius: 23px;
      box-sizing: border-box;
      font-size: 14px;
      color: #ffffff;
    }
  }
  .MyPageNonMember__bottom{
    text-align: center;
    .MyPageNonMember__gray{
      font-size: 10px;
      color: #888888;
    }
    .MyPageNonMember__orange{
      margin-top: 2px;
      font-size: 12px;
      color: #E66100;
    }
  }
}
</style>