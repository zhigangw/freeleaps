<template>
  <div class="lf-board-container">
    <div class="lf-head-container">
      <div class="flex-grow-1 border pe-1 d-flex">
        <label class="me-1" for="search-input">Search:</label>
        <input id="search-input" class="flex-grow-1" type="text" />
      </div>
      <div class>
        <button class="btn btn-primary" @click="postProject">Post a Request</button>
      </div>
    </div>
    <div class="lf-body-container">
      <div class="accordion w-100" id="accordion-parent">
        <boot-strap-accordion-item v-for="post in postList" :key="post.requestId">
          <template #header>
            <div class="w-100">
              <p class="lf-body-item-block-label">{{post.description.headline}}</p>
              <div class="lf-body-item-block-notes d-flex .flex-wrap justify-content-between">
                <p>
                  <span class="me-1">Total:{{post.notes.pay.totalBudget}}</span>
                  <span class="me-1">Escorted:{{post.notes.pay.escortedDeposit}}</span>
                </p>
                <p>Posted:{{ Math.floor(post.postedTimeDelta / 24)}} days {{post.postedTimeDelta % 24}} hours ago</p>
              </div>
            </div>
          </template>
          <template #body>
            <div class="w-100">
              <div class="w-100">
                <p class="lf-body-block-container-title">Description</p>
                <div class="lf-body-item-text mx-auto" v-html="post.description.details" />
              </div>
              <div class="w-100">
                <p class="lf-body-block-container-title">Notes</p>
                <div class="lf-body-item-text mx-auto" v-html="post.notes.notes" />
              </div>
              <div class="w-100">
                <p class="lf-body-block-container-title">Poster</p>
                <div class="lf-item-flex-box">
                  <div class="poster-item">
                    <p
                      class="poster-item-text"
                    >Name: {{post.poster.personal.firstName}} {{post.poster.personal.lastName}}</p>
                  </div>
                  <div class="poster-item">
                    <p class="poster-item-text">Location: {{post.poster.personal.location}}</p>
                  </div>
                  <div class="poster-item">
                    <p
                      class="poster-item-text"
                    >Posted Job: {{post.poster.work.achievements.jobPosted}}</p>
                  </div>
                  <div class="poster-item">
                    <p
                      class="poster-item-text"
                    >Spent Money: {{post.poster.work.achievements.amountSpent}}</p>
                  </div>
                  <div class="poster-item">
                    <p
                      class="poster-item-text"
                    >Escorted Deposit: {{post.poster.work.achievements.escortedDeposit}}</p>
                  </div>
                  <div class="poster-item">
                    <p
                      class="poster-item-text"
                    >Member Since: {{GetDateString(post.poster.work.achievements.memberSince)}}</p>
                  </div>
                  <div class="poster-item">
                    <p
                      class="poster-item-text"
                    >Ongoing Projects: {{post.poster.work.achievements.ongoingProjects}}</p>
                  </div>
                  <div class="poster-item">
                    <p
                      class="poster-item-text"
                    >Completed Request: {{post.poster.work.achievements.completedProjects}}</p>
                  </div>
                  <div class="poster-item">
                    <p
                      class="poster-item-text"
                    >Received Stars: {{post.poster.work.achievements.receivedStars}}</p>
                  </div>
                </div>
              </div>

              <div class="lf-submit-container">
                <button type="button" class="if-submit" @click="quoteRequest(post)">Apply</button>
              </div>
            </div>
          </template>
        </boot-strap-accordion-item>
      </div>
    </div>
  </div>
</template>

<script>
import { RequestPostApi, requestPostUtils, DateUtils } from "../../utils/index";
import BootStrapAccordionItem from "../../components/accordions/templates/BootStrapAccordionItem";

export default {
  name: "WorkPlace",
  props: {},
  components: { BootStrapAccordionItem },
  data() {
    return {
      postList: [],
    };
  },

  created() {},
  mounted() {
    this.fetchAllPostSummary();
  },
  methods: {
    postProject() {
      requestPostUtils.fillRequest(null);
      this.mnx_navToPostRequestDescription();
    },

    GetDateString(o) {
      return DateUtils.FromJsonToString(o);
    },

    quoteRequest(request) {
      requestPostUtils.fillRequest(request);
      requestPostUtils.fillQuote(null);
      this.mnx_navToQuoteRequest();
    },

    async fetchAllPostSummary() {
      RequestPostApi.fetchAllPublishedAsSummary()
        .then((response) => {
          this.postList = response.data;
        })
        .catch((error) => {
          this.mnx_backendErrorHandler(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.poster-item {
  @extend .lf-item-flex-box-block;
  @extend .mx-1;
}

.poster-item-text {
  @extend .lf-body-item-text;
  @extend .border-0;
}
</style>
