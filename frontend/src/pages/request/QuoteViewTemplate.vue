<template>
  <div>
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
  </div>
</template>

<script>
import { requestPostUtils } from "../../utils/index";
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
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
