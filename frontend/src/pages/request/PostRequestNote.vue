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
            <h4 class="lf-body-block-container-title">Payment</h4>
            <div class="lf-body-block-container-body">
              <div class="lf-body-item-block">
                <h5 class="lf-body-item-block-label" for="total-budget">Total Budget (USD)</h5>
                <p class="lf-body-item-block-notes">The total payment upon completion</p>
                <input
                  class="lf-body-item--block-input"
                  type="number"
                  id="total-budget"
                  v-model.trim="request.notes.payment.totalBudget"
                />
              </div>
              <div class="lf-body-item-block">
                <h5 class="lf-body-item-block-label" for="escorted-deposit">Escorted Deposit (USD)</h5>
                <p class="lf-body-item-block-notes">The amount escorted by the platform</p>
                <input
                  class="lf-body-item--block-input"
                  type="number"
                  id="escorted-deposit"
                  v-model.trim="request.notes.payment.escortedDeposit"
                />
              </div>
            </div>
          </div>
          <div class="lf-body-block-container">
            <h4 class="lf-body-block-container-title">Plan</h4>
            <div class="accordion" id="accordion-parent">
              <boot-strap-accordion-item>
                <template #header>
                  <input id="one-time-radio" type="radio" value="one-time" v-model="plan" />
                  <label class="w-100" for="one-time-radio">One time</label>
                </template>
                <template #body>
                  <p>A paragraph for the main content.</p>
                  <p>And another one.</p>
                </template>
              </boot-strap-accordion-item>
              <boot-strap-accordion-item>
                <template #header>
                  <input id="periodic-radio" type="radio" value="periodic" v-model="plan" />
                  <label class="w-100" for="periodic-radio">Periodic</label>
                </template>
                <template #body>
                  <p>A paragraph for the main content.</p>
                  <p>And another one.</p>
                </template>
              </boot-strap-accordion-item>
              <boot-strap-accordion-item>
                <template #header>
                  <input id="free-form-radio" type="radio" value="free-form" v-model="plan" />
                  <label class="w-100" for="free-form-radio">Free form</label>
                </template>
                <template #body>
                  <p>A paragraph for the main content.</p>
                  <p>And another one.</p>
                </template>
              </boot-strap-accordion-item>
              <div class="lf-body-item-block"></div>
            </div>
          </div>
          <div class="form-control">
            <label for="estimated-time">Estimated Time</label>
            <input type="number" id="estimated-time" v-model.trim="request.notes.period.periodInDays" />
          </div>
          <div class="form-control">
            <label for="estimated-time">Estimated Deliver Date</label>
            <input type="date" id="estimated-deliver-date" v-model.trim="request.notes.period.deliverDate" />
          </div>
          <div class="form-control">
            <label for="notes">Notes</label>
            <input type="text" id="notes" v-model.trim="request.notes.notes" />
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
import { RequestPostApi, requestPostUtils } from "../../utils/index";
import { requestPostSkeleton } from "../../types/index";
import BootStrapAccordionItem from "../../components/accordions/templates/BootStrapAccordionItem";
export default {
  name: "PostRequestNote",
  props: {},
  components: { BootStrapAccordionItem },
  data() {
    return {
      request: requestPostSkeleton,
      plan:null,
      errorMessage: null,
    };
  },

  created() {},
  mounted() {
    if (requestPostUtils.fetchRequest()) {
      this.request = requestPostUtils.fetchRequest();
    }
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
      this.mnx_navToPostRequestDescription();
    },

    async fetchNotes() {
      if (this.localRequestId != null && this.localRequestId != "null") {
        RequestPostApi.fetchNotes(this.requestId).then((response) => {
          this.notes = response.data;
        });
      }
    },

    async submitForm() {
      RequestPostApi.fillNote(this.localRequestId, this.notes)
        .then((response) => {
          this.localRequestId = response.data.requestId;
          requestPostUtils.fillRequestId(this.localRequestId);
          requestPostUtils.fillNotes(this.notes);

          this.gotoNext();
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
