<template>
  <div>
    <h1>BuyerProjectView</h1>
    <button @click="gotoDashboard">Dashboard</button>
  </div>
</template>

<script>
export default {
  name: "BuyerProjectView",
  props: {},

  data() {
    return {};
  },

  created() {},
  mounted() {},
  methods: {
    gotoDashboard() {
      this.mnx_navToBuyerDashboard();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
