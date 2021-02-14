<template>
  <div>
    <h3>You have an account already, please use freeleaps username to log in</h3>
    <form @submit.prevent="signIn">
      <div class="input-group mb-3">
        <UsernameInput
          ref="usernameInput"
          v-model.trim="username"
          placeholder="Your freeleaps username"
          :suppressMessage="true"
        />
        <PasswordInput
          ref="passwordInput"
          v-model.trim="password"
          placeholder="Your password"
          :suppressMessage="true"
        />
      </div>
      <button type="submit">Sign In</button>
      <p v-if="hasInvalidInput()">{{inputError}}</p>
    </form>
  </div>
</template>

<script>
import { UserAuthApi, userProfileValidator } from "../../utils/index";
import UsernameInput from "../../components/inputs/user/UsernameInput";
import PasswordInput from "../../components/inputs/user/PasswordInput";

export default {
  name: "UserSignin",
  props: {},
  data() {
    return {
      username: "",
      password: "",
      isInvalidUsername: false,
      isInvalidPassword: false,
      usernameError: null,
      passwordError: null,
      inputError: null,
      userNameFormatMessage: userProfileValidator.usernameValidator.getFormatRequirement(),
      passwordFormatMessage: userProfileValidator.passwordValidator.getFormatRequirement(),
    };
  },
  components: {
    UsernameInput,
    PasswordInput,
  },
  created() {},
  mounted() {},
  methods: {
    hasInvalidInput() {
      return this.isInvalidUsername || this.isInvalidPassword;
    },

    validateInput() {
      this.isInvalidUsername = false;
      this.isInvalidPassword = false;

      this.usernameError = this.$refs.usernameInput.validate();
      if (this.usernameError) {
        this.isInvalidUsername = true;
        this.inputError = this.usernameError;
        return false;
      }

      this.passwordError = this.$refs.passwordInput.validate();
      if (this.passwordError) {
        this.isInvalidPassword = true;
        this.inputError = this.passwordError;
        return false;
      }
      return true;
    },

    signIn() {
      if (!this.validateInput()) {
        return;
      }

      UserAuthApi.signin(this.username, this.password)
        .then((response) => {
          this.mnx_authenticatedUser(response.data);
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
