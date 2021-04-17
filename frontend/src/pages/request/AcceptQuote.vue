<template>
  <div class="row-flow-container">
    <div class="row-flow-header">
      <button class="btn btn-primary" @click="goBack">Back</button>
    </div>
    <quote-view-template />
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
import {
  RequestQuoteApi,
  requestPostUtils,
  OIDUtils,
  PojectManagerApi,
} from "../../utils/index";
import QuoteViewTemplate from "./QuoteViewTemplate";
export default {
  name: "AcceptQuote",
  props: {},
  components: { QuoteViewTemplate },
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
