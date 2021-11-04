<template>
  <!-- 侧边栏 -->
  <div class="sidebar">
    <!-- 侧边栏头部 -->
    <div class="sidebar-header">
      <slot name="header"></slot>
      <!--      <a href="/#/home">test</a>-->
    </div>

    <slot name="content"></slot>
    <!--    &lt;!&ndash; 侧边栏内容 &ndash;&gt;-->
    <!--    <div class="sidebar-content">-->
    <!--      -->
    <!--      &lt;!&ndash; 侧边栏行 &ndash;&gt;-->
    <!--      <div class="sidebar-line">-->
    <!--        <a href="/#/home">1</a>-->
    <!--      </div>-->
    <!--      <div class="sidebar-line">-->
    <!--        <a href="/#/home">2</a>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "sidebar",
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
  padding: 10px;
  flex-direction: column;
  background-color: pink;
  border-top: 1px solid #dcdcdc;
  transition: all 0.3s ease;

  .sidebar-header {
    width: 100%;
    padding: 10px;

    a {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      color: #000;
    }
  }

  /*.sidebar-content {*/
  /*  position: relative;*/
  /*  display: flex;*/
  /*  flex: 1;*/
  /*  width: 100%;*/
  /*  box-sizing: border-box;*/
  /*  flex-direction: column;*/
  /*  justify-content: flex-start;*/
  /*  align-items: center;*/

  /*  .sidebar-line {*/
  /*    display: flex;*/
  /*    width: 100%;*/
  /*    flex-direction: row;*/
  /*    justify-content: center;*/
  /*    align-items: center;*/

  /*    a {*/
  /*      display: flex;*/
  /*      width: 100%;*/
  /*      padding: 5px;*/
  /*      flex-direction: row;*/
  /*      justify-content: center;*/
  /*      font-size: 14px;*/

  /*      &:hover {*/
  /*        background-color: rgba(0, 0, 0, 0.3);*/
  /*        color: skyblue;*/
  /*      }*/
  /*    }*/
  /*  }*/
  /*}*/
}

@media screen and (max-width: 500px) {
  .sidebar {
    width: 50px;
  }
}
</style>
