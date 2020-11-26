<template>
  <div>
    <h1>SellerBuyerRequestView</h1>
    <h3>Description</h3>
    <p v-if="isFetched">{{requestPost.description.problemStatement}}</p>
    <h3>Notes</h3>
    <p v-if="isFetched">{{requestPost.notes.totalBudget}}</p>
    <button @click="browseRequests">Back</button>
    <button @click="saveRequest">Save for later</button>
    <button @click="applyForRequest">Apply</button>
  </div>
</template>

<script>
import { RequestPostApi } from "../../utils/index";
export default {
  name: "SellerBuyerRequestView",
  props: {
    requestId: null,
  },

  data() {
    return {
      requestPost: {
        description: {
          criteria: null,
          deliverables: null,
          problemStatement: null,
        },
        notes: {
          currency: "USD",
          escortedDeposit: 0,
          estimatedHours: 0,
          notes: null,
          qualification: null,
          totalBudget: 0,
        },
        requestId: null,
        publishedDate: null,
        status: null,
      },
    };
  },

  created() {},
  mounted() {
    this.fetchPostWhole();
  },
  methods: {
    isFetched() {
      return this.requestPost != null;
    },
    browseRequests() {
      this.mnx_navToSellerBrowseRequests();
    },

    async fetchPostWhole() {
      RequestPostApi.fetchWhole(this.requestId)
        .then((response) => {
          this.requestPost = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },

    saveRequest() {
      //TODO
    },

    applyForRequest() {
      this.mnx_navToSellerApplyRequest();
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
