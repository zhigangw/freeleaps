<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <p class="callout">Create account with just a couple steps.</p>
        <div class="form-group">
          <form @submit.prevent="submitForm">
            <input class="form-group-item" type="text" :value="email" readonly />
            <input
              class="form-group-item"
              type="password"
              v-model.trim="password"
              placeholder="password"
            />
            <input
              class="form-group-item"
              type="password"
              v-model.trim="repeat_password"
              placeholder="confirm"
            />
            <button class="form-group-item btn btn-primary" type="submit">Create Account</button>
            <p class="form-group-item errorInput border-0" v-if="hasInvalidInput()">{{error}}</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserAuthApi, userProfileValidator } from "../../utils/index";
export default {
  name: "EmailSignup",
  props: {
    email: {
      required: true,
      type: String,
    },
  },
  components: {},
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
      password: "",
      repeat_password: "",
      error: null,
      repeatPasswordError: null,
    };
  },

  created() {},
  mounted() {},
  methods: {
    hasInvalidInput() {
      return this.error != null;
    },

    clearPasswordError() {
      this.error = null;
    },

    validatePassword() {
      this.error = userProfileValidator.passwordValidator.validate(
        this.password
      );
      if (this.error != null) {
        return;
      }
      if (this.password != this.repeat_password) {
        this.error = "Two password input must be identical";
      }
    },

    signedUserIn(response) {
      this.mnx_authenticatedUser(response);
      this.mnx_setUserRole(response.data.role);
      this.mnx_navAfterSignedup();
    },

    async submitForm() {
      this.validatePassword();
      if (this.hasInvalidInput()) {
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
