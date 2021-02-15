<template>
  <div>
    <h1>Please type your password</h1>
    <form @submit.prevent="signIn">
      <div class="input-group mb-3">
        <input class="form-control" type="text" :value="email" readonly />
      </div>
      <div class="input-group mb-3">
        <password-input
          :suppressMessage="true"
          ref="passwordInput"
          v-model.trim="password"
          placeholder="type in your password"
        />
      </div>
      <button type="submit">Sign In</button>
      <p v-if="hasInvalidInput()">{{inputError}}</p>
    </form>
  </div>
</template>

<script>
import { UserAuthApi } from "../../utils/index";
import PasswordInput from "../../components/inputs/user/PasswordInput";

export default {
  name: "EmailSignin",
  props: {
    email: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      password: "",
      inputError: null,
    };
  },
  components: {
    PasswordInput,
  },
  created() {},
  mounted() {},
  methods: {
    clearPasswordError() {
      this.isInvalidPassword = false;
    },

    hasInvalidInput() {
      return this.inputError !== null && this.inputError.length > 0;
    },

    signIn() {
      this.inputError = this.$refs.passwordInput.validate();
      if (this.hasInvalidInput()) {
        return;
      }

      UserAuthApi.signinByEmail(this.email, this.password)
        .then((response) => {
          this.mnx_authenticatedUser(response.data);
          this.mnx_setUserRole(response.data.role);
          this.mnx_navAfterSignedin();
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
</style>
