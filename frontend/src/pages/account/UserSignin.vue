<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <p class="callout">You have an account already, please use username to log in</p>
        <div class="form-group">
          <form @submit.prevent="signIn">
            <input
              class="form-group-item"
              type="text"
              :value="username"
              placeholder="type username"
            />
            <input
              type="password"
              class="form-group-item mb-3"
              v-model.trim="password"
              placeholder="type password"
            />
            <div class="auxilliary-containter justify-content-between">
              <div class="form-check me-auto">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value
                  id="keep-signed-in"
                  v-model="keepMeSignedin"
                />
                <label class="form-check-label" for="keep-signed-in">Keep me signed in</label>
              </div>
              <button class="btn btn-link m-0 p-0" @click="forgetUsername">Forget Username?</button>
            </div>

            <div class="auxilliary-containter justify-content-end">
              <button
                type="button"
                class="btn btn-link m-0 p-0"
                @click="forgetPassword"
              >Forget password ?</button>
            </div>
            <button class="input-signin-submit" type="submit">Sign In</button>
            <p v-if="hasInvalidInput()">{{inputError}}</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserAuthApi } from "../../utils/index";

export default {
  name: "UserSignin",
  props: {
    emailOrUsername: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      username: "",
      password: "",
      keepMeSignedin: false,
      isInvalidUsername: false,
      isInvalidPassword: false,
      usernameError: null,
      passwordError: null,
      inputError: null,
    };
  },
  components: {},
  created() {},
  mounted() {
    if (this.emailOrUsername != null) {
      if (this.emailOrUsername.includes("@")) {
        this.email = this.emailOrUsername;
      } else {
        this.username = this.emailOrUsername;
      }
    }
  },
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
          this.mnx_setUserRole(response.data.role);
          this.mnx_navAfterSignedin();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    forgetUsername() {
      UserAuthApi.sendUsernameToEmail(this.email)
        .then((response) => {
          response;
          this.mnx_navToUsernameSent(this.email);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    forgetPassword() {
      UserAuthApi.sendTempPasswordToEmail(this.email)
        .then((response) => {
          response;
          this.mnx_navToTempPasswordSent(this.email);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.auxilliary-containter {
  @extend .form-group-item;
  @extend .d-flex;
  @extend .border-0;
  @extend .m-0;
  @extend .p-0;
}

.input-signin-submit {
  @extend .form-control;
  @extend .btn;
  @extend .btn-primary;
}
</style>
