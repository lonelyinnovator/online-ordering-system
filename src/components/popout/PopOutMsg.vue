<template>
  <!-- 弹出框 -->
  <div class="popout-msg" :style="{ visibility: visibility }">
    <!-- 弹出框位置 -->
    <div class="popout-pos scale-in-center">
      <!-- 框头 -->
      <div class="popout-header">
        <h3>{{ msg_header }}</h3>
        <a href="#" @click="close">✖</a>
      </div>
      <!-- 内容 -->
      <div class="popout-content">{{ msg_content }}</div>
      <!-- 确认按钮 -->
      <div class="popout-confirm">
        <button @click="confirm">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "popoutmsg",
  data() {
    return {
      visibility: "hidden",
      msg_header: "注册成功",
      msg_content: "返回登录页面",
      // signinFlag: false,
      // isSignin: this.props.isSignin,
    };
  },
  props: {
    msgFlag: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  methods: {
    close() {
      this.confirm();
    },
    confirm() {
      this.visibility = "hidden";
      this.msgFlag = false;
    },
    changeVisible(curVal, oldVal) {
      console.log(curVal);
      console.log(oldVal);
      if (curVal && !oldVal) {
        this.visibility = "visible";
      } else {
        this.visibility = "hidden";
      }
      // if (this.signinFlag) {
      //   return "visible";
      // }
      // return "hidden";
    },
  },
  watch: {
    msgFlag: "changeVisible",
    // isSignin(val, newval) {
    //   console.log(val);
    //   console.log(newval);
    // },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/popout/animations.css";
.popout-msg {
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .popout-pos {
    // position: relative;
    display: flex;
    width: calc(100% - 100px);
    // width: 80%;
    // height: 300px;
    padding: 0 20px;
    border-radius: 10px;
    background-color: #fff;
    flex-direction: column;

    .popout-header {
      position: relative;
      display: flex;
      width: 100%;
      padding: 10px;
      flex-direction: row;
      justify-content: center;
      border-bottom: 1px solid rgb(233, 233, 233);

      h3 {
        padding: 5px 0;
        font-size: 16px;
        font-weight: 400;
        color: #666;
      }

      a {
        position: absolute;
        font-size: 16px;
        right: 0;
        top: 16px;
      }
    }

    .popout-content {
      width: 100%;
      min-height: 120px;
      flex: 1;
      padding: 10px;
      font-size: 14px;
    }

    .popout-confirm {
      display: flex;
      width: 100%;
      padding: 10px;
      flex-direction: row;
      justify-content: center;
      border-top: 1px solid rgb(233, 233, 233);

      button {
        cursor: pointer;
        padding: 10px;
        font-size: 14px;
        background-color: pink;
        color: #fff;
      }
    }
  }
}

@media screen and (min-width: 500px) {
  .popout-msg {
    .popout-pos {
      width: 480px;
    }
  }
}
</style>