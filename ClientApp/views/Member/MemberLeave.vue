<template>
  <div class="MemberLeave">
    <div class="MemberLeave__content">
      <img src="" alt="">
      <p class="MemberLeave__bold">회원 탈퇴가 완료되었습니다.</p>
      <p class="MemberLeave__light">그동안 이용해 주셔서 감사합니다.</p>
    </div>

    <button class="MemberLeave__join">새로 회원가입 하러 가기</button>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.MemberLeave{
  width: 100%;
  padding: 0px 14px 24px 14px;
  background: #ffffff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .MemberLeave__content{
    flex: 1;
    width: 100%;
    .MemberLeave__bold{
      font-size: 16px;
      color: #222222;
      text-align: center;
    }
    .MemberLeave__light{
      margin-top: 4px;
      font-size: 10px;
      color: #555555;
      text-align: center;
    }
  }
  .MemberLeave__join{
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