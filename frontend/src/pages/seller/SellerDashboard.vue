<template>
  <div>
    <h1>SellerDashboard</h1>
    <button @click="gotoProjectView">Project Details</button>
    <button @click="gotoEarnings">Earnings</button>
    <button @click="gotoTransferMoney">Transfer Money</button>
  </div>
</template>

<script>
import {
  SellerProfileApi,
  RequestQuoteApi,
  PojectManagerApi,
} from "../../utils/index";

export default {
  name: "SellerDashboard",
  props: {},

  data() {
    return {
      projects: [],
      quotes: [],
      requests: [],
    };
  },

  created() {},
  mounted() {
    this.fetchMyProjects();
    this.fetchMyOpenQuotes();
    this.fetchSavedRequests();
  },
  methods: {
    gotoProjectView() {
      this.mnx_navToSellerProjectView();
    },
    gotoEarnings() {
      this.mnx_navToSellerEarnings();
    },
    gotoTransferMoney() {
      this.mnx_navToSellerTransferMoney();
    },

    async fetchMyProjects() {
      PojectManagerApi.fetchForProvider()
        .then((response) => {
          this.projects = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async fetchSavedRequests() {
      SellerProfileApi.fetchSavedRequests()
        .then((response) => {
          this.requests = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async fetchMyOpenQuotes() {
      RequestQuoteApi.fetchOpen()
        .then((response) => {
          this.quotes = response.data;
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
