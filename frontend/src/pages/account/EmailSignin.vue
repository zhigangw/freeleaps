<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <p class="callout">Please type your password to sign in</p>
        <div class="form-group">
          <form @submit.prevent="signIn">
            <input class="form-group-item" type="text" :value="email" readonly />
            <input
              type="password"
              class="form-group-item"
              v-model.trim="password"
              placeholder="type in your password"
            />
            <div class="form-group-item mt-1 mb-3 d-flex">
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
                class="btn btn-link m-0 p-0"
                @click="forgetPassword"
              >Forget password ?</button>
            </div>
            <button type="submit" class="form-group-item btn btn-primary">Sign In</button>
            <p class="form-group-item errorInput" v-if="hasInvalidInput()">{{inputError}}</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserAuthApi, userProfileValidator } from "../../utils/index";

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
      keepMeSignedin: true,
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    hasInvalidInput() {
      return this.inputError !== null && this.inputError.length > 0;
    },

    async signIn() {
      this.inputError = userProfileValidator.passwordValidator.validate(
        this.password
      );
      if (this.hasInvalidInput()) {
        return;
      }

      UserAuthApi.signinByEmail(this.email, this.password)
        .then((response) => {
          this.mnx_authenticatedUser(response.data);
          this.mnx_setUserRole(response.data.role);
          this.mnx_setKeepUserSignedIn(this.keepMeSignedin);
          this.mnx_navAfterSignedin();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async forgetPassword() {
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
</style>
