<template>
  <div class="user-orderings">
    <div class="user-orderings-content">
      <div class="user-orderings-header">
        <h2>{{ title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Orderings",
  components: {},
  data() {
    return {
      title: "orderings",
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.user-orderings {
  position: relative;
  width: 100%;
  height: 500px;
  padding: 0 30px;
  background-color: #ccc;

  .user-orderings-content {
    position: relative;
    width: 100%;
    height: 100%;

    .user-orderings-header {
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