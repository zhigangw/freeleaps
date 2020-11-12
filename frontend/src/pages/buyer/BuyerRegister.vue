<template>
  <div>
    <h1>BuyerRegister</h1>
    <button @click="createAccount">Create Account</button>
  </div>
</template>

<script>
export default {
  name: "BuyerRegister",
  props: {},

  data() {
    return {};
  },

  created() {},
  mounted() {},
  methods: {
    createAccount(){
      this.mnx_authenticatedUser();
      this.mnx_setUserBuyer();
      console.log(this.mnx_isUserBuyer());
      this.mnx_navToBuyerBasicInfo();
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
