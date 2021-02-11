<template>
  <div>
    <main>
      <router-view name="header"></router-view>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    
  },
  computed: {},
  methods: {},
};
</script>
<style lang="scss">
@import './assets/styles/main.scss';
</style>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
