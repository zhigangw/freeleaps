<template>
  <div class="row-flow-container">
    <div
      class="row-flow-item-container"
      v-for="(proposal,index) in proposals"
      :key="index"
      @click="viewProposal(proposal)"
    >
      <div class="row-flow-item-subject-area">
        <p class="row-flow-item-subject-text">Proposal for request ({{proposal.notes.requestId}})</p>
      </div>
      <div class="row-flow-item-status-area">
        <p class="row-flow-item-status-text">{{getFormalizedStatus(proposal)}}</p>
      </div>
      <div class="row-flow-item-notes-area">
        <p class="row-flow-item-notes-text">{{getFormalizedDate(proposal)}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  RequestQuoteApi,
  requestPostUtils,
  DateUtils,
} from "../../utils/index";

import { RequestQuoteUtils } from "../../types/index";

export default {
  name: "WorkPlaceProposals",
  props: {},
  components: {},
  data() {
    return {
      proposals: [],
    };
  },

  created() {},
  mounted() {
    this.fetchMyProposals();
  },
  methods: {
    getFormalizedStatus(proposal) {
      return RequestQuoteUtils.getStatusString(proposal.notes.status);
    },
    getFormalizedDate(proposal) {
      return DateUtils.FromJsonToString(proposal.updatedDate);
    },
    viewProposal(proposal) {
      requestPostUtils.fillQuote(proposal);
      this.mnx_navToQuoteRequest();
    },

    async fetchMyProposals() {
      RequestQuoteApi.fetchMyAll()
        .then((response) => {
          this.proposals = response.data;
        })
        .catch((error) => {
          this.mnx_backendErrorHandler(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
