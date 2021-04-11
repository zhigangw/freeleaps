<template>
  <div class="row-flow-container">
    <div class="row-flow-header">
      <button class="btn btn-primary" @click="goBack">Back</button>
    </div>
    <div class="row-flow-item-container">
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

    <div class="row-flow-item-container">
      <h4 class="lf-body-block-container-title">Notes</h4>
      <div class="lf-body-block-container-body">
        <p class="text-start" id="package-notes" v-html="quote.notes.notes" />
      </div>
    </div>
    <div v-if="quote.notes.status == 1" class="lf-submit-container">
      <button class="if-cancel" type="button" @click="declineQuote">Decline</button>
      <button class="if-submit" type="button" @click="acceptQuote">Accept</button>
    </div>
    <div v-if="quote.notes.status == 2" class="lf-submit-container">
      <button class="if-submit" type="button" @click="viewProject">Go to project</button>
    </div>
  </div>
</template>

<script>
import { RequestQuoteApi, requestPostUtils, OIDUtils,PojectManagerApi } from "../../utils/index";
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
    goBack() {
      requestPostUtils.fillQuote(this.quote);
      this.mnx_goBack();
    },

    viewProject() {
      PojectManagerApi.fetchForRequest(this.quote.notes.requestId)
        .then((response) => {
          requestPostUtils.fillProject(response.data);
          this.mnx_navToViewProject();
        })
        .catch((error) => {
          this.mnx_backendErrorHandler(error);
        });
    },

    async declineQuote() {
      requestPostUtils.fillQuote(this.quote);
      this.mnx_navToQuoteSubmitted();
    },

    async acceptQuote() {
      RequestQuoteApi.acceptQuote(
        OIDUtils.FromJson(this.quote),
        this.quote.notes.requestId
      )
        .then((response) => {
          requestPostUtils.fillProject(response.data);
          this.mnx_navToQuoteAccepted();
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
