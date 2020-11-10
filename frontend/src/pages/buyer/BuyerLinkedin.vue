<template>
  <div>
    <h1>BuyerLinkedin</h1>
    <button @click="gotoNext">Next</button>
  </div>
</template>

<script>
export default {
  name: "UserLinkedin",
  props: {},

  data() {
    return {};
  },

  created() {},
  mounted() {},
  methods: {
    gotoNext() {
      this.mnx_navToBuyerPackage();
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
