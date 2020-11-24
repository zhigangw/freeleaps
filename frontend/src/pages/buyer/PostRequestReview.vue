<template>
  <div>
    <h1>PostProjectReview</h1>
    <button type="button" @click="modifyDescription">Description</button>
    <button type="button" @click="modifyNotes">Notes</button>
    <button type="button" @click="postRequest">Post Now</button>
  </div>
</template>

<script>
export default {
  name: "PostRequestReview",
  props: {
    requestId: null,
  },

  data() {
    return {};
  },

  created() {},
  mounted() {},
  methods: {
    postRequest() {
      this.mnx_navToBuyerDashboard();
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
