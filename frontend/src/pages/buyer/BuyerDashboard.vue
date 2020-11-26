<template>
  <div>
    <h1>BuyerDashboard</h1>
    <table>
      <tr v-for="post in postList" :key="post.requestId">
        <td>{{post.description.problemStatement}}</td>
        <td>
          <button :id="post.requestId" @click="viewProject($event)">Details</button>
        </td>
      </tr>
    </table>
    <button @click="postProject">Post a Request</button>
  </div>
</template>

<script>
import { RequestPostApi } from "../../utils/index";
import { requestPostStatusEnum } from "../../types/index";

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
    this.fetchMyAllPostSummary();
  },
  methods: {
    postProject() {
      this.mnx_navToPostRequestDescription(null);
    },
    viewProject(event) {
      let requestId = event.currentTarget.id;
      let request = this.postList.filter(function (x) {
        return x.requestId == requestId;
      });
      if (request.status == requestPostStatusEnum.DRAFT) {
        this.mnx_navToPostRequestReview(requestId);
      } else if (request.status == requestPostStatusEnum.PUBLISHED) {
        this.mnx_navToBuyerRequestView(requestId);
      } else {
        this.mnx_navToBuyerProjectView(requestId);
      }
    },
    async fetchMyAllPostSummary() {
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
