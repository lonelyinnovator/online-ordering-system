<template>
  <!-- 侧边栏 -->
  <div class="sidebar">
    <!-- 侧边栏头部 -->
    <slot name="header"></slot>
    <!-- 侧边栏内容 -->
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  components: {},
};
</script>

<style lang="less" scoped>
.sidebar {
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
  width: 200px;
  height: 100vh;
  // padding: 10px;
  padding: 10px 0;
  flex-direction: column;
  background-color: pink;
  border-top: 1px solid #dcdcdc;
  transition: all 0.3s ease;
}

@media screen and (max-width: 500px) {
  .sidebar {
    width: 50px;
  }
}
</style>
