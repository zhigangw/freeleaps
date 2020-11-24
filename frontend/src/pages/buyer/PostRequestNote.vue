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
        <input type="number" id="estimated-time" v-model.trim="estimatedTime" />
      </div>>
      <div class="form-control">
        <label for="qualification">Qualification</label>
        <input type="text" id="qualification" v-model.trim="qualification" />
      </div>>
      <div class="form-control">
        <label for="notes">Notes</label>
        <input type="text" id="notes" v-model.trim="notes" />
      </div>>
      <button type="button" @click="goBack">Back</button>
      <button type="submit">Next</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "PostRequestNote",
  props: {
    requestId: null,
  },

  data() {
    return {
      totalBudget: null,
      escortedDeposit: null,
      estimatedTime: null,
      qualification: null,
      notes: null,
    };
  },

  created() {},
  mounted() {
    this.fetchNotes();
  },
  methods: {
    gotoNext() {
      this.mnx_navToPostRequestReview(this.requestId);
    },
    goBack() {
      this.mnx_navToPostRequestDescription(this.requestId);
    },

    async fetchNotes() {
      if (this.requestId != null) {
        RequestPostApi.fetchNotes(this.requestId).then((response) => {
          this.totalBudget = response.data.totalBudget;
          this.escortedDeposit = response.data.escortedDeposit;
          this.estimatedTime = response.data.estimatedTime;
          this.qualification = response.data.qualification;
          this.notes = response.data.notes;
        });
      }
    },

    async submitForm() {
      RequestPostApi.fillNote(
        this.totalBudget,
        this.escortedDeposit,
        this.estimatedTime,
        this.qualification,
        this.notes
      )
        .then((response) => {
          this.goNext();
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
