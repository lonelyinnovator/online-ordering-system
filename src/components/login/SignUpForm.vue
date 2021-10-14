<template>
  <div class="sign-form">
    <!-- 邮箱行 -->
    <div class="single-line-wrapper">
      <!-- 用户字体图标 -->
      <div class="icu">
        <div class="iconclass">
          <span class="icon-mail icon-font"></span>
        </div>
      </div>
      <!-- 输入框和错误信息 -->
      <div class="single-line-right">
        <!-- 用户名输入框 -->
        <div class="email-input">
          <input
            type="text"
            name="email"
            placeholder="请输入邮箱"
            v-model="email"
            @blur="emailBlur"
          />
        </div>
        <div class="error-message" :style="{ visibility: email_visibility }">
          请输入正确的邮箱
        </div>
      </div>
    </div>
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
      <button type="submit" class="submit" @click="validateInput">注册</button>
    </div>
    <!-- 注册切换成登录 -->
    <div class="sign-switch">
      <!-- 登录链接 -->
      <div class="sign-link">
        <a @click="sign">已有账号？这里登录</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { validate } from "@/assets/js/login/validate.mjs";
export default {
  name: "signin",
  data() {
    return {
      email: "",
      username: "",
      password: "",
      email_visibility: "hidden",
      username_visibility: "hidden",
      password_visibility: "hidden",
      // isSignUp: false,
    };
  },
  methods: {
    /**
     * 点击按钮时切换登录和注册的状态，并将变化状态设为true
     */
    sign() {
      this.$store.dispatch("actSigninSignUp");
      this.$store.dispatch("actInUpChange");
      this.email = "";
      this.username = "";
      this.password = "";
      this.email_visibility = "hidden";
      this.username_visibility = "hidden";
      this.password_visibility = "hidden";
    },

    /**
     * 邮箱输入框失焦时检验邮箱是否有效
     */
    emailBlur() {
      console.log(this.email);
      if (!validate("email", this.email)) {
        this.email_visibility = "visible";
      } else {
        this.email_visibility = "hidden";
      }
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
     * 验证邮箱、用户名和密码是否有效
     */
    validateInput() {
      if (!validate("email", this.email)) {
        this.email_visibility = "visible";
      } else {
        this.email_visibility = "hidden";
      }
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

    sendRequest() {
      axios({
        url: "http://101.132.73.96/test-1.0/register",
        method: "post",
        params: {
          // email: this.email,
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
      let msg = { header: "注册成功", content: "即将进入登录页面" };
      this.$emit("msgOn", true, msg);
      // this.sign();
      // 强制刷新本页面
      // this.$router.go(0);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/login/common.css";
.sign-form {
  padding: 10px 50px;
}

.single-line-wrapper {
  margin-top: 15px;
}

.submit-line {
  margin-top: 10px;
}
</style>