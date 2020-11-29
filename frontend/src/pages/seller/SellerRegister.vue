<template>
  <div>
    <h1>SellerRegister</h1>
    <UserRegister :role="role"></UserRegister>
  </div>
</template>

<script>
import { userRoleEnum } from "../../types/index";
import UserRegister from "../../components/divs/user/UserRegister";

export default {
  name: "SellerRegister",
  props: {},
  components: { UserRegister },

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
