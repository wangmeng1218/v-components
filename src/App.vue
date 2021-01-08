<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  mounted () {
    this.$nextTick(function () {
      let clientWidth = document.body.clientWidth;
      let clientHeight = document.body.clientHeight;
      this.$store.commit('setClientHeight', clientHeight);
      this.$store.commit('setClientWidth', clientWidth);
    });
  }
}
</script>

<style>
html,
body,
#app {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    width: 100%;
    overflow: hidden;
    /*margin-top: 60px;*/
  }
</style>
