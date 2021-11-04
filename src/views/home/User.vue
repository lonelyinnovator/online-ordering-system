<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="user">
    <!--用户侧边栏-->
    <user-side-bar />
    <!-- home页面 -->
    <div class="home">
      <!-- 面包屑 -->
      <nav-bar></nav-bar>
      <!-- 主页面 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import UserSideBar from "@/components/sidebar/UserSideBar.vue";
import NavBar from "@/components/navbar/NavBar.vue";

export default {
  name: "home",
  components: {
    UserSideBar,
    NavBar,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.user {
  width: 100%;
  display: flex;
  flex-direction: row;

  .home {
    flex: 1;
    margin-left: 200px;
    transition: all 0.3s ease;
  }
}

@media screen and (max-width: 500px) {
  .user {
    .home {
      margin-left: 50px;
    }
  }
}
</style>
