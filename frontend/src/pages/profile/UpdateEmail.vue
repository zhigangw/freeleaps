<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <p class="callout">Update Email</p>
        <div class="form-group border-0">
          <form @submit.prevent="updateEmail">
            <div class="input-group-div">
              <input
                class="input-email-input"
                type="text"
                v-model="newUsername"
                placeholder="Your new email"
              />
            </div>
            <div class="input-group-div">
              <button class="input-email-cancel" type="button" @click="goBack">Cancel</button>
              <button class="input-email-submit" type="submit">Submit</button>
            </div>
            <p v-if="hasError()" class="errorInput">{{errorMessage}}</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { userProfileValidator, UserAuthApi } from "../../utils/index";

export default {
  name: "UpdateEmail",
  props: {
    email: null,
  },

  data() {
    return {
      currentEmail: "",
      newEmail: null,
      errorMessage: null,
    };
  },

  created() {},
  mounted() {
    this.currentEmail = this.email;
  },
  methods: {
    hasError() {
      return this.errorMessage !== null;
    },
    async updateEmail() {
      this.errorMessage = userProfileValidator.emailValidator.validate(
        this.newEmail
      );
      if (this.hasError()) {
        return;
      }
      UserAuthApi.updateEmail(this.newEmail)
        .then((response) => {
          response;
          this.newEmail = null;
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
  @extend .my-3;
}

.input-label {
  @extend .h-90;
  @extend .w-25;
  @extend .text-start;
}

.input-email-text {
  @extend .form-control;
  @extend .my-0;
  @extend .py-0;
  @extend .text-center;
}
.input-email-input {
  @extend .form-control;
  @extend .my-0;
  @extend .py-0;
  @extend .text-center;
}
.input-email-submit {
  @extend .btn;
  @extend .btn-primary;
  @extend .w-30;
  @extend .mx-auto;
}
.input-email-cancel {
  @extend .btn;
  @extend .btn-primary;
  @extend .w-30;
  @extend .mx-auto;
}
</style>
