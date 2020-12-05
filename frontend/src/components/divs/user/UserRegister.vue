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
          @change="validateUsername"
        />
        <p v-if="isInvalidUsername">{{usernameError}}</p>
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          :title="passwordFormatMessage"
          v-model.trim="password"
          @change="validatePassword"
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
          @change="validateRepeatPassword"
        />
        <p v-if="isInvalidRepeatPassword">{{repeatPasswordError}}</p>
      </div>
      <p v-if="isInvalidPassword">{{passwordError}}</p>
      <button type="submit" :disabled="hasInvalidInput()">Create Account</button>
    </form>
  </div>
</template>

<script>
import { UserAuthApi, UserProfileValidator } from "../../../utils/index";

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
      isInvalidUsername: false,
      isInvalidPassword: false,
      isInvalidRepeatPassword: false,
      usernameError: null,
      passwordError: null,
      repeatPasswordError: null,
      userNameFormatMessage: UserProfileValidator.getUserNameFormatRequirement(),
      passwordFormatMessage: UserProfileValidator.getPasswordFormatRequirement(),
      repeatpasswordFormatMessage: "Must be identical to the password above",
    };
  },

  created() {},
  mounted() {},
  methods: {
    hasInvalidInput() {
      return (
        !this.isInvalidUsername &&
        !this.isInvalidPassword &&
        this.isInvalidRepeatPassword
      );
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

    async checkUsernameAvailability() {
      UserAuthApi.checkUsernameAvailability(this.username)
        .then((response) => {
          this.isUsernameNotAvailable = response.data.available == false;
        })
        .catch((error) => {
          console.log(error);
        });
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
