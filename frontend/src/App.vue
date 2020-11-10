<template>
  <div>
    <buyer-nav-bar></buyer-nav-bar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import BuyerNavBar from "./components/nav/BuyerNavBar.vue";

export default {
  name: "App",
  components: {
    BuyerNavBar,
  },
  computed: {},
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
