<template>
  <div class="lf-board-container">
    <form @submit.prevent="submitForm">
      <div class="lf-head-container">
        <div class="lf-head-left">
          <h3 class="lf-head-title">Preview</h3>
          <h6 class="lf-head-subtitle">Step 3 of 3</h6>
        </div>
        <div class="lf-head-right">
          <p class="lf-head-notes">
            - More budget will bring more attractions from talents.
            <br />- More escorted deposit will be more security to the freelancers.
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
              class="lf-body-item-text-input"
              id="headline"
              readonly
              v-model.trim="request.description.headline"
            />
          </div>
          <div class="lf-body-item">
            <h5 class="lf-body-item-label" for="details">Details</h5>
            <p
              class="lf-body-item-label-note"
            >What are the details of the project. (128~4098 characters)</p>
            <div class="lf-body-item-text" id="details" v-html="request.description.details"></div>
          </div>
          <div class="lf-body-block-container">
            <h4 class="lf-body-block-container-title">Pay</h4>
            <div class="lf-body-block-container-body">
              <div class="lf-body-item-block">
                <h5 class="lf-body-item-block-label" for="total-budget">Total Budget (USD)</h5>
                <p class="lf-body-item-block-notes">The total payment upon completion</p>
                <input
                  class="lf-body-item--block-input"
                  type="number"
                  id="total-budget"
                  readonly
                  v-model.trim="request.notes.pay.totalBudget"
                />
              </div>
              <div class="lf-body-item-block">
                <h5 class="lf-body-item-block-label" for="escorted-deposit">Escorted Deposit (USD)</h5>
                <p class="lf-body-item-block-notes">The amount escorted by the platform</p>
                <input
                  class="lf-body-item--block-input"
                  type="number"
                  id="escorted-deposit"
                  readonly
                  v-model.trim="request.notes.pay.escortedDeposit"
                />
              </div>
            </div>
          </div>
          <div class="lf-body-block-container">
            <h4 class="lf-body-block-container-title">Notes</h4>
            <div class="lf-body-block-container-body">
              <div class="w-100">
                <p
                  class="lf-body-item-block-notes"
                >Leave notes to applicants, including the paymant plan, etc (32 ~ 4098 characters)</p>
                <div
                  class="lf-body-item-text mx-auto"
                  id="package-notes"
                  v-html="request.notes.notes"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p v-show="hasError()" class="if-errorInput">{{errorMessage}}</p>
      <div class="lf-submit-container">
        <button class="if-cancel" type="button" @click="goBack">Back</button>
        <button class="if-submit" type="button" @click="postRequest">Post Now</button>
      </div>
    </form>
  </div>
</template>

<script>
import { RequestPostApi, requestPostUtils } from "../../utils/index";
import { requestPostStatusEnum } from "../../types/index";
import { requestPostSkeleton } from "../../types/index";

export default {
  name: "PostRequestReview",
  props: {},

  data() {
    return {
      request: requestPostUtils.fetchRequest()
        ? requestPostUtils.fetchRequest()
        : requestPostSkeleton,
      errorMessage: null,
    };
  },

  created() {},
  mounted() {},
  methods: {
    hasError() {
      return this.errorMessage;
    },

    goBack() {
      requestPostUtils.fillRequest(this.request);
      this.mnx_goBack();
    },

    async postRequest() {
      RequestPostApi.fillStatus(this.request.requestId, requestPostStatusEnum.PUBLISHED)
        .then((response) => {
          response;
          requestPostUtils.fillRequest(this.request);
          this.mnx_navToWorkplace();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
