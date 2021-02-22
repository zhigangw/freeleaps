<template>
  <div class="app-body">
    <header>
      <router-view name="header"></router-view>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  computed: {},
  methods: {},
};
</script>
<style lang="scss">
@import "./assets/styles/main.scss";
</style>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  height: 100%;
}
</style>
<style scoped lang="scss">
header {
  width: 100%;
  height: 5vmax;
  background: $primary;
}
main {
  margin-top: 0px;
  height: calc(100% - 5vmax);
}
.app-body {
  margin-top: 0px;
  width: 100%;
  height: 100%;
}
</style>
