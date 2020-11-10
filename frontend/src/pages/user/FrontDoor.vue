<template>
  <div>
    <h1>FrontDoor</h1>
    <button @click="gotoBuyerRegister">Become Buyer</button>
    <button @click="gotoSellerRegister">Become Seller</button>
  </div>
</template>

<script>
export default {
  name: "FrontDoor",
  props: {},

  data() {
    return {};
  },

  created() {},
  mounted() {},
  methods: {
    gotoBuyerRegister() {
      this.mnx_navToBuyerRegister();
    },

    gotoSellerRegister() {
      this.mnx_navToBuyerRegister();
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
