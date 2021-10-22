<template>
  <div class="docker-server">
    <iframe
      name="iframeChild"
      id="iframeChild"
      :src="getPageUrl"
      width="100%"
      frameborder="0"
      scrolling="no"
      ref="iframeDom"
    ></iframe>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "server",
  data() {
    return {
      getPageUrl: "http://101.132.73.96/web/home",
    };
  },
};
</script>

<style scoped>
</style>

