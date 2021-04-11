<template>
  <div class="row-flow-container">
    <div class="w-90 mx-auto my-3 d-flex">
      <button class="btn btn-primary ms-auto p-2" @click="postProject">Post a Request</button>
    </div>
    <div class="row-flow-item-container" v-for="(post,index) in postList" :key="index">
      <div class="row-flow-item-subject-area">
        <p
          class="row-flow-item-subject-text"
          style="cursor:pointer"
          @click="viewRequest(post)"
        >{{post.description.headline}}</p>
      </div>
      <div class="row-flow-item-status-area">
        <p
          class="row-flow-item-status-text"
          style="cursor:pointer"
          @click="viewProposal(post)"
        >Proposals ({{post.quoteCount}})</p>
      </div>
      <div class="row-flow-item-notes-area">
        <p class="row-flow-item-notes-text">{{getFormalizedDate(post)}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { RequestPostApi, requestPostUtils, DateUtils } from "../../utils/index";

export default {
  name: "WorkPlace",
  props: {},
  components: {},
  data() {
    return {
      postList: [],
    };
  },

  created() {},
  mounted() {
    this.fetchMyAllPostSummary();
  },
  methods: {
    getFormalizedDate(post) {
      return DateUtils.FromJsonToString(post.updatedDate);
    },

    postProject() {
      requestPostUtils.fillRequest(null);
      this.mnx_navToPostRequestDescription();
    },

    viewRequest(request) {
      requestPostUtils.fillRequest(request);
      this.mnx_navToPostRequestDescription();
    },

    viewProposal(request) {
      requestPostUtils.fillRequest(request);
      this.mnx_navToWorkplace();
    },
    
    async fetchMyAllPostSummary() {
      RequestPostApi.fetchMineAsSummary()
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
<style scoped>
a {
  color: #42b983;
}
</style>
