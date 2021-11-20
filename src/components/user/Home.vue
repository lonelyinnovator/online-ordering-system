<template>
  <div class="user-home">
    <div class="user-home-content">
      <div class="user-home-header">
        <h2>{{ title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      title: "home",
    };
  },
  methods: {},

  beforeCreate() {
    let token = "";
    if (this.$cookies.isKey("user_session")) {

      token = this.$cookies.get("user_session");
    }
    else {
      this.$router.replace("/login")
    }
  },
};
</script>

<style lang="less" scoped>
.user-home {
  position: relative;
  width: 100%;
  height: 500px;
  padding: 0 30px;
  background-color: #ccc;

  .user-home-content {
    position: relative;
    width: 100%;
    height: 100%;

    .user-home-header {
      display: flex;
      position: relative;
      top: 0;
      right: 0;
      width: 100%;
      padding: 20px 0;
      // height: 100px;
      transform: translateY(-50%);
      flex-direction: column;
      justify-content: center;
      background-color: #fff;
      border-radius: 10px;

      h2 {
        font-size: 30px;
        margin-left: 10px;
      }
    }
  }
}
</style>
