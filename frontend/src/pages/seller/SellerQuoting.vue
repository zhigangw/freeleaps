<template>
  <div>
    <h1>SellerQuoting</h1>
    <button @click="saveRequest">Save</button>
    <button @click="applyForRequest">Apply</button>
    <button @click="cancelAndBack">Cancel</button>
  </div>
</template>

<script>
export default {
  name: "SellerQuoting",
  props: {},

  data() {
    return {};
  },

  created() {},
  mounted() {},
  methods: {
    saveRequest() {
      //TODO
    },

    applyForRequest() {
      //TODO
    },

    cancelAndBack(){
      this.mnx_navToSellerBuyerRequestView();
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
