<template>
  <div>
    <div>
      <h1>SellerBuyerRequestView</h1>
      <h3>Description</h3>
      <p>{{requestPost.description.problemStatement}}</p>
      <h3>Notes</h3>
      <p>{{requestPost.notes.totalBudget}}</p>
    </div>
    <div>
      <h1>Quote</h1>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="total-budget">Total Budget</label>
          <input type="number" id="total-budget" v-model.trim.lazy="quote.notes.totalBudget" />
        </div>
        <div class="form-control">
          <label for="escorted-deposit">Escorted Deposit</label>
          <input
            type="number"
            id="escorted-deposit"
            v-model.trim.lazy="quote.notes.escortedDeposit"
          />
        </div>
        <div class="form-control">
          <label for="estimated-time">Estimated Time</label>
          <input type="number" id="estimated-time" v-model.trim.lazy="quote.notes.estimatedHours" />
        </div>
        <div class="form-control">
          <label for="qualification">Qualification</label>
          <input type="text" id="qualification" v-model.trim.lazy="quote.notes.qualification" />
        </div>
        <div class="form-control">
          <label for="notes">Notes</label>
          <input type="text" id="notes" v-model.trim.lazy="quote.notes.notes" />
        </div>
        <button>Submit</button>
      </form>
    </div>
    <button @click="saveRequest">Save</button>
    <button @click="browseRequests">Back</button>
  </div>
</template>

<script>
import {
  RequestPostApi,
  RequestQuoteApi,
  SellerProfileApi,
  ValueChecker,
} from "../../utils/index";
import { requestPostSkeleton } from "../../types/index";

export default {
  name: "SellerBuyerRequestView",
  props: {
    requestId: null,
  },

  data() {
    return {
      requestPost: requestPostSkeleton,
      quote: {
        requestId: null,
        notes: {},
      },
    };
  },

  created() {},
  mounted() {
    this.fetchPostWhole();
  },
  methods: {
    browseRequests() {
      this.mnx_navToSellerBrowseRequests();
    },

    async fetchPostWhole() {
      RequestPostApi.fetchWhole(this.requestId)
        .then((response) => {
          this.requestPost = response.data;
          this.quote.requestId = this.requestPost.requestId;
          Object.assign(this.quote.notes, this.requestPost.notes);
          this.fetchMyQoute();
        })
        .catch((error) => {
          console.error(error);
        });
    },

    async fetchMyQoute() {
      RequestQuoteApi.fetchMine(this.requestId)
        .then((response) => {
          if (
            ValueChecker.IsValidObject(response.data) &&
            "requestId" in response.data
          ) {
            this.quote.requestId = response.data.requestId;
          }
          if (
            ValueChecker.IsValidObject(response.data) &&
            "notes" in response.data
          ) {
            Object.assign(this.quote.notes, response.data.notes);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },

    async applyForRequest() {
      RequestQuoteApi.submitQuote(this.quote)
        .then((response) => {
          response;
          console.log("submitQuote succeeded");
        })
        .catch((error) => {
          console.error(error);
        });
    },

    async submitForm() {
      this.applyForRequest();
    },

    async saveRequest() {
      SellerProfileApi.saveRequest(this.requestId)
        .then((response) => {
          response;
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
