<template>
  <div>
    <h1>Please type your password</h1>
    <form @submit.prevent="signIn">
      <div class="input-group mb-3">
        <input class="form-control" type="text" :value="email" readonly />
      </div>
      <div class="input-group mb-3">
        <password-input v-model.trim="password" placeholder="type in your password" />
      </div>
      <button type="submit">Sign In</button>
      <p v-if="hasInvalidInput()">{{inputError}}</p>
    </form>
  </div>
</template>

<script>
import { UserAuthApi, userProfileValidator } from "../../utils/index";
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
      username: "",
      password: "",
      isInvalidUsername: false,
      isInvalidPassword: false,
      usernameError: null,
      passwordError: null,
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
      return this.isInvalidPassword;
    },

    validatePassword() {
      this.passwordError = userProfileValidator.passwordValidator.validate(
        this.password
      );
      if (this.passwordError) {
        this.isInvalidPassword = true;
      } else {
        this.isInvalidPassword = false;
      }
    },

    signIn() {
      this.validatePassword();
      if (this.hasInvalidInput()) {
        this.inputError = "Please fix erros before submit.";
        return;
      }

      UserAuthApi.signin(this.username, this.password)
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
