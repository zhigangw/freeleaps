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
    postProject() {
      this.mnx_navToPostRequestDescription(null);
    },
    viewProject(event) {
      let requestId = event.currentTarget.id;
      let request = this.postList.filter(function (x) {
        return x.requestId == requestId;
      })[0];
      if (request.status == requestPostStatusEnum.DRAFT) {
        this.mnx_navToPostRequestReview(requestId);
      } else if (request.status === requestPostStatusEnum.PUBLISHED) {
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
          if (error.response) {
            // Request made and server responded
            if (error.response.status === 403) {
              this.mnx_unauthenticatedUser();
              this.mnx_navToFrontDoor();
            } else {
              console.error(error);
            }
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
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
