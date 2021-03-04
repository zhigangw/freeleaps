<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <p class="callout">
          Please type in the code we sent to
          <span class="fw-bold">{{mobile}}</span>
        </p>
        <div class="form-group">
          <form @submit.prevent="updateMobile">
            <div class="input-group-div">
              <input
                class="input-code-input"
                type="text"
                v-model="code"
                placeholder="Code sent to your mobile"
              />
            </div>
            <div class="input-group-div">
              <button class="input-code-cancel" type="button" @click="goBack">Back</button>
              <button class="input-code-submit" type="submit">Submit</button>
            </div>
            <p v-if="hasError()" class="errorInput">{{errorMessage}}</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { userProfileValidator, UserProfileApi } from "../../../utils/index";

export default {
  name: "MobileUpdateRequireCode",
  props: {
    mobile: {
      required: true,
      type: String,
    },
  },

  data() {
    return {
      errorMessage: null,
      code: null,
    };
  },

  components: {},

  created() {},
  mounted() {},
  methods: {
    hasError() {
      return this.errorMessage !== null;
    },
    async updateMobile() {
      this.errorMessage = userProfileValidator.authCodeValidator.validate(
        this.code
      );
      if (this.hasError()) {
        return;
      }
      UserProfileApi.updateMobile(this.mobile, this.code)
        .then((response) => {
          response;
          this.mnx_navToMobileUpdated(this.mobile);
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

.input-code-input {
  @extend .form-control;
  @extend .my-3;
  @extend .mx-5;
  @extend .p-1;
}

.input-code-submit {
  @extend .btn;
  @extend .btn-primary;
  @extend .w-30;
  @extend .mx-auto;
}

.input-code-cancel {
  @extend .btn;
  @extend .btn-secondary;
  @extend .w-30;
  @extend .mx-auto;
}
</style>
