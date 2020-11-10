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
      this.mnx_authenticatedUser();
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
