<template>
  <div>
    <h1>PostProjectDescription</h1>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="problem-statement">Problem Statement(as the title)</label>
        <input type="text" id="problem-statement" v-model.trim="problemStatement" />
      </div>
      <div class="form-control">
        <label for="deliverables">Deliverables</label>
        <input type="text" id="deliverables" v-model.trim="deliverables" />
      </div>
      <div class="form-control">
        <label for="criteria">Criteria</label>
        <input type="text" id="criteria" v-model.trim="criteria" />
      </div>>
      <button type="submit">Next</button>
    </form>
  </div>
</template>

<script>
import { RequestPostApi, requestPostUtils } from "../../utils/index";

export default {
  name: "PostRequestDescription",
  props: {
    requestId: null,
  },

  data() {
    return {
      localRequestId: null,
      problemStatement: null,
      deliverables: null,
      criteria: null,
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
        let description = requestPostUtils.fetchDescription();
        this.problemStatement = description.problemStatement;
        this.deliverables = description.deliverables;
        this.criteria = description.criteria;
      }
    },

    async fetchDescription() {
      if (this.localRequestId != null) {
        RequestPostApi.fetchDescription(this.localRequestId)
          .then((response) => {
            this.problemStatement = response.data.problemStatement;
            this.deliverables = response.data.deliverables;
            this.criteria = response.data.criteria;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    async submitForm() {
      RequestPostApi.fillDescription(
        this.localRequestId,
        this.problemStatement,
        this.deliverables,
        this.criteria
      )
        .then((response) => {
          this.localRequestId = response.data.requestId;
          requestPostUtils.fillRequestId(this.localRequestId);
          requestPostUtils.fillDescription({
            problemStatement: this.problemStatement,
            deliverables: this.deliverables,
            criteria: this.criteria,
          });
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
