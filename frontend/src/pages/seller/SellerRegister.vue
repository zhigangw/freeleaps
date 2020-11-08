<template>
  <div>
    <h1>SellerRegister</h1>
    <button @click="createAccount">Create Account</button>
  </div>
</template>

<script>
export default {
  name: "SellerRegister",
  props: {},

  data() {
    return {};
  },

  created() {},
  mounted() {},
  methods: {
    createAccount(){
      this.$store.dispatch("userAuth/authenticateUser")
      this.$store.dispatch("userProfile/useSellerRole");
      this.$router.push("/user-basic");
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
