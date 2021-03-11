<template>
  <div class="main-body">
    <div class="story-board">
      <div class="focus-area">
        <p class="callout">Experience Period</p>
        <div class="form-group border-0">
          <form @submit.prevent="updatePeriod">
            <div class="input-group-div">
              <span class="input-label">From</span>
              <input type="date" class="input-item" v-model="startDate" />
            </div>
            <div class="input-group-div">
              <span class="input-label">To</span>
              <input type="date" class="input-item" v-model="endDate" />
            </div>
            <div class="input-group-div">
              <span class="input-label" id="jobtitle-input">Headline</span>
              <textarea
                class="input-item"
                v-model="headline"
                placeholder="Your job title,e.g."
                aria-label="headline"
                aria-describedby="title-input"
              />
            </div>
            <div class="input-group-div">
              <span class="input-label">Description</span>
              <textarea
                class="input-detail"
                v-model="description"
                placeholder="Your experience in details"
                aria-label="details"
                aria-describedby="details-input"
              />
            </div>
            <div class="input-group-div mt-5 mb-1">
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
      description: null,
      period:{},
      errorMessage: null,
    };
  },

  created() {},
  mounted() {
    this.period = userProfileUtils.fetchPeriod();
    if (this.period) {
      this.startDate = this.period.startDate;
      this.endDate = this.period.endDate;
      this.headline = this.period.headline;
      this.description = this.period.description;
    }
    else{
      this.period = {};
    }
  },
  methods: {
    hasError() {
      return this.errorMessage !== null;
    },
    async updatePeriod() {
      this.errorMessage = userProfileValidator.headlineValidator.validate(
        this.headline
      );

      if (this.hasError()) {
        return;
      }
      this.errorMessage = userProfileValidator.descriptionValidator.validate(
        this.description
      );

      if (this.hasError()) {
        return;
      }

      this.period.startDate = this.startDate;
      this.period.endDate = this.endDate;
      this.period.headline = this.headline;
      this.period.description = this.description;

      CareerProfileApi.updateExperiencePeriod(this.period)
        .then((response) => {
          response;
          userProfileUtils.fillPeriod(this.period);
          this.mnx_navToPeriodUpdated();
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
  @extend .input-group-text;
  @extend .w-25;
  @extend .mx-3;
  @extend .bg-body;
  @extend .border-0;
}

.input-item {
  @extend .form-control;
}

.input-detail {
  @extend .form-control;
  @extend .text-wrap;
  height: 96pt;
}

.input-headline-submit {
  @extend .form-submit;
}
.input-headline-cancel {
  @extend .form-cancel;
}
</style>
