<template>
  <div>
    <h1>PostProjectNote</h1>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="total-budget">Total Budget</label>
        <input type="number" id="total-budget" v-model.trim="totalBudget" />
      </div>
      <div class="form-control">
        <label for="escorted-deposit">Escorted Deposit</label>
        <input type="number" id="escorted-deposit" v-model.trim="escortedDeposit" />
      </div>
      <div class="form-control">
        <label for="estimated-time">Estimated Time</label>
        <input type="number" id="estimated-time" v-model.trim="estimatedHours" />
      </div>
      <div class="form-control">
        <label for="qualification">Qualification</label>
        <input type="text" id="qualification" v-model.trim="qualification" />
      </div>
      <div class="form-control">
        <label for="notes">Notes</label>
        <input type="text" id="notes" v-model.trim="notes" />
      </div>
      <button type="button" @click="goBack">Back</button>
      <button type="submit">Next</button>
    </form>
  </div>
</template>

<script>
import { RequestPostApi, requestPostUtils } from "../../utils/index";

export default {
  name: "PostRequestNote",
  props: {
    requestId: null,
  },

  data() {
    return {
      localRequestId:null,
      totalBudget: null,
      currency: "USD",
      escortedDeposit: null,
      estimatedHours: null,
      qualification: null,
      notes: null,
    };
  },

  created() {},
  mounted() {
    this.localRequestId = this.requestId;
  },
  methods: {
    gotoNext() {
      this.mnx_navToPostRequestReview(this.localRequestId);
    },
    goBack() {
      this.mnx_navToPostRequestDescription(this.localRequestId);
    },

    async fetchNotes() {
      if (this.localRequestId != null) {
        RequestPostApi.fetchNotes(this.requestId).then((response) => {
          this.totalBudget = response.data.totalBudget;
          this.currency = response.data.currency;
          this.escortedDeposit = response.data.escortedDeposit;
          this.estimatedHours = response.data.estimatedHours;
          this.qualification = response.data.qualification;
          this.notes = response.data.notes;
        });
      }
    },

    async submitForm() {
      requestPostUtils.fillRequestId(this.localRequestId);
      requestPostUtils.fillNotes({
        totalBudget: this.totalBudget,
        currency: this.currency,
        escortedDeposit: this.escortedDeposit,
        estimatedHours: this.estimatedHours,
        qualification: this.qualification,
        notes: this.notes,
      });

      RequestPostApi.fillNote(
        this.localRequestId,
        this.totalBudget,
        this.currency,
        this.escortedDeposit,
        this.estimatedHours,
        this.qualification,
        this.notes
      )
        .then((response) => {
          this. localRequestId = response.data.requestId;
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
