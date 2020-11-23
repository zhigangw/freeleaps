<template>
  <div>
    <h1>SellerRegister</h1>
    <Register :role="role"></Register>
  </div>
</template>

<script>
import { userRoleEnum } from "../../types/index";
import Register from "../../components/divs/user/Register";

export default {
  name: "SellerRegister",
  props: {},
  components: { Register },

  data() {
    return {
      role: userRoleEnum.SELLER,
    };
  },

  created() {},
  mounted() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
