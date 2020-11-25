<template>
  <div>
    <h1>PostProjectReview</h1>
    <div class="form-control">
      <label>Description</label>
      <p>{{description.problemStatement}}</p>
      <p>{{description.deliverables}}</p>
      <p>{{description.criteria}}</p>
      <label>Notes</label>
      <p>{{notes.totalBudget}}</p>
      <p>{{notes.currency}}</p>
      <p>{{notes.escortedDeposit}}</p>
      <p>{{notes.estimatedHours}}</p>
      <p>{{notes.qualification}}</p>
      <p>{{notes.notes}}</p>
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
  props: {
    requestId: null,
  },

  data() {
    return {
      localRequestId: null,
      description: {

      },
      notes: {

      },
    };
  },

  created() {},
  mounted() {
    this.localRequestId = this.requestId;
    this.fetchLocalStoredRequest();
  },
  methods: {
    async postRequest() {
      RequestPostApi.fillStatus(this.requestId, requestPostStatusEnum.PUBLISHED)
        .then((response) => {
          this.localRequestId = response.data.requestId;
          requestPostUtils.fillRequestId(this.localRequestId);
          this.mnx_navToBuyerDashboard();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async fetchLocalStoredRequest() {
      if (this.localRequestId != null && this.localRequestId != "null") {
        this.description = requestPostUtils.fetchDescription();
        this.notes = requestPostUtils.fetchNotes();

        console.log(this.description);
        console.log(this.notes);
      }
    },

    modifyDescription() {
      this.mnx_navToPostRequestDescription(this.localRequestId);
    },

    modifyNotes() {
      this.mnx_navToPostRequestNote(this.localRequestId);
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
