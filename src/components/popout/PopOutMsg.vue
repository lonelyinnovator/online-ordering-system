<template>
  <div class="popout-msg"></div>
</template>

<script>
export default {
  name: "popoutmsg",
};
</script>

<style lang="less" scoped>
.popout-msg {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>