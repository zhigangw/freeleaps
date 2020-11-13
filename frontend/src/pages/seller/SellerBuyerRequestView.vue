<template>
  <div>
    <h1>SellerBuyerRequestView</h1>
    <button @click="browseRequests">Back</button>
    <button @click="saveRequest">Save for later</button>
    <button @click="applyForRequest">Apply</button>
  </div>
</template>

<script>
export default {
  name: "SellerBuyerRequestView",
  props: {},

  data() {
    return {};
  },

  created() {},
  mounted() {},
  methods: {
    browseRequests() {
      this.mnx_navToSellerBrowseRequests();
    },

    saveRequest() {
      //TODO
    },
    
    applyForRequest() {
      this.mnx_navToSellerApplyRequest();
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
