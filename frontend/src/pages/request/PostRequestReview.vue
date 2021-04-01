<template>
  <div>
    <h1>PostProjectReview</h1>
    <div class="form-control">
      <label>Description</label>
      <label>Notes</label>
    </div>

    <button type="button" @click="modifyDescription">Description</button>
    <button type="button" @click="modifyNotes">Notes</button>
    <button type="button" @click="postRequest">Post Now</button>
  </div>
</template>

<script>
import { RequestPostApi, requestPostUtils } from "../../utils/index";
import { requestPostStatusEnum } from "../../types/index";

export default {
  name: "PostRequestReview",
  props: {},

  data() {
    return {
      request: null,
    };
  },

  created() {},
  mounted() {
    this.fetchLocalStoredRequest();
  },
  methods: {
    async postRequest() {
      RequestPostApi.fillStatus(this.requestId, requestPostStatusEnum.PUBLISHED)
        .then((response) => {
          response;
          requestPostUtils.fillRequest(this.request);
          this.mnx_navToBuyerDashboard();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async fetchLocalStoredRequest() {
      if (requestPostUtils.fetchRequest()) {
        this.request = requestPostUtils.fetchRequest();
      }
    },

    modifyDescription() {
      requestPostUtils.fillRequest(this.request);
      this.mnx_navToPostRequestDescription();
    },

    modifyNotes() {
      requestPostUtils.fillRequest(this.request);
      this.mnx_navToPostRequestNote();
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
