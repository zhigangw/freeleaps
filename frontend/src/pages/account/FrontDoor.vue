<template>
  <div>
    <h1>FrontDoor</h1>
    <button @click="gotoBuyerRegister">Become Buyer</button>
    <button @click="gotoSellerRegister">Become Seller</button>
  </div>
</template>

<script>
import { userRoleEnum } from "../../types/index";

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
      this.mnx_navToUserSignup(userRoleEnum.BUYER);
    },

    gotoSellerRegister() {
      this.mnx_navToUserSignup(userRoleEnum.SELLER);
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
