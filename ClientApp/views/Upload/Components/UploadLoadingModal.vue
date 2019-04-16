<template>
  <div class="payment-modal-container">
    <div class="modal-content">
      <div class="progress-loading">
        <el-progress type="circle" :percentage="uploading" class="el-upload-progress"></el-progress>
        <div>{{ uploadStatus }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      uploading: {
        type: Number,
      },
      uploadStatus: {
        type: String,
      },
    },
    methods: {},
  }
</script>

<style lang="scss" scoped>
  .payment-modal-container {
    position: fixed; /* Stay in place */
    z-index: 5; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
    display: flex;
    justify-content: center;
    align-items: center;

    /* Modal Content */
    .modal-content {
      position: relative;
      width: 90.625%;
      height: 277px;
      padding: 0px 0px 25px 0px;
      border: 1px solid #888;
      background-color: #fefefe;
      box-sizing: border-box;
      text-align: center;
    }
    .modal-inner-title {
      font: 16px 'NanumSquare Bold';
      color: #333333;
      margin-top: 50px;
      margin-bottom: 10px;
    }
    .modal-inner-subtitle {
      font: 14px 'NanumSquare Regular';
      color: #888888;
      margin-bottom: 15px;
    }
    .modal-inner-coin-area {
      width: 100%;
      height: 55px;
      background-color: #f8f8f8;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'NanumSquare Regular';
      font-size: 17px;
      .coin-price-number {
        padding-right: 10px;
        color: #0078ff;
      }
      .coin-price-text {
        color: #333333;
      }
    }
    .modal-inner-question {
      margin-top: 14px;
      font: 14px 'NanumSquare Regular';
      color: #333333;
    }
    button {
      padding: 0;
      border: 0;
    }
    .modal-button-area {
      display: flex;
      height: 35px;
      margin-top: 23px;
      padding: 0px 20px;
      box-sizing: border-box;
      .cancel-button {
        flex: 1;
        background-color: #888888;
        font: 12px 'NanumSquare Bold';
        color: #ffffff;
        margin-right: 10px;
      }
      .debut-btn {
        flex: 1;
        background-color: #0078ff;
        font: 12px 'NanumSquare Bold';
        color: #ffffff;
      }
    }
  }
</style>