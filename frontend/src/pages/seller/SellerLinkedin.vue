<template>
  <div>
    <h1>SellerLinkedin</h1>
    <button @click="gotoNext">Next</button>
  </div>
</template>

<script>
export default {
  name: "SellerLinkedin",
  props: {},

  data() {
    return {};
  },

  created() {},
  mounted() {},
  methods: {
    gotoNext() {
      this.mnx_navToSellerPackage();
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
