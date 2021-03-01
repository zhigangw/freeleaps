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
              v-model.trim="username"
              placeholder="type username"
              :readonly="knownUsername == true"
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
              <button
                type="button"
                class="auxilliary-button"
                @click="forgetPassword"
              >Forget password ?</button>
            </div>

            <div v-if="knownUsername != true" class="auxilliary-containter justify-content-end">
              <button class="auxilliary-button" @click="forgetUsername" type="button">Forget Username?</button>
            </div>
            <button class="input-signin-submit" type="submit">Sign In</button>
            <p class="errorInput" v-if="hasInvalidInput()">{{inputError}}</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserAuthApi, userProfileValidator } from "../../utils/index";

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
      email: "",
      username: "",
      password: "",
      keepMeSignedin: false,
      knownUsername: false,
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
        this.knownUsername = true;
      }
    }
  },
  methods: {
    hasInvalidInput() {
      return (this.inputError) && (this.inputError.length > 0);
    },

    signIn() {
      this.inputError = userProfileValidator.usernameValidator.validate(
        this.username
      );
      if (this.hasInvalidInput()) {
        return;
      }

      this.inputError = userProfileValidator.passwordValidator.validate(
        this.password
      );
      if (this.hasInvalidInput()) {
        return;
      }

      UserAuthApi.signin(this.username, this.password)
        .then((response) => {
          this.mnx_userSignedin(response.data, this.keepMeSignedin);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    forgetUsername() {
      this.mnx_navToUserForgetUsername();
    },

    forgetPassword() {
      this.mnx_navToUserForgetPassword(this.username);
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
.auxilliary-button {
  @extend .btn;
  @extend .btn-link;
  @extend .m-0;
  @extend .p-0;
}
.input-signin-submit {
  @extend .form-control;
  @extend .btn;
  @extend .btn-primary;
}
</style>
