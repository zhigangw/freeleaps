<template>
  <div class="lf-board-container">
      <div class="lf-head-container">
        <div class="lf-head-left">
          <button class="btn btn-primary">Back</button>
        </div>
        <div class="lf-head-right">
          <div>
            <button class="btn btn-primary">Prev</button>
            <button class="btn btn-primary">Next</button>
          </div>
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
                  readonly
                  v-model.trim="quote.notes.pay.totalBudget"
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
                  readonly
                  v-model.trim="quote.notes.pay.escortedDeposit"
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
                  class="lf-body-item--block-input mx-auto"
                  id="package-notes"
                  v-html="quote.notes.notes"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p v-show="hasError()" class="if-errorInput">{{errorMessage}}</p>
      <div class="lf-submit-container">
        <button class="if-cancel" type="button" @click="goBack">Decline</button>
        <button class="if-submit" type="button">Accept</button>
      </div>
  </div>
</template>

<script>
import {
  RequestQuoteApi,
  requestPostUtils,
  requestValidator,
} from "../../utils/index";
export default {
  name: "AcceptQuote",
  props: {},
  components: {},
  data() {
    return {
      request: requestPostUtils.fetchRequest(),
      quote: requestPostUtils.fetchQuote(),
      errorMessage: null,
    };
  },

  created() {},
  mounted() {},
  methods: {
    hasError() {
      return this.errorMessage;
    },

    gotoNext() {
      requestPostUtils.fillQuote(this.quote);
      this.mnx_navToQuoteSubmitted();
    },

    goBack() {
      requestPostUtils.fillQuote(this.quote);
      this.mnx_goBack();
    },

    async submitForm() {
      if (this.quote.notes.pay.totalBudget <= 0) {
        this.errorMessage = "The total budget must greater then zero.";
        return;
      }

      if (
        this.quote.notes.pay.escortedDeposit <= 0 ||
        this.quote.notes.pay.escortedDeposit > this.quote.notes.pay.totalBudget
      ) {
        this.errorMessage =
          "The escorted budget must greater then zero and less than the total budget.";
        return;
      }
      this.errorMessage = requestValidator.requestNotesValidator.validate(
        this.quote.notes.notes
      );
      if (this.hasError()) {
        return;
      }

      RequestQuoteApi.submitQuote(this.quote.notes)
        .then((response) => {
          this.quote.quoteId = response.data.quoteId;
          requestPostUtils.fillQuote(this.quote);

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
