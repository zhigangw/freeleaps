<template>
  <div class="main-body">
    <div class="story-board">
      <p class="callout">Add/Update Experience Period</p>
      <div class="form-group border-0 mt-0">
        <form @submit.prevent="updatePeriod">
          <div class="input-group-div">
            <p class="input-label" id="jobtitle-input">Job Title: *</p>
            <input
              type="text"
              class="input-item"
              v-model="headline"
              placeholder="Ex: Senior Software Engineer"
              aria-label="headline"
              aria-describedby="title-input"
            />
          </div>
          <div class="input-group-div">
            <p class="input-label" id="jobtitle-input">Company/Orgnization: *</p>
            <input
              type="text"
              class="input-item"
              v-model="orgnization"
              placeholder="Ex: Freeleaps"
              aria-label="orgnization"
              aria-describedby="orgnization-input"
            />
          </div>
          <div class="input-group-div">
            <p class="input-label">From:</p>
            <date-input class="input-item" v-model="startDate" />
          </div>
          <div class="input-group-div">
            <p class="input-label">To:</p>
            <date-input class="input-item" v-model="endDate" />
          </div>
          <div class="input-group-div">
            <p class="input-label">Description:</p>
            <textarea
              class="input-detail"
              v-model="description"
              placeholder="Your experience in details"
              aria-label="details"
              aria-describedby="details-input"
            />
          </div>
          <div class="submit-group-div ">
            <button class="input-headline-cancel" type="button" @click="goBack">Cancel</button>
            <button class="input-headline-submit" type="submit">Submit</button>
          </div>
          <p v-if="hasError()" class="errorInput">{{errorMessage}}</p>
        </form>
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
import DateInput from "../../../components/inputs/infra/DateInput";
export default {
  name: "UpdateHeadline",
  components: {
    DateInput,
  },

  props: {},

  data() {
    return {
      startDate: null,
      endDate: null,
      headline: null,
      description: null,
      orgnization:null,
      period: {},
      errorMessage: null,
    };
  },

  created() {
    this.period = userProfileUtils.fetchPeriod();
    if (this.period) {
      this.startDate = this.period.startDate;
      this.endDate = this.period.endDate;

      this.headline = this.period.headline;
      this.description = this.period.description;
      this.orgnization = this.period.orgnization;
    } else {
      this.period = {};
    }
  },
  mounted() {},
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
      this.period.orgnization = this.orgnization;

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
  @extend .mb-3;
}

.input-label {
  @extend .lableText;
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

.submit-group-div {
  @extend .input-group;
  @extend .my-3;
  @extend .mt-5;
  @extend .mb-1;
}
</style>
