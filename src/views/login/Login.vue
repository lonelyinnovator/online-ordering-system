<template>
  <div class="login-bg"></div>
  <!-- 登录页面 -->
  <div class="login">
    <!-- 登录注册表单位置 -->
    <div :class="getAnimationsClass()">
      <!-- 登录表单 -->
      <div :class="getSignInClass()">
        <sign-in @msgOn="msgOn" />
      </div>
      <!-- 注册表单 -->
      <div :class="getSignUpClass()">
        <sign-up />
      </div>
    </div>
  </div>
  <pop-out-msg :msgFlag="msgFlag" />
</template>

<script>
import SignIn from "@/components/login/SignIn.vue";
import SignUp from "@/components/login/SignUp.vue";
import PopOutMsg from "@/components/popout/PopOutMsg.vue";

export default {
  name: "login",
  components: {
    SignIn,
    SignUp,
    PopOutMsg,
  },
  data() {
    return {
      animations: [
        "flip-2-ver-left-2",
        "flip-scale-down-ver",
        "rotate-scale-down",
      ],
      msgFlag: false,
    };
  },
  methods: {
    /**
     * 得到登录class
     */
    getSignInClass() {
      if (this.$store.state.signin_signup === "in") {
        if (!this.$store.state.is_in_up_change) {
          //登录页面且动画结束则作为前置box
          return { "login-box": true, "front-box": true };
        }
        //登录页面且动画没有结束则作为后置box
        return { "login-box": true, "back-box": true };
      }
      return { "login-box": true };
    },

    /**
     * 得到注册class
     */
    getSignUpClass() {
      if (this.$store.state.signin_signup === "up") {
        if (!this.$store.state.is_in_up_change) {
          //注册页面且动画结束则作为前置box
          return { "login-box": true, "front-box": true };
        }
        //注册页面且动画没有结束则作为后置box
        return { "login-box": true, "back-box": true };
      }
      return { "login-box": true };
    },

    /**
     * 得到随机动画类
     */
    getAnimationsClass() {
      var rand_idx = Math.floor(this.animations.length * Math.random());
      // console.log(rand_idx);
      var ani = this.animations[rand_idx];
      // console.log(ani);
      var res = ["login-pos"];
      if (this.$store.state.is_in_up_change) {
        res.push(ani);
      }
      return res;
    },

    /**
     * 子组件传递来是否登录成功的消息
     */
    msgOn(flag) {
      this.msgFlag = flag;
      console.log("login:", this.msgFlag);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/login/animations.css";
// 背景动画
@keyframes bg {
  0% {
    background-color: pink;
  }
  100% {
    background-color: #bbe6d6;
  }
}

.login-bg {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: url("https://cdn.jsdelivr.net/gh/lonelyinnovator/cdn@1.1/images/1.jpg")
    no-repeat;
  background-size: cover;
  // background-color: pink;
  // animation: bg 2s linear 0.1s infinite alternate;
}

// 登录页面
.login {
  position: relative;
  display: flex;
  width: 100%;
  height: 1000px;
  justify-content: center;
  // background-color: pink;
  // animation: bg 2s linear 0.1s infinite alternate;

  // 登录表单位置
  .login-pos {
    position: relative;
    top: 120px;
    width: 600px;
    height: 500px;
    transform-style: preserve-3d;
    // perspective: 1000px;

    // 登录表单和注册表单
    .login-box {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 30px;
      overflow: hidden;
      border: 1px solid #ccc;
      box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.3);
    }

    //设置前置box
    .front-box {
      transform: translateZ(1px);
    }

    //设置后置box
    .back-box {
      transform: translateZ(-1px) rotateY(180deg);
    }
  }

  //切换登录表单和注册表单动画
  .login-animation {
    -webkit-animation: flipy 0.3s linear 0s 1 forwards;
    animation: flipy 0.3s linear 0s 1 forwards;
  }
}

// 切换动画
@keyframes flipy {
  0% {
  }
  100% {
    // transform: translateX(200px);
    // transform-origin: top left;
    transform: rotateY(180deg);
  }
}

// 媒体查询，适配页面
@media screen and (max-width: 900px) {
  .login {
    .login-pos {
      // animation: wto500 0.5s linear 0s 1 forwards;
      width: 500px;
    }
  }
}

@media screen and (max-width: 750px) {
  .login {
    .login-pos {
      // animation: wto400 0.5s linear 0s 1 forwards;
      width: 400px;
    }
  }
}

@media screen and (max-width: 600px) {
  .login {
    .login-pos {
      // animation: wto90per 0.5s linear 0s 1 forwards;
      width: 90%;
    }
  }
}

// @keyframes wto500 {
//   0% {
//   }
//   100% {
//     width: 500px;
//   }
// }

// @keyframes wto400 {
//   0% {
//   }
//   100% {
//     width: 400px;
//   }
// }

// @keyframes wto90per {
//   0% {
//   }
//   100% {
//     width: 90%;
//   }
// }
</style>