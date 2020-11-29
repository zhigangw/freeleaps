<template>
  <div>
    <h1>PostProjectDescription</h1>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="problem-statement">Problem Statement(as the title)</label>
        <textarea id="problem-statement" v-model.trim="description.problemStatement" />
      </div>
      <div class="form-control">
        <label for="deliverables">Deliverables</label>
        <textarea id="deliverables" v-model.trim="description.deliverables" />
      </div>
      <div class="form-control">
        <label for="criteria">Criteria</label>
        <textarea id="criteria" v-model.trim="description.criteria" />
      </div>>
      <button type="submit">Next</button>
    </form>
  </div>
</template>

<script>
import { RequestPostApi, requestPostUtils } from "../../utils/index";
import { requestPostSkeleton } from "../../types/index";

export default {
  name: "PostRequestDescription",
  props: {
    requestId: null,
  },

  data() {
    return {
      localRequestId: null,
      description: requestPostSkeleton.description,
    };
  },

  created() {},
  mounted() {
    this.localRequestId = this.requestId;
    this.fetchLocalStoredDescription();
  },
  methods: {
    goNext() {
      this.mnx_navToPostRequestNote(this.localRequestId);
    },
    async fetchLocalStoredDescription() {
      if (
        this.localRequestId != null &&
        this.localRequestId != "null" &&
        this.localRequestId == requestPostUtils.fetchRequestId()
      ) {
        this.description = requestPostUtils.fetchDescription();
      }
    },

    async fetchDescription() {
      if (this.localRequestId != null) {
        RequestPostApi.fetchDescription(this.localRequestId)
          .then((response) => {
            this.description = response.data;})
          .catch((error) => {
            console.log(error);
          });
      }
    },
    async submitForm() {
      RequestPostApi.fillDescription(
        this.localRequestId,
        this.description
      )
        .then((response) => {
          this.localRequestId = response.data.requestId;
          requestPostUtils.fillRequestId(this.localRequestId);
          requestPostUtils.fillDescription(this.description);
          this.goNext();
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
