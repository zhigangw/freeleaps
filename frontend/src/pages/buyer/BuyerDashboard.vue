<template>
  <div>
    <h1>BuyerDashboard</h1>
    <button @click="postProject">Post a Request</button>
    <button @click="viewProject">Project Details</button>
  </div>
</template>

<script>
export default {
  name: "BuyerDashboard",
  props: {},

  data() {
    return {};
  },

  created() {},
  mounted() {},
  methods: {
    postProject() {
      this.mnx_navToPostRequestDescription();
    },
    viewProject() {
      this.mnx_navToBuyerProjectView();
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
