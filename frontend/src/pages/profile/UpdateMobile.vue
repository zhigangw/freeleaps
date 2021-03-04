<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <p class="callout">Update Mobile</p>
        <div class="form-group border-0">
          <form @submit.prevent="sendCodeToMobile">
            <div class="input-group-div">
              <input
                class="input-mobile-input"
                type="text"
                v-model="newMobile"
                placeholder="Your new mobile"
              />
            </div>
            <div class="input-group-div">
              <button class="input-mobile-cancel" type="button" @click="goBack">Cancel</button>
              <button class="input-mobile-submit" type="submit">Submit</button>
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
  name: "UpdateMobile",
  props: {
    mobile: null,
  },

  data() {
    return {
      newMobile: null,
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
    sendCodeToMobile(){
      this.errorMessage = userProfileValidator.mobileValidator.validate(
        this.newMobile
      );
      if (this.hasError()) {
        return;
      }
      
      UserAuthApi.sendAuthCodeToMobile(this.newMobile)
        .then((response) => {
          response;
          this.mnx_navToMobileUpdateRequireCode(this.newMobile);
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

.input-mobile-input {
  @extend .form-control;
  @extend .mx-3;
  @extend .my-3;
  @extend .py-3;
  @extend .text-start;
}

.input-mobile-submit {
  @extend .btn;
  @extend .btn-primary;
  @extend .w-30;
  @extend .mx-auto;
}

.input-mobile-cancel {
  @extend .btn;
  @extend .btn-secondary;
  @extend .w-30;
  @extend .mx-auto;
}
</style>
