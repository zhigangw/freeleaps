<template>
  <div>
    <form @submit.prevent="submitForm">
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
      <button type="submit">Create Account</button>
    </form>
  </div>
</template>

<script>
import { UserAuthApi } from "../../../utils/index";

export default {
  name: "Register",
  props: {
    role: { type: Number, required: true },
  },

  data() {
    return {
      email: "",
      password: "",
      repeat_password: "",
      formIsValid: true,
      error: null,
    };
  },

  created() {},
  mounted() {},
  methods: {
    signedUserIn(response) {
      this.mnx_authenticatedUser(response);
      this.mnx_setUserRole(response.role);
      this.mnx_navAfterSignedup();
    },

    async submitForm() {
      BackendApi.signup(this.email, this.password, this.role)
        .then((response) => {
          this.signedUserIn(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
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
