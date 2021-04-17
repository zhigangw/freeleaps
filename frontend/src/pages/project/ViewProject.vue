<template>
  <div class="row-flow-container">
    <div class="row-flow-header flex-wrap">
      <button class="btn btn-primary" @click="backToBrowseProject">Project list</button>
      <div class="w-80 mx-auto d-flex flex-wrap">
        <p class="w-100 text-start text-wrap">{{project.headline}}</p>
      </div>
    </div>
    <div class="row-flow-item-container">
      <h4 class="lf-body-block-container-title">Track</h4>
      <div class="lf-body-block-container-body">
        <div class="lf-body-item-block">
          <h5 class="lf-body-item-block-label">Status</h5>
          <p
            class="lf-body-item--block-text-clickable"
            @click="updateStatus"
          >{{getFormalizedStatus(project.status)}}</p>
        </div>
        <div class="lf-body-item-block">
          <h5 class="lf-body-item-block-label">Start</h5>
          <p
            class="lf-body-item--block-text-clickable"
            @click="updateStart"
          >{{getFormalizedDate(project.trackStatus.kickoffDate)}}</p>
        </div>
        <div class="lf-body-item-block">
          <h5 class="lf-body-item-block-label">Lasting</h5>
          <p
            class="lf-body-item--block-text"
          >{{getDeltaInDays(project.trackStatus.kickoffDate)}} days</p>
        </div>
        <div class="lf-body-item-block">
          <h5 class="lf-body-item-block-label">Due</h5>
          <p
            class="lf-body-item--block-text-clickable"
            @click="updateDue"
          >{{getFormalizedDate(project.trackStatus.dueDate)}}</p>
        </div>
        <div class="lf-body-item-block">
          <h5 class="lf-body-item-block-label">Remaining</h5>
          <p class="lf-body-item--block-text">{{getDeltaInDays(project.trackStatus.dueDate)}} days</p>
        </div>
      </div>
    </div>
    <div class="row-flow-item-container">
      <h4 class="lf-body-block-container-title">Pay</h4>
      <div class="lf-body-block-container-body">
        <div class="lf-body-item-block">
          <h5 class="lf-body-item-block-label">Total</h5>
          <p class="lf-body-item--block-text">${{getFormalizedMoney(project.payStatus.totalBudget)}}</p>
        </div>
        <div class="lf-body-item-block">
          <h5 class="lf-body-item-block-label">Escorted</h5>
          <p
            class="lf-body-item--block-text"
          >$ {{getFormalizedMoney(project.payStatus.escortedDeposit)}}</p>
        </div>
        <div class="lf-body-item-block">
          <h5 class="lf-body-item-block-label">Paid</h5>
          <p class="lf-body-item--block-text">$ {{getFormalizedMoney(project.payStatus.paid)}}</p>
        </div>
        <div class="lf-body-item-block">
          <h5 class="lf-body-item-block-label">Remaining</h5>
          <p class="lf-body-item--block-text">$ {{getFormalizedMoney(project.payStatus.remaining)}}</p>
        </div>
      </div>
    </div>
    <div class="row-flow-item-container">
      <h4 class="lf-body-block-container-title">Contract</h4>
      <div class="lf-body-block-container-body">
        <div class="lf-body-item-block">
          <h5 class="lf-body-item-block-label">Request</h5>
          <p
            class="lf-body-item--block-text-clickable"
            @click="viewRequest"
          >{{project.contract.requestId}}</p>
        </div>
        <div class="lf-body-item-block">
          <h5 class="lf-body-item-block-label">Poster</h5>
          <p class="lf-body-item--block-text">{{getPoster}}</p>
        </div>
        <div class="lf-body-item-block">
          <h5 class="lf-body-item-block-label">Proposal</h5>
          <p
            class="lf-body-item--block-text-clickable"
            @click="viewQuote"
          >{{(project.contract.quoteId)}}</p>
        </div>
        <div class="lf-body-item-block">
          <h5 class="lf-body-item-block-label">Provider</h5>
          <p class="lf-body-item--block-text">{{getProvider}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  requestPostUtils,
  DateUtils,
  UserProfileApi,
  RequestPostApi,
  RequestQuoteApi,
} from "../../utils/index";
import { ProjectData } from "../../types/index";
export default {
  name: "ViewProject",
  props: {},

  data() {
    return {
      poster: null,
      provider: null,
      project: requestPostUtils.fetchProject(),
    };
  },

  components: {},
  computed: {
    getProvider() {
      if (this.provider) {
        return this.provider.account.identity
          ? this.provider.account.identity
          : this.provider.account.email;
      } else {
        return this.project.contract.providerId;
      }
    },

    getPoster() {
      if (this.poster) {
        return this.poster.account.identity
          ? this.poster.account.identity
          : this.poster.account.email;
      } else {
        return this.project.contract.posterId;
      }
    },
  },
  created() {},
  mounted() {
    this.fetchPoster();
    this.fetchProvider();
  },
  methods: {
    getFormalizedMoney(money) {
      return money ? money : 0;
    },

    getFormalizedStatus(status) {
      return ProjectData.getStatusString(status);
    },
    getFormalizedDate(date) {
      return date ? DateUtils.FromJsonToString(date) : "--";
    },

    getDeltaInDays(date) {
      return date ? DateUtils.GetDeltaInDays(date) : 0;
    },

    backToBrowseProjects() {
      requestPostUtils.fillProject(this.project);
      this.mnx_navToWorkplaceProjects();
    },

    updateStatus() {
      this.mnx_navToUpdateProjectStatus();
    },

    updateStart() {
      this.mnx_navToUpdateProjectStart();
    },

    updateDue() {
      this.mnx_navToUpdateProjectDue();
    },

    viewRequest() {
      RequestPostApi.fetchWhole(this.project.contract.requestId)
        .then((response) => {
          requestPostUtils.fillRequest(response.data);
          this.mnx_navToViewRequest();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    viewQuote() {
      RequestQuoteApi.fetchQuoteById(this.project.contract.quoteId)
        .then((response) => {
          requestPostUtils.fillQuote(response.data);
          this.mnx_navToViewQuote();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async fetchPoster() {
      if (this.project.contract.posterId) {
        UserProfileApi.fetchSettingsById(this.project.contract.posterId)
          .then((response) => {
            this.poster = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    async fetchProvider() {
      if (this.project.contract.providerId) {
        UserProfileApi.fetchSettingsById(this.project.contract.providerId)
          .then((response) => {
            this.provider = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
