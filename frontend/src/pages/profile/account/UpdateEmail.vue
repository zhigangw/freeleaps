<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <p class="callout">Update Email</p>
        <div class="form-group border-0">
          <form @submit.prevent="sendCodeToEmail">
            <div class="input-group-div">
              <input
                class="input-email-input"
                type="text"
                v-model="newEmail"
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
import { userProfileValidator, UserAuthApi } from "../../../utils/index";

export default {
  name: "UpdateEmail",
  props: {
    email: null,
  },

  data() {
    return {
      newEmail: null,
      errorMessage: null,
    };
  },

  created() {},
  mounted() {
  },
  methods: {
    hasError() {
      return this.errorMessage !== null;
    },
    sendCodeToEmail(){
      this.errorMessage = userProfileValidator.emailValidator.validate(
        this.newEmail
      );
      if (this.hasError()) {
        return;
      }
      
      UserAuthApi.sendAuthCodeToEmail(this.newEmail)
        .then((response) => {
          response;
          this.mnx_navToEmailUpdateRequireCode(this.newEmail);
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
  @extend .text-start;
}
.input-email-submit {
  @extend .form-submit;
}
.input-email-cancel {
  @extend .form-cancel;
}
</style>
