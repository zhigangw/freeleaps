<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <p class="callout">
          Please type in the code we sent to
          <span class="fw-bold">{{email}}</span>
        </p>
        <div class="form-group">
          <form @submit.prevent="updateEmail">
            <div class="input-group-div">
              <input
                class="input-code-input"
                type="text"
                v-model="code"
                placeholder="Code sent to your email"
              />
            </div>
            <div class="input-group-div">
              <button class="input-email-cancel" type="button" @click="goBack">Back</button>
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
import { userProfileValidator, UserProfileApi } from "../../utils/index";

export default {
  name: "EmailUpdateRequireCode",
  props: {
    email: {
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
    async updateEmail() {
      this.errorMessage = userProfileValidator.authCodeValidator.validate(
        this.code
      );
      if (this.hasError()) {
        return;
      }
      UserProfileApi.updateEmail(this.email, this.code)
        .then((response) => {
          response;
          this.mnx_navToEmailUpdated(this.email);
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
</style>
