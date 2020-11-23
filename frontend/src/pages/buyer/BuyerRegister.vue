<template>
  <div>
    <h1>BuyerRegister</h1>
    <Register :role="role"></Register>
  </div>
</template>

<script>
import { userRoleEnum } from "../../types/index";
import Register from "../../components/divs/user/Register";

export default {
  name: "BuyerRegister",
  props: {},
  components: { Register },

  data() {
    return {
      role: userRoleEnum.BUYER,
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

form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>
