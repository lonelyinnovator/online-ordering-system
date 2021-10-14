<template>
  <!-- 登录表单 -->
  <div class="signin">
    <!-- 登录头 -->
    <div class="signin-header">
      <div class="header-info">
        <h3>SignIn</h3>
      </div>
    </div>
    <!-- 登录注册表单内容 -->
    <div class="form-content">
      <!-- 登录表单 -->
      <sign-in-form @msgOn="msgOn" />
    </div>
  </div>
</template>

<script>
import SignInForm from "@/components/login/SignInForm.vue";
export default {
  name: "signin",
  components: {
    SignInForm,
  },
  data() {
    return {};
  },
  methods: {
    msgOn(flag) {
      this.$emit("msgOn", flag);
      // console.log("signin: ", isSignin);
    },
  },
};
</script>

<style lang="less" scoped>
// 登录表单
.signin {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background: #c9d6ff;
  background: -webkit-linear-gradient(to right, #e2e2e2, #c9d6ff);
  background: linear-gradient(to right, #e2e2e2, #c9d6ff);

  .signin-header {
    display: flex;
    width: 100%;
    height: 80px;
    padding: 10px;
    flex-direction: row;

    .header-info {
      flex: 1;
      display: flex;
      padding: 15px;
      justify-content: center;
      align-items: center;

      h3 {
        font-size: 20px;
        color: #666;
      }
    }
  }

  // 表单内容
  .form-content {
    width: 100%;
    flex: 1;
  }
}
</style>