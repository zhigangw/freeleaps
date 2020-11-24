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
import { RequestPostApi } from "../../../utils/index";

export default {
  name: "PostRequestDescription",
  props: {
    requestId: null,
  },

  data() {
    return {
      problemStatement: null,
      deliverables: null,
      criteria: null,
    };
  },

  created() {},
  mounted() {
    this.fetchDescription()
  },
  methods: {
    goNext() {
      this.mnx_navToPostRequestNote(this.requestId);
    },
    async fetchRequest() {
      if (this.requestId != null) {
        RequestPostApi.fetchDescription(requestId)
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
        this.problemStatement,
        this.deliverables,
        this.criteria
      )
        .then((response) => {
          this.requestId = response.data.requestId;
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
