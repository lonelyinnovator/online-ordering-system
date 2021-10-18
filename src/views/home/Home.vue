<template>
  <side-bar></side-bar>
  <div class="home">666</div>
</template>

<script>
import SideBar from "@/components/sidebar/SideBar.vue";
export default {
  name: "home",
  components: {
    SideBar,
  },
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
</style>