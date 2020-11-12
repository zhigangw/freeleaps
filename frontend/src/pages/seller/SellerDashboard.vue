<template>
  <div>
    <h1>SellerDashboard</h1>
    <button @click="gotoBrowseRequests">Requests</button>
    <button @click="gotoProjectView">Project Details</button>
    <button @click="gotoEarnings">Earnings</button>
    <button @click="gotoTransferMoney">Transfer Money</button>
  </div>
</template>

<script>
export default {
  name: "SellerDashboard",
  props: {},

  data() {
    return {};
  },

  created() {},
  mounted() {},
  methods: {
    gotoBrowseRequests() {
      this.mnx_navToSellerBrowseRequests();
    },
    gotoProjectView() {
      this.mnx_navToSellerProjectView();
    },
    gotoEarnings() {
      this.mnx_navToSellerEarnings();
    },
    gotoTransferMoney() {
      this.mnx_navToSellerTransferMoney();
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
