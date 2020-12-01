<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="username">Username</label>
        <input
          type="username"
          id="username"
          v-model.trim="username"
          @change="checkUsernameAvailability"
        />
        <p v-if="isUsernameNotAvailable">user name is not available</p>
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
  name: "UserRegister",
  props: {
    role: { type: Number, required: true },
  },

  data() {
    return {
      username: "",
      password: "",
      repeat_password: "",
      formIsValid: true,
      error: null,
      isUsernameNotAvailable: false,
    };
  },

  created() {},
  mounted() {},
  methods: {
    async checkUsernameAvailability() {
      UserAuthApi.checkUsernameAvailability(this.username)
        .then((response) => {
          this.isUsernameNotAvailable = response.data.available == false;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    signedUserIn(response) {
      this.mnx_authenticatedUser(response);
      this.mnx_setUserRole(response.role);
      this.mnx_navAfterSignedup();
    },

    async submitForm() {
      UserAuthApi.signup(this.username, this.password, this.role)
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
