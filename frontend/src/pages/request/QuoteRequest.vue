<template>
  <div class="lf-board-container">
    <form @submit.prevent="submitForm">
      <div class="lf-head-container">
        <div class="lf-head-left">
          <h3 class="lf-head-title">Application</h3>
          <h6 class="lf-head-subtitle">Providing quote and notes</h6>
        </div>
        <div class="lf-head-right">
          <p class="lf-head-notes">
            - This will become part of the contract
            <br />- Provide clear reasons why you are qualified for the request.
            <br />- You profile will be visible to the request publisher automatically.
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
                <rich-text-editor
                  class="lf-body-item--block-input mx-auto"
                  id="package-notes"
                  v-model.trim="quote.notes.notes"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p v-show="hasError()" class="if-errorInput">{{errorMessage}}</p>
      <div class="lf-submit-container">
        <button class="if-cancel" type="button" @click="goBack">Back</button>
        <button class="if-submit" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import {
  RequestQuoteApi,
  requestPostUtils,
  requestValidator,
} from "../../utils/index";
import RichTextEditor from "../../components/inputs/infra/RichTextEditor";
export default {
  name: "QuoteRequest",
  props: {},
  components: { RichTextEditor },
  data() {
    return {
      request: requestPostUtils.fetchRequest(),
      quote: requestPostUtils.fetchQuote(),
      errorMessage: null,
    };
  },

  created() {
    if (!this.quote) {
      this.quote = {
        notes: {
          requestId: this.request.requestId,
          status: 0,
          pay: {
            totalBudget: this.request.notes.pay.totalBudget,
            escortedDeposit: this.request.notes.pay.escortedDeposit,
          },
          notes:
            "<p>Execution Plan</p>\
<p>1) Deliver the code in 7 days.</p>\
<p>2) Deploy the service in 14 days.</p>\
<p>3) Pass the test and deliver the project in 25 days. </p>\
<br/>\
<p>Payment Plan</p>\
<p>1) Down pay: 50%, pay once the contract is signed.</p>\
<p>2) The remaining is escorted, and paid off once the project passed the test and is delivered to the publisher. </p> ",
        },
      };
    }
  },
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
