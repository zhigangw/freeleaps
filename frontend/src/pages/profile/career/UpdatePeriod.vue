<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <p class="callout">Experience Period</p>
        <div class="form-group border-0">
          <form @submit.prevent="updatePeriod">
            <div class="input-group-div">
              <span class="input-label">From</span>
              <input type="date" v-model="startDate" />
            </div>
            <div class="input-group-div">
              <span class="input-label">To</span>
              <input type="date" v-model="endDate" />
            </div>
            <div class="input-group-div">
              <span class="input-label" id="jobtitle-input">Headline</span>
              <textarea
                class="control-text"
                v-model="headline"
                placeholder="Your job title,e.g."
                aria-label="headline"
                aria-describedby="title-input"
              />
            </div>
            <div class="input-group-div">
              <span class="input-label">Details</span>
              <textarea
                class="control-text"
                v-model="details"
                placeholder="Your experience in details"
                aria-label="details"
                aria-describedby="details-input"
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
      startDate: null,
      endDate: null,
      headline: null,
      details: null,
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

.input-label {
  @extend .input-group-text;
  @extend .mx-3;
}

.control-text {
  @extend .form-control;
  @extend .text-wrap;
}

.input-headline-submit {
  @extend .form-submit;
}
.input-headline-cancel {
  @extend .form-cancel;
}
</style>
