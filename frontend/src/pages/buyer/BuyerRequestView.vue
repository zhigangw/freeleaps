<template>
  <div>
    <h1>BuyerRequestView</h1>
    <h3>Description</h3>
    <p>{{requestPost.description.problemStatement}}</p>
    <h3>Notes</h3>
    <p>{{requestPost.notes.totalBudget}}</p>
    <h3>Quotes</h3>

    <table>
      <tr v-for="quote in quotes" :key="quote.requestId">
        <td>{{quote.providerIdentity}}</td>
        <td>
          <button :id="quote.requestId" @click="viewQuote($event)">Details</button>
        </td>
      </tr>
    </table>
    <quote-viewer-modal ref="viewQuoteModal" :quote="selectedQuote"></quote-viewer-modal>>
    <button @click="gotoDashboard">Dashboard</button>

  </div>
</template>

<script>
import { RequestPostApi, RequestQuoteApi } from "../../utils/index";
import { requestPostSkeleton } from "../../types/index";
import QuoteViewerModal from "../../components/modals/quote/QuoteViewerModal";

export default {
  name: "BuyerRequestView",
  props: {
    requestId: null,
  },
  components: {
    QuoteViewerModal,
  },
  data() {
    return {
      requestPost: requestPostSkeleton,
      quotes: [],
      selectedQuote: null,
    };
  },

  created() {},
  mounted() {
    this.fetchPostWhole();
    this.fetchQoutes();
  },
  methods: {
    gotoDashboard() {
      this.mnx_navToBuyerDashboard();
    },
    viewQuote(event) {
      let requestId = event.currentTarget.id;
      this.selectedQuote = this.quotes.filter((x) => {
        return x.requestId === requestId;
      })[0];
      this.$refs.viewQuoteModal.openModal();
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

    async fetchQoutes() {
      RequestQuoteApi.fetchQuotes(this.requestId)
        .then((response) => {
          this.quotes = response.data;
        })
        .catch((error) => {
          console.error(error);
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
