<template>
  <div>
    <h1>BuyerDashboard</h1>
    <table>
      <tr v-for="post in postList" :key="post.requestId">
        <td>{{post.description.problemStatement}}</td>
      </tr>
    </table>
    <button @click="postProject">Post a Request</button>
    <button @click="viewProject">Project Details</button>
  </div>
</template>

<script>
import { RequestPostApi } from "../../utils/index";

export default {
  name: "BuyerDashboard",
  props: {},

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
      this.mnx_navToPostRequestDescription(null);
    },
    viewProject() {
      this.mnx_navToBuyerProjectView();
    },
    async fetchAllPostSummary() {
      RequestPostApi.fetchMineAsSummary()
        .then((response) => {
          this.postList = response.data;
        })
        .catch((error) => {
          console.error(error);
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
