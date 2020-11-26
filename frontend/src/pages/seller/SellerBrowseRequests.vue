<template>
  <div>
    <h1>SellerMarketplace</h1>
    <table>
      <tr v-for="post in postList" :key="post.requestId">
        <td>{{post.description.problemStatement}}</td>
        <td>
          <button :id="post.requestId" @click="viewRequest($event)">Details</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { RequestPostApi } from "../../utils/index";

export default {
  name: "SellerMarketplace",
  props: {},

  data() {
    return {
      postList: [],
    };
  },

  created() {},
  mounted() {
    this.fetchAllPublishedPostSummary();
  },
  methods: {
    viewDetail() {
      this.mnx_navToSellerBuyerRequestView();
    },
    async fetchAllPublishedPostSummary() {
      RequestPostApi.fetchAllPublishedAsSummary()
        .then((response) => {
          this.postList = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    viewRequest(event) {
      let requestId = event.currentTarget.id;
      this.mnx_navToSellerBuyerRequestView(requestId);
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
