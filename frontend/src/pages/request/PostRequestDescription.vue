<template>
  <div class="comp-body">
    <form @submit.prevent="submitForm">
      <div class="lf-head-container">
        <div class="lf-head-left">
          <h3 class="lf-head-title">Description</h3>
          <h6 class="lf-head-subtitle">Step 1 of 3</h6>
        </div>
        <div class="lf-head-right">
          <p class="lf-head-notes">
            - This will become part of the contract.
            <br />- Clear description of your project will help promote the visibility
          </p>
        </div>
      </div>
      <div class="lf-body-container">
        <div class="lf-body-content">
          <div class="lf-body-item">
            <h5 class="lf-body-item-label" for="headline">Headline</h5>
            <p
              class="lf-body-item-label-note"
            >A phrase or sentence about the project is. (16~256 words)</p>
            <input
              type="text"
              class="headline-text"
              id="headline"
              placeholder="Examples: Build a e-commerce website following the spec and UI design."
              v-model.trim="description.headline"
            />
          </div>
          <div class="lf-body-item">
            <h5 class="lf-body-item-label" for="details">Details</h5>
            <p
              class="lf-body-item-label-note"
            >What are the details of the project. (128~4098 characters)</p>
            <rich-text-editor
              class="lf-body-item-rich-text"
              id="details"
              :placeholder="placeholderDetails"
              v-model.trim="description.details"
            />
          </div>
        </div>
      </div>
      <p v-show="hasError()" class="if-errorInput">{{errorMessage}}</p>
      <div class="lf-submit-container">
        <button class="if-cancel" type="button" @click="goBack">Cancel</button>
        <button class="if-submit" type="submit">Next</button>
      </div>
    </form>
  </div>
</template>

<script>
import {
  RequestPostApi,
  requestPostUtils,
  requestValidator,
} from "../../utils/index";
import RichTextEditor from "../../components/inputs/infra/RichTextEditor";
export default {
  name: "PostRequestDescription",
  props: {},

  data() {
    return {
      requestId: null,
      description: {
        headline: null,
        details:
          "<h3>Problem Statement</h3><p>[We want to build a e-commerce website where our customers can exchange their used games. The website need to have a complete list features including user account management, payment, etc.]</p><h3>Deliverables</h3><p>[A uprunning website hosted in a cloud platform, with java source code and design docs.]</p><h3>Ship Criteria</h3><p>[The website need to pass our test; The source code need to meet the guidance.The product spec need to passed our review and get signed off by us.]</p><h3>Qualification</h3><p>[1) 5+ years on Java programming2) Top company experience3) Can speak Chinese]</p><h3>Appendix</h3><p><a href='#'>Link to product spec</a><a href='#'> Links to test plan</a></p>",
      },
      placeholderDetails:
        "Provide detailed description about the request, usually including problem statement, deliverables, qualification and other informations",
      errorMessage: null,
    };
  },

  created() {},
  components: { RichTextEditor },
  mounted() {
    this.fetchLocalStoredDescription();
  },
  methods: {
    hasError() {
      return this.errorMessage;
    },

    async fetchLocalStoredDescription() {
      this.requestId = requestPostUtils.fetchRequestId();
      if (this.requestId != null) {
        this.description = requestPostUtils.fetchDescription();
      }
    },

    async submitForm() {
      this.errorMessage = requestValidator.requestHeadlineValidator.validate(
        this.description.headline
      );

      if (this.hasError()) {
        return;
      }
      this.errorMessage = requestValidator.requestDetailsValidator.validate(
        this.description.details
      );

      if (this.hasError()) {
        return;
      }

      RequestPostApi.fillDescription(this.requestId, this.description)
        .then((response) => {
          this.requestId = response.data.requestId;
          requestPostUtils.fillRequestId(this.requestId);
          requestPostUtils.fillDescription(this.description);
          this.mnx_navToPostRequestNote();
        })
        .catch((error) => {
          this.mnx_backendErrorHandler(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.comp-body {
  @extend .lf-board-container;
}
.headline-text {
  @extend .lf-body-item-text-input;
}
</style>
