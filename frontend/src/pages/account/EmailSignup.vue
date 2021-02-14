<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="input-group mb-3">
        <email-input v-model="emailValue" readonly />
      </div>
      <div class="input-group mb-3">
        <password-input
          ref="passwordInput1"
          :suppressMessage="true"
          v-model.trim="password"
          placeholder="password"
        />
        <password-input
          ref="passwordInput2"
          :suppressMessage="true"
          v-model.trim="repeat_password"
          placeholder="confirm"
        />
      </div>
      <p v-if="isInvalidPassword">{{passwordError}}</p>
      <button type="submit">Create Account</button>
      <p v-if="hasInvalidInput()">{{error}}</p>
    </form>
  </div>
</template>

<script>
import { UserAuthApi } from "../../utils/index";
import PasswordInput from "../../components/inputs/user/PasswordInput";
import EmailInput from "../../components/inputs/user/EmailInput";
export default {
  name: "EmailSignup",
  props: {
    email: {
      required: true,
      type: String,
    },
  },
  components: {
    PasswordInput,
    EmailInput,
  },
  watch: {
    email: {
      immediate: true,
      handler: function (val) {
        this.emailValue = val;
      },
    },
  },

  data() {
    return {
      role: null,
      emailValue: "",
      password: "",
      repeat_password: "",
      error: null,
      isInvalidPassword: false,
      passwordError: null,
      repeatPasswordError: null,
    };
  },

  created() {},
  mounted() {},
  methods: {
    hasInvalidInput() {
      return this.isInvalidPassword;
    },

    clearPasswordError() {
      this.isInvalidPassword = false;
    },

    validatePassword() {
      this.passwordError = this.$refs.passwordInput1.validate();
      if (this.passwordError) {
        this.isInvalidPassword = true;
      } else {
        if (this.password != this.repeat_password) {
          this.isInvalidPassword = true;
          this.passwordError = "Two typed in password must be identical";
        } else {
          this.isInvalidPassword = false;
        }
      }
    },

    signedUserIn(response) {
      this.mnx_authenticatedUser(response);
      this.mnx_navAfterSignedup();
    },

    async submitForm() {
      this.validatePassword();
      if (this.hasInvalidInput()) {
        this.error = "Please fix erros before submit";
        return;
      }
      UserAuthApi.signupByEmail(this.email, this.password)
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
form {
  margin: 1rem;
  padding: 1rem;
}
</style>
