<template>
  <div class="sign-form">
    <!-- 用户行 -->
    <div class="single-line-wrapper">
      <!-- 用户字体图标 -->
      <div class="icu">
        <div class="iconclass">
          <span class="icon-user icon-font"></span>
        </div>
      </div>
      <!-- 输入框和错误信息 -->
      <div class="single-line-right">
        <!-- 用户名输入框 -->
        <div class="username-input">
          <input
            type="text"
            name="username"
            placeholder="请输入用户名"
            v-model="username"
            @blur="usernameBlur"
          />
        </div>
        <div class="error-message" :style="{ visibility: username_visibility }">
          请输入正确的用户名，长度为3-16个字符
        </div>
      </div>
    </div>
    <!-- 密码行 -->
    <div class="single-line-wrapper">
      <!-- 用户字体图标 -->
      <div class="icu">
        <div class="iconclass">
          <span class="icon-lock icon-font"></span>
        </div>
      </div>
      <!-- 输入框和错误信息 -->
      <div class="single-line-right">
        <!-- 用户名输入框 -->
        <div class="password-input">
          <input
            type="password"
            name="username"
            placeholder="请输入密码"
            v-model="password"
            @blur="passwordBlur"
          />
        </div>
        <div class="error-message" :style="{ visibility: password_visibility }">
          请输入正确的密码，长度至少为8个字符
        </div>
      </div>
    </div>
    <!-- 提交按钮行 -->
    <div class="submit-line">
      <button type="submit" class="submit" @click="validateInput">登录</button>
    </div>
    <!-- 登录切换 -->
    <div class="sign-switch">
      <!-- 切换注册链接 -->
      <div class="sign-link">
        <a @click="sign">没有账号？快去注册</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { validate } from "@/assets/js/login/validate.mjs";
// import PopOutMsg from "@/components/popout/PopOutMsg.vue";
export default {
  name: "signin",
  components: {},
  data() {
    return {
      //用户名
      username: "",
      //密码
      password: "",
      //是否已登录
      isSignin: false,
      //用户名错误信息是否可见
      username_visibility: "hidden",
      // 密码错误信息是否可见
      password_visibility: "hidden",
    };
  },
  methods: {
    /**
     * 点击底部链接时切换登录和注册的状态，并将变化状态设为true
     */
    sign() {
      this.$store.dispatch("actSigninSignUp");
      this.$store.dispatch("actInUpChange");
      this.username = "";
      this.password = "";
      this.username_visibility = "hidden";
      this.password_visibility = "hidden";
    },

    /**
     * 用户名输入框失焦时检验用户名是否有效
     */
    usernameBlur() {
      if (!validate("username", this.username)) {
        this.username_visibility = "visible";
      } else {
        this.username_visibility = "hidden";
      }
    },

    /**
     * 密码输入框失焦时检验密码是否有效
     */
    passwordBlur() {
      if (!validate("password", this.password)) {
        this.password_visibility = "visible";
      } else {
        this.password_visibility = "hidden";
      }
    },

    /**
     * 验证用户名和密码是否有效
     */
    validateInput() {
      if (!validate("username", this.username)) {
        this.username_visibility = "visible";
      } else {
        this.username_visibility = "hidden";
      }
      if (!validate("password", this.password)) {
        this.password_visibility = "visible";
        return;
      } else {
        this.password_visibility = "hidden";
      }
      this.sendRequest();
    },

    /**
     * 发送请求并接收返回的数据
     */
    sendRequest() {
      axios({
        // url: "http://101.132.73.96/test/login",
        // url: "http://101.132.73.96/test-1.0/login",
        // url: "http://101.132.73.96/web/login",
        url: "http://101.132.73.96/web/login",
        method: "post",
        params: {
          name: this.username,
          pwd: this.password,
        },
      })
        .then((res) => {
          if (res.data) {
            console.log(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      this.isSignin = true;
      let msg = { header: "登录成功", content: "即将进入首页" };
      this.$emit("msgOn", true, msg);
      // this.$router.push("/home");
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/login/common.css";
</style>