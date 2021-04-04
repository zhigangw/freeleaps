<template>
  <div class="lf-board-container">
    <form @submit.prevent="submitForm">
      <div class="lf-head-container">
        <div class="lf-head-left">
          <h3 class="lf-head-title">Package</h3>
          <h6 class="lf-head-subtitle">Step 2 of 3</h6>
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
                  min="0"
                  max="100000"
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
                  min="0"
                  max="100000"
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
                <rich-text-editor
                  class="lf-body-item--block-input mx-auto"
                  id="package-notes"
                  v-model.trim="request.notes.notes"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p v-show="hasError()" class="if-errorInput">{{errorMessage}}</p>
      <div class="lf-submit-container">
        <button class="if-cancel" type="button" @click="goBack">Back</button>
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
  name: "PostRequestNote",
  props: {},
  components: { RichTextEditor },
  data() {
    return {
      request: requestPostUtils.fetchRequest()
        ? requestPostUtils.fetchRequest()
        : requestPostSkeleton,
      errorMessage: null,
    };
  },

  created() {
    if (!("notes" in this.request) || !this.request.notes) {
      this.request.notes = requestPostSkeleton.notes;
    }},
  mounted() {
  },
  methods: {
    hasError() {
      return this.errorMessage;
    },

    gotoNext() {
      requestPostUtils.fillRequest(this.request);
      this.mnx_navToPostRequestReview();
    },

    goBack() {
      requestPostUtils.fillRequest(this.request);
      this.mnx_goBack();
    },

    async submitForm() {
      if (this.request.notes.pay.totalBudget <= 0) {
        this.errorMessage = "The total budget must greater then zero.";
        return;
      }

      if (
        this.request.notes.pay.escortedDeposit <= 0 ||
        this.request.notes.pay.escortedDeposit >
          this.request.notes.pay.totalBudget
      ) {
        this.errorMessage =
          "The escorted budget must greater then zero and less than the total budget.";
        return;
      }
      this.errorMessage = requestValidator.requestNotesValidator.validate(
        this.request.notes.notes
      );
      if (this.hasError()) {
        return;
      }

      RequestPostApi.fillNote(this.request.requestId, this.request.notes)
        .then((response) => {
          response;
          requestPostUtils.fillRequest(this.request);

          this.gotoNext();
        })
        .catch((error) => {
          this.mnx_backendErrorHandler(error);
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
