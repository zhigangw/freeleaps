<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <p class="callout">Update password</p>
        <div class="form-group border-0">
          <form @submit.prevent="updatePassword">
              <input
                class="input-password-input"
                type="password"
                v-model="password"
                placeholder="password"
              />
              <input
                class="input-password-input"
                type="password"
                v-model="repeatdPassword"
                placeholder="confirm"
              />

            <div class="input-group-div">
              <button class="input-password-cancel" type="button" @click="goBack">Cancel</button>
              <button class="input-password-submit" type="submit">Submit</button>
            </div>
            <p v-if="hasError()" class="errorInput">{{errorMessage}}</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { userProfileValidator, UserAuthApi } from "../../../utils/index";

export default {
  name: "UpdatePassword",
  props: {},

  data() {
    return {
      password: "",
      repeatdPassword: null,
      errorMessage: null,
    };
  },

  created() {},
  mounted() {},
  methods: {
    hasError() {
      return this.errorMessage !== null;
    },
    async updatePassword() {
      this.errorMessage = userProfileValidator.passwordValidator.validate(
        this.password
      );
      if (this.hasError()) {
        return;
      }
      if (this.password != this.repeatdPassword) {
        this.errorMessage = "The username has been taken.";
        return;
      }

      UserAuthApi.updatePassword(this.password)
        .then((response) => {
          response;
          this.password = null;
          this.repeatdPassword = null;
          this.mnx_navToPasswordUpdated();
        })
        .catch((error) => {
          this.mnx_backendErrorHandler(error);
        });
    },

    goBack() {
      this.mnx_goBack();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.input-group-div {
  @extend .input-group;
  @extend .my-5;
}

.input-password-input {
  @extend .form-group-item;
  @extend .my-3;
  @extend .py-0;
}
.input-password-cancel {
  @extend .form-cancel;
}

.input-password-submit {
  @extend .form-submit;
}
</style>
