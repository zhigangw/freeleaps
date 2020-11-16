<template>
  <div>
    <form @submit.prevent="submitForm">
      <h1>BuyerRegister</h1>

      <div class="form-control">
        <label for="email">E-Mail</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="password" />
      </div>
      <div class="form-control">
        <label for="repeat-password">Repeat Password</label>
        <input type="password" id="repeat-password" v-model.trim="repeat_password" />
      </div>
      <p v-if="!formIsValid">Please enter a valid email and password .</p>
      <button>Create Account</button>
    </form>
  </div>
</template>

<script>
import { BackendApi } from "../../utils/index";

export default {
  name: "BuyerRegister",
  props: {},

  data() {
    return {
      email: "",
      password: "",
      repeat_password: "",
      formIsValid: true,
      mode: "login",
      isLoading: false,
      error: null,
    };
  },

  created() {},
  mounted() {},
  methods: {
    createAccount() {
      //TODO Create buyer profile on backend
      this.mnx_authenticatedUser();
      this.mnx_setUserBuyer();
      this.mnx_navToBuyerBasicInfo();
    },

    submitForm() {
      BackendApi.signup(this.email, this.password);
    },
  },
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
