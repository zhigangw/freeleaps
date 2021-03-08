<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <p class="callout">Update Headline</p>
        <div class="form-group border-0">
          <form @submit.prevent="updateHeadline">
            <div class="input-group-div">
              <textarea
                class="control-text"
                v-model="headline"
                placeholder="What would you like people to call you, like, an experienced software engineer in IOT"
                aria-label="headline"
                aria-describedby="headline-input"
              />
            </div>
            <div class="input-group-div">
              <button class="input-headline-cancel" type="button" @click="goBack">Cancel</button>
              <button class="input-headline-submit" type="submit">Submit</button>
            </div>
            <p v-if="hasError()" class="errorInput">{{errorMessage}}</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  userProfileValidator,
  CareerProfileApi,
  userProfileUtils,
} from "../../../utils/index";

export default {
  name: "UpdateHeadline",
  props: {},

  data() {
    return {
      headline: null,
      errorMessage: null,
    };
  },

  created() {},
  mounted() {
    this.headline = userProfileUtils.fetchHeadline();
  },
  methods: {
    hasError() {
      return this.errorMessage !== null;
    },
    async updateHeadline() {
      this.errorMessage = userProfileValidator.headlineValidator.validate(
        this.headline
      );

      if (this.hasError()) {
        return;
      }

      CareerProfileApi.updateExperienceHeadline(this.headline)
        .then((response) => {
          response;
          userProfileUtils.fillHeadline(this.headline);
          this.mnx_navToHeadlineUpdated();
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

.control-text {
  @extend .form-control;
  @extend .text-wrap;
}

.input-headline-submit {
  @extend .btn;
  @extend .btn-primary;
  @extend .w-30;
  @extend .mx-auto;
}
.input-headline-cancel {
  @extend .btn;
  @extend .btn-secondary;
  @extend .w-30;
  @extend .mx-auto;
}
</style>
