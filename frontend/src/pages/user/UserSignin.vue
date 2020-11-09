<template>
  <div>
    <h1>UserSignin</h1>
    <button @click="signIn">Sign In</button>
  </div>
</template>

<script>

export default {
  name: "UserSignin",
  props: {},
  data() {
    return {};
  },

  created() {},
  mounted() {},
  methods: {
    signIn() {
      this.$store.dispatch("userAuth/authenticateUser");
      this.$store.dispatch("userProfile/useSellerRole");
      this.mnx_navAfterSignedin();
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
