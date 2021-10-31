<template>
  <!-- 注册表单 -->
  <div class="signup">
    <div class="signup-header">
      <div class="header-info">
        <h3>SignUp</h3>
      </div>
    </div>
    <!-- 注册表单内容 -->
    <div class="form-content">
      <sign-up-form @msgOn="msgOn" />
    </div>
  </div>
</template>

<script>
import SignUpForm from "@/components/login/SignUpForm.vue";
export default {
  name: "signup",
  components: {
    SignUpForm,
  },
  data() {
    return {};
  },
  methods: {
    msgOn(flag, msg) {
      this.$emit("msgOn", flag, msg);
    },
  },
};
</script>

<style lang="less" scoped>
// 登录表单
.signup {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: #fdd3d9;
  // background: #ee9ca7;
  // background: -webkit-linear-gradient(to right, #ffdde1, #ee9ca7);
  // background: linear-gradient(to right, #ffdde1, #ee9ca7);

  .signup-header {
    display: flex;
    width: 100%;
    height: 80px;
    padding: 15px;
    flex-direction: row;
    // background-color: purple;

    .header-info {
      flex: 1;
      display: flex;
      padding: 15px;
      justify-content: center;

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
    // background-color: pink;
  }
}
</style>