<template>
  <div>
    <h1>PostProjectNote</h1>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="total-budget">Total Budget</label>
        <input type="number" id="total-budget" v-model.trim="notes.totalBudget" />
      </div>
      <div class="form-control">
        <label for="escorted-deposit">Escorted Deposit</label>
        <input type="number" id="escorted-deposit" v-model.trim="notes.escortedDeposit" />
      </div>
      <div class="form-control">
        <label for="estimated-time">Estimated Time</label>
        <input type="number" id="estimated-time" v-model.trim="notes.estimatedHours" />
      </div>
      <div class="form-control">
        <label for="estimated-time">Estimated Start Date</label>
        <input type="date" id="estimated-start-date" v-model.trim="notes.startDate" />
      </div>
      <div class="form-control">
        <label for="estimated-time">Estimated Deliver Date</label>
        <input type="date" id="estimated-deliver-date" v-model.trim="notes.deliverDate" />
      </div>
      <div class="form-control">
        <label for="qualification">Qualification</label>
        <input type="text" id="qualification" v-model.trim="notes.qualification" />
      </div>
      <div class="form-control">
        <label for="notes">Notes</label>
        <input type="text" id="notes" v-model.trim="notes.notes" />
      </div>
      <button type="button" @click="goBack">Back</button>
      <button type="submit">Next</button>
    </form>
  </div>
</template>

<script>
import { RequestPostApi, requestPostUtils } from "../../utils/index";
import { requestPostSkeleton } from "../../types/index";

export default {
  name: "PostRequestNote",
  props: {
    requestId: null,
  },

  data() {
    return {
      localRequestId: null,
      notes: requestPostSkeleton.notes,
    };
  },

  created() {},
  mounted() {
    this.localRequestId = this.requestId;
    this.fetchLocalStoredNotes();
  },
  methods: {
    gotoNext() {
      this.mnx_navToPostRequestReview(this.localRequestId);
    },
    goBack() {
      this.mnx_navToPostRequestDescription(this.localRequestId);
    },

    async fetchLocalStoredNotes() {
      if (
        this.localRequestId != null &&
        this.localRequestId != "null" &&
        this.localRequestId == requestPostUtils.fetchRequestId()
      ) {
        let notes = requestPostUtils.fetchNotes();
        if (notes != undefined) {
          this.notes = notes;
        }
      }
      console.log(this.notes);
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
