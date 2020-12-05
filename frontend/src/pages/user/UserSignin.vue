<template>
  <div>
    <h1>UserSignin</h1>
    <form @submit.prevent="signIn">
      <div class="form-control">
        <label for="username">Username</label>
        <input
          type="username"
          id="username"
          v-model.trim="username"
          placeholder="type in your username"
          :title="userNameFormatMessage"
          @change="validateUsername"
        />
        <span v-if="isInvalidUsername">{{usernameError}}</span>
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model.trim="password"
          placeholder="type in your password"
          :title="passwordFormatMessage"
          @click="validatePassword"
        />
        <span v-if="isInvalidPassword">{{passwordError}}</span>
      </div>
      <button type="submit">Sign In</button>
    </form>
  </div>
</template>

<script>
import { UserAuthApi, UserProfileValidator } from "../../utils/index";

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
      userNameFormatMessage: UserProfileValidator.getUserNameFormatRequirement(),
      passwordFormatMessage: UserProfileValidator.getPasswordFormatRequirement(),
    };
  },

  created() {},
  mounted() {},
  methods: {
    hasInvalidInput() {
      return !this.isInvalidUsername && !this.isInvalidPassword;
    },

    validateUsername() {
      this.usernameError = UserProfileValidator.validateUsername(this.username);
      if (this.usernameError) {
        this.isInvalidUsername = true;
      } else {
        this.isInvalidUsername = false;
        this.checkUsernameAvailability();
      }
    },

    validatePassword() {
      this.passwordError = UserProfileValidator.validatePassword(this.password);
      if (this.passwordError) {
        this.isInvalidPassword = true;
      } else {
        this.isInvalidPassword = false;
      }
    },

    signIn() {
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
