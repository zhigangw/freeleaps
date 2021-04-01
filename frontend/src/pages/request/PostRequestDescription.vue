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
              v-model.trim="request.description.headline"
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
              v-model.trim="request.description.details"
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
import { requestPostSkeleton } from "../../types/index";
import RichTextEditor from "../../components/inputs/infra/RichTextEditor";
export default {
  name: "PostRequestDescription",
  props: {},

  data() {
    return {
      request: requestPostSkeleton,
      placeholderDetails:
        "Provide detailed description about the request, usually including problem statement, deliverables, qualification and other informations",
      errorMessage: null,
    };
  },

  created() {
    
  },
  components: { RichTextEditor },
  mounted() {
    if (requestPostUtils.fetchRequest()) {
      this.request = requestPostUtils.fetchRequest();
    }
  },
  methods: {
    goBack(){
      this.mnx_goBack();
    },
    hasError() {
      return this.errorMessage;
    },

    async submitForm() {
      this.errorMessage = requestValidator.requestHeadlineValidator.validate(
        this.request.description.headline
      );

      if (this.hasError()) {
        return;
      }
      this.errorMessage = requestValidator.requestDetailsValidator.validate(
        this.request.description.details
      );

      if (this.hasError()) {
        return;
      }

      RequestPostApi.fillDescription(
        this.request.requestId,
        this.request.description
      )
        .then((response) => {
          this.request.requestId = response.data.requestId;
          requestPostUtils.fillRequest(this.request);
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
