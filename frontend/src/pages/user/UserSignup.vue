<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="username">Username</label>
        <input
          type="username"
          id="username"
          :title="userNameFormatMessage"
          v-model.trim="username"
          @change="checkUsernameAvailability"
          @input="clearUsernameError"
        />
        <p v-if="isUsernameNotAvailable">{{usernameNotAvailableError}}</p>
        <p v-if="isInvalidUsername">{{usernameError}}</p>
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          :title="passwordFormatMessage"
          v-model.trim="password"
          @input="clearPasswordError"
        />
        <p v-if="isInvalidPassword">{{passwordError}}</p>
      </div>
      <div class="form-control">
        <label for="repeat-password">Repeat Password</label>
        <input
          type="password"
          id="repeat-password"
          :title="repeatpasswordFormatMessage"
          v-model.trim="repeat_password"
          @input="clearRepeatPasswordError"
        />
        <p v-if="isInvalidRepeatPassword">{{repeatPasswordError}}</p>
      </div>

      <input type="radio" id="buyer" value="2" v-model.number="role" />
      <label for="male">I want to post requests</label>
      <br />
      <input type="radio" id="seller" value="1" v-model.number="role" />
      <label for="female">I want to make money</label>
      <br />
      <button type="submit">Create Account</button>
      <p v-if="hasInvalidInput()">{{error}}</p>
    </form>
  </div>
</template>

<script>
import { UserAuthApi, UserProfileValidator } from "../../utils/index";

export default {
  name: "UserRegister",
  props: {
    startingRole: {
      type: String,
    },
  },

  data() {
    return {
      role: null,
      username: "",
      password: "",
      repeat_password: "",
      error: null,
      isUsernameNotAvailable: false,
      isInvalidUsername: false,
      isInvalidPassword: false,
      isInvalidRepeatPassword: false,
      usernameError: null,
      passwordError: null,
      repeatPasswordError: null,
      userNameFormatMessage: UserProfileValidator.getUserNameFormatRequirement(),
      passwordFormatMessage: UserProfileValidator.getPasswordFormatRequirement(),
      repeatpasswordFormatMessage: "Must be identical to the password above",
      usernameNotAvailableError: "This username is not available",
    };
  },

  created() {},
  mounted() {
    this.role = this.startingRole;
  },
  methods: {
    roleValue() {
      return Number(this.role);
    },
    hasInvalidInput() {
      return (
        this.isUsernameNotAvailable ||
        this.isInvalidUsername ||
        this.isInvalidPassword ||
        this.isInvalidRepeatPassword
      );
    },
    clearUsernameError() {
      this.isUsernameNotAvailable = false;
      this.isInvalidUsername = false;
    },
    validateUsername() {
      this.usernameError = UserProfileValidator.validateUsername(this.username);
      if (this.usernameError) {
        this.isInvalidUsername = true;
      } else {
        this.isInvalidUsername = false;
      }
    },

    async checkUsernameAvailability() {
      UserAuthApi.checkUsernameAvailability(this.username)
        .then((response) => {
          this.isUsernameNotAvailable = response.data.available == false;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    clearPasswordError() {
      this.isInvalidPassword = false;
    },

    clearRepeatPasswordError() {
      this.isInvalidRepeatPassword = false;
    },

    validatePassword() {
      this.passwordError = UserProfileValidator.validatePassword(this.password);
      if (this.passwordError) {
        this.isInvalidPassword = true;
      } else {
        this.isInvalidPassword = false;
      }
    },

    validateRepeatPassword() {
      if (this.password != this.repeat_password) {
        this.isInvalidRepeatPassword = true;
        this.repeatPasswordError = "Two typed in password must be identical";
      } else {
        this.isInvalidRepeatPassword = false;
      }
    },

    signedUserIn(response) {
      this.mnx_authenticatedUser(response);
      this.mnx_setUserRole(this.roleValue());
      this.mnx_navAfterSignedup();
    },

    async submitForm() {
      this.validateUsername();
      this.validatePassword();
      this.validateRepeatPassword();
      if (this.hasInvalidInput()) {
        this.error = "Please fix erros before submit";
        return;
      }
      UserAuthApi.signup(this.username, this.password, this.roleValue())
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
