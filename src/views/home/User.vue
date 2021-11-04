<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <!--  侧边栏-->
  <side-bar>
    <template v-slot:header>
      <a href="/home">test</a>
    </template>
    <template v-slot:content>
      <!-- 侧边栏内容 -->
      <div class="sidebar-content">
        <!-- 侧边栏行 -->
        <div class="sidebar-line">
          <a :href=path>1</a>
        </div>
        <div class="sidebar-line">
          <a :href=path>2</a>
        </div>
      </div>
    </template>
  </side-bar>

  <div class="home">
    <router-view></router-view>
  </div>

</template>

<script>
  import SideBar from "@/components/sidebar/SideBar.vue";

  export default {
    name: "home",
    components: {
      SideBar,
    },
    data() {
      return {
        path: "/#" + this.$route.path,
      }
    }
  };
</script>

<style lang="less" scoped>
  .home {
    margin-left: 200px;
  }

  @media screen and (max-width: 500px) {
    .home {
      margin-left: 50px;
    }
  }

  .sidebar-content {
    position: relative;
    display: flex;
    flex: 1;
    width: 100%;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .sidebar-line {
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      a {
        display: flex;
        width: 100%;
        padding: 5px;
        flex-direction: row;
        justify-content: center;
        font-size: 14px;

        &:hover {
          background-color: rgba(0, 0, 0, 0.3);
          color: skyblue;
        }
      }
    }
  }

</style>
